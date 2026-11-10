import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function verifyFavicons() {
  console.log('=== FAVICON AUDIT & VERIFICATION ===\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
      failed++;
    }
  }

  // 1. Conflicting file check
  const appIco = path.resolve('src/app/favicon.ico');
  assert(!fs.existsSync(appIco), 'src/app/favicon.ico is removed (prevents Next.js dynamic hashed link)');

  // 2. Binary multi-resolution ICO check
  const icoPath = path.resolve('public/favicon.ico');
  assert(fs.existsSync(icoPath), 'public/favicon.ico exists');
  const icoBuf = fs.readFileSync(icoPath);
  assert(icoBuf.length > 0, `public/favicon.ico size is ${icoBuf.length} bytes`);
  
  const reserved = icoBuf.readUInt16LE(0);
  const type = icoBuf.readUInt16LE(2);
  const count = icoBuf.readUInt16LE(4);
  assert(reserved === 0 && type === 1, `ICO header valid (reserved=0, type=1)`);
  assert(count === 3, `ICO contains 3 resolutions (16x16, 32x32, 48x48)`);

  for (let i = 0; i < count; i++) {
    const pos = 6 + i * 16;
    const w = icoBuf.readUInt8(pos);
    const h = icoBuf.readUInt8(pos + 1);
    const offset = icoBuf.readUInt32LE(pos + 12);
    const sig = icoBuf.subarray(offset, offset + 8).toString('hex');
    assert(
      sig === '89504e470d0a1a0a',
      `ICO sub-image #${i + 1} (${w}x${h}) has valid PNG stream signature at offset ${offset}`
    );
  }

  // 3. PNG assets check
  const expectedPngs = [
    { file: 'public/favicon-48x48.png', w: 48, h: 48 },
    { file: 'public/favicon-96x96.png', w: 96, h: 96 },
    { file: 'public/favicon-144x144.png', w: 144, h: 144 },
    { file: 'public/favicon-192x192.png', w: 192, h: 192 },
    { file: 'public/favicon-512x512.png', w: 512, h: 512 },
    { file: 'public/apple-touch-icon.png', w: 180, h: 180 },
  ];

  for (const item of expectedPngs) {
    const full = path.resolve(item.file);
    assert(fs.existsSync(full), `${item.file} exists`);
    const buf = fs.readFileSync(full);
    const sig = buf.subarray(0, 8).toString('hex');
    assert(sig === '89504e470d0a1a0a', `${item.file} has valid PNG signature`);
    const meta = await sharp(buf).metadata();
    assert(
      meta.width === item.w && meta.height === item.h,
      `${item.file} dimensions match expected ${item.w}x${item.h} (got ${meta.width}x${meta.height})`
    );
    assert(meta.hasAlpha === true, `${item.file} preserves RGBA transparency channel`);
  }

  // 4. SVG vector check
  const svgPath = path.resolve('public/favicon.svg');
  assert(fs.existsSync(svgPath), 'public/favicon.svg exists');
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  assert(svgContent.includes('viewBox="0 0 757 757"'), 'public/favicon.svg has 1:1 square viewBox');
  assert(svgContent.includes('id="eagle-logo"'), 'public/favicon.svg contains official eagle emblem');
  assert(svgContent.includes('id="calibratedGold"'), 'public/favicon.svg contains calibrated gold gradient');

  // 5. Web manifest check
  const manifestPath = path.resolve('public/site.webmanifest');
  assert(fs.existsSync(manifestPath), 'public/site.webmanifest exists');
  const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert(manifestData.name === 'Rivanta Green', 'Web manifest name is Rivanta Green');
  assert(manifestData.icons.length >= 2, 'Web manifest defines PWA icons');

  // 6. Robots.txt crawlability check
  const robotsSrc = fs.readFileSync('src/app/robots.ts', 'utf8');
  assert(robotsSrc.includes('allow: "/"'), 'robots.ts allows root crawling');
  assert(robotsSrc.includes('"Googlebot-Image"'), 'robots.ts explicitly includes Googlebot-Image');

  console.log(`\nAudit finished: ${passed} passed, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

verifyFavicons().catch(err => {
  console.error('Audit failed with exception:', err);
  process.exit(1);
});
