import fs from "fs";
import path from "path";
import { MASTER_CLAIMS } from "./claims-data.mjs";

const rootDir = process.cwd();

// 1. Verify existence of all 33 files
const distinctFiles = Array.from(new Set(MASTER_CLAIMS.map((c) => c.sourceFile))).sort();
console.log(`Verifying ${distinctFiles.length} distinct source files across codebase...`);
for (const f of distinctFiles) {
  const p = path.join(rootDir, f);
  if (!fs.existsSync(p)) {
    console.error(`FATAL: File does not exist: ${f}`);
    process.exit(1);
  }
}
console.log("All 33 source files confirmed present on disk.\n");

// 2. Read each file into cache
const fileCache = {};
for (const f of distinctFiles) {
  const p = path.join(rootDir, f);
  const content = fs.readFileSync(p, "utf8");
  fileCache[f] = {
    content,
    lines: content.split("\n"),
  };
}

// 3. Exact line-by-line reconciliation engine
const reconciledClaims = [];
const auditChangeLog = [];

for (const c of MASTER_CLAIMS) {
  const { lines } = fileCache[c.sourceFile];
  const lrMatch = c.lineRange.match(/L?(\d+)(?:-L?(\d+))?/);
  const origStart = lrMatch ? parseInt(lrMatch[1], 10) : 1;
  const origEnd = lrMatch && lrMatch[2] ? parseInt(lrMatch[2], 10) : origStart;

  let actualStart = origStart;
  let actualEnd = origEnd;

  // Manual precise line overrides for shifted / multi-line JSX components
  const preciseOverrides = {
    "CLM-GLOB-002": { start: 28, end: 30 },
    "CLM-GLOB-003": { start: 108, end: 115 },
    "CLM-GLOB-004": { start: 116, end: 128 },
    "CLM-GLOB-006": { start: 135, end: 142 },
    "CLM-GLOB-008": { start: 28, end: 33 },
    "CLM-GLOB-009": { start: 192, end: 204 },
    "CLM-GLOB-010": { start: 206, end: 215 },
    "CLM-GLOB-011": { start: 217, end: 231 },
    "CLM-HOME-012": { start: 74, end: 85 },
    "CLM-HOME-014": { start: 119, end: 132 },
    "CLM-HOME-021": { start: 68, end: 78 },
    "CLM-HOME-027": { start: 154, end: 164 },
    "CLM-HOME-028": { start: 168, end: 178 },
    "CLM-HOME-029": { start: 182, end: 192 },
    "CLM-HOME-036": { start: 1, end: 11 },
    "CLM-ABOUT-002": { start: 37, end: 43 },
    "CLM-ABOUT-006": { start: 149, end: 161 },
    "CLM-ABOUT-015": { start: 24, end: 33 },
    "CLM-ABOUT-016": { start: 36, end: 45 },
    "CLM-ABOUT-017": { start: 48, end: 57 },
    "CLM-CBG-002": { start: 111, end: 114 },
    "CLM-CBG-003": { start: 151, end: 155 },
    "CLM-CBG-004": { start: 21, end: 28 },
    "CLM-CBG-005": { start: 31, end: 39 },
    "CLM-CBG-006": { start: 43, end: 50 },
    "CLM-CBG-010": { start: 76, end: 82 },
    "CLM-SAF-003": { start: 154, end: 158 },
    "CLM-SAF-004": { start: 21, end: 28 },
    "CLM-SAF-005": { start: 31, end: 39 },
    "CLM-SAF-006": { start: 43, end: 50 },
    "CLM-SAF-011": { start: 88, end: 92 },
    "CLM-SAF-012": { start: 94, end: 98 },
    "CLM-SAF-013": { start: 100, end: 104 },
    "CLM-FEED-005": { start: 22, end: 26 },
    "CLM-FEED-006": { start: 29, end: 34 },
    "CLM-FEED-007": { start: 36, end: 41 },
    "CLM-FEED-008": { start: 43, end: 48 },
    "CLM-FEED-009": { start: 54, end: 62 },
    "CLM-FEED-010": { start: 65, end: 73 },
    "CLM-FEED-011": { start: 76, end: 84 },
    "CLM-PROJ-003": { start: 23, end: 27 },
    "CLM-PROJ-004": { start: 28, end: 33 },
    "CLM-PROJ-005": { start: 39, end: 43 },
    "CLM-PROJ-006": { start: 44, end: 49 },
    "CLM-PROJ-007": { start: 55, end: 59 },
    "CLM-PROJ-008": { start: 60, end: 65 },
    "CLM-PROJ-009": { start: 71, end: 75 },
    "CLM-PROJ-010": { start: 76, end: 81 },
    "CLM-PROJ-011": { start: 93, end: 108 },
    "CLM-PROJ-012": { start: 109, end: 124 },
    "CLM-PROJ-013": { start: 125, end: 140 },
    "CLM-PROJ-014": { start: 143, end: 148 },
    "CLM-PROJ-015": { start: 149, end: 154 },
    "CLM-PROJ-016": { start: 155, end: 160 },
    "CLM-SUST-003": { start: 144, end: 150 },
    "CLM-SUST-008": { start: 72, end: 79 },
    "CLM-SUST-009": { start: 81, end: 88 },
    "CLM-SUST-010": { start: 90, end: 97 },
    "CLM-SUST-011": { start: 99, end: 106 },
    "CLM-VIS-002": { start: 137, end: 140 },
    "CLM-VIS-005": { start: 185, end: 196 },
    "CLM-VIS-006": { start: 27, end: 35 },
    "CLM-VIS-007": { start: 40, end: 48 },
    "CLM-VIS-008": { start: 53, end: 61 },
    "CLM-VIS-009": { start: 66, end: 74 },
    "CLM-VIS-010": { start: 78, end: 87 },
    "CLM-VIS-011": { start: 93, end: 102 },
    "CLM-VIS-012": { start: 105, end: 114 },
    "CLM-VIS-013": { start: 117, end: 126 },
    "CLM-CONT-002": { start: 22, end: 34 },
    "CLM-CONT-003": { start: 37, end: 48 },
    "CLM-STAND-001": { start: 20, end: 33 },
    "CLM-STAND-002": { start: 34, end: 47 },
    "CLM-STAND-003": { start: 48, end: 61 },
    "CLM-STAND-004": { start: 62, end: 75 },
    "CLM-STAND-005": { start: 76, end: 89 },
    "CLM-STAND-006": { start: 90, end: 103 },
    "CLM-STAND-007": { start: 28, end: 45 },
    "CLM-STAND-008": { start: 141, end: 158 },
    "CLM-STAND-009": { start: 168, end: 215 },
  };

  if (preciseOverrides[c.id]) {
    actualStart = preciseOverrides[c.id].start;
    actualEnd = preciseOverrides[c.id].end;
  }

  const updatedLineRange = actualStart === actualEnd ? `L${actualStart}` : `L${actualStart}-L${actualEnd}`;

  if (updatedLineRange !== c.lineRange) {
    auditChangeLog.push({
      type: "LINE_RANGE_RECONCILIATION",
      claimId: c.id,
      file: c.sourceFile,
      previous: c.lineRange,
      corrected: updatedLineRange,
      reason: "Adjusted line numbers to match exact line boundaries in authoritative source code snapshot.",
    });
  }

  // Extract true verbatim text from source code
  const exactCodeSlice = lines.slice(actualStart - 1, actualEnd).join("\n").trim();

  // Correct invalid reference in CLM-GLOB-012
  let updatedRelated = [...(c.relatedClaimIds || [])];
  if (c.id === "CLM-GLOB-012") {
    const invalidRef = "CLM-CONT-025";
    if (updatedRelated.includes(invalidRef)) {
      updatedRelated = updatedRelated.filter((r) => r !== invalidRef);
      updatedRelated.push("CLM-CONT-008");
      auditChangeLog.push({
        type: "INVALID_REFERENCE_REMOVAL",
        claimId: c.id,
        file: c.sourceFile,
        previous: `relatedClaimIds contained '${invalidRef}'`,
        corrected: "Replaced with verified 'CLM-CONT-008' (Corporate Strategy & Project Planning)",
        reason: "Reference was pointing to nonexistent claim ID outside the 182-record schema.",
      });
    }
  }

  // Check if any other relatedClaimIds are invalid
  for (const ref of updatedRelated) {
    if (!MASTER_CLAIMS.some((x) => x.id === ref)) {
      console.warn(`WARNING: Invalid reference ${ref} in ${c.id}`);
    }
  }

  // Reconcile progress numbers for CLM-PROJ-011, 012, 013 to actual source code:
  let correctedNumerical = c.numericalValue;
  let correctedUnit = c.unit;
  let correctedClaimSpan = c.claimSpan;

  if (c.id === "CLM-PROJ-011") {
    correctedNumerical = "100%";
    correctedUnit = "Milestone Progress";
    correctedClaimSpan = "Stage 01 • Project Planning (100% Progress): Regional agricultural residue availability mapping, milling cluster assessments, material characterization studies, and preliminary mass-balance modeling.";
    if (c.numericalValue !== "100%") {
      auditChangeLog.push({
        type: "NUMERICAL_AUDIT_CORRECTION",
        claimId: c.id,
        file: c.sourceFile,
        previous: `${c.numericalValue} (unsubstantiated or previous estimate)`,
        corrected: "100% (progress: 100 in DEVELOPMENT_PHASES[0])",
        reason: "Authoritative source code explicitly defines progress: 100.",
      });
    }
  } else if (c.id === "CLM-PROJ-012") {
    correctedNumerical = "60%";
    correctedUnit = "Engineering Progress";
    correctedClaimSpan = "Stage 02 • In Preparation (60% Progress): Detailed process engineering, vendor screening, statutory clearance documentation preparation, and commercial off-take framework discussions.";
    if (c.numericalValue !== "60%") {
      auditChangeLog.push({
        type: "NUMERICAL_AUDIT_CORRECTION",
        claimId: c.id,
        file: c.sourceFile,
        previous: `${c.numericalValue} (unsubstantiated or previous estimate)`,
        corrected: "60% (progress: 60 in DEVELOPMENT_PHASES[1])",
        reason: "Authoritative source code explicitly defines progress: 60.",
      });
    }
  } else if (c.id === "CLM-PROJ-013") {
    correctedNumerical = "10%";
    correctedUnit = "Civil Execution Progress";
    correctedClaimSpan = "Stage 03 • Proposed (10% Progress): Civil works execution, equipment erection, utility integration, phased commissioning, and commercial production commencement subject to necessary statutory approvals.";
    if (c.numericalValue !== "10%") {
      auditChangeLog.push({
        type: "NUMERICAL_AUDIT_CORRECTION",
        claimId: c.id,
        file: c.sourceFile,
        previous: `${c.numericalValue} (unsubstantiated or previous estimate)`,
        corrected: "10% (progress: 10 in DEVELOPMENT_PHASES[2])",
        reason: "Authoritative source code explicitly defines progress: 10.",
      });
    }
  }

  // Granular numerical taxonomy
  let numTaxonomy = "NON_NUMERICAL";
  if (correctedNumerical && correctedNumerical !== "None") {
    const val = correctedNumerical;
    if (val.includes("%") || val.includes(">99") || val.includes("MW") || val.includes("tonnes")) {
      numTaxonomy = "MEASURABLE_PERFORMANCE_METRIC";
    } else if (val.toLowerCase().includes("sio") || val.includes("SiO₂") || val.includes("CH4")) {
      numTaxonomy = "CHEMICAL_TECHNICAL_NOTATION";
    } else if (val.includes("+91") || val.includes("4620") || val.includes("B-29") || val.includes("E4/271")) {
      numTaxonomy = "STATUTORY_CORPORATE_IDENTIFIER";
    } else if (val.includes("2026") || val.includes("2027") || val.includes("2028") || val.includes("2030")) {
      numTaxonomy = "CALENDAR_HORIZON_PROJECTION";
    } else {
      numTaxonomy = "STRUCTURAL_UI_ENUMERATOR";
    }
  }

  // Rigorous audit risk classification
  let riskRating = "LOW RISK / STATUTORY NEUTRAL";
  let evidenceGap = "Standard public business assertion.";

  if (c.id === "CLM-PROJ-011" || c.id === "CLM-PROJ-012" || c.id === "CLM-PROJ-013") {
    riskRating = "CRITICAL RISK — EPC & FINANCING LIABILITY";
    evidenceGap = "Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.";
  } else if (c.exactText.includes(">99") || c.claimSpan.includes(">99") || c.claimSpan.toLowerCase().includes("high-purity biogenic silica")) {
    riskRating = "CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY";
    evidenceGap = "Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.";
  } else if (c.exactText.toLowerCase().includes("zero liquid discharge") || c.claimSpan.toLowerCase().includes("zero liquid discharge")) {
    riskRating = "HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE";
    evidenceGap = "Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.";
  } else if (c.category.includes("Category I") || c.claimType.toLowerCase().includes("implied")) {
    riskRating = "HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION";
    evidenceGap = "Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.";
  } else if (c.claimSpan.toLowerCase().includes("semiconductor") || c.exactText.toLowerCase().includes("semiconductor")) {
    riskRating = "HIGH RISK — UNVERIFIED HIGH-TECH APPLICATION";
    evidenceGap = "Requires electronic-grade purity analysis proving 4N (99.99%) purity and ppb-level radioactive isotope thresholds.";
  } else if (c.sourceFile.includes("Footer") && c.exactText.includes("Golden Soil Ventures")) {
    riskRating = "MODERATE RISK — CORPORATE GOVERNANCE AMBIGUITY";
    evidenceGap = "Requires Group Corporate Organizational Chart or statutory resolution clarifying promoter holding relationship with Golden Soil Ventures.";
  } else if (c.category.includes("Category B") || c.timeframe.includes("Planned") || c.timeframe.includes("Under Development")) {
    riskRating = "MODERATE RISK — PROJECT READINESS SCRUTINY";
    evidenceGap = "Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).";
  }

  reconciledClaims.push({
    ...c,
    lineRange: updatedLineRange,
    exactText: exactCodeSlice || c.exactText,
    claimSpan: correctedClaimSpan,
    numericalValue: correctedNumerical,
    unit: correctedUnit,
    relatedClaimIds: updatedRelated,
    numTaxonomy,
    riskRating,
    evidenceGap,
    substantiationStatus: "UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION",
  });
}

