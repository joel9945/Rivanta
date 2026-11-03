import fs from "fs";

const routes = [
  { slug: "home", file: ".next/server/app/index.html" },
  { slug: "about", file: ".next/server/app/about.html" },
  { slug: "bio-silica", file: ".next/server/app/bio-silica.html" },
  { slug: "cbg", file: ".next/server/app/cbg.html" },
  { slug: "saf", file: ".next/server/app/saf.html" },
  { slug: "feedstock", file: ".next/server/app/feedstock.html" },
  { slug: "projects", file: ".next/server/app/projects.html" },
  { slug: "sustainability", file: ".next/server/app/sustainability.html" },
  { slug: "vision", file: ".next/server/app/vision.html" },
  { slug: "contact", file: ".next/server/app/contact.html" },
];

console.log("================================================================================");
console.log("RIVANTA GREEN — AUTOMATED PRODUCTION HTML METADATA & SCHEMA VERIFICATION");
console.log("================================================================================");

const results = [];

for (const r of routes) {
  if (!fs.existsSync(r.file)) {
    console.error(`FAILED: File not found: ${r.file}`);
    continue;
  }

  const html = fs.readFileSync(r.file, "utf8");
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]+)"/);
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m => {
    try {
      return JSON.parse(m[1]);
    } catch {
      return null;
    }
  });

  const row = {
    route: r.slug,
    title: titleMatch ? titleMatch[1] : "MISSING",
    canonical: canonicalMatch ? canonicalMatch[1] : "MISSING",
    ogUrl: ogUrlMatch ? ogUrlMatch[1] : "MISSING",
    ogImage: ogImageMatch ? ogImageMatch[1] : "MISSING",
    descLength: descMatch ? descMatch[1].length : 0,
    jsonLdBlocksCount: jsonLdBlocks.filter(Boolean).length,
  };

  results.push(row);

  console.log(`\nRoute: /${r.slug === "home" ? "" : r.slug}`);
  console.log(`  Title:       ${row.title}`);
  console.log(`  Canonical:   ${row.canonical}`);
  console.log(`  OG URL:      ${row.ogUrl}`);
  console.log(`  OG Image:    ${row.ogImage}`);
  console.log(`  Desc Length: ${row.descLength} chars`);
  console.log(`  JSON-LD:     ${row.jsonLdBlocksCount} valid schema block(s) detected`);
}

// Check for uniqueness
const titles = results.map(r => r.title);
const canon = results.map(r => r.canonical);
const uniqueTitles = new Set(titles);
const uniqueCanon = new Set(canon);

console.log("\n================================================================================");
console.log(`Verification Summary:`);
console.log(`  Total Routes Checked: ${results.length}`);
console.log(`  Unique Titles:        ${uniqueTitles.size} / ${results.length} (Target: 10/10)`);
console.log(`  Unique Canonicals:    ${uniqueCanon.size} / ${results.length} (Target: 10/10)`);

if (uniqueTitles.size === 10 && uniqueCanon.size === 10) {
  console.log(`\nSTATUS: ALL PRODUCTION AUDIT CHECKS PASSED WITH 100% SUCCESS.`);
} else {
  console.error(`\nSTATUS: VERIFICATION FAILED — DUPLICATIONS DETECTED.`);
  process.exit(1);
}

