import { chromium } from "file:///C:/Users/MSi/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright/index.mjs";
import fs from "fs";
import path from "path";
import http from "http";
import { pathToFileURL } from "url";

const VIEWPORTS = [
  { name: "mobile-small-375x667", width: 375, height: 667 },
  { name: "mobile-medium-390x844", width: 390, height: 844 },
  { name: "mobile-large-430x932", width: 430, height: 932 },
  { name: "tablet-portrait-768x1024", width: 768, height: 1024 },
  { name: "tablet-landscape-1024x1366", width: 1024, height: 1366 },
  { name: "desktop-laptop-1440x900", width: 1440, height: 900 },
  { name: "desktop-fhd-1920x1080", width: 1920, height: 1080 },
];

const ROUTES = [
  { path: "/", name: "homepage" },
  { path: "/about", name: "about" },
  { path: "/bio-silica", name: "bio-silica" },
  { path: "/cbg", name: "cbg" },
  { path: "/saf", name: "saf" },
  { path: "/feedstock", name: "feedstock" },
  { path: "/projects", name: "projects" },
  { path: "/vision", name: "vision" },
  { path: "/contact", name: "contact" },
  { path: "/privacy-policy", name: "privacy-policy" },
];

const BASE_URL = "http://localhost:3007";
const EVIDENCE_DIR = path.resolve(process.cwd(), ".playwright-cli/remediation-verification");

if (!fs.existsSync(EVIDENCE_DIR)) {
  fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
}

