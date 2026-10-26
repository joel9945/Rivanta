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
  errors?: Record<string, string>;
}

const ALLOWED_SECTORS = [
  "Green Silicon For Chips (9N Purity)",
  "Bio-Silica Manufacturing (Flagship)",
  "Compressed Biogas (CBG)",
  "Sustainable Aviation Fuel (SAF)",
  "Feedstock Sourcing & Supply",
  "Renewable Energy Infrastructure",
  "Industrial Decarbonization",
  "Regenerative Bio-Ventures",
  "Capital & Joint Venture Structuring",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(data: InquiryInput): Promise<InquiryResult> {
  // 1. Anti-spam bot trap: if honeypot is filled, silently discard without alerting spammer
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Inquiry received.",
    };
  }

  const errors: Record<string, string> = {};

  // 2. Validate Full Name
  const trimmedName = (data.name || "").trim();
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
  const trimmedOrg = (data.org || "").trim();
  if (!trimmedOrg || trimmedOrg.length < 2) {
    errors.org = "Organization name must be at least 2 characters.";
  } else if (trimmedOrg.length > 120) {
    errors.org = "Organization name cannot exceed 120 characters.";
  }

  // 5. Validate Sector
  if (!ALLOWED_SECTORS.includes(data.sector)) {
    errors.sector = "Please select a valid domain sector.";
  }

  // 6. Validate Message (optional, but bounded)
  const trimmedMessage = (data.message || "").trim();
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

  // Log in production-safe structured format (never expose secrets or untrusted raw data)
  console.info("[Inquiry Submitted]", {
    timestamp: new Date().toISOString(),
    organization: trimmedOrg,
    sector: data.sector,
    emailDomain: trimmedEmail.split("@")[1],
  });

  return {
    success: true,
    message: "Thank you for connecting with Rivanta Green. Our technical team has received your parameters.",
  };
}