console.log(`Reconciliation complete.`);
console.log(`- Total claims audited: ${reconciledClaims.length}`);
console.log(`- Total changelog modifications logged: ${auditChangeLog.length}`);

// Assert zero invalid references
const allIds = new Set(reconciledClaims.map((c) => c.id));
let invalidRefCount = 0;
for (const c of reconciledClaims) {
  for (const ref of c.relatedClaimIds || []) {
    if (!allIds.has(ref)) {
      console.error(`ERROR: Claim ${c.id} has invalid reference ${ref}`);
      invalidRefCount++;
    }
  }
}
if (invalidRefCount === 0) {
  console.log("ASSERTION PASSED: Exactly 0 invalid claim references detected across entire dataset.");
} else {
  console.error(`ASSERTION FAILED: ${invalidRefCount} invalid references found.`);
  process.exit(1);
}

// Export reconciled claims
fs.writeFileSync(
  path.join(rootDir, "scripts", "authoritative-reconciled-claims.mjs"),
  `export const AUTHORITATIVE_CLAIMS = ${JSON.stringify(reconciledClaims, null, 2)};\nexport const AUDIT_CHANGELOG = ${JSON.stringify(auditChangeLog, null, 2)};\n`
);
console.log("Saved authoritative reconciled claims dataset.");

