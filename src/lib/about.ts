// About-page copy, one entry per locale, lifted verbatim from the 28 per-locale
// pages it replaces. Section counts differ by design: fr, hr and it do not carry
// the translation note the other 25 do.
import type { Lang } from './i18n';

export interface AboutSection { label: string; items: string[] }
export interface AboutPage { title: string; desc: string; cat: string; h1: string; subtitle: string; sections: AboutSection[] }

export const about: Partial<Record<Lang, AboutPage>> = {
  "bg": {
    "title": "За проекта — Farol",
    "desc": "Какво е, какво не е и как да извлечете максимума за пет минути.",
    "cat": "Ръководство",
    "h1": "Как да използвате Farol",
    "subtitle": "Какво е, какво не е и как да извлечете максимума за пет минути.",
    "sections": [
      {
        "label": "Какво е",
        "items": [
          "Бързо справочно помагало за учители, работещи с хетерогенни класове. Всяка карта покрива профил на ученик и отговаря на два въпроса: какво виждате в класа и какво можете да направите днес.",
          "Проектирано е за пет минути, преди труден учебен час, преди среща с родители или когато колега има нужда от второ мнение за ученик.",
          "Това е отворен ресурс, актуализиран с развитието на знанията на автора. Текущата версия е <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Какво не е",
        "items": [
          "<strong>Не е</strong> диагностичен инструмент. Нито една карта не замества официална психологична или педагогическа оценка.",
          "<strong>Не е</strong> клинично ръководство. Езикът е умишлено достъпен и ориентиран към класа, не към кабинета.",
          "<strong>Не е</strong> окончателно. Профилите са отправни точки, не етикети. Реален ученик рядко се вписва в само една категория."
        ]
      },
      {
        "label": "Бележка за превода",
        "items": [
          "Съдържанието на картите е изцяло преведено на български. Португалският е оригиналната версия на наръчника; при съмнение водещ е португалският текст.",
          "Картата за правната рамка е изключение: всеки език представя законодателството на собствената си страна, проучено за тази страна, а не преведено от португалски.",
          "Навигацията, етикетите и информационните страници са напълно преведени."
        ]
      },
      {
        "label": "Благодарности и лиценз",
        "items": [
          "Замислено и ръководено от <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, учител по езици.",
          "Публикувано под лиценз <strong>CC BY-NC-SA 4.0</strong>.",
          "Изходен код на <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "cs": {
    "title": "O projektu — Farol",
    "desc": "Co to je, co to není a jak z toho vytěžit maximum za pět minut.",
    "cat": "Průvodce",
    "h1": "Jak používat Farol",
    "subtitle": "Co to je, co to není a jak z toho vytěžit maximum za pět minut.",
    "sections": [
      {
        "label": "Co to je",
        "items": [
          "Rychlý referenční zdroj pro učitele pracující s heterogenními třídami. Každá karta pokrývá profil žáka a odpovídá na dvě otázky: co vidíte ve třídě a co můžete dnes udělat.",
          "Je navržen pro pět minut, před náročnou hodinou, před schůzkou s rodiči nebo když kolega potřebuje druhý názor na žáka.",
          "Je to otevřený zdroj, aktualizovaný jak se znalosti autora vyvíjejí. Aktuální verze je <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Co to není",
        "items": [
          "<strong>Není to</strong> diagnostický nástroj. Žádná karta nenahrazuje formální psychologické nebo pedagogické hodnocení.",
          "<strong>Není to</strong> klinická příručka. Jazyk je záměrně přístupný a zaměřený na třídu, nikoli na ordinaci.",
          "<strong>Není to</strong> definitivní. Profily jsou vstupní body, nikoli nálepky. Skutečný žák zřídka odpovídá jedné kategorii."
        ]
      },
      {
        "label": "Poznámka k překladu",
        "items": [
          "Obsah karet je plně přeložen do češtiny. Portugalština je původní verzí příručky; v případě pochybností platí portugalský text.",
          "Karta právního rámce je výjimkou: každý jazyk uvádí legislativu vlastní země, zpracovanou pro tuto zemi, nikoli přeloženou z portugalštiny.",
          "Navigace, popisky a informační stránky jsou plně přeloženy."
        ]
      },
      {
        "label": "Zásluhy a licence",
        "items": [
          "Vymyšleno a řízeno <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, učitelem jazyků.",
          "Zveřejněno pod licencí <strong>CC BY-NC-SA 4.0</strong>.",
          "Zdrojový kód na <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "da": {
    "title": "Om — Farol",
    "desc": "Hvad det er, hvad det ikke er og hvordan man får mest ud af det på fem minutter.",
    "cat": "Guide",
    "h1": "Hvordan man bruger Farol",
    "subtitle": "Hvad det er, hvad det ikke er og hvordan man får mest ud af det på fem minutter.",
    "sections": [
      {
        "label": "Hvad det er",
        "items": [
          "En hurtig reference for lærere, der arbejder med heterogene klasser. Hvert kort dækker en elevprofil og besvarer to spørgsmål: hvad ser du i klassen og hvad kan du gøre i dag.",
          "Det er designet til fem minutter, før en svær lektion, inden et forældremøde eller når en kollega har brug for en anden mening om en elev.",
          "Det er en åben ressource, der opdateres efterhånden som forfatterens viden udvikler sig. Den nuværende version er <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Hvad det ikke er",
        "items": [
          "<strong>Det er ikke</strong> et diagnostisk værktøj. Intet kort erstatter en formel psykologisk eller pædagogisk vurdering.",
          "<strong>Det er ikke</strong> en klinisk håndbog. Sproget er bevidst tilgængeligt og rettet mod klassen, ikke mod klinikken.",
          "<strong>Det er ikke</strong> definitivt. Profilerne er indgangspunkter, ikke etiketter. En rigtig elev passer sjældent ind i én kategori."
        ]
      },
      {
        "label": "Note om oversættelse",
        "items": [
          "Kortenes indhold er fuldt oversat til dansk. Portugisisk er guidens originalversion; i tvivlstilfælde gælder den portugisiske tekst.",
          "Kortet om de retlige rammer er undtagelsen: hvert sprog rummer sit eget lands lovgivning, undersøgt for det land i stedet for oversat fra portugisisk.",
          "Navigation, etiketter og informationssider er fuldt oversat."
        ]
      },
      {
        "label": "Anerkendelse og licens",
        "items": [
          "Udtænkt og ledet af <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, sproglærer.",
          "Udgivet under licens <strong>CC BY-NC-SA 4.0</strong>.",
          "Kildekode på <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "de": {
    "title": "Über — Farol",
    "desc": "Was es ist, was es nicht ist und wie man in fünf Minuten das Beste daraus macht.",
    "cat": "Leitfaden",
    "h1": "Wie man Farol benutzt",
    "subtitle": "Was es ist, was es nicht ist und wie man in fünf Minuten das Beste daraus macht.",
    "sections": [
      {
        "label": "Was es ist",
        "items": [
          "Ein Schnellnachschlagewerk für Lehrkräfte, die mit heterogenen Klassen arbeiten. Jede Karte behandelt ein Lernprofil und beantwortet zwei Fragen: Was sehen Sie im Unterricht und was können Sie heute tun.",
          "Es ist für fünf Minuten konzipiert, vor einer schwierigen Stunde, vor einem Elterngespräch oder wenn ein Kollege eine zweite Meinung zu einem Schüler braucht.",
          "Es ist eine offene Ressource, die aktualisiert wird, wenn das Wissen des Autors sich weiterentwickelt. Die aktuelle Version ist <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Was es nicht ist",
        "items": [
          "<strong>Es ist kein</strong> Diagnosewerkzeug. Keine Karte ersetzt eine formale psychologische oder pädagogische Beurteilung.",
          "<strong>Es ist kein</strong> klinisches Handbuch. Die Sprache ist bewusst zugänglich und auf den Unterricht ausgerichtet, nicht auf die klinische Praxis.",
          "<strong>Es ist nicht</strong> abschließend. Die Profile sind Einstiegspunkte, keine Etiketten. Ein realer Schüler passt selten in eine einzige Kategorie."
        ]
      },
      {
        "label": "Hinweis zur Übersetzung",
        "items": [
          "Der Karteninhalt ist vollständig ins Deutsche übersetzt. Portugiesisch ist die Originalversion des Leitfadens; im Zweifelsfall gilt der portugiesische Text.",
          "Die Karte zum Rechtsrahmen ist die Ausnahme: Jede Sprache führt die Gesetzgebung ihres eigenen Landes auf, für dieses Land recherchiert und nicht aus dem Portugiesischen übersetzt.",
          "Navigation, Beschriftungen und Informationsseiten sind vollständig übersetzt."
        ]
      },
      {
        "label": "Impressum und Lizenz",
        "items": [
          "Konzipiert und geleitet von <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, Sprachlehrer.",
          "Veröffentlicht unter der Lizenz <strong>CC BY-NC-SA 4.0</strong>.",
          "Quellcode auf <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "el": {
    "title": "Σχετικά — Farol",
    "desc": "Τι είναι, τι δεν είναι και πώς να τον αξιοποιήσετε στο έπακρο σε πέντε λεπτά.",
    "cat": "Οδηγός",
    "h1": "Πώς να χρησιμοποιείτε το Farol",
    "subtitle": "Τι είναι, τι δεν είναι και πώς να τον αξιοποιήσετε στο έπακρο σε πέντε λεπτά.",
    "sections": [
      {
        "label": "Τι είναι",
        "items": [
          "Ένα γρήγορο εγχειρίδιο αναφοράς για εκπαιδευτικούς που εργάζονται με ετερογενείς τάξεις. Κάθε κάρτα καλύπτει ένα προφίλ μαθητή και απαντά δύο ερωτήσεις: τι βλέπετε στην τάξη και τι μπορείτε να κάνετε σήμερα.",
          "Σχεδιάστηκε για πέντε λεπτά, πριν από μια δύσκολη ώρα, πριν από μια συνάντηση με γονείς ή όταν ένας συνάδελφος χρειάζεται δεύτερη γνώμη για έναν μαθητή.",
          "Είναι ανοιχτός πόρος, ενημερώνεται καθώς εξελίσσονται οι γνώσεις του συγγραφέα. Η τρέχουσα έκδοση είναι <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Τι δεν είναι",
        "items": [
          "<strong>Δεν είναι</strong> διαγνωστικό εργαλείο. Καμία κάρτα δεν αντικαθιστά μια επίσημη ψυχολογική ή παιδαγωγική αξιολόγηση.",
          "<strong>Δεν είναι</strong> κλινικό εγχειρίδιο. Η γλώσσα είναι σκόπιμα προσιτή και προσανατολισμένη στην τάξη, όχι στο ιατρείο.",
          "<strong>Δεν είναι</strong> οριστικό. Τα προφίλ είναι σημεία εισόδου, όχι ετικέτες. Ένας πραγματικός μαθητής σπάνια ταιριάζει σε μία κατηγορία."
        ]
      },
      {
        "label": "Σημείωση για τη μετάφραση",
        "items": [
          "Το περιεχόμενο των καρτών είναι πλήρως μεταφρασμένο στα ελληνικά. Τα πορτογαλικά είναι η πρωτότυπη έκδοση του οδηγού· σε περίπτωση αμφιβολίας υπερισχύει το πορτογαλικό κείμενο.",
          "Η κάρτα του νομικού πλαισίου αποτελεί εξαίρεση: κάθε γλώσσα παρουσιάζει τη νομοθεσία της δικής της χώρας, τεκμηριωμένη για τη χώρα αυτή και όχι μεταφρασμένη από τα πορτογαλικά.",
          "Η πλοήγηση, οι ετικέτες και οι σελίδες πληροφοριών είναι πλήρως μεταφρασμένες."
        ]
      },
      {
        "label": "Αναγνωρίσεις και άδεια",
        "items": [
          "Σχεδιάστηκε και συντονίστηκε από <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, εκπαιδευτικό γλωσσών.",
          "Δημοσιεύτηκε υπό άδεια <strong>CC BY-NC-SA 4.0</strong>.",
          "Πηγαίος κώδικας στο <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "en": {
    "title": "About — Farol",
    "desc": "What it is, what it isn't, and how to get the most out of it in five minutes.",
    "cat": "Guide",
    "h1": "How to use Farol",
    "subtitle": "What it is, what it isn't, and how to get the most out of it in five minutes.",
    "sections": [
      {
        "label": "What it is",
        "items": [
          "A quick-reference manual for teachers working with mixed-needs classrooms. Each card covers a learner profile and answers two questions: what you're seeing in class and what you can do today.",
          "Designed to be useful in five minutes, before a difficult lesson, before a meeting with parents, or when a colleague asks for a second look at a student.",
          "An open resource, updated as the author's knowledge evolves. The current version is <strong>v0.1</strong>."
        ]
      },
      {
        "label": "What it isn't",
        "items": [
          "<strong>Not</strong> a diagnostic tool. No card replaces a formal psychological or psycho-pedagogical assessment.",
          "<strong>Not</strong> a clinical manual. The language is deliberately accessible and classroom-oriented, not clinical.",
          "<strong>Not</strong> definitive. Profiles are entry points, not labels. A real student rarely fits a single category."
        ]
      },
      {
        "label": "A note on translation",
        "items": [
          "The full card content is translated into English. Portuguese is the original version of the guide; if anything is unclear, the Portuguese text prevails.",
          "The legal framework card is the exception: each language carries its own country's legislation, researched for that country rather than translated from the Portuguese.",
          "Navigation, labels and information pages are fully translated."
        ]
      },
      {
        "label": "Credits and licence",
        "items": [
          "Conceived and directed by <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, languages teacher, translator and writer.",
          "Published under <strong>CC BY-NC-SA 4.0</strong>, share and adapt with attribution, non-commercially, under the same licence.",
          "Source code at <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "es": {
    "title": "Acerca de — Farol",
    "desc": "Qué es, qué no es y cómo sacarle el máximo partido en cinco minutos.",
    "cat": "Guía",
    "h1": "Cómo usar Farol",
    "subtitle": "Qué es, qué no es y cómo sacarle el máximo partido en cinco minutos.",
    "sections": [
      {
        "label": "Qué es",
        "items": [
          "Un manual de consulta rápida para docentes que trabajan con clases heterogéneas. Cada ficha cubre un perfil de aprendizaje y responde a dos preguntas: qué está viendo en clase y qué puede hacer hoy.",
          "Está diseñado para ser útil en cinco minutos, antes de una clase difícil, antes de una reunión con las familias, o cuando un colega pide una segunda opinión sobre un alumno.",
          "Es un recurso abierto, actualizado a medida que evoluciona el conocimiento del autor. La versión actual es la <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Qué no es",
        "items": [
          "<strong>No es</strong> una herramienta de diagnóstico. Ninguna ficha sustituye una evaluación psicológica o psicopedagógica formal.",
          "<strong>No es</strong> un manual clínico. El lenguaje es deliberadamente accesible y orientado al aula, no a la consulta.",
          "<strong>No es</strong> definitivo. Los perfiles son puntos de entrada, no etiquetas. Un alumno real raramente encaja en una sola categoría."
        ]
      },
      {
        "label": "Nota sobre la traducción",
        "items": [
          "El contenido de las fichas está completamente traducido al español. El portugués es la versión original de la guía; en caso de duda, prevalece el texto portugués.",
          "La ficha de marco legal es la excepción: cada idioma recoge la legislación de su propio país, investigada para ese país en lugar de traducida del portugués.",
          "La navegación, las etiquetas y las páginas de información están completamente traducidas."
        ]
      },
      {
        "label": "Créditos y licencia",
        "items": [
          "Concebido y dirigido por <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, docente de lenguas.",
          "Publicado bajo licencia <strong>CC BY-NC-SA 4.0</strong>.",
          "Código fuente en <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "et": {
    "title": "Teave — Farol",
    "desc": "Mis see on, mis see ei ole ja kuidas saada sellest viie minutiga maksimum.",
    "cat": "Juhend",
    "h1": "Kuidas Faroli kasutada",
    "subtitle": "Mis see on, mis see ei ole ja kuidas saada sellest viie minutiga maksimum.",
    "sections": [
      {
        "label": "Mis see on",
        "items": [
          "Kiire viiteraamat õpetajatele, kes töötavad heterogeensete klassidega. Iga kaart hõlmab õpilase profiili ja vastab kahele küsimusele: mida näete klassis ja mida saate täna teha.",
          "See on loodud viie minuti jaoks, enne rasket tundi, enne vanemate koosolekut või kui kolleeg vajab teist arvamust õpilase kohta.",
          "See on avatud ressurss, mida uuendatakse autori teadmiste arenedes. Praegune versioon on <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Mis see ei ole",
        "items": [
          "<strong>See ei ole</strong> diagnostikatööriist. Ükski kaart ei asenda formaalset psühholoogilist ega pedagoogilist hindamist.",
          "<strong>See ei ole</strong> kliiniline käsiraamat. Keel on tahtlikult arusaadav ja klassikeskkonnale suunatud, mitte kabinetile.",
          "<strong>See ei ole</strong> lõplik. Profiilid on lähtepunktid, mitte sildid. Tegelik õpilane sobib harva ühte kategooriasse."
        ]
      },
      {
        "label": "Märkus tõlke kohta",
        "items": [
          "Kaartide sisu on täielikult eesti keelde tõlgitud. Portugali keel on juhendi originaalversioon; kahtluse korral kehtib portugalikeelne tekst.",
          "Õigusraamistiku kaart on erand: iga keel esitab oma riigi õigusaktid, mis on koostatud selle riigi kohta, mitte tõlgitud portugali keelest.",
          "Navigeerimine, sildid ja teabelehed on täielikult tõlgitud."
        ]
      },
      {
        "label": "Tänuavaldused ja litsents",
        "items": [
          "Kontseptsiooni autor ja juht <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, keelteõpetaja.",
          "Avaldatud litsentsi <strong>CC BY-NC-SA 4.0</strong> all.",
          "Lähtekood aadressil <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "fi": {
    "title": "Tietoja — Farol",
    "desc": "Mitä se on, mitä se ei ole ja miten siitä saa parhaan irti viidessä minuutissa.",
    "cat": "Opas",
    "h1": "Miten Farolia käytetään",
    "subtitle": "Mitä se on, mitä se ei ole ja miten siitä saa parhaan irti viidessä minuutissa.",
    "sections": [
      {
        "label": "Mitä se on",
        "items": [
          "Nopea hakuteos opettajille, jotka työskentelevät heterogeenisten luokkien kanssa. Jokainen kortti kattaa oppilasprofiilin ja vastaa kahteen kysymykseen: mitä näet luokkahuoneessa ja mitä voit tehdä tänään.",
          "Se on suunniteltu viidelle minuutille, ennen vaikeaa oppituntia, ennen vanhempainiltaa tai kun kollega tarvitsee toisen mielipiteen oppilaasta.",
          "Se on avoin resurssi, joka päivittyy kirjoittajan tiedon kehittyessä. Nykyinen versio on <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Mitä se ei ole",
        "items": [
          "<strong>Se ei ole</strong> diagnostinen työkalu. Mikään kortti ei korvaa virallista psykologista tai pedagogista arviointia.",
          "<strong>Se ei ole</strong> kliininen käsikirja. Kieli on tarkoituksella helposti lähestyttävää ja luokkahuoneeseen suuntautunutta, ei vastaanottoon.",
          "<strong>Se ei ole</strong> lopullinen. Profiilit ovat lähtökohtia, eivät leimoja. Todellinen oppilas sopii harvoin vain yhteen kategoriaan."
        ]
      },
      {
        "label": "Huomio käännöksestä",
        "items": [
          "Korttien sisältö on käännetty kokonaan suomeksi. Portugali on oppaan alkuperäisversio; epäselvissä tapauksissa portugalinkielinen teksti on ensisijainen.",
          "Lainsäädäntökortti on poikkeus: jokainen kieli sisältää oman maansa lainsäädännön, joka on selvitetty kyseistä maata varten eikä käännetty portugalista.",
          "Navigointi, tunnisteet ja tietosivut on täysin käännetty."
        ]
      },
      {
        "label": "Tunnustukset ja lisenssi",
        "items": [
          "Suunniteltu ja ohjattu <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, kieltenopettaja.",
          "Julkaistu lisenssillä <strong>CC BY-NC-SA 4.0</strong>.",
          "Lähdekoodi osoitteessa <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "fr": {
    "title": "À propos — Farol",
    "desc": "Ce que c'est, ce que ce n'est pas, et comment en tirer le meilleur parti en cinq minutes.",
    "cat": "Guide",
    "h1": "Comment utiliser Farol",
    "subtitle": "Ce que c'est, ce que ce n'est pas, et comment en tirer le meilleur parti en cinq minutes.",
    "sections": [
      {
        "label": "Ce que c'est",
        "items": [
          "Un guide de référence rapide pour les enseignants qui travaillent avec des classes hétérogènes. Chaque fiche couvre un profil d'apprentissage et répond à deux questions : ce que vous observez en classe et ce que vous pouvez faire aujourd'hui.",
          "Il est conçu pour être utile en cinq minutes, avant un cours difficile, avant une réunion avec les parents, ou quand un collègue demande un second regard sur un élève.",
          "C'est une ressource ouverte, mise à jour au fur et à mesure que les connaissances de l'auteur évoluent. La version actuelle est la <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Ce que ce n'est pas",
        "items": [
          "<strong>Ce n'est pas</strong> un outil de diagnostic. Aucune fiche ne remplace une évaluation psychologique ou psychopédagogique formelle.",
          "<strong>Ce n'est pas</strong> un manuel clinique. Le langage est délibérément accessible et orienté vers la classe, pas vers le cabinet.",
          "<strong>Ce n'est pas</strong> définitif. Les profils sont des points d'entrée, pas des étiquettes. Un élève réel rentre rarement dans une seule catégorie."
        ]
      },
      {
        "label": "Note sur la traduction",
        "items": [
          "Le contenu des fiches est intégralement traduit en français. Le portugais est la version originale du guide ; en cas de doute, le texte portugais prévaut.",
          "La fiche du cadre légal fait exception : chaque langue présente la législation de son propre pays, recherchée pour ce pays plutôt que traduite du portugais.",
          "La navigation, les libellés et les pages d'information sont intégralement traduits."
        ]
      },
      {
        "label": "Crédits et licence",
        "items": [
          "Conçu et dirigé par <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, enseignant de langues.",
          "Publié sous licence <strong>CC BY-NC-SA 4.0</strong>.",
          "Code source sur <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "ga": {
    "title": "Faoi — Farol",
    "desc": "Cad atá ann, cad nach bhfuil ann agus conas é a bhaint as i gcúig nóiméad.",
    "cat": "Treoir",
    "h1": "Conas Farol a Úsáid",
    "subtitle": "Cad atá ann, cad nach bhfuil ann agus conas é a bhaint as i gcúig nóiméad.",
    "sections": [
      {
        "label": "Cad atá ann",
        "items": [
          "Tagairt thapa do mhúinteoirí atá ag obair le ranganna éagsúla. Clúdaíonn gach cárta próifíl dalta agus freagraíonn sé dhá cheist: cad atá le feiceáil agat sa rang agus cad is féidir leat a dhéanamh inniu.",
          "Tá sé deartha do chúig nóiméad, roimh cheacht deacair, roimh chruinniú le tuismitheoirí nó nuair a bhíonn an dara tuairim ag teastáil ó chomhghleacaí faoi dhalta.",
          "Is acmhainn oscailte é, arna nuashonrú de réir mar a fhorbraíonn eolas an údair. Is é an leagan reatha <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Cad nach bhfuil ann",
        "items": [
          "<strong>Ní uirlis dhiagnóiseach é</strong>. Ní dhéanann aon chárta ionadaíocht ar mheasúnú síceolaíoch nó oideolaíochta foirmiúil.",
          "<strong>Ní lámhleabhar cliniciúil é</strong>. Tá an teanga d'aon ghnó inrochtana agus dírithe ar an rang, ní ar an gclinic.",
          "<strong>Níl sé críochnaitheach</strong>. Is pointí iontrála iad na próifílí, ní lipéid. Ní oireann dalta fíor d'aon chatagóir amháin ach go hannamh."
        ]
      },
      {
        "label": "Nóta faoin aistriúchán",
        "items": [
          "Tá ábhar na gcártaí aistrithe go hiomlán go Gaeilge. Is í an Phortaingéilis bunleagan an treoirleabhair; má bhíonn amhras ann, is ag an téacs Portaingéilise atá an forlámhas.",
          "Is eisceacht é an cárta faoin gcreat dlíthiúil: tá reachtaíocht a tíre féin ag gach teanga, taighde déanta uirthi don tír sin seachas í a aistriú ón bPortaingéilis.",
          "Tá nascleanúint, lipéid agus leathanaigh faisnéise aistrithe go hiomlán."
        ]
      },
      {
        "label": "Creidiúintí agus ceadúnas",
        "items": [
          "Múnlaithe agus stiúrtha ag <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, múinteoir teangacha.",
          "Foilsithe faoi cheadúnas <strong>CC BY-NC-SA 4.0</strong>.",
          "Cód foinseach ar <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "hr": {
    "title": "O projektu — Farol",
    "desc": "Što jest, što nije i kako izvući maksimum za pet minuta.",
    "cat": "Vodič",
    "h1": "Kako koristiti Farol",
    "subtitle": "Što jest, što nije i kako izvući maksimum za pet minuta.",
    "sections": [
      {
        "label": "Što jest",
        "items": [
          "Priručnik za brzu referencu nastavnicima koji rade s heterogenim razredima. Svaka kartica pokriva jedan profil učenja i odgovara na dva pitanja: što vidite u razredu i što možete učiniti danas.",
          "Osmišljen je da bude koristan za pet minuta, prije teškog sata, prije razgovora s roditeljima ili kada kolega traži drugo mišljenje o učeniku.",
          "Radi se o otvorenom resursu koji se ažurira kako se znanje autora razvija. Trenutna verzija je <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Što nije",
        "items": [
          "<strong>Nije</strong> dijagnostički alat. Nijedna kartica ne zamjenjuje formalnu psihološku ili psihopedagošku procjenu.",
          "<strong>Nije</strong> klinički priručnik. Jezik je namjerno pristupačan i usmjeren na razred, a ne na stručno istraživanje.",
          "<strong>Nije</strong> konačan. Profili su polazišne točke, ne oznake. Stvarni učenik rijetko odgovara samo jednoj kategoriji."
        ]
      },
      {
        "label": "Napomena o prijevodu",
        "items": [
          "Sadržaj kartica u cijelosti je preveden na hrvatski. Portugalski je izvorna verzija vodiča; u slučaju nedoumice, mjerodavan je portugalski tekst.",
          "Kartica o pravnom okviru je iznimka: svaki jezik donosi zakonodavstvo vlastite zemlje, istraženo za tu zemlju, a ne prevedeno s portugalskog.",
          "Navigacija, oznake i informativne stranice u cijelosti su prevedene."
        ]
      },
      {
        "label": "Zasluge i licenca",
        "items": [
          "Osmislio i vodio <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, profesor jezika.",
          "Objavljeno pod licencom <strong>CC BY-NC-SA 4.0</strong>.",
          "Izvorni kod na <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "hu": {
    "title": "Névjegy — Farol",
    "desc": "Mi az, mi nem az és hogyan hozhatja ki belőle a legtöbbet öt perc alatt.",
    "cat": "Útmutató",
    "h1": "Hogyan kell használni a Farolt",
    "subtitle": "Mi az, mi nem az és hogyan hozhatja ki belőle a legtöbbet öt perc alatt.",
    "sections": [
      {
        "label": "Mi az",
        "items": [
          "Gyors kézikönyv heterogén osztályokkal dolgozó tanároknak. Minden karton tartalmaz egy tanulói profilt és két kérdésre ad választ: mit lát az osztályban és mit tehet ma.",
          "Öt percre lett tervezve, egy nehéz óra előtt, szülői értekezlet előtt vagy amikor egy kolléga második véleményt igényel egy tanulóról.",
          "Nyílt erőforrás, a szerző tudásának fejlődésével frissül. A jelenlegi verzió <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Mi nem",
        "items": [
          "<strong>Nem</strong> diagnosztikai eszköz. Egyetlen karton sem helyettesíti a formális pszichológiai vagy pedagógiai értékelést.",
          "<strong>Nem</strong> klinikai kézikönyv. A nyelv szándékosan könnyen érthető és az osztálytermi helyzetre fókuszál, nem az orvosi rendelőre.",
          "<strong>Nem</strong> végleges. A profilok belépési pontok, nem címkék. Egy valódi tanuló ritkán illik be egy kategóriába."
        ]
      },
      {
        "label": "Megjegyzés a fordításról",
        "items": [
          "A kártyák tartalma teljes egészében le van fordítva magyarra. A portugál az útmutató eredeti változata; kétség esetén a portugál szöveg az irányadó.",
          "A jogi keretről szóló kártya kivétel: minden nyelv a saját országa jogszabályait tartalmazza, az adott országra vonatkozóan feldolgozva, nem pedig portugálból fordítva.",
          "A navigáció, a feliratok és az információs oldalak teljesen le vannak fordítva."
        ]
      },
      {
        "label": "Köszönetnyilvánítások és licenc",
        "items": [
          "Kitalálta és irányította <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, nyelvtanár.",
          "Közzétéve <strong>CC BY-NC-SA 4.0</strong> licenc alatt.",
          "Forráskód: <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "is": {
    "title": "Um — Farol",
    "desc": "Hvað hún er, hvað hún er ekki og hvernig þú nýtir hana best á fimm mínútum.",
    "cat": "Leiðbeiningar",
    "h1": "Hvernig á að nota Farol",
    "subtitle": "Hvað hún er, hvað hún er ekki og hvernig þú nýtir hana best á fimm mínútum.",
    "sections": [
      {
        "label": "Hvað hún er",
        "items": [
          "Uppflettirit fyrir kennara sem vinna með fjölbreyttum bekkjum. Hvert spjald tekur fyrir eina svipmynd nemanda og svarar tveimur spurningum: hvað þú sérð í stofunni og hvað þú getur gert í dag.",
          "Hún er hönnuð til að gagnast á fimm mínútum: fyrir erfiða kennslustund, fyrir fund með forsjáraðilum, eða þegar samstarfsmaður vill annað álit á nemanda.",
          "Hún er opið efni sem er uppfært eftir því sem þekking höfundar þróast. Núverandi útgáfa er <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Hvað hún er ekki",
        "items": [
          "<strong>Ekki greiningartæki.</strong> Ekkert spjald kemur í stað formlegs sálfræðilegs eða kennslufræðilegs mats.",
          "<strong>Ekki klínísk handbók.</strong> Málfarið er vísvitandi aðgengilegt og miðað við stofuna, ekki við stofnun.",
          "<strong>Ekki endanleg.</strong> Svipmyndirnar eru inngangar, ekki merkimiðar. Raunverulegur nemandi fellur sjaldan í einn flokk."
        ]
      },
      {
        "label": "Um þýðinguna",
        "items": [
          "Efni spjaldanna er þýtt í heild á íslensku. Portúgalska er frumútgáfa handbókarinnar; í vafa gildir portúgalski textinn.",
          "Spjaldið um lagaramma er undantekningin: hvert tungumál hefur löggjöf síns eigin lands, rannsakaða fyrir það land en ekki þýdda úr portúgölsku.",
          "Leiðsögn, merkingar og upplýsingasíður eru þýddar að fullu."
        ]
      },
      {
        "label": "Höfundur og leyfi",
        "items": [
          "Hugsuð og stýrð af tungumálakennaranum <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>.",
          "Gefin út undir leyfinu <strong>CC BY-NC-SA 4.0</strong>.",
          "Frumkóði: <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "it": {
    "title": "Informazioni — Farol",
    "desc": "Cos'è, cosa non è e come ottenere il massimo in cinque minuti.",
    "cat": "Guida",
    "h1": "Come usare Farol",
    "subtitle": "Cos'è, cosa non è e come ottenere il massimo in cinque minuti.",
    "sections": [
      {
        "label": "Cosa è",
        "items": [
          "Un manuale di consultazione rapida per gli insegnanti che lavorano con classi eterogenee. Ogni scheda copre un profilo di apprendimento e risponde a due domande: cosa stai vedendo in classe e cosa puoi fare oggi.",
          "È progettato per essere utile in cinque minuti, prima di una lezione difficile, prima di un colloquio con i genitori, o quando un collega chiede una seconda opinione su uno studente.",
          "È una risorsa aperta, aggiornata man mano che le conoscenze dell'autore evolvono. La versione attuale è la <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Cosa non è",
        "items": [
          "<strong>Non è</strong> uno strumento diagnostico. Nessuna scheda sostituisce una valutazione psicologica o psicopedagogica formale.",
          "<strong>Non è</strong> un manuale clinico. Il linguaggio è deliberatamente accessibile e orientato alla classe, non allo studio professionale.",
          "<strong>Non è</strong> definitivo. I profili sono punti di ingresso, non etichette. Uno studente reale raramente si adatta a una sola categoria."
        ]
      },
      {
        "label": "Nota sulla traduzione",
        "items": [
          "Il contenuto delle schede è tradotto integralmente in italiano. Il portoghese è la versione originale della guida; in caso di dubbio, prevale il testo portoghese.",
          "La scheda del quadro normativo fa eccezione: ogni lingua riporta la legislazione del proprio paese, ricercata per quel paese anziché tradotta dal portoghese.",
          "La navigazione, le etichette e le pagine informative sono tradotte integralmente."
        ]
      },
      {
        "label": "Crediti e licenza",
        "items": [
          "Ideato e diretto da <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, insegnante di lingue.",
          "Pubblicato sotto licenza <strong>CC BY-NC-SA 4.0</strong>.",
          "Codice sorgente su <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "lt": {
    "title": "Apie — Farol",
    "desc": "Kas tai yra, kas tai nėra ir kaip išgauti maksimumą per penkias minutes.",
    "cat": "Vadovas",
    "h1": "Kaip naudoti Farol",
    "subtitle": "Kas tai yra, kas tai nėra ir kaip išgauti maksimumą per penkias minutes.",
    "sections": [
      {
        "label": "Kas tai yra",
        "items": [
          "Greita informacinė priemonė mokytojams, dirbantiems su heterogeniškomis klasėmis. Kiekviena kortelė apima mokinio profilį ir atsako į du klausimus: ką matote klasėje ir ką galite daryti šiandien.",
          "Sukurta penkioms minutėms, prieš sunkią pamoką, prieš susitikimą su tėvais ar kai kolega nori antros nuomonės apie mokinį.",
          "Tai atviras šaltinis, atnaujinamas plečiantis autoriaus žinioms. Dabartinė versija yra <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Kas tai nėra",
        "items": [
          "<strong>Tai nėra</strong> diagnostinis įrankis. Jokia kortelė nepakeičia oficialaus psichologinio ar pedagoginio vertinimo.",
          "<strong>Tai nėra</strong> klinikinis vadovas. Kalba sąmoningai prieinama ir orientuota į klasę, o ne į kabinetus.",
          "<strong>Tai nėra</strong> galutinis. Profiliai yra atspirties taškai, ne etiketės. Tikras mokinys retai tinka į vieną kategoriją."
        ]
      },
      {
        "label": "Pastaba dėl vertimo",
        "items": [
          "Kortelių turinys visiškai išverstas į lietuvių kalbą. Portugalų kalba yra originali vadovo versija; kilus abejonių, vadovaujamasi portugališku tekstu.",
          "Teisinės sistemos kortelė yra išimtis: kiekviena kalba pateikia savo šalies teisės aktus, parengtus tai šaliai, o ne išverstus iš portugalų kalbos.",
          "Navigacija, etiketės ir informaciniai puslapiai yra visiškai išversti."
        ]
      },
      {
        "label": "Padėkos ir licencija",
        "items": [
          "Sumanė ir vadovavo projektui <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, kalbų mokytojas.",
          "Paskelbta pagal licenciją <strong>CC BY-NC-SA 4.0</strong>.",
          "Išeities kodas <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "lv": {
    "title": "Par projektu — Farol",
    "desc": "Kas tas ir, kas tas nav un kā gūt maksimumu piecās minūtēs.",
    "cat": "Rokasgrāmata",
    "h1": "Kā izmantot Farol",
    "subtitle": "Kas tas ir, kas tas nav un kā gūt maksimumu piecās minūtēs.",
    "sections": [
      {
        "label": "Kas tas ir",
        "items": [
          "Ātrā uzziņu grāmata skolotājiem, kas strādā ar heterogēnām klasēm. Katra karte aptver skolēna profilu un atbild uz diviem jautājumiem: ko redzat klasē un ko varat darīt šodien.",
          "Tā ir paredzēta piecām minūtēm, pirms grūtas stundas, pirms vecāku sapulces vai kad kolēģis vēlas otro viedokli par skolēnu.",
          "Tas ir atvērts resurss, ko atjaunina, autora zināšanām attīstoties. Pašreizējā versija ir <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Kas tas nav",
        "items": [
          "<strong>Tā nav</strong> diagnostikas ierīce. Neviena karte neaizstāj formālu psiholoģisku vai pedagoģisku novērtējumu.",
          "<strong>Tā nav</strong> klīniska rokasgrāmata. Valoda ir apzināti pieejama un orientēta uz klasi, nevis uz klīniku.",
          "<strong>Tā nav</strong> galīga. Profili ir sākumpunkti, nevis etiķetes. Īsts skolēns reti iekļaujas vienā kategorijā."
        ]
      },
      {
        "label": "Piezīme par tulkojumu",
        "items": [
          "Karšu saturs ir pilnībā iztulkots latviešu valodā. Portugāļu valoda ir rokasgrāmatas oriģinālā versija; šaubu gadījumā noteicošais ir portugāļu teksts.",
          "Tiesiskā regulējuma kartīte ir izņēmums: katrā valodā ir attiecīgās valsts tiesību akti, kas pētīti šai valstij, nevis tulkoti no portugāļu valodas.",
          "Navigācija, etiķetes un informācijas lapas ir pilnībā tulkotas."
        ]
      },
      {
        "label": "Pateicības un licence",
        "items": [
          "Izdomāja un vadīja <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, valodu skolotājs.",
          "Publicēts saskaņā ar licenci <strong>CC BY-NC-SA 4.0</strong>.",
          "Pirmkods <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "mk": {
    "title": "За прирачникот — Farol",
    "desc": "Што е, што не е и како најдобро да го искористите за пет минути.",
    "cat": "Упатство",
    "h1": "Како се користи Farol",
    "subtitle": "Што е, што не е и како најдобро да го искористите за пет минути.",
    "sections": [
      {
        "label": "Што е",
        "items": [
          "Прирачник за брза употреба наменет за наставници што работат со разнородни одделенија. Секоја картичка обработува еден профил на ученик и одговара на два прашања: што гледате во одделението и што можете да направите денес.",
          "Замислен е да биде од корист за пет минути: пред тежок час, пред разговор со родителите или кога колега бара второ мислење за ученик.",
          "Тоа е отворен ресурс што се дополнува како што се развива знаењето на авторот. Тековната верзија е <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Што не е",
        "items": [
          "<strong>Не е дијагностичко средство.</strong> Ниту една картичка не заменува формална психолошка или педагошка процена.",
          "<strong>Не е клинички прирачник.</strong> Јазикот е намерно достапен и свртен кон одделението, а не кон клиниката.",
          "<strong>Не е конечен.</strong> Профилите се влезни точки, а не етикети. Вистинскиот ученик ретко се вклопува во една категорија."
        ]
      },
      {
        "label": "За преводот",
        "items": [
          "Содржината на картичките е преведена во целост на македонски. Португалскиот е изворната верзија на прирачникот; во случај на недоумица важи португалскиот текст.",
          "Картичката за правната рамка е исклучок: секој јазик го содржи законодавството на сопствената земја, истражено за таа земја, а не преведено од португалски.",
          "Навигацијата, ознаките и информативните страници се преведени во целост."
        ]
      },
      {
        "label": "Авторство и лиценца",
        "items": [
          "Замислен и воден од наставникот по јазик <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>.",
          "Објавено под лиценца <strong>CC BY-NC-SA 4.0</strong>.",
          "Изворен код: <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "mt": {
    "title": "Dwar — Farol",
    "desc": "X'inhu, x'mhuwiex u kif tista' tieħu l-massimu minnu f'ħames minuti.",
    "cat": "Gwida",
    "h1": "Kif Tuża Farol",
    "subtitle": "X'inhu, x'mhuwiex u kif tista' tieħu l-massimu minnu f'ħames minuti.",
    "sections": [
      {
        "label": "X'inhu",
        "items": [
          "Referenza rapida għall-għalliema li jaħdmu ma' klassijiet eteroġenji. Kull karta tkopri profil ta' student u twieġeb żewġ mistoqsijiet: x'tara fil-klassi u x'tista' tagħmel illum.",
          "Hija mfassla għal ħames minuti, qabel lezzjoni diffiċli, qabel laqgħa mal-ġenituri jew meta kollega jkun irid it-tieni opinjoni dwar student.",
          "Hija riżorsa miftuħa, aġġornata hekk kif l-għarfien tal-awtur jiżviluppa. Il-verżjoni attwali hija <strong>v0.1</strong>."
        ]
      },
      {
        "label": "X'mhuwiex",
        "items": [
          "<strong>Mhijiex</strong> għodda dijanjostika. L-ebda karta ma tissostitwixxi evalwazzjoni psikoloġika jew pedaġoġika formali.",
          "<strong>Mhijiex</strong> manwal kliniku. Il-lingwaġġ huwa intenzjonalment aċċessibbli u orjentat lejn il-klassi, mhux lejn il-klinika.",
          "<strong>Mhijiex</strong> definittiva. Il-profili huma punti ta' dħul, mhux tikketti. Student reali rarament jaqbel ma' kategorija waħda."
        ]
      },
      {
        "label": "Nota dwar it-traduzzjoni",
        "items": [
          "Il-kontenut tal-kards huwa tradott kompletament għall-Malti. Il-Portugiż huwa l-verżjoni oriġinali tal-gwida; f'każ ta' dubju, jipprevali t-test Portugiż.",
          "Il-kard tal-qafas legali hija l-eċċezzjoni: kull lingwa ġġorr il-leġiżlazzjoni ta' pajjiżha stess, riċerkata għal dak il-pajjiż minflok tradotta mill-Portugiż.",
          "In-navigazzjoni, it-tikketti u l-paġni tal-informazzjoni huma tradotti kompletament."
        ]
      },
      {
        "label": "Krediti u liċenza",
        "items": [
          "Immaġinat u dirett minn <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, għalliem tal-lingwi.",
          "Ippubblikat taħt liċenza <strong>CC BY-NC-SA 4.0</strong>.",
          "Kodiċi tas-sors fuq <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "nl": {
    "title": "Over — Farol",
    "desc": "Wat het is, wat het niet is en hoe u er in vijf minuten het meeste uit haalt.",
    "cat": "Gids",
    "h1": "Hoe Farol te gebruiken",
    "subtitle": "Wat het is, wat het niet is en hoe u er in vijf minuten het meeste uit haalt.",
    "sections": [
      {
        "label": "Wat het is",
        "items": [
          "Een snel naslagwerk voor leerkrachten die werken met heterogene klassen. Elke kaart behandelt een leerprofiel en beantwoordt twee vragen: wat ziet u in de klas en wat kunt u vandaag doen.",
          "Het is ontworpen voor vijf minuten, voor een moeilijke les, voor een oudergesprek of wanneer een collega een tweede mening over een leerling nodig heeft.",
          "Het is een open resource, bijgewerkt naarmate de kennis van de auteur evolueert. De huidige versie is <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Wat het niet is",
        "items": [
          "<strong>Het is geen</strong> diagnostisch instrument. Geen kaart vervangt een formele psychologische of pedagogische beoordeling.",
          "<strong>Het is geen</strong> klinisch handboek. De taal is bewust toegankelijk en gericht op de klas, niet op de klinische praktijk.",
          "<strong>Het is niet</strong> definitief. De profielen zijn ingangspunten, geen labels. Een echte leerling past zelden in één categorie."
        ]
      },
      {
        "label": "Noot over de vertaling",
        "items": [
          "De inhoud van de kaarten is volledig naar het Nederlands vertaald. Portugees is de originele versie van de gids; bij twijfel geldt de Portugese tekst.",
          "De kaart over het wettelijk kader is de uitzondering: elke taal bevat de wetgeving van het eigen land, onderzocht voor dat land in plaats van vertaald uit het Portugees.",
          "Navigatie, labels en informatiepagina's zijn volledig vertaald."
        ]
      },
      {
        "label": "Credits en licentie",
        "items": [
          "Bedacht en geleid door <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, taaldocent.",
          "Gepubliceerd onder licentie <strong>CC BY-NC-SA 4.0</strong>.",
          "Broncode op <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "no": {
    "title": "Om — Farol",
    "desc": "Hva den er, hva den ikke er, og hvordan du får mest ut av den på fem minutter.",
    "cat": "Veiledning",
    "h1": "Slik bruker du Farol",
    "subtitle": "Hva den er, hva den ikke er, og hvordan du får mest ut av den på fem minutter.",
    "sections": [
      {
        "label": "Hva den er",
        "items": [
          "Et oppslagsverk for lærere som arbeider med sammensatte klasser. Hvert kort dekker en elevprofil og svarer på to spørsmål: hva du ser i klasserommet og hva du kan gjøre i dag.",
          "Den er laget for å være nyttig på fem minutter: før en vanskelig time, før et møte med foresatte, eller når en kollega vil ha et blikk til på en elev.",
          "Den er en åpen ressurs som oppdateres etter hvert som forfatterens kunnskap utvikler seg. Gjeldende versjon er <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Hva den ikke er",
        "items": [
          "<strong>Ikke et utredningsverktøy.</strong> Ingen kort erstatter en formell psykologisk eller pedagogisk utredning.",
          "<strong>Ikke en klinisk håndbok.</strong> Språket er bevisst tilgjengelig og rettet mot klasserommet, ikke mot klinikken.",
          "<strong>Ikke endelig.</strong> Profilene er innganger, ikke merkelapper. En virkelig elev passer sjelden i én kategori."
        ]
      },
      {
        "label": "Om oversettelsen",
        "items": [
          "Innholdet på kortene er oversatt i sin helhet til norsk. Portugisisk er originalversjonen; ved tvil gjelder den portugisiske teksten.",
          "Kortet om det juridiske rammeverket er unntaket: hvert språk har sitt eget lands lovgivning, undersøkt for det landet i stedet for oversatt fra portugisisk.",
          "Navigasjon, etiketter og informasjonssider er fullt oversatt."
        ]
      },
      {
        "label": "Kreditering og lisens",
        "items": [
          "Utviklet og ledet av språklæreren <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>.",
          "Utgitt under lisensen <strong>CC BY-NC-SA 4.0</strong>.",
          "Kildekode: <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "pl": {
    "title": "O projekcie — Farol",
    "desc": "Czym jest, czym nie jest i jak wyciągnąć z niego maksimum w pięć minut.",
    "cat": "Przewodnik",
    "h1": "Jak korzystać z Farola",
    "subtitle": "Czym jest, czym nie jest i jak wyciągnąć z niego maksimum w pięć minut.",
    "sections": [
      {
        "label": "Czym jest",
        "items": [
          "Szybkie źródło informacji dla nauczycieli pracujących z heterogenicznymi klasami. Każda karta obejmuje profil ucznia i odpowiada na dwa pytania: co widzisz w klasie i co możesz zrobić dziś.",
          "Jest zaprojektowany na pięć minut, przed trudną lekcją, przed spotkaniem z rodzicami lub gdy kolega potrzebuje drugiej opinii na temat ucznia.",
          "Jest zasobem otwartym, aktualizowanym w miarę jak wiedza autora ewoluuje. Aktualna wersja to <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Czym nie jest",
        "items": [
          "<strong>Nie jest</strong> narzędziem diagnostycznym. Żadna karta nie zastępuje formalnej oceny psychologicznej lub pedagogicznej.",
          "<strong>Nie jest</strong> podręcznikiem klinicznym. Język jest celowo przystępny i ukierunkowany na klasę, a nie na praktykę.",
          "<strong>Nie jest</strong> ostateczny. Profile są punktami wejścia, a nie etykietami. Prawdziwy uczeń rzadko pasuje do jednej kategorii."
        ]
      },
      {
        "label": "Uwaga dotycząca tłumaczenia",
        "items": [
          "Treść kart jest w pełni przetłumaczona na język polski. Portugalski jest oryginalną wersją przewodnika; w razie wątpliwości rozstrzyga tekst portugalski.",
          "Karta ram prawnych stanowi wyjątek: każdy język zawiera ustawodawstwo własnego kraju, opracowane dla tego kraju, a nie przetłumaczone z portugalskiego.",
          "Nawigacja, etykiety i strony informacyjne są w pełni przetłumaczone."
        ]
      },
      {
        "label": "Autorstwo i licencja",
        "items": [
          "Wymyślony i kierowany przez <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, nauczyciela języków.",
          "Opublikowany na licencji <strong>CC BY-NC-SA 4.0</strong>.",
          "Kod źródłowy na <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "ro": {
    "title": "Despre — Farol",
    "desc": "Ce este, ce nu este și cum să obțineți maximul în cinci minute.",
    "cat": "Ghid",
    "h1": "Cum să folosiți Farol",
    "subtitle": "Ce este, ce nu este și cum să obțineți maximul în cinci minute.",
    "sections": [
      {
        "label": "Ce este",
        "items": [
          "Un ghid de consultare rapidă pentru profesorii care lucrează cu clase eterogene. Fiecare fișă acoperă un profil de elev și răspunde la două întrebări: ce vedeți în clasă și ce puteți face azi.",
          "Este conceput pentru cinci minute, înainte de o oră dificilă, înaintea unei întâlniri cu părinții sau când un coleg are nevoie de o a doua opinie despre un elev.",
          "Este o resursă deschisă, actualizată pe măsură ce cunoștințele autorului evoluează. Versiunea actuală este <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Ce nu este",
        "items": [
          "<strong>Nu este</strong> un instrument de diagnostic. Nicio fișă nu înlocuiește o evaluare psihologică sau pedagogică formală.",
          "<strong>Nu este</strong> un manual clinic. Limbajul este deliberat accesibil și orientat spre clasă, nu spre cabinet.",
          "<strong>Nu este</strong> definitiv. Profilurile sunt puncte de intrare, nu etichete. Un elev real rareori se încadrează într-o singură categorie."
        ]
      },
      {
        "label": "Notă despre traducere",
        "items": [
          "Conținutul fișelor este tradus integral în română. Portugheza este versiunea originală a ghidului; în caz de neclaritate, textul portughez prevalează.",
          "Fișa privind cadrul legal face excepție: fiecare limbă prezintă legislația propriei țări, documentată pentru acea țară, nu tradusă din portugheză.",
          "Navigarea, etichetele și paginile de informații sunt complet traduse."
        ]
      },
      {
        "label": "Credite și licență",
        "items": [
          "Conceput și coordonat de <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, profesor de limbi străine.",
          "Publicat sub licența <strong>CC BY-NC-SA 4.0</strong>.",
          "Cod sursă pe <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "sk": {
    "title": "O projekte — Farol",
    "desc": "Čo to je, čo to nie je a ako z toho vyťažiť maximum za päť minút.",
    "cat": "Sprievodca",
    "h1": "Ako používať Farol",
    "subtitle": "Čo to je, čo to nie je a ako z toho vyťažiť maximum za päť minút.",
    "sections": [
      {
        "label": "Čo to je",
        "items": [
          "Rýchly referenčný zdroj pre učiteľov pracujúcich s heterogénnymi triedami. Každá karta pokrýva profil žiaka a odpovedá na dve otázky: čo vidíte v triede a čo môžete dnes urobiť.",
          "Je navrhnutý na päť minút, pred náročnou hodinou, pred stretnutím s rodičmi alebo keď kolega potrebuje druhý názor na žiaka.",
          "Je to otvorený zdroj, aktualizovaný ako sa znalosti autora vyvíjajú. Aktuálna verzia je <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Čo to nie je",
        "items": [
          "<strong>Nie je to</strong> diagnostický nástroj. Žiadna karta nenahrádza formálne psychologické alebo pedagogické hodnotenie.",
          "<strong>Nie je to</strong> klinická príručka. Jazyk je zámerne prístupný a zameraný na triedu, nie na ordináciu.",
          "<strong>Nie je to</strong> definitívne. Profily sú vstupné body, nie nálepky. Skutočný žiak len zriedka zodpovedá jednej kategórii."
        ]
      },
      {
        "label": "Poznámka k prekladu",
        "items": [
          "Obsah kariet je plne preložený do slovenčiny. Portugalčina je pôvodnou verziou príručky; v prípade pochybností platí portugalský text.",
          "Karta právneho rámca je výnimkou: každý jazyk uvádza legislatívu vlastnej krajiny, spracovanú pre túto krajinu, nie preloženú z portugalčiny.",
          "Navigácia, popisky a informačné stránky sú plne preložené."
        ]
      },
      {
        "label": "Zásluhy a licencia",
        "items": [
          "Vymyslel a viedol <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, učiteľ jazykov.",
          "Zverejnené pod licenciou <strong>CC BY-NC-SA 4.0</strong>.",
          "Zdrojový kód na <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "sl": {
    "title": "O projektu — Farol",
    "desc": "Kaj je, kaj ni in kako iz njega izkoristiti največ v petih minutah.",
    "cat": "Vodnik",
    "h1": "Kako uporabljati Farol",
    "subtitle": "Kaj je, kaj ni in kako iz njega izkoristiti največ v petih minutah.",
    "sections": [
      {
        "label": "Kaj je",
        "items": [
          "Hitro priročno orodje za učitelje, ki delajo s heterogenimi razredi. Vsaka kartica pokriva profil učenca in odgovarja na dve vprašanji: kaj vidite v razredu in kaj lahko naredite danes.",
          "Zasnovano je za pet minut, pred zahtevno uro, pred srečanjem s starši ali ko kolega potrebuje drugo mnenje o učencu.",
          "Gre za odprt vir, ki se posodablja z razvojem avtorjevih znanj. Trenutna različica je <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Kaj ni",
        "items": [
          "<strong>Ni</strong> diagnostično orodje. Nobena kartica ne nadomesti formalnega psihološkega ali pedagoškega vrednotenja.",
          "<strong>Ni</strong> klinični priročnik. Jezik je namerno dostopen in usmerjen v razred, ne v ambulanto.",
          "<strong>Ni</strong> dokončno. Profili so izhodišča, ne nalepke. Pravi učenec le redko ustreza eni kategoriji."
        ]
      },
      {
        "label": "Opomba o prevodu",
        "items": [
          "Vsebina kartic je v celoti prevedena v slovenščino. Portugalščina je izvirna različica priročnika; v primeru dvoma velja portugalsko besedilo.",
          "Kartica pravnega okvira je izjema: vsak jezik navaja zakonodajo svoje države, raziskano za to državo in ne prevedeno iz portugalščine.",
          "Navigacija, oznake in informacijske strani so v celoti prevedene."
        ]
      },
      {
        "label": "Zahvale in licenca",
        "items": [
          "Zasnoval in vodil <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, učitelj jezikov.",
          "Objavljeno pod licenco <strong>CC BY-NC-SA 4.0</strong>.",
          "Izvorna koda na <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "sr": {
    "title": "О приручнику — Farol",
    "desc": "Шта јесте, шта није и како да га најбоље искористите за пет минута.",
    "cat": "Упутство",
    "h1": "Како се користи Farol",
    "subtitle": "Шта јесте, шта није и како да га најбоље искористите за пет минута.",
    "sections": [
      {
        "label": "Шта јесте",
        "items": [
          "Приручник за брзо коришћење намењен наставницима који раде са хетерогеним одељењима. Свака картица обрађује један профил ученика и одговара на два питања: шта видите у одељењу и шта можете да урадите данас.",
          "Осмишљен је да буде од користи за пет минута: пред тежак час, пред разговор са родитељима или када колега затражи друго мишљење о ученику.",
          "Отворен је ресурс који се допуњава како се знање аутора развија. Тренутна верзија је <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Шта није",
        "items": [
          "<strong>Није дијагностичко средство.</strong> Ниједна картица не замењује формалну психолошку или педагошку процену.",
          "<strong>Није клинички приручник.</strong> Језик је намерно приступачан и окренут одељењу, а не клиници.",
          "<strong>Није коначан.</strong> Профили су улазне тачке, а не етикете. Стварни ученик ретко стаје у једну категорију."
        ]
      },
      {
        "label": "О преводу",
        "items": [
          "Садржај картица преведен је у целости на српски. Португалски је изворна верзија приручника; у случају недоумице важи португалски текст.",
          "Картица о правном оквиру је изузетак: сваки језик садржи законодавство сопствене земље, истражено за ту земљу, а не преведено са португалског.",
          "Навигација, ознаке и информативне странице преведени су у потпуности."
        ]
      },
      {
        "label": "Ауторство и лиценца",
        "items": [
          "Замислио и водио наставник језика <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>.",
          "Објављено под лиценцом <strong>CC BY-NC-SA 4.0</strong>.",
          "Изворни код: <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "sv": {
    "title": "Om — Farol",
    "desc": "Vad det är, vad det inte är och hur man får ut mesta möjliga på fem minuter.",
    "cat": "Guide",
    "h1": "Hur man använder Farol",
    "subtitle": "Vad det är, vad det inte är och hur man får ut mesta möjliga på fem minuter.",
    "sections": [
      {
        "label": "Vad det är",
        "items": [
          "En snabbreferens för lärare som arbetar med heterogena klasser. Varje kort täcker en elevprofil och besvarar två frågor: vad ser du i klassrummet och vad kan du göra idag.",
          "Det är utformat för fem minuter, före en svår lektion, inför ett föräldrasamtal eller när en kollega behöver en andra åsikt om en elev.",
          "Det är en öppen resurs som uppdateras i takt med att författarens kunskap utvecklas. Den nuvarande versionen är <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Vad det inte är",
        "items": [
          "<strong>Det är inte</strong> ett diagnostiskt verktyg. Inget kort ersätter en formell psykologisk eller pedagogisk bedömning.",
          "<strong>Det är inte</strong> en klinisk handbok. Språket är medvetet tillgängligt och riktat mot klassrummet, inte mot vårdinrättningen.",
          "<strong>Det är inte</strong> definitivt. Profilerna är ingångspunkter, inte etiketter. En verklig elev passar sällan in i en enda kategori."
        ]
      },
      {
        "label": "Notering om översättning",
        "items": [
          "Kortens innehåll är helt översatt till svenska. Portugisiska är guidens originalversion; vid tveksamhet gäller den portugisiska texten.",
          "Kortet om det rättsliga ramverket är undantaget: varje språk innehåller sitt eget lands lagstiftning, efterforskad för det landet i stället för översatt från portugisiskan.",
          "Navigering, etiketter och informationssidor är fullt översatta."
        ]
      },
      {
        "label": "Erkännanden och licens",
        "items": [
          "Skapad och ledd av <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a>, språklärare.",
          "Publicerad under licens <strong>CC BY-NC-SA 4.0</strong>.",
          "Källkod på <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  },
  "tr": {
    "title": "Hakkında — Farol",
    "desc": "Nedir, ne değildir ve beş dakikada ondan en iyi nasıl yararlanılır.",
    "cat": "Kılavuz",
    "h1": "Farol nasıl kullanılır",
    "subtitle": "Nedir, ne değildir ve beş dakikada ondan en iyi nasıl yararlanılır.",
    "sections": [
      {
        "label": "Nedir",
        "items": [
          "Karma sınıflarla çalışan öğretmenler için hızlı başvuru. Her kart bir öğrenci profilini ele alır ve iki soruya yanıt verir: sınıfta ne görüyorsunuz ve bugün ne yapabilirsiniz.",
          "Beş dakikada işe yarasın diye tasarlandı: zor bir dersten önce, veli görüşmesinden önce ya da bir meslektaş bir öğrenci için ikinci bir görüş istediğinde.",
          "Açık bir kaynaktır ve yazarın bilgisi geliştikçe güncellenir. Güncel sürüm: <strong>v0.1</strong>."
        ]
      },
      {
        "label": "Ne değildir",
        "items": [
          "<strong>Tanılama aracı değildir.</strong> Hiçbir kart resmî psikolojik ya da eğitsel değerlendirmenin yerine geçmez.",
          "<strong>Klinik bir el kitabı değildir.</strong> Dili bilinçli olarak sade ve sınıfa dönüktür, kliniğe değil.",
          "<strong>Kesin değildir.</strong> Profiller birer giriş noktasıdır, etiket değil. Gerçek bir öğrenci nadiren tek bir kategoriye sığar."
        ]
      },
      {
        "label": "Çeviri hakkında",
        "items": [
          "Kartların içeriği tümüyle Türkçeye çevrilmiştir. Kılavuzun özgün sürümü Portekizcedir; tereddüt hâlinde Portekizce metin esas alınır.",
          "Yasal çerçeve kartı istisnadır: her dil kendi ülkesinin mevzuatını taşır; bu mevzuat Portekizceden çevrilmemiş, o ülke için araştırılmıştır.",
          "Gezinme, etiketler ve bilgi sayfaları tümüyle çevrilmiştir."
        ]
      },
      {
        "label": "Künye ve lisans",
        "items": [
          "Dil öğretmeni <a href=\"https://guilhermegfmachado.github.io/work/\" target=\"_blank\" rel=\"noopener noreferrer\">Guilherme de Góis Machado</a> tarafından tasarlandı ve yönetildi.",
          "<strong>CC BY-NC-SA 4.0</strong> lisansıyla yayımlanmıştır.",
          "Kaynak kodu: <a href=\"https://github.com/guilhermegfmachado/farol\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/guilhermegfmachado/farol</a>."
        ]
      }
    ]
  }
};
