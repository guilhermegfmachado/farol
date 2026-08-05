// About-page copy, one entry per locale, lifted verbatim from the 28 per-locale
// pages it replaces. Section counts differ by design: fr, hr and it do not carry
// the translation note the other 25 do.
import type { Lang } from './i18n';

export interface AboutSection { label: string; items: string[] }
export interface AboutPage { title: string; desc: string; cat: string; h1: string; subtitle: string; sections: AboutSection[] }

export const about: Partial<Record<Lang, AboutPage>> = {
  "bg": {
    "title": "За проекта — Farol",
    "desc": "Какво е Farol, как да го използвате и какво да очаквате от секциите с ИИ.",
    "cat": "Ръководство",
    "h1": "Как да използвате Farol",
    "subtitle": "Какво е, какво не е и как да извлечете максимума за пет минути.",
    "sections": [
      {
        "label": "Какво е",
        "items": [
          "Бързо справочно помагало за учители, работещи с хетерогенни класове. Всяка карта покрива профил на ученик и отговаря на три въпроса: какво виждате в класа, какво можете да направите днес и как може да помогне ИИ.",
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
        "label": "За секциите с ИИ",
        "items": [
          "Секциите <em>Където ИИ се вписва</em> са умишлено празни в тази версия. Авторът преминава специализирано обучение във Флоренция (август 2026) преди да препоръча конкретни инструменти.",
          "Структурата вече е готова, всеки инструмент ще има случай на употреба, предложение за подкана и бележка за поверителност. Съдържанието идва в <strong>v0.2</strong>, планирано за септември 2026."
        ]
      },
      {
        "label": "Бележка за превода",
        "items": [
          "Съдържанието на картите е изцяло преведено на български. Португалският е оригиналната версия на наръчника; при съмнение водещ е португалският текст.",
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
    "desc": "Co je Farol, jak ho používat a co očekávat od sekcí AI.",
    "cat": "Průvodce",
    "h1": "Jak používat Farol",
    "subtitle": "Co to je, co to není a jak z toho vytěžit maximum za pět minut.",
    "sections": [
      {
        "label": "Co to je",
        "items": [
          "Rychlý referenční zdroj pro učitele pracující s heterogenními třídami. Každá karta pokrývá profil žáka a odpovídá na tři otázky: co vidíte ve třídě, co můžete dnes udělat a jak může AI pomoci.",
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
        "label": "O sekcích AI",
        "items": [
          "Sekce <em>Kde AI zapadá</em> jsou v této verzi záměrně prázdné. Autor absolvuje odborné školení ve Florencii (srpen 2026) před doporučením konkrétních nástrojů.",
          "Struktura je již připravena, každý nástroj bude mít případ použití, návrh promptu a poznámku k ochraně soukromí. Obsah přijde ve verzi <strong>0.2</strong>, plánované na září 2026."
        ]
      },
      {
        "label": "Poznámka k překladu",
        "items": [
          "Obsah karet je plně přeložen do češtiny. Portugalština je původní verzí příručky; v případě pochybností platí portugalský text.",
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
    "desc": "Hvad Farol er, hvordan man bruger det og hvad man kan forvente af AI-sektionerne.",
    "cat": "Guide",
    "h1": "Hvordan man bruger Farol",
    "subtitle": "Hvad det er, hvad det ikke er og hvordan man får mest ud af det på fem minutter.",
    "sections": [
      {
        "label": "Hvad det er",
        "items": [
          "En hurtig reference for lærere, der arbejder med heterogene klasser. Hvert kort dækker en elevprofil og besvarer tre spørgsmål: hvad ser du i klassen, hvad kan du gøre i dag og hvordan kan AI hjælpe.",
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
        "label": "Om AI-sektionerne",
        "items": [
          "Sektionerne <em>Hvor AI passer ind</em> er bevidst tomme i denne version. Forfatteren gennemgår specialiseret uddannelse i Firenze (august 2026) inden specifikke værktøjer anbefales.",
          "Strukturen er allerede på plads, hvert værktøj vil have et anvendelsestilfælde, et promptforslag og en privatlivsnote. Indholdet kommer i <strong>v0.2</strong>, planlagt til september 2026."
        ]
      },
      {
        "label": "Note om oversættelse",
        "items": [
          "Kortenes indhold er fuldt oversat til dansk. Portugisisk er guidens originalversion; i tvivlstilfælde gælder den portugisiske tekst.",
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
    "desc": "Was Farol ist, wie man es benutzt und was von den KI-Abschnitten zu erwarten ist.",
    "cat": "Leitfaden",
    "h1": "Wie man Farol benutzt",
    "subtitle": "Was es ist, was es nicht ist und wie man in fünf Minuten das Beste daraus macht.",
    "sections": [
      {
        "label": "Was es ist",
        "items": [
          "Ein Schnellnachschlagewerk für Lehrkräfte, die mit heterogenen Klassen arbeiten. Jede Karte behandelt ein Lernprofil und beantwortet drei Fragen: Was sehen Sie im Unterricht, was können Sie heute tun und wie kann KI helfen.",
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
        "label": "Über die KI-Abschnitte",
        "items": [
          "Die Abschnitte <em>Wo KI passt</em> sind in dieser Version absichtlich leer. Der Autor absolviert eine Fachweiterbildung in Florenz (August 2026), bevor er spezifische Werkzeuge empfiehlt.",
          "Die Struktur ist bereits vorhanden, jedes Werkzeug wird einen Anwendungsfall, einen Prompt-Vorschlag und einen Datenschutzhinweis haben. Der Inhalt kommt in <strong>v0.2</strong>, geplant für September 2026."
        ]
      },
      {
        "label": "Hinweis zur Übersetzung",
        "items": [
          "Der Karteninhalt ist vollständig ins Deutsche übersetzt. Portugiesisch ist die Originalversion des Leitfadens; im Zweifelsfall gilt der portugiesische Text.",
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
    "desc": "Τι είναι το Farol, πώς να το χρησιμοποιείτε και τι να περιμένετε από τις ενότητες ΤΝ.",
    "cat": "Οδηγός",
    "h1": "Πώς να χρησιμοποιείτε το Farol",
    "subtitle": "Τι είναι, τι δεν είναι και πώς να τον αξιοποιήσετε στο έπακρο σε πέντε λεπτά.",
    "sections": [
      {
        "label": "Τι είναι",
        "items": [
          "Ένα γρήγορο εγχειρίδιο αναφοράς για εκπαιδευτικούς που εργάζονται με ετερογενείς τάξεις. Κάθε κάρτα καλύπτει ένα προφίλ μαθητή και απαντά τρεις ερωτήσεις: τι βλέπετε στην τάξη, τι μπορείτε να κάνετε σήμερα και πώς μπορεί να βοηθήσει η ΤΝ.",
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
        "label": "Σχετικά με τις ενότητες ΤΝ",
        "items": [
          "Οι ενότητες <em>Πού ταιριάζει η ΤΝ</em> είναι εσκεμμένα κενές σε αυτή την έκδοση. Ο συγγραφέας παρακολουθεί εξειδικευμένη εκπαίδευση στη Φλωρεντία (Αύγουστος 2026) πριν συστήσει συγκεκριμένα εργαλεία.",
          "Η δομή είναι ήδη έτοιμη, κάθε εργαλείο θα έχει περίπτωση χρήσης, πρόταση prompt και σημείωση απορρήτου. Το περιεχόμενο έρχεται στην <strong>v0.2</strong>, προγραμματισμένη για Σεπτέμβριο 2026."
        ]
      },
      {
        "label": "Σημείωση για τη μετάφραση",
        "items": [
          "Το περιεχόμενο των καρτών είναι πλήρως μεταφρασμένο στα ελληνικά. Τα πορτογαλικά είναι η πρωτότυπη έκδοση του οδηγού· σε περίπτωση αμφιβολίας υπερισχύει το πορτογαλικό κείμενο.",
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
    "desc": "What Farol is, how to use it, and what to expect from the AI sections.",
    "cat": "Guide",
    "h1": "How to use Farol",
    "subtitle": "What it is, what it isn't, and how to get the most out of it in five minutes.",
    "sections": [
      {
        "label": "What it is",
        "items": [
          "A quick-reference manual for teachers working with mixed-needs classrooms. Each card covers a learner profile and answers three questions: what you're seeing in class, what you can do today, and where AI might help.",
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
        "label": "About the AI sections",
        "items": [
          "The <em>Where AI fits in</em> sections are intentionally blank in this version. The author is attending specialist training in Florence (August 2026) before recommending specific tools.",
          "The structure is already in place, each tool will have a use case, a prompt suggestion, and a privacy note. Content arrives in <strong>v0.2</strong>, expected September 2026."
        ]
      },
      {
        "label": "A note on translation",
        "items": [
          "The full card content is translated into English. Portuguese is the original version of the guide; if anything is unclear, the Portuguese text prevails.",
          "The site is designed for teachers in Portuguese-speaking contexts; the English version is provided for international colleagues and conference use."
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
    "desc": "Qué es Farol, cómo usarlo y qué esperar de las secciones de IA.",
    "cat": "Guía",
    "h1": "Cómo usar Farol",
    "subtitle": "Qué es, qué no es y cómo sacarle el máximo partido en cinco minutos.",
    "sections": [
      {
        "label": "Qué es",
        "items": [
          "Un manual de consulta rápida para docentes que trabajan con clases heterogéneas. Cada ficha cubre un perfil de aprendizaje y responde a tres preguntas: qué está viendo en clase, qué puede hacer hoy, y cómo puede ayudar la IA.",
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
        "label": "Sobre las secciones de IA",
        "items": [
          "Las secciones <em>Cómo encaja la IA</em> están intencionalmente en blanco en esta versión. El autor está realizando formación especializada en Florencia (agosto 2026) antes de recomendar herramientas específicas.",
          "La estructura ya existe, cada herramienta tendrá un caso de uso, una sugerencia de prompt y una nota de privacidad. El contenido llega en <strong>v0.2</strong>, prevista para septiembre de 2026."
        ]
      },
      {
        "label": "Nota sobre la traducción",
        "items": [
          "El contenido de las fichas está completamente traducido al español. El portugués es la versión original de la guía; en caso de duda, prevalece el texto portugués.",
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
    "desc": "Mis on Farol, kuidas seda kasutada ja mida oodata tehisintellekti sektsioonidelt.",
    "cat": "Juhend",
    "h1": "Kuidas Faroli kasutada",
    "subtitle": "Mis see on, mis see ei ole ja kuidas saada sellest viie minutiga maksimum.",
    "sections": [
      {
        "label": "Mis see on",
        "items": [
          "Kiire viiteraamat õpetajatele, kes töötavad heterogeensete klassidega. Iga kaart hõlmab õpilase profiili ja vastab kolmele küsimusele: mida näete klassis, mida saate täna teha ja kuidas tehisintellekt aidata saab.",
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
        "label": "Tehisintellekti sektsioonidest",
        "items": [
          "Sektsioonid <em>Kus tehisintellekt sobib</em> on selles versioonis tahtlikult tühjad. Autor läbib spetsialiseerunud koolituse Firenzes (august 2026) enne konkreetsete tööriistade soovitamist.",
          "Struktuur on juba valmis, igal tööriistal on kasutusjuhtum, viipamise ettepanek ja privaatsusõigus. Sisu tuleb <strong>v0.2</strong>-sse, planeeritud septembriks 2026."
        ]
      },
      {
        "label": "Märkus tõlke kohta",
        "items": [
          "Kaartide sisu on täielikult eesti keelde tõlgitud. Portugali keel on juhendi originaalversioon; kahtluse korral kehtib portugalikeelne tekst.",
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
    "desc": "Mitä Farol on, miten sitä käytetään ja mitä tekoälyosioilta voi odottaa.",
    "cat": "Opas",
    "h1": "Miten Farolia käytetään",
    "subtitle": "Mitä se on, mitä se ei ole ja miten siitä saa parhaan irti viidessä minuutissa.",
    "sections": [
      {
        "label": "Mitä se on",
        "items": [
          "Nopea hakuteos opettajille, jotka työskentelevät heterogeenisten luokkien kanssa. Jokainen kortti kattaa oppilasprofiilin ja vastaa kolmeen kysymykseen: mitä näet luokkahuoneessa, mitä voit tehdä tänään ja miten tekoäly voi auttaa.",
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
        "label": "Tekoälyosioista",
        "items": [
          "Osiot <em>Missä tekoäly sopii</em> ovat tässä versiossa tarkoituksella tyhjiä. Kirjoittaja käy erikoiskoulutuksen Firenzessä (elokuu 2026) ennen kuin suosittelee tiettyjä työkaluja.",
          "Rakenne on jo paikallaan, jokaisella työkalulla on käyttötapaus, prompt-ehdotus ja yksityisyyshuomautus. Sisältö tulee <strong>v0.2</strong>-versioon, suunniteltu syyskuulle 2026."
        ]
      },
      {
        "label": "Huomio käännöksestä",
        "items": [
          "Korttien sisältö on käännetty kokonaan suomeksi. Portugali on oppaan alkuperäisversio; epäselvissä tapauksissa portugalinkielinen teksti on ensisijainen.",
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
    "desc": "Ce qu'est Farol, comment l'utiliser et à quoi s'attendre des sections IA.",
    "cat": "Guide",
    "h1": "Comment utiliser Farol",
    "subtitle": "Ce que c'est, ce que ce n'est pas, et comment en tirer le meilleur parti en cinq minutes.",
    "sections": [
      {
        "label": "Ce que c'est",
        "items": [
          "Un guide de référence rapide pour les enseignants qui travaillent avec des classes hétérogènes. Chaque fiche couvre un profil d'apprentissage et répond à trois questions : ce que vous observez en classe, ce que vous pouvez faire aujourd'hui, et comment l'IA peut aider.",
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
        "label": "À propos des sections IA",
        "items": [
          "Les sections <em>Comment l'IA s'intègre</em> sont intentionnellement vides dans cette version. L'auteur suit une formation spécialisée à Florence (août 2026) avant de recommander des outils spécifiques.",
          "La structure existe déjà, chaque outil aura un cas d'usage, une suggestion de prompt et une note de confidentialité. Le contenu arrive en <strong>v0.2</strong>, prévue pour septembre 2026."
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
    "desc": "Cad is Farol ann, conas é a úsáid agus cad is féidir a bheith ag súil ó na hailt AI.",
    "cat": "Treoir",
    "h1": "Conas Farol a Úsáid",
    "subtitle": "Cad atá ann, cad nach bhfuil ann agus conas é a bhaint as i gcúig nóiméad.",
    "sections": [
      {
        "label": "Cad atá ann",
        "items": [
          "Tagairt thapa do mhúinteoirí atá ag obair le ranganna éagsúla. Clúdaíonn gach cárta próifíl dalta agus freagraíonn sé trí cheist: cad atá le feiceáil agat sa rang, cad is féidir leat a dhéanamh inniu agus conas is féidir le AI cabhrú.",
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
        "label": "Faoi na hailt AI",
        "items": [
          "Tá na hailt <em>Cá bhfuil áit ag AI</em> folamh d'aon ghnó sa leagan seo. Tá an t-údar ag déanamh oiliúna speisialaithe i bhFlórans (Lúnasa 2026) sular moltar uirlisí sonracha.",
          "Tá an struchtúr ann cheana, beidh cás úsáide, moladh spreagtha agus nóta príobháideachais ag gach uirlis. Tagann an t-ábhar in <strong>v0.2</strong>, pleanáilte do Mheán Fómhair 2026."
        ]
      },
      {
        "label": "Nóta faoin aistriúchán",
        "items": [
          "Tá ábhar na gcártaí aistrithe go hiomlán go Gaeilge. Is í an Phortaingéilis bunleagan an treoirleabhair; má bhíonn amhras ann, is ag an téacs Portaingéilise atá an forlámhas.",
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
    "desc": "Što je Farol, kako ga koristiti i što očekivati od AI odjeljaka.",
    "cat": "Vodič",
    "h1": "Kako koristiti Farol",
    "subtitle": "Što jest, što nije i kako izvući maksimum za pet minuta.",
    "sections": [
      {
        "label": "Što jest",
        "items": [
          "Priručnik za brzu referencu nastavnicima koji rade s heterogenim razredima. Svaka kartica pokriva jedan profil učenja i odgovara na tri pitanja: što vidite u razredu, što možete učiniti danas i kako AI može pomoći.",
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
        "label": "O AI odjeljcima",
        "items": [
          "Odjeljci <em>Gdje AI može pomoći</em> namjerno su prazni u ovoj verziji. Autor pohađa specijaliziranu obuku u Firenci (kolovoz 2026.) prije preporučivanja konkretnih alata.",
          "Struktura već postoji, svaki alat imat će slučaj upotrebe, prijedlog upita i napomenu o privatnosti. Sadržaj dolazi u <strong>v0.2</strong>, planiranoj za rujan 2026."
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
    "desc": "Mi a Farol, hogyan kell használni és mit lehet elvárni a MI-szekicóktól.",
    "cat": "Útmutató",
    "h1": "Hogyan kell használni a Farolt",
    "subtitle": "Mi az, mi nem az és hogyan hozhatja ki belőle a legtöbbet öt perc alatt.",
    "sections": [
      {
        "label": "Mi az",
        "items": [
          "Gyors kézikönyv heterogén osztályokkal dolgozó tanároknak. Minden karton tartalmaz egy tanulói profilt és három kérdésre ad választ: mit lát az osztályban, mit tehet ma és hogyan tud segíteni a MI.",
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
        "label": "A MI-szekciókról",
        "items": [
          "A <em>Ahol a MI beleillik</em> szekciók ebben a verzióban szándékosan üresek. A szerző speciális képzésen vesz részt Firenzében (2026. augusztus), mielőtt konkrét eszközöket ajánl.",
          "A struktúra már kész, minden eszköznek lesz felhasználási esete, prompt-javaslata és adatvédelmi megjegyzése. A tartalom a <strong>v0.2</strong>-ben jön, 2026 szeptemberére tervezve."
        ]
      },
      {
        "label": "Megjegyzés a fordításról",
        "items": [
          "A kártyák tartalma teljes egészében le van fordítva magyarra. A portugál az útmutató eredeti változata; kétség esetén a portugál szöveg az irányadó.",
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
    "desc": "Hvað Farol er, hvernig hún er notuð og hvers má vænta af gervigreindarhlutunum.",
    "cat": "Leiðbeiningar",
    "h1": "Hvernig á að nota Farol",
    "subtitle": "Hvað hún er, hvað hún er ekki og hvernig þú nýtir hana best á fimm mínútum.",
    "sections": [
      {
        "label": "Hvað hún er",
        "items": [
          "Uppflettirit fyrir kennara sem vinna með fjölbreyttum bekkjum. Hvert spjald tekur fyrir eina svipmynd nemanda og svarar þremur spurningum: hvað þú sérð í stofunni, hvað þú getur gert í dag og hvar gervigreind getur hjálpað.",
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
        "label": "Um gervigreindarhlutana",
        "items": [
          "Hlutarnir <em>Hvar gervigreind kemur inn</em> standa vísvitandi auðir í þessari útgáfu. Höfundur situr sérhæft námskeið í Flórens (ágúst 2026) áður en hann mælir með tilteknum verkfærum.",
          "Uppbyggingin er tilbúin: hvert verkfæri fær notkunardæmi, tillögu að fyrirmælum og persónuverndarnótu. Efnið kemur í <strong>v0.2</strong>, áætlað í september 2026."
        ]
      },
      {
        "label": "Um þýðinguna",
        "items": [
          "Efni spjaldanna er þýtt í heild á íslensku. Portúgalska er frumútgáfa handbókarinnar; í vafa gildir portúgalski textinn.",
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
    "desc": "Cosa è Farol, come usarlo e cosa aspettarsi dalle sezioni IA.",
    "cat": "Guida",
    "h1": "Come usare Farol",
    "subtitle": "Cos'è, cosa non è e come ottenere il massimo in cinque minuti.",
    "sections": [
      {
        "label": "Cosa è",
        "items": [
          "Un manuale di consultazione rapida per gli insegnanti che lavorano con classi eterogenee. Ogni scheda copre un profilo di apprendimento e risponde a tre domande: cosa stai vedendo in classe, cosa puoi fare oggi, e come può aiutare l'IA.",
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
        "label": "Sulle sezioni IA",
        "items": [
          "Le sezioni <em>Come si inserisce l'IA</em> sono intenzionalmente vuote in questa versione. L'autore sta frequentando una formazione specializzata a Firenze (agosto 2026) prima di raccomandare strumenti specifici.",
          "La struttura esiste già, ogni strumento avrà un caso d'uso, un suggerimento di prompt e una nota sulla privacy. Il contenuto arriva in <strong>v0.2</strong>, prevista per settembre 2026."
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
    "desc": "Kas yra Farol, kaip jį naudoti ir ko tikėtis iš DI skyrių.",
    "cat": "Vadovas",
    "h1": "Kaip naudoti Farol",
    "subtitle": "Kas tai yra, kas tai nėra ir kaip išgauti maksimumą per penkias minutes.",
    "sections": [
      {
        "label": "Kas tai yra",
        "items": [
          "Greita informacinė priemonė mokytojams, dirbantiems su heterogeniškomis klasėmis. Kiekviena kortelė apima mokinio profilį ir atsako į tris klausimus: ką matote klasėje, ką galite daryti šiandien ir kaip gali padėti DI.",
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
        "label": "Apie DI skyrius",
        "items": [
          "Skyriai <em>Kur tinka DI</em> šioje versijoje yra sąmoningai tušti. Autorius lanko specializuotą mokymą Florencijoje (2026 rugpjūtis) prieš rekomenduodamas konkrečias priemones.",
          "Struktūra jau parengta, kiekviena priemonė turės naudojimo atvejį, raginimo pasiūlymą ir privatumo pastabą. Turinys ateis <strong>v0.2</strong> versijoje, planuojamoje 2026 rugsėjui."
        ]
      },
      {
        "label": "Pastaba dėl vertimo",
        "items": [
          "Kortelių turinys visiškai išverstas į lietuvių kalbą. Portugalų kalba yra originali vadovo versija; kilus abejonių, vadovaujamasi portugališku tekstu.",
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
    "desc": "Kas ir Farol, kā to izmantot un ko sagaidīt no MI sadaļām.",
    "cat": "Rokasgrāmata",
    "h1": "Kā izmantot Farol",
    "subtitle": "Kas tas ir, kas tas nav un kā gūt maksimumu piecās minūtēs.",
    "sections": [
      {
        "label": "Kas tas ir",
        "items": [
          "Ātrā uzziņu grāmata skolotājiem, kas strādā ar heterogēnām klasēm. Katra karte aptver skolēna profilu un atbild uz trim jautājumiem: ko redzat klasē, ko varat darīt šodien un kā var palīdzēt MI.",
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
        "label": "Par MI sadaļām",
        "items": [
          "Sadaļas <em>Kur MI iederas</em> šajā versijā ir apzināti tukšas. Autors iziet specializētu apmācību Florencē (2026. gada augustā) pirms konkrētu rīku ieteikšanas.",
          "Struktūra jau ir gatava, katram rīkam būs lietošanas gadījums, uzvednes ieteikums un privātuma piezīme. Saturs tiks pievienots versijā <strong>v0.2</strong>, kas plānota 2026. gada septembrī."
        ]
      },
      {
        "label": "Piezīme par tulkojumu",
        "items": [
          "Karšu saturs ir pilnībā iztulkots latviešu valodā. Portugāļu valoda ir rokasgrāmatas oriģinālā versija; šaubu gadījumā noteicošais ir portugāļu teksts.",
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
    "desc": "Што е Farol, како се користи и што да се очекува од деловите за вештачката интелигенција.",
    "cat": "Упатство",
    "h1": "Како се користи Farol",
    "subtitle": "Што е, што не е и како најдобро да го искористите за пет минути.",
    "sections": [
      {
        "label": "Што е",
        "items": [
          "Прирачник за брза употреба наменет за наставници што работат со разнородни одделенија. Секоја картичка обработува еден профил на ученик и одговара на три прашања: што гледате во одделението, што можете да направите денес и каде вештачката интелигенција може да помогне.",
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
        "label": "За деловите за вештачката интелигенција",
        "items": [
          "Деловите <em>Каде влегува вештачката интелигенција</em> намерно се празни во оваа верзија. Авторот посетува специјализирана обука во Фиренца (август 2026) пред да препорача конкретни алатки.",
          "Структурата е подготвена: секоја алатка добива пример на употреба, предлог-барање и белешка за приватност. Содржината пристигнува во верзијата <strong>v0.2</strong>, планирана за септември 2026."
        ]
      },
      {
        "label": "За преводот",
        "items": [
          "Содржината на картичките е преведена во целост на македонски. Португалскиот е изворната верзија на прирачникот; во случај на недоумица важи португалскиот текст.",
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
    "desc": "X'inhu Farol, kif tużah u x'tistenna mis-sezzjonijiet tal-AI.",
    "cat": "Gwida",
    "h1": "Kif Tuża Farol",
    "subtitle": "X'inhu, x'mhuwiex u kif tista' tieħu l-massimu minnu f'ħames minuti.",
    "sections": [
      {
        "label": "X'inhu",
        "items": [
          "Referenza rapida għall-għalliema li jaħdmu ma' klassijiet eteroġenji. Kull karta tkopri profil ta' student u twieġeb tliet mistoqsijiet: x'tara fil-klassi, x'tista' tagħmel illum u kif tista' tgħin l-AI.",
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
        "label": "Dwar is-sezzjonijiet tal-AI",
        "items": [
          "Is-sezzjonijiet <em>Fejn tidħol l-AI</em> huma intenzjonalment vojta f'din il-verżjoni. L-awtur qed jgħaddi minn taħriġ speċjalizzat Firenze (Awwissu 2026) qabel ma jirrakkomanda għodod speċifiċi.",
          "L-istruttura hija diġà lesta, kull għodda se jkollha każ ta' użu, suġġeriment ta' prompt u nota ta' privatezza. Il-kontenut jiġi fi <strong>v0.2</strong>, ippjanat għal Settembru 2026."
        ]
      },
      {
        "label": "Nota dwar it-traduzzjoni",
        "items": [
          "Il-kontenut tal-kards huwa tradott kompletament għall-Malti. Il-Portugiż huwa l-verżjoni oriġinali tal-gwida; f'każ ta' dubju, jipprevali t-test Portugiż.",
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
    "desc": "Wat Farol is, hoe het te gebruiken en wat te verwachten van de AI-secties.",
    "cat": "Gids",
    "h1": "Hoe Farol te gebruiken",
    "subtitle": "Wat het is, wat het niet is en hoe u er in vijf minuten het meeste uit haalt.",
    "sections": [
      {
        "label": "Wat het is",
        "items": [
          "Een snel naslagwerk voor leerkrachten die werken met heterogene klassen. Elke kaart behandelt een leerprofiel en beantwoordt drie vragen: wat ziet u in de klas, wat kunt u vandaag doen en hoe kan AI helpen.",
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
        "label": "Over de AI-secties",
        "items": [
          "De secties <em>Waar AI past</em> zijn in deze versie opzettelijk leeg. De auteur volgt een specialisatiecursus in Florence (augustus 2026) voor hij specifieke instrumenten aanbeveelt.",
          "De structuur is al aanwezig, elk instrument zal een gebruiksgeval, een promptsuggestie en een privacynota hebben. De inhoud komt in <strong>v0.2</strong>, gepland voor september 2026."
        ]
      },
      {
        "label": "Noot over de vertaling",
        "items": [
          "De inhoud van de kaarten is volledig naar het Nederlands vertaald. Portugees is de originele versie van de gids; bij twijfel geldt de Portugese tekst.",
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
    "desc": "Hva Farol er, hvordan den brukes og hva du kan vente av KI-delene.",
    "cat": "Veiledning",
    "h1": "Slik bruker du Farol",
    "subtitle": "Hva den er, hva den ikke er, og hvordan du får mest ut av den på fem minutter.",
    "sections": [
      {
        "label": "Hva den er",
        "items": [
          "Et oppslagsverk for lærere som arbeider med sammensatte klasser. Hvert kort dekker en elevprofil og svarer på tre spørsmål: hva du ser i klasserommet, hva du kan gjøre i dag, og hvor KI kan hjelpe.",
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
        "label": "Om KI-delene",
        "items": [
          "<em>Hvor KI kommer inn</em>-delene står bevisst tomme i denne versjonen. Forfatteren tar spesialisert etterutdanning i Firenze (august 2026) før han anbefaler konkrete verktøy.",
          "Strukturen er klar: hvert verktøy får et bruksområde, et forslag til ledetekst og et personvernnotat. Innholdet kommer i <strong>v0.2</strong>, planlagt til september 2026."
        ]
      },
      {
        "label": "Om oversettelsen",
        "items": [
          "Innholdet på kortene er oversatt i sin helhet til norsk. Portugisisk er originalversjonen; ved tvil gjelder den portugisiske teksten.",
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
    "desc": "Czym jest Farol, jak go używać i czego oczekiwać od sekcji AI.",
    "cat": "Przewodnik",
    "h1": "Jak korzystać z Farola",
    "subtitle": "Czym jest, czym nie jest i jak wyciągnąć z niego maksimum w pięć minut.",
    "sections": [
      {
        "label": "Czym jest",
        "items": [
          "Szybkie źródło informacji dla nauczycieli pracujących z heterogenicznymi klasami. Każda karta obejmuje profil ucznia i odpowiada na trzy pytania: co widzisz w klasie, co możesz zrobić dziś i jak może pomóc AI.",
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
        "label": "O sekcjach AI",
        "items": [
          "Sekcje <em>Gdzie AI się wpisuje</em> są w tej wersji celowo puste. Autor odbywa specjalistyczne szkolenie we Florencji (sierpień 2026) przed poleceniem konkretnych narzędzi.",
          "Struktura jest już gotowa, każde narzędzie będzie miało przypadek użycia, sugestię promptu i notatkę o prywatności. Treść pojawi się w <strong>v0.2</strong>, planowanej na wrzesień 2026."
        ]
      },
      {
        "label": "Uwaga dotycząca tłumaczenia",
        "items": [
          "Treść kart jest w pełni przetłumaczona na język polski. Portugalski jest oryginalną wersją przewodnika; w razie wątpliwości rozstrzyga tekst portugalski.",
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
    "desc": "Ce este Farol, cum să îl folosiți și ce să așteptați de la secțiunile IA.",
    "cat": "Ghid",
    "h1": "Cum să folosiți Farol",
    "subtitle": "Ce este, ce nu este și cum să obțineți maximul în cinci minute.",
    "sections": [
      {
        "label": "Ce este",
        "items": [
          "Un ghid de consultare rapidă pentru profesorii care lucrează cu clase eterogene. Fiecare fișă acoperă un profil de elev și răspunde la trei întrebări: ce vedeți în clasă, ce puteți face azi și cum poate ajuta IA.",
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
        "label": "Despre secțiunile IA",
        "items": [
          "Secțiunile <em>Unde se potrivește IA</em> sunt în mod intenționat goale în această versiune. Autorul urmează o formare specializată la Florența (august 2026) înainte de a recomanda instrumente specifice.",
          "Structura există deja, fiecare instrument va avea un caz de utilizare, o sugestie de prompt și o notă de confidențialitate. Conținutul vine în <strong>v0.2</strong>, planificat pentru septembrie 2026."
        ]
      },
      {
        "label": "Notă despre traducere",
        "items": [
          "Conținutul fișelor este tradus integral în română. Portugheza este versiunea originală a ghidului; în caz de neclaritate, textul portughez prevalează.",
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
    "desc": "Čo je Farol, ako ho používať a čo očakávať od sekcií AI.",
    "cat": "Sprievodca",
    "h1": "Ako používať Farol",
    "subtitle": "Čo to je, čo to nie je a ako z toho vyťažiť maximum za päť minút.",
    "sections": [
      {
        "label": "Čo to je",
        "items": [
          "Rýchly referenčný zdroj pre učiteľov pracujúcich s heterogénnymi triedami. Každá karta pokrýva profil žiaka a odpovedá na tri otázky: čo vidíte v triede, čo môžete dnes urobiť a ako môže AI pomôcť.",
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
        "label": "O sekciách AI",
        "items": [
          "Sekcie <em>Kde AI zapadá</em> sú v tejto verzii zámerne prázdne. Autor absolvuje odborné školenie vo Florencii (august 2026) pred odporúčaním konkrétnych nástrojov.",
          "Štruktúra je už pripravená, každý nástroj bude mať prípad použitia, návrh promptu a poznámku k ochrane súkromia. Obsah príde v <strong>v0.2</strong>, plánovanom na september 2026."
        ]
      },
      {
        "label": "Poznámka k prekladu",
        "items": [
          "Obsah kariet je plne preložený do slovenčiny. Portugalčina je pôvodnou verziou príručky; v prípade pochybností platí portugalský text.",
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
    "desc": "Kaj je Farol, kako ga uporabljati in kaj pričakovati od razdelkov UI.",
    "cat": "Vodnik",
    "h1": "Kako uporabljati Farol",
    "subtitle": "Kaj je, kaj ni in kako iz njega izkoristiti največ v petih minutah.",
    "sections": [
      {
        "label": "Kaj je",
        "items": [
          "Hitro priročno orodje za učitelje, ki delajo s heterogenimi razredi. Vsaka kartica pokriva profil učenca in odgovarja na tri vprašanja: kaj vidite v razredu, kaj lahko naredite danes in kako lahko UI pomaga.",
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
        "label": "O razdelkih UI",
        "items": [
          "Razdelki <em>Kjer UI ustreza</em> so v tej različici namerno prazni. Avtor opravlja specializirano usposabljanje v Firenci (avgust 2026) preden priporoči konkretna orodja.",
          "Struktura je že pripravljena, vsako orodje bo imelo primer uporabe, predlog poziva in opombo o zasebnosti. Vsebina prihaja v <strong>v0.2</strong>, načrtovani za september 2026."
        ]
      },
      {
        "label": "Opomba o prevodu",
        "items": [
          "Vsebina kartic je v celoti prevedena v slovenščino. Portugalščina je izvirna različica priročnika; v primeru dvoma velja portugalsko besedilo.",
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
    "desc": "Шта је Farol, како се користи и шта очекивати од делова о вештачкој интелигенцији.",
    "cat": "Упутство",
    "h1": "Како се користи Farol",
    "subtitle": "Шта јесте, шта није и како да га најбоље искористите за пет минута.",
    "sections": [
      {
        "label": "Шта јесте",
        "items": [
          "Приручник за брзо коришћење намењен наставницима који раде са хетерогеним одељењима. Свака картица обрађује један профил ученика и одговара на три питања: шта видите у одељењу, шта можете да урадите данас и где вештачка интелигенција може да помогне.",
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
        "label": "О деловима о вештачкој интелигенцији",
        "items": [
          "Делови <em>Где улази вештачка интелигенција</em> намерно су празни у овој верзији. Аутор похађа специјализовану обуку у Фиренци (август 2026) пре него што препоручи конкретне алатке.",
          "Структура је спремна: свака алатка добија пример употребе, предлог упита и напомену о приватности. Садржај стиже у верзији <strong>v0.2</strong>, планираној за септембар 2026."
        ]
      },
      {
        "label": "О преводу",
        "items": [
          "Садржај картица преведен је у целости на српски. Португалски је изворна верзија приручника; у случају недоумице важи португалски текст.",
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
    "desc": "Vad Farol är, hur man använder det och vad man kan förvänta sig av AI-sektionerna.",
    "cat": "Guide",
    "h1": "Hur man använder Farol",
    "subtitle": "Vad det är, vad det inte är och hur man får ut mesta möjliga på fem minuter.",
    "sections": [
      {
        "label": "Vad det är",
        "items": [
          "En snabbreferens för lärare som arbetar med heterogena klasser. Varje kort täcker en elevprofil och besvarar tre frågor: vad ser du i klassrummet, vad kan du göra idag och hur kan AI hjälpa.",
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
        "label": "Om AI-sektionerna",
        "items": [
          "Sektionerna <em>Var AI passar in</em> är avsiktligt tomma i den här versionen. Författaren genomgår en specialiserad utbildning i Florens (augusti 2026) innan specifika verktyg rekommenderas.",
          "Strukturen finns redan, varje verktyg kommer att ha ett användningsfall, ett promptförslag och en sekretessnotering. Innehållet kommer i <strong>v0.2</strong>, planerat till september 2026."
        ]
      },
      {
        "label": "Notering om översättning",
        "items": [
          "Kortens innehåll är helt översatt till svenska. Portugisiska är guidens originalversion; vid tveksamhet gäller den portugisiska texten.",
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
    "desc": "Farol nedir, nasıl kullanılır ve yapay zekâ bölümlerinden ne beklenmeli.",
    "cat": "Kılavuz",
    "h1": "Farol nasıl kullanılır",
    "subtitle": "Nedir, ne değildir ve beş dakikada ondan en iyi nasıl yararlanılır.",
    "sections": [
      {
        "label": "Nedir",
        "items": [
          "Karma sınıflarla çalışan öğretmenler için hızlı başvuru. Her kart bir öğrenci profilini ele alır ve üç soruya yanıt verir: sınıfta ne görüyorsunuz, bugün ne yapabilirsiniz ve yapay zekâ nerede yardımcı olabilir.",
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
        "label": "Yapay zekâ bölümleri hakkında",
        "items": [
          "<em>Yapay zekâ nereye girer</em> bölümleri bu sürümde bilerek boş bırakıldı. Yazar, belirli araçlar önermeden önce Floransa’da uzmanlık eğitiminden geçiyor (Ağustos 2026).",
          "Yapı hazır: her araçta bir kullanım örneği, bir komut önerisi ve bir gizlilik notu olacak. İçerik <strong>v0.2</strong> ile gelecek, Eylül 2026 için planlanıyor."
        ]
      },
      {
        "label": "Çeviri hakkında",
        "items": [
          "Kartların içeriği tümüyle Türkçeye çevrilmiştir. Kılavuzun özgün sürümü Portekizcedir; tereddüt hâlinde Portekizce metin esas alınır.",
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
