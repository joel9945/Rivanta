import fs from "fs";
import path from "path";
import { MASTER_CLAIMS } from "./claims-data.mjs";

const rootDir = process.cwd();

// Let's create an accurate finder for all 182 claims
const verifiedList = [];
const mismatchList = [];

for (const c of MASTER_CLAIMS) {
  const filePath = path.join(rootDir, c.sourceFile);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");

  // Parse original range
  const m = c.lineRange.match(/L?(\d+)(?:-L?(\d+))?/);
  const oStart = parseInt(m[1], 10);
  const oEnd = m[2] ? parseInt(m[2], 10) : oStart;

  // Let's test if exactText or claimSpan is at oStart..oEnd
  let slice = lines.slice(oStart - 1, oEnd).join("\n");
  let found = false;
  let exactStart = oStart;
  let exactEnd = oEnd;

  // Key probes
  // Try to find a distinct string in the file
  const probeCandidates = [
    c.exactText,
    c.claimSpan,
    c.claimSpan.split(/[.,;—–:]/)[0],
    c.exactText.split(/[.,;—–:]/)[0],
  ].filter(Boolean);

  // Check if oStart..oEnd contains any probe
  for (const p of probeCandidates) {
    const cleanP = p.replace(/\s+/g, " ").trim();
    if (cleanP.length >= 10 && slice.replace(/\s+/g, " ").includes(cleanP)) {
      found = true;
      break;
    }
  }

  if (!found) {
    // Find where the probe is in the file
    let bestLine = -1;
    let bestProbe = "";
    for (const p of probeCandidates) {
      const cleanP = p.replace(/\s+/g, " ").trim();
      if (cleanP.length < 10) continue;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(cleanP) || lines.slice(i, i + 5).join(" ").replace(/\s+/g, " ").includes(cleanP)) {
          bestLine = i + 1;
          bestProbe = cleanP;
          break;
        }
      }
      if (bestLine !== -1) break;
    }

    if (bestLine !== -1) {
      exactStart = bestLine;
      const len = Math.max(1, oEnd - oStart);
      exactEnd = Math.min(lines.length, bestLine + len);
      slice = lines.slice(exactStart - 1, exactEnd).join("\n");
      mismatchList.push({
        id: c.id,
        file: c.sourceFile,
        from: c.lineRange,
        to: `L${exactStart}-L${exactEnd}`,
        probe: bestProbe.slice(0, 40),
      });
    } else {
      mismatchList.push({
        id: c.id,
        file: c.sourceFile,
        from: c.lineRange,
        to: "UNLOCATED",
        probe: c.claimSpan.slice(0, 40),
      });
    }
  }

  verifiedList.push({
    ...c,
    verifiedStart: exactStart,
    verifiedEnd: exactEnd,
    verifiedLineRange: exactStart === exactEnd ? `L${exactStart}` : `L${exactStart}-L${exactEnd}`,
    verifiedText: slice.trim(),
  });
}

console.log(`Reconciliation scan finished.`);
console.log(`Total claims: ${verifiedList.length}`);
console.log(`Total line adjustments needed: ${mismatchList.length}`);
console.log("\nAdjustments list:");
for (const m of mismatchList) {
  console.log(`- ${m.id} (${m.file}): ${m.from} -> ${m.to} [probe: "${m.probe}"]`);
}

