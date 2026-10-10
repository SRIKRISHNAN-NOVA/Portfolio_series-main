import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const inputPath = 'C:/Users/srikr/.gemini/antigravity-ide/brain/0f8f2080-cdad-4ec9-8a9c-ef8535caeeb4/srikrishnan_cutout_1791619256524.jpg';

const image = sharp(inputPath);
const { width, height } = await image.metadata();

const raw = await image.removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);

// Convert near-black background pixels to alpha transparency with soft anti-aliasing edge
for (let i = 0; i < width * height; i++) {
  const r = raw[i * 3];
  const g = raw[i * 3 + 1];
  const b = raw[i * 3 + 2];
  
  // Perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  rgba[i * 4] = r;
  rgba[i * 4 + 1] = g;
  rgba[i * 4 + 2] = b;
  
  // Smooth threshold for pure black background
  if (brightness < 6) {
    rgba[i * 4 + 3] = 0;
  } else if (brightness < 20) {
    rgba[i * 4 + 3] = Math.round(((brightness - 6) / 14) * 255);
  } else {
    rgba[i * 4 + 3] = 255;
  }
}

// Save as pic.png in root
await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toFile('pic.png');
console.log('pic.png created');

// Also save high-res cutout buffer
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

// Generate responsive portraits
for (const w of [1100, 720, 420]) {
  await sharp(cutout)
    .resize({ width: w })
    .webp({ quality: 90, alphaQuality: 92 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}
console.log('Responsive WebP portraits created in public/assets/');

// Generate Social Share Image (1200x630)
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
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

console.log('og-image.jpg created successfully');
