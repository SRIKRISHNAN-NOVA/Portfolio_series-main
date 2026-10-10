import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const inputPath = 'C:/Users/srikr/.gemini/antigravity-ide/brain/0f8f2080-cdad-4ec9-8a9c-ef8535caeeb4/srikrishnan_natural_portrait_1791619497842.jpg';

const image = sharp(inputPath);
const { width, height } = await image.metadata();

const raw = await image.removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);

// Sample background color from top-left corner (0, 0)
const bgR = raw[0];
const bgG = raw[1];
const bgB = raw[2];

console.log(`Sampled background color: R=${bgR}, G=${bgG}, B=${bgB}`);

for (let i = 0; i < width * height; i++) {
  const r = raw[i * 3];
  const g = raw[i * 3 + 1];
  const b = raw[i * 3 + 2];
  
  // Euclidean distance in RGB color space from the background color
  const diff = Math.sqrt(
    Math.pow(r - bgR, 2) +
    Math.pow(g - bgG, 2) +
    Math.pow(b - bgB, 2)
  );

  rgba[i * 4] = r;
  rgba[i * 4 + 1] = g;
  rgba[i * 4 + 2] = b;

  if (diff < 14) {
    rgba[i * 4 + 3] = 0;
  } else if (diff < 28) {
    rgba[i * 4 + 3] = Math.round(((diff - 14) / 14) * 255);
  } else {
    rgba[i * 4 + 3] = 255;
  }
}

// Save pic.png in root
await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toFile('pic.png');
console.log('pic.png created');

const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout)
    .resize({ width: w })
    .webp({ quality: 92, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}
console.log('Clean WebP portraits updated in public/assets/');

// Social share image (1200x630)
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#2a3b5c" stop-opacity="0.45"/><stop offset="1" stop-color="#07070a" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="112" fill="#f4f1ec" letter-spacing="4">SRIKRISHNAN</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">AI &amp; DATA SCIENCE • MACHINE LEARNING • BI</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('og-image.jpg updated successfully');
