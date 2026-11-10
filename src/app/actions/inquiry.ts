"use server";

export interface InquiryInput {
  name: string;
  email: string;
  org: string;
  sector: string;
  message?: string;
  honeypot?: string; // anti-spam bot trap
}

export interface InquiryResult {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string>;
}

const ALLOWED_SECTORS = [
  "Advanced Materials & Biogenic Silica",
  "Compressed Biogas (CBG)",
  "Sustainable Aviation Fuels (SAF)",
  "Feedstock Sourcing & Logistics",
  "Renewable Energy & Infrastructure",
  "Strategic Partnerships & Development",
  "General Corporate Engagement",
];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Generate a unique, traceable enterprise inquiry reference ID
 * Example format: RG-LX9ABC-1234
 */
function generateReferenceId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `RG-${timestamp}-${randomSuffix}`;
}

/**
 * Mask email address for privacy compliance in server logging (DPDP Act, 2023 / GDPR)
 */
function maskEmail(email: string): string {
  const [localPart, domain] = email.split("@");
  if (!domain) return "***";
  const maskedLocal = localPart.length > 2
    ? `${localPart[0]}***${localPart[localPart.length - 1]}`
    : `${localPart[0] || "*"}***`;
  return `${maskedLocal}@${domain}`;
}

/**
 * In-instance cache for immediate duplicate suppression (15-second debounce window per email + sector).
 * Recorded only upon verified successful dispatch so failed attempts can be retried immediately.
 * Note: Distributed rate limiting across serverless instances requires edge middleware (e.g. Vercel WAF).
 */
const recentSubmissions = new Map<string, number>();

function isRecentDuplicate(fingerprint: string): boolean {
  const now = Date.now();
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 60000) {
      recentSubmissions.delete(key);
    }
  }
  const lastSeen = recentSubmissions.get(fingerprint);
  return !!(lastSeen && now - lastSeen < 15000);
}

function recordSuccessfulSubmission(fingerprint: string): void {
  recentSubmissions.set(fingerprint, Date.now());
}

/**
 * Server Action for Processing Contact and Partnership Inquiries
 * Ensures reliable server-side validation, privacy-preserving audit logging,
 * and verified external webhook / Resend email dispatch with fail-closed error handling.
 */
