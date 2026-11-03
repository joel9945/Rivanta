import fs from "fs";
import sharp from "sharp";

// Read original eagle logo SVG
const originalSvg = fs.readFileSync("public/logo/logo-icon.svg", "utf8");

// Create exact 1:1 square SVG for Googlebot & modern browsers: 757x757 with eagle centered
// Eagle is 757w x 432h. Offset y = (757 - 432)/2 = 162.5
const squareSvg = originalSvg
  .replace('viewBox="0 0 757 432"', 'viewBox="0 0 757 757"')
  .replace('<g id="eagle-logo">', '<g id="eagle-logo" transform="translate(0, 162.5)">');

fs.writeFileSync("public/favicon.svg", squareSvg);
console.log("Created public/favicon.svg (1:1 square)");

// Generate Google-preferred multiple of 48px square (48x48, 96x96, 192x192) + apple touch icon + favicon.ico
async function generateIcons() {
  const svgBuf = Buffer.from(squareSvg);

  await sharp(svgBuf)
    .resize(48, 48)
    .png()
    .toFile("public/favicon-48x48.png");
  console.log("Created public/favicon-48x48.png");

  await sharp(svgBuf)
    .resize(96, 96)
    .png()
    .toFile("public/favicon-96x96.png");
  console.log("Created public/favicon-96x96.png");

  await sharp(svgBuf)
    .resize(180, 180)
    .png()
    .toFile("public/apple-touch-icon.png");
  console.log("Created public/apple-touch-icon.png");

  await sharp(svgBuf)
    .resize(192, 192)
    .png()
    .toFile("public/favicon-192x192.png");
  console.log("Created public/favicon-192x192.png");

  await sharp(svgBuf)
    .resize(32, 32)
    .toFile("public/favicon.ico");
  console.log("Created public/favicon.ico");
}

generateIcons().catch(console.error);

