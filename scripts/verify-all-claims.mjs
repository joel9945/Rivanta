import fs from "fs";
import path from "path";
import { MASTER_CLAIMS } from "./claims-data.mjs";

const rootDir = process.cwd();

console.log("Analyzing", MASTER_CLAIMS.length, "claims across actual codebase files...\n");

const byFile = {};
for (const c of MASTER_CLAIMS) {
  if (!byFile[c.sourceFile]) byFile[c.sourceFile] = [];
  byFile[c.sourceFile].push(c);
}

const results = [];
let totalFound = 0;
let totalMissing = 0;
let totalLineShifted = 0;

for (const [file, claims] of Object.entries(byFile)) {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    console.log(`[FILE MISSING] ${file}`);
    for (const c of claims) {
      results.push({
        id: c.id,
        file,
        status: "FILE_NOT_FOUND",
        originalLineRange: c.lineRange,
        claimSpan: c.claimSpan,
      });
      totalMissing++;
    }
    continue;
  }

  const rawContent = fs.readFileSync(fullPath, "utf8");
  const lines = rawContent.split("\n");

  for (const c of claims) {
    // Parse claim's declared line range
    const lrMatch = c.lineRange.match(/L?(\d+)(?:-L?(\d+))?/);
    const origStart = lrMatch ? parseInt(lrMatch[1], 10) : 1;
    const origEnd = lrMatch && lrMatch[2] ? parseInt(lrMatch[2], 10) : origStart;

    // Search for claim text in the file
    // Strategy 1: exactText search
    // Strategy 2: claimSpan search
    // Strategy 3: Normalized whitespace search
    const cleanExact = c.exactText.replace(/\s+/g, " ").trim();
    const cleanSpan = c.claimSpan.replace(/\s+/g, " ").trim();

    let matchedStart = -1;
    let matchedEnd = -1;
    let matchedSnippet = "";
    let matchType = "NONE";

    // 1. Check exact lines first
    const declaredSlice = lines.slice(origStart - 1, origEnd).join(" ").replace(/\s+/g, " ").trim();
    if (declaredSlice.includes(cleanExact) || cleanExact.includes(declaredSlice) || declaredSlice.includes(cleanSpan)) {
      matchedStart = origStart;
      matchedEnd = origEnd;
      matchedSnippet = declaredSlice;
      matchType = "EXACT_DECLARED_LINES";
    } else {
      // 2. Scan entire file for exact text or span
      // Let's search line by line / window by window
      const windowSize = Math.max(origEnd - origStart + 3, 10);
      for (let i = 0; i < lines.length; i++) {
        const window = lines.slice(i, i + windowSize).join(" ").replace(/\s+/g, " ");
        if (window.includes(cleanExact)) {
          matchedStart = i + 1;
          matchedEnd = Math.min(lines.length, i + (origEnd - origStart) + 1);
          matchedSnippet = lines.slice(matchedStart - 1, matchedEnd).join("\n");
          matchType = "EXACT_TEXT_FOUND_ELSEWHERE";
          break;
        } else if (window.includes(cleanSpan)) {
          matchedStart = i + 1;
          matchedEnd = Math.min(lines.length, i + (origEnd - origStart) + 1);
          matchedSnippet = lines.slice(matchedStart - 1, matchedEnd).join("\n");
          matchType = "SPAN_FOUND_ELSEWHERE";
          break;
        }
      }

      // If still not found, try smaller probes (first 25 characters of span)
      if (matchType === "NONE") {
        const probe = cleanSpan.slice(0, Math.min(25, cleanSpan.length));
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes(probe) || lines.slice(i, i + 3).join(" ").replace(/\s+/g, " ").includes(probe)) {
            matchedStart = i + 1;
            matchedEnd = Math.min(lines.length, i + 3);
            matchedSnippet = lines.slice(matchedStart - 1, matchedEnd).join("\n");
            matchType = "PROBE_FOUND";
            break;
          }
        }
      }
    }

    if (matchType !== "NONE") {
      totalFound++;
      const isShifted = matchedStart !== origStart || matchedEnd !== origEnd;
      if (isShifted) totalLineShifted++;

      results.push({
        id: c.id,
        file,
        status: isShifted ? "LINE_SHIFTED" : "VERIFIED_ACCURATE",
        origRange: c.lineRange,
        actualRange: `L${matchedStart}-L${matchedEnd}`,
        matchType,
        claimSpan: c.claimSpan,
        matchedSnippet: matchedSnippet.slice(0, 100),
      });
    } else {
      totalMissing++;
      results.push({
        id: c.id,
        file,
        status: "NOT_FOUND_IN_FILE",
        origRange: c.lineRange,
        claimSpan: c.claimSpan,
      });
    }
  }
}

console.log("\n=== VERIFICATION SUMMARY ===");
console.log(`Total Claims: ${MASTER_CLAIMS.length}`);
console.log(`Verified Accurate Lines: ${totalFound - totalLineShifted}`);
console.log(`Line Range Shifted: ${totalLineShifted}`);
console.log(`Not Found / Missing: ${totalMissing}`);

const missing = results.filter((r) => r.status === "NOT_FOUND_IN_FILE");
if (missing.length > 0) {
  console.log(`\n=== MISSING CLAIMS (${missing.length}) ===`);
  for (const m of missing) {
    console.log(`- ${m.id} in ${m.file} (claimed: ${m.origRange}): "${m.claimSpan.slice(0, 60)}"`);
  }
}

