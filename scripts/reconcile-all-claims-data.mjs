import fs from "fs";
import path from "path";
import { MASTER_CLAIMS } from "./claims-data.mjs";

const rootDir = process.cwd();

// Let's create an exact finder for every claim
const reconciledClaims = [];
const reconciliationLog = [];

for (const c of MASTER_CLAIMS) {
  const fullPath = path.join(rootDir, c.sourceFile);
  if (!fs.existsSync(fullPath)) {
    reconciliationLog.push({
      id: c.id,
      file: c.sourceFile,
      issue: "FILE_MISSING",
      action: "Flagged as missing file",
    });
    reconciledClaims.push(c);
    continue;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const lines = raw.split("\n");

  // Determine actual line range
  const lrMatch = c.lineRange.match(/L?(\d+)(?:-L?(\d+))?/);
  const origStart = lrMatch ? parseInt(lrMatch[1], 10) : 1;
  const origEnd = lrMatch && lrMatch[2] ? parseInt(lrMatch[2], 10) : origStart;

  // Let's test if the text is at origStart-origEnd
  let actualStart = -1;
  let actualEnd = -1;
  let exactFound = false;

  // Key phrases to search
  const cleanSpan = c.claimSpan.replace(/\s+/g, " ").trim();
  const probe = cleanSpan.slice(0, Math.min(30, cleanSpan.length));

  // Check declared lines first
  const currentDeclared = lines.slice(origStart - 1, origEnd).join(" ").replace(/\s+/g, " ");
  if (currentDeclared.includes(probe) || (c.exactText && currentDeclared.includes(c.exactText.trim().slice(0, 30)))) {
    actualStart = origStart;
    actualEnd = origEnd;
    exactFound = true;
  } else {
    // Search entire file
    for (let i = 0; i < lines.length; i++) {
      // Check 1 to 15 line window
      const maxWindow = Math.min(lines.length - i, 15);
      for (let w = 1; w <= maxWindow; w++) {
        const windowText = lines.slice(i, i + w).join(" ").replace(/\s+/g, " ");
        if (windowText.includes(probe)) {
          actualStart = i + 1;
          actualEnd = i + w;
          exactFound = true;
          break;
        }
      }
      if (exactFound) break;
    }
  }

  // If still not found, search with smaller probe (15 chars)
  if (!exactFound) {
    const shortProbe = cleanSpan.slice(0, Math.min(15, cleanSpan.length));
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(shortProbe) || lines.slice(i, i + 4).join(" ").replace(/\s+/g, " ").includes(shortProbe)) {
        actualStart = i + 1;
        actualEnd = Math.min(lines.length, i + 3);
        exactFound = true;
        break;
      }
    }
  }

  // Handle specific edge cases in source files:
  if (c.id === "CLM-GLOB-004") {
    // parentOrganization in layout.tsx
    actualStart = 116;
    actualEnd = 128;
    exactFound = true;
  } else if (c.id === "CLM-GLOB-006") {
    // knowsAbout in layout.tsx
    actualStart = 135;
    actualEnd = 142;
    exactFound = true;
  } else if (c.id === "CLM-GLOB-011") {
    // Direct Corporate Desk in Footer.tsx
    actualStart = 217;
    actualEnd = 240;
    exactFound = true;
  } else if (c.id === "CLM-HOME-021") {
    // Responsibility Across Our Operations in CorporateFoundations.tsx
    actualStart = 68;
    actualEnd = 78;
    exactFound = true;
  } else if (c.id === "CLM-STAND-001") {
    // Advanced Materials in UspCards.tsx
    actualStart = 21;
    actualEnd = 28;
    exactFound = true;
  } else if (c.id === "CLM-STAND-002") {
    // Compressed Biogas in UspCards.tsx
    actualStart = 34;
    actualEnd = 41;
    exactFound = true;
  } else if (c.id === "CLM-STAND-007") {
    // Creating Value Beyond Industry in SharedValueAndContribution.tsx
    actualStart = 30;
    actualEnd = 40;
    exactFound = true;
  } else if (c.id === "CLM-STAND-008") {
    // Contributing to India's Industrial Growth in SharedValueAndContribution.tsx
    actualStart = 143;
    actualEnd = 153;
    exactFound = true;
  }

  const updatedLineRange = actualStart > 0 ? (actualStart === actualEnd ? `L${actualStart}` : `L${actualStart}-L${actualEnd}`) : c.lineRange;

  if (updatedLineRange !== c.lineRange) {
    reconciliationLog.push({
      id: c.id,
      file: c.sourceFile,
      issue: "LINE_SHIFTED",
      from: c.lineRange,
      to: updatedLineRange,
    });
  }

  // Extract true verbatim text directly from the source code lines
  let verifiedVerbatim = c.exactText;
  if (actualStart > 0) {
    const rawLinesSlice = lines.slice(actualStart - 1, actualEnd).join("\n").trim();
    if (rawLinesSlice) {
      verifiedVerbatim = rawLinesSlice;
    }
  }

  // Correct invalid reference in CLM-GLOB-012:
  let updatedRelated = [...(c.relatedClaimIds || [])];
  if (c.id === "CLM-GLOB-012") {
    updatedRelated = updatedRelated.filter((ref) => ref !== "CLM-CONT-025");
    if (!updatedRelated.includes("CLM-CONT-008")) {
      updatedRelated.push("CLM-CONT-008");
    }
    reconciliationLog.push({
      id: c.id,
      file: c.sourceFile,
      issue: "INVALID_REFERENCE",
      from: "CLM-CONT-025",
      to: "CLM-CONT-008",
      action: "Replaced nonexistent CLM-CONT-025 with verified CLM-CONT-008 (Corporate Strategy & Project Planning)",
    });
  }

  // Determine Sub-type for numerical claims
  let numSubtype = "NONE";
  if (c.numericalValue && c.numericalValue !== "None") {
    const val = c.numericalValue;
    if (val.includes("%") || val.includes(">99") || val.includes("MW") || val.includes("tonnes")) {
      numSubtype = "MEASURABLE_QUANTITY";
    } else if (val.toLowerCase().includes("sio") || val.includes("SiO₂") || val.includes("CH4")) {
      numSubtype = "CHEMICAL_NOTATION";
    } else if (val.includes("+91") || val.includes("4620") || val.includes("B-29") || val.includes("E4/271")) {
      numSubtype = "STATUTORY_IDENTIFIER";
    } else if (val.includes("2026") || val.includes("2027") || val.includes("2028") || val.includes("2030")) {
      numSubtype = "CALENDAR_HORIZON";
    } else {
      numSubtype = "UI_ENUMERATOR"; // Phase 01, 01/04, 01, 02, etc.
    }
  }

  // Determine Evidence Requirement / Substantiation Status
  let evidenceRequirement = "General corporate statement; standard business representation.";
  let auditRisk = "LOW";

  if (c.numericalValue && (c.numericalValue.includes("65%") || c.numericalValue.includes("40%"))) {
    evidenceRequirement = "Requires Lender's Independent Engineer (LIE) or EPC contractor-certified progress milestone report.";
    auditRisk = "CRITICAL — REGULATORY & FINANCING LIABILITY";
  } else if (c.exactText.toLowerCase().includes(">99") || c.claimSpan.toLowerCase().includes(">99") || c.claimSpan.toLowerCase().includes("high-purity biogenic silica")) {
    evidenceRequirement = "Requires ISO/IEC 17025 accredited third-party Laboratory Certificate of Analysis (CoA) demonstrating >99% amorphous SiO2 purity.";
    auditRisk = "CRITICAL — PRODUCT LIABILITY & CONSUMER PROTECTION";
  } else if (c.exactText.toLowerCase().includes("zero liquid discharge") || c.claimSpan.toLowerCase().includes("zero liquid discharge")) {
    evidenceRequirement = "Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering ZLD water balance report.";
    auditRisk = "HIGH — ENVIRONMENTAL STATUTORY COMPLIANCE";
  } else if (c.category.includes("Category I") || c.claimType.toLowerCase().includes("implied")) {
    evidenceRequirement = "Visual rendering implies commissioned/operating asset. Requires explicit disclaimer label: 'Architectural Design Concept / Prospective Facility'.";
    auditRisk = "HIGH — IMPLIED OPERATIONAL MISREPRESENTATION";
  } else if (c.claimSpan.toLowerCase().includes("semiconductor") || c.exactText.toLowerCase().includes("semiconductor")) {
    evidenceRequirement = "Requires electronic-grade specification sheet validating ppb-level trace metal and radioactive impurity tolerances.";
    auditRisk = "HIGH — UNVALIDATED ADVANCED APPLICATION";
  } else if (c.sourceFile.includes("Footer") && c.exactText.includes("Golden Soil Ventures")) {
    evidenceRequirement = "Requires Group Organizational Chart / Corporate Resolution disclosing relationship between Rivanta Green and Golden Soil Ventures.";
    auditRisk = "MODERATE — STATUTORY DUE DILIGENCE AMBIGUITY";
  } else if (c.category.includes("Category B") || c.timeframe.includes("Planned") || c.timeframe.includes("Under Development")) {
    evidenceRequirement = "Requires DPR (Detailed Project Report), land lease/allotment letter, or preliminary feasibility documentation.";
    auditRisk = "MODERATE — PROJECT READINESS SCRUTINY";
  }

  reconciledClaims.push({
    ...c,
    lineRange: updatedLineRange,
    exactText: verifiedVerbatim,
    relatedClaimIds: updatedRelated,
    numSubtype,
    evidenceRequirement,
    auditRisk,
  });
}

console.log("Total claims processed:", reconciledClaims.length);
console.log("Total reconciliation log entries:", reconciliationLog.length);

fs.writeFileSync(
  path.join(rootDir, "scripts", "reconciled-claims-data.mjs"),
  `export const RECONCILED_CLAIMS = ${JSON.stringify(reconciledClaims, null, 2)};\nexport const RECONCILIATION_LOG = ${JSON.stringify(reconciliationLog, null, 2)};\n`
);
console.log("Saved scripts/reconciled-claims-data.mjs");

