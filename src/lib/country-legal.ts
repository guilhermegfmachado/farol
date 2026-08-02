// Country variants of the legal-framework card.
//
// The manual is routed by language, which is right for eleven of the twelve
// cards: profiles, ethics, differentiation and assessment carry no national
// law. The legal card is the exception — and language is not country. German
// is the language of instruction in Germany, Austria, Belgium and Luxembourg,
// French in France, Belgium and Luxembourg, Greek in Greece and Cyprus.
//
// Rather than duplicate eleven country-neutral cards per country, only this
// one card gets a country axis: /{lang}/references/legislacao/{country}/.
// Each entry is written and sourced in the language its readers use.

import type { Lang } from './i18n';

export interface CountryLegal {
  lang: Lang;
  code: string;          // ISO 3166-1 alpha-2, lowercase — the URL segment
  country: string;       // country name in its own language
  title: string;
  subtitle: string;
  desc: string;
  note: string;          // scope note shown under the header (HTML allowed)
  sections: { label: string; items: string[] }[];
  refsLabel: string;
  references: string[];
}

const risSchPflG8 = 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&amp;Gesetzesnummer=10009576&amp;Paragraf=8';
const risUnBrk = 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&amp;Gesetzesnummer=20006062';
const src = (href: string) =>
  ` <a href="${href}" target="_blank" rel="noopener" class="ref-doi" aria-label="Quelle öffnen">↗</a>`;
const c = (n: number) => `<sup class="cite"><a href="#ref-${n}">${n}</a></sup>`;
const c2 = (a: number, b: number) =>
  `<sup class="cite"><a href="#ref-${a}">${a}</a>,<a href="#ref-${b}">${b}</a></sup>`;

