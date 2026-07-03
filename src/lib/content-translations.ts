// Translated section items for each language and content slug.
// Structure: contentTranslations[lang][slug].sections[i].items
// Falls back to Portuguese source if a language/slug is absent.
// Section order matches the source .md files exactly.

export type SectionTranslation = { items: string[] };
export type SlugTranslation = { sections: SectionTranslation[] };
export type ContentLang = Record<string, SlugTranslation>;

export const contentTranslations: Partial<Record<string, ContentLang>> = {

  en: {
    tdah: { sections: [
      { items: [
        "Difficulty sustaining attention on long tasks; gets lost in multi-step instructions.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Constant movement — does not stay seated, fidgets, gets up for no apparent reason.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Answers before the question is finished; interrupts peers and the teacher.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Forgets materials, deadlines, and instructions given aloud minutes ago — working memory is overloaded.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "May hyper-focus on something that interests them, giving the (false) impression that they \"could if they wanted to\"; in fact, performance varies with interest and reward.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>It is not</strong> bad manners, laziness, or a lack of character: these misconceptions stigmatise and delay support.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>It is not</strong> always visible hyperactivity — there is a predominantly inattentive presentation, more common in girls and often underdiagnosed.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>It is not solved</strong> by \"trying harder\": the difficulty lies in neurological self-regulation, not willpower.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Break instructions into pieces: one at a time, written on the board, with a set time — this reduces the load on working memory.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Allow legitimate movement (handing out materials, cleaning the board, running errands).",
        "Reduce competing stimuli (a seat away from the window, the door, the noisiest group).",
        "Immediate, frequent positive reinforcement: in ADHD, sensitivity to reward is altered (delay aversion), so immediate rewards work better than deferred ones.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Start with what the student does well — the meeting shouldn't open with a list of complaints, or the parent/guardian becomes defensive.",
        "Describe observed behaviours, not diagnoses: \"when there are more than two steps in a row, they lose the thread\" rather than \"they have ADHD\".",
        "Anticipate the \"it is not like this at home\" reaction — explain that the group context and the demand for sustained attention in class make the symptoms more visible.",
        "If you suggest an assessment, present it as a resource, not a punishment: \"there is support that could help them a lot\" rather than \"they need to be assessed\".",
      ]},
      { items: [
        "Persistent disciplinary failure despite classroom adaptations.",
        "Signs of social exclusion by peers.",
        "Signs of comorbidity (anxiety, depression, oppositional defiant disorder) — common in ADHD and warranting referral.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Reads slowly and effortfully, with errors reading single words, even in texts they understand well when heard aloud.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Letter reversals (b/d, p/q) are common in all children learning to write and are not, on their own, a sign of dyslexia; the core difficulty is <strong>phonological</strong> — linking letters to sounds.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Persistent spelling errors that do not respond to repeated correction.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tends to avoid reading aloud; may look like disinterest when it is, in fact, a protective strategy.",
        "Oral comprehension clearly higher than reading comprehension — the difficulty is specific, not a general cognitive limitation.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>It is not</strong> a lack of intelligence: by definition, dyslexia is unexpected relative to the student’s other cognitive abilities.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>It is not</strong> a vision problem or simply “mixing up letters”: the core deficit is in phonological processing.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>It is not “cured”</strong>, but structured intervention in phonological awareness and decoding improves reading consistently.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Increase letter and line spacing: there is experimental evidence that wider spacing improves reading in dyslexic children, with no prior training.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Evidence for special “dyslexia” fonts is, by contrast, weaker and inconsistent.",
        "Allow silent reading before any reading aloud — never ask a student to read without warning.",
        "When the aim is not to assess writing, assess content separately from spelling.",
        "Offer the same information in multiple formats (audio, video, diagrams).",
      ]},
      { items: [
        "Explicitly separate reading from intelligence from the outset: “they understand very well when they listen — the difficulty is specific to reading”.",
        "Bear in mind that dyslexia is strongly heritable: one of the parents may have undiagnosed dyslexia, and the conversation may reactivate difficult memories of their own schooling.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Avoid showing worksheets full of red corrections without context — first present what the student can already do.",
        "Be concrete about the adaptations already in place and those the family can replicate at home: audio texts, reading aloud without time pressure.",
      ]},
      { items: [
        "Academic self-concept deteriorating (“I’m stupid”, “I can’t do it”).",
        "Systematic avoidance of reading/writing tasks to the point of compromising other subjects.",
        "Marked discrepancy between oral and written performance without a formal diagnosis — refer for psychopedagogical assessment.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Difficulty with unannounced changes — a change of timetable, room, or substitute teacher.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Literal communication — misses nuance, irony, idiomatic expressions.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensory sensitivity — fluorescent light, background noise, clothing labels can be intolerable.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Focused, deep interests in specific topics — linked to a detail-focused cognitive style.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "May seem disengaged or distant when overwhelmed, not switched off.",
      ]},
      { items: [
        "<strong>It is not</strong> a linear scale (\"more\" or \"less\" autistic) — it is a multidimensional profile, with different support needs in each domain.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>It is not</strong> a lack of empathy: difficulties of mutual understanding are bidirectional — non-autistic people also struggle to read autistic people (the \"double empathy problem\").<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>It is not</strong> misbehaviour when a routine is broken — it is a genuine neurological response to the loss of predictability.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Give advance warning of any change to routine, however trivial it may seem — visual supports and anticipation are empirically supported.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Turn implicit social rules into explicit ones (what is done, what is not, when).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Allow sensory breaks in a quiet space when needed.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Use the focused interest as an entry point into curricular content — a strength, not a distraction.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "If a diagnosis already exists, first ask what the parent/guardian knows works — parents of autistic children often know more about their child than any report.",
        "If there is no diagnosis, be very careful: describe concrete situations without ever using the word \"autism\" in a first meeting — \"when the routine changes without warning, your child becomes very distressed in a way that goes beyond the typical\".",
        "Validate the parent/guardian's effort — building structure and predictability at home is demanding, and acknowledging it builds alliance.",
        "Never compare with \"other students\" or with siblings — every profile on the spectrum is different and comparison is always counterproductive.",
      ]},
      { items: [
        "Frequent meltdowns after the school day.",
        "Persistent school refusal associated with sensory overload.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Progressive social isolation despite attempts at mediation.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Handwriting that is difficult, slow, and often illegible — from genuine motor difficulty, not carelessness.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Difficulty with the spatial organisation of the notebook, managing materials, and sequences of steps.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "May seem \"clumsy\" — spills cups, bumps into furniture, struggles in sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Disproportionate fatigue after tasks requiring sustained fine motor coordination.",
        "Cognitive ability is usually intact — hence the frequent frustration between knowing and being able to show it.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>It is not</strong> laziness or a lack of effort.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>It is not</strong> just poor handwriting: the clinical term is Developmental Coordination Disorder (DCD), and it affects planning and motor sequencing, not only writing.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>It is not solved</strong> by \"practising handwriting more\": effective intervention is task-oriented, not rote repetition.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Allow the use of a keyboard/tablet for longer pieces of writing.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Reduce mechanical copying from the board — provide notes where relevant.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Provide explicit checklists for multi-step tasks.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Assess the work by its content, not its physical presentation.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Explain what dyspraxia is in plain language — most parents/guardians have never heard the term: \"it is a neurological difficulty with coordinating movement, not carelessness or a lack of effort\".",
        "Illegible handwriting is the biggest point of friction with parents/guardians — showing that assessment now values content over form helps ease anxiety on both sides.",
        "Suggest practical tools for home: voice dictation on the phone for notes, a keyboard for longer written work.",
        "If there is a history of \"he/she is lazy\" or \"does not try\" in previous years, name it directly: \"I know you have heard that before — my reading is different\".",
      ]},
      { items: [
        "Total refusal to produce written work.",
        "Social isolation in physical-activity contexts.",
        "Signs of somatised anxiety before written assessments — psychosocial distress is part of the picture.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Finishes tasks in minutes while the class takes the whole lesson.",
        "Asks questions beyond the scope of the material — or actively challenges what is being taught.",
        "May appear disengaged, disruptive, or apathetic — often signs of chronic boredom and underachievement.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Heightened emotional sensitivity; may be anxious or perfectionistic — psychosocial factors are decisive in the development of talent.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Real risk of underachievement — may learn to hide their ability so as not to stand out socially.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>It is not</strong> a synonym for good behaviour or good grades — many gifted students perform around the average out of disinterest.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>It is not</strong> \"does not need help\": they need different challenges, because ability only becomes achievement when it is deliberately developed.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>It is not</strong> incompatible with neurodivergence — twice-exceptionality (2e) exists, is common, and is often masked.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Always have extension tasks ready — not more of the same, but deeper or applied material.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Allow independent investigation of topics that interest the student within the curriculum.",
        "Assess by challenge, not by ease — ask for more demanding work in exchange for less volume.",
        "Acknowledge and validate emotional sensitivity without pathologising it.",
      ]},
      { items: [
        "Anticipate the pride and redirect it: \"they are clearly very able — and that is precisely why the boredom is causing problems\".",
        "Explain the paradox of giftedness: good grades do not mean all is well, and underachievement through disinterest is common and reversible.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "If the student hides their ability to fit in socially, name it carefully — it is a sign of distress, not modesty.",
        "Suggest the parent/guardian value process over result at home: curiosity, depth, and hard questions matter more than high marks on easy tasks.",
      ]},
      { items: [
        "Signs of anxiety or depression associated with extreme perfectionism.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Marked social isolation from feeling \"different\" from peers.",
        "Sudden academic underachievement in a student previously identified as able.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Understands much less than they appear to — conversational language develops long before academic language, so a student can seem fluent without following the content.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Apparently low academic performance, often out of proportion to actual ability.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Silence in class — this may be a normal \"silent period\" in language acquisition, not disinterest.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "May be exhausted by the end of the day from processing the language in real time.",
        "Risk of underdiagnosing genuine educational needs (dyslexia, ADHD) by attributing everything to the language barrier.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>It is not</strong> a lack of intelligence or ability.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>It is not</strong> merely a matter of time: academic language takes years to develop, and without explicit support many students plateau at a low functional level.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>It is not solved</strong> by automatic translation during the lesson — it is a process of years, and the home language is a resource, not an obstacle.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Provide materials with key vocabulary translated into the home language.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Assess knowledge through visual or practical demonstration wherever possible.",
        "Pair the student with a bilingual classmate for informal mediation at critical moments.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Accept early work with grammatical errors — correct content, not form, in the first phase.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "The meeting itself is a barrier — the parent/guardian may not speak the language of instruction well enough for a complex conversation. Prepare simple written materials in advance, or arrange translation support.",
        "Do not assume the parent/guardian knows the local education system — explain what the school guidance service is, what a support measure is, what an assessment involves, taking nothing for granted.",
        "Clearly separate the language barrier from academic ability: \"your child is capable — they are learning the language at the same time as the content, which is very demanding\".<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Be sensitive to the migration context: refugee or undocumented families may distrust institutions. Build trust before requesting documentation or referrals.",
      ]},
      { items: [
        "Signs of social isolation or bullying linked to being a foreign student.",
        "Stagnation in language acquisition after the first year.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Signs of trauma linked to the migration context (especially refugees).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Minors' data are subject to reinforced protection (Art. 8 GDPR). Consent from parents/guardians is mandatory.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Check where the tool stores data — European servers, non-European, anonymised or not.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Never enter full names, addresses, ID numbers, or clinical diagnoses into generative AI tools.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Distinguish institutional use (the school signs a contract) from a teacher's personal use (individual responsibility).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systems trained on predominantly English-language data may perform worse in languages other than English and in multilingual classrooms.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automated recommendations can amplify stereotypes of gender, ethnicity, or class — check them critically.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "\"Academic risk prediction\" models are particularly problematic — they frequently reproduce existing inequalities rather than identifying needs.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "The goal is to increase the student's autonomy, not to replace the cognitive work that develops it.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Distinguish an <strong>access tool</strong> (text-to-speech for a student with dyslexia) from a <strong>substitution tool</strong> (ChatGPT writing the essay).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Assess regularly: is the student developing competence, or developing dependence on the tool?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Does the tool solve a real barrier, or create a shortcut that bypasses the learning?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Is the data entered protected, and does consent exist?",
        "<strong>3.</strong> Will the tool's output be checked by a human before it reaches the student?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Is there a non-AI alternative that works equally well?",
        "<strong>5.</strong> If the tool disappeared tomorrow, would the student be left stranded?",
      ]},
    ],
    references: [
      "European Union. (2016). <em>Regulation (EU) 2016/679 (General Data Protection Regulation)</em>, Art. 8. Official Journal of the European Union, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Equip colleagues for the responsible integration of AI in foreign-language teaching, producing materials adaptable to multiple learning profiles.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "It is not a presentation — it is a co-construction. Each participant leaves with at least one resource ready to test.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Framing — the problem of the mixed-needs classroom and why more of the same does not work.",
        "<strong>10–25 min:</strong> Map of the profiles — presenting Farol's six cards, with real (anonymised) cases.",
        "<strong>25–45 min:</strong> Practical demonstration — three tools, three use cases, three distinct profiles.",
        "<strong>45–75 min:</strong> Pair work — each pair adapts an existing material for a specific profile.",
        "<strong>75–85 min:</strong> Quick share — each pair shows its product in 1 minute.",
        "<strong>85–90 min:</strong> Commitments — each participant chooses a material to test, and a feedback session is set for 30 days later.",
      ]},
      { items: [
        "Internet access and institutional accounts for the tools demonstrated.",
        "Each participant's existing materials (a worksheet, a test, or a lesson plan).",
        "Printed copies of the Farol profile cards for reference.",
      ]},
      { items: [
        "Each participant produces at least one adapted material during the session.",
        "A 30-day feedback session with at least 60% of participants reporting effective implementation.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "At least one material produced in the session is adopted as a shared department resource.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "UN Convention on the Rights of Persons with Disabilities (UNCRPD, 2006), ratified by Ireland and all EU Member States; establishes inclusive education as a right under Article 24.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "EU Strategy for the Rights of Persons with Disabilities 2021–2030, commits Member States to accessible education, reasonable accommodation, and anti-discrimination measures.",
        "Education for Persons with Special Educational Needs Act 2004 (EPSEN Act), Ireland's primary SEN legislation; establishes the right to an inclusive education and to an Individual Education Plan (IEP).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "National Council for Special Education (NCSE), statutory body that allocates Special Education Teachers (SET) and Special Needs Assistants (SNA) to schools; publishes guidelines and policies.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Circular 0014/2017 (DES), allocates SET hours to schools using a profile-based model; hours are managed by the school to respond flexibly to identified needs.",
      ]},
      { items: [
        "Apply Universal Design for Learning (UDL) principles: provide multiple means of representation, action, expression, and engagement for all students.",
        "Use reasonable accommodations in class without requiring a formal diagnosis: extended time, oral responses, assistive technology access.",
        "Maintain an inclusive classroom environment that reduces sensory, organisational, and linguistic barriers for all learners.",
        "Record informal observations of any student who may have unmet needs, this is the starting point for any referral pathway.",
      ]},
      { items: [
        "Consult the Special Education Teacher (SET) when a student is not responding to whole-class strategies after a reasonable period.",
        "A Student Support Team (SST) meeting can be convened to review the student's profile and decide on targeted or intensive supports.",
        "An Individual Education Plan (IEP) is developed collaboratively (teacher, SET, SENO, parents/guardians, and where appropriate the student) for students with complex needs.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Refer to an Educational Psychologist (NEPS) via the school's NEPS plan when a formal assessment is required to inform the level of support.",
        "For students with significant and complex needs, a Special Educational Needs Organiser (SENO) from the NCSE is the key external contact.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "There is no specific legislation for gifted education in Ireland; however, the EPSEN Act's provisions apply where giftedness co-occurs with a special educational need (twice-exceptional).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "The NCSE policy advice (2017) acknowledges that highly able students may need differentiated provision; schools are encouraged to use SET time flexibly to support extension and enrichment.",
        "Teachers should document evidence of advanced ability and ensure challenge tasks are embedded in planning, not treated as extras.",
      ]},
      { items: [
        "EAL (English as an Additional Language) learners are supported under the DES EAL/Intercultural guidelines and allocated EAL teaching hours based on proficiency level.",
        "EAL teachers conduct an initial language assessment (using CEFR-aligned assessment materials) to determine the level of language support needed.",
        "Language support must be separated from SEN assessment: a student's language profile does not indicate a learning difficulty.",
        "Schools with significant EAL populations should have an Intercultural Education policy referencing the NCCA Intercultural Education framework.",
      ]},
      { items: [
        "Key contacts: Special Education Teacher (SET), Special Educational Needs Organiser (SENO/NCSE), NEPS Educational Psychologist, EAL Support Teacher.",
        "Key documents to know: IEP (Individual Education Plan), Student Support File, School Inclusion Policy, EPSEN Act 2004.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "First step when concerned about a student: document, discuss with SET, contact parents/guardians, in that order.",
        "Data protection: all student support data is subject to GDPR and the Data Protection Act 2018; do not share sensitive information outside the student support team without consent.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>UN Convention on the Rights of Persons with Disabilities</em> (UNCRPD, 2006), ratified by Ireland in 2018; Article 24 establishes inclusive education as a right.",
      "<em>Education Act 1998</em>; the general statutory framework for the education system, giving parents statutory rights and obliging schools to provide for a diversity of needs.",
      "<em>Education for Persons with Special Educational Needs Act 2004</em> (EPSEN Act); Ireland's primary SEN legislation, establishing the National Council for Special Education (NCSE) and the right to an inclusive education and an Individual Education Plan (IEP).",
      "<em>Disability Act 2005</em> and the <em>Equal Status Acts 2000–2018</em>; place statutory obligations on public service providers and prohibit discrimination in the provision of educational services.",
      "<em>Data Protection Act 2018</em>, which gives effect to the General Data Protection Regulation (GDPR) in Ireland; all student data is protected and must not be shared without consent.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagogical differentiation is adjusting how you teach — not lowering expectations. The learning objective can be the same for everyone; it is the route that varies.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "The UDL (Universal Design for Learning) framework proposes three principles: multiple means of representation (how content is presented), multiple means of action and expression (how the student responds), and multiple means of engagement (what motivates the student).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Differentiating is not creating one lesson plan per student — it is building enough flexibility for the same lesson to serve different profiles.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>It is not</strong> cutting the curriculum for students who struggle most.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>It is not</strong> always giving different tasks to different students — that isolates and labels.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>It is not</strong> just differentiated worksheets — differentiation includes how the teacher explains, questions, and assesses.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Controlled choice: offer 2–3 response formats (written text, oral, schematic drawing) — everyone responds to the same content.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Scaffolding: provide a structured guide for students who struggle most; remove the guide progressively as autonomy grows.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Flexible grouping: groups by interest, by mastery level, or mixed — rotate them to avoid fixed groups becoming identities.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Time adjustments: more time does not mean less rigour. For students with ADHD or dyspraxia, break the task into segments with planned pauses.",
        "Complexity level: for the same topic, create versions with more or less linguistic support, with or without examples, with or without visual cues.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Assess what the student knows, not how they write. A student with dyslexia can demonstrate conceptual mastery orally or with assistive technology.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Clear rubrics shared before the task let the student know what is expected regardless of the format chosen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "A portfolio or evidence-based assessment lets the student show progress over time, not just at a single test.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "When differentiation in class is no longer enough and the student still cannot access the curriculum, it is a sign that specialist support may be needed.",
        "Differentiation does not replace the school's support measures (guidance service, therapists, special education) — it is what happens in the mainstream classroom alongside them.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formative assessment is any practice that gathers information about learning during the process — and uses that information to adjust teaching or the support given to the student.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Unlike summative assessment (final grades), formative assessment does not have to carry a mark — it has to carry feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "For neurodivergent students, formative assessment matters especially because performance on a one-off test may not reflect what they actually know.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: at the end of the lesson, the student answers one question in 2 minutes — the teacher sees immediately who understood and who did not.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Traffic light</strong>: green (I understood), amber (I have doubts), red (I did not understand) — physical cards, post-its, or digital.",
        "<strong>Think-Pair-Share</strong>: the student thinks individually, discusses with a partner, then shares with the class — reducing the anxiety of answering directly.",
        "<strong>Exit door</strong>: before leaving, the student tells the teacher one thing they learned and one question they still have.",
      ]},
      { items: [
        "Effective feedback is specific, actionable, and timely: \"on page 2, the argument is lost because the link to the evidence is missing\" is useful; \"could be better\" is not.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "For students with ADHD: immediate feedback is more effective than delayed. Do not wait until the end of the task.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "For students with dyslexia: oral or audio feedback can be more accessible than extensive written comments.",
        "Avoid comparing students with one another — compare the student with their own earlier progress.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: assessment across several short moments rather than one long test. Reduce distracting stimuli in the assessment setting.",
        "Dyslexia: allow oral answers, extra time, or text-to-speech. Assess the content, not the spelling.",
        "Autism: assessments with clear, unambiguous written instructions. Warn in advance about changes to the format.",
        "Giftedness: avoid assessments that merely reproduce content — include questions of analysis, synthesis, and creation.",
      ]},
      { items: [
        "When, even with assessment adaptations, the student cannot demonstrate learning, it is a sign that there may be a deeper barrier to investigate with the school guidance service.",
        "Persistent patterns (months, not days) of specific difficulty in one area should be formally flagged.",
      ]},
    ]},
  },

  es: {
    tdah: { sections: [
      { items: [
        "Dificultad para mantener la atención en tareas largas; se pierde en instrucciones de varios pasos.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Movimiento constante: no permanece sentado, juguetea con las manos, se levanta sin razón aparente.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Responde antes de que termine la pregunta; interrumpe a sus compañeros y al docente.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Olvida materiales, plazos e instrucciones dadas oralmente hace minutos: la memoria de trabajo está sobrecargada.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Puede hiperconcentrarse en lo que le interesa, dando la impresión (errónea) de que «puede cuando quiere»; en realidad, el rendimiento varía según el interés y la recompensa.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>No es</strong> mala educación, pereza ni falta de carácter: estas ideas equivocadas estigmatizan y retrasan el apoyo.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>No es</strong> siempre hiperactividad visible: existe una presentación predominantemente inatenta, más frecuente en las niñas y a menudo infradiagnosticada.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>No se resuelve</strong> con «esforzarse más»: la dificultad está en la autorregulación neurológica, no en la voluntad.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Fragmentar las instrucciones: una a la vez, por escrito en la pizarra, con un tiempo definido; reduce la carga sobre la memoria de trabajo.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Permitir el movimiento legítimo (repartir materiales, borrar la pizarra, llevar recados).",
        "Reducir los estímulos que compiten por la atención (un sitio alejado de la ventana, de la puerta, del grupo más ruidoso).",
        "Refuerzo positivo inmediato y frecuente: en el TDAH la sensibilidad a la recompensa está alterada (aversión a la espera), por lo que las recompensas inmediatas funcionan mejor que las diferidas.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Empezar por lo que el alumno hace bien: la reunión no puede abrirse como una lista de quejas, o la familia se cerrará a la defensiva.",
        "Describir comportamientos observados, no diagnósticos: «cuando hay más de dos pasos seguidos, pierde el hilo» en lugar de «tiene TDAH».",
        "Anticipar la reacción «en casa no es así»: explicar que el contexto de grupo y la exigencia de atención prolongada en el aula hacen los síntomas más visibles.",
        "Si se sugiere una evaluación, presentarla como un recurso, no como un castigo: «hay un apoyo que puede ayudarle mucho» en lugar de «necesita ser evaluado/a».",
      ]},
      { items: [
        "Fracaso escolar persistente (suspensos reiterados) a pesar de las adaptaciones en el aula.",
        "Señales de exclusión social por parte de los compañeros.",
        "Señales de comorbilidad (ansiedad, depresión, trastorno negativista desafiante): frecuentes en el TDAH y que justifican la derivación.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Lee despacio y con esfuerzo, con errores en la lectura de palabras aisladas, incluso en textos que comprende bien cuando los escucha.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Las inversiones de letras (b/d, p/q) son comunes en todos los niños que empiezan a escribir y no son, por sí solas, signo de dislexia; la dificultad central es <strong>fonológica</strong>: asociar letras a sonidos.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Errores ortográficos persistentes que no responden a la corrección repetida.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tiende a evitar leer en voz alta; puede parecer desinterés cuando en realidad es una estrategia de protección.",
        "Comprensión oral claramente superior a la de la lectura: la dificultad es específica, no una limitación cognitiva general.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>No es</strong> falta de inteligencia: por definición, la dislexia es inesperada frente a las demás capacidades cognitivas del alumno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>No es</strong> un problema de visión ni un simple «cambiar letras»: el déficit central está en el procesamiento fonológico.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>No se «cura»</strong>, pero la intervención estructurada en la conciencia fonológica y en la descodificación mejora la lectura de forma consistente.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Aumentar el espaciado entre letras y líneas: hay evidencia experimental de que el espaciado ampliado mejora la lectura de los niños disléxicos, sin entrenamiento previo.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> La evidencia para tipos de letra específicos «para disléxicos» es, en cambio, más débil e inconsistente.",
        "Permitir la lectura silenciosa antes de cualquier lectura en voz alta: nunca pedir que lea por sorpresa.",
        "Cuando el objetivo no es evaluar la escritura, evaluar el contenido por separado de la ortografía.",
        "Ofrecer la misma información en varios formatos (audio, vídeo, esquemas).",
      ]},
      { items: [
        "Separar explícitamente lectura e inteligencia desde el principio: «comprende muy bien cuando escucha; la dificultad es específica de la lectura».",
        "Tener presente que la dislexia tiene un fuerte componente hereditario: uno de los progenitores puede tener dislexia no diagnosticada, y la conversación puede reactivar recuerdos difíciles de su propia escolaridad.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evitar mostrar fichas llenas de correcciones en rojo sin contexto: presentar primero lo que el alumno ya es capaz de hacer.",
        "Ser concreto en las adaptaciones que ya están en marcha y en las que la familia puede replicar en casa: textos en audio, lectura en voz alta sin presión de tiempo.",
      ]},
      { items: [
        "Autoconcepto académico en deterioro («soy tonto», «no puedo»).",
        "Evitación sistemática de tareas de lectura/escritura hasta el punto de comprometer otras asignaturas.",
        "Discrepancia marcada entre el desempeño oral y el escrito sin diagnóstico formal: derivar a una evaluación psicopedagógica.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Dificultad con los cambios no anunciados: cambio de horario, de aula, de profesor sustituto.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Comunicación literal: pierde los matices, la ironía, las expresiones idiomáticas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilidad sensorial: la luz fluorescente, el ruido de fondo o las etiquetas de la ropa pueden resultar intolerables.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Intereses focalizados y profundos sobre temas específicos, asociados a un estilo cognitivo orientado al detalle.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Puede parecer desinteresado o distante cuando está sobrecargado, no desconectado.",
      ]},
      { items: [
        "<strong>No es</strong> una escala lineal («más» o «menos» autista): es un perfil multidimensional, con perfiles de apoyo diferentes en cada dominio.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>No es</strong> falta de empatía: las dificultades de comprensión mutua son bidireccionales, también las personas no autistas tienen dificultad para leer a las autistas (el «problema de la doble empatía»).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>No es</strong> mal comportamiento cuando se rompe una rutina: es una respuesta neurológica real a la pérdida de previsibilidad.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Avisar con antelación de cualquier cambio en la rutina, aunque parezca trivial: el apoyo visual y la anticipación cuentan con respaldo empírico.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Convertir las reglas sociales implícitas en reglas explícitas (qué se hace, qué no se hace, cuándo).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Permitir pausas sensoriales en un espacio silencioso cuando sea necesario.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Aprovechar el interés focalizado como punto de entrada a los contenidos curriculares: una fortaleza, no una distracción.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Si el diagnóstico ya existe, preguntar primero qué sabe la familia que funciona: los padres de niños autistas a menudo saben más sobre su hijo que cualquier informe.",
        "Si no hay diagnóstico, ser muy cuidadoso: describir situaciones concretas sin usar nunca la palabra «autismo» en una primera reunión: «cuando la rutina cambia sin aviso, su hijo o su hija se altera mucho de una forma que va más allá de lo típico».",
        "Validar el esfuerzo de la familia: crear estructura y previsibilidad en casa es exigente, y reconocerlo crea alianza.",
        "Nunca comparar con «otros alumnos» ni con hermanos: cada perfil del espectro es diferente y la comparación siempre es contraproducente.",
      ]},
      { items: [
        "Crisis («meltdowns») frecuentes tras la jornada escolar.",
        "Rechazo escolar persistente asociado a sobrecarga sensorial.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Aislamiento social progresivo a pesar de los intentos de mediación.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Escritura a mano difícil, lenta y a menudo ilegible, por una dificultad motora real, no por descuido.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Dificultad en la organización espacial del cuaderno, en la gestión de los materiales y en las secuencias de pasos.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Puede parecer «torpe»: derrama vasos, choca con los muebles, tiene dificultades en el deporte.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Cansancio desproporcionado tras tareas que exigen una coordinación motora fina sostenida.",
        "El componente cognitivo suele estar preservado, de ahí la frecuente frustración entre saber y poder demostrarlo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>No es</strong> pereza ni falta de aplicación.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>No es</strong> solo mala caligrafía: el término clínico es Trastorno del Desarrollo de la Coordinación (TDC) y afecta a la planificación y a la secuenciación motora, no solo a la escritura.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>No se resuelve</strong> «practicando más la escritura»: la intervención eficaz está orientada a la tarea, no a la repetición mecánica.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Permitir el uso del teclado o la tableta en producciones escritas extensas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Reducir la copia mecánica de la pizarra y facilitar apuntes cuando sea pertinente.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Proporcionar listas de verificación explícitas para las tareas de varios pasos.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evaluar el producto por su contenido, no por su presentación física.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Explicar qué es la dispraxia en un lenguaje sencillo, ya que la mayoría de las familias nunca ha oído el término: «es una dificultad neurológica en la coordinación de los movimientos, no es descuido ni falta de esfuerzo».",
        "La caligrafía ilegible es el punto de mayor fricción con las familias; mostrar que la evaluación ha pasado a valorar el contenido y no la forma ayuda a aliviar la ansiedad de ambas partes.",
        "Sugerir herramientas prácticas para casa: el dictado por voz en el móvil para tomar apuntes y el teclado para los trabajos escritos extensos.",
        "Si en años anteriores existió un historial de «es perezoso/a» o «no se esfuerza», nombrarlo directamente: «sé que ya ha oído eso antes; mi lectura es diferente».",
      ]},
      { items: [
        "Rechazo total de la producción escrita.",
        "Aislamiento social en contextos de actividad física.",
        "Signos de ansiedad somatizada antes de las evaluaciones escritas; el sufrimiento psicosocial forma parte del cuadro.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Termina las tareas en minutos mientras el resto de la clase necesita toda la sesión.",
        "Hace preguntas que se salen del temario, o cuestiona activamente lo que se está enseñando.",
        "Puede aparentar desinterés, indisciplina o apatía, a menudo señales de aburrimiento crónico y de bajo rendimiento (underachievement).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilidad emocional acentuada; puede mostrarse ansioso o perfeccionista, ya que los factores psicosociales son determinantes en el desarrollo del talento.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Riesgo real de bajo rendimiento: puede aprender a ocultar su capacidad para no destacar socialmente.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>No es</strong> sinónimo de buen comportamiento ni de buenos resultados: muchos alumnos con altas capacidades tienen un rendimiento mediocre por desinterés.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>No es</strong> «no necesita ayuda»: necesita desafíos distintos, porque la capacidad solo se convierte en logro cuando se desarrolla de forma deliberada.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>No es</strong> incompatible con la neurodivergencia: la doble excepcionalidad (2e) existe, es frecuente y a menudo queda enmascarada.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Tener siempre preparadas tareas de ampliación, no más de lo mismo, sino contenidos más profundos o aplicados.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Permitir la investigación independiente sobre temas de interés del alumno dentro del programa.",
        "Evaluar por el desafío, no por la facilidad: pedir trabajos más exigentes a cambio de un menor volumen.",
        "Reconocer y validar la sensibilidad emocional sin patologizarla.",
      ]},
      { items: [
        "Anticipar el orgullo y reorientarlo: «es claramente muy capaz, y precisamente por eso el aburrimiento está generando problemas».",
        "Explicar la paradoja de las altas capacidades: los buenos resultados no significan que esté bien, y el bajo rendimiento por desinterés es común y reversible.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Si el alumno oculta su capacidad para integrarse socialmente, nombrarlo con cuidado: es una señal de sufrimiento, no de modestia.",
        "Proponer a las familias que valoren el proceso en lugar del resultado en casa: la curiosidad, la profundidad y las preguntas difíciles valen más que las buenas notas en tareas fáciles.",
      ]},
      { items: [
        "Señales de ansiedad o depresión asociadas a un perfeccionismo extremo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Aislamiento social marcado por sentirse «diferente» de sus iguales.",
        "Bajo rendimiento académico repentino en un alumno previamente identificado como capaz.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Comprende mucho menos de lo que aparenta: la lengua de conversación se desarrolla mucho antes que la lengua académica, por lo que puede parecer fluido sin seguir los contenidos.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rendimiento académico aparentemente bajo, a menudo desproporcionado respecto a su capacidad real.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Silencio en clase: puede tratarse de un «periodo silencioso» normal en la adquisición de una lengua, no de desinterés.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Puede acabar agotado al final del día por procesar la lengua en tiempo real.",
        "Riesgo de infradiagnóstico de necesidades educativas reales (dislexia, TDAH) al atribuirlo todo a la barrera lingüística.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>No es</strong> falta de inteligencia ni de capacidad.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>No es</strong> solo una cuestión de tiempo: la lengua académica tarda años en desarrollarse y, sin apoyo explícito, muchos alumnos se estabilizan en un nivel funcional bajo.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>No se resuelve</strong> con traducción automática durante la clase: es un proceso de años, y la lengua materna es un recurso, no un obstáculo.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Proporcionar materiales con el vocabulario clave traducido a la lengua materna.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Evaluar el conocimiento mediante demostración visual o práctica siempre que sea posible.",
        "Emparejar con un compañero bilingüe para una mediación informal en momentos críticos.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Aceptar las producciones iniciales con errores gramaticales: corregir el contenido, no la forma, en la primera fase.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "La reunión en sí misma es una barrera: el padre/la madre o tutor puede no hablar la lengua de instrucción con la fluidez suficiente para una conversación compleja. Conviene preparar materiales escritos sencillos con antelación, o solicitar apoyo de traducción.",
        "No dar por hecho que la familia conoce el sistema educativo: explicar qué es el servicio de orientación psicopedagógica, qué es una medida de apoyo y qué implica una evaluación, sin dar nada por sabido.",
        "Separar claramente la barrera lingüística de la capacidad académica: «su hijo/su hija es capaz; está aprendiendo la lengua al mismo tiempo que aprende los contenidos, lo cual resulta muy exigente».<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ser sensible al contexto migratorio: las familias refugiadas o en situación irregular pueden desconfiar de las instituciones. Conviene generar confianza antes de pedir documentación o de hacer derivaciones.",
      ]},
      { items: [
        "Señales de aislamiento social o acoso escolar asociadas a la condición de alumno extranjero.",
        "Estancamiento en la adquisición lingüística tras el primer año.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Señales de trauma asociadas al contexto migratorio (especialmente en personas refugiadas).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Los datos de menores están sujetos a una protección reforzada (Art. 8 RGPD). El consentimiento de los tutores legales es obligatorio.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Comprobar dónde almacena los datos la herramienta: servidores europeos, no europeos, anonimizados o no.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nunca introducir nombres completos, domicilios, números de identificación ni diagnósticos clínicos en herramientas de IA generativa.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Distinguir el uso institucional (el centro firma un contrato) del uso personal del docente (responsabilidad individual).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Los sistemas entrenados con datos mayoritariamente anglófonos pueden tener un rendimiento inferior en español y en contextos hispanohablantes.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Las recomendaciones automáticas pueden amplificar estereotipos de género, etnia o clase: hay que verificarlas con sentido crítico.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Los modelos de «predicción del riesgo académico» son especialmente problemáticos: a menudo reproducen las desigualdades existentes en lugar de identificar necesidades.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "El objetivo es aumentar la autonomía del alumno, no sustituir el trabajo cognitivo que la desarrolla.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Distinguir la <strong>herramienta de acceso</strong> (text-to-speech para un alumno con dislexia) de la <strong>herramienta de sustitución</strong> (ChatGPT escribiendo la redacción).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evaluar con regularidad: ¿el alumno está desarrollando competencia o está desarrollando dependencia de la herramienta?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> ¿La herramienta resuelve una barrera real o crea un atajo que omite el aprendizaje?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> ¿Los datos introducidos están protegidos y existe consentimiento?",
        "<strong>3.</strong> ¿El resultado de la herramienta será verificado por una persona antes de llegar al alumno?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> ¿Existe una alternativa sin IA que funcione igual de bien?",
        "<strong>5.</strong> Si la herramienta dejara de existir mañana, ¿el alumno quedaría desamparado?",
      ]},
    ],
    references: [
      "Unión Europea. (2016). <em>Reglamento (UE) 2016/679 (Reglamento general de protección de datos)</em>, art. 8. Diario Oficial de la Unión Europea, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Capacitar a los compañeros para la integración responsable de la IA en la enseñanza de lengua extranjera, con producción de materiales adaptables a múltiples perfiles de aprendizaje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "No es una presentación: es una co-construcción. Cada participante sale con al menos un recurso listo para probar.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Encuadre — el problema del aula heterogénea y por qué más de lo mismo no funciona.",
        "<strong>10–25 min:</strong> Mapa de perfiles — presentación de las seis tarjetas de Farol, con casos reales (anonimizados).",
        "<strong>25–45 min:</strong> Demostración práctica — tres herramientas, tres casos de uso, tres perfiles distintos.",
        "<strong>45–75 min:</strong> Trabajo en parejas — cada pareja adapta un material existente a un perfil específico.",
        "<strong>75–85 min:</strong> Puesta en común rápida — cada pareja muestra su producto en 1 minuto.",
        "<strong>85–90 min:</strong> Compromisos — cada participante define un material que probar y se fija una sesión de retroalimentación a los 30 días.",
      ]},
      { items: [
        "Acceso a internet y a cuentas institucionales en las herramientas demostradas.",
        "Materiales existentes de cada participante (una ficha, una prueba o un plan de clase).",
        "Tarjetas impresas de los perfiles de Farol para consulta.",
      ]},
      { items: [
        "Cada participante produce al menos un material adaptado durante la sesión.",
        "Sesión de retroalimentación a los 30 días con al menos un 60 % de los participantes que informan de una implementación efectiva.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Al menos un material producido en la sesión se adopta como recurso compartido del departamento.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Convención de la ONU sobre los Derechos de las Personas con Discapacidad (CDPD, 2006), ratificada por España; el artículo 24 establece la educación inclusiva como derecho.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE), marco normativo vigente del sistema educativo español; incorpora el enfoque DUA (Diseño Universal para el Aprendizaje) y refuerza la equidad e inclusión.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Real Decreto 984/2021, regula la evaluación y promoción del alumnado; establece que las medidas de respuesta educativa se recogen en un plan específico personalizado para el alumnado con necesidades específicas de apoyo educativo (ACNEAE).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Real Decreto 126/2014 y decretos autonómicos de desarrollo curricular, la educación es competencia compartida; cada comunidad autónoma regula los procedimientos de identificación y atención al ACNEAE.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Resolución de la Secretaría de Estado de Educación sobre orientación educativa, establece los equipos de orientación educativa (EOE) en primaria y los departamentos de orientación en secundaria como referentes del proceso de evaluación psicopedagógica.",
      ]},
      { items: [
        "Aplicar el Diseño Universal para el Aprendizaje (DUA): ofrecer múltiples formas de representación, acción, expresión e implicación para todo el alumnado.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Usar ajustes razonables en el aula sin necesidad de diagnóstico previo: tiempo ampliado, respuesta oral, acceso a tecnología de apoyo.",
        "Mantener un entorno de aula inclusivo que reduzca barreras sensoriales, organizativas y lingüísticas para todo el alumnado.",
        "Registrar observaciones informales de cualquier alumno/a que pueda tener necesidades no atendidas, es el punto de partida de cualquier proceso de orientación.",
      ]},
      { items: [
        "Consultar con el orientador/a educativo/a cuando un alumno/a no responde a las estrategias de aula tras un período razonable.",
        "La Comisión de Coordinación Pedagógica (CCP) o el equipo docente puede solicitar una evaluación psicopedagógica al departamento de orientación.",
        "El Dictamen de Escolarización es el documento técnico que determina las necesidades del alumno y las medidas ordinarias, específicas o extraordinarias de respuesta educativa.",
        "El plan específico personalizado, equivalente al plan individualizado, es elaborado conjuntamente por el equipo docente, el orientador/a y las familias.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Para necesidades complejas o cambio de modalidad de escolarización, interviene la inspección educativa y, en su caso, la administración autonómica.",
      ]},
      { items: [
        "La LOMLOE reconoce al alumnado con altas capacidades intelectuales como ACNEAE y obliga a los centros a identificarlos y atenderlos.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "La evaluación psicopedagógica determina el nivel de competencia curricular y las medidas de enriquecimiento, aceleración o flexibilización del período de escolarización.",
        "Los centros pueden solicitar a la administración educativa la flexibilización del período de escolarización obligatoria (anticipación de inicio o reducción de un curso) previa evaluación y autorización.",
      ]},
      { items: [
        "El alumnado de incorporación tardía con necesidades de apoyo lingüístico tiene derecho a medidas específicas de acogida e integración lingüística reguladas por cada comunidad autónoma.",
        "En muchas comunidades existen Aulas de Enlace, Aulas de Acogida o programas ATAL (Andalucía) para la atención inicial intensiva en lengua castellana.",
        "La evaluación inicial debe distinguir la competencia lingüística en castellano de la competencia académica real del alumno en su lengua de origen.",
        "Las familias con baja competencia en castellano tienen derecho a recibir información sobre el sistema educativo y los apoyos disponibles en una lengua que puedan comprender.",
      ]},
      { items: [
        "Figuras clave: orientador/a educativo/a, tutor/a, jefe/a de estudios, equipo de orientación educativa (EOE) de zona.",
        "Documentos clave: informe psicopedagógico, Dictamen de Escolarización, plan específico personalizado, actas del equipo docente.",
        "Primer paso ante una preocupación por un alumno/a: registrar, hablar con el orientador/a, contactar con las familias, en ese orden.",
        "Protección de datos: todos los datos del alumnado están sujetos al RGPD y a la Ley Orgánica 3/2018 (LOPDGDD); no compartir información sensible fuera del equipo sin consentimiento.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>Convención sobre los Derechos de las Personas con Discapacidad</em> (ONU, 2006), ratificada por España (BOE de 21 de abril de 2008); su artículo 24 reconoce el derecho a la educación inclusiva.",
      "<em>Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de 3 de mayo, de Educación</em> (LOMLOE); marco vigente del sistema educativo, incorpora el Diseño Universal para el Aprendizaje y refuerza la equidad e inclusión, reconociendo al alumnado con altas capacidades como ACNEAE.",
      "<em>Real Decreto 984/2021, de 16 de noviembre</em>, por el que se regulan la evaluación y la promoción en la educación primaria, así como la evaluación, la promoción y la titulación en la ESO, el bachillerato y la formación profesional.",
      "<em>Real Decreto 126/2014, de 28 de febrero</em>, por el que se establece el currículo básico de la Educación Primaria, desarrollado por los decretos autonómicos; la educación es competencia compartida con las comunidades autónomas.",
      "<em>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales</em> (LOPDGDD), en aplicación del Reglamento General de Protección de Datos (RGPD).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "La diferenciación pedagógica consiste en ajustar la forma de enseñar, no en rebajar las expectativas. El objetivo de aprendizaje puede ser el mismo para todos; lo que varía es el camino.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "El modelo UDL (Universal Design for Learning, Diseño Universal para el Aprendizaje) propone tres principios: múltiples formas de representación (cómo se presenta el contenido), múltiples formas de acción y expresión (cómo responde el alumno) y múltiples formas de implicación (qué motiva al alumno).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferenciar no es crear una programación de clase para cada alumno: es generar suficiente flexibilidad para que la misma clase sirva a perfiles distintos.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>No es</strong> reducir el currículo para los alumnos con más dificultades.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>No es</strong> dar siempre tareas diferentes a alumnos diferentes: eso aísla y etiqueta.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>No es</strong> solo trabajo diferenciado sobre el papel: la diferenciación incluye el modo en que el docente explica, pregunta y evalúa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Elección controlada: ofrecer 2-3 opciones de formato de respuesta (texto escrito, oral, dibujo esquemático); todos responden al mismo contenido.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Andamiaje (scaffolding): proporcionar un guion estructurado a los alumnos con más dificultades y retirarlo de forma progresiva a medida que crece la autonomía.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Agrupamiento flexible: grupos por interés, por nivel de dominio o mixtos; rotarlos para evitar grupos fijos que acaban convirtiéndose en identidades.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Ajustes de tiempo: más tiempo no significa menos exigencia. Para alumnos con TDAH o dispraxia, dividir la tarea en segmentos con pausas programadas.",
        "Nivel de complejidad: para un mismo tema, crear versiones con más o menos apoyo lingüístico, con o sin ejemplos, con o sin pistas visuales.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Evaluar lo que el alumno sabe, no cómo escribe. Un alumno con dislexia puede demostrar su dominio conceptual de forma oral o con apoyo tecnológico.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Unas rúbricas claras y compartidas antes de la tarea permiten al alumno saber qué se espera de él, independientemente del formato elegido.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "El portfolio o la evaluación por evidencias permite al alumno mostrar sus progresos a lo largo del tiempo, y no solo en un momento de examen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Cuando la diferenciación en el aula deja de ser suficiente y el alumno sigue sin poder acceder al currículo, es señal de que puede ser necesario un apoyo especializado.",
        "La diferenciación no sustituye las medidas de apoyo del centro (orientación educativa, terapeutas, educación especial): es lo que ocurre en el aula ordinaria como complemento.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "La evaluación formativa es cualquier práctica que recoge información sobre el aprendizaje durante el proceso, y usa esa información para ajustar la enseñanza o el apoyo al alumno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A diferencia de la evaluación sumativa (calificaciones finales), la formativa no tiene por qué tener nota: tiene que tener feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Para el alumnado neurodivergente, la evaluación formativa es especialmente importante porque el rendimiento en una prueba puntual puede no reflejar lo que realmente sabe.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: al final de la clase, el alumno responde a una pregunta en 2 minutos; el docente ve de inmediato quién lo ha entendido y quién no.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semáforo</strong>: verde (lo he entendido), amarillo (tengo dudas), rojo (no lo he entendido); puede hacerse con tarjetas físicas, post-its o en formato digital.",
        "<strong>Think-Pair-Share</strong>: el alumno piensa individualmente, lo comenta con un compañero y después lo comparte con la clase; reduce la ansiedad de la respuesta directa.",
        "<strong>Puerta de salida</strong>: antes de salir, el alumno le dice al docente una cosa que ha aprendido y una duda que aún tiene.",
      ]},
      { items: [
        "El feedback eficaz es específico, accionable y dado a tiempo: «en la página 2, el argumento se pierde porque falta la conexión con la evidencia» es útil; «podría estar mejor» no lo es.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Para el alumnado con TDAH: el feedback inmediato es más eficaz que el diferido. No hay que esperar al final de la tarea.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Para el alumnado con dislexia: el feedback oral o en audio puede ser más accesible que los comentarios escritos extensos.",
        "Evitar comparar al alumnado entre sí; comparar al alumno con su propia progresión anterior.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "TDAH: evaluación en varios momentos breves en lugar de una única prueba larga. Reducir los estímulos distractores en el entorno de evaluación.",
        "Dislexia: permitir respuestas orales, tiempo extra o el uso de texto a voz. Evaluar el contenido, no la ortografía.",
        "Autismo: evaluaciones con instrucciones escritas claras y sin ambigüedad. Avisar con antelación de los cambios en el formato.",
        "Altas capacidades: evitar evaluaciones de mera reproducción de contenido; incluir preguntas de análisis, síntesis y creación.",
      ]},
      { items: [
        "Cuando, incluso con adaptaciones de la evaluación, el alumno no consigue demostrar su aprendizaje, es señal de que puede haber una barrera más profunda que investigar con el servicio de orientación.",
        "Los patrones persistentes (meses, no días) de dificultad específica en un área deben señalarse formalmente.",
      ]},
    ]},
  },

  fr: {
    tdah: { sections: [
      { items: [
        "Difficulté à maintenir l'attention sur des tâches longues ; se perd dans les consignes comportant plusieurs étapes.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Mouvement constant : ne reste pas assis, remue sans cesse les mains, se lève sans raison apparente.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Répond avant la fin de la question ; interrompt ses camarades et l'enseignant.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Oublie le matériel, les échéances et les consignes données oralement il y a quelques minutes : la mémoire de travail est surchargée.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Peut se concentrer de façon intense sur ce qui l'intéresse, donnant l'impression (erronée) qu'« il peut quand il veut » ; en réalité, le rendement varie selon l'intérêt et la récompense.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> de la mauvaise éducation, de la paresse ni un manque de caractère : ces idées fausses stigmatisent et retardent l'accompagnement.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ce n'est pas</strong> toujours une hyperactivité visible : il existe une présentation à prédominance inattentive, plus fréquente chez les filles et souvent sous-diagnostiquée.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Cela ne se règle pas</strong> en « faisant plus d'efforts » : la difficulté réside dans l'autorégulation neurologique, et non dans la volonté.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Fragmenter les consignes : une à la fois, par écrit au tableau, avec un temps défini ; cela réduit la charge sur la mémoire de travail.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Autoriser un mouvement légitime (distribuer le matériel, effacer le tableau, porter des messages).",
        "Réduire les stimuli concurrents (une place éloignée de la fenêtre, de la porte, du groupe le plus bruyant).",
        "Renforcement positif immédiat et fréquent : dans le TDAH, la sensibilité à la récompense est altérée (aversion au délai), de sorte que les récompenses immédiates fonctionnent mieux que les récompenses différées.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Commencer par ce que l'élève réussit : la réunion ne peut pas s'ouvrir comme une liste de plaintes, sinon le responsable légal se met sur la défensive.",
        "Décrire des comportements observés, et non des diagnostics : « lorsqu'il y a plus de deux étapes d'affilée, il perd le fil » plutôt que « il a un TDAH ».",
        "Anticiper la réaction « à la maison, ce n'est pas comme ça » : expliquer que le contexte de groupe et l'exigence d'une attention prolongée en classe rendent les symptômes plus visibles.",
        "Si l'on suggère un bilan, le présenter comme une ressource et non comme une punition : « il existe un accompagnement qui peut beaucoup l'aider » plutôt que « il/elle doit être évalué(e) ».",
      ]},
      { items: [
        "Échec scolaire persistant malgré les aménagements en classe.",
        "Signes d'exclusion sociale par les pairs.",
        "Signes de comorbidité (anxiété, dépression, trouble oppositionnel) : fréquents dans le TDAH et qui justifient une orientation.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Il lit lentement et avec effort, avec des erreurs dans la lecture de mots isolés, même dans des textes qu'il comprend bien lorsqu'ils sont entendus.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Les inversions de lettres (b/d, p/q) sont fréquentes chez tous les enfants qui commencent à écrire et ne constituent pas, en elles-mêmes, un signe de dyslexie ; la difficulté centrale est <strong>phonologique</strong> : associer les lettres aux sons.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Des erreurs orthographiques persistantes qui ne répondent pas à une correction répétée.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Il a tendance à éviter de lire à voix haute ; cela peut sembler du désintérêt alors qu'il s'agit en réalité d'une stratégie de protection.",
        "Une compréhension orale nettement supérieure à celle de la lecture : la difficulté est spécifique, et non une limitation cognitive générale.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> un manque d'intelligence : par définition, la dyslexie est inattendue au regard des autres capacités cognitives de l'élève.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ce n'est pas</strong> un problème de vision ni un simple « mélange de lettres » : le déficit central se situe dans le traitement phonologique.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Cela ne « se guérit » pas</strong>, mais une intervention structurée portant sur la conscience phonologique et le décodage améliore la lecture de manière constante.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Augmenter l'espacement entre les lettres et les lignes : il existe des données expérimentales montrant qu'un espacement élargi améliore la lecture des enfants dyslexiques, sans entraînement préalable.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> En revanche, les données concernant les polices de caractères spécifiques « pour dyslexiques » sont plus faibles et incohérentes.",
        "Autoriser la lecture silencieuse avant toute lecture à voix haute : ne jamais demander de lire à l'improviste.",
        "Lorsque l'objectif n'est pas d'évaluer l'écriture, évaluer le contenu séparément de l'orthographe.",
        "Proposer la même information sous plusieurs formats (audio, vidéo, schémas).",
      ]},
      { items: [
        "Distinguer explicitement la lecture de l'intelligence dès le début : « il comprend très bien lorsqu'il écoute ; la difficulté est spécifique à la lecture ».",
        "Garder à l'esprit que la dyslexie a une forte composante héréditaire : l'un des parents peut présenter une dyslexie non diagnostiquée, et la conversation peut raviver des souvenirs difficiles de sa propre scolarité.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Éviter de montrer des fiches couvertes de corrections en rouge sans contexte : présenter d'abord ce que l'élève est déjà capable de faire.",
        "Être concret quant aux aménagements déjà en place et à ceux que le responsable légal peut reproduire à la maison : textes en format audio, lecture à voix haute sans pression temporelle.",
      ]},
      { items: [
        "Une image de soi scolaire qui se dégrade (« je suis bête », « je n'y arrive pas »).",
        "Un évitement systématique des tâches de lecture/écriture au point de compromettre d'autres matières.",
        "Un écart marqué entre les performances orales et écrites sans diagnostic formel : orienter vers une évaluation psychopédagogique.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Difficulté face aux changements non annoncés : modification de l'emploi du temps, de salle, de professeur remplaçant.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Communication littérale : perte des nuances, de l'ironie, des expressions idiomatiques.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilité sensorielle : la lumière fluorescente, le bruit de fond ou les étiquettes de vêtements peuvent être intolérables.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Intérêts ciblés et approfondis pour des thèmes spécifiques, associés à un style cognitif orienté vers le détail.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Peut sembler désintéressé ou distant lorsqu'il est en surcharge, et non détaché.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> une échelle linéaire (« plus » ou « moins » autiste) : c'est un profil multidimensionnel, avec des profils de soutien différents dans chaque domaine.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ce n'est pas</strong> un manque d'empathie : les difficultés de compréhension mutuelle sont bidirectionnelles, les personnes non autistes ont elles aussi du mal à lire les personnes autistes (le « problème de la double empathie »).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ce n'est pas</strong> un mauvais comportement lorsqu'une routine est rompue : c'est une réponse neurologique réelle à la perte de prévisibilité.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Annoncer à l'avance tout changement de routine, même apparemment anodin : le support visuel et l'anticipation bénéficient d'un appui empirique.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Transformer les règles sociales implicites en règles explicites (ce qui se fait, ce qui ne se fait pas, quand).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Permettre des pauses sensorielles dans un espace silencieux lorsque c'est nécessaire.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Mettre à profit l'intérêt ciblé comme point d'entrée vers les contenus du programme : une force, et non une distraction.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Si le diagnostic existe déjà, demander d'abord à la famille ce qui, selon elle, fonctionne : les parents d'enfants autistes en savent souvent plus sur leur enfant que n'importe quel rapport.",
        "S'il n'y a pas de diagnostic, être très prudent : décrire des situations concrètes sans jamais employer le mot « autisme » lors d'une première rencontre : « lorsque la routine change sans prévenir, votre fils ou votre fille est très perturbé(e) d'une manière qui dépasse l'ordinaire ».",
        "Valider l'effort de la famille : créer de la structure et de la prévisibilité à la maison est exigeant, et le reconnaître crée une alliance.",
        "Ne jamais comparer avec « les autres élèves » ni avec les frères et sœurs : chaque profil du spectre est différent et la comparaison est toujours contre-productive.",
      ]},
      { items: [
        "Crises (« meltdowns ») fréquentes après la journée scolaire.",
        "Refus scolaire persistant associé à une surcharge sensorielle.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Isolement social progressif malgré les tentatives de médiation.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Écriture manuscrite difficile, lente et souvent illisible, en raison d'une réelle difficulté motrice, et non d'un manque de soin.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Difficulté dans l'organisation spatiale du cahier, dans la gestion du matériel et dans les séquences d'étapes.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Peut sembler « maladroit » : renverse des verres, se cogne aux meubles, éprouve des difficultés en sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fatigue disproportionnée après des tâches exigeant une coordination motrice fine soutenue.",
        "La composante cognitive est généralement préservée, d'où la frustration fréquente entre savoir et pouvoir le montrer.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> de la paresse ni un manque d'application.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ce n'est pas</strong> seulement une mauvaise écriture : le terme clinique est trouble développemental de la coordination (TDC) et il affecte la planification et la séquenciation motrice, pas seulement l'écriture.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Cela ne se résout pas</strong> en « s'entraînant davantage à écrire » : l'intervention efficace est orientée vers la tâche, et non vers la répétition mécanique.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Autoriser l'usage du clavier ou de la tablette pour les productions écrites longues.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Réduire la copie mécanique du tableau et fournir des notes lorsque cela est pertinent.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Fournir des listes de contrôle explicites pour les tâches comportant plusieurs étapes.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Évaluer le travail sur son contenu, et non sur sa présentation matérielle.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Expliquer ce qu'est la dyspraxie dans un langage simple, car la plupart des parents n'ont jamais entendu ce terme : « c'est une difficulté neurologique dans la coordination des mouvements, ce n'est ni de la négligence ni un manque d'effort ».",
        "L'écriture illisible est le point de friction le plus important avec les parents ; montrer que l'évaluation valorise désormais le contenu et non la forme aide à apaiser l'anxiété de part et d'autre.",
        "Suggérer des outils pratiques à la maison : la dictée vocale sur le téléphone pour la prise de notes, le clavier pour les travaux écrits longs.",
        "S'il existe un historique de « il/elle est paresseux·se » ou « il/elle ne fait pas d'efforts » au cours des années précédentes, le nommer directement : « je sais que vous avez déjà entendu cela ; mon interprétation est différente ».",
      ]},
      { items: [
        "Refus total de toute production écrite.",
        "Isolement social dans les contextes d'activité physique.",
        "Signes d'anxiété somatisée avant les évaluations écrites ; la souffrance psychosociale fait partie du tableau.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Termine les tâches en quelques minutes alors que le reste de la classe y consacre toute la séance.",
        "Pose des questions qui sortent du cadre du programme, ou conteste activement ce qui est enseigné.",
        "Peut sembler désintéressé, indiscipliné ou apathique, ces signes traduisant souvent un ennui chronique et un sous-rendement (underachievement).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilité émotionnelle marquée ; peut se montrer anxieux ou perfectionniste, car les facteurs psychosociaux sont déterminants dans le développement du talent.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Risque réel de sous-rendement : il peut apprendre à dissimuler ses capacités pour ne pas se démarquer socialement.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> synonyme de bon comportement ni de bons résultats : beaucoup d'élèves à haut potentiel ont un rendement médiocre par désintérêt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ce n'est pas</strong> « il n'a pas besoin d'aide » : il a besoin de défis différents, car le potentiel ne se transforme en réussite que lorsqu'il est développé de manière délibérée.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ce n'est pas</strong> incompatible avec la neurodivergence : la double exceptionnalité (2e) existe, elle est fréquente et souvent masquée.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Toujours avoir des tâches d'approfondissement prêtes, non pas davantage de la même chose, mais des contenus plus approfondis ou appliqués.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Permettre une recherche autonome sur des sujets qui intéressent l'élève dans le cadre du programme.",
        "Évaluer en fonction du défi, non de la facilité : demander des travaux plus exigeants en échange d'un volume moindre.",
        "Reconnaître et valider la sensibilité émotionnelle sans la pathologiser.",
      ]},
      { items: [
        "Anticiper la fierté et la réorienter : « il est manifestement très capable, et c'est précisément pour cela que l'ennui crée des problèmes ».",
        "Expliquer le paradoxe du haut potentiel : de bons résultats ne signifient pas que tout va bien, et le sous-rendement par désintérêt est courant et réversible.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Si l'élève dissimule ses capacités pour s'intégrer socialement, le nommer avec délicatesse : c'est un signe de souffrance, non de modestie.",
        "Proposer aux parents de valoriser le processus plutôt que le résultat à la maison : la curiosité, la profondeur et les questions difficiles valent plus que de bonnes notes obtenues sur des tâches faciles.",
      ]},
      { items: [
        "Signes d'anxiété ou de dépression associés à un perfectionnisme extrême.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Isolement social marqué par le sentiment d'être « différent » de ses pairs.",
        "Chute soudaine du rendement scolaire chez un élève auparavant identifié comme capable.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Il comprend bien moins qu'il n'y paraît : la langue de communication se développe bien avant la langue scolaire, de sorte qu'il peut sembler fluide sans suivre les contenus.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Des résultats scolaires apparemment faibles, souvent sans rapport avec ses capacités réelles.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Le silence en classe : il peut s'agir d'une « période de silence » normale dans l'acquisition d'une langue, et non d'un désintérêt.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Il peut être épuisé en fin de journée à force de traiter la langue en temps réel.",
        "Risque de sous-diagnostic de besoins éducatifs réels (dyslexie, TDAH) parce que tout est attribué à la barrière de la langue.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> un manque d'intelligence ou de capacités.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ce n'est pas</strong> qu'une question de temps : la langue scolaire met des années à se développer et, sans soutien explicite, de nombreux élèves se stabilisent à un niveau fonctionnel faible.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Cela ne se règle pas</strong> par une traduction automatique pendant le cours : c'est un processus de plusieurs années, et la langue maternelle est une ressource, non un obstacle.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Fournir des supports avec le vocabulaire clé traduit dans la langue maternelle.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Évaluer les connaissances par une démonstration visuelle ou pratique chaque fois que possible.",
        "Associer l'élève à un camarade bilingue pour une médiation informelle aux moments critiques.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Accepter les premières productions comportant des erreurs grammaticales : corriger le contenu, et non la forme, dans un premier temps.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "La réunion elle-même constitue un obstacle : le parent ou le tuteur peut ne pas maîtriser suffisamment la langue d'enseignement pour une conversation complexe. Préparer à l'avance des documents écrits simples, ou demander un soutien en traduction.",
        "Ne pas présumer que la famille connaît le système éducatif : expliquer ce qu'est le service de psychologie et d'orientation scolaire, ce qu'est une mesure de soutien et ce qu'implique une évaluation, sans rien tenir pour acquis.",
        "Distinguer clairement la barrière de la langue de la capacité scolaire : « votre fils/votre fille en est capable ; il/elle apprend la langue en même temps que les contenus, ce qui est très exigeant ».<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Être sensible au contexte migratoire : les familles réfugiées ou en situation irrégulière peuvent se méfier des institutions. Instaurer la confiance avant de demander des documents ou de proposer des orientations.",
      ]},
      { items: [
        "Signes d'isolement social ou de harcèlement liés au statut d'élève étranger.",
        "Stagnation de l'acquisition de la langue après la première année.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Signes de traumatisme liés au contexte migratoire (en particulier chez les réfugiés).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Les données des mineurs font l'objet d'une protection renforcée (art. 8 RGPD). Le consentement des responsables légaux est obligatoire.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Vérifier où l'outil stocke les données : serveurs européens, non européens, anonymisés ou non.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ne jamais saisir de noms complets, d'adresses, de numéros d'identification ni de diagnostics cliniques dans des outils d'IA générative.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Distinguer l'usage institutionnel (l'établissement signe un contrat) de l'usage personnel de l'enseignant (responsabilité individuelle).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Les systèmes entraînés sur des données majoritairement anglophones peuvent présenter des performances inférieures en français et dans les contextes francophones.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Les recommandations automatiques peuvent amplifier les stéréotypes de genre, d'origine ethnique ou de classe : à vérifier d'un œil critique.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Les modèles de « prédiction du risque scolaire » sont particulièrement problématiques : ils reproduisent souvent les inégalités existantes au lieu d'identifier les besoins.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "L'objectif est d'accroître l'autonomie de l'élève, et non de remplacer le travail cognitif qui la développe.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Distinguer l'<strong>outil d'accès</strong> (text-to-speech pour un élève dyslexique) de l'<strong>outil de substitution</strong> (ChatGPT qui rédige la dissertation).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Évaluer régulièrement : l'élève développe-t-il une compétence ou développe-t-il une dépendance à l'outil ?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> L'outil résout-il un obstacle réel ou crée-t-il un raccourci qui escamote l'apprentissage ?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Les données saisies sont-elles protégées et le consentement existe-t-il ?",
        "<strong>3.</strong> Le résultat de l'outil sera-t-il vérifié par un humain avant de parvenir à l'élève ?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Existe-t-il une alternative sans IA qui fonctionne tout aussi bien ?",
        "<strong>5.</strong> Si l'outil cessait d'exister demain, l'élève se retrouverait-il démuni ?",
      ]},
    ],
    references: [
      "Union européenne. (2016). <em>Règlement (UE) 2016/679 (règlement général sur la protection des données)</em>, art. 8. Journal officiel de l'Union européenne, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Outiller les collègues pour une intégration responsable de l’IA dans l’enseignement des langues étrangères, avec la production de supports adaptables à de multiples profils d’apprentissage.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ce n’est pas une présentation : c’est une co-construction. Chaque participant repart avec au moins une ressource prête à tester.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Cadrage — le problème de la classe hétérogène et pourquoi « plus de la même chose » ne fonctionne pas.",
        "<strong>10–25 min:</strong> Cartographie des profils — présentation des six cartes de Farol, avec des cas réels (anonymisés).",
        "<strong>25–45 min:</strong> Démonstration pratique — trois outils, trois cas d’usage, trois profils distincts.",
        "<strong>45–75 min:</strong> Travail en binômes — chaque binôme adapte un support existant à un profil précis.",
        "<strong>75–85 min:</strong> Partage rapide — chaque binôme présente son produit en 1 minute.",
        "<strong>85–90 min:</strong> Engagements — chaque participant définit un support à tester et fixe une séance de retour d’expérience à 30 jours.",
      ]},
      { items: [
        "Accès à internet et aux comptes institutionnels sur les outils présentés.",
        "Les supports existants de chaque participant (une fiche, un test ou un plan de cours).",
        "Cartes imprimées des profils de Farol pour consultation.",
      ]},
      { items: [
        "Chaque participant produit au moins un support adapté pendant la séance.",
        "Séance de retour d’expérience à 30 jours avec au moins 60 % des participants faisant état d’une mise en œuvre effective.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Au moins un support produit pendant la séance est adopté comme ressource partagée du département.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Convention de l'ONU relative aux droits des personnes handicapées (CDPH, 2006), ratifiée par la France ; l'article 24 établit l'éducation inclusive comme un droit.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Loi du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées, texte fondateur de la scolarisation inclusive en France ; crée le droit à la scolarisation en milieu ordinaire et institue la MDPH (Maison Départementale des Personnes Handicapées).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Loi du 8 juillet 2013 d'orientation et de programmation pour la refondation de l'École de la République, renforce l'école inclusive et la lutte contre les inégalités ; crée l'ESPE (devenu INSPE).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Loi du 26 juillet 2019 pour une école de la confiance, inscrit l'école inclusive dans le code de l'éducation ; généralise les ULIS (Unités Localisées pour l'Inclusion Scolaire) et les PIAL (Pôles Inclusifs d'Accompagnement Localisé) pour la gestion des AESH.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Circulaire du 3 mai 2017 relative à l'instruction obligatoire, rappelle que tout enfant a droit à l'instruction, y compris les EANA (élèves allophones nouvellement arrivés).",
      ]},
      { items: [
        "Appliquer les principes de la conception universelle pour l'apprentissage (CUA/UDL) : proposer des modalités multiples de représentation, d'action et d'expression pour tous les élèves.",
        "Utiliser des aménagements raisonnables en classe sans nécessiter de diagnostic préalable : temps supplémentaire, réponse orale, accès aux outils numériques.",
        "Maintenir un environnement de classe inclusif qui réduit les barrières sensorielles, organisationnelles et linguistiques pour tous.",
        "Consigner par écrit les observations informelles sur tout élève présentant des besoins potentiels non couverts, point de départ de toute procédure d'orientation.",
      ]},
      { items: [
        "Consulter le psychologue de l'Éducation nationale (Psy-EN) lorsqu'un élève ne répond pas aux stratégies de classe après une période raisonnable.",
        "Le Plan d'Accompagnement Personnalisé (PAP) peut être mis en place par le chef d'établissement, sur proposition du médecin scolaire, pour les élèves ayant des troubles des apprentissages sans reconnaissance MDPH.",
        "Le Projet Personnalisé de Scolarisation (PPS) est élaboré par l'équipe pluridisciplinaire de la MDPH pour les élèves reconnus en situation de handicap ; il ouvre droit à la notification d'un AESH.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "La demande de reconnaissance du handicap et des mesures associées est déposée par les familles auprès de la MDPH ; l'école accompagne mais ne décide pas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "L'équipe éducative se réunit pour faire le point sur la situation d'un élève et décider d'une orientation vers le Psy-EN, la MDPH ou un autre dispositif.",
      ]},
      { items: [
        "Il n'existe pas en France de statut légal spécifique pour les élèves à haut potentiel intellectuel (HPI) ; cependant, la circulaire du 1er août 2019 encourage leur identification et leur accompagnement adapté.",
        "Les élèves HPI peuvent bénéficier d'un PAP ou d'un PPS si le haut potentiel est associé à un trouble ou à une difficulté scolaire significative (profil dys-HPI, 2e).",
        "Les équipes pédagogiques sont encouragées à proposer des activités d'enrichissement, des groupes de niveau disciplinaires et, si nécessaire, un saut de classe (accélération) après avis du conseil de classe et du Psy-EN.",
      ]},
      { items: [
        "Les EANA (élèves allophones nouvellement arrivés) sont accueillis en UPE2A (Unité Pédagogique pour Élèves Allophones Arrivants), dispositif spécialisé pour l'acquisition du français langue de scolarisation.",
        "Le CASNAV (Centre Académique pour la Scolarisation des élèves allophones Nouvellement Arrivés et des enfants issus de familles itinérantes et de Voyageurs) coordonne au niveau académique l'accueil et la scolarisation des EANA.",
        "Une évaluation initiale des compétences linguistiques et scolaires est réalisée à l'arrivée ; elle doit distinguer compétence en français et compétence académique dans la langue d'origine.",
        "Les familles allophones ont droit à une information sur le système scolaire dans une langue accessible ; le recours à un médiateur ou interprète est possible.",
      ]},
      { items: [
        "Personnes-ressources clés : Psy-EN (psychologue de l'Éducation nationale), directeur/proviseur, enseignant référent (ASH), coordinateur UPE2A.",
        "Documents clés à connaître : PAP (Plan d'Accompagnement Personnalisé), PPS (Projet Personnalisé de Scolarisation), notification MDPH, compte rendu d'équipe éducative.",
        "Première étape en cas de préoccupation : documenter, en parler avec le Psy-EN, contacter les familles, dans cet ordre.",
        "Protection des données : toutes les données élèves sont soumises au RGPD et à la loi Informatique et Libertés ; ne pas partager d'informations sensibles hors de l'équipe sans consentement.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>Convention relative aux droits des personnes handicapées</em> (ONU, 2006), ratifiée par la France ; son article 24 consacre le droit à une éducation inclusive.",
      "<em>Loi n° 2005-102 du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées</em> ; texte fondateur de la scolarisation inclusive, elle institue les MDPH et le droit à la scolarisation en milieu ordinaire assortie d'un projet personnalisé de scolarisation.",
      "<em>Loi n° 2013-595 du 8 juillet 2013 d'orientation et de programmation pour la refondation de l'École de la République</em> ; elle renforce l'école inclusive et crée les ESPE (devenues INSPE).",
      "<em>Loi n° 2019-791 du 26 juillet 2019 pour une école de la confiance</em> ; elle inscrit l'école inclusive dans le code de l'éducation et accompagne le déploiement des ULIS, des PIAL et des AESH.",
      "<em>Règlement général sur la protection des données</em> (RGPD) et <em>loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés</em> (loi Informatique et Libertés).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "La différenciation pédagogique consiste à ajuster la manière d'enseigner, et non à revoir les attentes à la baisse. L'objectif d'apprentissage peut être le même pour tous ; c'est le chemin qui varie.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Le modèle UDL (Universal Design for Learning, conception universelle des apprentissages) propose trois principes : des moyens multiples de représentation (comment le contenu est présenté), des moyens multiples d'action et d'expression (comment l'élève répond) et des moyens multiples d'engagement (ce qui motive l'élève).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Différencier, ce n'est pas créer un plan de cours par élève : c'est instaurer suffisamment de souplesse pour qu'un même cours réponde à des profils différents.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> réduire le programme pour les élèves les plus en difficulté.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ce n'est pas</strong> donner systématiquement des tâches différentes à des élèves différents : cela isole et étiquette.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ce n'est pas</strong> seulement du travail différencié sur le papier : la différenciation englobe la façon dont l'enseignant explique, questionne et évalue.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Choix encadré : proposer 2 à 3 formats de réponse (texte écrit, oral, schéma) ; tous répondent au même contenu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Étayage (scaffolding) : fournir un guide structuré aux élèves les plus en difficulté, puis le retirer progressivement à mesure que l'autonomie se développe.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Groupes flexibles : groupes par intérêt, par niveau de maîtrise ou mixtes ; les faire tourner pour éviter des groupes figés qui finissent par devenir des identités.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Aménagements du temps : plus de temps ne signifie pas moins d'exigence. Pour les élèves présentant un TDAH ou une dyspraxie, découper la tâche en segments avec des pauses programmées.",
        "Niveau de complexité : pour un même sujet, créer des versions avec plus ou moins d'étayage linguistique, avec ou sans exemples, avec ou sans repères visuels.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Évaluer ce que l'élève sait, et non sa façon d'écrire. Un élève dyslexique peut démontrer sa maîtrise conceptuelle à l'oral ou avec un appui technologique.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Des grilles d'évaluation claires et partagées avant la tâche permettent à l'élève de savoir ce qui est attendu, quel que soit le format choisi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Le portfolio ou l'évaluation par les preuves permet à l'élève de montrer ses progrès dans la durée, et pas seulement lors d'un moment d'évaluation.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Lorsque la différenciation en classe ne suffit plus et que l'élève reste sans accès au programme, c'est le signe qu'un accompagnement spécialisé peut s'avérer nécessaire.",
        "La différenciation ne remplace pas les dispositifs de soutien de l'établissement (service d'orientation, thérapeutes, enseignement spécialisé) : elle est ce qui se passe en classe ordinaire, en complément.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "L'évaluation formative est toute pratique qui recueille de l'information sur l'apprentissage en cours de processus, et utilise cette information pour ajuster l'enseignement ou le soutien à l'élève.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Contrairement à l'évaluation sommative (notes finales), l'évaluation formative n'a pas à être notée : elle doit comporter du feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Pour les élèves neuroatypiques, l'évaluation formative est particulièrement importante, car la performance lors d'un test ponctuel peut ne pas refléter ce qu'ils savent réellement.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong> : à la fin du cours, l'élève répond à une question en 2 minutes ; l'enseignant voit immédiatement qui a compris et qui n'a pas compris.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Feu tricolore</strong> : vert (j'ai compris), jaune (j'ai des doutes), rouge (je n'ai pas compris) ; cela peut se faire avec des cartons, des post-its ou en format numérique.",
        "<strong>Think-Pair-Share</strong> : l'élève réfléchit individuellement, échange avec un camarade, puis partage avec la classe ; cela réduit l'anxiété liée à la réponse directe.",
        "<strong>Porte de sortie</strong> : avant de sortir, l'élève dit à l'enseignant une chose qu'il a apprise et une question qu'il se pose encore.",
      ]},
      { items: [
        "Un feedback efficace est précis, exploitable et donné à temps : « à la page 2, l'argument se perd car le lien avec la preuve manque » est utile ; « cela pourrait être mieux » ne l'est pas.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Pour les élèves avec un TDAH : le feedback immédiat est plus efficace que le feedback différé. Ne pas attendre la fin de la tâche.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pour les élèves dyslexiques : le feedback oral ou en audio peut être plus accessible que des commentaires écrits longs.",
        "Éviter de comparer les élèves entre eux ; comparer l'élève à sa propre progression antérieure.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "TDAH : évaluation en plusieurs moments courts plutôt qu'un seul test long. Réduire les stimuli distrayants dans l'environnement d'évaluation.",
        "Dyslexie : autoriser les réponses orales, du temps supplémentaire ou l'usage de la synthèse vocale. Évaluer le contenu, et non l'orthographe.",
        "Autisme : des évaluations aux consignes écrites claires et sans ambiguïté. Prévenir à l'avance des changements de format.",
        "Haut potentiel : éviter les évaluations de simple restitution du contenu ; inclure des questions d'analyse, de synthèse et de création.",
      ]},
      { items: [
        "Lorsque, même avec des adaptations de l'évaluation, l'élève ne parvient pas à démontrer ses apprentissages, c'est le signe qu'il peut exister un obstacle plus profond à explorer avec le service d'orientation.",
        "Des schémas persistants (des mois, pas des jours) de difficulté spécifique dans un domaine doivent être signalés formellement.",
      ]},
    ]},
  },

  it: {
    tdah: { sections: [
      { items: [
        "Difficoltà a mantenere l'attenzione su compiti lunghi; si perde nelle istruzioni a più passaggi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Movimento costante: non resta seduto, armeggia con le mani, si alza senza motivo apparente.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Risponde prima che la domanda sia finita; interrompe i compagni e il docente.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Dimentica i materiali, le scadenze e le istruzioni date a voce pochi minuti prima: la memoria di lavoro è sovraccarica.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Può iperconcentrarsi su ciò che gli interessa, dando l'impressione (errata) che «riesca quando vuole»; in realtà, il rendimento varia in base all'interesse e alla ricompensa.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Non è</strong> maleducazione, pigrizia né mancanza di carattere: queste idee sbagliate stigmatizzano e ritardano il sostegno.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Non è</strong> sempre iperattività visibile: esiste una presentazione prevalentemente disattenta, più frequente nelle bambine e spesso sottodiagnosticata.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Non si risolve</strong> con l'«impegnarsi di più»: la difficoltà sta nell'autoregolazione neurologica, non nella volontà.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Frammentare le istruzioni: una alla volta, per iscritto alla lavagna, con un tempo definito; riduce il carico sulla memoria di lavoro.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Consentire un movimento legittimo (distribuire i materiali, cancellare la lavagna, consegnare messaggi in un’altra classe).",
        "Ridurre gli stimoli concorrenti (un posto lontano dalla finestra, dalla porta, dal gruppo più rumoroso).",
        "Rinforzo positivo immediato e frequente: nell'ADHD la sensibilità alla ricompensa è alterata (avversione all'attesa), per cui le ricompense immediate funzionano meglio di quelle differite.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Iniziare da ciò che l'alunno fa bene: l'incontro non può aprirsi come un elenco di lamentele, altrimenti il genitore si chiude sulla difensiva.",
        "Descrivere comportamenti osservati, non diagnosi: «quando ci sono più di due passaggi di seguito, perde il filo» anziché «ha l'ADHD».",
        "Anticipare la reazione «a casa non è così»: spiegare che il contesto di gruppo e la richiesta di attenzione prolungata in classe rendono i sintomi più visibili.",
        "Se si suggerisce una valutazione, presentarla come una risorsa, non come una punizione: «c'è un sostegno che può aiutarlo/a molto» anziché «deve essere valutato/a».",
      ]},
      { items: [
        "Insuccesso scolastico persistente nonostante gli adattamenti in classe.",
        "Segnali di esclusione sociale da parte dei pari.",
        "Segnali di comorbilità (ansia, depressione, disturbo oppositivo provocatorio): frequenti nell'ADHD e tali da giustificare l'invio a uno specialista.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Legge lentamente e con fatica, con errori nella lettura di parole isolate, anche in testi che comprende bene quando li ascolta.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Le inversioni di lettere (b/d, p/q) sono comuni in tutti i bambini che iniziano a scrivere e non sono, di per sé, un segno di dislessia; la difficoltà centrale è <strong>fonologica</strong>: associare le lettere ai suoni.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Errori ortografici persistenti che non rispondono alla correzione ripetuta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tende a evitare di leggere ad alta voce; può sembrare disinteresse quando in realtà è una strategia di protezione.",
        "Comprensione orale chiaramente superiore a quella della lettura: la difficoltà è specifica, non una limitazione cognitiva generale.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Non è</strong> mancanza di intelligenza: per definizione, la dislessia è inattesa rispetto alle altre capacità cognitive dell'alunno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Non è</strong> un problema di vista né un semplice «scambiare le lettere»: il deficit centrale risiede nell'elaborazione fonologica.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Non si «guarisce»</strong>, ma l'intervento strutturato sulla consapevolezza fonologica e sulla decodifica migliora la lettura in modo costante.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Aumentare la spaziatura tra le lettere e le righe: vi sono prove sperimentali che una spaziatura ampliata migliora la lettura dei bambini dislessici, senza addestramento preventivo.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Le prove relative ai caratteri tipografici specifici «per dislessici» sono, al contrario, più deboli e incoerenti.",
        "Consentire la lettura silenziosa prima di qualsiasi lettura ad alta voce: non chiedere mai di leggere all'improvviso.",
        "Quando l'obiettivo non è valutare la scrittura, valutare il contenuto separatamente dall'ortografia.",
        "Offrire la stessa informazione in più formati (audio, video, schemi).",
      ]},
      { items: [
        "Distinguere esplicitamente la lettura dall'intelligenza fin dall'inizio: «comprende molto bene quando ascolta; la difficoltà è specifica della lettura».",
        "Tenere presente che la dislessia ha una forte componente ereditaria: uno dei genitori può avere una dislessia non diagnosticata, e la conversazione può riattivare ricordi difficili della propria scolarità.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evitare di mostrare schede piene di correzioni in rosso senza contesto: presentare prima ciò che l'alunno è già in grado di fare.",
        "Essere concreti riguardo agli adattamenti già in atto e a quelli che il tutore può replicare a casa: testi in formato audio, lettura ad alta voce senza pressione di tempo.",
      ]},
      { items: [
        "Autostima scolastica in deterioramento («sono stupido», «non ce la faccio»).",
        "Evitamento sistematico dei compiti di lettura/scrittura al punto da compromettere altre materie.",
        "Discrepanza marcata tra il rendimento orale e quello scritto in assenza di una diagnosi formale: indirizzare a una valutazione psicopedagogica.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Difficoltà con i cambiamenti non annunciati: variazione dell'orario, dell'aula, del docente supplente.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Comunicazione letterale: perde le sfumature, l'ironia, le espressioni idiomatiche.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilità sensoriale: la luce fluorescente, il rumore di fondo o le etichette dei vestiti possono risultare intollerabili.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Interessi focalizzati e profondi su temi specifici, associati a uno stile cognitivo orientato al dettaglio.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Può sembrare disinteressato o distante quando è in sovraccarico, non disconnesso.",
      ]},
      { items: [
        "<strong>Non è</strong> una scala lineare («più» o «meno» autistico): è un profilo multidimensionale, con profili di supporto diversi in ciascun ambito.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Non è</strong> mancanza di empatia: le difficoltà di comprensione reciproca sono bidirezionali, anche le persone non autistiche hanno difficoltà a leggere quelle autistiche (il «problema della doppia empatia»).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Non è</strong> cattivo comportamento quando una routine viene interrotta: è una risposta neurologica reale alla perdita di prevedibilità.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Avvisare in anticipo di qualsiasi cambiamento della routine, anche se apparentemente banale: il supporto visivo e l'anticipazione hanno un fondamento empirico.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Trasformare le regole sociali implicite in regole esplicite (cosa si fa, cosa non si fa, quando).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Consentire pause sensoriali in uno spazio silenzioso quando necessario.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Sfruttare l'interesse focalizzato come punto d'ingresso ai contenuti curricolari: un punto di forza, non una distrazione.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Se la diagnosi esiste già, chiedere prima alla famiglia cosa sa che funziona: i genitori di bambini autistici spesso sanno sul proprio figlio più di qualsiasi relazione.",
        "Se non c'è diagnosi, essere molto cauti: descrivere situazioni concrete senza mai usare la parola «autismo» in un primo incontro: «quando la routine cambia senza preavviso, suo figlio o sua figlia si turba molto in un modo che va oltre il tipico».",
        "Validare l'impegno della famiglia: creare struttura e prevedibilità a casa è impegnativo, e riconoscerlo crea alleanza.",
        "Non confrontare mai con «gli altri alunni» né con i fratelli: ogni profilo dello spettro è diverso e il confronto è sempre controproducente.",
      ]},
      { items: [
        "Crisi («meltdown») frequenti dopo la giornata scolastica.",
        "Rifiuto scolastico persistente associato a sovraccarico sensoriale.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Isolamento sociale progressivo nonostante i tentativi di mediazione.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Scrittura a mano difficile, lenta e spesso illeggibile, per una reale difficoltà motoria, non per trascuratezza.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Difficoltà nell'organizzazione spaziale del quaderno, nella gestione dei materiali e nelle sequenze di passaggi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Può sembrare «goffo»: rovescia i bicchieri, urta i mobili, ha difficoltà nello sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Stanchezza sproporzionata dopo compiti che richiedono una coordinazione motoria fine prolungata.",
        "La componente cognitiva è generalmente preservata, da cui la frequente frustrazione tra il sapere e il riuscire a dimostrarlo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Non è</strong> pigrizia né mancanza di impegno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Non è</strong> solo una cattiva calligrafia: il termine clinico è disturbo dello sviluppo della coordinazione (DSC) e riguarda la pianificazione e la sequenziazione motoria, non solo la scrittura.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Non si risolve</strong> «esercitandosi di più nella scrittura»: l'intervento efficace è orientato al compito, non alla ripetizione meccanica.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Consentire l'uso della tastiera o del tablet nelle produzioni scritte estese.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ridurre la copiatura meccanica dalla lavagna e fornire appunti quando è opportuno.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Fornire liste di controllo esplicite per i compiti a più passaggi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Valutare l'elaborato in base al contenuto, non alla presentazione fisica.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Spiegare che cos'è la disprassia con un linguaggio semplice, poiché la maggior parte dei genitori non ha mai sentito questo termine: «è una difficoltà neurologica nella coordinazione dei movimenti, non è trascuratezza né mancanza di impegno».",
        "La calligrafia illeggibile è il punto di maggiore attrito con i genitori; mostrare che la valutazione ora dà valore al contenuto e non alla forma aiuta ad alleviare l'ansia di entrambe le parti.",
        "Suggerire strumenti pratici per casa: la dettatura vocale sul cellulare per prendere appunti, la tastiera per i lavori scritti estesi.",
        "Se negli anni precedenti vi è stato un passato di «è pigro/a» o «non si impegna», nominarlo direttamente: «so che l'ha già sentito dire; la mia lettura è diversa».",
      ]},
      { items: [
        "Rifiuto totale della produzione scritta.",
        "Isolamento sociale nei contesti di attività fisica.",
        "Segni di ansia somatizzata prima delle verifiche scritte; la sofferenza psicosociale fa parte del quadro.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Finisce i compiti in pochi minuti mentre il resto della classe impiega l'intera lezione.",
        "Pone domande che esulano dal programma, o mette attivamente in discussione ciò che viene insegnato.",
        "Può apparire disinteressato, indisciplinato o apatico, spesso segnali di noia cronica e di sottorendimento (underachievement).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Spiccata sensibilità emotiva; può mostrarsi ansioso o perfezionista, poiché i fattori psicosociali sono determinanti nello sviluppo del talento.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rischio reale di sottorendimento: può imparare a nascondere le proprie capacità per non distinguersi socialmente.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Non è</strong> sinonimo di buon comportamento né di buoni risultati: molti alunni plusdotati hanno un rendimento mediocre per disinteresse.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Non è</strong> «non ha bisogno di aiuto»: ha bisogno di sfide diverse, perché la capacità si trasforma in risultato solo quando viene sviluppata in modo deliberato.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Non è</strong> incompatibile con la neurodivergenza: la doppia eccezionalità (2e) esiste, è frequente ed è spesso mascherata.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Avere sempre pronti compiti di approfondimento, non altro dello stesso tipo, ma contenuti più approfonditi o applicati.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Consentire una ricerca autonoma su argomenti di interesse dell'alunno all'interno del programma.",
        "Valutare in base alla sfida, non alla facilità: richiedere lavori più impegnativi a fronte di un volume minore.",
        "Riconoscere e validare la sensibilità emotiva senza patologizzarla.",
      ]},
      { items: [
        "Anticipare l'orgoglio e reindirizzarlo: «è chiaramente molto capace, ed è proprio per questo che la noia sta creando problemi».",
        "Spiegare il paradosso della plusdotazione: i buoni risultati non significano che stia bene, e il sottorendimento per disinteresse è comune e reversibile.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Se l'alunno nasconde le proprie capacità per integrarsi socialmente, nominarlo con delicatezza: è un segno di sofferenza, non di modestia.",
        "Proporre ai genitori di valorizzare il processo anziché il risultato a casa: la curiosità, la profondità e le domande difficili valgono più di voti alti ottenuti in compiti facili.",
      ]},
      { items: [
        "Segnali di ansia o depressione associati a un perfezionismo estremo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Isolamento sociale segnato dal sentirsi «diverso» dai coetanei.",
        "Calo improvviso del rendimento scolastico in un alunno precedentemente identificato come capace.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Comprende molto meno di quanto sembri: la lingua della conversazione si sviluppa molto prima della lingua accademica, perciò può apparire fluente senza seguire i contenuti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rendimento scolastico apparentemente basso, spesso sproporzionato rispetto alle reali capacità.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Silenzio in classe: può trattarsi di un «periodo silenzioso» normale nell'acquisizione di una lingua, non di disinteresse.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Può essere esausto a fine giornata per aver elaborato la lingua in tempo reale.",
        "Rischio di sottodiagnosi di bisogni educativi reali (dislessia, ADHD) perché si attribuisce tutto alla barriera linguistica.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Non è</strong> mancanza di intelligenza o di capacità.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Non è</strong> solo una questione di tempo: la lingua accademica richiede anni per svilupparsi e, senza un sostegno esplicito, molti alunni si stabilizzano a un livello funzionale basso.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Non si risolve</strong> con la traduzione automatica durante la lezione: è un processo di anni, e la lingua madre è una risorsa, non un ostacolo.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Fornire materiali con il vocabolario chiave tradotto nella lingua madre.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Valutare le conoscenze tramite dimostrazione visiva o pratica ogni volta che è possibile.",
        "Abbinare l'alunno a un compagno bilingue per una mediazione informale nei momenti critici.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Accettare le prime produzioni con errori grammaticali: correggere il contenuto, non la forma, nella prima fase.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "L'incontro in sé è un ostacolo: il genitore o tutore può non parlare la lingua d'insegnamento con una padronanza sufficiente per una conversazione complessa. Preparare in anticipo materiali scritti semplici, oppure richiedere un supporto di traduzione.",
        "Non dare per scontato che la famiglia conosca il sistema scolastico: spiegare che cos'è il servizio di psicologia e orientamento scolastico, che cos'è una misura di sostegno e che cosa comporta una valutazione, senza dare nulla per acquisito.",
        "Distinguere chiaramente la barriera linguistica dalla capacità scolastica: «suo figlio/sua figlia ne è capace; sta imparando la lingua mentre apprende i contenuti, il che è molto impegnativo».<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Essere sensibili al contesto migratorio: le famiglie rifugiate o in situazione irregolare possono diffidare delle istituzioni. Costruire un rapporto di fiducia prima di chiedere documenti o di proporre invii ad altri servizi.",
      ]},
      { items: [
        "Segnali di isolamento sociale o di bullismo legati alla condizione di alunno straniero.",
        "Stagnazione nell'acquisizione della lingua dopo il primo anno.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Segnali di trauma legati al contesto migratorio (in particolare nei rifugiati).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "I dati dei minori sono soggetti a una protezione rafforzata (art. 8 GDPR). Il consenso di chi esercita la responsabilità genitoriale è obbligatorio.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Verificare dove lo strumento archivia i dati: server europei, non europei, anonimizzati o meno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Non inserire mai nomi completi, indirizzi, numeri identificativi o diagnosi cliniche negli strumenti di IA generativa.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Distinguere l'uso istituzionale (la scuola firma un contratto) dall'uso personale del docente (responsabilità individuale).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "I sistemi addestrati prevalentemente su dati in lingua inglese possono offrire prestazioni inferiori in italiano e nei contesti italofoni.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Le raccomandazioni automatiche possono amplificare stereotipi di genere, etnia o classe: vanno verificate con spirito critico.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "I modelli di «previsione del rischio scolastico» sono particolarmente problematici: spesso riproducono le disuguaglianze esistenti invece di individuare i bisogni.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "L'obiettivo è aumentare l'autonomia dell'alunno, non sostituire il lavoro cognitivo che la sviluppa.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Distinguere lo <strong>strumento di accesso</strong> (text-to-speech per un alunno con dislessia) dallo <strong>strumento di sostituzione</strong> (ChatGPT che scrive il tema).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Valutare regolarmente: l'alunno sta sviluppando una competenza o sta sviluppando una dipendenza dallo strumento?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Lo strumento risolve un ostacolo reale o crea una scorciatoia che salta l'apprendimento?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> I dati inseriti sono protetti ed esiste il consenso?",
        "<strong>3.</strong> Il risultato dello strumento sarà verificato da un essere umano prima di arrivare all'alunno?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Esiste un'alternativa senza IA che funziona altrettanto bene?",
        "<strong>5.</strong> Se lo strumento smettesse di esistere domani, l'alunno resterebbe in difficoltà?",
      ]},
    ],
    references: [
      "Unione europea. (2016). <em>Regolamento (UE) 2016/679 (regolamento generale sulla protezione dei dati)</em>, art. 8. Gazzetta ufficiale dell'Unione europea, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Mettere i colleghi in grado di integrare responsabilmente l’IA nell’insegnamento della lingua straniera, con la produzione di materiali adattabili a molteplici profili di apprendimento.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Non è una presentazione: è una co-costruzione. Ogni partecipante esce con almeno una risorsa pronta da sperimentare.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Inquadramento — il problema della classe eterogenea e perché «più della stessa cosa» non funziona.",
        "<strong>10–25 min:</strong> Mappa dei profili — presentazione delle sei schede di Farol, con casi reali (anonimizzati).",
        "<strong>25–45 min:</strong> Dimostrazione pratica — tre strumenti, tre casi d’uso, tre profili diversi.",
        "<strong>45–75 min:</strong> Lavoro in coppia — ogni coppia adatta un materiale esistente a un profilo specifico.",
        "<strong>75–85 min:</strong> Condivisione rapida — ogni coppia mostra il proprio prodotto in 1 minuto.",
        "<strong>85–90 min:</strong> Impegni — ogni partecipante definisce un materiale da sperimentare e fissa una sessione di feedback a 30 giorni.",
      ]},
      { items: [
        "Accesso a internet e agli account istituzionali negli strumenti presentati.",
        "Materiali esistenti di ciascun partecipante (una scheda, una verifica o un piano di lezione).",
        "Schede stampate dei profili di Farol per la consultazione.",
      ]},
      { items: [
        "Ogni partecipante produce almeno un materiale adattato durante la sessione.",
        "Sessione di feedback a 30 giorni con almeno il 60 % dei partecipanti che riferisce un’implementazione effettiva.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Almeno un materiale prodotto nella sessione viene adottato come risorsa condivisa del dipartimento.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Convenzione ONU sui diritti delle persone con disabilità (CRPD, 2006), ratificata dall'Italia con la Legge 18/2009; l'articolo 24 sancisce l'istruzione inclusiva come diritto.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Legge 104/1992 (Legge-quadro per l'assistenza, l'integrazione sociale e i diritti delle persone handicappate), testo fondamentale dell'inclusione scolastica italiana; prevede il Piano Educativo Individualizzato (PEI) e il sostegno didattico per gli alunni con disabilità certificata.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Legge 170/2010 (Nuove norme in materia di disturbi specifici di apprendimento in ambito scolastico), riconosce ufficialmente dislessia, disgrafia, disortografia e discalculia (DSA); obbliga le scuole a predisporre il Piano Didattico Personalizzato (PDP) per questi alunni.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "D.Lgs. 66/2017 e successive modifiche (D.Lgs. 96/2019), riformano l'inclusione scolastica degli alunni con disabilità; introducono il Profilo di Funzionamento (in sostituzione della diagnosi funzionale) e ridefiniscono il PEI secondo un approccio bio-psico-sociale (ICF).<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Direttiva MIUR del 27 dicembre 2012 e Circolare 8/2013, ampliano le tutele ai Bisogni Educativi Speciali (BES), includendo difficoltà socio-economiche, linguistiche e culturali; ogni scuola elabora un Piano Annuale per l'Inclusione (PAI, oggi Piano per l’Inclusione).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Applicare i principi della Progettazione Universale per l'Apprendimento (UDL): offrire molteplici modalità di rappresentazione, azione ed espressione per tutti gli alunni.",
        "Utilizzare adattamenti ragionevoli in classe senza necessità di diagnosi formale: tempo aggiuntivo, risposta orale, accesso a strumenti compensativi.",
        "Mantenere un ambiente classe inclusivo che riduca le barriere sensoriali, organizzative e linguistiche per tutti.",
        "Annotare le osservazioni informali su qualsiasi alunno che possa avere bisogni non soddisfatti, è il punto di partenza per qualsiasi percorso di segnalazione.",
      ]},
      { items: [
        "Consultare il referente BES o il coordinatore del GLI (Gruppo di Lavoro per l'Inclusione) quando un alunno non risponde alle strategie di classe dopo un periodo ragionevole.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Il Consiglio di Classe può elaborare un PDP per alunni con DSA (su segnalazione della famiglia con diagnosi di uno specialista) o per altri BES (con delibera motivata anche in assenza di diagnosi).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Per gli alunni con disabilità certificata (Legge 104), la certificazione è rilasciata dall'unità di valutazione multidisciplinare dell'ASL; il PEI è redatto collegialmente da insegnanti, insegnante di sostegno, famiglia e figure sanitarie.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Il GLO (Gruppo di Lavoro Operativo per l'inclusione) si riunisce almeno una volta l'anno per verificare e aggiornare il PEI; la partecipazione delle famiglie è prevista per legge.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Per situazioni complesse o per il passaggio di grado, è possibile richiedere la consulenza del CTS (Centro Territoriale di Supporto) o dello sportello di consulenza dell'USR (Ufficio Scolastico Regionale).",
      ]},
      { items: [
        "Non esiste in Italia una legge specifica per gli alunni plusdotati o ad alto potenziale; tuttavia, la Direttiva BES del 2012 consente di attivare un PDP per questi alunni se si riscontrano difficoltà scolastiche significative.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Il MIUR ha avviato progetti pilota per l'identificazione e il supporto degli alunni con alto potenziale cognitivo (APC); alcune regioni hanno linee guida specifiche.",
        "I docenti sono incoraggiati a documentare le evidenze di capacità avanzate e a proporre attività di arricchimento e approfondimento; l'anticipo scolastico è possibile su richiesta motivata delle famiglie.",
      ]},
      { items: [
        "Gli studenti con italiano come L2 sono accolti attraverso il Protocollo di Accoglienza, documento obbligatorio per tutte le scuole con alunni stranieri (C.M. 24/2006 e Linee Guida 2014).",
        "Il Protocollo prevede una valutazione iniziale delle competenze linguistiche e disciplinari nella lingua d'origine, al fine di distinguere la competenza in italiano dalla competenza accademica reale.",
        "Le scuole con alto numero di alunni stranieri possono attivare laboratori di italiano L2, avvalersi di mediatori linguistico-culturali e richiedere supporto ai CPIA (Centri Provinciali per l'Istruzione degli Adulti) per alunni in età adulta.",
        "Le famiglie con bassa competenza in italiano hanno diritto a ricevere informazioni sul sistema scolastico in una lingua comprensibile; il ricorso a mediatori culturali è previsto e incoraggiato.",
      ]},
      { items: [
        "Figure di riferimento chiave: insegnante di sostegno, referente BES/DSA, coordinatore del GLI, dirigente scolastico, psicologo scolastico (ove presente).",
        "Documenti chiave da conoscere: PEI (Piano Educativo Individualizzato), PDP (Piano Didattico Personalizzato), PAI (Piano Annuale per l'Inclusione), Protocollo di Accoglienza.",
        "Primo passo in caso di preoccupazione per un alunno: documentare, confrontarsi con il referente BES, contattare le famiglie, in quest'ordine.",
        "Tutela dei dati: tutti i dati degli alunni sono soggetti al GDPR e al D.Lgs. 196/2003 (Codice della privacy) come modificato dal D.Lgs. 101/2018; non condividere informazioni sensibili fuori dal team senza consenso.<sup class=\"cite\"><a href=\"#ref-6\">6</a></sup>",
      ]},
    ],
    references: [
      "<em>Convenzione ONU sui diritti delle persone con disabilità</em> (CRPD, 2006), ratificata dall'Italia con la <em>Legge 3 marzo 2009, n. 18</em>; l'articolo 24 sancisce il diritto all'istruzione inclusiva.",
      "<em>Legge 5 febbraio 1992, n. 104</em> (Legge-quadro per l'assistenza, l'integrazione sociale e i diritti delle persone handicappate); testo fondamentale dell'inclusione scolastica, prevede il Piano Educativo Individualizzato (PEI) e il sostegno didattico per gli alunni con disabilità certificata.",
      "<em>Legge 8 ottobre 2010, n. 170</em> (Nuove norme in materia di disturbi specifici di apprendimento in ambito scolastico); riconosce dislessia, disgrafia, disortografia e discalculia (DSA) e obbliga le scuole a predisporre il Piano Didattico Personalizzato (PDP).",
      "<em>Decreto Legislativo 13 aprile 2017, n. 66</em>, e successive modifiche (<em>Decreto Legislativo 7 agosto 2019, n. 96</em>); riformano l'inclusione scolastica, introducono il Profilo di Funzionamento secondo il modello ICF e ridefiniscono il PEI e il GLO.",
      "<em>Direttiva ministeriale del 27 dicembre 2012</em> (Strumenti d'intervento per alunni con bisogni educativi speciali) e relativa <em>Circolare ministeriale n. 8 del 6 marzo 2013</em>; estendono le tutele all'area dei Bisogni Educativi Speciali (BES) e prevedono il Piano Annuale per l'Inclusione (PAI).",
      "<em>Regolamento generale sulla protezione dei dati</em> (GDPR) e <em>Decreto Legislativo 30 giugno 2003, n. 196</em> (Codice in materia di protezione dei dati personali), come modificato dal <em>Decreto Legislativo 10 agosto 2018, n. 101</em>.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "La differenziazione didattica consiste nell'adattare il modo di insegnare, non nell'abbassare le aspettative. L'obiettivo di apprendimento può essere lo stesso per tutti; ciò che cambia è il percorso.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Il modello UDL (Universal Design for Learning, progettazione universale per l'apprendimento) propone tre principi: molteplici mezzi di rappresentazione (come viene presentato il contenuto), molteplici mezzi di azione ed espressione (come risponde l'alunno) e molteplici mezzi di coinvolgimento (ciò che motiva l'alunno).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Differenziare non significa creare un piano di lezione per ogni alunno: significa creare sufficiente flessibilità affinché la stessa lezione risponda a profili diversi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Non è</strong> ridurre il curricolo per gli alunni con maggiori difficoltà.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Non è</strong> assegnare sempre compiti diversi ad alunni diversi: questo isola ed etichetta.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Non è</strong> soltanto lavoro differenziato sulla carta: la differenziazione comprende il modo in cui il docente spiega, interroga e valuta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Scelta guidata: offrire 2-3 opzioni di formato della risposta (testo scritto, orale, disegno schematico); tutti rispondono allo stesso contenuto.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Impalcatura (scaffolding): fornire una traccia strutturata agli alunni con maggiori difficoltà, ritirandola progressivamente man mano che cresce l'autonomia.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Raggruppamento flessibile: gruppi per interesse, per livello di padronanza o misti; ruotarli per evitare gruppi fissi che finiscono per diventare identità.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Adattamenti dei tempi: più tempo non significa meno rigore. Per gli alunni con ADHD o disprassia, suddividere il compito in segmenti con pause programmate.",
        "Livello di complessità: per uno stesso argomento, creare versioni con più o meno supporto linguistico, con o senza esempi, con o senza indizi visivi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Valutare ciò che l'alunno sa, non come scrive. Un alunno con dislessia può dimostrare la padronanza concettuale oralmente o con un supporto tecnologico.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rubriche chiare e condivise prima del compito permettono all'alunno di sapere che cosa ci si aspetta, indipendentemente dal formato scelto.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Il portfolio o la valutazione per evidenze permette all'alunno di mostrare i progressi nel tempo, e non solo in un momento di verifica.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Quando la differenziazione in classe non è più sufficiente e l'alunno continua a non poter accedere al curricolo, è segno che può essere necessario un supporto specializzato.",
        "La differenziazione non sostituisce le misure di supporto della scuola (servizio di orientamento, terapisti, istruzione speciale): è ciò che avviene nella classe ordinaria, a complemento.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "La valutazione formativa è qualsiasi pratica che raccoglie informazioni sull'apprendimento durante il processo e usa queste informazioni per adattare l'insegnamento o il sostegno all'alunno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A differenza della valutazione sommativa (voti finali), quella formativa non deve necessariamente avere un voto: deve avere un feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Per gli alunni neurodivergenti, la valutazione formativa è particolarmente importante perché il rendimento in una prova puntuale può non riflettere ciò che sanno davvero.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: alla fine della lezione, l'alunno risponde a una domanda in 2 minuti; il docente vede subito chi ha capito e chi no.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semaforo</strong>: verde (ho capito), giallo (ho dei dubbi), rosso (non ho capito); può essere con cartoncini fisici, post-it o in formato digitale.",
        "<strong>Think-Pair-Share</strong>: l'alunno pensa individualmente, ne discute con un compagno e poi condivide con la classe; riduce l'ansia della risposta diretta.",
        "<strong>Porta d'uscita</strong>: prima di uscire, l'alunno dice al docente una cosa che ha imparato e un dubbio che ha ancora.",
      ]},
      { items: [
        "Un feedback efficace è specifico, attuabile e dato in tempo: «a pagina 2 l'argomentazione si perde perché manca il collegamento con la prova» è utile; «si poteva fare meglio» non lo è.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Per gli alunni con ADHD: il feedback immediato è più efficace di quello differito. Non aspettare la fine del compito.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Per gli alunni con dislessia: il feedback orale o in audio può essere più accessibile dei commenti scritti estesi.",
        "Evitare di confrontare gli alunni tra loro; confrontare l'alunno con il suo precedente percorso di progresso.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: valutazione in più momenti brevi anziché in un'unica prova lunga. Ridurre gli stimoli distraenti nell'ambiente di valutazione.",
        "Dislessia: consentire risposte orali, tempo aggiuntivo o l'uso della sintesi vocale. Valutare il contenuto, non l'ortografia.",
        "Autismo: valutazioni con istruzioni scritte chiare e prive di ambiguità. Avvisare in anticipo dei cambiamenti di formato.",
        "Plusdotazione: evitare valutazioni di mera riproduzione dei contenuti; includere domande di analisi, sintesi e creazione.",
      ]},
      { items: [
        "Quando, anche con adattamenti della valutazione, l'alunno non riesce a dimostrare l'apprendimento, è segno che può esserci una barriera più profonda da indagare con il servizio di orientamento.",
        "Pattern persistenti (mesi, non giorni) di difficoltà specifica in un'area devono essere segnalati formalmente.",
      ]},
    ]},
  },

  de: {
    tdah: { sections: [
      { items: [
        "Schwierigkeiten, die Aufmerksamkeit bei langen Aufgaben aufrechtzuerhalten; verliert bei mehrschrittigen Anweisungen den Faden.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Ständige Bewegung — bleibt nicht sitzen, zappelt mit den Händen, steht ohne ersichtlichen Grund auf.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Antwortet, bevor die Frage zu Ende ist; unterbricht Mitschülerinnen, Mitschüler und die Lehrkraft.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vergisst Materialien, Fristen und vor wenigen Minuten mündlich gegebene Anweisungen — das Arbeitsgedächtnis ist überlastet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kann sich bei interessanten Themen hyperfokussieren und so den (falschen) Eindruck erwecken, „es zu können, wenn es nur will“; tatsächlich schwankt die Leistung mit Interesse und Belohnung.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Es ist kein</strong> schlechtes Benehmen, keine Faulheit und keine Charakterschwäche: Diese falschen Vorstellungen stigmatisieren und verzögern die Unterstützung.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Es ist nicht</strong> immer eine sichtbare Hyperaktivität — es gibt eine vorwiegend unaufmerksame Erscheinungsform, die bei Mädchen häufiger und oft unterdiagnostiziert ist.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Es lässt sich nicht</strong> durch „sich mehr anstrengen“ lösen: Die Schwierigkeit liegt in der neurologischen Selbstregulation, nicht im Willen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Anweisungen aufgliedern: eine nach der anderen, schriftlich an der Tafel, mit festgelegter Zeit — das verringert die Belastung des Arbeitsgedächtnisses.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Legitime Bewegung erlauben (Materialien austeilen, die Tafel wischen, Botengänge erledigen).",
        "Konkurrierende Reize reduzieren (Sitzplatz fern vom Fenster, von der Tür, von der lautesten Gruppe).",
        "Sofortige und häufige positive Verstärkung: Bei ADHS ist die Belohnungssensitivität verändert (Aversion gegen Aufschub), weshalb unmittelbare Belohnungen besser wirken als verzögerte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Mit dem beginnen, was der Schüler oder die Schülerin gut macht — das Gespräch darf nicht mit einer Liste von Beschwerden beginnen, sonst verschließen sich die Erziehungsberechtigten abwehrend.",
        "Beobachtete Verhaltensweisen beschreiben, keine Diagnosen: „Wenn mehr als zwei Schritte aufeinanderfolgen, verliert er oder sie den Faden“ statt „hat ADHS“.",
        "Die Reaktion „zu Hause ist das nicht so“ vorwegnehmen — erklären, dass der Gruppenkontext und die Anforderung an anhaltende Aufmerksamkeit im Klassenraum die Symptome sichtbarer machen.",
        "Wenn Sie eine Abklärung vorschlagen, stellen Sie sie als Ressource dar, nicht als Strafe: „Es gibt Unterstützung, die ihm oder ihr sehr helfen kann“ statt „muss abgeklärt werden“.",
      ]},
      { items: [
        "Anhaltende Verstöße gegen Regeln trotz Anpassungen im Klassenraum.",
        "Anzeichen sozialer Ausgrenzung durch Gleichaltrige.",
        "Anzeichen von Komorbidität (Angst, Depression, Störung mit oppositionellem Trotzverhalten) — bei ADHS häufig und ein Grund für eine Überweisung.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Liest langsam und mühsam, mit Fehlern beim Lesen einzelner Wörter, selbst bei Texten, die das Kind gut versteht, wenn sie vorgelesen werden.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Buchstabenverdrehungen (b/d, p/q) sind bei allen Kindern, die zu schreiben beginnen, üblich und für sich genommen kein Zeichen von Legasthenie; die zentrale Schwierigkeit ist <strong>phonologisch</strong> — Buchstaben mit Lauten zu verknüpfen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Anhaltende Rechtschreibfehler, die auf wiederholte Korrektur nicht ansprechen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Neigt dazu, das laute Vorlesen zu vermeiden; das kann wie Desinteresse wirken, ist in Wirklichkeit aber eine Schutzstrategie.",
        "Das Hörverständnis ist deutlich besser als das Leseverständnis — die Schwierigkeit ist spezifisch und keine allgemeine kognitive Einschränkung.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Es ist kein</strong> Mangel an Intelligenz: Per Definition ist Legasthenie angesichts der übrigen kognitiven Fähigkeiten des Schülers unerwartet.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Es ist kein</strong> Sehproblem und auch kein bloßes „Verwechseln von Buchstaben“: Das zentrale Defizit liegt in der phonologischen Verarbeitung.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Sie lässt sich nicht „heilen“</strong>, doch eine strukturierte Förderung der phonologischen Bewusstheit und der Dekodierung verbessert das Lesen beständig.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Den Abstand zwischen Buchstaben und Zeilen vergrößern: Es gibt experimentelle Belege dafür, dass ein vergrößerter Abstand das Lesen von Kindern mit Legasthenie ohne vorheriges Training verbessert.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Die Belege für bestimmte Schriftarten „für Legastheniker“ sind dagegen schwächer und uneinheitlicher.",
        "Stilles Lesen vor jedem lauten Vorlesen erlauben — niemals überraschend zum Vorlesen auffordern.",
        "Wenn das Ziel nicht die Bewertung des Schreibens ist, den Inhalt getrennt von der Rechtschreibung bewerten.",
        "Dieselbe Information in verschiedenen Formaten anbieten (Audio, Video, Schaubilder).",
      ]},
      { items: [
        "Lesen und Intelligenz von Anfang an ausdrücklich trennen: „Er versteht sehr gut, wenn er zuhört — die Schwierigkeit ist spezifisch auf das Lesen bezogen.“",
        "Bedenken, dass Legasthenie eine starke erbliche Komponente hat: Ein Elternteil könnte eine nicht diagnostizierte Legasthenie haben, und das Gespräch kann schwierige Erinnerungen an die eigene Schulzeit wecken.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vermeiden, Arbeitsblätter voller roter Korrekturen ohne Kontext zu zeigen — zuerst darstellen, was der Schüler bereits kann.",
        "Konkret sein bei den bereits laufenden Anpassungen und denen, die die Erziehungsberechtigten zu Hause übernehmen können: Texte als Audio, lautes Vorlesen ohne Zeitdruck.",
      ]},
      { items: [
        "Sich verschlechterndes akademisches Selbstbild („Ich bin dumm“, „Ich schaffe das nicht“).",
        "Systematisches Vermeiden von Lese-/Schreibaufgaben bis zu dem Punkt, dass andere Fächer beeinträchtigt werden.",
        "Deutliche Diskrepanz zwischen mündlicher und schriftlicher Leistung ohne formale Diagnose — zur psychopädagogischen Abklärung überweisen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Schwierigkeiten mit nicht angekündigten Veränderungen – Stundenplanänderung, Raumwechsel, Vertretungslehrkraft.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Wörtliches Verständnis – Nuancen, Ironie und Redewendungen gehen verloren.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensorische Empfindlichkeit – Leuchtstoffröhren, Hintergrundgeräusche und Kleideretiketten können unerträglich sein.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fokussierte und tiefe Interessen an bestimmten Themen – verbunden mit einem detailorientierten kognitiven Stil.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Kann desinteressiert oder distanziert wirken, wenn es überlastet ist – nicht abgeschaltet.",
      ]},
      { items: [
        "<strong>Es ist keine</strong> lineare Skala („mehr“ oder „weniger“ autistisch) – es ist ein mehrdimensionales Profil mit unterschiedlichem Unterstützungsbedarf in jedem Bereich.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Es ist kein</strong> Mangel an Empathie: Die Schwierigkeiten des gegenseitigen Verständnisses sind wechselseitig – auch nicht-autistische Menschen haben Schwierigkeiten, autistische Menschen zu verstehen (das „Doppelte-Empathie-Problem“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Es ist kein</strong> Fehlverhalten, wenn eine Routine durchbrochen wird – es ist eine reale neurologische Reaktion auf den Verlust von Vorhersehbarkeit.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Jede Routineänderung frühzeitig ankündigen, auch wenn sie scheinbar trivial ist – visuelle Unterstützung und Vorausschau sind empirisch belegt.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Implizite soziale Regeln in explizite Regeln umwandeln (was man tut, was man nicht tut, wann).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Bei Bedarf sensorische Pausen in einem ruhigen Raum erlauben.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Das fokussierte Interesse als Einstieg in Lehrplaninhalte nutzen – eine Stärke, keine Ablenkung.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Wenn die Diagnose bereits vorliegt, zuerst fragen, was die Erziehungsberechtigten als hilfreich kennen – Eltern autistischer Kinder wissen oft mehr über ihr Kind als jeder Bericht.",
        "Wenn keine Diagnose vorliegt, sehr vorsichtig sein: konkrete Situationen beschreiben, ohne in einem ersten Gespräch jemals das Wort „Autismus“ zu verwenden – „wenn sich die Routine ohne Vorwarnung ändert, gerät Ihr Kind in einer Weise aus dem Gleichgewicht, die über das Übliche hinausgeht“.",
        "Den Einsatz der Erziehungsberechtigten würdigen – zu Hause Struktur und Vorhersehbarkeit zu schaffen ist anspruchsvoll, und das anzuerkennen schafft ein Bündnis.",
        "Niemals mit „anderen Schülerinnen und Schülern“ oder mit Geschwistern vergleichen – jedes Profil im Spektrum ist anders, und der Vergleich ist immer kontraproduktiv.",
      ]},
      { items: [
        "Häufige Krisen („Meltdowns“) nach dem Schultag.",
        "Anhaltende Schulverweigerung in Verbindung mit sensorischer Überlastung.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fortschreitende soziale Isolation trotz Vermittlungsversuchen.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Die Handschrift ist mühsam, langsam und oft unleserlich – aufgrund einer echten motorischen Schwierigkeit, nicht aus Nachlässigkeit.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Schwierigkeiten bei der räumlichen Organisation des Heftes, beim Umgang mit Materialien und bei Handlungsabfolgen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kann „ungeschickt“ wirken – verschüttet Getränke, stößt an Möbel, hat Schwierigkeiten im Sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Unverhältnismäßige Erschöpfung nach Aufgaben, die eine anhaltende feinmotorische Koordination erfordern.",
        "Die kognitive Komponente ist in der Regel erhalten – daher die häufige Frustration zwischen Wissen und der Fähigkeit, es zeigen zu können.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Es ist keine</strong> Faulheit oder mangelnder Einsatz.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Es ist nicht</strong> nur eine schlechte Handschrift: Der klinische Begriff lautet Umschriebene Entwicklungsstörung motorischer Funktionen (UEMF) und betrifft die motorische Planung und Sequenzierung, nicht nur das Schreiben.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Es lässt sich nicht</strong> durch „mehr Schreibübungen“ beheben: Eine wirksame Intervention ist aufgabenorientiert, nicht mechanische Wiederholung.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Den Einsatz von Tastatur/Tablet bei umfangreichen schriftlichen Arbeiten erlauben.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Das mechanische Abschreiben von der Tafel reduzieren – bei Bedarf Notizen bereitstellen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Explizite Checklisten für mehrschrittige Aufgaben bereitstellen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Das Ergebnis nach dem Inhalt bewerten, nicht nach der äußeren Darstellung.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Erklären Sie in einfacher Sprache, was Dyspraxie ist – die meisten Erziehungsberechtigten haben den Begriff noch nie gehört: „Es ist eine neurologische Schwierigkeit bei der Koordination von Bewegungen, keine Nachlässigkeit und kein mangelnder Einsatz“.",
        "Die unleserliche Handschrift ist der größte Reibungspunkt mit den Erziehungsberechtigten – zu zeigen, dass die Bewertung nun den Inhalt und nicht die Form gewichtet, hilft, die Angst auf beiden Seiten zu lindern.",
        "Schlagen Sie praktische Hilfsmittel für zu Hause vor: Spracheingabe am Handy für Notizen, Tastatur für umfangreiche schriftliche Arbeiten.",
        "Wenn es in früheren Jahren ein „er/sie ist faul“ oder „er/sie strengt sich nicht an“ gab, benennen Sie das direkt: „Ich weiß, dass Sie das schon einmal gehört haben – meine Einschätzung ist eine andere“.",
      ]},
      { items: [
        "Vollständige Verweigerung schriftlicher Arbeiten.",
        "Soziale Isolation in Kontexten körperlicher Aktivität.",
        "Anzeichen somatisierter Angst vor schriftlichen Prüfungen – das psychosoziale Leiden ist Teil des Krankheitsbildes.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Erledigt die Aufgaben in Minuten, während die Klasse die ganze Stunde dafür braucht.",
        "Stellt Fragen, die über den Stoff hinausgehen — oder fordert das Gelehrte aktiv heraus.",
        "Kann desinteressiert, undiszipliniert oder apathisch wirken — oft Zeichen chronischer Langeweile und von Underachievement.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ausgeprägte emotionale Sensibilität; kann ängstlich oder perfektionistisch sein — psychosoziale Faktoren sind entscheidend für die Talententwicklung.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reales Risiko von Underachievement — kann lernen, die Begabung zu verbergen, um sozial nicht aufzufallen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Ist nicht</strong> gleichbedeutend mit gutem Verhalten oder guten Leistungen — viele hochbegabte Schülerinnen und Schüler erbringen aus Desinteresse durchschnittliche Leistungen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ist nicht</strong> „braucht keine Hilfe“: Es braucht andere Herausforderungen, denn Begabung wird nur dann zu Leistung, wenn sie bewusst gefördert wird.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ist nicht</strong> unvereinbar mit Neurodivergenz — Zweifachausnahmebegabung (2e) existiert, ist häufig und wird oft verdeckt.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Stets vorbereitete Vertiefungsaufgaben bereithalten — nicht mehr vom Gleichen, sondern tiefer gehender oder angewandter Stoff.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Eigenständiges Forschen zu Themen ermöglichen, die das Kind innerhalb des Lehrplans interessieren.",
        "An der Herausforderung messen, nicht an der Leichtigkeit — anspruchsvollere Arbeiten im Gegenzug für geringeren Umfang verlangen.",
        "Die emotionale Sensibilität anerkennen und bestätigen, ohne sie zu pathologisieren.",
      ]},
      { items: [
        "Den Stolz vorwegnehmen und umlenken: „Es ist eindeutig sehr begabt — und genau deshalb verursacht die Langeweile Probleme.“",
        "Das Paradox der Hochbegabung erklären: Gute Leistungen bedeuten nicht, dass es dem Kind gut geht, und Underachievement aus Desinteresse ist häufig und umkehrbar.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Wenn das Kind seine Begabung verbirgt, um sich sozial einzufügen, dies behutsam ansprechen — es ist ein Zeichen von Leid, nicht von Bescheidenheit.",
        "Den Eltern vorschlagen, zu Hause den Prozess statt das Ergebnis zu würdigen: Neugier, Tiefe und schwierige Fragen wiegen mehr als gute Noten bei leichten Aufgaben.",
      ]},
      { items: [
        "Anzeichen von Angst oder Depression in Verbindung mit extremem Perfektionismus.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ausgeprägte soziale Isolation, geprägt vom Gefühl, „anders“ als die Gleichaltrigen zu sein.",
        "Plötzliches schulisches Underachievement bei einem zuvor als begabt erkannten Kind.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Versteht deutlich weniger, als es den Anschein hat – die Umgangssprache entwickelt sich weit früher als die Bildungssprache, weshalb ein Kind fließend wirken kann, ohne den Unterrichtsinhalten folgen zu können.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Scheinbar schwache schulische Leistungen, die oft in keinem Verhältnis zu den tatsächlichen Fähigkeiten stehen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Schweigen im Unterricht – dies kann eine normale „Schweigephase“ beim Zweitspracherwerb sein und kein Desinteresse.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kann am Ende des Tages erschöpft sein, weil die Sprache in Echtzeit verarbeitet werden muss.",
        "Gefahr einer Unterdiagnostik tatsächlicher Förderbedarfe (Legasthenie, ADHS), weil alles der sprachlichen Barriere zugeschrieben wird.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Es ist kein</strong> Mangel an Intelligenz oder Fähigkeit.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Es ist nicht</strong> nur eine Frage der Zeit: Die Bildungssprache braucht Jahre, um sich zu entwickeln, und ohne gezielte Förderung verharren viele Schülerinnen und Schüler auf einem niedrigen funktionalen Niveau.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Es lässt sich nicht</strong> durch automatische Übersetzung während des Unterrichts lösen – es ist ein jahrelanger Prozess, und die Erstsprache ist eine Ressource, kein Hindernis.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Materialien mit in die Erstsprache übersetztem Schlüsselwortschatz bereitstellen.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Das Wissen wann immer möglich durch visuelle oder praktische Demonstration überprüfen.",
        "Mit einer zweisprachigen Mitschülerin oder einem zweisprachigen Mitschüler zur informellen Vermittlung in kritischen Momenten zusammenbringen.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Erste Sprachproduktionen mit grammatikalischen Fehlern akzeptieren – in der ersten Phase den Inhalt korrigieren, nicht die Form.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Das Gespräch selbst ist eine Barriere – die Eltern bzw. Erziehungsberechtigten beherrschen das Deutsche möglicherweise nicht ausreichend für ein komplexes Gespräch. Einfache schriftliche Materialien im Voraus vorbereiten oder Unterstützung bei der Übersetzung anfordern.",
        "Nicht voraussetzen, dass die Eltern bzw. Erziehungsberechtigten das deutsche Bildungssystem kennen – erklären, was der schulpsychologische Dienst ist, was eine Fördermaßnahme bedeutet und was eine Abklärung beinhaltet, ohne etwas als selbstverständlich anzunehmen.",
        "Sprachliche Barriere und schulische Fähigkeit klar voneinander trennen: „Ihr Kind ist fähig – es lernt die Sprache zur gleichen Zeit wie die Inhalte, was sehr anspruchsvoll ist.“<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Sensibel für den migrationsbedingten Kontext sein: Geflüchtete Familien oder Familien ohne geregelten Aufenthaltsstatus können Institutionen gegenüber misstrauisch sein. Vertrauen aufbauen, bevor Dokumente oder Verweisungen verlangt werden.",
      ]},
      { items: [
        "Anzeichen sozialer Isolation oder von Mobbing, die mit der Zuwanderungsgeschichte des Kindes zusammenhängen.",
        "Stillstand beim Spracherwerb nach dem ersten Jahr.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Anzeichen eines Traumas im Zusammenhang mit dem Migrationskontext (insbesondere bei Geflüchteten).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Daten Minderjähriger unterliegen einem verstärkten Schutz (Art. 8 DSGVO). Die Einwilligung der Erziehungsberechtigten ist verpflichtend.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Prüfen Sie, wo das Werkzeug die Daten speichert – auf europäischen oder außereuropäischen Servern, anonymisiert oder nicht.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Geben Sie niemals vollständige Namen, Adressen, Identifikationsnummern oder klinische Diagnosen in generative KI-Werkzeuge ein.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Unterscheiden Sie zwischen institutioneller Nutzung (die Schule schließt einen Vertrag ab) und privater Nutzung durch die Lehrkraft (individuelle Verantwortung).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systeme, die überwiegend mit englischsprachigen Daten trainiert wurden, können in der deutschen Sprache und in deutschsprachigen Kontexten eine schlechtere Leistung erbringen.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatische Empfehlungen können Stereotype in Bezug auf Geschlecht, Ethnie oder soziale Schicht verstärken – prüfen Sie sie kritisch.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modelle zur „Vorhersage des akademischen Risikos“ sind besonders problematisch – häufig reproduzieren sie bestehende Ungleichheiten, anstatt Bedürfnisse zu erkennen.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Das Ziel ist es, die Autonomie der Schülerin oder des Schülers zu stärken, nicht die kognitive Arbeit zu ersetzen, die diese Autonomie entwickelt.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Unterscheiden Sie zwischen einem <strong>Zugangswerkzeug</strong> (Text-to-Speech für eine Schülerin oder einen Schüler mit Legasthenie) und einem <strong>Ersatzwerkzeug</strong> (ChatGPT, das den Aufsatz schreibt).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Bewerten Sie regelmäßig: Entwickelt die Schülerin oder der Schüler Kompetenz oder eine Abhängigkeit vom Werkzeug?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Beseitigt das Werkzeug eine reale Barriere oder schafft es eine Abkürzung, die das Lernen umgeht?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Sind die eingegebenen Daten geschützt und liegt eine Einwilligung vor?",
        "<strong>3.</strong> Wird das Ergebnis des Werkzeugs von einem Menschen überprüft, bevor es die Schülerin oder den Schüler erreicht?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Gibt es eine Alternative ohne KI, die genauso gut funktioniert?",
        "<strong>5.</strong> Wenn das Werkzeug morgen nicht mehr existieren würde, stünde die Schülerin oder der Schüler hilflos da?",
      ]},
    ],
    references: [
      "Europäische Union. (2016). <em>Verordnung (EU) 2016/679 (Datenschutz-Grundverordnung)</em>, Art. 8. Amtsblatt der Europäischen Union, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Kolleginnen und Kollegen befähigen, KI verantwortungsvoll in den Fremdsprachenunterricht zu integrieren, und dabei Materialien erstellen, die an unterschiedliche Lernprofile anpassbar sind.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Das ist keine Präsentation – es ist eine Ko-Konstruktion. Jede teilnehmende Person geht mit mindestens einer einsatzbereiten Ressource zum Ausprobieren nach Hause.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 Min.:</strong> Einstieg – das Problem der heterogenen Lerngruppe und warum „mehr vom Gleichen“ nicht funktioniert.",
        "<strong>10–25 Min.:</strong> Profilkarte – Vorstellung der sechs Farol-Karten anhand realer (anonymisierter) Fälle.",
        "<strong>25–45 Min.:</strong> Praktische Demonstration – drei Werkzeuge, drei Anwendungsfälle, drei unterschiedliche Profile.",
        "<strong>45–75 Min.:</strong> Partnerarbeit – jedes Paar passt ein vorhandenes Material an ein bestimmtes Profil an.",
        "<strong>75–85 Min.:</strong> Kurzer Austausch – jedes Paar stellt sein Ergebnis in einer Minute vor.",
        "<strong>85–90 Min.:</strong> Verpflichtungen – jede teilnehmende Person legt ein zu erprobendes Material fest, und eine Feedback-Sitzung nach 30 Tagen wird vereinbart.",
      ]},
      { items: [
        "Internetzugang und institutionelle Konten für die vorgestellten Werkzeuge.",
        "Vorhandene Materialien jeder teilnehmenden Person (ein Arbeitsblatt, ein Test oder ein Unterrichtsplan).",
        "Ausgedruckte Karten der Farol-Profile zum Nachschlagen.",
      ]},
      { items: [
        "Jede teilnehmende Person erstellt während der Sitzung mindestens ein angepasstes Material.",
        "Feedback-Sitzung nach 30 Tagen, bei der mindestens 60 % der Teilnehmenden eine tatsächliche Umsetzung berichten.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Mindestens ein in der Sitzung erstelltes Material wird als gemeinsame Ressource der Fachschaft übernommen.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Kerngesetze: UN-BRK (UN-Behindertenrechtskonvention, ratifiziert 2009), KMK-Empfehlungen zur inklusiven Bildung (2011/2020), jedes Bundesland hat ein eigenes Schulgesetz (z. B. SchulG NRW §20, BayEUG Art. 41).<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Die Schulgesetze der Länder regeln die konkrete Umsetzung inklusiver Bildung, der Handlungsspielraum variiert je nach Bundesland.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Inklusive Bildung ist ein Rechtsanspruch, der sich aus der UN-BRK ergibt; die Ausgestaltung liegt bei den Bundesländern.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Nachteilsausgleich: zeitliche, räumliche oder materielle Kompensationsmaßnahmen, die alle Lehrkräfte ohne formale Diagnose anwenden können.",
        "Differenzierter Unterricht und Lehrplan-Flexibilität sind Bestandteil des regulären Unterrichts.",
        "Förderplan: kann auf Grundlage pädagogischer Beobachtung ohne AO-SF-Verfahren erstellt werden.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Feststellung des sonderpädagogischen Förderbedarfs im AO-SF-Verfahren (z. B. in NRW) (Ausbildungsordnung sonderpädagogische Förderung), durchgeführt vom schulpsychologischen Dienst oder der Sonderpädagogin/dem Sonderpädagogen.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Förderplan als Grundlage individueller sonderpädagogischer Unterstützung.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Möglichkeit der Beschulung in der Regelschule mit sonderpädagogischer Unterstützung oder in der Förderschule, Eltern haben ein Wunsch- und Wahlrecht.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Der schulpsychologische Dienst (Schulpsychologin/Schulpsychologe) begleitet den Prozess und berät Eltern und Lehrkräfte.",
      ]},
      { items: [
        "Keine einheitliche Bundesregelung für Hochbegabung, jedes Bundesland regelt dies eigenständig.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "DGhK (Deutsche Gesellschaft für das hochbegabte Kind) und Karg-Stiftung bieten Beratung und Ressourcen.",
        "Überspringen von Klassen ist nach den meisten Schulgesetzen möglich.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Enrichment-Programme und begabungsfördernde Schulen (z. B. Begabtenförderung der Bundesländer) als ergänzende Maßnahmen.",
      ]},
      { items: [
        "DaZ (Deutsch als Zweitsprache): Vorbereitungsklassen (Willkommensklassen) für Schülerinnen und Schüler ohne Deutschkenntnisse.",
        "Sprachstandstest zur Einschätzung des Niveaus und zur Zuweisung zu Sprachfördermaßnahmen.",
        "Eine Sprachbarriere allein begründet keinen sonderpädagogischen Förderbedarf.",
        "DaZ-Lehrkräfte sind für die sprachliche Unterstützung zuständig.",
      ]},
      { items: [
        "UN-BRK (ratifiziert 2009)<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "KMK-Empfehlungen zur inklusiven Bildung 2011 und 2020<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Schulgesetze der Länder (§§ zu Inklusion, z. B. SchulG NRW §20, BayEUG Art. 41)<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "AO-SF (Ausbildungsordnung sonderpädagogische Förderung)<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Förderplan, schulpsychologischer Dienst; Datenschutz nach DSGVO und BDSG<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>Übereinkommen über die Rechte von Menschen mit Behinderungen</em> (UN-Behindertenrechtskonvention, UN-BRK, 2006), von Deutschland ratifiziert am 24. Februar 2009, in Kraft getreten am 26. März 2009 (BGBl. 2008 II S. 1419); Artikel 24 verbürgt das Recht auf inklusive Bildung.",
      "<em>Empfehlungen der Kultusministerkonferenz (KMK) zur inklusiven Bildung von Kindern und Jugendlichen mit Behinderungen in Schulen</em> (Beschluss vom 20. Oktober 2011) sowie die nachfolgenden KMK-Empfehlungen (2020); konkretisieren die Umsetzung der UN-BRK im Schulwesen.",
      "<em>Schulgesetze der Länder</em>, die die schulische Inklusion eigenständig regeln, u. a. das <em>Schulgesetz für das Land Nordrhein-Westfalen (SchulG NRW)</em>, § 20 (Förderorte), und das <em>Bayerische Gesetz über das Erziehungs- und Unterrichtswesen (BayEUG)</em>, Art. 41; Bildung ist Ländersache.",
      "<em>Verordnung über die sonderpädagogische Förderung, den Hausunterricht und die Schule für Kranke (AO-SF)</em> in der jeweiligen Landesfassung (z. B. NRW); regelt das Verfahren zur Feststellung des sonderpädagogischen Unterstützungsbedarfs.",
      "<em>Datenschutz-Grundverordnung</em> (DSGVO, Verordnung (EU) 2016/679) und <em>Bundesdatenschutzgesetz</em> (BDSG vom 30. Juni 2017, in Kraft seit 25. Mai 2018) sowie die Landesdatenschutzgesetze; maßgeblich für den Umgang mit Schülerdaten.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pädagogische Differenzierung bedeutet, die Art und Weise des Unterrichtens anzupassen — nicht, die Erwartungen zu senken. Das Lernziel kann für alle dasselbe sein; was variiert, ist der Weg dorthin.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Das Modell UDL (Universal Design for Learning) schlägt drei Prinzipien vor: vielfältige Formen der Darstellung (wie der Inhalt präsentiert wird), vielfältige Formen des Handelns und Ausdrucks (wie die Schülerin oder der Schüler antwortet) und vielfältige Formen des Engagements (was die Lernenden motiviert).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Differenzieren heißt nicht, für jede Schülerin und jeden Schüler einen eigenen Unterrichtsplan zu erstellen — es heißt, genügend Flexibilität zu schaffen, damit dieselbe Stunde unterschiedlichen Profilen gerecht wird.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Es ist nicht</strong> die Reduzierung des Lehrplans für die schwächeren Lernenden.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Es ist nicht</strong>, verschiedenen Lernenden immer unterschiedliche Aufgaben zu geben — das isoliert und etikettiert.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Es ist nicht</strong> nur differenzierte Arbeit auf dem Papier — Differenzierung umfasst auch, wie die Lehrkraft erklärt, fragt und bewertet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Gelenkte Wahl: 2–3 Optionen für das Antwortformat anbieten (schriftlicher Text, mündlich, schematische Zeichnung) — alle bearbeiten denselben Inhalt.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Gerüstbau (Scaffolding): schwächeren Lernenden einen strukturierten Leitfaden bereitstellen; den Leitfaden schrittweise entfernen, sobald die Selbstständigkeit wächst.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Flexible Gruppierung: Gruppen nach Interesse, nach Kompetenzniveau oder gemischt — rotieren, um feste Gruppen zu vermeiden, die zu Identitäten werden.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Zeitanpassungen: mehr Zeit bedeutet nicht weniger Anspruch. Für Lernende mit ADHS oder Dyspraxie die Aufgabe in Abschnitte mit eingeplanten Pausen unterteilen.",
        "Komplexitätsniveau: zum selben Thema Versionen mit mehr oder weniger sprachlicher Unterstützung erstellen, mit oder ohne Beispiele, mit oder ohne visuelle Hinweise.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Bewerten, was die Schülerin oder der Schüler weiß, nicht wie sie oder er schreibt. Ein Kind mit Legasthenie kann konzeptuelles Verständnis mündlich oder mit technischer Unterstützung nachweisen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Klare und vor der Aufgabe geteilte Bewertungsraster ermöglichen es den Lernenden zu wissen, was erwartet wird — unabhängig vom gewählten Format.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ein Portfolio oder eine evidenzbasierte Bewertung ermöglicht es den Lernenden, Fortschritte über die Zeit zu zeigen und nicht nur in einem einzigen Testmoment.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Wenn die Differenzierung im Klassenzimmer nicht mehr ausreicht und die Schülerin oder der Schüler weiterhin keinen Zugang zum Lehrplan findet, ist das ein Zeichen dafür, dass spezialisierte Unterstützung erforderlich sein könnte.",
        "Differenzierung ersetzt nicht die Unterstützungsmaßnahmen der Schule (SPO, Therapeutinnen und Therapeuten, Sonderpädagogik) — sie ist das, was ergänzend im regulären Unterricht geschieht.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formative Beurteilung ist jede Praxis, die während des Lernprozesses Informationen über das Lernen sammelt – und diese Informationen nutzt, um den Unterricht oder die Unterstützung des Schülers anzupassen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Anders als die summative Beurteilung (Abschlussnoten) muss die formative Beurteilung keine Note haben – sie muss Feedback haben.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Für neurodivergente Schülerinnen und Schüler ist die formative Beurteilung besonders wichtig, weil die Leistung in einem einmaligen Test möglicherweise nicht widerspiegelt, was sie tatsächlich wissen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit Ticket</strong>: Am Ende der Stunde beantwortet der Schüler in 2 Minuten eine Frage – die Lehrkraft sieht sofort, wer es verstanden hat und wer nicht.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ampel</strong>: Grün (verstanden), Gelb (habe Zweifel), Rot (nicht verstanden) – das können physische Karten, Post-its oder eine digitale Variante sein.",
        "<strong>Think-Pair-Share</strong>: Der Schüler denkt zunächst allein nach, bespricht sich dann mit einem Partner und teilt das Ergebnis anschließend mit der Klasse – das verringert die Angst vor einer direkten Antwort.",
        "<strong>Ausgangstür</strong>: Bevor der Schüler den Raum verlässt, nennt er der Lehrkraft eine Sache, die er gelernt hat, und eine Frage, die er noch hat.",
      ]},
      { items: [
        "Wirksames Feedback ist konkret, umsetzbar und zeitnah: „Auf Seite 2 verliert sich das Argument, weil die Verknüpfung mit dem Beleg fehlt“ ist hilfreich; „Das könnte besser sein“ ist es nicht.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Für Schülerinnen und Schüler mit ADHS: Unmittelbares Feedback ist wirksamer als verzögertes. Nicht bis zum Ende der Aufgabe warten.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Für Schülerinnen und Schüler mit Legasthenie: Mündliches Feedback oder Feedback per Audio kann zugänglicher sein als umfangreiche schriftliche Kommentare.",
        "Schülerinnen und Schüler nicht untereinander vergleichen – den Schüler mit seinem eigenen früheren Lernfortschritt vergleichen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHS: Beurteilung in mehreren kurzen Etappen statt in einem einzigen langen Test. Ablenkende Reize in der Prüfungsumgebung verringern.",
        "Legasthenie: mündliche Antworten, zusätzliche Zeit oder den Einsatz von Text-to-Speech erlauben. Den Inhalt bewerten, nicht die Rechtschreibung.",
        "Autismus: Beurteilungen mit klaren, eindeutigen schriftlichen Anweisungen. Änderungen am Format rechtzeitig ankündigen.",
        "Hochbegabung: Beurteilungen vermeiden, die bloß Inhalte wiedergeben – Aufgaben zur Analyse, Synthese und zum Gestalten einbauen.",
      ]},
      { items: [
        "Wenn ein Schüler trotz angepasster Beurteilung sein Lernen nicht zeigen kann, ist das ein Anzeichen dafür, dass es eine tiefer liegende Barriere geben könnte, die mit dem SPO (schulpsychologischer Dienst) zu untersuchen ist.",
        "Anhaltende Muster (über Monate, nicht Tage) einer spezifischen Schwierigkeit in einem Bereich sollten formell gemeldet werden.",
      ]},
    ]},
  },
  nl: {
    tdah: { sections: [
      { items: [
        "Moeite om de aandacht bij lange taken vast te houden; raakt de draad kwijt bij instructies met meerdere stappen.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Voortdurend in beweging — blijft niet zitten, friemelt met de handen, staat zonder duidelijke reden op.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Antwoordt voordat de vraag af is; onderbreekt klasgenoten en de leerkracht.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vergeet materialen, deadlines en enkele minuten geleden mondeling gegeven instructies — het werkgeheugen is overbelast.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kan hyperfocussen op wat hem of haar interesseert, waardoor de (verkeerde) indruk ontstaat dat hij of zij „het kan als hij of zij wil”; in werkelijkheid wisselt de prestatie met interesse en beloning.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Het is geen</strong> slechte manieren, luiheid of karakterfout: deze misvattingen stigmatiseren en vertragen de ondersteuning.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Het is niet</strong> altijd zichtbare hyperactiviteit — er bestaat een overwegend onoplettende verschijningsvorm, die vaker bij meisjes voorkomt en vaak ondergediagnosticeerd is.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Het wordt niet opgelost</strong> met „meer je best doen”: de moeilijkheid ligt in de neurologische zelfregulatie, niet in de wil.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Instructies opdelen: één voor één, schriftelijk op het bord, met een vastgestelde tijd — dit vermindert de belasting van het werkgeheugen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Legitieme beweging toestaan (materialen uitdelen, het bord uitvegen, boodschappen doen).",
        "Concurrerende prikkels verminderen (een plaats ver van het raam, van de deur, van de luidruchtigste groep).",
        "Onmiddellijke en frequente positieve bekrachtiging: bij ADHD is de beloningsgevoeligheid veranderd (afkeer van uitstel), waardoor onmiddellijke beloningen beter werken dan uitgestelde.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Beginnen met wat de leerling goed doet — het gesprek mag niet beginnen met een lijst klachten, anders sluit de ouder of verzorger zich defensief af.",
        "Waargenomen gedrag beschrijven, geen diagnoses: „wanneer er meer dan twee stappen na elkaar komen, raakt hij of zij de draad kwijt” in plaats van „heeft ADHD”.",
        "Anticiperen op de reactie „thuis is dat niet zo” — uitleggen dat de groepscontext en de eis van langdurige aandacht in de klas de symptomen zichtbaarder maken.",
        "Als u een onderzoek voorstelt, presenteer het dan als een hulpmiddel, niet als een straf: „er is ondersteuning die hem of haar veel kan helpen” in plaats van „moet onderzocht worden”.",
      ]},
      { items: [
        "Aanhoudend overtreden van regels ondanks aanpassingen in de klas.",
        "Tekenen van sociale uitsluiting door leeftijdsgenoten.",
        "Tekenen van comorbiditeit (angst, depressie, oppositioneel-opstandige gedragsstoornis) — vaak bij ADHD en een reden voor doorverwijzing.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Leest langzaam en met moeite, met fouten bij het lezen van losse woorden, zelfs bij teksten die het kind goed begrijpt wanneer ze worden voorgelezen.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Het omdraaien van letters (b/d, p/q) komt bij alle kinderen voor die beginnen te schrijven en is op zichzelf geen teken van dyslexie; de centrale moeilijkheid is <strong>fonologisch</strong> — letters aan klanken koppelen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Hardnekkige spelfouten die niet reageren op herhaalde correctie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Heeft de neiging om hardop lezen te vermijden; dit kan op desinteresse lijken, terwijl het in werkelijkheid een beschermingsstrategie is.",
        "Het luisterbegrip is duidelijk beter dan het leesbegrip — de moeilijkheid is specifiek en geen algemene cognitieve beperking.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Het is geen</strong> gebrek aan intelligentie: per definitie is dyslexie onverwacht gezien de overige cognitieve vermogens van de leerling.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Het is geen</strong> zichtprobleem en evenmin een simpel ‘letters verwisselen’: het centrale tekort ligt in de fonologische verwerking.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Het is niet te ‘genezen’</strong>, maar een gestructureerde interventie gericht op het fonologisch bewustzijn en het decoderen verbetert het lezen op consistente wijze.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vergroot de afstand tussen letters en regels: er is experimenteel bewijs dat een grotere afstand het lezen van kinderen met dyslexie verbetert, zonder voorafgaande training.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Het bewijs voor specifieke lettertypen ‘voor dyslectici’ is daarentegen zwakker en inconsistenter.",
        "Sta stil lezen toe vóór elk hardop lezen — vraag nooit onverwacht om voor te lezen.",
        "Wanneer het doel niet is om het schrijven te beoordelen, beoordeel de inhoud dan los van de spelling.",
        "Bied dezelfde informatie aan in verschillende vormen (audio, video, schema's).",
      ]},
      { items: [
        "Maak vanaf het begin expliciet onderscheid tussen lezen en intelligentie: ‘hij begrijpt het heel goed wanneer hij luistert — de moeilijkheid is specifiek voor het lezen’.",
        "Houd er rekening mee dat dyslexie een sterke erfelijke component heeft: een van de ouders kan een niet-gediagnosticeerde dyslexie hebben, en het gesprek kan moeilijke herinneringen aan de eigen schooltijd oproepen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vermijd het tonen van werkbladen vol rode correcties zonder context — laat eerst zien wat de leerling al kan.",
        "Wees concreet over de aanpassingen die al lopen en die welke de ouder/verzorger thuis kan overnemen: teksten als audio, hardop lezen zonder tijdsdruk.",
      ]},
      { items: [
        "Verslechterend academisch zelfbeeld (‘ik ben dom’, ‘ik kan het niet’).",
        "Systematisch vermijden van lees-/schrijftaken tot het punt dat andere vakken eronder lijden.",
        "Duidelijke discrepantie tussen mondelinge en schriftelijke prestaties zonder formele diagnose — doorverwijzen voor psychopedagogisch onderzoek.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Moeite met niet-aangekondigde veranderingen – wijziging van het rooster, van lokaal, een vervangende leerkracht.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Letterlijke communicatie – nuances, ironie en uitdrukkingen gaan verloren.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensorische gevoeligheid – tl-licht, achtergrondgeluid en kledinglabels kunnen ondraaglijk zijn.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Gerichte en diepgaande interesses in specifieke onderwerpen – verbonden met een detailgerichte cognitieve stijl.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Kan ongeïnteresseerd of afstandelijk lijken wanneer het overprikkeld is, niet afgehaakt.",
      ]},
      { items: [
        "<strong>Het is geen</strong> lineaire schaal („meer“ of „minder“ autistisch) – het is een multidimensionaal profiel, met verschillende ondersteuningsbehoeften per domein.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Het is geen</strong> gebrek aan empathie: de moeilijkheden in het wederzijds begrip zijn tweerichtingsverkeer – ook niet-autistische mensen hebben moeite om autistische mensen te begrijpen (het „dubbele-empathieprobleem“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Het is geen</strong> wangedrag wanneer een routine wordt doorbroken – het is een reële neurologische reactie op het verlies van voorspelbaarheid.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Elke verandering in de routine van tevoren aankondigen, ook als ze schijnbaar onbeduidend is – visuele ondersteuning en anticipatie zijn empirisch onderbouwd.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Impliciete sociale regels omzetten in expliciete regels (wat je doet, wat je niet doet, wanneer).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Indien nodig sensorische pauzes in een rustige ruimte toestaan.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "De gerichte interesse benutten als ingang voor curriculuminhoud – een kracht, geen afleiding.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Als de diagnose al bestaat, eerst vragen wat de ouder/verzorger weet dat werkt – ouders van autistische kinderen weten vaak meer over hun kind dan welk rapport ook.",
        "Als er geen diagnose is, zeer voorzichtig zijn: concrete situaties beschrijven zonder in een eerste gesprek ooit het woord „autisme“ te gebruiken – „wanneer de routine zonder waarschuwing verandert, raakt uw kind erg van streek op een manier die verder gaat dan gebruikelijk“.",
        "De inzet van de ouder/verzorger erkennen – thuis structuur en voorspelbaarheid creëren is veeleisend, en dat erkennen schept een bondgenootschap.",
        "Nooit vergelijken met „andere leerlingen“ of met broers en zussen – elk profiel binnen het spectrum is anders en vergelijken werkt altijd averechts.",
      ]},
      { items: [
        "Frequente crises („meltdowns“) na de schooldag.",
        "Aanhoudende schoolweigering in verband met sensorische overbelasting.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Voortschrijdend sociaal isolement ondanks pogingen tot bemiddeling.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Het handschrift is moeizaam, traag en vaak onleesbaar – door een echte motorische moeilijkheid, niet door slordigheid.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Moeite met de ruimtelijke ordening van het schrift, met het beheer van materialen en met stappenreeksen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kan ‘onhandig’ lijken – morst drankjes, stoot tegen meubels, heeft moeite met sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Onevenredige vermoeidheid na taken die een aanhoudende fijnmotorische coördinatie vereisen.",
        "De cognitieve component is doorgaans intact – vandaar de veelvuldige frustratie tussen het weten en het kunnen tonen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Het is geen</strong> luiheid of gebrek aan inzet.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Het is niet</strong> alleen een slecht handschrift: de klinische term is Developmental Coordination Disorder (DCD) en het treft de motorische planning en sequencing, niet alleen het schrijven.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Het wordt niet opgelost</strong> met ‘meer schrijven oefenen’: een doeltreffende interventie is taakgericht, geen mechanische herhaling.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Het gebruik van toetsenbord/tablet toestaan bij uitgebreide schrijfopdrachten.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Het mechanisch overschrijven van het bord beperken – notities verstrekken wanneer relevant.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Expliciete checklists bieden voor taken met meerdere stappen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Het product beoordelen op de inhoud, niet op de fysieke presentatie.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Leg in eenvoudige taal uit wat dyspraxie is – de meeste ouders/verzorgers hebben de term nog nooit gehoord: ‘het is een neurologische moeilijkheid in de coördinatie van bewegingen, geen slordigheid en geen gebrek aan inspanning’.",
        "Het onleesbare handschrift is het grootste wrijvingspunt met ouders/verzorgers – laten zien dat de beoordeling nu de inhoud waardeert en niet de vorm, helpt de angst aan beide kanten te verlichten.",
        "Stel praktische hulpmiddelen voor thuis voor: spraakdictee op de telefoon voor notities, een toetsenbord voor uitgebreide schrijfopdrachten.",
        "Als er in voorgaande jaren een geschiedenis is van ‘hij/zij is lui’ of ‘doet geen moeite’, benoem dat dan rechtstreeks: ‘ik weet dat u dit al eerder hebt gehoord – mijn beeld is anders’.",
      ]},
      { items: [
        "Volledige weigering van schriftelijk werk.",
        "Sociaal isolement in contexten van lichamelijke activiteit.",
        "Tekenen van gesomatiseerde angst vóór schriftelijke toetsen – het psychosociale lijden maakt deel uit van het beeld.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Maakt de taken in enkele minuten af, terwijl de klas er de hele les over doet.",
        "Stelt vragen die buiten de leerstof vallen — of daagt actief uit wat er wordt onderwezen.",
        "Kan ongeïnteresseerd, ongedisciplineerd of apathisch lijken — vaak tekenen van chronische verveling en van onderpresteren.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sterk uitgesproken emotionele gevoeligheid; kan angstig of perfectionistisch zijn — psychosociale factoren zijn bepalend voor talentontwikkeling.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reëel risico op onderpresteren — kan leren de eigen capaciteit te verbergen om sociaal niet op te vallen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Is niet</strong> synoniem met goed gedrag of goede resultaten — veel hoogbegaafde leerlingen presteren middelmatig uit desinteresse.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Is niet</strong> „heeft geen hulp nodig“: het kind heeft andere uitdagingen nodig, want capaciteit wordt pas prestatie wanneer ze doelbewust wordt ontwikkeld.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Is niet</strong> onverenigbaar met neurodivergentie — dubbel uitzonderlijk zijn (2e) bestaat, komt vaak voor en wordt vaak gemaskeerd.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Altijd verdiepingstaken klaar hebben — niet meer van hetzelfde, maar diepere of toegepaste leerstof.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Zelfstandig onderzoek toestaan naar onderwerpen die de leerling interesseren binnen het lesprogramma.",
        "Beoordelen op uitdaging, niet op gemak — veeleisender werk vragen in ruil voor minder volume.",
        "De emotionele gevoeligheid erkennen en valideren zonder ze te pathologiseren.",
      ]},
      { items: [
        "De trots anticiperen en ombuigen: „Het kind is duidelijk zeer begaafd — en juist daarom zorgt de verveling voor problemen.“",
        "De paradox van hoogbegaafdheid uitleggen: goede resultaten betekenen niet dat het goed gaat, en onderpresteren uit desinteresse is gangbaar en omkeerbaar.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Als de leerling de eigen capaciteit verbergt om sociaal mee te draaien, dit voorzichtig benoemen — het is een teken van lijden, niet van bescheidenheid.",
        "De ouders voorstellen om thuis het proces te waarderen in plaats van het resultaat: nieuwsgierigheid, diepgang en moeilijke vragen wegen zwaarder dan hoge cijfers voor makkelijke taken.",
      ]},
      { items: [
        "Tekenen van angst of depressie die samenhangen met extreem perfectionisme.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Uitgesproken sociaal isolement, gekenmerkt door het gevoel „anders“ te zijn dan leeftijdsgenoten.",
        "Plotseling academisch onderpresteren bij een leerling die eerder als begaafd was geïdentificeerd.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Begrijpt veel minder dan het lijkt – de omgangstaal ontwikkelt zich veel eerder dan de schooltaal, waardoor een leerling vloeiend kan lijken zonder de lesinhoud te kunnen volgen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ogenschijnlijk zwakke schoolprestaties, vaak niet in verhouding tot de werkelijke capaciteiten.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Stilte in de klas – dit kan een normale ‘stille periode’ zijn bij het verwerven van een tweede taal, en geen desinteresse.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kan aan het einde van de dag uitgeput zijn door het in real time verwerken van de taal.",
        "Risico op onderdiagnose van werkelijke onderwijsbehoeften (dyslexie, ADHD) doordat alles aan de taalbarrière wordt toegeschreven.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Het is geen</strong> gebrek aan intelligentie of vermogen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Het is niet</strong> alleen een kwestie van tijd: de schooltaal heeft jaren nodig om zich te ontwikkelen, en zonder gerichte ondersteuning blijven veel leerlingen op een laag functioneel niveau steken.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Het is niet op te lossen</strong> met automatische vertaling tijdens de les – het is een proces van jaren, en de moedertaal is een hulpbron, geen obstakel.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Materiaal aanbieden met de kernwoordenschat vertaald naar de moedertaal.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "De kennis waar mogelijk toetsen via visuele of praktische demonstratie.",
        "Koppelen aan een tweetalige medeleerling voor informele bemiddeling op cruciale momenten.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Eerste taaluitingen met grammaticale fouten accepteren – in de eerste fase de inhoud corrigeren, niet de vorm.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Het gesprek zelf is een barrière – de ouders of verzorgers beheersen het Nederlands mogelijk onvoldoende voor een complex gesprek. Bereid vooraf eenvoudig schriftelijk materiaal voor, of vraag om vertaalondersteuning.",
        "Ga er niet van uit dat de ouders of verzorgers het Nederlandse onderwijssysteem kennen – leg uit wat de intern begeleider doet, wat een ondersteuningsmaatregel inhoudt en wat een onderzoek met zich meebrengt, zonder iets als vanzelfsprekend te beschouwen.",
        "Maak een duidelijk onderscheid tussen taalbarrière en schoolse capaciteit: ‘uw kind is capabel – het leert de taal tegelijk met de inhoud, wat zeer veeleisend is’.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Wees gevoelig voor de migratiecontext: gevluchte gezinnen of gezinnen zonder verblijfsstatus kunnen wantrouwen koesteren tegenover instellingen. Bouw vertrouwen op voordat u documenten of doorverwijzingen vraagt.",
      ]},
      { items: [
        "Tekenen van sociaal isolement of pesten die samenhangen met de status van buitenlandse leerling.",
        "Stagnatie in de taalverwerving na het eerste jaar.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tekenen van trauma die samenhangen met de migratiecontext (in het bijzonder bij vluchtelingen).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Gegevens van minderjarigen zijn onderworpen aan verhoogde bescherming (art. 8 AVG). Toestemming van de wettelijke vertegenwoordigers is verplicht.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Controleer waar het hulpmiddel gegevens opslaat – op Europese of niet-Europese servers, geanonimiseerd of niet.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Voer nooit volledige namen, adressen, identificatienummers of klinische diagnoses in generatieve AI-hulpmiddelen in.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Maak onderscheid tussen institutioneel gebruik (de school sluit een contract af) en persoonlijk gebruik door de docent (individuele verantwoordelijkheid).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systemen die hoofdzakelijk met Engelstalige gegevens zijn getraind, kunnen slechter presteren in het Nederlands en in Nederlandstalige contexten.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatische aanbevelingen kunnen stereotypen over gender, etniciteit of klasse versterken – beoordeel ze kritisch.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modellen voor het „voorspellen van academisch risico” zijn bijzonder problematisch – vaak reproduceren ze bestaande ongelijkheden in plaats van behoeften te identificeren.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Het doel is de autonomie van de leerling te vergroten, niet om het cognitieve werk te vervangen dat die autonomie ontwikkelt.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Maak onderscheid tussen een <strong>toegangshulpmiddel</strong> (text-to-speech voor een leerling met dyslexie) en een <strong>vervangingshulpmiddel</strong> (ChatGPT die het opstel schrijft).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evalueer regelmatig: ontwikkelt de leerling competentie, of ontwikkelt hij of zij afhankelijkheid van het hulpmiddel?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Lost het hulpmiddel een reële barrière op of creëert het een sluiproute die het leren omzeilt?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Zijn de ingevoerde gegevens beschermd en is er toestemming?",
        "<strong>3.</strong> Wordt het resultaat van het hulpmiddel door een mens gecontroleerd voordat het de leerling bereikt?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Bestaat er een alternatief zonder AI dat even goed werkt?",
        "<strong>5.</strong> Als het hulpmiddel morgen zou verdwijnen, staat de leerling er dan hulpeloos voor?",
      ]},
    ],
    references: [
      "Europese Unie. (2016). <em>Verordening (EU) 2016/679 (Algemene verordening gegevensbescherming)</em>, art. 8. Publicatieblad van de Europese Unie, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Collega’s in staat stellen om AI op een verantwoorde manier te integreren in het vreemdetalenonderwijs, met de productie van materiaal dat aan te passen is aan uiteenlopende leerprofielen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Dit is geen presentatie – het is een co-creatie. Elke deelnemer gaat naar huis met minstens één kant-en-klare bron om uit te proberen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min.:</strong> Kadering – het probleem van de heterogene klas en waarom meer van hetzelfde niet werkt.",
        "<strong>10–25 min.:</strong> Profielenkaart – presentatie van de zes Farol-kaarten, met echte (geanonimiseerde) gevallen.",
        "<strong>25–45 min.:</strong> Praktische demonstratie – drie tools, drie gebruiksscenario’s, drie verschillende profielen.",
        "<strong>45–75 min.:</strong> Werken in tweetallen – elk tweetal past bestaand materiaal aan voor een specifiek profiel.",
        "<strong>75–85 min.:</strong> Snelle uitwisseling – elk tweetal toont zijn resultaat in 1 minuut.",
        "<strong>85–90 min.:</strong> Afspraken – elke deelnemer bepaalt een materiaal om uit te proberen en er wordt een feedbacksessie na 30 dagen ingepland.",
      ]},
      { items: [
        "Internettoegang en institutionele accounts voor de gedemonstreerde tools.",
        "Bestaand materiaal van elke deelnemer (een werkblad, een toets of een lesplan).",
        "Afgedrukte kaarten van de Farol-profielen om te raadplegen.",
      ]},
      { items: [
        "Elke deelnemer produceert tijdens de sessie minstens één aangepast materiaal.",
        "Feedbacksessie na 30 dagen waarbij minstens 60% van de deelnemers een daadwerkelijke toepassing rapporteert.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Minstens één materiaal dat tijdens de sessie is gemaakt, wordt overgenomen als gedeelde bron van de vakgroep.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Kernwet: Wet passend onderwijs (2014), elke school is verplicht een passend onderwijsaanbod te doen voor elke leerling.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Samenwerkingsverbanden passend onderwijs coördineren de extra ondersteuning in de regio.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zorgplicht: scholen zijn wettelijk verplicht een passende plek te vinden voor elke leerling, ook bij complexe ondersteuningsbehoeften.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Basisondersteuning: elke school biedt een basisniveau van ondersteuning zonder formele indicatie.",
        "Differentiëren en groepsplan aanpassen zijn onderdeel van goed regulier onderwijs.",
        "Geen formele indicatie nodig voor pedagogische differentiatie en aanpassingen in de klas.",
      ]},
      { items: [
        "Extra ondersteuning via het samenwerkingsverband: arrangement aanvragen bij de ondersteuningscoördinator.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ontwikkelingsperspectief (OPP): verplicht bij leerlingen die de referentieniveaus niet zullen halen; opgesteld met ouders/verzorgers.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Toelaatbaarheidsverklaring (TLV): nodig voor plaatsing in het speciaal basisonderwijs (SBO) of speciaal onderwijs (SO).<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "De schoolpsycholoog of zorgcoördinator begeleidt het doorverwijzingsproces.",
      ]},
      { items: [
        "Geen aparte wet voor hoogbegaafdheid in Nederland.",
        "Leonardo-scholen en plusklassen bieden verdieping en verrijking voor hoogbegaafde leerlingen.",
        "De SLO-richtlijnen (Informatiepunt Onderwijs & Talentontwikkeling) bieden handvatten voor begaafdheidsondersteuning.",
        "Compacten en verrijken zijn de gangbare aanpak; een klas overslaan (versnellen) is mogelijk met toestemming.",
      ]},
      { items: [
        "NT2 (Nederlands als Tweede Taal): Internationale Schakelklas (ISK) voor leerlingen van 12+ zonder Nederlands.",
        "Schakelklas in het basisonderwijs voor intensieve taalverwerving.",
        "Taaltoets bij aankomst voor plaatsing; DUO-registratie als nieuwkomer.",
        "NT2-docent verantwoordelijk voor taalondersteuning; school heeft zorgplicht ook voor nieuwkomers.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Wet passend onderwijs 2014<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Samenwerkingsverbanden passend onderwijs<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ontwikkelingsperspectief (OPP)<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zorgplicht school<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Toelaatbaarheidsverklaring (TLV) voor SBO/SO-plaatsing; gegevensbescherming volgens AVG en UAVG<sup class=\"cite\"><a href=\"#ref-3\">3</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Verdrag inzake de rechten van personen met een handicap</em> (VN-verdrag handicap / UNCRPD, 2006), door Nederland geratificeerd in 2016; artikel 24 erkent het recht op inclusief onderwijs.",
      "<em>Wet passend onderwijs</em> (Wet van 11 oktober 2012 tot wijziging van enkele onderwijswetten in verband met een herziening van de organisatie en financiering van de ondersteuning van leerlingen, in werking getreden op 1 augustus 2014); verankert de zorgplicht, de samenwerkingsverbanden en het ontwikkelingsperspectief (OPP).",
      "<em>Wet op het primair onderwijs (WPO)</em> en <em>Wet op de expertisecentra (WEC)</em>; regelen onder meer het speciaal basisonderwijs (SBO), het speciaal onderwijs (SO) en de toelaatbaarheidsverklaring (TLV).",
      "<em>Algemene verordening gegevensbescherming</em> (AVG / Verordening (EU) 2016/679) en de <em>Uitvoeringswet AVG (UAVG)</em> (van kracht sinds 25 mei 2018); van toepassing op alle persoonsgegevens van leerlingen.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagogische differentiatie betekent dat je aanpast hoe je lesgeeft — niet dat je de verwachtingen verlaagt. Het leerdoel kan voor iedereen hetzelfde zijn; het is de weg ernaartoe die verschilt.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Het UDL-model (Universal Design for Learning) gaat uit van drie principes: meerdere manieren van representatie (hoe de inhoud wordt gepresenteerd), meerdere manieren van actie en expressie (hoe de leerling reageert) en meerdere manieren van betrokkenheid (wat de leerling motiveert).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Differentiëren is niet voor elke leerling een eigen lesplan maken — het is genoeg flexibiliteit creëren zodat dezelfde les past bij verschillende profielen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Het is niet</strong> het leerprogramma versmallen voor de leerlingen die het moeilijker hebben.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Het is niet</strong> verschillende leerlingen altijd verschillende taken geven — dat isoleert en plakt etiketten.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Het is niet</strong> alleen gedifferentieerd werk op papier — differentiatie omvat ook hoe de leerkracht uitlegt, vraagt en beoordeelt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Gestuurde keuze: 2–3 opties voor het antwoordformaat aanbieden (geschreven tekst, mondeling, schematische tekening) — iedereen werkt aan dezelfde inhoud.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Steigerbouw (scaffolding): leerlingen die het moeilijker hebben een gestructureerd stappenplan geven; het stappenplan geleidelijk weghalen naarmate de zelfstandigheid groeit.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Flexibel groeperen: groepen op interesse, op beheersingsniveau of gemengd — rouleren om vaste groepen te vermijden die identiteiten worden.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Tijdsaanpassingen: meer tijd betekent niet minder strengheid. Voor leerlingen met ADHD of dyspraxie de taak opdelen in segmenten met geplande pauzes.",
        "Complexiteitsniveau: voor hetzelfde onderwerp versies maken met meer of minder talige ondersteuning, met of zonder voorbeelden, met of zonder visuele aanwijzingen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Beoordeel wat de leerling weet, niet hoe hij of zij schrijft. Een leerling met dyslexie kan conceptuele beheersing mondeling of met technologische ondersteuning aantonen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Duidelijke rubrieken die vóór de taak worden gedeeld, laten de leerling weten wat er wordt verwacht, ongeacht het gekozen formaat.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Een portfolio of een op bewijs gebaseerde beoordeling laat de leerling vooruitgang tonen in de loop van de tijd, en niet alleen op één toetsmoment.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Wanneer differentiatie in de klas niet langer volstaat en de leerling nog steeds geen toegang krijgt tot het leerprogramma, is dat een teken dat gespecialiseerde ondersteuning nodig kan zijn.",
        "Differentiatie vervangt de ondersteuningsmaatregelen van de school niet (SPO, therapeuten, speciaal onderwijs) — het is wat aanvullend in de reguliere klas gebeurt.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatieve toetsing is elke werkwijze die tijdens het proces informatie over het leren verzamelt – en die informatie gebruikt om het onderwijs of de ondersteuning van de leerling bij te sturen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Anders dan summatieve toetsing (eindcijfers) hoeft formatieve toetsing geen cijfer te hebben – ze moet feedback hebben.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Voor neurodivergente leerlingen is formatieve toetsing bijzonder belangrijk, omdat de prestatie op een eenmalige toets mogelijk niet weergeeft wat ze werkelijk weten.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: aan het einde van de les beantwoordt de leerling in 2 minuten een vraag – de docent ziet meteen wie het begrepen heeft en wie niet.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Stoplicht</strong>: groen (begrepen), geel (ik heb twijfels), rood (niet begrepen) – dit kunnen fysieke kaartjes, post-its of een digitale variant zijn.",
        "<strong>Think-Pair-Share</strong>: de leerling denkt eerst individueel na, bespreekt het daarna met een maatje en deelt het vervolgens met de klas – dit vermindert de angst om direct te antwoorden.",
        "<strong>Uitgangsdeur</strong>: voordat de leerling vertrekt, noemt hij de docent één ding dat hij geleerd heeft en één vraag die hij nog heeft.",
      ]},
      { items: [
        "Effectieve feedback is specifiek, uitvoerbaar en op tijd gegeven: ‘op pagina 2 gaat het argument verloren omdat de koppeling naar het bewijs ontbreekt’ is nuttig; ‘het kon beter’ is dat niet.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Voor leerlingen met ADHD: directe feedback is effectiever dan uitgestelde feedback. Niet wachten tot het einde van de taak.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Voor leerlingen met dyslexie: mondelinge of audio-feedback kan toegankelijker zijn dan uitgebreide schriftelijke opmerkingen.",
        "Vermijd leerlingen onderling te vergelijken – vergelijk de leerling met zijn eigen eerdere voortgang.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: toetsing op meerdere korte momenten in plaats van één lange toets. Afleidende prikkels in de toetsomgeving verminderen.",
        "Dyslexie: mondelinge antwoorden, extra tijd of het gebruik van tekst-naar-spraak toestaan. Beoordeel de inhoud, niet de spelling.",
        "Autisme: toetsen met duidelijke, ondubbelzinnige schriftelijke instructies. Wijzigingen in het format ruim van tevoren aankondigen.",
        "Hoogbegaafdheid: vermijd toetsen die louter inhoud reproduceren – neem vragen op die analyse, synthese en creatie vragen.",
      ]},
      { items: [
        "Wanneer een leerling, zelfs met aangepaste toetsing, zijn leren niet kan laten zien, is dat een teken dat er mogelijk een diepere barrière is die samen met de SPO (schoolbegeleidingsdienst) onderzocht moet worden.",
        "Aanhoudende patronen (maanden, geen dagen) van een specifieke moeilijkheid op een bepaald gebied moeten formeel worden gesignaleerd.",
      ]},
    ]},
  },
  pl: {
    tdah: { sections: [
      { items: [
        "Trudność z utrzymaniem uwagi przy długich zadaniach; gubi się w instrukcjach złożonych z wielu kroków.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Ciągły ruch — nie siedzi spokojnie, bawi się rękami, wstaje bez wyraźnego powodu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Odpowiada, zanim pytanie się skończy; przerywa kolegom i nauczycielowi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zapomina materiały, terminy i polecenia podane ustnie kilka minut wcześniej — pamięć robocza jest przeciążona.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Może hiperskupiać się na tym, co go interesuje, sprawiając (mylne) wrażenie, że „potrafi, kiedy chce”; w rzeczywistości wykonanie zadań zależy od zainteresowania i nagrody.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Nie jest</strong> to złe wychowanie, lenistwo ani brak charakteru: te błędne przekonania stygmatyzują i opóźniają wsparcie.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie zawsze</strong> jest to widoczna nadpobudliwość — istnieje postać z przewagą zaburzeń uwagi, częstsza u dziewcząt i często niedodiagnozowana.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Nie da się tego rozwiązać</strong> przez „większy wysiłek”: trudność tkwi w neurologicznej samoregulacji, a nie w woli.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Dzielenie instrukcji na części: po jednej naraz, zapisane na tablicy, z określonym czasem — zmniejsza to obciążenie pamięci roboczej.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Umożliwienie uprawnionego ruchu (rozdawanie materiałów, wycieranie tablicy, dostarczanie wiadomości).",
        "Ograniczenie konkurencyjnych bodźców (miejsce z dala od okna, drzwi i najgłośniejszej grupy).",
        "Natychmiastowe i częste pozytywne wzmocnienie: w ADHD wrażliwość na nagrodę jest zmieniona (awersja do oczekiwania), dlatego nagrody natychmiastowe działają lepiej niż odroczone.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Zacznij od tego, co uczeń robi dobrze — spotkanie nie może rozpoczynać się od listy skarg, bo rodzic zamknie się w obronnej postawie.",
        "Opisuj zaobserwowane zachowania, a nie diagnozy: „gdy otrzymuje więcej niż dwa polecenia z rzędu, gubi wątek” zamiast „ma ADHD”.",
        "Przewiduj reakcję „w domu tak nie jest” — wyjaśnij, że kontekst grupowy i wymóg długotrwałej uwagi w klasie sprawiają, że objawy są bardziej widoczne.",
        "Jeśli proponujesz ocenę specjalistyczną, przedstaw ją jako wsparcie, a nie karę: „jest pomoc, która może mu/jej bardzo pomóc” zamiast „musi zostać zbadany/a”.",
      ]},
      { items: [
        "Utrzymujące się trudności z dyscypliną mimo dostosowań w klasie.",
        "Oznaki wykluczenia społecznego przez rówieśników.",
        "Oznaki współwystępujących zaburzeń (lęk, depresja, zaburzenie opozycyjno-buntownicze) — częste w ADHD i uzasadniające skierowanie.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Czyta wolno i z wysiłkiem, popełniając błędy w odczytywaniu pojedynczych słów, nawet w tekstach, które dobrze rozumie ze słuchu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Mylenie liter (b/d, p/q) jest powszechne u wszystkich dzieci rozpoczynających naukę pisania i samo w sobie nie jest oznaką dysleksji; główna trudność ma charakter <strong>fonologiczny</strong> — polega na kojarzeniu liter z dźwiękami.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Uporczywe błędy ortograficzne, które nie ustępują mimo wielokrotnej korekty.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ma tendencję do unikania czytania na głos; może to sprawiać wrażenie braku zainteresowania, gdy w rzeczywistości jest strategią obronną.",
        "Rozumienie ze słuchu wyraźnie lepsze niż rozumienie czytanego tekstu — trudność jest specyficzna, a nie ogólnym ograniczeniem poznawczym.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>To nie jest</strong> brak inteligencji: z definicji dysleksja jest nieoczekiwana w zestawieniu z pozostałymi zdolnościami poznawczymi ucznia.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>To nie jest</strong> problem ze wzrokiem ani zwykłe „mylenie liter”: główny deficyt leży w przetwarzaniu fonologicznym.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie da się tego „wyleczyć”</strong>, ale ustrukturyzowana praca nad świadomością fonologiczną i dekodowaniem konsekwentnie poprawia czytanie.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Zwiększenie odstępów między literami i wierszami: istnieją dowody eksperymentalne, że zwiększony odstęp poprawia czytanie u dzieci z dysleksją, bez wcześniejszego treningu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Dowody na skuteczność konkretnych krojów pisma „dla dyslektyków” są natomiast słabsze i niespójne.",
        "Umożliwienie cichego czytania przed jakimkolwiek czytaniem na głos — nigdy nie prosić o czytanie z zaskoczenia.",
        "Gdy celem nie jest ocena pisania, oceniać treść oddzielnie od ortografii.",
        "Przekazywanie tych samych informacji w różnych formatach (audio, wideo, schematy).",
      ]},
      { items: [
        "Wyraźne oddzielenie czytania od inteligencji już na samym początku: „bardzo dobrze rozumie ze słuchu — trudność dotyczy konkretnie czytania”.",
        "Pamiętanie, że dysleksja ma silny komponent dziedziczny: jedno z rodziców może mieć niezdiagnozowaną dysleksję, a rozmowa może ożywić trudne wspomnienia z własnej edukacji.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Unikanie pokazywania kartek pełnych poprawek na czerwono bez kontekstu — przedstawić najpierw to, co uczeń już potrafi.",
        "Konkretne wskazanie już wprowadzonych dostosowań oraz tych, które opiekun może powielić w domu: teksty w wersji audio, czytanie na głos bez presji czasu.",
      ]},
      { items: [
        "Pogarszający się obraz samego siebie w sferze szkolnej („jestem głupi”, „nie dam rady”).",
        "Systematyczne unikanie zadań związanych z czytaniem/pisaniem do tego stopnia, że odbija się to na innych przedmiotach.",
        "Wyraźna rozbieżność między wynikami ustnymi a pisemnymi bez formalnej diagnozy — skierować na ocenę psychopedagogiczną.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Trudność z niezapowiedzianymi zmianami — zmiana planu lekcji, sali, nauczyciela na zastępstwie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Komunikacja dosłowna — umykają niuanse, ironia, wyrażenia idiomatyczne.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Wrażliwość sensoryczna — światło jarzeniowe, hałas w tle, metki przy ubraniach mogą być nie do zniesienia.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Skupione i głębokie zainteresowania konkretnymi tematami — powiązane ze stylem poznawczym zorientowanym na szczegóły.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Może sprawiać wrażenie niezainteresowanego lub nieobecnego, gdy jest przeciążony, a nie wyłączony.",
      ]},
      { items: [
        "<strong>Nie jest</strong> skalą liniową („bardziej” lub „mniej” autystyczny) — to profil wielowymiarowy, z odmiennym profilem wsparcia w każdym obszarze.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nie jest</strong> brakiem empatii: trudności we wzajemnym zrozumieniu są dwukierunkowe — także osobom nieautystycznym trudno odczytać osoby autystyczne („problem podwójnej empatii”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie jest</strong> złym zachowaniem, gdy rutyna zostaje przerwana — to rzeczywista reakcja neurologiczna na utratę przewidywalności.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Uprzedzaj z wyprzedzeniem o każdej zmianie rutyny, nawet pozornie błahej — wsparcie wizualne i antycypacja mają potwierdzenie empiryczne.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Zamieniaj niejawne reguły społeczne na reguły jawne (co się robi, czego się nie robi, kiedy).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Pozwalaj na przerwy sensoryczne w cichym miejscu, gdy to konieczne.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Wykorzystuj skupione zainteresowanie jako punkt wejścia do treści programowych — to siła, a nie rozproszenie.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Jeśli diagnoza już istnieje, zapytaj najpierw, co według opiekuna się sprawdza — rodzice dzieci autystycznych często wiedzą o swoim dziecku więcej niż jakikolwiek raport.",
        "Jeśli diagnozy nie ma, zachowaj dużą ostrożność: opisuj konkretne sytuacje, nie używając nigdy słowa „autyzm” podczas pierwszego spotkania — „gdy rutyna zmienia się bez zapowiedzi, Pani/Pana dziecko bardzo się denerwuje w sposób wykraczający poza typowy”.",
        "Doceniaj wysiłek opiekuna — tworzenie struktury i przewidywalności w domu jest wymagające, a uznanie tego buduje sojusz.",
        "Nigdy nie porównuj z „innymi uczniami” ani z rodzeństwem — każdy profil w spektrum jest inny, a porównywanie zawsze przynosi efekt odwrotny do zamierzonego.",
      ]},
      { items: [
        "Częste kryzysy („meltdowny”) po dniu szkolnym.",
        "Uporczywa odmowa chodzenia do szkoły związana z przeciążeniem sensorycznym.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Postępująca izolacja społeczna mimo prób mediacji.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Pismo odręczne trudne, powolne i często nieczytelne — z powodu rzeczywistej trudności motorycznej, a nie niedbalstwa.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Trudność w przestrzennej organizacji zeszytu, w zarządzaniu materiałami oraz w sekwencjach kroków.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Może sprawiać wrażenie „niezdarnego” — rozlewa napoje, wpada na meble, ma trudności w sporcie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nieproporcjonalne zmęczenie po zadaniach wymagających długotrwałej precyzyjnej koordynacji.",
        "Sfera poznawcza jest zazwyczaj zachowana — stąd częsta frustracja między wiedzą a możliwością jej okazania.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>To nie</strong> lenistwo ani brak zaangażowania.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>To nie</strong> tylko brzydki charakter pisma: termin kliniczny to rozwojowe zaburzenie koordynacji (DCD) i dotyczy ono planowania oraz sekwencjonowania ruchowego, a nie tylko pisania.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie rozwiązuje się</strong> tego przez „więcej ćwiczenia pisania”: skuteczna interwencja jest ukierunkowana na zadanie, a nie na mechaniczne powtarzanie.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Pozwalać na korzystanie z klawiatury/tabletu przy obszerniejszych pracach pisemnych.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ograniczać mechaniczne przepisywanie z tablicy — udostępniać notatki, gdy to istotne.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Dostarczać jasnych list kontrolnych do zadań wieloetapowych.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Oceniać efekt według treści, a nie według fizycznej prezentacji.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Wyjaśnić, czym jest dyspraksja, prostym językiem — większość rodziców nigdy nie słyszała tego terminu: „to neurologiczna trudność w koordynacji ruchów, a nie niedbalstwo ani brak wysiłku”.",
        "Nieczytelne pismo jest punktem największego napięcia z rodzicami — pokazanie, że ocena zaczęła doceniać treść, a nie formę, pomaga złagodzić niepokój po obu stronach.",
        "Sugerować praktyczne narzędzia do domu: dyktowanie głosowe w telefonie do robienia notatek, klawiaturę do obszernych prac pisemnych.",
        "Jeśli w poprzednich latach pojawiały się określenia „jest leniwy/a” lub „nie stara się”, nazwać to wprost: „wiem, że słyszał(a) pan(i) to już wcześniej — moja interpretacja jest inna”.",
      ]},
      { items: [
        "Całkowita odmowa wykonywania prac pisemnych.",
        "Izolacja społeczna w kontekstach aktywności fizycznej.",
        "Objawy somatyzowanego lęku przed sprawdzianami pisemnymi — cierpienie psychospołeczne jest częścią obrazu klinicznego.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Kończy zadania w kilka minut, podczas gdy reszta klasy potrzebuje całej lekcji.",
        "Zadaje pytania wykraczające poza zakres materiału — albo aktywnie kwestionuje to, czego się go uczy.",
        "Może sprawiać wrażenie braku zainteresowania, niezdyscyplinowania lub apatii — często są to oznaki chronicznej nudy i niewykorzystywania potencjału.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Wyraźna wrażliwość emocjonalna; może być lękliwy lub perfekcjonistyczny — czynniki psychospołeczne mają decydujące znaczenie w rozwijaniu talentu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Realne ryzyko niewykorzystywania potencjału — może nauczyć się ukrywać swoje zdolności, aby nie wyróżniać się społecznie.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Nie jest</strong> tożsama z dobrym zachowaniem ani z dobrymi wynikami — wielu uczniów zdolnych osiąga przeciętne wyniki z powodu braku zainteresowania.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nie oznacza</strong> „nie potrzebuje pomocy”: uczeń potrzebuje innych wyzwań, ponieważ zdolności przekładają się na osiągnięcia tylko wtedy, gdy są celowo rozwijane.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nie jest</strong> niemożliwa do pogodzenia z neuroróżnorodnością — podwójna wyjątkowość (2e) istnieje, jest częsta i bywa często maskowana.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Zawsze mieć przygotowane zadania rozszerzające — nie więcej tego samego, lecz materiał głębszy lub bardziej praktyczny.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Pozwalać na samodzielne badanie tematów interesujących ucznia w ramach programu nauczania.",
        "Oceniać według poziomu wyzwania, a nie łatwości — wymagać trudniejszych prac w zamian za ich mniejszą liczbę.",
        "Dostrzegać i uznawać wrażliwość emocjonalną, nie patologizując jej.",
      ]},
      { items: [
        "Uprzedzić dumę i przekierować ją: „jest wyraźnie bardzo zdolny — i właśnie dlatego nuda zaczyna powodować problemy”.",
        "Wyjaśnić paradoks zdolności: dobre wyniki nie oznaczają, że wszystko jest w porządku, a niewykorzystywanie potencjału z powodu braku zainteresowania jest powszechne i odwracalne.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Jeśli uczeń ukrywa swoje zdolności, by zintegrować się społecznie, nazwać to z wyczuciem — to oznaka cierpienia, a nie skromności.",
        "Zaproponować rodzicom, by w domu doceniali proces, a nie wynik: ciekawość, dociekliwość i trudne pytania są warte więcej niż wysokie oceny za łatwe zadania.",
      ]},
      { items: [
        "Oznaki lęku lub depresji związane ze skrajnym perfekcjonizmem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Wyraźna izolacja społeczna wynikająca z poczucia bycia „innym” niż rówieśnicy.",
        "Nagłe pogorszenie wyników w nauce u ucznia wcześniej zidentyfikowanego jako zdolny.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Rozumie znacznie mniej, niż się wydaje — język konwersacyjny rozwija się znacznie wcześniej niż język akademicki, więc uczeń może sprawiać wrażenie biegłego, mimo że nie nadąża za treściami.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Pozornie słabe wyniki w nauce, często nieproporcjonalne do rzeczywistych możliwości.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Milczenie na lekcji — może to być normalny „okres milczenia” w przyswajaniu języka, a nie brak zainteresowania.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Pod koniec dnia może być wyczerpany przetwarzaniem języka w czasie rzeczywistym.",
        "Ryzyko niedodiagnozowania rzeczywistych specjalnych potrzeb edukacyjnych (dysleksja, ADHD), gdy wszystko przypisuje się barierze językowej.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>To nie jest</strong> brak inteligencji ani zdolności.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>To nie jest</strong> jedynie kwestia czasu: rozwój języka akademickiego trwa latami, a bez wyraźnego wsparcia wielu uczniów zatrzymuje się na niskim poziomie funkcjonalnym.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nie rozwiąże tego</strong> automatyczne tłumaczenie w trakcie lekcji — to proces trwający lata, a język ojczysty jest zasobem, a nie przeszkodą.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Zapewnianie materiałów z kluczowym słownictwem przetłumaczonym na język ojczysty.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Sprawdzanie wiedzy poprzez demonstrację wizualną lub praktyczną, gdy tylko jest to możliwe.",
        "Łączenie w pary z dwujęzycznym kolegą w celu nieformalnej mediacji w kluczowych momentach.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Akceptowanie początkowych wypowiedzi z błędami gramatycznymi — w pierwszej fazie poprawiać treść, a nie formę.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Samo spotkanie stanowi barierę — rodzic lub opiekun może nie znać języka polskiego na poziomie wystarczającym do złożonej rozmowy. Należy wcześniej przygotować proste materiały pisemne lub poprosić o wsparcie tłumaczeniowe.",
        "Nie zakładaj, że rodzic lub opiekun zna polski system edukacji — wyjaśnij, czym jest poradnia psychologiczno-pedagogiczna (PPP), czym jest środek wsparcia, co oznacza ocena, niczego nie uznając za oczywiste.",
        "Wyraźnie oddzielaj barierę językową od zdolności akademickich: „Pani/Pana dziecko jest zdolne — uczy się języka jednocześnie z przyswajaniem treści, co jest bardzo wymagające”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bądź wrażliwy na kontekst migracyjny: rodziny uchodźcze lub w sytuacji nieuregulowanej mogą nie ufać instytucjom. Buduj zaufanie, zanim poprosisz o dokumenty lub skierowania.",
      ]},
      { items: [
        "Oznaki izolacji społecznej lub nękania związane z byciem uczniem cudzoziemskim.",
        "Zastój w przyswajaniu języka po pierwszym roku.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Oznaki traumy związanej z kontekstem migracyjnym (zwłaszcza u uchodźców).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Dane osób niepełnoletnich podlegają wzmocnionej ochronie (art. 8 RODO). Zgoda opiekunów prawnych jest obowiązkowa.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Należy sprawdzić, gdzie narzędzie przechowuje dane — na serwerach europejskich, pozaeuropejskich, w formie zanonimizowanej lub nie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nigdy nie wprowadzaj pełnych imion i nazwisk, adresów, numerów identyfikacyjnych ani diagnoz klinicznych do narzędzi generatywnej SI.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Należy odróżniać użytkowanie instytucjonalne (szkoła podpisuje umowę) od osobistego użytkowania przez nauczyciela (odpowiedzialność indywidualna).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systemy trenowane na danych pochodzących głównie z obszaru anglojęzycznego mogą działać gorzej w języku polskim i kontekstach polskojęzycznych.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatyczne rekomendacje mogą wzmacniać stereotypy dotyczące płci, pochodzenia etnicznego lub klasy społecznej — należy je krytycznie weryfikować.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modele „przewidywania ryzyka edukacyjnego” są szczególnie problematyczne — często odtwarzają istniejące nierówności, zamiast rozpoznawać potrzeby.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Celem jest zwiększenie autonomii ucznia, a nie zastąpienie pracy poznawczej, która tę autonomię rozwija.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Należy odróżniać <strong>narzędzie dostępu</strong> (text-to-speech dla ucznia z dysleksją) od <strong>narzędzia zastępującego</strong> (ChatGPT piszący wypracowanie).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Regularnie oceniaj: czy uczeń rozwija kompetencję, czy też rozwija zależność od narzędzia?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Czy narzędzie usuwa rzeczywistą barierę, czy tworzy skrót pomijający uczenie się?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Czy wprowadzane dane są chronione i czy istnieje zgoda?",
        "<strong>3.</strong> Czy wynik narzędzia zostanie zweryfikowany przez człowieka, zanim dotrze do ucznia?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Czy istnieje alternatywa bez SI, która działa równie dobrze?",
        "<strong>5.</strong> Jeśli narzędzie przestanie istnieć jutro, czy uczeń zostanie bez wsparcia?",
      ]},
    ],
    references: [
      "Unia Europejska. (2016). <em>Rozporządzenie (UE) 2016/679 (ogólne rozporządzenie o ochronie danych)</em>, art. 8. Dziennik Urzędowy Unii Europejskiej, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Przygotować nauczycieli do odpowiedzialnej integracji SI w nauczaniu języka obcego, wraz z tworzeniem materiałów dostosowywanych do wielu profili uczenia się.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "To nie jest prezentacja — to współtworzenie. Każdy uczestnik wychodzi z co najmniej jednym gotowym do przetestowania zasobem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Wprowadzenie — problem zróżnicowanej klasy i dlaczego „więcej tego samego” nie działa.",
        "<strong>10–25 min:</strong> Mapa profili — prezentacja sześciu kart Farol, z prawdziwymi (zanonimizowanymi) przypadkami.",
        "<strong>25–45 min:</strong> Pokaz praktyczny — trzy narzędzia, trzy przypadki użycia, trzy różne profile.",
        "<strong>45–75 min:</strong> Praca w parach — każda para dostosowuje istniejący materiał do konkretnego profilu.",
        "<strong>75–85 min:</strong> Szybkie dzielenie się — każda para prezentuje swój produkt w 1 minutę.",
        "<strong>85–90 min:</strong> Zobowiązania — każdy uczestnik wybiera materiał do przetestowania i ustala sesję informacji zwrotnej za 30 dni.",
      ]},
      { items: [
        "Dostęp do internetu oraz do kont instytucjonalnych w prezentowanych narzędziach.",
        "Istniejące materiały każdego uczestnika (karta pracy, test lub konspekt lekcji).",
        "Wydrukowane karty profili Farol do wglądu.",
      ]},
      { items: [
        "Każdy uczestnik tworzy podczas sesji co najmniej jeden dostosowany materiał.",
        "Sesja informacji zwrotnej po 30 dniach, podczas której co najmniej 60% uczestników zgłasza skuteczne wdrożenie.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Co najmniej jeden materiał stworzony podczas sesji zostaje przyjęty jako wspólny zasób wydziału.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Podstawa prawna: <strong>Ustawa Prawo oświatowe z 14 grudnia 2016 r.</strong> (Dz.U. 2017 poz. 59) oraz Rozporządzenie MEN w sprawie warunków organizowania kształcenia specjalnego (2017).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup><sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Orzeczenie o potrzebie kształcenia specjalnego wydaje poradnia psychologiczno-pedagogiczna (PPP), jest niezbędne do sformalizowanego wsparcia specjalnego.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Konstytucja RP i ratyfikowana Konwencja ONZ o prawach osób z niepełnosprawnościami stanowią ramy prawa do edukacji włączającej.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Dostosowanie wymagań edukacyjnych możliwe na podstawie opinii PPP, bez orzeczenia, odpowiedzialność każdego nauczyciela.",
        "Metody aktywizujące i zróżnicowane podejście dydaktyczne są elementem dobrego nauczania.",
        "Wsparcie nauczyciela wspomagającego wymaga orzeczenia o potrzebie kształcenia specjalnego; opinia PPP uprawnia do dostosowania wymagań edukacyjnych.",
      ]},
      { items: [
        "Poradnia psychologiczno-pedagogiczna (PPP): wydaje opinie i orzeczenia, prowadzi diagnozy.",
        "Orzeczenie o kształceniu specjalnym: podstawa do opracowania IPET (Indywidualnego Programu Edukacyjno-Terapeutycznego).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "IPET opracowywany przez zespół nauczycieli i specjalistów we współpracy z rodzicami/opiekunami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Wielospecjalistyczna ocena poziomu funkcjonowania ucznia przeprowadzana co najmniej dwa razy w roku.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Brak szczegółowej ustawy regulującej kształcenie uczniów zdolnych, zagadnienie ujęte w Krajowym Programie Wspierania Uczniów Zdolnych MEN.",
        "Klasy autorskie i indywidualny tok nauki dostępne dla uczniów wybitnie zdolnych.",
        "Olimpiady przedmiotowe jako forma stymulacji i uznania zdolności uczniów.",
        "Możliwość wcześniejszego ukończenia szkoły lub przyspieszenia nauki za zgodą dyrektora i rodziców/opiekunów.",
      ]},
      { items: [
        "Uczniowie cudzoziemcy nieznający języka polskiego: klasy przygotowawcze zgodnie z rozporządzeniem MEN 2017.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Dodatkowe zajęcia z języka polskiego jako obcego organizowane przez szkołę.",
        "Wsparcie asystenta kulturowego dla uczniów z trudnościami adaptacyjnymi.",
        "Bariera językowa nie uzasadnia sama w sobie orzeczenia o kształceniu specjalnym.",
      ]},
      { items: [
        "Ustawa Prawo oświatowe 2016 (Dz.U. 2017 poz. 59)<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Rozporządzenie MEN o kształceniu specjalnym 2017<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Poradnia psychologiczno-pedagogiczna (PPP)",
        "IPET (Indywidualny Program Edukacyjno-Terapeutyczny)",
        "Ochrona danych: dane uczniów podlegają RODO i Ustawie o ochronie danych osobowych z 2018 r.; nie udostępniać informacji wrażliwych poza zespołem bez zgody.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Konwencja ONZ o prawach osób niepełnosprawnych</em> (2006), ratyfikowana przez Polskę (Dz.U. 2012 poz. 1169); art. 24 gwarantuje prawo do edukacji włączającej.",
      "<em>Ustawa z dnia 14 grudnia 2016 r. – Prawo oświatowe</em> (Dz.U. 2017 poz. 59, z późn. zm.); podstawowy akt regulujący system oświaty i kształcenie uczniów ze specjalnymi potrzebami edukacyjnymi.",
      "<em>Rozporządzenie Ministra Edukacji Narodowej z dnia 9 sierpnia 2017 r. w sprawie warunków organizowania kształcenia, wychowania i opieki dla dzieci i młodzieży niepełnosprawnych, niedostosowanych społecznie i zagrożonych niedostosowaniem społecznym</em> (Dz.U. 2017 poz. 1578); określa zasady kształcenia specjalnego oraz opracowywania IPET.",
      "<em>Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych</em> (Dz.U. 2018 poz. 1000), w związku ze stosowaniem ogólnego rozporządzenia o ochronie danych (RODO).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Różnicowanie pedagogiczne to dostosowywanie sposobu nauczania — a nie obniżanie oczekiwań. Cel uczenia się może być taki sam dla wszystkich; to droga do niego jest różna.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Model UDL (Universal Design for Learning) proponuje trzy zasady: wiele sposobów reprezentacji (jak prezentowana jest treść), wiele sposobów działania i ekspresji (jak uczeń odpowiada) oraz wiele sposobów zaangażowania (co motywuje ucznia).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Różnicowanie nie polega na tworzeniu osobnego scenariusza lekcji dla każdego ucznia — chodzi o stworzenie wystarczającej elastyczności, aby ta sama lekcja odpowiadała różnym profilom uczniów.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>To nie jest</strong> okrojenie programu nauczania dla uczniów z największymi trudnościami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>To nie jest</strong> ciągłe dawanie różnych zadań różnym uczniom — to izoluje i etykietuje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>To nie jest</strong> jedynie zróżnicowana praca na papierze — różnicowanie obejmuje także sposób, w jaki nauczyciel wyjaśnia, pyta i ocenia.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kontrolowany wybór: zaproponuj 2–3 opcje formatu odpowiedzi (tekst pisany, ustna, schematyczny rysunek) — wszyscy odnoszą się do tej samej treści.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rusztowanie (scaffolding): zapewnij uczniom z większymi trudnościami uporządkowany przewodnik; stopniowo wycofuj go w miarę wzrostu samodzielności.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Elastyczne grupowanie: grupy według zainteresowań, poziomu opanowania materiału lub mieszane — rotuj je, aby uniknąć stałych grup, które stają się tożsamościami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Dostosowanie czasu: więcej czasu nie oznacza mniejszego rygoru. W przypadku uczniów z ADHD lub dyspraksją dziel zadanie na segmenty z zaplanowanymi przerwami.",
        "Poziom złożoności: dla tego samego tematu twórz wersje z większym lub mniejszym wsparciem językowym, z przykładami lub bez, ze wskazówkami wizualnymi lub bez nich.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Oceniaj to, co uczeń wie, a nie to, jak pisze. Uczeń z dysleksją może wykazać się rozumieniem pojęć ustnie lub za pomocą wsparcia technologicznego.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Jasne rubryki oceniania udostępnione przed zadaniem pozwalają uczniowi wiedzieć, czego się od niego oczekuje, niezależnie od wybranego formatu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfolio lub ocenianie na podstawie dowodów uczenia się pozwala uczniowi pokazać postępy w czasie, a nie tylko w jednym momencie sprawdzianu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Gdy różnicowanie w klasie przestaje wystarczać, a uczeń nadal nie ma dostępu do programu nauczania, jest to sygnał, że może być potrzebne wsparcie specjalistyczne.",
        "Różnicowanie nie zastępuje szkolnych form wsparcia (poradnia psychologiczno-pedagogiczna, terapeuci, kształcenie specjalne) — to coś, co dzieje się w zwykłej klasie jako ich uzupełnienie.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Ocenianie kształtujące to każda praktyka, która zbiera informacje o uczeniu się w trakcie procesu — i wykorzystuje te informacje do dostosowania nauczania lub wsparcia ucznia.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "W przeciwieństwie do oceniania sumującego (oceny końcowe) ocenianie kształtujące nie musi mieć stopnia — musi mieć informację zwrotną.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Dla uczniów neuroróżnorodnych ocenianie kształtujące jest szczególnie ważne, ponieważ wynik jednorazowego testu może nie odzwierciedlać tego, co faktycznie wiedzą.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na koniec lekcji uczeń odpowiada na pytanie w 2 minuty — nauczyciel od razu widzi, kto zrozumiał, a kto nie.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Sygnalizacja świetlna</strong>: zielony (zrozumiałem), żółty (mam wątpliwości), czerwony (nie zrozumiałem) — mogą to być fizyczne karty, post-ity lub forma cyfrowa.",
        "<strong>Think-Pair-Share</strong>: uczeń najpierw myśli samodzielnie, omawia z partnerem, a następnie dzieli się z klasą — zmniejsza to lęk przed bezpośrednią odpowiedzią.",
        "<strong>Drzwi wyjściowe</strong>: zanim wyjdzie, uczeń mówi nauczycielowi jedną rzecz, której się nauczył, oraz jedną wątpliwość, którą wciąż ma.",
      ]},
      { items: [
        "Skuteczna informacja zwrotna jest konkretna, możliwa do wykorzystania i przekazana w odpowiednim czasie: „na stronie 2 argument się gubi, bo brakuje powiązania z dowodami” jest przydatne; „mogłoby być lepiej” — nie.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "W przypadku uczniów z ADHD: natychmiastowa informacja zwrotna jest skuteczniejsza niż odroczona. Nie należy czekać do końca zadania.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "W przypadku uczniów z dysleksją: informacja zwrotna ustna lub w formie audio może być bardziej dostępna niż obszerne komentarze pisemne.",
        "Należy unikać porównywania uczniów ze sobą — porównujmy ucznia z jego własnymi wcześniejszymi postępami.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: ocenianie w wielu krótkich momentach zamiast jednego długiego testu. Ograniczenie bodźców rozpraszających w środowisku oceniania.",
        "Dysleksja: umożliwienie odpowiedzi ustnych, dodatkowy czas lub użycie zamiany tekstu na mowę. Oceniamy treść, a nie ortografię.",
        "Autyzm: ocenianie z jasnymi i jednoznacznymi instrukcjami pisemnymi. Uprzedzanie z wyprzedzeniem o zmianach formatu.",
        "Zdolności wybitne: unikanie oceniania polegającego na zwykłym odtwarzaniu treści — włączanie pytań wymagających analizy, syntezy i tworzenia.",
      ]},
      { items: [
        "Gdy mimo dostosowań w ocenianiu uczeń nie jest w stanie wykazać się uczeniem się, jest to sygnał, że może istnieć głębsza bariera, którą należy zbadać wraz z poradnią psychologiczno-pedagogiczną.",
        "Utrwalone wzorce (miesiące, nie dni) specyficznych trudności w danym obszarze powinny zostać formalnie zgłoszone.",
      ]},
    ]},
  },
  ro: {
    tdah: { sections: [
      { items: [
        "Dificultate în menținerea atenției la sarcini lungi; se pierde în instrucțiunile cu mai mulți pași.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Mișcare constantă: nu stă așezat, se foiește cu mâinile, se ridică fără un motiv aparent.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Răspunde înainte ca întrebarea să se termine; îi întrerupe pe colegi și pe cadrul didactic.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Uită materialele, termenele și instrucțiunile date verbal cu câteva minute în urmă: memoria de lucru este suprasolicitată.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Se poate hiperconcentra asupra a ceea ce îl interesează, dând impresia (greșită) că „poate atunci când vrea”; în realitate, performanța variază în funcție de interes și de recompensă.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Nu este</strong> lipsă de bună-creștere, lene sau lipsă de caracter: aceste idei greșite stigmatizează și întârzie sprijinul.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nu este</strong> întotdeauna hiperactivitate vizibilă: există o prezentare predominant neatentă, mai frecventă la fete și adesea subdiagnosticată.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Nu se rezolvă</strong> prin „a depune mai mult efort”: dificultatea ține de autoreglarea neurologică, nu de voință.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Fragmentarea instrucțiunilor: câte una pe rând, scrisă pe tablă, cu un timp stabilit; reduce încărcătura asupra memoriei de lucru.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Permiterea mișcării legitime (împărțirea materialelor, ștergerea tablei, ducerea de mesaje).",
        "Reducerea stimulilor concurenți (un loc departe de fereastră, de ușă, de grupul cel mai zgomotos).",
        "Întărire pozitivă imediată și frecventă: în ADHD sensibilitatea la recompensă este alterată (aversiune față de așteptare), astfel încât recompensele imediate funcționează mai bine decât cele amânate.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Începeți cu ceea ce face bine elevul: întâlnirea nu trebuie să înceapă cu o listă de plângeri, altfel părintele se închide în defensivă.",
        "Descrieți comportamente observate, nu diagnostice: „când sunt mai mult de doi pași la rând, pierde firul” în loc de „are ADHD”.",
        "Anticipați reacția „acasă nu este așa”: explicați că, în context de grup și cu cerința unei atenții prelungite în clasă, simptomele devin mai vizibile.",
        "Dacă sugerați o evaluare, prezentați-o ca pe o resursă, nu ca pe o pedeapsă: „există un sprijin care îl/o poate ajuta mult” în loc de „trebuie să fie evaluat/ă”.",
      ]},
      { items: [
        "Eșec școlar persistent (corigențe repetate) în pofida adaptărilor din clasă.",
        "Semne de excludere socială din partea colegilor.",
        "Semne de comorbiditate (anxietate, depresie, tulburare opozițională): frecvente în ADHD și care justifică trimiterea spre evaluare.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Citește încet și cu efort, cu erori în citirea cuvintelor izolate, chiar și în texte pe care le înțelege bine atunci când sunt ascultate.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Inversiunile de litere (b/d, p/q) sunt frecvente la toți copiii care încep să scrie și nu reprezintă, în sine, un semn de dislexie; dificultatea centrală este <strong>fonologică</strong>: asocierea literelor cu sunetele.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Erori ortografice persistente care nu răspund la corectarea repetată.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tinde să evite cititul cu voce tare; poate părea dezinteres, când de fapt este o strategie de protecție.",
        "Înțelegere orală clar superioară celei a citirii: dificultatea este specifică, nu o limitare cognitivă generală.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nu este</strong> o lipsă de inteligență: prin definiție, dislexia este neașteptată în raport cu celelalte capacități cognitive ale elevului.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nu este</strong> o problemă de vedere și nici o simplă „încurcare a literelor”: deficitul central se află în procesarea fonologică.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nu se „vindecă”</strong>, dar intervenția structurată asupra conștiinței fonologice și a decodificării îmbunătățește citirea în mod constant.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Mărirea spațierii dintre litere și rânduri: există dovezi experimentale că spațierea mai mare îmbunătățește citirea copiilor dislexici, fără antrenament prealabil.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> În schimb, dovezile privind fonturile specifice „pentru dislexici” sunt mai slabe și inconsistente.",
        "Permiterea citirii în gând înainte de orice citire cu voce tare: a nu cere niciodată să citească pe neașteptate.",
        "Atunci când obiectivul nu este evaluarea scrisului, evaluarea conținutului separat de ortografie.",
        "Oferirea aceleiași informații în mai multe formate (audio, video, scheme).",
      ]},
      { items: [
        "Separarea explicită a citirii de inteligență încă de la început: „înțelege foarte bine atunci când ascultă; dificultatea este specifică citirii”.",
        "A avea în vedere că dislexia are o puternică componentă ereditară: unul dintre părinți poate avea o dislexie nediagnosticată, iar conversația poate reactiva amintiri dificile din propria școlaritate.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evitarea prezentării fișelor pline de corecturi cu roșu fără context: a arăta mai întâi ceea ce elevul reușește deja să facă.",
        "A fi concret în privința adaptărilor deja în curs și a celor pe care aparținătorul le poate replica acasă: texte în format audio, citit cu voce tare fără presiunea timpului.",
      ]},
      { items: [
        "Imagine de sine școlară în deteriorare („sunt prost”, „nu reușesc”).",
        "Evitare sistematică a sarcinilor de citire/scriere până la punctul de a compromite alte discipline.",
        "Discrepanță marcată între performanța orală și cea scrisă fără un diagnostic formal: îndrumare către o evaluare psihopedagogică.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Dificultate în fața schimbărilor neanunțate: modificarea orarului, a sălii, a profesorului suplinitor.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Comunicare literală: pierde nuanțele, ironia, expresiile idiomatice.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilitate senzorială: lumina fluorescentă, zgomotul de fond sau etichetele hainelor pot fi intolerabile.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Interese concentrate și aprofundate asupra unor teme specifice, asociate unui stil cognitiv orientat spre detaliu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Poate părea dezinteresat sau distant atunci când este suprasolicitat, nu deconectat.",
      ]},
      { items: [
        "<strong>Nu este</strong> o scală liniară („mai mult” sau „mai puțin” autist): este un profil multidimensional, cu profiluri de sprijin diferite în fiecare domeniu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nu este</strong> lipsă de empatie: dificultățile de înțelegere reciprocă sunt bidirecționale, și persoanele non-autiste au dificultăți în a citi persoanele autiste („problema dublei empatii”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nu este</strong> comportament rău atunci când o rutină este întreruptă: este un răspuns neurologic real la pierderea predictibilității.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Anunțarea din timp a oricărei schimbări de rutină, chiar dacă pare neînsemnată: sprijinul vizual și anticiparea au susținere empirică.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Transformarea regulilor sociale implicite în reguli explicite (ce se face, ce nu se face, când).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Permiterea unor pauze senzoriale într-un spațiu liniștit atunci când este necesar.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Valorificarea interesului concentrat ca punct de intrare către conținuturile curriculare: o forță, nu o distragere.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Dacă diagnosticul există deja, întrebați mai întâi familia ce știe că funcționează: părinții copiilor autiști știu adesea despre copilul lor mai mult decât orice raport.",
        "Dacă nu există diagnostic, fiți foarte precauți: descrieți situații concrete fără a folosi vreodată cuvântul „autism” la o primă întâlnire: „atunci când rutina se schimbă fără avertisment, fiul sau fiica dumneavoastră se tulbură foarte mult într-un mod care depășește tipicul”.",
        "Validați efortul familiei: crearea unei structuri și a predictibilității acasă este solicitantă, iar recunoașterea acestui lucru creează alianță.",
        "Nu comparați niciodată cu „ceilalți elevi” sau cu frații: fiecare profil al spectrului este diferit, iar comparația este întotdeauna contraproductivă.",
      ]},
      { items: [
        "Crize („meltdown-uri”) frecvente după ziua de școală.",
        "Refuz școlar persistent asociat cu suprasolicitare senzorială.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Izolare socială progresivă în ciuda încercărilor de mediere.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Scris de mână dificil, lent și adesea ilizibil, din cauza unei dificultăți motorii reale, nu din neglijență.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Dificultate în organizarea spațială a caietului, în gestionarea materialelor și în secvențele de pași.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Poate părea „neîndemânatic”: varsă paharele, se lovește de mobilier, are dificultăți la sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Oboseală disproporționată după sarcini care necesită o coordonare motorie fină susținută.",
        "Componenta cognitivă este de obicei păstrată, de aici frustrarea frecventă dintre a ști și a putea demonstra.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nu este</strong> lene sau lipsă de implicare.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nu este</strong> doar un scris urât: termenul clinic este tulburare de dezvoltare a coordonării (TDC) și afectează planificarea și secvențierea motorie, nu doar scrisul.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nu se rezolvă</strong> prin „exersarea mai intensă a scrisului”: intervenția eficientă este orientată către sarcină, nu către repetiția mecanică.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Permiterea utilizării tastaturii sau a tabletei în producțiile scrise extinse.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Reducerea copierii mecanice de pe tablă și furnizarea de notițe atunci când este relevant.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Furnizarea de liste de verificare explicite pentru sarcinile cu mai mulți pași.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evaluarea lucrării după conținut, nu după prezentarea fizică.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Explicarea în termeni simpli a ceea ce este dispraxia, deoarece majoritatea părinților nu au auzit niciodată acest termen: „este o dificultate neurologică în coordonarea mișcărilor, nu este neglijență și nici lipsă de efort”.",
        "Scrisul ilizibil este punctul de cel mai mare conflict cu părinții; a arăta că evaluarea valorizează acum conținutul și nu forma ajută la diminuarea anxietății ambelor părți.",
        "Sugerarea unor instrumente practice pentru acasă: dictarea vocală pe telefon pentru notițe, tastatura pentru lucrările scrise extinse.",
        "Dacă în anii anteriori a existat un istoric de „este leneș/leneșă” sau „nu depune efort”, numiți acest lucru direct: „știu că ați mai auzit asta; interpretarea mea este diferită”.",
      ]},
      { items: [
        "Refuzul total al producției scrise.",
        "Izolare socială în contextele de activitate fizică.",
        "Semne de anxietate somatizată înaintea evaluărilor scrise; suferința psihosocială face parte din tablou.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Termină sarcinile în câteva minute, în timp ce restul clasei are nevoie de toată ora.",
        "Pune întrebări care depășesc cadrul materiei sau contestă activ ceea ce se predă.",
        "Poate părea dezinteresat, indisciplinat sau apatic, adesea semne ale plictiselii cronice și ale subperformanței (underachievement).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensibilitate emoțională accentuată; poate fi anxios sau perfecționist, deoarece factorii psihosociali sunt determinanți în dezvoltarea talentului.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Risc real de subperformanță: poate învăța să își ascundă capacitatea pentru a nu se evidenția social.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Nu este</strong> sinonim cu un comportament bun sau cu rezultate bune: mulți elevi supradotați au o performanță mediocră din lipsă de interes.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nu este</strong> „nu are nevoie de ajutor”: are nevoie de provocări diferite, deoarece capacitatea se transformă în realizare doar atunci când este dezvoltată în mod deliberat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nu este</strong> incompatibil cu neurodivergența: dubla excepționalitate (2e) există, este frecventă și este adesea mascată.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Să existe mereu sarcini de aprofundare pregătite, nu mai mult din același lucru, ci conținuturi mai profunde sau aplicate.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Permiterea cercetării independente pe teme de interes ale elevului în cadrul programei.",
        "Evaluarea în funcție de provocare, nu de ușurință: solicitarea unor lucrări mai exigente în schimbul unui volum mai mic.",
        "Recunoașterea și validarea sensibilității emoționale fără a o patologiza.",
      ]},
      { items: [
        "Anticiparea mândriei și reorientarea ei: „este în mod evident foarte capabil, și tocmai de aceea plictiseala creează probleme”.",
        "Explicarea paradoxului supradotării: rezultatele bune nu înseamnă că îi este bine, iar subperformanța din lipsă de interes este frecventă și reversibilă.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Dacă elevul își ascunde capacitatea pentru a se integra social, numirea acestui fapt cu grijă: este un semn de suferință, nu de modestie.",
        "Propunerea către părinți de a valoriza procesul în locul rezultatului acasă: curiozitatea, profunzimea și întrebările dificile valorează mai mult decât notele mari obținute la sarcini ușoare.",
      ]},
      { items: [
        "Semne de anxietate sau depresie asociate cu un perfecționism extrem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Izolare socială marcată de sentimentul de a fi „diferit” de colegi.",
        "Scădere bruscă a performanței școlare la un elev identificat anterior ca fiind capabil.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Înțelege mult mai puțin decât pare: limbajul conversațional se dezvoltă cu mult înaintea celui academic, astfel încât poate părea fluent fără a urmări conținuturile.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rezultate școlare aparent slabe, adesea disproporționate față de capacitatea reală.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tăcerea în clasă: poate fi o „perioadă de tăcere” normală în achiziția unei limbi, nu lipsă de interes.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Poate fi epuizat la sfârșitul zilei din cauza procesării limbii în timp real.",
        "Risc de subdiagnosticare a unor nevoi educative reale (dislexie, ADHD), deoarece totul este pus pe seama barierei lingvistice.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nu este</strong> o lipsă de inteligență sau de capacitate.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nu este</strong> doar o chestiune de timp: limbajul academic se dezvoltă în ani, iar fără sprijin explicit mulți elevi se stabilizează la un nivel funcțional scăzut.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nu se rezolvă</strong> prin traducere automată în timpul orei: este un proces de ani de zile, iar limba maternă este o resursă, nu un obstacol.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Furnizarea de materiale cu vocabularul-cheie tradus în limba maternă.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Evaluarea cunoștințelor prin demonstrație vizuală sau practică ori de câte ori este posibil.",
        "Asocierea elevului cu un coleg bilingv pentru o mediere informală în momentele critice.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Acceptarea primelor producții cu greșeli gramaticale: corectarea conținutului, nu a formei, în prima etapă.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Întâlnirea în sine este o barieră: părintele sau tutorele poate să nu vorbească limba de predare suficient de bine pentru o conversație complexă. Pregătiți din timp materiale scrise simple sau solicitați sprijin pentru traducere.",
        "Nu presupuneți că familia cunoaște sistemul de învățământ: explicați ce este serviciul de psihologie și consiliere școlară, ce este o măsură de sprijin și ce presupune o evaluare, fără a considera nimic ca fiind de la sine înțeles.",
        "Separați clar bariera lingvistică de capacitatea școlară: „fiul dumneavoastră/fiica dumneavoastră este capabil(ă); învață limba în același timp în care învață conținuturile, ceea ce este foarte solicitant”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fiți sensibili la contextul migrației: familiile de refugiați sau aflate în situație neregulamentară pot avea neîncredere în instituții. Construiți încrederea înainte de a solicita documente sau de a face trimiteri către alte servicii.",
      ]},
      { items: [
        "Semne de izolare socială sau de hărțuire (bullying) asociate statutului de elev străin.",
        "Stagnare în achiziția lingvistică după primul an.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Semne de traumă asociate contextului migrației (în special la refugiați).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Datele minorilor beneficiază de o protecție sporită (art. 8 RGPD). Consimțământul reprezentanților legali este obligatoriu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Verificați unde stochează instrumentul datele: servere europene, neeuropene, anonimizate sau nu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nu introduceți niciodată nume complete, adrese, numere de identificare sau diagnostice clinice în instrumentele de IA generativă.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Distingeți utilizarea instituțională (școala semnează un contract) de utilizarea personală a cadrului didactic (răspundere individuală).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Sistemele antrenate preponderent pe date în limba engleză pot avea performanțe inferioare în română și în contexte românofone.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Recomandările automate pot amplifica stereotipuri de gen, etnie sau clasă socială: trebuie verificate critic.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modelele de „predicție a riscului școlar” sunt deosebit de problematice: adesea reproduc inegalitățile existente în loc să identifice nevoile.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Obiectivul este creșterea autonomiei elevului, nu înlocuirea muncii cognitive care o dezvoltă.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Distingeți <strong>instrumentul de acces</strong> (text-to-speech pentru un elev cu dislexie) de <strong>instrumentul de substituire</strong> (ChatGPT care scrie compunerea).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evaluați periodic: elevul își dezvoltă o competență sau își dezvoltă o dependență de instrument?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Instrumentul rezolvă o barieră reală sau creează o scurtătură care omite învățarea?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Datele introduse sunt protejate și există consimțământul?",
        "<strong>3.</strong> Rezultatul instrumentului va fi verificat de un om înainte de a ajunge la elev?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Există o alternativă fără IA care funcționează la fel de bine?",
        "<strong>5.</strong> Dacă instrumentul ar dispărea mâine, elevul ar rămâne fără sprijin?",
      ]},
    ],
    references: [
      "Uniunea Europeană. (2016). <em>Regulamentul (UE) 2016/679 (Regulamentul general privind protecția datelor)</em>, art. 8. Jurnalul Oficial al Uniunii Europene, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Pregătirea colegilor pentru integrarea responsabilă a IA în predarea limbii străine, cu producerea de materiale adaptabile la multiple profiluri de învățare.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nu este o prezentare, ci o co-construcție. Fiecare participant pleacă cu cel puțin o resursă gata de testat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Încadrare — problema clasei eterogene și de ce „mai mult din același lucru” nu funcționează.",
        "<strong>10–25 min:</strong> Harta profilurilor — prezentarea celor șase cartonașe Farol, cu cazuri reale (anonimizate).",
        "<strong>25–45 min:</strong> Demonstrație practică — trei instrumente, trei cazuri de utilizare, trei profiluri diferite.",
        "<strong>45–75 min:</strong> Lucru în perechi — fiecare pereche adaptează un material existent la un profil specific.",
        "<strong>75–85 min:</strong> Împărtășire rapidă — fiecare pereche își prezintă produsul în 1 minut.",
        "<strong>85–90 min:</strong> Angajamente — fiecare participant stabilește un material de testat și fixează o sesiune de feedback la 30 de zile.",
      ]},
      { items: [
        "Acces la internet și la conturile instituționale pe instrumentele prezentate.",
        "Materialele existente ale fiecărui participant (o fișă, un test sau un plan de lecție).",
        "Cartonașe tipărite cu profilurile Farol pentru consultare.",
      ]},
      { items: [
        "Fiecare participant produce cel puțin un material adaptat în timpul sesiunii.",
        "Sesiune de feedback la 30 de zile, cu cel puțin 60 % dintre participanți care raportează o implementare efectivă.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Cel puțin un material produs în cadrul sesiunii este adoptat ca resursă comună a departamentului.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Baza legală principală: Legea învățământului preuniversitar nr. 198/2023 (care a abrogat Legea Educației Naționale nr. 1/2011) și Ordinul comun nr. 1985/1305/5805/2016 privind metodologia de orientare școlară și profesională a copiilor cu cerințe educaționale speciale (CES).<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Legea nr. 272/2004 privind protecția și promovarea drepturilor copilului completează cadrul de drepturi educaționale.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "România a ratificat, prin Legea nr. 221/2010, Convenția ONU privind drepturile persoanelor cu dizabilități, care stă la baza politicilor de educație incluzivă.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Adaptările curriculare și diferențierea pedagogică sunt responsabilitatea tuturor cadrelor didactice, fără documentație specială.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Măsurile compensatorii pot fi aplicate de profesor pe baza observației pedagogice.",
        "Cadrul didactic de sprijin se acordă pe baza certificatului de orientare școlară și profesională emis prin CJRAE/COSP.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "CJRAE (Centrul Județean de Resurse și Asistență Educațională): realizează evaluarea complexă și coordonează sprijinul educațional.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Certificatul de orientare școlară și profesională: emis de CJRAE (prin COSP), stă la baza încadrării în educație incluzivă sau specială.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Plan de Servicii Individualizat (PSI): document de planificare pentru elevii cu CES, elaborat cu familia.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Planul de intervenție personalizat (PIP): instrument de intervenție concretă în clasă, elaborat de echipa didactică.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Legea nr. 17/2007 privind educația tinerilor supradotați, capabili de performanță înaltă, reglementează sprijinul pentru elevii supradotați.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Centrele de Excelență oferă programe de accelerare sau îmbogățire curriculară.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Programele de accelerare (trecerea mai rapidă prin ani de studiu) și îmbogățire (aprofundare, extindere) sunt prevăzute legal.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Identificarea supradotării se realizează prin evaluare psihologică la CJRAE sau cabinete specializate.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Elevii alofoni beneficiază de suport lingvistic în limba română și pot fi incluși în clase de inițiere.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "CJRAE coordonează protocoalele de primire a elevilor cu altă limbă maternă.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Mediatorul școlar sprijină comunicarea cu familiile din comunități rome sau imigrante.",
        "Nu există un regim juridic separat pentru alofoni, sprijinul se acordă prin mecanismele generale de incluziune.",
      ]},
      { items: [
        "Legea învățământului preuniversitar nr. 198/2023<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ordinul comun nr. 1985/1305/5805/2016 (orientarea școlară și profesională a copiilor cu CES)<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "CJRAE (Centrul Județean de Resurse și Asistență Educațională)<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "PSI (Plan de Servicii Individualizat) și PIP (Plan de intervenție personalizat)<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Certificat de orientare școlară și profesională<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
    ],
    references: [
      "Legea nr. 221/2010 pentru ratificarea Convenției ONU privind drepturile persoanelor cu dizabilități (adoptată la New York la 13 decembrie 2006, semnată de România la 26 septembrie 2007) — consacră dreptul la educație incluzivă (art. 24).",
      "Legea învățământului preuniversitar nr. 198/2023 (publicată în M. Of. nr. 613 din 5 iulie 2023) — cadrul legal în vigoare al învățământului preuniversitar; reglementează educația elevilor cu cerințe educaționale speciale (CES) și educația specială. A abrogat Legea Educației Naționale nr. 1/2011.",
      "Ordinul comun nr. 1985/1305/5805/2016 (MMFPSPV, MS, MENCS) privind aprobarea metodologiei pentru evaluarea și intervenția integrată în vederea încadrării copiilor cu dizabilități în grad de handicap, a orientării școlare și profesionale a copiilor cu CES — stabilește rolul CJRAE/COSP, certificatul de orientare școlară și profesională, PSI și PIP.",
      "Legea nr. 272/2004 privind protecția și promovarea drepturilor copilului (republicată) — garantează dreptul copilului la educație și la măsuri de protecție.",
      "Legea nr. 17/2007 privind educația tinerilor supradotați, capabili de performanță înaltă — reglementează identificarea, formarea diferențiată și programele de accelerare și îmbogățire pentru elevii supradotați.",
      "Legea nr. 190/2018 privind măsuri de punere în aplicare a Regulamentului (UE) 2016/679 (GDPR) — legea națională de implementare a GDPR; reglementează prelucrarea datelor cu caracter personal, inclusiv ale elevilor.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Diferențierea pedagogică înseamnă ajustarea modului în care se predă, nu coborârea așteptărilor. Obiectivul de învățare poate fi același pentru toți; ceea ce variază este parcursul.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Modelul UDL (Universal Design for Learning, proiectare universală pentru învățare) propune trei principii: multiple modalități de reprezentare (modul în care este prezentat conținutul), multiple modalități de acțiune și exprimare (modul în care răspunde elevul) și multiple modalități de implicare (ceea ce îl motivează pe elev).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A diferenția nu înseamnă a crea un plan de lecție pentru fiecare elev: înseamnă a crea suficientă flexibilitate astfel încât aceeași lecție să răspundă unor profiluri diferite.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Nu înseamnă</strong> reducerea curriculumului pentru elevii cu cele mai mari dificultăți.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nu înseamnă</strong> a da mereu sarcini diferite unor elevi diferiți: acest lucru izolează și etichetează.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nu înseamnă</strong> doar muncă diferențiată pe hârtie: diferențierea include modul în care cadrul didactic explică, întreabă și evaluează.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Alegere controlată: oferirea a 2-3 opțiuni de format al răspunsului (text scris, oral, desen schematic); toți răspund la același conținut.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Schelă de sprijin (scaffolding): furnizarea unui ghid structurat elevilor cu cele mai mari dificultăți, retras treptat pe măsură ce crește autonomia.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Grupare flexibilă: grupuri după interes, după nivelul de stăpânire sau mixte; rotirea lor pentru a evita grupurile fixe care ajung să devină identități.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Ajustări de timp: mai mult timp nu înseamnă mai puțină rigoare. Pentru elevii cu TDAH sau dispraxie, împărțirea sarcinii în segmente cu pauze programate.",
        "Nivel de complexitate: pentru aceeași temă, crearea unor versiuni cu mai mult sau mai puțin sprijin lingvistic, cu sau fără exemple, cu sau fără indicii vizuale.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "A evalua ceea ce știe elevul, nu modul în care scrie. Un elev cu dislexie își poate demonstra stăpânirea conceptuală oral sau cu sprijin tehnologic.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Grilele de evaluare clare și împărtășite înainte de sarcină îi permit elevului să știe ce se așteaptă de la el, indiferent de formatul ales.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portofoliul sau evaluarea pe bază de dovezi îi permite elevului să își arate progresele de-a lungul timpului, nu doar într-un moment de testare.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Atunci când diferențierea la clasă nu mai este suficientă, iar elevul continuă să nu poată accesa curriculumul, este un semn că poate fi necesar un sprijin specializat.",
        "Diferențierea nu înlocuiește măsurile de sprijin ale școlii (SPO, terapeuți, învățământ special): este ceea ce se întâmplă în clasa obișnuită, în completare.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Evaluarea formativă este orice practică ce colectează informații despre învățare pe parcursul procesului și folosește aceste informații pentru a ajusta predarea sau sprijinul acordat elevului.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Spre deosebire de evaluarea sumativă (notele finale), cea formativă nu trebuie neapărat să aibă o notă: trebuie să aibă feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Pentru elevii neurodivergenți, evaluarea formativă este deosebit de importantă, deoarece performanța la un test punctual poate să nu reflecte ceea ce știu cu adevărat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: la finalul orei, elevul răspunde la o întrebare în 2 minute; profesorul vede imediat cine a înțeles și cine nu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semafor</strong>: verde (am înțeles), galben (am nelămuriri), roșu (nu am înțeles); poate fi cu jetoane fizice, post-it-uri sau în format digital.",
        "<strong>Think-Pair-Share</strong>: elevul gândește individual, discută cu un coleg, apoi împărtășește cu clasa; reduce anxietatea răspunsului direct.",
        "<strong>Poarta de ieșire</strong>: înainte de a ieși, elevul îi spune profesorului un lucru pe care l-a învățat și o nelămurire pe care încă o are.",
      ]},
      { items: [
        "Un feedback eficient este specific, aplicabil și oferit la timp: „la pagina 2, argumentul se pierde pentru că lipsește legătura cu dovada” este util; „ar fi putut fi mai bine” nu este.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Pentru elevii cu TDAH: feedbackul imediat este mai eficient decât cel amânat. Nu așteptați finalul sarcinii.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pentru elevii cu dislexie: feedbackul oral sau în format audio poate fi mai accesibil decât comentariile scrise extinse.",
        "Evitați compararea elevilor între ei; comparați elevul cu propriul său progres anterior.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "TDAH: evaluare în mai multe momente scurte în loc de un singur test lung. Reduceți stimulii care distrag atenția în mediul de evaluare.",
        "Dislexie: permiteți răspunsuri orale, timp suplimentar sau folosirea sintezei text-vorbire. Evaluați conținutul, nu ortografia.",
        "Autism: evaluări cu instrucțiuni scrise clare și fără ambiguitate. Anunțați din timp schimbările de format.",
        "Supradotare: evitați evaluările de simplă reproducere a conținutului; includeți întrebări de analiză, sinteză și creație.",
      ]},
      { items: [
        "Atunci când, chiar și cu adaptări ale evaluării, elevul nu reușește să demonstreze învățarea, este un semn că poate exista o barieră mai profundă care trebuie investigată împreună cu SPO.",
        "Tiparele persistente (luni, nu zile) de dificultate specifică într-un domeniu trebuie semnalate în mod formal.",
      ]},
    ]},
  },



  hr: {
    tdah: { sections: [
      { items: [
        "Poteškoće s održavanjem pažnje pri dugim zadacima; gubi se u uputama s više koraka.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Stalno kretanje — ne sjedi mirno, igra se rukama, ustaje bez vidljivog razloga.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Odgovara prije nego što pitanje završi; prekida kolege i nastavnika.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zaboravlja pribor, rokove i upute dane usmeno prije nekoliko minuta — radno pamćenje je preopterećeno.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Može se hiperfokusirati na ono što ga zanima, ostavljajući (pogrešan) dojam da „može kad hoće“; zapravo se uspješnost mijenja ovisno o interesu i nagradi.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Nije</strong> riječ o lošem odgoju, lijenosti ni slabosti karaktera: te pogrešne predodžbe stigmatiziraju i odgađaju podršku.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nije</strong> uvijek vidljiva hiperaktivnost — postoji pretežno nepažljivi pojavni oblik, češća kod djevojčica i često nedovoljno dijagnosticirana.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Ne rješava se</strong> tako da se „više potrudi“: poteškoća je u neurološkoj samoregulaciji, a ne u volji.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Rastaviti upute na dijelove: jednu po jednu, zapisanu na ploči, s određenim vremenom — smanjuje opterećenje radnog pamćenja.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Omogućiti dopušteno kretanje (dijeljenje pribora, brisanje ploče, prenošenje poruka).",
        "Smanjiti konkurentske podražaje (mjesto dalje od prozora, vrata i najbučnije skupine).",
        "Neposredno i učestalo pozitivno potkrepljenje: kod ADHD-a osjetljivost na nagradu je promijenjena (averzija prema čekanju), pa neposredne nagrade djeluju bolje od odgođenih.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Započnite onim što učenik radi dobro — sastanak ne smije otvoriti popisom pritužbi, inače se roditelj obrambeno zatvori.",
        "Opisujte opažena ponašanja, ne dijagnoze: „kad ima više od dva koraka zaredom, izgubi nit“ umjesto „ima ADHD“.",
        "Predvidite reakciju „kod kuće nije tako“ — objasnite da skupni kontekst i zahtjev za dugotrajnom pažnjom u razredu čine simptome vidljivijima.",
        "Ako predlažete procjenu, predstavite je kao podršku, a ne kao kaznu: „postoji podrška koja mu/joj može mnogo pomoći“ umjesto „mora biti pregledan/a“.",
      ]},
      { items: [
        "Ustrajne disciplinske poteškoće unatoč prilagodbama u razredu.",
        "Znakovi socijalne isključenosti od strane vršnjaka.",
        "Znakovi komorbiditeta (anksioznost, depresija, poremećaj s prkošenjem i suprotstavljanjem) — česti kod ADHD-a i opravdavaju upućivanje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Čita sporo i s naporom, s pogreškama u čitanju izoliranih riječi, čak i u tekstovima koje dobro razumije kada ih sluša.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zamjene slova (b/d, p/q) uobičajene su kod sve djece koja počinju pisati i same po sebi nisu znak disleksije; središnja je teškoća <strong>fonološka</strong> — povezivanje slova s glasovima.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Ustrajne pravopisne pogreške koje ne reagiraju na opetovano ispravljanje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Sklon je izbjegavati čitanje naglas; može djelovati kao nezainteresiranost, iako je zapravo riječ o zaštitnoj strategiji.",
        "Slušno razumijevanje očito je bolje od razumijevanja pročitanoga — teškoća je specifična, a ne opće kognitivno ograničenje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nije</strong> nedostatak inteligencije: po definiciji je disleksija neočekivana s obzirom na ostale kognitivne sposobnosti učenika.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nije</strong> problem s vidom niti puko „zamjenjivanje slova”: središnji je deficit u fonološkoj obradi.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ne „liječi se”</strong>, ali strukturirana intervencija u fonološkoj svjesnosti i dekodiranju dosljedno poboljšava čitanje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Povećanje razmaka među slovima i redovima: postoje eksperimentalni dokazi da povećani razmak poboljšava čitanje kod disleksične djece, i to bez prethodne uvježbanosti.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Dokazi za posebne fontove „za disleksičare” nasuprot tome slabiji su i nedosljedni.",
        "Omogućiti tiho čitanje prije bilo kakvog čitanja naglas — nikada ne tražiti čitanje iznenada.",
        "Kada cilj nije procjena pisanja, sadržaj procjenjivati odvojeno od pravopisa.",
        "Ponuditi iste informacije u različitim formatima (zvuk, video, sheme).",
      ]},
      { items: [
        "Već na samom početku izričito odvojiti čitanje od inteligencije: „vrlo dobro razumije kada sluša — teškoća je specifična za čitanje”.",
        "Imati na umu da disleksija ima snažnu nasljednu komponentu: jedan od roditelja može imati nedijagnosticiranu disleksiju, a razgovor može oživjeti teška sjećanja na vlastito školovanje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Izbjegavati pokazivanje radnih listova punih crvenih ispravaka bez konteksta — najprije predstaviti ono što učenik već može.",
        "Biti konkretan u vezi s već uvedenim prilagodbama i onima koje skrbnik može ponoviti kod kuće: tekstovi u zvučnom obliku, čitanje naglas bez vremenskog pritiska.",
      ]},
      { items: [
        "Pogoršavanje akademske slike o sebi („glup sam”, „ne mogu”).",
        "Sustavno izbjegavanje zadataka čitanja/pisanja do mjere da ugrožava druge predmete.",
        "Izražen nesklad između usmenog i pisanog uratka bez formalne dijagnoze — uputiti na psihopedagošku procjenu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Teškoće s nenajavljenim promjenama — promjena rasporeda, učionice, zamjenskog učitelja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Doslovna komunikacija — promiču joj nijanse, ironija, idiomatski izrazi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Senzorna osjetljivost — fluorescentno svjetlo, pozadinska buka, etikete na odjeći mogu biti nepodnošljivi.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Usredotočeni i duboki interesi za određene teme — povezani s kognitivnim stilom usmjerenim na detalje.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Kad je preopterećen, može djelovati nezainteresirano ili odsutno, a ne isključeno.",
      ]},
      { items: [
        "<strong>Nije</strong> linearna ljestvica („više” ili „manje” autističan) — riječ je o višedimenzionalnom profilu s različitim profilima podrške u svakom području.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nije</strong> nedostatak empatije: teškoće u međusobnom razumijevanju dvosmjerne su — i neautističnim je osobama teško čitati autistične osobe („problem dvostruke empatije”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nije</strong> loše ponašanje kad se rutina prekine — riječ je o stvarnom neurološkom odgovoru na gubitak predvidljivosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Unaprijed najavite svaku promjenu rutine, čak i naizgled beznačajnu — vizualna podrška i anticipacija imaju empirijsku potporu.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Pretvarajte implicitna društvena pravila u izričita pravila (što se radi, što se ne radi, kada).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Po potrebi dopustite senzorne stanke u tihom prostoru.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Iskoristite usredotočeni interes kao ulaznu točku za nastavne sadržaje — to je snaga, a ne ometanje.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Ako dijagnoza već postoji, najprije pitajte što prema saznanju skrbnika funkcionira — roditelji autistične djece često znaju o svome djetetu više od bilo kojeg izvješća.",
        "Ako dijagnoze nema, budite vrlo oprezni: opisujte konkretne situacije a da na prvom sastanku nikada ne upotrijebite riječ „autizam” — „kad se rutina promijeni bez najave, vaše se dijete jako uznemiri na način koji nadilazi uobičajeno”.",
        "Potvrdite trud skrbnika — stvarati strukturu i predvidljivost kod kuće zahtjevno je, a priznanje toga stvara savezništvo.",
        "Nikada ne uspoređujte s „drugim učenicima” ni s braćom i sestrama — svaki je profil u spektru drukčiji i usporedba je uvijek kontraproduktivna.",
      ]},
      { items: [
        "Česte krize („meltdowni”) nakon školskog dana.",
        "Ustrajno odbijanje škole povezano sa senzornim preopterećenjem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Napredujuća socijalna izolacija unatoč pokušajima medijacije.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Rukopis je otežan, spor i često nečitak — zbog stvarne motoričke teškoće, a ne nemara.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Teškoća u prostornoj organizaciji bilježnice, u upravljanju priborom i u nizovima koraka.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Može djelovati „nespretno” — prolijeva piće, zalijeće se u namještaj, ima teškoće u sportu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nesrazmjeran umor nakon zadataka koji zahtijevaju dugotrajnu finu koordinaciju.",
        "Spoznajna je sastavnica obično očuvana — otuda česta frustracija između onoga što dijete zna i onoga što može pokazati.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nije</strong> lijenost ni nedostatak truda.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nije</strong> samo loš rukopis: klinički je naziv razvojni poremećaj koordinacije (DCD) i zahvaća planiranje i motoričko nizanje, ne samo pisanje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ne rješava se</strong> tako da se „više vježba pisanje”: učinkovita je intervencija usmjerena na zadatak, a ne na mehaničko ponavljanje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Dopustiti uporabu tipkovnice/tableta u opsežnijim pisanim radovima.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Smanjiti mehaničko prepisivanje s ploče — pružiti bilješke kada je to relevantno.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pružati jasne kontrolne popise za zadatke s više koraka.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Procjenjivati uradak prema sadržaju, a ne prema fizičkom izgledu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Objasniti što je dispraksija jednostavnim jezikom — većina roditelja nikada nije čula taj naziv: „to je neurološka teškoća u koordinaciji pokreta, a ne nemar ni nedostatak truda”.",
        "Nečitak je rukopis točka najvećeg trvenja s roditeljima — pokazati da vrednovanje sada cijeni sadržaj, a ne oblik, pomaže ublažiti tjeskobu s obje strane.",
        "Predložiti praktične alate za kod kuće: glasovni diktat na mobitelu za bilješke, tipkovnicu za opsežne pisane radove.",
        "Ako su se prethodnih godina pojavljivale oznake „lijen je/lijena je” ili „ne trudi se”, imenovati to izravno: „znam da ste to već čuli — moje je tumačenje drukčije”.",
      ]},
      { items: [
        "Potpuno odbijanje pisane produkcije.",
        "Socijalna izolacija u kontekstima tjelesne aktivnosti.",
        "Znakovi somatizirane tjeskobe prije pisanih provjera — psihosocijalna patnja dio je kliničke slike.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Zadatke dovrši u nekoliko minuta dok razredu treba cijeli školski sat.",
        "Postavlja pitanja koja izlaze iz okvira gradiva — ili aktivno preispituje ono što se upravo poučava.",
        "Može djelovati nezainteresirano, nedisciplinirano ili apatično — često su to znakovi kronične dosade i neostvarivanja potencijala.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Izražena emocionalna osjetljivost; može biti tjeskoban ili perfekcionistički — psihosocijalni čimbenici presudni su za razvoj darovitosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Stvaran rizik od neostvarivanja potencijala — može naučiti skrivati svoje sposobnosti kako se ne bi društveno isticao.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Nije</strong> isto što i dobro ponašanje ni dobri rezultati — mnogi daroviti učenici postižu prosječan uspjeh zbog nezainteresiranosti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ne znači</strong> „ne treba pomoć”: treba mu drukčije izazove, jer se sposobnost pretvara u postignuće samo kada se namjerno razvija.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nije</strong> nespojiva s neurodivergentnošću — dvostruka iznimnost (2e) postoji, česta je i često ostaje prikrivena.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Uvijek imati pripremljene zadatke za proširivanje — ne više istoga, nego dublje ili primjenjivije gradivo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Omogućiti samostalno istraživanje tema koje učenika zanimaju unutar nastavnog programa.",
        "Ocjenjivati prema zahtjevnosti, a ne prema lakoći — tražiti zahtjevnije radove u zamjenu za manji opseg.",
        "Prepoznati i priznati emocionalnu osjetljivost, a da je se ne patologizira.",
      ]},
      { items: [
        "Predvidjeti ponos i preusmjeriti ga: „očito je vrlo sposoban — i upravo zato dosada počinje stvarati probleme”.",
        "Objasniti paradoks darovitosti: dobri rezultati ne znače da je sve u redu, a neostvarivanje potencijala zbog nezainteresiranosti uobičajeno je i može se preokrenuti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ako učenik skriva svoje sposobnosti kako bi se društveno uklopio, to imenovati s pažnjom — to je znak patnje, a ne skromnosti.",
        "Predložiti roditeljima da kod kuće vrednuju proces umjesto rezultata: znatiželja, dubina i teška pitanja vrijede više od visokih ocjena na lakim zadacima.",
      ]},
      { items: [
        "Znakovi tjeskobe ili depresije povezani s krajnjim perfekcionizmom.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Izražena društvena izolacija zbog osjećaja da je „drukčiji” od vršnjaka.",
        "Nagli pad školskog uspjeha kod učenika koji je prije bio prepoznat kao sposoban.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Razumije mnogo manje nego što se čini — konverzacijski se jezik razvija mnogo prije od akademskoga, pa može djelovati tečno, a da pritom ne prati gradivo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Naizgled slab školski uspjeh, često nesrazmjeran stvarnim sposobnostima.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Šutnja u razredu — može biti uobičajeno „razdoblje šutnje“ pri usvajanju jezika, a ne nezainteresiranost.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Na kraju dana može biti iscrpljen od obrade jezika u stvarnom vremenu.",
        "Rizik od poddijagnosticiranja stvarnih posebnih odgojno-obrazovnih potreba (disleksija, ADHD) jer se sve pripisuje jezičnoj barijeri.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nije riječ o</strong> nedostatku inteligencije ili sposobnosti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nije riječ</strong> samo o pitanju vremena: razvoj akademskoga jezika traje godinama, a bez izričite podrške mnogi se učenici ustale na niskoj funkcionalnoj razini.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ne rješava se</strong> automatskim prijevodom tijekom nastave — to je višegodišnji proces, a materinski je jezik resurs, a ne prepreka.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Osigurati materijale s ključnim rječnikom prevedenim na materinski jezik.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Provjeravati znanje vizualnom ili praktičnom demonstracijom kad god je to moguće.",
        "Upariti s dvojezičnim kolegom radi neformalnoga posredovanja u ključnim trenucima.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Prihvaćati prve uratke s gramatičkim pogreškama — u prvoj fazi ispravljati sadržaj, a ne oblik.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Sam sastanak predstavlja barijeru — roditelj ili skrbnik možda ne govori hrvatski dovoljno dobro za složen razgovor. Unaprijed pripremite jednostavne pisane materijale ili zatražite prevoditeljsku podršku.",
        "Nemojte pretpostaviti da roditelj ili skrbnik poznaje hrvatski obrazovni sustav — objasnite što je stručna služba, što je mjera podrške i što podrazumijeva procjena, ne uzimajući ništa zdravo za gotovo.",
        "Jasno razdvojite jezičnu barijeru od školskih sposobnosti: „Vaše je dijete sposobno — uči jezik istodobno dok uči gradivo, što je vrlo zahtjevno.“<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Budite osjetljivi na migracijski kontekst: izbjegličke obitelji ili obitelji u neuređenom statusu mogu biti nepovjerljive prema institucijama. Izgradite povjerenje prije nego što zatražite dokumentaciju ili upućivanja.",
      ]},
      { items: [
        "Znakovi socijalne izolacije ili vršnjačkog nasilja povezani sa statusom učenika stranca.",
        "Stagnacija u usvajanju jezika nakon prve godine.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Znakovi traume povezane s migracijskim kontekstom (osobito kod izbjeglica).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Podaci maloljetnika podliježu pojačanoj zaštiti (čl. 8. GDPR). Privola zakonskih zastupnika je obvezna.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Provjerite gdje alat pohranjuje podatke — na europskim poslužiteljima, neeuropskim, anonimizirano ili ne.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "U alate generativne AI nikada ne unosite puna imena, adrese, identifikacijske brojeve ni kliničke dijagnoze.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Razlikujte institucionalnu uporabu (ugovor sklapa škola) od osobne uporabe nastavnika (individualna odgovornost).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Sustavi trenirani pretežno na podacima na engleskome jeziku mogu imati slabiji učinak na hrvatskome i u hrvatskim govornim kontekstima.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatske preporuke mogu pojačati stereotipe o spolu, etničkoj pripadnosti ili društvenome sloju — kritički ih provjeravajte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modeli „predviđanja akademskog rizika” osobito su problematični — često reproduciraju postojeće nejednakosti umjesto da prepoznaju potrebe.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Cilj je povećati učenikovu samostalnost, a ne zamijeniti kognitivni rad koji je razvija.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Razlikujte <strong>alat za pristup</strong> (text-to-speech za učenika s disleksijom) od <strong>alata za zamjenu</strong> (ChatGPT koji piše sastavak).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Redovito procjenjujte: razvija li učenik kompetenciju ili razvija ovisnost o alatu?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Rješava li alat stvarnu prepreku ili stvara prečac koji izostavlja učenje?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Jesu li uneseni podaci zaštićeni i postoji li privola?",
        "<strong>3.</strong> Hoće li rezultat alata provjeriti čovjek prije nego što dođe do učenika?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Postoji li alternativa bez AI koja funkcionira jednako dobro?",
        "<strong>5.</strong> Ako alat sutra prestane postojati, hoće li učenik ostati bez podrške?",
      ]},
    ],
    references: [
      "Europska unija. (2016). <em>Uredba (EU) 2016/679 (Opća uredba o zaštiti podataka)</em>, čl. 8. Službeni list Europske unije, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Osposobiti kolege za odgovornu integraciju UI u nastavu stranog jezika, uključujući izradu materijala prilagodljivih različitim profilima učenja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ovo nije predavanje — ovo je zajedničko stvaranje. Svaki sudionik odlazi s barem jednim resursom spremnim za isprobavanje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Uvod — problem heterogenog razreda i zašto „više istoga” ne funkcionira.",
        "<strong>10–25 min:</strong> Karta profila — predstavljanje šest kartica Farol sa stvarnim (anonimiziranim) slučajevima.",
        "<strong>25–45 min:</strong> Praktični prikaz — tri alata, tri slučaja upotrebe, tri različita profila.",
        "<strong>45–75 min:</strong> Rad u parovima — svaki par prilagođava postojeći materijal određenom profilu.",
        "<strong>75–85 min:</strong> Brza razmjena — svaki par predstavlja svoj uradak u 1 minuti.",
        "<strong>85–90 min:</strong> Obveze — svaki sudionik određuje materijal za isprobavanje i dogovara susret s povratnim informacijama za 30 dana.",
      ]},
      { items: [
        "Pristup internetu i institucionalnim računima u prikazanim alatima.",
        "Postojeći materijali svakog sudionika (radni list, test ili priprema za nastavni sat).",
        "Tiskane kartice profila Farol za uvid.",
      ]},
      { items: [
        "Svaki sudionik tijekom susreta izrađuje barem jedan prilagođeni materijal.",
        "Susret s povratnim informacijama za 30 dana na kojem barem 60 % sudionika izvještava o stvarnoj primjeni.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Barem jedan materijal izrađen na susretu prihvaća se kao zajednički resurs odjela.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Pravilnik o osnovnoškolskom i srednjoškolskom odgoju i obrazovanju učenika s teškoćama u razvoju (NN 24/2015), Zakon o odgoju i obrazovanju u osnovnoj i srednjoj školi (NN 87/2008 i izmjene)<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Konvencija UN-a o pravima osoba s invaliditetom (2006.), ratificirala Hrvatska; uspostavlja inkluzivno obrazovanje kao pravo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Zakon o odgoju i obrazovanju u osnovnoj i srednjoj školi, temelj hrvatskog obrazovnog sustava s obvezom inkluzije.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Strategija obrazovanja, znanosti i tehnologije RH, smjernice za inkluzivno obrazovanje i potporu učenicima s posebnim potrebama.",
      ]},
      { items: [
        "Prilagodba i individualizacija nastavnog procesa, svaki nastavnik može primijeniti bez posebne dokumentacije; diferencirani pristup je standardna praksa.",
        "Primjena načela Univerzalnog dizajna za učenje (UDL): višestruki načini predstavljanja, izražavanja i angažmana.",
        "Bez formalne dijagnoze moguće je primijeniti razumne prilagodbe: produženo vrijeme, usmeni odgovori, alternativni formati.",
        "Bilježiti neformalna zapažanja o učenicima s mogućim neprepoznatim potrebama, polazišna točka za upućivanje.",
      ]},
      { items: [
        "Stručna služba škole (pedagog, psiholog, logoped, rehabilitator), prvi kontakt pri prepoznavanju teškoća.",
        "IOOP (Individualizirani odgojno-obrazovni program), izrađuje se suradnjom nastavnika, stručne službe, roditelja i učenika.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Suradnja s centrom za odgoj i obrazovanje kada su potrebne dublje specijalizirane procjene.",
        "Upućivanje na vanjsku procjenu kada prilagodbe u školi nisu dostatne.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Daroviti učenici: Pravilnik o odgoju i obrazovanju darovite djece i učenika (NN 71/2025), mentorstvo, natjecanja, ubrzano napredovanje.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Nema posebnog zakona za darovite; IOOP odredbe primjenjuju se kad darovitost supostoji s posebnim odgojno-obrazovnim potrebama.",
        "Nastavnici trebaju dokumentirati dokaze naprednih sposobnosti i osigurati izazovne zadatke u planiranju.",
      ]},
      { items: [
        "Učenici koji ne vladaju hrvatskim jezikom: integracijski program za novopridošle učenike, nastava hrvatskog kao J2.",
        "Suradnja s MZO-om i AZOO-om za podršku učenicima s migracijskim iskustvom.",
        "Jezična barijera mora se jasno odvojiti od akademskih teškoća, učenik ne smije biti upućen na procjenu samo zbog nepoznavanja jezika.",
        "Škole s većim brojem učenika govornika drugih jezika trebaju imati plan interkulturalne podrške.",
      ]},
      { items: [
        "Brzi vodič: Pravilnik o teškoćama NN 24/2015, Zakon o OOŠ NN 87/2008, IOOP, pedagog/psiholog škole, integracijski program za HJ2.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Ključni dokumenti: IOOP, pedagoška dokumentacija, školski plan inkluzivnog obrazovanja.",
        "Prvi korak pri zabrinutosti: dokumentirati, razgovarati s pedagogom/psihologom, kontaktirati roditelje, tim redoslijedom.",
        "Zaštita podataka: svi podaci o potpori učenicima podliježu GDPR-u i Zakonu o zaštiti osobnih podataka.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>Konvencija o pravima osoba s invaliditetom</em> (UN, 2006.), koju je Hrvatska potvrdila <em>Zakonom o potvrđivanju Konvencije o pravima osoba s invaliditetom i Fakultativnog protokola</em> (Narodne novine – Međunarodni ugovori, br. 6/2007); članak 24. priznaje pravo na inkluzivno obrazovanje.",
      "<em>Zakon o odgoju i obrazovanju u osnovnoj i srednjoj školi</em> (Narodne novine, br. 87/2008, s kasnijim izmjenama i dopunama); temeljni propis hrvatskog sustava osnovnoškolskog i srednjoškolskog odgoja i obrazovanja koji uređuje inkluzivno obrazovanje i primjereni oblik školovanja učenika s teškoćama.",
      "<em>Pravilnik o osnovnoškolskom i srednjoškolskom odgoju i obrazovanju učenika s teškoćama u razvoju</em> (Narodne novine, br. 24/2015); utvrđuje vrste teškoća te primjerene programe i oblike pomoći, uključujući individualizirani odgojno-obrazovni program (IOOP).",
      "<em>Pravilnik o odgoju i obrazovanju darovite djece i učenika</em> (Narodne novine, br. 71/2025), kojim je zamijenjen raniji <em>Pravilnik o osnovnoškolskom odgoju i obrazovanju darovitih učenika</em> (Narodne novine, br. 34/1991); uređuje prepoznavanje, identifikaciju i podršku darovitim učenicima.",
      "<em>Zakon o provedbi Opće uredbe o zaštiti podataka</em> (Narodne novine, br. 42/2018), u primjeni Opće uredbe (EU) 2016/679 (GDPR); uređuje zaštitu osobnih podataka i nadležnost Agencije za zaštitu osobnih podataka (AZOP).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagoška diferencijacija znači prilagoditi način poučavanja — a ne snižavati očekivanja. Cilj učenja može biti isti za sve; ono što se razlikuje jest put do njega.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Model UDL (Universal Design for Learning) predlaže tri načela: višestruke načine predstavljanja (kako se sadržaj prikazuje), višestruke načine djelovanja i izražavanja (kako učenik odgovara) te višestruke načine uključivanja (što učenika motivira).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferencirati ne znači izraditi pripremu za nastavni sat za svakog učenika posebno — riječ je o stvaranju dovoljne fleksibilnosti da isti sat odgovara različitim profilima učenika.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Nije</strong> rezanje kurikuluma za učenike s najvećim teškoćama.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nije</strong> stalno davanje različitih zadataka različitim učenicima — to izolira i etiketira.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nije</strong> samo diferencirani rad na papiru — diferencijacija uključuje i način na koji nastavnik objašnjava, postavlja pitanja i vrednuje.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kontrolirani izbor: ponudite 2–3 mogućnosti oblika odgovora (pisani tekst, usmeni, shematski crtež) — svi odgovaraju na isti sadržaj.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Skela (scaffolding): učenicima s većim teškoćama pružite strukturiranu potporu; postupno je uklanjajte kako raste njihova samostalnost.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Fleksibilno grupiranje: skupine prema interesu, prema razini usvojenosti gradiva ili mješovite — rotirajte ih kako biste izbjegli stalne skupine koje postaju identiteti.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Prilagodbe vremena: više vremena ne znači manju zahtjevnost. Za učenike s ADHD-om ili dispraksijom podijelite zadatak na dijelove s planiranim stankama.",
        "Razina složenosti: za istu temu izradite inačice s više ili manje jezične potpore, s primjerima ili bez njih, s vizualnim natuknicama ili bez njih.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vrednujte ono što učenik zna, a ne kako piše. Učenik s disleksijom može pokazati razumijevanje pojmova usmeno ili uz tehnološku podršku.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Jasni kriteriji vrednovanja (rubrike) podijeljeni prije zadatka omogućuju učeniku da zna što se od njega očekuje, neovisno o odabranom obliku.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfelj ili vrednovanje na temelju dokaza omogućuje učeniku da pokaže napredak tijekom vremena, a ne samo u jednom trenutku ispita.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kada diferencijacija u razredu više nije dovoljna, a učenik i dalje ne može pristupiti kurikulumu, to je znak da bi mogla biti potrebna specijalizirana podrška.",
        "Diferencijacija ne zamjenjuje školske mjere podrške (stručna služba, terapeuti, specijalni odgoj i obrazovanje) — ona je ono što se događa u redovnom razredu kao njihova dopuna.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativno vrednovanje svaka je praksa koja prikuplja informacije o učenju tijekom procesa — i te informacije koristi za prilagodbu poučavanja ili podrške učeniku.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Za razliku od sumativnog vrednovanja (završne ocjene), formativno ne mora imati ocjenu — mora imati povratnu informaciju.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Za neurodivergentne učenike formativno je vrednovanje osobito važno jer uspjeh na jednokratnom testu možda ne odražava ono što doista znaju.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na kraju sata učenik u 2 minute odgovara na pitanje — nastavnik odmah vidi tko je razumio, a tko nije.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semafor</strong>: zeleno (razumio sam), žuto (imam nedoumice), crveno (nisam razumio) — mogu biti fizičke kartice, post-it papirići ili digitalni oblik.",
        "<strong>Think-Pair-Share</strong>: učenik najprije razmišlja sam, zatim raspravlja s parom, a potom dijeli s razredom — smanjuje tjeskobu od izravnog odgovora.",
        "<strong>Izlazna vrata</strong>: prije nego što ode, učenik nastavniku kaže jednu stvar koju je naučio i jednu nedoumicu koju još ima.",
      ]},
      { items: [
        "Učinkovita povratna informacija konkretna je, primjenjiva i pravodobna: „na stranici 2 argument se gubi jer nedostaje poveznica s dokazima” korisno je; „moglo bi biti bolje” nije.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Za učenike s ADHD-om: trenutačna povratna informacija učinkovitija je od odgođene. Ne čekati do kraja zadatka.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Za učenike s disleksijom: usmena ili zvučna povratna informacija može biti pristupačnija od opsežnih pisanih komentara.",
        "Izbjegavati međusobno uspoređivanje učenika — učenika uspoređivati s njegovim vlastitim prethodnim napretkom.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: vrednovanje u više kratkih trenutaka umjesto jednog dugog testa. Smanjiti ometajuće podražaje u okruženju vrednovanja.",
        "Disleksija: omogućiti usmene odgovore, dodatno vrijeme ili upotrebu pretvorbe teksta u govor. Vrednovati sadržaj, a ne pravopis.",
        "Autizam: vrednovanje s jasnim i nedvosmislenim pisanim uputama. Unaprijed najaviti promjene formata.",
        "Darovitost: izbjegavati vrednovanje koje se temelji na pukoj reprodukciji sadržaja — uključiti pitanja koja zahtijevaju analizu, sintezu i stvaranje.",
      ]},
      { items: [
        "Kada učenik ni uz prilagodbe vrednovanja ne uspijeva pokazati učenje, to je znak da možda postoji dublja prepreka koju treba istražiti sa SPO-om.",
        "Ustrajne obrasce (mjeseci, a ne dani) specifične teškoće u nekom području treba formalno prijaviti.",
      ]},
    ]},
  },

  cs: {
    tdah: { sections: [
      { items: [
        "Obtíže s udržením pozornosti u dlouhých úkolů; ztrácí se v pokynech o více krocích.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Neustálý pohyb — nevydrží sedět, hraje si s rukama, vstává bez zjevného důvodu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Odpovídá, ještě než otázka skončí; skáče do řeči spolužákům i učiteli.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zapomíná pomůcky, termíny a pokyny sdělené ústně před několika minutami — pracovní paměť je přetížená.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Může se hyperfokusovat na to, co ho zajímá, čímž vyvolává (mylný) dojem, že „dokáže to, když chce“; ve skutečnosti se výkon mění podle zájmu a odměny.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Nejde</strong> o špatnou výchovu, lenost ani slabost charakteru: tyto mylné představy stigmatizují a oddalují podporu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nejde</strong> vždy o viditelnou hyperaktivitu — existuje převážně nepozorná forma, častější u dívek a často poddiagnostikovaná.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Nevyřeší se to</strong> tím, že se „víc snaží“: obtíž spočívá v neurologické seberegulaci, nikoli ve vůli.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Rozdělit pokyny na části: po jednom, písemně na tabuli, s vymezeným časem — sníží se tím zátěž pracovní paměti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Umožnit legitimní pohyb (rozdávání pomůcek, mazání tabule, vyřizování vzkazů).",
        "Omezit konkurující podněty (místo dál od okna, dveří a nejhlučnější skupiny).",
        "Okamžité a časté pozitivní posílení: u ADHD je citlivost na odměnu pozměněná (averze k čekání), proto okamžité odměny fungují lépe než odložené.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Začněte tím, co žák dělá dobře — schůzka by neměla začínat výčtem stížností, jinak se rodič defenzivně uzavře.",
        "Popisujte pozorované chování, nikoli diagnózy: „když jdou za sebou víc než dva kroky, ztratí nit“ místo „má ADHD“.",
        "Předjímejte reakci „doma to tak není“ — vysvětlete, že skupinové prostředí a nárok na dlouhodobou pozornost ve třídě činí příznaky viditelnějšími.",
        "Pokud navrhujete vyšetření, představte ho jako pomoc, ne jako trest: „existuje podpora, která mu/jí může hodně pomoci“ místo „musí být vyšetřen/a“.",
      ]},
      { items: [
        "Přetrvávající kázeňské problémy navzdory úpravám ve třídě.",
        "Známky sociálního vyloučení ze strany vrstevníků.",
        "Známky komorbidity (úzkost, deprese, opoziční vzdorovité chování) — u ADHD časté a odůvodňující odeslání k odborníkovi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Čte pomalu a s námahou, s chybami při čtení izolovaných slov, a to i v textech, kterým při poslechu dobře rozumí.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Záměny písmen (b/d, p/q) jsou běžné u všech dětí, které začínají psát, a samy o sobě nejsou známkou dyslexie; ústřední obtíž je <strong>fonologická</strong> — spojování písmen se zvuky.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Přetrvávající pravopisné chyby, které nereagují na opakovanou opravu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Má sklon vyhýbat se hlasitému čtení; může to působit jako nezájem, ačkoli jde ve skutečnosti o obrannou strategii.",
        "Porozumění mluvenému slovu je výrazně lepší než porozumění čtenému textu — obtíž je specifická, nikoli obecné kognitivní omezení.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nejde</strong> o nedostatek inteligence: dyslexie je z definice nečekaná vzhledem k ostatním kognitivním schopnostem žáka.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nejde</strong> o problém se zrakem ani o pouhé „zaměňování písmen“: ústřední deficit spočívá ve fonologickém zpracování.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nedá se „vyléčit“</strong>, ale strukturovaná intervence v oblasti fonologického uvědomění a dekódování čtení soustavně zlepšuje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Zvětšení rozestupů mezi písmeny a řádky: existují experimentální důkazy, že zvětšený rozestup zlepšuje čtení u dyslektických dětí, a to bez předchozího nácviku.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Důkazy pro konkrétní typy písma „pro dyslektiky“ jsou naproti tomu slabší a nekonzistentní.",
        "Umožnit tiché čtení před jakýmkoli čtením nahlas — nikdy nevyžadovat čtení znenadání.",
        "Pokud cílem není hodnotit psaní, hodnotit obsah odděleně od pravopisu.",
        "Nabízet tytéž informace v různých formátech (zvuk, video, schémata).",
      ]},
      { items: [
        "Hned na začátku výslovně oddělit čtení od inteligence: „velmi dobře rozumí, když poslouchá — obtíž se týká konkrétně čtení“.",
        "Mít na paměti, že dyslexie má silnou dědičnou složku: jeden z rodičů může mít nediagnostikovanou dyslexii a rozhovor může oživit těžké vzpomínky z vlastní školní docházky.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vyhnout se předkládání pracovních listů plných červených oprav bez kontextu — nejprve ukázat, co už žák zvládá.",
        "Být konkrétní ohledně již zavedených úprav i těch, které může zákonný zástupce zopakovat doma: texty ve zvukové podobě, čtení nahlas bez časového tlaku.",
      ]},
      { items: [
        "Zhoršující se akademické sebepojetí („jsem hloupý“, „nezvládnu to“).",
        "Systematické vyhýbání se úkolům na čtení/psaní do té míry, že to ohrožuje další předměty.",
        "Výrazný nesoulad mezi ústním a písemným výkonem bez formální diagnózy — doporučit vyšetření v pedagogicko-psychologické poradně (PPP).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Obtíže s neohlášenými změnami — změna rozvrhu, učebny, suplujícího učitele.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Doslovná komunikace — uniká jí nuance, ironie, idiomatické výrazy.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Smyslová citlivost — zářivkové světlo, hluk v pozadí, etikety na oblečení mohou být nesnesitelné.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Zaměřené a hluboké zájmy o konkrétní témata — spojené s kognitivním stylem orientovaným na detail.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Při přetížení může působit nezaujatě nebo odtažitě, nikoli však vypnutě.",
      ]},
      { items: [
        "<strong>Není</strong> lineární škálou („více“ nebo „méně“ autistický) — je to vícerozměrný profil s odlišnými profily podpory v každé oblasti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Není</strong> nedostatkem empatie: obtíže ve vzájemném porozumění jsou obousměrné — i neautistickým lidem činí potíže číst autistické osoby („problém dvojí empatie“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Není</strong> špatným chováním, když se naruší rutina — je to skutečná neurologická reakce na ztrátu předvídatelnosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Předem upozorňujte na jakoukoli změnu rutiny, i zdánlivě nepatrnou — vizuální podpora a předjímání mají empirickou oporu.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Převádějte nevyřčená sociální pravidla na pravidla výslovná (co se dělá, co se nedělá, kdy).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Umožněte smyslové přestávky v tichém prostoru, je-li to třeba.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Využijte zaměřený zájem jako vstupní bod k učivu — je to síla, nikoli rozptýlení.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Pokud diagnóza již existuje, zeptejte se nejprve, co podle zákonného zástupce funguje — rodiče autistických dětí často vědí o svém dítěti více než jakákoli zpráva.",
        "Pokud diagnóza není, buďte velmi obezřetní: popisujte konkrétní situace, aniž byste při prvním setkání kdy použili slovo „autismus“ — „když se rutina změní bez upozornění, vaše dítě se velmi rozruší způsobem, který přesahuje běžnou míru“.",
        "Oceňte úsilí zákonného zástupce — vytvářet doma strukturu a předvídatelnost je náročné a jeho uznání vytváří spojenectví.",
        "Nikdy nesrovnávejte s „ostatními žáky“ ani se sourozenci — každý profil ve spektru je jiný a srovnávání je vždy kontraproduktivní.",
      ]},
      { items: [
        "Časté krize („meltdowny“) po školním dni.",
        "Trvalé odmítání školy spojené se smyslovým přetížením.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Postupující sociální izolace navzdory pokusům o mediaci.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Rukopis obtížný, pomalý a často nečitelný — kvůli skutečné motorické obtíži, nikoli z nedbalosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Obtíž v prostorovém uspořádání sešitu, ve správě pomůcek a v sekvencích kroků.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Může působit „nešikovně“ — rozlévá nápoje, naráží do nábytku, má potíže ve sportu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nepřiměřená únava po úkolech, které vyžadují dlouhodobou jemnou koordinaci.",
        "Poznávací složka bývá obvykle zachována — odtud častá frustrace mezi tím, co dítě umí, a tím, co dokáže ukázat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Není to</strong> lenost ani nedostatek snahy.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Není to</strong> jen špatný rukopis: klinickým termínem je vývojová porucha koordinace (DCD) a postihuje plánování a motorické sekvencování, nejen psaní.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nevyřeší se to</strong> tím, že se „bude víc trénovat psaní“: účinná intervence je zaměřená na úkol, nikoli na mechanické opakování.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Umožnit používání klávesnice/tabletu u rozsáhlejších písemných prací.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Omezit mechanické opisování z tabule — poskytnout poznámky, je-li to relevantní.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Poskytovat jasné kontrolní seznamy pro úkoly s více kroky.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Hodnotit výsledek podle obsahu, nikoli podle fyzické úpravy.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Vysvětlit, co je dyspraxie, jednoduchým jazykem — většina rodičů tento termín nikdy neslyšela: „je to neurologická obtíž v koordinaci pohybů, není to nedbalost ani nedostatek snahy“.",
        "Nečitelný rukopis je bodem největšího napětí s rodiči — ukázat, že hodnocení nyní oceňuje obsah, a ne formu, pomáhá zmírnit úzkost na obou stranách.",
        "Navrhnout praktické nástroje pro domácí použití: hlasový diktát v mobilu na poznámky, klávesnici na rozsáhlé písemné práce.",
        "Pokud se v předchozích letech objevila označení „je líný/líná“ nebo „nesnaží se“, pojmenovat to přímo: „vím, že jste to už slyšel/a dříve — můj pohled je jiný“.",
      ]},
      { items: [
        "Úplné odmítání písemné produkce.",
        "Sociální izolace v kontextech fyzické aktivity.",
        "Známky somatizované úzkosti před písemnými testy — psychosociální utrpení je součástí klinického obrazu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Dokončí úkoly během několika minut, zatímco třídě to trvá celou vyučovací hodinu.",
        "Klade otázky, které přesahují rámec látky — nebo aktivně zpochybňuje to, co se právě učí.",
        "Může působit nezaujatě, neukázněně nebo apaticky — často jde o příznaky chronické nudy a nevyužívání potenciálu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Výrazná emoční citlivost; může být úzkostný nebo perfekcionistický — psychosociální faktory jsou pro rozvoj nadání rozhodující.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reálné riziko nevyužívání potenciálu — může se naučit skrývat své schopnosti, aby společensky nevyčníval.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Není</strong> totéž co dobré chování ani dobré výsledky — mnoho nadaných žáků podává průměrné výkony kvůli nezájmu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Neznamená</strong> „nepotřebuje pomoc“: potřebuje jiné výzvy, protože schopnost se promění ve výkon jen tehdy, je-li cíleně rozvíjena.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Není</strong> neslučitelné s neurodivergencí — dvojí výjimečnost (2e) existuje, je častá a bývá často maskovaná.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Mít vždy připravené rozšiřující úkoly — ne více téhož, ale látku hlubší nebo více aplikovanou.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Umožnit samostatné zkoumání témat, která žáka zajímají, v rámci učiva.",
        "Hodnotit podle náročnosti, ne podle snadnosti — zadávat náročnější práce výměnou za menší objem.",
        "Rozpoznat a uznat emoční citlivost, aniž bychom ji patologizovali.",
      ]},
      { items: [
        "Předejít pýše a přesměrovat ji: „je zjevně velmi schopný — a právě proto nuda začíná působit problémy“.",
        "Vysvětlit paradox nadání: dobré výsledky neznamenají, že je vše v pořádku, a nevyužívání potenciálu z nezájmu je běžné a zvratné.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pokud žák skrývá své schopnosti, aby se společensky začlenil, pojmenovat to citlivě — je to známka trápení, ne skromnosti.",
        "Navrhnout rodičům, aby doma oceňovali proces místo výsledku: zvídavost, hloubka a obtížné otázky mají větší hodnotu než vysoké známky ze snadných úkolů.",
      ]},
      { items: [
        "Příznaky úzkosti nebo deprese spojené s extrémním perfekcionismem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Výrazná sociální izolace daná pocitem, že je „jiný“ než vrstevníci.",
        "Náhlý pokles školního výkonu u žáka dříve identifikovaného jako schopný.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Rozumí mnohem méně, než se zdá — konverzační jazyk se rozvíjí mnohem dříve než jazyk akademický, takže žák může působit plynule, aniž by stačil sledovat učivo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Zdánlivě slabý studijní výkon, často neúměrný skutečným schopnostem.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Mlčení ve třídě — může jít o normální „tiché období“ při osvojování jazyka, nikoli o nezájem.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Na konci dne může být vyčerpaný ze zpracovávání jazyka v reálném čase.",
        "Riziko poddiagnostikování skutečných speciálních vzdělávacích potřeb (dyslexie, ADHD), když se vše připisuje jazykové bariéře.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nejde o</strong> nedostatek inteligence ani schopností.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nejde</strong> pouze o otázku času: rozvoj akademického jazyka trvá roky a bez explicitní podpory se mnozí žáci ustálí na nízké funkční úrovni.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nevyřeší to</strong> automatický překlad během hodiny — je to proces trvající roky a mateřský jazyk je zdrojem, nikoli překážkou.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Poskytovat materiály s klíčovou slovní zásobou přeloženou do mateřského jazyka.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Ověřovat znalosti pomocí vizuální nebo praktické ukázky, kdykoli je to možné.",
        "Spárovat s dvojjazyčným spolužákem pro neformální zprostředkování v klíčových okamžicích.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Přijímat počáteční projevy s gramatickými chybami — v první fázi opravovat obsah, nikoli formu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Samotná schůzka je bariérou — zákonný zástupce nemusí ovládat češtinu na úrovni dostatečné pro složitý rozhovor. Připravte si předem jednoduché písemné materiály nebo požádejte o tlumočnickou podporu.",
        "Nepředpokládejte, že zákonný zástupce zná český vzdělávací systém — vysvětlete, co je školní poradenské pracoviště (ŠPP), co je podpůrné opatření, co obnáší vyšetření, aniž byste cokoli považovali za samozřejmé.",
        "Jasně oddělujte jazykovou bariéru od studijních schopností: „Vaše dítě je schopné — učí se jazyk zároveň s učivem, což je velmi náročné.“<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Buďte citliví k migračnímu kontextu: rodiny uprchlíků nebo v neregulérní situaci mohou institucím nedůvěřovat. Budujte důvěru dříve, než budete žádat o dokumenty nebo doporučení.",
      ]},
      { items: [
        "Známky sociální izolace nebo šikany spojené s postavením zahraničního žáka.",
        "Stagnace v osvojování jazyka po prvním roce.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Známky traumatu spojeného s migračním kontextem (zejména u uprchlíků).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Údaje nezletilých podléhají zvýšené ochraně (čl. 8 GDPR). Souhlas zákonných zástupců je povinný.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ověřte, kde nástroj ukládá data — na evropských serverech, mimoevropských, anonymizovaně či nikoli.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Do nástrojů generativní AI nikdy nevkládejte celá jména, adresy, identifikační čísla ani klinické diagnózy.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Rozlišujte institucionální využití (smlouvu uzavírá škola) od osobního využití učitele (individuální odpovědnost).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systémy trénované převážně na anglojazyčných datech mohou mít horší výkon v češtině a v českojazyčných kontextech.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatická doporučení mohou zesilovat stereotypy týkající se pohlaví, etnicity nebo společenské třídy — kriticky je ověřujte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modely „predikce akademického rizika“ jsou obzvláště problematické — často reprodukují existující nerovnosti, místo aby rozpoznávaly potřeby.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Cílem je posílit autonomii žáka, nikoli nahradit kognitivní práci, která ji rozvíjí.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Rozlišujte <strong>nástroj přístupu</strong> (text-to-speech pro žáka s dyslexií) od <strong>nástroje náhrady</strong> (ChatGPT píšící sloh).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Pravidelně vyhodnocujte: rozvíjí žák kompetenci, nebo si rozvíjí závislost na nástroji?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Řeší nástroj skutečnou překážku, nebo vytváří zkratku, která vynechává učení?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Jsou vložená data chráněna a existuje souhlas?",
        "<strong>3.</strong> Bude výstup nástroje ověřen člověkem, než se dostane k žákovi?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Existuje alternativa bez AI, která funguje stejně dobře?",
        "<strong>5.</strong> Pokud nástroj zítra přestane existovat, zůstane žák bez pomoci?",
      ]},
    ],
    references: [
      "Evropská unie. (2016). <em>Nařízení (EU) 2016/679 (obecné nařízení o ochraně osobních údajů)</em>, čl. 8. Úřední věstník Evropské unie, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Připravit kolegy na odpovědné začlenění UI do výuky cizího jazyka, včetně tvorby materiálů přizpůsobitelných různým profilům učení.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Není to prezentace — je to společná tvorba. Každý účastník odchází s alespoň jedním zdrojem připraveným k vyzkoušení.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Uvedení do problému — heterogenní třída a proč „více téhož“ nefunguje.",
        "<strong>10–25 min:</strong> Mapa profilů — představení šesti karet Farol s reálnými (anonymizovanými) případy.",
        "<strong>25–45 min:</strong> Praktická ukázka — tři nástroje, tři případy užití, tři odlišné profily.",
        "<strong>45–75 min:</strong> Práce ve dvojicích — každá dvojice přizpůsobí stávající materiál konkrétnímu profilu.",
        "<strong>75–85 min:</strong> Rychlé sdílení — každá dvojice představí svůj výtvor za 1 minutu.",
        "<strong>85–90 min:</strong> Závazky — každý účastník si vybere materiál k vyzkoušení a domluví se sezení se zpětnou vazbou za 30 dní.",
      ]},
      { items: [
        "Přístup k internetu a k institucionálním účtům v předváděných nástrojích.",
        "Stávající materiály každého účastníka (pracovní list, test nebo plán hodiny).",
        "Vytištěné karty profilů Farol k nahlédnutí.",
      ]},
      { items: [
        "Každý účastník vytvoří během sezení alespoň jeden přizpůsobený materiál.",
        "Sezení se zpětnou vazbou po 30 dnech, při kterém alespoň 60 % účastníků uvádí skutečné zavedení do praxe.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Alespoň jeden materiál vytvořený během sezení je přijat jako sdílený zdroj katedry.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "<strong>Zákon č. 561/2004 Sb.</strong> (Školský zákon), základní právní rámec vzdělávání v ČR.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Vyhláška č. 27/2016 Sb.</strong> o vzdělávání žáků se speciálními vzdělávacími potřebami, podpůrná opatření 1.–5. stupně.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Akční plán inkluzivního vzdělávání MŠMT, závazek k inkluzivnímu přístupu.",
        "Úmluva OSN o právech osob se zdravotním postižením (2006), ratifikovaná ČR; zakotvuje právo na inkluzivní vzdělávání.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Plán pedagogické podpory (PLPP): každý učitel jej může zavést bez doporučení PPP; zahrnuje úpravy metod, organizace a hodnocení.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Uplatňovat principy Univerzálního designu pro učení: více způsobů prezentace, vyjadřování a zapojení.",
        "Bez formální diagnózy lze aplikovat rozumné úpravy: prodloužený čas, ústní odpovědi, alternativní formáty.",
        "Zaznamenávat neformální pozorování žáků s možnými neuspokojenými potřebami, výchozí bod pro doporučení.",
      ]},
      { items: [
        "Pedagogicko-psychologická poradna (PPP) nebo Speciálně pedagogické centrum (SPC), první kontakt při identifikaci obtíží.",
        "Doporučení PPP/SPC, základ pro přiznání podpůrných opatření.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Individuální vzdělávací plán (IVP), vypracovává se ve spolupráci učitele, PPP/SPC, rodičů a žáka.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Podpůrná opatření 1.–5. stupně, od úprav ve třídě až po speciální školy.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Nadaní žáci: §17 Školského zákona, právo na vzdělávání odpovídající jejich možnostem.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Systém podpory nadaných žáků NPI ČR, přeřazení do vyššího ročníku, kroužky a rozšiřující programy.",
        "Dokumentovat projevy nadání a začlenit rozšiřující úkoly do plánování výuky.",
      ]},
      { items: [
        "Žáci cizinci: přípravné třídy (§ 46 školského zákona), bezplatná jazyková podpora češtiny.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Metodické doporučení MŠMT pro vzdělávání cizinců, rámec pro jazykovou a integrační podporu.",
        "Jazyková bariéra musí být jasně oddělena od vzdělávacích obtíží, žák nesmí být doporučen k vyšetření jen kvůli neznalosti jazyka.",
        "Školy s větším podílem žáků cizinců by měly mít plán interkulturní výchovy.",
      ]},
      { items: [
        "Rychlý přehled: Školský zákon 561/2004, Vyhl. 27/2016, PLPP, IVP, PPP, SPC, podpůrná opatření 1–5. stupně.",
        "Klíčové dokumenty: IVP, žákovská dokumentace, školní plán inkluzivního vzdělávání.",
        "První krok při obavách o žáka: dokumentovat, poradit se s výchovným poradcem, kontaktovat rodiče, v tomto pořadí.",
        "Ochrana dat: veškerá data o podpoře žáků podléhají GDPR a zákonu č. 110/2019 Sb. o zpracování osobních údajů; nesdílet citlivé informace mimo tým bez souhlasu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Úmluva OSN o právech osob se zdravotním postižením</em> (2006), ratifikovaná Českou republikou (č. 10/2010 Sb. m. s.); článek 24 zakotvuje právo na inkluzivní vzdělávání.",
      "<em>Zákon č. 561/2004 Sb., o předškolním, základním, středním, vyšším odborném a jiném vzdělávání (školský zákon)</em>; základní právní rámec vzdělávání v ČR, včetně vzdělávání nadaných žáků (§ 17) a žáků se speciálními vzdělávacími potřebami (§ 16).",
      "<em>Vyhláška č. 27/2016 Sb., o vzdělávání žáků se speciálními vzdělávacími potřebami a žáků nadaných</em>; upravuje podpůrná opatření 1.–5. stupně, plán pedagogické podpory (PLPP) a individuální vzdělávací plán (IVP).",
      "<em>Zákon č. 110/2019 Sb., o zpracování osobních údajů</em>, v návaznosti na obecné nařízení o ochraně osobních údajů (GDPR).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagogická diferenciace znamená přizpůsobit způsob, jakým se vyučuje — nikoli snižovat očekávání. Cíl učení může být pro všechny stejný; liší se cesta k němu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Model UDL (Universal Design for Learning) navrhuje tři principy: více způsobů reprezentace (jak je obsah prezentován), více způsobů jednání a vyjádření (jak žák odpovídá) a více způsobů zapojení (co žáka motivuje).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferencovat neznamená vytvářet přípravu na hodinu pro každého žáka zvlášť — jde o to vytvořit dostatečnou flexibilitu, aby tatáž hodina vyhovovala různým profilům žáků.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Není to</strong> okleštění učiva pro žáky s největšími obtížemi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Není to</strong> neustálé zadávání odlišných úkolů různým žákům — to izoluje a nálepkuje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Není to</strong> pouze diferencovaná práce na papíře — diferenciace zahrnuje i způsob, jakým učitel vysvětluje, klade otázky a hodnotí.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Řízený výběr: nabídněte 2–3 možnosti formátu odpovědi (psaný text, ústní projev, schematický nákres) — všichni reagují na tentýž obsah.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Lešení (scaffolding): poskytněte žákům s většími obtížemi strukturovanou oporu; postupně ji odebírejte, jak roste jejich samostatnost.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Flexibilní seskupování: skupiny podle zájmu, podle úrovně zvládnutí učiva nebo smíšené — obměňujte je, abyste předešli stálým skupinám, které se stávají identitami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Úpravy času: více času neznamená nižší náročnost. U žáků s ADHD nebo dyspraxií rozdělte úkol na části s naplánovanými přestávkami.",
        "Úroveň složitosti: pro totéž téma vytvářejte verze s větší či menší jazykovou podporou, s příklady nebo bez nich, s vizuálními nápovědami nebo bez nich.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Hodnoťte, co žák ví, nikoli jak píše. Žák s dyslexií může prokázat porozumění pojmům ústně nebo s technologickou podporou.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Jasné hodnoticí kritéria (rubriky) sdílené před úkolem umožňují žákovi vědět, co se od něj očekává, bez ohledu na zvolený formát.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfolio nebo hodnocení založené na důkazech umožňuje žákovi ukázat pokrok v čase, nejen v jednom okamžiku testu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Když diferenciace ve třídě přestává stačit a žák stále nemá přístup k učivu, je to známka toho, že může být potřeba specializovaná podpora.",
        "Diferenciace nenahrazuje podpůrná opatření školy (školní poradenské pracoviště, terapeuti, speciální vzdělávání) — je to to, co se děje v běžné třídě jako jejich doplněk.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativní hodnocení je jakákoli praxe, která shromažďuje informace o učení během procesu — a tyto informace využívá k úpravě výuky nebo podpory žáka.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Na rozdíl od sumativního hodnocení (závěrečné známky) nemusí mít formativní hodnocení známku — musí mít zpětnou vazbu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Pro neurodivergentní žáky je formativní hodnocení obzvláště důležité, protože výkon v jednorázovém testu nemusí odrážet to, co skutečně umějí.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na konci hodiny žák odpoví na otázku během 2 minut — učitel okamžitě vidí, kdo látku pochopil a kdo ne.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semafor</strong>: zelená (rozumím), žlutá (mám pochybnosti), červená (nerozumím) — mohou to být fyzické kartičky, lepicí lístky nebo digitální forma.",
        "<strong>Think-Pair-Share</strong>: žák nejprve přemýšlí sám, poté to probere s dvojicí a nakonec sdílí s celou třídou — snižuje to úzkost z přímé odpovědi.",
        "<strong>Dveře na odchodu</strong>: než žák odejde, řekne učiteli jednu věc, kterou se naučil, a jednu otázku, kterou ještě má.",
      ]},
      { items: [
        "Účinná zpětná vazba je konkrétní, využitelná a poskytnutá včas: „na straně 2 se argument ztrácí, protože chybí propojení s důkazy“ je užitečné; „mohlo to být lepší“ není.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "U žáků s ADHD: okamžitá zpětná vazba je účinnější než odložená. Nečekat až do konce úkolu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "U žáků s dyslexií: ústní nebo zvuková zpětná vazba může být přístupnější než rozsáhlé písemné komentáře.",
        "Vyhýbat se vzájemnému porovnávání žáků — porovnávat žáka s jeho vlastním předchozím pokrokem.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: hodnocení v několika krátkých momentech místo jediného dlouhého testu. Omezit rušivé podněty v prostředí hodnocení.",
        "Dyslexie: umožnit ústní odpovědi, čas navíc nebo využití převodu textu na řeč. Hodnotit obsah, nikoli pravopis.",
        "Autismus: hodnocení s jasnými a jednoznačnými písemnými pokyny. Předem upozornit na změny formátu.",
        "Mimořádné nadání: vyhýbat se hodnocení založenému na pouhé reprodukci obsahu — zařadit otázky vyžadující analýzu, syntézu a tvorbu.",
      ]},
      { items: [
        "Když ani s úpravami hodnocení žák nedokáže prokázat učení, je to signál, že může existovat hlubší bariéra, kterou je třeba prozkoumat se školním poradenským pracovištěm (ŠPP).",
        "Přetrvávající vzorce (měsíce, nikoli dny) specifických obtíží v určité oblasti by měly být formálně nahlášeny.",
      ]},
    ]},
  },

  sv: {
    tdah: { sections: [
      { items: [
        "Svårt att hålla kvar uppmärksamheten vid långa uppgifter; tappar tråden vid instruktioner med flera steg.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Ständig rörelse — sitter inte still, pillar med händerna, reser sig utan synbar anledning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Svarar innan frågan är klar; avbryter kamrater och läraren.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Glömmer material, tidsfrister och instruktioner som getts muntligt för några minuter sedan — arbetsminnet är överbelastat.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kan hyperfokusera på det som intresserar och därmed ge det (felaktiga) intrycket att hen ”kan när hen vill”; i själva verket varierar prestationen med intresse och belöning.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Det är inte</strong> dåligt uppförande, lättja eller karaktärsbrist: dessa missuppfattningar stigmatiserar och fördröjer stödet.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det är inte</strong> alltid synlig hyperaktivitet — det finns en huvudsakligen ouppmärksam form, som är vanligare hos flickor och ofta underdiagnostiserad.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Det löses inte</strong> genom att ”anstränga sig mer”: svårigheten ligger i den neurologiska självregleringen, inte i viljan.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Dela upp instruktionerna: en i taget, skriftligt på tavlan, med fastställd tid — det minskar belastningen på arbetsminnet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tillåt legitim rörelse (dela ut material, sudda tavlan, springa ärenden).",
        "Minska konkurrerande stimuli (en plats långt från fönstret, från dörren, från den stökigaste gruppen).",
        "Omedelbar och frekvent positiv förstärkning: vid ADHD är belöningskänsligheten förändrad (motvilja mot väntan), varför omedelbara belöningar fungerar bättre än fördröjda.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Börja med det eleven gör bra — mötet bör inte inledas med en uppräkning av klagomål, annars sluter sig vårdnadshavaren defensivt.",
        "Beskriv observerade beteenden, inte diagnoser: ”när det är fler än två steg i rad tappar hen tråden” i stället för ”har ADHD”.",
        "Förekom reaktionen ”hemma är det inte så” — förklara att gruppsammanhanget och kravet på långvarig uppmärksamhet i klassrummet gör symtomen mer synliga.",
        "Om du föreslår en utredning, presentera den som en resurs, inte som ett straff: ”det finns stöd som kan hjälpa hen mycket” i stället för ”behöver utredas”.",
      ]},
      { items: [
        "Ihållande regelbrott trots anpassningar i klassrummet.",
        "Tecken på utfrysning från jämnåriga.",
        "Tecken på samsjuklighet (ångest, depression, trotssyndrom) — vanliga vid ADHD och som motiverar remiss.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Läser långsamt och med ansträngning, med fel vid läsning av enstaka ord, även i texter som barnet förstår väl när de läses upp.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Bokstavskastningar (b/d, p/q) är vanliga hos alla barn som börjar skriva och är inte i sig ett tecken på dyslexi; den centrala svårigheten är <strong>fonologisk</strong> — att koppla bokstäver till ljud.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Ihållande stavfel som inte svarar på upprepad rättning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tenderar att undvika att läsa högt; det kan verka som ointresse men är i själva verket en skyddsstrategi.",
        "Hörförståelsen är klart bättre än läsförståelsen — svårigheten är specifik och inte en allmän kognitiv begränsning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Det är inte</strong> brist på intelligens: per definition är dyslexi oväntad med tanke på elevens övriga kognitiva förmågor.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Det är inte</strong> ett synproblem och inte heller bara att ”kasta om bokstäver”: det centrala bristfälliga området är den fonologiska bearbetningen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Den går inte att ”bota”</strong>, men en strukturerad insats för den fonologiska medvetenheten och avkodningen förbättrar läsningen på ett konsekvent sätt.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Öka avståndet mellan bokstäver och rader: det finns experimentellt stöd för att ett ökat avstånd förbättrar läsningen hos barn med dyslexi, utan föregående träning.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Stödet för specifika teckensnitt ”för dyslektiker” är däremot svagare och mer inkonsekvent.",
        "Tillåt tyst läsning före all högläsning — be aldrig om läsning oannonserat.",
        "När syftet inte är att bedöma skrivandet, bedöm innehållet skilt från stavningen.",
        "Erbjud samma information i flera format (ljud, video, scheman).",
      ]},
      { items: [
        "Skilj uttryckligen på läsning och intelligens redan från början: ”han förstår mycket väl när han lyssnar — svårigheten är specifik för läsningen”.",
        "Ha i åtanke att dyslexi har en stark ärftlig komponent: en av föräldrarna kan ha en odiagnostiserad dyslexi, och samtalet kan väcka svåra minnen från den egna skoltiden.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Undvik att visa arbetsblad fulla av röda rättningar utan sammanhang — visa först vad eleven redan klarar.",
        "Var konkret om de anpassningar som redan pågår och de som vårdnadshavaren kan återskapa hemma: texter som ljud, högläsning utan tidspress.",
      ]},
      { items: [
        "Försämrad akademisk självbild (”jag är dum”, ”jag klarar det inte”).",
        "Systematiskt undvikande av läs-/skrivuppgifter i en sådan grad att andra ämnen påverkas.",
        "Markant skillnad mellan muntlig och skriftlig prestation utan formell diagnos — remittera för läs- och skrivutredning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Svårigheter med oannonserade förändringar – schemaändring, byte av sal, vikarierande lärare.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bokstavlig kommunikation – nyanser, ironi och idiomatiska uttryck går förlorade.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensorisk känslighet – lysrörsljus, bakgrundsljud och klädlappar kan vara outhärdliga.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fokuserade och djupa intressen för specifika ämnen – kopplade till en detaljinriktad kognitiv stil.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Kan verka ointresserad eller frånvarande när hen är överbelastad, inte avstängd.",
      ]},
      { items: [
        "<strong>Det är inte</strong> en linjär skala (”mer” eller ”mindre” autistisk) – det är en flerdimensionell profil med olika stödbehov inom varje domän.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Det är inte</strong> brist på empati: svårigheterna med ömsesidig förståelse är ömsesidiga – även icke-autistiska personer har svårt att läsa av autistiska personer (”dubbelempatiproblemet”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det är inte</strong> dåligt uppförande när en rutin bryts – det är en verklig neurologisk reaktion på förlusten av förutsägbarhet.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Avisera varje rutinförändring i förväg, även om den verkar obetydlig – visuellt stöd och förberedelse har empiriskt stöd.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Göra om implicita sociala regler till explicita regler (vad man gör, vad man inte gör, när).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Tillåta sensoriska pauser i ett tyst utrymme vid behov.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Använda det fokuserade intresset som ingång till läroplansinnehåll – en styrka, inte en distraktion.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Om diagnosen redan finns, fråga först vad vårdnadshavaren vet fungerar – föräldrar till autistiska barn vet ofta mer om sitt barn än någon rapport.",
        "Om det inte finns någon diagnos, var mycket försiktig: beskriv konkreta situationer utan att någonsin använda ordet ”autism” vid ett första möte – ”när rutinen ändras utan förvarning blir ditt barn mycket upprört på ett sätt som går utöver det typiska”.",
        "Bekräfta vårdnadshavarens insats – att skapa struktur och förutsägbarhet hemma är krävande, och att erkänna det skapar en allians.",
        "Jämför aldrig med ”andra elever” eller med syskon – varje profil inom spektrumet är olik och jämförelser är alltid kontraproduktiva.",
      ]},
      { items: [
        "Återkommande kriser (”meltdowns”) efter skoldagen.",
        "Ihållande skolvägran kopplad till sensorisk överbelastning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tilltagande social isolering trots försök till medling.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Handstilen är mödosam, långsam och ofta oläslig – på grund av en verklig motorisk svårighet, inte på grund av slarv.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Svårigheter med den rumsliga organiseringen av skrivboken, med hanteringen av material och med stegvisa sekvenser.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kan verka ”klumpig” – spiller ut drycker, krockar med möbler, har svårt med idrott.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Oproportionerlig trötthet efter uppgifter som kräver ihållande finmotorisk koordination.",
        "Den kognitiva komponenten är vanligtvis bevarad – därav den vanliga frustrationen mellan att veta och att kunna visa det.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Det är inte</strong> lättja eller bristande engagemang.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Det är inte</strong> bara dålig handstil: den kliniska termen är utvecklingsrelaterad koordinationsstörning (DCD) och den påverkar den motoriska planeringen och sekvenseringen, inte bara skrivandet.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Det löses inte</strong> med ”att träna mer på att skriva”: en effektiv intervention är uppgiftsorienterad, inte mekanisk upprepning.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tillåta användning av tangentbord/surfplatta vid omfattande skriftliga arbeten.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Minska det mekaniska avskrivandet från tavlan – tillhandahålla anteckningar när det är relevant.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tillhandahålla tydliga checklistor för uppgifter med flera steg.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Bedöma produkten efter innehållet, inte efter den fysiska presentationen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Förklara i enkelt språk vad dyspraxi är – de flesta vårdnadshavare har aldrig hört termen: ”det är en neurologisk svårighet i koordinationen av rörelser, inte slarv och inte bristande ansträngning”.",
        "Den oläsliga handstilen är den största friktionspunkten med vårdnadshavarna – att visa att bedömningen numera värdesätter innehållet och inte formen hjälper till att lindra oron på båda sidor.",
        "Föreslå praktiska verktyg för hemmet: rösttext på mobilen för anteckningar, tangentbord för omfattande skriftliga arbeten.",
        "Om det finns en historik av ”han/hon är lat” eller ”anstränger sig inte” från tidigare år, benämn det direkt: ”jag vet att ni har hört det förut – min tolkning är en annan”.",
      ]},
      { items: [
        "Total vägran att producera skriftligt arbete.",
        "Social isolering i sammanhang med fysisk aktivitet.",
        "Tecken på somatiserad ångest före skriftliga prov – det psykosociala lidandet är en del av bilden.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Avslutar uppgifterna på några minuter medan klassen behöver hela lektionen.",
        "Ställer frågor som ligger utanför ämnet — eller utmanar aktivt det som lärs ut.",
        "Kan framstå som ointresserad, odisciplinerad eller apatisk — ofta tecken på kronisk leda och på underprestation.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Uttalad emotionell känslighet; kan vara ängslig eller perfektionistisk — psykosociala faktorer är avgörande för talangutvecklingen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Verklig risk för underprestation — kan lära sig att dölja sin förmåga för att inte sticka ut socialt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Är inte</strong> liktydigt med gott uppförande eller goda resultat — många särbegåvade elever presterar medelmåttigt på grund av ointresse.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Är inte</strong> ”behöver ingen hjälp”: eleven behöver andra utmaningar, eftersom förmåga blir prestation först när den medvetet utvecklas.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Är inte</strong> oförenligt med neurodivergens — dubbel exceptionalitet (2e) finns, är vanlig och är ofta maskerad.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Ha alltid fördjupningsuppgifter förberedda — inte mer av samma sak, utan djupare eller mer tillämpat stoff.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tillåt självständig undersökning av ämnen som eleven är intresserad av inom kursplanen.",
        "Bedöm efter utmaning, inte efter enkelhet — be om mer krävande arbeten i utbyte mot mindre mängd.",
        "Erkänn och bekräfta den emotionella känsligheten utan att patologisera den.",
      ]},
      { items: [
        "Föregrip stoltheten och styr om den: ”Hen är uppenbart mycket begåvad — och det är just därför ledan skapar problem.”",
        "Förklara begåvningens paradox: goda resultat betyder inte att allt står väl till, och underprestation av ointresse är vanlig och reversibel.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Om eleven döljer sin förmåga för att passa in socialt, benämn det varsamt — det är ett tecken på lidande, inte på blygsamhet.",
        "Föreslå för vårdnadshavarna att de värderar processen framför resultatet hemma: nyfikenhet, djup och svåra frågor väger tyngre än höga betyg på lätta uppgifter.",
      ]},
      { items: [
        "Tecken på ångest eller depression kopplade till extrem perfektionism.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Uttalad social isolering präglad av att känna sig ”annorlunda” än jämnåriga.",
        "Plötslig akademisk underprestation hos en elev som tidigare identifierats som begåvad.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Förstår mycket mindre än det verkar – vardagsspråket utvecklas långt tidigare än skolspråket, vilket gör att en elev kan verka flytande utan att hänga med i undervisningens innehåll.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Skenbart svaga skolprestationer, ofta oproportionerliga i förhållande till den verkliga förmågan.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tystnad i klassrummet – det kan vara en normal ”tyst period” vid andraspråksinlärning och inte ointresse.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kan vara utmattad i slutet av dagen av att bearbeta språket i realtid.",
        "Risk för underdiagnostik av verkliga stödbehov (dyslexi, ADHD) genom att allt tillskrivs språkbarriären.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Det är inte</strong> brist på intelligens eller förmåga.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Det är inte</strong> enbart en fråga om tid: skolspråket tar år att utveckla, och utan uttalat stöd stannar många elever på en låg funktionell nivå.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Det löses inte</strong> med automatisk översättning under lektionen – det är en process som tar år, och modersmålet är en resurs, inte ett hinder.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tillhandahålla material med centralt ordförråd översatt till modersmålet.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Bedöma kunskaperna genom visuell eller praktisk demonstration när det är möjligt.",
        "Para ihop med en tvåspråkig klasskamrat för informell stöttning i kritiska stunder.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Acceptera tidiga språkproduktioner med grammatiska fel – i det första skedet korrigera innehållet, inte formen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Själva mötet är en barriär – vårdnadshavaren behärskar kanske inte svenska tillräckligt väl för ett komplext samtal. Förbered enkelt skriftligt material i förväg, eller be om översättningsstöd.",
        "Förutsätt inte att vårdnadshavaren känner till det svenska utbildningssystemet – förklara vad elevhälsan är, vad en stödåtgärd innebär och vad en utredning medför, utan att ta något för givet.",
        "Skilj tydligt på språkbarriär och skolförmåga: ”ditt barn är kapabelt – det lär sig språket samtidigt som det lär sig innehållet, vilket är mycket krävande”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Var lyhörd för migrationskontexten: familjer som är flyktingar eller saknar uppehållstillstånd kan hysa misstro mot institutioner. Bygg förtroende innan du ber om dokumentation eller hänvisningar.",
      ]},
      { items: [
        "Tecken på social isolering eller mobbning kopplade till situationen som utländsk elev.",
        "Stagnation i språkinlärningen efter det första året.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tecken på trauma kopplade till migrationskontexten (särskilt flyktingar).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Uppgifter om minderåriga omfattas av förstärkt skydd (art. 8 GDPR). Samtycke från vårdnadshavarna är obligatoriskt.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kontrollera var verktyget lagrar uppgifter – på europeiska eller icke-europeiska servrar, anonymiserade eller inte.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ange aldrig fullständiga namn, adresser, identifikationsnummer eller kliniska diagnoser i generativa AI-verktyg.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Skilj mellan institutionell användning (skolan tecknar avtal) och lärarens personliga användning (individuellt ansvar).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "System som tränats huvudsakligen på engelskspråkiga data kan prestera sämre på svenska och i svenskspråkiga sammanhang.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatiska rekommendationer kan förstärka stereotyper om kön, etnicitet eller klass – granska dem kritiskt.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modeller för ”prognos av akademisk risk” är särskilt problematiska – ofta reproducerar de befintliga ojämlikheter i stället för att identifiera behov.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Målet är att öka elevens självständighet, inte att ersätta det kognitiva arbete som utvecklar den.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Skilj mellan ett <strong>tillgångsverktyg</strong> (text-to-speech för en elev med dyslexi) och ett <strong>ersättningsverktyg</strong> (ChatGPT som skriver uppsatsen).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Utvärdera regelbundet: utvecklar eleven kompetens, eller utvecklar eleven ett beroende av verktyget?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Löser verktyget ett verkligt hinder eller skapar det en genväg som hoppar över lärandet?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Är de inmatade uppgifterna skyddade och finns det samtycke?",
        "<strong>3.</strong> Kommer verktygets resultat att granskas av en människa innan det når eleven?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Finns det ett alternativ utan AI som fungerar lika bra?",
        "<strong>5.</strong> Om verktyget skulle sluta finnas i morgon, står eleven då utan stöd?",
      ]},
    ],
    references: [
      "Europeiska unionen. (2016). <em>Förordning (EU) 2016/679 (allmän dataskyddsförordning)</em>, artikel 8. Europeiska unionens officiella tidning, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Ge kollegor förutsättningar att integrera AI på ett ansvarsfullt sätt i undervisningen i främmande språk, med framställning av material som kan anpassas till olika inlärningsprofiler.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Det här är ingen presentation – det är ett gemensamt skapande. Varje deltagare går därifrån med minst en färdig resurs att testa.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Inramning – problemet med den heterogena klassen och varför mer av samma sak inte fungerar.",
        "<strong>10–25 min:</strong> Profilkarta – presentation av Farols sex kort, med verkliga (anonymiserade) fall.",
        "<strong>25–45 min:</strong> Praktisk demonstration – tre verktyg, tre användningsfall, tre olika profiler.",
        "<strong>45–75 min:</strong> Pararbete – varje par anpassar ett befintligt material till en specifik profil.",
        "<strong>75–85 min:</strong> Snabb delning – varje par visar sitt resultat på 1 minut.",
        "<strong>85–90 min:</strong> Åtaganden – varje deltagare bestämmer ett material att testa, och en uppföljningssession bokas in efter 30 dagar.",
      ]},
      { items: [
        "Internetuppkoppling och institutionella konton i de verktyg som demonstreras.",
        "Befintligt material från varje deltagare (ett arbetsblad, ett prov eller en lektionsplanering).",
        "Utskrivna kort med Farols profiler att ha till hands.",
      ]},
      { items: [
        "Varje deltagare framställer minst ett anpassat material under sessionen.",
        "Uppföljningssession efter 30 dagar där minst 60 % av deltagarna rapporterar faktisk tillämpning.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Minst ett material som tagits fram under sessionen antas som en gemensam resurs för ämneslaget.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Skollagen (2010:800) kap. 3, alla elever har rätt till ledning och stimulans för att nå så långt som möjligt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Läroplan för grundskolan Lgr22, styr undervisningens mål och innehåll.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Specialpedagogiska skolmyndigheten (SPSM), nationell myndighet med rådgivning, stöd och resursskolor.",
        "FN:s konvention om rättigheter för personer med funktionsnedsättning (2006), ratificerad av Sverige; artikel 24 om inkluderande utbildning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Extra anpassningar (3 kap. 5 a §): kan sättas in av alla lärare utan föregående utredning, anpassat material, tydligare instruktioner, alternativa verktyg, extra tid.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tillämpa principer för Universell design för lärande: flera sätt att representera, uttrycka och engagera.",
        "Utan formell diagnos kan rimliga anpassningar göras: förlängd tid, muntliga svar, alternativa format.",
        "Dokumentera informella observationer av elever med möjliga oupptäckta behov, startpunkt för eventuell utredning.",
      ]},
      { items: [
        "Särskilt stöd (kap. 3 §7): utredning av rektor, åtgärdsprogram (ÅP), formell plan med uppföljning.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Elevhälsoteam (EHT) med kurator, psykolog, specialpedagog och skolsköterska, samordnar stöd.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Åtgärdsprogram utarbetas i samarbete med lärare, specialpedagog, vårdnadshavare och elev.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Vid komplexa behov kan SPSM konsulteras för rådgivning och bedömning.",
      ]},
      { items: [
        "Särbegåvade elever: Skolverkets stödmaterial (2019), inga enskilda särbegåvningslagar.",
        "Flexibel studiegång, acceleration och mentorskap möjliga inom ramen för Skollagen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Dokumentera tecken på avancerad förmåga och inkludera utmaningsuppgifter i planeringen.",
      ]},
      { items: [
        "Nyanlända elever: obligatorisk kartläggning (Skolverket), förberedelseklass (max 2 år), svenska som andraspråk (SVA).<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Studiehandledning på modersmålet, rätt för elever som behöver det för att nå kunskapskraven.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Språkbarriär ska tydligt separeras från inlärningssvårigheter, eleven ska inte utredas enbart p.g.a. språket.",
        "Skolor med många nyanlända bör ha en plan för interkulturellt lärande.",
      ]},
      { items: [
        "Snabbguide: Skollagen 2010:800 kap. 3, Lgr22, Extra anpassningar, Åtgärdsprogram, SPSM, SVA, förberedelseklass.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Viktiga dokument: Åtgärdsprogram (ÅP), elevakt, skolans inkluderingspolicy.",
        "Första steget vid oro för en elev: dokumentera, diskutera med specialpedagog, kontakta vårdnadshavare, i den ordningen.",
        "Dataskydd: all elevstöddata omfattas av GDPR och Dataskyddslagen; dela inte känslig information utanför elevhälsoteamet utan samtycke.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>FN:s konvention om rättigheter för personer med funktionsnedsättning</em> (CRPD, 2006), ratificerad av Sverige 2008 (i kraft 14 januari 2009); artikel 24 slår fast rätten till inkluderande utbildning.",
      "<em>Skollag (2010:800)</em>, särskilt kapitel 3 om barns och elevers utveckling mot målen och särskilt stöd (bl.a. ledning och stimulans, extra anpassningar enligt 3 kap. 5 a §, åtgärdsprogram enligt 3 kap. 7 §) samt bestämmelserna om elevhälsa.",
      "<em>Läroplan för grundskolan, förskoleklassen och fritidshemmet (Lgr22)</em>, fastställd genom förordning av regeringen; styr undervisningens mål, innehåll och kunskapskrav.",
      "<em>Dataskyddsförordningen</em> (GDPR, förordning (EU) 2016/679) och <em>lag (2018:218) med kompletterande bestämmelser till EU:s dataskyddsförordning</em> (dataskyddslagen); gäller all behandling av elevers personuppgifter.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagogisk differentiering innebär att anpassa hur man undervisar — inte att sänka förväntningarna. Lärandemålet kan vara detsamma för alla; det är vägen dit som varierar.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Modellen UDL (Universal Design for Learning) bygger på tre principer: flera sätt att representera (hur innehållet presenteras), flera sätt att agera och uttrycka sig (hur eleven svarar) och flera sätt att engagera sig (vad som motiverar eleven).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Att differentiera är inte att skapa en lektionsplan per elev — det är att skapa tillräckligt med flexibilitet för att samma lektion ska passa olika profiler.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Det är inte</strong> att begränsa läroplanen för de elever som har det svårare.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det är inte</strong> att alltid ge olika uppgifter till olika elever — det isolerar och sätter etiketter.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det är inte</strong> enbart differentierat arbete på papper — differentiering omfattar också hur läraren förklarar, frågar och bedömer.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Styrt val: erbjuda 2–3 alternativ för svarsformat (skriven text, muntligt, schematisk teckning) — alla arbetar med samma innehåll.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Stöttning (scaffolding): ge elever som har det svårare en strukturerad guide; ta bort guiden gradvis i takt med att självständigheten växer.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Flexibel gruppering: grupper efter intresse, efter färdighetsnivå eller blandade — rotera för att undvika fasta grupper som blir till identiteter.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Tidsanpassningar: mer tid betyder inte mindre stringens. För elever med ADHD eller dyspraxi, dela upp uppgiften i delar med inplanerade pauser.",
        "Komplexitetsnivå: skapa för samma ämne versioner med mer eller mindre språkligt stöd, med eller utan exempel, med eller utan visuella ledtrådar.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Bedöm vad eleven kan, inte hur hen skriver. En elev med dyslexi kan visa begreppslig förståelse muntligt eller med tekniskt stöd.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tydliga bedömningsmatriser som delas före uppgiften gör att eleven vet vad som förväntas, oavsett valt format.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfolio eller evidensbaserad bedömning gör att eleven kan visa framsteg över tid, inte bara vid ett provtillfälle.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "När differentieringen i klassrummet inte längre räcker till och eleven fortfarande inte får tillgång till läroplanen, är det ett tecken på att specialiserat stöd kan behövas.",
        "Differentiering ersätter inte skolans stödåtgärder (SPO, terapeuter, specialpedagogik) — det är vad som sker i det ordinarie klassrummet som ett komplement.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativ bedömning är all praktik som samlar in information om lärandet under processens gång – och använder den informationen för att anpassa undervisningen eller stödet till eleven.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Till skillnad från summativ bedömning (slutbetyg) behöver formativ bedömning inte ha något betyg – den måste ha återkoppling.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "För neurodivergenta elever är formativ bedömning särskilt viktig, eftersom prestationen på ett enstaka prov kanske inte återspeglar vad de faktiskt kan.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: i slutet av lektionen besvarar eleven en fråga på 2 minuter – läraren ser omedelbart vem som har förstått och vem som inte har det.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Trafikljus</strong>: grönt (jag förstod), gult (jag har frågor), rött (jag förstod inte) – det kan vara fysiska kort, post-it-lappar eller digitalt.",
        "<strong>Think-Pair-Share</strong>: eleven tänker först enskilt, diskuterar sedan med en kompis och delar därefter med klassen – det minskar ångesten inför att svara direkt.",
        "<strong>Utgångsdörr</strong>: innan eleven går säger hen en sak som hen har lärt sig och en fråga som hen fortfarande har till läraren.",
      ]},
      { items: [
        "Effektiv återkoppling är specifik, handlingsbar och ges i rätt tid: ”på sidan 2 tappas argumentet bort eftersom kopplingen till belägget saknas” är användbart; ”det här kunde vara bättre” är det inte.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "För elever med ADHD: omedelbar återkoppling är effektivare än fördröjd. Vänta inte tills uppgiften är slut.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "För elever med dyslexi: muntlig återkoppling eller återkoppling i ljudform kan vara mer tillgänglig än omfattande skriftliga kommentarer.",
        "Undvik att jämföra elever med varandra – jämför eleven med hens egen tidigare utveckling.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: bedömning vid flera korta tillfällen i stället för ett enda långt prov. Minska distraherande intryck i bedömningsmiljön.",
        "Dyslexi: tillåt muntliga svar, extra tid eller användning av text-till-tal. Bedöm innehållet, inte stavningen.",
        "Autism: bedömningar med tydliga och otvetydiga skriftliga instruktioner. Meddela i god tid om förändringar i formatet.",
        "Särskild begåvning: undvik bedömningar som bara handlar om att återge innehåll – inkludera frågor som kräver analys, syntes och skapande.",
      ]},
      { items: [
        "När en elev, även med anpassad bedömning, inte kan visa sitt lärande är det ett tecken på att det kan finnas ett djupare hinder som behöver utredas tillsammans med SPO (skolans vägledningstjänst).",
        "Ihållande mönster (månader, inte dagar) av en specifik svårighet inom ett område bör anmälas formellt.",
      ]},
    ]},
  },

  da: {
    tdah: { sections: [
      { items: [
        "Svært ved at fastholde opmærksomheden ved lange opgaver; mister tråden ved instruktioner med flere trin.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Konstant bevægelse — bliver ikke siddende, piller ved hænderne, rejser sig uden synlig grund.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Svarer, før spørgsmålet er færdigt; afbryder kammerater og læreren.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Glemmer materialer, frister og instruktioner, der blev givet mundtligt for få minutter siden — arbejdshukommelsen er overbelastet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kan hyperfokusere på det, der interesserer, og dermed give det (forkerte) indtryk, at vedkommende „kan, når han eller hun vil“; i virkeligheden varierer præstationen med interesse og belønning.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Det er ikke</strong> dårlig opførsel, dovenskab eller karaktersvaghed: disse misforståelser stigmatiserer og forsinker støtten.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det er ikke</strong> altid synlig hyperaktivitet — der findes en overvejende uopmærksom fremtrædelsesform, som er hyppigere hos piger og ofte underdiagnosticeret.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Det løses ikke</strong> ved at „anstrenge sig mere“: vanskeligheden ligger i den neurologiske selvregulering, ikke i viljen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Opdel instruktionerne: én ad gangen, skriftligt på tavlen, med fastsat tid — det mindsker belastningen af arbejdshukommelsen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tillad legitim bevægelse (dele materialer ud, viske tavlen af, gå ærinder).",
        "Reducer konkurrerende stimuli (en plads langt fra vinduet, fra døren, fra den mest larmende gruppe).",
        "Øjeblikkelig og hyppig positiv forstærkning: ved ADHD er belønningsfølsomheden ændret (modvilje mod at vente), hvorfor øjeblikkelige belønninger virker bedre end udskudte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Begynd med det, eleven gør godt — mødet må ikke begynde med en liste over klager, ellers lukker forælderen eller værgen sig defensivt.",
        "Beskriv observeret adfærd, ikke diagnoser: „når der er mere end to trin i træk, mister han eller hun tråden“ i stedet for „har ADHD“.",
        "Foregrib reaktionen „derhjemme er det ikke sådan“ — forklar, at gruppesammenhængen og kravet om vedvarende opmærksomhed i klassen gør symptomerne mere synlige.",
        "Hvis du foreslår en udredning, så fremlæg den som en ressource, ikke som en straf: „der findes støtte, som kan hjælpe ham eller hende meget“ i stedet for „skal udredes“.",
      ]},
      { items: [
        "Vedvarende regelbrud trods tilpasninger i klassen.",
        "Tegn på social udelukkelse fra jævnaldrende.",
        "Tegn på komorbiditet (angst, depression, oppositionel adfærdsforstyrrelse) — de er hyppige ved ADHD og begrunder henvisning.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Læser langsomt og med besvær, med fejl ved læsning af enkeltstående ord, selv i tekster, som barnet forstår godt, når de læses højt.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Bogstavombytninger (b/d, p/q) er almindelige hos alle børn, der begynder at skrive, og er ikke i sig selv et tegn på ordblindhed; den centrale vanskelighed er <strong>fonologisk</strong> — at forbinde bogstaver med lyde.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Vedvarende stavefejl, der ikke reagerer på gentagen rettelse.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Har tendens til at undgå at læse højt; det kan virke som mangel på interesse, men er i virkeligheden en beskyttelsesstrategi.",
        "Lytteforståelsen er klart bedre end læseforståelsen — vanskeligheden er specifik og ikke en generel kognitiv begrænsning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Det er ikke</strong> mangel på intelligens: per definition er ordblindhed uventet i forhold til elevens øvrige kognitive evner.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Det er ikke</strong> et synsproblem og heller ikke blot at »bytte om på bogstaver«: det centrale underskud ligger i den fonologiske bearbejdning.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Den kan ikke »helbredes«</strong>, men en struktureret indsats over for den fonologiske bevidsthed og afkodningen forbedrer læsningen på en konsekvent måde.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Øg afstanden mellem bogstaver og linjer: der er eksperimentel evidens for, at en øget afstand forbedrer læsningen hos børn med ordblindhed, uden forudgående træning.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Evidensen for bestemte skrifttyper »til ordblinde« er derimod svagere og mere inkonsekvent.",
        "Tillad stillelæsning før al højtlæsning — bed aldrig om læsning uventet.",
        "Når formålet ikke er at vurdere skrivningen, så vurder indholdet adskilt fra stavningen.",
        "Tilbyd den samme information i flere formater (lyd, video, skemaer).",
      ]},
      { items: [
        "Skeln udtrykkeligt mellem læsning og intelligens helt fra begyndelsen: »han forstår det rigtig godt, når han lytter — vanskeligheden er specifik for læsningen«.",
        "Vær opmærksom på, at ordblindhed har en stærk arvelig komponent: en af forældrene kan have en udiagnosticeret ordblindhed, og samtalen kan vække vanskelige minder fra deres egen skoletid.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Undgå at vise arbejdsark fulde af røde rettelser uden kontekst — vis først, hvad eleven allerede kan.",
        "Vær konkret om de tilpasninger, der allerede er i gang, og dem, som forælderen/værgen kan gentage derhjemme: tekster som lyd, højtlæsning uden tidspres.",
      ]},
      { items: [
        "Forringet akademisk selvopfattelse (»jeg er dum«, »jeg kan ikke«).",
        "Systematisk undgåelse af læse-/skriveopgaver i en sådan grad, at andre fag påvirkes.",
        "Markant uoverensstemmelse mellem mundtlig og skriftlig præstation uden formel diagnose — henvis til pædagogisk-psykologisk udredning (PPR).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Vanskeligheder med uanmeldte ændringer – skemaændring, lokaleskift, vikarlærer.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bogstavelig kommunikation – nuancer, ironi og talemåder går tabt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensorisk følsomhed – lysstofrør, baggrundsstøj og mærker i tøjet kan være uudholdelige.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fokuserede og dybe interesser for bestemte emner – forbundet med en detaljeorienteret kognitiv stil.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Kan virke uinteresseret eller fjern, når barnet er overbelastet, ikke ligeglad.",
      ]},
      { items: [
        "<strong>Det er ikke</strong> en lineær skala (»mere« eller »mindre« autistisk) – det er en flerdimensionel profil med forskellige støttebehov inden for hvert område.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Det er ikke</strong> mangel på empati: vanskelighederne med gensidig forståelse går begge veje – også ikke-autistiske mennesker har svært ved at aflæse autistiske mennesker (»dobbeltempatiproblemet«).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det er ikke</strong> dårlig opførsel, når en rutine brydes – det er en reel neurologisk reaktion på tabet af forudsigelighed.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Varsl enhver rutineændring i god tid, selv om den umiddelbart virker ubetydelig – visuel støtte og foregribelse har empirisk støtte.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Gør implicitte sociale regler til eksplicitte regler (hvad man gør, hvad man ikke gør, hvornår).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Tillad sensoriske pauser i et stille rum efter behov.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Udnyt den fokuserede interesse som indgang til det faglige indhold – en styrke, ikke en forstyrrelse.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Hvis diagnosen allerede findes, så spørg først, hvad forælderen/værgen ved der virker – forældre til autistiske børn ved ofte mere om deres barn end nogen rapport.",
        "Hvis der ikke er nogen diagnose, vær meget forsigtig: beskriv konkrete situationer uden nogensinde at bruge ordet »autisme« ved et første møde – »når rutinen ændres uden varsel, bliver dit barn meget oprevet på en måde, der går ud over det typiske«.",
        "Anerkend forælderens/værgens indsats – at skabe struktur og forudsigelighed derhjemme er krævende, og at anerkende det skaber et fællesskab.",
        "Sammenlign aldrig med »andre elever« eller med søskende – hver profil inden for spektret er forskellig, og sammenligning er altid kontraproduktiv.",
      ]},
      { items: [
        "Hyppige kriser (»meltdowns«) efter skoledagen.",
        "Vedvarende skolevægring forbundet med sensorisk overbelastning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tiltagende social isolation trods forsøg på mægling.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Håndskriften er besværlig, langsom og ofte ulæselig – på grund af en reel motorisk vanskelighed, ikke på grund af sjusk.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vanskeligheder med den rumlige organisering af hæftet, med håndteringen af materialer og med trinvise sekvenser.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kan virke »kluntet« – spilder drikkevarer, støder ind i møbler, har svært ved sport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Uforholdsmæssig træthed efter opgaver, der kræver vedvarende finmotorisk koordination.",
        "Den kognitive komponent er som regel bevaret – deraf den hyppige frustration mellem at vide og at kunne vise det.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Det er ikke</strong> dovenskab eller manglende engagement.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Det er ikke</strong> blot dårlig håndskrift: den kliniske betegnelse er udviklingsmæssig koordinationsforstyrrelse (DCD), og den påvirker den motoriske planlægning og sekvensering, ikke kun skrivningen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Det løses ikke</strong> med »at træne skrivningen mere«: en effektiv indsats er opgaveorienteret, ikke mekanisk gentagelse.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tillade brug af tastatur/tablet ved omfattende skriftlige opgaver.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Reducere den mekaniske afskrivning fra tavlen – stille noter til rådighed, når det er relevant.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Stille eksplicitte tjeklister til rådighed for opgaver med flere trin.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vurdere produktet ud fra indholdet, ikke ud fra den fysiske præsentation.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Forklar i et enkelt sprog, hvad dyspraksi er – de fleste forældre/værger har aldrig hørt betegnelsen: »det er en neurologisk vanskelighed i koordinationen af bevægelser, ikke sjusk og ikke manglende indsats«.",
        "Den ulæselige håndskrift er det største gnidningspunkt med forældre/værger – at vise, at bedømmelsen nu vægter indholdet og ikke formen, hjælper med at lindre bekymringen på begge sider.",
        "Foreslå praktiske værktøjer til hjemmet: stemmediktering på mobilen til noter, tastatur til omfattende skriftlige opgaver.",
        "Hvis der er en historik med »han/hun er doven« eller »gør sig ikke umage« fra tidligere år, så sæt direkte ord på det: »jeg ved, at De har hørt det før – min vurdering er en anden«.",
      ]},
      { items: [
        "Fuldstændig afvisning af skriftligt arbejde.",
        "Social isolation i sammenhænge med fysisk aktivitet.",
        "Tegn på somatiseret angst før skriftlige prøver – den psykosociale lidelse er en del af billedet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Færdiggør opgaverne på få minutter, mens klassen bruger hele timen.",
        "Stiller spørgsmål, der ligger uden for stoffet — eller udfordrer aktivt det, der bliver undervist i.",
        "Kan virke uinteresseret, udisciplineret eller apatisk — ofte tegn på kronisk kedsomhed og på underpræstation.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Udtalt følelsesmæssig sensitivitet; kan være ængstelig eller perfektionistisk — psykosociale faktorer er afgørende for talentudviklingen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reel risiko for underpræstation — kan lære at skjule sin evne for ikke at skille sig ud socialt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Er ikke</strong> ensbetydende med god opførsel eller gode resultater — mange højtbegavede elever præsterer middelmådigt på grund af manglende interesse.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Er ikke</strong> „har ikke brug for hjælp“: eleven har brug for andre udfordringer, for evne bliver først til præstation, når den bevidst udvikles.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Er ikke</strong> uforenelig med neurodivergens — dobbelt exceptionalitet (2e) findes, er hyppig og bliver ofte maskeret.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Hav altid fordybelsesopgaver klar — ikke mere af det samme, men dybere eller anvendt stof.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tillad selvstændig undersøgelse af emner, som eleven interesserer sig for inden for læseplanen.",
        "Vurder efter udfordring, ikke efter lethed — bed om mere krævende arbejde til gengæld for mindre mængde.",
        "Anerkend og valider den følelsesmæssige sensitivitet uden at patologisere den.",
      ]},
      { items: [
        "Foregrib stoltheden og omdirigér den: „Eleven er tydeligvis meget begavet — og netop derfor skaber kedsomheden problemer.“",
        "Forklar begavelsens paradoks: gode resultater betyder ikke, at alt er i orden, og underpræstation af manglende interesse er almindelig og reversibel.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Hvis eleven skjuler sin evne for at passe ind socialt, så benævn det varsomt — det er et tegn på lidelse, ikke på beskedenhed.",
        "Foreslå forældrene at værdsætte processen frem for resultatet derhjemme: nysgerrighed, dybde og svære spørgsmål vejer tungere end høje karakterer i lette opgaver.",
      ]},
      { items: [
        "Tegn på angst eller depression forbundet med ekstrem perfektionisme.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Udtalt social isolation præget af at føle sig „anderledes“ end jævnaldrende.",
        "Pludselig faglig underpræstation hos en elev, der tidligere er identificeret som begavet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Forstår langt mindre, end det ser ud til – hverdagssproget udvikles langt tidligere end skolesproget, hvorfor en elev kan virke flydende uden at kunne følge med i undervisningens indhold.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tilsyneladende svage faglige præstationer, ofte ude af proportion med den reelle formåen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tavshed i klassen – det kan være en normal »tavs periode« ved tilegnelsen af et andetsprog og ikke manglende interesse.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kan være udmattet ved dagens slutning på grund af at skulle bearbejde sproget i realtid.",
        "Risiko for underdiagnosticering af reelle støttebehov (ordblindhed, ADHD), fordi alt tilskrives sprogbarrieren.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Det er ikke</strong> mangel på intelligens eller evner.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Det er ikke</strong> blot et spørgsmål om tid: skolesproget tager år at udvikle, og uden eksplicit støtte stabiliserer mange elever sig på et lavt funktionelt niveau.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Det løses ikke</strong> med automatisk oversættelse under undervisningen – det er en proces, der tager år, og modersmålet er en ressource, ikke en forhindring.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Stil materialer til rådighed med centralt ordforråd oversat til modersmålet.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Vurder viden gennem visuel eller praktisk demonstration, når det er muligt.",
        "Sæt eleven sammen med en tosproget klassekammerat til uformel formidling i kritiske situationer.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Accepter tidlige sprogproduktioner med grammatiske fejl – i den første fase rette indholdet, ikke formen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Selve mødet er en barriere – forældrene/værgerne behersker måske ikke dansk tilstrækkeligt til en kompleks samtale. Forbered enkelt skriftligt materiale på forhånd, eller bed om oversættelsesstøtte.",
        "Gå ikke ud fra, at forældrene/værgerne kender det danske uddannelsessystem – forklar, hvad PPR (Pædagogisk Psykologisk Rådgivning) er, hvad en støtteforanstaltning indebærer, og hvad en udredning medfører, uden at tage noget for givet.",
        "Skil tydeligt sprogbarriere fra faglig formåen: »dit barn er i stand til det – det lærer sproget samtidig med, at det lærer indholdet, hvilket er meget krævende«.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Vær lydhør over for migrationskonteksten: familier, der er flygtninge eller uden lovligt ophold, kan nære mistillid til institutioner. Opbyg tillid, før du beder om dokumentation eller henvisninger.",
      ]},
      { items: [
        "Tegn på social isolation eller mobning forbundet med situationen som udenlandsk elev.",
        "Stagnation i sprogtilegnelsen efter det første år.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tegn på traume forbundet med migrationskonteksten (især flygtninge).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Oplysninger om mindreårige er underlagt forstærket beskyttelse (art. 8 GDPR). Samtykke fra forældremyndighedsindehaverne er obligatorisk.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kontrollér, hvor værktøjet lagrer data – på europæiske eller ikke-europæiske servere, anonymiseret eller ej.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Indtast aldrig fulde navne, adresser, identifikationsnumre eller kliniske diagnoser i generative AI-værktøjer.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Skeln mellem institutionel brug (skolen indgår en kontrakt) og lærerens personlige brug (individuelt ansvar).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systemer, der hovedsageligt er trænet på engelsksprogede data, kan præstere dårligere på dansk og i dansksprogede sammenhænge.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatiske anbefalinger kan forstærke stereotyper om køn, etnicitet eller klasse – vurdér dem kritisk.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modeller til »forudsigelse af akademisk risiko« er særligt problematiske – ofte reproducerer de eksisterende uligheder i stedet for at identificere behov.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Målet er at øge elevens selvstændighed, ikke at erstatte det kognitive arbejde, der udvikler den.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Skeln mellem et <strong>adgangsværktøj</strong> (text-to-speech til en elev med ordblindhed) og et <strong>erstatningsværktøj</strong> (ChatGPT, der skriver stilen).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evaluér regelmæssigt: udvikler eleven kompetence, eller udvikler eleven en afhængighed af værktøjet?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Løser værktøjet en reel barriere, eller skaber det en genvej, der springer læringen over?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Er de indtastede data beskyttet, og foreligger der samtykke?",
        "<strong>3.</strong> Bliver værktøjets resultat kontrolleret af et menneske, før det når frem til eleven?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Findes der et alternativ uden AI, der fungerer lige så godt?",
        "<strong>5.</strong> Hvis værktøjet holdt op med at eksistere i morgen, ville eleven så stå uden hjælp?",
      ]},
    ],
    references: [
      "Den Europæiske Union. (2016). <em>Forordning (EU) 2016/679 (generel forordning om databeskyttelse)</em>, artikel 8. Den Europæiske Unions Tidende, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Klæde kolleger på til at integrere AI ansvarligt i fremmedsprogsundervisningen og fremstille materialer, der kan tilpasses forskellige læringsprofiler.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Det er ikke et oplæg – det er en fælles skabelse. Hver deltager går hjem med mindst én færdig ressource, der er klar til at blive afprøvet.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min.:</strong> Rammesætning – problemet med den heterogene klasse, og hvorfor mere af det samme ikke virker.",
        "<strong>10–25 min.:</strong> Profilkort – præsentation af Farols seks kort med virkelige (anonymiserede) eksempler.",
        "<strong>25–45 min.:</strong> Praktisk demonstration – tre værktøjer, tre anvendelsestilfælde, tre forskellige profiler.",
        "<strong>45–75 min.:</strong> Pararbejde – hvert par tilpasser et eksisterende materiale til en bestemt profil.",
        "<strong>75–85 min.:</strong> Hurtig deling – hvert par viser sit resultat på 1 minut.",
        "<strong>85–90 min.:</strong> Forpligtelser – hver deltager fastlægger et materiale, der skal afprøves, og der aftales en feedbacksession efter 30 dage.",
      ]},
      { items: [
        "Internetadgang og institutionelle konti i de demonstrerede værktøjer.",
        "Hver deltagers eksisterende materialer (et arbejdsark, en test eller en lektionsplan).",
        "Udskrevne kort med Farols profiler til opslag.",
      ]},
      { items: [
        "Hver deltager fremstiller mindst ét tilpasset materiale i løbet af sessionen.",
        "Feedbacksession efter 30 dage, hvor mindst 60 % af deltagerne rapporterer faktisk implementering.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Mindst ét materiale, der er produceret i sessionen, vedtages som en delt ressource for faggruppen.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Folkeskoleloven (LBK nr. 1510 af 14/12/2017), den grundlæggende lov for den danske folkeskole med ret til undervisningsdifferentiering.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Bekendtgørelse om folkeskolens specialpædagogiske bistand, rammen for specialpædagogisk støtte.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "FN's konvention om rettigheder for personer med handicap (2006), ratificeret af Danmark; artikel 24 om inkluderende uddannelse.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kommunernes PPR (Pædagogisk Psykologisk Rådgivning), central rådgivende instans for elever med særlige behov.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Støtte i almenundervisningen: undervisningsdifferentiering, tolærerordning, it-hjælpemidler, ingen formel vedtagelse nødvendig; alle læreres ansvar.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Anvend principperne for Universelt Design for Læring: multiple repræsentationsmåder, udtryksformer og engagementsformer.",
        "Uden formel diagnose kan rimelige tilpasninger anvendes: forlænget tid, mundtlige svar, alternative formater.",
        "Dokumenter uformelle observationer af elever med mulige uopfyldte behov, udgangspunkt for eventuel henvisning.",
      ]},
      { items: [
        "Specialpædagogisk bistand (SPB) via PPR, formel støtte efter visitation.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Individuel plan, udarbejdes i samarbejde med lærer, PPR, forældre og elev.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Ressourcecenter på skolen, koordinerer støttetilbud og rådgiver lærere.",
        "Specialklasse eller specialskole ved behov, efter grundig udredning og samtykke fra forældre.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Elever med særlige evner: ingen særlig lovgivning; nationale talenttilbud (fx ScienceTalenter), talentklasser, acceleration.",
        "Kommunale tilbud varierer, undersøg hvad der er tilgængeligt lokalt.",
        "Dokumentér tegn på fremragende evner og integrér udfordringer i undervisningsplanlægningen.",
      ]},
      { items: [
        "Tosprogede elever / dansk som andetsprog (DSA): modtagelsesklasse, basisundervisning i DSA.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Undervisningsministeriets vejledning om tosprogede elever, ramme for sproglig og interkulturel støtte.",
        "Sprogbarrieren skal tydeligt adskilles fra faglige vanskeligheder, eleven må ikke udredes alene pga. manglende danskkundskaber.",
        "Skoler med mange tosprogede elever bør have en plan for interkulturel undervisning.",
      ]},
      { items: [
        "Hurtigguide: Folkeskoleloven LBK 1510/2017, PPR, SPB, individuel plan, DSA, modtagelsesklasse.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Vigtige dokumenter: individuel plan, elevdokumentation, skolens inklusionspolitik.",
        "Første skridt ved bekymring for en elev: dokumentér, drøft med PPR-vejleder, kontakt forældre, i den rækkefølge.",
        "Databeskyttelse: alle data om elevstøtte er underlagt GDPR og databeskyttelsesloven; del ikke følsomme oplysninger uden for støtteteamet uden samtykke.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>FN's konvention om rettigheder for personer med handicap</em> (handicapkonventionen / CRPD, 2006), ratificeret af Danmark i 2009; artikel 24 fastslår retten til inkluderende uddannelse.",
      "<em>Bekendtgørelse af lov om folkeskolen (folkeskoleloven), LBK nr. 1510 af 14. december 2017</em>; den grundlæggende lov for den danske folkeskole, herunder undervisningsdifferentiering, inklusion og specialpædagogisk bistand.",
      "<em>Bekendtgørelse om folkeskolens specialundervisning og anden specialpædagogisk bistand, BEK nr. 693 af 20. juni 2014</em>; rammen for visitation, specialpædagogisk bistand (SPB) og PPR's rolle.",
      "<em>Databeskyttelsesforordningen</em> (GDPR, forordning (EU) 2016/679) og <em>databeskyttelsesloven (lov nr. 502 af 23. maj 2018)</em>; gælder for al behandling af elevers personoplysninger.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pædagogisk differentiering handler om at tilpasse måden, man underviser på — ikke om at sænke forventningerne. Læringsmålet kan være det samme for alle; det er vejen derhen, der varierer.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "UDL-modellen (Universal Design for Learning) bygger på tre principper: flere måder at repræsentere på (hvordan indholdet præsenteres), flere måder at handle og udtrykke sig på (hvordan eleven svarer) og flere måder at engagere sig på (hvad der motiverer eleven).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "At differentiere er ikke at lave en undervisningsplan pr. elev — det er at skabe tilstrækkelig fleksibilitet, så den samme lektion passer til forskellige profiler.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Det er ikke</strong> at indskrænke læreplanen for de elever, der har det sværere.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det er ikke</strong> altid at give forskellige elever forskellige opgaver — det isolerer og sætter etiketter.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Det er ikke</strong> kun differentieret arbejde på papir — differentiering omfatter også, hvordan læreren forklarer, spørger og evaluerer.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Styret valg: tilbyde 2–3 muligheder for svarformat (skreven tekst, mundtligt, skematisk tegning) — alle arbejder med det samme indhold.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Stilladsering (scaffolding): give elever, der har det sværere, en struktureret vejledning; fjerne vejledningen gradvist, efterhånden som selvstændigheden vokser.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Fleksibel gruppering: grupper efter interesse, efter mestringsniveau eller blandede — rotere for at undgå faste grupper, der bliver til identiteter.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Tidsmæssige tilpasninger: mere tid betyder ikke mindre faglig stringens. For elever med ADHD eller dyspraksi opdeles opgaven i segmenter med planlagte pauser.",
        "Kompleksitetsniveau: lave versioner af det samme emne med mere eller mindre sproglig støtte, med eller uden eksempler, med eller uden visuelle spor.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vurder, hvad eleven ved, ikke hvordan eleven skriver. En elev med ordblindhed kan vise begrebsmæssig forståelse mundtligt eller med teknologisk støtte.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Klare bedømmelseskriterier, der deles før opgaven, giver eleven mulighed for at vide, hvad der forventes, uanset det valgte format.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfolio eller evidensbaseret vurdering giver eleven mulighed for at vise fremskridt over tid, ikke kun i én testsituation.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Når differentieringen i klassen ikke længere er tilstrækkelig, og eleven fortsat ikke får adgang til læreplanen, er det et tegn på, at specialiseret støtte kan være nødvendig.",
        "Differentiering erstatter ikke skolens støtteforanstaltninger (SPO, terapeuter, specialundervisning) — det er det, der sker i den almindelige klasse som et supplement.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativ evaluering er enhver praksis, der indsamler information om læringen undervejs i processen – og bruger den information til at tilpasse undervisningen eller støtten til eleven.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "I modsætning til summativ evaluering (slutkarakterer) behøver formativ evaluering ikke at have en karakter – den skal have feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "For neurodivergente elever er formativ evaluering særligt vigtig, fordi præstationen i en enkeltstående prøve måske ikke afspejler, hvad de reelt ved.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: ved timens slutning besvarer eleven et spørgsmål på 2 minutter – læreren ser med det samme, hvem der har forstået det, og hvem der ikke har.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Trafiklys</strong>: grønt (jeg forstod det), gult (jeg er i tvivl), rødt (jeg forstod det ikke) – det kan være fysiske kort, post-its eller digitalt.",
        "<strong>Think-Pair-Share</strong>: eleven tænker først alene, drøfter det derefter med en makker og deler det til sidst med klassen – det mindsker angsten for at svare direkte.",
        "<strong>Udgangsdør</strong>: før eleven går, fortæller hen læreren én ting, hen har lært, og ét spørgsmål, hen stadig har.",
      ]},
      { items: [
        "Effektiv feedback er specifik, handlingsanvisende og givet i rette tid: »på side 2 går argumentet tabt, fordi koblingen til belægget mangler« er nyttigt; »det her kunne være bedre« er det ikke.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "For elever med ADHD: umiddelbar feedback er mere effektiv end udskudt feedback. Vent ikke til opgavens slutning.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "For elever med ordblindhed: mundtlig feedback eller feedback via lyd kan være mere tilgængelig end omfattende skriftlige kommentarer.",
        "Undgå at sammenligne elever indbyrdes – sammenlign eleven med hens egen tidligere udvikling.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: evaluering ad flere korte gange i stedet for én enkelt lang prøve. Reducér distraherende stimuli i evalueringsmiljøet.",
        "Ordblindhed: tillad mundtlige svar, ekstra tid eller brug af tekst-til-tale. Vurdér indholdet, ikke stavningen.",
        "Autisme: evalueringer med klare og utvetydige skriftlige instruktioner. Varsl i god tid om ændringer i formatet.",
        "Særligt begavede: undgå evalueringer, der blot gengiver indhold – medtag spørgsmål, der kræver analyse, syntese og skabelse.",
      ]},
      { items: [
        "Når en elev, selv med tilpasset evaluering, ikke kan vise sin læring, er det et tegn på, at der kan være en dybere barriere, som bør undersøges sammen med SPO (skolens vejledningstjeneste).",
        "Vedvarende mønstre (måneder, ikke dage) af en specifik vanskelighed inden for et område bør indberettes formelt.",
      ]},
    ]},
  },

  fi: {
    tdah: { sections: [
      { items: [
        "Vaikeus ylläpitää tarkkaavaisuutta pitkissä tehtävissä; hukkaa ajatuksensa monivaiheisissa ohjeissa.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Jatkuva liikehdintä — ei pysy paikallaan, näpertää käsiään, nousee ylös ilman näkyvää syytä.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Vastaa ennen kuin kysymys on loppunut; keskeyttää luokkatovereita ja opettajaa.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Unohtaa välineet, määräajat ja muutama minuutti sitten suullisesti annetut ohjeet — työmuisti on ylikuormittunut.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Voi hyperkeskittyä siihen, mikä häntä kiinnostaa, antaen (virheellisen) vaikutelman, että „pystyy, kun haluaa“; todellisuudessa suoriutuminen vaihtelee kiinnostuksen ja palkkion mukaan.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Kyse ei ole</strong> huonosta kasvatuksesta, laiskuudesta eikä luonteen puutteesta: nämä virhekäsitykset leimaavat ja viivästyttävät tukea.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Kyse ei ole</strong> aina näkyvästä yliaktiivisuudesta — on olemassa pääosin tarkkaamaton ilmenemismuoto, joka on yleisempi tytöillä ja usein alidiagnosoitu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Se ei ratkea</strong> „yrittämällä enemmän“: vaikeus on neurologisessa itsesäätelyssä, ei tahdossa.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Pilko ohjeet: yksi kerrallaan, kirjallisesti taululle, määrätyllä ajalla — se vähentää työmuistin kuormitusta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Salli perusteltu liikkuminen (jaa välineitä, pyyhi taulu, vie viestejä).",
        "Vähennä kilpailevia ärsykkeitä (paikka kaukana ikkunasta, ovesta, meluisimmasta ryhmästä).",
        "Välitön ja toistuva myönteinen vahvistus: ADHD:ssä palkkioherkkyys on muuttunut (odottamisen vastenmielisyys), joten välittömät palkkiot toimivat paremmin kuin viivästetyt.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Aloita siitä, mitä oppilas tekee hyvin — älä aloita tapaamista valituslistalla, muuten huoltaja menee puolustuskannalle.",
        "Kuvaile havaittua käyttäytymistä, ei diagnooseja: „kun peräkkäin on enemmän kuin kaksi vaihetta, hän kadottaa langan“ eikä „hänellä on ADHD“.",
        "Ennakoi reaktio „kotona ei ole näin“ — selitä, että ryhmäkonteksti ja luokassa vaadittu pitkäkestoinen tarkkaavaisuus tekevät oireet näkyvämmiksi.",
        "Jos ehdotat arviointia, esitä se voimavarana, ei rangaistuksena: „on tukea, joka voi auttaa häntä paljon“ eikä „hänet on arvioitava“.",
      ]},
      { items: [
        "Jatkuvat kurinpitorikkomukset luokassa tehdyistä mukautuksista huolimatta.",
        "Vertaisten taholta tulevan sosiaalisen syrjäytymisen merkit.",
        "Liitännäissairauksien merkit (ahdistus, masennus, uhmakkuushäiriö) — yleisiä ADHD:ssä ja perustelevat lähetteen.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Lukee hitaasti ja vaivalloisesti, tehden virheitä yksittäisten sanojen lukemisessa jopa teksteissä, jotka hän ymmärtää hyvin kuullessaan ne.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Kirjainten kääntyminen (b/d, p/q) on yleistä kaikilla kirjoittamista aloittavilla lapsilla eikä sinänsä ole lukihäiriön merkki; keskeinen vaikeus on <strong>fonologinen</strong> — kirjainten yhdistäminen äänteisiin.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Sitkeät oikeinkirjoitusvirheet, jotka eivät korjaannu toistuvasta korjaamisesta huolimatta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Pyrkii välttämään ääneen lukemista; se voi vaikuttaa kiinnostuksen puutteelta, vaikka kyseessä on todellisuudessa suojautumiskeino.",
        "Ymmärtää kuullen selvästi paremmin kuin lukien — vaikeus on erityinen, ei yleinen kognitiivinen rajoite.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Kyse ei ole</strong> älykkyyden puutteesta: lukihäiriö on määritelmänsä mukaan odottamaton oppilaan muihin kognitiivisiin kykyihin nähden.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Kyse ei ole</strong> näköongelmasta eikä pelkästä „kirjainten sekoittamisesta“: keskeinen puute on fonologisessa prosessoinnissa.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Sitä ei „paranneta“</strong>, mutta jäsennelty interventio fonologiseen tietoisuuteen ja dekoodaukseen parantaa lukemista johdonmukaisesti.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Lisätä kirjain- ja riviväliä: on olemassa kokeellista näyttöä siitä, että väljennetty välistys parantaa lukihäiriöisten lasten lukemista ilman ennakkoharjoittelua.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Sen sijaan näyttö erityisistä „lukihäiriöisille tarkoitetuista“ kirjasintyypeistä on heikompaa ja epäjohdonmukaista.",
        "Sallia hiljainen lukeminen ennen mitään ääneen lukemista — älä koskaan pyydä lukemaan yllättäen.",
        "Kun tavoitteena ei ole arvioida kirjoittamista, arvioi sisältö erillään oikeinkirjoituksesta.",
        "Tarjota sama tieto useassa muodossa (ääni, video, kaaviot).",
      ]},
      { items: [
        "Erottaa jo keskustelun alussa selkeästi lukeminen älykkyydestä: „hän ymmärtää erittäin hyvin kuullessaan — vaikeus on erityinen lukemiselle“.",
        "Pitää mielessä, että lukihäiriöllä on vahva perinnöllinen osatekijä: toisella vanhemmista voi olla diagnosoimaton lukihäiriö, ja keskustelu voi herättää vaikeita muistoja hänen omasta kouluajastaan.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vältä näyttämästä punaisilla korjauksilla täytettyjä tehtäväpapereita ilman kontekstia — esitä ensin se, mitä oppilas jo osaa tehdä.",
        "Ole konkreettinen jo käytössä olevista mukautuksista ja niistä, joita huoltaja voi toistaa kotona: äänitekstit, ääneen lukeminen ilman aikapainetta.",
      ]},
      { items: [
        "Heikkenevä akateeminen minäkuva („olen tyhmä“, „en osaa“).",
        "Luku-/kirjoitustehtävien järjestelmällinen välttely siinä määrin, että se haittaa muita oppiaineita.",
        "Selvä ristiriita suullisen ja kirjallisen suoriutumisen välillä ilman virallista diagnoosia — ohjaa psykopedagogiseen arviointiin.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Vaikeudet ilmoittamattomien muutosten kanssa – lukujärjestyksen, luokkatilan tai sijaisopettajan vaihtuminen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kirjaimellinen viestintä – vivahteet, ironia ja idiomit jäävät huomaamatta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Aistiyliherkkyys – loisteputkivalo, taustamelu ja vaatteiden etiketit voivat olla sietämättömiä.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Keskittyneet ja syvälliset kiinnostuksen kohteet tietyistä aiheista – yhteydessä yksityiskohtiin suuntautuneeseen kognitiiviseen tyyliin.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Kuormittuneena voi vaikuttaa kiinnostumattomalta tai etäiseltä, ei kuitenkaan poissaolevalta.",
      ]},
      { items: [
        "<strong>Se ei ole</strong> lineaarinen asteikko („enemmän“ tai „vähemmän“ autistinen) – se on moniulotteinen profiili, jossa tuen tarve vaihtelee jokaisella osa-alueella.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Se ei ole</strong> empatian puutetta: keskinäisen ymmärtämisen vaikeudet ovat kaksisuuntaisia – myös ei-autistisilla ihmisillä on vaikeuksia lukea autistisia ihmisiä (niin sanottu „kaksinkertaisen empatian ongelma“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Se ei ole</strong> huonoa käytöstä, kun rutiini rikkoutuu – se on todellinen neurologinen reaktio ennustettavuuden menettämiseen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Varoita etukäteen kaikista rutiinin muutoksista, vaikka ne vaikuttaisivat vähäpätöisiltä – visuaalisella tuella ja ennakoinnilla on empiiristä näyttöä.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Tee piilevistä sosiaalisista säännöistä selkeitä (mitä tehdään, mitä ei tehdä, milloin).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Salli tarvittaessa aistitauot rauhallisessa tilassa.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Hyödynnä keskittynyttä kiinnostuksen kohdetta sisäänpääsynä opetussisältöihin – se on vahvuus, ei häiriötekijä.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Jos diagnoosi on jo olemassa, kysy ensin huoltajalta, mikä hänen kokemuksensa mukaan toimii – autististen lasten vanhemmat tietävät lapsestaan usein enemmän kuin mikään lausunto.",
        "Jos diagnoosia ei ole, ole hyvin varovainen: kuvaile konkreettisia tilanteita käyttämättä koskaan ensimmäisessä tapaamisessa sanaa „autismi“ – „kun rutiini muuttuu ilman varoitusta, poikanne / tyttärenne hermostuu hyvin voimakkaasti tavalla, joka ylittää tavanomaisen“.",
        "Tunnusta huoltajan ponnistelut – rakenteen ja ennustettavuuden luominen kotona on vaativaa, ja sen tunnustaminen rakentaa yhteistyötä.",
        "Älä koskaan vertaa „muihin oppilaisiin“ tai sisaruksiin – jokainen kirjon profiili on erilainen, ja vertailu on aina haitallista.",
      ]},
      { items: [
        "Toistuvat raivokohtaukset („meltdown“) koulupäivän jälkeen.",
        "Jatkuva koulusta kieltäytyminen, joka liittyy aistikuormitukseen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Etenevä sosiaalinen eristäytyminen välitysyrityksistä huolimatta.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Vaikeaa, hidasta ja usein lukukelvotonta käsin kirjoittamista – todellisten motoristen vaikeuksien, ei huolimattomuuden vuoksi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vaikeuksia vihkon tilallisessa jäsentämisessä, materiaalien hallinnassa ja toimintojen sarjoittamisessa.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Voi vaikuttaa ”kömpelöltä” – kaataa laseja, törmäilee huonekaluihin, kokee liikunnan vaikeaksi.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Suhteeton väsymys tehtävien jälkeen, jotka vaativat jatkuvaa hienomotorista koordinaatiota.",
        "Kognitiivinen puoli on yleensä säilynyt – siitä toistuva turhautuminen sen välillä, mitä lapsi tietää ja mitä hän pystyy osoittamaan.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Kyse ei ole</strong> laiskuudesta tai yrittämisen puutteesta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Kyse ei ole</strong> pelkästään huonosta käsialasta: kliininen termi on kehityksellinen koordinaatiohäiriö (DCD), ja se vaikuttaa motoriseen suunnitteluun ja sarjoittamiseen, ei vain kirjoittamiseen.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Se ei ratkea</strong> ”kirjoittamista enemmän harjoittelemalla”: vaikuttava tukitoimi on tehtäväsuuntautunut, ei mekaaninen toisto.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Salli näppäimistön tai tabletin käyttö laajoissa kirjallisissa tuotoksissa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Vähennä mekaanista taululta jäljentämistä – tarjoa muistiinpanot, kun se on tarkoituksenmukaista.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tarjoa selkeät tarkistuslistat monivaiheisiin tehtäviin.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Arvioi tuotos sisällön, ei fyysisen ulkoasun perusteella.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Selitä yksinkertaisella kielellä, mitä dyspraksia on – useimmat huoltajat eivät ole koskaan kuulleet termiä: ”se on neurologinen vaikeus liikkeiden koordinoinnissa, ei huolimattomuutta eikä yrittämisen puutetta”.",
        "Lukukelvoton käsiala on suurin kitkakohta huoltajien kanssa – sen osoittaminen, että arviointi arvostaa nyt sisältöä eikä muotoa, auttaa lievittämään molempien osapuolten ahdistusta.",
        "Ehdota käytännön työkaluja kotiin: puhesanelua puhelimessa muistiinpanoja varten, näppäimistöä laajoihin kirjallisiin töihin.",
        "Jos aiempina vuosina on kuultu ”hän on laiska” tai ”hän ei yritä”, nimeä se suoraan: ”tiedän, että olette kuulleet tämän aiemmin – minun tulkintani on toisenlainen”.",
      ]},
      { items: [
        "Täydellinen kieltäytyminen kirjallisesta tuottamisesta.",
        "Sosiaalinen eristäytyminen liikunnallisissa tilanteissa.",
        "Somatisoituneen ahdistuksen merkit ennen kirjallisia arviointeja – psykososiaalinen kärsimys on osa kokonaiskuvaa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Saa tehtävät valmiiksi muutamassa minuutissa, kun koko luokalta menee siihen koko oppitunti.",
        "Esittää kysymyksiä, jotka menevät oppiaineen rajojen ulkopuolelle – tai haastaa aktiivisesti sen, mitä opetetaan.",
        "Voi vaikuttaa kiinnostumattomalta, kurittomalta tai apaattiselta – usein nämä ovat kroonisen tylsistymisen ja alisuoriutumisen merkkejä.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Voimakas tunneherkkyys; voi olla ahdistunut tai perfektionistinen – psykososiaaliset tekijät ovat ratkaisevia lahjakkuuden kehittymisessä.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Todellinen alisuoriutumisen riski – oppilas voi oppia piilottamaan kykynsä, jotta ei erottuisi sosiaalisesti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Ei ole</strong> hyvän käytöksen eikä hyvien tulosten synonyymi – monet lahjakkaat oppilaat suoriutuvat keskinkertaisesti kiinnostuksen puutteen vuoksi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ei tarkoita</strong>, ettei tarvitse apua: tarvitaan erilaisia haasteita, koska kyky muuttuu saavutukseksi vasta, kun sitä kehitetään tietoisesti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ei ole</strong> ristiriidassa neurokirjon kanssa – kaksoispoikkeavuus (2e) on olemassa, yleinen ja usein peittynyt.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Pidä aina valmiina syventäviä tehtäviä – ei lisää samaa, vaan syvällisempää tai soveltavaa ainesta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Salli itsenäinen tutkiminen oppilasta kiinnostavista aiheista opetussuunnitelman puitteissa.",
        "Arvioi haasteen, ei helppouden mukaan – pyydä vaativampia töitä pienempää määrää vastaan.",
        "Tunnista ja vahvista tunneherkkyys patologisoimatta sitä.",
      ]},
      { items: [
        "Ennakoi ylpeyttä ja suuntaa se uudelleen: ”hän on selvästi hyvin kyvykäs – ja juuri siksi tylsistyminen aiheuttaa ongelmia”.",
        "Selitä lahjakkuuden paradoksi: hyvät tulokset eivät tarkoita, että kaikki on hyvin, ja kiinnostuksen puutteesta johtuva alisuoriutuminen on yleistä ja korjattavissa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Jos oppilas piilottaa kykynsä sopeutuakseen sosiaalisesti, nimeä se varovasti – se on kärsimyksen, ei vaatimattomuuden merkki.",
        "Ehdota huoltajille, että he arvostavat kotona prosessia tuloksen sijaan: uteliaisuus, syvällisyys ja vaikeat kysymykset ovat arvokkaampia kuin korkeat arvosanat helpoista tehtävistä.",
      ]},
      { items: [
        "Ahdistuksen tai masennuksen merkkejä, jotka liittyvät äärimmäiseen perfektionismiin.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Voimakas sosiaalinen eristäytyminen, joka johtuu kokemuksesta olla ”erilainen” kuin ikätoverit.",
        "Äkillinen akateemisen suoriutumisen lasku oppilaalla, joka oli aiemmin tunnistettu kyvykkääksi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Ymmärtää huomattavasti vähemmän kuin miltä näyttää — arkikieli kehittyy paljon ennen akateemista kieltä, joten oppilas voi vaikuttaa sujuvalta, vaikka ei pysy sisällöissä mukana.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Näennäisesti heikko koulumenestys, joka ei usein vastaa todellisia kykyjä.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Hiljaisuus tunnilla — se voi olla kielenoppimiseen kuuluva tavanomainen ”hiljainen kausi”, ei kiinnostuksen puute.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Oppilas voi olla päivän päätteeksi uupunut, koska hän käsittelee kieltä reaaliajassa.",
        "Vaarana on, että todelliset oppimisen erityistarpeet (lukihäiriö, ADHD) jäävät tunnistamatta, kun kaikki selitetään kielimuurilla.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Kyse ei ole</strong> älykkyyden tai kykyjen puutteesta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Kyse ei ole</strong> pelkästään ajasta: akateemisen kielen kehittyminen kestää vuosia, ja ilman tietoista tukea monet oppilaat jäävät matalalle toiminnalliselle tasolle.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Tämä ei ratkea</strong> tunnin aikaisella konekäännöksellä — kyse on vuosia kestävästä prosessista, ja äidinkieli on voimavara, ei este.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tarjoa oppimateriaaleja, joiden keskeinen sanasto on käännetty äidinkielelle.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Arvioi osaamista aina kun mahdollista visuaalisen tai käytännön näytön avulla.",
        "Muodosta pari kaksikielisen luokkatoverin kanssa epäviralliseen tulkkausapuun kriittisillä hetkillä.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Hyväksy ensimmäisessä vaiheessa kieliopillisia virheitä sisältävät ensimmäiset tuotokset — korjaa sisältöä, älä muotoa.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Itse tapaaminen on este — huoltaja ei välttämättä osaa suomea riittävän hyvin monimutkaista keskustelua varten. Valmistele etukäteen yksinkertaista kirjallista materiaalia tai pyydä käännösapua.",
        "Älä oleta, että huoltaja tuntee Suomen koulutusjärjestelmän — selitä, mikä on koulun psykologis-pedagoginen tukipalvelu, mikä on tukitoimi ja mitä arviointi tarkoittaa, pitämättä mitään itsestäänselvyytenä.",
        "Erota selvästi kielimuuri ja oppimiskyky toisistaan: ”poikanne / tyttärenne on kyvykäs — hän opettelee kieltä samalla kun opiskelee sisältöjä, mikä on hyvin vaativaa”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ole herkkä muuttoliikkeen kontekstille: pakolaisperheillä tai paperittomassa tilanteessa olevilla perheillä voi olla epäluottamusta viranomaisia kohtaan. Rakenna luottamusta ennen kuin pyydät asiakirjoja tai teet jatko-ohjauksia.",
      ]},
      { items: [
        "Ulkomaalaisen oppilaan asemaan liittyvät sosiaalisen eristäytymisen tai kiusaamisen merkit.",
        "Kielenoppimisen pysähtyminen ensimmäisen vuoden jälkeen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Muuttoliikkeen kontekstiin liittyvät trauman merkit (erityisesti pakolaisilla).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Alaikäisten tietoja koskee vahvistettu suoja (GDPR:n 8 artikla). Huoltajien suostumus on pakollinen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tarkista, missä työkalu säilyttää tietoja – eurooppalaisilla vai Euroopan ulkopuolisilla palvelimilla, anonymisoituina vai ei.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Älä koskaan syötä generatiivisen tekoälyn työkaluihin koko nimiä, osoitteita, henkilötunnuksia tai kliinisiä diagnooseja.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Erota institutionaalinen käyttö (koulu allekirjoittaa sopimuksen) opettajan henkilökohtaisesta käytöstä (yksilöllinen vastuu).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Pääosin englanninkielisellä aineistolla koulutetut järjestelmät voivat toimia heikommin suomen kielellä ja suomenkielisissä konteksteissa.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automaattiset suositukset voivat vahvistaa sukupuoleen, etniseen taustaan tai yhteiskuntaluokkaan liittyviä stereotypioita – arvioi kriittisesti.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "”Akateemisen riskin ennustamisen” mallit ovat erityisen ongelmallisia – ne toistavat usein olemassa olevaa eriarvoisuutta sen sijaan, että tunnistaisivat tarpeita.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tavoitteena on lisätä oppilaan itsenäisyyttä, ei korvata kognitiivista työtä, joka sitä kehittää.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Erota <strong>saavutettavuustyökalu</strong> (text-to-speech lukihäiriöiselle oppilaalle) <strong>korvaavasta työkalusta</strong> (ChatGPT, joka kirjoittaa aineen).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Arvioi säännöllisesti: kehittääkö oppilas osaamista vai kehittääkö hän riippuvuutta työkalusta?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Poistaako työkalu todellisen esteen vai luoko se oikotien, joka sivuuttaa oppimisen?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Ovatko syötetyt tiedot suojattu ja onko suostumus olemassa?",
        "<strong>3.</strong> Tarkistaako ihminen työkalun tuloksen ennen kuin se päätyy oppilaalle?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Onko olemassa tekoälytön vaihtoehto, joka toimii yhtä hyvin?",
        "<strong>5.</strong> Jos työkalu lakkaisi olemasta huomenna, jäisikö oppilas avuttomaksi?",
      ]},
    ],
    references: [
      "Euroopan unioni. (2016). <em>Asetus (EU) 2016/679 (yleinen tietosuoja-asetus)</em>, 8 artikla. Euroopan unionin virallinen lehti, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Antaa kollegoille valmiudet tekoälyn vastuulliseen integroimiseen vieraan kielen opetukseen tuottamalla materiaaleja, jotka ovat mukautettavissa useisiin oppimisprofiileihin.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tämä ei ole esitys – se on yhteistä rakentamista. Jokainen osallistuja vie mukanaan vähintään yhden valmiin resurssin kokeiltavaksi.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Taustoitus – heterogeenisen ryhmän ongelma ja miksi sama suuremmassa määrin ei toimi.",
        "<strong>10–25 min:</strong> Profiilikartta – Farolin kuuden kortin esittely todellisten (anonymisoitujen) tapausten kanssa.",
        "<strong>25–45 min:</strong> Käytännön demonstraatio – kolme työkalua, kolme käyttötapausta, kolme eri profiilia.",
        "<strong>45–75 min:</strong> Parityöskentely – kukin pari mukauttaa olemassa olevan materiaalin tietylle profiilille.",
        "<strong>75–85 min:</strong> Nopea jakaminen – kukin pari esittelee tuotoksensa minuutissa.",
        "<strong>85–90 min:</strong> Sitoumukset – kukin osallistuja määrittää kokeiltavan materiaalin ja palautetapaaminen sovitaan 30 päivän päähän.",
      ]},
      { items: [
        "Internetyhteys ja institutionaaliset tilit esiteltäviin työkaluihin.",
        "Kunkin osallistujan omat materiaalit (tehtävämoniste, koe tai tuntisuunnitelma).",
        "Tulostetut Farolin profiilikortit tarkasteltaviksi.",
      ]},
      { items: [
        "Kukin osallistuja tuottaa istunnon aikana vähintään yhden mukautetun materiaalin.",
        "Palautetapaaminen 30 päivän päästä, jossa vähintään 60 % osallistujista raportoi tehokkaasta toteutuksesta.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vähintään yksi istunnossa tuotettu materiaali otetaan käyttöön osaston yhteisenä resurssina.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Perusopetuslaki 628/1998, velvoittaa antamaan jokaiselle oppilaalle riittävän tuen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Oppilas- ja opiskelijahuoltolaki 1287/2013, monialainen oppilashuolto koulussa.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Opetushallituksen kolmiportainen tukimalli: yleinen tuki, tehostettu tuki, erityinen tuki.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "YK:n vammaisten henkilöiden oikeuksia koskeva yleissopimus (2006), Suomi ratifioinut; 24 artikla inklusiivisesta koulutuksesta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Yleinen tuki: jokaisen opettajan velvollisuus ilman päätöstä, tukiopetus, eriyttäminen ylös- ja alaspäin, joustavat ryhmittelyt, oppimisympäristön muokkaaminen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sovella Universaalin oppimisen suunnittelun periaatteita: useita esittämisen, ilmaisemisen ja sitoutumisen tapoja.",
        "Ilman virallista diagnoosia voidaan tehdä kohtuulliset mukautukset: lisäaika, suulliset vastaukset, vaihtoehtoiset formaatit.",
        "Dokumentoi epäviralliset havainnot oppilaista, joilla voi olla täyttämättömiä tarpeita, lähtökohta mahdollisille jatkotoimille.",
      ]},
      { items: [
        "Tehostettu tuki: oppimissuunnitelma, moniammatillinen tiimi, oppilashuolto.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Erityinen tuki: HOJKS (Henkilökohtainen opetuksen järjestämistä koskeva suunnitelma), hallintopäätös, erityisluokka tai -koulu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Oppilashuoltoryhmä koordinoi tukitoimia ja neuvoo opettajia.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Psykologinen arviointi tarvittaessa erityisen tuen tarpeen selvittämiseksi.",
      ]},
      { items: [
        "Lahjakkaiden oppilaiden tuki: OPS sallii eriyttämisen ylöspäin, luokan ohittaminen mahdollinen.",
        "Opetushallituksen ohjeistus lahjakkaiden tukemiseksi, ei erillistä lakia.",
        "Dokumentoi edistyneen osaamisen merkit ja sisällytä haasteelliset tehtävät suunnitteluun.",
      ]},
      { items: [
        "Maahanmuuttajataustaiset oppilaat: valmistava opetus (enintään 1 lv), suomi toisena kielenä (S2), oman äidinkielen opetus.",
        "Kotoutumissuunnitelma, oppilaan koulunkäynnin tuki maahanmuuttovaiheessa.",
        "Kielimuuri on selkeästi erotettava oppimisvaikeuksista, oppilasta ei tule ohjata arviointiin pelkästään kielen vuoksi.",
        "Monikulttuurinen ohjaaja voi tukea kodin ja koulun välistä yhteistyötä.",
      ]},
      { items: [
        "Pikaohjeet: Perusopetuslaki 628/1998, kolmiportainen tuki, HOJKS, oppilashuolto, S2-opetus, valmistava opetus.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tärkeät asiakirjat: HOJKS, oppilashuollon kirjaukset, koulun inklusiivinen oppimissuunnitelma.",
        "Ensimmäinen askel huolen herätessä: dokumentoi, keskustele erityisopettajan kanssa, ota yhteyttä huoltajiin, tässä järjestyksessä.",
        "Tietosuoja: kaikki oppilastukitiedot ovat GDPR:n ja tietosuojalain alaisia; älä jaa arkaluonteisia tietoja oppilashuoltoryhmän ulkopuolelle ilman suostumusta.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>YK:n yleissopimus vammaisten henkilöiden oikeuksista</em> (YK, 2006), jonka Suomi ratifioi vuonna 2016; sen 24 artikla turvaa oikeuden inklusiiviseen koulutukseen.",
      "<em>Perusopetuslaki 628/1998</em>; velvoittaa antamaan jokaiselle oppilaalle riittävän tuen ja sisältää kolmiportaisen tuen (yleinen, tehostettu ja erityinen tuki) sekä henkilökohtaisen opetuksen järjestämistä koskevan suunnitelman (HOJKS).",
      "<em>Oppilas- ja opiskelijahuoltolaki 1287/2013</em>; sääntelee monialaista oppilashuoltoa ja oppilashuoltoryhmän toimintaa kouluissa.",
      "<em>Tietosuojalaki 1050/2018</em>, joka täydentää ja täsmentää Euroopan unionin yleistä tietosuoja-asetusta (GDPR / asetus (EU) 2016/679).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagoginen eriyttäminen tarkoittaa opetustavan mukauttamista – ei odotusten laskemista. Oppimistavoite voi olla kaikilla sama; vain reitti sinne vaihtelee.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "UDL-malli (Universal Design for Learning, oppimisen universaali suunnittelu) esittää kolme periaatetta: monipuoliset esittämisen tavat (miten sisältö esitetään), monipuoliset toiminnan ja ilmaisun tavat (miten oppilas vastaa) sekä monipuoliset sitoutumisen tavat (mikä oppilasta motivoi).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Eriyttäminen ei tarkoita erillisen tuntisuunnitelman laatimista jokaiselle oppilaalle – se tarkoittaa riittävän joustavuuden luomista, jotta sama oppitunti sopii erilaisille profiileille.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Se ei ole</strong> opetussuunnitelman karsimista enemmän vaikeuksia kohtaavilta oppilailta.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Se ei ole</strong> jatkuvasti eri tehtävien antamista eri oppilaille – se eristää ja leimaa.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Se ei ole</strong> pelkkää paperilla eriytettyä työtä – eriyttäminen kattaa myös sen, miten opettaja selittää, kysyy ja arvioi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Ohjattu valinta: tarjotaan 2–3 vastausmuodon vaihtoehtoa (kirjallinen teksti, suullinen vastaus, kaaviokuva) – kaikki vastaavat samaan sisältöön.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tukirakenne (scaffolding): tarjotaan jäsennelty ohjeistus enemmän vaikeuksia kohtaaville oppilaille; poistetaan ohjeistus vähitellen itsenäisyyden kasvaessa.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Joustava ryhmittely: ryhmät kiinnostuksen, osaamistason tai sekamuodon mukaan – kierrätetään, jotta vältetään pysyvät ryhmät, joista tulee identiteettejä.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Aikamukautukset: enemmän aikaa ei tarkoita vähäisempää vaativuutta. ADHD- tai dyspraksiaoppilaiden kohdalla tehtävä jaetaan osiin ja siihen lisätään suunnitellut tauot.",
        "Vaativuustaso: samasta aiheesta luodaan versioita, joissa on enemmän tai vähemmän kielellistä tukea, esimerkkien kanssa tai ilman, visuaalisten vihjeiden kanssa tai ilman.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Arvioidaan sitä, mitä oppilas tietää, ei sitä, miten hän kirjoittaa. Lukivaikeuksinen oppilas voi osoittaa käsitteellisen hallinnan suullisesti tai teknologisen tuen avulla.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Selkeät ja ennen tehtävää jaetut arviointikriteerit (rubriikit) auttavat oppilasta tietämään, mitä häneltä odotetaan, valitusta muodosta riippumatta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfolio tai näyttöön perustuva arviointi antaa oppilaan osoittaa edistymistä ajan myötä, ei vain yhdessä koetilanteessa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kun eriyttäminen luokassa ei enää riitä ja oppilas ei edelleenkään pääse käsiksi opetussuunnitelmaan, se on merkki siitä, että erityistukea voidaan tarvita.",
        "Eriyttäminen ei korvaa koulun tukitoimia (SPO, terapeutit, erityisopetus) – se on sitä, mitä tavallisessa luokassa tapahtuu niiden täydennykseksi.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatiivinen arviointi on mikä tahansa käytäntö, joka kerää tietoa oppimisesta oppimisprosessin aikana – ja käyttää tätä tietoa opetuksen tai oppilaan tuen mukauttamiseen.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Toisin kuin summatiivisessa arvioinnissa (loppuarvosanat), formatiivisessa arvioinnissa ei tarvitse olla arvosanaa – siinä on oltava palaute.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Neuroepätyypillisille oppilaille formatiivinen arviointi on erityisen tärkeä, koska suoritus yksittäisessä kokeessa ei välttämättä kuvasta sitä, mitä he todella osaavat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong> (poistumislippu): tunnin lopussa oppilas vastaa kysymykseen 2 minuutissa – opettaja näkee heti, kuka ymmärsi ja kuka ei.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Liikennevalot</strong>: vihreä (ymmärsin), keltainen (minulla on epäilyksiä), punainen (en ymmärtänyt) – ne voivat olla fyysisiä kortteja, post-it-lappuja tai digitaalinen ratkaisu.",
        "<strong>Think-Pair-Share</strong>: oppilas pohtii yksin, keskustelee parin kanssa ja jakaa sitten luokan kanssa – tämä vähentää suoran vastaamisen ahdistusta.",
        "<strong>Poistumisovi</strong>: ennen lähtöä oppilas kertoo opettajalle yhden asian, jonka hän oppi, ja yhden kysymyksen, joka hänellä vielä on.",
      ]},
      { items: [
        "Tehokas palaute on täsmällistä, toteutettavaa ja oikea-aikaista: ”sivulla 2 argumentti katoaa, koska yhteys todisteisiin puuttuu” on hyödyllistä; ”olisi voinut olla parempi” ei ole.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "ADHD-oppilaille: välitön palaute on tehokkaampaa kuin viivästetty. Älä odota tehtävän loppuun.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Lukihäiriöisille oppilaille: suullinen tai äänipalaute voi olla saavutettavampaa kuin laajat kirjalliset kommentit.",
        "Vältä oppilaiden vertailua keskenään – vertaa oppilasta hänen omaan aiempaan edistymiseensä.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: arviointi useissa lyhyissä hetkissä yhden pitkän kokeen sijaan. Vähennä häiritseviä ärsykkeitä arviointiympäristössä.",
        "Lukihäiriö: salli suulliset vastaukset, lisäaika tai tekstistä puheeksi -toiminnon (text-to-speech) käyttö. Arvioi sisältöä, älä oikeinkirjoitusta.",
        "Autismi: arvioinnit, joissa on selkeät ja yksiselitteiset kirjalliset ohjeet. Varoita formaatin muutoksista etukäteen.",
        "Lahjakkuus: vältä arviointeja, joissa pelkästään toistetaan sisältöä – sisällytä analyysi-, synteesi- ja luomiskysymyksiä.",
      ]},
      { items: [
        "Kun oppilas ei pysty osoittamaan oppimista edes arvioinnin mukautuksilla, se on merkki siitä, että taustalla voi olla syvempi este, jota on tutkittava SPO:n kanssa.",
        "Pysyvät (kuukausia, ei päiviä kestävät) tietyn vaikeuden kuviot jollakin alueella on ilmoitettava virallisesti.",
      ]},
    ]},
  },


  sk: {
    tdah: { sections: [
      { items: [
        "Ťažkosti s udržaním pozornosti pri dlhých úlohách; stráca sa v pokynoch o viacerých krokoch.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Neustály pohyb — nevydrží sedieť, hrá sa s rukami, vstáva bez zjavného dôvodu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Odpovedá ešte predtým, než sa otázka skončí; skáče do reči spolužiakom aj učiteľovi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zabúda pomôcky, termíny a pokyny zadané ústne pred niekoľkými minútami — pracovná pamäť je preťažená.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Môže sa hyperfokusovať na to, čo ho zaujíma, čím vyvoláva (mylný) dojem, že „dokáže to, keď chce“; v skutočnosti sa výkon mení podľa záujmu a odmeny.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Nejde</strong> o zlú výchovu, lenivosť ani slabosť charakteru: tieto mylné predstavy stigmatizujú a oddiaľujú podporu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nejde</strong> vždy o viditeľnú hyperaktivitu — existuje prevažne nepozorná forma, častejšia u dievčat a často poddiagnostikovaná.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Nevyrieši sa to</strong> tým, že sa „viac snaží“: ťažkosť spočíva v neurologickej sebaregulácii, nie vo vôli.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Rozdeliť pokyny na časti: po jednom, písomne na tabuli, s vymedzeným časom — zníži sa tým záťaž pracovnej pamäte.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Umožniť legitímny pohyb (rozdávanie pomôcok, zotieranie tabule, vybavovanie odkazov).",
        "Obmedziť konkurujúce podnety (miesto ďalej od okna, dverí a najhlučnejšej skupiny).",
        "Okamžité a časté pozitívne posilnenie: pri ADHD je citlivosť na odmenu zmenená (averzia k čakaniu), preto okamžité odmeny fungujú lepšie než odložené.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Začnite tým, čo žiak robí dobre — stretnutie nemôže začínať zoznamom sťažností, inak sa rodič defenzívne uzavrie.",
        "Opisujte pozorované správanie, nie diagnózy: „keď idú za sebou viac než dva kroky, stratí niť“ namiesto „má ADHD“.",
        "Predvídajte reakciu „doma to tak nie je“ — vysvetlite, že skupinové prostredie a nárok na dlhodobú pozornosť v triede robia príznaky viditeľnejšími.",
        "Ak navrhujete vyšetrenie, predstavte ho ako pomoc, nie ako trest: „existuje podpora, ktorá mu/jej môže veľmi pomôcť“ namiesto „musí byť vyšetrený/á“.",
      ]},
      { items: [
        "Pretrvávajúce disciplinárne problémy napriek úpravám v triede.",
        "Známky sociálneho vylúčenia zo strany rovesníkov.",
        "Známky komorbidity (úzkosť, depresia, opozičné vzdorovité správanie) — pri ADHD časté a odôvodňujúce odoslanie k odborníkovi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Číta pomaly a s námahou, s chybami pri čítaní izolovaných slov, a to aj v textoch, ktorým pri počúvaní dobre rozumie.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zámeny písmen (b/d, p/q) sú bežné u všetkých detí, ktoré začínajú písať, a samy osebe nie sú znakom dyslexie; ústredná ťažkosť je <strong>fonologická</strong> — spájanie písmen so zvukmi.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Pretrvávajúce pravopisné chyby, ktoré nereagujú na opakovanú opravu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Má sklon vyhýbať sa hlasnému čítaniu; môže to pôsobiť ako nezáujem, hoci ide v skutočnosti o ochrannú stratégiu.",
        "Porozumenie hovorenému slovu je výrazne lepšie než porozumenie čítanému textu — ťažkosť je špecifická, nie všeobecné kognitívne obmedzenie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nejde</strong> o nedostatok inteligencie: dyslexia je z definície nečakaná vzhľadom na ostatné kognitívne schopnosti žiaka.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nejde</strong> o problém so zrakom ani o obyčajné „zamieňanie písmen“: ústredný deficit spočíva vo fonologickom spracovaní.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nedá sa „vyliečiť“</strong>, ale štruktúrovaná intervencia v oblasti fonologického uvedomenia a dekódovania čítanie sústavne zlepšuje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Zväčšenie rozostupov medzi písmenami a riadkami: existujú experimentálne dôkazy, že zväčšený rozostup zlepšuje čítanie u dyslektických detí, a to bez predchádzajúceho nácviku.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Dôkazy pre konkrétne typy písma „pre dyslektikov“ sú naproti tomu slabšie a nekonzistentné.",
        "Umožniť tiché čítanie pred akýmkoľvek čítaním nahlas — nikdy nežiadať čítanie znenazdania.",
        "Ak cieľom nie je hodnotiť písanie, hodnotiť obsah oddelene od pravopisu.",
        "Ponúkať tie isté informácie v rôznych formátoch (zvuk, video, schémy).",
      ]},
      { items: [
        "Hneď na začiatku výslovne oddeliť čítanie od inteligencie: „veľmi dobre rozumie, keď počúva — ťažkosť sa týka konkrétne čítania“.",
        "Mať na pamäti, že dyslexia má silnú dedičnú zložku: jeden z rodičov môže mať nediagnostikovanú dyslexiu a rozhovor môže oživiť ťažké spomienky z vlastnej školskej dochádzky.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vyhnúť sa predkladaniu pracovných listov plných červených opráv bez kontextu — najprv ukázať, čo už žiak zvláda.",
        "Byť konkrétny pri už zavedených úpravách aj pri tých, ktoré môže zákonný zástupca zopakovať doma: texty vo zvukovej podobe, čítanie nahlas bez časového tlaku.",
      ]},
      { items: [
        "Zhoršujúce sa akademické sebaponímanie („som hlúpy“, „nezvládnem to“).",
        "Systematické vyhýbanie sa úlohám na čítanie/písanie do takej miery, že to ohrozuje ostatné predmety.",
        "Výrazný nesúlad medzi ústnym a písomným výkonom bez formálnej diagnózy — odporučiť na psychopedagogické vyšetrenie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Ťažkosti s neohlásenými zmenami — zmena rozvrhu, učebne, suplujúceho učiteľa.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Doslovná komunikácia — uniká jej nuansa, irónia, idiomatické výrazy.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zmyslová citlivosť — žiarivkové svetlo, hluk v pozadí, etikety na oblečení môžu byť neznesiteľné.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Zamerané a hlboké záujmy o konkrétne témy — spojené s kognitívnym štýlom orientovaným na detail.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Pri preťažení môže pôsobiť nezaujato alebo odťažito, no nie vypnuto.",
      ]},
      { items: [
        "<strong>Nie je</strong> lineárnou škálou („viac“ alebo „menej“ autistický) — je to viacrozmerný profil s odlišnými profilmi podpory v každej oblasti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nie je</strong> nedostatkom empatie: ťažkosti vo vzájomnom porozumení sú obojsmerné — aj neautistickým ľuďom robí problém čítať autistické osoby („problém dvojitej empatie“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie je</strong> zlým správaním, keď sa naruší rutina — je to skutočná neurologická reakcia na stratu predvídateľnosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Vopred upozorňujte na akúkoľvek zmenu rutiny, aj zdanlivo nepatrnú — vizuálna podpora a anticipácia majú empirickú oporu.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Premieňajte nevyslovené sociálne pravidlá na výslovné pravidlá (čo sa robí, čo sa nerobí, kedy).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Umožnite zmyslové prestávky v tichom priestore, ak je to potrebné.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Využite zameraný záujem ako vstupný bod k učivu — je to sila, nie rozptýlenie.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Ak diagnóza už existuje, opýtajte sa najprv, čo podľa zákonného zástupcu funguje — rodičia autistických detí často vedia o svojom dieťati viac než akákoľvek správa.",
        "Ak diagnóza nie je, buďte veľmi opatrní: opisujte konkrétne situácie a na prvom stretnutí nikdy nepoužite slovo „autizmus“ — „keď sa rutina zmení bez upozornenia, vaše dieťa sa veľmi rozruší spôsobom, ktorý presahuje bežnú mieru“.",
        "Oceňte úsilie zákonného zástupcu — vytvárať doma štruktúru a predvídateľnosť je náročné a jeho uznanie vytvára spojenectvo.",
        "Nikdy neporovnávajte s „ostatnými žiakmi“ ani so súrodencami — každý profil v spektre je iný a porovnávanie je vždy kontraproduktívne.",
      ]},
      { items: [
        "Časté krízy („meltdowny“) po školskom dni.",
        "Pretrvávajúce odmietanie školy spojené so zmyslovým preťažením.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Postupujúca sociálna izolácia napriek pokusom o mediáciu.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Rukopis ťažký, pomalý a často nečitateľný — pre skutočnú motorickú ťažkosť, nie z nedbanlivosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Ťažkosť v priestorovom usporiadaní zošita, v správe pomôcok a v sekvenciách krokov.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Môže pôsobiť „nešikovne“ — rozlieva nápoje, naráža do nábytku, má ťažkosti v športe.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Neprimeraná únava po úlohách, ktoré vyžadujú dlhodobú jemnú koordináciu.",
        "Poznávacia zložka býva zvyčajne zachovaná — odtiaľ častá frustrácia medzi tým, čo dieťa vie, a tým, čo dokáže ukázať.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nie je to</strong> lenivosť ani nedostatok snahy.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nie je to</strong> len zlý rukopis: klinickým termínom je vývinová porucha koordinácie (DCD) a postihuje plánovanie a motorické sekvencovanie, nielen písanie.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nevyrieši sa to</strong> tým, že sa „bude viac trénovať písanie“: účinná intervencia je zameraná na úlohu, nie na mechanické opakovanie.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Umožniť používanie klávesnice/tabletu pri rozsiahlejších písomných prácach.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Obmedziť mechanické odpisovanie z tabule — poskytnúť poznámky, ak je to relevantné.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Poskytovať jasné kontrolné zoznamy pre úlohy s viacerými krokmi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Hodnotiť výsledok podľa obsahu, nie podľa fyzickej úpravy.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Vysvetliť, čo je dyspraxia, jednoduchým jazykom — väčšina rodičov tento termín nikdy nepočula: „je to neurologická ťažkosť v koordinácii pohybov, nie je to nedbanlivosť ani nedostatok snahy“.",
        "Nečitateľný rukopis je bodom najväčšieho napätia s rodičmi — ukázať, že hodnotenie teraz oceňuje obsah, a nie formu, pomáha zmierniť úzkosť na oboch stranách.",
        "Navrhnúť praktické nástroje na domáce použitie: hlasový diktát v mobile na poznámky, klávesnicu na rozsiahle písomné práce.",
        "Ak sa v predchádzajúcich rokoch objavili označenia „je lenivý/lenivá“ alebo „nesnaží sa“, pomenovať to priamo: „viem, že ste to už počuli predtým — môj pohľad je iný“.",
      ]},
      { items: [
        "Úplné odmietanie písomnej produkcie.",
        "Sociálna izolácia v kontextoch fyzickej aktivity.",
        "Príznaky somatizovanej úzkosti pred písomnými testami — psychosociálne utrpenie je súčasťou klinického obrazu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Dokončí úlohy za pár minút, zatiaľ čo triede to trvá celú vyučovaciu hodinu.",
        "Kladie otázky, ktoré presahujú rámec učiva — alebo aktívne spochybňuje to, čo sa práve učí.",
        "Môže pôsobiť nezaujato, nedisciplinovane alebo apaticky — často ide o príznaky chronickej nudy a nevyužívania potenciálu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Výrazná emocionálna citlivosť; môže byť úzkostlivý alebo perfekcionistický — psychosociálne faktory sú pre rozvoj nadania rozhodujúce.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reálne riziko nevyužívania potenciálu — môže sa naučiť skrývať svoje schopnosti, aby spoločensky nevyčnieval.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Nie je</strong> to isté ako dobré správanie ani dobré výsledky — mnohí nadaní žiaci podávajú priemerné výkony pre nezáujem.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Neznamená</strong> „nepotrebuje pomoc“: potrebuje iné výzvy, pretože schopnosť sa premení na výkon len vtedy, keď sa cielene rozvíja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nie je</strong> nezlučiteľné s neurodivergenciou — dvojitá výnimočnosť (2e) existuje, je častá a býva často maskovaná.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Mať vždy pripravené rozširujúce úlohy — nie viac toho istého, ale učivo hlbšie alebo viac aplikované.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Umožniť samostatné skúmanie tém, ktoré žiaka zaujímajú, v rámci učebných osnov.",
        "Hodnotiť podľa náročnosti, nie podľa ľahkosti — zadávať náročnejšie práce výmenou za menší objem.",
        "Rozpoznať a uznať emocionálnu citlivosť bez toho, aby sme ju patologizovali.",
      ]},
      { items: [
        "Predísť pýche a presmerovať ju: „je zjavne veľmi schopný — a práve preto nuda začína spôsobovať problémy“.",
        "Vysvetliť paradox nadania: dobré výsledky neznamenajú, že je všetko v poriadku, a nevyužívanie potenciálu z nezáujmu je bežné a zvratné.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ak žiak skrýva svoje schopnosti, aby sa spoločensky začlenil, pomenovať to citlivo — je to znak trápenia, nie skromnosti.",
        "Navrhnúť rodičom, aby doma oceňovali proces namiesto výsledku: zvedavosť, hĺbka a náročné otázky majú väčšiu hodnotu než vysoké známky za ľahké úlohy.",
      ]},
      { items: [
        "Príznaky úzkosti alebo depresie spojené s extrémnym perfekcionizmom.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Výrazná sociálna izolácia daná pocitom, že je „iný“ než rovesníci.",
        "Náhly pokles školského výkonu u žiaka, ktorý bol predtým identifikovaný ako schopný.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Rozumie oveľa menej, než sa zdá — konverzačný jazyk sa rozvíja oveľa skôr než akademický jazyk, takže žiak môže pôsobiť plynule, hoci nestíha sledovať učivo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Zdanlivo slabý študijný výkon, často neúmerný skutočným schopnostiam.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Mlčanie v triede — môže ísť o normálne „tiché obdobie“ pri osvojovaní jazyka, nie o nezáujem.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Na konci dňa môže byť vyčerpaný zo spracovávania jazyka v reálnom čase.",
        "Riziko poddiagnostikovania skutočných špeciálnych výchovno-vzdelávacích potrieb (dyslexia, ADHD), keď sa všetko pripisuje jazykovej bariére.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nejde o</strong> nedostatok inteligencie ani schopností.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nejde</strong> len o otázku času: rozvoj akademického jazyka trvá roky a bez explicitnej podpory sa mnohí žiaci ustália na nízkej funkčnej úrovni.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nevyrieši to</strong> automatický preklad počas hodiny — je to proces trvajúci roky a materinský jazyk je zdrojom, nie prekážkou.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Poskytovať materiály s kľúčovou slovnou zásobou preloženou do materinského jazyka.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Overovať vedomosti prostredníctvom vizuálnej alebo praktickej ukážky, kedykoľvek je to možné.",
        "Spárovať s dvojjazyčným spolužiakom na neformálne sprostredkovanie v kľúčových momentoch.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Akceptovať počiatočné prejavy s gramatickými chybami — v prvej fáze opravovať obsah, nie formu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Samotné stretnutie je bariérou — zákonný zástupca nemusí ovládať slovenčinu na úrovni dostatočnej pre zložitý rozhovor. Pripravte si vopred jednoduché písomné materiály alebo požiadajte o tlmočnícku podporu.",
        "Nepredpokladajte, že zákonný zástupca pozná slovenský vzdelávací systém — vysvetlite, čo je školský podporný tím, čo je podporné opatrenie, čo obnáša vyšetrenie, bez toho, aby ste čokoľvek považovali za samozrejmé.",
        "Jasne oddeľujte jazykovú bariéru od študijných schopností: „Vaše dieťa je schopné — učí sa jazyk zároveň s učivom, čo je veľmi náročné.“<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Buďte citliví na migračný kontext: utečenecké rodiny alebo rodiny v neregulárnej situácii môžu inštitúciám nedôverovať. Budujte dôveru skôr, než požiadate o dokumenty alebo odporúčania.",
      ]},
      { items: [
        "Známky sociálnej izolácie alebo šikany spojené s postavením zahraničného žiaka.",
        "Stagnácia v osvojovaní jazyka po prvom roku.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Známky traumy spojenej s migračným kontextom (najmä u utečencov).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Údaje maloletých osôb podliehajú zvýšenej ochrane (čl. 8 GDPR). Súhlas zákonných zástupcov je povinný.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Overte, kde nástroj uchováva údaje — na európskych serveroch, mimoeurópskych, anonymizovane alebo nie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Do nástrojov generatívnej AI nikdy nevkladajte celé mená, adresy, identifikačné čísla ani klinické diagnózy.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Rozlišujte inštitucionálne používanie (zmluvu uzatvára škola) od osobného používania učiteľa (individuálna zodpovednosť).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Systémy trénované prevažne na anglojazyčných údajoch môžu mať horší výkon v slovenčine a v slovenskojazyčných kontextoch.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatické odporúčania môžu zosilňovať stereotypy týkajúce sa pohlavia, etnicity alebo spoločenskej triedy — kriticky ich overujte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modely „predikcie akademického rizika“ sú obzvlášť problematické — často reprodukujú existujúce nerovnosti namiesto toho, aby rozpoznávali potreby.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Cieľom je posilniť autonómiu žiaka, nie nahradiť kognitívnu prácu, ktorá ju rozvíja.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Rozlišujte <strong>nástroj prístupu</strong> (text-to-speech pre žiaka s dyslexiou) od <strong>nástroja náhrady</strong> (ChatGPT píšuci sloh).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Pravidelne vyhodnocujte: rozvíja žiak kompetenciu, alebo si rozvíja závislosť od nástroja?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Rieši nástroj skutočnú prekážku, alebo vytvára skratku, ktorá vynecháva učenie?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Sú vložené údaje chránené a existuje súhlas?",
        "<strong>3.</strong> Bude výstup nástroja overený človekom, skôr než sa dostane k žiakovi?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Existuje alternatíva bez AI, ktorá funguje rovnako dobre?",
        "<strong>5.</strong> Ak nástroj zajtra prestane existovať, zostane žiak bez pomoci?",
      ]},
    ],
    references: [
      "Európska únia. (2016). <em>Nariadenie (EÚ) 2016/679 (všeobecné nariadenie o ochrane údajov)</em>, čl. 8. Úradný vestník Európskej únie, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Pripraviť kolegov na zodpovednú integráciu UI do vyučovania cudzieho jazyka vrátane tvorby materiálov prispôsobiteľných rôznym profilom učenia sa.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nie je to prezentácia — je to spoločná tvorba. Každý účastník odchádza s aspoň jedným zdrojom pripraveným na vyskúšanie.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Uvedenie do problému — heterogénna trieda a prečo „viac toho istého“ nefunguje.",
        "<strong>10–25 min:</strong> Mapa profilov — predstavenie šiestich kariet Farol s reálnymi (anonymizovanými) prípadmi.",
        "<strong>25–45 min:</strong> Praktická ukážka — tri nástroje, tri prípady použitia, tri odlišné profily.",
        "<strong>45–75 min:</strong> Práca vo dvojiciach — každá dvojica prispôsobí existujúci materiál konkrétnemu profilu.",
        "<strong>75–85 min:</strong> Rýchle zdieľanie — každá dvojica predstaví svoj výtvor za 1 minútu.",
        "<strong>85–90 min:</strong> Záväzky — každý účastník si vyberie materiál na vyskúšanie a dohodne sa stretnutie so spätnou väzbou o 30 dní.",
      ]},
      { items: [
        "Prístup na internet a k inštitucionálnym kontám v predvádzaných nástrojoch.",
        "Existujúce materiály každého účastníka (pracovný list, test alebo plán hodiny).",
        "Vytlačené karty profilov Farol na nahliadnutie.",
      ]},
      { items: [
        "Každý účastník vytvorí počas stretnutia aspoň jeden prispôsobený materiál.",
        "Stretnutie so spätnou väzbou po 30 dňoch, na ktorom aspoň 60 % účastníkov uvádza skutočné zavedenie do praxe.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Aspoň jeden materiál vytvorený počas stretnutia je prijatý ako zdieľaný zdroj katedry.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "<strong>Zákon č. 245/2008 Z.z.</strong> (Školský zákon) tvorí základný rámec vzdelávania žiakov so špeciálnymi výchovno-vzdelávacími potrebami (ŠVVP); inkluzívne vzdelávanie je štátnou politikou.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Vyhláška č. 325/2008 Z. z.</strong> o školských zariadeniach výchovného poradenstva a prevencie upravuje činnosť poradenských zariadení.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Slovensko ratifikovalo Dohovor OSN o právach osôb so zdravotným postihnutím; školy sú povinné vytvárať inkluzívne podmienky.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Individuálny prístup a diferenciácia vyučovania sú základnou povinnosťou každého pedagóga bez formálnej dokumentácie.",
        "Základné adaptácie (viac času, písomné pokyny, strategické umiestnenie) nevyžadujú špeciálne schválenie, zodpovednosť každého učiteľa.",
        "Škola je povinná vytvoriť podmienky pre každého žiaka v rámci svojich kapacít.",
      ]},
      { items: [
        "Centrum poradenstva a prevencie (CPP) vykonáva odbornú diagnostiku a vydáva odporúčania pre školu.",
        "Individuálny vzdelávací program (IVP) vypracúva škola v spolupráci s CPP a rodičmi; je záväzný pre všetkých vyučujúcich.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Pedagogický asistent môže byť pridelený žiakom s vyššími potrebami na základe odporúčania CPP.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Špeciálny pedagóg v škole alebo v CPP koordinuje podporu a metodicky usmerňuje ostatných učiteľov.",
      ]},
      { items: [
        "Nadaní žiaci sú zahrnutí v §105–106 Školského zákona 245/2008; majú nárok na IVP prispôsobený ich potrebám.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Gymnáziá pre mimoriadne nadaných žiakov ponúkajú špecializované programy; rozširujúce programy a krúžky sú dostupné na bežných školách.",
        "V praxi je identifikácia nadania nedostatočná, CPP môže vykonať hodnotenie a odporučiť vhodné opatrenia.",
      ]},
      { items: [
        "Metodické usmernenie MŠVVaŠ SR upravuje vzdelávanie žiakov cudzincov a žiakov neovládajúcich slovenský jazyk.",
        "Slovenčina ako cudzí jazyk je dostupná ako podpora; jazykové kurzy štátneho jazyka sú určené pre žiakov s nulovou alebo minimálnou znalosťou slovenčiny.",
        "Jazyková bariéra nie je dôvodom na zaradenie do špeciálneho vzdelávania, pred odoslaním na odborné vyšetrenie je potrebné vylúčiť jazykovú príčinu ťažkostí.",
      ]},
      { items: [
        "<strong>Zákon č. 245/2008 Z.z.</strong>, základný rámec vzdelávania žiakov so ŠVVP.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Vyhláška č. 325/2008 Z. z.</strong>, školské zariadenia poradenstva a prevencie.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>CPP</strong>, centrum poradenstva a prevencie.",
        "<strong>IVP</strong>, individuálny výchovno-vzdelávací program.",
        "<strong>Ochrana údajov</strong>: údaje žiakov podliehajú GDPR a zákonu č. 18/2018 Z.z. o ochrane osobných údajov; citlivé informácie nezdieľať mimo tímu bez súhlasu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Dohovor OSN o právach osôb so zdravotným postihnutím</em> (2006), ratifikovaný Slovenskou republikou (č. 317/2010 Z.z.); článok 24 zakotvuje právo na inkluzívne vzdelávanie.",
      "<em>Zákon č. 245/2008 Z. z. o výchove a vzdelávaní (školský zákon) a o zmene a doplnení niektorých zákonov</em>; základný rámec vzdelávania žiakov so špeciálnymi výchovno-vzdelávacími potrebami i nadaných žiakov (§ 105–106).",
      "<em>Vyhláška Ministerstva školstva SR č. 325/2008 Z. z. o školských zariadeniach výchovného poradenstva a prevencie</em>, upravujúca podmienky vzdelávania žiakov so špeciálnymi výchovno-vzdelávacími potrebami a činnosť CPP.",
      "<em>Zákon č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov</em>, v nadväznosti na všeobecné nariadenie o ochrane údajov (GDPR).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagogická diferenciácia znamená prispôsobiť spôsob, akým sa vyučuje — nie znižovať očakávania. Cieľ učenia môže byť pre všetkých rovnaký; líši sa cesta k nemu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Model UDL (Universal Design for Learning) navrhuje tri princípy: viacero spôsobov reprezentácie (ako je obsah prezentovaný), viacero spôsobov konania a vyjadrenia (ako žiak odpovedá) a viacero spôsobov zapojenia (čo žiaka motivuje).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferencovať neznamená vytvárať prípravu na hodinu pre každého žiaka zvlášť — ide o to vytvoriť dostatočnú flexibilitu, aby tá istá hodina vyhovovala rôznym profilom žiakov.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Nie je to</strong> okresanie učiva pre žiakov s najväčšími ťažkosťami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie je to</strong> neustále zadávanie odlišných úloh rôznym žiakom — to izoluje a nálepkuje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nie je to</strong> len diferencovaná práca na papieri — diferenciácia zahŕňa aj spôsob, akým učiteľ vysvetľuje, kladie otázky a hodnotí.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Riadený výber: ponúknite 2 – 3 možnosti formátu odpovede (písaný text, ústny prejav, schematický náčrt) — všetci reagujú na ten istý obsah.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Lešenie (scaffolding): poskytnite žiakom s väčšími ťažkosťami štruktúrovanú oporu; postupne ju odoberajte, ako rastie ich samostatnosť.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Flexibilné zoskupovanie: skupiny podľa záujmu, podľa úrovne zvládnutia učiva alebo zmiešané — obmieňajte ich, aby ste predišli stálym skupinám, ktoré sa stávajú identitami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Úpravy času: viac času neznamená nižšiu náročnosť. U žiakov s ADHD alebo dyspraxiou rozdeľte úlohu na časti s naplánovanými prestávkami.",
        "Úroveň zložitosti: pre tú istú tému vytvárajte verzie s väčšou či menšou jazykovou podporou, s príkladmi alebo bez nich, s vizuálnymi pomôckami alebo bez nich.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Hodnoťte, čo žiak vie, nie ako píše. Žiak s dyslexiou môže preukázať porozumenie pojmom ústne alebo s technologickou podporou.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Jasné hodnotiace kritériá (rubriky) zdieľané pred úlohou umožňujú žiakovi vedieť, čo sa od neho očakáva, bez ohľadu na zvolený formát.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfólio alebo hodnotenie založené na dôkazoch umožňuje žiakovi ukázať pokrok v čase, nielen v jednom okamihu testu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Keď diferenciácia v triede prestáva stačiť a žiak stále nemá prístup k učivu, je to znak toho, že môže byť potrebná špecializovaná podpora.",
        "Diferenciácia nenahrádza podporné opatrenia školy (školské poradenské zariadenie, terapeuti, špeciálne vzdelávanie) — je to to, čo sa deje v bežnej triede ako ich doplnok.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatívne hodnotenie je akákoľvek prax, ktorá zhromažďuje informácie o učení počas procesu — a tieto informácie využíva na úpravu vyučovania alebo podpory žiaka.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Na rozdiel od sumatívneho hodnotenia (záverečné známky) nemusí mať formatívne hodnotenie známku — musí mať spätnú väzbu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Pre neurodivergentných žiakov je formatívne hodnotenie obzvlášť dôležité, pretože výkon v jednorazovom teste nemusí odrážať to, čo skutočne vedia.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na konci hodiny žiak odpovie na otázku za 2 minúty — učiteľ okamžite vidí, kto učivo pochopil a kto nie.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semafor</strong>: zelená (rozumiem), žltá (mám pochybnosti), červená (nerozumiem) — môžu to byť fyzické kartičky, lepiace lístky alebo digitálna forma.",
        "<strong>Think-Pair-Share</strong>: žiak najprv premýšľa sám, potom to preberie s dvojicou a nakoniec sa podelí s celou triedou — znižuje to úzkosť z priamej odpovede.",
        "<strong>Dvere na odchode</strong>: skôr než žiak odíde, povie učiteľovi jednu vec, ktorú sa naučil, a jednu otázku, ktorú ešte má.",
      ]},
      { items: [
        "Účinná spätná väzba je konkrétna, využiteľná a poskytnutá včas: „na strane 2 sa argument stráca, pretože chýba prepojenie s dôkazmi“ je užitočné; „mohlo to byť lepšie“ nie.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "U žiakov s ADHD: okamžitá spätná väzba je účinnejšia než odložená. Nečakať až do konca úlohy.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "U žiakov s dyslexiou: ústna alebo zvuková spätná väzba môže byť prístupnejšia než rozsiahle písomné komentáre.",
        "Vyhýbať sa vzájomnému porovnávaniu žiakov — porovnávať žiaka s jeho vlastným predchádzajúcim pokrokom.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: hodnotenie vo viacerých krátkych momentoch namiesto jediného dlhého testu. Obmedziť rušivé podnety v prostredí hodnotenia.",
        "Dyslexia: umožniť ústne odpovede, čas navyše alebo využitie prevodu textu na reč. Hodnotiť obsah, nie pravopis.",
        "Autizmus: hodnotenie s jasnými a jednoznačnými písomnými pokynmi. Vopred upozorniť na zmeny formátu.",
        "Mimoriadne nadanie: vyhýbať sa hodnoteniu založenému na obyčajnej reprodukcii obsahu — zaradiť otázky vyžadujúce analýzu, syntézu a tvorbu.",
      ]},
      { items: [
        "Keď ani s úpravami hodnotenia žiak nedokáže preukázať učenie, je to signál, že môže existovať hlbšia bariéra, ktorú treba preskúmať so školským poradenským zariadením.",
        "Pretrvávajúce vzorce (mesiace, nie dni) špecifických ťažkostí v určitej oblasti by mali byť formálne nahlásené.",
      ]},
    ]},
  },

  hu: {
    tdah: { sections: [
      { items: [
        "Nehézség a figyelem fenntartásában hosszú feladatok során; eltéved a több lépésből álló utasításokban.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Állandó mozgás — nem marad ülve, babrál a kezével, látható ok nélkül feláll.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A kérdés befejezése előtt válaszol; félbeszakítja a társait és a pedagógust.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Elfelejti a felszereléseket, a határidőket és a néhány perce szóban adott utasításokat — a munkamemória túlterhelt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Túlzottan rá tud összpontosítani arra, ami érdekli, azt a (téves) benyomást keltve, hogy „meg tudja csinálni, ha akarja”; valójában a teljesítménye az érdeklődéstől és a jutalomtól függően ingadozik.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Nem</strong> rossz neveltetés, lustaság vagy jellemhiba: ezek a téves elképzelések megbélyegeznek és késleltetik a támogatást.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nem</strong> mindig látható hiperaktivitás — létezik egy túlnyomórészt figyelemzavaros megjelenési forma, amely gyakoribb a lányoknál és gyakran aluldiagnosztizált.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Nem</strong> oldódik meg azzal, hogy „jobban igyekszik”: a nehézség a neurológiai önszabályozásban van, nem az akaratban.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Bontsa fel az utasításokat: egyet egyszerre, írásban a táblán, meghatározott idővel — ez csökkenti a munkamemória terhelését.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Engedélyezzen jogos mozgást (anyagok kiosztása, a tábla letörlése, üzenetek elvitele).",
        "Csökkentse a versengő ingereket (ablaktól, ajtótól, a leghangosabb csoporttól távol eső hely).",
        "Azonnali és gyakori pozitív megerősítés: az ADHD esetében a jutalomérzékenység megváltozott (várakozás iránti averzió), ezért az azonnali jutalmak jobban működnek, mint a késleltetettek.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Kezdje azzal, amit a tanuló jól csinál — a megbeszélés nem kezdődhet panaszlistával, különben a szülő/gondviselő védekezően bezárkózik.",
        "Megfigyelt viselkedéseket írjon le, ne diagnózisokat: „amikor kettőnél több egymást követő lépés van, elveszíti a fonalat” az „ADHD-s” helyett.",
        "Számítson az „otthon nem ilyen” reakcióra — magyarázza el, hogy a csoportos környezet és az osztályban szükséges tartós figyelem teszi láthatóbbá a tüneteket.",
        "Ha vizsgálatot javasol, mutassa be erőforrásként, ne büntetésként: „van olyan támogatás, amely sokat segíthet neki” a „ki kell vizsgáltatni” helyett.",
      ]},
      { items: [
        "Tartós fegyelmi nehézségek a tantermi alkalmazkodások ellenére.",
        "A társak általi szociális kirekesztés jelei.",
        "A komorbiditás jelei (szorongás, depresszió, oppozíciós zavar) — gyakoriak az ADHD-ban, és indokolják a továbbirányítást.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Lassan és erőlködve olvas, az egyes szavak olvasásakor hibázik, még olyan szövegekben is, amelyeket hallás után jól megért.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "A betűcserék (b/d, p/q) minden írni kezdő gyermeknél gyakoriak, és önmagukban nem jelei a diszlexiának; a központi nehézség <strong>fonológiai</strong> jellegű — a betűk hangokhoz kapcsolása.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Tartós helyesírási hibák, amelyek az ismételt javításra sem javulnak.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Hajlamos kerülni a hangos olvasást; érdektelenségnek tűnhet, miközben valójában védekező stratégia.",
        "A szövegértés hallás után egyértelműen jobb, mint olvasáskor — a nehézség specifikus, nem általános kognitív korlát.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nem</strong> az értelem hiánya: a diszlexia per definitionem a tanuló többi kognitív képességéhez képest váratlan.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nem</strong> látásprobléma, és nem is egyszerű „betűk felcserélése”: a központi hiányosság a fonológiai feldolgozásban van.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nem „gyógyítható”</strong>, de a fonológiai tudatosságra és a dekódolásra irányuló strukturált beavatkozás következetesen javítja az olvasást.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "A betűk és sorok közötti térköz növelése: kísérleti bizonyíték van arra, hogy a megnövelt térköz előzetes gyakorlás nélkül is javítja a diszlexiás gyermekek olvasását.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Ezzel szemben a kifejezetten „diszlexiásoknak” szánt betűtípusok melletti bizonyíték gyengébb és ellentmondásos.",
        "Engedélyezze a néma olvasást minden hangos olvasás előtt — soha ne kérjen váratlanul hangos olvasást.",
        "Amikor a cél nem az írás értékelése, a tartalmat a helyesírástól külön értékelje.",
        "Kínálja ugyanazt az információt többféle formátumban (hang, videó, ábrák).",
      ]},
      { items: [
        "Már a beszélgetés elején válassza el kifejezetten az olvasást az értelmi képességtől: „nagyon jól megérti, amikor hallja — a nehézség kifejezetten az olvasásra vonatkozik”.",
        "Tartsa szem előtt, hogy a diszlexiának erős örökletes összetevője van: az egyik szülőnek lehet diagnosztizálatlan diszlexiája, és a beszélgetés felidézheti saját iskolai éveinek nehéz emlékeit.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Kerülje a pirossal teleírt, javításokkal teli lapok kontextus nélküli bemutatását — először azt mutassa meg, amit a tanuló már képes megtenni.",
        "Legyen konkrét a már alkalmazott alkalmazkodásokról és azokról, amelyeket a gondviselő otthon megismételhet: hangoskönyv formátumú szövegek, hangos olvasás időkényszer nélkül.",
      ]},
      { items: [
        "Romló tanulmányi önértékelés („buta vagyok”, „nem megy”).",
        "Az olvasási/írási feladatok rendszeres kerülése olyan mértékben, hogy az más tantárgyakat is veszélyeztet.",
        "Markáns eltérés a szóbeli és írásbeli teljesítmény között hivatalos diagnózis nélkül — irányítsa pszichopedagógiai vizsgálatra.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Nehézség a be nem jelentett változásokkal — órarend-, terem- vagy helyettesítő tanár váltása.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Szó szerinti kommunikáció — nem érzékeli az árnyalatokat, az iróniát, az idiomatikus kifejezéseket.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Szenzoros érzékenység — a fénycső fénye, a háttérzaj, a ruhacímkék elviselhetetlenek lehetnek.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bizonyos témák iránti összpontosított és mély érdeklődés — a részletekre összpontosító kognitív stílushoz kapcsolódóan.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Túlterheltség esetén érdektelennek vagy távolságtartónak tűnhet, nem pedig kikapcsoltnak.",
      ]},
      { items: [
        "<strong>Nem</strong> egy lineáris skála („inkább” vagy „kevésbé” autista) — hanem egy többdimenziós profil, minden területen eltérő támogatási profillal.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nem</strong> az empátia hiánya: a kölcsönös megértés nehézségei kétirányúak — a nem autista emberek számára is nehéz „olvasni” az autistákat (a „kettős empátia problémája”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nem</strong> rossz magatartás, amikor egy rutin megszakad — ez a kiszámíthatóság elvesztésére adott valódi neurológiai válasz.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Előzetesen jelezzen minden rutinbeli változást, még ha látszólag jelentéktelennek is tűnik — a vizuális támogatásnak és az előrejelzésnek empirikus alátámasztása van.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Tegye a hallgatólagos társas szabályokat kifejezett szabályokká (mit szabad, mit nem szabad, mikor).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Engedélyezzen szenzoros szüneteket csendes térben, amikor szükséges.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Használja ki az összpontosított érdeklődést a tananyaghoz való belépési pontként — ez erősség, nem pedig zavaró tényező.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Ha a diagnózis már létezik, először kérdezze meg, mit tud a gondviselő arról, ami működik — az autista gyermekek szülei gyakran többet tudnak gyermekükről, mint bármilyen szakvélemény.",
        "Ha nincs diagnózis, legyen nagyon óvatos: írjon le konkrét helyzeteket anélkül, hogy az első találkozón valaha kimondaná az „autizmus” szót — „amikor a rutin figyelmeztetés nélkül megváltozik, a fia/lánya nagyon felzaklatja magát olyan módon, amely meghaladja a szokásost”.",
        "Ismerje el a gondviselő erőfeszítését — a struktúra és a kiszámíthatóság megteremtése otthon megterhelő, és ennek elismerése szövetséget teremt.",
        "Soha ne hasonlítsa össze „más diákokkal” vagy testvérekkel — a spektrum minden profilja különböző, és az összehasonlítás mindig kontraproduktív.",
      ]},
      { items: [
        "Gyakori krízisek („meltdownok”) a tanítási nap után.",
        "Tartós iskolakerülés szenzoros túlterheltséghez kapcsolódóan.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Fokozatos társas elszigetelődés a közvetítési kísérletek ellenére.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Nehézkes, lassú és gyakran olvashatatlan kézírás — valódi mozgási nehézség, nem hanyagság miatt.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Nehézség a füzet térbeli rendezésében, az eszközök kezelésében és a lépéssorozatokban.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Tűnhet „ügyetlennek” — feldönti a poharakat, nekimegy a bútoroknak, nehézségei vannak a sportban.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Aránytalan fáradtság a tartós finommozgásos koordinációt igénylő feladatok után.",
        "A kognitív komponens általában ép — innen ered a gyakori frusztráció a tudás és a megmutatás képessége között.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nem</strong> lustaság vagy igyekezet hiánya.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nem</strong> pusztán rossz kézírás: a klinikai megnevezés a fejlődési koordinációs zavar (DCD), és a tervezést, valamint a mozgásos szekvenálást érinti, nemcsak az írást.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Nem oldódik meg</strong> azzal, hogy „többet kell gyakorolni az írást”: a hatékony beavatkozás feladatorientált, nem mechanikus ismétlés.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Engedélyezni a billentyűzet/tablet használatát a terjedelmes írásbeli munkáknál.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Csökkenteni a tábláról való mechanikus másolást — releváns esetben jegyzeteket biztosítani.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kifejezett ellenőrzőlistákat biztosítani a több lépésből álló feladatokhoz.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "A munkát a tartalom, ne a fizikai megjelenés alapján értékelni.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Egyszerű nyelven elmagyarázni, mi a diszpraxia — a legtöbb gondviselő soha nem hallotta a kifejezést: „ez egy neurológiai eredetű nehézség a mozgások koordinálásában, nem hanyagság és nem az igyekezet hiánya”.",
        "Az olvashatatlan kézírás a legnagyobb súrlódási pont a gondviselőkkel — annak megmutatása, hogy az értékelés immár a tartalmat és nem a formát helyezi előtérbe, mindkét fél szorongásának enyhítésében segít.",
        "Gyakorlati eszközöket javasolni az otthoni használatra: hangdiktálás a telefonon a jegyzetekhez, billentyűzet a terjedelmes írásbeli munkákhoz.",
        "Ha korábbi években előfordult a „lusta” vagy „nem igyekszik” minősítés, ezt nevezzük néven közvetlenül: „tudom, hogy ezt már hallotta korábban — én másképp olvasom a helyzetet”.",
      ]},
      { items: [
        "Az írásbeli munka teljes megtagadása.",
        "Társas elszigetelődés a fizikai tevékenység helyzeteiben.",
        "Szomatizált szorongás jelei az írásbeli értékelések előtt — a pszichoszociális szenvedés a kórkép része.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Percek alatt befejezi a feladatokat, miközben az osztály egész órát igényel.",
        "Olyan kérdéseket tesz fel, amelyek kívül esnek a tananyagon — vagy aktívan megkérdőjelezi azt, amit tanítanak.",
        "Tűnhet érdektelennek, fegyelmezetlennek vagy apatikusnak — ezek gyakran a krónikus unalom és az alulteljesítés jelei.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kifejezett érzelmi érzékenység; lehet szorongó vagy perfekcionista — a pszichoszociális tényezők meghatározóak a tehetség fejlődésében.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Az alulteljesítés valós kockázata — megtanulhatja elrejteni a képességeit, hogy társas szempontból ne tűnjön ki.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Nem</strong> egyenlő a jó magatartással vagy a jó eredményekkel — sok tehetséges tanuló átlagosan teljesít érdektelenségből.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nem</strong> azt jelenti, hogy „nincs szüksége segítségre”: másfajta kihívásokra van szüksége, mert a képesség csak akkor válik teljesítménnyé, ha tudatosan fejlesztik.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Nem</strong> összeegyeztethetetlen a neurodivergenciával — a kétszeresen kivételes (2e) állapot létezik, gyakori, és sokszor elfedett.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Mindig legyenek előkészített elmélyítő feladatok — ne ugyanabból több, hanem mélyebb vagy alkalmazottabb anyag.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tegye lehetővé a tanuló érdeklődésének megfelelő témák önálló kutatását a tananyagon belül.",
        "Értékeljen a kihívás, ne a könnyűség alapján — kérjen igényesebb munkákat kisebb mennyiségért cserébe.",
        "Ismerje el és fogadja el az érzelmi érzékenységet anélkül, hogy patologizálná.",
      ]},
      { items: [
        "Számítson a büszkeségre, és terelje át: „nyilvánvalóan nagyon képes — és éppen ezért okoz problémákat az unalom”.",
        "Magyarázza el a tehetség paradoxonát: a jó eredmények nem jelentik azt, hogy jól van, és az érdektelenségből fakadó alulteljesítés gyakori és visszafordítható.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ha a tanuló elrejti a képességeit, hogy beilleszkedjen, nevezze ezt meg óvatosan — ez a szenvedés jele, nem a szerénységé.",
        "Javasolja a szülőknek/gondviselőknek, hogy otthon a folyamatot értékeljék az eredmény helyett: a kíváncsiság, a mélység és a nehéz kérdések többet érnek, mint a magas jegyek könnyű feladatokban.",
      ]},
      { items: [
        "A szélsőséges perfekcionizmushoz kapcsolódó szorongás vagy depresszió jelei.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kifejezett társas elszigetelődés, amelyet a kortársaktól való „másság” érzése jellemez.",
        "Hirtelen tanulmányi alulteljesítés egy korábban képesnek azonosított tanulónál.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Sokkal kevesebbet ért, mint amennyit mutat — a társalgási nyelv jóval előbb fejlődik ki, mint a tanulmányi nyelv, ezért tűnhet folyékonyan beszélőnek anélkül, hogy követné a tananyagot.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Látszólag gyenge tanulmányi teljesítmény, amely gyakran aránytalan a valódi képességeihez.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Hallgatás az órán — ez lehet a nyelvelsajátítás során megszokott „néma időszak”, nem pedig érdektelenség.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "A nap végére kimerülhet, mert valós időben dolgozza fel a nyelvet.",
        "Fennáll a valós oktatási szükségletek (diszlexia, ADHD) aluldiagnosztizálásának kockázata, mert mindent a nyelvi akadálynak tulajdonítanak.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Nem</strong> az intelligencia vagy a képesség hiányáról van szó.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nem</strong> pusztán idő kérdése: a tanulmányi nyelv kialakulása évekig tart, és kifejezett támogatás nélkül sok tanuló alacsony funkcionális szinten stabilizálódik.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Nem oldható meg</strong> az óra alatti gépi fordítással — ez évekig tartó folyamat, és az anyanyelv erőforrás, nem akadály.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Olyan tananyagok biztosítása, amelyekben a kulcsszókincs anyanyelvre van fordítva.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "A tudás felmérése – amikor csak lehetséges – vizuális vagy gyakorlati bemutatás útján.",
        "Kétnyelvű osztálytárssal való párba állítás a kritikus pillanatokban történő informális közvetítés érdekében.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "A nyelvtani hibákat tartalmazó kezdeti megnyilatkozások elfogadása — az első szakaszban a tartalmat javítsuk, ne a formát.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Maga a megbeszélés is akadályt jelent — előfordulhat, hogy a szülő/gondviselő nem beszéli kellő szinten a tanítás nyelvét egy összetett beszélgetéshez. Készítsen elő előre egyszerű írásos anyagokat, vagy kérjen tolmácstámogatást.",
        "Ne feltételezze, hogy a szülő/gondviselő ismeri az oktatási rendszert — magyarázza el, mi az iskolapszichológiai és tanácsadó szolgálat, mi az a támogató intézkedés, mivel jár egy felmérés, anélkül hogy bármit is magától értetődőnek venne.",
        "Egyértelműen válassza el a nyelvi akadályt a tanulmányi képességtől: „a gyermeke képes rá — egyszerre tanulja a nyelvet és a tananyagot, ami rendkívül megterhelő”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Legyen érzékeny a migrációs háttérre: a menekült vagy rendezetlen jogi helyzetben lévő családok bizalmatlanok lehetnek az intézményekkel szemben. Építsen ki bizalmat, mielőtt dokumentumokat vagy beutalókat kérne.",
      ]},
      { items: [
        "A külföldi tanulói helyzettel összefüggő társas elszigeteltség vagy zaklatás jelei.",
        "A nyelvelsajátítás megrekedése az első év után.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "A migrációs háttérrel összefüggő trauma jelei (különösen menekültek esetében).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "A kiskorúak adatai fokozott védelem alá esnek (GDPR 8. cikk). A gondviselők hozzájárulása kötelező.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ellenőrizze, hol tárolja az eszköz az adatokat — európai vagy nem európai szervereken, anonimizálva vagy sem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Soha ne adjon meg teljes neveket, lakcímeket, azonosító számokat vagy klinikai diagnózisokat generatív MI-eszközökben.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Különböztesse meg az intézményi használatot (az iskola szerződést köt) a pedagógus személyes használatától (egyéni felelősség).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "A túlnyomórészt angol nyelvű adatokon betanított rendszerek gyengébben teljesíthetnek magyar nyelven és magyar nyelvű kontextusokban.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Az automatikus ajánlások felerősíthetik a nemi, etnikai vagy osztálybeli sztereotípiákat — vizsgálja meg őket kritikusan.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "A „tanulmányi kockázat előrejelzésére” szolgáló modellek különösen problémásak — gyakran a meglévő egyenlőtlenségeket reprodukálják, ahelyett hogy szükségleteket azonosítanának.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "A cél a tanuló önállóságának növelése, nem pedig az őt fejlesztő kognitív munka helyettesítése.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Különböztesse meg a <strong>hozzáférési eszközt</strong> (text-to-speech egy diszlexiás tanuló számára) a <strong>helyettesítő eszköztől</strong> (a ChatGPT írja meg a fogalmazást).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Rendszeresen értékelje: a tanuló kompetenciát fejleszt, vagy függőséget alakít ki az eszköztől?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Az eszköz egy valós akadályt old meg, vagy olyan kiskaput hoz létre, amely megkerüli a tanulást?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> A bevitt adatok védettek, és megvan a hozzájárulás?",
        "<strong>3.</strong> Ellenőrzi-e egy ember az eszköz eredményét, mielőtt az eljutna a tanulóhoz?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Létezik-e olyan MI nélküli alternatíva, amely ugyanolyan jól működik?",
        "<strong>5.</strong> Ha az eszköz holnap megszűnne, magára maradna a tanuló?",
      ]},
    ],
    references: [
      "Európai Unió. (2016). <em>(EU) 2016/679 rendelet (általános adatvédelmi rendelet)</em>, 8. cikk. Az Európai Unió Hivatalos Lapja, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "A kollégák felkészítése az MI felelős integrálására az idegennyelv-oktatásban, többféle tanulási profilhoz igazítható anyagok készítésével.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ez nem előadás — ez közös alkotás. Minden résztvevő legalább egy kipróbálásra kész anyaggal távozik.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 perc:</strong> Keretezés — a heterogén osztály problémája, és hogy miért nem működik a „még több ugyanabból”.",
        "<strong>10–25 perc:</strong> A profilok térképe — a Farol hat kártyájának bemutatása valós (anonimizált) esetekkel.",
        "<strong>25–45 perc:</strong> Gyakorlati bemutató — három eszköz, három felhasználási eset, három különböző profil.",
        "<strong>45–75 perc:</strong> Páros munka — minden pár egy meglévő anyagot igazít egy konkrét profilhoz.",
        "<strong>75–85 perc:</strong> Gyors megosztás — minden pár 1 perc alatt bemutatja az elkészült anyagát.",
        "<strong>85–90 perc:</strong> Vállalások — minden résztvevő kijelöl egy kipróbálandó anyagot, és 30 napra visszajelző alkalmat tűznek ki.",
      ]},
      { items: [
        "Internet-hozzáférés és intézményi fiókok a bemutatott eszközökben.",
        "A résztvevők meglévő anyagai (egy feladatlap, egy teszt vagy egy óraterv).",
        "A Farol profiljainak kinyomtatott kártyái a tájékozódáshoz.",
      ]},
      { items: [
        "Minden résztvevő legalább egy adaptált anyagot készít a foglalkozás során.",
        "30 napos visszajelző alkalom, amelyen a résztvevők legalább 60%-a tényleges megvalósításról számol be.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "A foglalkozáson készült anyagok közül legalább egyet a tanszék közös erőforrásként vesz át.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "A 2011. évi CXC. törvény a nemzeti köznevelésről (Nkt.) meghatározza a sajátos nevelési igényű (SNI) tanulók oktatásának alapelveit és intézményi kötelezettségeit.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "A 32/2012. (X. 8.) EMMI rendelet az SNI tanulók iskolai oktatásának irányelvéről részletesen szabályozza a különböző fogyatékossági típusokhoz szükséges feltételeket.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Magyarország ratifikálta az ENSZ Egyezményt a fogyatékossággal élők jogairól; az inkluzív oktatás állami célkitűzés.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "A differenciált oktatás és adaptív pedagógia minden pedagógus kötelessége diagnózis nélkül is, az intézmény köteles befogadó környezetet biztosítani.",
        "Alapszintű adaptációk (hosszabb idő, írásos utasítások, stratégiai ültetés) nem igényelnek szakértői véleményt, minden tanár felelőssége.",
        "Az iskolának pedagógiai módszerek tekintetében rugalmasnak kell lennie minden tanuló igényeire.",
      ]},
      { items: [
        "A pedagógiai szakszolgálat szakértői bizottsága végzi a szakértői vizsgálatot és adja ki a szakértői véleményt, amely meghatározza a szükséges támogatásokat.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Az egyéni fejlesztési terv (EFT) az iskola és a szakértői bizottság közreműködésével, a szülők bevonásával készül; minden érintett pedagógusra kötelező.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Gyógypedagógiai asszisztens és utazótanár igényelhető a jelentősebb szükségletű tanulók esetén a szakértői vélemény alapján.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "A szülő/gondviselő aláírása kötelező az egyéni fejlesztési terven; éves felülvizsgálat szükséges.",
      ]},
      { items: [
        "Az Nkt. 4. § 25. pontja alapján a tehetséggondozás az iskola kötelessége; a MATEHETSZ Tehetségpont hálózat módszertani támogatást nyújt.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Évfolyamugrás az Nkt. alapján lehetséges; az iskola döntése, amelyhez a szülő és a tanuló hozzájárulása szükséges.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "A tehetséges tanulók azonosítása és támogatása a gyakorlatban hiányos, a szakértői bizottság tehetségdiagnosztikát végezhet.",
      ]},
      { items: [
        "Az Nkt. 45. § alapján felkészítő foglalkozás szervezhető a magyar nyelvet nem ismerő tanulók számára az iskolakezdés előtt vagy az első időszakban.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "A magyar mint idegen nyelv (MID) oktatása elérhető, koordinálja az Oktatási Hivatal; nem állítható ki SNI-vélemény kizárólag a nyelvi akadály alapján.",
        "A szülőkkel való kommunikációhoz szükséges esetén tolmács igénybevétele a befogadó iskola felelőssége.",
      ]},
      { items: [
        "<strong>Nkt. 2011. évi CXC.</strong>, nemzeti köznevelési törvény, SNI-rendelkezésekkel.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>32/2012. EMMI rendelet</strong>, SNI tanulók oktatásának irányelvei.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>szakértői bizottság</strong>, Pedagógiai Szakszolgálat, szakértői vizsgálatokhoz.",
        "<strong>Egyéni fejlesztési terv (EFT)</strong>, kötelező dokumentum SNI tanulóknál.",
        "<strong>MID</strong>, magyar mint idegen nyelv program.",
        "BTMN (beilleszkedési, tanulási, magatartási nehézség): a pedagógiai szakszolgálat szakértői véleménye alapján fejlesztő pedagógiai ellátás jár, és egyes tantárgyakból az értékelés alóli mentesítés kérhető (Nkt. 56. §) — az SNI-nél enyhébb, de külön kategória.",
      ]},
    ],
    references: [
      "<em>Az ENSZ Egyezménye a fogyatékossággal élő személyek jogairól</em> (CRPD, 2006), amelyet Magyarország a <em>2007. évi XCII. törvénnyel</em> hirdetett ki; 24. cikke az inkluzív oktatáshoz való jogot rögzíti.",
      "<em>2011. évi CXC. törvény a nemzeti köznevelésről</em> (Nkt.); a köznevelési rendszer alaptörvénye, amely meghatározza a sajátos nevelési igényű (SNI) tanulók oktatásának alapelveit, a tehetséggondozást és az intézményi kötelezettségeket.",
      "<em>32/2012. (X. 8.) EMMI rendelet a Sajátos nevelési igényű gyermekek óvodai nevelésének irányelve és a Sajátos nevelési igényű tanulók iskolai oktatásának irányelve kiadásáról</em>; részletesen szabályozza az egyes fogyatékossági típusokhoz szükséges feltételeket.",
      "<em>15/2013. (II. 26.) EMMI rendelet a pedagógiai szakszolgálati intézmények működéséről</em>; szabályozza a Pedagógiai Szakszolgálat (szakértői bizottság) szakértői vizsgálatát és a szakértői vélemény kiadását.",
      "<em>2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról</em> (Infotv.), az általános adatvédelmi rendelet (GDPR) hazai kiegészítője; a tanulók adatai csak hozzájárulással kezelhetők és oszthatók meg.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "A pedagógiai differenciálás azt jelenti, hogy a tanítás módját igazítjuk hozzá — nem pedig az elvárásokat csökkentjük. A tanulási cél mindenki számára azonos lehet; ami változik, az az út.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Az UDL-modell (Universal Design for Learning, az egyetemes tanulási tervezés) három alapelvet javasol: a megjelenítés többféle módját (hogyan mutatjuk be a tartalmat), a cselekvés és kifejezés többféle módját (hogyan válaszol a tanuló), valamint a bevonódás többféle módját (mi motiválja a tanulót).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A differenciálás nem azt jelenti, hogy tanulónként külön óratervet készítünk — hanem azt, hogy elegendő rugalmasságot teremtünk ahhoz, hogy ugyanaz az óra különböző profilokat szolgáljon ki.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Nem</strong> a tananyag leszűkítése a legtöbb nehézséggel küzdő tanulók számára.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nem</strong> az, hogy mindig más-más feladatot adunk a különböző tanulóknak — ez elszigetel és megbélyegez.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Nem</strong> csupán papíron differenciált munkáról szól — a differenciálás magában foglalja azt is, ahogyan a pedagógus magyaráz, kérdez és értékel.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Irányított választás: 2–3 válaszformátum felkínálása (írásbeli szöveg, szóbeli, vázlatrajz) — mindenki ugyanarra a tartalomra válaszol.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Állványozás (scaffolding): strukturált vázlat biztosítása a több nehézséggel küzdő tanulóknak; a vázlat fokozatos elvétele, ahogy nő az önállóság.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Rugalmas csoportosítás: csoportok érdeklődés szerint, a tudásszint szerint vagy vegyesen — váltogatva, hogy elkerüljük az állandó csoportokat, amelyek identitássá válnak.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Időbeli kiigazítások: a több idő nem jelent kevesebb igényességet. ADHD-val vagy diszpraxiával élő tanulók esetében a feladatot ütemezett szünetekkel tagolt szakaszokra bontjuk.",
        "Komplexitási szint: ugyanazon témához több vagy kevesebb nyelvi támogatást, példákkal vagy azok nélkül, vizuális utalásokkal vagy azok nélkül készült változatok létrehozása.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Azt értékeljük, amit a tanuló tud, nem azt, ahogyan ír. Egy diszlexiával élő tanuló szóban vagy technológiai támogatással is bizonyíthatja fogalmi tudását.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A feladat előtt megosztott, világos értékelési skálák (rubrikák) lehetővé teszik, hogy a tanuló a választott formátumtól függetlenül tudja, mit várnak el tőle.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "A portfólió vagy a bizonyítékokon alapuló értékelés lehetővé teszi, hogy a tanuló az idő múlásával mutassa meg fejlődését, ne csupán egyetlen tesztpillanatban.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Amikor a tantermi differenciálás már nem elegendő, és a tanuló továbbra sem fér hozzá a tananyaghoz, az annak a jele, hogy szakmai támogatásra lehet szükség.",
        "A differenciálás nem helyettesíti az iskola támogató intézkedéseit (SPO, terapeuták, gyógypedagógia) — hanem az, ami a rendes tanteremben, kiegészítésként történik.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "A formatív értékelés minden olyan gyakorlat, amely a tanulásról a folyamat közben gyűjt információt — és ezt az információt a tanítás vagy a tanuló támogatásának kiigazítására használja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "A szummatív értékeléssel (végső osztályzatok) ellentétben a formatív értékelésnek nem kell osztályzatot adnia — visszajelzést kell adnia.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "A neurodivergens tanulók számára a formatív értékelés különösen fontos, mert egy egyszeri teszten nyújtott teljesítmény nem feltétlenül tükrözi azt, amit valójában tudnak.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: az óra végén a tanuló 2 perc alatt válaszol egy kérdésre — a pedagógus azonnal látja, ki értette meg és ki nem.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Jelzőlámpa</strong>: zöld (megértettem), sárga (vannak kérdéseim), piros (nem értettem meg) — lehet fizikai kártya, post-it vagy digitális.",
        "<strong>Think-Pair-Share</strong>: a tanuló egyénileg gondolkodik, megbeszéli egy társával, majd megosztja az osztállyal — csökkenti a közvetlen válaszadás szorongását.",
        "<strong>Kilépőkapu</strong>: mielőtt elmegy, a tanuló elmond a pedagógusnak egy dolgot, amit megtanult, és egy kérdést, amely még felmerült benne.",
      ]},
      { items: [
        "A hatékony visszajelzés konkrét, cselekvésre ösztönző és időben adott: „a 2. oldalon az érvelés elveszik, mert hiányzik a bizonyítékhoz való kapcsolódás” hasznos; „lehetne jobb” nem az.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "ADHD-s tanulók esetében: az azonnali visszajelzés hatékonyabb, mint a késleltetett. Ne várja meg a feladat végét.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Diszlexiás tanulók esetében: a szóbeli vagy hangos visszajelzés hozzáférhetőbb lehet, mint a terjedelmes írásbeli megjegyzések.",
        "Kerülje a tanulók egymással való összehasonlítását — a tanulót a saját korábbi fejlődéséhez hasonlítsa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: értékelés több rövid alkalommal egyetlen hosszú teszt helyett. A figyelemelterelő ingerek csökkentése az értékelési környezetben.",
        "Diszlexia: engedélyezzen szóbeli válaszokat, plusz időt vagy szövegfelolvasó használatát. A tartalmat értékelje, ne a helyesírást.",
        "Autizmus: értékelések egyértelmű és kétértelműségtől mentes írásbeli utasításokkal. Előre jelezze a formátum változásait.",
        "Tehetséggondozás: kerülje a puszta tartalomvisszaadásra épülő értékeléseket — építsen be elemző, szintetizáló és alkotó kérdéseket.",
      ]},
      { items: [
        "Ha a tanuló az értékelési alkalmazkodások ellenére sem tudja bizonyítani a tanulást, az annak a jele, hogy mélyebb akadály állhat fenn, amelyet az SPO-val érdemes kivizsgálni.",
        "Az egy adott területen tapasztalt tartós (hónapokig, nem napokig tartó) sajátos nehézség mintázatait hivatalosan jelezni kell.",
      ]},
    ]},
  },

  el: {
    tdah: { sections: [
      { items: [
        "Δυσκολία στη διατήρηση της προσοχής σε μακροσκελείς εργασίες· χάνεται σε οδηγίες με πολλά βήματα.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Συνεχής κίνηση — δεν κάθεται, κουνά τα χέρια, σηκώνεται χωρίς εμφανή λόγο.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Απαντά πριν ολοκληρωθεί η ερώτηση· διακόπτει συμμαθητές και τον εκπαιδευτικό.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Ξεχνά υλικά, προθεσμίες και οδηγίες που δόθηκαν προφορικά πριν από λίγα λεπτά — η εργαζόμενη μνήμη είναι υπερφορτωμένη.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Μπορεί να υπερεστιάζει σε ό,τι τον ενδιαφέρει, δίνοντας τη (λανθασμένη) εντύπωση ότι «μπορεί όταν θέλει»· στην πραγματικότητα, η επίδοση μεταβάλλεται ανάλογα με το ενδιαφέρον και την ανταμοιβή.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> κακή ανατροφή, τεμπελιά ούτε έλλειψη χαρακτήρα: αυτές οι εσφαλμένες αντιλήψεις στιγματίζουν και καθυστερούν την υποστήριξη.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν είναι</strong> πάντοτε ορατή υπερκινητικότητα — υπάρχει μια κατά κύριο λόγο απρόσεκτη μορφή εκδήλωσης, συχνότερη στα κορίτσια και συχνά υποδιαγνωσμένη.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Δεν λύνεται</strong> με το «να προσπαθήσει περισσότερο»: η δυσκολία βρίσκεται στη νευρολογική αυτορρύθμιση, όχι στη βούληση.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Κατάτμηση των οδηγιών: μία κάθε φορά, γραπτά στον πίνακα, με καθορισμένο χρόνο — μειώνει το φορτίο στην εργαζόμενη μνήμη.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Επιτρέψτε νόμιμη κίνηση (μοίρασμα υλικών, καθάρισμα του πίνακα, μεταφορά μηνυμάτων).",
        "Μειώστε τα ανταγωνιστικά ερεθίσματα (θέση μακριά από το παράθυρο, την πόρτα, την πιο θορυβώδη ομάδα).",
        "Άμεση και συχνή θετική ενίσχυση: στη ΔΕΠΥ η ευαισθησία στην ανταμοιβή είναι αλλοιωμένη (αποστροφή προς την αναμονή), επομένως οι άμεσες ανταμοιβές λειτουργούν καλύτερα από τις μεταγενέστερες.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Ξεκινήστε από αυτό που κάνει καλά ο μαθητής — η συνάντηση δεν πρέπει να ξεκινά με κατάλογο παραπόνων, αλλιώς ο γονέας/κηδεμόνας κλείνεται αμυντικά.",
        "Περιγράψτε συμπεριφορές που παρατηρήθηκαν, όχι διαγνώσεις: «όταν υπάρχουν περισσότερα από δύο διαδοχικά βήματα, χάνει τον ειρμό» αντί για «έχει ΔΕΠΥ».",
        "Προβλέψτε την αντίδραση «στο σπίτι δεν είναι έτσι» — εξηγήστε ότι το πλαίσιο της ομάδας και η απαίτηση παρατεταμένης προσοχής στην τάξη καθιστούν τα συμπτώματα πιο ορατά.",
        "Αν προτείνετε αξιολόγηση, παρουσιάστε την ως πόρο, όχι ως τιμωρία: «υπάρχει υποστήριξη που μπορεί να τον/την βοηθήσει πολύ» αντί για «πρέπει να αξιολογηθεί».",
      ]},
      { items: [
        "Επίμονη παραβατική συμπεριφορά παρά τις προσαρμογές στην τάξη.",
        "Σημάδια κοινωνικού αποκλεισμού από τους συνομηλίκους.",
        "Σημάδια συννοσηρότητας (άγχος, κατάθλιψη, εναντιωματική διαταραχή) — συχνά στη ΔΕΠΥ και τα οποία δικαιολογούν παραπομπή.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Διαβάζει αργά και με κόπο, με λάθη στην ανάγνωση μεμονωμένων λέξεων, ακόμη και σε κείμενα που κατανοεί καλά όταν τα ακούει.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Οι αντιστροφές γραμμάτων (b/d, p/q) είναι συνηθισμένες σε όλα τα παιδιά που αρχίζουν να γράφουν και δεν αποτελούν, από μόνες τους, ένδειξη δυσλεξίας· η κεντρική δυσκολία είναι <strong>φωνολογική</strong> — η συσχέτιση γραμμάτων με ήχους.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Επίμονα ορθογραφικά λάθη που δεν υποχωρούν παρά την επανειλημμένη διόρθωση.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Τείνει να αποφεύγει τη φωναχτή ανάγνωση· μπορεί να φαίνεται αδιαφορία ενώ στην πραγματικότητα πρόκειται για στρατηγική προστασίας.",
        "Η προφορική κατανόηση είναι σαφώς ανώτερη από την αναγνωστική — η δυσκολία είναι ειδική, όχι ένας γενικός γνωστικός περιορισμός.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> έλλειψη ευφυΐας: εξ ορισμού, η δυσλεξία είναι απρόσμενη σε σχέση με τις άλλες γνωστικές ικανότητες του μαθητή.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Δεν είναι</strong> πρόβλημα όρασης ούτε απλώς «μπέρδεμα γραμμάτων»: το κεντρικό έλλειμμα βρίσκεται στη φωνολογική επεξεργασία.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν «θεραπεύεται»</strong>, αλλά η δομημένη παρέμβαση στη φωνολογική επίγνωση και στην αποκωδικοποίηση βελτιώνει την ανάγνωση με συνέπεια.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Αύξηση της απόστασης μεταξύ γραμμάτων και γραμμών: υπάρχουν πειραματικά δεδομένα ότι το διευρυμένο διάστιχο βελτιώνει την ανάγνωση των δυσλεξικών παιδιών, χωρίς προηγούμενη εξάσκηση.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Αντιθέτως, τα δεδομένα για ειδικές γραμματοσειρές «για δυσλεξικούς» είναι ασθενέστερα και ασυνεπή.",
        "Επιτρέψτε τη σιωπηρή ανάγνωση πριν από οποιαδήποτε φωναχτή ανάγνωση — μη ζητάτε ποτέ ανάγνωση αιφνιδιαστικά.",
        "Όταν ο στόχος δεν είναι η αξιολόγηση της γραφής, αξιολογήστε το περιεχόμενο χωριστά από την ορθογραφία.",
        "Προσφέρετε την ίδια πληροφορία σε πολλαπλές μορφές (ήχος, βίντεο, διαγράμματα).",
      ]},
      { items: [
        "Διαχωρίστε ρητά την ανάγνωση από την ευφυΐα ήδη από την αρχή: «κατανοεί πολύ καλά όταν ακούει — η δυσκολία είναι ειδική στην ανάγνωση».",
        "Λάβετε υπόψη ότι η δυσλεξία έχει ισχυρή κληρονομική συνιστώσα: ένας από τους γονείς μπορεί να έχει αδιάγνωστη δυσλεξία, και η συζήτηση μπορεί να αναζωπυρώσει δύσκολες μνήμες από τη δική του σχολική πορεία.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Αποφύγετε να δείχνετε φύλλα γεμάτα κόκκινες διορθώσεις χωρίς πλαίσιο — παρουσιάστε πρώτα αυτά που ο μαθητής ήδη μπορεί να κάνει.",
        "Να είστε συγκεκριμένοι στις προσαρμογές που ήδη εφαρμόζονται και σε εκείνες που ο κηδεμόνας μπορεί να αναπαράγει στο σπίτι: κείμενα σε ηχητική μορφή, φωναχτή ανάγνωση χωρίς πίεση χρόνου.",
      ]},
      { items: [
        "Επιδείνωση της ακαδημαϊκής αυτοαντίληψης («είμαι χαζός», «δεν τα καταφέρνω»).",
        "Συστηματική αποφυγή εργασιών ανάγνωσης/γραφής σε σημείο που να θίγονται και άλλα μαθήματα.",
        "Έντονη απόκλιση μεταξύ προφορικής και γραπτής επίδοσης χωρίς επίσημη διάγνωση — παραπομπή για ψυχοπαιδαγωγική αξιολόγηση.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Δυσκολία με μη προαναγγελμένες αλλαγές — αλλαγή ωραρίου, αίθουσας, αναπληρωτή εκπαιδευτικού.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Κυριολεκτική επικοινωνία — χάνει τις αποχρώσεις, την ειρωνεία, τις ιδιωματικές εκφράσεις.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Αισθητηριακή ευαισθησία — το φως φθορισμού, ο θόρυβος του περιβάλλοντος, οι ετικέτες των ρούχων μπορεί να είναι αφόρητα.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Εστιασμένα και βαθιά ενδιαφέροντα σε συγκεκριμένα θέματα — συνδεόμενα με έναν γνωστικό τρόπο προσανατολισμένο στη λεπτομέρεια.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Μπορεί να φαίνεται αδιάφορος ή απόμακρος όταν είναι υπερφορτωμένος, όχι αποσυνδεδεμένος.",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> μια γραμμική κλίμακα («περισσότερο» ή «λιγότερο» αυτιστικός) — είναι ένα πολυδιάστατο προφίλ, με διαφορετικά προφίλ υποστήριξης σε κάθε τομέα.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Δεν είναι</strong> έλλειψη ενσυναίσθησης: οι δυσκολίες αμοιβαίας κατανόησης είναι αμφίδρομες — και τα μη αυτιστικά άτομα δυσκολεύονται να «διαβάσουν» τα αυτιστικά (το «πρόβλημα της διπλής ενσυναίσθησης»).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν είναι</strong> κακή συμπεριφορά όταν μια ρουτίνα διακόπτεται — είναι μια πραγματική νευρολογική απόκριση στην απώλεια της προβλεψιμότητας.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Να προειδοποιείτε εκ των προτέρων για οποιαδήποτε αλλαγή της ρουτίνας, ακόμη και αν φαίνεται ασήμαντη — η οπτική υποστήριξη και η προετοιμασία έχουν εμπειρική τεκμηρίωση.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Να μετατρέπετε τους υπονοούμενους κοινωνικούς κανόνες σε ρητούς κανόνες (τι κάνουμε, τι δεν κάνουμε, πότε).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Να επιτρέπετε αισθητηριακά διαλείμματα σε έναν ήσυχο χώρο όταν χρειάζεται.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Να αξιοποιείτε το εστιασμένο ενδιαφέρον ως σημείο εισόδου σε περιεχόμενα του προγράμματος σπουδών — μια δύναμη, όχι μια απόσπαση.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Αν υπάρχει ήδη διάγνωση, ρωτήστε πρώτα τι γνωρίζει ο κηδεμόνας ότι λειτουργεί — οι γονείς αυτιστικών παιδιών συχνά γνωρίζουν περισσότερα για το παιδί τους από οποιαδήποτε έκθεση.",
        "Αν δεν υπάρχει διάγνωση, να είστε πολύ προσεκτικοί: περιγράψτε συγκεκριμένες καταστάσεις χωρίς ποτέ να χρησιμοποιήσετε τη λέξη «αυτισμός» σε μια πρώτη συνάντηση — «όταν η ρουτίνα αλλάζει χωρίς προειδοποίηση, ο γιος σας / η κόρη σας αναστατώνεται πολύ με έναν τρόπο που ξεπερνά το τυπικό».",
        "Να επιβεβαιώνετε την προσπάθεια του κηδεμόνα — η δημιουργία δομής και προβλεψιμότητας στο σπίτι είναι απαιτητική, και η αναγνώρισή της δημιουργεί συμμαχία.",
        "Μην συγκρίνετε ποτέ με «άλλους μαθητές» ή με αδέλφια — κάθε προφίλ του φάσματος είναι διαφορετικό και η σύγκριση είναι πάντα αντιπαραγωγική.",
      ]},
      { items: [
        "Συχνές κρίσεις («meltdowns») μετά τη σχολική ημέρα.",
        "Επίμονη σχολική άρνηση συνδεόμενη με αισθητηριακή υπερφόρτωση.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Προοδευτική κοινωνική απομόνωση παρά τις προσπάθειες διαμεσολάβησης.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Δύσκολος, αργός και συχνά δυσανάγνωστος γραπτός λόγος — λόγω πραγματικής κινητικής δυσκολίας, όχι από αμέλεια.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Δυσκολία στη χωρική οργάνωση του τετραδίου, στη διαχείριση του υλικού και σε ακολουθίες βημάτων.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Μπορεί να φαίνεται «αδέξιος/-η» — χύνει ποτήρια, σκοντάφτει στα έπιπλα, δυσκολεύεται στον αθλητισμό.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Δυσανάλογη κόπωση μετά από εργασίες που απαιτούν παρατεταμένο λεπτό κινητικό συντονισμό.",
        "Η γνωστική συνιστώσα είναι γενικά διατηρημένη — εξ ου και η συχνή ματαίωση ανάμεσα στο να γνωρίζει και στο να μπορεί να το δείξει.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> τεμπελιά ή έλλειψη προσπάθειας.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Δεν είναι</strong> απλώς κακός γραφικός χαρακτήρας: ο κλινικός όρος είναι Αναπτυξιακή Διαταραχή Συντονισμού (ΑΔΣ) και επηρεάζει τον σχεδιασμό και την κινητική αλληλουχία, όχι μόνο τη γραφή.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν λύνεται</strong> με το «να εξασκείται περισσότερο στη γραφή»: η αποτελεσματική παρέμβαση είναι προσανατολισμένη στο έργο, όχι η μηχανική επανάληψη.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Να επιτρέπεται η χρήση πληκτρολογίου/tablet σε εκτενείς γραπτές παραγωγές.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Να μειωθεί η μηχανική αντιγραφή από τον πίνακα — να παρέχονται σημειώσεις όταν είναι σχετικό.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Να παρέχονται ρητές λίστες ελέγχου για εργασίες με πολλαπλά βήματα.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Να αξιολογείται το προϊόν με βάση το περιεχόμενο, όχι τη φυσική παρουσίαση.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Να εξηγηθεί τι είναι η δυσπραξία σε απλή γλώσσα — οι περισσότεροι κηδεμόνες δεν έχουν ακούσει ποτέ τον όρο: «είναι μια νευρολογική δυσκολία στον συντονισμό των κινήσεων, δεν είναι αμέλεια ούτε έλλειψη προσπάθειας».",
        "Ο δυσανάγνωστος γραφικός χαρακτήρας είναι το σημείο μεγαλύτερης τριβής με τους κηδεμόνες — το να δείξετε ότι η αξιολόγηση δίνει πλέον αξία στο περιεχόμενο και όχι στη μορφή βοηθά να ανακουφιστεί το άγχος και των δύο πλευρών.",
        "Να προτείνετε πρακτικά εργαλεία για το σπίτι: υπαγόρευση με φωνή στο κινητό για σημειώσεις, πληκτρολόγιο για εκτενείς γραπτές εργασίες.",
        "Αν υπάρχει ιστορικό «είναι τεμπέλης/-α» ή «δεν προσπαθεί» από προηγούμενα έτη, να το ονομάσετε ευθέως: «ξέρω ότι το έχετε ξανακούσει αυτό — η δική μου ανάγνωση είναι διαφορετική».",
      ]},
      { items: [
        "Πλήρης άρνηση γραπτής παραγωγής.",
        "Κοινωνική απομόνωση σε πλαίσια σωματικής δραστηριότητας.",
        "Σημάδια σωματοποιημένου άγχους πριν από γραπτές αξιολογήσεις — η ψυχοκοινωνική δυσφορία είναι μέρος της εικόνας.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Τελειώνει τις εργασίες σε λίγα λεπτά, ενώ η υπόλοιπη τάξη χρειάζεται ολόκληρη τη διδακτική ώρα.",
        "Κάνει ερωτήσεις που ξεφεύγουν από το αντικείμενο του μαθήματος — ή αμφισβητεί ενεργά αυτό που διδάσκεται.",
        "Μπορεί να φαίνεται αδιάφορος, απείθαρχος ή απαθής — συχνά πρόκειται για σημάδια χρόνιας ανίας και υποεπίδοσης.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Έντονη συναισθηματική ευαισθησία· μπορεί να είναι αγχώδης ή τελειομανής — οι ψυχοκοινωνικοί παράγοντες είναι καθοριστικοί στην ανάπτυξη του ταλέντου.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Πραγματικός κίνδυνος υποεπίδοσης — μπορεί να μάθει να κρύβει τις ικανότητές του για να μην ξεχωρίζει κοινωνικά.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> συνώνυμο της καλής συμπεριφοράς ούτε των καλών αποτελεσμάτων — πολλοί χαρισματικοί μαθητές έχουν μέτρια επίδοση λόγω αδιαφορίας.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Δεν σημαίνει</strong> «δεν χρειάζεται βοήθεια»: χρειάζεται διαφορετικές προκλήσεις, γιατί η ικανότητα μετατρέπεται σε επίτευξη μόνο όταν αναπτύσσεται σκόπιμα.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Δεν είναι</strong> ασυμβίβαστη με τη νευροαποκλίνουσα — η διπλή εξαιρετικότητα (2e) υπάρχει, είναι συχνή και συχνά συγκαλύπτεται.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Να έχετε πάντα έτοιμες εργασίες εμβάθυνσης — όχι περισσότερα από τα ίδια, αλλά ύλη πιο βαθιά ή πιο εφαρμοσμένη.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Επιτρέψτε ανεξάρτητη διερεύνηση θεμάτων που ενδιαφέρουν τον μαθητή εντός του προγράμματος.",
        "Αξιολογήστε με βάση την πρόκληση, όχι την ευκολία — ζητήστε πιο απαιτητικές εργασίες με αντάλλαγμα μικρότερο όγκο.",
        "Αναγνωρίστε και επικυρώστε τη συναισθηματική ευαισθησία χωρίς να την παθολογικοποιείτε.",
      ]},
      { items: [
        "Προβλέψτε την υπερηφάνεια και κατευθύνετέ την αλλού: «είναι σαφώς πολύ ικανός — και ακριβώς γι’ αυτό η ανία δημιουργεί προβλήματα».",
        "Εξηγήστε το παράδοξο της χαρισματικότητας: τα καλά αποτελέσματα δεν σημαίνουν ότι είναι καλά, και η υποεπίδοση λόγω αδιαφορίας είναι συνηθισμένη και αναστρέψιμη.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Αν ο μαθητής κρύβει τις ικανότητές του για να ενταχθεί κοινωνικά, ονομάστε το με προσοχή — είναι σημάδι δυσφορίας, όχι μετριοφροσύνης.",
        "Προτείνετε στους γονείς/κηδεμόνες να εκτιμούν τη διαδικασία αντί για το αποτέλεσμα στο σπίτι: η περιέργεια, η εμβάθυνση και οι δύσκολες ερωτήσεις αξίζουν περισσότερο από τους υψηλούς βαθμούς σε εύκολες εργασίες.",
      ]},
      { items: [
        "Σημάδια άγχους ή κατάθλιψης που συνδέονται με ακραία τελειομανία.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Έντονη κοινωνική απομόνωση με αίσθημα «διαφορετικότητας» από τους συνομηλίκους.",
        "Αιφνίδια ακαδημαϊκή υποεπίδοση σε μαθητή που είχε προηγουμένως αναγνωριστεί ως ικανός.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Καταλαβαίνει πολύ λιγότερα από όσα φαίνεται — η γλώσσα της καθημερινής συνομιλίας αναπτύσσεται πολύ νωρίτερα από την ακαδημαϊκή γλώσσα, γι' αυτό μπορεί να φαίνεται ότι μιλά άνετα χωρίς να παρακολουθεί το περιεχόμενο του μαθήματος.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Φαινομενικά χαμηλή σχολική επίδοση, συχνά δυσανάλογη προς τις πραγματικές του ικανότητες.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Σιωπή μέσα στην τάξη — μπορεί να πρόκειται για μια φυσιολογική «σιωπηλή περίοδο» κατά την κατάκτηση της γλώσσας, όχι για αδιαφορία.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Στο τέλος της ημέρας μπορεί να είναι εξαντλημένος, επειδή επεξεργάζεται τη γλώσσα σε πραγματικό χρόνο.",
        "Κίνδυνος υποδιάγνωσης πραγματικών εκπαιδευτικών αναγκών (δυσλεξία, ΔΕΠΥ), επειδή τα πάντα αποδίδονται στο γλωσσικό εμπόδιο.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> έλλειψη ευφυΐας ή ικανότητας.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Δεν είναι</strong> απλώς ζήτημα χρόνου: η ακαδημαϊκή γλώσσα χρειάζεται χρόνια για να αναπτυχθεί και, χωρίς ρητή υποστήριξη, πολλοί μαθητές σταθεροποιούνται σε ένα χαμηλό λειτουργικό επίπεδο.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Δεν λύνεται</strong> με αυτόματη μετάφραση κατά τη διάρκεια του μαθήματος — είναι μια διαδικασία ετών, και η μητρική γλώσσα αποτελεί πόρο, όχι εμπόδιο.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Παροχή υλικού με το βασικό λεξιλόγιο μεταφρασμένο στη μητρική γλώσσα.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Αξιολόγηση των γνώσεων μέσω οπτικής ή πρακτικής επίδειξης όποτε είναι δυνατόν.",
        "Συνεργασία με έναν δίγλωσσο συμμαθητή για άτυπη διαμεσολάβηση σε κρίσιμες στιγμές.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Αποδοχή των πρώτων παραγωγών λόγου με γραμματικά λάθη — διόρθωση του περιεχομένου, όχι της μορφής, στην πρώτη φάση.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Η ίδια η συνάντηση αποτελεί εμπόδιο — ο γονέας/κηδεμόνας ίσως δεν μιλά ελληνικά με επαρκή γνώση για μια σύνθετη συζήτηση. Προετοιμάστε εκ των προτέρων απλό γραπτό υλικό ή ζητήστε υποστήριξη διερμηνείας.",
        "Μην υποθέτετε ότι ο γονέας/κηδεμόνας γνωρίζει το εκπαιδευτικό σύστημα — εξηγήστε τι είναι το ΚΕΔΑΣΥ και η ΕΔΥ, τι είναι ένα μέτρο υποστήριξης, τι συνεπάγεται μια αξιολόγηση, χωρίς να θεωρείτε τίποτα δεδομένο.",
        "Διαχωρίστε με σαφήνεια το γλωσσικό εμπόδιο από τη σχολική ικανότητα: «το παιδί σας είναι ικανό — μαθαίνει τη γλώσσα ταυτόχρονα με το περιεχόμενο, κάτι που είναι ιδιαίτερα απαιτητικό».<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Δείξτε ευαισθησία απέναντι στο μεταναστευτικό πλαίσιο: οικογένειες προσφύγων ή σε καθεστώς χωρίς νομιμοποιητικά έγγραφα ενδέχεται να δυσπιστούν προς τους θεσμούς. Χτίστε εμπιστοσύνη προτού ζητήσετε έγγραφα ή παραπομπές.",
      ]},
      { items: [
        "Ενδείξεις κοινωνικής απομόνωσης ή εκφοβισμού που συνδέονται με την ιδιότητα του αλλοδαπού μαθητή.",
        "Στασιμότητα στην κατάκτηση της γλώσσας μετά τον πρώτο χρόνο.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ενδείξεις τραύματος που συνδέονται με το μεταναστευτικό πλαίσιο (ιδίως σε πρόσφυγες).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Τα δεδομένα ανηλίκων υπόκεινται σε ενισχυμένη προστασία (Άρθρο 8 ΓΚΠΔ). Η συγκατάθεση των κηδεμόνων είναι υποχρεωτική.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ελέγξτε πού αποθηκεύει τα δεδομένα το εργαλείο — σε ευρωπαϊκούς ή μη ευρωπαϊκούς διακομιστές, ανωνυμοποιημένα ή όχι.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Μην εισάγετε ποτέ πλήρη ονόματα, διευθύνσεις, αριθμούς ταυτότητας ή κλινικές διαγνώσεις σε εργαλεία παραγωγικής ΤΝ.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Διακρίνετε τη θεσμική χρήση (το σχολείο υπογράφει σύμβαση) από την προσωπική χρήση του εκπαιδευτικού (ατομική ευθύνη).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Συστήματα που έχουν εκπαιδευτεί κυρίως με αγγλόφωνα δεδομένα ενδέχεται να έχουν χαμηλότερη απόδοση στα ελληνικά και σε ελληνόφωνα περιβάλλοντα.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Οι αυτόματες συστάσεις μπορούν να ενισχύσουν στερεότυπα φύλου, εθνότητας ή κοινωνικής τάξης — ελέγξτε τα κριτικά.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Τα μοντέλα «πρόβλεψης ακαδημαϊκού κινδύνου» είναι ιδιαίτερα προβληματικά — συχνά αναπαράγουν υφιστάμενες ανισότητες αντί να εντοπίζουν ανάγκες.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Ο στόχος είναι να αυξηθεί η αυτονομία του μαθητή, όχι να αντικατασταθεί η νοητική εργασία που τον αναπτύσσει.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Διακρίνετε το <strong>εργαλείο πρόσβασης</strong> (text-to-speech για μαθητή με δυσλεξία) από το <strong>εργαλείο υποκατάστασης</strong> (ChatGPT που γράφει την έκθεση).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Αξιολογείτε τακτικά: ο μαθητής αναπτύσσει δεξιότητα ή αναπτύσσει εξάρτηση από το εργαλείο;<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Το εργαλείο επιλύει ένα πραγματικό εμπόδιο ή δημιουργεί μια συντόμευση που παρακάμπτει τη μάθηση;<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Τα δεδομένα που εισάγονται είναι προστατευμένα και υπάρχει συγκατάθεση;",
        "<strong>3.</strong> Θα ελεγχθεί το αποτέλεσμα του εργαλείου από άνθρωπο πριν φτάσει στον μαθητή;<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Υπάρχει εναλλακτική λύση χωρίς ΤΝ που λειτουργεί εξίσου καλά;",
        "<strong>5.</strong> Αν το εργαλείο πάψει να υπάρχει αύριο, ο μαθητής μένει αβοήθητος;",
      ]},
    ],
    references: [
      "Ευρωπαϊκή Ένωση. (2016). <em>Κανονισμός (ΕΕ) 2016/679 (Γενικός Κανονισμός για την Προστασία Δεδομένων)</em>, άρθρο 8. Επίσημη Εφημερίδα της Ευρωπαϊκής Ένωσης, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Ενδυνάμωση των συναδέλφων για την υπεύθυνη ενσωμάτωση της ΤΝ στη διδασκαλία ξένων γλωσσών, με παραγωγή υλικού προσαρμόσιμου σε πολλαπλά προφίλ μάθησης.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Δεν πρόκειται για παρουσίαση — είναι μια συν-δημιουργία. Κάθε συμμετέχων φεύγει με τουλάχιστον έναν έτοιμο προς δοκιμή πόρο.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Πλαισίωση — το πρόβλημα της ετερογενούς τάξης και γιατί «περισσότερο από το ίδιο» δεν λειτουργεί.",
        "<strong>10–25 min:</strong> Χάρτης των προφίλ — παρουσίαση των έξι καρτών του Farol, με πραγματικά περιστατικά (ανωνυμοποιημένα).",
        "<strong>25–45 min:</strong> Πρακτική επίδειξη — τρία εργαλεία, τρεις περιπτώσεις χρήσης, τρία διαφορετικά προφίλ.",
        "<strong>45–75 min:</strong> Εργασία σε ζευγάρια — κάθε ζευγάρι προσαρμόζει ένα υπάρχον υλικό σε ένα συγκεκριμένο προφίλ.",
        "<strong>75–85 min:</strong> Γρήγορος διαμοιρασμός — κάθε ζευγάρι παρουσιάζει το προϊόν του σε 1 λεπτό.",
        "<strong>85–90 min:</strong> Δεσμεύσεις — κάθε συμμετέχων ορίζει ένα υλικό προς δοκιμή και κανονίζεται συνάντηση ανατροφοδότησης σε 30 ημέρες.",
      ]},
      { items: [
        "Πρόσβαση στο διαδίκτυο και σε θεσμικούς λογαριασμούς στα εργαλεία που παρουσιάζονται.",
        "Υπάρχον υλικό κάθε συμμετέχοντα (ένα φύλλο εργασίας, ένα τεστ ή ένα σχέδιο μαθήματος).",
        "Εκτυπωμένες κάρτες των προφίλ του Farol για αναφορά.",
      ]},
      { items: [
        "Κάθε συμμετέχων παράγει τουλάχιστον ένα προσαρμοσμένο υλικό κατά τη διάρκεια της συνεδρίας.",
        "Συνάντηση ανατροφοδότησης σε 30 ημέρες με τουλάχιστον 60% των συμμετεχόντων να αναφέρουν ουσιαστική εφαρμογή.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Τουλάχιστον ένα υλικό που παρήχθη στη συνεδρία υιοθετείται ως κοινός πόρος του τμήματος.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Ο Νόμος 3699/2008 για την Ειδική Αγωγή και Εκπαίδευση αποτελεί το βασικό νομοθετικό πλαίσιο για μαθητές με αναπηρία ή/και ειδικές εκπαιδευτικές ανάγκες στην Ελλάδα.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ο Νόμος 4823/2021 (αναβάθμιση σχολείου) ενισχύει τις δομές υποστήριξης και θεσμοθετεί τα ΚΕΔΑΣΥ ως κεντρικά σημεία συντονισμού.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Η Ελλάδα έχει κυρώσει τη Σύμβαση ΟΗΕ για τα δικαιώματα ατόμων με αναπηρία· η συμπεριληπτική εκπαίδευση είναι κρατική πολιτική.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Η παράλληλη στήριξη και η ενισχυτική διδασκαλία αποτελούν βασικές υποστηρικτικές δομές· οι γενικές προσαρμογές είναι ευθύνη κάθε εκπαιδευτικού χωρίς ειδικά έγγραφα.",
        "Διαφοροποιημένη διδασκαλία, εναλλακτικές αξιολογήσεις, στρατηγική τοποθέτηση, δεν απαιτούν γνωμάτευση για τη βασική εφαρμογή τους.",
        "Πρακτικά παραδείγματα: επιπλέον χρόνος σε αξιολογήσεις, γραπτές οδηγίες επιπλέον των προφορικών, εναλλακτική προφορική αξιολόγηση.",
      ]},
      { items: [
        "Τα ΚΕΔΑΣΥ (Κέντρα Διεπιστημονικής Αξιολόγησης, Συμβουλευτικής και Υποστήριξης) αξιολογούν τις εκπαιδευτικές ανάγκες και εκδίδουν γνωματεύσεις.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Το Εξατομικευμένο Πρόγραμμα Εκπαίδευσης (ΕΠΕ) συντάσσεται από τον εκπαιδευτικό παράλληλης στήριξης σε συνεργασία με τον/την εκπαιδευτικό τάξης και τους γονείς.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ο εκπαιδευτικός παράλληλης στήριξης (ΕΠΣ) παρέχεται σε μαθητές με γνωμάτευση από ΚΕΣΥ· η υπαγωγή σε ειδικό σχολείο αποτελεί έσχατη επιλογή.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Η υπογραφή των γονέων είναι απαραίτητη για το ΑΕΠ και για οποιαδήποτε αλλαγή εκπαιδευτικού πλαισίου.",
      ]},
      { items: [
        "Δεν υπάρχει ειδική νομοθεσία για μαθητές με ιδιαίτερες ικανότητες· τα ΚΕΣΥ μπορούν να αξιολογήσουν και να προτείνουν προγράμματα εμπλουτισμού.",
        "Η ευέλικτη ζώνη και οι Ολυμπιάδες αποτελούν τα κύρια θεσμικά πλαίσια ανάπτυξης ταλέντων.",
        "Στην πράξη, η αναγνώριση του υψηλού δυναμικού είναι ανεπαρκής, απαιτείται ενεργοποίηση από τον/την εκπαιδευτικό.",
      ]},
      { items: [
        "Οι τάξεις υποδοχής (ΤΥ Ι & ΤΥ ΙΙ) παρέχουν ελληνόγλωσση εκπαίδευση για νεοαφιχθέντες αλλόγλωσσους μαθητές.",
        "Το πλαίσιο διαπολιτισμικής εκπαίδευσης (Ν. 2413/1996) υποστηρίζει την ένταξη μαθητών διαφορετικής πολιτισμικής προέλευσης.",
        "Το γλωσσικό εμπόδιο δεν αποτελεί λόγο παραπομπής σε ειδική αγωγή, πρέπει πρώτα να αποκλειστούν άλλες αιτίες.",
      ]},
      { items: [
        "<strong>Ν. 3699/2008</strong>, βασικό πλαίσιο ειδικής αγωγής.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ν. 4823/2021</strong>, αναβάθμιση σχολείου, νέα ΚΕΣΥ.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>ΚΕΣΥ</strong>, Κέντρα Εκπαιδευτικής και Συμβουλευτικής Υποστήριξης.",
        "<strong>ΑΕΠ</strong>, Ατομικό Εκπαιδευτικό Πρόγραμμα.",
        "<strong>Τάξεις υποδοχής ΤΥ Ι & ΤΥ ΙΙ</strong>, για αλλόγλωσσους μαθητές.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Σύμβαση των Ηνωμένων Εθνών για τα Δικαιώματα των Ατόμων με Αναπηρία</em> (CRPD, 2006), που κυρώθηκε από την Ελλάδα με τον <em>Ν. 4074/2012</em>· το άρθρο 24 κατοχυρώνει το δικαίωμα στη συμπεριληπτική εκπαίδευση.",
      "<em>Νόμος 3699/2008</em> «Ειδική Αγωγή και Εκπαίδευση ατόμων με αναπηρία ή με ειδικές εκπαιδευτικές ανάγκες»· βασικό νομοθετικό πλαίσιο που προβλέπει την παράλληλη στήριξη και το Εξατομικευμένο Πρόγραμμα Εκπαίδευσης (ΕΠΕ).",
      "<em>Νόμος 4823/2021</em> «Αναβάθμιση του σχολείου, ενδυνάμωση των εκπαιδευτικών και άλλες διατάξεις»· ενισχύει τις δομές υποστήριξης και θεσμοθετεί τα Κέντρα Εκπαιδευτικής και Συμβουλευτικής Υποστήριξης (ΚΕΣΥ/ΚΕΔΑΣΥ).",
      "<em>Νόμος 2413/1996</em> για τη Διαπολιτισμική Εκπαίδευση και οι σχετικές υπουργικές αποφάσεις για τις Τάξεις Υποδοχής (ΤΥ Ι & ΤΥ ΙΙ) και τα προγράμματα διαπολιτισμικής αγωγής για αλλόγλωσσους μαθητές.",
      "<em>Νόμος 4624/2019</em> για την Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα και την εφαρμογή του Γενικού Κανονισμού (ΕΕ) 2016/679 (GDPR)· όλα τα δεδομένα των μαθητών προστατεύονται και δεν κοινοποιούνται χωρίς συγκατάθεση.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Η παιδαγωγική διαφοροποίηση σημαίνει να προσαρμόζουμε τον τρόπο διδασκαλίας — όχι να χαμηλώνουμε τις προσδοκίες. Ο μαθησιακός στόχος μπορεί να είναι κοινός για όλους· αυτό που αλλάζει είναι η διαδρομή.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Το μοντέλο UDL (Universal Design for Learning, Καθολικός Σχεδιασμός για τη Μάθηση) προτείνει τρεις αρχές: πολλαπλά μέσα αναπαράστασης (πώς παρουσιάζεται το περιεχόμενο), πολλαπλά μέσα δράσης και έκφρασης (πώς ανταποκρίνεται ο μαθητής) και πολλαπλά μέσα εμπλοκής (τι κινητοποιεί τον μαθητή).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Διαφοροποίηση δεν σημαίνει να δημιουργείς ένα σχέδιο μαθήματος ανά μαθητή — σημαίνει να δημιουργείς αρκετή ευελιξία ώστε το ίδιο μάθημα να εξυπηρετεί διαφορετικά προφίλ.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> η συρρίκνωση του προγράμματος σπουδών για τους μαθητές με τις περισσότερες δυσκολίες.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν είναι</strong> να δίνεις πάντα διαφορετικές εργασίες σε διαφορετικούς μαθητές — αυτό απομονώνει και στιγματίζει.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν είναι</strong> μόνο διαφοροποιημένη εργασία στο χαρτί — η διαφοροποίηση περιλαμβάνει τον τρόπο με τον οποίο ο εκπαιδευτικός εξηγεί, ρωτά και αξιολογεί.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Ελεγχόμενη επιλογή: προσφορά 2–3 επιλογών μορφής απάντησης (γραπτό κείμενο, προφορική, σχηματικό σχέδιο) — όλοι ανταποκρίνονται στο ίδιο περιεχόμενο.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Σκαλωσιά (scaffolding): παροχή ενός δομημένου οδηγού στους μαθητές με περισσότερες δυσκολίες· σταδιακή απόσυρση του οδηγού καθώς αυξάνεται η αυτονομία.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Ευέλικτη ομαδοποίηση: ομάδες κατά ενδιαφέρον, κατά επίπεδο κατάκτησης ή μικτές — εναλλαγή ώστε να αποφεύγονται οι σταθερές ομάδες που μετατρέπονται σε ταυτότητες.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Προσαρμογές χρόνου: περισσότερος χρόνος δεν σημαίνει λιγότερη απαιτητικότητα. Για μαθητές με ΔΕΠΥ ή δυσπραξία, χωρισμός της εργασίας σε τμήματα με προγραμματισμένα διαλείμματα.",
        "Επίπεδο πολυπλοκότητας: για το ίδιο θέμα, δημιουργία εκδοχών με περισσότερη ή λιγότερη γλωσσική υποστήριξη, με ή χωρίς παραδείγματα, με ή χωρίς οπτικές ενδείξεις.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Αξιολόγησε τι γνωρίζει ο μαθητής, όχι πώς γράφει. Ένας μαθητής με δυσλεξία μπορεί να αποδείξει την εννοιολογική του κατάκτηση προφορικά ή με τεχνολογική υποστήριξη.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Σαφείς κλίμακες διαβαθμισμένων κριτηρίων (ρουμπρίκες), κοινοποιημένες πριν από την εργασία, επιτρέπουν στον μαθητή να γνωρίζει τι αναμένεται ανεξάρτητα από τη μορφή που επέλεξε.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Το portfolio ή η αξιολόγηση βάσει τεκμηρίων επιτρέπει στον μαθητή να αναδεικνύει την πρόοδό του με την πάροδο του χρόνου, όχι μόνο σε μία στιγμή εξέτασης.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Όταν η διαφοροποίηση μέσα στην τάξη παύει να επαρκεί και ο μαθητής εξακολουθεί να μην έχει πρόσβαση στο πρόγραμμα σπουδών, αυτό είναι ένδειξη ότι μπορεί να χρειάζεται εξειδικευμένη υποστήριξη.",
        "Η διαφοροποίηση δεν υποκαθιστά τα μέτρα υποστήριξης του σχολείου (ΣΠΟ, θεραπευτές, ειδική αγωγή) — είναι αυτό που συμβαίνει στη γενική τάξη ως συμπλήρωμα.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Διαμορφωτική αξιολόγηση είναι κάθε πρακτική που συλλέγει πληροφορίες για τη μάθηση κατά τη διάρκεια της διαδικασίας — και χρησιμοποιεί αυτές τις πληροφορίες για να προσαρμόσει τη διδασκαλία ή τη στήριξη του μαθητή.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Σε αντίθεση με την αθροιστική αξιολόγηση (τελικοί βαθμοί), η διαμορφωτική δεν χρειάζεται να έχει βαθμό — χρειάζεται να έχει ανατροφοδότηση.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Για νευροαποκλίνοντες μαθητές, η διαμορφωτική αξιολόγηση είναι ιδιαίτερα σημαντική, επειδή η επίδοση σε ένα μεμονωμένο τεστ μπορεί να μην αντικατοπτρίζει αυτό που πραγματικά γνωρίζουν.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: στο τέλος του μαθήματος, ο μαθητής απαντά σε μια ερώτηση μέσα σε 2 λεπτά — ο εκπαιδευτικός βλέπει αμέσως ποιος κατάλαβε και ποιος όχι.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Φανάρι</strong>: πράσινο (κατάλαβα), κίτρινο (έχω απορίες), κόκκινο (δεν κατάλαβα) — μπορεί να είναι φυσικές κάρτες, post-its ή ψηφιακό.",
        "<strong>Think-Pair-Share</strong>: ο μαθητής σκέφτεται ατομικά, συζητά με έναν συμμαθητή και έπειτα μοιράζεται με την τάξη — μειώνει το άγχος της άμεσης απάντησης.",
        "<strong>Πύλη εξόδου</strong>: πριν φύγει, ο μαθητής λέει στον εκπαιδευτικό ένα πράγμα που έμαθε και μια απορία που έχει ακόμη.",
      ]},
      { items: [
        "Η αποτελεσματική ανατροφοδότηση είναι συγκεκριμένη, εφαρμόσιμη και δίνεται έγκαιρα: «στη σελίδα 2, το επιχείρημα χάνεται επειδή λείπει η σύνδεση με την απόδειξη» είναι χρήσιμη· «θα μπορούσε να είναι καλύτερο» δεν είναι.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Για μαθητές με ΔΕΠΥ: η άμεση ανατροφοδότηση είναι πιο αποτελεσματική από την καθυστερημένη. Μην περιμένετε το τέλος της εργασίας.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Για μαθητές με δυσλεξία: η προφορική ή ηχητική ανατροφοδότηση μπορεί να είναι πιο προσβάσιμη από εκτενή γραπτά σχόλια.",
        "Αποφύγετε τη σύγκριση των μαθητών μεταξύ τους — συγκρίνετε τον μαθητή με τη δική του προηγούμενη πρόοδο.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ΔΕΠΥ: αξιολόγηση σε πολλαπλές σύντομες στιγμές αντί για ένα μοναδικό μακροσκελές τεστ. Μείωση των διασπαστικών ερεθισμάτων στο περιβάλλον της αξιολόγησης.",
        "Δυσλεξία: επιτρέψτε προφορικές απαντήσεις, επιπλέον χρόνο ή χρήση μετατροπής κειμένου σε ομιλία. Αξιολογήστε το περιεχόμενο, όχι την ορθογραφία.",
        "Αυτισμός: αξιολογήσεις με σαφείς και χωρίς αμφισημία γραπτές οδηγίες. Ενημερώστε εκ των προτέρων για αλλαγές στη μορφή.",
        "Χαρισματικότητα: αποφύγετε αξιολογήσεις απλής αναπαραγωγής περιεχομένου — συμπεριλάβετε ερωτήσεις ανάλυσης, σύνθεσης και δημιουργίας.",
      ]},
      { items: [
        "Όταν, ακόμη και με προσαρμογές στην αξιολόγηση, ο μαθητής δεν καταφέρνει να επιδείξει μάθηση, αυτό είναι ένδειξη ότι μπορεί να υπάρχει ένα βαθύτερο εμπόδιο που πρέπει να διερευνηθεί με το ΣΠΟ.",
        "Επίμονα μοτίβα (μήνες, όχι ημέρες) συγκεκριμένης δυσκολίας σε έναν τομέα πρέπει να επισημαίνονται επίσημα.",
      ]},
    ]},
  },


  bg: {
    tdah: { sections: [
      { items: [
        "Затруднение да задържи вниманието при дълги задачи; губи се при инструкции с няколко стъпки.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Постоянно движение — не седи мирно, играе си с ръцете, става без видима причина.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Отговаря, преди въпросът да е завършил; прекъсва съучениците и учителя.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Забравя пособия, срокове и инструкции, дадени устно преди няколко минути — работната памет е претоварена.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Може да се хиперфокусира върху онова, което го интересува, оставяйки (погрешното) впечатление, че „може, когато поиска“; всъщност представянето се променя в зависимост от интереса и наградата.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Не е</strong> лошо възпитание, мързел или липса на характер: тези погрешни схващания стигматизират и забавят подкрепата.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Не е</strong> винаги видима хиперактивност — съществува предимно невнимателна форма, по-честа при момичетата и често недостатъчно диагностицирана.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Не се решава</strong> с „повече усилия“: затруднението е в неврологичната саморегулация, а не във волята.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Разделяне на инструкциите на части: по една наведнъж, записани на дъската, с определено време — намалява натоварването върху работната памет.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Позволяване на допустимо движение (раздаване на материали, изтриване на дъската, изпълняване на поръчки).",
        "Намаляване на конкуриращите стимули (място далеч от прозореца, вратата и най-шумната група).",
        "Незабавно и често положително подкрепление: при ADHD чувствителността към наградата е променена (отвращение към чакането), затова незабавните награди действат по-добре от отложените.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Започнете с това, което ученикът прави добре — срещата не бива да започва със списък от оплаквания, иначе родителят се затваря отбранително.",
        "Описвайте наблюдавани поведения, а не диагнози: „когато има повече от две стъпки последователно, губи нишката“ вместо „има ADHD“.",
        "Предвиждайте реакцията „вкъщи не е така“ — обяснете, че груповият контекст и изискването за продължително внимание в класната стая правят симптомите по-видими.",
        "Ако предлагате оценяване, представете го като ресурс, а не като наказание: „има подкрепа, която може много да му/ѝ помогне“ вместо „трябва да бъде оценен/а“.",
      ]},
      { items: [
        "Постоянни дисциплинарни проблеми въпреки адаптациите в класната стая.",
        "Признаци на социално изключване от страна на връстниците.",
        "Признаци на коморбидност (тревожност, депресия, опозиционно-предизвикателно разстройство) — чести при ADHD и обосноваващи насочване към специалист.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Чете бавно и с усилие, с грешки при четенето на изолирани думи, дори в текстове, които разбира добре, когато ги чуе.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Разместването на букви (b/d, p/q) е често срещано при всички деца, които започват да пишат, и само по себе си не е признак на дислексия; основната трудност е <strong>фонологична</strong> — свързването на букви със звукове.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Постоянни правописни грешки, които не се повлияват от многократно поправяне.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Склонен е да избягва четенето на глас; може да изглежда като незаинтересованост, докато всъщност е защитна стратегия.",
        "Слуховото разбиране е значително по-добро от разбирането при четене — трудността е специфична, а не общо когнитивно ограничение.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Не е</strong> липса на интелигентност: по дефиниция дислексията е неочаквана спрямо останалите когнитивни способности на ученика.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Не е</strong> проблем със зрението, нито обикновено „разместване на букви“: основният дефицит е във фонологичната обработка.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Не се „лекува“</strong>, но структурираната намеса върху фонологичното осъзнаване и декодирането последователно подобрява четенето.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Увеличаване на разстоянието между буквите и редовете: има експериментални доказателства, че разширеното разстояние подобрява четенето при деца с дислексия, без предварителна подготовка.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Доказателствата за специфични шрифтове „за хора с дислексия“ за разлика от това са по-слаби и непоследователни.",
        "Да се позволи четене наум преди каквото и да е четене на глас — никога да не се иска четене изненадващо.",
        "Когато целта не е да се оценява писането, съдържанието да се оценява отделно от правописа.",
        "Да се предлага една и съща информация в различни формати (аудио, видео, схеми).",
      ]},
      { items: [
        "Изрично да се отдели четенето от интелигентността още в самото начало: „разбира много добре, когато слуша — трудността е специфична за четенето“.",
        "Да се има предвид, че дислексията има силен наследствен компонент: единият от родителите може да има недиагностицирана дислексия и разговорът може да съживи трудни спомени от собственото му образование.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Да се избягва показването на листове, пълни с червени поправки, без контекст — първо да се представи това, което ученикът вече може да прави.",
        "Да се бъде конкретен относно вече въведените адаптации и тези, които настойникът може да повтори у дома: текстове в аудиоформат, четене на глас без времеви натиск.",
      ]},
      { items: [
        "Влошаваща се академична самооценка („глупав съм“, „не мога“).",
        "Системно избягване на задачи за четене/писане до степен да застрашава други предмети.",
        "Изразено несъответствие между устното и писменото представяне без формална диагноза — да се насочи към психопедагогическа оценка.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Затруднения при необявени промени — промяна на разписанието, на стаята, на заместващия учител.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Буквална комуникация — изплъзват ѝ се нюанси, ирония, идиоматични изрази.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Сензорна чувствителност — флуоресцентната светлина, фоновият шум, етикетите по дрехите може да са непоносими.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Съсредоточени и задълбочени интереси към конкретни теми — свързани с когнитивен стил, ориентиран към детайла.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Когато е претоварен, може да изглежда незаинтересован или отнесен, а не изключен.",
      ]},
      { items: [
        "<strong>Не е</strong> линейна скала („повече“ или „по-малко“ аутистичен) — това е многомерен профил с различни профили на подкрепа във всяка област.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Не е</strong> липса на емпатия: затрудненията във взаимното разбиране са двупосочни — и на неаутистичните хора им е трудно да разчитат аутистичните („проблемът на двойната емпатия“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Не е</strong> лошо поведение, когато рутината се наруши — това е реална неврологична реакция на загубата на предвидимост.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Предупреждавайте предварително за всяка промяна в рутината, дори привидно незначителна — визуалната подкрепа и предусещането имат емпирична подкрепа.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Превръщайте неизказаните социални правила в изрични правила (какво се прави, какво не се прави, кога).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Позволявайте сензорни паузи в тихо пространство, когато е необходимо.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Използвайте съсредоточения интерес като входна точка към учебното съдържание — това е сила, а не разсейване.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Ако диагнозата вече съществува, попитайте първо какво според родителя/настойника работи — родителите на аутистични деца често знаят за детето си повече от който и да е доклад.",
        "Ако няма диагноза, бъдете много внимателни: описвайте конкретни ситуации, без никога да използвате думата „аутизъм“ на първа среща — „когато рутината се промени без предупреждение, детето Ви се разстройва силно по начин, който надхвърля обичайното“.",
        "Признайте усилието на родителя/настойника — да се създава структура и предвидимост у дома е изискващо и признаването му създава съюз.",
        "Никога не сравнявайте с „други ученици“ или с братя и сестри — всеки профил в спектъра е различен и сравнението винаги е контрапродуктивно.",
      ]},
      { items: [
        "Чести кризи („мелтдауни“) след учебния ден.",
        "Постоянен отказ от училище, свързан със сензорно претоварване.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Прогресираща социална изолация въпреки опитите за медиация.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Почеркът е затруднен, бавен и често нечетлив — поради реална двигателна трудност, а не от немарливост.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Затруднение в пространственото организиране на тетрадката, в управлението на материалите и в последователностите от стъпки.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Може да изглежда „непохватен“ — разлива чаши, блъска се в мебели, има трудности в спорта.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Несъразмерна умора след задачи, изискващи продължителна фина координация.",
        "Познавателният компонент обикновено е запазен — оттук и честата фрустрация между това да знаеш и да можеш да го покажеш.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Не е</strong> мързел или липса на старание.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Не е</strong> само лош почерк: клиничният термин е разстройство в развитието на координацията (DCD) и засяга планирането и двигателната последователност, а не само писането.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Не се решава</strong> с „повече упражняване на писане“: ефективната интервенция е насочена към задачата, а не към механично повторение.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Да се позволи използването на клавиатура/таблет при по-обемни писмени работи.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Да се намали механичното преписване от дъската — да се предоставят записки, когато е уместно.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Да се предоставят ясни контролни списъци за задачи с няколко стъпки.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Да се оценява продуктът по съдържанието, а не по физическото оформление.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Да се обясни какво е диспраксията на прост език — повечето родители никога не са чували термина: „това е неврологична трудност в координацията на движенията, не е немарливост, нито липса на усилие“.",
        "Нечетливият почерк е точката на най-голямо напрежение с родителите — да се покаже, че оценяването вече цени съдържанието, а не формата, помага да се облекчи тревожността от двете страни.",
        "Да се предложат практически инструменти за вкъщи: гласово диктуване на телефона за записки, клавиатура за обемни писмени работи.",
        "Ако в предходни години е имало определения „мързелив е“ или „не се старае“, това да се назове директно: „знам, че вече сте го чували — моят прочит е различен“.",
      ]},
      { items: [
        "Пълен отказ от писмена продукция.",
        "Социална изолация в контекст на физическа активност.",
        "Признаци на соматизирана тревожност преди писмени изпитвания — психосоциалното страдание е част от клиничната картина.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Завършва задачите за минути, докато на класа му е нужен цял учебен час.",
        "Задава въпроси, които излизат извън обхвата на материала — или активно оспорва това, което се преподава.",
        "Може да изглежда незаинтересован, недисциплиниран или апатичен — често това са признаци на хронична скука и неоползотворен потенциал.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Подчертана емоционална чувствителност; може да е тревожен или перфекционист — психосоциалните фактори са определящи за развитието на таланта.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Реален риск от неоползотворен потенциал — може да се научи да крие способностите си, за да не изпъква в социален план.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Не е</strong> синоним на добро поведение, нито на добри резултати — много надарени ученици постигат среден успех поради незаинтересованост.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Не означава</strong> „няма нужда от помощ“: нуждае се от различни предизвикателства, защото способността се превръща в постижение само когато се развива целенасочено.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Не е</strong> несъвместима с невроразнообразието — двойната изключителност (2e) съществува, среща се често и нерядко остава прикрита.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Винаги да има подготвени задачи за разширяване — не повече от същото, а по-задълбочен или приложен материал.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Да се позволи самостоятелно проучване на теми, които интересуват ученика, в рамките на учебната програма.",
        "Да се оценява според предизвикателството, а не според лекотата — да се изискват по-взискателни работи в замяна на по-малък обем.",
        "Да се разпознае и признае емоционалната чувствителност, без тя да се патологизира.",
      ]},
      { items: [
        "Да се предусети гордостта и да се пренасочи: „той очевидно е много способен — и точно затова скуката започва да създава проблеми“.",
        "Да се обясни парадоксът на надареността: добрите резултати не означават, че всичко е наред, а неоползотвореният потенциал поради незаинтересованост е често срещан и обратим.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ако ученикът крие способностите си, за да се впише социално, това да се назове внимателно — то е признак на страдание, а не на скромност.",
        "Да се предложи на родителите вкъщи да ценят процеса вместо резултата: любопитството, задълбочеността и трудните въпроси струват повече от високите оценки на лесни задачи.",
      ]},
      { items: [
        "Признаци на тревожност или депресия, свързани с краен перфекционизъм.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Изразена социална изолация поради усещането, че е „различен“ от връстниците си.",
        "Внезапен спад в академичните постижения при ученик, който преди това е бил определен като способен.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Разбира много по-малко, отколкото изглежда — разговорният език се развива много преди академичния, затова ученикът може да изглежда владеещ езика, без да следва учебното съдържание.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Привидно слаби академични резултати, често несъразмерни с реалните способности.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Мълчание в клас — може да е нормален „мълчалив период“ при усвояването на езика, а не липса на интерес.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "В края на деня може да е изтощен от обработването на езика в реално време.",
        "Риск от недодиагностициране на реални специални образователни потребности (дислексия, ADHD), когато всичко се отдава на езиковата бариера.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Не е</strong> липса на интелигентност или способности.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Не е</strong> просто въпрос на време: развитието на академичния език отнема години и без изрична подкрепа много ученици се установяват на ниско функционално ниво.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Не се решава</strong> с автоматичен превод по време на часа — това е процес, който отнема години, а майчиният език е ресурс, а не пречка.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Осигуряване на материали с ключова лексика, преведена на майчиния език.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Проверка на знанията чрез визуална или практическа демонстрация, когато това е възможно.",
        "Сдвояване с двуезичен съученик за неформално посредничество в ключови моменти.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Приемане на първоначалните изказвания с граматически грешки — в първата фаза да се коригира съдържанието, а не формата.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Самата среща е бариера — родителят или настойникът може да не владее български достатъчно добре за сложен разговор. Подгответе предварително прости писмени материали или поискайте преводаческа подкрепа.",
        "Не приемайте за даденост, че родителят или настойникът познава българската образователна система — обяснете какво е училищната психологическа и консултативна служба, какво е мярка за подкрепа и какво включва оценяването, без да считате нищо за подразбиращо се.",
        "Ясно разграничавайте езиковата бариера от учебните способности: „Вашето дете е способно — то учи езика едновременно с учебното съдържание, което е много взискателно.“<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Бъдете чувствителни към миграционния контекст: бежанските семейства или тези в нередовно положение може да изпитват недоверие към институциите. Изградете доверие, преди да поискате документи или насочвания.",
      ]},
      { items: [
        "Признаци на социална изолация или тормоз, свързани със статута на ученик чужденец.",
        "Застой в усвояването на езика след първата година.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Признаци на травма, свързана с миграционния контекст (особено при бежанци).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Данните на непълнолетни лица подлежат на засилена защита (чл. 8 от ОРЗД). Съгласието на лицата, упражняващи родителски права, е задължително.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Проверете къде инструментът съхранява данните — на европейски сървъри, на неевропейски, анонимизирани или не.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Никога не въвеждайте пълни имена, адреси, идентификационни номера или клинични диагнози в инструменти за генеративен ИИ.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Разграничавайте институционалната употреба (училището сключва договор) от личната употреба на преподавателя (индивидуална отговорност).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Системи, обучени предимно с англоезични данни, могат да се представят по-слабо на български и в българоезични контексти.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Автоматичните препоръки могат да усилват стереотипи, свързани с пол, етнос или социална класа — проверявайте ги критично.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Моделите за „прогнозиране на академичен риск“ са особено проблематични — често възпроизвеждат съществуващи неравенства, вместо да разпознават потребности.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Целта е да се увеличи самостоятелността на ученика, а не да се замени когнитивната работа, която я развива.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Разграничавайте <strong>инструмент за достъп</strong> (text-to-speech за ученик с дислексия) от <strong>инструмент за заместване</strong> (ChatGPT, който пише съчинението).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Оценявайте редовно: ученикът развива ли компетентност, или развива зависимост от инструмента?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Инструментът премахва ли реална пречка, или създава пряк път, който пропуска ученето?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Защитени ли са въведените данни и налице ли е съгласие?",
        "<strong>3.</strong> Ще бъде ли резултатът на инструмента проверен от човек, преди да достигне до ученика?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Съществува ли алтернатива без ИИ, която работи също толкова добре?",
        "<strong>5.</strong> Ако инструментът престане да съществува утре, ученикът ще остане ли без опора?",
      ]},
    ],
    references: [
      "Европейски съюз. (2016). <em>Регламент (ЕС) 2016/679 (Общ регламент относно защитата на данните)</em>, чл. 8. Официален вестник на Европейския съюз, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Да подготвим колегите за отговорно интегриране на ИИ в обучението по чужд език, включително създаване на материали, които могат да се адаптират към различни профили на учене.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Това не е презентация — това е съвместно създаване. Всеки участник си тръгва с поне един ресурс, готов за изпробване.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 мин:</strong> Въведение — проблемът с разнородния клас и защо „повече от същото“ не работи.",
        "<strong>10–25 мин:</strong> Карта на профилите — представяне на шестте карти на Farol с реални (анонимизирани) случаи.",
        "<strong>25–45 мин:</strong> Практическа демонстрация — три инструмента, три случая на употреба, три различни профила.",
        "<strong>45–75 мин:</strong> Работа по двойки — всяка двойка адаптира съществуващ материал към конкретен профил.",
        "<strong>75–85 мин:</strong> Бърз обмен — всяка двойка представя своя продукт за 1 минута.",
        "<strong>85–90 мин:</strong> Ангажименти — всеки участник определя материал за изпробване и се уговаря среща за обратна връзка след 30 дни.",
      ]},
      { items: [
        "Достъп до интернет и до институционални акаунти в демонстрираните инструменти.",
        "Съществуващи материали на всеки участник (работен лист, тест или план на урок).",
        "Отпечатани карти на профилите на Farol за справка.",
      ]},
      { items: [
        "Всеки участник създава по време на сесията поне един адаптиран материал.",
        "Среща за обратна връзка след 30 дни, на която поне 60% от участниците съобщават за реално прилагане.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Поне един материал, създаден по време на сесията, се приема като споделен ресурс на катедрата.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Законът за предучилищното и училищното образование (ЗПУО, ДВ бр. 79/2015 г.) установява приобщаващото образование като принцип и задължение на всяко училище в България.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Наредбата за приобщаващото образование (ДВ бр. 86/2017 г.) урежда дейността на екипите за подкрепа и видовете подкрепящи мерки.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "България е ратифицирала Конвенцията на ООН за правата на хората с увреждания; приобщаващото образование е национална политика.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Приобщаващото образование се осъществява чрез екипна работа и диференциран подход, всеки учител може да прилага базови адаптации без специален документ.",
        "Диференцирано преподаване, адаптирани оценявания, стратегично разполагане в класа, не изискват официално решение за прилагане.",
        "Практически примери: допълнително време при оценявания, писмени инструкции допълващи устните, алтернативно устно оценяване.",
      ]},
      { items: [
        "Екипът за подкрепа на личностното развитие (ЕПЛР) в училище координира подкрепата и включва педагог, психолог, логопед и ресурсен учител.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Индивидуалният образователен план (ИОП) се изготвя от ЕПЛР в сътрудничество с родителите и е задължителен за всички преподаватели.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Регионалният център за подкрепа на процеса на приобщаващото образование (РЦПППО) предоставя специализирана методическа подкрепа.",
        "Подписът на родителите е задължителен за ИОП; годишен преглед се изисква.",
      ]},
      { items: [
        "Деца с изявени дарби са обхванати от Закона за закрила на детето (чл. 11а) и Наредба № 2 за работа с надарени ученици.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Специализирани паралелки, творчески конкурси и олимпиади са основните инструменти за развитие на талантите.",
        "В практиката идентификацията на надареност е недостатъчна, ЕПЛР може да насочи за допълнителна оценка.",
      ]},
      { items: [
        "Ученици с друг майчин език получават допълнителна езикова подкрепа по български чрез РЦПППО и образователен медиатор.",
        "Езиковата бариера не е основание за поставяне в специална образователна среда, необходимо е да се изключат други причини за затруднения.",
        "При необходимост от превод за среща с родители, осигуряването на такъв е отговорност на приемащото училище.",
      ]},
      { items: [
        "<strong>ЗПУО (2015 г.)</strong>, основна рамка за приобщаващо образование.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Наредба приобщаващо образование (2016 г.)</strong>, ЕПЛР и ИОП.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>ЕПЛР</strong>, Екип за подкрепа на личностното развитие.",
        "<strong>ИОП</strong>, Индивидуален образователен план.",
        "<strong>РЦПППО</strong>, Регионален център за подкрепа на приобщаващото образование.",
      ]},
    ],
    references: [
      "<em>Конвенция на ООН за правата на хората с увреждания</em> (2006 г.), ратифицирана от Република България със закон (ДВ бр. 12/2012 г.); член 24 признава правото на приобщаващо образование.",
      "<em>Закон за предучилищното и училищното образование</em> (ЗПУО, обн. ДВ бр. 79 от 13.10.2015 г., в сила от 01.08.2016 г.); основната рамка, която установява приобщаващото образование като принцип и урежда общата и допълнителната подкрепа за личностно развитие.",
      "<em>Наредба за приобщаващото образование</em> (приета с ПМС № 232/2017 г., обн. ДВ бр. 86 от 27.10.2017 г.); урежда дейността на екипите за подкрепа на личностното развитие (ЕПЛР), индивидуалния образователен план (ИОП) и работата на регионалните центрове (РЦПППО).",
      "<em>Закон за закрила на детето</em> (чл. 10а и насл., обн. ДВ бр. 48/2000 г.) и <em>Наредба за условията и реда за осъществяване на закрила на деца с изявени дарби</em> (ПМС № 298/2003 г.); уреждат мерките за насърчаване на децата с изявени дарби.",
      "<em>Закон за защита на личните данни</em> (ЗЗЛД, обн. ДВ бр. 1/2002 г., изм. ДВ бр. 17/2019 г.), в изпълнение на Общия регламент относно защитата на данните (Регламент (ЕС) 2016/679 – GDPR); урежда защитата на личните данни и правомощията на Комисията за защита на личните данни (КЗЛД).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Педагогическата диференциация означава да се приспособи начинът на преподаване — а не да се занижават очакванията. Целта на ученето може да е една и съща за всички; различава се пътят към нея.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Моделът UDL (Universal Design for Learning) предлага три принципа: множество начини на представяне (как се поднася съдържанието), множество начини на действие и изразяване (как ученикът отговаря) и множество начини на ангажиране (какво мотивира ученика).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Да диференцираш не означава да изготвиш отделен план на урока за всеки ученик — става дума за създаване на достатъчно гъвкавост, така че един и същ урок да отговаря на различни профили на учениците.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Не е</strong> орязване на учебната програма за учениците с най-големи затруднения.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Не е</strong> постоянно даване на различни задачи на различни ученици — това изолира и поставя етикети.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Не е</strong> само диференцирана работа на хартия — диференциацията включва и начина, по който учителят обяснява, задава въпроси и оценява.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Контролиран избор: предложете 2–3 варианта за формат на отговора (писмен текст, устен, схематична рисунка) — всички отговарят на едно и също съдържание.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Скеле (scaffolding): осигурете на учениците с по-големи затруднения структуриран опорен модел; постепенно го премахвайте с нарастването на самостоятелността им.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Гъвкаво групиране: групи според интереса, според нивото на усвояване или смесени — редувайте ги, за да избегнете постоянни групи, които се превръщат в идентичности.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Адаптиране на времето: повече време не означава по-малка взискателност. За учениците с ADHD (ХАДВ) или диспраксия разделете задачата на части с планирани паузи.",
        "Ниво на сложност: за една и съща тема създавайте варианти с повече или по-малко езикова подкрепа, с или без примери, със или без визуални насоки.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Оценявайте това, което ученикът знае, а не как пише. Ученик с дислексия може да докаже разбиране на понятията устно или с технологична подкрепа.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ясни критерии за оценяване (рубрики), споделени преди задачата, позволяват на ученика да знае какво се очаква от него, независимо от избрания формат.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Портфолио или оценяване, основано на доказателства, позволява на ученика да покаже напредък във времето, а не само в един момент на изпитване.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Когато диференциацията в класната стая престане да е достатъчна и ученикът все още няма достъп до учебната програма, това е знак, че може да е необходима специализирана подкрепа.",
        "Диференциацията не замества мерките за подкрепа на училището (училищна психолого-педагогическа служба, терапевти, специално образование) — тя е това, което се случва в обикновената класна стая като тяхно допълнение.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Формиращото оценяване е всяка практика, която събира информация за ученето по време на процеса — и използва тази информация, за да адаптира преподаването или подкрепата на ученика.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "За разлика от обобщаващото оценяване (крайни оценки), формиращото не е задължително да има оценка — задължително трябва да има обратна връзка.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "За невродивергентните ученици формиращото оценяване е особено важно, защото представянето на еднократен тест може да не отразява това, което те действително знаят.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: в края на часа ученикът отговаря на въпрос за 2 минути — учителят веднага вижда кой е разбрал и кой не.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Светофар</strong>: зелено (разбрах), жълто (имам съмнения), червено (не разбрах) — може да бъдат физически картончета, post-it листчета или дигитална форма.",
        "<strong>Think-Pair-Share</strong>: ученикът първо мисли самостоятелно, после обсъжда по двойки и накрая споделя с класа — намалява тревожността от пряк отговор.",
        "<strong>Изходна врата</strong>: преди да излезе, ученикът казва на учителя едно нещо, което е научил, и едно съмнение, което все още има.",
      ]},
      { items: [
        "Ефективната обратна връзка е конкретна, приложима и дадена навреме: „на страница 2 аргументът се губи, защото липсва връзката с доказателството“ е полезно; „можеше да е по-добре“ не е.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "За ученици с ХАДВ: незабавната обратна връзка е по-ефективна от отложената. Да не се чака до края на задачата.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "За ученици с дислексия: устната или аудио обратна връзка може да бъде по-достъпна от обширни писмени коментари.",
        "Да се избягва сравняването на учениците помежду им — ученикът да се сравнява със собствения си предходен напредък.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ХАДВ: оценяване в няколко кратки момента вместо един-единствен дълъг тест. Да се намалят разсейващите стимули в средата на оценяване.",
        "Дислексия: да се позволят устни отговори, допълнително време или използване на преобразуване на текст в реч. Да се оценява съдържанието, а не правописът.",
        "Аутизъм: оценяване с ясни и недвусмислени писмени инструкции. Да се предупреждава предварително за промени във формата.",
        "Надареност: да се избягва оценяване, основано на просто възпроизвеждане на съдържание — да се включват въпроси за анализ, синтез и създаване.",
      ]},
      { items: [
        "Когато дори с адаптации в оценяването ученикът не успява да демонстрира учене, това е знак, че може да има по-дълбока бариера, която да се проучи със SPO.",
        "Устойчиви модели (месеци, не дни) на специфично затруднение в дадена област трябва да бъдат сигнализирани официално.",
      ]},
    ]},
  },

  lt: {
    tdah: { sections: [
      { items: [
        "Sunkiai išlaiko dėmesį atliekant ilgas užduotis; pasimeta nurodymuose, kuriuose yra keli žingsniai.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Nuolatinis judėjimas — nenusėdi vietoje, kruta rankomis, atsistoja be aiškios priežasties.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Atsako nepalaukęs, kol baigsis klausimas; pertraukia bendraklasius ir mokytoją.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Pamiršta priemones, terminus ir prieš kelias minutes žodžiu duotus nurodymus — darbinė atmintis yra perkrauta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Gali itin susikaupti ties tuo, kas jį domina, sukurdamas (klaidingą) įspūdį, kad „sugeba, kai nori“; iš tikrųjų rezultatai kinta priklausomai nuo susidomėjimo ir atlygio.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Tai nėra</strong> blogas auklėjimas, tingumas ar charakterio stoka: šios klaidingos nuostatos stigmatizuoja ir vilkina pagalbą.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tai nėra</strong> visada matomas hiperaktyvumas — esama vyraujančiai nedėmesingos raiškos, dažnesnės tarp mergaičių ir neretai per mažai diagnozuojamos.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Tai neišsprendžiama</strong> raginimu „labiau pasistengti“: sunkumas slypi neurologinėje savireguliacijoje, o ne valioje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Skaidyti nurodymus: po vieną, užrašant ant lentos, su nustatytu laiku — taip mažinama darbinės atminties apkrova.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Leisti pateisinamą judėjimą (dalyti priemones, valyti lentą, nunešti žinutę).",
        "Mažinti konkuruojančius dirgiklius (vieta toliau nuo lango, durų, triukšmingiausios grupės).",
        "Neatidėliotinas ir dažnas teigiamas paskatinimas: sergant ADHD jautrumas atlygiui yra pakitęs (laukimo vengimas), todėl neatidėliotinas atlygis veikia geriau nei atidėtas.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Pradėti nuo to, ką mokinys daro gerai — susitikimas negali prasidėti nuo skundų sąrašo, antraip tėvai (globėjai) gynybiškai užsisklendžia.",
        "Apibūdinti pastebėtą elgesį, o ne diagnozes: „kai iš eilės būna daugiau nei du žingsniai, jis pameta giją“, o ne „jis turi ADHD“.",
        "Numatyti reakciją „namuose taip nebūna“ — paaiškinti, kad grupinis kontekstas ir reikalavimas ilgai išlaikyti dėmesį klasėje padaro simptomus labiau matomus.",
        "Jei siūlomas įvertinimas, pateikti jį kaip pagalbą, o ne kaip bausmę: „yra pagalba, kuri jam (jai) gali labai padėti“, o ne „jį (ją) reikia įvertinti“.",
      ]},
      { items: [
        "Nuolatiniai drausmės pažeidimai nepaisant pritaikymų klasėje.",
        "Bendraamžių socialinės atskirties požymiai.",
        "Gretutinių sutrikimų požymiai (nerimas, depresija, opozicinis neklusnumas) — dažni sergant ADHD ir pateisinantys nukreipimą specialistui.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Skaito lėtai ir su dideliu vargu, klysta skaitydamas atskirus žodžius net ir tuose tekstuose, kuriuos puikiai supranta, kai jie skaitomi balsu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Raidžių apvertimai (b/d, p/q) būdingi visiems rašyti pradedantiems vaikams ir savaime nėra disleksijos požymis; pagrindinis sunkumas yra <strong>fonologinis</strong> — susieti raides su garsais.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Nuolatinės rašybos klaidos, kurių nepašalina pakartotinis taisymas.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Linkęs vengti skaityti balsu; tai gali atrodyti kaip nesidomėjimas, nors iš tikrųjų yra apsaugos strategija.",
        "Klausymu suvokia akivaizdžiai geriau nei skaitydamas — sunkumas yra specifinis, o ne bendras pažintinis ribotumas.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Tai nėra</strong> intelekto stoka: pagal apibrėžimą disleksija yra netikėta, palyginti su kitais mokinio pažintiniais gebėjimais.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tai nėra</strong> regos problema ar paprastas „raidžių painiojimas“: pagrindinis sutrikimas yra fonologinio apdorojimo srityje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Jos „neišgydoma“</strong>, tačiau struktūruota intervencija į fonologinį suvokimą ir dekodavimą nuosekliai gerina skaitymą.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Padidinti tarpus tarp raidžių ir eilučių: yra eksperimentinių įrodymų, kad platesni tarpai pagerina disleksiją turinčių vaikų skaitymą be išankstinio pasirengimo.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Priešingai, įrodymai dėl specialių „disleksikams skirtų“ šriftų yra silpnesni ir nenuoseklūs.",
        "Leisti skaityti tyliai prieš bet kokį skaitymą balsu — niekada neprašyti skaityti netikėtai.",
        "Kai tikslas nėra įvertinti rašymą, turinį vertinti atskirai nuo rašybos.",
        "Pateikti tą pačią informaciją keliais formatais (garso įrašu, vaizdo įrašu, schemomis).",
      ]},
      { items: [
        "Iš karto pokalbio pradžioje aiškiai atskirti skaitymą nuo intelekto: „klausydamas supranta labai gerai — sunkumas yra specifinis skaitymui“.",
        "Turėti omenyje, kad disleksija turi stiprų paveldimumo komponentą: vienas iš tėvų gali turėti nediagnozuotą disleksiją, o pokalbis gali atgaivinti sunkius savo paties mokyklos prisiminimus.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vengti rodyti darbo lapus, pilnus raudonai pažymėtų taisymų, be konteksto — pirmiausia parodyti, ką mokinys jau geba padaryti.",
        "Būti konkretiems dėl jau taikomų pritaikymų ir dėl tų, kuriuos globėjas gali pakartoti namuose: tekstai garso formatu, skaitymas balsu be laiko spaudimo.",
      ]},
      { items: [
        "Blogėjanti akademinė savivertė („esu kvailas“, „negaliu“).",
        "Sistemingas skaitymo/rašymo užduočių vengimas tiek, kad tai trukdo kitiems dalykams.",
        "Ryškus neatitikimas tarp žodinio ir rašytinio pasiekimo be oficialios diagnozės — nukreipti psichopedagoginiam vertinimui.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Sunkumai dėl nepaskelbtų pokyčių – tvarkaraščio, klasės pakeitimo, pavaduojančio mokytojo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Pažodinis bendravimas – nepagauna niuansų, ironijos, idiomų.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Jutiminis jautrumas – fluorescencinė šviesa, foninis triukšmas, drabužių etiketės gali būti nepakeliami.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Sutelkti ir gilūs interesai konkrečiomis temomis – susiję su į detales orientuotu pažinimo stiliumi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Būdamas perkrautas gali atrodyti nesidomintis ar atsiribojęs, o ne abejingas.",
      ]},
      { items: [
        "<strong>Tai nėra</strong> tiesinė skalė („labiau“ ar „mažiau“ autistiškas) – tai daugiamatis profilis su skirtingais paramos poreikiais kiekvienoje srityje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tai nėra</strong> empatijos stoka: tarpusavio supratimo sunkumai yra abipusiai – ir neautistiškiems žmonėms sunku suprasti autistus (vadinamoji „dvigubos empatijos problema“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tai nėra</strong> blogas elgesys, kai sutrinka rutina – tai tikra neurologinė reakcija į nuspėjamumo praradimą.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Iš anksto įspėti apie bet kokį rutinos pakeitimą, net jei jis atrodo nereikšmingas – vaizdinė parama ir išankstinis pasirengimas turi empirinį pagrindą.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Numanomas socialines taisykles paversti aiškiomis (kas daroma, kas nedaroma, kada).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Prireikus leisti jutimines pertraukas tylioje erdvėje.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Pasitelkti sutelktą interesą kaip įėjimo tašką į mokymo turinį – tai stiprybė, o ne blaškymasis.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Jei diagnozė jau yra, pirmiausia paklauskite tėvų ar globėjų, kas, jų žiniomis, padeda – autistiškų vaikų tėvai dažnai žino apie savo vaiką daugiau nei bet kuri ataskaita.",
        "Jei diagnozės nėra, būkite labai atsargūs: aprašykite konkrečias situacijas, per pirmąjį susitikimą niekada nevartodami žodžio „autizmas“ – „kai rutina pasikeičia be įspėjimo, jūsų sūnus / jūsų dukra labai sutrinka tokiu būdu, kuris peržengia įprastas ribas“.",
        "Pripažinkite tėvų ar globėjų pastangas – kurti struktūrą ir nuspėjamumą namuose yra reiklu, o to pripažinimas sukuria bendrystę.",
        "Niekada nelyginkite su „kitais mokiniais“ ar broliais bei seserimis – kiekvienas spektro profilis yra skirtingas, o lyginimas visada kenkia.",
      ]},
      { items: [
        "Dažni priepuoliai („meltdown“) po mokyklos dienos.",
        "Nuolatinis atsisakymas eiti į mokyklą, susijęs su jutimine perkrova.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Progresuojanti socialinė izoliacija nepaisant tarpininkavimo bandymų.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Sunkus, lėtas ir dažnai neįskaitomas rašymas ranka – dėl realių motorinių sunkumų, o ne dėl neatidumo.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Sunkumai erdviškai tvarkant sąsiuvinį, valdant mokymo priemones ir atliekant veiksmų sekas.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Gali atrodyti „nerangus“ – išverčia stiklines, atsitrenkia į baldus, sunkiai sekasi sportuoti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Neproporcingas nuovargis po užduočių, reikalaujančių nuolatinės smulkiosios motorikos koordinacijos.",
        "Pažintinė sritis paprastai būna išlikusi – todėl dažna frustracija tarp to, ką vaikas žino, ir to, ką sugeba parodyti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Tai nėra</strong> tinginystė ar pastangų stoka.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tai nėra</strong> tik prasta rašysena: klinikinis terminas yra raidos koordinacijos sutrikimas (RKS), kuris veikia motorinį planavimą ir sekos sudarymą, o ne vien rašymą.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Tai neišsprendžiama</strong> „daugiau treniruojant rašymą“: veiksminga intervencija yra orientuota į užduotį, o ne mechaninis kartojimas.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Leisti naudoti klaviatūrą ar planšetę rengiant ilgesnius rašto darbus.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sumažinti mechanišką nurašinėjimą nuo lentos – pateikti užrašus, kai tai aktualu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pateikti aiškius kontrolinius sąrašus daugiapakopėms užduotims.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vertinti darbą pagal turinį, o ne pagal fizinį pateikimą.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Paprasta kalba paaiškinti, kas yra dispraksija – dauguma tėvų niekada nėra girdėję šio termino: „tai neurologinis judesių koordinacijos sunkumas, o ne neatidumas ar pastangų stoka“.",
        "Neįskaitoma rašysena yra didžiausios įtampos su tėvais taškas – parodymas, kad vertinant dabar svarbiausias turinys, o ne forma, padeda sumažinti abiejų pusių nerimą.",
        "Pasiūlyti praktiškų priemonių namams: balso diktavimą telefone užrašams, klaviatūrą ilgesniems rašto darbams.",
        "Jei ankstesniais metais būta sakymų „jis (-i) tinginys (-ė)“ ar „nesistengia“, įvardyti tai tiesiai: „žinau, kad tai jau girdėjote – mano vertinimas yra kitoks“.",
      ]},
      { items: [
        "Visiškas atsisakymas atlikti rašto darbus.",
        "Socialinė izoliacija fizinio aktyvumo situacijose.",
        "Somatizuoto nerimo požymiai prieš rašto darbų vertinimus – psichosocialinis kentėjimas yra šio sutrikimo dalis.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Užduotis atlieka per kelias minutes, o visai klasei reikia viso pamokos laiko.",
        "Užduoda klausimų, peržengiančių dalyko ribas, arba aktyviai ginčija tai, ko mokoma.",
        "Gali atrodyti nesidomintis, nedrausmingas ar apatiškas – dažnai tai lėtinio nuobodulio ir nepakankamo pasiekimų lygio ženklai.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ryškus emocinis jautrumas; gali būti nerimastingas ar perfekcionistiškas – psichosocialiniai veiksniai yra lemiami plėtojant gabumus.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Realus nepakankamo pasiekimų lygio pavojus – vaikas gali išmokti slėpti savo gebėjimus, kad socialiai neišsiskirtų.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Tai nėra</strong> gero elgesio ar gerų rezultatų sinonimas – daugelis gabių mokinių mokosi vidutiniškai dėl susidomėjimo stokos.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Tai nereiškia</strong> „pagalbos nereikia“: reikia kitokių iššūkių, nes gebėjimas virsta pasiekimu tik tada, kai yra sąmoningai plėtojamas.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tai nėra</strong> nesuderinama su neuroįvairove – dviguba išskirtinumas (2e) egzistuoja, yra dažnas ir dažnai būna užmaskuotas.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Visada turėti parengtų plėtojimo užduočių – ne daugiau to paties, o gilesnės ar pritaikytos medžiagos.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Leisti savarankiškai tyrinėti mokinį dominančias programos temas.",
        "Vertinti pagal iššūkį, o ne pagal lengvumą – prašyti reiklesnių darbų mainais į mažesnę apimtį.",
        "Pripažinti ir patvirtinti emocinį jautrumą, jo nepaverčiant patologija.",
      ]},
      { items: [
        "Numatyti pasididžiavimą ir nukreipti jį: „jis akivaizdžiai labai gabus – ir kaip tik dėl to nuobodulys kelia problemų“.",
        "Paaiškinti gabumų paradoksą: geri rezultatai nereiškia, kad vaikui viskas gerai, o nepakankamas pasiekimų lygis dėl susidomėjimo stokos yra dažnas ir grįžtamas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Jei mokinys slepia savo gebėjimus, kad socialiai pritaptų, įvardyti tai atsargiai – tai kančios, o ne kuklumo ženklas.",
        "Pasiūlyti tėvams ir globėjams namuose vertinti procesą, o ne rezultatą: smalsumas, gilumas ir sunkūs klausimai vertingesni už aukštus pažymius už lengvas užduotis.",
      ]},
      { items: [
        "Nerimo ar depresijos požymiai, susiję su kraštutiniu perfekcionizmu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ryški socialinė izoliacija, kylanti iš jausmo esant „kitokiam“ nei bendraamžiai.",
        "Staigus akademinių pasiekimų kritimas mokiniui, anksčiau pripažintam gabiu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Supranta gerokai mažiau, nei atrodo — pokalbio kalba išsivysto daug anksčiau nei akademinė kalba, todėl mokinys gali atrodyti laisvai kalbantis, nors nespėja įsisavinti turinio.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Iš pažiūros žemi akademiniai pasiekimai, dažnai neproporcingi tikriesiems gebėjimams.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tyla pamokoje — tai gali būti įprastas „tylos laikotarpis“ kalbos įsisavinimo metu, o ne nesidomėjimas.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Dienos pabaigoje mokinys gali būti išsekęs, nes kalbą apdoroja realiuoju laiku.",
        "Kyla rizika nepastebėti realių specialiųjų ugdymosi poreikių (disleksijos, ADHD), nes viskas priskiriama kalbos barjerui.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Tai nėra</strong> intelekto ar gebėjimų stoka.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Tai nėra</strong> vien laiko klausimas: akademinė kalba vystosi metų metus, o be aiškios pagalbos daugelis mokinių sustoja žemame funkciniame lygyje.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>To neišspręs</strong> automatinis vertimas pamokos metu — tai metus trunkantis procesas, o gimtoji kalba yra išteklius, o ne kliūtis.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Pateikti mokomąją medžiagą su pagrindiniu žodynu, išverstu į gimtąją kalbą.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Kai tik įmanoma, vertinti žinias vaizdiniu arba praktiniu pademonstravimu.",
        "Suporuoti su dvikalbiu klasės draugu neformaliam tarpininkavimui svarbiausiais momentais.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Pirmuoju etapu priimti pirmuosius darbus su gramatinėmis klaidomis — taisyti turinį, o ne formą.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Pats susitikimas yra barjeras — tėvai ar globėjai gali nemokėti lietuvių kalbos pakankamai gerai sudėtingam pokalbiui. Iš anksto parengti paprastą rašytinę medžiagą arba pasirūpinti vertimo pagalba.",
        "Nereikėtų manyti, kad tėvai ar globėjai pažįsta Lietuvos švietimo sistemą — paaiškinti, kas yra mokyklos psichologinė ir pedagoginė tarnyba, kas yra pagalbos priemonė, ką reiškia vertinimas, nieko nelaikant savaime suprantamu.",
        "Aiškiai atskirti kalbos barjerą nuo akademinių gebėjimų: „jūsų sūnus / jūsų dukra yra gabus(-i) — jis (ji) mokosi kalbos tuo pat metu, kai mokosi turinio, o tai labai reiklu“.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Būti jautriam migracijos kontekstui: pabėgėlių arba neteisėtoje padėtyje esančios šeimos gali nepasitikėti institucijomis. Sukurti pasitikėjimą prieš prašant dokumentų ar nukreipiant į kitas tarnybas.",
      ]},
      { items: [
        "Socialinės izoliacijos ar patyčių požymiai, susiję su užsieniečio mokinio padėtimi.",
        "Kalbos įsisavinimo sąstingis po pirmųjų metų.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Traumos požymiai, susiję su migracijos kontekstu (ypač pabėgėlių atveju).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Nepilnamečių duomenims taikoma sustiprinta apsauga (BDAR 8 straipsnis). Tėvų ar globėjų sutikimas yra privalomas.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Patikrinkite, kur įrankis saugo duomenis – Europos ar ne Europos serveriuose, anonimizuotai ar ne.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Niekada neįveskite pilnų vardų ir pavardžių, adresų, asmens kodų ar klinikinių diagnozių į generatyvinio DI įrankius.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Atskirkite institucinį naudojimą (mokykla pasirašo sutartį) nuo asmeninio mokytojo naudojimo (individuali atsakomybė).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Sistemos, apmokytos daugiausia angliškais duomenimis, gali veikti prasčiau lietuvių kalba ir lietuviškai kalbančiuose kontekstuose.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automatinės rekomendacijos gali sustiprinti lyties, etninės kilmės ar socialinės klasės stereotipus – vertinkite kritiškai.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "„Akademinės rizikos prognozavimo“ modeliai yra ypač problemiški – jie dažnai atkartoja esamą nelygybę, o ne nustato poreikius.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tikslas yra didinti mokinio savarankiškumą, o ne pakeisti kognityvinį darbą, kuris jį ugdo.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Atskirkite <strong>prieigos įrankį</strong> (text-to-speech mokiniui, turinčiam disleksiją) nuo <strong>pakeitimo įrankio</strong> (ChatGPT, rašantis rašinį).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Reguliariai vertinkite: ar mokinys ugdo gebėjimą, ar ugdo priklausomybę nuo įrankio?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Ar įrankis pašalina realią kliūtį, ar sukuria nuorodą, kuri praleidžia mokymąsi?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Ar įvesti duomenys yra apsaugoti ir ar yra gautas sutikimas?",
        "<strong>3.</strong> Ar įrankio rezultatą prieš pateikiant mokiniui patikrins žmogus?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Ar yra ne DI alternatyva, kuri veikia lygiai taip pat gerai?",
        "<strong>5.</strong> Jei įrankis rytoj išnyktų, ar mokinys liktų bejėgis?",
      ]},
    ],
    references: [
      "Europos Sąjunga. (2016). <em>Reglamentas (ES) 2016/679 (Bendrasis duomenų apsaugos reglamentas)</em>, 8 straipsnis. Europos Sąjungos oficialusis leidinys, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Padėti kolegoms atsakingai integruoti DI į užsienio kalbos mokymą, kuriant medžiagą, pritaikomą įvairiems mokymosi profiliams.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tai ne pristatymas – tai bendras kūrimas. Kiekvienas dalyvis išsineša bent vieną parengtą išbandyti išteklių.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Įvadas – nevienalytės klasės problema ir kodėl daugiau to paties neveikia.",
        "<strong>10–25 min:</strong> Profilių žemėlapis – šešių „Farol“ kortelių pristatymas su realiais (anonimintais) atvejais.",
        "<strong>25–45 min:</strong> Praktinė demonstracija – trys įrankiai, trys naudojimo atvejai, trys skirtingi profiliai.",
        "<strong>45–75 min:</strong> Darbas poromis – kiekviena pora pritaiko esamą medžiagą konkrečiam profiliui.",
        "<strong>75–85 min:</strong> Greitas dalijimasis – kiekviena pora per 1 minutę parodo savo rezultatą.",
        "<strong>85–90 min:</strong> Įsipareigojimai – kiekvienas dalyvis pasirenka medžiagą išbandyti ir suplanuojama grįžtamojo ryšio sesija po 30 dienų.",
      ]},
      { items: [
        "Interneto prieiga ir institucinės paskyros demonstruojamuose įrankiuose.",
        "Kiekvieno dalyvio turima medžiaga (užduočių lapas, testas ar pamokos planas).",
        "Atspausdintos „Farol“ profilių kortelės susipažinimui.",
      ]},
      { items: [
        "Kiekvienas dalyvis sesijos metu parengia bent vieną pritaikytą medžiagą.",
        "Grįžtamojo ryšio sesija po 30 dienų, kurioje bent 60 % dalyvių praneša apie veiksmingą įgyvendinimą.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Bent viena sesijos metu parengta medžiaga priimama kaip bendras katedros išteklius.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Lietuvos Respublikos švietimo įstatymas (2011 m. Nr. XI-1281) nustato specialiųjų ugdymosi poreikių (SUP) tenkinimo principus ir mokyklos pareigas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Mokinio specialiųjų ugdymosi poreikių įvertinimo ir specialiosios pagalbos skyrimo tvarkos aprašas (2011) reglamentuoja vertinimo procesą.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Lietuva ratifikavo JT neįgaliųjų teisių konvenciją; įtraukusis ugdymas yra valstybinė politika.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Individualizuotas ugdymas ir diferenciacija yra kiekvieno mokytojo pareiga be jokios specialios dokumentacijos.",
        "Bazinės adaptacijos (papildomas laikas, rašytinės instrukcijos, strateginis sėdimų vietų paskyrimas) nereikalauja oficialaus sprendimo.",
        "Specialioji pedagoginė pagalba (logopedo, specialiojo pedagogo) teikiama pagal poreikį, mokyklos specialistų sprendimu.",
      ]},
      { items: [
        "Pedagoginė psichologinė tarnyba (PPT) atlieka specialiųjų ugdymosi poreikių įvertinimą ir skiria pagalbą.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Individualizuota ugdymosi programa (IUP) sudaroma drauge su PPT, tėvais ir mokytojais; privaloma visiems mokytojams.",
        "Mokyklos psichologas, specialusis pedagogas ir logopedas koordinuoja pagalbą ir teikia metodinę paramą.",
        "Tėvų sutikimas reikalingas IUP; kasmetinis peržiūrėjimas privalomas.",
      ]},
      { items: [
        "nacionalinės gabiųjų ugdymo programos (pvz., Nacionalinė moksleivių akademija) teikia papildomą paramą gabiems mokiniams.",
        "Pagreičio (klasių praleidimo) galimybė egzistuoja pagal įstatymą, tačiau naudojama retai.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Praktikoje gabių mokinių atpažinimas yra nepakankamas, PPT gali atlikti gabumo įvertinimą.",
      ]},
      { items: [
        "Pasirengimo klasės yra skirtos mokiniams, nemokantiems lietuvių kalbos.",
        "Lietuvių kalbos kaip svetimosios mokomasi papildomose pamokose; mokyklos psichologas koordinuoja adaptaciją.",
        "Kalbos barjeras nėra pagrindas specialiajam ugdymui, pirmiau reikia pašalinti kitas priežastis.",
      ]},
      { items: [
        "<strong>Švietimo įstatymas 2011</strong>, SUP ir įtraukiojo ugdymo pagrindas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>PPT</strong>, Pedagoginė psichologinė tarnyba.",
        "<strong>IUP</strong>, individualizuota ugdymosi programa.",
        "<strong>Specialusis pedagogas</strong>, koordinuoja pagalbą mokykloje.",
        "<strong>Pasirengimo klasė</strong>, lietuvių kalbos parama naujai atvykusiems. Duomenų apsauga: visi mokinių duomenys tvarkomi pagal BDAR ir Asmens duomenų teisinės apsaugos įstatymą.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Jungtinių Tautų neįgaliųjų teisių konvencija</em> (JT, 2006), ratifikuota Lietuvos Respublikos (2010 m. įstatymas Nr. XI-854); jos 24 straipsnis įtvirtina teisę į įtraukųjį švietimą.",
      "<em>Lietuvos Respublikos švietimo įstatymas</em> (pradinė redakcija Nr. I-1489, 1991 m.; nauja redakcija – 2011 m. kovo 17 d. įstatymas Nr. XI-1281); nustato švietimo sistemos principus, specialiųjų ugdymosi poreikių (SUP) tenkinimą ir įtraukųjį ugdymą.",
      "<em>Mokinio specialiųjų ugdymosi poreikių (išskyrus atsirandančius dėl išskirtinių gabumų) pedagoginiu, psichologiniu, medicininiu ir socialiniu pedagoginiu aspektais įvertinimo ir specialiojo ugdymosi skyrimo tvarkos aprašas</em> (švietimo ir mokslo ministro 2011 m. įsakymas Nr. V-1795); reglamentuoja SUP vertinimą Pedagoginėje psichologinėje tarnyboje (PPT).",
      "<em>Lietuvos Respublikos asmens duomenų teisinės apsaugos įstatymas</em> (Nr. I-1374, 1996 m.; iš esmės pakeistas 2018 m. įgyvendinant Bendrąjį duomenų apsaugos reglamentą (BDAR), Reglamentą (ES) 2016/679).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagoginė diferenciacija – tai mokymo būdo pritaikymas, o ne lūkesčių mažinimas. Mokymosi tikslas gali būti vienodas visiems; skiriasi tik kelias jo link.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "UDL modelis (Universal Design for Learning, universalusis mokymosi dizainas) siūlo tris principus: įvairias pateikimo priemones (kaip pristatomas turinys), įvairias veiklos ir raiškos priemones (kaip mokinys atsako) ir įvairias įsitraukimo priemones (kas mokinį motyvuoja).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferencijuoti nereiškia kurti atskirą pamokos planą kiekvienam mokiniui – tai reiškia sukurti pakankamai lankstumo, kad ta pati pamoka tiktų skirtingiems profiliams.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Tai nėra</strong> ugdymo turinio mažinimas didesnių sunkumų turintiems mokiniams.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tai nėra</strong> nuolatinis skirtingų užduočių skyrimas skirtingiems mokiniams – tai izoliuoja ir klijuoja etiketes.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tai nėra</strong> vien diferencijuotas darbas popieriuje – diferenciacija apima ir tai, kaip mokytojas aiškina, klausia ir vertina.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kontroliuojamas pasirinkimas: pasiūlyti 2–3 atsakymo formos variantus (rašytinis tekstas, žodinis atsakymas, schematinis piešinys) – visi atsako į tą patį turinį.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Atrama (scaffolding): pateikti struktūruotą gaires didesnių sunkumų turintiems mokiniams; palaipsniui ją šalinti, augant savarankiškumui.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Lankstus grupavimas: grupės pagal interesus, įgūdžių lygį arba mišrios – rotuoti, kad nesusiformuotų pastovios grupės, virstančios tapatybėmis.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Laiko pritaikymas: daugiau laiko nereiškia mažesnio reiklumo. Mokiniams, turintiems ADHD ar dispraksiją, užduotį skaidyti į dalis su numatytomis pertraukėlėmis.",
        "Sudėtingumo lygis: tos pačios temos kurti versijas su didesne ar mažesne kalbine parama, su pavyzdžiais ar be jų, su vaizdinėmis užuominomis ar be jų.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vertinti tai, ką mokinys žino, o ne tai, kaip jis rašo. Disleksiją turintis mokinys konceptualų supratimą gali parodyti žodžiu arba pasitelkdamas technologines priemones.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Aiškūs ir prieš užduotį pateikti vertinimo aprašai (rubrikos) leidžia mokiniui žinoti, ko tikimasi, nepriklausomai nuo pasirinktos formos.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Aplankas (portfolio) arba vertinimas pagal įrodymus leidžia mokiniui parodyti pažangą ilgainiui, o ne tik vienu testo momentu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kai diferenciacijos klasėje nebepakanka, o mokinys vis tiek negali pasiekti ugdymo turinio, tai ženklas, kad gali prireikti specializuotos pagalbos.",
        "Diferenciacija nepakeičia mokyklos paramos priemonių (SPO, terapeutų, specialiojo ugdymo) – tai vyksta įprastoje klasėje kaip jų papildymas.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formuojamasis vertinimas – tai bet kokia praktika, kuria mokymosi proceso metu renkama informacija apie mokymąsi ir ši informacija naudojama mokymui ar mokinio pagalbai pritaikyti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Skirtingai nei apibendrinamasis vertinimas (galutiniai pažymiai), formuojamasis neprivalo turėti pažymio – jis privalo turėti grįžtamąjį ryšį.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Neurologiškai įvairiems mokiniams formuojamasis vertinimas yra ypač svarbus, nes rezultatas vienkartiniame teste gali neatspindėti to, ką jie iš tikrųjų žino.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong> (išėjimo bilietas): pamokos pabaigoje mokinys per 2 minutes atsako į klausimą – mokytojas iškart mato, kas suprato ir kas ne.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Šviesoforas</strong>: žalia (supratau), geltona (turiu abejonių), raudona (nesupratau) – tai gali būti fizinės kortelės, post-its lapeliai arba skaitmeninė priemonė.",
        "<strong>Think-Pair-Share</strong>: mokinys pagalvoja individualiai, aptaria su pora, tada pasidalija su klase – taip mažinamas nerimas dėl tiesioginio atsakymo.",
        "<strong>Išėjimo durys</strong>: prieš išeidamas mokinys pasako mokytojui vieną dalyką, kurį išmoko, ir vieną abejonę, kurią dar turi.",
      ]},
      { items: [
        "Veiksmingas grįžtamasis ryšys yra konkretus, įgyvendinamas ir pateiktas laiku: „2 puslapyje argumentas pasimeta, nes trūksta sąsajos su įrodymais“ yra naudinga; „galėjo būti geriau“ – ne.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Mokiniams, turintiems ADHD: nedelsiamas grįžtamasis ryšys yra veiksmingesnis nei atidėtas. Nereikia laukti užduoties pabaigos.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Mokiniams, turintiems disleksiją: žodinis ar garsinis grįžtamasis ryšys gali būti prieinamesnis nei išsamūs rašytiniai komentarai.",
        "Venkite lyginti mokinius tarpusavyje – lyginkite mokinį su jo paties ankstesne pažanga.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: vertinimas keliais trumpais momentais vietoj vieno ilgo testo. Sumažinkite blaškančius dirgiklius vertinimo aplinkoje.",
        "Disleksija: leiskite atsakyti žodžiu, suteikite papildomo laiko arba leiskite naudoti teksto skaitymo balsu (text-to-speech) priemonę. Vertinkite turinį, o ne rašybą.",
        "Autizmas: vertinimai su aiškiomis ir nedviprasmiškomis rašytinėmis instrukcijomis. Iš anksto įspėkite apie formato pokyčius.",
        "Gabumas: venkite vertinimų, kuriais tik atkuriamas turinys – įtraukite analizės, sintezės ir kūrybos klausimų.",
      ]},
      { items: [
        "Kai mokinys net ir su vertinimo pritaikymais negali parodyti mokymosi, tai ženklas, kad gali būti gilesnis barjeras, kurį reikia ištirti su SPO.",
        "Nuolatiniai (mėnesius, ne dienas) trunkantys specifinių sunkumų tam tikroje srityje modeliai turėtų būti oficialiai signalizuojami.",
      ]},
    ]},
  },


  lv: {
    tdah: { sections: [
      { items: [
        "Grūtības noturēt uzmanību ilgstošos uzdevumos; apjūk norādījumos, kuros ir vairāki soļi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Pastāvīga kustēšanās — nesēž mierā, kustina rokas, pieceļas bez redzama iemesla.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Atbild, pirms jautājums ir beidzies; pārtrauc klasesbiedrus un skolotāju.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Aizmirst piederumus, termiņus un mutiski pirms dažām minūtēm dotus norādījumus — darba atmiņa ir pārslogota.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Var pārmērīgi koncentrēties uz to, kas viņu interesē, radot (maldīgu) iespaidu, ka „spēj, kad grib“; patiesībā sniegums mainās atkarībā no intereses un atlīdzības.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Tā nav</strong> slikta audzināšana, slinkums vai rakstura trūkums: šie maldīgie priekšstati stigmatizē un kavē atbalstu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tā ne vienmēr</strong> ir redzama hiperaktivitāte — pastāv pārsvarā neuzmanīga izpausme, kas biežāka meitenēm un bieži vien tiek nepietiekami diagnosticēta.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>To neatrisina</strong> ar „vairāk pacensties“: grūtības slēpjas neiroloģiskajā paškontrolē, nevis gribasspēkā.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Sadalīt norādījumus: pa vienam, rakstiski uz tāfeles, ar noteiktu laiku — tas samazina slodzi uz darba atmiņu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Atļaut pamatotu kustēšanos (izdalīt piederumus, noslaucīt tāfeli, aiznest ziņu).",
        "Samazināt konkurējošos kairinātājus (vieta tālāk no loga, durvīm, trokšņainākās grupas).",
        "Tūlītējs un biežs pozitīvs pastiprinājums: ADHD gadījumā jutība pret atlīdzību ir izmainīta (gaidīšanas nepatika), tāpēc tūlītējas atlīdzības darbojas labāk nekā atliktas.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Sākt ar to, ko skolēns dara labi — saruna nedrīkst sākties ar sūdzību uzskaitījumu, citādi vecāks (aizbildnis) aizvērsies aizsardzībā.",
        "Aprakstīt novēroto uzvedību, nevis diagnozes: „kad pēc kārtas ir vairāk nekā divi soļi, viņš pazaudē domas pavedienu“, nevis „viņam ir ADHD“.",
        "Paredzēt reakciju „mājās tā nav“ — izskaidrot, ka grupas konteksts un prasība ilgstoši noturēt uzmanību klasē padara simptomus redzamākus.",
        "Ja ierosina izvērtēšanu, piedāvāt to kā resursu, nevis kā sodu: „ir atbalsts, kas viņam (viņai) var ļoti palīdzēt“, nevis „viņš (viņa) ir jāizvērtē“.",
      ]},
      { items: [
        "Pastāvīgi disciplīnas pārkāpumi, neraugoties uz pielāgojumiem klasē.",
        "Vienaudžu sociālas atstumšanas pazīmes.",
        "Komorbiditātes pazīmes (trauksme, depresija, opozicionāri izaicinoša uzvedība) — biežas ADHD gadījumā un kas pamato nosūtīšanu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Lasa lēni un ar piepūli, pieļaujot kļūdas atsevišķu vārdu lasīšanā pat tekstos, kurus labi saprot, kad tos dzird.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Burtu apvēršana (b/d, p/q) ir izplatīta visiem bērniem, kuri sāk rakstīt, un pati par sevi nav disleksijas pazīme; galvenā grūtība ir <strong>fonoloģiska</strong> — saistīt burtus ar skaņām.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Noturīgas pareizrakstības kļūdas, kuras nenovērš atkārtota labošana.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Mēdz izvairīties no lasīšanas skaļi; tas var izskatīties pēc neieinteresētības, lai gan patiesībā tā ir aizsardzības stratēģija.",
        "Klausoties saprot ievērojami labāk nekā lasot — grūtība ir specifiska, nevis vispārējs kognitīvs ierobežojums.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Tas nav</strong> inteliģences trūkums: pēc definīcijas disleksija ir negaidīta salīdzinājumā ar skolēna citām kognitīvajām spējām.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tā nav</strong> redzes problēma, ne arī vienkārša „burtu jaukšana“: galvenais deficīts ir fonoloģiskajā apstrādē.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>To „neizārstē“</strong>, taču strukturēta iejaukšanās fonoloģiskajā apzināšanā un dekodēšanā konsekventi uzlabo lasīšanu.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Palielināt atstarpes starp burtiem un rindām: ir eksperimentāli pierādījumi, ka palielinātas atstarpes uzlabo disleksiju skarto bērnu lasīšanu bez iepriekšējas apmācības.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Turpretī pierādījumi par īpašiem „disleksiķiem paredzētiem“ burtveidoliem ir vājāki un nekonsekventi.",
        "Atļaut klusu lasīšanu pirms jebkādas lasīšanas skaļi — nekad nelūgt lasīt pārsteiguma kārtā.",
        "Ja mērķis nav novērtēt rakstīšanu, novērtēt saturu atsevišķi no pareizrakstības.",
        "Piedāvāt to pašu informāciju vairākos formātos (audio, video, shēmas).",
      ]},
      { items: [
        "Jau sarunas sākumā skaidri nošķirt lasīšanu no inteliģences: „viņš ļoti labi saprot, kad klausās — grūtība ir specifiska lasīšanai“.",
        "Paturēt prātā, ka disleksijai ir spēcīga iedzimtības komponente: vienam no vecākiem var būt nediagnosticēta disleksija, un saruna var atdzīvināt grūtas atmiņas par paša skolas gaitām.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Izvairīties rādīt darba lapas, kas pilnas sarkani izlabotu kļūdu, bez konteksta — vispirms parādīt to, ko skolēns jau spēj izdarīt.",
        "Būt konkrētiem par jau ieviestajiem pielāgojumiem un tiem, kurus aizbildnis var atkārtot mājās: teksti audio formātā, lasīšana skaļi bez laika spiediena.",
      ]},
      { items: [
        "Pasliktinājies akadēmiskais paštēls („esmu muļķis“, „es nespēju“).",
        "Sistemātiska izvairīšanās no lasīšanas/rakstīšanas uzdevumiem tādā mērā, ka tas apdraud citus mācību priekšmetus.",
        "Izteikta neatbilstība starp mutvārdu un rakstisko sniegumu bez formālas diagnozes — nosūtīt uz psihopedagoģisko novērtējumu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Grūtības ar nepieteiktām pārmaiņām – stundu saraksta, telpas vai aizvietojošā skolotāja maiņu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Burtiska saziņa – netver nianses, ironiju, idiomātiskus izteicienus.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensorā jutība – luminiscences gaisma, fona troksnis, apģērba etiķetes var būt nepanesami.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Padziļināta un mērķtiecīga interese par konkrētām tēmām – saistīta ar uz detaļām vērstu kognitīvo stilu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Pārslodzes brīžos var šķist neieinteresēts vai attālināts, taču patiesībā nav atslēdzies.",
      ]},
      { items: [
        "<strong>Tā nav</strong> lineāra skala („vairāk“ vai „mazāk“ autistisks) – tas ir daudzdimensiju profils ar atšķirīgu atbalsta nepieciešamību katrā jomā.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tas nav</strong> empātijas trūkums: savstarpējās saprašanās grūtības ir abpusējas – arī neautistiskiem cilvēkiem ir grūti nolasīt autistiskus cilvēkus (tā sauktā „dubultās empātijas problēma“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tā nav</strong> slikta uzvedība, kad tiek izjaukta ierastā kārtība – tā ir reāla neiroloģiska reakcija uz paredzamības zudumu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Laikus brīdināt par jebkurām ierastās kārtības izmaiņām, pat ja tās šķiet niecīgas – vizuālajam atbalstam un iepriekšējai sagatavošanai ir empīrisks pamatojums.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Pārvērst neizteiktos sociālos noteikumus skaidri formulētos (kas tiek darīts, kas netiek darīts, kad).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Nepieciešamības gadījumā atļaut sensorās pauzes klusā telpā.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Izmantot mērķtiecīgo interesi kā ieejas punktu mācību saturā – tā ir stiprā puse, nevis traucēklis.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Ja diagnoze jau ir noteikta, vispirms jautājiet vecākiem vai aizbildņiem, kas, viņuprāt, darbojas – autistisku bērnu vecāki bieži zina par savu bērnu vairāk nekā jebkurš atzinums.",
        "Ja diagnozes nav, esiet ļoti uzmanīgi: aprakstiet konkrētas situācijas, pirmajā tikšanās reizē nekad nelietojot vārdu „autisms“ – „kad ierastā kārtība mainās bez brīdinājuma, jūsu dēls / jūsu meita kļūst ļoti satraukts/-a tādā veidā, kas pārsniedz parasto“.",
        "Atzīstiet vecāku vai aizbildņu pūles – radīt struktūru un paredzamību mājās ir prasīgi, un tā atzīšana veido sadarbību.",
        "Nekad nesalīdziniet ar „citiem skolēniem“ vai brāļiem un māsām – katrs spektra profils ir atšķirīgs, un salīdzināšana vienmēr ir neproduktīva.",
      ]},
      { items: [
        "Bieži afekta uzliesmojumi („meltdown“) pēc skolas dienas.",
        "Pastāvīga atteikšanās iet uz skolu, kas saistīta ar sensoro pārslodzi.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Pieaugoša sociālā izolācija, neraugoties uz mēģinājumiem to mazināt.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Apgrūtināta, lēna un bieži nesalasāma rakstīšana ar roku – patiesu motorisku grūtību, nevis nevērības dēļ.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Grūtības burtnīcas telpiskajā organizēšanā, mācību materiālu pārvaldīšanā un darbību secībās.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Var šķist “neveikls” – izgāž glāzes, atsitas pret mēbelēm, ar grūtībām piedalās sportā.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nesamērīgs nogurums pēc uzdevumiem, kas prasa noturīgu smalkās motorikas koordināciju.",
        "Kognitīvā joma parasti ir saglabāta – tāpēc bieža neapmierinātība starp to, ko bērns zina, un to, ko spēj parādīt.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Tas nav</strong> slinkums vai centības trūkums.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tas nav</strong> tikai slikts rokraksts: klīniskais termins ir attīstības koordinācijas traucējumi (AKT), un tie skar motorisko plānošanu un secības veidošanu, ne tikai rakstīšanu.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>To neatrisina</strong> ar “vairāk vingrināt rakstīšanu”: efektīva iejaukšanās ir vērsta uz uzdevumu, nevis mehāniska atkārtošana.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Atļaut izmantot tastatūru vai planšetdatoru apjomīgos rakstu darbos.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Samazināt mehānisku norakstīšanu no tāfeles – sniegt pierakstus, kad tas ir nozīmīgi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Nodrošināt skaidrus kontrolsarakstus daudzpakāpju uzdevumiem.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vērtēt darbu pēc satura, nevis pēc fiziskā noformējuma.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Vienkāršā valodā izskaidrot, kas ir dispraksija – vairums vecāku šo terminu nekad nav dzirdējuši: “tās ir neiroloģiskas grūtības kustību koordinācijā, nevis nevērība vai centības trūkums”.",
        "Nesalasāms rokraksts ir lielākais saspīlējuma punkts ar vecākiem – parādot, ka vērtēšanā tagad svarīgākais ir saturs, nevis forma, palīdz mazināt abu pušu trauksmi.",
        "Ieteikt praktiskus rīkus mājām: balss diktēšanu telefonā pierakstiem, tastatūru apjomīgiem rakstu darbiem.",
        "Ja iepriekšējos gados ir skanējis “viņš/viņa ir slinks(-a)” vai “necenšas”, nosaukt to tieši: “es zinu, ka jūs to jau esat dzirdējuši – mans vērtējums ir citāds”.",
      ]},
      { items: [
        "Pilnīga atteikšanās no rakstu darbu veikšanas.",
        "Sociāla izolēšanās fiziskas aktivitātes situācijās.",
        "Somatizētas trauksmes pazīmes pirms rakstu darbu pārbaudēm – psihosociālās ciešanas ir daļa no kopainas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Pabeidz uzdevumus dažās minūtēs, kamēr pārējai klasei tam vajadzīga visa stunda.",
        "Uzdod jautājumus, kas pārsniedz mācību vielas robežas, vai aktīvi apstrīd to, kas tiek mācīts.",
        "Var šķist neieinteresēts, nedisciplinēts vai apātisks – bieži tās ir hroniska garlaicīguma un nepietiekamu sasniegumu pazīmes.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Izteikta emocionālā jutība; var būt nemierīgs vai perfekcionistisks – psihosociālie faktori ir izšķiroši talanta attīstībā.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reāls nepietiekamu sasniegumu risks – var iemācīties slēpt savas spējas, lai sociāli neizceltos.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Tas nav</strong> labas uzvedības vai labu rezultātu sinonīms – daudzi apdāvināti skolēni mācās viduvēji intereses trūkuma dēļ.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Tas nenozīmē</strong> „nav vajadzīga palīdzība“: ir vajadzīgi citādi izaicinājumi, jo spējas pārvēršas sasniegumos tikai tad, kad tās tiek apzināti attīstītas.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Tas nav</strong> nesavienojams ar neirodaudzveidību – dubultā izņēmuma stāvoklis (2e) pastāv, ir biežs un bieži tiek maskēts.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vienmēr sagatavot paplašinājuma uzdevumus – ne vairāk no tā paša, bet dziļāku vai praktiski piemērotu vielu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ļaut patstāvīgi pētīt skolēnu interesējošas tēmas programmas ietvaros.",
        "Vērtēt pēc izaicinājuma, nevis pēc viegluma – lūgt prasīgākus darbus apmaiņā pret mazāku apjomu.",
        "Atzīt un apstiprināt emocionālo jutību, to nepatoloģizējot.",
      ]},
      { items: [
        "Paredzēt lepnumu un to pārvirzīt: „viņš nepārprotami ir ļoti spējīgs – un tieši tāpēc garlaicība rada problēmas“.",
        "Izskaidrot apdāvinātības paradoksu: labi rezultāti nenozīmē, ka viss ir labi, un nepietiekami sasniegumi intereses trūkuma dēļ ir izplatīti un atgriezeniski.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ja skolēns slēpj savas spējas, lai sociāli iekļautos, nosaukt to uzmanīgi – tā ir ciešanu, nevis pieticības pazīme.",
        "Ieteikt vecākiem un aizbildņiem mājās novērtēt procesu, nevis rezultātu: zinātkāre, dziļums un grūti jautājumi ir vērtīgāki par augstām atzīmēm vieglos uzdevumos.",
      ]},
      { items: [
        "Trauksmes vai depresijas pazīmes, kas saistītas ar galēju perfekcionismu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Izteikta sociālā izolācija, ko rada sajūta, ka esi „atšķirīgs“ no vienaudžiem.",
        "Pēkšņa akadēmisko sasniegumu pasliktināšanās skolēnam, kurš iepriekš atzīts par spējīgu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Saprot ievērojami mazāk, nekā šķiet — sarunvaloda attīstās daudz agrāk nekā akadēmiskā valoda, tāpēc skolēns var izklausīties brīvi runājošs, lai gan nespēj sekot līdzi mācību saturam.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Šķietami zemi mācību sasniegumi, kas bieži nav samērojami ar patiesajām spējām.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Klusums stundā — tas var būt normāls „klusuma periods” valodas apguvē, nevis neieinteresētība.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Dienas beigās skolēns var būt izsmelts, jo valodu apstrādā reāllaikā.",
        "Pastāv risks nepamanīt patiesās izglītības vajadzības (disleksiju, ADHD), jo viss tiek attiecināts uz valodas barjeru.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Tas nav</strong> inteliģences vai spēju trūkums.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Tas nav</strong> tikai laika jautājums: akadēmiskā valoda attīstās gadiem ilgi, un bez mērķtiecīga atbalsta daudzi skolēni apstājas zemā funkcionālā līmenī.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>To neatrisina</strong> automātiska tulkošana stundas laikā — tas ir gadiem ilgs process, un dzimtā valoda ir resurss, nevis šķērslis.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Nodrošināt mācību materiālus ar dzimtajā valodā iztulkotu pamatvārdu krājumu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Kad vien iespējams, novērtēt zināšanas ar vizuālu vai praktisku demonstrējumu.",
        "Savienot pārī ar divvalodīgu klasesbiedru neformālai starpniecībai kritiskos brīžos.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Pirmajā posmā pieņemt sākotnējos darbus ar gramatiskām kļūdām — labot saturu, nevis formu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Pati tikšanās ir barjera — vecāki vai aizbildņi var nerunāt latviešu valodā pietiekami labi sarežģītai sarunai. Iepriekš sagatavot vienkāršus rakstiskus materiālus vai lūgt tulkošanas atbalstu.",
        "Nepieņemt, ka vecāki vai aizbildņi pārzina Latvijas izglītības sistēmu — izskaidrot, kas ir skolas psiholoģiskā un pedagoģiskā dienesta funkcija, kas ir atbalsta pasākums, ko nozīmē izvērtējums, neuzskatot neko par pašsaprotamu.",
        "Skaidri nošķirt valodas barjeru no mācīšanās spējām: „jūsu dēls / jūsu meita ir spējīgs(-a) — viņš (viņa) apgūst valodu vienlaikus ar mācību saturu, kas ir ļoti prasīgi”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Būt iejūtīgam pret migrācijas kontekstu: bēgļu vai nelegālā situācijā esošas ģimenes var neuzticēties iestādēm. Veidot uzticēšanos, pirms lūgt dokumentus vai novirzīt pie citiem speciālistiem.",
      ]},
      { items: [
        "Sociālas izolācijas vai vardarbības (mobinga) pazīmes, kas saistītas ar ārvalstu skolēna statusu.",
        "Valodas apguves stagnācija pēc pirmā gada.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Traumas pazīmes, kas saistītas ar migrācijas kontekstu (īpaši bēgļiem).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Nepilngadīgo dati ir pakļauti pastiprinātai aizsardzībai (VDAR 8. pants). Vecāku vai aizbildņu piekrišana ir obligāta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Pārbaudiet, kur rīks glabā datus – Eiropas vai ārpuseiropas serveros, anonimizēti vai ne.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nekad neievadiet pilnus vārdus un uzvārdus, adreses, identifikācijas numurus vai klīniskās diagnozes ģeneratīvā MI rīkos.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Nošķiriet institucionālu lietojumu (skola paraksta līgumu) no skolotāja personīga lietojuma (individuāla atbildība).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Sistēmas, kas apmācītas galvenokārt ar angļu valodas datiem, var darboties sliktāk latviešu valodā un latviski runājošos kontekstos.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automātiskie ieteikumi var pastiprināt dzimuma, etniskās piederības vai sociālās klases stereotipus – izvērtējiet kritiski.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "„Akadēmiskā riska prognozēšanas” modeļi ir īpaši problemātiski – tie bieži atkārto pastāvošo nevienlīdzību, nevis identificē vajadzības.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Mērķis ir palielināt skolēna autonomiju, nevis aizstāt kognitīvo darbu, kas to attīsta.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Nošķiriet <strong>piekļuves rīku</strong> (text-to-speech skolēnam ar disleksiju) no <strong>aizstāšanas rīka</strong> (ChatGPT, kas raksta sacerējumu).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Regulāri izvērtējiet: vai skolēns attīsta prasmi, vai arī attīsta atkarību no rīka?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Vai rīks novērš reālu šķērsli, vai arī rada saīsni, kas izlaiž mācīšanos?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Vai ievadītie dati ir aizsargāti un vai ir saņemta piekrišana?",
        "<strong>3.</strong> Vai rīka rezultātu pirms nonākšanas pie skolēna pārbaudīs cilvēks?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Vai pastāv alternatīva bez MI, kas darbojas tikpat labi?",
        "<strong>5.</strong> Ja rīks rīt pārstātu pastāvēt, vai skolēns paliktu bezpalīdzīgs?",
      ]},
    ],
    references: [
      "Eiropas Savienība. (2016). <em>Regula (ES) 2016/679 (Vispārīgā datu aizsardzības regula)</em>, 8. pants. Eiropas Savienības Oficiālais Vēstnesis, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Sniegt kolēģiem prasmes atbildīgi integrēt MI svešvalodas mācīšanā, veidojot materiālus, kas pielāgojami dažādiem mācīšanās profiliem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tā nav prezentācija – tā ir kopīga veidošana. Katrs dalībnieks aiziet ar vismaz vienu gatavu resursu, ko izmēģināt.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Ievads – neviendabīgas klases problēma un kāpēc vairāk tā paša nedarbojas.",
        "<strong>10–25 min:</strong> Profilu karte – sešu „Farol” kartīšu prezentācija ar reāliem (anonimizētiem) gadījumiem.",
        "<strong>25–45 min:</strong> Praktiska demonstrācija – trīs rīki, trīs lietojuma gadījumi, trīs atšķirīgi profili.",
        "<strong>45–75 min:</strong> Darbs pāros – katrs pāris pielāgo esošu materiālu konkrētam profilam.",
        "<strong>75–85 min:</strong> Ātra dalīšanās – katrs pāris 1 minūtē parāda savu rezultātu.",
        "<strong>85–90 min:</strong> Apņemšanās – katrs dalībnieks nosaka materiālu, ko izmēģināt, un tiek ieplānota atgriezeniskās saites sesija pēc 30 dienām.",
      ]},
      { items: [
        "Interneta piekļuve un institucionālie konti demonstrētajos rīkos.",
        "Katra dalībnieka esošie materiāli (darba lapa, tests vai stundas plāns).",
        "Izdrukātas „Farol” profilu kartītes uzziņai.",
      ]},
      { items: [
        "Katrs dalībnieks sesijas laikā izveido vismaz vienu pielāgotu materiālu.",
        "Atgriezeniskās saites sesija pēc 30 dienām, kurā vismaz 60 % dalībnieku ziņo par efektīvu ieviešanu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vismaz viens sesijā izveidotais materiāls tiek pieņemts kā kopīgs katedras resurss.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Izglītības likums (1998, grozījumi 2022) nosaka izglītības pieejamību visiem bērniem neatkarīgi no spējām.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Vispārējās izglītības likums (1999) regulē atbalstu skolēniem ar speciālām vajadzībām.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Ministru kabineta noteikumi Nr. 556 (2019) nosaka iekļaujošās izglītības principus valsts skolās.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Individuāla pieeja mācību procesā ir katra skolotāja kompetencē — pielāgoti materiāli, skaidrākas instrukcijas un papildu laiks neprasa formālu atzinumu.",
        "Atbalsta pasākumus ikdienas mācībās un valsts pārbaudes darbos (piemēram, pagarinātu laiku) skola var piešķirt, pamatojoties uz skolas atbalsta komandas lēmumu.",
        "Skolas atbalsta komanda (psihologs, logopēds, speciālais pedagogs) ir pirmais solis, pirms tiek piesaistīta valsts komisija.",
      ]},
      { items: [
        "VPMC (Valsts pedagoģiski medicīniskā komisija) veic skolēnu novērtēšanu un piešķir speciālās izglītības statusu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "RPMC (rajona pedagoģiski medicīniskā komisija) koordinē atbalstu vietējā līmenī.",
        "Skolas psihologs (PPK, pedagoģiski psiholoģiskais centrs) nodrošina psiholoģisko atbalstu.",
        "IIP (individuālais izglītības plāns), dokuments, kas nosaka mācīšanās mērķus, adaptācijas un atbalsta pasākumus.",
        "Atbalsta skolotājs (speciālais pedagogs) strādā ar skolēniem, kuriem ir speciālas vajadzības.",
        "Logopēds, sociālais pedagogs un psihologs var būt daļa no atbalsta komandas.",
        "Resursu centrs nodrošina metodisko atbalstu un papildu resursus.",
      ]},
      { items: [
        "Latvijā nav atsevišķa likuma par apdāvinātiem skolēniem — atbalsts balstās Izglītības likuma principā par izglītību atbilstoši katra spējām.",
        "Valsts mācību priekšmetu olimpiādes, interešu izglītība un skolēnu zinātniskās pētniecības darbi ir galvenie institucionalizētie talantu attīstības ceļi.",
        "Skola var piemērot individuālu pieeju un paātrinātu mācību apguvi, taču vienotas valsts programmas apdāvinātajiem pašlaik nav.",
      ]},
      { items: [
        "Latviešu valoda kā otrā valoda (LV2) ir paredzēta skolēniem, kuru dzimtā valoda nav latviešu.",
        "Divvalodīgā izglītība ir pieejama dažās skolās mazākumtautību kopienām.",
        "Integrācijas atbalsts ir pieejams jaunatbraukušajiem skolēniem caur pašvaldību dienestiem.",
      ]},
      { items: [
        "Latvija ir ratificējusi ANO Konvenciju par personu ar invaliditāti tiesībām (CRPD).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "ES direktīvas par iekļaujošo izglītību tiek ieviestas ar nacionālo tiesību aktiem.",
        "Tiesībsargs ir tiesīgs izskatīt sūdzības par diskrimināciju izglītībā.",
        "Vecākiem/aizbildņiem ir tiesības piedalīties IIP izstrādē un pārskatīšanā.",
        "Skolēns, sasniedzot 15 gadus, ir tiesīgs paust savu viedokli izglītības lēmumos.",
        "Sūdzības par atbalsta nodrošināšanu var iesniegt pašvaldībai vai Izglītības un zinātnes ministrijai. Datu aizsardzība: visi skolēnu dati tiek apstrādāti saskaņā ar VDAR un Fizisko personu datu apstrādes likumu.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>ANO Konvencija par personu ar invaliditāti tiesībām</em> (ANO, 2006), ratificēta Latvijā (2010); tās 24. pants nosaka tiesības uz iekļaujošu izglītību.",
      "<em>Izglītības likums</em> (pieņemts Saeimā 1998. gada 29. oktobrī, ar grozījumiem); nosaka izglītības pieejamību visiem bērniem neatkarīgi no spējām un veselības stāvokļa.",
      "<em>Vispārējās izglītības likums</em> (1999) un agrākais Speciālās izglītības regulējums; nosaka atbalstu skolēniem ar speciālām vajadzībām un speciālās izglītības programmu īstenošanu.",
      "<em>Ministru kabineta 2019. gada 19. novembra noteikumi Nr. 556</em> „Prasības vispārējās izglītības iestādēm, lai to īstenotajās izglītības programmās uzņemtu izglītojamos ar speciālām vajadzībām”; nosaka iekļaujošās izglītības principus valsts skolās.",
      "<em>Fizisko personu datu apstrādes likums</em> (2018), kas piemēro Eiropas Savienības Vispārīgo datu aizsardzības regulu (VDAR / Regula (ES) 2016/679).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagoģiskā diferenciācija ir veida pielāgošana, kā māca, nevis prasību pazemināšana. Mācīšanās mērķis var būt vienāds visiem; atšķiras tikai ceļš uz to.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "UDL modelis (Universal Design for Learning, universālais mācīšanās dizains) piedāvā trīs principus: daudzveidīgus reprezentācijas līdzekļus (kā tiek pasniegts saturs), daudzveidīgus darbības un izpausmes līdzekļus (kā skolēns atbild) un daudzveidīgus iesaistes līdzekļus (kas skolēnu motivē).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferencēt nenozīmē veidot atsevišķu stundas plānu katram skolēnam – tas nozīmē radīt pietiekamu elastību, lai tā pati stunda derētu dažādiem profiliem.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Tā nav</strong> mācību satura samazināšana skolēniem ar lielākām grūtībām.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tā nav</strong> pastāvīga atšķirīgu uzdevumu došana dažādiem skolēniem – tas izolē un piešķir etiķetes.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Tā nav</strong> tikai diferencēts darbs uz papīra – diferenciācija ietver arī to, kā skolotājs skaidro, jautā un vērtē.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kontrolēta izvēle: piedāvāt 2–3 atbildes formas variantus (rakstīts teksts, mutiska atbilde, shematisks zīmējums) – visi atbild uz vienu un to pašu saturu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Atbalsts (scaffolding): nodrošināt strukturētu vadlīniju skolēniem ar lielākām grūtībām; pakāpeniski to noņemt, pieaugot patstāvībai.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Elastīga grupēšana: grupas pēc interesēm, prasmju līmeņa vai jauktas – rotēt, lai izvairītos no nemainīgām grupām, kas kļūst par identitātēm.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Laika pielāgojumi: vairāk laika nenozīmē mazāku prasīgumu. Skolēniem ar UDHS vai dispraksiju uzdevumu sadalīt posmos ar ieplānotām pauzēm.",
        "Sarežģītības līmenis: vienai un tai pašai tēmai veidot versijas ar lielāku vai mazāku valodas atbalstu, ar piemēriem vai bez tiem, ar vizuālām norādēm vai bez tām.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vērtēt to, ko skolēns zina, nevis to, kā viņš raksta. Skolēns ar disleksiju konceptuālo izpratni var parādīt mutiski vai ar tehnoloģisku atbalstu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Skaidri un pirms uzdevuma kopīgoti vērtēšanas kritēriji (rubrikas) ļauj skolēnam zināt, kas tiek gaidīts, neatkarīgi no izvēlētās formas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfolio jeb uz pierādījumiem balstīta vērtēšana ļauj skolēnam parādīt progresu laika gaitā, nevis tikai vienā pārbaudes brīdī.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kad diferenciācija klasē vairs nav pietiekama un skolēns joprojām nevar piekļūt mācību saturam, tā ir pazīme, ka var būt nepieciešams specializēts atbalsts.",
        "Diferenciācija neaizstāj skolas atbalsta pasākumus (SPO, terapeitus, speciālo izglītību) – tā ir tas, kas notiek parastajā klasē kā papildinājums.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatīvā vērtēšana ir jebkura prakse, kas mācīšanās procesa laikā vāc informāciju par mācīšanos un izmanto šo informāciju, lai pielāgotu mācīšanu vai atbalstu skolēnam.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Atšķirībā no summatīvās vērtēšanas (gala atzīmes) formatīvajai vērtēšanai nav obligāti jābūt atzīmei – tai ir jābūt atgriezeniskajai saitei.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Neirodaudzveidīgiem skolēniem formatīvā vērtēšana ir īpaši svarīga, jo sniegums vienreizējā pārbaudes darbā var neatspoguļot to, ko viņi patiesībā zina.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong> (izejas biļete): stundas beigās skolēns 2 minūtēs atbild uz jautājumu – skolotājs uzreiz redz, kurš ir sapratis un kurš nav.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Luksofors</strong>: zaļš (sapratu), dzeltens (man ir šaubas), sarkans (nesapratu) – tās var būt fiziskas kartītes, post-it lapiņas vai digitāls risinājums.",
        "<strong>Think-Pair-Share</strong>: skolēns padomā individuāli, apspriež ar pāri, pēc tam dalās ar klasi – tas mazina trauksmi par tiešu atbildi.",
        "<strong>Izejas durvis</strong>: pirms iziešanas skolēns pasaka skolotājam vienu lietu, ko ir iemācījies, un vienu jautājumu, kas viņam vēl ir.",
      ]},
      { items: [
        "Efektīva atgriezeniskā saite ir konkrēta, izpildāma un sniegta laikus: „2. lappusē arguments tiek pazaudēts, jo trūkst saiknes ar pierādījumiem” ir noderīgi; „varēja būt labāk” nav.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Skolēniem ar UDHS: tūlītēja atgriezeniskā saite ir efektīvāka nekā atliktā. Nevajag gaidīt uzdevuma beigas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Skolēniem ar disleksiju: mutiska vai audio atgriezeniskā saite var būt pieejamāka nekā plaši rakstiski komentāri.",
        "Izvairieties salīdzināt skolēnus savā starpā – salīdziniet skolēnu ar viņa paša iepriekšējo progresu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "UDHS: vērtēšana vairākos īsos brīžos viena gara pārbaudes darba vietā. Samaziniet uzmanību novēršošos stimulus vērtēšanas vidē.",
        "Disleksija: atļaujiet mutiskas atbildes, papildu laiku vai teksta pārvēršanas runā (text-to-speech) izmantošanu. Vērtējiet saturu, nevis pareizrakstību.",
        "Autisms: vērtējumi ar skaidrām un nepārprotamām rakstiskām instrukcijām. Brīdiniet iepriekš par formāta izmaiņām.",
        "Apdāvinātība: izvairieties no vērtējumiem, kas paredz tikai satura atkārtošanu – iekļaujiet analīzes, sintēzes un radīšanas jautājumus.",
      ]},
      { items: [
        "Kad skolēns pat ar vērtēšanas pielāgojumiem nespēj parādīt mācīšanos, tā ir pazīme, ka var pastāvēt dziļāks šķērslis, kas jāizpēta kopā ar SPO.",
        "Noturīgi (mēnešus, nevis dienas ilgi) specifisku grūtību modeļi kādā jomā ir formāli jāsignalizē.",
      ]},
    ]},
  },
  et: {
    tdah: { sections: [
      { items: [
        "Raskused tähelepanu hoidmisel pikkades ülesannetes; läheb mitmeastmelistes juhistes sassi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Pidev liikumine — ei püsi paigal, näppib käsi, tõuseb nähtava põhjuseta püsti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Vastab enne, kui küsimus on lõppenud; segab vahele kaaslastele ja õpetajale.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Unustab vahendid, tähtajad ja mõni minut tagasi suuliselt antud juhised — töömälu on ülekoormatud.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Võib hüperkeskenduda sellele, mis teda huvitab, jättes (eksliku) mulje, et „suudab, kui tahab“; tegelikult sõltub sooritus huvist ja tasust.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>See ei ole</strong> halb kasvatus, laiskus ega iseloomupuudus: need väärarusaamad häbimärgistavad ja lükkavad abi edasi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>See ei ole</strong> alati nähtav hüperaktiivsus — esineb valdavalt tähelepanematu avaldumisvorm, mis on sagedasem tüdrukutel ja sageli aladiagnoositud.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>See ei lahene</strong> „rohkem pingutamisega“: raskus peitub neuroloogilises eneseregulatsioonis, mitte tahtes.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Tükelda juhised: üks korraga, kirjalikult tahvlile, kindla ajaga — see vähendab töömälu koormust.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Luba põhjendatud liikumist (jaga vahendeid, pühi tahvlit, vii sõnumeid).",
        "Vähenda konkureerivaid ärritajaid (koht eemal aknast, uksest, kõige lärmakamast rühmast).",
        "Vahetu ja sage positiivne kinnitus: ATH puhul on tasutundlikkus muutunud (ootamise vastumeelsus), mistõttu vahetud tasud toimivad paremini kui edasilükatud.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Alusta sellest, mida õpilane teeb hästi — kohtumine ei tohi alata kaebuste loeteluga, muidu tõmbub lapsevanem (hooldaja) kaitsvalt endasse.",
        "Kirjelda täheldatud käitumist, mitte diagnoose: „kui järjest on rohkem kui kaks sammu, kaotab ta järje“, mitte „tal on ATH“.",
        "Näe ette reaktsioon „kodus see nii ei ole“ — selgita, et rühmakontekst ja klassis nõutav pikaajaline tähelepanu muudavad sümptomid nähtavamaks.",
        "Kui soovitad hindamist, esita see ressursina, mitte karistusena: „on olemas tugi, mis võib teda väga aidata“, mitte „teda tuleb hinnata“.",
      ]},
      { items: [
        "Püsivad distsipliinirikkumised vaatamata klassis tehtud kohandustele.",
        "Eakaaslaste poolse sotsiaalse tõrjutuse märgid.",
        "Kaasuvate häirete (ärevus, depressioon, trotslik käitumishäire) märgid — sagedased ATH puhul ja õigustavad suunamist.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Loeb aeglaselt ja pingutusega, tehes vigu üksikute sõnade lugemisel isegi tekstides, mida ta kuuldes hästi mõistab.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Tähtede ümberpööramine (b/d, p/q) on tavaline kõigil kirjutamist alustavatel lastel ega ole iseenesest düsleksia tunnus; keskne raskus on <strong>fonoloogiline</strong> — tähtede sidumine häälikutega.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Püsivad õigekirjavead, mis ei kao korduva parandamise tulemusel.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kaldub vältima valjusti lugemist; see võib näida huvipuudusena, kuigi tegelikult on tegemist kaitsestrateegiaga.",
        "Kuuldes mõistab selgelt paremini kui lugedes — raskus on spetsiifiline, mitte üldine kognitiivne piirang.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>See ei ole</strong> intelligentsuse puudumine: düsleksia on määratluse järgi ootamatu õpilase teiste kognitiivsete võimetega võrreldes.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>See ei ole</strong> nägemisprobleem ega lihtne „tähtede segiajamine“: keskne puudujääk on fonoloogilises töötluses.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Seda ei „ravita“</strong>, kuid struktureeritud sekkumine fonoloogilisse teadlikkusse ja dekodeerimisse parandab lugemist järjepidevalt.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Suurendada tähtede- ja reavahesid: on olemas eksperimentaalsed tõendid, et laiendatud vahed parandavad düsleksiaga laste lugemist ilma eelneva harjutamiseta.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Seevastu tõendid spetsiaalsete „düsleksikutele mõeldud“ kirjatüüpide kohta on nõrgemad ja ebajärjekindlad.",
        "Lubada vaikset lugemist enne mis tahes valjusti lugemist — mitte kunagi paluda üllatuslugemist.",
        "Kui eesmärk ei ole kirjutamise hindamine, hinnata sisu õigekirjast eraldi.",
        "Pakkuda sama teavet mitmes vormingus (heli, video, skeemid).",
      ]},
      { items: [
        "Eristada juba vestluse alguses selgelt lugemist intelligentsusest: „ta mõistab kuuldes väga hästi — raskus on spetsiifiline lugemisele“.",
        "Pidada meeles, et düsleksial on tugev pärilik komponent: ühel vanematest võib olla diagnoosimata düsleksia ja vestlus võib taaselustada raskeid mälestusi tema enda kooliajast.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Vältida punaste parandustega täidetud töölehtede näitamist ilma kontekstita — esitada esmalt see, mida õpilane juba oskab teha.",
        "Olla konkreetne juba kasutusel olevate kohanduste ja nende osas, mida hooldaja saab kodus korrata: helitekstid, valjusti lugemine ilma ajasurveta.",
      ]},
      { items: [
        "Halvenev akadeemiline minapilt („ma olen rumal“, „ma ei suuda“).",
        "Lugemis-/kirjutamisülesannete süstemaatiline vältimine sel määral, et see kahjustab teisi õppeaineid.",
        "Märgatav lahknevus suulise ja kirjaliku soorituse vahel ilma formaalse diagnoosita — suunata psühhopedagoogilisele hindamisele.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Raskused etteteatamata muudatustega – tunniplaani, ruumi või asendusõpetaja vahetumisega.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Sõnasõnaline suhtlemine – jäävad märkamata nüansid, iroonia, kõnekäänud.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensoorne tundlikkus – luminofoorvalgus, taustamüra, riietesildid võivad olla talumatud.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Keskendunud ja sügav huvi kindlate teemade vastu – seostatav detailikeskse kognitiivse stiiliga.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Ülekoormatuna võib näida huvitu või eemalolev, kuid pole tegelikult välja lülitunud.",
      ]},
      { items: [
        "<strong>See ei ole</strong> lineaarne skaala („rohkem“ või „vähem“ autistlik) – see on mitmemõõtmeline profiil, kus toetusvajadus on igas valdkonnas erinev.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>See ei ole</strong> empaatia puudumine: vastastikuse mõistmise raskused on kahesuunalised – ka mitteautistlikel inimestel on raske autistlikke inimesi mõista (nn „kahekordse empaatia probleem“).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>See ei ole</strong> halb käitumine, kui rutiin katkeb – see on tõeline neuroloogiline reaktsioon ennustatavuse kadumisele.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Hoiatada aegsasti igast rutiini muudatusest, isegi kui see näib tühine – visuaalsel toel ja ettevalmistamisel on empiiriline põhjendus.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Muuta kaudsed sotsiaalsed reeglid selgesõnalisteks (mida tehakse, mida ei tehta, millal).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Lubada vajaduse korral sensoorseid pause vaikses ruumis.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Kasutada keskendunud huvi sisenemispunktina õppesisusse – see on tugevus, mitte segaja.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Kui diagnoos on juba olemas, küsige kõigepealt vanematelt või hooldajalt, mis nende kogemusel toimib – autistlike laste vanemad teavad oma lapse kohta sageli rohkem kui ükski aruanne.",
        "Kui diagnoosi pole, olge väga ettevaatlik: kirjeldage konkreetseid olukordi, kasutamata esimesel kohtumisel kunagi sõna „autism“ – „kui rutiin muutub ilma hoiatuseta, läheb teie poeg / teie tütar väga endast välja viisil, mis ületab tavapärase“.",
        "Tunnustage vanema või hooldaja pingutust – struktuuri ja ennustatavuse loomine kodus on nõudlik ning selle tunnustamine loob koostöösuhte.",
        "Ärge kunagi võrrelge „teiste õpilastega“ ega õdede-vendadega – iga spektri profiil on erinev ja võrdlemine on alati kahjulik.",
      ]},
      { items: [
        "Sagedased hood („meltdown“) pärast koolipäeva.",
        "Püsiv koolist keeldumine, mis on seotud sensoorse ülekoormusega.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Süvenev sotsiaalne isoleerumine vaatamata vahendamiskatsetele.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Raske, aeglane ja sageli loetamatu käsitsi kirjutamine – tegelike motoorsete raskuste, mitte hooletuse tõttu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Raskused vihiku ruumilisel korraldamisel, õppevahendite haldamisel ja tegevuste järjestamisel.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Võib tunduda „kohmakas“ – ajab klaase ümber, põrkab vastu mööblit, tal on spordis raskusi.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ebaproportsionaalne väsimus pärast ülesandeid, mis nõuavad püsivat peenmotoorset koordinatsiooni.",
        "Kognitiivne pool on tavaliselt säilinud – sellest ka sage frustratsioon teadmise ja näitamisoskuse vahel.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>See ei ole</strong> laiskus ega pingutuse puudumine.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>See ei ole</strong> ainult halb käekiri: kliiniline termin on arenguline koordinatsioonihäire (AKH) ja see mõjutab motoorset planeerimist ja järjestamist, mitte ainult kirjutamist.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Seda ei lahenda</strong> „kirjutamise rohkem harjutamine“: tõhus sekkumine on ülesandele suunatud, mitte mehaaniline kordamine.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Lubada klaviatuuri või tahvelarvuti kasutamist mahukate kirjalike tööde puhul.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Vähendada mehaanilist tahvlilt ärakirjutamist – anda märkmed, kui see on asjakohane.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pakkuda selgeid kontroll-loendeid mitmeetapiliste ülesannete jaoks.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Hinnata tööd sisu, mitte füüsilise esituse järgi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Selgitada lihtsas keeles, mis on düspraksia – enamik vanemaid pole seda terminit kunagi kuulnud: „see on neuroloogiline raskus liigutuste koordineerimisel, mitte hooletus ega pingutuse puudumine“.",
        "Loetamatu käekiri on suurim hõõrdepunkt vanematega – näidata, et hindamine väärtustab nüüd sisu, mitte vormi, aitab leevendada mõlema poole ärevust.",
        "Soovitada praktilisi vahendeid koju: häälega dikteerimist telefonis märkmete jaoks, klaviatuuri mahukate kirjalike tööde jaoks.",
        "Kui varasematel aastatel on kõlanud „ta on laisk“ või „ta ei pinguta“, nimetada seda otse: „ma tean, et olete seda varem kuulnud – minu tõlgendus on teistsugune“.",
      ]},
      { items: [
        "Täielik kirjalike tööde tegemisest keeldumine.",
        "Sotsiaalne eraldumine kehalise tegevuse olukordades.",
        "Somatiseeritud ärevuse märgid enne kirjalikke hindamisi – psühhosotsiaalne kannatus on osa tervikpildist.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Lõpetab ülesanded mõne minutiga, samal ajal kui kogu klassil kulub selleks terve tund.",
        "Esitab küsimusi, mis väljuvad õppeaine raamidest, või vaidlustab aktiivselt seda, mida õpetatakse.",
        "Võib näida huvitu, distsiplineerimatu või apaatne – sageli on need kroonilise igavuse ja alasoorituse märgid.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tugev emotsionaalne tundlikkus; võib olla ärev või perfektsionistlik – psühhosotsiaalsed tegurid on andekuse arengus määravad.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Reaalne alasoorituse oht – laps võib õppida oma võimeid varjama, et sotsiaalselt mitte silma paista.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>See ei ole</strong> hea käitumise ega heade tulemuste sünonüüm – paljud andekad õpilased sooritavad keskpäraselt huvipuuduse tõttu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>See ei tähenda</strong> „abi pole vaja“: vaja on teistsuguseid väljakutseid, sest võime muutub saavutuseks alles siis, kui seda teadlikult arendatakse.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>See ei ole</strong> vastuolus neuroerisusega – kahekordne erilisus (2e) on olemas, sageli esinev ja sageli varjatud.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Hoida alati valmis süvendavaid ülesandeid – mitte rohkem sama, vaid sügavamat või rakenduslikku ainet.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Lubada iseseisvat uurimist õpilast huvitavatel teemadel õppekava piires.",
        "Hinnata väljakutse, mitte lihtsuse järgi – paluda nõudlikumaid töid väiksema mahu eest.",
        "Tunnustada ja kinnitada emotsionaalset tundlikkust, seda patologiseerimata.",
      ]},
      { items: [
        "Ennetada uhkust ja suunata see ümber: „ta on selgelt väga võimekas – ja just seetõttu tekitab igavus probleeme“.",
        "Selgitada andekuse paradoksi: head tulemused ei tähenda, et kõik on hästi, ning huvipuudusest tingitud alasooritus on tavaline ja pöörduv.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Kui õpilane varjab oma võimeid, et sotsiaalselt sobituda, nimetada seda ettevaatlikult – see on kannatuse, mitte tagasihoidlikkuse märk.",
        "Soovitada vanematel ja hooldajatel väärtustada kodus protsessi, mitte tulemust: uudishimu, sügavus ja rasked küsimused on väärtuslikumad kui kõrged hinded lihtsate ülesannete eest.",
      ]},
      { items: [
        "Ärevuse või depressiooni märgid, mis on seotud äärmusliku perfektsionismiga.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Väljendunud sotsiaalne isolatsioon, mis tuleneb tundest, et ollakse eakaaslastest „erinev“.",
        "Äkiline akadeemilise soorituse langus õpilasel, keda varem peeti võimekaks.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Mõistab tunduvalt vähem, kui paistab — kõnekeel areneb ammu enne akadeemilist keelt, mistõttu õpilane võib tunduda soravalt rääkivat, kuigi ei suuda õppesisul järge pidada.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Näiliselt madalad õpitulemused, mis sageli ei vasta tegelikele võimetele.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Vaikimine tunnis — see võib olla tavapärane keeleomandamise „vaikiv periood”, mitte huvipuudus.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Päeva lõpuks võib õpilane olla kurnatud, sest töötleb keelt reaalajas.",
        "Oht jätta tegelikud hariduslikud erivajadused (düsleksia, ATH) märkamata, kuna kõik omistatakse keelebarjäärile.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>See ei ole</strong> intelligentsuse ega võimete puudumine.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>See ei ole</strong> üksnes aja küsimus: akadeemiline keel areneb aastaid ning ilma sihipärase toeta jäävad paljud õpilased pidama madalale funktsionaalsele tasemele.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Seda ei lahenda</strong> automaattõlge tunni ajal — see on aastatepikkune protsess ning emakeel on ressurss, mitte takistus.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Pakkuda õppematerjale, mille võtmesõnavara on emakeelde tõlgitud.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Hinnata teadmisi võimaluse korral visuaalse või praktilise esitluse kaudu.",
        "Siduda õpilane kakskeelse klassikaaslasega, et kriitilistel hetkedel toimuks mitteametlik vahendamine.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Võtta esimeses etapis vastu grammatiliste vigadega esmased tööd — parandada sisu, mitte vormi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Kohtumine ise on barjäär — vanem või hooldaja ei pruugi osata eesti keelt piisavalt hästi keeruka vestluse jaoks. Valmistada eelnevalt ette lihtsad kirjalikud materjalid või paluda tõlkeabi.",
        "Mitte eeldada, et vanem või hooldaja tunneb Eesti haridussüsteemi — selgitada, mis on kooli psühholoogilis-pedagoogiline tugiteenistus, mis on tugimeede ja mida tähendab hindamine, pidamata midagi iseenesestmõistetavaks.",
        "Eristada selgelt keelebarjääri ja õppimisvõimet: „teie poeg / teie tütar on võimekas — ta õpib keelt samal ajal kui õppesisu, mis on väga nõudlik”.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Olla tundlik rändekonteksti suhtes: pagulasperedel või ebaseaduslikus olukorras peredel võib olla usaldamatus asutuste vastu. Luua usaldus enne dokumentide küsimist või edasisuunamist.",
      ]},
      { items: [
        "Sotsiaalse isolatsiooni või kiusamise märgid, mis on seotud välismaalasest õpilase staatusega.",
        "Keeleomandamise seiskumine pärast esimest aastat.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Rändekontekstiga seotud trauma märgid (eriti pagulastel).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Alaealiste andmetele kohaldatakse tugevdatud kaitset (isikuandmete kaitse üldmääruse artikkel 8). Vanemate või hooldajate nõusolek on kohustuslik.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kontrollige, kus tööriist andmeid säilitab – Euroopa või väljaspool Euroopat asuvates serverites, anonüümitult või mitte.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ärge kunagi sisestage generatiivse tehisintellekti tööriistadesse täisnimesid, aadresse, isikukoode ega kliinilisi diagnoose.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Eristage institutsioonilist kasutust (kool sõlmib lepingu) õpetaja isiklikust kasutusest (individuaalne vastutus).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Peamiselt ingliskeelsete andmetega treenitud süsteemid võivad eesti keeles ja eestikeelsetes kontekstides toimida halvemini.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Automaatsed soovitused võivad võimendada soolisi, etnilisi või klassilisi stereotüüpe – hinnake kriitiliselt.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "„Akadeemilise riski prognoosimise” mudelid on eriti problemaatilised – need taastoodavad sageli olemasolevat ebavõrdsust, selle asemel et tuvastada vajadusi.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Eesmärk on suurendada õpilase iseseisvust, mitte asendada kognitiivset tööd, mis seda arendab.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Eristage <strong>juurdepääsuvahendit</strong> (text-to-speech düsleksiaga õpilasele) <strong>asendusvahendist</strong> (ChatGPT, mis kirjutab kirjandi).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Hinnake regulaarselt: kas õpilane arendab oskust või arendab sõltuvust tööriistast?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Kas tööriist kõrvaldab tegeliku takistuse või loob otsetee, mis jätab õppimise vahele?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Kas sisestatud andmed on kaitstud ja kas nõusolek on olemas?",
        "<strong>3.</strong> Kas inimene kontrollib tööriista tulemust enne, kui see jõuab õpilaseni?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Kas on olemas tehisintellektita alternatiiv, mis toimib sama hästi?",
        "<strong>5.</strong> Kui tööriist homme kaoks, kas õpilane jääks abituks?",
      ]},
    ],
    references: [
      "Euroopa Liit. (2016). <em>Määrus (EL) 2016/679 (isikuandmete kaitse üldmäärus)</em>, artikkel 8. Euroopa Liidu Teataja, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Anda kolleegidele oskused tehisintellekti vastutustundlikuks lõimimiseks võõrkeeleõppesse, luues materjale, mida saab kohandada erinevatele õppimisprofiilidele.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "See ei ole esitlus – see on ühisloome. Iga osaleja lahkub vähemalt ühe valmis ressursiga, mida proovida.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Sissejuhatus – heterogeense klassi probleem ja miks sama asja rohkem ei toimi.",
        "<strong>10–25 min:</strong> Profiilide kaart – „Faroli” kuue kaardi tutvustus koos reaalsete (anonüümitud) juhtumitega.",
        "<strong>25–45 min:</strong> Praktiline demonstratsioon – kolm tööriista, kolm kasutusjuhtu, kolm erinevat profiili.",
        "<strong>45–75 min:</strong> Paaristöö – iga paar kohandab olemasoleva materjali konkreetsele profiilile.",
        "<strong>75–85 min:</strong> Kiire jagamine – iga paar näitab oma tulemust 1 minutiga.",
        "<strong>85–90 min:</strong> Kokkulepped – iga osaleja valib materjali, mida proovida, ja planeeritakse tagasisidesessioon 30 päeva pärast.",
      ]},
      { items: [
        "Internetiühendus ja asutuse kontod tutvustatavates tööriistades.",
        "Iga osaleja olemasolevad materjalid (tööleht, test või tunnikava).",
        "Väljatrükitud „Faroli” profiilikaardid tutvumiseks.",
      ]},
      { items: [
        "Iga osaleja loob sessiooni jooksul vähemalt ühe kohandatud materjali.",
        "Tagasisidesessioon 30 päeva pärast, kus vähemalt 60 % osalejatest teatab tõhusast rakendamisest.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vähemalt üks sessioonil loodud materjal võetakse kasutusele osakonna ühise ressursina.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Põhikooli- ja gümnaasiumiseadus (PGS, 2010) reguleerib hariduslike erivajadustega (HEV) õpilaste õppe korraldamist.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Koolieelse lasteasutuse seadus ja lastekaitse seadus täiendavad HEV-õpilaste kaitset.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Eesti on ratifitseerinud ÜRO puuetega inimeste õiguste konventsiooni (CRPD).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Üldist tuge pakub kool ilma koolivälise hindamiseta: õpetaja individuaalne juhendamine, õpiabitunnid ja tugispetsialistide esmane nõustamine.",
        "Diferentseeritud õpe ja jõukohastatud materjalid on iga õpetaja igapäevatöö osa ega eelda ühtegi otsust.",
        "Tõhustatud tugi ja eritugi eeldavad koolivälise nõustamismeeskonna (Rajaleidja) soovitust — üldine tugi mitte.",
      ]},
      { items: [
        "Rajaleidja, haridus- ja nõustamiskeskuste võrgustik, mis hindab HEV-õpilasi ja koostab soovitused.",
        "Nõustamiskomisjon koostab soovitused sobiva õppe korraldamiseks.",
        "Koolipsühholoog ja sotsiaalpedagoog on kohustuslikud suurtes koolides.",
        "IÕK (individuaalne õppekava) koostatakse õpilastele, kes vajavad kohandatud õpet.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tugiisik abistab õpilast igapäevases koolis toimetulekus.",
        "Individuaalne arenguvestlus toimub igal aastal iga õpilasega.",
        "Õpiabirühm pakub väiksemat gruppi tuge põhiainetes.",
      ]},
      { items: [
        "Andekus on põhikooli- ja gümnaasiumiseaduse käsitluses haridusliku erivajaduse vorm: kool peab andeka õpilase arengut märkama ja toetama.",
        "Individuaalne õppekava (IÕK) võimaldab kiirendatud või süvendatud õpet; võimalik on ka klassi vahelejätmine.",
        "Riiklikud olümpiaadid, Tartu Ülikooli teaduskool ja huvikoolid on peamised tugistruktuurid väljaspool kooli.",
      ]},
      { items: [
        "Eesti keel teise keelena (E2) on ette nähtud õpilastele, kelle emakeel ei ole eesti keel.",
        "Eesti keele ja kultuuri õpe on toetatud muukeelsetele peredele kohanemiseks.",
        "Kakskeelne haridus on saadaval mõnedes koolides vene- või muukeelsetele õpilastele.",
      ]},
      { items: [
        "Haridus- ja Teadusministeerium (HTM) vastutab hariduspoliitika ja HEV-suuniste eest.",
        "Koolid peavad tagama juurdepääsetavuse ja kohandused vastavalt seadusele.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Vanematel on õigus osaleda IÕK koostamisel ja hindamisotsustes.",
        "Vanemad saavad pöörduda Rajaleidja keskusesse hindamis- ja nõustamisteenuseks.",
        "Koolivaidluste lahendamine toimub maavanemale (regionaalne tasand) või HTM-ile esitatud kaebuste kaudu.",
        "Õpilastel on õigus saada teavet oma õiguste kohta hariduses. Andmekaitse: kõiki õpilaste andmeid töödeldakse vastavalt isikuandmete kaitse üldmäärusele (GDPR) ja isikuandmete kaitse seadusele.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>ÜRO puuetega inimeste õiguste konventsioon</em> (ÜRO, 2006), Eesti ratifitseeris 2012; selle artikkel 24 sätestab õiguse kaasavale haridusele.",
      "<em>Põhikooli- ja gümnaasiumiseadus</em> (PGS; vastu võetud 9. juunil 2010, RT I 2010, 41, 240); reguleerib hariduslike erivajadustega (HEV) õpilaste õppe korraldamist ja tugiteenuseid.",
      "<em>Koolieelse lasteasutuse seadus</em> ja <em>lastekaitseseadus</em> (2014); täiendavad hariduslike erivajadustega laste kaitset ja tugimeetmeid.",
      "<em>Isikuandmete kaitse seadus</em> (IKS, 2018), mis rakendab Euroopa Liidu isikuandmete kaitse üldmäärust (GDPR / määrus (EL) 2016/679).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagoogiline diferentseerimine tähendab õpetamisviisi kohandamist, mitte ootuste alandamist. Õpieesmärk võib olla kõigil sama; erinev on üksnes tee selleni.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "UDL-mudel (Universal Design for Learning, õppimise universaalne disain) pakub kolme põhimõtet: mitmekesised esitusviisid (kuidas sisu esitatakse), mitmekesised tegevuse ja väljendamise viisid (kuidas õpilane vastab) ning mitmekesised kaasamise viisid (mis õpilast motiveerib).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferentseerimine ei tähenda iga õpilase jaoks eraldi tunnikava koostamist – see tähendab piisava paindlikkuse loomist, et sama tund sobiks erinevatele profiilidele.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>See ei ole</strong> õppekava kärpimine suuremate raskustega õpilaste jaoks.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>See ei ole</strong> erinevatele õpilastele pidevalt erinevate ülesannete andmine – see isoleerib ja sildistab.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>See ei ole</strong> üksnes paberil diferentseeritud töö – diferentseerimine hõlmab ka seda, kuidas õpetaja selgitab, küsib ja hindab.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Suunatud valik: pakkuda 2–3 vastusevormi varianti (kirjalik tekst, suuline vastus, skemaatiline joonis) – kõik vastavad samale sisule.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tugistruktuur (scaffolding): pakkuda suuremate raskustega õpilastele struktureeritud juhist; eemaldada juhis järk-järgult, kui iseseisvus kasvab.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Paindlik rühmitamine: rühmad huvi, oskustaseme või segapõhimõttel – vahetada neid, et vältida püsirühmi, mis muutuvad identiteetideks.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Ajakohandused: rohkem aega ei tähenda väiksemat nõudlikkust. ATH või düspraksiaga õpilaste puhul jagada ülesanne lõikudeks koos planeeritud pausidega.",
        "Keerukusaste: sama teema kohta luua versioonid suurema või väiksema keelelise toega, näidetega või ilma, visuaalsete vihjetega või ilma.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Hinnata seda, mida õpilane teab, mitte seda, kuidas ta kirjutab. Düsleksiaga õpilane võib mõistelist valdamist näidata suuliselt või tehnoloogilise toe abil.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Selged ja enne ülesannet jagatud hindamismudelid (rubriigid) võimaldavad õpilasel teada, mida oodatakse, sõltumata valitud vormist.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfoolio või tõenduspõhine hindamine võimaldab õpilasel näidata edenemist aja jooksul, mitte ainult ühel testihetkel.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Kui diferentseerimisest klassis enam ei piisa ja õpilane ikka ei pääse õppekavale ligi, on see märk, et võib olla vaja eritoge.",
        "Diferentseerimine ei asenda kooli tugimeetmeid (SPO, terapeudid, eripedagoogika) – see toimub tavaklassis nende täiendusena.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Kujundav hindamine on iga praktika, mis kogub õppimise käigus teavet õppimise kohta ja kasutab seda teavet õpetamise või õpilase toetamise kohandamiseks.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Erinevalt kokkuvõtvast hindamisest (lõpphinded) ei pea kujundaval hindamisel olema hinnet – sellel peab olema tagasiside.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Neuroerinevatele õpilastele on kujundav hindamine eriti oluline, sest tulemus ühekordses testis ei pruugi peegeldada seda, mida nad tegelikult teavad.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong> (väljumispilet): tunni lõpus vastab õpilane 2 minutiga küsimusele – õpetaja näeb kohe, kes sai aru ja kes mitte.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Foofor</strong>: roheline (sain aru), kollane (mul on kahtlusi), punane (ei saanud aru) – need võivad olla füüsilised kaardid, post-it’id või digitaalne lahendus.",
        "<strong>Think-Pair-Share</strong>: õpilane mõtleb individuaalselt, arutab paarilisega ja seejärel jagab klassiga – see vähendab otsese vastamise ärevust.",
        "<strong>Väljumisuks</strong>: enne lahkumist ütleb õpilane õpetajale ühe asja, mille ta õppis, ja ühe küsimuse, mis tal veel on.",
      ]},
      { items: [
        "Tõhus tagasiside on konkreetne, rakendatav ja õigeaegne: „leheküljel 2 läheb argument kaduma, sest puudub seos tõenditega” on kasulik; „võinuks parem olla” ei ole.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "ATH-ga õpilastele: kohene tagasiside on tõhusam kui edasilükatud. Ärge oodake ülesande lõppu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Düsleksiaga õpilastele: suuline või helitagasiside võib olla kättesaadavam kui mahukad kirjalikud kommentaarid.",
        "Vältige õpilaste omavahelist võrdlemist – võrrelge õpilast tema enda varasema edasiminekuga.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ATH: hindamine mitmes lühikeses osas ühe pika testi asemel. Vähendage hindamiskeskkonnas tähelepanu hajutavaid stiimuleid.",
        "Düsleksia: lubage suulisi vastuseid, lisaaega või kõnesünteesi (text-to-speech) kasutamist. Hinnake sisu, mitte õigekirja.",
        "Autism: hindamised selgete ja üheselt mõistetavate kirjalike juhistega. Hoiatage formaadi muutustest ette.",
        "Andekus: vältige hindamisi, mis nõuavad vaid sisu taasesitamist – lisage analüüsi-, sünteesi- ja loomeküsimusi.",
      ]},
      { items: [
        "Kui õpilane ei suuda isegi hindamiskohandustega õppimist näidata, on see märk, et võib olla sügavam takistus, mida tuleb koos SPO-ga uurida.",
        "Püsivad (kuid, mitte päevi kestvad) kindla raskuse mustrid mingis valdkonnas tuleb ametlikult märku anda.",
      ]},
    ]},
  },


  sl: {
    tdah: { sections: [
      { items: [
        "Težave z ohranjanjem pozornosti pri dolgih nalogah; izgubi se pri navodilih z več koraki.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Nenehno gibanje — ne zdrži pri miru, se igra z rokami, vstaja brez očitnega razloga.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Odgovori, še preden se vprašanje konča; sega v besedo sošolcem in učitelju.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Pozablja pripomočke, roke in navodila, podana ustno pred nekaj minutami — delovni spomin je preobremenjen.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Lahko se hiperfokusira na tisto, kar ga zanima, in daje (napačen) vtis, da „zmore, kadar hoče“; v resnici se uspešnost spreminja glede na zanimanje in nagrado.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Ni</strong> slaba vzgoja, lenoba ali pomanjkanje značaja: te napačne predstave stigmatizirajo in zavlačujejo podporo.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ni</strong> vedno vidna hiperaktivnost — obstaja pretežno nepozorna oblika, pogostejša pri deklicah in pogosto premalo prepoznana.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Ne reši se</strong> s tem, da bi se „bolj potrudil“: težava je v nevrološki samoregulaciji, ne v volji.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Razdeliti navodila na dele: eno naenkrat, zapisano na tabli, z določenim časom — zmanjša obremenitev delovnega spomina.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Omogočiti dovoljeno gibanje (razdeljevanje pripomočkov, brisanje table, raznašanje sporočil).",
        "Zmanjšati konkurenčne dražljaje (mesto stran od okna, vrat in najglasnejše skupine).",
        "Takojšnja in pogosta pozitivna okrepitev: pri ADHD je občutljivost za nagrado spremenjena (odpor do čakanja), zato takojšnje nagrade delujejo bolje kot odložene.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Začnite s tem, kar učenec dela dobro — sestanek se ne sme začeti s seznamom pritožb, sicer se starš obrambno zapre.",
        "Opisujte opažena vedenja, ne diagnoz: „kadar je več kot dva koraka zapored, izgubi nit“ namesto „ima ADHD“.",
        "Predvidite odziv „doma ni tako“ — pojasnite, da skupinski kontekst in zahteva po dolgotrajni pozornosti v razredu naredita simptome bolj vidne.",
        "Če predlagate ocenjevanje, ga predstavite kot pomoč, ne kot kazen: „obstaja podpora, ki mu/ji lahko zelo pomaga“ namesto „mora biti pregledan/a“.",
      ]},
      { items: [
        "Vztrajne disciplinske težave kljub prilagoditvam v razredu.",
        "Znaki socialne izključenosti s strani vrstnikov.",
        "Znaki komorbidnosti (anksioznost, depresija, opozicionalno kljubovalna motnja) — pri ADHD pogosti in upravičujejo napotitev.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Bere počasi in z naporom, z napakami pri branju posameznih besed, tudi pri besedilih, ki jih ob poslušanju dobro razume.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Zamenjave črk (b/d, p/q) so pogoste pri vseh otrocih, ki začenjajo pisati, in same po sebi niso znak disleksije; osrednja težava je <strong>fonološka</strong> — povezovanje črk z glasovi.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Vztrajne pravopisne napake, ki se ne odzivajo na ponavljajoče se popravljanje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nagiba se k izogibanju glasnemu branju; lahko deluje kot nezanimanje, čeprav gre v resnici za zaščitno strategijo.",
        "Razumevanje govorjenega je očitno boljše od razumevanja prebranega — težava je specifična, ne pa splošna kognitivna omejitev.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ne gre</strong> za pomanjkanje inteligence: disleksija je po definiciji nepričakovana glede na druge kognitivne sposobnosti učenca.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ne gre</strong> za težavo z vidom niti za zgolj »zamenjevanje črk«: osrednji primanjkljaj je v fonološki obdelavi.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ne da se je »pozdraviti«</strong>, vendar strukturirana obravnava fonološkega zavedanja in dekodiranja dosledno izboljšuje branje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Povečanje razmika med črkami in vrsticami: obstajajo eksperimentalni dokazi, da povečan razmik izboljša branje pri disleksičnih otrocih, in to brez predhodnega treninga.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Dokazi za posebne pisave »za disleksike« so v nasprotju s tem šibkejši in neskladni.",
        "Omogočiti tiho branje pred kakršnim koli glasnim branjem — nikoli ne zahtevati branja brez napovedi.",
        "Kadar cilj ni ocenjevanje pisanja, vsebino ocenjevati ločeno od pravopisa.",
        "Ponuditi iste informacije v različnih oblikah (zvok, video, sheme).",
      ]},
      { items: [
        "Že na samem začetku izrecno ločiti branje od inteligence: »zelo dobro razume, ko posluša — težava se nanaša prav na branje«.",
        "Imeti v mislih, da ima disleksija močno dedno komponento: eden od staršev ima morda nediagnosticirano disleksijo, pogovor pa lahko obudi težke spomine na lastno šolanje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Izogibati se prikazovanju delovnih listov, polnih rdečih popravkov, brez konteksta — najprej predstaviti, kar učenec že zmore.",
        "Biti konkreten glede že uvedenih prilagoditev in tistih, ki jih lahko skrbnik ponovi doma: besedila v zvočni obliki, glasno branje brez časovnega pritiska.",
      ]},
      { items: [
        "Slabšajoča se učna samopodoba (»neumen sem«, »ne zmorem«).",
        "Sistematično izogibanje nalogam branja/pisanja do te mere, da ogroža druge predmete.",
        "Izrazito neskladje med ustno in pisno uspešnostjo brez formalne diagnoze — napotiti na psihopedagoško oceno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Težave z nenapovedanimi spremembami — sprememba urnika, učilnice, nadomestnega učitelja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Dobesedno sporazumevanje — uhajajo mu odtenki, ironija, idiomatski izrazi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Senzorna občutljivost — fluorescentna svetloba, hrup v ozadju, etikete na oblačilih so lahko neznosni.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Osredotočena in globoka zanimanja za določene teme — povezana s kognitivnim slogom, usmerjenim v podrobnosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Ko je preobremenjen, lahko deluje nezainteresirano ali odsotno, ne pa izklopljeno.",
      ]},
      { items: [
        "<strong>Ni</strong> linearna lestvica (»bolj« ali »manj« avtističen) — je večrazsežnostni profil z različnimi profili podpore na vsakem področju.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ni</strong> pomanjkanje empatije: težave pri medsebojnem razumevanju so dvosmerne — tudi neavtističnim ljudem je avtistične osebe težko brati (»problem dvojne empatije«).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ni</strong> slabo vedenje, ko se rutina prekine — je resničen nevrološki odziv na izgubo predvidljivosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Vnaprej opozorite na vsako spremembo rutine, tudi navidez nepomembno — vizualna podpora in predvidevanje imata empirično podporo.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Neizrečena socialna pravila spreminjajte v izrecna pravila (kaj se počne, česa se ne počne, kdaj).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Po potrebi omogočite senzorne odmore v tihem prostoru.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Osredotočeno zanimanje izkoristite kot vstopno točko za učne vsebine — je moč, ne motnja.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Če diagnoza že obstaja, najprej vprašajte, kaj po mnenju skrbnika deluje — starši avtističnih otrok pogosto vedo o svojem otroku več kot katero koli poročilo.",
        "Če diagnoze ni, bodite zelo previdni: opisujte konkretne situacije in na prvem srečanju nikoli ne uporabite besede »avtizem« — »ko se rutina spremeni brez opozorila, se vaš otrok zelo vznemiri na način, ki presega običajno«.",
        "Potrdite trud skrbnika — ustvarjati strukturo in predvidljivost doma je zahtevno, priznanje tega pa ustvarja zavezništvo.",
        "Nikoli ne primerjajte z »drugimi učenci« ali z brati in sestrami — vsak profil v spektru je drugačen in primerjanje je vedno kontraproduktivno.",
      ]},
      { items: [
        "Pogoste krize (»meltdowni«) po šolskem dnevu.",
        "Vztrajno zavračanje šole, povezano s senzorno preobremenitvijo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Napredujoča socialna osamitev kljub poskusom mediacije.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Pisava je težavna, počasna in pogosto nečitljiva — zaradi resnične motorične težave, ne iz malomarnosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Težave pri prostorski organizaciji zvezka, pri ravnanju s pripomočki in pri zaporedjih korakov.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Lahko deluje »nerodno« — razliva pijačo, zaletava se v pohištvo, ima težave pri športu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Nesorazmerna utrujenost po nalogah, ki zahtevajo dolgotrajno fino koordinacijo.",
        "Spoznavna komponenta je običajno ohranjena — od tod pogosta frustracija med tem, kar otrok zna, in tem, kar zmore pokazati.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ni</strong> lenoba ali pomanjkanje prizadevanja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ni</strong> le slaba pisava: klinični izraz je razvojna motnja koordinacije (DCD) in prizadene načrtovanje ter gibalno zaporedje, ne le pisanja.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ne reši se</strong> z »več vaje pisanja«: učinkovita obravnava je usmerjena v nalogo, ne v mehansko ponavljanje.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Dovoliti uporabo tipkovnice/tablice pri obsežnejših pisnih izdelkih.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zmanjšati mehansko prepisovanje s table — zagotoviti zapiske, kadar je to ustrezno.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zagotoviti jasne kontrolne sezname za naloge z več koraki.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Izdelek ocenjevati po vsebini, ne po fizični predstavitvi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Pojasniti, kaj je dispraksija, s preprostim jezikom — večina staršev tega izraza še nikoli ni slišala: »gre za nevrološko težavo pri koordinaciji gibov, ne za malomarnost ali pomanjkanje truda«.",
        "Nečitljiva pisava je točka največje napetosti s starši — pokazati, da ocenjevanje zdaj ceni vsebino in ne oblike, pomaga ublažiti tesnobo na obeh straneh.",
        "Predlagati praktična orodja za doma: glasovno narekovanje na telefonu za zapiske, tipkovnico za obsežne pisne naloge.",
        "Če so se v prejšnjih letih pojavile oznake »je len/lena« ali »se ne trudi«, to neposredno poimenovati: »vem, da ste to že slišali — moja razlaga je drugačna«.",
      ]},
      { items: [
        "Popolna zavrnitev pisne produkcije.",
        "Socialna izolacija v kontekstih telesne dejavnosti.",
        "Znaki somatizirane tesnobe pred pisnimi ocenjevanji — psihosocialna stiska je del klinične slike.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Naloge dokonča v nekaj minutah, medtem ko razred potrebuje celo učno uro.",
        "Postavlja vprašanja, ki presegajo okvir učne snovi — ali pa dejavno izziva to, kar se ravnokar poučuje.",
        "Lahko deluje nezainteresirano, nedisciplinirano ali apatično — pogosto so to znaki kroničnega dolgočasja in neizkoriščanja potenciala.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Izrazita čustvena občutljivost; lahko je tesnoben ali perfekcionističen — psihosocialni dejavniki so odločilni za razvoj nadarjenosti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Resnično tveganje neizkoriščanja potenciala — lahko se nauči skrivati svoje sposobnosti, da socialno ne izstopa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Ni</strong> isto kot dobro vedenje ali dobri rezultati — mnogi nadarjeni učenci dosegajo povprečne rezultate zaradi nezainteresiranosti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ne pomeni</strong> »ne potrebuje pomoči«: potrebuje drugačne izzive, saj se sposobnost spremeni v dosežek le, kadar se namensko razvija.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ni</strong> nezdružljiva z nevrodivergentnostjo — dvojna izjemnost (2e) obstaja, je pogosta in je pogosto prikrita.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Vedno imeti pripravljene poglobitvene naloge — ne več istega, temveč snov, ki je globlja ali bolj uporabna.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Omogočiti samostojno raziskovanje tem, ki učenca zanimajo, v okviru učnega načrta.",
        "Ocenjevati po zahtevnosti, ne po lahkotnosti — zahtevati zahtevnejše naloge v zameno za manjši obseg.",
        "Prepoznati in priznati čustveno občutljivost, ne da bi jo patologizirali.",
      ]},
      { items: [
        "Predvideti ponos in ga preusmeriti: »očitno je zelo sposoben — in prav zato dolgočasje začenja povzročati težave«.",
        "Pojasniti paradoks nadarjenosti: dobri rezultati ne pomenijo, da je vse v redu, neizkoriščanje potenciala zaradi nezainteresiranosti pa je pogosto in obrnljivo.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Če učenec skriva svoje sposobnosti, da bi se socialno vključil, to občutljivo poimenovati — to je znak stiske, ne skromnosti.",
        "Staršem predlagati, naj doma cenijo proces namesto rezultata: radovednost, poglobljenost in težka vprašanja so vredni več kot visoke ocene pri lahkih nalogah.",
      ]},
      { items: [
        "Znaki tesnobe ali depresije, povezani s skrajnim perfekcionizmom.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Izrazita socialna osamljenost, ki izvira iz občutka, da je »drugačen« od vrstnikov.",
        "Nenaden upad učnega uspeha pri učencu, ki je bil prej prepoznan kot sposoben.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Razume veliko manj, kot je videti — pogovorni jezik se razvije veliko prej kot akademski, zato lahko deluje tekoče, ne da bi sledil učni snovi.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Navidezno slaba učna uspešnost, pogosto nesorazmerna z dejanskimi sposobnostmi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Molk v razredu — lahko gre za običajno „tiho obdobje“ pri usvajanju jezika, ne za nezanimanje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Ob koncu dneva je lahko izčrpan zaradi sprotnega procesiranja jezika.",
        "Tveganje premajhne prepoznave dejanskih posebnih izobraževalnih potreb (disleksija, ADHD), ker se vse pripiše jezikovni oviri.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ne gre za</strong> pomanjkanje inteligence ali sposobnosti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ne gre</strong> zgolj za vprašanje časa: razvoj akademskega jezika traja leta in brez izrecne podpore se mnogi učenci ustalijo na nizki funkcionalni ravni.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Tega ne reši</strong> samodejno prevajanje med poukom — to je večletni proces, materni jezik pa je vir in ne ovira.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Zagotavljanje gradiv s ključnim besediščem, prevedenim v materni jezik.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Preverjanje znanja z vizualnim ali praktičnim prikazom, kadar koli je to mogoče.",
        "Združevanje v par z dvojezičnim sošolcem za neformalno posredovanje v ključnih trenutkih.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Sprejemanje začetnih izdelkov s slovničnimi napakami — v prvi fazi popravljajte vsebino, ne oblike.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Sam sestanek je ovira — starš ali skrbnik morda ne obvlada slovenščine na ravni, ki bi zadoščala za zapleten pogovor. Vnaprej pripravite preprosta pisna gradiva ali zaprosite za prevajalsko podporo.",
        "Ne predpostavljajte, da starš ali skrbnik pozna slovenski izobraževalni sistem — pojasnite, kaj je svetovalna služba, kaj je podporni ukrep in kaj pomeni ocenjevanje, ne da bi karkoli imeli za samoumevno.",
        "Jasno ločujte jezikovno oviro od učnih sposobnosti: „Vaš otrok je sposoben — jezika se uči hkrati z učno snovjo, kar je zelo zahtevno.“<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bodite občutljivi za migracijski kontekst: begunske družine ali družine v neurejenem položaju morda ne zaupajo ustanovam. Gradite zaupanje, preden zaprosite za dokumentacijo ali napotitve.",
      ]},
      { items: [
        "Znaki socialne izolacije ali medvrstniškega nasilja, povezani s položajem tujega učenca.",
        "Zastoj pri usvajanju jezika po prvem letu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Znaki travme, povezane z migracijskim kontekstom (zlasti pri beguncih).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Podatki mladoletnikov so predmet okrepljenega varstva (8. člen GDPR). Soglasje zakonitih zastopnikov je obvezno.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Preverite, kje orodje shranjuje podatke — na evropskih strežnikih, neevropskih, anonimizirano ali ne.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "V orodja generativne UI nikoli ne vnašajte polnih imen, naslovov, identifikacijskih številk ali kliničnih diagnoz.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Razlikujte med institucionalno uporabo (pogodbo sklene šola) in osebno uporabo učitelja (individualna odgovornost).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Sistemi, naučeni pretežno na angleško govorečih podatkih, lahko slabše delujejo v slovenščini in v slovensko govorečih kontekstih.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Samodejna priporočila lahko ojačajo stereotipe glede spola, etnične pripadnosti ali družbenega razreda — kritično jih preverjajte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Modeli za „napovedovanje učnega tveganja“ so še posebej problematični — pogosto reproducirajo obstoječe neenakosti, namesto da bi prepoznavali potrebe.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Cilj je povečati učenčevo samostojnost, ne pa nadomestiti kognitivnega dela, ki ga razvija.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Razlikujte <strong>orodje za dostop</strong> (text-to-speech za učenca z disleksijo) od <strong>orodja za nadomeščanje</strong> (ChatGPT, ki piše spis).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Redno presojajte: ali učenec razvija kompetenco ali pa razvija odvisnost od orodja?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> Ali orodje odpravlja resnično oviro ali ustvarja bližnjico, ki izpušča učenje?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Ali so vneseni podatki zaščiteni in ali soglasje obstaja?",
        "<strong>3.</strong> Ali bo rezultat orodja preveril človek, preden doseže učenca?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Ali obstaja alternativa brez UI, ki deluje enako dobro?",
        "<strong>5.</strong> Če bi orodje jutri prenehalo obstajati, ali bi učenec ostal brez opore?",
      ]},
    ],
    references: [
      "Evropska unija. (2016). <em>Uredba (EU) 2016/679 (Splošna uredba o varstvu podatkov)</em>, člen 8. Uradni list Evropske unije, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Usposobiti kolege za odgovorno vključevanje UI v poučevanje tujega jezika, vključno z izdelavo gradiv, ki jih je mogoče prilagoditi različnim profilom učenja.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "To ni predstavitev — je sodelovalno ustvarjanje. Vsak udeleženec odide z vsaj enim virom, pripravljenim za preizkušanje.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Umestitev — problem heterogenega razreda in zakaj „več istega“ ne deluje.",
        "<strong>10–25 min:</strong> Zemljevid profilov — predstavitev šestih kartic Farol z resničnimi (anonimiziranimi) primeri.",
        "<strong>25–45 min:</strong> Praktični prikaz — trije orodja, trije primeri uporabe, trije različni profili.",
        "<strong>45–75 min:</strong> Delo v parih — vsak par prilagodi obstoječe gradivo določenemu profilu.",
        "<strong>75–85 min:</strong> Hitra delitev — vsak par predstavi svoj izdelek v 1 minuti.",
        "<strong>85–90 min:</strong> Zaveze — vsak udeleženec določi gradivo za preizkušanje in dogovori se srečanje s povratnimi informacijami čez 30 dni.",
      ]},
      { items: [
        "Dostop do interneta in do institucionalnih računov v prikazanih orodjih.",
        "Obstoječa gradiva vsakega udeleženca (učni list, preizkus ali učna priprava).",
        "Natisnjene kartice profilov Farol za vpogled.",
      ]},
      { items: [
        "Vsak udeleženec med srečanjem izdela vsaj eno prilagojeno gradivo.",
        "Srečanje s povratnimi informacijami čez 30 dni, na katerem vsaj 60 % udeležencev poroča o dejanski uvedbi v prakso.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Vsaj eno gradivo, izdelano na srečanju, je sprejeto kot skupni vir oddelka.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "<strong>Zakon o usmerjanju otrok s posebnimi potrebami</strong> (ZUOPP-1, 2011) ureja postopek usmerjanja in pravice otrok s posebnimi potrebami.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zakon o osnovni šoli in Zakon o organizaciji in financiranju vzgoje in izobraževanja dopolnjujeta inkluzivno izobraževanje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Slovenija je ratificirala Konvencijo ZN o pravicah invalidov (CRPD).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Notranja diferenciacija pouka je pravica in dolžnost vsakega učitelja — prilagajanje razlage, gradiv in preverjanja ne zahteva nobene odločbe.",
        "Petstopenjski model pomoči (koncept Učne težave v osnovni šoli) se začne pri učitelju: pomoč pri pouku, dopolnilni pouk in vključitev šolske svetovalne službe pred vsakim formalnim postopkom.",
        "Dopolnilni pouk ter individualna in skupinska pomoč so na voljo vsem učencem, ki potrebujejo podporo, brez postopka usmerjanja.",
      ]},
      { items: [
        "Komisija za usmerjanje (pri Zavodu RS za šolstvo) oceni potrebe otroka in izda odločbo o usmeritvi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Zavod RS za šolstvo (ZRSŠ) zagotavlja strokovno podporo šolam pri inkluziji.",
        "Šolska svetovalna služba (šolski psiholog, socialni pedagog, specialni pedagog) je ključna pri oblikovanju podpore.",
        "Individualiziran program (IP) se pripravi za vsakega otroka, usmerjenega v izobraževalni program s prilagojenim izvajanjem.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Dodatna strokovna pomoč (DSP) je financirana s strani ministrstva in se izvaja individualno ali v skupinah.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Asistent se lahko dodeli za podporo pri vsakodnevnem funkcioniranju v šoli.",
        "Prilagojena šolska obveznost omogoča fleksibilnejše izvajanje obveznega šolanja.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Zakon o osnovni šoli (11. člen) opredeljuje nadarjene učence kot učence, ki potrebujejo prilagojene vsebine in metode dela — ne urejajo jih postopki usmerjanja po ZUOPP-1.",
        "Odkrivanje poteka po Konceptu odkrivanja in dela z nadarjenimi učenci (1999): evidentiranje s strani učiteljev, identifikacija s testi in ocenjevalnimi lestvicami ter soglasje staršev.",
        "Za identificirane nadarjene učence šola pripravi individualiziran program dela (INDEP); mogoče je tudi hitrejše napredovanje.",
      ]},
      { items: [
        "Slovenščina kot drugi in tuji jezik (SDTJ) je namenjena učencem, katerih materinščina ni slovenščina.",
        "Program za integracijo otrok priseljencev zagotavlja začetno jezikovno podporo.",
        "Medkulturni asistenti so na voljo v nekaterih šolah za podporo migrantskim učencem in njihovim družinam.",
      ]},
      { items: [
        "Ministrstvo za vzgojo in izobraževanje (MVI) usmerja politiko inkluzivnega izobraževanja.",
        "Varuh človekovih pravic obravnava pritožbe glede kršitev pravic v izobraževanju.",
        "Šole morajo zagotoviti fizično dostopnost in prilagoditve v skladu z zakonodajo.",
        "Starši so enakovredni partnerji v postopku usmerjanja in pri oblikovanju IP.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Otrok je vključen v oblikovanje IP glede na starost in zmožnosti.",
        "Varstvo podatkov: podatki o učencih so urejeni z GDPR in Zakonom o varstvu osebnih podatkov (ZVOP-2); občutljivih informacij ne delite zunaj tima brez privolitve.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
    ],
    references: [
      "<em>Konvencija ZN o pravicah invalidov</em> (CRPD, 2006), ki jo je Slovenija ratificirala (Uradni list RS – MP, št. 10/08); 24. člen določa pravico do vključujočega izobraževanja.",
      "<em>Zakon o usmerjanju otrok s posebnimi potrebami (ZUOPP-1)</em> (Uradni list RS, št. 58/11 in nasl.); ureja postopek usmerjanja, individualizirani program (IP) in dodatno strokovno pomoč (DSP).",
      "<em>Zakon o osnovni šoli (ZOsn)</em> in <em>Zakon o organizaciji in financiranju vzgoje in izobraževanja (ZOFVI)</em>; dopolnjujeta okvir vključujočega izobraževanja in delovanje šolske svetovalne službe.",
      "<em>Zakon o varstvu osebnih podatkov (ZVOP-2)</em> (Uradni list RS, št. 163/22), ki v slovenski pravni red prenaša Splošno uredbo o varstvu podatkov (GDPR).",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Pedagoška diferenciacija pomeni prilagajanje načina poučevanja — ne pa zniževanje pričakovanj. Učni cilj je lahko za vse enak; razlikuje se pot do njega.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Model UDL (Universal Design for Learning) predlaga tri načela: več načinov predstavitve (kako je vsebina predstavljena), več načinov delovanja in izražanja (kako učenec odgovarja) ter več načinov vključevanja (kaj učenca motivira).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Diferencirati ne pomeni izdelati učne priprave za vsakega učenca posebej — gre za ustvarjanje dovolj prožnosti, da ista učna ura ustreza različnim profilom učencev.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Ni</strong> krčenje učnega načrta za učence z največjimi težavami.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ni</strong> nenehno dajanje različnih nalog različnim učencem — to izolira in etiketira.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ni</strong> zgolj diferencirano delo na papirju — diferenciacija vključuje tudi način, kako učitelj razlaga, sprašuje in ocenjuje.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Nadzorovana izbira: ponudite 2–3 možnosti oblike odgovora (zapisano besedilo, ustno, shematska risba) — vsi se odzivajo na isto vsebino.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Oder (scaffolding): učencem z večjimi težavami zagotovite strukturirano oporo; postopoma jo odvzemajte, ko narašča njihova samostojnost.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Prožno skupinjenje: skupine glede na interes, glede na raven obvladovanja snovi ali mešane — menjavajte jih, da se izognete stalnim skupinam, ki postanejo identitete.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Prilagoditve časa: več časa ne pomeni manjše zahtevnosti. Pri učencih z ADHD ali dispraksijo razdelite nalogo na dele z načrtovanimi premori.",
        "Raven zahtevnosti: za isto temo pripravite različice z več ali manj jezikovne opore, s primeri ali brez njih, z vizualnimi namigi ali brez njih.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Ocenjujte, kaj učenec ve, ne kako piše. Učenec z disleksijo lahko izkaže razumevanje pojmov ustno ali s tehnološko podporo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Jasna ocenjevalna merila (rubrike), deljena pred nalogo, učencu omogočajo, da ve, kaj se od njega pričakuje, ne glede na izbrano obliko.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Portfelj ali ocenjevanje na podlagi dokazov učencu omogoča, da pokaže napredek skozi čas, ne le v enem trenutku preverjanja.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Ko diferenciacija v razredu ne zadošča več in učenec še vedno nima dostopa do učnega načrta, je to znak, da bo morda potrebna strokovna podpora.",
        "Diferenciacija ne nadomešča podpornih ukrepov šole (svetovalna služba, terapevti, specialno izobraževanje) — je tisto, kar se dogaja v rednem razredu kot njihovo dopolnilo.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativno ocenjevanje je vsaka praksa, ki med procesom zbira informacije o učenju — in te informacije uporablja za prilagajanje poučevanja ali podpore učencu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Za razliko od sumativnega ocenjevanja (končne ocene) formativno ocenjevanje ne potrebuje ocene — potrebuje povratno informacijo.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Za nevrodivergentne učence je formativno ocenjevanje še posebej pomembno, ker uspeh pri enkratnem testu morda ne odraža tega, kar dejansko znajo.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: ob koncu ure učenec v 2 minutah odgovori na vprašanje — učitelj takoj vidi, kdo je snov razumel in kdo ne.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Semafor</strong>: zelena (razumem), rumena (imam dvome), rdeča (ne razumem) — to so lahko fizične kartice, lepljivi lističi ali digitalna oblika.",
        "<strong>Think-Pair-Share</strong>: učenec najprej razmišlja sam, nato se pogovori s sošolcem in na koncu deli z razredom — to zmanjšuje tesnobo pred neposrednim odgovorom.",
        "<strong>Izhodna vrata</strong>: preden odide, učenec učitelju pove eno stvar, ki se jo je naučil, in en dvom, ki ga še ima.",
      ]},
      { items: [
        "Učinkovita povratna informacija je konkretna, uporabna in podana pravočasno: »na strani 2 se argument izgubi, ker manjka povezava z dokazi« je koristno; »lahko bi bilo bolje« ni.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Pri učencih z ADHD: takojšnja povratna informacija je učinkovitejša od odložene. Ne čakati do konca naloge.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Pri učencih z disleksijo: ustna ali zvočna povratna informacija je lahko dostopnejša od obsežnih pisnih komentarjev.",
        "Izogibati se primerjanju učencev med seboj — učenca primerjati z njegovim lastnim prejšnjim napredkom.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: ocenjevanje v več kratkih trenutkih namesto enega samega dolgega testa. Zmanjšati moteče dražljaje v okolju ocenjevanja.",
        "Disleksija: omogočiti ustne odgovore, dodatni čas ali uporabo pretvorbe besedila v govor. Ocenjevati vsebino, ne pravopisa.",
        "Avtizem: ocenjevanje z jasnimi in nedvoumnimi pisnimi navodili. Vnaprej opozoriti na spremembe oblike.",
        "Nadarjenost: izogibati se ocenjevanju zgolj na podlagi reprodukcije vsebine — vključiti vprašanja, ki zahtevajo analizo, sintezo in ustvarjanje.",
      ]},
      { items: [
        "Kadar učenec tudi s prilagoditvami ocenjevanja ne more izkazati učenja, je to znak, da morda obstaja globlja ovira, ki jo je treba raziskati s SPO.",
        "Vztrajne vzorce (mesece, ne dneve) specifičnih težav na nekem področju je treba formalno prijaviti.",
      ]},
    ]},
  },
  ga: {
    tdah: { sections: [
      { items: [
        "Deacracht aird a choinneáil ar thascanna fada; téann sé ar strae i dtreoracha a bhfuil céimeanna iomadúla iontu.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Gluaiseacht leanúnach — ní fhanann sé ina shuí, bíonn a lámha ag corraí, éiríonn sé gan chúis fheiceálach.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Freagraíonn sé sula gcríochnaítear an cheist; cuireann sé isteach ar a chomhscoláirí agus ar an múinteoir.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Déanann sé dearmad ar ábhair, ar spriocdhátaí agus ar threoracha a tugadh ó bhéal cúpla nóiméad ó shin — tá an chuimhne oibre ró-ualaithe.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "D'fhéadfadh sé hipear-fhócas a dhéanamh ar an méid a bhfuil suim aige ann, rud a thugann an tuiscint (mhícheart) gur „féidir leis nuair is mian leis”; i ndáiríre, athraíonn a fheidhmíocht de réir na spéise agus na luaíochta.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Ní</strong> drochbhéasaíocht, leisce ná easpa carachtair atá ann: déanann na smaointe míchearta seo stiogmatú agus cuireann siad moill ar an tacaíocht.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní</strong> hipirghníomhaíocht fheiceálach i gcónaí atá ann — tá léiriú ann atá neamhairdiúil den chuid is mó, atá níos coitianta i gcailíní agus a ndéantar tearcdhiagnóis air go minic.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Ní</strong> réitítear é le „níos mó iarrachta”: tá an deacracht san fhéinrialáil néareolaíoch, ní sa toil.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Roinn na treoracha ina mblúiríní: ceann amháin ag an am, scríofa ar an gclár, le ham sainithe — laghdaíonn sé seo an t-ualach ar an gcuimhne oibre.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ceadaigh gluaiseacht dhlisteanach (ábhair a dháileadh, an clár a ghlanadh, teachtaireachtaí a iompar).",
        "Laghdaigh spreagthaí iomaíocha (suíomh i bhfad ón bhfuinneog, ón doras, ón ngrúpa is callánaí).",
        "Treisiú dearfach láithreach agus go minic: in ADHD tá an íogaireacht don luaíocht athraithe (col leis an bhfanacht), agus mar sin oibríonn luaíochtaí láithreacha níos fearr ná cinn mhoillithe.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tosaigh leis an méid a dhéanann an dalta go maith — ná tosaigh an cruinniú le liosta gearán, nó dúnann an tuismitheoir/caomhnóir é féin go cosantach.",
        "Déan cur síos ar iompraíochtaí breathnaithe, ní ar dhiagnóisí: „nuair atá níos mó ná dhá chéim as a chéile ann, cailleann sé an snáithe” in ionad „tá ADHD air”.",
        "Bí ag súil leis an bhfreagairt „níl sé mar sin sa bhaile” — mínigh go ndéanann comhthéacs an ghrúpa agus an éileamh ar aird fhada sa seomra ranga na hairíonna níos feiceálaí.",
        "Má mholann tú measúnú, cuir i láthair é mar acmhainn, ní mar phionós: „tá tacaíocht ann a d'fhéadfadh cabhrú go mór leis/léi” in ionad „caithfear measúnú a dhéanamh air/uirthi”.",
      ]},
      { items: [
        "Teip dhisciplíneach leanúnach in ainneoin na n-oiriúnuithe sa seomra ranga.",
        "Comharthaí eisiaimh shóisialta ó na piaraí.",
        "Comharthaí comhghalrachta (imní, dúlagar, neamhord freasúra) — coitianta in ADHD agus a thugann údar le hatreorú.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Léann sé go mall agus le dua, le hearráidí agus focail aonair á léamh aige, fiú i dtéacsanna a thuigeann sé go maith nuair a chloiseann sé iad.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Tá iompú litreacha (b/d, p/q) coitianta i ngach leanbh atá ag tosú ar scríobh agus ní comhartha disléicse iad astu féin; is deacracht <strong>fhóineolaíoch</strong> í an phríomhdheacracht — litreacha a cheangal le fuaimeanna.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Earráidí leanúnacha litrithe nach bhfeabhsaíonn in ainneoin ceartú arís agus arís eile.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bíonn claonadh aige léamh os ard a sheachaint; d'fhéadfadh sé go bhfeicfí mar easpa suime é cé gur straitéis chosanta atá ann i ndáiríre.",
        "Bíonn an tuiscint ó bhéal go soiléir níos fearr ná an tuiscint léitheoireachta — tá an deacracht sonrach, ní teorannú cognaíoch ginearálta atá ann.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ní</strong> easpa éirime atá ann: de réir sainmhínithe, bíonn an disléicse gan choinne i gcomparáid le cumais chognaíocha eile an dalta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ní</strong> fadhb radhairc atá ann ná „litreacha a mhalartú\" go simplí: tá an príomheasnamh sa phróiseáil fhóineolaíoch.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní féidir é a „leigheas\"</strong>, ach feabhsaíonn idirghabháil struchtúrtha ar an bhfeasacht fhóineolaíoch agus ar an díchódú an léitheoireacht go comhsheasmhach.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "An spásáil idir litreacha agus línte a mhéadú: tá fianaise thurgnamhach ann go bhfeabhsaíonn spásáil leathnaithe léitheoireacht leanaí disléicseacha, gan oiliúint roimh ré.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Os a choinne sin, tá an fhianaise i bhfabhar clófhoirne ar leith „do dhaoine disléicseacha\" níos laige agus neamh-chomhsheasmhach.",
        "Ceadaigh léitheoireacht thostach roimh aon léitheoireacht os ard — ná hiarr léitheoireacht riamh gan choinne.",
        "Nuair nach é an scríbhneoireacht a mheas an cuspóir, déan an t-ábhar a mheas ar leithligh ón litriú.",
        "Cuir an t-eolas céanna ar fáil i bhformáidí éagsúla (fuaim, físeán, léaráidí).",
      ]},
      { items: [
        "Scaradh sonrach a dhéanamh idir an léitheoireacht agus an éirim ag tús an chomhrá: „tuigeann sé go han-mhaith nuair a chloiseann sé — baineann an deacracht go sonrach leis an léitheoireacht\".",
        "Cuimhnigh go bhfuil comhpháirt láidir oidhreachtúil ag baint leis an disléicse: d'fhéadfadh disléicse neamhdhiagnóisithe a bheith ag duine de na tuismitheoirí, agus d'fhéadfadh an comhrá cuimhní deacra óna scolaíocht féin a athmhúscailt.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Seachain bileoga lán de cheartúcháin dhearga a thaispeáint gan comhthéacs — taispeáin ar dtús an méid is féidir leis an dalta a dhéanamh cheana féin.",
        "Bí cruinn faoi na hoiriúnuithe atá ar siúl cheana agus faoi na cinn is féidir leis an gcaomhnóir a athdhéanamh sa bhaile: téacsanna i bhformáid fuaime, léitheoireacht os ard gan brú ama.",
      ]},
      { items: [
        "Féinchoincheap acadúil ag dul in olcas („táim dúr\", „ní féidir liom\").",
        "Seachaint chórasach ar thascanna léitheoireachta/scríbhneoireachta a mhéid is go gcuireann sé isteach ar ábhair eile.",
        "Difríocht shuntasach idir feidhmíocht ó bhéal agus feidhmíocht scríofa gan diagnóis fhoirmiúil — atreoraigh chuig measúnú síceoideachasúil.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Deacracht le hathruithe nár fógraíodh — athrú ar an amchlár, ar an seomra, ar mhúinteoir ionaid.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Cumarsáid litriúil — cailltear na céimseachtaí, an íoróin, na nathanna cainte.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Íogaireacht chéadfach — d'fhéadfadh solas fluaraiseach, torann cúlra agus lipéid éadaigh a bheith dofhulaingthe.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Suimeanna dírithe agus doimhne ar ábhair ar leith — bainteach le stíl chognaíoch atá dírithe ar mhionsonraí.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "D'fhéadfadh sé cuma neamhshuime nó fadraoin a bheith air nuair atá sé róbhrúite, ní as feidhm atá sé.",
      ]},
      { items: [
        "<strong>Ní</strong> scála líneach é („níos mó” nó „níos lú” uathach) — is próifíl ilghnéitheach é, le próifílí tacaíochta éagsúla i ngach réimse.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ní</strong> easpa ionbhá é: tá na deacrachtaí maidir le tuiscint fhrithpháirteach dhébhealach — bíonn deacracht ag daoine neamhuathacha freisin daoine uathacha a „léamh” (an „fhadhb na hionbhá dúbailte”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní</strong> drochiompar é nuair a bhristear gnáthamh — is freagairt néareolaíoch fhíor é ar chailliúint na hintuarthachta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Tabhair rabhadh roimh ré faoi aon athrú ar an ngnáthamh, fiú má tá an chuma air go bhfuil sé fánach — tá fianaise eimpíreach taobh thiar de thacaíocht amhairc agus d'ullmhúchán.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Déan rialacha sóisialta intuigthe ina rialacha follasacha (cad a dhéantar, cad nach ndéantar, cathain).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Ceadaigh sosanna céadfacha i spás ciúin nuair is gá.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Bain leas as an tsuim dhírithe mar phointe iontrála chuig ábhair churaclaim — neart é, ní seachrán.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Má tá an diagnóis ann cheana féin, fiafraigh ar dtús cad atá ar eolas ag an gcaomhnóir a oibríonn — is minic go mbíonn níos mó eolais ag tuismitheoirí leanaí uathacha faoina leanbh ná aon tuarascáil.",
        "Mura bhfuil aon diagnóis ann, bí an-chúramach: déan cur síos ar chásanna nithiúla gan an focal „uathachas” a úsáid riamh ag an gcéad chruinniú — „nuair a athraíonn an gnáthamh gan rabhadh, éiríonn do mhac/d'iníon an-chorraithe ar bhealach a sháraíonn an gnáth”.",
        "Cuir luach ar iarracht an chaomhnóra — tá sé dúshlánach struchtúr agus intuarthacht a chruthú sa bhaile, agus cruthaíonn aitheantas a thabhairt dó comhghuaillíocht.",
        "Ná déan comparáid riamh le „daltaí eile” nó le siblíní — tá gach próifíl den speictream difriúil agus bíonn an chomparáid friththáirgiúil i gcónaí.",
      ]},
      { items: [
        "Géarchéimeanna („meltdowns”) go minic tar éis an lae scoile.",
        "Diúltú scoile leanúnach bainteach le ró-ualú céadfach.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Aonrú sóisialta forchéimnitheach in ainneoin iarrachtaí idirghabhála.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Lámhscríbhneoireacht atá deacair, mall agus doléite go minic — de bharr deacrachta luaileach iarbhír, ní de bharr faillí.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Deacracht le heagrú spásúil an chóipleabhair, le bainistiú ábhar agus le seichimh céimeanna.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "D'fhéadfadh sé/sí cuma „amscaí” a bheith air/uirthi — doirteann sé/sí gloiní, buaileann sé/sí in éadan troscáin, bíonn deacracht aige/aici leis an spórt.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Tuirse atá as cuimse i ndiaidh tascanna a éilíonn comhordú mín luaileach buanaithe.",
        "Bíonn an chomhpháirt chognaíoch caomhnaithe go ginearálta — sin an chúis leis an bhfrustrachas minic idir an t-eolas a bheith aige/aici agus é a chur in iúl.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ní</strong> leisce ná easpa dúthrachta atá ann.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Ní</strong> drochpheannaireacht amháin atá ann: is é an téarma cliniciúil ná Neamhord Forbartha Comhordúcháin (DCD), agus téann sé i bhfeidhm ar an bpleanáil agus ar an seicheamhú luaileach, ní hamháin ar an scríbhneoireacht.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní réitítear</strong> é trí „níos mó cleachtaidh scríbhneoireachta”: bíonn an idirghabháil éifeachtach dírithe ar an tasc, ní hí an athrá mheicniúil í.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Ceadú méarchlár/táibléad a úsáid i saothair scríofa fhairsinge.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Cóipeáil mheicniúil ón gclár a laghdú — nótaí a chur ar fáil nuair is ábhartha.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Seicliostaí follasacha a chur ar fáil do thascanna a bhfuil ilchéimeanna iontu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "An saothar a mheas de réir an ábhair, ní de réir an chuma fhisiciúil.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "A mhíniú cad is dispraicse ann i dteanga shimplí — níor chuala formhór na gcaomhnóirí an téarma riamh: „is deacracht néareolaíoch í i gcomhordú na ngluaiseachtaí, ní faillí ná easpa iarrachta í”.",
        "Is í an lámhscríbhneoireacht dholéite an pointe is mó coimhlinte leis na caomhnóirí — cuidíonn sé le himní an dá thaobh a mhaolú a thaispeáint go bhfuil an mheasúnacht ag tabhairt tús áite don ábhar anois seachas don fhoirm.",
        "Uirlisí praiticiúla a mholadh don bhaile: deachtú gutha ar an bhfón do nótaí, méarchlár do shaothair scríofa fhairsinge.",
        "Má bhí stair ann de „tá sé/sí leisciúil” nó „ní dhéanann sé/sí iarracht” i mblianta roimhe seo, é sin a ainmniú go díreach: „tá a fhios agam gur chuala tú é sin cheana — tá léamh difriúil agamsa air”.",
      ]},
      { items: [
        "Diúltú iomlán do shaothar scríofa.",
        "Aonrú sóisialta i gcomhthéacsanna gníomhaíochta fisiciúla.",
        "Comharthaí imní sómaithe roimh mheasúnachtaí scríofa — is cuid den phictiúr í an fhulaingt shíceasóisialta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Críochnaíonn sé na tascanna i mbomaite agus an rang iomlán ag tógáil an ranga ar fad.",
        "Cuireann sé ceisteanna a théann thar raon an ábhair — nó tugann sé dúshlán gníomhach don rud atá á mhúineadh.",
        "D'fhéadfadh sé easpa suime, mí-iompar nó fuarchúis a léiriú — comharthaí leadráin ainsealaigh agus tearcfheidhmíochta go minic.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Íogaireacht mhothúchánach láidir; d'fhéadfadh sé a bheith imníoch nó foirfeachtaíoch — tá na fachtóirí síceasóisialta cinntitheach i bhforbairt na tallainne.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Riosca fíor tearcfheidhmíochta — d'fhéadfadh sé foghlaim conas a chumas a cheilt ionas nach seasfadh sé amach go sóisialta.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Ní hionann é</strong> agus dea-iompar ná dea-thorthaí — bíonn feidhmíocht mheánach ag go leor daltaí cumasacha mar gheall ar easpa suime.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ní hé</strong> „níl cabhair de dhíth air”: tá dúshláin éagsúla de dhíth air, mar ní iompaítear an cumas ina ghnóthachtáil ach amháin nuair a fhorbraítear go feasach é.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Níl sé</strong> ar neamhréir leis an néaréagsúlacht — tá an déchéimseacht (2e) ann, tá sé coitianta agus is minic a bhíonn sé faoi cheilt.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Bíodh tascanna breisithe ullamh i gcónaí — ní níos mó den rud céanna, ach ábhar níos doimhne nó níos feidhmí.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ceadaigh taighde neamhspleách ar thopaicí a bhfuil suim ag an dalta iontu laistigh den churaclam.",
        "Déan measúnú de réir an dúshláin, ní de réir na héascaíochta — iarr saothair níos déine mar mhalairt ar mhéid níos lú.",
        "Aithin agus bailíochtaigh an íogaireacht mhothúchánach gan í a phaiteolaíochtú.",
      ]},
      { items: [
        "Réamh-mheas an bród agus atreoraigh é: „tá sé an-chumasach go soiléir — agus is dá bharr sin go díreach atá an leadrán ag cruthú fadhbanna”.",
        "Mínigh paradacsa na buanna: ní chiallaíonn dea-thorthaí go bhfuil sé go maith, agus tá tearcfheidhmíocht de bharr easpa suime coitianta agus inchúlaithe.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Má cheileann an dalta a chumas chun é féin a chomhtháthú go sóisialta, ainmnigh é sin go cúramach — is comhartha fulaingthe é, ní comhartha modhúlachta.",
        "Mol do na tuismitheoirí/caomhnóirí luach a chur ar an bpróiseas seachas ar an toradh sa bhaile: is fiú níos mó an fhiosracht, an doimhneacht agus na ceisteanna deacra ná ardmharcanna i dtascanna éasca.",
      ]},
      { items: [
        "Comharthaí imní nó dúlagair a bhaineann le foirfeachtaíocht antoisceach.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Aonrú sóisialta suntasach a léirítear le mothú go bhfuil sé „difriúil” óna phiaraí.",
        "Tearcfheidhmíocht acadúil thobann i ndalta a aithníodh roimhe seo mar dhuine cumasach.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Tuigeann sé i bhfad níos lú ná mar a chuirtear in iúl — forbraítear an teanga chomhrá i bhfad níos luaithe ná an teanga acadúil, agus mar sin d'fhéadfadh sé a bheith líofa de réir cosúlachta gan an t-ábhar a leanúint.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Feidhmíocht acadúil íseal de réir dealraimh, atá go minic díréireach lena fhíorchumas.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tost sa seomra ranga — d'fhéadfadh sé gur „tréimhse chiúin\" nádúrtha le linn shealbhú na teanga atá ann, seachas easpa suime.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "D'fhéadfadh sé a bheith traochta ag deireadh an lae toisc go bhfuil an teanga á próiseáil aige i bhfíor-am.",
        "Baol go ndéanfaí tearcdhiagnóisiú ar fhíorriachtanais oideachais (disléicse, NEAH) toisc go gcuirtear gach rud i leith an bhacainn teanga.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Ní</strong> easpa intleachta ná cumais atá ann.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ní</strong> ceist ama amháin atá ann: tógann sé blianta ar an teanga acadúil forbairt, agus, gan tacaíocht fhollasach, socraíonn go leor scoláirí ag leibhéal feidhmiúil íseal.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ní réitítear</strong> é le haistriúchán uathoibríoch le linn an ranga — próiseas blianta atá ann, agus is acmhainn í an mháthairtheanga, ní bacainn.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Ábhair a sholáthar a bhfuil an príomhfhoclóir aistrithe go dtí an mháthairtheanga iontu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "An t-eolas a mheas trí thaispeántas amhairc nó praiticiúil aon uair is féidir.",
        "É a phéireáil le comhscoláire dátheangach le haghaidh idirghabhála neamhfhoirmiúla ag nóiméid chriticiúla.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Glacadh le luath-tháirgí cainte ina bhfuil earráidí gramadaí — an t-ábhar a cheartú, ní an fhoirm, sa chéad chéim.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Is bacainn é an cruinniú féin — d'fhéadfadh nach mbeadh teanga an teagaisc ar a thoil ag an tuismitheoir/caomhnóir a dhóthain le haghaidh comhrá casta. Ullmhaigh ábhair scríofa shimplí roimh ré, nó iarr tacaíocht aistriúcháin.",
        "Ná glac leis go bhfuil eolas ag an tuismitheoir/caomhnóir ar an gcóras oideachais — mínigh cad is seirbhís síceolaíochta agus treoshuímh scoile ann, cad is beart tacaíochta ann, cad a bhaineann le measúnú, gan glacadh le haon rud gan cheist.",
        "Scar go soiléir an bhacainn teanga ón gcumas acadúil: „tá do pháiste ábalta — tá an teanga á foghlaim aige ag an am céanna leis an ábhar, rud atá an-dúshlánach\".<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Bí íogair don chomhthéacs imirce: d'fhéadfadh amhras a bheith ag teaghlaigh dhídeanaithe nó atá i staid neamhrialta ar institiúidí. Cothaigh muinín sula n-iarrann tú cáipéisíocht nó atreoruithe.",
      ]},
      { items: [
        "Comharthaí aonrú sóisialta nó bulaíochta a bhaineann le stádas an scoláire eachtraigh.",
        "Marbhántacht i sealbhú na teanga tar éis na chéad bhliana.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Comharthaí tráma a bhaineann le comhthéacs imirce (go háirithe dídeanaithe).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Tá sonraí mionaoiseach faoi réir cosanta neartaithe (Airteagal 8 RGCS). Tá toiliú na gcaomhnóirí riachtanach.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Seiceáil cá stórálann an uirlis sonraí — ar fhreastalaithe Eorpacha nó neamh-Eorpacha, gan ainm nó nach ea.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ná cuir ainmneacha iomlána, seoltaí, uimhreacha aitheantais ná fáthmheasanna cliniciúla isteach in uirlisí giniúnacha IS riamh.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Déan idirdhealú idir úsáid institiúideach (síníonn an scoil conradh) agus úsáid phearsanta an mhúinteora (freagracht aonair).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "D'fhéadfadh feidhmíocht níos ísle a bheith ag córais a oileadh go príomha ar shonraí Béarla i nGaeilge agus i gcomhthéacsanna Gaeilge.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "D'fhéadfadh moltaí uathoibríocha steiréitíopaí inscne, eitneachais nó aicme a mhéadú — déan iniúchadh criticiúil orthu.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Tá samhlacha „tuar riosca acadúil” fadhbach go háirithe — is minic a atáirgeann siad neamhionannais atá ann cheana in ionad riachtanais a aithint.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Is é an aidhm neamhspleáchas an dalta a mhéadú, ní an obair chognaíoch a fhorbraíonn é a ionadú.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Déan idirdhealú idir <strong>uirlis rochtana</strong> (text-to-speech do dhalta a bhfuil disléicse air) agus <strong>uirlis ionadaíochta</strong> (ChatGPT ag scríobh na haiste).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Déan measúnú go rialta: an bhfuil an dalta ag forbairt inniúlachta, nó an bhfuil sé ag forbairt spleáchais ar an uirlis?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> An réitíonn an uirlis fíorbhac, nó an gcruthaíonn sí aicearra a fhágann an fhoghlaim ar lár?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> An bhfuil na sonraí a chuirtear isteach cosanta agus an bhfuil toiliú ann?",
        "<strong>3.</strong> An ndéanfaidh duine seiceáil ar thoradh na huirlise sula sroicheann sé an dalta?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> An bhfuil rogha eile gan IS ann a oibríonn chomh maith céanna?",
        "<strong>5.</strong> Dá scoirfeadh an uirlis de bheith ann amárach, an bhfágfaí an dalta gan tacaíocht?",
      ]},
    ],
    references: [
      "An tAontas Eorpach. (2016). <em>Rialachán (AE) 2016/679 (An Rialachán Ginearálta maidir le Cosaint Sonraí)</em>, Airteagal 8. Iris Oifigiúil an Aontais Eorpaigh, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Comhghleacaithe a chumasú chun IA a chomhtháthú go freagrach i dteagasc teangacha iasachta, le hábhair a tháirgeadh atá inoiriúnaithe do líon próifílí foghlama.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ní cur i láthair é — is comhthógáil é. Fágann gach rannpháirtí le hacmhainn amháin ar a laghad atá réidh le tástáil.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 nóim:</strong> Fráma — fadhb an ranga ilchineálaigh agus an fáth nach n-oibríonn níos mó den rud céanna.",
        "<strong>10–25 nóim:</strong> Léarscáil na bpróifílí — cur i láthair sé chárta Farol, le cásanna fíora (gan ainm).",
        "<strong>25–45 nóim:</strong> Taispeántas praiticiúil — trí uirlis, trí chás úsáide, trí phróifíl ar leith.",
        "<strong>45–75 nóim:</strong> Obair i mbeirteanna — oiriúnaíonn gach beirt ábhar atá ann cheana do phróifíl ar leith.",
        "<strong>75–85 nóim:</strong> Comhroinnt thapa — taispeánann gach beirt a dtáirge i nóiméad amháin.",
        "<strong>85–90 nóim:</strong> Gealltanais — roghnaíonn gach rannpháirtí ábhar le tástáil agus socraítear seisiún aiseolais i gceann 30 lá.",
      ]},
      { items: [
        "Rochtain ar an idirlíon agus ar chuntais institiúideacha sna huirlisí a léirítear.",
        "Ábhair atá ag gach rannpháirtí cheana (bileog, scrúdú, nó plean ceachta).",
        "Cártaí clóite de phróifílí Farol le ceadú.",
      ]},
      { items: [
        "Táirgeann gach rannpháirtí ábhar oiriúnaithe amháin ar a laghad le linn an tseisiúin.",
        "Seisiún aiseolais i gceann 30 lá ina dtuairiscíonn 60% de na rannpháirtithe ar a laghad cur i bhfeidhm éifeachtach.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Glactar le hábhar amháin ar a laghad a táirgeadh sa seisiún mar acmhainn chomhroinnte na roinne.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Bunaíonn an tAcht Oideachais 1998 creat ginearálta d'oideachas uilíoch agus comhionann in Éirinn.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Acht um Oideachas do Dhaoine a bhfuil Riachtanais Speisialta Oideachais acu (EPSEN Act, 2004) leagann amach cearta agus próisis le haghaidh measúnú agus plean oideachais aonair.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Tá Éire tiomanta do Choinbhinsiún na NA ar Chearta Daoine faoi Mhíchumas (CRPD).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Is é an múinteoir ranga an chéad chéim sa Chontanam Tacaíochta (NEPS): tacaíocht sa seomra ranga — idirdhealú, socruithe simplí agus breathnóireacht dhoiciméadaithe, gan aon atreorú foirmiúil.",
        "Is féidir le gach múinteoir Comhad Tacaíochta Dalta a oscailt chun buarthaí agus idirghabhálacha a thaifeadadh.",
        "Ní gá diagnóis ná measúnú chun idirdhealú agus socruithe réasúnta a chur i bhfeidhm sa rang.",
      ]},
      { items: [
        "NCSE (An Chomhairle Náisiúnta um Oideachas Speisialta) comhordaíonn seirbhísí agus foirgníonn beartais cuimsiúcháin.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Baill foirne tacaíochta scoile (SNA, Cúntóir Riachtanas Speisialta) tacaíonn le scoláirí i dtimpeallacht an ranga.",
        "NEPS (An tSeirbhís Náisiúnta Síceolaíochta Oideachais) déanann measúnú agus tacaíonn le scoláirí.",
        "Dréachtaítear an IEP (Plean Oideachais Aonair) ag an múinteoir acmhainne, na tuismitheoirí agus an NCSE.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Múinteoirí Acmhainne agus Foghlaim-Tacaíochta cuireann tacaíocht dhíreach ar fáil laistigh den rang agus lasmuigh de.",
        "Cúntóirí Riachtanas Speisialta (SNAnna) cuireann cúnamh pearsanta ar fáil leis an scoláire.",
        "Measúnú síceolaíoch trí NEPS nó trí chleachtas príobháideach mar bhunús don IEP.",
      ]},
      { items: [
        "Níl aon fhoráil reachtúil ar leith do dhaltaí ardchumais in Éirinn — ní chlúdaíonn an tAcht EPSEN 2004 an t-ardchumas.",
        "Is iad treoirlínte an NCCA do dhaltaí atá thar a bheith cumasach (2007) an phríomhthagairt do scoileanna: saibhriú, doimhniú agus difreálú aníos.",
        "Cuireann CTYI (Ionad na nÓg Tréitheach in Éirinn, DCU) cláir sheach-churaclaim ar fáil; is ar leibhéal na scoile a socraítear luasghéarú.",
      ]},
      { items: [
        "Béarla mar Theanga Bhreise (EAL) do scoláirí nach í an Ghaeilge ná an Béarla a gcéad teanga.",
        "Cláir chuideachta teanga tacaíonn le scoláirí imirceacha agus dídeanaithe.",
        "Tá an NCSE freagrach as tacaíocht a eagrú do scoláirí ón gcoigríoch.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Roinn Oideachais agus Scileanna (DES) maoirsíonn beartas agus maoiniú le haghaidh scoláirí le riachtanais speisialta.",
        "Cigireacht scoile ag Cigireacht na Roinne measúnaíonn caighdeán cuimsiúcháin.",
        "Ombudsman do Leanaí imscrúdaíonn gearáin ó thuismitheoirí faoi sheirbhísí oideachais.",
        "Tá tuismitheoirí ina bpáirtithe bunúsacha san IEP agus caithfear a dtoiliú a fháil do mheasúnú.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Is féidir le tuismitheoirí gearán a dhéanamh le NCSE nó leis an Ombudsman do Leanaí mura bhfuil siad sásta.",
        "Tá teidlíochtaí scoláirí bunaithe ar thuarascálacha measúnaithe agus ar mholtaí NCSE· tá cosc ar idirdhealú faoi na hAchtanna um Stádas Comhionann 2000–2018 agus tá sonraí na scoláirí faoi chosaint an Achta um Chosaint Sonraí 2018.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>Coinbhinsiún na Náisiún Aontaithe ar Chearta Daoine faoi Mhíchumas</em> (CRPD, 2006), arna dhaingniú ag Éirinn in 2018; aithníonn Airteagal 24 an ceart chun oideachais chuimsithigh.",
      "<em>An tAcht Oideachais 1998</em>; bunaíonn sé an creat reachtúil ginearálta don chóras oideachais agus tugann sé cearta do thuismitheoirí maidir le hoideachas a gcuid leanaí.",
      "<em>An tAcht um Oideachas do Dhaoine a bhfuil Riachtanais Speisialta Oideachais acu 2004</em> (EPSEN Act); príomhreachtaíocht na hÉireann maidir le riachtanais speisialta oideachais, a bhunaíonn an Chomhairle Náisiúnta um Oideachas Speisialta (NCSE) agus an ceart chun Plean Oideachais Aonair (IEP).",
      "<em>An tAcht Míchumais 2005</em> agus na <em>hAchtanna um Stádas Comhionann 2000–2018</em>; leagann siad oibleagáidí ar sholáthraithe seirbhíse poiblí agus cuireann siad cosc ar idirdhealú i seirbhísí oideachais.",
      "<em>An tAcht um Chosaint Sonraí 2018</em>, a chuireann an Rialachán Ginearálta maidir le Cosaint Sonraí (RGCS/GDPR) i bhfeidhm in Éirinn; tá sonraí uile na scoláirí faoina chosaint agus ní roinntear iad gan toiliú.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Is éard atá i gceist le difreálú oideolaíoch ná an chaoi a múintear a choigeartú — ní hé na hionchais a ísliú. Is féidir leis an sprioc foghlama a bheith mar an gcéanna do chách; is é an conair a athraíonn.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Molann an tsamhail UDL (Universal Design for Learning, Dearadh Uilíoch don Fhoghlaim) trí phrionsabal: bealaí iolracha léirithe (an dóigh a gcuirtear an t-ábhar i láthair), bealaí iolracha gníomhaíochta agus léirithe (an dóigh a bhfreagraíonn an dalta), agus bealaí iolracha rannpháirtíochta (an rud a spreagann an dalta).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ní hé atá i gceist le difreálú ná plean ceachta a chruthú do gach dalta — is é atá ann ná dóthain solúbthachta a chruthú ionas go bhfreastalaíonn an ceacht céanna ar phróifílí difriúla.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Ní hé</strong> an curaclam a laghdú do na daltaí a bhfuil na deacrachtaí is mó acu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní hé</strong> tascanna éagsúla a thabhairt i gcónaí do dhaltaí éagsúla — déanann sé sin daltaí a aonrú agus a lipéadú.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní hé</strong> obair dhifreáilte ar pháipéar amháin atá ann — cuimsíonn an difreálú an chaoi a míníonn, a fhiafraíonn agus a mheasúnaíonn an múinteoir.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Rogha rialaithe: 2–3 rogha formáide freagartha a thairiscint (téacs scríofa, ó bhéal, líníocht scéimreach) — freagraíonn gach duine ar an ábhar céanna.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Scafláil (scaffolding): treoir struchtúrtha a sholáthar do dhaltaí a bhfuil níos mó deacrachtaí acu; an treoir a bhaint de réir a chéile de réir mar a fhásann an neamhspleáchas.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Grúpáil sholúbtha: grúpaí de réir suime, de réir leibhéal máistreachta, nó measctha — rothlú chun grúpaí seasta a sheachaint a éiríonn ina bhféiniúlachtaí.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Coigeartuithe ama: ní hionann níos mó ama agus níos lú déine. I gcás daltaí a bhfuil ADHD nó dispraicse orthu, an tasc a roinnt ina mhíreanna le sosanna sceidealta.",
        "Leibhéal castachta: don ábhar céanna, leaganacha a chruthú le tacaíocht teanga níos mó nó níos lú, le samplaí nó gan iad, le leideanna amhairc nó gan iad.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Déan an méid atá ar eolas ag an dalta a mheasúnú, ní an chaoi a scríobhann sé. Is féidir le dalta a bhfuil disléicse air a mháistreacht choincheapúil a léiriú ó bhéal nó le tacaíocht teicneolaíochta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Cuireann rúibricí soiléire, a roinntear roimh an tasc, ar chumas an dalta a fháil amach cad a bhfuiltear ag súil leis beag beann ar an bhformáid a roghnaítear.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ligeann punann nó measúnú bunaithe ar fhianaise don dalta dul chun cinn a léiriú thar am, ní hamháin ag aon nóiméad scrúdaithe.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Nuair nach leor an difreálú sa seomra ranga a thuilleadh agus nach bhfuil rochtain ag an dalta ar an gcuraclam fós, is comhartha é sin go bhféadfadh gá a bheith le tacaíocht speisialaithe.",
        "Ní chuireann an difreálú in ionad bearta tacaíochta na scoile (SPO, teiripeoirí, oideachas speisialta) — is é an rud a tharlaíonn sa ghnáthsheomra ranga mar fhorlíonadh é.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Is éard is measúnú foirmitheach ann aon chleachtas a bhailíonn eolas faoin bhfoghlaim le linn an phróisis — agus a úsáideann an t-eolas sin chun an teagasc nó an tacaíocht don dalta a choigeartú.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Murab ionann agus an measúnú achomair (gráid dheiridh), ní gá grád a bheith ag baint leis an measúnú foirmitheach — ní mór aiseolas a bheith ag baint leis.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "I gcás daltaí néareathraitheacha, tá an measúnú foirmitheach tábhachtach go háirithe toisc go bhféadfadh sé nach léiríonn an fheidhmíocht i dtriail aonuaire an méid atá ar eolas acu i ndáiríre.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: ag deireadh an ranga, freagraíonn an dalta ceist taobh istigh de 2 nóiméad — feiceann an múinteoir láithreach cé a thuig agus cé nár thuig.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Soilse tráchta</strong>: glas (thuig mé), buí (tá ceisteanna agam), dearg (níor thuig mé) — is féidir cártaí fisiciúla, post-its nó leagan digiteach a úsáid.",
        "<strong>Think-Pair-Share</strong>: smaoiníonn an dalta ina aonar, pléann sé le páirtí, agus ansin roinneann sé leis an rang — laghdaíonn sé an imní a bhaineann le freagra díreach.",
        "<strong>Geata amach</strong>: sula bhfágann sé, insíonn an dalta don mhúinteoir rud amháin a d'fhoghlaim sé agus ceist amháin atá fós aige.",
      ]},
      { items: [
        "Tá aiseolas éifeachtach sonrach, inghníomhaithe agus tugtha in am: tá „ar leathanach 2, cailltear an argóint toisc go bhfuil an nasc leis an bhfianaise in easnamh” úsáideach; níl „d'fhéadfadh sé a bheith níos fearr”.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "I gcás daltaí le ADHD: tá aiseolas láithreach níos éifeachtaí ná aiseolas moillithe. Ná fan go dtí deireadh an tasc.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "I gcás daltaí le disléicse: d'fhéadfadh aiseolas ó bhéal nó fuaime a bheith níos inrochtana ná tráchtanna fada scríofa.",
        "Seachain daltaí a chur i gcomparáid lena chéile — déan comparáid idir an dalta agus a dhul chun cinn féin roimhe seo.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: measúnú in iliomad nóiméad gearr in ionad triail amháin fhada. Laghdaigh na spreagthaí seachráin sa timpeallacht mheasúnaithe.",
        "Disléicse: ceadaigh freagraí ó bhéal, am breise, nó úsáid téacs-go-caint. Déan measúnú ar an ábhar, ní ar an litriú.",
        "Uathachas: measúnuithe le treoracha scríofa soiléire gan athbhrí. Tabhair fógra roimh ré faoi athruithe ar an bhformáid.",
        "Buanna: seachain measúnuithe ina ndéantar atáirgeadh ábhair amháin — cuir ceisteanna anailíse, sintéise agus cruthaithe san áireamh.",
      ]},
      { items: [
        "Nuair nach féidir leis an dalta foghlaim a léiriú, fiú amháin le hoiriúnuithe measúnaithe, is comhartha é sin go bhféadfadh bac níos doimhne a bheith ann ar cheart é a fhiosrú leis an SPO.",
        "Ba cheart patrúin leanúnacha (míonna, ní laethanta) deacrachta sonraí i réimse áirithe a chur in iúl go foirmiúil.",
      ]},
    ]},
  },
  mt: {
    tdah: { sections: [
      { items: [
        "Diffikultà biex iżżomm l-attenzjoni f'kompiti twal; jintilef f'istruzzjonijiet b'diversi passi.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Moviment kostanti — ma jibqax bilqiegħda, iħabbat idejh, iqum mingħajr raġuni apparenti.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Iwieġeb qabel ma tintemm il-mistoqsija; jaqta' kliem sħabu u l-għalliem.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Jinsa l-materjali, l-iskadenzi u l-istruzzjonijiet mogħtija bil-fomm ftit minuti ilu — il-memorja tax-xogħol hija mgħobbija żżejjed.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Jista' jiffoka b'mod estrem fuq dak li jinteressah, u jagħti l-impressjoni (żbaljata) li „jista' meta jrid”; fil-verità, il-prestazzjoni tvarja skont l-interess u l-premju.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Mhux</strong> edukazzjoni ħażina, għażż jew nuqqas ta' karattru: dawn l-ideat żbaljati jistigmatizzaw u jdewmu l-appoġġ.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Mhux</strong> dejjem iperattività viżibbli — hemm preżentazzjoni predominantement inattenta, aktar frekwenti fil-bniet u ħafna drabi sottodijanjostikata.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Ma jissolvix</strong> b'„jagħmel aktar sforz”: id-diffikultà tinsab fl-awtoregolazzjoni newroloġika, mhux fir-rieda.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Aqsam l-istruzzjonijiet: waħda kull darba, bil-miktub fuq il-bord, b'ħin definit — dan inaqqas il-piż fuq il-memorja tax-xogħol.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ippermetti moviment leġittimu (tqassim ta' materjali, tħassir tal-bord, twassil ta' messaġġi).",
        "Naqqas l-istimoli kompetittivi (post 'il bogħod mit-tieqa, mill-bieb, mill-aktar grupp storbjuż).",
        "Tisħiħ pożittiv immedjat u frekwenti: fl-ADHD is-sensittività għall-premju hija mibdula (avversjoni għall-istennija), għalhekk il-premjijiet immedjati jaħdmu aħjar minn dawk imdewma.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Ibda b'dak li l-istudent jagħmel tajjeb — m'għandekx tibda l-laqgħa b'lista ta' ilmenti, inkella l-ġenitur/kustodju jingħalaq b'mod difensiv.",
        "Iddeskrivi mġiba osservata, mhux dijanjożijiet: „meta jkun hemm aktar minn żewġ passi wara xulxin, jitlef it-tarf” minflok „għandu l-ADHD”.",
        "Antiċipa r-reazzjoni „d-dar mhux hekk” — spjega li l-kuntest tal-grupp u l-ħtieġa ta' attenzjoni mtawla fil-klassi jagħmlu s-sintomi aktar viżibbli.",
        "Jekk tissuġġerixxi evalwazzjoni, ippreżentaha bħala riżorsa, mhux bħala kastig: „hemm appoġġ li jista' jgħinu/jgħinha ħafna” minflok „jeħtieġ li jiġi/tiġi evalwat/a”.",
      ]},
      { items: [
        "Falliment dixxiplinari persistenti minkejja l-adattamenti fil-klassi.",
        "Sinjali ta' esklużjoni soċjali mill-pari.",
        "Sinjali ta' komorbidità (ansjetà, dipressjoni, disturb ta' oppożizzjoni) — frekwenti fl-ADHD u li jiġġustifikaw riferiment.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Jaqra bil-mod u bi sforz, b'żbalji fil-qari ta' kelmiet iżolati, anke f'testi li jifhem tajjeb meta jismagħhom.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "L-inverżjonijiet tal-ittri (b/d, p/q) huma komuni fit-tfal kollha li jibdew jiktbu u mhumiex, fihom infushom, sinjal ta' dislessja; id-diffikultà ċentrali hija <strong>fonoloġika</strong> — li wieħed jassoċja l-ittri mal-ħsejjes.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "Żbalji ortografiċi persistenti li ma jirrispondux għall-korrezzjoni ripetuta.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Għandu t-tendenza li jevita l-qari b'leħen għoli; jista' jidher nuqqas ta' interess meta fil-fatt hija strateġija ta' protezzjoni.",
        "Il-fehim orali huwa b'mod ċar superjuri għal dak tal-qari — id-diffikultà hija speċifika, mhux limitazzjoni konjittiva ġenerali.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Mhijiex</strong> nuqqas ta' intelliġenza: bid-definizzjoni, id-dislessja hija mhux mistennija meta mqabbla mal-kapaċitajiet konjittivi l-oħra tal-istudent.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Mhijiex</strong> problema tal-vista u lanqas sempliċi „taħwid tal-ittri”: id-defiċit ċentrali jinsab fl-ipproċessar fonoloġiku.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ma „titfejjaqx”</strong>, iżda l-intervent strutturat fuq il-kuxjenza fonoloġika u d-dekodifikazzjoni jtejjeb il-qari b'mod konsistenti.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Iżżid l-ispazju bejn l-ittri u l-linji: hemm evidenza sperimentali li l-ispazjar imwessa' jtejjeb il-qari tat-tfal dislessiċi, mingħajr taħriġ minn qabel.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> B'kuntrast, l-evidenza għal tipi ta' ittri speċifiċi „għad-dislessiċi” hija aktar dgħajfa u inkonsistenti.",
        "Ippermetti l-qari fis-skiet qabel kwalunkwe qari b'leħen għoli — qatt titlob qari għal għarrieda.",
        "Meta l-għan ma jkunx li tevalwa l-kitba, evalwa l-kontenut separatament mill-ortografija.",
        "Offri l-istess informazzjoni f'diversi formati (awdjo, vidjo, dijagrammi).",
      ]},
      { items: [
        "Issepara b'mod espliċitu l-qari mill-intelliġenza sa mill-bidu nett: „jifhem tajjeb ħafna meta jisma' — id-diffikultà hija speċifika għall-qari”.",
        "Żomm f'moħħok li d-dislessja għandha komponent ereditarju qawwi: wieħed mill-ġenituri jista' jkollu dislessja mhux dijanjostikata, u d-diskussjoni tista' terġa' tqajjem memorji diffiċli mill-iskola tiegħu stess.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evita li turi karti mimlija b'korrezzjonijiet bl-aħmar mingħajr kuntest — l-ewwel uri dak li l-istudent diġà kapaċi jagħmel.",
        "Kun konkret dwar l-adattamenti li diġà qegħdin isiru u dwar dawk li l-kustodju jista' jirreplika d-dar: testi f'format awdjo, qari b'leħen għoli mingħajr pressjoni ta' ħin.",
      ]},
      { items: [
        "Awtokonċett akkademiku li qed jiddeterjora („jien stupidu”, „ma niflaħx”).",
        "Evitar sistematiku ta' kompiti ta' qari/kitba sal-punt li jikkomprometti suġġetti oħra.",
        "Diskrepanza notevoli bejn il-prestazzjoni orali u dik bil-miktub mingħajr dijanjosi formali — irreferi għal evalwazzjoni psikopedagoġika.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Diffikultà bi tibdiliet mhux imħabbra — bidla fl-iskeda, fil-kamra, f'għalliem sostitut.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Komunikazzjoni litterali — jitlef l-isfumaturi, l-ironija, l-espressjonijiet idjomatiċi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensittività sensorja — id-dawl fluworexxenti, il-ħsejjes tal-isfond, it-tikketti tal-ħwejjeġ jistgħu jkunu intollerabbli.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Interessi ffukati u profondi dwar suġġetti speċifiċi — assoċjati ma' stil konjittiv orjentat lejn id-dettall.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-4\">4</a></sup>",
        "Jista' jidher mhux interessat jew imbiegħed meta jkun mgħobbi żżejjed, mhux maqtugħ.",
      ]},
      { items: [
        "<strong>Mhux</strong> skala lineari („aktar” jew „inqas” awtistiku) — huwa profil multidimensjonali, b'profili ta' appoġġ differenti f'kull qasam.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Mhux</strong> nuqqas ta' empatija: id-diffikultajiet ta' fehim reċiproku huma f'żewġ direzzjonijiet — anke n-nies mhux awtistiċi jsibuha diffiċli biex „jaqraw” lill-awtistiċi (il-„problema tal-empatija doppja”).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Mhux</strong> imġiba ħażina meta tinkiser rutina — hija rispons newroloġiku reali għat-telf tal-prevedibbiltà.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Avża minn qabel dwar kwalunkwe tibdil fir-rutina, anke jekk jidher banali — l-appoġġ viżwali u l-antiċipazzjoni għandhom sostenn empiriku.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Ibdel ir-regoli soċjali impliċiti f'regoli espliċiti (x'jsir, x'ma jsirx, meta).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Ippermetti waqfiet sensorji f'post kwiet meta jkun meħtieġ.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Uża l-interess iffukat bħala punt ta' dħul għall-kontenut tal-kurrikulu — saħħa, mhux distrazzjoni.<sup class=\"cite\"><a href=\"#ref-4\">4</a>,<a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "Jekk id-dijanjosi diġà teżisti, staqsi l-ewwel x'jaf il-ġenitur/kustodju li jaħdem — il-ġenituri tat-tfal awtistiċi spiss jafu aktar dwar uliedhom minn kwalunkwe rapport.",
        "Jekk m'hemmx dijanjosi, kun attent ħafna: iddeskrivi sitwazzjonijiet konkreti mingħajr qatt ma tuża l-kelma „awtiżmu” fl-ewwel laqgħa — „meta r-rutina tinbidel mingħajr twissija, ibnek/bintek jitħawwad ħafna b'mod li jmur lil hinn mit-tipiku”.",
        "Ivvalida l-isforz tal-ġenitur/kustodju — il-ħolqien ta' struttura u prevedibbiltà fid-dar huwa eżiġenti, u r-rikonoxximent tiegħu joħloq alleanza.",
        "Qatt tqabbel ma' „studenti oħra” jew ma' aħwa — kull profil tal-ispettru huwa differenti u t-tqabbil huwa dejjem kontroproduttiv.",
      ]},
      { items: [
        "Kriżijiet („meltdowns”) frekwenti wara l-jum skolastiku.",
        "Rifjut skolastiku persistenti assoċjat ma' tagħbija sensorja żejda.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Iżolament soċjali progressiv minkejja tentattivi ta' medjazzjoni.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Kitba bl-idejn diffiċli, bil-mod u ħafna drabi illeġġibbli — minħabba diffikultà motorja reali, mhux minħabba traskuraġni.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Diffikultà fl-organizzazzjoni spazjali tal-pitazz, fil-ġestjoni tal-materjal u fis-sekwenzi ta' passi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Jista' jidher “goff” — ixerred it-tazzi, jaħbat mal-għamara, isib diffikultà fl-isport.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Għeja sproporzjonata wara kompiti li jeħtieġu koordinazzjoni motorja fina sostnuta.",
        "Il-komponent konjittiv ġeneralment ikun ippreservat — minn hawn il-frustrazzjoni frekwenti bejn li jaf u li jirnexxielu juri.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Mhijiex</strong> għażż jew nuqqas ta' applikazzjoni.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Mhijiex</strong> biss kitba ħażina: it-terminu kliniku huwa Disturb tal-Iżvilupp tal-Koordinazzjoni (DCD) u jaffettwa l-ippjanar u s-sekwenzjar motorju, mhux biss il-kitba.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Ma tissolviex</strong> billi “tħarreġ aktar il-kitba”: l-intervent effettiv huwa orjentat lejn il-kompitu, mhux ir-ripetizzjoni mekkanika.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tħalli l-użu ta' tastiera/tablet f'produzzjonijiet bil-miktub estensivi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tnaqqas il-kkupjar mekkaniku mill-bord — tipprovdi noti meta jkun rilevanti.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Tipprovdi listi ta' kontroll espliċiti għal kompiti b'ħafna passi.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Tevalwa l-prodott skont il-kontenut, mhux skont il-preżentazzjoni fiżika.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Tispjega x'inhi d-dispraksja b'lingwaġġ sempliċi — il-biċċa l-kbira tal-ġenituri/kustodji qatt ma semgħu t-terminu: “hija diffikultà newroloġika fil-koordinazzjoni tal-movimenti, mhix traskuraġni u lanqas nuqqas ta' sforz”.",
        "Il-kitba illeġġibbli hija l-punt ta' l-akbar frizzjoni mal-ġenituri/kustodji — turi li l-evalwazzjoni issa qed tagħti valur lill-kontenut u mhux lill-forma tgħin biex ittaffi l-ansjetà taż-żewġ naħat.",
        "Tissuġġerixxi għodod prattiċi għad-dar: dettatura bil-vuċi fuq il-mowbajl għan-noti, tastiera għal xogħlijiet bil-miktub estensivi.",
        "Jekk ikun hemm storja ta' “huwa/hija għażżien/a” jew “ma jagħmilx sforz” fis-snin ta' qabel, semmiha direttament: “naf li diġà smajt dan qabel — il-qari tiegħi huwa differenti”.",
      ]},
      { items: [
        "Rifjut totali ta' produzzjoni bil-miktub.",
        "Iżolament soċjali f'kuntesti ta' attività fiżika.",
        "Sinjali ta' ansjetà somatizzata qabel l-evalwazzjonijiet bil-miktub — it-tbatija psikosoċjali hija parti mill-kwadru.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Itemm il-kompiti f'minuti waqt li l-klassi kollha ddum il-lezzjoni sħiħa.",
        "Jagħmel mistoqsijiet li joħorġu mill-ambitu tas-suġġett — jew jisfida b'mod attiv dak li qed jiġi mgħallem.",
        "Jista' jidher diżinteressat, indixxiplinat jew apatiku — spiss dawn huma sinjali ta' dwejjaq kroniku u ta' prestazzjoni baxxa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sensittività emozzjonali qawwija; jista' jkun anzjuż jew perfezzjonista — il-fatturi psikosoċjali huma determinanti fl-iżvilupp tat-talent.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Riskju reali ta' prestazzjoni baxxa — jista' jitgħallem jaħbi l-ħila tiegħu biex ma jispikkax soċjalment.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "<strong>Mhuwiex</strong> sinonimu ta' mġiba tajba u lanqas ta' riżultati tajbin — ħafna studenti b'kapaċità għolja jkollhom prestazzjoni medja minħabba nuqqas ta' interess.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Mhuwiex</strong> „ma jeħtieġx għajnuna”: jeħtieġ sfidi differenti, għax il-ħila ssir kisba biss meta tiġi żviluppata b'mod deliberat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Mhuwiex</strong> inkompatibbli man-newrodiverġenza — l-eċċezzjonalità doppja (2e) teżisti, hija frekwenti u spiss tkun moħbija.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Dejjem ħejji kompiti ta' estensjoni — mhux aktar mill-istess, iżda materjal aktar profond jew applikat.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Ippermetti riċerka indipendenti dwar suġġetti li jinteressaw lill-istudent fi ħdan il-programm.",
        "Evalwa skont l-isfida, mhux skont il-faċilità — itlob xogħlijiet aktar eżiġenti bi skambju għal volum iżgħar.",
        "Irrikonoxxi u valida s-sensittività emozzjonali mingħajr ma tippatoloġizzaha.",
      ]},
      { items: [
        "Antiċipa l-kburija u rreġiha mill-ġdid: „huwa b'mod ċar kapaċi ħafna — u huwa preċiżament għalhekk li d-dwejjaq qed joħloq problemi”.",
        "Spjega l-paradoss tal-kapaċità għolja: ir-riżultati tajbin ma jfissrux li hu tajjeb, u l-prestazzjoni baxxa minħabba nuqqas ta' interess hija komuni u riversibbli.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Jekk l-istudent jaħbi l-ħila tiegħu biex jintegra ruħu soċjalment, semmi dan b'attenzjoni — huwa sinjal ta' tbatija, mhux ta' modestja.",
        "Issuġġerixxi lill-ġenituri/kustodji biex japprezzaw il-proċess minflok ir-riżultat id-dar: il-kurżità, il-profondità u l-mistoqsijiet diffiċli jiswew aktar mill-marki għoljin f'kompiti faċli.",
      ]},
      { items: [
        "Sinjali ta' ansjetà jew dipressjoni assoċjati ma' perfezzjoniżmu estrem.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Iżolament soċjali mmarkat minn sens li hu „differenti” mill-pari tiegħu.",
        "Prestazzjoni akkademika baxxa f'daqqa fi student li qabel kien identifikat bħala kapaċi.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Jifhem ferm inqas milli jidher — il-lingwa ta' kuljum tiżviluppa ferm qabel il-lingwa akkademika, u għalhekk jista' jidher li jitkellem b'mod fluwenti mingħajr ma jsegwi l-kontenut.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Prestazzjoni akkademika baxxa fid-dehra, ħafna drabi sproporzjonata mal-kapaċità reali tiegħu.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Skiet fil-klassi — jista' jkun „perjodu sieket\" normali matul l-akkwist tal-lingwa, mhux nuqqas ta' interess.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Sa tmiem il-jum jista' jkun eżawrit minħabba li jkun qed jipproċessa l-lingwa f'ħin reali.",
        "Riskju ta' sottodijanjożi ta' bżonnijiet edukattivi reali (dislessja, ADHD) minħabba li kollox jiġi attribwit lill-ostakolu lingwistiku.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Mhuwiex</strong> nuqqas ta' intelliġenza jew ta' kapaċità.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Mhijiex</strong> biss kwistjoni ta' żmien: il-lingwa akkademika tieħu snin biex tiżviluppa u, mingħajr appoġġ espliċitu, ħafna studenti jistabbilizzaw f'livell funzjonali baxx.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>Ma tissolviex</strong> bi traduzzjoni awtomatika waqt il-lezzjoni — huwa proċess ta' snin, u l-lingwa materna hija riżorsa, mhux ostakolu.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Forniment ta' materjali bil-vokabolarju ewlieni tradott għal-lingwa materna.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Valutazzjoni tal-għarfien permezz ta' dimostrazzjoni viżiva jew prattika kull meta jkun possibbli.",
        "Tqabbil ma' sieħeb tal-klassi bilingwi għal medjazzjoni informali f'mumenti kritiċi.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Aċċettazzjoni tal-produzzjonijiet inizjali bi żbalji grammatikali — fl-ewwel fażi, ikkoreġi l-kontenut, mhux il-forma.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Il-laqgħa nnifisha hija ostakolu — il-ġenitur/kustodju jista' ma jkunx jitkellem il-lingwa tat-tagħlim biżżejjed għal konverżazzjoni kumplessa. Ħejji minn qabel materjali bil-miktub sempliċi, jew itlob appoġġ ta' traduzzjoni.",
        "Tassumix li l-ġenitur/kustodju jaf is-sistema edukattiva — spjega x'inhu s-servizz tal-psikoloġija u l-gwida tal-iskola, x'inhi miżura ta' appoġġ, x'tinvolvi valutazzjoni, mingħajr ma tagħti xejn bħala fatt magħruf.",
        "Iddistingwi b'mod ċar l-ostakolu lingwistiku mill-kapaċità akkademika: „ibnek/bintek kapaċi — qed jitgħallem il-lingwa fl-istess ħin li jitgħallem il-kontenut, li huwa ferm impenjattiv\".<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Kun sensittiv għall-kuntest tal-migrazzjoni: familji refuġjati jew f'sitwazzjoni irregolari jista' jkollhom nuqqas ta' fiduċja fl-istituzzjonijiet. Ibni l-fiduċja qabel ma titlob dokumentazzjoni jew riferimenti.",
      ]},
      { items: [
        "Sinjali ta' iżolament soċjali jew bullizmu marbuta mal-istatus ta' student barrani.",
        "Staġnar fl-akkwist tal-lingwa wara l-ewwel sena.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Sinjali ta' trawma marbuta mal-kuntest tal-migrazzjoni (speċjalment refuġjati).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Id-data tal-minorenni hija soġġetta għal protezzjoni msaħħa (Artikolu 8 GDPR). Il-kunsens tal-ġenituri jew tuturi huwa obbligatorju.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Iċċekkja fejn l-għodda taħżen id-data — fuq servers Ewropej jew mhux Ewropej, anonimizzata jew le.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Qatt iddaħħal ismijiet sħaħ, indirizzi, numri ta' identifikazzjoni jew dijanjosijiet kliniċi f'għodod tal-AI ġenerattiva.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-3\">3</a></sup>",
        "Iddistingwi l-użu istituzzjonali (l-iskola tiffirma kuntratt) mill-użu personali tal-għalliem (responsabbiltà individwali).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Sistemi mħarrġa l-aktar fuq data bl-Ingliż jistgħu jkollhom prestazzjoni inqas tajba bil-Malti u f'kuntesti Maltin.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Ir-rakkomandazzjonijiet awtomatiċi jistgħu jkabbru sterjotipi ta' ġeneru, etniċità jew klassi — iċċekkjahom b'mod kritiku.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Il-mudelli ta' „tbassir tar-riskju akkademiku” huma partikolarment problematiċi — spiss jirriproduċu inugwaljanzi eżistenti minflok ma jidentifikaw il-ħtiġijiet.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "L-għan huwa li tiżdied l-awtonomija tal-istudent, mhux li tissostitwixxi x-xogħol konjittiv li jiżviluppah.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Iddistingwi <strong>għodda ta' aċċess</strong> (text-to-speech għal student bid-dislessja) minn <strong>għodda ta' sostituzzjoni</strong> (ChatGPT jikteb il-kompożizzjoni).<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Evalwa regolarment: l-istudent qed jiżviluppa kompetenza, jew qed jiżviluppa dipendenza fuq l-għodda?<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
      { items: [
        "<strong>1.</strong> L-għodda ssolvi ostaklu reali jew toħloq shortcut li jaqbeż it-tagħlim?<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>2.</strong> Id-data mdaħħla hija protetta u jeżisti l-kunsens?",
        "<strong>3.</strong> Ir-riżultat tal-għodda se jiġi vverifikat minn bniedem qabel ma jasal għand l-istudent?<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "<strong>4.</strong> Teżisti alternattiva mingħajr AI li taħdem daqstant tajjeb?",
        "<strong>5.</strong> Jekk l-għodda tieqaf teżisti għada, l-istudent jibqa' bla appoġġ?",
      ]},
    ],
    references: [
      "L-Unjoni Ewropea. (2016). <em>Regolament (UE) 2016/679 (Regolament Ġenerali dwar il-Protezzjoni tad-Data)</em>, Artikolu 8. Il-Ġurnal Uffiċjali tal-Unjoni Ewropea, L 119.",
      "UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>. Paris: UNESCO.",
      "Miao, F., & Holmes, W. (2023). <em>Guidance for Generative AI in Education and Research</em>. Paris: UNESCO.",
      "Baker, R. S., & Hawn, A. (2022). Algorithmic bias in education. <em>International Journal of Artificial Intelligence in Education</em>, 32, 1052–1092.",
      "Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. <em>Trends in Cognitive Sciences</em>, 20(9), 676–688.",
    ]
    },
    oficina: { sections: [
      { items: [
        "Insaħħu lill-kollegi biex jintegraw l-IA b'mod responsabbli fit-tagħlim ta' lingwa barranija, bil-produzzjoni ta' materjali adattabbli għal diversi profili ta' tagħlim.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "M'huwiex preżentazzjoni — huwa ko-kostruzzjoni. Kull parteċipant joħroġ b'tal-inqas riżorsa waħda lesta biex tiġi ttestjata.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Qafas — il-problema tal-klassi eteroġenja u għaliex aktar mill-istess ma jaħdimx.",
        "<strong>10–25 min:</strong> Mappa tal-profili — preżentazzjoni tas-sitt karti tal-Farol, b'każijiet reali (anonimizzati).",
        "<strong>25–45 min:</strong> Wirja prattika — tliet għodod, tliet każijiet ta' użu, tliet profili distinti.",
        "<strong>45–75 min:</strong> Xogħol fil-pari — kull par jadatta materjal eżistenti għal profil speċifiku.",
        "<strong>75–85 min:</strong> Qsim mgħaġġel — kull par juri l-prodott tiegħu f'minuta waħda.",
        "<strong>85–90 min:</strong> Impenji — kull parteċipant jiddetermina materjal biex jittestja u tiġi ffissata sessjoni ta' feedback fi żmien 30 jum.",
      ]},
      { items: [
        "Aċċess għall-internet u għal kontijiet istituzzjonali fl-għodod murija.",
        "Materjali eżistenti ta' kull parteċipant (skeda, test, jew pjan ta' lezzjoni).",
        "Karti stampati tal-profili tal-Farol għal konsultazzjoni.",
      ]},
      { items: [
        "Kull parteċipant jipproduċi tal-inqas materjal adattat wieħed matul is-sessjoni.",
        "Sessjoni ta' feedback fi żmien 30 jum b'tal-inqas 60% tal-parteċipanti jirrapportaw implimentazzjoni effettiva.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Tal-inqas materjal wieħed prodott fis-sessjoni jiġi adottat bħala riżorsa kondiviża tad-dipartiment.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "L-Att dwar l-Edukazzjoni (Kap. 605, 2019) jobbliga l-inklużjoni u l-aċċess għall-edukazzjoni għat-tfal kollha.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Il-Politika tal-Edukazzjoni Inklussiva (2019, „Route to Quality Inclusion”) tartikola l-approċċ Malti għall-bżonnijiet speċjali.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Malta rratifikat il-Konvenzjoni tal-NU dwar id-Drittijiet tal-Persuni b'Diżabilità (CRPD).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "Id-differenzjazzjoni fil-klassi hija responsabbiltà ta' kull għalliem — materjal adattat, struzzjonijiet aktar ċari u ħin addizzjonali ma jeħtieġu l-ebda deċiżjoni formali.",
        "L-għalliem jista' jikkonsulta lill-INCO (Koordinatur tal-Inklużjoni) u lill-SMT qabel kull proċess formali.",
        "L-LSE fil-klassi jappoġġja lill-istudenti fil-ħidma ta' kuljum bħala parti mill-provvista ordinarja.",
      ]},
      { items: [
        "KNPD (Kummissjoni Nazzjonali Persuni b'Diżabilità) timmonitorja d-drittijiet u tinforma l-politika nazzjonali.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "LSE (Learning Support Educator) jappoġġja lill-istudenti b'bżonnijiet speċjali fil-klassi regolari.",
        "Id-Dipartiment tal-Inklużjoni u r-Riżorsi tal-Edukazzjoni (DIER) jimmaniġġja s-servizzi ta' bżonnijiet speċjali.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Individual Educational Programme (IEP) jistabbilixxi l-objettivi u l-adattamenti individwalizzati għal kull student.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Statement of Needs: dokument li jidentifika l-bżonnijiet ta' student wara stħarriġ professjonali.",
        "L-LSEs jappoġġjaw lill-istudenti li jeħtieġu appoġġ fil-klassi ordinarja.",
        "Psikologi skolastiċi huma disponibbli permezz tal-Iskejjel tal-Gvern u id-Direttorat għas-Servizzi Edukattivi.",
      ]},
      { items: [
        "F'Malta m'hemmx leġiżlazzjoni speċifika għall-istudenti b'abbiltà għolja — il-qafas huwa wieħed ta' politika, mhux ta' liġi.",
        "Il-Qafas Nazzjonali tal-Kurrikulu (2012) jitlob provvista differenzjata li tinkludi lil min juri abbiltà għolja.",
        "L-iskejjel joffru arrikkiment permezz ta' programmi u klabbs; l-aċċelerazzjoni tiġi deċiża fil-livell tal-iskola.",
      ]},
      { items: [
        "Il-Malti u l-Ingliż huma l-ilsna uffiċjali tal-istruzzjoni f'Malta.",
        "L-appoġġ lingwistiku addizzjonali huwa disponibbli għal studenti li l-lingwa materna tagħhom mhix il-Malti jew l-Ingliż.",
        "Programmi ta' integrazzjon għal studenti migranti u refuġjati huma koordinati mill-Aġenzija tal-Inklużjoni.",
      ]},
      { items: [
        "Il-Ministeru tal-Edukazzjoni u l-Impjieg jissorvelja l-politika u l-implimentazzjoni tal-inklużjoni.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Il-Kummissarju tal-Edukazzjoni jieħu l-ilmenti dwar id-drittijiet tal-edukazzjoni.",
        "L-iskejjel għandhom jipproduċu Pjan ta' Inklużjoni u jirreġistraw l-adattamenti li jsiru.",
        "Il-ġenituri huma msejħa biex jipparteċipaw fl-SDP u fil-laqgħat ta' reviżjoni.",
        "L-istudenti għandhom id-dritt li jiġu informati dwar id-drittijiet tagħhom fl-edukazzjoni.",
        "L-ilmenti jistgħu jiġu ppreżentati lill-Kummissarju tal-Edukazzjoni jew lill-Ombudsman· id-data kollha tal-istudenti hija protetta taħt l-Att dwar il-Protezzjoni tad-Data (Kap. 586).<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
      ]},
    ],
    references: [
      "<em>Il-Konvenzjoni tan-Nazzjonijiet Uniti dwar id-Drittijiet tal-Persuni b'Diżabilità</em> (CRPD, 2006), irratifikata minn Malta fl-2012; l-Artikolu 24 jistabbilixxi d-dritt għal edukazzjoni inklussiva.",
      "<em>L-Att dwar l-Edukazzjoni (Kapitolu 605 tal-Liġijiet ta' Malta)</em>; il-qafas legali ġenerali tal-edukazzjoni li jobbliga l-aċċess u l-inklużjoni għat-tfal kollha ta' età skolastika.",
      "<em>Politika dwar l-Edukazzjoni Inklussiva fl-Iskejjel</em> (Ministeru tal-Edukazzjoni, 2019); tartikola l-approċċ Malti għall-bżonnijiet edukattivi individwali, il-Learning Support Educators (LSE) u s-Individual Educational Programme (IEP).",
      "<em>L-Att dwar l-Opportunitajiet Indaqs (Persuni b'Diżabilità) (Kapitolu 413 tal-Liġijiet ta' Malta)</em>; jiżgura li l-persuni b'diżabilità jgawdu l-istess drittijiet fundamentali mingħajr diskriminazzjoni u jistabbilixxi l-KNPD.",
      "<em>L-Att dwar il-Protezzjoni tad-Data 2018 (Kapitolu 586 tal-Liġijiet ta' Malta)</em>, li jimplimenta r-Regolament Ġenerali dwar il-Protezzjoni tad-Data (GDPR); id-data kollha tal-istudenti hija protetta u ma tinqasamx mingħajr kunsens.",
    ] },
    diferenciacao: { sections: [
      { items: [
        "Id-differenzjazzjoni pedagoġika tfisser li naġġustaw il-mod kif ngħallmu — mhux li nbaxxu l-aspettattivi. L-għan tat-tagħlim jista' jkun l-istess għal kulħadd; dak li jvarja huwa l-mogħdija.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Il-mudell UDL (Universal Design for Learning, Disinn Universali għat-Tagħlim) jipproponi tliet prinċipji: diversi mezzi ta' rappreżentazzjoni (kif jiġi ppreżentat il-kontenut), diversi mezzi ta' azzjoni u espressjoni (kif iwieġeb l-istudent), u diversi mezzi ta' involviment (dak li jimmotiva lill-istudent).<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Id-differenzjazzjoni mhijiex li toħloq pjan ta' lezzjoni għal kull student — hija li toħloq biżżejjed flessibbiltà biex l-istess lezzjoni sservi profili differenti.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "<strong>Mhijiex</strong> li jitnaqqas il-kurrikulu għall-istudenti bl-aktar diffikultajiet.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Mhijiex</strong> li dejjem tingħata xogħol differenti lil studenti differenti — dan jiżola u jittikketta.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Mhijiex</strong> biss xogħol differenzjat fuq il-karta — id-differenzjazzjoni tinkludi l-mod kif l-għalliem jispjega, jistaqsi u jevalwa.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Għażla kkontrollata: toffri 2–3 għażliet ta' format ta' tweġiba (test miktub, orali, tpinġija skematika) — kulħadd iwieġeb għall-istess kontenut.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Sustenn (scaffolding): tipprovdi gwida strutturata lill-istudenti bl-aktar diffikultajiet; tneħħi l-gwida progressivament hekk kif tikber l-awtonomija.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Raggruppament flessibbli: gruppi skont l-interess, skont il-livell ta' ħakma, jew imħallta — biex iddur ħalli tevita gruppi fissi li jsiru identitajiet.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Aġġustamenti tal-ħin: aktar ħin ma jfissirx inqas rigorożità. Għal studenti bl-ADHD jew bid-dispraksja, taqsam ix-xogħol f'segmenti b'waqfiet ippjanati.",
        "Livell ta' kumplessità: għall-istess suġġett, toħloq verżjonijiet b'aktar jew inqas appoġġ lingwistiku, b'eżempji jew mingħajrhom, bi ħjiel viżiv jew mingħajru.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Evalwa dak li jaf l-istudent, mhux kif jikteb. Student bid-dislessja jista' juri l-ħakma kunċettwali tiegħu oralment jew b'appoġġ teknoloġiku.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "Rubriki ċari u kondiviżi qabel il-kompitu jippermettu lill-istudent ikun jaf x'inhu mistenni minnu irrispettivament mill-format magħżul.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Il-portfolio jew l-evalwazzjoni bbażata fuq l-evidenza jippermettu lill-istudent juri l-progress matul iż-żmien, mhux biss f'mument wieħed ta' test.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "Meta d-differenzjazzjoni fil-klassi ma tibqax biżżejjed u l-istudent xorta jibqa' bla aċċess għall-kurrikulu, dan huwa sinjal li jista' jkun meħtieġ appoġġ speċjalizzat.",
        "Id-differenzjazzjoni ma tissostitwixxix il-miżuri ta' appoġġ tal-iskola (SPO, terapisti, edukazzjoni speċjali) — hija dak li jiġri fil-klassi regolari bħala kumpliment.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Il-valutazzjoni formattiva hija kwalunkwe prattika li tiġbor informazzjoni dwar it-tagħlim matul il-proċess — u tuża dik l-informazzjoni biex taġġusta t-tagħlim jew l-appoġġ lill-istudent.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "B'differenza mill-valutazzjoni sommattiva (gradi finali), il-valutazzjoni formattiva ma għandhiex għalfejn ikollha grad — għandu jkollha feedback.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
        "Għall-istudenti newrodiverġenti, il-valutazzjoni formattiva hija importanti b'mod partikolari għax il-prestazzjoni f'test wieħed jista' ma jirriflettix dak li verament jafu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: fl-aħħar tal-lezzjoni, l-istudent iwieġeb mistoqsija f'2 minuti — l-għalliem jara minnufih min fehem u min ma fehimx.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Dawl tat-traffiku</strong>: aħdar (fhimt), isfar (għandi dubji), aħmar (ma fhimtx) — jistgħu jkunu karti fiżiċi, post-its, jew diġitali.",
        "<strong>Think-Pair-Share</strong>: l-istudent jaħseb waħdu, jiddiskuti ma' sieħeb, imbagħad jaqsam mal-klassi — inaqqas l-ansjetà ta' tweġiba diretta.",
        "<strong>Bieb tal-ħruġ</strong>: qabel ma jitlaq, l-istudent jgħid lill-għalliem ħaġa waħda li tgħallem u dubju wieħed li għad għandu.",
      ]},
      { items: [
        "Feedback effettiv huwa speċifiku, li jista' jittieħed azzjoni dwaru u mogħti fil-ħin: “f'paġna 2, l-argument jintilef għax tonqos ir-rabta mal-evidenza” huwa utli; “seta' kien aħjar” mhuwiex.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-4\">4</a></sup>",
        "Għall-istudenti b'ADHD: il-feedback immedjat huwa aktar effettiv minn dak imdewwem. Tistenniex sal-aħħar tax-xogħol.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Għall-istudenti bid-dislessja: il-feedback orali jew bl-awdjo jista' jkun aktar aċċessibbli minn kummenti miktuba twal.",
        "Evita li tqabbel lill-istudenti bejniethom — qabbel lill-istudent mal-progress tiegħu stess ta' qabel.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
      ]},
      { items: [
        "ADHD: valutazzjoni f'diversi mumenti qosra minflok test wieħed twil. Naqqas l-istimoli li jfixklu fl-ambjent tal-valutazzjoni.",
        "Dislessja: ippermetti tweġibiet orali, ħin żejjed, jew l-użu ta' test-għal-vuċi. Ivvaluta l-kontenut, mhux l-ortografija.",
        "Awtiżmu: valutazzjonijiet b'istruzzjonijiet miktuba ċari u mingħajr ambigwità. Avża minn qabel dwar bidliet fil-format.",
        "Talent eċċezzjonali: evita valutazzjonijiet ta' sempliċi riproduzzjoni tal-kontenut — inkludi mistoqsijiet ta' analiżi, sinteżi u ħolqien.",
      ]},
      { items: [
        "Meta, anke b'adattamenti fil-valutazzjoni, l-istudent ma jirnexxilux juri t-tagħlim, dan huwa sinjal li jista' jkun hemm ostaklu aktar profond li għandu jiġi investigat mal-SPO.",
        "Mudelli persistenti (xhur, mhux jiem) ta' diffikultà speċifika f'qasam għandhom jiġu rrappurtati formalment.",
      ]},
    ]},
  },

};
