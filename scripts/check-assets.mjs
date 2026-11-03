import fs from "fs";
import path from "path";

function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      if (f !== "node_modules" && f !== ".next") r = r.concat(walk(p));
    } else if (f.endsWith(".tsx") || f.endsWith(".ts")) r.push(p);
  }
  return r;
}

const pub = path.join(process.cwd(), "public");
const files = walk(path.join(process.cwd(), "src"));
const broken = [];

for (const f of files) {
  const c = fs.readFileSync(f, "utf8");
  const regex = /["'](\/(?:images|logo|icons)[^"']*\.(?:png|jpg|jpeg|svg|webp))["']/g;
  let m;
  while ((m = regex.exec(c)) !== null) {
    const diskPath = path.join(pub, m[1].replace(/^\//, ""));
    if (!fs.existsSync(diskPath)) {
      broken.push({ file: path.relative(process.cwd(), f), asset: m[1] });
    }
  }
}
console.log("Broken assets:", broken);