async function runBrowserVerification() {
  console.log("=== STARTING BROWSER VERIFICATION ACROSS 7 VIEWPORTS ===");
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const results = {
    testedViewports: VIEWPORTS.length,
    testedRoutes: ROUTES.length,
    consoleErrors: [],
    checksPassed: [],
    checksFailed: [],
  };

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\nTesting Viewport: ${vp.name} (${vp.width}x${vp.height})`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();

      // Collect console errors
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          results.consoleErrors.push({
            viewport: vp.name,
            text: msg.text(),
            location: msg.location(),
          });
        }
      });

      // 1. Inspect Homepage
      await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
      const homepageTitle = await page.title();
      console.log(`  [Home] Title: "${homepageTitle}"`);

      // Verify Hero pause button
      const pauseBtn = await page.$('button[aria-label*="automated slide progression"]');
      if (pauseBtn) {
        results.checksPassed.push(`[${vp.name}] Hero pause button rendered`);
        // Test clicking pause
        await pauseBtn.click();
        const ariaPressed = await pauseBtn.getAttribute("aria-pressed");
        if (ariaPressed === "true") {
          results.checksPassed.push(`[${vp.name}] Hero pause button state toggled correctly to aria-pressed="true"`);
        }
      } else {
        results.checksFailed.push(`[${vp.name}] Hero pause button missing`);
      }

      // Verify Section Numbering sequence
      const pageText = await page.content();
      const hasSec1 = pageText.includes("01 / CORPORATE OVERVIEW");
      const hasSec2 = pageText.includes("02 / NATIONAL PERSPECTIVE");
      const hasSec3 = pageText.includes("03 / STRATEGIC PRIORITIES");
      const hasSec4 = pageText.includes("04 / ENVIRONMENTAL STEWARDSHIP");
      const hasSec5 = pageText.includes("05 / INTEGRATED INDUSTRIAL WORKSTREAMS");

      if (hasSec1 && hasSec2 && hasSec3 && hasSec4 && hasSec5) {
        results.checksPassed.push(`[${vp.name}] Section numbering sequence 01-05 verified complete`);
      } else {
        results.checksFailed.push(`[${vp.name}] Section numbering incomplete: Sec1=${hasSec1}, Sec2=${hasSec2}, Sec3=${hasSec3}, Sec4=${hasSec4}, Sec5=${hasSec5}`);
      }

      // Verify Legal Entity Name singular in footer
      const hasSingularFooter = pageText.includes("Rivanta Green Innovative Venture Pvt. Ltd.");
      const hasNoPluralVentures = !pageText.includes("Rivanta Green Innovative Ventures Pvt. Ltd.");
      if (hasSingularFooter && hasNoPluralVentures) {
        results.checksPassed.push(`[${vp.name}] Footer legal entity name verified singular ("Venture")`);
      } else {
        results.checksFailed.push(`[${vp.name}] Footer legal name verification failed`);
      }

      // Take screenshot of homepage
      const screenshotPath = path.join(EVIDENCE_DIR, `home-${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`  [Screenshot] Saved ${screenshotPath}`);

      // 2. Test Partner Modal Focus Trap (on desktop viewport)
      if (vp.width === 1440) {
        const partnerBtn = await page.$('button[aria-label*="Work with us"]');
        if (partnerBtn) {
          await partnerBtn.scrollIntoViewIfNeeded();
          await partnerBtn.click();
          await page.waitForTimeout(300);
          const modalDialog = await page.$('div[role="dialog"][aria-modal="true"]');
          if (modalDialog) {
            results.checksPassed.push("PartnerModal opened with role='dialog' and aria-modal='true'");
            // Press Escape to test focus restoration
            await page.keyboard.press("Escape");
            await page.waitForTimeout(300);
            const isModalClosed = (await page.$('div[role="dialog"]')) === null;
            if (isModalClosed) {
              results.checksPassed.push("PartnerModal closed cleanly on Escape");
            } else {
              results.checksFailed.push("PartnerModal did not close on Escape key press");
            }
          } else {
            results.checksFailed.push("PartnerModal dialog failed to open upon clicking 'Work with us' trigger");
          }
        } else {
          results.checksFailed.push("PartnerModal trigger button ('Work with us') not found in Footer");
        }
      }

      await context.close();
    }

    // 3. Inspect All Routes for Console Errors & Proper Rendering
    console.log("\n=== TESTING ALL 10 ROUTES FOR STABILITY & TITLE ACCURACY ===");
    const routeContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const routePage = await routeContext.newPage();

    for (const r of ROUTES) {
      await routePage.goto(`${BASE_URL}${r.path}`, { waitUntil: "networkidle" });
      const title = await routePage.title();
      console.log(`  Route ${r.path} -> Title: "${title}"`);
      const routeScreenshot = path.join(EVIDENCE_DIR, `route-${r.name}.png`);
      await routePage.screenshot({ path: routeScreenshot, fullPage: false });

      // Check for legal name in rendered page
      const content = await routePage.content();
      if (content.includes("Rivanta Green Innovative Ventures Private Limited")) {
        results.checksFailed.push(`Route ${r.path} contains residual plural 'Ventures'`);
      } else {
        results.checksPassed.push(`Route ${r.path} verified clean of plural entity name`);
      }
    }

    await routeContext.close();

    // 4. Hero Hydration & Motion Dynamics (Standard vs Reduced Motion)
    console.log("\n=== TESTING HERO HYDRATION & MOTION ACCESSIBILITY ===");

    // Test 4A: Normal Motion (no-preference)
    const normalCtx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "no-preference",
    });
    const normalPage = await normalCtx.newPage();
    const normalConsoleErrors = [];
    normalPage.on("console", (msg) => {
      if (msg.type() === "error") normalConsoleErrors.push(msg.text());
    });
    normalPage.on("pageerror", (err) => normalConsoleErrors.push(err.message));

    await normalPage.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    const normalBtnState = await normalPage.evaluate(() => {
      const btn = document.querySelector("#hero button[aria-pressed]");
      return {
        label: btn?.getAttribute("aria-label"),
        pressed: btn?.getAttribute("aria-pressed"),
      };
    });

    if (normalBtnState.pressed === "false" && normalBtnState.label?.includes("Pause")) {
      results.checksPassed.push("Hero normal motion: Initial playback active (aria-pressed='false')");
    } else {
      results.checksFailed.push(`Hero normal motion: Unexpected initial state: ${JSON.stringify(normalBtnState)}`);
    }

    if (normalConsoleErrors.length === 0) {
      results.checksPassed.push("Hero normal motion: Zero hydration errors");
    } else {
      results.checksFailed.push(`Hero normal motion errors: ${normalConsoleErrors.join("; ")}`);
    }

    // Test toggle click
    await normalPage.click("#hero button[aria-pressed]");
    const pausedBtnState = await normalPage.evaluate(() => {
      const btn = document.querySelector("#hero button[aria-pressed]");
      return {
        label: btn?.getAttribute("aria-label"),
        pressed: btn?.getAttribute("aria-pressed"),
      };
    });
    if (pausedBtnState.pressed === "true" && pausedBtnState.label?.includes("Resume")) {
      results.checksPassed.push("Hero normal motion: Manual pause toggle verified (aria-pressed='true')");
    } else {
      results.checksFailed.push(`Hero normal motion: Pause toggle failed: ${JSON.stringify(pausedBtnState)}`);
    }
    await normalCtx.close();

    // Test 4B: Reduced Motion (reduce) - Testing for React Hydration Error #418!
    const reducedCtx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "reduce",
    });
    const reducedPage = await reducedCtx.newPage();
    const reducedErrors = [];
    reducedPage.on("console", (msg) => {
      const text = msg.text();
      if (text.includes("Hydrat") || text.includes("418") || text.includes("mismatch") || msg.type() === "error") {
        reducedErrors.push(`[Console ${msg.type()}] ${text}`);
      }
    });
    reducedPage.on("pageerror", (err) => reducedErrors.push(`[PageError] ${err.message}`));

    await reducedPage.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    const reducedBtnState = await reducedPage.evaluate(() => {
      const btn = document.querySelector("#hero button[aria-pressed]");
      return {
        label: btn?.getAttribute("aria-label"),
        pressed: btn?.getAttribute("aria-pressed"),
      };
    });

    if (reducedBtnState.pressed === "true" && reducedBtnState.label?.includes("Resume")) {
      results.checksPassed.push("Hero reduced motion: Defaults to paused after hydration (aria-pressed='true')");
    } else {
      results.checksFailed.push(`Hero reduced motion: Unexpected initial state: ${JSON.stringify(reducedBtnState)}`);
    }

    if (reducedErrors.length === 0) {
      results.checksPassed.push("Hero reduced motion: Zero React Error #418 / hydration mismatch errors");
    } else {
      results.checksFailed.push(`Hero reduced motion hydration failure: ${reducedErrors.join("; ")}`);
    }

    // Test manual resume under reduced motion
    await reducedPage.click("#hero button[aria-pressed]");
    const resumedBtnState = await reducedPage.evaluate(() => {
      const btn = document.querySelector("#hero button[aria-pressed]");
      return {
        label: btn?.getAttribute("aria-label"),
        pressed: btn?.getAttribute("aria-pressed"),
      };
    });
    if (resumedBtnState.pressed === "false" && resumedBtnState.label?.includes("Pause")) {
      results.checksPassed.push("Hero reduced motion: Manual resume toggle verified (aria-pressed='false')");
    } else {
      results.checksFailed.push(`Hero reduced motion: Resume toggle failed: ${JSON.stringify(resumedBtnState)}`);
    }
    await reducedCtx.close();

    // 5. Inquiry Server Action Automated Regression Tests
    console.log("\n=== TESTING INQUIRY SERVER ACTION WITH LOCAL MOCKS ===");
    const inquiryModulePath = pathToFileURL(path.resolve(process.cwd(), "src/app/actions/inquiry.ts")).href;
    const { submitInquiry } = await import(inquiryModulePath);

    const testPayload = {
      name: "Dr. Vikram Seth",
      email: "vikram.seth@cleanfuel-industrial.org",
      org: "Industrial Decarbonization Initiative",
      sector: "Sustainable Aviation Fuels (SAF)",
      message: "Consultation regarding high-volume SAF distribution.",
    };

    // 5A: Unconfigured Environment (Fail-Closed Check)
    delete process.env.INQUIRY_FORWARD_WEBHOOK_URL;
    delete process.env.RESEND_API_KEY;
    const unconfiguredRes = await submitInquiry(testPayload);
    if (!unconfiguredRes.success && unconfiguredRes.message.includes("info@rivantagreen.com")) {
      results.checksPassed.push("Inquiry action: Unconfigured environment fails closed with direct email fallback");
    } else {
      results.checksFailed.push(`Inquiry action: Expected fail-closed for unconfigured env, got: ${JSON.stringify(unconfiguredRes)}`);
    }

    // 5B: Local Mock Webhook Tests
    const mockServer = http.createServer((req, res) => {
      if (req.url === "/mock-ok") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "accepted" }));
      } else if (req.url === "/mock-err") {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Upstream Error" }));
      }
    });
    await new Promise((resolve) => mockServer.listen(3099, resolve));

    try {
      // 5C: Webhook 200 OK
      process.env.INQUIRY_FORWARD_WEBHOOK_URL = "http://localhost:3099/mock-ok";
      const webhookOkRes = await submitInquiry({
        ...testPayload,
        email: "vikram.seth.ok@cleanfuel-industrial.org",
      });
      if (webhookOkRes.success && webhookOkRes.referenceId?.startsWith("RG-")) {
        results.checksPassed.push("Inquiry action: Webhook 200 OK returns success with RG- reference ID");
      } else {
        results.checksFailed.push(`Inquiry action: Webhook 200 OK failed: ${JSON.stringify(webhookOkRes)}`);
      }

      // 5D: Webhook 500 Error
      process.env.INQUIRY_FORWARD_WEBHOOK_URL = "http://localhost:3099/mock-err";
      const webhookErrRes = await submitInquiry({
        ...testPayload,
        email: "vikram.seth.err@cleanfuel-industrial.org",
      });
      if (!webhookErrRes.success && webhookErrRes.message.includes("info@rivantagreen.com")) {
        results.checksPassed.push("Inquiry action: Webhook 500 Error returns safe failure without leaking details");
      } else {
        results.checksFailed.push(`Inquiry action: Webhook 500 Error failed: ${JSON.stringify(webhookErrRes)}`);
      }

      // 5E: Network Connection Refused
      process.env.INQUIRY_FORWARD_WEBHOOK_URL = "http://localhost:3098/dead-endpoint";
      const networkErrRes = await submitInquiry({
        ...testPayload,
        email: "vikram.seth.dead@cleanfuel-industrial.org",
      });
      if (!networkErrRes.success && networkErrRes.message.includes("transmission error")) {
        results.checksPassed.push("Inquiry action: Network failure returns safe transmission error");
      } else {
        results.checksFailed.push(`Inquiry action: Network failure failed: ${JSON.stringify(networkErrRes)}`);
      }

      // 5F: Honeypot Anti-Spam
      const honeypotRes = await submitInquiry({
        ...testPayload,
        email: "bot@spam-network.biz",
        honeypot: "spam_token_123",
      });
      if (honeypotRes.success && honeypotRes.message === "Inquiry received.") {
        results.checksPassed.push("Inquiry action: Honeypot silently discards bot submission");
      } else {
        results.checksFailed.push(`Inquiry action: Honeypot failed: ${JSON.stringify(honeypotRes)}`);
      }

      // 5G: Duplicate Replay Suppression
      process.env.INQUIRY_FORWARD_WEBHOOK_URL = "http://localhost:3099/mock-ok";
      const dup1 = await submitInquiry({
        ...testPayload,
        email: "replay.test@cleanfuel-industrial.org",
      });
      const dup2 = await submitInquiry({
        ...testPayload,
        email: "replay.test@cleanfuel-industrial.org",
      });
      if (dup1.success && !dup2.success && dup2.message.includes("duplicate inquiry")) {
        results.checksPassed.push("Inquiry action: In-instance rapid duplicate replay suppressed");
      } else {
        results.checksFailed.push(`Inquiry action: Duplicate replay failed: dup1=${JSON.stringify(dup1)}, dup2=${JSON.stringify(dup2)}`);
      }
    } finally {
      mockServer.close();
      delete process.env.INQUIRY_FORWARD_WEBHOOK_URL;
      delete process.env.RESEND_API_KEY;
    }
  } finally {
    await browser.close();
  }

  console.log("\n=== BROWSER VERIFICATION SUMMARY ===");
  console.log(`Total Checks Passed: ${results.checksPassed.length}`);
  console.log(`Total Checks Failed: ${results.checksFailed.length}`);
  console.log(`Total Console Errors: ${results.consoleErrors.length}`);

  if (results.checksFailed.length > 0) {
    console.error("FAILURES DETECTED:", results.checksFailed);
  }
  if (results.consoleErrors.length > 0) {
    console.error("CONSOLE ERRORS:", results.consoleErrors);
  }

  return results;
}

runBrowserVerification()
  .then((res) => {
    if (res.checksFailed.length === 0 && res.consoleErrors.length === 0) {
      console.log("\n>>> ALL TESTS PASSED WITH ZERO REGRESSIONS <<<");
      process.exit(0);
    } else {
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error("Test execution fatal error:", err);
    process.exit(1);
  });
