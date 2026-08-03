// Rasterises the brand marks from a single SVG source of truth.
//
// Run after changing LighthouseMark.astro / favicon.svg:
//   npm i --no-save playwright-core && node scripts/render-icons.mjs
//
// playwright-core is deliberately not a dependency: this runs by hand every
// year or two, and the deploy workflow should not pay for it on every push.
//
// Produces public/icon-192.png, icon-512.png, apple-touch-icon.png and
// og-image.png. Chromium comes from Playwright; the OG card uses the site's
// own self-hosted fonts so the preview matches the pages it links to.

import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const INK = '#14171a';
const AMBER = '#e8a93d';
const PAPER = '#faf8f5';

/** The mark, in a 26×26 box. Kept byte-identical to LighthouseMark.astro. */
const mark = (ink, amber) => `
  <path d="M10.3 6.2 L13 3.3 L15.7 6.2 Z" fill="${ink}"/>
  <rect x="10.9" y="6.2" width="4.2" height="3.5" fill="${ink}"/>
  <rect x="8.7" y="9.7" width="8.6" height="1.4" fill="${ink}"/>
  <path d="M10.4 11.1 L15.6 11.1 L15.95 13.0 L10.05 13.0 Z" fill="${ink}"/>
  <path d="M9.87 13.9 L16.13 13.9 L16.45 16.6 L9.55 16.6 Z" fill="${ink}"/>
  <path d="M9.35 17.5 L16.65 17.5 L17.5 21.3 L8.5 21.3 Z" fill="${ink}"/>
  <rect x="7.1" y="21.3" width="11.8" height="2" fill="${ink}"/>
  <circle cx="13" cy="7.9" r="1.45" fill="${amber}"/>`;

// The mark's bounding box inside the 26×26 box, so an icon can be sized by how
// much of the canvas the tower should occupy rather than by guesswork padding.
const BBOX = { cx: 13, cy: 13.3, h: 20 };

/** @param fill  fraction of the canvas height the tower should occupy. */
const iconPage = (size, fill) => {
  const s = (fill * 26) / BBOX.h;
  return `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0}</style>
<svg width="${size}" height="${size}" viewBox="0 0 26 26" style="background:${PAPER};display:block">
  <g transform="translate(13 13) scale(${s.toFixed(4)}) translate(-${BBOX.cx} -${BBOX.cy})">${mark(INK, AMBER)}</g>
</svg>`;
};

const FONTS = join(root, 'node_modules');
const ogPage = `<!doctype html><meta charset="utf-8">
<style>
@font-face{font-family:'Jakarta';src:url('file://${FONTS}/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2') format('woff2');font-weight:200 800;}
@font-face{font-family:'JB';src:url('file://${FONTS}/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2') format('woff2');font-weight:400;}
html,body{margin:0;padding:0}
.card{width:1200px;height:630px;background:${PAPER};position:relative;box-sizing:border-box;
  padding:96px 88px;font-family:'Jakarta',system-ui,sans-serif;color:${INK};display:flex;flex-direction:column;justify-content:center}
.rule{position:absolute;left:0;top:0;width:100%;height:8px;background:${AMBER}}
.top{display:flex;align-items:center;gap:26px;margin-bottom:34px}
.name{font-size:92px;font-weight:800;letter-spacing:-0.03em;line-height:1}
.sub{font-size:38px;font-weight:500;line-height:1.35;max-width:30ch;color:#2c3038}
.acro{font-family:'JB',monospace;font-size:19px;letter-spacing:0.16em;color:#6b7280;margin-top:30px;text-transform:uppercase}
.foot{position:absolute;left:88px;bottom:56px;font-family:'JB',monospace;font-size:20px;color:#6b7280;letter-spacing:0.03em}
</style>
<div class="card">
  <div class="rule"></div>
  <div class="top">
    <svg width="104" height="104" viewBox="0 0 26 26">${mark(INK, AMBER)}</svg>
    <div class="name">Farol</div>
  </div>
  <div class="sub">Manual de bolso para docentes — inclusão na sala de aula.</div>
  <div class="acro">Ferramentas · Abordagens · Reconhecer · Orientar · aLunos</div>
  <div class="foot">24 línguas · bibliografia citada · guilhermegfmachado.github.io/farol</div>
</div>`;

const b = await chromium.launch({
  executablePath: process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
});

for (const [file, size, fill] of [
  ['icon-192.png', 192, 0.71],
  ['icon-512.png', 512, 0.71],
  // iOS crops to a rounded square, so the corners go but the edges mostly stay.
  ['apple-touch-icon.png', 180, 0.66],
  // Android maskable: the platform may crop to a circle and only guarantees a
  // safe zone of 40% radius from the centre. The tower is tall and narrow, so
  // its diagonal — not its height — is what has to fit. 0.60 leaves margin.
  ['icon-maskable-512.png', 512, 0.6],
]) {
  const p = await b.newPage({ viewport: { width: size, height: size } });
  await p.setContent(iconPage(size, fill));
  await p.screenshot({ path: join(pub, file), omitBackground: false });
  await p.close();
  console.log('wrote', file, `${size}×${size}`);
}

const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(ogPage);
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(150);
await p.screenshot({ path: join(pub, 'og-image.png') });
console.log('wrote og-image.png 1200×630');
await b.close();
