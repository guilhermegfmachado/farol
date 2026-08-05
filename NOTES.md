# Phase 0 survey — read before Phase 1

Nothing has been changed. This answers the brief's Phase 0 questions and flags
four points where the brief's assumptions do not match the repository.

---

## Blocking finding: the homepage is 29 near-copies

The brief anticipated this: *"If the homepage turns out to be 24 copies,
deduplicating it into one component is the whole job and the rest of this brief
waits."*

That is the case, and it is worse than copies — they have **drifted**.

| | |
|---|---|
| `index.astro` files | **29** (28 under `src/pages/{lang}/`, plus `src/pages/index.astro` for PT) |
| Distinct shapes after normalising the locale token | **24** |
| Normalised diff, `de` vs `en` homepage | **17 lines** |

The drift is not cosmetic. Between two locales' homepages:

- one declares `const categoryLang`, the other `const categoryEn` — a
  **per-file duplicate of `categoryTranslations`**, which already exists in
  `i18n.ts`
- one passes `description={t.tagline}`, the other a hardcoded English sentence
- one renders `<p>{t.about_p1}</p>`, the other `<p set:html={t.about_p1} />`
- `aria-label` is a hardcoded literal in every copy — 29 hand-translated strings
  that never went through `i18n.ts`

The same duplication applies to `about.astro` (28 copies), `profiles/[slug].astro`
(28) and `references/[slug].astro` (28). **113 near-duplicate page files.**

By contrast, six routes are already single components under `src/pages/[lang]/`:
`strategies`, `lighthouse`, `how-it-was-made`, `tools/index`, `tools/[slug]`,
`references/legislacao/[country]`. These are the model to follow.

**Recommendation: Phase 1 is deduplication, and the rest of the brief waits.**
Every later phase — moving the profile grid, changing the taxonomy, reducing
chrome — otherwise means the same edit 29 times, which is how the drift above
happened in the first place.

---

## Four corrections to the brief

### 1. There are 29 locales, not 24

`ALL_LANGS` in `src/lib/i18n.ts` is the single source of truth:

```
pt en es fr it hr de nl pl ro cs sv da fi sk el hu bg lt lv et sl ga mt
tr no is sr mk
```

The last five — Turkish, Norwegian, Icelandic, Serbian, Macedonian — were added
after the brief was written. Constraint 2 ("all 24 locales stay at parity")
should read 29.

### 2. Page counts are *not* equal across locales, by design

| Count | Locales |
|---|---|
| 36 | 25 locales |
| 37 | `el` (Cyprus), `nl` (Flanders) |
| 38 | `fr` (Wallonia-Brussels, Luxembourg) |
| 39 | `de` (Austria, Ostbelgien, Liechtenstein) |

These extras are the country-variant legal cards at
`/{lang}/references/legislacao/{country}/`. Language is not country: German
serves four countries, French three.

**This directly affects the CI parity test the brief calls its highest-value
item.** A test asserting identical page counts would fail on correct content. It
must compare page counts *excluding* the country axis, or compare the set of
page *kinds*. Written as specified, it would be reverted within a day.

### 3. The homepage has 14 observations, not 12

`src/lib/observations.ts` holds 14, in the three groups the brief names. The
instruction to keep them all still stands; the count is just higher.

### 4. The language picker is already a `<select>`

Header renders a single `<select>` showing the current locale and expanding to
29 options — not a flat list of codes. Phase 3's first item is already done.

The site is **not** JS-free (theme toggle, reading mode, header search, PDF
export, language banner, feedback form), so the picker's JS dependency is
consistent with the rest.

---

## Measured baseline

### Homepage (EN), before any change

| Metric | Value |
|---|---|
| Interactive elements, whole page | **46** |
| …inside `<main>` | 45 |
| Observation chips | 14 |
| Profile + reference cards (`.tree-node`) | 12 (7 + 5) |
| Distinct font sizes in `<main>` | **16** |
| Distinct font weights | 3 (400, 600, 700) |
| Font families | 2 (Plus Jakarta Sans, JetBrains Mono) |

The brief estimated ~24 interactive elements going to ~14. The real starting
number is 46. Phase 1 as written removes 12 (the card grid) and leaves ~34.

Typography exceeds the brief's threshold: **16 sizes against a budget of ~5**.
Weights and families are already within budget.

### Navigation surfaces

| Surface | Destinations |
|---|---|
| Header | wordmark, night toggle, search, reading mode, language `<select>` |
| Homepage body | "Learn more →", The Tower, AI Tools |
| Footer nav | Home, Strategies, The Tower, Tools |
| Footer meta | How to use, How it was made, licence, author, GitHub |

**The Tower and Tools each appear twice** (homepage body + footer nav). Home in
the footer is redundant on the homepage. That is the duplication to cut, and it
does not require touching URLs.

### Taxonomy, as it stands

| Slug | index | category |
|---|---|---|
| tdah, dislexia, dispraxia, autismo, sobredotacao, plnm, discalculia | 01–07 | `Perfil` |
| etica | 08 | `Referência` |
| oficina | **09** | **`Recurso`** |
| legislacao | 10 | `Referência` |
| diferenciacao, avaliacao | 11–12 | `Referência` |

Confirmed exactly as the brief describes: one continuous sequence, three
category nouns, `Recurso` used once. Option A is achievable — but note `index`
is a **string** in the Zod schema (`z.string()`, values `"01"`…`"12"`), and it
drives ordering in the grid, the tower and prev/next navigation. Changing it to
`kind` + per-kind `order` touches those three consumers.

---

## Where things live

| Concern | Location |
|---|---|
| Locale list | `src/lib/i18n.ts` → `ALL_LANGS` / `PREFIXED_LANGS` |
| UI strings | `src/lib/i18n.ts` → `ui` (87 keys × 29) |
| Card titles/subtitles | `i18n.ts` → `entryTranslations` |
| Section headings | `i18n.ts` → `sectionLabelTranslations` |
| Category nouns | `i18n.ts` → `categoryTranslations` — **bypassed by all 29 homepages** |
| Card bodies | `src/lib/content-translations.ts` |
| Homepage observations | `src/lib/observations.ts` |
| Content source (PT) | `src/content/profiles/`, `src/content/references/`, `src/content/tools/` |
| Schema | `src/content/config.ts` |
| Components | `Base.astro`, `Header`, `Footer`, `Breadcrumb`, `LighthouseMark`, `SaveStar` |

`SaveStar.astro` is imported by nothing. Its styles and 8 translated strings
exist across all 29 locales. Out of scope here; noted so it is not mistaken for
live code.

---

## Proposed order

1. **Deduplicate the 113 per-locale page files into `[lang]` routes.** No URL
   changes, no translation changes — the routes already exist for six pages, so
   this is applying an established pattern. This must come first.
2. Fix the CI parity test design (country axis) before writing it.
3. Then Phases 1–3 as briefed, each landing once instead of 29 times.

Nothing in Phases 1–3 requires a URL or translation change as far as this survey
can tell. The one risk flagged in the brief — slug renaming — is not needed.
