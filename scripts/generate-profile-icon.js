const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateProfileIcons() {
  const svgPath = path.join(__dirname, '..', 'public', 'logo', 'logo-icon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // Render vector at ultra-high resolution (density 600) for lossless rasterization
  const highResEagleBuffer = await sharp(svgBuffer, { density: 600 }).trim().toBuffer();

  const outDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Sizes to generate: 1024x1024 (Google standard) and 2048x2048 (Retina/Master)
  const sizes = [
    { size: 1024, suffix: '' },
    { size: 2048, suffix: '-2k' }
  ];

  for (const { size, suffix } of sizes) {
    // Target eagle width: 74% of square canvas width
    // Fits comfortably inside the circle radius with a 13% safe breathing margin
    const targetEagleWidth = Math.round(size * 0.74);

    const resizedEagle = await sharp(highResEagleBuffer)
      .resize({ width: targetEagleWidth, fit: 'inside' })
      .toBuffer();

    const eagleMeta = await sharp(resizedEagle).metadata();
    const left = Math.round((size - eagleMeta.width) / 2);
    const top = Math.round((size - eagleMeta.height) / 2);

    // 1. Transparent PNG
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: resizedEagle, left, top }])
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(path.join(outDir, `rivanta-profile-transparent${suffix}.png`));

    // 2. Pure White PNG
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
      .composite([{ input: resizedEagle, left, top }])
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(path.join(outDir, `rivanta-profile-white${suffix}.png`));

    // 3. Deep Green Rivanta Brand (#0B1E16)
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 11, g: 30, b: 22, alpha: 1 }
      }
    })
      .composite([{ input: resizedEagle, left, top }])
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(path.join(outDir, `rivanta-profile-dark${suffix}.png`));
  }

  // Pre-clipped circular previews (for direct circular display / chat / apps)
  const circleSvg1024 = Buffer.from(
    '<svg width="1024" height="1024"><circle cx="512" cy="512" r="512" fill="white"/></svg>'
  );

  // White background circular preview
  await sharp(path.join(outDir, 'rivanta-profile-white.png'))
    .composite([{ input: circleSvg1024, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'rivanta-profile-circle-white.png'));

  // Dark green background circular preview
  await sharp(path.join(outDir, 'rivanta-profile-dark.png'))
    .composite([{ input: circleSvg1024, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, 'rivanta-profile-circle-dark.png'));

  console.log('SUCCESS: All profile icons generated in public/images/!');
}

generateProfileIcons().catch((err) => {
  console.error(err);
  process.exit(1);
});