export const countryLegal: Record<string, CountryLegal> = {
  at: {
    lang: 'de',
    code: 'at',
    country: 'Österreich',
    title: 'Rechtsrahmen',
    subtitle: 'Schulpflichtgesetz 1985 und begleitende Regelungen für inklusive Bildung in Österreich',
    desc: 'Der Rechtsrahmen, der Maßnahmen, Verfahren und Verantwortlichkeiten in der inklusiven österreichischen Schule definiert.',
    note: 'Diese Karte behandelt <strong>Österreich</strong>. Für Deutschland gibt es eine <a href="__DE__">eigene Fassung</a>. Für Belgien und Luxemburg besteht hier noch keine Fassung — wenden Sie sich an Ihre nationale Schulbehörde.',
    sections: [
      {
        label: 'Schulpflichtgesetz 1985 — die zentrale Grundlage',
        items: [
          `Die Bildungsdirektion stellt mit Bescheid sonderpädagogischen Förderbedarf (SPF) fest, wenn ein Kind dem Unterricht wegen einer Behinderung ohne sonderpädagogische Förderung nicht zu folgen vermag (§ 8 SchPflG).${c(1)}`,
          `Behinderung meint dabei eine <strong>nicht nur vorübergehende</strong> körperliche, geistige oder psychische Funktionsbeeinträchtigung oder Beeinträchtigung der Sinnesfunktionen — nicht eine vorübergehende Schwierigkeit.${c(1)}`,
          `Das Verfahren läuft auf Antrag der Erziehungsberechtigten oder von Amts wegen; ein schulpsychologisches Gutachten wird mit deren Zustimmung eingeholt.${c(1)}`,
          `Die Erziehungsberechtigten können den Besuch einer allgemeinen Schule verlangen. Steht in zumutbarer Entfernung keine geeignete Schule zur Verfügung, hat die Bildungsdirektion entsprechende Maßnahmen zu setzen.${c(1)}`,
          `Österreich hat die UN-Behindertenrechtskonvention 2008 ratifiziert (BGBl. III Nr. 155/2008, in Kraft seit 26. Oktober 2008); der Nationale Aktionsplan Behinderung 2022–2030 führt inklusive Bildung als eigenes Handlungsfeld.${c2(2, 3)}`,
        ],
      },
      {
        label: 'Was ohne Verfahren möglich ist',
        items: [
          `Innere Differenzierung, Sitzordnung, gestufte Aufgaben, mehr Zeit und mündliche statt schriftlicher Nachweise brauchen weder Bescheid noch Gutachten — sie sind gewöhnliche Unterrichtsgestaltung.`,
          `<strong>Nachteilsausgleich</strong> gleicht die Bedingungen aus, unter denen geprüft wird (Zeit, Form, Hilfsmittel), und verändert das Anforderungsniveau nicht.${c(4)}`,
          `Bei Schularbeiten werden Inhalt, Ausdruck, Sprachrichtigkeit und Schreibrichtigkeit beurteilt; eine schwache Schreibrichtigkeit kann durch die übrigen Bereiche ausgeglichen werden — die Grundlage für den Umgang mit Lese-Rechtschreib-Schwäche (§ 16 LBV).${c(4)}`,
        ],
      },
      {
        label: 'Wann und wohin verweisen',
        items: [
          `Erste Anlaufstelle ist die <strong>Schulpsychologie–Bildungsberatung</strong> der Bildungsdirektion: in jeder Bildungsregion vertreten, kostenlos, vertraulich und freiwillig.${c(5)}`,
          `Ein SPF-Verfahren ist erst dann angezeigt, wenn Anpassungen im Unterricht nachweislich nicht ausreichen — der Bescheid ist kein Etikett, sondern die Grundlage für Ressourcen.${c(1)}`,
          `Der SPF kann für einzelne oder alle Gegenstände festgestellt und bei veränderter Sachlage neu beurteilt oder aufgehoben werden.${c(1)}`,
          `Diagnosen (Legasthenie, Dyskalkulie, ADHS, Autismus) stellen klinisch-psychologische oder ärztliche Stellen, nicht die Schule.`,
        ],
      },
      {
        label: 'Begabungsförderung',
        items: [
          `Das Überspringen einer Schulstufe ist zulässig, wenn außergewöhnliche Leistungen und die nötige geistige Reife vorliegen und keine Überforderung in körperlicher und geistiger Hinsicht zu befürchten ist (§ 26 SchUG).${c(6)}`,
          `Im Zweifel folgen eine Einstufungsprüfung und gegebenenfalls eine schulpsychologische oder schulärztliche Untersuchung; die Entscheidung trifft die Schulkonferenz.${c(6)}`,
          `Zulässig ist das Überspringen je einmal in der Grundschule, danach bis einschließlich der 8. Schulstufe und nach der 8. Schulstufe; § 26a regelt zusätzlich die Nahtstellen zwischen den Schularten.${c(6)}`,
          `Akzeleration ist nur ein Weg: Anreicherung innerhalb der Klasse — tiefere statt mehr Aufgaben — braucht kein Verfahren.`,
        ],
      },
      {
        label: 'Deutsch als Zweitsprache',
        items: [
          `Der Sprachstand wird mit <strong>MIKA-D</strong> erhoben; das Ergebnis entscheidet über den ordentlichen oder außerordentlichen Status.${c(7)}`,
          `Bei außerordentlichem Status besuchen Schülerinnen und Schüler Deutschförderklassen (15 Wochenstunden in der Primarstufe, 20 in der Sekundarstufe) oder Deutschförderkurse.${c(7)}`,
          `Seit der Weiterentwicklung der Deutschförderung können Schulen zwischen autonomer Deutschförderung und dem Modell der Deutschförderklassen wählen.${c(7)}`,
          `Ein außerordentlicher Status betrifft die Unterrichtssprache, nicht die Begabung — Sprachbarriere und Lernstörung sind getrennt zu prüfen.`,
        ],
      },
      {
        label: 'Zum Nachschlagen',
        items: [
          `SPF-Feststellung: § 8 Schulpflichtgesetz 1985, zuständig ist die Bildungsdirektion.${c(1)}`,
          `Nachteilsausgleich und Beurteilung: § 16 Leistungsbeurteilungsverordnung.${c(4)}`,
          `Überspringen von Schulstufen: §§ 26 und 26a Schulunterrichtsgesetz.${c(6)}`,
          `Deutschförderung und Sprachstandsfeststellung: MIKA-D und Deutschförderklassen.${c(7)}`,
          `Erste Anlaufstelle: Schulpsychologie–Bildungsberatung der zuständigen Bildungsdirektion.${c(5)}`,
        ],
      },
    ],
    refsLabel: 'Referenzen',
    references: [
      `Schulpflichtgesetz 1985, § 8 (Schulbesuch bei sonderpädagogischem Förderbedarf), Bundesrecht konsolidiert.${src(risSchPflG8)}`,
      `Übereinkommen über die Rechte von Menschen mit Behinderungen (UN-Behindertenrechtskonvention), BGBl. III Nr. 155/2008, in Kraft seit 26. Oktober 2008.${src(risUnBrk)}`,
      `Nationaler Aktionsplan Behinderung 2022–2030, Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz.${src('https://www.sozialministerium.gv.at/Themen/Soziales/Menschen-mit-Behinderungen/UN-Behindertenrechtskonvention.html')}`,
      `Verordnung über die Leistungsbeurteilung (LBV), § 16 — Beurteilung von Schularbeiten nach Inhalt, Ausdruck, Sprachrichtigkeit und Schreibrichtigkeit.`,
      `Schulpsychologie–Bildungsberatung der Bildungsdirektionen — Beratungsstellen in allen Bildungsregionen, kostenlos und vertraulich.`,
      `Schulunterrichtsgesetz, §§ 26 und 26a (Begabungsförderung — Überspringen von Schulstufen).${src('https://www.jusline.at/gesetz/schug/paragraf/26')}`,
      `Deutschförderklassen und Deutschförderkurse sowie MIKA-D zur Feststellung des (außer-)ordentlichen Status, Bundesministerium für Bildung / IQS.${src('https://www.iqs.gv.at/themen/nationale-kompetenzerhebung/mika-d')}`,
    ],
  },
};

/** Country variants available for a given language, excluding `code`. */
export function variantsFor(lang: Lang, exclude?: string): CountryLegal[] {
  return Object.values(countryLegal).filter((v) => v.lang === lang && v.code !== exclude);
}
