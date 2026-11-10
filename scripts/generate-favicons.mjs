import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * Builds an authentic Windows ICO binary buffer containing multiple PNG-compressed image streams.
 * Standard format:
 * - 6-byte ICONDIR header (reserved: 0, type: 1, count: N)
 * - 16-byte ICONDIRENTRY for each image
 * - Consecutive raw image data streams
 */
function buildIcoBuffer(images) {
  const count = images.length;
  const headerLength = 6 + count * 16;
  
  let currentOffset = headerLength;
  const entries = [];
  
  for (const img of images) {
    entries.push({
      width: img.width >= 256 ? 0 : img.width,
      height: img.height >= 256 ? 0 : img.height,
      size: img.buffer.length,
      offset: currentOffset,
    });
    currentOffset += img.buffer.length;
  }
  
  const ico = Buffer.alloc(currentOffset);
  
  // ICONDIR header
  ico.writeUInt16LE(0, 0); // Reserved (must be 0)
  ico.writeUInt16LE(1, 2); // 1 = ICO format
  ico.writeUInt16LE(count, 4); // Number of images
  
  // ICONDIRENTRY structures
  entries.forEach((entry, i) => {
    const pos = 6 + i * 16;
    ico.writeUInt8(entry.width, pos);
    ico.writeUInt8(entry.height, pos + 1);
    ico.writeUInt8(0, pos + 2); // Colors (0 = no palette / >= 8bpp)
    ico.writeUInt8(0, pos + 3); // Reserved (must be 0)
    ico.writeUInt16LE(1, pos + 4); // Color planes (1)
    ico.writeUInt16LE(32, pos + 6); // Bits per pixel (32)
    ico.writeUInt32LE(entry.size, pos + 8); // Size of image data in bytes
    ico.writeUInt32LE(entry.offset, pos + 12); // Offset to image data
  });
  
  // Image binary streams
  images.forEach((img, i) => {
    img.buffer.copy(ico, entries[i].offset);
  });
  
  return ico;
}

async function generateFavicons() {
  const svgPath = path.resolve('public/favicon.svg');
  if (!fs.existsSync(svgPath)) {
    throw new Error('public/favicon.svg not found!');
  }
  const svgBuffer = fs.readFileSync(svgPath);
  console.log(`Source SVG loaded: ${svgPath} (${svgBuffer.length} bytes)`);

  // Target PNG sizes: Googlebot multiples of 48 (48, 96, 144), PWA (192, 512), Apple (180)
  const sizes = [
    { name: 'favicon-48x48.png', width: 48, height: 48 },
    { name: 'favicon-96x96.png', width: 96, height: 96 },
    { name: 'favicon-144x144.png', width: 144, height: 144 },
    { name: 'favicon-192x192.png', width: 192, height: 192 },
    { name: 'favicon-512x512.png', width: 512, height: 512 },
    { name: 'apple-touch-icon.png', width: 180, height: 180 },
  ];

  for (const s of sizes) {
    const outPath = path.resolve('public', s.name);
    const pngBuffer = await sharp(svgBuffer)
      .resize(s.width, s.height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(outPath, pngBuffer);
    console.log(`Generated: ${s.name} (${s.width}x${s.height}) - ${pngBuffer.length} bytes`);
  }

  // Generate multi-resolution ICO (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const icoImages = [];
  for (const sz of icoSizes) {
    const buf = await sharp(svgBuffer)
      .resize(sz, sz, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    icoImages.push({ width: sz, height: sz, buffer: buf });
  }

  const icoBuffer = buildIcoBuffer(icoImages);
  const icoPath = path.resolve('public/favicon.ico');
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`Generated: favicon.ico (multi-resolution 16, 32, 48) - ${icoBuffer.length} bytes`);

  // Remove duplicate/conflicting file inside src/app/ if it exists
  const appIcoPath = path.resolve('src/app/favicon.ico');
  if (fs.existsSync(appIcoPath)) {
    fs.unlinkSync(appIcoPath);
    console.log(`Removed conflicting file: src/app/favicon.ico`);
  }

  console.log('\nFavicon generation and verification complete.');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
