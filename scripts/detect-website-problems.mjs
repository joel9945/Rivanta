import fs from "fs";
import path from "path";

const rootDir = process.cwd();

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(path.join(rootDir, "src"));
const problems = [];

// 1. Check for encoding errors (replacement characters)
for (const f of files) {
  const rel = path.relative(rootDir, f);
  const content = fs.readFileSync(f, "utf8");
  const lines = content.split("\n");

  lines.forEach((line, idx) => {
    if (line.includes("\ufffd")) {
      problems.push({
        type: "ENCODING_GLITCH",
        file: rel,
        line: idx + 1,
        snippet: line.trim(),
      });
    }
  });
}

// 2. Check for image paths in public
const publicDir = path.join(rootDir, "public");
for (const f of files) {
  const rel = path.relative(rootDir, f);
  const content = fs.readFileSync(f, "utf8");
  // Find strings like "/images/..." or "/logo/..."
  const matches = content.matchAll(/["'](\/(?:images|logo|icons|bio-silica)\/[^"']+\.(?:png|jpg|jpeg|svg|webp))["']/g);
  for (const m of matches) {
    const assetPath = path.join(publicDir, m[1].replace(/^\//, ""));
    if (!fs.existsSync(assetPath)) {
      problems.push({
        type: "MISSING_IMAGE_ASSET",
        file: rel,
        asset: m[1],
        expectedDiskPath: assetPath,
      });
    }
  }
}

// 3. Check internal route links
// Valid routes in Next.js app:
const validRoutes = new Set([
  "/",
  "/about",
  "/bio-silica",
  "/cbg",
  "/saf",
  "/feedstock",
  "/projects",
  "/sustainability",
  "/vision",
  "/contact",
  "/green-silicon",
  "/investors",
  "/newsroom",
  "/technology",
]);

for (const f of files) {
  const rel = path.relative(rootDir, f);
  const content = fs.readFileSync(f, "utf8");
  // Find href="/..."
  const hrefMatches = content.matchAll(/href=["'](\/[a-z0-9\-_]*)["']/gi);
  for (const m of hrefMatches) {
    const route = m[1];
    if (route && !validRoutes.has(route) && !route.startsWith("/#") && !route.includes(".")) {
      problems.push({
        type: "SUSPICIOUS_ROUTE_LINK",
        file: rel,
        route,
      });
    }
  }
}

// 4. Check for unhandled progress bars or placeholder percentages
for (const f of files) {
  const rel = path.relative(rootDir, f);
  const content = fs.readFileSync(f, "utf8");
  if (content.includes("progressPct") || content.includes("progress:") || content.includes("% progress")) {
    problems.push({
      type: "LEFTOVER_PROGRESS_METRIC",
      file: rel,
    });
  }
}

// 5. Check for Golden Soil or Corporate Office occurrences
for (const f of files) {
  const rel = path.relative(rootDir, f);
  const content = fs.readFileSync(f, "utf8");
  if (content.toLowerCase().includes("golden soil") || content.toLowerCase().includes("corporate office")) {
    problems.push({
      type: "UNAUTHORIZED_ENTITY_OR_BADGE",
      file: rel,
    });
  }
}

console.log(JSON.stringify(problems, null, 2));

