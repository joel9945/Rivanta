import fs from "fs";
import path from "path";

const targetFiles = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/about/layout.tsx",
  "src/app/bio-silica/layout.tsx",
  "src/app/cbg/layout.tsx",
  "src/app/contact/layout.tsx",
  "src/app/feedstock/layout.tsx",
  "src/app/projects/layout.tsx",
  "src/app/saf/layout.tsx",
  "src/app/sustainability/layout.tsx",
  "src/app/vision/layout.tsx",
  "public/llms.txt"
];

for (const relPath of targetFiles) {
  const fullPath = path.resolve(relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, "utf8");
    // Replace https://rivantagreen.com with https://www.rivantagreen.com (avoiding duplicate www)
    const updated = content.replace(/https:\/\/rivantagreen\.com(?!\/www)/g, "https://www.rivantagreen.com");
    if (content !== updated) {
      fs.writeFileSync(fullPath, updated, "utf8");
      console.log(`Updated ${relPath}`);
    } else {
      console.log(`No changes needed in ${relPath}`);
    }
  }
}
