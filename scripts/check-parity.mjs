// Locale parity gate. Fails the build if any locale is missing a page the
// others have, or carries one they do not.
//
// Page counts are NOT equal across locales and must not be asserted to be:
// only the legal-framework card has a country axis, so German carries Austria,
// Ostbelgien and Liechtenstein, French carries Wallonia-Brussels and Luxembourg,
// Dutch carries Flanders and Greek carries Cyprus. A test that demanded equal
// counts would fail on correct content. This compares the set of page *kinds*
// instead, and checks the country cards separately against their declared list.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const src = fs.readFileSync('src/lib/i18n.ts', 'utf8');
const ALL = /export const ALL_LANGS: Lang\[\] = \[([^\]]*)\]/.exec(src)[1]
  .split(',').map((s) => s.trim().replace(/'/g, '')).filter(Boolean);
const country = fs.readFileSync('src/lib/country-legal.ts', 'utf8');
const VARIANTS = [...country.matchAll(/^  '([a-z]{2})-([a-z]{2})': \{/gm)]
  .map((m) => `${m[1]}/${m[2]}`);

const pages = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html') pages.push(p);
  }
})(DIST);

const byLang = new Map(ALL.map((l) => [l, new Set()]));
const countryCards = new Map(ALL.map((l) => [l, new Set()]));
for (const p of pages) {
  const rel = p.replace(/^dist\//, '').replace(/index\.html$/, '');
  const seg = rel.split('/')[0];
  const lang = ALL.includes(seg) && seg !== 'pt' ? seg : 'pt';
  const rest = (lang === 'pt' ? rel : rel.slice(seg.length + 1)).replace(/\/$/, '');
  const m = /^references\/legislacao\/([a-z]{2})$/.exec(rest);
  if (m) { countryCards.get(lang).add(`${lang}/${m[1]}`); continue; }
  byLang.get(lang).add(rest === '' ? '(home)' : rest);
}

// Portuguese uses its own slugs for two pages; map them to the shared kind.
const alias = { sobre: 'about', 'como-foi-feito': 'how-it-was-made' };
for (const [lang, set] of byLang) {
  for (const [from, to] of Object.entries(alias)) {
    if (set.delete(from)) set.add(to);
  }
}

const reference = byLang.get('en');
const problems = [];
for (const lang of ALL) {
  const have = byLang.get(lang);
  const missing = [...reference].filter((k) => !have.has(k));
  const extra = [...have].filter((k) => !reference.has(k));
  if (missing.length) problems.push(`${lang}: missing ${missing.join(', ')}`);
  if (extra.length) problems.push(`${lang}: unexpected ${extra.join(', ')}`);
}
const declared = new Set(VARIANTS);
const built = new Set([...countryCards.values()].flatMap((s) => [...s]));
for (const v of declared) if (!built.has(v)) problems.push(`country card declared but not built: ${v}`);
for (const v of built) if (!declared.has(v)) problems.push(`country card built but not declared: ${v}`);

const kinds = reference.size;
console.log(`parity: ${ALL.length} locales x ${kinds} page kinds, ${declared.size} country cards`);
if (problems.length) {
  console.error('\nPARITY FAILED');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log('parity OK');
