import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { entryTranslations, categoryTranslations, type Lang, ALL_LANGS } from '@/lib/i18n';
import { contentTranslations } from '@/lib/content-translations';
import { toolTranslations } from '@/lib/tool-translations';
import { countryLegal } from '@/lib/country-legal';

const LANGS: Lang[] = ALL_LANGS;

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

const strip = (s: string) => (s || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

// A short, clean snippet for the results list (no markup, no citation markers).
const snippet = (s: string, n = 150) => {
  const t = strip(s);
  return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t;
};

export const GET: APIRoute = async ({ params }) => {
  const lang = (params.lang || 'pt') as Lang;
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const prefix = lang === 'pt' ? base : `${base}${lang}/`;

  const profiles = await getCollection('profiles');
  const references = await getCollection('references');
  const tools = await getCollection('tools');

  type Item = { t: string; c: string; k: string; u: string; s: string; x: string };
  const items: Item[] = [];

  const addEntry = (entry: any, collection: 'profiles' | 'references') => {
    const slug = entry.id.replace(/\.md$/, '');
    const tr = lang === 'pt' ? null : entryTranslations[lang as Exclude<Lang, 'pt'>]?.[slug];
    const title = tr?.title ?? entry.data.title;
    const subtitle = tr?.subtitle ?? entry.data.subtitle ?? '';
    const cat = categoryTranslations[lang]?.[entry.data.category] ?? entry.data.category;
    const ct = lang === 'pt' ? null : contentTranslations[lang]?.[slug];
    const secs = (ct?.sections ?? entry.data.sections) as { items: string[] }[] | undefined;
    const bodyBits: string[] = [];
    (secs ?? []).forEach((sec) => (sec.items || []).forEach((it) => bodyBits.push(strip(it))));
    const refs = (ct?.references ?? entry.data.references ?? []) as string[];
    refs.forEach((r) => bodyBits.push(strip(r)));
    const body = bodyBits.join(' ');
    items.push({
      t: title,
      c: cat,
      k: entry.data.category,
      u: `${prefix}${collection}/${slug}/`,
      s: snippet(subtitle || body),
      x: `${title} ${subtitle} ${body}`.toLowerCase(),
    });
  };

  profiles.forEach((e) => addEntry(e, 'profiles'));
  references.forEach((e) => addEntry(e, 'references'));

  tools.forEach((tool) => {
    const slug = tool.id.replace(/\.md$/, '');
    const tt = lang === 'pt' ? null : toolTranslations[lang]?.[slug];
    const desc = tt?.desc ?? tool.data.desc ?? '';
    const rgpd = tt?.rgpd_note ?? tool.data.rgpd_note ?? '';
    const cat = categoryTranslations[lang]?.['Recurso'] ?? 'Tool';
    items.push({
      t: tool.data.name,
      c: cat,
      k: 'Recurso',
      u: `${prefix}tools/${slug}/`,
      s: snippet(desc),
      x: `${tool.data.name} ${desc} ${rgpd}`.toLowerCase(),
    });
  });

  // Country variants of the legal card (e.g. Austria under German) are real
  // pages with their own law — index them so a teacher searching their own
  // system's terms finds their card, not only the language default.
  Object.values(countryLegal)
    .filter((v) => v.lang === lang)
    .forEach((v) => {
      const bodyBits: string[] = [];
      v.sections.forEach((sec) => sec.items.forEach((it) => bodyBits.push(strip(it))));
      v.references.forEach((r) => bodyBits.push(strip(r)));
      const body = bodyBits.join(' ');
      items.push({
        t: `${v.title} — ${v.country}`,
        c: categoryTranslations[lang]?.['Referência'] ?? 'Referência',
        k: 'Referência',
        u: `${prefix}references/legislacao/${v.code}/`,
        s: snippet(v.subtitle || body),
        x: `${v.title} ${v.country} ${v.subtitle} ${body}`.toLowerCase(),
      });
    });

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
