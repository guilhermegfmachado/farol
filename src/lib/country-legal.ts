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

// Keyed by `${lang}-${code}`: Belgium appears three times under the same URL
// segment because language already disambiguates the community.
export const countryLegal: Record<string, CountryLegal> = {
  'de-at': {
    lang: 'de',
    code: 'at',
    country: 'Österreich',
    title: 'Rechtsrahmen',
    subtitle: 'Schulpflichtgesetz 1985 und begleitende Regelungen für inklusive Bildung in Österreich',
    desc: 'Der Rechtsrahmen, der Maßnahmen, Verfahren und Verantwortlichkeiten in der inklusiven österreichischen Schule definiert.',
    note: 'Diese Karte behandelt <strong>Österreich</strong>. Eigene Fassungen bestehen für <a href="__DEFAULT__">Deutschland</a> und <a href="/farol/de/references/legislacao/be/">Ostbelgien</a>. Für Luxemburg gibt es eine <a href="/farol/fr/references/legislacao/lu/">Fassung auf Französisch</a>, der Sprache der dortigen Rechtstexte.',
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
'nl-be': {
    lang: 'nl',
    code: 'be',
    country: 'Vlaanderen',
    title: 'Wettelijk kader',
    subtitle: 'Leersteundecreet (2023) en het zorgcontinuüm voor leerlingen met specifieke onderwijsbehoeften in Vlaanderen',
    desc: 'Het wettelijk kader dat maatregelen, procedures en verantwoordelijkheden bepaalt in de inclusieve Vlaamse school.',
    note: 'Deze kaart betreft <strong>Vlaanderen</strong> (België). Onderwijs is in België een bevoegdheid van de gemeenschappen: voor de <a href="/farol/fr/references/legislacao/be/">Franse Gemeenschap</a> en de <a href="/farol/de/references/legislacao/be/">Duitstalige Gemeenschap</a> gelden andere regels. Voor <a href="__DEFAULT__">Nederland</a> is er een aparte versie.',
    sections: [
      {
        label: 'Leersteundecreet — het centrale kader',
        items: [
          `Het Leersteundecreet werd op 3 mei 2023 goedgekeurd en trad op 1 september 2023 in werking; het vervangt het M-decreet.${c(1)}`,
          `Het vertrekt van het recht op kwaliteitsvol inclusief onderwijs voor elk kind.${c(1)}`,
          `Een specifieke onderwijsbehoefte wordt niet als een persoonlijk gebrek gezien (medisch deficitdenken), maar als een <strong>afstemmingsprobleem</strong> tussen de klas- en schoolcontext en de behoeften van de leerling.${c(1)}`,
          `Leersteuncentra ondersteunen leerlingen met specifieke onderwijsbehoeften in het gewoon onderwijs; de ondersteuning richt zich op de leerling, de leraar én het schoolteam.${c(1)}`,
        ],
      },
      {
        label: 'Het zorgcontinuüm — wat de school zelf doet',
        items: [
          `<strong>Brede basiszorg</strong>: de zorg die elke leraar aan alle leerlingen biedt om optimale ontwikkelingskansen na te streven.${c(2)}`,
          `<strong>Verhoogde zorg</strong>: volstaat de basiszorg niet, dan komen remediërende, differentiërende, compenserende en dispenserende maatregelen erbij — vaak STICORDI of ReDiCoDis genoemd.${c(2)}`,
          `<strong>Uitbreiding van zorg</strong>: de school stelt vast dat verhoogde zorg onvoldoende is en de redelijke aanpassingen uitgeput zijn; het CLB wordt betrokken.${c(2)}`,
          `<strong>Individueel aangepast curriculum (IAC)</strong>: wanneer het gemeenschappelijk curriculum ook mét aanpassingen niet haalbaar blijft.${c(2)}`,
        ],
      },
      {
        label: 'Wanneer en waarheen verwijzen',
        items: [
          `Het <strong>CLB</strong> (Centrum voor Leerlingenbegeleiding) is de vaste partner van de school en de eerste stap buiten het schoolteam.${c(2)}`,
          `Een verslag (GC-verslag, IAC-verslag of OV4-verslag) opent het recht op leersteun of op een individueel traject.${c(1)}`,
          `Diagnoses stellen is werk voor het CLB of externe diagnostische centra — niet voor de leraar.`,
        ],
      },
      {
        label: 'Anderstalige nieuwkomers',
        items: [
          `<strong>OKAN</strong> (onthaalonderwijs voor anderstalige nieuwkomers) bestaat sinds 1995 en vangt leerlingen op die het Nederlands nog niet kennen.${c(3)}`,
          `Scholen werken met een individueel leertraject tijdens het onthaaljaar én bij de overgang naar het gewoon onderwijs.${c(3)}`,
          `Nieuwkomers blijven vaker zitten en zijn oververtegenwoordigd in bso en tso — beoordeel taalbarrière en leerstoornis apart.${c(3)}`,
        ],
      },
      {
        label: 'Cognitief sterk functionerende leerlingen',
        items: [
          `Er is geen apart decreet voor hoogbegaafdheid; de Vlaamse overheid ondersteunt scholen via een beleid rond cognitief sterk functionerende leerlingen, met ankerscholen die praktijk en beleid versterken.${c(4)}`,
          `Verrijking binnen de klas — diepere in plaats van méér opdrachten — vraagt geen procedure.`,
        ],
      },
      {
        label: 'Om snel na te slaan',
        items: [
          `Leersteun en verslagen: Leersteundecreet, van kracht sinds 1 september 2023.${c(1)}`,
          `Fasen van zorg en STICORDI/ReDiCoDis: het zorgcontinuüm.${c(2)}`,
          `Eerste stap buiten de school: het CLB.${c(2)}`,
          `Anderstalige nieuwkomers: OKAN.${c(3)}`,
        ],
      },
    ],
    refsLabel: 'Referenties',
    references: [
      `Decreet leersteun (Leersteundecreet), goedgekeurd op 3 mei 2023, in werking sinds 1 september 2023 — Onderwijs Vlaanderen.${src('https://onderwijs.vlaanderen.be/nl/leerlingen-met-specifieke-onderwijsbehoeften-in-het-secundair-onderwijs')}`,
      `Het zorgcontinuüm: brede basiszorg, verhoogde zorg en uitbreiding van zorg — Prodia.${src('https://prodiagnostiek.be/het-zorgcontinuum/brede-basiszorg/')}`,
      `Onthaalonderwijs voor anderstalige nieuwkomers (OKAN) — Onderwijs Vlaanderen.${src('https://onderwijs.vlaanderen.be/nl/okan')}`,
      `Ondersteuningsbeleid cognitief sterk functionerende leerlingen — Onderwijs Vlaanderen.${src('https://onderwijs.vlaanderen.be/oproep-ondersteuningsbeleid-cognitief-sterk-functionerende-leerlingen')}`,
    ],
  },

  'fr-be': {
    lang: 'fr',
    code: 'be',
    country: 'Fédération Wallonie-Bruxelles',
    title: 'Cadre légal',
    subtitle: 'Décret du 7 décembre 2017 sur les aménagements raisonnables et pôles territoriaux en Fédération Wallonie-Bruxelles',
    desc: "Le cadre légal définissant mesures, procédures et responsabilités dans l'école inclusive en Fédération Wallonie-Bruxelles.",
    note: "Cette fiche couvre la <strong>Fédération Wallonie-Bruxelles</strong> (Belgique). En Belgique, l’enseignement relève des communautés : la <a href=\"/farol/nl/references/legislacao/be/\">Communauté flamande</a> et la <a href=\"/farol/de/references/legislacao/be/\">Communauté germanophone</a> ont leurs propres règles. Pour la <a href=\"__DEFAULT__\">France</a>, il existe une fiche distincte.",
    sections: [
      {
        label: 'Décret du 7 décembre 2017 — le texte central',
        items: [
          `Tout élève de l’enseignement ordinaire fondamental et secondaire présentant un ou des besoins spécifiques a droit à des <strong>aménagements raisonnables</strong> matériels, organisationnels ou pédagogiques appropriés, pour autant que sa situation ne rende pas indispensable une prise en charge par l’enseignement spécialisé.${c(1)}`,
          `Le décret précise les modalités de concertation et de mise en œuvre; il s’applique depuis l’année scolaire 2018-2019.${c(1)}`,
          `Un aménagement raisonnable adapte les conditions, pas le niveau d’exigence.`,
        ],
      },
      {
        label: 'Pôles territoriaux',
        items: [
          `Créés dans le cadre du <strong>Pacte pour un Enseignement d’excellence</strong>, ils soutiennent les écoles ordinaires dans la mise en place des aménagements raisonnables et des intégrations permanentes totales.${c(2)}`,
          `Un pôle territorial est une structure rattachée à une école d’enseignement spécialisé, dite « école siège ».${c(2)}`,
        ],
      },
      {
        label: 'Concertation et orientation',
        items: [
          `La mise en place des aménagements passe par une <strong>réunion de concertation</strong>.${c(1)}`,
          `La présence d’experts requiert l’accord de la direction, après concertation avec l’équipe éducative et consultation, le cas échéant, des CPMS ou de centres agréés par la Fédération Wallonie-Bruxelles.${c(1)}`,
          `Le <strong>CPMS</strong> (Centre psycho-médico-social) est le partenaire habituel de l’école; le diagnostic relève de professionnels qualifiés, pas de l’enseignant.`,
        ],
      },
      {
        label: 'Élèves à haut potentiel',
        items: [
          `Le haut potentiel figure parmi les besoins spécifiques: la Fédération Wallonie-Bruxelles a publié des fiches-outils sur les besoins spécifiques et les aménagements raisonnables, dont une consacrée au haut potentiel intellectuel, ainsi qu’une brochure sur l’enseignement aux élèves à haut potentiel.${c(3)}`,
          `L’enrichissement en classe — des tâches plus exigeantes plutôt que plus nombreuses — ne requiert aucune procédure.`,
        ],
      },
      {
        label: 'Élèves primo-arrivants',
        items: [
          `Le <strong>DASPA</strong> (dispositif d’accueil et de scolarisation des élèves primo-arrivants), voté le 18 mai 2012, organise l’accueil, l’orientation et l’intégration.${c(4)}`,
          `La durée en DASPA va d’une semaine à un an, prolongeable de six mois au maximum sur décision du conseil d’intégration.${c(4)}`,
          `La barrière linguistique n’est pas un trouble d’apprentissage: les deux s’évaluent séparément.`,
        ],
      },
      {
        label: 'À retenir',
        items: [
          `Aménagements raisonnables: décret du 7 décembre 2017.${c(1)}`,
          `Appui à l’école ordinaire: pôle territorial rattaché à une école siège.${c(2)}`,
          `Premier relais hors de l’équipe éducative: le CPMS.${c(1)}`,
          `Primo-arrivants: DASPA.${c(4)}`,
        ],
      },
    ],
    refsLabel: 'Références',
    references: [
      `Décret du 7 décembre 2017 relatif à l’accueil, à l’accompagnement et au maintien dans l’enseignement ordinaire fondamental et secondaire des élèves présentant des besoins spécifiques.${src('https://gallilex.cfwb.be/textes-normatifs/44807')}`,
      `Pôles territoriaux — Pacte pour un Enseignement d’excellence, Fédération Wallonie-Bruxelles.${src('https://pactepourunenseignementdexcellence.cfwb.be/actualites/pacte-enseignement-excellence-poles-territoriaux-ecole-inclusive-besoins-specifiques/')}`,
      `Les aménagements raisonnables — enseignement.be, Fédération Wallonie-Bruxelles.${src('http://www.enseignement.be/index.php?page=27781')}`,
      `Décret du 18 mai 2012 visant à mettre en place un dispositif d’accueil et de scolarisation des élèves primo-arrivants (DASPA).`,
    ],
  },

  'de-be': {
    lang: 'de',
    code: 'be',
    country: 'Ostbelgien',
    title: 'Rechtsrahmen',
    subtitle: 'Förderdekrete der Deutschsprachigen Gemeinschaft Belgiens für inklusive Bildung in Ostbelgien',
    desc: 'Der Rechtsrahmen, der Maßnahmen, Verfahren und Verantwortlichkeiten in der inklusiven Schule der Deutschsprachigen Gemeinschaft Belgiens definiert.',
    note: 'Diese Karte behandelt die <strong>Deutschsprachige Gemeinschaft Belgiens</strong> (Ostbelgien). Bildung ist in Belgien Sache der Gemeinschaften: für <a href="/farol/nl/references/legislacao/be/">Flandern</a> und die <a href="/farol/fr/references/legislacao/be/">Französische Gemeinschaft</a> gelten andere Regeln. Eigene Fassungen bestehen für <a href="__DEFAULT__">Deutschland</a> und <a href="/farol/de/references/legislacao/at/">Österreich</a>.',
    sections: [
      {
        label: 'Rechtliche Grundlagen',
        items: [
          `Nach dem Dekret vom 31. August 1998 hat jede Schülerin und jeder Schüler ein Recht auf angemessene pädagogische Förderung — auch bei Behinderung, Anpassungs- oder Lernschwierigkeiten — beim Erwerb schulischer, sozialer und gesellschaftlicher Kompetenzen.${c(1)}`,
          `Die Förderung soll im natürlichen Lebensumfeld stattfinden, möglichst wohnortnah und vorzugsweise integriert in einer Regelklasse, bei Bedarf ergänzt durch förderpädagogische Maßnahmen in Integrationsprojekten oder an einer Förderschule.${c(1)}`,
          `Das Dekret vom 11. Mai 2009 schuf das <strong>Zentrum für Förderpädagogik</strong> (ZFP), um die Förderung an Regel- und Förderschulen zu verbessern.${c(2)}`,
          `Das Dekret vom 25. Juni 2012 regelt Schulinspektion, Schulentwicklungsberatung sowie die Schulberatung für Inklusion und Integration.${c(3)}`,
        ],
      },
      {
        label: 'Das Zentrum für Förderpädagogik',
        items: [
          `Es koordiniert förderpädagogische Maßnahmen in Integrationsprojekten und stellt Fachpersonal für die Förderung an Regelschulen bereit.${c(2)}`,
          `Es unterstützt beim Erstellen individueller Förderpläne.${c(2)}`,
          `Es umfasst Abteilungen für Grund- und Sekundarschule sowie ein Internat.${c(2)}`,
        ],
      },
      {
        label: 'Wer sonst unterstützt',
        items: [
          `<strong>Kaleido Ostbelgien</strong>, das Zentrum für die gesunde Entwicklung von Kindern und Jugendlichen, arbeitet mit Fachberatungen, der Schulentwicklungsberatung, der Schulberatung für Inklusion und Integration sowie dem Kompetenzzentrum des ZFP zusammen.${c(4)}`,
          `Diagnosen stellen klinische oder ärztliche Stellen, nicht die Schule.`,
        ],
      },
      {
        label: 'Laufende Reform',
        items: [
          `Die Förderschulen beider Schulnetze — das ZFP und die Pater-Damian-Fördergrundschule — werden strukturell zusammengeführt; das neue <strong>Zentrum für inklusive Pädagogik</strong> (ZiP) soll 2026 seine Arbeit aufnehmen.${c(5)}`,
          `Prüfen Sie bei konkreten Verfahren daher stets den aktuellen Stand bei der zuständigen Stelle.`,
        ],
      },
      {
        label: 'Zum Nachschlagen',
        items: [
          `Recht auf angemessene Förderung: Dekret vom 31. August 1998.${c(1)}`,
          `Förderpädagogische Unterstützung und Förderpläne: Zentrum für Förderpädagogik, Dekret vom 11. Mai 2009.${c(2)}`,
          `Beratung für Inklusion und Integration: Dekret vom 25. Juni 2012.${c(3)}`,
          `Erste Anlaufstelle für Familien und Schulen: Kaleido Ostbelgien.${c(4)}`,
        ],
      },
    ],
    refsLabel: 'Referenzen',
    references: [
      `Dekret vom 31. August 1998 — Recht auf angemessene pädagogische Förderung, Deutschsprachige Gemeinschaft Belgiens.${src('https://eurydice.eacea.ec.europa.eu/eurypedia/belgium-german-speaking-community/separate-special-education-needs-provision-early')}`,
      `Dekret vom 11. Mai 2009 über das Zentrum für Förderpädagogik.${src('https://zfp.be/index.php?id=76')}`,
      `Dekret vom 25. Juni 2012 über die Schulinspektion, die Schulentwicklungsberatung und die Schulberatung für Inklusion und Integration.`,
      `Pädagogische Förderung und Beratung in der Deutschsprachigen Gemeinschaft — Eurydice.${src('https://eurydice.eacea.ec.europa.eu/de/national-education-systems/belgium-german-speaking-community/paedagogische-foerderung-und-beratung')}`,
      `Reform im Bereich der Förderpädagogik: Zusammenführung von ZFP und Pater-Damian-Fördergrundschule zum Zentrum für inklusive Pädagogik (ZiP) ab 2026.${src('https://lydiaklinkenberg.be/reform-im-bereich-der-foerderpaedagogik/')}`,
    ],
  },
'el-cy': {
    lang: 'el',
    code: 'cy',
    country: 'Κύπρος',
    title: 'Νομικό πλαίσιο',
    subtitle: 'Ο περί Αγωγής και Εκπαίδευσης Παιδιών με Ειδικές Ανάγκες Νόμος 113(Ι)/1999 και οι Κανονισμοί του 2001 στην Κύπρο',
    desc: 'Το νομικό πλαίσιο που ορίζει μέτρα, διαδικασίες και ευθύνες στο ενταξιακό σχολείο της Κύπρου.',
    note: 'Αυτή η κάρτα αφορά την <strong>Κύπρο</strong>. Για την <a href="__DEFAULT__">Ελλάδα</a> υπάρχει ξεχωριστή έκδοση — τα δύο πλαίσια διαφέρουν, παρότι η γλώσσα είναι κοινή.',
    sections: [
      {
        label: 'Ο Νόμος 113(Ι)/1999 — το κεντρικό κείμενο',
        items: [
          `Ο περί Αγωγής και Εκπαίδευσης Παιδιών με Ειδικές Ανάγκες Νόμος 113(Ι)/1999 εφαρμόζεται από τον Σεπτέμβριο του 2001, μαζί με τους αντίστοιχους Κανονισμούς του 2001.${c(1)}`,
          `Κατοχυρώνει το <strong>δικαίωμα φοίτησης στη γενική εκπαίδευση</strong> και θεσπίζει μηχανισμό εντοπισμού, αξιολόγησης και επαναξιολόγησης του παιδιού, με διασφαλισμένη συμμετοχή των γονέων στη λήψη αποφάσεων.${c(1)}`,
          `Ο νόμος έχει τροποποιηθεί με τους Νόμους 69(Ι)/2001, 87(Ι)/2014 και 166(Ι)/2020 — ελέγχετε πάντα την ισχύουσα ενοποιημένη μορφή.${c2(1, 2)}`,
        ],
      },
      {
        label: 'Ποιος αποφασίζει',
        items: [
          `Η εγγραφή και η τοποθέτηση αποφασίζονται από τις <strong>Επαρχιακές Επιτροπές Ειδικής Αγωγής και Εκπαίδευσης</strong>, ύστερα από πολυθεματική αξιολόγηση, σύμφωνα με τον Νόμο 113(Ι)/1999.${c(1)}`,
          `Η εφαρμογή του νόμου οδήγησε στη δημιουργία <strong>ειδικών μονάδων σε γενικά σχολεία</strong>, όπου το παιδί λαμβάνει εξατομικευμένη στήριξη παράλληλα με την ένταξή του στη γενική τάξη.${c(1)}`,
        ],
      },
      {
        label: 'Πού απευθύνεται το σχολείο',
        items: [
          `Η <strong>Υπηρεσία Εκπαιδευτικής Ψυχολογίας</strong> του Υπουργείου Παιδείας συνεργάζεται με τα σχολεία για μεμονωμένες περιπτώσεις μαθητών, μετά τη συμπλήρωση των σχετικών εντύπων.${c(3)}`,
          `Η Υπηρεσία στηρίζει επίσης μαθητές με μεταναστευτική βιογραφία που δεν έχουν ολοκληρώσει τα μαθήματα ελληνομάθειας, και μπορεί να συμβάλει σε ομαδικές, προληπτικές ή παρεμβατικές δράσεις.${c(3)}`,
          `Η διάγνωση ανήκει σε ειδικούς επαγγελματίες, όχι στο σχολείο· ο ρόλος του εκπαιδευτικού είναι η παρατήρηση και η παραπομπή.`,
        ],
      },
      {
        label: 'Για γρήγορη αναφορά',
        items: [
          `Κεντρικός νόμος: 113(Ι)/1999, όπως τροποποιήθηκε (69(Ι)/2001, 87(Ι)/2014, 166(Ι)/2020).${c(1)}`,
          `Αποφασιστικό όργανο: Επαρχιακή Επιτροπή Ειδικής Αγωγής και Εκπαίδευσης, μετά από πολυθεματική αξιολόγηση.${c(1)}`,
          `Πρώτη επαφή για το σχολείο: Υπηρεσία Εκπαιδευτικής Ψυχολογίας.${c(3)}`,
        ],
      },
    ],
    refsLabel: 'Παραπομπές',
    references: [
      `Ο περί Αγωγής και Εκπαίδευσης Παιδιών με Ειδικές Ανάγκες Νόμος του 1999 (113(Ι)/1999), ενοποιημένο κείμενο.${src('https://www.cylaw.org/nomoi/enop/non-ind/1999_1_113/full.html')}`,
      `Τροποποιητικοί νόμοι 69(Ι)/2001, 87(Ι)/2014 και 166(Ι)/2020.${src('https://www.cylaw.org/nomoi/indexes/1999_1_113.html')}`,
      `Συνεργασία της Υπηρεσίας Εκπαιδευτικής Ψυχολογίας με τα σχολεία — Υπουργείο Παιδείας, εγκύκλιος.${src('https://enimerosi.moec.gov.cy/archeia/1/ypp18857a')}`,
    ],
  },

  'fr-lu': {
    lang: 'fr',
    code: 'lu',
    country: 'Luxembourg',
    title: 'Cadre légal',
    subtitle: 'Loi du 20 juillet 2018 sur les centres de compétences en psycho-pédagogie spécialisée et l’éducation inclusive au Luxembourg',
    desc: "Le cadre légal définissant mesures, procédures et responsabilités dans l'école inclusive luxembourgeoise.",
    note: 'Cette fiche couvre le <strong>Luxembourg</strong>. Des fiches distinctes existent pour la <a href="__DEFAULT__">France</a> et la <a href="/farol/fr/references/legislacao/be/">Fédération Wallonie-Bruxelles</a>. Au Luxembourg, les textes légaux de référence sont en français.',
    sections: [
      {
        label: 'Loi du 20 juillet 2018 — le texte central',
        items: [
          `La loi du 20 juillet 2018 crée les <strong>centres de compétences en psycho-pédagogie spécialisée</strong> en faveur de l’inclusion scolaire, ainsi que le <strong>Service national de l’éducation inclusive</strong> (SNEI).${c(1)}`,
          `Huit centres de compétences et une agence répondent aux besoins spécifiques que les élèves peuvent présenter.${c(2)}`,
          `Parmi eux: le centre pour le développement socio-émotionnel, le Centre pour le développement des apprentissages Grande-Duchesse Maria Teresa (dyslexie, dyscalculie, dyspraxie) et le centre pour enfants et jeunes intellectuellement précoces.${c(2)}`,
        ],
      },
      {
        label: 'Qui décide',
        items: [
          `La <strong>Commission nationale d’inclusion</strong>, créée par la loi de 2018, statue sur les demandes de prise en charge, vérifie la pertinence des diagnostics spécialisés et décide des mesures de soutien — après accord des parents.${c(1)}`,
          `L’accord parental est une condition, pas une formalité.`,
        ],
      },
      {
        label: 'Le soutien dans l’école',
        items: [
          `Dans l’enseignement secondaire, l’élève et l’enseignant peuvent s’adresser aux équipes de soutien des élèves à besoins éducatifs particuliers ou spécifiques (<strong>ESEB</strong>) ou à la commission d’inclusion (CI) du lycée.${c(2)}`,
          `Les <strong>I-EBS</strong> sont des instituteurs spécialisés dans la scolarisation des élèves à besoins éducatifs particuliers ou spécifiques; les <strong>A-EBS</strong> les assistent.${c(2)}`,
          `Le SNEI sert de service ressource pour les centres de compétences, les équipes ESEB, les I-EBS et les A-EBS.${c(2)}`,
        ],
      },
      {
        label: 'À retenir',
        items: [
          `Texte central: loi du 20 juillet 2018 (centres de compétences + SNEI).${c(1)}`,
          `Décision sur les mesures: Commission nationale d’inclusion, après accord parental.${c(1)}`,
          `Premier relais dans l’école: équipe ESEB ou commission d’inclusion; I-EBS pour l’accompagnement spécialisé.${c(2)}`,
          `Haut potentiel: centre dédié aux enfants et jeunes intellectuellement précoces.${c(2)}`,
        ],
      },
    ],
    refsLabel: 'Références',
    references: [
      `Loi du 20 juillet 2018 portant création 1° de Centres de compétences en psycho-pédagogie spécialisée en faveur de l’inclusion scolaire; 2° du Service national de l’éducation inclusive — Journal officiel du Grand-Duché de Luxembourg.${src('https://data.legilux.public.lu/filestore/eli/etat/leg/loi/2018/07/20/a664/jo/fr/html/eli-etat-leg-loi-2018-07-20-a664-jo-fr-html.html')}`,
      `Centres de compétences en psychopédagogie spécialisée — Ministère de l’Éducation nationale, de l’Enfance et de la Jeunesse.${src('https://men.public.lu/fr/systeme-educatif/eleves-besoins-specifiques/centres-competences.html')}`,
    ],
  },
};

/** Country variants available in a given language, excluding one code. */
export function variantsFor(lang: Lang, exclude?: string): CountryLegal[] {
  return Object.values(countryLegal).filter((v) => v.lang === lang && v.code !== exclude);
}