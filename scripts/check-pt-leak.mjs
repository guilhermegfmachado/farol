// Build gate: no Portuguese source text on a translated page.
//
// The [lang] card templates pair a section with its translation by position.
// Add a section to a Portuguese card and every locale shifts by one, and the
// section left without a counterpart used to fall back to the Portuguese
// source — so a card could render Portuguese law, in Portuguese, under an
// English heading. That shipped once. The templates no longer fall back, and
// this check fails the build if any Portuguese ever reaches a translated page
// by some other route.
//
// It reads the strings out of the content collection rather than keeping a
// list of phrases to look for: a hand-kept list only ever catches leaks
// someone already thought of, which is exactly how the first one got through.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// Every section label and bullet in the Portuguese source. References are
// excluded on purpose: a citation is the same in every language.
const needles = new Set();
for (const file of walk('src/content').filter((f) => f.endsWith('.md'))) {
  const src = readFileSync(file, 'utf8');
  const body = src.slice(0, src.indexOf('\nreferences:') + 1 || undefined);
  for (const m of body.matchAll(/^\s+-\s+(?:label:\s*)?"(.+)"$/gm)) {
    const text = m[1]
      .replace(/\\"/g, '"')
      .replace(/<[^>]+>/g, '')
      .trim();
    // Long enough to be prose rather than a shared proper noun or a number.
    if (text.length >= 30) needles.add(text);
  }
}

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');

const leaks = [];
for (const file of walk('dist').filter((f) => f.endsWith('.html'))) {
  const rel = file.replace(/^dist\//, '');
  const seg = rel.split('/')[0];
  // Only prefixed locales; the Portuguese pages live at the root.
  if (!/^[a-z]{2}$/.test(seg) || seg === 'pt') continue;
  const text = strip(readFileSync(file, 'utf8'));
  for (const n of needles) {
    if (text.includes(n)) leaks.push({ page: rel, text: n });
  }
}

if (leaks.length) {
  console.error(`\npt-leak: ${leaks.length} Portuguese string(s) on translated pages\n`);
  for (const l of leaks.slice(0, 15)) {
    console.error(`  ${l.page}\n    ${l.text.slice(0, 100)}`);
  }
  if (leaks.length > 15) console.error(`  … and ${leaks.length - 15} more`);
  process.exit(1);
}
console.log(`pt-leak: ${needles.size} source strings checked, none on translated pages`);
