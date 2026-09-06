// Build gate: a translated card must not silently lose a section.
//
// Sections are paired with their translation by position. Adding one to a
// Portuguese card used to shift every locale and print Portuguese onto a
// translated page; check-pt-leak.mjs now catches that. The fix for it was to
// stop falling back to the Portuguese source — which closed the leak and
// opened this hole instead: a section with no translation at its position now
// renders as nothing at all, and nothing says so. A locale quietly missing a
// section looks exactly like a locale that never had one.
//
// So the shape is pinned here. Every card must have the same number of
// sections in every locale as it does in Portuguese, with one deliberate
// exception: the legal card carries a section about the Portuguese decree
// revision that belongs on no other country's card.
//
// The same silence applies one level down. Five locales were found short a
// bullet on three cards — including question 5 of the ethics decision grid,
// so those readers got a numbered list that stopped at four. A missing bullet
// renders as nothing at all, exactly like a missing section, so the bullet
// counts are pinned too. The legal card is exempt from that half: those cards
// are each written for their own country and share only a shape, not content.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const EXPECTED_SHORT = { legislacao: 1 };   // slug -> sections PT has that locales do not

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(p);
  }
  return out;
}

const shape = (file) => {
  const html = readFileSync(file, 'utf8');
  const card = html.match(/<article class="card[\s\S]*?<\/article>/);
  if (!card) return null;
  // Citations are shared across locales by design, so they are not compared.
  const body = card[0].replace(/<ol class="references-list"[\s\S]*?<\/ol>/, '');
  return (body.match(/<ul[^>]*>[\s\S]*?<\/ul>/g) || [])
    .map((ul) => (ul.match(/<li/g) || []).length);
};

const count = (file) => {
  const html = readFileSync(file, 'utf8');
  const card = html.match(/<article class="card[\s\S]*?<\/article>/);
  return card ? (card[0].match(/card-section-label/g) || []).length : null;
};

const pages = walk('dist');
const isCard = (rel) => /^(references|profiles)\/[^/]+$/.test(rel.replace(/\/index\.html$/, ''));

// Portuguese lives at the root; every other locale under its own prefix.
const pt = {};
const ptShape = {};
for (const f of pages) {
  const rel = f.replace(/^dist\//, '');
  if (isCard(rel)) {
    pt[rel.split('/')[1]] = count(f);
    ptShape[rel.split('/')[1]] = shape(f);
  }
}

const problems = [];
for (const f of pages) {
  const rel = f.replace(/^dist\//, '');
  const parts = rel.split('/');
  if (!/^[a-z]{2}$/.test(parts[0]) || parts[0] === 'pt') continue;
  if (!isCard(parts.slice(1).join('/'))) continue;
  const [lang, , slug] = parts;
  const n = count(f);
  if (pt[slug] == null || n == null) continue;
  const allowed = EXPECTED_SHORT[slug] ?? 0;
  const short = pt[slug] - n;
  if (short !== allowed) {
    problems.push(`${lang}/${parts[1]}/${slug}: ${n} sections, Portuguese has ${pt[slug]} ` +
      `(expected ${allowed} fewer, found ${short})`);
    continue;
  }
  // Bullet counts, for every card whose sections are actually translations.
  if (slug === 'legislacao') continue;
  const mine = shape(f), ref = ptShape[slug];
  if (!mine || !ref) continue;
  for (let i = 0; i < ref.length; i++) {
    if ((mine[i] ?? 0) < ref[i]) {
      problems.push(`${lang}/${parts[1]}/${slug}: section ${i + 1} has ${mine[i] ?? 0} bullets, ` +
        `Portuguese has ${ref[i]}`);
    }
  }
}

if (problems.length) {
  console.error(`\nsections: ${problems.length} card(s) do not match the Portuguese shape\n`);
  for (const p of problems.slice(0, 15)) console.error('  ' + p);
  if (problems.length > 15) console.error(`  … and ${problems.length - 15} more`);
  process.exit(1);
}
console.log(`sections: ${Object.keys(pt).length} cards x 28 locales, sections and bullets match`);