export async function submitInquiry(data: InquiryInput): Promise<InquiryResult> {
  // 1. Anti-spam bot trap: silently discard bot submissions without leaking trigger
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Inquiry received.",
      referenceId: generateReferenceId(),
    };
  }

  const errors: Record<string, string> = {};

  // 2. Validate Full Name (clean control chars)
  const trimmedName = (data.name || "").replace(/[\x00-\x1F\x7F]/g, "").trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.name = "Full name must be at least 2 characters.";
  } else if (trimmedName.length > 100) {
    errors.name = "Full name cannot exceed 100 characters.";
  }

  // 3. Validate Corporate Email
  const trimmedEmail = (data.email || "").trim().toLowerCase();
  if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Please provide a valid corporate email address.";
  } else if (trimmedEmail.length > 120) {
    errors.email = "Email address cannot exceed 120 characters.";
  }

  // 4. Validate Organization / Entity
  const trimmedOrg = (data.org || "").replace(/[\x00-\x1F\x7F]/g, "").trim();
  if (!trimmedOrg || trimmedOrg.length < 2) {
    errors.org = "Organization name must be at least 2 characters.";
  } else if (trimmedOrg.length > 120) {
    errors.org = "Organization name cannot exceed 120 characters.";
  }

  // 5. Validate Sector
  if (!ALLOWED_SECTORS.includes(data.sector)) {
    errors.sector = "Please select a valid domain sector.";
  }

  // 6. Validate Message (optional, bounded)
  const trimmedMessage = (data.message || "").replace(/[\x00-\x09\x0B-\x1F\x7F]/g, "").trim();
  if (trimmedMessage.length > 2000) {
    errors.message = "Message cannot exceed 2000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors.",
      errors,
    };
  }

  // Duplicate replay suppression (15-second debounce window)
  const submissionFingerprint = `${trimmedEmail}:${data.sector}`;
  if (isRecentDuplicate(submissionFingerprint)) {
    return {
      success: false,
      message: "A duplicate inquiry was recently received from your organization. Please allow our team time to review before resubmitting.",
    };
  }

  const referenceId = generateReferenceId();
  const timestamp = new Date().toISOString();

  // Structured inquiry payload for transmission
  const inquiryPayload = {
    referenceId,
    timestamp,
    name: trimmedName,
    email: trimmedEmail,
    organization: trimmedOrg,
    sector: data.sector,
    message: trimmedMessage || "(No specific message provided)",
  };

  // Privacy-compliant structured audit logging (masks PII in cloud logs)
  console.info("[Inquiry Registered]", {
    referenceId,
    timestamp,
    maskedEmail: maskEmail(trimmedEmail),
    organization: trimmedOrg,
    sector: data.sector,
    hasMessage: trimmedMessage.length > 0,
    messageLength: trimmedMessage.length,
  });

  // Target destinations from environment
  const webhookUrl = process.env.INQUIRY_FORWARD_WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "info@rivantagreen.com";

  if (webhookUrl) {
    try {
      const parsedUrl = new URL(webhookUrl);
      const isProd = process.env.NODE_ENV === "production";
      if (parsedUrl.protocol !== "https:" && (!isProd ? parsedUrl.protocol !== "http:" : true)) {
        console.error(`[Inquiry Security Error] Ref: ${referenceId} Insecure protocol: ${parsedUrl.protocol}`);
        return {
          success: false,
          message: "Our inquiry dispatch service is temporarily unavailable. Please reach out to info@rivantagreen.com directly.",
          referenceId,
        };
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryPayload),
        signal: AbortSignal.timeout(6000),
      });

      if (!response.ok) {
        console.error(`[Inquiry Webhook Error] Ref: ${referenceId} HTTP ${response.status}`);
        return {
          success: false,
          message: "Our inquiry dispatch service is temporarily experiencing delays. Please reach out to info@rivantagreen.com directly.",
          referenceId,
        };
      }

      console.info(`[Inquiry Forwarded via Webhook] Ref: ${referenceId}`);
    } catch (err) {
      console.error(`[Inquiry Webhook Failure] Ref: ${referenceId}:`, err);
      return {
        success: false,
        message: "A transmission error occurred while routing your inquiry. Please try again or email info@rivantagreen.com directly.",
        referenceId,
      };
    }
  } else if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Rivanta Green Inquiries <inquiries@rivantagreen.com>",
          to: [notificationEmail],
          reply_to: trimmedEmail,
          subject: `[New Inquiry] ${trimmedOrg} — ${data.sector} (Ref: ${referenceId})`,
          text: `New commercial/partnership inquiry received via rivantagreen.com:\n\nReference: ${referenceId}\nTimestamp: ${timestamp}\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nOrganization: ${trimmedOrg}\nSector: ${data.sector}\n\nMessage:\n${trimmedMessage || "(None)"}\n`,
        }),
        signal: AbortSignal.timeout(6000),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        console.error(`[Inquiry Resend Error] Ref: ${referenceId} HTTP ${response.status}:`, errorText);
        return {
          success: false,
          message: "Our email notification service is temporarily unavailable. Please email your inquiry to info@rivantagreen.com.",
          referenceId,
        };
      }

      console.info(`[Inquiry Forwarded via Resend] Ref: ${referenceId}`);
    } catch (err) {
      console.error(`[Inquiry Resend Failure] Ref: ${referenceId}:`, err);
      return {
        success: false,
        message: "An error occurred while dispatching your inquiry. Please try again or email info@rivantagreen.com directly.",
        referenceId,
      };
    }
  } else {
    // Fail-closed: Never report false-positive success when dispatch providers are unconfigured
    console.error(
      `[Inquiry Unconfigured Dispatch] Ref: ${referenceId}. Neither RESEND_API_KEY nor INQUIRY_FORWARD_WEBHOOK_URL is configured in environment.`
    );
    return {
      success: false,
      message: "Our inquiry form is temporarily unavailable. Please email info@rivantagreen.com directly.",
      referenceId,
    };
  }

  // Record submission fingerprint only after verified provider dispatch to suppress rapid duplicate replays
  recordSuccessfulSubmission(submissionFingerprint);

  return {
    success: true,
    message: `Thank you for connecting with Rivanta Green. Your inquiry has been registered (Ref: ${referenceId}). Our team will follow up directly.`,
    referenceId,
  };
}
