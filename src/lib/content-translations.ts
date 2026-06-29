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
        "Start with what the student does well — the meeting cannot open as a list of complaints, or the parent/guardian becomes defensive.",
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
        "When the aim is not to assess writing, assess content separately from spelling.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Difficulty with unannounced changes, changes to timetable, room, or substitute teacher.",
        "Literal communication, misses nuance, irony, idiomatic expressions.",
        "Sensory sensitivity, fluorescent lighting, background noise, clothing labels can be intolerable.",
        "Focused and deep interests in specific topics.",
        "May appear disengaged or distant when overwhelmed, not switched off.",
      ]},
      { items: [
        "<strong>It is not</strong> a linear scale (\"more\" or \"less\" autistic), it is a multidimensional profile.",
        "<strong>It is not</strong> a lack of empathy, it is often the opposite, with difficulty filtering input.",
        "<strong>It is not</strong> bad behaviour when a routine is broken, it is a real neurological response.",
      ]},
      { items: [
        "Give advance warning of any change in routine, even apparently trivial ones.",
        "Make implicit social rules into explicit rules (what to do, what not to do, and when).",
        "Allow sensory breaks in a quiet space when needed.",
        "Use focused interests as an entry point into curriculum content.",
      ]},
      { items: [
        "If a diagnosis already exists, first ask what parents/guardians know works, parents of autistic children often know more about their child than any report.",
        "If there is no diagnosis, be very careful: describe concrete situations without ever using the word \"autism\" in a first meeting.",
        "Validate the parents/guardians' efforts, creating structure and predictability at home is demanding, and acknowledging it builds alliance.",
        "Never compare with \"other students\" or with siblings, every profile on the spectrum is different and comparison is always counterproductive.",
      ]},
      { items: [
        "Frequent meltdowns after the school day.",
        "Persistent school refusal associated with sensory overload.",
        "Progressive social isolation despite mediation attempts.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Handwriting is difficult, slow, and frequently illegible, not through carelessness but due to genuine motor difficulty.",
        "Difficulty with spatial organisation of notebook, managing materials, and sequencing steps.",
        "May appear \"clumsy\", knocking over cups, bumping into furniture, difficulty in sports.",
        "Disproportionate fatigue after tasks requiring sustained fine coordination.",
        "The cognitive component is generally intact, frequent frustration between knowing and being able to show it.",
      ]},
      { items: [
        "<strong>It is not</strong> laziness or lack of effort.",
        "<strong>It is not</strong> just poor handwriting, it affects planning and sequencing of tasks.",
        "<strong>It is not</strong> resolved by \"practising handwriting more\".",
      ]},
      { items: [
        "Allow use of keyboard/tablet for extended written work.",
        "Reduce mechanical copying from the board, provide notes where relevant.",
        "Provide explicit checklists for tasks with multiple steps.",
        "Assess the product by its content, not its physical presentation.",
      ]},
      { items: [
        "Explain what dyspraxia is in plain language, most parents/guardians have never heard the term.",
        "Illegible handwriting is the biggest point of friction with parents/guardians, show that assessment now values content over form.",
        "Suggest practical tools for home: voice dictation on a mobile phone for notes, keyboard for extended written work.",
        "If there is a history of \"they're lazy\" or \"they don't try\" from previous years, name that directly.",
      ]},
      { items: [
        "Complete refusal to produce written work.",
        "Social isolation in physical activity contexts.",
        "Signs of somatised anxiety before written assessments.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Finishes tasks in minutes while the class takes the whole lesson.",
        "Asks questions that go beyond the scope of the topic, or actively challenges what is being taught.",
        "May appear disinterested, disruptive, or apathetic, often signs of chronic boredom.",
        "Heightened emotional sensitivity; may be anxious, perfectionist, or unfairly demanding of themselves.",
        "Real risk of underperformance, learns to hide ability so as not to stand out socially.",
      ]},
      { items: [
        "<strong>It is not</strong> synonymous with good behaviour or good results, many gifted students have average results through disengagement.",
        "<strong>It is not</strong> \"doesn't need help\", they need different challenges, not less attention.",
        "<strong>It is not</strong> incompatible with neurodivergence, twice-exceptional (2e) exists and is common.",
      ]},
      { items: [
        "Always have extension tasks ready, not more of the same, but deeper or applied material.",
        "Allow independent research on topics of the student's interest within the curriculum.",
        "Assess by challenge, not ease, ask for more demanding work in exchange for less volume.",
        "Acknowledge and validate emotional sensitivity without pathologising.",
      ]},
      { items: [
        "Anticipate pride and redirect it: \"your son/daughter is clearly very capable, and it is precisely because of this that boredom is creating problems\".",
        "Explain the giftedness paradox: good results do not mean everything is fine.",
        "If the student hides their ability to fit in socially, name it carefully, it is a sign of distress, not modesty.",
        "Encourage parents/guardians to value process over results at home: curiosity, depth, and difficult questions are worth more than high marks on easy tasks.",
      ]},
      { items: [
        "Signs of anxiety or depression associated with extreme perfectionism.",
        "Marked social isolation from feeling \"different\" from peers.",
        "Sudden academic underperformance in a student previously identified as capable.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Understands far less than they appear to, may nod without having understood.",
        "Apparently low academic performance, frequently disproportionate to actual ability.",
        "Silence in class, may be an adaptive strategy, not disengagement.",
        "May be exhausted by the end of the day from mentally translating in real time.",
        "Risk of under-diagnosis of genuine educational needs by attributing everything to the language barrier.",
      ]},
      { items: [
        "<strong>It is not</strong> a lack of intelligence or ability.",
        "<strong>It is not</strong> just a matter of time, without explicit support, many EAL learners plateau at a low functional level.",
        "<strong>It is not</strong> resolved by automatic translation during the lesson, it is a process of years.",
      ]},
      { items: [
        "Provide materials with key vocabulary translated into the home language.",
        "Assess knowledge through visual or practical demonstration wherever possible.",
        "Pair with a bilingual peer for informal mediation at critical moments.",
        "Accept early written work with grammatical errors, correct content, not form, in the first phase.",
      ]},
      { items: [
        "The meeting itself is a barrier, parents/guardians may not speak English with sufficient proficiency.",
        "Do not assume parents/guardians know the school system, explain what the school counsellor does, what a support measure is, what an IEP entails.",
        "Clearly separate language barrier from academic ability.",
        "Be sensitive to the migration context: refugee families or those in irregular status may have distrust of institutions.",
      ]},
      { items: [
        "Signs of social isolation or bullying associated with being a foreign-language learner.",
        "Stagnation in language acquisition after the first year.",
        "Signs of trauma associated with migration context (especially refugees).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Data relating to minors is subject to enhanced protection (Art. 8 GDPR). Consent from parents/guardians is mandatory.",
        "Verify where the tool stores data, European or non-European servers, anonymised or not.",
        "Never enter full names, addresses, identification numbers, or clinical diagnoses into generative AI tools.",
        "Distinguish institutional use (the school signs a contract) from personal use by the teacher (individual responsibility).",
      ]},
      { items: [
        "Systems trained predominantly on English-language data may perform poorly in other languages and non-anglophone contexts.",
        "Automated recommendations may amplify gender, ethnic, or class stereotypes, verify critically.",
        "\"Academic risk prediction\" models are particularly problematic, they frequently reproduce existing inequalities.",
      ]},
      { items: [
        "The objective is to increase the student's autonomy, not to replace the cognitive work that develops it.",
        "Distinguish an <strong>access tool</strong> (text-to-speech for a student with dyslexia) from a <strong>substitution tool</strong> (ChatGPT writing the essay).",
        "Assess regularly: is the student developing competence, or developing dependency on the tool?",
      ]},
      { items: [
        "<strong>1.</strong> Does the tool resolve a real barrier or create a shortcut that bypasses learning?",
        "<strong>2.</strong> Is the data entered protected and does consent exist?",
        "<strong>3.</strong> Will the tool's output be verified by a human before reaching the student?",
        "<strong>4.</strong> Is there a non-AI alternative that works equally well?",
        "<strong>5.</strong> If the tool ceases to exist tomorrow, will the student be left helpless?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Equip colleagues for the responsible integration of AI in language teaching, producing materials adaptable to multiple learning profiles.",
        "This is not a presentation, it is a co-construction. Each participant leaves with at least one resource ready to test.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Framing, the problem of the mixed-ability class and why more of the same doesn't work.",
        "<strong>10–25 min:</strong> Profile mapping, presentation of the six Farol cards, with real (anonymised) cases.",
        "<strong>25–45 min:</strong> Practical demonstration, three tools, three use cases, three distinct profiles.",
        "<strong>45–75 min:</strong> Pair work, each pair adapts an existing material for a specific profile.",
        "<strong>75–85 min:</strong> Quick share, each pair presents their product in 1 minute.",
        "<strong>85–90 min:</strong> Commitments, each participant identifies a material to test and a feedback session is scheduled for 30 days' time.",
      ]},
      { items: [
        "Internet access and institutional accounts on the tools being demonstrated.",
        "Existing materials from each participant (a worksheet, a test, or a lesson plan).",
        "Printed Farol profile cards for reference.",
      ]},
      { items: [
        "Each participant produces at least one adapted material during the session.",
        "Feedback session at 30 days with at least 60% of participants reporting effective implementation.",
        "At least one material produced in the session is adopted as a shared departmental resource.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "UN Convention on the Rights of Persons with Disabilities (UNCRPD, 2006), ratified by Ireland and all EU Member States; establishes inclusive education as a right under Article 24.",
        "EU Strategy for the Rights of Persons with Disabilities 2021–2030, commits Member States to accessible education, reasonable accommodation, and anti-discrimination measures.",
        "Education for Persons with Special Educational Needs Act 2004 (EPSEN Act), Ireland's primary SEN legislation; establishes the right to an inclusive education and to an Individual Education Plan (IEP).",
        "National Council for Special Education (NCSE), statutory body that allocates Special Education Teachers (SET) and Special Needs Assistants (SNA) to schools; publishes guidelines and policies.",
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
        "An Individual Education Plan (IEP) is developed collaboratively (teacher, SET, SENO, parents/guardians, and where appropriate the student) for students with complex needs.",
        "Refer to an Educational Psychologist (NEPS) via the school's NEPS plan when a formal assessment is required to inform the level of support.",
        "For students with significant and complex needs, a Special Educational Needs Organiser (SENO) from the NCSE is the key external contact.",
      ]},
      { items: [
        "There is no specific legislation for gifted education in Ireland; however, EPSEN Act provisions apply where giftedness co-occurs with a special educational need (twice-exceptional).",
        "The NCSE policy advice (2017) acknowledges that highly able students may need differentiated provision; schools are encouraged to use SET time flexibly to support extension and enrichment.",
        "Teachers should document evidence of advanced ability and ensure challenge tasks are embedded in planning, not treated as extras.",
      ]},
      { items: [
        "EAL (English as an Additional Language) learners are supported under the DES EAL/Intercultural guidelines and allocated EAL teaching hours based on proficiency level.",
        "EAL teachers conduct an initial language assessment (using ISCED descriptors or equivalent) to determine the level of language support needed.",
        "Language support must be separated from SEN assessment: a student's language profile does not indicate a learning difficulty.",
        "Schools with significant EAL populations should have an Intercultural Education policy referencing the NCCA Intercultural Education framework.",
      ]},
      { items: [
        "Key contacts: Special Education Teacher (SET), Special Educational Needs Organiser (SENO/NCSE), NEPS Educational Psychologist, EAL Support Teacher.",
        "Key documents to know: IEP (Individual Education Plan), Student Support File, School Inclusion Policy, EPSEN Act 2004.",
        "First step when concerned about a student: document, discuss with SET, contact parents/guardians, in that order.",
        "Data protection: all student support data is subject to GDPR and the Data Protection Act 2018; do not share sensitive information outside the student support team without consent.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagogical differentiation means adjusting how you teach, not lowering expectations. The learning objective can be the same for all students; it is the path that varies.",
        "The UDL (Universal Design for Learning) model proposes three principles: multiple means of representation (how content is presented), multiple means of action and expression (how students respond), and multiple means of engagement (what motivates the student).",
        "Differentiating does not mean creating an individual lesson plan for each student, it means creating enough flexibility for the same lesson to serve different learner profiles.",
      ]},
      { items: [
        "<strong>It is not</strong> reducing the curriculum for struggling students.",
        "<strong>It is not</strong> always giving different tasks to different students, that isolates and labels.",
        "<strong>It is not</strong> only differentiated worksheets, differentiation includes how the teacher explains, questions, and assesses.",
      ]},
      { items: [
        "Controlled choice: offer 2–3 response format options (written, oral, schematic drawing), all students respond to the same content.",
        "Scaffolding: provide a structured framework for struggling students; gradually remove it as autonomy grows.",
        "Flexible grouping: groups by interest, mastery level, or mixed, rotate to avoid fixed groups that become identities.",
        "Time adjustments: more time does not mean less rigour. For students with ADHD or dyspraxia, break the task into segments with scheduled breaks.",
        "Complexity level: for the same topic, create versions with more or less language support, with or without examples, with or without visual cues.",
      ]},
      { items: [
        "Assess what the student knows, not how they write. A student with dyslexia may demonstrate conceptual mastery orally or with technological support.",
        "Clear rubrics shared before the task allow the student to know what is expected regardless of the chosen format.",
        "Portfolio or evidence-based assessment allows the student to show progress over time, not just at a single test moment.",
      ]},
      { items: [
        "When classroom differentiation is no longer sufficient and the student continues to struggle with access to the curriculum, this may signal a need for specialist support.",
        "Differentiation does not replace school support measures (school support team, therapists, special education), it is what happens in the mainstream classroom as a complement.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formative assessment is any practice that gathers information about learning during the process, and uses that information to adjust teaching or support for the student.",
        "Unlike summative assessment (final grades), formative assessment does not need a mark, it needs feedback.",
        "For neurodivergent students, formative assessment is especially important because performance on a one-off test may not reflect what they actually know.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: at the end of the lesson, the student answers a question in 2 minutes, the teacher immediately sees who understood and who did not.",
        "<strong>Traffic light</strong>: green (I understood), yellow (I have doubts), red (I did not understand), can be physical cards, post-its, or digital.",
        "<strong>Think-Pair-Share</strong>: the student thinks individually, discusses with a partner, then shares with the class, reduces anxiety around direct response.",
        "<strong>Exit door</strong>: before leaving, the student tells the teacher one thing they learned and one doubt they still have.",
      ]},
      { items: [
        "Effective feedback is specific, actionable, and timely: \'on page 2, the argument is lost because the link to the evidence is missing\' is useful; \'could be better\' is not.",
        "For students with ADHD: immediate feedback is more effective than delayed. Do not wait until the end of the task.",
        "For students with dyslexia: oral or audio feedback may be more accessible than extensive written comments.",
        "Avoid comparing students with each other, compare the student with their own previous progress.",
      ]},
      { items: [
        "ADHD: assessment at multiple short moments rather than a single long test. Reduce distracting stimuli in the assessment environment.",
        "Dyslexia: allow oral responses, extra time, or use of text-to-speech. Assess content, not spelling.",
        "Autism: assessments with clear, unambiguous written instructions. Give advance notice of changes in format.",
        "Giftedness: avoid assessments of mere content reproduction, include questions of analysis, synthesis, and creation.",
      ]},
      { items: [
        "When, even with assessment adaptations, the student cannot demonstrate learning, this is a sign there may be a deeper barrier to investigate with the school support team.",
        "Persistent patterns (months, not days) of specific difficulty in an area should be formally flagged.",
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
        "Fracaso disciplinario persistente a pesar de las adaptaciones en el aula.",
        "Señales de exclusión social por parte de los compañeros.",
        "Señales de comorbilidad (ansiedad, depresión, trastorno oposicionista desafiante): frecuentes en el TDAH y que justifican la derivación.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
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
        "Cuando el objetivo no es evaluar la escritura, evaluar el contenido por separado de la ortografía.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Dificultad con los cambios no anunciados, cambio de horario, de aula o de profesor sustituto.",
        "Comunicación literal, no capta matices, ironía ni expresiones idiomáticas.",
        "Sensibilidad sensorial, la luz fluorescente, el ruido de fondo o las etiquetas de la ropa pueden ser intolerables.",
        "Intereses focalizados y profundos sobre temas específicos.",
        "Puede parecer desinteresado o distante cuando está sobrecargado, no desconectado.",
      ]},
      { items: [
        "<strong>No es</strong> una escala lineal («más» o «menos» autista), es un perfil multidimensional.",
        "<strong>No es</strong> falta de empatía, con frecuencia es lo contrario, con dificultad para filtrar el entorno.",
        "<strong>No es</strong> mal comportamiento cuando se rompe una rutina, es una respuesta neurológica real.",
      ]},
      { items: [
        "Avisar con antelación de cualquier cambio de rutina, aunque parezca trivial.",
        "Convertir las reglas sociales implícitas en reglas explícitas (qué se hace, qué no se hace, cuándo).",
        "Permitir pausas sensoriales en un espacio tranquilo cuando sea necesario.",
        "Aprovechar el interés focalizado como punto de entrada a los contenidos curriculares.",
      ]},
      { items: [
        "Si ya existe diagnóstico, preguntar primero qué saben las familias que funciona, los padres de niños autistas suelen conocer a su hijo mejor que cualquier informe.",
        "Si no hay diagnóstico, ser muy cuidadoso/a: describir situaciones concretas sin utilizar nunca la palabra «autismo» en una primera reunión.",
        "Validar el esfuerzo de las familias, crear estructura y previsibilidad en casa es exigente, y reconocerlo genera alianza.",
        "Nunca comparar con «otros alumnos» o con hermanos, cada perfil del espectro es diferente y la comparación siempre es contraproducente.",
      ]},
      { items: [
        "Crisis frecuentes («meltdowns») después del día escolar.",
        "Rechazo escolar persistente asociado a sobrecarga sensorial.",
        "Aislamiento social progresivo a pesar de los intentos de mediación.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Escritura a mano difícil, lenta, frecuentemente ilegible, no por descuido sino por una dificultad motora real.",
        "Dificultad en la organización espacial del cuaderno, gestión de materiales y secuenciación de pasos.",
        "Puede parecer «torpe», derrama vasos, choca con muebles, tiene dificultades en educación física.",
        "Cansancio desproporcionado tras tareas que requieren coordinación fina sostenida.",
        "La componente cognitiva suele estar preservada, frustración frecuente entre saber y poder demostrarlo.",
      ]},
      { items: [
        "<strong>No es</strong> vagancia ni falta de esfuerzo.",
        "<strong>No es</strong> simplemente mala caligrafía, afecta a la planificación y secuenciación de tareas.",
        "<strong>No se resuelve</strong> con «practicar más la escritura».",
      ]},
      { items: [
        "Permitir el uso de teclado/tableta en producciones escritas extensas.",
        "Reducir la copia mecánica de la pizarra, proporcionar apuntes cuando sea relevante.",
        "Facilitar listas de verificación explícitas para tareas con múltiples pasos.",
        "Evaluar el producto por su contenido, no por su presentación física.",
      ]},
      { items: [
        "Explicar qué es la dispraxia en lenguaje sencillo, la mayoría de las familias nunca han oído el término.",
        "La caligrafía ilegible es el mayor punto de fricción con las familias, mostrar que la evaluación ahora valora el contenido y no la forma.",
        "Sugerir herramientas prácticas para casa: dictado por voz en el móvil para apuntes, teclado para trabajos escritos extensos.",
        "Si existe historial de «es vago/a» o «no se esfuerza» en cursos anteriores, nombrarlo directamente.",
      ]},
      { items: [
        "Rechazo total a producir trabajo escrito.",
        "Aislamiento social en contextos de actividad física.",
        "Señales de ansiedad somatizada antes de las evaluaciones escritas.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Termina las tareas en minutos mientras la clase tarda toda la sesión.",
        "Hace preguntas que salen del ámbito de la materia, o desafía activamente lo que se está enseñando.",
        "Puede aparentar desinterés, indisciplina o apatía, con frecuencia son señales de aburrimiento crónico.",
        "Sensibilidad emocional acentuada; puede ser ansioso/a, perfeccionista o injustamente exigente consigo mismo/a.",
        "Riesgo real de bajo rendimiento, aprende a ocultar la capacidad para no destacar socialmente.",
      ]},
      { items: [
        "<strong>No es</strong> sinónimo de buen comportamiento o buenos resultados, muchos alumnos con altas capacidades tienen resultados mediocres por desinterés.",
        "<strong>No es</strong> «no necesita ayuda», necesita desafíos diferentes, no menos atención.",
        "<strong>No es</strong> incompatible con la neurodivergencia, la doble excepcionalidad (2e) existe y es frecuente.",
      ]},
      { items: [
        "Tener siempre tareas de ampliación preparadas, no más de lo mismo, sino materia más profunda o aplicada.",
        "Permitir investigación independiente sobre temas de interés del alumno dentro del currículo.",
        "Evaluar por el nivel de desafío, no por la facilidad, pedir trabajos más exigentes a cambio de menor volumen.",
        "Reconocer y validar la sensibilidad emocional sin patologizarla.",
      ]},
      { items: [
        "Anticipar el orgullo y redirigirlo: «su hijo/hija es claramente muy capaz, y es precisamente por eso que el aburrimiento está creando problemas».",
        "Explicar la paradoja de las altas capacidades: buenos resultados no significan que todo esté bien.",
        "Si el alumno oculta su capacidad para integrarse socialmente, nombrarlo con cuidado, es una señal de sufrimiento, no de modestia.",
        "Proponer a las familias que valoren el proceso en lugar del resultado en casa: la curiosidad, la profundidad y las preguntas difíciles valen más que las notas altas en tareas fáciles.",
      ]},
      { items: [
        "Señales de ansiedad o depresión asociadas a un perfeccionismo extremo.",
        "Aislamiento social marcado por sentirse «diferente» de los compañeros.",
        "Bajo rendimiento académico repentino en un alumno previamente identificado como muy capaz.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Comprende mucho menos de lo que aparenta, puede asentir sin haber entendido.",
        "Rendimiento académico aparentemente bajo, frecuentemente desproporcionado a su capacidad real.",
        "Silencio en el aula, puede ser una estrategia adaptativa, no desinterés.",
        "Puede estar agotado/a al final del día por traducir mentalmente en tiempo real.",
        "Riesgo de infradiagnóstico de necesidades educativas reales al atribuir todo a la barrera lingüística.",
      ]},
      { items: [
        "<strong>No es</strong> falta de inteligencia ni de capacidad.",
        "<strong>No es</strong> solo cuestión de tiempo, sin apoyo explícito, muchos alumnos ANCE se estabilizan en un nivel funcional bajo.",
        "<strong>No se resuelve</strong> con traducción automática durante la clase, es un proceso de años.",
      ]},
      { items: [
        "Proporcionar materiales con vocabulario clave traducido a la lengua materna.",
        "Evaluar el conocimiento mediante demostración visual o práctica siempre que sea posible.",
        "Emparejar con un compañero bilingüe para mediación informal en momentos críticos.",
        "Aceptar producciones iniciales con errores gramaticales, corregir el contenido, no la forma, en la primera fase.",
      ]},
      { items: [
        "La propia reunión es una barrera, las familias pueden no hablar castellano con suficiente fluidez.",
        "No asumir que las familias conocen el sistema educativo español, explicar qué es el equipo de orientación, qué es una medida de apoyo lingüístico, qué implica un Plan de Apoyo.",
        "Separar claramente barrera lingüística de capacidad académica.",
        "Ser sensible al contexto migratorio: las familias refugiadas o en situación irregular pueden desconfiar de las instituciones.",
      ]},
      { items: [
        "Señales de aislamiento social o acoso vinculado a la condición de alumno extranjero.",
        "Estancamiento en la adquisición lingüística tras el primer año.",
        "Señales de trauma asociadas al contexto migratorio (especialmente refugiados).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Los datos de menores están sujetos a protección reforzada (Art. 8 RGPD). El consentimiento de las familias es obligatorio.",
        "Verificar dónde almacena datos la herramienta, servidores europeos o no europeos, anonimizados o no.",
        "Nunca introducir nombres completos, domicilios, números de identificación ni diagnósticos clínicos en herramientas de IA generativa.",
        "Distinguir el uso institucional (el centro firma un contrato) del uso personal del docente (responsabilidad individual).",
      ]},
      { items: [
        "Los sistemas entrenados principalmente con datos en inglés pueden tener un rendimiento inferior en español y en contextos hispanohablantes.",
        "Las recomendaciones automáticas pueden amplificar estereotipos de género, etnia o clase, verificar de forma crítica.",
        "Los modelos de «predicción de riesgo académico» son especialmente problemáticos, frecuentemente reproducen desigualdades existentes.",
      ]},
      { items: [
        "El objetivo es aumentar la autonomía del alumno, no sustituir el trabajo cognitivo que la desarrolla.",
        "Distinguir una <strong>herramienta de acceso</strong> (texto a voz para un alumno con dislexia) de una <strong>herramienta de sustitución</strong> (ChatGPT redactando la composición).",
        "Evaluar regularmente: ¿el alumno está desarrollando competencia o está desarrollando dependencia de la herramienta?",
      ]},
      { items: [
        "<strong>1.</strong> ¿La herramienta resuelve una barrera real o crea un atajo que omite el aprendizaje?",
        "<strong>2.</strong> ¿Los datos introducidos están protegidos y existe consentimiento?",
        "<strong>3.</strong> ¿El resultado de la herramienta será verificado por un humano antes de llegar al alumno?",
        "<strong>4.</strong> ¿Existe una alternativa sin IA que funcione igual de bien?",
        "<strong>5.</strong> Si la herramienta deja de existir mañana, ¿el alumno queda desamparado?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Capacitar a los compañeros para la integración responsable de la IA en la enseñanza de lengua extranjera, produciendo materiales adaptables a múltiples perfiles de aprendizaje.",
        "No es una presentación, es una co-construcción. Cada participante sale con al menos un recurso listo para probar.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Encuadre, el problema del aula heterogénea y por qué más de lo mismo no funciona.",
        "<strong>10–25 min:</strong> Mapa de perfiles, presentación de las seis tarjetas del Farol con casos reales (anonimizados).",
        "<strong>25–45 min:</strong> Demostración práctica, tres herramientas, tres casos de uso, tres perfiles distintos.",
        "<strong>45–75 min:</strong> Trabajo en parejas, cada pareja adapta un material existente para un perfil específico.",
        "<strong>75–85 min:</strong> Puesta en común rápida, cada pareja presenta su producto en 1 minuto.",
        "<strong>85–90 min:</strong> Compromisos, cada participante define un material a probar y se programa una sesión de seguimiento a los 30 días.",
      ]},
      { items: [
        "Acceso a internet y a cuentas institucionales en las herramientas que se van a demostrar.",
        "Materiales existentes de cada participante (una ficha, un examen o una programación de aula).",
        "Tarjetas impresas de los perfiles del Farol para consulta.",
      ]},
      { items: [
        "Cada participante produce al menos un material adaptado durante la sesión.",
        "Sesión de seguimiento a los 30 días con al menos el 60 % de los participantes reportando una implementación efectiva.",
        "Al menos un material producido en la sesión es adoptado como recurso compartido del departamento.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Convención de la ONU sobre los Derechos de las Personas con Discapacidad (CDPD, 2006), ratificada por España; el artículo 24 establece la educación inclusiva como derecho.",
        "Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE), marco normativo vigente del sistema educativo español; incorpora el enfoque DUA (Diseño Universal para el Aprendizaje) y refuerza la equidad e inclusión.",
        "Real Decreto 984/2021, regula la evaluación y promoción del alumnado; establece que las medidas de respuesta educativa deben estar recogidas en un Plan de Actuación Específico (PAE) para el alumnado con necesidades específicas de apoyo educativo (ACNEAE).",
        "Real Decreto 126/2014 y decretos autonómicos de desarrollo curricular, la educación es competencia compartida; cada comunidad autónoma regula los procedimientos de identificación y atención al ACNEAE.",
        "Resolución de la Secretaría de Estado de Educación sobre orientación educativa, establece los equipos de orientación educativa (EOE) en primaria y los departamentos de orientación en secundaria como referentes del proceso de evaluación psicopedagógica.",
      ]},
      { items: [
        "Aplicar el Diseño Universal para el Aprendizaje (DUA): ofrecer múltiples formas de representación, acción, expresión e implicación para todo el alumnado.",
        "Usar ajustes razonables en el aula sin necesidad de diagnóstico previo: tiempo ampliado, respuesta oral, acceso a tecnología de apoyo.",
        "Mantener un entorno de aula inclusivo que reduzca barreras sensoriales, organizativas y lingüísticas para todo el alumnado.",
        "Registrar observaciones informales de cualquier alumno/a que pueda tener necesidades no atendidas, es el punto de partida de cualquier proceso de orientación.",
      ]},
      { items: [
        "Consultar con el orientador/a educativo/a cuando un alumno/a no responde a las estrategias de aula tras un período razonable.",
        "La Comisión de Coordinación Pedagógica (CCP) o el equipo docente puede solicitar una evaluación psicopedagógica al departamento de orientación.",
        "El Dictamen de Escolarización es el documento técnico que determina las necesidades del alumno y las medidas ordinarias, específicas o extraordinarias de respuesta educativa.",
        "El Plan de Actuación Específico (PAE), equivalente al plan individualizado, es elaborado conjuntamente por el equipo docente, el orientador/a y las familias.",
        "Para necesidades complejas o cambio de modalidad de escolarización, interviene la inspección educativa y, en su caso, la administración autonómica.",
      ]},
      { items: [
        "La LOMLOE reconoce al alumnado con altas capacidades intelectuales como ACNEAE y obliga a los centros a identificarlos y atenderlos.",
        "La evaluación psicopedagógica determina el nivel de competencia curricular y las medidas de enriquecimiento, aceleración o flexibilización del período de escolarización.",
        "Los centros pueden solicitar a la administración educativa la flexibilización del período de escolarización obligatoria (anticipación de inicio o reducción de un curso) previa evaluación y autorización.",
      ]},
      { items: [
        "El alumnado con necesidades de apoyo lingüístico (ANCE) tiene derecho a medidas específicas de acogida e integración lingüística reguladas por cada comunidad autónoma.",
        "En muchas comunidades existen Aulas de Enlace, Aulas de Acogida o programas ATAL (Andalucía) para la atención inicial intensiva en lengua castellana.",
        "La evaluación inicial debe distinguir la competencia lingüística en castellano de la competencia académica real del alumno en su lengua de origen.",
        "Las familias con baja competencia en castellano tienen derecho a recibir información sobre el sistema educativo y los apoyos disponibles en una lengua que puedan comprender.",
      ]},
      { items: [
        "Figuras clave: orientador/a educativo/a, tutor/a, jefe/a de estudios, equipo de orientación educativa (EOE) de zona.",
        "Documentos clave: informe psicopedagógico, Dictamen de Escolarización, Plan de Actuación Específico (PAE), actas del equipo docente.",
        "Primer paso ante una preocupación por un alumno/a: registrar, hablar con el orientador/a, contactar a las familias, en ese orden.",
        "Protección de datos: todos los datos del alumnado están sujetos al RGPD y a la Ley Orgánica 3/2018 (LOPDGDD); no compartir información sensible fuera del equipo sin consentimiento.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "La diferenciación pedagógica consiste en ajustar cómo se enseña, no en rebajar las expectativas. El objetivo de aprendizaje puede ser el mismo para todos; lo que varía es el camino.",
        "El modelo UDL (Diseño Universal para el Aprendizaje) propone tres principios: múltiples medios de representación (cómo se presenta el contenido), múltiples medios de acción y expresión (cómo responde el alumno) y múltiples medios de implicación (qué motiva al alumno).",
        "Diferenciar no significa crear un plan de lección individual para cada alumno, significa crear suficiente flexibilidad para que la misma clase sirva a perfiles diferentes.",
      ]},
      { items: [
        "<strong>No es</strong> reducir el currículo para los alumnos con más dificultades.",
        "<strong>No es</strong> dar siempre tareas diferentes a alumnos diferentes, eso aísla y etiqueta.",
        "<strong>No es</strong> solo trabajo diferenciado en papel, la diferenciación incluye cómo el docente explica, pregunta y evalúa.",
      ]},
      { items: [
        "Elección controlada: ofrecer 2–3 opciones de formato de respuesta (escrito, oral, esquema), todos responden al mismo contenido.",
        "Andamiaje (scaffolding): proporcionar una estructura guiada a los alumnos con más dificultades; retirarla progresivamente a medida que crece la autonomía.",
        "Agrupación flexible: grupos por interés, nivel de dominio o mixtos, rotarlos para evitar grupos fijos que se conviertan en identidades.",
        "Ajustes de tiempo: más tiempo no significa menos rigor. Para alumnos con TDAH o dispraxia, dividir la tarea en segmentos con pausas programadas.",
        "Nivel de complejidad: para el mismo tema, crear versiones con más o menos apoyo lingüístico, con o sin ejemplos, con o sin pistas visuales.",
      ]},
      { items: [
        "Evaluar lo que el alumno sabe, no cómo escribe. Un alumno con dislexia puede demostrar dominio conceptual oralmente o con apoyo tecnológico.",
        "Las rúbricas claras compartidas antes de la tarea permiten al alumno saber lo que se espera independientemente del formato elegido.",
        "El portafolio o la evaluación basada en evidencias permite al alumno mostrar su progreso a lo largo del tiempo, no solo en un momento de examen.",
      ]},
      { items: [
        "Cuando la diferenciación en el aula deja de ser suficiente y el alumno sigue sin acceder al currículo, es señal de que puede ser necesario apoyo especializado.",
        "La diferenciación no sustituye las medidas de apoyo escolar (orientación, terapeutas, educación especial), es lo que ocurre en el aula regular como complemento.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "La evaluación formativa es cualquier práctica que recoge información sobre el aprendizaje durante el proceso, y usa esa información para ajustar la enseñanza o el apoyo al alumno.",
        "A diferencia de la evaluación sumativa (calificaciones finales), la formativa no necesita nota, necesita retroalimentación.",
        "Para los alumnos neurodivergentes, la evaluación formativa es especialmente importante porque el rendimiento en un examen puntual puede no reflejar lo que realmente saben.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: al final de la clase, el alumno responde a una pregunta en 2 minutos, el docente ve inmediatamente quién ha comprendido y quién no.",
        "<strong>Semáforo</strong>: verde (he entendido), amarillo (tengo dudas), rojo (no he entendido), puede ser tarjetas físicas, post-its o digital.",
        "<strong>Think-Pair-Share</strong>: el alumno piensa individualmente, lo comenta con un compañero y luego lo comparte con la clase, reduce la ansiedad ante la respuesta directa.",
        "<strong>Puerta de salida</strong>: antes de salir, el alumno dice al docente una cosa que ha aprendido y una duda que aún tiene.",
      ]},
      { items: [
        "La retroalimentación eficaz es específica, accionable y oportuna: \'en la página 2, el argumento se pierde porque falta el vínculo con la evidencia\' es útil; \'podría estar mejor\' no lo es.",
        "Para alumnos con TDAH: la retroalimentación inmediata es más eficaz que la diferida. No esperar al final de la tarea.",
        "Para alumnos con dislexia: la retroalimentación oral o en audio puede ser más accesible que los comentarios escritos extensos.",
        "Evitar comparar a los alumnos entre sí, comparar al alumno con su propia progresión anterior.",
      ]},
      { items: [
        "TDAH: evaluación en múltiples momentos cortos en lugar de un único examen largo. Reducir estímulos distractores en el entorno de evaluación.",
        "Dislexia: permitir respuestas orales, tiempo adicional o uso de texto a voz. Evaluar el contenido, no la ortografía.",
        "Autismo: evaluaciones con instrucciones escritas claras y sin ambigüedad. Avisar con antelación sobre cambios en el formato.",
        "Altas capacidades: evitar evaluaciones de mera reproducción de contenido, incluir cuestiones de análisis, síntesis y creación.",
      ]},
      { items: [
        "Cuando, incluso con adaptaciones de evaluación, el alumno no puede demostrar aprendizaje, es señal de que puede haber una barrera más profunda que investigar con el equipo de orientación.",
        "Los patrones persistentes (meses, no días) de dificultad específica en un área deben señalarse formalmente.",
      ]},
    ]},
  },

  fr: {
    tdah: { sections: [
      { items: [
        "Difficulté à maintenir l'attention sur des tâches longues ; se perd dans les consignes comportant plusieurs étapes.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-2\">2</a></sup>",
        "Mouvement constant : ne reste pas assis, s'agite des mains, se lève sans raison apparente.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
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
        "Commencer par ce que l'élève réussit : la réunion ne peut pas s'ouvrir comme une liste de plaintes, sinon le responsable légal se referme sur la défensive.",
        "Décrire des comportements observés, et non des diagnostics : « lorsqu'il y a plus de deux étapes d'affilée, il perd le fil » plutôt que « il a un TDAH ».",
        "Anticiper la réaction « à la maison, ce n'est pas comme ça » : expliquer que le contexte de groupe et l'exigence d'une attention prolongée en classe rendent les symptômes plus visibles.",
        "Si l'on suggère un bilan, le présenter comme une ressource et non comme une punition : « il existe un accompagnement qui peut beaucoup l'aider » plutôt que « il/elle doit être évalué(e) ».",
      ]},
      { items: [
        "Échec disciplinaire persistant malgré les aménagements en classe.",
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
        "Lorsque l'objectif n'est pas d'évaluer l'écriture, évaluer le contenu séparément de l'orthographe.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Difficulté avec les changements non annoncés, changement d'emploi du temps, de salle ou de professeur remplaçant.",
        "Communication littérale, ne perçoit pas les nuances, l'ironie ni les expressions idiomatiques.",
        "Sensibilité sensorielle, l'éclairage fluorescent, le bruit de fond ou les étiquettes de vêtements peuvent être intolérables.",
        "Intérêts restreints et très approfondis sur des sujets spécifiques.",
        "Peut paraître désintéressé ou distant quand il est en surcharge, pas déconnecté.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> une échelle linéaire (« plus » ou « moins » autiste), c'est un profil multidimensionnel.",
        "<strong>Ce n'est pas</strong> un manque d'empathie, c'est souvent l'inverse, avec une difficulté à filtrer les informations.",
        "<strong>Ce n'est pas</strong> un mauvais comportement quand une routine est rompue, c'est une vraie réponse neurologique.",
      ]},
      { items: [
        "Prévenir à l'avance de tout changement de routine, même apparemment anodin.",
        "Rendre explicites les règles sociales implicites (ce qu'on fait, ce qu'on ne fait pas, quand).",
        "Permettre des pauses sensorielles dans un espace calme si nécessaire.",
        "Exploiter l'intérêt restreint comme point d'entrée dans les contenus curriculaires.",
      ]},
      { items: [
        "Si un diagnostic existe déjà, demander d'abord aux familles ce qu'elles savent qui fonctionne, les parents d'enfants autistes connaissent souvent mieux leur enfant que n'importe quel rapport.",
        "En l'absence de diagnostic, être très prudent : décrire des situations concrètes sans jamais utiliser le mot « autisme » lors d'une première rencontre.",
        "Valider l'effort des familles, créer structure et prévisibilité à la maison est exigeant, et le reconnaître crée une alliance.",
        "Ne jamais comparer avec « d'autres élèves » ni avec des frères et sœurs, chaque profil du spectre est différent et la comparaison est toujours contre-productive.",
      ]},
      { items: [
        "Crises fréquentes (« meltdowns ») après la journée scolaire.",
        "Refus scolaire persistant lié à une surcharge sensorielle.",
        "Isolement social progressif malgré les tentatives de médiation.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Écriture manuscrite difficile, lente, souvent illisible, non par négligence mais par une vraie difficulté motrice.",
        "Difficultés d'organisation spatiale du cahier, de gestion du matériel et de séquençage des étapes.",
        "Peut paraître « maladroit », renverse des verres, se cogne dans les meubles, a des difficultés en sport.",
        "Fatigue disproportionnée après les tâches exigeant une coordination fine soutenue.",
        "La composante cognitive est généralement intacte, frustration fréquente entre savoir et pouvoir le montrer.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> de la paresse ou un manque d'application.",
        "<strong>Ce n'est pas</strong> seulement une mauvaise écriture, cela affecte la planification et le séquençage des tâches.",
        "<strong>Ce n'est pas</strong> résolu en « s'entraînant davantage à écrire ».",
      ]},
      { items: [
        "Autoriser l'utilisation d'un clavier/tablette pour les productions écrites longues.",
        "Réduire la copie mécanique au tableau, fournir des notes quand c'est pertinent.",
        "Fournir des listes de contrôle explicites pour les tâches à plusieurs étapes.",
        "Évaluer la production par son contenu, pas par sa présentation physique.",
      ]},
      { items: [
        "Expliquer ce qu'est la dyspraxie en langage simple, la plupart des familles n'ont jamais entendu ce terme.",
        "L'écriture illisible est le principal point de friction avec les familles, montrer que l'évaluation valorise désormais le contenu et non la forme.",
        "Suggérer des outils pratiques pour la maison : dictée vocale sur le téléphone pour les notes, clavier pour les productions écrites longues.",
        "S'il existe un historique de « il/elle est paresseux/se » ou « il/elle ne fait pas d'efforts » dans les années précédentes, le nommer directement.",
      ]},
      { items: [
        "Refus total de produire un travail écrit.",
        "Isolement social dans les contextes d'activité physique.",
        "Signes d'anxiété somatisée avant les évaluations écrites.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Termine les tâches en quelques minutes pendant que la classe met toute la séance.",
        "Pose des questions qui dépassent le cadre de la leçon, ou remet activement en question ce qui est enseigné.",
        "Peut paraître désintéressé, indiscipliné ou apathique, souvent signes d'ennui chronique.",
        "Sensibilité émotionnelle accentuée ; peut être anxieux/se, perfectionniste ou injustement exigeant(e) envers lui/elle-même.",
        "Risque réel de sous-performance, apprend à cacher sa capacité pour ne pas se démarquer socialement.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> synonyme de bon comportement ou de bons résultats, de nombreux élèves à haut potentiel ont des résultats moyens par désintérêt.",
        "<strong>Ce n'est pas</strong> « n'a pas besoin d'aide », il a besoin de défis différents, pas de moins d'attention.",
        "<strong>Ce n'est pas</strong> incompatible avec la neurodivergence, la double exceptionnalité (2e) existe et est fréquente.",
      ]},
      { items: [
        "Toujours avoir des tâches d'approfondissement prêtes, pas davantage de la même chose, mais une matière plus profonde ou appliquée.",
        "Permettre des recherches indépendantes sur des sujets d'intérêt dans le cadre du programme.",
        "Évaluer par le défi, pas par la facilité, demander un travail plus exigeant en échange d'un moindre volume.",
        "Reconnaître et valider la sensibilité émotionnelle sans la pathologiser.",
      ]},
      { items: [
        "Anticiper la fierté et la rediriger : « votre fils/fille est clairement très capable, et c'est précisément pour cela que l'ennui crée des problèmes ».",
        "Expliquer le paradoxe du haut potentiel : de bons résultats ne signifient pas que tout va bien.",
        "Si l'élève cache ses capacités pour s'intégrer socialement, le nommer avec précaution, c'est un signe de souffrance, pas de modestie.",
        "Encourager les familles à valoriser le processus plutôt que le résultat à la maison : la curiosité, la profondeur et les questions difficiles valent plus que de bonnes notes sur des tâches faciles.",
      ]},
      { items: [
        "Signes d'anxiété ou de dépression associés à un perfectionnisme extrême.",
        "Isolement social marqué par un sentiment d'être « différent » des camarades.",
        "Chute soudaine des résultats scolaires chez un élève précédemment identifié comme très capable.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Comprend bien moins qu'il n'y paraît, peut hocher la tête sans avoir compris.",
        "Performances scolaires apparemment faibles, souvent disproportionnées par rapport à ses capacités réelles.",
        "Silence en classe, peut être une stratégie adaptative, pas du désintérêt.",
        "Peut être épuisé en fin de journée à force de traduire mentalement en temps réel.",
        "Risque de sous-diagnostic de besoins éducatifs réels en attribuant tout à la barrière linguistique.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> un manque d'intelligence ou de capacités.",
        "<strong>Ce n'est pas</strong> seulement une question de temps, sans soutien explicite, de nombreux EANA se stabilisent à un niveau fonctionnel bas.",
        "<strong>Ce n'est pas</strong> résolu par la traduction automatique pendant la classe, c'est un processus de plusieurs années.",
      ]},
      { items: [
        "Fournir des supports avec le vocabulaire clé traduit dans la langue maternelle.",
        "Évaluer les connaissances par démonstration visuelle ou pratique autant que possible.",
        "Jumeler avec un camarade bilingue pour une médiation informelle dans les moments critiques.",
        "Accepter les premières productions avec des erreurs grammaticales, corriger le contenu, pas la forme, dans un premier temps.",
      ]},
      { items: [
        "La réunion elle-même est un obstacle, les familles peuvent ne pas maîtriser suffisamment le français.",
        "Ne pas supposer que les familles connaissent le système éducatif, expliquer ce qu'est le conseiller principal d'éducation (CPE), ce qu'est une mesure de soutien, ce qu'implique un PAP ou un PPS.",
        "Séparer clairement barrière linguistique et capacité académique.",
        "Être sensible au contexte migratoire : les familles réfugiées ou en situation irrégulière peuvent se méfier des institutions.",
      ]},
      { items: [
        "Signes d'isolement social ou de harcèlement liés à la condition d'élève allophone.",
        "Stagnation dans l'acquisition linguistique après la première année.",
        "Signes de traumatisme liés au contexte migratoire (particulièrement pour les réfugiés).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Les données concernant des mineurs font l'objet d'une protection renforcée (art. 8 RGPD). Le consentement des familles est obligatoire.",
        "Vérifier où l'outil stocke les données, serveurs européens ou non, anonymisés ou non.",
        "Ne jamais saisir des noms complets, adresses, numéros d'identification ou diagnostics cliniques dans des outils d'IA générative.",
        "Distinguer l'usage institutionnel (l'établissement signe un contrat) de l'usage personnel de l'enseignant (responsabilité individuelle).",
      ]},
      { items: [
        "Les systèmes entraînés principalement sur des données en anglais peuvent avoir des performances moindres en français et dans les contextes francophones.",
        "Les recommandations automatiques peuvent amplifier des stéréotypes de genre, d'origine ou de classe, vérifier de manière critique.",
        "Les modèles de « prédiction de risque scolaire » sont particulièrement problématiques, ils reproduisent souvent des inégalités existantes.",
      ]},
      { items: [
        "L'objectif est d'accroître l'autonomie de l'élève, pas de se substituer au travail cognitif qui la développe.",
        "Distinguer un <strong>outil d'accès</strong> (synthèse vocale pour un élève dyslexique) d'un <strong>outil de substitution</strong> (ChatGPT rédigeant la rédaction).",
        "Évaluer régulièrement : l'élève développe-t-il une compétence ou une dépendance à l'outil ?",
      ]},
      { items: [
        "<strong>1.</strong> L'outil résout-il une vraie barrière ou crée-t-il un raccourci qui contourne l'apprentissage ?",
        "<strong>2.</strong> Les données saisies sont-elles protégées et le consentement existe-t-il ?",
        "<strong>3.</strong> Le résultat produit par l'outil sera-t-il vérifié par un humain avant d'arriver à l'élève ?",
        "<strong>4.</strong> Existe-t-il une alternative sans IA qui fonctionne tout aussi bien ?",
        "<strong>5.</strong> Si l'outil disparaît demain, l'élève se retrouvera-t-il démuni ?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Outiller les collègues pour l'intégration responsable de l'IA dans l'enseignement des langues, en produisant des matériaux adaptables à de multiples profils d'apprentissage.",
        "Ce n'est pas une présentation, c'est une co-construction. Chaque participant repart avec au moins une ressource prête à tester.",
      ]},
      { items: [
        "<strong>0–10 min :</strong> Cadrage, le problème de la classe hétérogène et pourquoi faire toujours plus de la même chose ne fonctionne pas.",
        "<strong>10–25 min :</strong> Cartographie des profils, présentation des six fiches du Farol avec des cas réels (anonymisés).",
        "<strong>25–45 min :</strong> Démonstration pratique, trois outils, trois cas d'usage, trois profils distincts.",
        "<strong>45–75 min :</strong> Travail en binômes, chaque binôme adapte un matériau existant à un profil spécifique.",
        "<strong>75–85 min :</strong> Mise en commun rapide, chaque binôme présente sa production en 1 minute.",
        "<strong>85–90 min :</strong> Engagements, chaque participant définit un matériau à tester et une session de retour d'expérience est planifiée à 30 jours.",
      ]},
      { items: [
        "Accès à internet et aux comptes institutionnels sur les outils présentés.",
        "Matériaux existants de chaque participant (une fiche, un contrôle ou une fiche de préparation de cours).",
        "Fiches imprimées des profils du Farol pour consultation.",
      ]},
      { items: [
        "Chaque participant produit au moins un matériau adapté pendant la session.",
        "Session de retour d'expérience à 30 jours avec au moins 60 % des participants signalant une mise en œuvre effective.",
        "Au moins un matériau produit lors de la session est adopté comme ressource partagée du département.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Convention de l'ONU relative aux droits des personnes handicapées (CDPH, 2006), ratifiée par la France ; l'article 24 établit l'éducation inclusive comme un droit.",
        "Loi du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées, texte fondateur de la scolarisation inclusive en France ; crée le droit à la scolarisation en milieu ordinaire et institue la MDPH (Maison Départementale des Personnes Handicapées).",
        "Loi du 8 juillet 2013 d'orientation et de programmation pour la refondation de l'École de la République, renforce l'école inclusive et la lutte contre les inégalités ; crée l'ESPE (devenu INSPE).",
        "Loi du 26 juillet 2019 pour une école de la confiance, inscrit l'école inclusive dans le code de l'éducation ; généralise les ULIS (Unités Localisées pour l'Inclusion Scolaire) et les PIAL (Pôles Inclusifs d'Accompagnement Localisé) pour la gestion des AESH.",
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
        "Le Projet Personnalisé de Scolarisation (PPS) est élaboré par l'équipe pluridisciplinaire de la MDPH pour les élèves reconnus en situation de handicap ; il ouvre droit à la notification d'un AESH.",
        "La demande de reconnaissance du handicap et des mesures associées est déposée par les familles auprès de la MDPH ; l'école accompagne mais ne décide pas.",
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
        "Protection des données : toutes les données élèves sont soumises au RGPD et à la loi Informatique et Libertés ; ne pas partager d'informations sensibles hors de l'équipe sans consentement.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "La différenciation pédagogique consiste à ajuster la façon d\'enseigner, pas à abaisser les attentes. L\'objectif d\'apprentissage peut être le même pour tous ; c\'est le chemin qui varie.",
        "Le modèle UDL (Conception Universelle de l\'Apprentissage) propose trois principes : de multiples moyens de représentation (comment le contenu est présenté), de multiples moyens d\'action et d\'expression (comment l\'élève répond) et de multiples moyens d\'engagement (ce qui motive l\'élève).",
        "Différencier ne signifie pas créer un plan de cours individuel pour chaque élève, cela signifie créer suffisamment de flexibilité pour que le même cours serve des profils différents.",
      ]},
      { items: [
        "<strong>Ce n\'est pas</strong> réduire le programme pour les élèves en difficulté.",
        "<strong>Ce n\'est pas</strong> toujours donner des tâches différentes à des élèves différents, cela isole et étiquette.",
        "<strong>Ce n\'est pas</strong> seulement des fiches différenciées, la différenciation inclut la façon dont l\'enseignant explique, questionne et évalue.",
      ]},
      { items: [
        "Choix contrôlé : proposer 2–3 options de format de réponse (écrit, oral, schéma), tous les élèves répondent au même contenu.",
        "Étayage (scaffolding) : fournir un cadre structuré aux élèves en difficulté ; le retirer progressivement à mesure que l\'autonomie grandit.",
        "Regroupement flexible : groupes par intérêt, niveau de maîtrise ou mixtes, les faire tourner pour éviter les groupes fixes qui deviennent des identités.",
        "Ajustements du temps : plus de temps ne signifie pas moins de rigueur. Pour les élèves avec TDAH ou dyspraxie, diviser la tâche en segments avec des pauses planifiées.",
        "Niveau de complexité : pour le même sujet, créer des versions avec plus ou moins de soutien linguistique, avec ou sans exemples, avec ou sans indices visuels.",
      ]},
      { items: [
        "Évaluer ce que l\'élève sait, pas comment il écrit. Un élève dyslexique peut démontrer sa maîtrise conceptuelle oralement ou avec un soutien technologique.",
        "Des rubriques claires partagées avant la tâche permettent à l\'élève de savoir ce qui est attendu quel que soit le format choisi.",
        "Le portfolio ou l\'évaluation par les preuves permet à l\'élève de montrer sa progression dans le temps, pas seulement lors d\'un moment d\'évaluation.",
      ]},
      { items: [
        "Quand la différenciation en classe n\'est plus suffisante et que l\'élève continue à ne pas accéder au programme, c\'est le signe qu\'un soutien spécialisé peut être nécessaire.",
        "La différenciation ne remplace pas les mesures de soutien scolaire (psychologue scolaire, thérapeutes, éducation spécialisée), c\'est ce qui se passe en classe ordinaire en complément.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "L\'évaluation formative est toute pratique qui recueille des informations sur l\'apprentissage pendant le processus, et utilise ces informations pour ajuster l\'enseignement ou le soutien à l\'élève.",
        "Contrairement à l\'évaluation sommative (notes finales), la formative n\'a pas besoin d\'une note, elle a besoin d\'un retour.",
        "Pour les élèves neurodivergents, l\'évaluation formative est particulièrement importante car la performance à un test ponctuel peut ne pas refléter ce qu\'ils savent réellement.",
      ]},
      { items: [
        "<strong>Exit ticket</strong> : à la fin du cours, l\'élève répond à une question en 2 minutes, l\'enseignant voit immédiatement qui a compris et qui n\'a pas compris.",
        "<strong>Feu tricolore</strong> : vert (j\'ai compris), jaune (j\'ai des doutes), rouge (je n\'ai pas compris), peut être des cartes physiques, des post-its ou numérique.",
        "<strong>Think-Pair-Share</strong> : l\'élève réfléchit individuellement, en discute avec un pair, puis partage avec la classe, réduit l\'anxiété face à la réponse directe.",
        "<strong>Porte de sortie</strong> : avant de partir, l\'élève dit à l\'enseignant une chose qu\'il a apprise et un doute qu\'il a encore.",
      ]},
      { items: [
        "Un retour efficace est spécifique, actionnable et donné à temps : \'à la page 2, l\'argument se perd parce que le lien avec la preuve manque\' est utile ; \'pourrait être mieux\' ne l\'est pas.",
        "Pour les élèves avec TDAH : le retour immédiat est plus efficace que le retour différé. Ne pas attendre la fin de la tâche.",
        "Pour les élèves dyslexiques : le retour oral ou audio peut être plus accessible que les commentaires écrits extensifs.",
        "Éviter de comparer les élèves entre eux, comparer l\'élève avec sa propre progression antérieure.",
      ]},
      { items: [
        "TDAH : évaluation en plusieurs courts moments plutôt qu\'un seul long examen. Réduire les stimuli distrayants dans l\'environnement d\'évaluation.",
        "Dyslexie : autoriser les réponses orales, le temps supplémentaire ou l\'utilisation de la synthèse vocale. Évaluer le contenu, pas l\'orthographe.",
        "Autisme : évaluations avec des instructions écrites claires et sans ambiguïté. Prévenir à l\'avance des changements de format.",
        "Haut potentiel : éviter les évaluations de simple reproduction de contenu, inclure des questions d\'analyse, de synthèse et de création.",
      ]},
      { items: [
        "Quand, même avec des adaptations d\'évaluation, l\'élève ne peut pas démontrer ses apprentissages, c\'est le signe qu\'il peut y avoir une barrière plus profonde à investiguer avec le psychologue scolaire.",
        "Des schémas persistants (mois, pas jours) de difficulté spécifique dans un domaine doivent être signalés formellement.",
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
        "Consentire un movimento legittimo (distribuire i materiali, cancellare la lavagna, portare ambasciate).",
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
        "Insuccesso disciplinare persistente nonostante gli adattamenti in classe.",
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
        "Quando l'obiettivo non è valutare la scrittura, valutare il contenuto separatamente dall'ortografia.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Difficoltà con i cambiamenti non annunciati, variazione dell'orario, dell'aula o del professore supplente.",
        "Comunicazione letterale, non coglie sfumature, ironia o espressioni idiomatiche.",
        "Sensibilità sensoriale, l'illuminazione fluorescente, il rumore di fondo o le etichette dei vestiti possono essere intollerabili.",
        "Interessi focalizzati e profondi su argomenti specifici.",
        "Può sembrare disinteressato o distante quando è in sovraccarico, non disconnesso.",
      ]},
      { items: [
        "<strong>Non è</strong> una scala lineare («più» o «meno» autistico), è un profilo multidimensionale.",
        "<strong>Non è</strong> mancanza di empatia, spesso è il contrario, con difficoltà a filtrare gli stimoli.",
        "<strong>Non è</strong> un cattivo comportamento quando una routine viene interrotta, è una risposta neurologica reale.",
      ]},
      { items: [
        "Avvisare in anticipo di qualsiasi cambiamento di routine, anche apparentemente banale.",
        "Rendere esplicite le regole sociali implicite (cosa si fa, cosa non si fa, quando).",
        "Consentire pause sensoriali in uno spazio tranquillo quando necessario.",
        "Sfruttare l'interesse focalizzato come punto di ingresso nei contenuti curricolari.",
      ]},
      { items: [
        "Se esiste già una diagnosi, chiedere prima alle famiglie cosa sanno che funziona, i genitori di bambini autistici spesso conoscono il proprio figlio meglio di qualsiasi relazione clinica.",
        "In assenza di diagnosi, essere molto prudenti: descrivere situazioni concrete senza mai usare la parola «autismo» in un primo incontro.",
        "Validare lo sforzo delle famiglie, creare struttura e prevedibilità a casa è impegnativo, e riconoscerlo crea alleanza.",
        "Non confrontare mai con «altri alunni» o con i fratelli, ogni profilo dello spettro è diverso e il confronto è sempre controproducente.",
      ]},
      { items: [
        "Crisi («meltdown») frequenti dopo la giornata scolastica.",
        "Rifiuto scolastico persistente associato a sovraccarico sensoriale.",
        "Isolamento sociale progressivo nonostante i tentativi di mediazione.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Scrittura a mano difficile, lenta, spesso illeggibile, non per negligenza ma per una reale difficoltà motoria.",
        "Difficoltà nell'organizzazione spaziale del quaderno, nella gestione dei materiali e nella sequenza dei passaggi.",
        "Può sembrare «goffo», rovescia bicchieri, urta i mobili, ha difficoltà nelle attività fisiche.",
        "Affaticamento sproporzionato dopo compiti che richiedono coordinazione fine sostenuta.",
        "La componente cognitiva è generalmente intatta, frequente frustrazione tra il sapere e il riuscire a dimostrarlo.",
      ]},
      { items: [
        "<strong>Non è</strong> pigrizia o mancanza di impegno.",
        "<strong>Non è</strong> solo una cattiva calligrafia, riguarda la pianificazione e il sequenziamento dei compiti.",
        "<strong>Non si risolve</strong> con «esercitarsi di più nella scrittura».",
      ]},
      { items: [
        "Consentire l'uso di tastiera/tablet nelle produzioni scritte estese.",
        "Ridurre la copia meccanica dalla lavagna, fornire appunti quando è opportuno.",
        "Fornire checklist esplicite per i compiti con più passaggi.",
        "Valutare il prodotto per il suo contenuto, non per la sua presentazione fisica.",
      ]},
      { items: [
        "Spiegare cos'è la disprassia in linguaggio semplice, la maggior parte delle famiglie non ha mai sentito questo termine.",
        "La calligrafia illeggibile è il principale punto di attrito con le famiglie, mostrare che la valutazione valorizza ora il contenuto e non la forma.",
        "Suggerire strumenti pratici per casa: dettatura vocale sul cellulare per gli appunti, tastiera per le produzioni scritte estese.",
        "Se esiste una storia di «è pigro/a» o «non si impegna» negli anni precedenti, nominarla direttamente.",
      ]},
      { items: [
        "Rifiuto totale di produrre elaborati scritti.",
        "Isolamento sociale nei contesti di attività fisica.",
        "Segni di ansia somatizzata prima delle verifiche scritte.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Termina i compiti in pochi minuti mentre la classe impiega l'intera ora.",
        "Pone domande che esulano dall'argomento, o sfida attivamente ciò che viene insegnato.",
        "Può sembrare disinteressato, indisciplinato o apatico, spesso segnali di noia cronica.",
        "Sensibilità emotiva accentuata; può essere ansioso/a, perfezionista o ingiustamente esigente con se stesso/a.",
        "Rischio reale di scarso rendimento, impara a nascondere le proprie capacità per non distinguersi socialmente.",
      ]},
      { items: [
        "<strong>Non è</strong> sinonimo di buon comportamento o buoni risultati, molti alunni plusdotati hanno risultati nella media per disinteresse.",
        "<strong>Non è</strong> «non ha bisogno di aiuto», ha bisogno di sfide diverse, non di meno attenzione.",
        "<strong>Non è</strong> incompatibile con la neurodivergenza, la doppia eccezionalità (2e) esiste ed è frequente.",
      ]},
      { items: [
        "Avere sempre pronti compiti di approfondimento, non più della stessa cosa, ma materiale più profondo o applicato.",
        "Permettere la ricerca indipendente su argomenti di interesse dell'alunno nell'ambito del programma.",
        "Valutare per il livello di sfida, non per la facilità, richiedere un lavoro più impegnativo in cambio di minor volume.",
        "Riconoscere e validare la sensibilità emotiva senza patologizzarla.",
      ]},
      { items: [
        "Anticipare l'orgoglio e reindirizzarlo: «suo figlio/sua figlia è chiaramente molto capace, ed è proprio per questo che la noia sta creando problemi».",
        "Spiegare il paradosso della plusdotazione: buoni risultati non significano che vada tutto bene.",
        "Se l'alunno nasconde le proprie capacità per integrarsi socialmente, nominarlo con cautela, è un segnale di sofferenza, non di modestia.",
        "Proporre alle famiglie di valorizzare il processo piuttosto che il risultato a casa: la curiosità, la profondità e le domande difficili valgono più che voti alti in compiti facili.",
      ]},
      { items: [
        "Segnali di ansia o depressione associati a un perfezionismo estremo.",
        "Isolamento sociale marcato dal sentirsi «diverso» dai compagni.",
        "Calo improvviso del rendimento scolastico in un alunno precedentemente identificato come capace.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Capisce molto meno di quanto sembri, può annuire senza aver capito.",
        "Rendimento scolastico apparentemente basso, spesso sproporzionato rispetto alle capacità reali.",
        "Silenzio in classe, può essere una strategia adattiva, non disinteresse.",
        "Può essere esausto a fine giornata per aver tradotto mentalmente in tempo reale.",
        "Rischio di sottodiagnosi di bisogni educativi reali attribuendo tutto alla barriera linguistica.",
      ]},
      { items: [
        "<strong>Non è</strong> mancanza di intelligenza o capacità.",
        "<strong>Non è</strong> solo una questione di tempo, senza un supporto esplicito, molti studenti con italiano come L2 si stabilizzano a un livello funzionale basso.",
        "<strong>Non si risolve</strong> con la traduzione automatica durante la lezione, è un processo di anni.",
      ]},
      { items: [
        "Fornire materiali con il vocabolario chiave tradotto nella lingua madre.",
        "Valutare le conoscenze attraverso la dimostrazione visiva o pratica ove possibile.",
        "Affiancare un compagno bilingue per la mediazione informale nei momenti critici.",
        "Accettare le prime produzioni con errori grammaticali, correggere il contenuto, non la forma, nella prima fase.",
      ]},
      { items: [
        "La riunione stessa è una barriera, le famiglie possono non padroneggiare sufficientemente l'italiano.",
        "Non presumere che le famiglie conoscano il sistema scolastico italiano, spiegare cos'è lo sportello di ascolto psicologico, cos'è una misura di supporto, cosa prevede il Protocollo di Accoglienza.",
        "Separare chiaramente barriera linguistica e capacità accademica.",
        "Essere sensibili al contesto migratorio: le famiglie rifugiate o in condizione irregolare possono diffidare delle istituzioni.",
      ]},
      { items: [
        "Segnali di isolamento sociale o bullismo legati alla condizione di alunno straniero.",
        "Stagnazione nell'acquisizione linguistica dopo il primo anno.",
        "Segnali di trauma associati al contesto migratorio (in particolare per i rifugiati).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "I dati relativi ai minori sono soggetti a protezione rafforzata (art. 8 GDPR). Il consenso delle famiglie è obbligatorio.",
        "Verificare dove lo strumento archivia i dati, server europei o non europei, anonimizzati o no.",
        "Non inserire mai nomi completi, indirizzi, numeri di identificazione o diagnosi cliniche in strumenti di IA generativa.",
        "Distinguere l'uso istituzionale (la scuola firma un contratto) dall'uso personale del docente (responsabilità individuale).",
      ]},
      { items: [
        "I sistemi addestrati prevalentemente su dati in lingua inglese possono avere prestazioni inferiori in italiano e nei contesti italofoni.",
        "Le raccomandazioni automatiche possono amplificare stereotipi di genere, etnia o classe, verificare in modo critico.",
        "I modelli di «previsione del rischio scolastico» sono particolarmente problematici, riproducono spesso le disuguaglianze esistenti.",
      ]},
      { items: [
        "L'obiettivo è aumentare l'autonomia dell'alunno, non sostituire il lavoro cognitivo che la sviluppa.",
        "Distinguere uno <strong>strumento di accesso</strong> (sintesi vocale per un alunno con dislessia) da uno <strong>strumento di sostituzione</strong> (ChatGPT che scrive il tema).",
        "Valutare regolarmente: l'alunno sta sviluppando competenza o sta sviluppando dipendenza dallo strumento?",
      ]},
      { items: [
        "<strong>1.</strong> Lo strumento risolve una barriera reale o crea una scorciatoia che bypassa l'apprendimento?",
        "<strong>2.</strong> I dati inseriti sono protetti e il consenso esiste?",
        "<strong>3.</strong> Il risultato prodotto dallo strumento verrà verificato da un umano prima di raggiungere l'alunno?",
        "<strong>4.</strong> Esiste un'alternativa senza IA che funziona altrettanto bene?",
        "<strong>5.</strong> Se lo strumento dovesse smettere di esistere domani, l'alunno rimarrebbe senza risorse?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Mettere i colleghi in condizione di integrare responsabilmente l'IA nell'insegnamento delle lingue, producendo materiali adattabili a molteplici profili di apprendimento.",
        "Non è una presentazione, è una co-costruzione. Ogni partecipante esce con almeno una risorsa pronta da sperimentare.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Inquadramento, il problema della classe eterogenea e perché fare sempre di più dello stesso non funziona.",
        "<strong>10–25 min:</strong> Mappa dei profili, presentazione delle sei schede del Farol con casi reali (anonimizzati).",
        "<strong>25–45 min:</strong> Dimostrazione pratica, tre strumenti, tre casi d'uso, tre profili distinti.",
        "<strong>45–75 min:</strong> Lavoro in coppia, ogni coppia adatta un materiale esistente a un profilo specifico.",
        "<strong>75–85 min:</strong> Condivisione rapida, ogni coppia presenta il proprio prodotto in 1 minuto.",
        "<strong>85–90 min:</strong> Impegni, ogni partecipante individua un materiale da sperimentare e si pianifica una sessione di feedback a 30 giorni.",
      ]},
      { items: [
        "Accesso a internet e agli account istituzionali sugli strumenti dimostrati.",
        "Materiali esistenti di ciascun partecipante (una scheda, una verifica o una programmazione di lezione).",
        "Schede stampate dei profili del Farol per consultazione.",
      ]},
      { items: [
        "Ogni partecipante produce almeno un materiale adattato durante la sessione.",
        "Sessione di feedback a 30 giorni con almeno il 60% dei partecipanti che riferisce un'implementazione effettiva.",
        "Almeno un materiale prodotto nella sessione viene adottato come risorsa condivisa del dipartimento.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Convenzione ONU sui diritti delle persone con disabilità (CRPD, 2006), ratificata dall'Italia con la Legge 18/2009; l'articolo 24 sancisce l'istruzione inclusiva come diritto.",
        "Legge 104/1992 (Legge-quadro per l'assistenza, l'integrazione sociale e i diritti delle persone handicappate), testo fondamentale dell'inclusione scolastica italiana; prevede il Piano Educativo Individualizzato (PEI) e il sostegno didattico per gli alunni con disabilità certificata.",
        "Legge 170/2010 (Nuove norme in materia di disturbi specifici di apprendimento in ambito scolastico), riconosce ufficialmente dislessia, disgrafia, disortografia e discalculia (DSA); obbliga le scuole a predisporre il Piano Didattico Personalizzato (PDP) per questi alunni.",
        "D.Lgs. 66/2017 e successive modifiche (D.Lgs. 96/2019), riformano l'inclusione scolastica degli alunni con disabilità; introducono il Profilo di Funzionamento (in sostituzione della diagnosi funzionale) e ridefiniscono il PEI secondo un approccio bio-psico-sociale (ICF).",
        "Direttiva MIUR del 27 dicembre 2012 e Circolare 8/2013, ampliano le tutele ai Bisogni Educativi Speciali (BES), includendo difficoltà socio-economiche, linguistiche e culturali; ogni scuola elabora un Piano Annuale per l'Inclusione (PAI) e un Piano di Inclusione.",
      ]},
      { items: [
        "Applicare i principi della Progettazione Universale per l'Apprendimento (UDL): offrire molteplici modalità di rappresentazione, azione ed espressione per tutti gli alunni.",
        "Utilizzare adattamenti ragionevoli in classe senza necessità di diagnosi formale: tempo aggiuntivo, risposta orale, accesso a strumenti compensativi.",
        "Mantenere un ambiente classe inclusivo che riduca le barriere sensoriali, organizzative e linguistiche per tutti.",
        "Annotare le osservazioni informali su qualsiasi alunno che possa avere bisogni non soddisfatti, è il punto di partenza per qualsiasi percorso di segnalazione.",
      ]},
      { items: [
        "Consultare il referente BES o il coordinatore del GLI (Gruppo di Lavoro per l'Inclusione) quando un alunno non risponde alle strategie di classe dopo un periodo ragionevole.",
        "Il Consiglio di Classe può elaborare un PDP per alunni con DSA (su segnalazione della famiglia con diagnosi di uno specialista) o per altri BES (con delibera motivata anche in assenza di diagnosi).",
        "Per gli alunni con disabilità certificata (Legge 104), la certificazione è rilasciata dall'unità di valutazione multidisciplinare dell'ASL; il PEI è redatto collegialmente da insegnanti, insegnante di sostegno, famiglia e figure sanitarie.",
        "Il GLO (Gruppo di Lavoro Operativo per l'inclusione) si riunisce almeno una volta l'anno per verificare e aggiornare il PEI; la partecipazione delle famiglie è prevista per legge.",
        "Per situazioni complesse o per il passaggio di grado, è possibile richiedere la consulenza del CTS (Centro Territoriale di Supporto) o dello sportello di consulenza dell'USR (Ufficio Scolastico Regionale).",
      ]},
      { items: [
        "Non esiste in Italia una legge specifica per gli alunni plusdotati o ad alto potenziale; tuttavia, la Direttiva BES del 2012 consente di attivare un PDP per questi alunni se si riscontrano difficoltà scolastiche significative.",
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
        "Tutela dei dati: tutti i dati degli alunni sono soggetti al GDPR e al D.Lgs. 196/2003 (Codice della privacy) come modificato dal D.Lgs. 101/2018; non condividere informazioni sensibili fuori dal team senza consenso.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "La differenziazione pedagogica significa adattare il modo di insegnare, non abbassare le aspettative. L\'obiettivo di apprendimento può essere lo stesso per tutti; è il percorso che varia.",
        "Il modello UDL (Universal Design for Learning) propone tre principi: molteplici mezzi di rappresentazione (come viene presentato il contenuto), molteplici mezzi di azione ed espressione (come risponde l\'alunno) e molteplici mezzi di coinvolgimento (cosa motiva l\'alunno).",
        "Differenziare non significa creare un piano di lezione individuale per ogni alunno, significa creare abbastanza flessibilità perché la stessa lezione serva profili diversi.",
      ]},
      { items: [
        "<strong>Non è</strong> ridurre il curricolo per gli alunni in difficoltà.",
        "<strong>Non è</strong> dare sempre compiti diversi ad alunni diversi, questo isola ed etichetta.",
        "<strong>Non è</strong> solo schede differenziate, la differenziazione include il modo in cui l\'insegnante spiega, interroga e valuta.",
      ]},
      { items: [
        "Scelta guidata: offrire 2–3 opzioni di formato di risposta (scritto, orale, schema), tutti rispondono allo stesso contenuto.",
        "Scaffolding: fornire una struttura guidata agli alunni in difficoltà; rimuoverla progressivamente man mano che cresce l\'autonomia.",
        "Raggruppamento flessibile: gruppi per interesse, livello di padronanza o misti, ruotarli per evitare gruppi fissi che diventano identità.",
        "Adeguamenti del tempo: più tempo non significa meno rigore. Per gli alunni con ADHD o disprassia, dividere il compito in segmenti con pause programmate.",
        "Livello di complessità: per lo stesso argomento, creare versioni con più o meno supporto linguistico, con o senza esempi, con o senza indizi visivi.",
      ]},
      { items: [
        "Valutare ciò che l\'alunno sa, non come scrive. Un alunno con dislessia può dimostrare la padronanza concettuale oralmente o con supporto tecnologico.",
        "Rubriche chiare condivise prima del compito permettono all\'alunno di sapere cosa è atteso indipendentemente dal formato scelto.",
        "Il portfolio o la valutazione basata su evidenze permette all\'alunno di mostrare i progressi nel tempo, non solo in un momento di verifica.",
      ]},
      { items: [
        "Quando la differenziazione in classe non è più sufficiente e l\'alunno continua a non accedere al curricolo, questo può segnalare la necessità di un supporto specialistico.",
        "La differenziazione non sostituisce le misure di supporto scolastico (psicologo scolastico, terapisti, educazione speciale), è ciò che avviene in classe ordinaria come complemento.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "La valutazione formativa è qualsiasi pratica che raccoglie informazioni sull\'apprendimento durante il processo, e usa queste informazioni per adattare l\'insegnamento o il supporto all\'alunno.",
        "A differenza della valutazione sommativa (voti finali), la formativa non ha bisogno di un voto, ha bisogno di un feedback.",
        "Per gli alunni neurodivergenti, la valutazione formativa è particolarmente importante perché la prestazione in un test isolato potrebbe non riflettere ciò che sanno davvero.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: alla fine della lezione, l\'alunno risponde a una domanda in 2 minuti, l\'insegnante vede immediatamente chi ha capito e chi no.",
        "<strong>Semaforo</strong>: verde (ho capito), giallo (ho dubbi), rosso (non ho capito), può essere carte fisiche, post-it o digitale.",
        "<strong>Think-Pair-Share</strong>: l\'alunno riflette individualmente, discute con un compagno, poi condivide con la classe, riduce l\'ansia della risposta diretta.",
        "<strong>Porta d\'uscita</strong>: prima di uscire, l\'alunno dice all\'insegnante una cosa che ha imparato e un dubbio che ha ancora.",
      ]},
      { items: [
        "Un feedback efficace è specifico, attuabile e tempestivo: \'a pagina 2 il ragionamento si perde perché manca il collegamento con le prove\' è utile; \'potrebbe essere migliore\' non lo è.",
        "Per gli alunni con ADHD: il feedback immediato è più efficace di quello differito. Non aspettare la fine del compito.",
        "Per gli alunni con dislessia: il feedback orale o audio può essere più accessibile dei commenti scritti estesi.",
        "Evitare di confrontare gli alunni tra loro, confrontare l\'alunno con la propria progressione precedente.",
      ]},
      { items: [
        "ADHD: valutazione in più brevi momenti invece di un unico lungo test. Ridurre gli stimoli distrattori nell\'ambiente di valutazione.",
        "Dislessia: consentire risposte orali, tempo extra o uso della sintesi vocale. Valutare il contenuto, non l\'ortografia.",
        "Autismo: valutazioni con istruzioni scritte chiare e non ambigue. Avvisare in anticipo dei cambiamenti di formato.",
        "Alto potenziale: evitare valutazioni di mera riproduzione di contenuto, includere domande di analisi, sintesi e creazione.",
      ]},
      { items: [
        "Quando, anche con adattamenti della valutazione, l\'alunno non riesce a dimostrare l\'apprendimento, questo è il segnale che potrebbe esserci una barriera più profonda da investigare con il servizio di supporto scolastico.",
        "Schemi persistenti (mesi, non giorni) di difficoltà specifica in un\'area devono essere segnalati formalmente.",
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
        "Mit dem beginnen, was der Schüler oder die Schülerin gut macht — das Gespräch darf nicht mit einer Liste von Beschwerden eröffnen, sonst verschließen sich die Erziehungsberechtigten abwehrend.",
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
        "Wenn das Ziel nicht die Bewertung des Schreibens ist, den Inhalt getrennt von der Rechtschreibung bewerten.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
    autismo: {
      sections: [
        {
          items: [
            "Schwierigkeiten mit unangekündigten Änderungen, Stundenplanänderung, anderer Raum, Vertretungslehrkraft.",
            "Wörtliche Kommunikation, Nuancen, Ironie und idiomatische Ausdrücke werden nicht erfasst.",
            "Sensorische Empfindlichkeit, Leuchtstofflicht, Hintergrundgeräusche, Etiketten in der Kleidung können unerträglich sein.",
            "Fokussierte und tiefe Interessen zu bestimmten Themen.",
            "Kann desinteressiert oder distanziert wirken, wenn er überwältigt ist, nicht desengagiert."
          ]
        },
        {
          items: [
            "<strong>Es ist keine</strong> lineare Skala (\"mehr\" oder \"weniger\" autistisch), es ist ein mehrdimensionales Profil.",
            "<strong>Es ist kein</strong> Empathiemangel, häufig ist das Gegenteil der Fall, mit Schwierigkeiten beim Filtern.",
            "<strong>Es ist kein</strong> Fehlverhalten, wenn eine Routine unterbrochen wird, es ist eine echte neurologische Reaktion."
          ]
        },
        {
          items: [
            "Jede Routineänderung, auch scheinbar geringfügige, im Voraus ankündigen.",
            "Implizite soziale Regeln zu expliziten Regeln machen (was man tut, was man nicht tut, wann).",
            "Bei Bedarf sensorische Pausen in einem ruhigen Raum ermöglichen.",
            "Das fokussierte Interesse als Einstiegspunkt für Unterrichtsinhalte nutzen."
          ]
        },
        {
          items: [
            "Wenn eine Diagnose vorliegt, zuerst fragen, was die Familie weiß, was funktioniert.",
            "Wenn keine Diagnose vorliegt, konkrete Situationen beschreiben, ohne beim ersten Gespräch das Wort \"Autismus\" zu verwenden.",
            "Den Aufwand der Familie wertschätzen, Struktur und Vorhersehbarkeit zu Hause zu schaffen, ist anspruchsvoll.",
            "Niemals mit \"anderen Schülern\" oder Geschwistern vergleichen, jedes Spektrumprofil ist unterschiedlich."
          ]
        },
        {
          items: [
            "Häufige Zusammenbrüche (\"Meltdowns\") nach dem Schultag.",
            "Anhaltende Schulverweigerung verbunden mit sensorischer Überlastung.",
            "Fortschreitende soziale Isolation trotz Vermittlungsversuchen."
          ]
        }
      ]
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Handschrift ist schwierig, langsam und häufig unleserlich, nicht aus Nachlässigkeit, sondern aufgrund echter motorischer Schwierigkeiten.",
            "Schwierigkeiten bei der räumlichen Organisation des Heftes, der Materialverwaltung und dem Befolgen von Schrittabfolgen.",
            "Kann \"tollpatschig\" wirken, verschüttet Getränke, stößt gegen Möbel, hat Schwierigkeiten im Sport.",
            "Unverhältnismäßige Müdigkeit nach Aufgaben, die anhaltende Feinmotorik erfordern.",
            "Die kognitive Komponente ist in der Regel erhalten, häufige Frustration über die Lücke zwischen Wissen und Zeigen können."
          ]
        },
        {
          items: [
            "<strong>Keine</strong> Faulheit oder mangelnder Einsatz.",
            "<strong>Nicht</strong> nur schlechte Handschrift, betrifft die Planung und Sequenzierung von Aufgaben.",
            "<strong>Nicht</strong> durch \"mehr Schreiben üben\" lösbar."
          ]
        },
        {
          items: [
            "Verwendung von Tastatur/Tablet bei längeren schriftlichen Arbeiten erlauben.",
            "Mechanisches Abschreiben von der Tafel reduzieren, ggf. Notizen bereitstellen.",
            "Explizite Checklisten für Aufgaben mit mehreren Schritten bereitstellen.",
            "Das Ergebnis nach dem Inhalt bewerten, nicht nach der äußeren Darstellung."
          ]
        },
        {
          items: [
            "Erklären, was Dyspraxie ist, in einfacher Sprache, die meisten Erziehungsberechtigten haben den Begriff noch nie gehört.",
            "Die unleserliche Handschrift ist der häufigste Reibungspunkt mit den Erziehungsberechtigten.",
            "Praktische Hilfsmittel für zu Hause vorschlagen: Spracheingabe, Tastatur für längere Arbeiten.",
            "Wenn in früheren Jahren von \"Faulheit\" gesprochen wurde, dies direkt ansprechen."
          ]
        },
        {
          items: [
            "Vollständige Verweigerung schriftlicher Produktion.",
            "Soziale Isolation in körperlichen Aktivitätskontexten.",
            "Anzeichen von somatisierter Angst vor schriftlichen Prüfungen."
          ]
        }
      ]
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Beendet Aufgaben in Minuten, während die Klasse die gesamte Stunde braucht.",
            "Stellt Fragen, die über den Unterrichtsstoff hinausgehen, oder stellt aktiv das Gelehrte in Frage.",
            "Kann desinteressiert, undiszipliniert oder apathisch wirken, häufig Zeichen von chronischer Unterforderung.",
            "Ausgeprägte emotionale Sensibilität; kann ängstlich, perfektionistisch oder sich selbst gegenüber ungerecht anspruchsvoll sein.",
            "Echtes Risiko von Minderleistung, lernt, die eigenen Fähigkeiten zu verbergen, um sozial nicht aufzufallen."
          ]
        },
        {
          items: [
            "<strong>Nicht</strong> gleichbedeutend mit gutem Verhalten oder guten Ergebnissen.",
            "<strong>Nicht</strong> \"braucht keine Hilfe\", braucht andere Herausforderungen, nicht weniger Aufmerksamkeit.",
            "<strong>Nicht</strong> unvereinbar mit Neurodivergenz, zweifache Außergewöhnlichkeit (2e) existiert und ist häufig."
          ]
        },
        {
          items: [
            "Immer Erweiterungsaufgaben bereithalten, nicht mehr vom Gleichen, sondern tiefere oder angewandte Inhalte.",
            "Unabhängige Recherche zu Themen des Schülerinteresses im Rahmen des Lehrplans ermöglichen.",
            "Nach Schwierigkeit bewerten, nicht nach Leichtigkeit, anspruchsvollere Arbeiten im Austausch gegen geringeres Volumen verlangen.",
            "Die emotionale Sensibilität anerkennen und wertschätzen, ohne sie zu pathologisieren."
          ]
        },
        {
          items: [
            "Den Stolz der Erziehungsberechtigten vorwegnehmen und umlenken: Gerade weil das Kind fähig ist, verursacht die Unterforderung Probleme.",
            "Das Paradox erklären: Gute Ergebnisse bedeuten nicht, dass es ihm gut geht.",
            "Wenn der Schüler seine Fähigkeiten versteckt, um sich sozial zu integrieren, dies behutsam ansprechen.",
            "Erziehungsberechtigte vorschlagen, den Prozess statt das Ergebnis zu schätzen: Neugier, Tiefe, schwierige Fragen."
          ]
        },
        {
          items: [
            "Anzeichen von Angst oder Depression, die mit extremem Perfektionismus zusammenhängen.",
            "Ausgeprägte soziale Isolation durch das Gefühl, unter Gleichaltrigen \"anders\" zu sein.",
            "Plötzlicher akademischer Leistungsabfall bei einem zuvor als fähig identifizierten Schüler."
          ]
        }
      ]
    },
    plnm: {
      sections: [
        {
          items: [
            "Schüler, die Deutsch als Zweitsprache (DaZ) lernen, können im Unterricht langsamer erscheinen, dies spiegelt eine Sprachbarriere wider, keine kognitive Einschränkung.",
            "Vorbereitungsklassen (Willkommensklassen) ermöglichen erste Deutschkenntnisse vor der Regelklassenintegration.",
            "Sprachstandstests helfen, das aktuelle Niveau zu bestimmen und angemessene Fördermaßnahmen einzuleiten.",
            "Eine Sprachbarriere begründet allein keinen sonderpädagogischen Förderbedarf.",
            "Die DaZ-Lehrkraft ist die erste Ansprechperson für sprachliche Unterstützung und Differenzierungsstrategien."
          ]
        },
        {
          items: [
            "<strong>Nicht</strong> jede Sprachschwierigkeit ist ein Lernproblem, zunächst ist immer der DaZ-Kontext zu berücksichtigen.",
            "<strong>Nicht</strong> davon ausgehen, dass mangelnde mündliche Beteiligung auf Desinteresse hindeutet.",
            "<strong>Nicht</strong> Sprachförderung und sonderpädagogische Förderung verwechseln, sie haben unterschiedliche Rechtsgrundlagen."
          ]
        },
        {
          items: [
            "Scaffolding-Techniken einsetzen: Wortschatzlisten, Bildunterstützung, vereinfachte Aufgabenstellungen.",
            "Muttersprache als Ressource anerkennen, nicht als Hindernis betrachten.",
            "Bei Bedarf den schulpsychologischen Dienst einbeziehen, um Sprachbarriere und Förderbedarf voneinander zu trennen.",
            "Eltern-Gespräche ggf. mit Dolmetscher oder mehrsprachigen Schulbegleitern führen."
          ]
        },
        {
          items: [
            "Den Erziehungsberechtigten erklären, dass Deutsch als Zweitsprache Zeit braucht, akademische Sprachkompetenz (CALP) entwickelt sich über 5–7 Jahre.",
            "Unterschied zwischen Alltagssprache und Unterrichtssprache verdeutlichen.",
            "Konkrete Unterstützungsangebote nennen: Willkommensklasse, DaZ-Förderung, Sprachkurs.",
            "Kulturellen Hintergrund und Schulsystem des Herkunftslandes als Ressource einbeziehen."
          ]
        },
        {
          items: [
            "Keine Fortschritte in der deutschen Sprache trotz Sprachfördermaßnahmen über 6–12 Monate.",
            "Hinweise auf Lernschwierigkeiten, die unabhängig von der Sprachbarriere bestehen.",
            "Anzeichen von emotionalem Rückzug oder Schulangst, die über Sprachunsicherheit hinausgehen."
          ]
        }
      ]
    },
    etica: {
      sections: [
        {
          items: [
            "Daten von Minderjährigen unterliegen einem verstärkten Schutz (Art. 8 DSGVO). Die Einwilligung der Erziehungsberechtigten ist obligatorisch.",
            "Überprüfen, wo das Tool Daten speichert, europäische oder nicht-europäische Server, anonymisiert oder nicht.",
            "Niemals vollständige Namen, Adressen, Ausweisnummern oder klinische Diagnosen in generative KI-Tools eingeben.",
            "Institutionelle Nutzung von persönlicher Nutzung der Lehrkraft unterscheiden (individuelle Verantwortung)."
          ]
        },
        {
          items: [
            "Systeme, die überwiegend mit englischsprachigen Daten trainiert wurden, können in anderen sprachlichen Kontexten schlechter abschneiden.",
            "Automatische Empfehlungen können Geschlechter-, Ethnie- oder Klassenstereotype verstärken, kritisch überprüfen.",
            "Modelle zur \"Vorhersage akademischer Risiken\" reproduzieren häufig bestehende Ungleichheiten."
          ]
        },
        {
          items: [
            "Das Ziel ist die Stärkung der Autonomie des Schülers, nicht der Ersatz der kognitiven Arbeit, die seine Entwicklung fördert.",
            "Zwischen <strong>Zugangs-Tool</strong> (Text-to-Speech bei Legasthenie) und <strong>Ersetzungs-Tool</strong> (KI schreibt den Aufsatz) unterscheiden.",
            "Regelmäßig überprüfen: Entwickelt der Schüler Kompetenz oder Abhängigkeit vom Tool?"
          ]
        },
        {
          items: [
            "<strong>1.</strong> Löst das Tool eine echte Barriere oder schafft es eine Abkürzung, die das Lernen auslässt?",
            "<strong>2.</strong> Sind die eingegebenen Daten geschützt und liegt eine Einwilligung vor?",
            "<strong>3.</strong> Wird das Ergebnis von einem Menschen überprüft, bevor es den Schüler erreicht?",
            "<strong>4.</strong> Gibt es eine Nicht-KI-Alternative, die genauso gut funktioniert?",
            "<strong>5.</strong> Wenn das Tool morgen nicht mehr existiert, ist der Schüler dann hilflos?"
          ]
        }
      ]
    },
    oficina: {
      sections: [
        {
          items: [
            "Kolleginnen und Kollegen zur verantwortungsvollen Integration von KI im Unterricht befähigen, mit der Erstellung von Materialien, die an mehrere Lernprofile anpassbar sind.",
            "Dies ist keine Präsentation, es ist eine Ko-Konstruktion. Jede teilnehmende Person geht mit mindestens einer Ressource, die sofort getestet werden kann."
          ]
        },
        {
          items: [
            "<strong>0–10 Min:</strong> Einführung, das Problem der heterogenen Klasse und warum mehr vom Gleichen nicht funktioniert.",
            "<strong>10–25 Min:</strong> Profilkarte, Vorstellung der sechs Farol-Karten mit echten (anonymisierten) Fallbeispielen.",
            "<strong>25–45 Min:</strong> Praktische Demonstration, drei Tools, drei Anwendungsfälle, drei unterschiedliche Profile.",
            "<strong>45–75 Min:</strong> Partnerarbeit, jedes Paar passt ein vorhandenes Material für ein bestimmtes Profil an.",
            "<strong>75–85 Min:</strong> Schnelles Teilen, jedes Paar präsentiert sein Ergebnis in 1 Minute.",
            "<strong>85–90 Min:</strong> Verpflichtungen, jede teilnehmende Person legt ein Material fest, das in der nächsten Woche getestet wird."
          ]
        },
        {
          items: [
            "Internetzugang und institutionelle Konten bei den vorgestellten Tools.",
            "Vorhandene Materialien jeder teilnehmenden Person (ein Arbeitsblatt, ein Test oder ein Unterrichtsplan).",
            "Gedruckte Farol-Profilkarten zur Einsicht."
          ]
        },
        {
          items: [
            "Jede teilnehmende Person erstellt während der Sitzung mindestens ein angepasstes Material.",
            "Feedback-Sitzung nach 30 Tagen, bei der mindestens 60 % der Teilnehmenden eine effektive Umsetzung berichten.",
            "Mindestens ein in der Sitzung erstelltes Material wird als gemeinsame Ressource des Fachbereichs übernommen."
          ]
        }
      ]
    },
    legislacao: {
      sections: [
        {
          items: [
            "Kerngesetze: UN-BRK (UN-Behindertenrechtskonvention, ratifiziert 2009), KMK-Empfehlungen zur inklusiven Bildung (2011/2020), jedes Bundesland hat ein eigenes Schulgesetz (z. B. SchulG NRW §20, BayEUG Art. 41).",
            "Die Schulgesetze der Länder regeln die konkrete Umsetzung inklusiver Bildung, der Handlungsspielraum variiert je nach Bundesland.",
            "Inklusive Bildung ist ein Rechtsanspruch, der sich aus der UN-BRK ergibt; die Ausgestaltung liegt bei den Bundesländern."
          ]
        },
        {
          items: [
            "Nachteilsausgleich: zeitliche, räumliche oder materielle Kompensationsmaßnahmen, die alle Lehrkräfte ohne formale Diagnose anwenden können.",
            "Differenzierter Unterricht und Lehrplan-Flexibilität sind Bestandteil des regulären Unterrichts.",
            "Förderplan: kann auf Grundlage pädagogischer Beobachtung ohne AO-SF-Verfahren erstellt werden."
          ]
        },
        {
          items: [
            "Förderbedarf-Feststellung durch das AO-SF-Verfahren (Ausbildungsordnung sonderpädagogische Förderung), durchgeführt vom schulpsychologischen Dienst oder der Sonderpädagogin/dem Sonderpädagogen.",
            "Förderplan als Grundlage individueller sonderpädagogischer Unterstützung.",
            "Möglichkeit der Beschulung in der Regelschule mit sonderpädagogischer Unterstützung oder in der Förderschule, Eltern haben ein Wunsch- und Wahlrecht.",
            "Der schulpsychologische Dienst (Schulpsychologin/Schulpsychologe) begleitet den Prozess und berät Eltern und Lehrkräfte."
          ]
        },
        {
          items: [
            "Keine einheitliche Bundesregelung für Hochbegabung, jedes Bundesland regelt dies eigenständig.",
            "DGhK (Deutsche Gesellschaft für das hochbegabte Kind) und Karg-Stiftung bieten Beratung und Ressourcen.",
            "Überspringen von Klassen ist nach den meisten Schulgesetzen möglich.",
            "Enrichment-Programme und begabungsfördernde Schulen (z. B. Begabtenförderung der Bundesländer) als ergänzende Maßnahmen."
          ]
        },
        {
          items: [
            "DaZ (Deutsch als Zweitsprache): Vorbereitungsklassen (Willkommensklassen) für Schülerinnen und Schüler ohne Deutschkenntnisse.",
            "Sprachstandstest zur Einschätzung des Niveaus und zur Zuweisung zu Sprachfördermaßnahmen.",
            "Eine Sprachbarriere allein begründet keinen sonderpädagogischen Förderbedarf.",
            "DaZ-Lehrkräfte sind für die sprachliche Unterstützung zuständig."
          ]
        },
        {
          items: [
            "UN-BRK (ratifiziert 2009)",
            "KMK-Empfehlungen zur inklusiven Bildung 2011 und 2020",
            "Schulgesetze der Länder (§§ zu Inklusion, z. B. SchulG NRW §20, BayEUG Art. 41)",
            "AO-SF (Ausbildungsordnung sonderpädagogische Förderung)",
            "Förderplan, schulpsychologischer Dienst"
          ]
        }
      ]
    },
    diferenciacao: { sections: [
      { items: [
        "Pädagogische Differenzierung bedeutet, die Art des Unterrichtens anzupassen, nicht die Erwartungen zu senken. Das Lernziel kann für alle Schülerinnen und Schüler dasselbe sein; was variiert, ist der Weg.",
        "Das UDL-Modell (Universal Design for Learning) schlägt drei Grundsätze vor: vielfältige Mittel der Repräsentation (wie Inhalte präsentiert werden), vielfältige Mittel des Handelns und Ausdrucks (wie Schülerinnen und Schüler antworten) und vielfältige Mittel der Einbindung (was sie motiviert).",
        "Differenzieren bedeutet nicht, für jeden Schüler einen individuellen Unterrichtsplan zu erstellen, es bedeutet, genug Flexibilität zu schaffen, damit dieselbe Stunde verschiedenen Lernprofilen gerecht wird.",
      ]},
      { items: [
        "<strong>Es ist nicht</strong> das Reduzieren des Lehrplans für lernschwächere Schülerinnen und Schüler.",
        "<strong>Es ist nicht</strong> das ständige Geben unterschiedlicher Aufgaben an verschiedene Schülerinnen und Schüler, das isoliert und etikettiert.",
        "<strong>Es ist nicht</strong> nur differenzierte Arbeitsblätter, Differenzierung beinhaltet auch, wie die Lehrkraft erklärt, fragt und bewertet.",
      ]},
      { items: [
        "Kontrollierte Auswahl: 2–3 Antwortformatoptionen anbieten (schriftlich, mündlich, schematische Zeichnung), alle antworten auf denselben Inhalt.",
        "Scaffolding: lernschwächeren Schülerinnen und Schülern ein strukturiertes Gerüst bereitstellen; es schrittweise abbauen, wenn die Selbstständigkeit wächst.",
        "Flexible Gruppierung: Gruppen nach Interesse, Leistungsniveau oder gemischt, rotieren, um feste Gruppen zu vermeiden, die zu Identitäten werden.",
        "Zeitanpassungen: mehr Zeit bedeutet nicht weniger Strenge. Für Schülerinnen und Schüler mit ADHS oder Dyspraxie die Aufgabe in Abschnitte mit geplanten Pausen aufteilen.",
        "Komplexitätsniveau: für dasselbe Thema Versionen mit mehr oder weniger sprachlicher Unterstützung, mit oder ohne Beispiele, mit oder ohne visuelle Hinweise erstellen.",
      ]},
      { items: [
        "Bewerten, was die Schülerin oder der Schüler weiß, nicht wie sie oder er schreibt. Eine Schülerin oder ein Schüler mit Legasthenie kann konzeptuelles Verständnis mündlich oder mit technologischer Unterstützung nachweisen.",
        "Klare Bewertungsrubriken, die vor der Aufgabe geteilt werden, ermöglichen es der Schülerin oder dem Schüler zu wissen, was unabhängig vom gewählten Format erwartet wird.",
        "Portfolio oder kompetenzbasierte Bewertung ermöglicht es der Schülerin oder dem Schüler, Fortschritte über die Zeit zu zeigen, nicht nur in einem einzelnen Testmoment.",
      ]},
      { items: [
        "Wenn die Differenzierung im Unterricht nicht mehr ausreicht und die Schülerin oder der Schüler weiterhin keinen Zugang zum Lehrplan findet, kann dies auf den Bedarf an spezialisierter Unterstützung hinweisen.",
        "Differenzierung ersetzt keine schulischen Unterstützungsmaßnahmen (Schulpsychologie, Therapeuten, Sonderpädagogik), sie ist das, was ergänzend im regulären Unterricht passiert.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formative Beurteilung ist jede Praxis, die während des Lernprozesses Informationen über das Lernen sammelt, und diese Informationen nutzt, um den Unterricht oder die Unterstützung anzupassen.",
        "Im Gegensatz zur summativen Beurteilung (Abschlussnoten) braucht die formative keine Note, sie braucht Feedback.",
        "Für neurodivergente Schülerinnen und Schüler ist die formative Beurteilung besonders wichtig, weil die Leistung in einem einmaligen Test möglicherweise nicht widerspiegelt, was sie tatsächlich wissen.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: Am Ende der Stunde beantwortet die Schülerin oder der Schüler eine Frage in 2 Minuten, die Lehrkraft sieht sofort, wer verstanden hat und wer nicht.",
        "<strong>Ampel</strong>: grün (ich habe verstanden), gelb (ich habe Zweifel), rot (ich habe nicht verstanden), kann physische Karten, Post-its oder digital sein.",
        "<strong>Think-Pair-Share</strong>: Die Schülerin oder der Schüler denkt individuell nach, bespricht es mit einer Partnerin oder einem Partner, dann teilt es mit der Klasse, reduziert die Angst vor direkten Antworten.",
        "<strong>Ausgangstor</strong>: Bevor sie oder er geht, sagt die Schülerin oder der Schüler der Lehrkraft eine Sache, die sie oder er gelernt hat, und einen Zweifel, den sie oder er noch hat.",
      ]},
      { items: [
        "Effektives Feedback ist spezifisch, umsetzbar und zeitnah: \'Auf Seite 2 geht das Argument verloren, weil der Bezug zum Beleg fehlt\' ist hilfreich; \'könnte besser sein\' ist es nicht.",
        "Für Schülerinnen und Schüler mit ADHS: sofortiges Feedback ist effektiver als verzögertes. Nicht bis zum Ende der Aufgabe warten.",
        "Für Schülerinnen und Schüler mit Legasthenie: mündliches oder Audio-Feedback kann zugänglicher sein als ausgedehnte schriftliche Kommentare.",
        "Schülerinnen und Schüler nicht miteinander vergleichen, sie mit ihrer eigenen früheren Entwicklung vergleichen.",
      ]},
      { items: [
        "ADHS: Beurteilung in mehreren kurzen Momenten statt eines einzigen langen Tests. Ablenkende Reize in der Beurteilungsumgebung reduzieren.",
        "Legasthenie: mündliche Antworten, zusätzliche Zeit oder Nutzung von Text-zu-Sprache erlauben. Den Inhalt bewerten, nicht die Rechtschreibung.",
        "Autismus: Beurteilungen mit klaren, eindeutigen schriftlichen Anweisungen. Über Formatänderungen im Voraus informieren.",
        "Hochbegabung: Beurteilungen vermeiden, die nur Inhaltswiedergabe verlangen, Fragen zur Analyse, Synthese und Erstellung einbeziehen.",
      ]},
      { items: [
        "Wenn die Schülerin oder der Schüler auch mit Beurteilungsanpassungen keine Lernfortschritte demonstrieren kann, ist dies ein Zeichen, dass es möglicherweise eine tiefere Barriere gibt, die mit dem schulpsychologischen Dienst untersucht werden sollte.",
        "Anhaltende Muster (Monate, nicht Tage) spezifischer Schwierigkeiten in einem Bereich sollten formal gemeldet werden.",
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
        "Beginnen met wat de leerling goed doet — het gesprek mag niet openen als een lijst van klachten, anders sluit de ouder of verzorger zich defensief af.",
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
        "Wanneer het doel niet is om het schrijven te beoordelen, beoordeel de inhoud dan los van de spelling.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
    autismo: {
      sections: [
        {
          items: [
            "Moeite met niet-aangekondigde veranderingen, roosterwijziging, andere klas, invalleraar.",
            "Letterlijke communicatie, nuances, ironie en idiomatische uitdrukkingen gaan verloren.",
            "Zintuiglijke gevoeligheid, tl-verlichting, achtergrondgeluiden, kledinglekens kunnen ondraaglijk zijn.",
            "Gerichte en diepe interesses voor specifieke onderwerpen.",
            "Kan desinteresseerd of afstandelijk lijken wanneer hij overprikkeld is, niet onbetrokken."
          ]
        },
        {
          items: [
            "<strong>Het is geen</strong> lineaire schaal (\"meer\" of \"minder\" autistisch), het is een multidimensionaal profiel.",
            "<strong>Het is geen</strong> gebrek aan empathie, vaak is het omgekeerde het geval, met moeite om te filteren.",
            "<strong>Het is geen</strong> slecht gedrag wanneer een routine wordt doorbroken, het is een echte neurologische reactie."
          ]
        },
        {
          items: [
            "Elke routinewijziging van tevoren aankondigen, ook ogenschijnlijk triviale.",
            "Impliciete sociale regels omzetten in expliciete regels (wat men doet, wat men niet doet, wanneer).",
            "Indien nodig zintuiglijke pauzes in een rustige ruimte toestaan.",
            "De gerichte interesse gebruiken als instappunt voor leerinhouden."
          ]
        },
        {
          items: [
            "Als er al een diagnose is, eerst vragen wat de familie weet dat werkt.",
            "Als er geen diagnose is, concrete situaties beschrijven zonder het woord \"autisme\" in een eerste gesprek te gebruiken.",
            "De inspanning van de familie waarderen, structuur en voorspelbaarheid thuis creëren is veeleisend.",
            "Nooit vergelijken met \"andere leerlingen\" of broers en zussen, elk spectrumprofiel is anders."
          ]
        },
        {
          items: [
            "Frequente crises (\"meltdowns\") na een schooldag.",
            "Aanhoudende schoolweigering gerelateerd aan zintuiglijke overbelasting.",
            "Progressieve sociale isolatie ondanks bemiddelingspogingen."
          ]
        }
      ]
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Handschrift is moeilijk, traag en vaak onleesbaar, niet door onzorgvuldigheid, maar door echte motorische moeilijkheden.",
            "Moeite met ruimtelijke organisatie van het schrift, materiaalbeheersing en het volgen van stappenreeksen.",
            "Kan \"onhandig\" lijken, morst dranken, botst tegen meubilair, heeft moeite met sport.",
            "Onevenredige vermoeidheid na taken die aanhoudende fijne motoriek vereisen.",
            "De cognitieve component is over het algemeen intact, frequente frustratie over de kloof tussen weten en kunnen laten zien."
          ]
        },
        {
          items: [
            "<strong>Geen</strong> luiheid of gebrek aan inzet.",
            "<strong>Niet</strong> alleen slechte handschrift, het beïnvloedt de planning en volgordebepaling van taken.",
            "<strong>Niet</strong> op te lossen met \"meer handschriftoefening\"."
          ]
        },
        {
          items: [
            "Gebruik van toetsenbord/tablet bij langere schriftelijke opdrachten toestaan.",
            "Mechanisch kopiëren van het bord verminderen, indien relevant aantekeningen verstrekken.",
            "Expliciete checklists bieden voor taken met meerdere stappen.",
            "Het product beoordelen op inhoud, niet op uiterlijke presentatie."
          ]
        },
        {
          items: [
            "In eenvoudige taal uitleggen wat dyspraxie is, de meeste ouders/verzorgers hebben de term nog nooit gehoord.",
            "Het onleesbare handschrift is het grootste frictiepunt met ouders/verzorgers.",
            "Praktische hulpmiddelen voor thuis voorstellen: spraakdicteerfunctie, toetsenbord voor langere opdrachten.",
            "Als in eerdere jaren van \"luiheid\" werd gesproken, dit direct aanspreken."
          ]
        },
        {
          items: [
            "Volledig weigeren van schriftelijke productie.",
            "Sociale isolatie in contexten van lichamelijke activiteit.",
            "Tekenen van gesomatiseerde angst vóór schriftelijke toetsen."
          ]
        }
      ]
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Rondt taken in minuten af terwijl de klas de hele les nodig heeft.",
            "Stelt vragen buiten de stof, of daagt actief het onderwezene uit.",
            "Kan desinteresseerd, ongedisciplineerd of apathisch lijken, vaak tekenen van chronische onderstimulering.",
            "Uitgesproken emotionele gevoeligheid; kan angstig, perfectionistisch of onrechtvaardig veeleisend jegens zichzelf zijn.",
            "Echt risico op onderprestatatie, leert zijn capaciteiten te verbergen om sociaal niet op te vallen."
          ]
        },
        {
          items: [
            "<strong>Niet</strong> synoniem met goed gedrag of goede resultaten.",
            "<strong>Niet</strong> \"heeft geen hulp nodig\", heeft andere uitdagingen nodig, niet minder aandacht.",
            "<strong>Niet</strong> onverenigbaar met neurodivergentie, dubbele exceptionelheid (2e) bestaat en komt vaak voor."
          ]
        },
        {
          items: [
            "Altijd verdiepingstaken klaar hebben, niet meer van hetzelfde, maar diepgaandere of toegepaste inhoud.",
            "Onafhankelijk onderzoek mogelijk maken over onderwerpen die de leerling interesseren binnen het programma.",
            "Beoordelen naar moeilijkheidsgraad, niet naar gemak, veeleisendere opdrachten vragen in ruil voor minder volume.",
            "De emotionele gevoeligheid erkennen en waarderen zonder te pathologiseren."
          ]
        },
        {
          items: [
            "De trots van de ouders/verzorgers anticiperen en ombuigen: juist omdat het kind capabel is, veroorzaakt de onderstimulering problemen.",
            "De paradox uitleggen: goede resultaten betekenen niet dat het goed met hem gaat.",
            "Als de leerling zijn capaciteiten verbergt om sociaal te integreren, dit voorzichtig benoemen.",
            "Ouders/verzorgers voorstellen het proces te waarderen in plaats van het resultaat: nieuwsgierigheid, diepgang, moeilijke vragen."
          ]
        },
        {
          items: [
            "Tekenen van angst of depressie in verband met extreem perfectionisme.",
            "Uitgesproken sociale isolatie doordat de leerling zich \"anders\" voelt dan leeftijdgenoten.",
            "Plotselinge academische prestatievermindering bij een leerling die eerder als capabel was geïdentificeerd."
          ]
        }
      ]
    },
    plnm: {
      sections: [
        {
          items: [
            "Leerlingen die Nederlands als Tweede Taal (NT2) leren, kunnen in de klas langzamer lijken, dit weerspiegelt een taalbarrière, geen cognitieve beperking.",
            "De Internationale Schakelklas (ISK, voor 12+) en de schakelklas (basisonderwijs) bieden intensieve taalontwikkeling vóór instroom in het reguliere onderwijs.",
            "Een taaltoets bij aankomst helpt het niveau te bepalen en passende ondersteuning te organiseren.",
            "NT2-leerlingen worden geregistreerd bij DUO als nieuwkomer; school heeft zorgplicht.",
            "De NT2-docent is de eerste aanspreekpersoon voor taalondersteuning en differentiatiestrategie."
          ]
        },
        {
          items: [
            "<strong>Niet</strong> elke taalmoeilijkheid is een leerprobleem, de NT2-context moet altijd eerst worden meegewogen.",
            "<strong>Niet</strong> aannemen dat gebrek aan mondelinge deelname wijst op desinteresse.",
            "<strong>Niet</strong> taalondersteuning en speciale onderwijszorg verwarren, ze hebben verschillende juridische grondslagen."
          ]
        },
        {
          items: [
            "Scaffoldingtechnieken inzetten: woordenlijsten, visuele ondersteuning, vereenvoudigde opdrachtformuleringen.",
            "De moedertaal erkennen als hulpbron, niet als belemmering.",
            "Bij twijfel de schoolpsycholoog of zorgcoördinator inschakelen om taalbarrière en eventuele ondersteuningsbehoefte van elkaar te onderscheiden.",
            "Oudergesprekken indien nodig met tolk of meertalige schoolbegeleider voeren."
          ]
        },
        {
          items: [
            "Ouders/verzorgers uitleggen dat NT2 tijd kost, academische taalvaardigheid (CALP) ontwikkelt zich over 5–7 jaar.",
            "Verschil tussen alledaagse taal en schooltaal verduidelijken.",
            "Concrete ondersteuningsopties benoemen: schakelklas, ISK, NT2-lessen, taalportfolio.",
            "De culturele achtergrond en het schoolsysteem van het herkomstland als hulpbron meenemen."
          ]
        },
        {
          items: [
            "Geen voortgang in het Nederlands ondanks taalondersteuning over 6–12 maanden.",
            "Aanwijzingen voor leerproblemen die los staan van de taalbarrière.",
            "Tekenen van emotioneel terugtrekken of schoolangst die verder gaan dan taalunsicherheid."
          ]
        }
      ]
    },
    etica: {
      sections: [
        {
          items: [
            "Gegevens van minderjarigen zijn onderworpen aan versterkte bescherming (Art. 8 AVG). Toestemming van ouders/verzorgers is verplicht.",
            "Controleren waar de tool gegevens opslaat, Europese of niet-Europese servers, geanonimiseerd of niet.",
            "Nooit volledige namen, adressen, identificatienummers of klinische diagnosen invoeren in generatieve AI-tools.",
            "Institutioneel gebruik onderscheiden van persoonlijk gebruik door de docent (individuele verantwoordelijkheid)."
          ]
        },
        {
          items: [
            "Systemen die voornamelijk met Engelstalige data zijn getraind, kunnen in andere taalkundige contexten slechter presteren.",
            "Automatische aanbevelingen kunnen stereotypen op basis van gender, etniciteit of klasse versterken, kritisch controleren.",
            "Modellen voor \"voorspelling van academisch risico\" reproduceren vaak bestaande ongelijkheden."
          ]
        },
        {
          items: [
            "Het doel is de autonomie van de leerling te vergroten, niet het cognitieve werk te vervangen dat zijn ontwikkeling bevordert.",
            "Onderscheid maken tussen <strong>toegangstool</strong> (text-to-speech bij dyslexie) en <strong>vervangingstool</strong> (AI schrijft het opstel).",
            "Regelmatig evalueren: ontwikkelt de leerling competentie of afhankelijkheid van de tool?"
          ]
        },
        {
          items: [
            "<strong>1.</strong> Lost de tool een echte barrière op of creëert het een snelkoppeling die het leren omzeilt?",
            "<strong>2.</strong> Zijn de ingevoerde gegevens beschermd en is er toestemming gegeven?",
            "<strong>3.</strong> Wordt het resultaat door een mens gecontroleerd voordat het de leerling bereikt?",
            "<strong>4.</strong> Is er een niet-AI-alternatief dat even goed werkt?",
            "<strong>5.</strong> Als de tool morgen niet meer bestaat, is de leerling dan hulpeloos?"
          ]
        }
      ]
    },
    oficina: {
      sections: [
        {
          items: [
            "Collega's toerusten voor de verantwoorde integratie van AI in het onderwijs, met de productie van materialen die aanpasbaar zijn aan meerdere leerprofielen.",
            "Dit is geen presentatie, het is een co-constructie. Elke deelnemer vertrekt met ten minste één resource die meteen getest kan worden."
          ]
        },
        {
          items: [
            "<strong>0–10 min:</strong> Kader, het probleem van de heterogene klas en waarom meer van hetzelfde niet werkt.",
            "<strong>10–25 min:</strong> Profielkaart, presentatie van de zes Farol-kaarten met echte (geanonimiseerde) casussen.",
            "<strong>25–45 min:</strong> Praktische demonstratie, drie tools, drie gebruikscases, drie verschillende profielen.",
            "<strong>45–75 min:</strong> Samenwerking in tweetallen, elk tweetal past een bestaand materiaal aan voor een specifiek profiel.",
            "<strong>75–85 min:</strong> Snel delen, elk tweetal presenteert zijn product in 1 minuut.",
            "<strong>85–90 min:</strong> Verbintenissen, elke deelnemer bepaalt één materiaal om de volgende week te testen."
          ]
        },
        {
          items: [
            "Internettoegang en institutionele accounts bij de gedemonstreerde tools.",
            "Bestaande materialen van elke deelnemer (een werkblad, een toets of een lesplan).",
            "Gedrukte Farol-profielkaarten ter raadpleging."
          ]
        },
        {
          items: [
            "Elke deelnemer produceert tijdens de sessie ten minste één aangepast materiaal.",
            "Feedbacksessie na 30 dagen waarbij ten minste 60% van de deelnemers effectieve implementatie rapporteert.",
            "Ten minste één tijdens de sessie geproduceerd materiaal wordt overgenomen als gedeelde resource van de afdeling."
          ]
        }
      ]
    },
    legislacao: {
      sections: [
        {
          items: [
            "Kernwet: Wet passend onderwijs (2014), elke school is verplicht een passend onderwijsaanbod te doen voor elke leerling.",
            "Samenwerkingsverbanden passend onderwijs coördineren de extra ondersteuning in de regio.",
            "Zorgplicht: scholen zijn wettelijk verplicht een passende plek te vinden voor elke leerling, ook bij complexe ondersteuningsbehoeften."
          ]
        },
        {
          items: [
            "Basisondersteuning: elke school biedt een basisniveau van ondersteuning zonder formele indicatie.",
            "Differentiëren en groepsplan aanpassen zijn onderdeel van goed regulier onderwijs.",
            "Geen formele indicatie nodig voor pedagogische differentiatie en aanpassingen in de klas."
          ]
        },
        {
          items: [
            "Extra ondersteuning via het samenwerkingsverband: arrangement aanvragen bij de ondersteuningscoördinator.",
            "Ontwikkelingsperspectief (OPP): verplicht bij leerlingen die de referentieniveaus niet zullen halen; opgesteld met ouders/verzorgers.",
            "Toelaatbaarheidsverklaring (TLV): nodig voor plaatsing in het speciaal basisonderwijs (SBO) of speciaal onderwijs (SO).",
            "De schoolpsycholoog of zorgcoördinator begeleidt het doorverwijzingsproces."
          ]
        },
        {
          items: [
            "Geen aparte wet voor hoogbegaafdheid in Nederland.",
            "Leonardo-scholen en plusklassen bieden verdieping en verrijking voor hoogbegaafde leerlingen.",
            "SLO-richtlijnen en het Nationaal Expertisecentrum Onderwijs (NEO) bieden handvatten voor begaafdheidsondersteuning.",
            "Compacten en verrijken zijn de gangbare aanpak; dubbelspringen is mogelijk met toestemming."
          ]
        },
        {
          items: [
            "NT2 (Nederlands als Tweede Taal): Internationale Schakelklas (ISK) voor leerlingen van 12+ zonder Nederlands.",
            "Schakelklas in het basisonderwijs voor intensieve taalverwerving.",
            "Taaltoets bij aankomst voor plaatsing; DUO-registratie als nieuwkomer.",
            "NT2-docent verantwoordelijk voor taalondersteuning; school heeft zorgplicht ook voor nieuwkomers."
          ]
        },
        {
          items: [
            "Wet passend onderwijs 2014",
            "Samenwerkingsverbanden passend onderwijs",
            "Ontwikkelingsperspectief (OPP)",
            "Zorgplicht school",
            "Toelaatbaarheidsverklaring (TLV) voor SBO/SO-plaatsing"
          ]
        }
      ]
    },
    diferenciacao: { sections: [
      { items: [
        "Pedagogische differentiatie betekent aanpassen hoe je onderwijst, niet de verwachtingen verlagen. Het leerdoel kan voor alle leerlingen hetzelfde zijn; het is het pad dat varieert.",
        "Het UDL-model (Universal Design for Learning) stelt drie principes voor: meerdere middelen voor representatie (hoe inhoud wordt gepresenteerd), meerdere middelen voor actie en expressie (hoe leerlingen reageren) en meerdere middelen voor betrokkenheid (wat leerlingen motiveert).",
        "Differentiëren betekent niet een individueel lesplan voor elke leerling maken, het betekent voldoende flexibiliteit creëren zodat dezelfde les verschillende leerprofielen bedient.",
      ]},
      { items: [
        "<strong>Het is niet</strong> het reduceren van het curriculum voor leerlingen met moeilijkheden.",
        "<strong>Het is niet</strong> altijd verschillende taken geven aan verschillende leerlingen, dat isoleert en etiketteert.",
        "<strong>Het is niet</strong> alleen gedifferentieerde werkbladen, differentiatie omvat ook hoe de leraar uitlegt, vraagt en beoordeelt.",
      ]},
      { items: [
        "Gecontroleerde keuze: 2–3 antwoordformaatopties aanbieden (schriftelijk, mondeling, schematische tekening), alle leerlingen reageren op dezelfde inhoud.",
        "Scaffolding: leerlingen met moeilijkheden een gestructureerd kader bieden; dit geleidelijk verwijderen naarmate de autonomie groeit.",
        "Flexibele groepering: groepen op basis van interesse, beheersingsniveau of gemengd, rouleren om vaste groepen die identiteiten worden te vermijden.",
        "Tijdsaanpassingen: meer tijd betekent niet minder strengheid. Voor leerlingen met ADHD of dyspraxie de taak opsplitsen in segmenten met geplande pauzes.",
        "Complexiteitsniveau: voor hetzelfde onderwerp versies maken met meer of minder taalkundige ondersteuning, met of zonder voorbeelden, met of zonder visuele aanwijzingen.",
      ]},
      { items: [
        "Beoordeel wat de leerling weet, niet hoe ze schrijven. Een leerling met dyslexie kan conceptuele beheersing mondeling of met technologische ondersteuning aantonen.",
        "Duidelijke rubrieken die vóór de taak worden gedeeld, stellen de leerling in staat te weten wat verwacht wordt, ongeacht het gekozen formaat.",
        "Portfolio of bewijs-gebaseerde beoordeling stelt de leerling in staat om vooruitgang over tijd te tonen, niet alleen bij een enkel testmoment.",
      ]},
      { items: [
        "Wanneer klassendifferentiatie niet meer voldoende is en de leerling nog steeds moeite heeft met toegang tot het curriculum, kan dit een behoefte aan gespecialiseerde ondersteuning signaleren.",
        "Differentiatie vervangt geen schoolondersteuningsmaatregelen (schoolpsychologische dienst, therapeuten, speciaal onderwijs), het is wat aanvullend in de reguliere klas plaatsvindt.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatieve evaluatie is elke praktijk die tijdens het leerproces informatie verzamelt, en die informatie gebruikt om het onderwijs of de ondersteuning aan de leerling aan te passen.",
        "In tegenstelling tot summatieve evaluatie (eindcijfers) heeft formatieve evaluatie geen cijfer nodig, het heeft feedback nodig.",
        "Voor neurodivergente leerlingen is formatieve evaluatie bijzonder belangrijk omdat prestaties op een eenmalige toets mogelijk niet weerspiegelen wat ze werkelijk weten.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: aan het einde van de les beantwoordt de leerling een vraag in 2 minuten, de leraar ziet onmiddellijk wie het begreep en wie niet.",
        "<strong>Stoplicht</strong>: groen (ik heb het begrepen), geel (ik heb twijfels), rood (ik heb het niet begrepen), kan fysieke kaarten, post-its of digitaal zijn.",
        "<strong>Think-Pair-Share</strong>: de leerling denkt individueel na, bespreekt het met een partner, deelt het dan met de klas, vermindert angst voor directe antwoorden.",
        "<strong>Uitgangspoort</strong>: voor vertrek vertelt de leerling de leraar één ding dat ze hebben geleerd en één twijfel die ze nog hebben.",
      ]},
      { items: [
        "Effectieve feedback is specifiek, uitvoerbaar en tijdig: \'op pagina 2 gaat het argument verloren omdat de verbinding met het bewijs ontbreekt\' is nuttig; \'kan beter\' is dat niet.",
        "Voor leerlingen met ADHD: onmiddellijke feedback is effectiever dan uitgestelde. Niet wachten tot het einde van de taak.",
        "Voor leerlingen met dyslexie: mondelinge of audiofeedback kan toegankelijker zijn dan uitgebreide schriftelijke opmerkingen.",
        "Vermijd het vergelijken van leerlingen met elkaar, vergelijk de leerling met hun eigen eerdere voortgang.",
      ]},
      { items: [
        "ADHD: beoordeling op meerdere korte momenten in plaats van één lange test. Afleidende prikkels in de beoordelingsomgeving verminderen.",
        "Dyslexie: mondelinge antwoorden, extra tijd of gebruik van tekst-naar-spraak toestaan. Inhoud beoordelen, niet spelling.",
        "Autisme: beoordelingen met duidelijke, ondubbelzinnige schriftelijke instructies. Vooraf waarschuwen voor formaatwijzigingen.",
        "Hoogbegaafdheid: beoordelingen vermijden die alleen inhoudsreproductie vereisen, vragen over analyse, synthese en creatie opnemen.",
      ]},
      { items: [
        "Wanneer, zelfs met beoordelingsaanpassingen, de leerling geen leren kan aantonen, is dit een teken dat er mogelijk een diepere barrière is die met de schoolbegeleidingsdienst onderzocht moet worden.",
        "Aanhoudende patronen (maanden, niet dagen) van specifieke moeilijkheden in een gebied moeten formeel worden gemeld.",
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
        "Opisuj zaobserwowane zachowania, a nie diagnozy: „gdy poleceń jest więcej niż dwa pod rząd, gubi wątek” zamiast „ma ADHD”.",
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
        "Gdy celem nie jest ocena pisania, oceniać treść oddzielnie od ortografii.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Przekazywanie tych samych informacji w różnych formatach (audio, wideo, schematy).",
      ]},
      { items: [
        "Wyraźne oddzielenie czytania od inteligencji już na samym początku: „bardzo dobrze rozumie ze słuchu — trudność dotyczy konkretnie czytania”.",
        "Pamiętanie, że dysleksja ma silny komponent dziedziczny: jedno z rodziców może mieć niezdiagnozowaną dysleksję, a rozmowa może odżywić trudne wspomnienia z własnej edukacji.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Unikanie pokazywania kartek pełnych poprawek na czerwono bez kontekstu — przedstawić najpierw to, co uczeń już potrafi.",
        "Konkretne wskazanie już wprowadzonych dostosowań oraz tych, które opiekun może powielić w domu: teksty w wersji audio, czytanie na głos bez presji czasu.",
      ]},
      { items: [
        "Pogarszający się obraz samego siebie w sferze szkolnej („jestem głupi”, „nie dam rady”).",
        "Systematyczne unikanie zadań związanych z czytaniem/pisaniem do tego stopnia, że odbija się to na innych przedmiotach.",
        "Wyraźna rozbieżność między wynikami ustnymi a pisemnymi bez formalnej diagnozy — skierować na ocenę psychopedagogiczną.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: {
      sections: [
        {
          items: [
            "Trudności z niezapowiedzianymi zmianami, zmiana planu lekcji, sali, nauczyciel zastępczy.",
            "Dosłowna komunikacja, gubi niuanse, ironię, idiomy.",
            "Wrażliwość sensoryczna, światło fluorescencyjne, szum tła, metki w ubraniu mogą być nie do zniesienia.",
            "Skupione i głębokie zainteresowania dotyczące określonych tematów.",
            "Może wydawać się niezainteresowany lub zdystansowany, gdy jest przytłoczony, nie odłączony."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> liniowa skala (\"bardziej\" lub \"mniej\" autystyczny), jest to wielowymiarowy profil.",
            "<strong>To nie jest</strong> brak empatii, często jest odwrotnie, z trudnością w filtrowaniu.",
            "<strong>To nie jest</strong> złe zachowanie, gdy rutyna zostaje przerwana, jest to prawdziwa reakcja neurologiczna."
          ]
        },
        {
          items: [
            "Z wyprzedzeniem informować o każdej zmianie rutyny, nawet pozornie błahej.",
            "Przekształcać niejawne reguły społeczne w reguły jawne (co się robi, czego nie robi, kiedy).",
            "W razie potrzeby umożliwić przerwy sensoryczne w cichym miejscu.",
            "Wykorzystywać skupione zainteresowanie jako punkt wejścia do treści programowych."
          ]
        },
        {
          items: [
            "Jeśli diagnoza już istnieje, najpierw zapytać, co rodzina wie, że działa.",
            "Jeśli nie ma diagnozy, opisywać konkretne sytuacje, nie używając słowa \"autyzm\" na pierwszym spotkaniu.",
            "Doceniać wysiłek rodziny, tworzenie struktury i przewidywalności w domu jest wymagające.",
            "Nigdy nie porównywać z \"innymi uczniami\" ani rodzeństwem, każdy profil spektrum jest inny."
          ]
        },
        {
          items: [
            "Częste kryzysy (\"meltdowny\") po dniu szkolnym.",
            "Utrzymująca się odmowa chodzenia do szkoły związana z przeciążeniem sensorycznym.",
            "Postępująca izolacja społeczna pomimo prób mediacji."
          ]
        }
      ]
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Pismo odręczne jest trudne, wolne i często nieczytelne, nie z powodu niedbałości, lecz z powodu rzeczywistych trudności motorycznych.",
            "Trudności z przestrzenną organizacją zeszytu, zarządzaniem materiałami, sekwencjami kroków.",
            "Może sprawiać wrażenie \"niezdarnego\", przelewa napoje, wchodzi w meble, ma trudności w sporcie.",
            "Nieproporcjonalne zmęczenie po zadaniach wymagających długotrwałej motoryki precyzyjnej.",
            "Komponent poznawczy jest zazwyczaj zachowany, częsta frustracja między wiedzą a możliwością jej pokazania."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> lenistwo ani brak zaangażowania.",
            "<strong>To nie jest</strong> tylko złe pismo, dotyczy planowania i sekwencjonowania zadań.",
            "<strong>Nie rozwiąże się tego</strong> przez \"więcej ćwiczeń w pisaniu\"."
          ]
        },
        {
          items: [
            "Zezwalać na używanie klawiatury/tabletu przy dłuższych pracach pisemnych.",
            "Ograniczać mechaniczne przepisywanie z tablicy, w razie potrzeby dostarczać notatki.",
            "Dostarczać wyraźne listy kontrolne do zadań składających się z wielu kroków.",
            "Oceniać produkt według treści, a nie wyglądu zewnętrznego."
          ]
        },
        {
          items: [
            "Wyjaśnić, czym jest dyspraksja, prostym językiem, większość rodziców/opiekunów nigdy nie słyszała tego terminu.",
            "Nieczytelne pismo jest największym źródłem tarcia z rodzicami/opiekunami.",
            "Proponować praktyczne narzędzia do użytku w domu: dyktowanie głosowe, klawiatura do dłuższych prac.",
            "Jeśli w poprzednich latach mówiono o \"lenistwie\", odnieść się do tego bezpośrednio."
          ]
        },
        {
          items: [
            "Całkowita odmowa pisemnej produkcji.",
            "Izolacja społeczna w kontekstach aktywności fizycznej.",
            "Oznaki somatyzowanego lęku przed pisemnymi sprawdzianami."
          ]
        }
      ]
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Kończy zadania w ciągu kilku minut, podczas gdy klasa potrzebuje całej lekcji.",
            "Zadaje pytania wykraczające poza zakres materiału, lub aktywnie kwestionuje to, co jest nauczane.",
            "Może sprawiać wrażenie niezainteresowanego, zdyscyplinowanego lub apatycznego, często są to oznaki przewlekłej nudy.",
            "Wyraźna wrażliwość emocjonalna; może być lękliwy, perfekcjonistyczny lub niesprawiedliwie wymagający wobec siebie.",
            "Realne ryzyko słabszych wyników, uczy się ukrywać swoje zdolności, by nie wyróżniać się społecznie."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> synonim dobrego zachowania ani dobrych wyników.",
            "<strong>To nie jest</strong> \"nie potrzebuje pomocy\", potrzebuje innych wyzwań, a nie mniej uwagi.",
            "<strong>To nie jest</strong> niezgodne z neuroróżnorodnością, podwójna wyjątkowość (2e) istnieje i jest częsta."
          ]
        },
        {
          items: [
            "Zawsze mieć przygotowane zadania rozszerzające, nie więcej tego samego, lecz głębsze lub zastosowane treści.",
            "Umożliwiać samodzielne badanie tematów interesujących ucznia w ramach programu.",
            "Oceniać według poziomu trudności, a nie łatwości, wymagać bardziej wymagających prac w zamian za mniejszą objętość.",
            "Uznawać i doceniać wrażliwość emocjonalną bez jej patologizowania."
          ]
        },
        {
          items: [
            "Antycypować dumę rodziców/opiekunów i skierować ją we właściwym kierunku: właśnie dlatego, że dziecko jest zdolne, nuda stwarza problemy.",
            "Wyjaśnić paradoks: dobre wyniki nie oznaczają, że dziecku jest dobrze.",
            "Jeśli uczeń ukrywa swoje zdolności, by się zintegrować społecznie, mówić o tym z wyczuciem.",
            "Zaproponować rodzicom/opiekunom, by cenili proces zamiast wyniku: ciekawość, głębię, trudne pytania."
          ]
        },
        {
          items: [
            "Oznaki lęku lub depresji związane z ekstremalnym perfekcjonizmem.",
            "Wyraźna izolacja społeczna wynikająca z poczucia bycia \"innym\" wśród rówieśników.",
            "Nagłe pogorszenie wyników akademickich u ucznia wcześniej zidentyfikowanego jako zdolny."
          ]
        }
      ]
    },
    plnm: {
      sections: [
        {
          items: [
            "Uczniowie uczący się języka polskiego jako drugiego mogą w klasie wydawać się wolniejsi, odzwierciedla to barierę językową, a nie ograniczenie poznawcze.",
            "Klasy przygotowawcze umożliwiają opanowanie podstaw języka polskiego przed integracją z klasą regularną.",
            "Dodatkowe zajęcia z języka polskiego są przewidziane w rozporządzeniu MEN 2017 o kształceniu cudzoziemców.",
            "Bariera językowa sama w sobie nie uzasadnia orzeczenia o potrzebie kształcenia specjalnego.",
            "Nauczyciel wspomagający lub asystent kulturowy to pierwsza osoba kontaktowa w zakresie wsparcia językowego."
          ]
        },
        {
          items: [
            "<strong>Nie</strong> każda trudność językowa jest problemem edukacyjnym, należy zawsze uwzględniać kontekst nauki polskiego jako drugiego języka.",
            "<strong>Nie</strong> zakładać, że brak aktywności ustnej wskazuje na brak zainteresowania.",
            "<strong>Nie</strong> mylić wsparcia językowego z kształceniem specjalnym, mają one inne podstawy prawne."
          ]
        },
        {
          items: [
            "Stosować techniki rusztowania: listy słownikowe, wsparcie wizualne, uproszczone polecenia.",
            "Traktować język ojczysty jako zasób, a nie przeszkodę.",
            "W razie wątpliwości włączyć pedagoga lub psychologa szkolnego, by odróżnić barierę językową od ewentualnych specjalnych potrzeb edukacyjnych.",
            "Rozmowy z rodzicami/opiekunami prowadzić w razie potrzeby z tłumaczem lub asystentem kulturowym."
          ]
        },
        {
          items: [
            "Wyjaśnić rodzicom/opiekunom, że nauka języka polskiego wymaga czasu, akademicka kompetencja językowa (CALP) rozwija się przez 5–7 lat.",
            "Wyjaśnić różnicę między językiem codziennym a językiem szkolnym.",
            "Wskazać konkretne formy wsparcia: klasa przygotowawcza, dodatkowe lekcje polskiego, wsparcie asystenta kulturowego.",
            "Uwzględnić kontekst kulturowy i system szkolny kraju pochodzenia jako zasób."
          ]
        },
        {
          items: [
            "Brak postępów w języku polskim mimo wsparcia językowego przez 6–12 miesięcy.",
            "Wskazania na trudności edukacyjne niezależne od bariery językowej.",
            "Oznaki emocjonalnego wycofania lub lęku szkolnego wykraczające poza niepewność językową."
          ]
        }
      ]
    },
    etica: {
      sections: [
        {
          items: [
            "Dane nieletnich podlegają wzmocnionej ochronie (art. 8 RODO). Zgoda rodziców/opiekunów jest obowiązkowa.",
            "Sprawdzić, gdzie narzędzie przechowuje dane, serwery europejskie lub pozaeuropejskie, zanonimizowane lub nie.",
            "Nigdy nie wprowadzać pełnych imion i nazwisk, adresów, numerów identyfikacyjnych ani klinicznych diagnoz do narzędzi generatywnej AI.",
            "Odróżniać użycie instytucjonalne od osobistego użytku nauczyciela (indywidualna odpowiedzialność)."
          ]
        },
        {
          items: [
            "Systemy wytrenowane głównie na danych anglojęzycznych mogą działać gorzej w innych kontekstach językowych.",
            "Automatyczne rekomendacje mogą wzmacniać stereotypy dotyczące płci, etniczności lub klasy, weryfikować krytycznie.",
            "Modele \"przewidywania ryzyka akademickiego\" często reprodukują istniejące nierówności."
          ]
        },
        {
          items: [
            "Celem jest zwiększenie autonomii ucznia, a nie zastępowanie pracy poznawczej, która go rozwija.",
            "Rozróżniać <strong>narzędzie dostępu</strong> (zamiana tekstu na mowę przy dysleksji) od <strong>narzędzia zastępczego</strong> (AI pisze wypracowanie).",
            "Regularnie oceniać: czy uczeń rozwija kompetencję, czy uzależnienie od narzędzia?"
          ]
        },
        {
          items: [
            "<strong>1.</strong> Czy narzędzie rozwiązuje prawdziwą barierę, czy tworzy skrót omijający uczenie się?",
            "<strong>2.</strong> Czy wprowadzone dane są chronione i czy istnieje zgoda?",
            "<strong>3.</strong> Czy wynik zostanie sprawdzony przez człowieka przed dotarciem do ucznia?",
            "<strong>4.</strong> Czy istnieje alternatywa bez AI, która działa równie dobrze?",
            "<strong>5.</strong> Jeśli narzędzie jutro przestanie istnieć, czy uczeń będzie bezradny?"
          ]
        }
      ]
    },
    oficina: {
      sections: [
        {
          items: [
            "Wyposażenie kolegów w umiejętności odpowiedzialnej integracji AI w nauczaniu, z tworzeniem materiałów dostosowanych do wielu profili uczenia się.",
            "To nie jest prezentacja, to ko-konstrukcja. Każdy uczestnik wychodzi z co najmniej jednym zasobem gotowym do przetestowania."
          ]
        },
        {
          items: [
            "<strong>0–10 min:</strong> Wprowadzenie, problem heterogenicznej klasy i dlaczego więcej tego samego nie działa.",
            "<strong>10–25 min:</strong> Mapa profili, prezentacja sześciu kart Farol z prawdziwymi (zanonimizowanymi) przypadkami.",
            "<strong>25–45 min:</strong> Demonstracja praktyczna, trzy narzędzia, trzy przypadki użycia, trzy różne profile.",
            "<strong>45–75 min:</strong> Praca w parach, każda para dostosowuje istniejący materiał do określonego profilu.",
            "<strong>75–85 min:</strong> Szybkie dzielenie się, każda para prezentuje swój produkt w 1 minutę.",
            "<strong>85–90 min:</strong> Zobowiązania, każdy uczestnik wyznacza jeden materiał do przetestowania w następnym tygodniu."
          ]
        },
        {
          items: [
            "Dostęp do internetu i konta instytucjonalne w demonstrowanych narzędziach.",
            "Istniejące materiały każdego uczestnika (karta pracy, sprawdzian lub plan lekcji).",
            "Wydrukowane karty profili Farol do wglądu."
          ]
        },
        {
          items: [
            "Każdy uczestnik tworzy podczas sesji co najmniej jeden dostosowany materiał.",
            "Sesja informacji zwrotnej po 30 dniach, w której co najmniej 60% uczestników zgłasza skuteczne wdrożenie.",
            "Co najmniej jeden materiał wyprodukowany podczas sesji zostaje przyjęty jako wspólny zasób departamentu."
          ]
        }
      ]
    },
    legislacao: {
      sections: [
        {
          items: [
            "Podstawa prawna: Ustawa Prawo Oświatowe z 2016 r. (Dz.U. 2016 poz. 59) oraz Rozporządzenie MEN w sprawie warunków organizowania kształcenia specjalnego (2017).",
            "Orzeczenie o potrzebie kształcenia specjalnego wydaje poradnia psychologiczno-pedagogiczna (PPP), jest niezbędne do sformalizowanego wsparcia specjalnego.",
            "Konstytucja RP i ratyfikowana Konwencja ONZ o prawach osób z niepełnosprawnościami stanowią ramy prawa do edukacji włączającej."
          ]
        },
        {
          items: [
            "Dostosowanie wymagań edukacyjnych możliwe na podstawie opinii PPP, bez orzeczenia, odpowiedzialność każdego nauczyciela.",
            "Metody aktywizujące i zróżnicowane podejście dydaktyczne są elementem dobrego nauczania.",
            "Wsparcie nauczyciela wspomagającego dostępne bez orzeczenia, na podstawie opinii PPP."
          ]
        },
        {
          items: [
            "Poradnia psychologiczno-pedagogiczna (PPP): wydaje opinie i orzeczenia, prowadzi diagnozy.",
            "Orzeczenie o kształceniu specjalnym: podstawa do opracowania IPET (Indywidualnego Programu Edukacyjno-Terapeutycznego).",
            "IPET opracowywany przez zespół nauczycieli i specjalistów we współpracy z rodzicami/opiekunami.",
            "Wielospecjalistyczna ocena poziomu funkcjonowania ucznia przeprowadzana co najmniej dwa razy w roku."
          ]
        },
        {
          items: [
            "Brak szczegółowej ustawy regulującej kształcenie uczniów zdolnych, zagadnienie ujęte w Krajowym Programie Wspierania Uczniów Zdolnych MEN.",
            "Klasy autorskie i indywidualny tok nauki dostępne dla uczniów wybitnie zdolnych.",
            "Olimpiady przedmiotowe jako forma stymulacji i uznania zdolności uczniów.",
            "Możliwość wcześniejszego ukończenia szkoły lub przyspieszenia nauki za zgodą dyrektora i rodziców/opiekunów."
          ]
        },
        {
          items: [
            "Uczniowie cudzoziemcy nieznający języka polskiego: klasy przygotowawcze zgodnie z rozporządzeniem MEN 2017.",
            "Dodatkowe zajęcia z języka polskiego jako obcego organizowane przez szkołę.",
            "Wsparcie asystenta kulturowego dla uczniów z trudnościami adaptacyjnymi.",
            "Bariera językowa nie uzasadnia sama w sobie orzeczenia o kształceniu specjalnym."
          ]
        },
        {
          items: [
            "Ustawa Prawo Oświatowe 2016 (Dz.U. 2016 poz. 59)",
            "Rozporządzenie MEN o kształceniu specjalnym 2017",
            "Poradnia psychologiczno-pedagogiczna (PPP)",
            "IPET (Indywidualny Program Edukacyjno-Terapeutyczny)",
            "Opinia PPP, orzeczenie o potrzebie kształcenia specjalnego"
          ]
        }
      ]
    },
    diferenciacao: { sections: [
      { items: [
        "Różnicowanie pedagogiczne oznacza dostosowanie sposobu nauczania, nie obniżanie oczekiwań. Cel uczenia się może być taki sam dla wszystkich uczniów; zmienia się droga.",
        "Model UDL (Projektowanie Uniwersalne dla Uczenia się) proponuje trzy zasady: wielorakie środki reprezentacji (jak treść jest prezentowana), wielorakie środki działania i wyrażania (jak uczeń reaguje) oraz wielorakie środki zaangażowania (co motywuje ucznia).",
        "Różnicowanie nie oznacza tworzenia indywidualnego planu lekcji dla każdego ucznia, oznacza tworzenie wystarczającej elastyczności, aby ta sama lekcja służyła różnym profilom uczniów.",
      ]},
      { items: [
        "<strong>Nie jest to</strong> redukowanie programu nauczania dla uczniów mających trudności.",
        "<strong>Nie jest to</strong> zawsze dawanie różnych zadań różnym uczniom, to izoluje i etykietuje.",
        "<strong>Nie są to</strong> tylko zróżnicowane karty pracy, różnicowanie obejmuje to, jak nauczyciel wyjaśnia, pyta i ocenia.",
      ]},
      { items: [
        "Kontrolowany wybór: oferowanie 2–3 opcji formatu odpowiedzi (pisemna, ustna, rysunek schematyczny), wszyscy uczniowie odpowiadają na tę samą treść.",
        "Scaffolding: zapewnienie struktury wsparcia uczniom z trudnościami; stopniowe jej usuwanie wraz z rosnącą samodzielnością.",
        "Elastyczne grupowanie: grupy według zainteresowań, poziomu opanowania lub mieszane, rotacja, aby unikać stałych grup, które stają się tożsamościami.",
        "Dostosowania czasu: więcej czasu nie oznacza mniej rygorystyczności. Dla uczniów z ADHD lub dyspraksją podziel zadanie na segmenty z zaplanowanymi przerwami.",
        "Poziom złożoności: dla tego samego tematu twórz wersje z większym lub mniejszym wsparciem językowym, z przykładami lub bez, z wskazówkami wizualnymi lub bez.",
      ]},
      { items: [
        "Oceniaj to, co uczeń wie, nie jak pisze. Uczeń z dysleksją może wykazać konceptualne opanowanie ustnie lub z pomocą technologiczną.",
        "Jasne kryteria oceniania udostępnione przed zadaniem pozwalają uczniowi wiedzieć, czego się oczekuje niezależnie od wybranego formatu.",
        "Portfolio lub ocenianie oparte na dowodach pozwala uczniowi pokazać postępy w czasie, a nie tylko w jednym momencie testu.",
      ]},
      { items: [
        "Gdy różnicowanie w klasie nie jest już wystarczające, a uczeń nadal nie może uzyskać dostępu do programu nauczania, może to sygnalizować potrzebę specjalistycznego wsparcia.",
        "Różnicowanie nie zastępuje szkolnych środków wsparcia (pedagog szkolny, terapeuci, edukacja specjalna), to co dzieje się w zwykłej klasie jako uzupełnienie.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Ocenianie kształtujące to każda praktyka, która zbiera informacje o uczeniu się podczas procesu, i wykorzystuje te informacje do dostosowania nauczania lub wsparcia ucznia.",
        "W przeciwieństwie do oceniania sumatywnego (oceny końcowe), ocenianie kształtujące nie potrzebuje oceny, potrzebuje informacji zwrotnej.",
        "Dla uczniów neuroróżnorodnych ocenianie kształtujące jest szczególnie ważne, ponieważ wynik na jednorazowym teście może nie odzwierciedlać tego, co naprawdę wiedzą.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na końcu lekcji uczeń odpowiada na pytanie w 2 minuty, nauczyciel natychmiast widzi, kto zrozumiał, a kto nie.",
        "<strong>Sygnalizator</strong>: zielony (rozumiem), żółty (mam wątpliwości), czerwony (nie rozumiem), mogą to być fizyczne karty, karteczki post-it lub forma cyfrowa.",
        "<strong>Think-Pair-Share</strong>: uczeń myśli indywidualnie, omawia z partnerem, a następnie dzieli się z klasą, zmniejsza lęk przed bezpośrednią odpowiedzią.",
        "<strong>Brama wyjścia</strong>: przed wyjściem uczeń mówi nauczycielowi jedną rzecz, której się nauczył, i jedną wątpliwość, którą nadal ma.",
      ]},
      { items: [
        "Skuteczna informacja zwrotna jest konkretna, wykonalna i terminowa: \'na stronie 2 argument gubi się, bo brakuje połączenia z dowodem\' jest przydatna; \'mogło być lepiej\' nie jest.",
        "Dla uczniów z ADHD: natychmiastowa informacja zwrotna jest skuteczniejsza niż odroczona. Nie czekaj do końca zadania.",
        "Dla uczniów z dysleksją: ustna lub dźwiękowa informacja zwrotna może być bardziej dostępna niż obszerne pisemne komentarze.",
        "Unikaj porównywania uczniów ze sobą, porównuj ucznia z jego własnym wcześniejszym postępem.",
      ]},
      { items: [
        "ADHD: ocenianie w wielu krótkich momentach zamiast jednego długiego testu. Zmniejsz rozpraszające bodźce w środowisku oceniania.",
        "Dysleksja: zezwól na odpowiedzi ustne, dodatkowy czas lub korzystanie z zamiany tekstu na mowę. Oceniaj treść, nie ortografię.",
        "Autyzm: ocenianie z jasnymi, jednoznacznymi pisemnymi instrukcjami. Wcześniej informuj o zmianach formatu.",
        "Zdolności wybitne: unikaj oceniania polegającego jedynie na reprodukcji treści, uwzględniaj pytania analityczne, syntetyczne i twórcze.",
      ]},
      { items: [
        "Gdy, nawet przy adaptacjach oceniania, uczeń nie może wykazać uczenia się, jest to sygnał, że może istnieć głębsza bariera do zbadania z pedagogiem szkolnym.",
        "Trwałe wzorce (miesiące, nie dni) specyficznych trudności w obszarze powinny być formalnie zgłoszone.",
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
        "Începeți cu ceea ce face bine elevul: întâlnirea nu poate debuta ca o listă de plângeri, altfel părintele se închide în defensivă.",
        "Descrieți comportamente observate, nu diagnostice: „când sunt mai mult de doi pași la rând, pierde firul” în loc de „are ADHD”.",
        "Anticipați reacția „acasă nu este așa”: explicați că, în context de grup și cu cerința unei atenții prelungite în clasă, simptomele devin mai vizibile.",
        "Dacă sugerați o evaluare, prezentați-o ca pe o resursă, nu ca pe o pedeapsă: „există un sprijin care îl/o poate ajuta mult” în loc de „trebuie să fie evaluat/ă”.",
      ]},
      { items: [
        "Eșec disciplinar persistent în pofida adaptărilor din clasă.",
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
        "Atunci când obiectivul nu este evaluarea scrisului, evaluarea conținutului separat de ortografie.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
    autismo: {
      sections: [
        {
          items: [
            "Dificultăți cu schimbările neanunțate, modificarea orarului, a sălii, profesor suplinitor.",
            "Comunicare literală, pierde nuanțele, ironia, expresiile idiomatice.",
            "Sensibilitate senzorială, lumina fluorescentă, zgomotul de fond, etichetele de pe haine pot fi intolerabile.",
            "Interese focalizate și profunde despre teme specifice.",
            "Poate părea dezinteresat sau distant când este supraîncărcat, nu detașat."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> o scală liniară (\"mai mult\" sau \"mai puțin\" autist), este un profil multidimensional.",
            "<strong>Nu este</strong> lipsă de empatie, frecvent este opusul, cu dificultăți în filtrare.",
            "<strong>Nu este</strong> comportament rău când o rutină este întreruptă, este un răspuns neurologic real."
          ]
        },
        {
          items: [
            "Anunțarea în avans a oricărei schimbări de rutină, chiar și aparent banale.",
            "Transformarea regulilor sociale implicite în reguli explicite (ce se face, ce nu se face, când).",
            "Permiterea pauzelor senzoriale într-un spațiu liniștit când este necesar.",
            "Valorificarea interesului focalizat ca punct de intrare pentru conținuturile curriculare."
          ]
        },
        {
          items: [
            "Dacă diagnosticul există deja, întrebați mai întâi ce știe familia că funcționează.",
            "Dacă nu există diagnostic, descrieți situații concrete fără a folosi cuvântul \"autism\" la prima întâlnire.",
            "Validați efortul familiei, crearea structurii și predictibilității acasă este solicitantă.",
            "Nu comparați niciodată cu \"alți elevi\" sau frați, fiecare profil al spectrului este diferit."
          ]
        },
        {
          items: [
            "Crize (\"meltdown-uri\") frecvente după ziua de școală.",
            "Refuz școlar persistent asociat cu supraîncărcarea senzorială.",
            "Izolare socială progresivă în ciuda tentativelor de mediere."
          ]
        }
      ]
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Scriere de mână dificilă, lentă, frecvent ilizibilă, nu din neglijență, ci din cauza unor dificultăți motorii reale.",
            "Dificultăți în organizarea spațială a caietului, gestionarea materialelor, secvențele de pași.",
            "Poate părea \"neîndemânatic\", varsă pahare, se lovește de mobilă, are dificultăți la sport.",
            "Oboseală disproporționată după sarcini care necesită motricitate fină susținută.",
            "Componenta cognitivă este în general păstrată, frustrare frecventă între a ști și a putea arăta."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> lene sau lipsă de aplicare.",
            "<strong>Nu este</strong> doar scris de mână prost, afectează planificarea și secvențierea sarcinilor.",
            "<strong>Nu se rezolvă</strong> prin \"mai mult antrenament în scriere\"."
          ]
        },
        {
          items: [
            "Permiterea utilizării tastaturii/tabletei la lucrări scrise extinse.",
            "Reducerea copierii mecanice de pe tablă, furnizarea de notițe când este relevant.",
            "Furnizarea de liste de verificare explicite pentru sarcini cu mai mulți pași.",
            "Evaluarea produsului după conținut, nu după prezentarea fizică."
          ]
        },
        {
          items: [
            "Explicarea în limbaj simplu ce este dispraxia, majoritatea părinților/tutorilor nu au auzit niciodată termenul.",
            "Scrierea ilizibilă este punctul de cea mai mare fricțiune cu părinții/tutorii.",
            "Sugerearea unor instrumente practice pentru acasă: dictare vocală, tastatură pentru lucrări extinse.",
            "Dacă există un istoric de \"este leneș/leneșă\" în anii precedenți, abordați acest lucru direct."
          ]
        },
        {
          items: [
            "Refuz total al producției scrise.",
            "Izolare socială în contexte de activitate fizică.",
            "Semne de anxietate somatizată înaintea evaluărilor scrise."
          ]
        }
      ]
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Termină sarcinile în câteva minute în timp ce clasa are nevoie de toată ora.",
            "Pune întrebări care depășesc sfera materiei, sau contestă activ ceea ce se predă.",
            "Poate părea dezinteresat, indisciplinat sau apatic, frecvent semne de plictiseală cronică.",
            "Sensibilitate emoțională accentuată; poate fi anxios, perfecționist sau nedrept de exigent cu sine însuși.",
            "Risc real de subperformanță, învață să-și ascundă capacitatea pentru a nu ieși în evidență social."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> sinonim cu comportament bun sau rezultate bune.",
            "<strong>Nu este</strong> \"nu are nevoie de ajutor\", are nevoie de provocări diferite, nu de mai puțină atenție.",
            "<strong>Nu este</strong> incompatibil cu neurodivergența, dubla excepționalitate (2e) există și este frecventă."
          ]
        },
        {
          items: [
            "Să aibă întotdeauna pregătite sarcini de extindere, nu mai mult din același lucru, ci materie mai profundă sau aplicată.",
            "Să permită cercetarea independentă pe teme de interes ale elevului în cadrul programei.",
            "Să evalueze după dificultate, nu după ușurință, să ceară lucrări mai solicitante în schimbul unui volum mai mic.",
            "Să recunoască și să valideze sensibilitatea emoțională fără a o patologiza."
          ]
        },
        {
          items: [
            "Anticipați mândria părinților/tutorilor și redirecționați-o: tocmai pentru că este capabil, plictiseala creează probleme.",
            "Explicați paradoxul: rezultatele bune nu înseamnă că este bine.",
            "Dacă elevul își ascunde capacitatea pentru a se integra social, numiți acest lucru cu grijă.",
            "Propuneți părinților/tutorilor să valorifice procesul în loc de rezultat: curiozitatea, profunzimea, întrebările dificile."
          ]
        },
        {
          items: [
            "Semne de anxietate sau depresie asociate cu perfecționismul extrem.",
            "Izolare socială marcată prin sentimentul de a fi \"diferit\" față de colegi.",
            "Scădere bruscă a performanțelor academice la un elev identificat anterior ca capabil."
          ]
        }
      ]
    },
    plnm: {
      sections: [
        {
          items: [
            "Elevii alofoni (cu altă limbă maternă decât româna) pot părea mai lenți în clasă, aceasta reflectă o barieră lingvistică, nu o limitare cognitivă.",
            "Clasele de inițiere în limba română oferă suport lingvistic intensiv înainte de integrarea în clasa obișnuită.",
            "CJRAE (Centrul Județean de Resurse și Asistență Educațională) coordonează protocoalele de primire și sprijinul pentru elevii alofoni.",
            "Mediatorul școlar poate sprijini comunicarea cu familiile din comunități rome sau imigrante.",
            "Bariera lingvistică singură nu justifică un certificat de orientare școlară spre învățământ special."
          ]
        },
        {
          items: [
            "<strong>Nu</strong> orice dificultate lingvistică este o problemă de învățare, contextul alofoniei trebuie întotdeauna luat în considerare.",
            "<strong>Nu</strong> presupuneți că lipsa participării orale indică lipsă de interes.",
            "<strong>Nu</strong> confundați sprijinul lingvistic cu educația specială, au baze juridice diferite."
          ]
        },
        {
          items: [
            "Utilizați tehnici de scaffolding: liste de vocabular, suport vizual, formulări simplificate ale sarcinilor.",
            "Recunoașteți limba maternă ca resursă, nu ca obstacol.",
            "Implicați consilierul școlar sau CJRAE pentru a distinge bariera lingvistică de eventualele nevoi educaționale speciale.",
            "Desfășurați discuțiile cu părinții/tutorii cu interpret sau mediator școlar, dacă este necesar."
          ]
        },
        {
          items: [
            "Explicați părinților/tutorilor că dobândirea limbii române necesită timp, competența academică lingvistică (CALP) se dezvoltă pe parcursul a 5–7 ani.",
            "Clarificați diferența dintre limba cotidiană și limba școlară.",
            "Menționați formele concrete de sprijin: clasă de inițiere, lecții suplimentare de română, mediator școlar.",
            "Includeți contextul cultural și sistemul școlar din țara de origine ca resursă."
          ]
        },
        {
          items: [
            "Niciun progres în limba română în ciuda sprijinului lingvistic timp de 6–12 luni.",
            "Indicii de dificultăți de învățare independente de bariera lingvistică.",
            "Semne de retragere emoțională sau anxietate școlară care depășesc nesiguranța lingvistică."
          ]
        }
      ]
    },
    etica: {
      sections: [
        {
          items: [
            "Datele minorilor sunt supuse unei protecții consolidate (Art. 8 RGPD). Consimțământul părinților/tutorilor este obligatoriu.",
            "Verificați unde instrumentul stochează datele, servere europene sau extraeuropene, anonimizate sau nu.",
            "Nu introduceți niciodată nume complete, adrese, numere de identificare sau diagnostice clinice în instrumente de IA generativă.",
            "Distingeți utilizarea instituțională de utilizarea personală a cadrului didactic (responsabilitate individuală)."
          ]
        },
        {
          items: [
            "Sistemele antrenate predominant cu date anglofone pot performa mai slab în alte contexte lingvistice.",
            "Recomandările automate pot amplifica stereotipuri de gen, etnie sau clasă, verificați critic.",
            "Modelele de \"predicție a riscului academic\" reproduc frecvent inegalitățile existente."
          ]
        },
        {
          items: [
            "Obiectivul este creșterea autonomiei elevului, nu înlocuirea muncii cognitive care îl dezvoltă.",
            "Distingeți <strong>instrumentul de acces</strong> (text-to-speech pentru dislexie) de <strong>instrumentul de substituire</strong> (IA scrie eseul).",
            "Evaluați regulat: elevul dezvoltă competență sau dependență față de instrument?"
          ]
        },
        {
          items: [
            "<strong>1.</strong> Instrumentul rezolvă o barieră reală sau creează o scurtătură care omite învățarea?",
            "<strong>2.</strong> Datele introduse sunt protejate și există consimțământul?",
            "<strong>3.</strong> Rezultatul va fi verificat de un om înainte de a ajunge la elev?",
            "<strong>4.</strong> Există o alternativă non-IA care funcționează la fel de bine?",
            "<strong>5.</strong> Dacă instrumentul nu mai există mâine, elevul rămâne neajutorat?"
          ]
        }
      ]
    },
    oficina: {
      sections: [
        {
          items: [
            "Capacitarea colegilor pentru integrarea responsabilă a IA în predare, cu producerea de materiale adaptabile la mai multe profiluri de învățare.",
            "Nu este o prezentare, este o co-construcție. Fiecare participant pleacă cu cel puțin o resursă gata de testat."
          ]
        },
        {
          items: [
            "<strong>0–10 min:</strong> Cadru, problema clasei eterogene și de ce mai mult din același lucru nu funcționează.",
            "<strong>10–25 min:</strong> Harta profilurilor, prezentarea celor șase carduri Farol, cu cazuri reale (anonimizate).",
            "<strong>25–45 min:</strong> Demonstrație practică, trei instrumente, trei cazuri de utilizare, trei profiluri distincte.",
            "<strong>45–75 min:</strong> Lucru în perechi, fiecare pereche adaptează un material existent pentru un profil specific.",
            "<strong>75–85 min:</strong> Partajare rapidă, fiecare pereche prezintă produsul său în 1 minut.",
            "<strong>85–90 min:</strong> Angajamente, fiecare participant definește un material de testat în săptămâna următoare."
          ]
        },
        {
          items: [
            "Acces la internet și conturi instituționale în instrumentele demonstrate.",
            "Materiale existente ale fiecărui participant (o fișă, un test sau un plan de lecție).",
            "Carduri imprimate ale profilurilor Farol pentru consultare."
          ]
        },
        {
          items: [
            "Fiecare participant produce cel puțin un material adaptat în timpul sesiunii.",
            "Sesiune de feedback la 30 de zile, cu cel puțin 60% din participanți raportând implementare efectivă.",
            "Cel puțin un material produs în sesiune este adoptat ca resursă comună a departamentului."
          ]
        }
      ]
    },
    legislacao: {
      sections: [
        {
          items: [
            "Baza legală principală: Legea Educației Naționale nr. 1/2011 (cu modificările ulterioare) și Ordinul MEC nr. 5.574/2011 privind metodologia pentru protecția copiilor cu cerințe educaționale speciale (CES).",
            "Legea nr. 272/2004 privind protecția și promovarea drepturilor copilului completează cadrul de drepturi educaționale.",
            "România a ratificat Convenția ONU privind drepturile persoanelor cu dizabilități, care stă la baza politicilor de educație incluzivă."
          ]
        },
        {
          items: [
            "Adaptările curriculare și diferențierea pedagogică sunt responsabilitatea tuturor cadrelor didactice, fără documentație specială.",
            "Măsurile compensatorii pot fi aplicate de profesor pe baza observației pedagogice.",
            "Cadrul didactic de sprijin poate fi solicitat fără certificat de orientare școlară, prin recomandarea CJRAE."
          ]
        },
        {
          items: [
            "CJRAE (Centrul Județean de Resurse și Asistență Educațională): realizează evaluarea complexă și coordonează sprijinul educațional.",
            "Certificatul de orientare școlară și profesională: emis de CJRAE, stă la baza încadrării în educație incluzivă sau specială.",
            "Plan de Servicii Individualizat (PSI): document de planificare pentru elevii cu CES, elaborat cu familia.",
            "Programul de Intervenție Personalizat (PIP): instrument de intervenție concretă în clasă, elaborat de echipa didactică."
          ]
        },
        {
          items: [
            "Legea nr. 17/2007 privind educația tinerilor supraperformanți reglementează sprijinul pentru elevii supradotați.",
            "Centrele de Excelență oferă programe de accelerare sau îmbogățire curriculară.",
            "Programele de accelerare (trecerea mai rapidă prin ani de studiu) și îmbogățire (aprofundare, extindere) sunt prevăzute legal.",
            "Identificarea supradotării se realizează prin evaluare psihologică la CJRAE sau cabinete specializate."
          ]
        },
        {
          items: [
            "Elevii alofoni beneficiază de suport lingvistic în limba română și pot fi incluși în clase de inițiere.",
            "CJRAE coordonează protocoalele de primire a elevilor cu altă limbă maternă.",
            "Mediatorul școlar sprijină comunicarea cu familiile din comunități rome sau imigrante.",
            "Nu există un regim juridic separat pentru alofoni, sprijinul se acordă prin mecanismele generale de incluziune."
          ]
        },
        {
          items: [
            "Legea Educației Naționale nr. 1/2011",
            "Ordinul MEC nr. 5.574/2011",
            "CJRAE (Centrul Județean de Resurse și Asistență Educațională)",
            "PSI (Plan de Servicii Individualizat) și PIP (Program de Intervenție Personalizat)",
            "Certificat de orientare școlară și profesională"
          ]
        }
      ]
    },
    diferenciacao: { sections: [
      { items: [
        "Diferențierea pedagogică înseamnă adaptarea modului de predare, nu reducerea așteptărilor. Obiectivul de învățare poate fi același pentru toți elevii; ceea ce variază este calea.",
        "Modelul UDL (Design Universal pentru Învățare) propune trei principii: multiple mijloace de reprezentare (cum este prezentat conținutul), multiple mijloace de acțiune și exprimare (cum răspund elevii) și multiple mijloace de implicare (ce îi motivează pe elevi).",
        "A diferenția nu înseamnă a crea un plan de lecție individual pentru fiecare elev, înseamnă a crea suficientă flexibilitate pentru ca aceeași lecție să servească diferite profiluri de elevi.",
      ]},
      { items: [
        "<strong>Nu este</strong> reducerea curriculumului pentru elevii cu dificultăți.",
        "<strong>Nu este</strong> oferirea întotdeauna de sarcini diferite unor elevi diferiți, aceasta izolează și etichetează.",
        "<strong>Nu este</strong> doar fișe diferențiate, diferențierea include modul în care profesorul explică, întreabă și evaluează.",
      ]},
      { items: [
        "Alegere controlată: oferirea a 2–3 opțiuni de format de răspuns (scris, oral, desen schematic), toți elevii răspund la același conținut.",
        "Scaffolding: furnizarea unui cadru structurat elevilor cu dificultăți; retragerea lui progresivă pe măsură ce autonomia crește.",
        "Grupare flexibilă: grupuri pe baza interesului, nivelului de stăpânire sau mixte, rotați-le pentru a evita grupuri fixe care devin identități.",
        "Ajustări de timp: mai mult timp nu înseamnă mai puțină rigoare. Pentru elevii cu ADHD sau dispraxie, împărțiți sarcina în segmente cu pauze planificate.",
        "Nivel de complexitate: pentru același subiect, creați versiuni cu mai mult sau mai puțin suport lingvistic, cu sau fără exemple, cu sau fără indicii vizuale.",
      ]},
      { items: [
        "Evaluați ce știe elevul, nu cum scrie. Un elev cu dislexie poate demonstra stăpânirea conceptuală oral sau cu suport tehnologic.",
        "Criterii clare de evaluare partajate înainte de sarcină permit elevului să știe ce se așteaptă indiferent de formatul ales.",
        "Portofoliul sau evaluarea bazată pe dovezi permite elevului să arate progresele în timp, nu doar într-un moment de testare.",
      ]},
      { items: [
        "Când diferențierea în clasă nu mai este suficientă și elevul continuă să nu poată accesa curriculumul, aceasta poate semnala necesitatea unui sprijin specializat.",
        "Diferențierea nu înlocuiește măsurile de sprijin școlar (psiholog școlar, terapeuți, educație specială), este ceea ce se întâmplă în clasa obișnuită ca și complement.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Evaluarea formativă este orice practică care colectează informații despre învățare în timpul procesului, și folosește acele informații pentru a ajusta predarea sau sprijinul pentru elev.",
        "Spre deosebire de evaluarea sumativă (note finale), cea formativă nu necesită o notă, necesită feedback.",
        "Pentru elevii neurodiversi, evaluarea formativă este deosebit de importantă deoarece performanța la un test punctual poate să nu reflecte ceea ce știu cu adevărat.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: la sfârșitul lecției, elevul răspunde la o întrebare în 2 minute, profesorul vede imediat cine a înțeles și cine nu.",
        "<strong>Semafor</strong>: verde (am înțeles), galben (am îndoieli), roșu (nu am înțeles), pot fi carduri fizice, post-it-uri sau digital.",
        "<strong>Think-Pair-Share</strong>: elevul gândește individual, discută cu un partener, apoi împărtășește cu clasa, reduce anxietatea față de răspunsul direct.",
        "<strong>Ușa de ieșire</strong>: înainte de a pleca, elevul spune profesorului un lucru pe care l-a învățat și un dubiu pe care îl mai are.",
      ]},
      { items: [
        "Feedback-ul eficient este specific, acționabil și oportun: \'la pagina 2, argumentul se pierde deoarece lipsește legătura cu dovada\' este util; \'ar putea fi mai bine\' nu este.",
        "Pentru elevii cu ADHD: feedback-ul imediat este mai eficient decât cel amânat. Nu așteptați până la sfârșitul sarcinii.",
        "Pentru elevii cu dislexie: feedback-ul oral sau audio poate fi mai accesibil decât comentariile scrise extinse.",
        "Evitați compararea elevilor între ei, comparați elevul cu propria sa progresie anterioară.",
      ]},
      { items: [
        "ADHD: evaluare în multiple momente scurte în loc de un singur test lung. Reduceți stimulii perturbatori din mediul de evaluare.",
        "Dislexie: permiteți răspunsuri orale, timp suplimentar sau utilizarea conversiei text-în-vorbire. Evaluați conținutul, nu ortografia.",
        "Autism: evaluări cu instrucțiuni scrise clare și fără ambiguitate. Anunțați din timp modificările de format.",
        "Supradotare: evitați evaluările de simplă reproducere a conținutului, includeți întrebări de analiză, sinteză și creare.",
      ]},
      { items: [
        "Când, chiar și cu adaptări de evaluare, elevul nu poate demonstra învățarea, acesta este un semn că poate exista o barieră mai profundă de investigat cu psihologul școlar.",
        "Tiparele persistente (luni, nu zile) de dificultate specifică într-un domeniu trebuie raportate formal.",
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
        "<strong>Nije</strong> uvijek vidljiva hiperaktivnost — postoji pretežno nepažljiva prezentacija, češća kod djevojčica i često nedovoljno dijagnosticirana.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
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
        "Znakovi komorbiditeta (anksioznost, depresija, prkosno-suprotstavljajući poremećaj) — česti kod ADHD-a i opravdavaju upućivanje.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
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
        "Kada cilj nije procjena pisanja, sadržaj procjenjivati odvojeno od pravopisa.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Teškoće s nenajavljivanim promjenama, rasporeda, učionice, zamjenskog nastavnika.",
        "Doslovna komunikacija, propušta nijanse, ironiju, idiomatske izraze.",
        "Senzorna osjetljivost, fluorescentno svjetlo, pozadinska buka, naljepnice na odjeći mogu biti nepodnošljivi.",
        "Fokusirana i duboka zanimanja za specifične teme.",
        "Može izgledati nezainteresirano ili distancirano kad je preopterećeno, a ne isključeno.",
      ]},
      { items: [
        "<strong>Nije</strong> linearna skala («više» ili «manje» autistično), to je višedimenzionalni profil.",
        "<strong>Nije</strong> nedostatak empatije, često je suprotno, teškoća filtriranja.",
        "<strong>Nije</strong> loše ponašanje kad se rutina prekine, to je stvaran neurološki odgovor.",
      ]},
      { items: [
        "Unaprijed obavijestiti o svakoj promjeni rutine, čak i naizgled trivijalnoj.",
        "Implicitna socijalna pravila učiniti eksplicitnima (što raditi, što ne raditi, kada).",
        "Dopustiti senzorne pauze u tihom prostoru kad je potrebno.",
        "Koristiti fokusirana zanimanja kao ulaznu točku u nastavni sadržaj.",
      ]},
      { items: [
        "Ako postoji dijagnoza, najprije pitati roditelje što funkcionira, roditelji autistične djece često znaju više od bilo kojeg izvješća.",
        "Ako nema dijagnoze, opisivati konkretne situacije bez korištenja riječi «autizam» na prvom sastanku.",
        "Potvrditi trud obitelji, stvaranje strukture i predvidljivosti kod kuće je zahtjevno.",
        "Nikada ne uspoređivati s «drugim učenicima», svaki profil na spektru je drugačiji.",
      ]},
      { items: [
        "Česti ispadi nakon školskog dana.",
        "Trajno odbijanje škole povezano sa senzornim preopterećenjem.",
        "Progresivna socijalna izolacija unatoč pokušajima medijacije.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Rukopis je težak, spor i često nečitak, ne zbog nemara, već zbog stvarnih motoričkih teškoća.",
        "Teškoće s prostornom organizacijom bilježnice, upravljanjem materijalima, slijedom koraka.",
        "Može izgledati nespretno, prelijeva čaše, udara u namještaj, teškoće u tjelesnom odgoju.",
        "Nerazmjerni umor nakon zadataka koji zahtijevaju dugotrajnu finu motoričku koordinaciju.",
        "Kognitivna komponenta je općenito očuvana, česta frustracija između znanja i izvedbe.",
      ]},
      { items: [
        "<strong>Nije</strong> lijenost ni nedostatak truda.",
        "<strong>Nije</strong> samo loš rukopis, utječe na planiranje i slijed zadataka.",
        "<strong>Ne rješava se</strong> «više vježbanja pisanja».",
      ]},
      { items: [
        "Dopustiti tipkovnicu/tablet za dulje pisane radove.",
        "Smanjiti mehaničko prepisivanje s ploče, osigurati bilješke kad je potrebno.",
        "Osigurati eksplicitne kontrolne liste za zadatke s više koraka.",
        "Vrednovati rad prema sadržaju, a ne prema fizičkoj prezentaciji.",
      ]},
      { items: [
        "Objasniti dispraksiju jednostavnim riječima, većina roditelja nikad nije čula taj termin.",
        "Nečitak rukopis je najveća točka trenja s roditeljima, pokazati da vrednovanje sada cijeni sadržaj.",
        "Predložiti praktične alate za kuću: glasovni unos za bilješke, tipkovnicu za dulje pisanje.",
        "Ako postoji povijest etikete «lijen/a» iz prethodnih godina, izravno to nazvati.",
      ]},
      { items: [
        "Potpuno odbijanje pisanog rada.",
        "Socijalna izolacija u kontekstu tjelesnih aktivnosti.",
        "Znakovi somatizacijske anksioznosti prije pisanih provjera.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Završava zadatke za nekoliko minuta dok ostatak razreda treba cijeli sat.",
        "Postavlja pitanja izvan okvira teme, ili aktivno dovodi u pitanje ono što se poučava.",
        "Može izgledati nezainteresirano, nedisciplinirano ili apatično, često znakovi kronične dosade.",
        "Pojačana emocionalna osjetljivost; može biti anksiozno, perfekcionistično ili nepravedno zahtjevno prema sebi.",
        "Stvaran rizik od neuspjeha, uči skrivati sposobnosti kako ne bi isticalo socijalno.",
      ]},
      { items: [
        "<strong>Nije</strong> sinonim za dobro ponašanje ili dobre rezultate, mnogi daroviti učenici imaju prosječne ocjene zbog nezainteresiranosti.",
        "<strong>Nije</strong> «ne treba pomoć», treba različite izazove, ne manje pažnje.",
        "<strong>Nije</strong> nespojivo s neurodivergencijom, dvostruka iznimnost (2e) postoji i česta je.",
      ]},
      { items: [
        "Uvijek imati pripremljene zadatke za proširenje, ne više istog, već dublje ili primijenjeno.",
        "Dopustiti samostalno istraživanje tema od interesa unutar kurikuluma.",
        "Vrednovati prema izazovu, ne prema lakoći, tražiti zahtjevniji rad u zamjenu za manji volumen.",
        "Prepoznati i potvrditi emocionalnu osjetljivost bez patologiziranja.",
      ]},
      { items: [
        "Anticipirati ponos roditelja i preusmjeriti ga: upravo sposobnost čini dosadu problemom.",
        "Objasniti paradoks: dobri rezultati ne znače da je sve u redu.",
        "Ako učenik skriva sposobnosti da bi se uklopio socijalno, pažljivo to nazvati, znak je uznemirenosti.",
        "Predložiti roditeljima da cijene proces više od rezultata: radoznalost i dubina važniji su od visokih ocjena na lakim zadacima.",
      ]},
      { items: [
        "Znakovi anksioznosti ili depresije povezani s ekstremnim perfekcionizmom.",
        "Socijalna izolacija zbog osjećaja «drugačijosti» od vršnjaka.",
        "Nagli akademski pad u učenika koji je prethodno prepoznat kao sposoban.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Razumije puno manje nego što izgleda, može klimati glavom bez da je razumjelo.",
        "Naizgled nisko akademsko postignuće, često nerazmjerno stvarnoj sposobnosti.",
        "Šutnja u razredu, može biti adaptacijska strategija, ne nezainteresiranost.",
        "Do kraja dana može biti iscrpljeno od mentalnog prevođenja u stvarnom vremenu.",
        "Rizik od nedijagnosticiranja stvarnih obrazovnih potreba pripisivanjem svega jezičnoj barijeri.",
      ]},
      { items: [
        "<strong>Nije</strong> nedostatak inteligencije ili sposobnosti.",
        "<strong>Nije</strong> samo pitanje vremena, bez eksplicitne podrške mnogi učenici stagniraju na niskoj funkcionalnoj razini.",
        "<strong>Ne rješava se</strong> automatskim prevođenjem tijekom nastave, to je proces koji traje godinama.",
      ]},
      { items: [
        "Osigurati materijale s ključnim rječnikom prevedenim na materinski jezik.",
        "Procjenjivati znanje vizualnom ili praktičnom demonstracijom gdje god je moguće.",
        "Spariti s dvojezičnim vršnjakom za neformalnu medijaciju u ključnim trenucima.",
        "Prihvatiti početne radove s gramatičkim pogreškama, ispravljati sadržaj, ne formu, u prvoj fazi.",
      ]},
      { items: [
        "Sam sastanak je prepreka, roditelji možda ne govore hrvatski dovoljno dobro.",
        "Ne pretpostavljati da roditelji poznaju hrvatski obrazovni sustav, objasniti svaki proces od početka.",
        "Jasno odvojiti jezičnu barijeru od akademske sposobnosti.",
        "Biti osjetljiv na migracijski kontekst, obitelji izbjeglica mogu imati nepovjerenje prema institucijama.",
      ]},
      { items: [
        "Znakovi socijalne izolacije ili zlostavljanja povezani s tim da je učenik stranac.",
        "Stagnacija u usvajanju jezika nakon prve godine.",
        "Znakovi traume povezane s migracijskim kontekstom.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Podaci o maloljetnicima podliježu pojačanoj zaštiti (Čl. 8 GDPR-a). Pristanak roditelja je obvezan.",
        "Provjeriti gdje alat pohranjuje podatke, europski ili neeuropski serveri, anonimizirani ili ne.",
        "Nikada ne unositi puna imena, adrese, OIB-ove ili kliničke dijagnoze u generativne AI alate.",
        "Razlikovati institucionalnu upotrebu (škola potpisuje ugovor) od osobne upotrebe nastavnika (individualna odgovornost).",
      ]},
      { items: [
        "Sustavi trenirani pretežno na engleskim podacima mogu slabije funkcionirati u hrvatskom jezičnom kontekstu.",
        "Automatizirane preporuke mogu pojačavati rodne, etničke ili klasne stereotipe, kritički provjeriti.",
        "Modeli «predviđanja akademskog rizika» često reproduciraju postojeće nejednakosti.",
      ]},
      { items: [
        "Cilj je povećati autonomiju učenika, ne zamijeniti kognitivni rad koji je razvija.",
        "Razlikovati <strong>alat za pristup</strong> (tekst u govor za disleksiju) od <strong>alata za supstituciju</strong> (AI piše esej).",
        "Redovito procjenjivati: razvija li učenik kompetenciju ili ovisnost o alatu?",
      ]},
      { items: [
        "<strong>1.</strong> Rješava li alat stvarnu barijeru ili stvara prečac koji zaobilazi učenje?",
        "<strong>2.</strong> Jesu li uneseni podaci zaštićeni i postoji li pristanak?",
        "<strong>3.</strong> Hoće li izlaz alata provjeriti čovjek prije nego dospije do učenika?",
        "<strong>4.</strong> Postoji li ne-AI alternativa koja funkcionira jednako dobro?",
        "<strong>5.</strong> Ako alat sutra prestane postojati, hoće li učenik biti bespomoćan?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Opremiti kolege za odgovornu integraciju AI-a u nastavu, izrađujući materijale prilagodljive višestrukim profilima učenja.",
        "Nije predavanje, to je ko-konstrukcija. Svaki sudionik odlazi s barem jednim resursom spremnim za testiranje.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Okvir, problem heterogene razredne zajednice i zašto više istog ne funkcionira.",
        "<strong>10–25 min:</strong> Karta profila, predstavljanje šest Farol kartica sa stvarnim (anonimiziranim) slučajevima.",
        "<strong>25–45 min:</strong> Praktična demonstracija, tri alata, tri slučaja uporabe, tri različita profila.",
        "<strong>45–75 min:</strong> Rad u parovima, svaki par prilagođava postojeći materijal za određeni profil.",
        "<strong>75–85 min:</strong> Brza razmjena, svaki par predstavlja svoj produkt za 1 minutu.",
        "<strong>85–90 min:</strong> Obveze, svaki sudionik definira jedan materijal za testiranje i zakazuje povratnu informaciju za 30 dana.",
      ]},
      { items: [
        "Internetski pristup i institucionalni računi u demonstriranim alatima.",
        "Postojeći materijali svakog sudionika (radni list, test ili plan lekcije).",
        "Ispisane Farol kartice profila za referencu.",
      ]},
      { items: [
        "Svaki sudionik izrađuje barem jedan prilagođeni materijal tijekom sesije.",
        "Sesija povratnih informacija nakon 30 dana s barem 60% sudionika koji prijavljuju učinkovitu primjenu.",
        "Barem jedan materijal izrađen na sesiji usvojen je kao zajednički resurs odjela.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Pravilnik o osnovnoškolskom i SŠ odgoju učenika s teškoćama (NN 24/2015), Zakon o odgoju i obrazovanju u OŠ i SŠ (NN 87/2008 i izmjene), ZUOPP (Zakon o odgoju i obrazovanju u osnovnoj školi, inkluzivne odredbe)",
        "Konvencija UN-a o pravima osoba s invaliditetom (2006.), ratificirala Hrvatska; uspostavlja inkluzivno obrazovanje kao pravo.",
        "Zakon o odgoju i obrazovanju u osnovnoj i srednjoj školi, temelj hrvatskog obrazovnog sustava s obvezom inkluzije.",
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
        "IOOP (Individualizirani odgojno-obrazovni program), izrađuje se suradnjom nastavnika, stručne službe, roditelja i učenika.",
        "Suradnja s centrom za odgoj i obrazovanje kada su potrebne dublje specijalizirane procjene.",
        "Upućivanje na vanjsku procjenu kada prilagodbe u školi nisu dostatne.",
      ]},
      { items: [
        "Daroviti učenici: Pravilnik o izvođenju nastave za darovite (NN 34/1991 i izmjene), mentorstvo, natjecanja, ubrzano napredovanje.",
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
        "Brzi vodič: Pravilnik o teškoćama NN 24/2015, Zakon o OOŠ NN 87/2008, IOOP, pedagog/psiholog škole, integracijski program za HJ2.",
        "Ključni dokumenti: IOOP, pedagoška dokumentacija, školski plan inkluzivnog obrazovanja.",
        "Prvi korak pri zabrinutosti: dokumentirati, razgovarati s pedagogom/psihologom, kontaktirati roditelje, tim redoslijedom.",
        "Zaštita podataka: svi podaci o potpori učenicima podliježu GDPR-u i Zakonu o zaštiti osobnih podataka.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagoška diferencijacija znači prilagodbu načina poučavanja, ne snižavanje očekivanja. Cilj učenja može biti isti za sve učenike; ono što se razlikuje je put.",
        "UDL model (Univerzalni dizajn za učenje) predlaže tri načela: višestruka sredstva reprezentacije (kako se sadržaj prezentira), višestruka sredstva djelovanja i izražavanja (kako učenik odgovara) i višestruka sredstva angažmana (što motivira učenika).",
        "Diferencijacija ne znači stvaranje individualnog plana sata za svakog učenika, znači stvaranje dovoljno fleksibilnosti da isti sat služi različitim profilima učenika.",
      ]},
      { items: [
        "<strong>Nije</strong> reduciranje kurikuluma za učenike s teškoćama.",
        "<strong>Nije</strong> uvijek davanje različitih zadataka različitim učenicima, to izolira i etiketira.",
        "<strong>Nisu</strong> samo diferencirani radni listovi, diferencijacija uključuje kako učitelj objašnjava, pita i procjenjuje.",
      ]},
      { items: [
        "Kontrolirani izbor: ponuditi 2–3 opcije formata odgovora (pisani, usmeni, shematski crtež), svi učenici odgovaraju na isti sadržaj.",
        "Scaffolding: pružiti strukturirani okvir učenicima s teškoćama; postupno ga uklanjati kako raste autonomija.",
        "Fleksibilno grupiranje: grupe prema interesu, razini svladanosti ili mješovite, rotirati kako bi se izbjeglo fiksne grupe koje postaju identiteti.",
        "Prilagodbe vremena: više vremena ne znači manje strogosti. Za učenike s ADHD-om ili dispraksijom podijelite zadatak na segmente s planiranim pauzama.",
        "Razina složenosti: za istu temu stvorite verzije s više ili manje jezičnih potpori, s primjerima ili bez, s vizualnim naputcima ili bez.",
      ]},
      { items: [
        "Procjenjujte što učenik zna, ne kako piše. Učenik s disleksijom može demonstrirati konceptualno vladanje usmeno ili s tehnološkom podrškom.",
        "Jasne rubrike podijeljene prije zadatka omogućuju učeniku da zna što se očekuje bez obzira na odabrani format.",
        "Portfolio ili procjena temeljena na dokazima omogućuje učeniku da pokaže napredak kroz vrijeme, a ne samo u jednom trenutku provjere.",
      ]},
      { items: [
        "Kada diferencijacija u razredu više nije dovoljna i učenik i dalje ne može pristupiti kurikulumu, to može signalizirati potrebu za stručnom podrškom.",
        "Diferencijacija ne zamjenjuje školske mjere potpore (stručna služba, terapeuti, specijalna edukacija), to je ono što se dopunski događa u redovitoj nastavi.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativno vrednovanje je svaka praksa koja prikuplja informacije o učenju tijekom procesa, i koristi te informacije za prilagodbu nastave ili podrške učeniku.",
        "Za razliku od sumativnog vrednovanja (zaključnih ocjena), formativno ne treba ocjenu, treba povratnu informaciju.",
        "Za neurodivergentne učenike formativno vrednovanje je posebno važno jer izvedba na jednokratnom testu možda ne odražava što zapravo znaju.",
      ]},
      { items: [
        "<strong>Izlazna kartica</strong>: na kraju sata učenik odgovara na pitanje u 2 minute, učitelj odmah vidi tko je razumio, a tko nije.",
        "<strong>Semafor</strong>: zelena (razumio sam), žuta (imam nedoumice), crvena (nisam razumio), mogu biti fizičke kartice, post-it listići ili digitalno.",
        "<strong>Think-Pair-Share</strong>: učenik razmišlja individualno, razgovara s partnerom, zatim dijeli s razredom, smanjuje anksioznost zbog izravnog odgovora.",
        "<strong>Izlazna vrata</strong>: prije odlaska učenik kaže učitelju jednu stvar koju je naučio i jednu nedoumicu koju još ima.",
      ]},
      { items: [
        "Učinkovita povratna informacija je specifična, provediva i pravovremena: \'na stranici 2 argument se gubi jer nedostaje veza s dokazom\' je korisno; \'moglo bi biti bolje\' nije.",
        "Za učenike s ADHD-om: trenutna povratna informacija je učinkovitija od odgođene. Ne čekati do kraja zadatka.",
        "Za učenike s disleksijom: usmena ili zvučna povratna informacija može biti dostupnija od opsežnih pisanih komentara.",
        "Izbjegavati uspoređivanje učenika međusobno, uspoređivati učenika s vlastitim prethodnim napretkom.",
      ]},
      { items: [
        "ADHD: vrednovanje u više kratkih trenutaka umjesto jednog dugog testa. Smanjiti ometajuće podražaje u okruženju vrednovanja.",
        "Disleksija: dopustiti usmene odgovore, dodatno vrijeme ili korištenje pretvaranja teksta u govor. Vrednovati sadržaj, ne pravopis.",
        "Autizam: vrednovanja s jasnim, nedvosmislenim pisanim uputama. Unaprijed upozoriti na promjene formata.",
        "Darovitost: izbjegavati vrednovanja pukog reproduciranja sadržaja, uključiti pitanja analize, sinteze i stvaranja.",
      ]},
      { items: [
        "Kada, čak i uz prilagodbe vrednovanja, učenik ne može demonstrirati učenje, to je znak da možda postoji dublja prepreka za istraživanje sa stručnom službom škole.",
        "Trajni obrasci (mjeseci, ne dani) specifičnih poteškoća u nekom području trebaju biti formalno prijavljeni.",
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
        "Začněte tím, co žák dělá dobře — schůzka nemůže začínat seznamem stížností, jinak se rodič defenzivně uzavře.",
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
        "Pokud cílem není hodnotit psaní, hodnotit obsah odděleně od pravopisu.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Výrazný nesoulad mezi ústním a písemným výkonem bez formální diagnózy — doporučit k psychopedagogickému vyšetření.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Obtíže s neohlášenými změnami, rozvrhu, třídy, suplujícího učitele.",
        "Doslovná komunikace, nepostřehne nuance, ironii, idiomatická vyjádření.",
        "Smyslová citlivost, zářivkové světlo, hluk na pozadí, visačky na oblečení mohou být nesnesitelné.",
        "Soustředěné a hluboké zájmy o specifická témata.",
        "Může působit nezaujatě nebo odtažitě při přetížení, ne vypnutě.",
      ]},
      { items: [
        "<strong>Není</strong> to lineární škála («víc» nebo «méně» autistický), jde o multidimenzionální profil.",
        "<strong>Není</strong> to nedostatek empatie, often je to opak, obtíže s filtrováním.",
        "<strong>Není</strong> to špatné chování, když se naruší rutina, je to skutečná neurologická reakce.",
      ]},
      { items: [
        "Předem informovat o každé změně rutiny, i zdánlivě bezvýznamné.",
        "Implicitní sociální pravidla učinit explicitními (co dělat, co nedělat, kdy).",
        "Umožnit senzorické přestávky v klidném prostoru dle potřeby.",
        "Využívat soustředěné zájmy jako vstupní bod do vzdělávacího obsahu.",
      ]},
      { items: [
        "Pokud diagnóza existuje, nejprve se zeptat rodičů, co funguje, rodiče autistických dětí vědí o svém dítěti často více než jakákoli zpráva.",
        "Pokud diagnóza neexistuje, popisovat konkrétní situace bez použití slova «autismus» na prvním setkání.",
        "Potvrdit úsilí rodiny, vytváření struktury a předvídatelnosti doma je náročné.",
        "Nikdy nesrovnávat s «ostatními žáky», každý profil na spektru je jiný.",
      ]},
      { items: [
        "Časté záchvaty po školním dni.",
        "Přetrvávající odpor ke škole spojený se smyslovým přetížením.",
        "Postupná sociální izolace navzdory pokusům o zprostředkování.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Písmo je obtížné, pomalé a často nečitelné, ne z nedbalosti, ale kvůli skutečným motorickým obtížím.",
        "Obtíže s prostorovou organizací sešitu, práci s pomůckami a sekvencováním kroků.",
        "Může působit «neobratně», převrhuje hrníčky, naráží do nábytku, obtíže v tělesné výchově.",
        "Nepřiměřená únava po úkolech vyžadujících trvalou jemnou motorickou koordinaci.",
        "Kognitivní složka je obecně zachována, časté frustrace mezi věděním a předvedením.",
      ]},
      { items: [
        "<strong>Není</strong> to lenost ani nedostatek snahy.",
        "<strong>Není</strong> to jen špatné písmo, ovlivňuje plánování a sekvencování úkolů.",
        "<strong>Neřeší se</strong> «více procvičovat psaní».",
      ]},
      { items: [
        "Umožnit použití klávesnice/tabletu pro delší písemné práce.",
        "Omezit mechanické opisování z tabule, poskytnout poznámky tam, kde je to relevantní.",
        "Poskytovat explicitní kontrolní seznamy pro úkoly s více kroky.",
        "Hodnotit práci podle obsahu, nikoli fyzické prezentace.",
      ]},
      { items: [
        "Vysvětlit dyspraxii jednoduchými slovy, většina rodičů tento termín nikdy neslyšela.",
        "Nečitelné písmo je největším třecím bodem s rodiči, ukázat, že hodnocení nyní oceňuje obsah.",
        "Navrhnout praktické nástroje pro domácnost: hlasový diktát pro poznámky, klávesnici pro delší psaní.",
        "Pokud existuje historie nálepky «líný/á» z předchozích let, pojmenovat to přímo.",
      ]},
      { items: [
        "Úplné odmítání písemného výstupu.",
        "Sociální izolace v kontextu tělesných aktivit.",
        "Příznaky somatizované úzkosti před písemnými zkouškami.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Dokončí úkoly za minuty, zatímco třída potřebuje celou hodinu.",
        "Klade otázky přesahující rámec tématu, nebo aktivně zpochybňuje to, co se vyučuje.",
        "Může působit nezainteresovaně, neukázněně nebo apaticky, často jde o příznaky chronické nudy.",
        "Zvýšená emocionální citlivost; může být úzkostný/á, perfekcionistický/á nebo vůči sobě nepřiměřeně náročný/á.",
        "Reálné riziko podvýkonu, naučí se skrývat schopnosti, aby sociálně nevynikal/a.",
      ]},
      { items: [
        "<strong>Není</strong> synonymem pro dobré chování nebo dobré výsledky, mnoho nadaných žáků má průměrné výsledky z důvodu odpojení.",
        "<strong>Neznamená</strong> «nepotřebuje pomoc», potřebuje jiné výzvy, ne méně pozornosti.",
        "<strong>Není</strong> neslučitelné s neurodivergencí, dvojitá výjimečnost (2e) existuje a je běžná.",
      ]},
      { items: [
        "Mít vždy připraveny rozšiřující úkoly, ne více téhož, ale hlubší nebo aplikovaný obsah.",
        "Umožnit samostatný výzkum témat zájmu v rámci kurikula.",
        "Hodnotit podle náročnosti, ne snadnosti, požadovat náročnější práci výměnou za menší objem.",
        "Uznávat a potvrzovat emocionální citlivost bez patologizování.",
      ]},
      { items: [
        "Předem počítat s rodičovskou hrdostí a přesměrovat ji: právě schopnost dělá z nudy problém.",
        "Vysvětlit paradox: dobré výsledky neznamenají, že je vše v pořádku.",
        "Pokud žák skrývá schopnosti, aby zapadl sociálně, pojmenovat to citlivě, je to znak tísně.",
        "Navrhnout rodičům, aby ocenili proces nad výsledky: zvídavost a hloubka jsou důležitější než vysoké známky za snadné úkoly.",
      ]},
      { items: [
        "Příznaky úzkosti nebo deprese spojené s extrémním perfekcionismem.",
        "Sociální izolace z pocitu «odlišnosti» od spolužáků.",
        "Náhlý pokles výkonu u žáka dříve identifikovaného jako schopného.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Rozumí mnohem méně, než se zdá, může kývat hlavou, aniž by pochopil/a.",
        "Zdánlivě nízký akademický výkon, často neúměrný skutečné schopnosti.",
        "Ticho ve třídě, může být adaptační strategií, ne nezájmem.",
        "Na konci dne může být vyčerpaný/á z mentálního překladu v reálném čase.",
        "Riziko poddiagnostikování skutečných vzdělávacích potřeb připisováním všeho jazykové bariéře.",
      ]},
      { items: [
        "<strong>Není</strong> to nedostatek inteligence nebo schopností.",
        "<strong>Není</strong> to jen otázka času, bez explicitní podpory mnoho žáků stagnuje na nízké funkční úrovni.",
        "<strong>Neřeší se</strong> automatickým překladem v hodině, je to proces na celé roky.",
      ]},
      { items: [
        "Poskytovat materiály s klíčovou slovní zásobou přeloženou do mateřského jazyka.",
        "Hodnotit znalosti vizuální nebo praktickou demonstrací kdykoli je to možné.",
        "Spárovat s dvojjazyčným spolužákem pro neformální zprostředkování v klíčových momentech.",
        "Přijímat počáteční písemné práce s gramatickými chybami, opravovat obsah, ne formu, v první fázi.",
      ]},
      { items: [
        "Samotná schůzka je bariérou, rodiče možná nemluví česky dostatečně dobře.",
        "Nepředpokládat, že rodiče znají český vzdělávací systém, vysvětlovat každý proces od začátku.",
        "Jasně oddělit jazykovou bariéru od akademických schopností.",
        "Být citlivý/á na migrační kontext, rodiny uprchlíků mohou nedůvěřovat institucím.",
      ]},
      { items: [
        "Příznaky sociální izolace nebo šikany spojené s tím, že je žák cizinec.",
        "Stagnace v osvojování jazyka po prvním roce.",
        "Příznaky traumatu spojené s migračním kontextem.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Data o nezletilých podléhají posílené ochraně (čl. 8 GDPR). Souhlas rodičů je povinný.",
        "Ověřit, kde nástroj ukládá data, evropské nebo mimoevropské servery, anonymizovaná nebo ne.",
        "Nikdy nezadávat celá jména, adresy, rodná čísla ani klinické diagnózy do generativních AI nástrojů.",
        "Odlišit institucionální použití (škola podepisuje smlouvu) od osobního použití učitele (individuální odpovědnost).",
      ]},
      { items: [
        "Systémy trénované převážně na anglických datech mohou v českém jazykovém kontextu fungovat hůře.",
        "Automatizovaná doporučení mohou zesilovat genderové, etnické nebo třídní stereotypy, kriticky ověřovat.",
        "Modely «predikce akademického rizika» často reprodukují existující nerovnosti.",
      ]},
      { items: [
        "Cílem je zvyšovat autonomii žáka, nikoli nahrazovat kognitivní práci, která ji rozvíjí.",
        "Odlišit <strong>nástroj pro přístup</strong> (text na řeč pro dyslexii) od <strong>nástroje pro substituci</strong> (AI píše esej).",
        "Pravidelně vyhodnocovat: rozvíjí žák kompetenci, nebo závislost na nástroji?",
      ]},
      { items: [
        "<strong>1.</strong> Řeší nástroj skutečnou bariéru, nebo vytváří zkratku, která obchází učení?",
        "<strong>2.</strong> Jsou zadaná data chráněna a existuje souhlas?",
        "<strong>3.</strong> Bude výstup nástroje před dosažením žáka ověřen člověkem?",
        "<strong>4.</strong> Existuje alternativa bez AI, která funguje stejně dobře?",
        "<strong>5.</strong> Pokud nástroj zítra přestane existovat, bude žák bezradný?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Vybavit kolegy pro zodpovědnou integraci AI do jazykové výuky a vytvořit materiály přizpůsobitelné různým vzdělávacím profilům.",
        "Není to prezentace, je to ko-konstrukce. Každý účastník odchází s alespoň jedním zdrojem připraveným k otestování.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Rámec, problém heterogenní třídy a proč více téhož nefunguje.",
        "<strong>10–25 min:</strong> Mapa profilů, představení šesti karet Farol se skutečnými (anonymizovanými) případy.",
        "<strong>25–45 min:</strong> Praktická ukázka, tři nástroje, tři případy použití, tři odlišné profily.",
        "<strong>45–75 min:</strong> Práce ve dvojicích, každá dvojice přizpůsobí existující materiál pro konkrétní profil.",
        "<strong>75–85 min:</strong> Rychlé sdílení, každá dvojice představí svůj produkt za 1 minutu.",
        "<strong>85–90 min:</strong> Závazky, každý účastník určí jeden materiál k otestování a naplánuje zpětnovazební sezení za 30 dní.",
      ]},
      { items: [
        "Přístup k internetu a institucionální účty v demonstrovaných nástrojích.",
        "Existující materiály každého účastníka (pracovní list, test nebo plán hodiny).",
        "Vytištěné karty profilů Farol pro referenci.",
      ]},
      { items: [
        "Každý účastník vytvoří během sezení alespoň jeden přizpůsobený materiál.",
        "Zpětnovazební sezení po 30 dnech s alespoň 60 % účastníků hlásících účinnou implementaci.",
        "Alespoň jeden materiál vytvořený na sezení je přijat jako sdílený zdroj oddělení.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Zákon č. 561/2004 Sb. (Školský zákon), základní právní rámec vzdělávání v ČR.",
        "Vyhláška č. 27/2016 Sb. o vzdělávání žáků se speciálními vzdělávacími potřebami, podpůrná opatření 1.–5. stupně.",
        "Akční plán inkluzivního vzdělávání MŠMT, závazek k inkluzivnímu přístupu.",
        "Úmluva OSN o právech osob se zdravotním postižením (2006), ratifikovaná ČR; zakotvuje právo na inkluzivní vzdělávání.",
      ]},
      { items: [
        "Plán pedagogické podpory (PLPP): každý učitel jej může zavést bez doporučení PPP; zahrnuje úpravy metod, organizace a hodnocení.",
        "Uplatňovat principy Univerzálního designu pro učení: více způsobů prezentace, vyjadřování a zapojení.",
        "Bez formální diagnózy lze aplikovat rozumné úpravy: prodloužený čas, ústní odpovědi, alternativní formáty.",
        "Zaznamenávat neformální pozorování žáků s možnými neuspokojenými potřebami, výchozí bod pro doporučení.",
      ]},
      { items: [
        "Pedagogicko-psychologická poradna (PPP) nebo Speciálně pedagogické centrum (SPC), první kontakt při identifikaci obtíží.",
        "Doporučení PPP/SPC, základ pro přiznání podpůrných opatření.",
        "Individuální vzdělávací plán (IVP), vypracovává se ve spolupráci učitele, PPP/SPC, rodičů a žáka.",
        "Podpůrná opatření 1.–5. stupně, od úprav ve třídě až po speciální školy.",
      ]},
      { items: [
        "Nadaní žáci: §17 Školského zákona, právo na vzdělávání odpovídající jejich možnostem.",
        "Systém podpory nadaných žáků NPI ČR, přeřazení do vyššího ročníku, kroužky a rozšiřující programy.",
        "Dokumentovat projevy nadání a začlenit rozšiřující úkoly do plánování výuky.",
      ]},
      { items: [
        "Žáci cizinci: přípravné třídy (§ 46 Školský zákon), bezplatná jazyková podpora češtiny.",
        "Metodické doporučení MŠMT pro vzdělávání cizinců, rámec pro jazykovou a integrační podporu.",
        "Jazyková bariéra musí být jasně oddělena od vzdělávacích obtíží, žák nesmí být doporučen k vyšetření jen kvůli neznalosti jazyka.",
        "Školy s větším podílem žáků cizinců by měly mít plán interkulturální výchovy.",
      ]},
      { items: [
        "Rychlý přehled: Školský zákon 561/2004, Vyhl. 27/2016, PLPP, IVP, PPP, SPC, podpůrná opatření 1–5. stupně.",
        "Klíčové dokumenty: IVP, žákovská dokumentace, školní plán inkluzivního vzdělávání.",
        "První krok při obavách o žáka: dokumentovat, poradit se s výchovným poradcem, kontaktovat rodiče, v tomto pořadí.",
        "Ochrana dat: veškerá data o podpoře žáků podléhají GDPR a zákonu o ochraně osobních údajů.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagogická diferenciace znamená přizpůsobit způsob výuky, nesnižovat očekávání. Cíl učení může být pro všechny žáky stejný; liší se cesta.",
        "Model UDL (Univerzální design pro učení) navrhuje tři principy: různé prostředky reprezentace (jak je obsah prezentován), různé prostředky jednání a vyjadřování (jak žák reaguje) a různé prostředky zapojení (co žáka motivuje).",
        "Diferencovat neznamená vytvářet individuální plán hodiny pro každého žáka, znamená to vytvořit dostatečnou flexibilitu, aby tatáž hodina sloužila různým profilům žáků.",
      ]},
      { items: [
        "<strong>Není to</strong> redukování učiva pro žáky s obtížemi.",
        "<strong>Není to</strong> vždy zadávat různé úkoly různým žákům, to izoluje a nálepkuje.",
        "<strong>Není to</strong> jen diferenciované pracovní listy, diferenciace zahrnuje způsob, jakým učitel vysvětluje, klade otázky a hodnotí.",
      ]},
      { items: [
        "Řízená volba: nabídnout 2–3 možnosti formátu odpovědi (písemná, ústní, schematická kresba), všichni žáci reagují na stejný obsah.",
        "Scaffolding: poskytnout strukturovaný rámec žákům s obtížemi; postupně ho odstraňovat s rostoucí samostatností.",
        "Flexibilní seskupování: skupiny podle zájmu, úrovně zvládnutí nebo smíšené, střídat, aby se vyhnulo pevným skupinám, které se stávají identitami.",
        "Úpravy času: více času neznamená méně přísnosti. Pro žáky s ADHD nebo dyspraxií rozdelit úkol na segmenty s plánovanými přestávkami.",
        "Úroveň složitosti: pro stejné téma vytvářet verze s větší nebo menší jazykovou podporou, s příklady nebo bez, s vizuálními nápovědami nebo bez.",
      ]},
      { items: [
        "Hodnotit, co žák ví, ne jak píše. Žák s dyslexií může prokázat konceptuální zvládnutí ústně nebo s technologickou podporou.",
        "Jasná hodnotící kritéria sdílená před úkolem umožňují žákovi vědět, co je očekáváno bez ohledu na zvolený formát.",
        "Portfolio nebo hodnocení na základě důkazů umožňuje žákovi ukázat pokroky v čase, ne jen v jednom momentě zkoušení.",
      ]},
      { items: [
        "Když diferenciace ve třídě přestane být dostatečná a žák stále nemá přístup k učivu, může to signalizovat potřebu specializované podpory.",
        "Diferenciace nenahrazuje školní podpůrná opatření (školní psycholog, terapeuti, speciální vzdělávání), je to to, co se komplementárně děje v běžné třídě.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativní hodnocení je každá praxe, která shromažďuje informace o učení během procesu, a tyto informace využívá k přizpůsobení výuky nebo podpory žákovi.",
        "Na rozdíl od sumativního hodnocení (závěrečné známky) formativní nepotřebuje známku, potřebuje zpětnou vazbu.",
        "Pro neurodivergenní žáky je formativní hodnocení zvláště důležité, protože výkon při jednorázovém testu nemusí odrážet, co skutečně vědí.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na konci hodiny žák zodpoví otázku za 2 minuty, učitel okamžitě vidí, kdo pochopil a kdo ne.",
        "<strong>Semafor</strong>: zelená (pochopil jsem), žlutá (mám pochybnosti), červená (nepochopil jsem), mohou být fyzické kartičky, post-ity nebo digitální.",
        "<strong>Think-Pair-Share</strong>: žák přemýšlí individuálně, diskutuje s partnerem, pak sdílí se třídou, snižuje úzkost z přímé odpovědi.",
        "<strong>Výstupní brána</strong>: před odchodem žák řekne učiteli jednu věc, kterou se naučil, a jednu pochybnost, kterou stále má.",
      ]},
      { items: [
        "Účinná zpětná vazba je konkrétní, realizovatelná a včasná: \'na straně 2 se argument ztrácí, protože chybí propojení s důkazem\' je užitečné; \'mohlo by být lepší\' není.",
        "Pro žáky s ADHD: okamžitá zpětná vazba je účinnější než opožděná. Nečekat do konce úkolu.",
        "Pro žáky s dyslexií: ústní nebo zvuková zpětná vazba může být přístupnější než obsáhlé písemné komentáře.",
        "Vyhýbat se srovnávání žáků mezi sebou, srovnávat žáka s jeho vlastním předchozím pokrokem.",
      ]},
      { items: [
        "ADHD: hodnocení v několika krátkých momentech místo jednoho dlouhého testu. Snížit rušivé podněty v prostředí hodnocení.",
        "Dyslexie: umožnit ústní odpovědi, extra čas nebo použití převodu textu na řeč. Hodnotit obsah, ne pravopis.",
        "Autismus: hodnocení s jasnými, jednoznačnými písemnými pokyny. Předem upozornit na změny formátu.",
        "Nadání: vyhnout se hodnocením pouhé reprodukce obsahu, zahrnout otázky analýzy, syntézy a tvorby.",
      ]},
      { items: [
        "Když žák ani přes přizpůsobení hodnocení nemůže prokázat učení, je to signál, že může existovat hlubší překážka k prozkoumání se školním psychologem.",
        "Přetrvávající vzorce (měsíce, ne dny) specifických obtíží v určité oblasti by měly být formálně oznámeny.",
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
        "Börja med det eleven gör bra — mötet får inte inledas som en lista med klagomål, annars sluter sig vårdnadshavaren defensivt.",
        "Beskriv observerade beteenden, inte diagnoser: ”när det är fler än två steg i rad tappar hen tråden” i stället för ”har ADHD”.",
        "Förekom reaktionen ”hemma är det inte så” — förklara att gruppsammanhanget och kravet på långvarig uppmärksamhet i klassrummet gör symtomen mer synliga.",
        "Om du föreslår en utredning, presentera den som en resurs, inte som ett straff: ”det finns stöd som kan hjälpa hen mycket” i stället för ”behöver utredas”.",
      ]},
      { items: [
        "Ihållande regelbrott trots anpassningar i klassrummet.",
        "Tecken på social uteslutning av jämnåriga.",
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
        "När syftet inte är att bedöma skrivandet, bedöm innehållet skilt från stavningen.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Markant skillnad mellan muntlig och skriftlig prestation utan formell diagnos — remittera för psykopedagogisk utredning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Svårigheter med oanmälda förändringar, schema, klassrum, vikarie.",
        "Bokstavlig kommunikation, missar nyanser, ironi, idiomatiska uttryck.",
        "Sensorisk känslighet, lysrör, bakgrundsljud, klädetiketter kan vara outhärdliga.",
        "Fokuserade och djupa intressen för specifika ämnen.",
        "Kan verka ointresserad eller distanserad vid överstimulering, inte likgiltig.",
      ]},
      { items: [
        "<strong>Det är inte</strong> en linjär skala («mer» eller «mindre» autistisk), det är en multidimensionell profil.",
        "<strong>Det är inte</strong> brist på empati, det är ofta tvärtom, svårigheter att filtrera intryck.",
        "<strong>Det är inte</strong> dåligt beteende när en rutin bryts, det är ett verkligt neurologiskt svar.",
      ]},
      { items: [
        "Ge förhandsbesked om alla rutinförändringar, även till synes triviala.",
        "Gör implicita sociala regler explicita (vad man ska göra, vad man inte ska göra, när).",
        "Tillåt sensoriska pauser i ett tyst utrymme vid behov.",
        "Använd fokuserade intressen som ingångspunkt till läroplanens innehåll.",
      ]},
      { items: [
        "Om diagnos finns, fråga först vad vårdnadshavarna vet fungerar, föräldrar till autistiska barn vet ofta mer än någon utredning.",
        "Om ingen diagnos finns, beskriv konkreta situationer utan att använda ordet «autism» vid ett första möte.",
        "Bekräfta familjens ansträngningar, att skapa struktur och förutsägbarhet hemma är krävande.",
        "Jämför aldrig med «andra elever», varje spektrumprofil är annorlunda.",
      ]},
      { items: [
        "Frekventa sammanbrottsepisoder efter skoldagen.",
        "Ihållande skolvägrande kopplat till sensorisk överstimulering.",
        "Progressiv social isolering trots medieringsförsök.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Handstil är svår, långsam och ofta oläslig, inte av slarv utan på grund av verkliga motoriska svårigheter.",
        "Svårigheter med rumslig organisation i häften, hantering av material och sekvensering av steg.",
        "Kan verka «klumpig», välter koppar, stöter i möbler, svårigheter på idrotten.",
        "Oproportionerlig trötthet efter uppgifter som kräver uthållig finmotorisk koordination.",
        "Den kognitiva komponenten är generellt bevarad, frekvent frustration mellan att veta och att visa.",
      ]},
      { items: [
        "<strong>Det är inte</strong> lathet eller brist på ansträngning.",
        "<strong>Det är inte</strong> bara dålig handstil, det påverkar planering och sekvensering av uppgifter.",
        "<strong>Det löses inte</strong> med «att öva mer på handstil».",
      ]},
      { items: [
        "Tillåt användning av tangentbord/platta för längre skriftliga arbeten.",
        "Minska mekanisk avskrivning från tavlan, ge anteckningar när det är relevant.",
        "Tillhandahåll explicita checklistor för uppgifter med flera steg.",
        "Bedöm produkten efter innehåll, inte fysisk presentation.",
      ]},
      { items: [
        "Förklara dyspraxi i enkla termer, de flesta vårdnadshavare har aldrig hört ordet.",
        "Oläslig handstil är den största friktionspunkten med vårdnadshavare, visa att bedömning nu värderar innehåll.",
        "Föreslå praktiska verktyg hemma: röstdiktering för anteckningar, tangentbord för längre skrivande.",
        "Om det finns en historia av «lat»-etiketter från tidigare år, namnge det direkt.",
      ]},
      { items: [
        "Fullständigt vägrande av skriftlig produktion.",
        "Social isolering i sammanhang med fysisk aktivitet.",
        "Tecken på somatiserad ångest inför skriftliga prov.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Avslutar uppgifter på minuter medan klassen tar hela lektionen.",
        "Ställer frågor utanför ämnets ramar, eller ifrågasätter aktivt det som undervisas.",
        "Kan verka ointresserad, odisciplinerad eller apatisk, ofta tecken på kronisk tristess.",
        "Förhöjd emotionell känslighet; kan vara ängslig, perfektionistisk eller orättvist krävande mot sig själv.",
        "Verklig risk för underprestationer, lär sig dölja förmåga för att inte sticka ut socialt.",
      ]},
      { items: [
        "<strong>Det är inte</strong> synonymt med gott uppförande eller goda resultat, många begåvade elever har genomsnittliga betyg på grund av ointresse.",
        "<strong>Det innebär inte</strong> «behöver inte hjälp», de behöver andra utmaningar, inte mindre uppmärksamhet.",
        "<strong>Det är inte</strong> oförenligt med neurodivergens, dubbelexceptionell (2e) existerar och är vanlig.",
      ]},
      { items: [
        "Ha alltid fördjupningsuppgifter redo, inte mer av samma, utan djupare eller tillämpad materia.",
        "Tillåt självständig forskning om intresseämnen inom läroplanen.",
        "Bedöm efter utmaning, inte lätthet, begär mer krävande arbete i utbyte mot lägre volym.",
        "Erkänn och bekräfta emotionell känslighet utan att patologisera.",
      ]},
      { items: [
        "Förutse föräldrastolthet och omdirigera den: det är precis förmågan som gör tristessen till ett problem.",
        "Förklara paradoxen: goda resultat innebär inte att allt är bra.",
        "Om eleven döljer sin förmåga för att passa in socialt, namnge det varsamt, det är ett tecken på stress.",
        "Uppmuntra vårdnadshavare att värdera process framför resultat: nyfikenhet och djup är viktigare än höga betyg på lätta uppgifter.",
      ]},
      { items: [
        "Tecken på ångest eller depression kopplade till extrem perfektionism.",
        "Social isolering från en känsla av att vara «annorlunda» än kamraterna.",
        "Plötslig prestationsförsämring hos en elev som tidigare identifierats som kapabel.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Förstår mycket mindre än det verkar, kan nicka utan att ha förstått.",
        "Till synes låg akademisk prestation, ofta oproportionerlig till verklig förmåga.",
        "Tystnad i klassen, kan vara en adaptiv strategi, inte ointresse.",
        "Kan vara utmattad i slutet av dagen av att mentalt översätta i realtid.",
        "Risk för underdiagnostisering av verkliga utbildningsbehov genom att tillskriva allt språkbarriären.",
      ]},
      { items: [
        "<strong>Det är inte</strong> brist på intelligens eller förmåga.",
        "<strong>Det är inte</strong> bara en tidsfråga, utan explicit stöd planar många elever ut på en låg funktionell nivå.",
        "<strong>Det löses inte</strong> med automatisk översättning under lektionen, det är en process på flera år.",
      ]},
      { items: [
        "Tillhandahåll material med nyckelordförråd översatt till modersmålet.",
        "Bedöm kunskaper genom visuell eller praktisk demonstration när det är möjligt.",
        "Para ihop med en tvåspråkig klasskamrat för informell medling vid kritiska tillfällen.",
        "Acceptera inledande arbeten med grammatikfel, rätta innehåll, inte form, i första fasen.",
      ]},
      { items: [
        "Mötet i sig är ett hinder, vårdnadshavare kanske inte talar svenska tillräckligt väl.",
        "Antag inte att vårdnadshavare känner till det svenska utbildningssystemet, förklara varje process från grunden.",
        "Separera tydligt språkbarriär från akademisk förmåga.",
        "Var känslig för migrationssammanhanget, flyktingfamiljer kan ha misstroende mot myndigheter.",
      ]},
      { items: [
        "Tecken på social isolering eller mobbning kopplat till att vara nyanlända.",
        "Stagnation i språkinlärning efter det första året.",
        "Tecken på trauma kopplat till migrationssammanhanget.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Data om minderåriga omfattas av förstärkt skydd (Art. 8 GDPR). Samtycke från vårdnadshavare är obligatoriskt.",
        "Kontrollera var verktyget lagrar data, europeiska eller icke-europeiska servrar, anonymiserade eller inte.",
        "Ange aldrig fullständiga namn, adresser, personnummer eller kliniska diagnoser i generativa AI-verktyg.",
        "Skilja på institutionell användning (skolan tecknar avtal) och lärarens personliga användning (individuellt ansvar).",
      ]},
      { items: [
        "System tränade övervägande på engelskspråkiga data kan prestera sämre i svenska och andra språkliga sammanhang.",
        "Automatiserade rekommendationer kan förstärka kön-, etnicitets- eller klassstereotyper, granska kritiskt.",
        "Modeller för «akademisk riskprediktion» reproducerar ofta befintliga ojämlikheter.",
      ]},
      { items: [
        "Målet är att öka elevens autonomi, inte att ersätta det kognitiva arbete som utvecklar den.",
        "Skilja på ett <strong>tillgänglighetsverktyg</strong> (text-till-tal för dyslexi) och ett <strong>substitutionsverktyg</strong> (AI skriver uppsatsen).",
        "Utvärdera regelbundet: utvecklar eleven kompetens eller beroende av verktyget?",
      ]},
      { items: [
        "<strong>1.</strong> Löser verktyget ett verkligt hinder eller skapar det en genväg som kringgår lärandet?",
        "<strong>2.</strong> Är de inmatade uppgifterna skyddade och finns samtycke?",
        "<strong>3.</strong> Kommer verktygets output att granskas av en människa innan den når eleven?",
        "<strong>4.</strong> Finns det ett icke-AI-alternativ som fungerar lika bra?",
        "<strong>5.</strong> Om verktyget försvinner imorgon, kommer eleven att vara hjälplös?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Rusta kollegor för ansvarsfull AI-integration i språkundervisning och producera material anpassningsbart till flera lärandeprofiler.",
        "Det är inte en presentation, det är en samkonstruktion. Varje deltagare lämnar med minst en resurs redo att testa.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Ramverk, problemet med den heterogena klassen och varför mer av samma inte fungerar.",
        "<strong>10–25 min:</strong> Profilkarta, presentation av de sex Farol-korten med verkliga (anonymiserade) fall.",
        "<strong>25–45 min:</strong> Praktisk demonstration, tre verktyg, tre användningsfall, tre distinkta profiler.",
        "<strong>45–75 min:</strong> Pararbete, varje par anpassar ett befintligt material för en specifik profil.",
        "<strong>75–85 min:</strong> Snabb delning, varje par presenterar sin produkt på 1 minut.",
        "<strong>85–90 min:</strong> Åtaganden, varje deltagare definierar ett material att testa och schemalägger en återkoppling om 30 dagar.",
      ]},
      { items: [
        "Internetåtkomst och institutionskonton i de demonstrerade verktygen.",
        "Befintliga material från varje deltagare (ett arbetsblad, ett prov eller en lektionsplan).",
        "Utskrivna Farol-profilkort för referens.",
      ]},
      { items: [
        "Varje deltagare producerar minst ett anpassat material under sessionen.",
        "Återkopplingssession efter 30 dagar med minst 60 % av deltagarna som rapporterar effektiv implementering.",
        "Minst ett material producerat under sessionen antas som en gemensam avdelningsresurs.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Skollagen (2010:800) kap. 3, alla elever har rätt till ledning och stimulans för att nå så långt som möjligt.",
        "Läroplan för grundskolan Lgr22, styr undervisningens mål och innehåll.",
        "Specialpedagogiska skolmyndigheten (SPSM), nationell myndighet med rådgivning, stöd och resursskolor.",
        "FN:s konvention om rättigheter för personer med funktionsnedsättning (2006), ratificerad av Sverige; artikel 24 om inkluderande utbildning.",
      ]},
      { items: [
        "Extra anpassningar (kap. 3 §5a): alla lärare kan göra utan utredning, anpassat material, tydligare instruktioner, alternativa verktyg, extra tid.",
        "Tillämpa principer för Universell Design för lärande: flera sätt att representera, uttrycka och engagera.",
        "Utan formell diagnos kan rimliga anpassningar göras: förlängd tid, muntliga svar, alternativa format.",
        "Dokumentera informella observationer av elever med möjliga oupptäckta behov, startpunkt för eventuell utredning.",
      ]},
      { items: [
        "Särskilt stöd (kap. 3 §7): utredning av rektor, åtgärdsprogram (ÅP), formell plan med uppföljning.",
        "Elevhälsoteam (EHT) med kurator, psykolog, specialpedagog och skolsköterska, samordnar stöd.",
        "Åtgärdsprogram utarbetas i samarbete med lärare, specialpedagog, vårdnadshavare och elev.",
        "Vid komplexa behov kan SPSM konsulteras för rådgivning och bedömning.",
      ]},
      { items: [
        "Särbegåvade elever: Skolverkets stödmaterial (2019), inga enskilda särbegåvningslagar.",
        "Flexibel studiegång, acceleration och mentorskap möjliga inom ramen för Skollagen.",
        "Dokumentera tecken på avancerad förmåga och inkludera utmaningsuppgifter i planeringen.",
      ]},
      { items: [
        "Nyanlända elever: obligatorisk kartläggning (Skolverket), förberedelseklass (max 2 år), svenska som andraspråk (SVA).",
        "Studiehandledning på modersmålet, rätt för elever som behöver det för att nå kunskapskraven.",
        "Språkbarriär ska tydligt separeras från inlärningssvårigheter, eleven ska inte utredas enbart p.g.a. språket.",
        "Skolor med många nyanlända bör ha en plan för interkulturellt lärande.",
      ]},
      { items: [
        "Snabbguide: Skollagen 2010:800 kap. 3, Lgr22, Extra anpassningar, Åtgärdsprogram, SPSM, SVA, förberedelseklass.",
        "Viktiga dokument: Åtgärdsprogram (ÅP), elevakt, skolans inkluderingspolicy.",
        "Första steget vid oro för en elev: dokumentera, diskutera med specialpedagog, kontakta vårdnadshavare, i den ordningen.",
        "Dataskydd: all elevstöddata omfattas av GDPR och Dataskyddslagen; dela inte känslig information utanför elevhälsoteamet utan samtycke.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagogisk differentiering innebär att anpassa hur man undervisar, inte att sänka förväntningarna. Lärandemålet kan vara detsamma för alla elever; det är vägen som varierar.",
        "UDL-modellen (Universal Design for Learning) föreslår tre principer: flera sätt att representera (hur innehåll presenteras), flera sätt att agera och uttrycka sig (hur eleven svarar) och flera sätt att engagera sig (vad som motiverar eleven).",
        "Att differentiera innebär inte att skapa en individuell lektionsplan för varje elev, det innebär att skapa tillräcklig flexibilitet för att samma lektion ska tjäna olika elevprofiler.",
      ]},
      { items: [
        "<strong>Det är inte</strong> att reducera läroplanen för elever med svårigheter.",
        "<strong>Det är inte</strong> att alltid ge olika uppgifter till olika elever, det isolerar och etiketterar.",
        "<strong>Det är inte</strong> bara differentierade arbetsblad, differentiering inkluderar hur läraren förklarar, frågar och bedömer.",
      ]},
      { items: [
        "Kontrollerat val: erbjuda 2–3 alternativ för svarsformat (skriftligt, muntligt, schematisk teckning), alla elever svarar på samma innehåll.",
        "Scaffolding: tillhandahålla ett strukturerat ramverk för elever med svårigheter; ta gradvis bort det när självständigheten ökar.",
        "Flexibel gruppering: grupper efter intresse, behärskningsnivå eller blandade, rotera för att undvika fasta grupper som blir identiteter.",
        "Tidsjusteringar: mer tid innebär inte mindre strikta krav. För elever med ADHD eller dyspraxi, dela upp uppgiften i segment med planerade pauser.",
        "Komplexitetsnivå: för samma ämne, skapa versioner med mer eller mindre språkligt stöd, med eller utan exempel, med eller utan visuella ledtrådar.",
      ]},
      { items: [
        "Bedöm vad eleven vet, inte hur de skriver. En elev med dyslexi kan demonstrera begreppsbehärskning muntligt eller med teknologiskt stöd.",
        "Tydliga bedömningsmatriser som delas ut innan uppgiften låter eleven veta vad som förväntas oavsett valt format.",
        "Portfolio eller evidensbaserad bedömning låter eleven visa framsteg över tid, inte bara vid ett enda testtillfälle.",
      ]},
      { items: [
        "När klassrumsdifferentiering inte längre är tillräcklig och eleven fortfarande kämpar med åtkomst till läroplanen kan detta signalera behov av specialiststöd.",
        "Differentiering ersätter inte skolans stödinsatser (elevhälsa, terapeuter, specialpedagogik), det är vad som sker kompletterande i den ordinarie klassen.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativ bedömning är varje praktik som samlar in information om lärande under processen, och använder den informationen för att anpassa undervisningen eller stödet till eleven.",
        "Till skillnad från summativ bedömning (slutbetyg) behöver formativ bedömning inte ett betyg, den behöver feedback.",
        "För neurodivergenta elever är formativ bedömning särskilt viktig eftersom prestationen på ett engångstest kanske inte speglar vad de faktiskt vet.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: i slutet av lektionen svarar eleven på en fråga på 2 minuter, läraren ser omedelbart vem som förstod och vem som inte förstod.",
        "<strong>Trafikljus</strong>: grönt (jag förstod), gult (jag har tvivel), rött (jag förstod inte), kan vara fysiska kort, post-its eller digitalt.",
        "<strong>Think-Pair-Share</strong>: eleven tänker individuellt, diskuterar med en partner, delar sedan med klassen, minskar ångesten inför direkta svar.",
        "<strong>Utgångsdörr</strong>: innan eleven lämnar berättar de för läraren en sak de lärt sig och ett tvivel de fortfarande har.",
      ]},
      { items: [
        "Effektiv feedback är specifik, genomförbar och ges i tid: \'på sidan 2 försvinner argumentet för att länken till beviset saknas\' är användbart; \'kunde vara bättre\' är det inte.",
        "För elever med ADHD: omedelbar feedback är effektivare än försenad. Vänta inte till slutet av uppgiften.",
        "För elever med dyslexi: muntlig eller ljudfeedback kan vara mer tillgänglig än omfattande skriftliga kommentarer.",
        "Undvik att jämföra elever med varandra, jämför eleven med deras eget tidigare framsteg.",
      ]},
      { items: [
        "ADHD: bedömning vid flera korta tillfällen snarare än ett enda långt prov. Minska distraherande stimuli i bedömningsmiljön.",
        "Dyslexi: tillåt muntliga svar, extra tid eller användning av text-till-tal. Bedöm innehåll, inte stavning.",
        "Autism: bedömningar med tydliga, otvetydiga skriftliga instruktioner. Varna i förväg om formatändringar.",
        "Särbegåvning: undvik bedömningar av ren innehållsreproduktuktion, inkludera frågor om analys, syntes och skapande.",
      ]},
      { items: [
        "När eleven, trots bedömningsanpassningar, inte kan visa lärande är detta ett tecken på att det kan finnas ett djupare hinder att undersöka med elevhälsan.",
        "Bestående mönster (månader, inte dagar) av specifika svårigheter inom ett område bör formellt anmälas.",
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
        "Tillad legitim bevægelse (dele materialer ud, viske tavlen, gå ærinder).",
        "Reducer konkurrerende stimuli (en plads langt fra vinduet, fra døren, fra den mest larmende gruppe).",
        "Øjeblikkelig og hyppig positiv forstærkning: ved ADHD er belønningsfølsomheden ændret (modvilje mod at vente), hvorfor øjeblikkelige belønninger virker bedre end udskudte.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Begynd med det, eleven gør godt — mødet må ikke åbne som en liste af klager, ellers lukker forælderen eller værgen sig defensivt.",
        "Beskriv observeret adfærd, ikke diagnoser: „når der er mere end to trin i træk, mister han eller hun tråden“ i stedet for „har ADHD“.",
        "Foregrib reaktionen „derhjemme er det ikke sådan“ — forklar, at gruppesammenhængen og kravet om vedvarende opmærksomhed i klassen gør symptomerne mere synlige.",
        "Hvis du foreslår en udredning, så fremlæg den som en ressource, ikke som en straf: „der findes støtte, som kan hjælpe ham eller hende meget“ i stedet for „skal udredes“.",
      ]},
      { items: [
        "Vedvarende regelbrud trods tilpasninger i klassen.",
        "Tegn på social udelukkelse fra jævnaldrende.",
        "Tegn på komorbiditet (angst, depression, oppositionel adfærdsforstyrrelse) — hyppige ved ADHD og som begrunder henvisning.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
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
        "Når formålet ikke er at vurdere skrivningen, så vurder indholdet adskilt fra stavningen.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Tilbyd den samme information i flere formater (lyd, video, skemaer).",
      ]},
      { items: [
        "Skel udtrykkeligt mellem læsning og intelligens helt fra begyndelsen: »han forstår det rigtig godt, når han lytter — vanskeligheden er specifik for læsningen«.",
        "Vær opmærksom på, at ordblindhed har en stærk arvelig komponent: en af forældrene kan have en udiagnosticeret ordblindhed, og samtalen kan vække vanskelige minder fra deres egen skoletid.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Undgå at vise arbejdsark fulde af røde rettelser uden kontekst — vis først, hvad eleven allerede kan.",
        "Vær konkret om de tilpasninger, der allerede er i gang, og dem, som forælderen/værgen kan gentage derhjemme: tekster som lyd, højtlæsning uden tidspres.",
      ]},
      { items: [
        "Forringet akademisk selvopfattelse (»jeg er dum«, »jeg kan ikke«).",
        "Systematisk undgåelse af læse-/skriveopgaver i en sådan grad, at andre fag påvirkes.",
        "Markant uoverensstemmelse mellem mundtlig og skriftlig præstation uden formel diagnose — henvis til psykopædagogisk udredning.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Vanskeligheder med ikke-varslede ændringer, skema, lokale, vikar.",
        "Bogstavelig kommunikation, opfanger ikke nuancer, ironi, idiomatiske udtryk.",
        "Sensorisk følsomhed, lysstofrør, baggrundsstøj, tøjetiketter kan være uudholdelige.",
        "Fokuserede og dybe interesser inden for specifikke emner.",
        "Kan virke uinteresseret eller distanceret ved overbelastning, ikke ligegyldig.",
      ]},
      { items: [
        "<strong>Det er ikke</strong> en lineær skala («mere» eller «mindre» autistisk), det er en flerdimensionel profil.",
        "<strong>Det er ikke</strong> mangel på empati, det er ofte det modsatte, vanskelighed med at filtrere.",
        "<strong>Det er ikke</strong> dårlig adfærd, når en rutine brydes, det er en reel neurologisk reaktion.",
      ]},
      { items: [
        "Giv forhåndsvarsel om enhver rutinemæssig ændring, selv tilsyneladende trivielle.",
        "Gør implicitte sociale regler eksplicitte (hvad man skal gøre, hvad man ikke skal gøre, hvornår).",
        "Tillad sensoriske pauser i et roligt rum efter behov.",
        "Brug fokuserede interesser som indgang til fagligt indhold.",
      ]},
      { items: [
        "Hvis der er en diagnose, spørg først forældrene hvad der fungerer, forældre til autistiske børn ved ofte mere end nogen rapport.",
        "Hvis der ikke er en diagnose, beskriv konkrete situationer uden at bruge ordet «autisme» ved et første møde.",
        "Anerkend familiens indsats, at skabe struktur og forudsigelighed hjemme er krævende.",
        "Sammenlign aldrig med «andre elever», hver spektrumprofil er forskellig.",
      ]},
      { items: [
        "Hyppige sammenbrud efter skoledagen.",
        "Vedvarende skolevægrende adfærd forbundet med sensorisk overbelastning.",
        "Progressiv social isolation på trods af mæglingsbestræbelser.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Håndskrift er vanskelig, langsom og ofte ulæselig, ikke af uagtsomhed, men på grund af reelle motoriske vanskeligheder.",
        "Vanskeligheder med rumlig organisering i notesbogen, håndtering af materialer og rækkefølge af trin.",
        "Kan virke «klodet», vælter kopper, støder ind i møbler, vanskeligheder i idræt.",
        "Uforholdsmæssig træthed efter opgaver, der kræver vedvarende finmotorisk koordination.",
        "Den kognitive komponent er generelt bevaret, hyppig frustration mellem viden og udførelse.",
      ]},
      { items: [
        "<strong>Det er ikke</strong> dovenskab eller mangel på indsats.",
        "<strong>Det er ikke</strong> bare dårlig håndskrift, det påvirker planlægning og rækkefølge af opgaver.",
        "<strong>Det løses ikke</strong> ved at «øve håndskrift mere».",
      ]},
      { items: [
        "Tillad brug af tastatur/tablet til længere skriftlige arbejder.",
        "Reducer mekanisk afskrivning fra tavlen, giv noter, hvor det er relevant.",
        "Giv eksplicitte tjeklister til opgaver med flere trin.",
        "Vurder produktet efter indhold, ikke fysisk præsentation.",
      ]},
      { items: [
        "Forklar dyspraksi i enkle vendinger, de fleste forældre har aldrig hørt ordet.",
        "Ulæselig håndskrift er det største friktionspunkt med forældrene, vis at vurdering nu værdsætter indhold.",
        "Foreslå praktiske redskaber hjemme: stemmediktion til noter, tastatur til længere skrivning.",
        "Hvis der er en historie med «doven»-etiketter fra tidligere år, navngiv det direkte.",
      ]},
      { items: [
        "Fuldstændig afvisning af skriftlig produktion.",
        "Social isolation i forbindelse med fysiske aktiviteter.",
        "Tegn på somatiseret angst inden skriftlige prøver.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Afslutter opgaver på minutter, mens klassen bruger hele lektionen.",
        "Stiller spørgsmål ud over emnets rammer, eller udfordrer aktivt det, der undervises i.",
        "Kan virke uinteresseret, udisciplineret eller apatisk, ofte tegn på kronisk kedsomhed.",
        "Forhøjet følelsesmæssig sensitivitet; kan være angstpræget, perfektionistisk eller urimeligt selvkrævende.",
        "Reel risiko for underpræstation, lærer at skjule evner for ikke at skille sig ud socialt.",
      ]},
      { items: [
        "<strong>Det er ikke</strong> synonymt med god opførsel eller gode resultater, mange begavede elever har gennemsnitlige karakterer grundet engagement.",
        "<strong>Det betyder ikke</strong> «har ikke brug for hjælp», de har brug for andre udfordringer, ikke mindre opmærksomhed.",
        "<strong>Det er ikke</strong> uforeneligt med neurodivergens, dobbelt exceptionel (2e) eksisterer og er hyppig.",
      ]},
      { items: [
        "Hav altid udvidelsesopgaver klar, ikke mere af det samme, men dybere eller anvendt indhold.",
        "Tillad selvstændig forskning i interesseemner inden for læreplanen.",
        "Vurder efter udfordring, ikke lethed, bed om mere krævende arbejde mod lavere volumen.",
        "Anerkend og bekræft følelsesmæssig sensitivitet uden at patologisere.",
      ]},
      { items: [
        "Forudse forældrenes stolthed og omlede den: det er netop evnen, der gør kedsomhed til et problem.",
        "Forklar paradokset: gode resultater betyder ikke, at alt er fint.",
        "Hvis eleven skjuler evner for at passe ind socialt, navngiv det forsigtigt, det er et tegn på nød.",
        "Opfordr forældrene til at værdsætte proces over resultater: nysgerrighed og dybde er vigtigere end høje karakterer for lette opgaver.",
      ]},
      { items: [
        "Tegn på angst eller depression forbundet med ekstrem perfektionisme.",
        "Social isolation af en følelse af at være «anderledes» end kammeraterne.",
        "Pludselig underpræstation hos en elev, der tidligere er identificeret som kapabel.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Forstår langt mindre end det ser ud til, kan nikke uden at have forstået.",
        "Tilsyneladende lav faglig præstation, ofte uforholdsmæssig i forhold til faktisk evne.",
        "Stilhed i klassen, kan være en adaptiv strategi, ikke uinteresse.",
        "Kan være udmattet ved dagens slutning af mental oversættelse i realtid.",
        "Risiko for underdiagnosticering af reelle uddannelsesbehov ved at tilskrive alt sprogbarrieren.",
      ]},
      { items: [
        "<strong>Det er ikke</strong> mangel på intelligens eller evne.",
        "<strong>Det er ikke</strong> bare et spørgsmål om tid, uden eksplicit støtte når mange elever et plateau på et lavt funktionsniveau.",
        "<strong>Det løses ikke</strong> med automatisk oversættelse i timen, det er en proces over mange år.",
      ]},
      { items: [
        "Giv materialer med nøgleordforråd oversat til modersmålet.",
        "Vurder viden ved visuel eller praktisk demonstration, hvor det er muligt.",
        "Par med en tosproglig klassekammerat til uformel mægling i kritiske øjeblikke.",
        "Accepter indledende arbejder med grammatiske fejl, ret indhold, ikke form, i første fase.",
      ]},
      { items: [
        "Selve mødet er en barriere, forældrene taler måske ikke dansk godt nok.",
        "Antag ikke at forældrene kender det danske uddannelsessystem, forklar hver proces fra grunden.",
        "Adskil tydeligt sprogbarriere fra faglig evne.",
        "Vær sensitiv over for migrationskonteksten, flygtningefamilier kan have mistillid til myndigheder.",
      ]},
      { items: [
        "Tegn på social isolation eller mobning forbundet med at være fremmedsprogselev.",
        "Stagnation i sproglig tilegnelse efter det første år.",
        "Tegn på traume forbundet med migrationskontekst.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Data om mindreårige er underlagt forstærket beskyttelse (Art. 8 GDPR). Samtykke fra forældre er obligatorisk.",
        "Tjek, hvor værktøjet lagrer data, europæiske eller ikke-europæiske servere, anonymiserede eller ej.",
        "Angiv aldrig fulde navne, adresser, CPR-numre eller kliniske diagnoser i generative AI-værktøjer.",
        "Sondre mellem institutionel brug (skolen underskriver kontrakt) og lærerens personlige brug (individuelt ansvar).",
      ]},
      { items: [
        "Systemer trænet overvejende på engelsksprogede data kan præstere dårligere i dansk og andre sproglige sammenhænge.",
        "Automatiserede anbefalinger kan forstærke køns-, etnicitets- eller klassestereotyper, vurder kritisk.",
        "Modeller til «akademisk risikoforudsigelse» reproducerer ofte eksisterende uligheder.",
      ]},
      { items: [
        "Målet er at øge elevens autonomi, ikke at erstatte det kognitive arbejde, der udvikler den.",
        "Sondre mellem et <strong>adgangsværktøj</strong> (tekst-til-tale for ordblinde) og et <strong>substitutionsværktøj</strong> (AI skriver opgaven).",
        "Evaluer regelmæssigt: udvikler eleven kompetence eller afhængighed af værktøjet?",
      ]},
      { items: [
        "<strong>1.</strong> Løser værktøjet en reel barriere eller skaber det en genvej, der omgår læring?",
        "<strong>2.</strong> Er de indtastede data beskyttede, og foreligger der samtykke?",
        "<strong>3.</strong> Vil værktøjets output blive verificeret af et menneske, inden det når eleven?",
        "<strong>4.</strong> Findes der et ikke-AI-alternativ, der fungerer lige så godt?",
        "<strong>5.</strong> Hvis værktøjet forsvinder i morgen, vil eleven da stå hjælpeløs?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Ruste kolleger til ansvarlig AI-integration i sprogundervisningen og producere materialer tilpasselige til multiple lærlingsprofiler.",
        "Det er ikke en præsentation, det er en samkonstruktion. Hver deltager forlader med mindst én ressource klar til afprøvning.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Ramme, problemet med den heterogene klasse og hvorfor mere af det samme ikke virker.",
        "<strong>10–25 min:</strong> Profilkort, præsentation af de seks Farol-kort med virkelige (anonymiserede) cases.",
        "<strong>25–45 min:</strong> Praktisk demonstration, tre værktøjer, tre use cases, tre adskilte profiler.",
        "<strong>45–75 min:</strong> Pararbejde, hvert par tilpasser et eksisterende materiale til en specifik profil.",
        "<strong>75–85 min:</strong> Hurtig deling, hvert par præsenterer sit produkt på 1 minut.",
        "<strong>85–90 min:</strong> Forpligtelser, hver deltager definerer et materiale at afprøve og planlægger en feedbacksession om 30 dage.",
      ]},
      { items: [
        "Internetadgang og institutionelle konti i de demonstrerede værktøjer.",
        "Eksisterende materialer fra hver deltager (et arbejdsark, en prøve eller en lektionsplan).",
        "Udprintede Farol-profilkort til reference.",
      ]},
      { items: [
        "Hver deltager producerer mindst ét tilpasset materiale under sessionen.",
        "Feedbacksession efter 30 dage med mindst 60 % af deltagerne, der rapporterer effektiv implementering.",
        "Mindst ét materiale produceret i sessionen adopteres som en fælles afdelingsressource.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Folkeskoleloven (LBK nr. 1510 af 14/12/2017), grundloven for dansk folkeskole med ret til undervisningsdifferentiering.",
        "Bekendtgørelse om folkeskolens specialpædagogiske bistand, rammen for specialpædagogisk støtte.",
        "FN's konvention om rettigheder for personer med handicap (2006), ratificeret af Danmark; artikel 24 om inkluderende uddannelse.",
        "Kommunernes PPR (Pædagogisk Psykologisk Rådgivning), central rådgivende instans for elever med særlige behov.",
      ]},
      { items: [
        "Støtte i almenundervisningen: undervisningsdifferentiering, to-lærerordning, it-hjælpemidler, ingen formel vedtagelse nødvendig; alle læreres ansvar.",
        "Anvend principperne for Universelt Design for Læring: multiple repræsentationsmåder, udtryksformer og engagementsformer.",
        "Uden formel diagnose kan rimelige tilpasninger anvendes: forlænget tid, mundtlige svar, alternative formater.",
        "Dokumenter uformelle observationer af elever med mulige uopfyldte behov, udgangspunkt for eventuel henvisning.",
      ]},
      { items: [
        "Specialpædagogisk bistand (SPB) via PPR, formel støtte efter visitation.",
        "Individuel plan, udarbejdes i samarbejde med lærer, PPR, forældre og elev.",
        "Ressourcecenter på skolen, koordinerer støttetilbud og rådgiver lærere.",
        "Specialklasse eller specialskole ved behov, efter grundig udredning og samtykke fra forældre.",
      ]},
      { items: [
        "Elever med særlige evner: ingen særlig lovgivning; Danish Center for Gifted Education, talentklasser, acceleration.",
        "Kommunale tilbud varierer, undersøg hvad der er tilgængeligt lokalt.",
        "Dokumentér tegn på fremragende evner og integrér udfordringer i undervisningsplanlægningen.",
      ]},
      { items: [
        "Tosprogede elever / dansk som andetsprog (DSA): modtagelsesklasse, basisundervisning i DSA.",
        "Undervisningsministeriets vejledning om tosprogede elever, ramme for sproglig og interkulturel støtte.",
        "Sprogbarrieren skal tydeligt adskilles fra faglige vanskeligheder, eleven må ikke udredes alene pga. manglende danskkundskaber.",
        "Skoler med mange tosprogede elever bør have en plan for interkulturel undervisning.",
      ]},
      { items: [
        "Hurtigguide: Folkeskoleloven LBK 1510/2017, PPR, SPB, individuel plan, DSA, modtagelsesklasse.",
        "Vigtige dokumenter: individuel plan, elevdokumentation, skolens inklusionspolitik.",
        "Første skridt ved bekymring for en elev: dokumentér, drøft med PPR-vejleder, kontakt forældre, i den rækkefølge.",
        "Databeskyttelse: alle elevsupportdata er underlagt GDPR og databeskyttelsesloven; del ikke følsomme oplysninger uden for supportteamet uden samtykke.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pædagogisk differentiering betyder at tilpasse, hvordan man underviser, ikke at sænke forventningerne. Læringsmålet kan være det samme for alle elever; det er vejen, der varierer.",
        "UDL-modellen (Universal Design for Learning) foreslår tre principper: flere midler til repræsentation (hvordan indhold præsenteres), flere midler til handling og udtryk (hvordan eleven reagerer) og flere midler til engagement (hvad der motiverer eleven).",
        "At differentiere betyder ikke at lave en individuel undervisningsplan for hver elev, det betyder at skabe nok fleksibilitet til, at den samme lektion kan tjene forskellige elevprofiler.",
      ]},
      { items: [
        "<strong>Det er ikke</strong> at reducere læseplanen for elever med vanskeligheder.",
        "<strong>Det er ikke</strong> altid at give forskellige opgaver til forskellige elever, det isolerer og stempler.",
        "<strong>Det er ikke</strong> kun differentierede arbejdsark, differentiering inkluderer, hvordan læreren forklarer, spørger og evaluerer.",
      ]},
      { items: [
        "Kontrolleret valg: tilbyde 2–3 muligheder for svarformat (skriftligt, mundtligt, skematisk tegning), alle elever svarer på det samme indhold.",
        "Scaffolding: tilbyde en struktureret ramme til elever med vanskeligheder; fjerne den gradvist, efterhånden som selvstændigheden vokser.",
        "Fleksibel gruppering: grupper efter interesse, mestringsniveau eller blandede, roter for at undgå faste grupper, der bliver identiteter.",
        "Tidsreguleringer: mere tid betyder ikke mindre strenghed. For elever med ADHD eller dyspraksi, opdel opgaven i segmenter med planlagte pauser.",
        "Kompleksitetsniveau: for det samme emne, skab versioner med mere eller mindre sproglig støtte, med eller uden eksempler, med eller uden visuelle hints.",
      ]},
      { items: [
        "Vurder, hvad eleven ved, ikke hvordan de skriver. En elev med ordblindhed/dysleksi kan demonstrere begrebsmæssig beherskelse mundtligt eller med teknologisk støtte.",
        "Klare vurderingskriterier delt inden opgaven giver eleven mulighed for at vide, hvad der forventes, uanset det valgte format.",
        "Portfolio eller evidensbaseret vurdering giver eleven mulighed for at vise fremskridt over tid, ikke kun ved ét testøjeblik.",
      ]},
      { items: [
        "Når klassedifferentiering ikke længere er tilstrækkelig, og eleven fortsat kæmper med adgang til læseplanen, kan dette signalere behov for specialiststøtte.",
        "Differentiering erstatter ikke skolens støtteforanstaltninger (PPR, terapeuter, specialundervisning), det er det, der komplementært sker i den almindelige klasse.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativ evaluering er enhver praksis, der indsamler information om læring under processen, og bruger den information til at tilpasse undervisningen eller støtten til eleven.",
        "I modsætning til summativ evaluering (afsluttende karakterer) behøver formativ evaluering ikke en karakter, den behøver feedback.",
        "For neurodivergente elever er formativ evaluering særligt vigtig, fordi præstationen ved en engangstest måske ikke afspejler, hvad de faktisk ved.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: ved slutningen af timen besvarer eleven et spørgsmål på 2 minutter, læreren ser straks, hvem der forstod, og hvem der ikke gjorde.",
        "<strong>Trafiklys</strong>: grønt (jeg forstod det), gult (jeg har tvivl), rødt (jeg forstod det ikke), kan være fysiske kort, post-its eller digitalt.",
        "<strong>Think-Pair-Share</strong>: eleven tænker individuelt, diskuterer med en partner, deler derefter med klassen, reducerer angst for direkte svar.",
        "<strong>Udgangsdør</strong>: inden eleven forlader, fortæller de læreren én ting, de lærte, og ét spørgsmål, de stadig har.",
      ]},
      { items: [
        "Effektiv feedback er specifik, handlingsorienteret og rettidig: \'på side 2 mistes argumentet, fordi forbindelsen til beviset mangler\' er nyttigt; \'kunne være bedre\' er det ikke.",
        "For elever med ADHD: øjeblikkelig feedback er mere effektiv end forsinket. Vent ikke til slutningen af opgaven.",
        "For elever med ordblindhed/dysleksi: mundtlig eller lydfeedback kan være mere tilgængelig end omfattende skriftlige kommentarer.",
        "Undgå at sammenligne elever med hinanden, sammenlign eleven med deres eget tidligere fremskridt.",
      ]},
      { items: [
        "ADHD: vurdering ved flere korte øjeblikke frem for én lang prøve. Reducer forstyrrende stimuli i vurderingsmiljøet.",
        "Ordblindhed/Dysleksi: tillad mundtlige svar, ekstra tid eller brug af tekst-til-tale. Vurder indhold, ikke stavning.",
        "Autisme: vurderinger med klare, utvetydige skriftlige instruktioner. Advar om formatændringer på forhånd.",
        "Høj begavelse: undgå vurderinger af ren indholdsreproduktion, inkluder spørgsmål om analyse, syntese og kreation.",
      ]},
      { items: [
        "Når eleven, selv med vurderingstilpasninger, ikke kan demonstrere læring, er det et tegn på, at der muligvis er en dybere barriere, der skal undersøges med PPR.",
        "Vedvarende mønstre (måneder, ikke dage) af specifik vanskelighed inden for et område bør anmeldes formelt.",
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
        "Aloita siitä, mitä oppilas tekee hyvin — tapaaminen ei voi avautua valitusten luettelona, tai huoltaja sulkeutuu puolustautuen.",
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
        "Kun tavoitteena ei ole arvioida kirjoittamista, arvioi sisältö erillään oikeinkirjoituksesta.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Vaikeudet ilmoittamattomien muutosten kanssa, lukujärjestys, luokkahuone, sijaisopettaja.",
        "Kirjaimellinen kommunikaatio, ei tavoita vivahteita, ironiaa, idiomeja.",
        "Sensorinen herkkyys, loistelamput, taustaäänet, vaatelappuset voivat olla sietämättömiä.",
        "Kohdistuneet ja syvät kiinnostuksen kohteet tietyillä alueilla.",
        "Voi vaikuttaa välinpitämättömältä tai etäiseltä ylikuormittuneena, ei poissaolevana.",
      ]},
      { items: [
        "<strong>Ei ole</strong> lineaarinen asteikko («enemmän» tai «vähemmän» autistinen), kyseessä on moniulotteinen profiili.",
        "<strong>Ei ole</strong> empatian puute, usein päinvastoin, vaikeus suodattaa.",
        "<strong>Ei ole</strong> huonoa käyttäytymistä, kun rutiini rikkoutuu, se on todellinen neurologinen reaktio.",
      ]},
      { items: [
        "Anna ennakkovaroitus kaikista rutiimimuutoksista, jopa näennäisen vähäisistä.",
        "Tee implisiittiset sosiaaliset säännöt eksplisiittisiksi (mitä tehdä, mitä ei tehdä, milloin).",
        "Salli sensorisia taukoja hiljaisessa tilassa tarvittaessa.",
        "Käytä kohdistuneita kiinnostuksen kohteita sisäänkäyntinä opetussisältöön.",
      ]},
      { items: [
        "Jos diagnoosi on olemassa, kysy ensin mitä huoltajat tietävät toimivan, autististen lasten vanhemmat tietävät usein enemmän kuin mikään raportti.",
        "Jos diagnoosia ei ole, kuvaile konkreettisia tilanteita käyttämättä sanaa «autismi» ensimmäisessä tapaamisessa.",
        "Vahvista perheen ponnistelut, rakenteen ja ennakoitavuuden luominen kotona on vaativaa.",
        "Älä koskaan vertaa «muihin oppilaisiin», jokainen spektriprofiili on erilainen.",
      ]},
      { items: [
        "Toistuvat sulautumiskohtaukset koulupäivän jälkeen.",
        "Jatkuva koulunkieltäytyminen sensoriseen ylikuormitukseen liittyen.",
        "Asteittainen sosiaalinen eristäytyminen sovitteluyrityksistä huolimatta.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Käsiala on vaikeaa, hidasta ja usein lukukelvotonta, ei huolimattomuudesta vaan todellisista motorisista vaikeuksista.",
        "Vaikeudet vihkon tilallisessa organisoinnissa, tarvikkeiden hallinnassa ja vaiheiden sekvensoimisessa.",
        "Voi vaikuttaa «kömpelöltä», kaataa mukeja, törmäilee huonekaluihin, vaikeuksia liikunnassa.",
        "Suhteettoman suuri väsymys tehtävistä, jotka vaativat jatkuvaa hienomotorista koordinaatiota.",
        "Kognitiivinen komponentti on yleensä säilynyt, toistuva turhautuminen tietämisen ja esittämisen välillä.",
      ]},
      { items: [
        "<strong>Ei ole</strong> laiskuutta tai yrityksen puutetta.",
        "<strong>Ei ole</strong> pelkästään huono käsiala, vaikuttaa tehtävien suunnitteluun ja sekvensoimiseen.",
        "<strong>Ei ratkea</strong> «harjoittelemalla kirjoittamista enemmän».",
      ]},
      { items: [
        "Salli näppäimistön/tabletin käyttö pitkiin kirjallisiin töihin.",
        "Vähennä mekaanista taululta kopiointia, tarjoa muistiinpanoja tarvittaessa.",
        "Tarjoa eksplisiittisiä tarkistuslistoja monivaiheisiin tehtäviin.",
        "Arvioi työ sisällön, ei fyysisen esityksen perusteella.",
      ]},
      { items: [
        "Selitä dyspraksia yksinkertaisesti, useimmat huoltajat eivät ole koskaan kuulleet sanaa.",
        "Lukukelvoton käsiala on suurin kitkakohta huoltajien kanssa, näytä, että arviointi arvostaa nyt sisältöä.",
        "Ehdota käytännön työkaluja kotiin: äänikirjoitus muistiinpanoihin, näppäimistö pidempään kirjoittamiseen.",
        "Jos on historia «laiska»-leimoista aiemmilta vuosilta, nimeä se suoraan.",
      ]},
      { items: [
        "Täydellinen kirjallisen tuotoksen kieltäytyminen.",
        "Sosiaalinen eristäytyminen fyysisen aktiivisuuden yhteyksissä.",
        "Merkkejä somatisoidusta ahdistuksesta ennen kirjallisia kokeita.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Viimeistelee tehtävät minuuteissa kun luokka vie koko oppitunnin.",
        "Esittää kysymyksiä aiheen rajojen ulkopuolelta, tai haastaa aktiivisesti opetettavaa sisältöä.",
        "Voi vaikuttaa kiinnostumattomalta, kurittomalta tai apaattiselta, usein merkkejä kroonisesta pitkästymisestä.",
        "Kohonnut emotionaalinen herkkyys; voi olla ahdistunut, perfektionistinen tai kohtuuttoman vaativa itseään kohtaan.",
        "Todellinen alisuoriutumisen riski, oppii piilottamaan kyvyt, jotta ei erottu sosiaalisesti.",
      ]},
      { items: [
        "<strong>Ei ole</strong> synonyymi hyvälle käyttäytymiselle tai hyville tuloksille, monilla lahjakkailla oppilailla on keskinkertaiset arvosanat sitoutumattomuuden vuoksi.",
        "<strong>Ei tarkoita</strong> «ei tarvitse apua», tarvitsee erilaisia haasteita, ei vähempää huomiota.",
        "<strong>Ei ole</strong> yhteensopimaton neurodivergenssiin, kaksoispoikkeavuus (2e) on olemassa ja yleistä.",
      ]},
      { items: [
        "Pidä aina laajennustehtäviä valmiina, ei lisää samaa, vaan syvempää tai soveltavaa sisältöä.",
        "Salli itsenäinen tutkimustyö kiinnostavista aiheista opetussuunnitelman puitteissa.",
        "Arvioi haasteen, ei helppouden perusteella, pyydä vaativampaa työtä vähemmän volyymin vastineeksi.",
        "Tunnusta ja vahvista emotionaalinen herkkyys patologisoimatta.",
      ]},
      { items: [
        "Varaudu vanhempien ylpeyteen ja ohjaa se: juuri kyky tekee pitkästymisestä ongelman.",
        "Selitä paradoksi: hyvät tulokset eivät tarkoita, että kaikki on hyvin.",
        "Jos oppilas piilottaa kykyjään sopeutuakseen sosiaalisesti, nimeä se varovaisesti, se on merkki ahdistuksesta.",
        "Kannusta huoltajia arvostamaan prosessia tulosten edelle: uteliaisuus ja syvyys ovat tärkeämpiä kuin korkeat arvosanat helpoissa tehtävissä.",
      ]},
      { items: [
        "Merkkejä ahdistuksesta tai masennuksesta, jotka liittyvät äärimmäiseen perfektionismiin.",
        "Sosiaalinen eristäytyminen tuntemisesta «erilaiseksi» kuin vertaiset.",
        "Äkillinen suoritustason lasku oppilaalla, joka on aiemmin tunnistettu kyvykkääksi.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Ymmärtää paljon vähemmän kuin näyttää, voi nyökätä ymmärtämättä.",
        "Näennäisesti heikko akateeminen suoriutuminen, usein suhteettoman alhainen todellisiin kykyihin nähden.",
        "Hiljaisuus luokassa, voi olla mukautumisstrategia, ei kiinnostumattomuus.",
        "Voi olla uupunut päivän lopussa reaaliaikaisesta mentaalisesta kääntämisestä.",
        "Riski todellisten oppimisvaikeuksien alidiagnosoinnista, kun kaikki liitetään kielimuurroon.",
      ]},
      { items: [
        "<strong>Ei ole</strong> älykkyyden tai kyvyn puute.",
        "<strong>Ei ole</strong> pelkästään aikakysymys, ilman eksplisiittistä tukea monet oppilaat tasaantuvat matalalle toimintatasolle.",
        "<strong>Ei ratkea</strong> automaattisella kääntämisellä tunnin aikana, se on vuosien prosessi.",
      ]},
      { items: [
        "Tarjoa materiaaleja, joissa ydinsanasto on käännetty äidinkielelle.",
        "Arvioi tietoa visuaalisen tai käytännöllisen demonstraation avulla aina kun mahdollista.",
        "Parittele kaksikielisen luokkatoverin kanssa epäviralliseen välitykseen kriittisinä hetkinä.",
        "Hyväksy alkuvaiheessa kielioppivirheellisiä töitä, korjaa sisältö, ei muoto, ensimmäisessä vaiheessa.",
      ]},
      { items: [
        "Kokous itsessään on este, huoltajat eivät ehkä puhu suomea riittävän hyvin.",
        "Älä oleta, että huoltajat tuntevat suomalaisen koulutusjärjestelmän, selitä jokainen prosessi alusta.",
        "Erota selkeästi kielimuuri akateemisesta kyvystä.",
        "Ole herkkä maahanmuuttokontekstin suhteen, pakolaisperheillä voi olla epäluottamusta viranomaisiin.",
      ]},
      { items: [
        "Merkkejä sosiaalisesta eristäytymisestä tai kiusaamisesta, joka liittyy vieraskielisyyteen.",
        "Kielen omaksumisen pysähtyminen ensimmäisen vuoden jälkeen.",
        "Merkkejä traumasta, joka liittyy maahanmuuttokontekstiin.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Alaikäisten tiedot ovat tehostetun suojan alaisia (GDPR art. 8). Huoltajien suostumus on pakollinen.",
        "Tarkista, mihin työkalu tallentaa tietoja, eurooppalaiset tai ei-eurooppalaiset palvelimet, anonymisoitu vai ei.",
        "Älä koskaan syötä kokonaisia nimiä, osoitteita, henkilötunnuksia tai klinisiä diagnooseja generatiivisiin AI-työkaluihin.",
        "Erottele institutionaalinen käyttö (koulu allekirjoittaa sopimuksen) opettajan henkilökohtaisesta käytöstä (yksilöllinen vastuu).",
      ]},
      { items: [
        "Pääasiassa englanninkielisillä aineistoilla koulutetut järjestelmät voivat toimia heikommin suomalaisessa kielikontekstissa.",
        "Automaattiset suositukset voivat vahvistaa sukupuoli-, etnisyys- tai luokkastereotypioita, arvioi kriittisesti.",
        "«Akateemisen riskin ennustamisen» mallit toistavat usein olemassa olevia epätasa-arvoja.",
      ]},
      { items: [
        "Tavoitteena on lisätä oppilaan autonomiaa, ei korvata sitä kehittävää kognitiivista työtä.",
        "Erottele <strong>saavutettavuustyökalu</strong> (teksti puheeksi dysleksialle) <strong>substituutiotyökalusta</strong> (AI kirjoittaa esseen).",
        "Arvioi säännöllisesti: kehittääkö oppilas osaamista vai riippuvuutta työkalusta?",
      ]},
      { items: [
        "<strong>1.</strong> Ratkaiseeko työkalu todellisen esteen vai luoko se oppimisen ohittavan oikotien?",
        "<strong>2.</strong> Ovatko syötetyt tiedot suojattuja ja onko suostumus olemassa?",
        "<strong>3.</strong> Tarkistaako ihminen työkalun tulosteen ennen kuin se saavuttaa oppilaan?",
        "<strong>4.</strong> Onko olemassa AI-vaihtoehto, joka toimii yhtä hyvin?",
        "<strong>5.</strong> Jos työkalu lakkaa olemasta huomenna, jääkö oppilas avuttomaksi?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Varustaa kollegat vastuulliseen tekoälyn integrointiin kieltenopetuksessa tuottamalla materiaaleja, jotka soveltuvat useille oppimisprofiileille.",
        "Ei ole esitys, se on yhteisrakentamista. Jokainen osallistuja lähtee vähintään yhden testausvalmiuden resurssin kanssa.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Kehys, heterogeenisen luokan ongelma ja miksi lisää samaa ei toimi.",
        "<strong>10–25 min:</strong> Profiilikartta, kuuden Farol-kortin esittely todellisilla (anonymisoiduilla) tapauksilla.",
        "<strong>25–45 min:</strong> Käytännön demonstraatio, kolme työkalua, kolme käyttötapausta, kolme erillistä profiilia.",
        "<strong>45–75 min:</strong> Parityöskentely, jokainen pari mukauttaa olemassa olevaa materiaalia tietylle profiilille.",
        "<strong>75–85 min:</strong> Pikajako, jokainen pari esittää tuotoksensa 1 minuutissa.",
        "<strong>85–90 min:</strong> Sitoumukset, jokainen osallistuja määrittelee yhden testattavan materiaalin ja aikatauluttaa palauteistunnon 30 päivän päähän.",
      ]},
      { items: [
        "Internetyhteys ja institutionaaliset tilit demonstroitavissa työkaluissa.",
        "Kunkin osallistujan olemassa olevat materiaalit (tehtävämoniste, koe tai oppituntisuunnitelma).",
        "Tulostetut Farol-profiilkortit referenssiksi.",
      ]},
      { items: [
        "Jokainen osallistuja tuottaa vähintään yhden mukautetun materiaalin istunnon aikana.",
        "Palauteistunto 30 päivän kuluttua, vähintään 60 % osallistujista raportoiden tehokkaan toteutuksen.",
        "Vähintään yksi istunnossa tuotettu materiaali otetaan käyttöön yhteisenä osaston resurssina.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Perusopetuslaki 628/1998, velvoittaa antamaan jokaiselle oppilaalle riittävän tuen.",
        "Oppilas- ja opiskelijahuoltolaki 1287/2013, monialainen oppilashuolto koulussa.",
        "Opetushallituksen kolmiportainen tukimalli: yleinen tuki, tehostettu tuki, erityinen tuki.",
        "YK:n vammaisten henkilöiden oikeuksia koskeva yleissopimus (2006), Suomi ratifioinut; artikla 24 inklusiivisesta koulutuksesta.",
      ]},
      { items: [
        "Yleinen tuki: jokaisen opettajan velvollisuus ilman päätöstä, tukiopetus, eriyttäminen ylös- ja alaspäin, joustavat ryhmittelyt, oppimisympäristön muokkaaminen.",
        "Sovella Universaalin oppimisen suunnittelun periaatteita: useita esittämisen, ilmaisemisen ja sitoutumisen tapoja.",
        "Ilman virallista diagnoosia voidaan tehdä kohtuulliset mukautukset: lisäaika, suulliset vastaukset, vaihtoehtoiset formaatit.",
        "Dokumentoi epäviralliset havainnot oppilaista, joilla voi olla täyttämättömiä tarpeita, lähtökohta mahdollisille jatkotoimille.",
      ]},
      { items: [
        "Tehostettu tuki: oppimissuunnitelma, moniammatillinen tiimi, oppilashuolto.",
        "Erityinen tuki: HOJKS (Henkilökohtainen opetuksen järjestämistä koskeva suunnitelma), hallintopäätös, erityisluokka tai -koulu.",
        "Oppilashuoltoryhmä koordinoi tukitoimia ja neuvoo opettajia.",
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
        "Pikaohjeet: Perusopetuslaki 628/1998, kolmiportainen tuki, HOJKS, oppilashuolto, S2-opetus, valmistava opetus.",
        "Tärkeät asiakirjat: HOJKS, oppilashuollon kirjaukset, koulun inklusiivinen oppimissuunnitelma.",
        "Ensimmäinen askel huolen herätessä: dokumentoi, keskustele erityisopettajan kanssa, ota yhteyttä huoltajiin, tässä järjestyksessä.",
        "Tietosuoja: kaikki oppilastukitiedot ovat GDPR:n ja tietosuojalain alaisia; älä jaa arkaluonteisia tietoja oppilashuoltoryhmän ulkopuolelle ilman suostumusta.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagoginen eriyttäminen tarkoittaa opetustavan mukauttamista, ei odotusten laskemista. Oppimistavoite voi olla sama kaikille oppilaille; se, mikä vaihtelee, on polku.",
        "UDL-malli (Universal Design for Learning) ehdottaa kolmea periaatetta: useita esittämistapoja (miten sisältö esitetään), useita toiminta- ja ilmaisutapoja (miten oppilas vastaa) ja useita sitouttamistapoja (mikä motivoi oppilasta).",
        "Eriyttäminen ei tarkoita yksilöllisen tuntisuunnitelman tekemistä jokaiselle oppilaalle, se tarkoittaa riittävän joustavuuden luomista, jotta sama tunti palvelee erilaisia oppilasprofiileja.",
      ]},
      { items: [
        "<strong>Se ei ole</strong> opetussuunnitelman supistamista vaikeudet kohtaaville oppilaille.",
        "<strong>Se ei ole</strong> aina erilaisten tehtävien antamista eri oppilaille, se eristää ja leimaa.",
        "<strong>Se ei ole</strong> vain erilaisia tehtäviä paperilla, eriyttäminen sisältää tavan, jolla opettaja selittää, kysyy ja arvioi.",
      ]},
      { items: [
        "Ohjattu valinta: tarjoa 2–3 vaihtoehtoa vastausformaatille (kirjallinen, suullinen, kaaviopiirros), kaikki oppilaat vastaavat samaan sisältöön.",
        "Scaffolding: tarjoa jäsennelty kehys vaikeudet kohtaaville oppilaille; poista se vähitellen autonomian kasvaessa.",
        "Joustava ryhmittely: ryhmät kiinnostuksen, osaamistason tai sekoitettuina, kierrätä, jotta vältytään kiinteiden ryhmien muodostumiselta identiteeteiksi.",
        "Aikajärjestelyt: enemmän aikaa ei tarkoita vähemmän tarkkuutta. ADHD:n tai dyspraktisuuden oppilaille jaa tehtävä osiin suunniteltujen taukojen kanssa.",
        "Monimutkaisuustaso: samalle aiheelle luo versioita, joissa on enemmän tai vähemmän kielitukea, esimerkeillä tai ilman, visuaalisilla vihjeillä tai ilman.",
      ]},
      { items: [
        "Arvioi mitä oppilas tietää, ei miten hän kirjoittaa. Dyslektinen oppilas voi osoittaa käsitteellisen hallinnan suullisesti tai teknologisella tuella.",
        "Selkeät ennen tehtävää jaetut arviointikriteerit mahdollistavat oppilaan tietämisen, mitä odotetaan valitusta formaatista riippumatta.",
        "Portfolio tai näyttöön perustuva arviointi mahdollistaa edistymisen osoittamisen ajan myötä, ei vain yhdessä testimomentissa.",
      ]},
      { items: [
        "Kun luokkahuoneessa tapahtuva eriyttäminen ei enää riitä ja oppilas ei edelleenkään pääse käsiksi opetussuunnitelmaan, tämä voi viestittää erikoistuneen tuen tarpeesta.",
        "Eriyttäminen ei korvaa koulun tukitoimenpiteitä (koulukuraattori, terapeutit, erityisopetus), se on se, mitä tapahtuu täydentävästi tavallisessa luokassa.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatiivinen arviointi on mikä tahansa käytäntö, joka kerää tietoa oppimisesta prosessin aikana, ja käyttää sitä tietoa opetuksen tai oppilaan tuen mukauttamiseen.",
        "Toisin kuin summatiivinen arviointi (loppuarvosanat), formatiivinen ei tarvitse arvosanaa, se tarvitsee palautetta.",
        "Neurodivergenteille oppilaille formatiivinen arviointi on erityisen tärkeää, koska suoritus kertatestissä ei välttämättä heijasta, mitä he todella tietävät.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: tunnin lopussa oppilas vastaa kysymykseen 2 minuutissa, opettaja näkee heti, kuka ymmärsi ja kuka ei.",
        "<strong>Liikennevalot</strong>: vihreä (ymmärsin), keltainen (minulla on epäilyjä), punainen (en ymmärtänyt), voi olla fyysisiä kortteja, post-it-lappuja tai digitaalinen.",
        "<strong>Think-Pair-Share</strong>: oppilas ajattelee yksilöllisesti, keskustelee parin kanssa, jakaa sitten luokalle, vähentää ahdistusta suorasta vastauksesta.",
        "<strong>Poistumisovi</strong>: ennen lähtöä oppilas kertoo opettajalle yhden oppimansa asian ja yhden epäilyn, joka hänellä on vielä.",
      ]},
      { items: [
        "Tehokas palaute on spesifistä, toimintakelpoista ja oikea-aikaista: \'sivulla 2 argumentti häviää, koska yhteys todisteeseen puuttuu\' on hyödyllistä; \'voisi olla parempi\' ei ole.",
        "ADHD-oppilaille: välitön palaute on tehokkaampaa kuin viivästetty. Älä odota tehtävän loppuun.",
        "Dyslektisille oppilaille: suullinen tai äänipalaute voi olla saavutettavampaa kuin laajat kirjalliset kommentit.",
        "Vältä oppilaiden vertailemista toisiinsa, vertaa oppilasta heidän omaan aiempaan edistymiseensä.",
      ]},
      { items: [
        "ADHD: arviointi useissa lyhyissä hetkissä yhden pitkän kokeen sijaan. Vähennä häiritseviä ärsykkeitä arviointiympäristössä.",
        "Dysleksia: salli suulliset vastaukset, lisäaika tai tekstistä puheeksi -muunnoksen käyttö. Arvioi sisältö, ei oikeinkirjoitus.",
        "Autismi: arvioinnit selkeillä, yksiselitteisillä kirjallisilla ohjeilla. Varoita muutoksista etukäteen.",
        "Lahjakkuus: vältä arviointeja, joissa vaaditaan vain sisällön toistamista, sisällytä analyysi-, synteesi- ja luomiskysymyksiä.",
      ]},
      { items: [
        "Kun oppilas arviointiadaptaatioista huolimatta ei pysty osoittamaan oppimista, se on merkki siitä, että saattaa olla syvempi este tutkittavaksi koulun oppilashuollon kanssa.",
        "Pysyvät mallit (kuukaudet, eivät päivät) tietyn alueen erityisvaikeuksista tulisi ilmoittaa virallisesti.",
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
        "Ak cieľom nie je hodnotiť písanie, hodnotiť obsah oddelene od pravopisu.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Ťažkosti s neohlásennými zmenami, zmena rozvrhu, triedy, zastupujúceho učiteľa.",
        "Doslovná komunikácia, stráca nuansy, iróniu, idiomatické výrazy.",
        "Zmyslová citlivosť, žiarivkové svetlo, hluk na pozadí, štítky na oblečení môžu byť neznesiteľné.",
        "Sústredené a hlboké záujmy o konkrétne témy.",
        "Môže sa zdať nezaujatý alebo vzdialený, keď je preťažený, nie nezainteresovaný.",
      ]},
      { items: [
        "<strong>Nie je to</strong> lineárna škála (\"viac\" alebo \"menej\" autistický), je to multidimenzionálny profil.",
        "<strong>Nie je to</strong> nedostatok empatie, často je to opak, ťažkosti s filtráciou.",
        "<strong>Nie je to</strong> zlé správanie, keď sa rutina preruší, je to skutočná neurologická odpoveď.",
      ]},
      { items: [
        "Vopred oznámiť akúkoľvek zmenu rutiny, aj zdanlivo triviálnu.",
        "Urobiť implicitné sociálne pravidlá explicitnými (čo sa robí, čo nie, kedy).",
        "Umožniť zmyslové prestávky v tichom priestore, keď je to potrebné.",
        "Využiť sústredený záujem ako vstupný bod pre učebné obsahy.",
      ]},
      { items: [
        "Ak existuje diagnóza, najprv sa opýtať, čo rodina vie, že funguje.",
        "Ak nie je diagnóza, opísať konkrétne situácie bez použitia slova \"autizmus\" na prvom stretnutí.",
        "Oceniť úsilie rodiny, vytváranie štruktúry a predvídateľnosti doma je náročné.",
        "Nikdy neporovnávať s inými žiakmi, každý profil spektra je iný.",
      ]},
      { items: [
        "Časté záchvaty (\"meltdowns\") po školskom dni.",
        "Pretrvávajúce odmietanie školy spojené so zmyslovým preťažením.",
        "Progresívna sociálna izolácia napriek pokusom o mediáciu.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Rukopis ťažký, pomalý, často nečitateľný, nie z nedbalosti, ale pre skutočné motorické ťažkosti.",
        "Ťažkosti s priestorovou organizáciou zošita, správou pomôcok, sekvenciami krokov.",
        "Môže sa zdať \"nemotorný\", prelieva poháre, naráža do nábytku, má ťažkosti v športe.",
        "Neprimeraná únava po úlohách vyžadujúcich dlhodobú jemnú motorickú koordináciu.",
        "Kognitívna zložka je zvyčajne zachovaná, časté frustrácie medzi vedieť a ukázať.",
      ]},
      { items: [
        "<strong>Nie je to</strong> lenivosť ani nedostatok snahy.",
        "<strong>Nie je to</strong> len zlý rukopis, ovplyvňuje plánovanie a sekvencovanie úloh.",
        "<strong>Nevyrieši sa</strong> tým, že bude viac \"cvičiť písanie\".",
      ]},
      { items: [
        "Umožniť používanie klávesnice/tabletu pri rozsiahlej písomnej tvorbe.",
        "Znížiť mechanické prepisovanie z tabule, poskytnúť poznámky, keď je to relevantné.",
        "Poskytnúť explicitné kontrolné zoznamy pre úlohy s viacerými krokmi.",
        "Hodnotiť produkt podľa obsahu, nie podľa fyzickej prezentácie.",
      ]},
      { items: [
        "Vysvetliť, čo je dyspraxia, jednoduchým jazykom, väčšina rodičov tento termín nikdy nepočula.",
        "Nečitateľný rukopis je najväčším konfliktným bodom, ukázať, že hodnotenie teraz oceňuje obsah, pomáha.",
        "Navrhnúť praktické nástroje: diktovanie hlasom pre poznámky, klávesnica pre rozsiahlejšie práce.",
        "Ak existuje história \"je lenivý/á\" z predchádzajúcich rokov, pomenovať to priamo.",
      ]},
      { items: [
        "Úplné odmietanie písomnej produkcie.",
        "Sociálna izolácia v kontexte fyzickej aktivity.",
        "Príznaky somatizovanej úzkosti pred písomnými skúškami.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Dokončí úlohy za minúty, kým triede trvá celá hodina.",
        "Kladie otázky presahujúce rozsah učiva, alebo aktívne spochybňuje to, čo sa vyučuje.",
        "Môže sa zdať nezaujatý, nedisciplinovaný alebo apatický, často znaky chronickej nudy.",
        "Zvýšená emocionálna citlivosť; môže byť úzkostlivý, perfekcionistický alebo neprimerane náročný na seba.",
        "Skutočné riziko nedostatočného výkonu, naučí sa skrývať schopnosti, aby nevynikal sociálne.",
      ]},
      { items: [
        "<strong>Nie je</strong> synonymom dobrého správania alebo dobrých výsledkov, mnohí nadaní žiaci majú priemerné známky pre nezáujem.",
        "<strong>Nie je</strong> \"nepotrebuje pomoc\", potrebuje iné výzvy, nie menej pozornosti.",
        "<strong>Nie je</strong> nezlučiteľné s neurodivergenciou, dvojnásobne výnimočný (2e) existuje a je bežný.",
      ]},
      { items: [
        "Vždy mať pripravené rozširujúce úlohy, nie viac toho istého, ale hlbší alebo aplikovaný obsah.",
        "Umožniť nezávislý výskum na témy záujmu žiaka v rámci programu.",
        "Hodnotiť podľa náročnosti, nie jednoduchosti, žiadať náročnejšie práce výmenou za menší objem.",
        "Uznávať a potvrdzovať emocionálnu citlivosť bez patologizovania.",
      ]},
      { items: [
        "Predvídať rodičovskú hrdosť a presmerovať ju: práve schopnosť robí nudu problémom.",
        "Vysvetliť paradox: dobré výsledky neznamenajú, že sa mu/jej darí.",
        "Ak žiak skrýva schopnosti, aby sa sociálne zaradil, pomenovať to opatrne, je to znak trápenia.",
        "Navrhnúť rodičom, aby cenili proces viac ako výsledok: zvedavosť a hĺbka sú dôležitejšie ako jednoduché vysoké známky.",
      ]},
      { items: [
        "Príznaky úzkosti alebo depresie spojené s extrémnym perfekcionizmom.",
        "Sociálna izolácia z pocitu \"odlišnosti\" od rovesníkov.",
        "Náhly pokles výkonu u žiaka predtým identifikovaného ako schopného.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Rozumie oveľa menej, ako sa zdá, môže prikývnuť bez toho, aby pochopil.",
        "Zdanlivo nízky akademický výkon, často neúmerný skutočnej schopnosti.",
        "Ticho v triede, môže byť adaptívna stratégia, nie nezáujem.",
        "Môže byť vyčerpaný na konci dňa z duševného prekladu v reálnom čase.",
        "Riziko poddiagnosovania skutočných vzdelávacích potrieb pripisovaním všetkého jazykovej bariére.",
      ]},
      { items: [
        "<strong>Nie je to</strong> nedostatok inteligencie alebo schopností.",
        "<strong>Nie je to</strong> len otázka času, bez explicitnej podpory sa mnohí žiaci stabilizujú na nízkej funkčnej úrovni.",
        "<strong>Nevyrieši sa</strong> automatickým prekladom počas hodiny, je to proces na roky.",
      ]},
      { items: [
        "Poskytovať materiály s kľúčovou slovnou zásobou preloženou do materinského jazyka.",
        "Hodnotiť vedomosti vizuálnou alebo praktickou demonštráciou, kedykoľvek je to možné.",
        "Sparovať s dvojjazyčným spolužiakom pre neformálnu mediáciu v kľúčových momentoch.",
        "Prijímať počiatočné výstupy s gramatickými chybami, v prvej fáze opravovať obsah, nie formu.",
      ]},
      { items: [
        "Samotné stretnutie je bariéra, rodičia nemusia hovoriť slovenčinu dostatočne plynule; pripraviť písomné materiály vopred alebo zabezpečiť tlmočenie.",
        "Nepredpokladať, že rodičia poznajú slovenský vzdelávací systém, vysvetliť, čo je CPPPaP, čo je opatrenie podpory, čo obnáša hodnotenie.",
        "Jasne oddeliť jazykovú bariéru od akademickej schopnosti: \"vaše dieťa je schopné, učí sa jazyk súčasne s obsahom, čo je veľmi náročné\".",
        "Byť citlivý na migračný kontext, rodiny utečencov alebo v neistej situácii môžu nedôverovať inštitúciám.",
      ]},
      { items: [
        "Príznaky sociálnej izolácie alebo šikanovania spojené so statusom zahraničného žiaka.",
        "Stagnácia v jazykovej akvizícii po prvom roku.",
        "Príznaky traumy spojené s migračným kontextom (najmä utečenci).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Údaje maloletých podliehajú posilnenej ochrane (čl. 8 GDPR). Súhlas rodičov je povinný.",
        "Overiť, kde nástroj uchováva údaje, európske alebo neeurópske servery, anonymizované alebo nie.",
        "Nikdy nezadávať celé mená, adresy, identifikačné čísla ani klinické diagnózy do generatívnych nástrojov AI.",
        "Rozlišovať inštitucionálne použitie (škola podpisuje zmluvu) od osobného použitia učiteľa (individuálna zodpovednosť).",
      ]},
      { items: [
        "Systémy trénované prevažne na anglickom jazyku môžu mať horší výkon v iných jazykových kontextoch.",
        "Automatické odporúčania môžu zosilňovať stereotypy rodu, etnicity alebo triedy, kriticky overovať.",
        "Modely \"predikcie akademického rizika\" často reprodukujú existujúce nerovnosti.",
      ]},
      { items: [
        "Cieľom je zvyšovanie autonómie žiaka, nie nahradenie kognitívnej práce, ktorá ho rozvíja.",
        "Rozlišovať <strong>prístupový nástroj</strong> (text na reč pre dyslexiu) od <strong>substitučného nástroja</strong> (AI píše sloh).",
        "Pravidelne vyhodnocovať: rozvíja žiak kompetenciu, alebo závislosť od nástroja?",
      ]},
      { items: [
        "<strong>1.</strong> Rieši nástroj skutočnú bariéru alebo vytvára skratku, ktorá obchádza učenie?",
        "<strong>2.</strong> Sú zadané údaje chránené a existuje súhlas?",
        "<strong>3.</strong> Bude výstup nástroja overený človekom pred doručením žiakovi?",
        "<strong>4.</strong> Existuje alternatíva bez AI, ktorá funguje rovnako dobre?",
        "<strong>5.</strong> Ak nástroj zajtra prestane existovať, zostane žiak bez pomoci?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Vybaviť kolegov pre zodpovednú integráciu AI vo vyučovaní, s tvorbou materiálov prispôsobiteľných rôznym profilom učenia.",
        "Nie je to prezentácia, je to spoločná tvorba. Každý účastník odchádza s aspoň jedným zdrojom pripraveným na testovanie.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Rámovanie, problém heterogénnej triedy a prečo viac toho istého nefunguje.",
        "<strong>10–25 min:</strong> Mapa profilov, prezentácia šiestich kariet Farol so skutočnými (anonymizovanými) prípadmi.",
        "<strong>25–45 min:</strong> Praktická ukážka, tri nástroje, tri prípady použitia, tri odlišné profily.",
        "<strong>45–75 min:</strong> Práca vo dvojiciach, každá dvojica prispôsobuje existujúci materiál pre konkrétny profil.",
        "<strong>75–85 min:</strong> Rýchle zdieľanie, každá dvojica prezentuje svoj produkt za 1 minútu.",
        "<strong>85–90 min:</strong> Záväzky, každý účastník definuje jeden materiál na testovanie a naplánuje spätnú väzbu za 30 dní.",
      ]},
      { items: [
        "Prístup na internet a inštitucionálne účty v demonštrovaných nástrojoch.",
        "Existujúce materiály každého účastníka (pracovný list, test alebo plán hodiny).",
        "Vytlačené profilové karty Farol na konzultáciu.",
      ]},
      { items: [
        "Každý účastník vytvorí aspoň jeden prispôsobený materiál počas sedenia.",
        "Spätnoväzobné sedenie za 30 dní s aspoň 60 % účastníkov hlásiaci efektívnu implementáciu.",
        "Aspoň jeden materiál vytvorený počas sedenia je prijatý ako zdieľaný zdroj katedry.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Zákon č. 245/2008 Z.z. (Školský zákon) tvorí základný rámec vzdelávania žiakov so špeciálnymi výchovno-vzdelávacími potrebami (ŠVVP); inkluzívne vzdelávanie je štátnou politikou.",
        "Vyhláška č. 325/2008 Z.z. o špeciálnych výchovno-vzdelávacích potrebách upravuje podmienky vzdelávania žiakov s postihnutím a vývojovými poruchami učenia.",
        "Slovensko ratifikovalo Dohovor OSN o právach osôb so zdravotným postihnutím; školy sú povinné vytvárať inkluzívne podmienky.",
      ]},
      { items: [
        "Individuálny prístup a diferenciácia vyučovania sú základnou povinnosťou každého pedagóga bez formálnej dokumentácie.",
        "Základné adaptácie (viac času, písomné pokyny, strategické umiestnenie) nevyžadujú špeciálne schválenie, zodpovednosť každého učiteľa.",
        "Škola je povinná vytvoriť podmienky pre každého žiaka v rámci svojich kapacít.",
      ]},
      { items: [
        "Centrum pedagogicko-psychologického poradenstva a prevencie (CPPPaP) vykonáva odborné hodnotenie a vydáva odporúčania pre školu.",
        "Individuálny výchovno-vzdelávací program (IVVP) vypracúva škola v spolupráci s CPPPaP a rodičmi; je záväzný pre všetkých vyučujúcich.",
        "Asistent učiteľa môže byť pridelený žiakom s vyššími potrebami na základe odporúčania CPPPaP.",
        "Špeciálny pedagóg v škole alebo v CPPPaP koordinuje podporu a metodicky usmerňuje ostatných učiteľov.",
      ]},
      { items: [
        "Nadaní žiaci sú zahrnutí v §105–106 Školského zákona 245/2008; majú nárok na IVVP prispôsobený ich potrebám.",
        "Gymnáziá pre mimoriadne nadaných žiakov ponúkajú špecializované programy; rozširujúce programy a krúžky sú dostupné na bežných školách.",
        "V praxi je identifikácia nadania nedostatočná, CPPPaP môže vykonať hodnotenie a odporučiť vhodné opatrenia.",
      ]},
      { items: [
        "Metodické usmernenie MŠVVaŠ SR upravuje vzdelávanie žiakov cudzincov a žiakov neovládajúcich slovenský jazyk.",
        "Slovenčina ako cudzí jazyk je dostupná ako podpora; prípravný ročník je určený pre žiakov s nulovou alebo minimálnou znalosťou slovenčiny.",
        "Jazyková bariéra nie je dôvodom na zaradenie do špeciálneho vzdelávania, pred referenciou je potrebné vylúčiť jazykovú príčinu ťažkostí.",
      ]},
      { items: [
        "<strong>Zákon č. 245/2008 Z.z.</strong>, základný rámec vzdelávania žiakov so ŠVVP.",
        "<strong>Vyhláška č. 325/2008 Z.z.</strong>, špeciálne výchovno-vzdelávacie potreby.",
        "<strong>CPPPaP</strong>, centrum poradenstva, psychológie a prevencie.",
        "<strong>IVVP</strong>, individuálny výchovno-vzdelávací program.",
        "<strong>Asistent učiteľa</strong>, podpora pre žiakov s vyššími potrebami.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagogická diferenciácia znamená prispôsobiť spôsob vyučovania, nesnižovať očakávania. Cieľ učenia môže byť pre všetkých žiakov rovnaký; líši sa cesta.",
        "Model UDL (Univerzálny dizajn pre učenie) navrhuje tri princípy: rôzne prostriedky reprezentácie (ako je obsah prezentovaný), rôzne prostriedky konania a vyjadrovania (ako žiak reaguje) a rôzne prostriedky zapájania (čo žiaka motivuje).",
        "Diferencovať neznamená vytvárať individuálny plán hodiny pre každého žiaka, znamená to vytvoriť dostatok flexibility, aby tá istá hodina slúžila rôznym profilom žiakov.",
      ]},
      { items: [
        "<strong>Nie je to</strong> redukovanie učiva pre žiakov s ťažkosťami.",
        "<strong>Nie je to</strong> vždy zadávať rôzne úlohy rôznym žiakom, to izoluje a nálepkuje.",
        "<strong>Nie sú to</strong> len diferencované pracovné listy, diferenciácia zahŕňa spôsob, akým učiteľ vysvetľuje, kladie otázky a hodnotí.",
      ]},
      { items: [
        "Riadená voľba: ponúknuť 2–3 možnosti formátu odpovede (písomná, ústna, schematická kresba), všetci žiaci reagujú na rovnaký obsah.",
        "Scaffolding: poskytnúť štruktúrovaný rámec žiakom s ťažkosťami; postupne ho odstraňovať s rastúcou samostatnosťou.",
        "Flexibilné zoskupovanie: skupiny podľa záujmu, úrovne zvládnutia alebo zmiešané, striedať, aby sa predišlo pevným skupinám, ktoré sa stávajú identitami.",
        "Úpravy času: viac času neznamená menej prísnosti. Pre žiakov s ADHD alebo dyspraxiou rozdeliť úlohu na segmenty s plánovanými prestávkami.",
        "Úroveň zložitosti: pre rovnakú tému vytvárať verzie s väčšou alebo menšou jazykovou podporou, s príkladmi alebo bez, s vizuálnymi nápovedami alebo bez.",
      ]},
      { items: [
        "Hodnotiť, čo žiak vie, nie ako píše. Žiak s dyslexiou môže preukázať konceptuálne zvládnutie ústne alebo s technologickou podporou.",
        "Jasné hodnotiace kritériá zdieľané pred úlohou umožňujú žiakovi vedieť, čo sa očakáva bez ohľadu na zvolený formát.",
        "Portfólio alebo hodnotenie na základe dôkazov umožňuje žiakovi ukázať pokroky v čase, nie len v jednom momente skúšania.",
      ]},
      { items: [
        "Keď diferenciácia v triede prestane byť dostatočná a žiak stále nemá prístup k učivu, môže to signalizovať potrebu špecializovanej podpory.",
        "Diferenciácia nenahrádza školské podporné opatrenia (školský psychológ, terapeuti, špeciálne vzdelávanie), je to to, čo sa komplementárne deje v bežnej triede.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatívne hodnotenie je každá prax, ktorá zhromažďuje informácie o učení počas procesu, a tieto informácie využíva na prispôsobenie vyučovania alebo podpory žiakovi.",
        "Na rozdiel od sumatívneho hodnotenia (záverečné známky) formatívne nepotrebuje známku, potrebuje spätnú väzbu.",
        "Pre neurodivergentných žiakov je formatívne hodnotenie zvlášť dôležité, pretože výkon pri jednorazovom teste nemusí odrážať, čo skutočne vedia.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: na konci hodiny žiak zodpovie otázku za 2 minúty, učiteľ okamžite vidí, kto pochopil a kto nie.",
        "<strong>Semafor</strong>: zelená (pochopil som), žltá (mám pochybnosti), červená (nepochopil som), môžu byť fyzické kartičky, post-ity alebo digitálne.",
        "<strong>Think-Pair-Share</strong>: žiak premýšľa individuálne, diskutuje s partnerom, potom zdieľa s triedou, znižuje úzkosť z priamej odpovede.",
        "<strong>Výstupná brána</strong>: pred odchodom žiak povie učiteľovi jednu vec, ktorú sa naučil, a jednu pochybnosť, ktorú stále má.",
      ]},
      { items: [
        "Účinná spätná väzba je konkrétna, realizovateľná a včasná: \'na strane 2 sa argument stráca, pretože chýba prepojenie s dôkazom\' je užitočné; \'mohlo by byť lepšie\' nie je.",
        "Pre žiakov s ADHD: okamžitá spätná väzba je účinnejšia ako odložená. Nečakať do konca úlohy.",
        "Pre žiakov s dyslexiou: ústna alebo zvuková spätná väzba môže byť dostupnejšia ako rozsiahle písomné komentáre.",
        "Vyhýbať sa porovnávaniu žiakov navzájom, porovnávať žiaka s jeho vlastným predchádzajúcim pokrokom.",
      ]},
      { items: [
        "ADHD: hodnotenie v niekoľkých krátkych momentoch namiesto jedného dlhého testu. Znížiť rušivé podnety v prostredí hodnotenia.",
        "Dyslexia: umožniť ústne odpovede, extra čas alebo použitie prevodu textu na reč. Hodnotiť obsah, nie pravopis.",
        "Autizmus: hodnotenia s jasnými, jednoznačnými písomnými pokynmi. Vopred upozorniť na zmeny formátu.",
        "Nadanie: vyhnúť sa hodnoteniam samotnej reprodukcie obsahu, zahrnúť otázky analýzy, syntézy a tvorby.",
      ]},
      { items: [
        "Keď žiak ani pri prispôsobeniach hodnotenia nevie preukázať učenie, je to signál, že môže existovať hlbšia prekážka na preskúmanie so školským psychológom.",
        "Pretrvávajúce vzory (mesiace, nie dni) špecifických ťažkostí v oblasti by mali byť formálne oznámené.",
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
        "Kezdje azzal, amit a tanuló jól csinál — a megbeszélés nem nyílhat meg panaszok listájaként, különben a szülő/gondviselő védekezően bezárkózik.",
        "Megfigyelt viselkedéseket írjon le, ne diagnózisokat: „amikor kettőnél több egymást követő lépés van, elveszíti a fonalat” a „ADHD-s” helyett.",
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
        "Amikor a cél nem az írás értékelése, a tartalmat a helyesírástól külön értékelje.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Nehézségek a bejelentés nélküli változásokkal, órarend, terem, helyettesítő tanár.",
        "Szó szerinti kommunikáció, elvesznek az árnyalatok, az irónia, az idiómák.",
        "Érzékszervi érzékenység, a fénycsöves lámpa, a háttérzaj, a ruha-etikettje elviselhetetlen lehet.",
        "Fókuszált és mély érdeklődés meghatározott témák iránt.",
        "Terheltségkor érdektelennek vagy távolinak tűnhet, nem közömbös.",
      ]},
      { items: [
        "<strong>Nem</strong> lineáris skála („több\" vagy „kevesebb\" autista), multidimenzionális profil.",
        "<strong>Nem</strong> empátiahiány, sokszor az ellenkezője, a szűrés nehézsége.",
        "<strong>Nem</strong> rossz magatartás, amikor egy rutin megszakad, valódi neurológiai reakció.",
      ]},
      { items: [
        "Előzetesen értesítsen minden rutinváltozásról, még a látszólag triviálisokról is.",
        "Az implicit szociális szabályokat tegye explicitté (mit kell tenni, mit nem, mikor).",
        "Szükség esetén érzékszervi szünetet engedélyezzen csendes térben.",
        "A fókuszált érdeklődést használja belépési pontként a tananyaghoz.",
      ]},
      { items: [
        "Ha van diagnózis, először kérdezze meg, mit tud a szülő arról, ami működik.",
        "Ha nincs diagnózis, konkrét helyzeteket írjon le az „autizmus\" szó használata nélkül az első megbeszélésen.",
        "Ismerje el a szülők erőfeszítéseit, a struktúra és kiszámíthatóság megteremtése otthon megterhelő.",
        "Soha ne hasonlítsa más tanulókhoz, minden spektrumprofil különböző.",
      ]},
      { items: [
        "Gyakori összeomlások (\"meltdowns\") az iskolai nap után.",
        "Tartós iskolakerülés érzékszervi túlterhelés miatt.",
        "Fokozódó szociális elszigeteltség a közvetítési kísérletek ellenére.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Kézírás nehéz, lassú, sokszor olvashatatlan, nem hanyagságból, hanem valódi motoros nehézség miatt.",
        "Nehézségek a füzet térbeli szervezésével, az eszközök kezelésével, a lépések sorba rendezésével.",
        "Ügyetlennek tűnhet, feldönti a poharakat, beütközik a bútorokba, nehezére esik a testnevelés.",
        "Aránytalanul fáradt tartós finommotoros koordinációt igénylő feladatok után.",
        "A kognitív összetevő általában megmarad, a tudás és a megmutatás közötti frusztráció állandó.",
      ]},
      { items: [
        "<strong>Nem</strong> lustaság vagy igyekezethiány.",
        "<strong>Nem</strong> csak rossz kézírás, érinti a tervezést és a feladatok sorba rendezését.",
        "<strong>Nem oldódik meg</strong> azzal, hogy „többet gyakorolja az írást\".",
      ]},
      { items: [
        "Billentyűzet/táblagép használatának engedélyezése hosszabb írásos munkáknál.",
        "A tábláról való mechanikus másolás csökkentése, szükség esetén jegyzetek biztosítása.",
        "Explicit ellenőrzőlisták biztosítása többlépéses feladatokhoz.",
        "A termék értékelése tartalom szerint, nem fizikai megjelenés alapján.",
      ]},
      { items: [
        "A diszpraxiát egyszerű nyelven magyarázza el, a szülők többsége soha nem hallotta a szót.",
        "Az olvashatatlan kézírás a legnagyobb konfliktuspont, annak megmutatása, hogy az értékelés most a tartalmat értékeli, segít.",
        "Javasoljon praktikus otthoni eszközöket: hangrögzítés jegyzetekhez, billentyűzet hosszabb írásokhoz.",
        "Ha előző évekből „lusta\" jelzők vannak, nevesítse azt közvetlenül.",
      ]},
      { items: [
        "Az írásos produkció teljes elutasítása.",
        "Szociális elszigeteltség fizikai aktivitás összefüggésében.",
        "Szomatizált szorongás jelei írásos értékelések előtt.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Percek alatt befejezi a feladatokat, miközben az osztálynak az egész óra kell.",
        "A tananyag keretein kívülre mutató kérdéseket tesz fel, vagy aktívan megkérdőjelezi, amit tanítanak.",
        "Érdektelennek, fegyelmezetlennek vagy apátiásnak tűnhet, ez gyakran a krónikus unalom jele.",
        "Fokozott érzelmi érzékenység; szorongó, perfekcionista, vagy igazságtalanul sokat vár magától.",
        "Valódi alulteljesítési kockázat, megtanulja elrejteni képességeit, hogy ne tűnjön ki szociálisan.",
      ]},
      { items: [
        "<strong>Nem</strong> szinonimája a jó viselkedésnek vagy jó eredményeknek, sok tehetséges diáknak közepes jegyei vannak az érdektelenség miatt.",
        "<strong>Nem</strong> „nincs szüksége segítségre\", más kihívásokra van szüksége, nem kevesebb figyelemre.",
        "<strong>Nem</strong> összeegyeztethetetlen a neurodiverziával, a kétszeresen kivételes (2e) létezik és gyakori.",
      ]},
      { items: [
        "Mindig legyen kész bővítő feladat, nem több ugyanabból, hanem mélyebb vagy alkalmazott tartalom.",
        "Engedje meg az önálló kutatást az érdeklődési körébe eső témákban a tanterv keretein belül.",
        "A kihívás szerint értékelje, ne a könnyűség szerint, igényesebb munkát kérjen kisebb mennyiségért cserébe.",
        "Ismerje el és erősítse meg az érzelmi érzékenységet anélkül, hogy patologizálná.",
      ]},
      { items: [
        "Számítson a szülői büszkeségre és irányítsa át: éppen a képesség teszi az unalmat problémává.",
        "Magyarázza el a paradoxont: a jó eredmények nem azt jelentik, hogy jól van.",
        "Ha a tanuló elrejti képességét a beilleszkedés érdekében, nevesítse óvatosan, ez szenvedés jele.",
        "Javasolja a szülőknek, hogy az eredmény helyett az folyamatot értékeljék: a kíváncsiság és a mélység fontosabb az egyszerű jó jegyeknél.",
      ]},
      { items: [
        "Szorongás vagy depresszió jelei extrém perfekcionizmushoz kapcsolódva.",
        "Szociális elszigeteltség a társaitól való „különbözőség\" érzése miatt.",
        "Hirtelen alulteljesítés egy korábban képesnek azonosított tanulónál.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Sokkal kevesebbet ért, mint amennyit mutat, bólinthat anélkül, hogy megértett volna.",
        "Látszólag alacsony tanulmányi teljesítmény, sokszor aránytalanul alacsony a valódi képességhez képest.",
        "Csend az osztályban, adaptív stratégia lehet, nem érdektelenség.",
        "A nap végére kimerülhet a valós idejű mentális fordítástól.",
        "A valódi tanulási szükségletek (diszlexia, ADHD stb.) aluldiagnosztizálásának kockázata, mert mindent a nyelvi akadálynak tulajdonítanak.",
      ]},
      { items: [
        "<strong>Nem</strong> intelligencia- vagy képességhiány.",
        "<strong>Nem</strong> csupán idő kérdése, kifejezett támogatás nélkül sok tanuló alacsony funkcionális szinten marad.",
        "<strong>Nem oldódik meg</strong> automatikus fordítással az óra alatt, ez évekig tartó folyamat.",
      ]},
      { items: [
        "Anyanyelvére lefordított kulcsszókinccsel ellátott anyagok biztosítása.",
        "Vizuális vagy gyakorlati demonstrációval való tudásértékelés, ahol lehetséges.",
        "Kétnyelvű diáktárssal való párosítás informális közvetítéshez a kritikus pillanatokban.",
        "A grammatikai hibákkal teli kezdeti produktumok elfogadása, az első fázisban a tartalmat javítsa, ne a formát.",
      ]},
      { items: [
        "Maga a megbeszélés is akadály, a szülők nem feltétlenül beszélnek magyarul elégséges szinten; tolmács vagy írásos anyagok szükségesek.",
        "Ne tételezze fel, hogy a szülők ismerik a magyar oktatási rendszert, magyarázza el, mi a PSZI, mi egy támogató intézkedés.",
        "Egyértelműen különítse el a nyelvi akadályt az akadémiai képességtől.",
        "Legyen érzékeny a migrációs kontextusra, menekült vagy bizonytalan helyzetű családok bizalmatlanok lehetnek az intézményekkel szemben.",
      ]},
      { items: [
        "Szociális elszigeteltség vagy zaklatás jelei a külföldi tanuló státuszához kapcsolódva.",
        "Stagnálás a nyelvi elsajátításban az első év után.",
        "Traumára utaló jelek a migrációs kontextusban (különösen menekülteknél).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "A kiskorúak adatai fokozott védelemnek vannak alávetve (GDPR 8. cikk). A szülői hozzájárulás kötelező.",
        "Ellenőrizze, hol tárolja az eszköz az adatokat, európai vagy nem európai szerverek, anonimizált-e.",
        "Soha ne adjon meg teljes neveket, lakcímeket, személyi azonosítókat vagy klinikai diagnózisokat generatív AI eszközökhöz.",
        "Különböztesse meg az intézményi használatot (iskola szerződést köt) a személyes tanári használattól (egyéni felelősség).",
      ]},
      { items: [
        "A túlnyomórészt angol nyelvű adatokkal betanított rendszerek más nyelvi kontextusokban gyengébben teljesíthetnek.",
        "Az automatikus ajánlások felerősíthetnek nemi, etnikai vagy osztályalapú sztereotípiákat, kritikusan ellenőrizze.",
        "Az „akadémiai kockázat-előrejelzési\" modellek gyakran reprodukálják a meglévő egyenlőtlenségeket.",
      ]},
      { items: [
        "A cél a tanuló autonómiájának növelése, nem a fejlesztő kognitív munka helyettesítése.",
        "Különböztesse meg a <strong>hozzáférési eszközt</strong> (szöveg-felolvasó diszlexiásoknak) a <strong>helyettesítési eszköztől</strong> (AI írja a dolgozatot).",
        "Rendszeresen értékelje: a tanuló kompetenciát fejleszt, vagy függőséget az eszköztől?",
      ]},
      { items: [
        "<strong>1.</strong> Az eszköz valódi akadályt old meg, vagy olyan rövidítést teremt, amely kikerüli a tanulást?",
        "<strong>2.</strong> A bevitt adatok védve vannak és a hozzájárulás megvan?",
        "<strong>3.</strong> Az eszköz eredményét egy ember ellenőrzi, mielőtt a tanulóhoz kerül?",
        "<strong>4.</strong> Van AI nélküli alternatíva, amely ugyanolyan jól működik?",
        "<strong>5.</strong> Ha az eszköz holnap megszűnik, a tanuló magára marad?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Felkészíteni a kollégákat az AI felelős integrálására az oktatásban, különböző tanulási profilokhoz igazítható anyagok készítésével.",
        "Ez nem előadás, közös alkotás. Minden résztvevő legalább egy tesztelésre kész anyaggal távozik.",
      ]},
      { items: [
        "<strong>0–10 perc:</strong> Keretezés, a heterogén osztály problémája és miért nem működik a több ugyanolyan.",
        "<strong>10–25 perc:</strong> Profilok térképe, a hat Farol kártya bemutatása valódi (anonimizált) esetekkel.",
        "<strong>25–45 perc:</strong> Gyakorlati bemutató, három eszköz, három felhasználási eset, három különböző profil.",
        "<strong>45–75 perc:</strong> Páros munka, minden pár egy meglévő anyagot igazít egy adott profilhoz.",
        "<strong>75–85 perc:</strong> Gyors megosztás, minden pár 1 percben bemutatja a termékét.",
        "<strong>85–90 perc:</strong> Vállalások, minden résztvevő meghatároz egy tesztelendő anyagot és 30 napos visszajelzési alkalmat tervez.",
      ]},
      { items: [
        "Internetelérés és intézményi fiókok a bemutatott eszközökhöz.",
        "Minden résztvevő meglévő anyagai (egy feladatlap, egy dolgozat vagy egy óravázlat).",
        "Kinyomtatott Farol profil kártyák a konzultációhoz.",
      ]},
      { items: [
        "Minden résztvevő legalább egy adaptált anyagot készít az ülés során.",
        "30 napos visszajelzési alkalom a résztvevők legalább 60%-ával, akik hatékony implementációt jelentenek.",
        "Az ülés során készített legalább egy anyagot osztott tanszéki erőforrásként fogadják el.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "A 2011. évi CXC. törvény a nemzeti köznevelésről (Nkt.) meghatározza a sajátos nevelési igényű (SNI) tanulók oktatásának alapelveit és intézményi kötelezettségeit.",
        "A 32/2012. (X. 8.) EMMI rendelet az SNI tanulók iskolai oktatásának irányelvéről részletesen szabályozza a különböző fogyatékossági típusokhoz szükséges feltételeket.",
        "Magyarország ratifikálta az ENSZ Egyezményt a fogyatékossággal élők jogairól; az inkluzív oktatás állami célkitűzés.",
      ]},
      { items: [
        "A differenciált oktatás és adaptív pedagógia minden pedagógus kötelessége diagnózis nélkül is, az intézmény köteles befogadó környezetet biztosítani.",
        "Alapszintű adaptációk (hosszabb idő, írásos utasítások, stratégiai ültetés) nem igényelnek szakértői véleményt, minden tanár felelőssége.",
        "Az iskolának pedagógiai módszerek tekintetében rugalmasnak kell lennie minden tanuló igényeire.",
      ]},
      { items: [
        "A Pedagógiai Szakszolgálat (PSZI) végzi a szakértői vizsgálatot és adja ki a szakértői véleményt, amely meghatározza a szükséges támogatásokat.",
        "Az egyéni fejlesztési terv (EFT) az iskola és a PSZI közreműködésével, a szülők bevonásával készül; minden érintett pedagógusra kötelező.",
        "Gyógypedagógiai asszisztens és utazótanár igényelhető a jelentősebb szükségletű tanulók esetén a szakértői vélemény alapján.",
        "A szülő/gondviselő aláírása kötelező az egyéni fejlesztési terven; éves felülvizsgálat szükséges.",
      ]},
      { items: [
        "Az Nkt. 4. §25 alapján a tehetséggondozás az iskola kötelessége; a MATEHETSZ Tehetségpont hálózat módszertani támogatást nyújt.",
        "Osztályugratás az Nkt. alapján lehetséges; az iskola döntése, amelyhez a szülő és a tanuló hozzájárulása szükséges.",
        "A tehetséges tanulók azonosítása és támogatása a gyakorlatban hiányos, a PSZI tehetségdiagnosztikát végezhet.",
      ]},
      { items: [
        "Az Nkt. 45. § alapján felkészítő foglalkozás szervezhető a magyar nyelvet nem ismerő tanulók számára az iskolakezdés előtt vagy az első időszakban.",
        "A magyar mint idegen nyelv (MNyI) oktatása elérhető, koordinálja az Oktatási Hivatal; nem állítható ki SNI-vélemény kizárólag a nyelvi akadály alapján.",
        "A szülőkkel való kommunikációhoz szükséges esetén tolmács igénybevétele a befogadó iskola felelőssége.",
      ]},
      { items: [
        "<strong>Nkt. 2011. évi CXC.</strong>, nemzeti köznevelési törvény, SNI-rendelkezésekkel.",
        "<strong>32/2012. EMMI rendelet</strong>, SNI tanulók oktatásának irányelvei.",
        "<strong>PSZI</strong>, Pedagógiai Szakszolgálat, szakértői vizsgálatokhoz.",
        "<strong>Egyéni fejlesztési terv (EFT)</strong>, kötelező dokumentum SNI tanulóknál.",
        "<strong>MNyI</strong>, magyar mint idegen nyelv program.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "A pedagógiai differenciálás az oktatás módjának testreszabását jelenti, nem az elvárások csökkentését. A tanulási cél minden tanuló számára ugyanaz lehet; ami változik, az az út.",
        "Az UDL-modell (Tanulás Egyetemes Tervezése) három elvet javasol: a reprezentáció többféle módja (hogyan mutatják be a tartalmat), a cselekvés és kifejezés többféle módja (hogyan reagál a tanuló) és az elköteleződés többféle módja (mi motiválja a tanulót).",
        "A differenciálás nem jelenti azt, hogy minden tanulóhoz egyéni óravázlatot kell készíteni, azt jelenti, hogy elegendő rugalmasságot kell teremteni ahhoz, hogy ugyanaz az óra különböző tanulói profilokat is kiszolgáljon.",
      ]},
      { items: [
        "<strong>Nem az</strong>, hogy csökkentjük a tantervet a nehézséggel küzdő tanulók számára.",
        "<strong>Nem az</strong>, hogy mindig különböző feladatokat adunk különböző tanulóknak, ez elszigetel és megbélyegez.",
        "<strong>Nem csupán</strong> differenciált munkalapok, a differenciálás magában foglalja azt is, ahogyan a tanár magyaráz, kérdez és értékel.",
      ]},
      { items: [
        "Irányított választás: 2–3 válaszformátum-opció ajánlása (írásbeli, szóbeli, sematikus rajz), minden tanuló ugyanarra a tartalomra reagál.",
        "Scaffolding: strukturált keretet biztosítani a nehézséggel küzdő tanulóknak; fokozatosan eltávolítani azt, ahogy az önállóság növekszik.",
        "Rugalmas csoportosítás: érdeklődés, elsajátítási szint vagy vegyes csoportok, forgatás a rögzített csoportok elkerülése érdekében, amelyek identitássá válnak.",
        "Időbeli igazítások: több idő nem jelent kevesebb szigorúságot. ADHD-s vagy diszpraxiás tanulóknál osszuk részekre a feladatot tervezett szünetekkel.",
        "Komplexitási szint: ugyanahhoz a témához különböző verziók készítése több vagy kevesebb nyelvi támogatással, példákkal vagy anélkül, vizuális jelzésekkel vagy anélkül.",
      ]},
      { items: [
        "Azt értékeljük, amit a tanuló tud, nem azt, hogyan ír. Egy diszlexiás tanuló szóban vagy technológiai támogatással is bizonyíthatja fogalmi tudását.",
        "A feladat előtt megosztott egyértelmű értékelési szempontok lehetővé teszik a tanuló számára, hogy tudja, mit várnak el tőle, függetlenül a választott formátumtól.",
        "A portfólió vagy bizonyítékon alapuló értékelés lehetővé teszi a tanuló számára, hogy az idő múlásával mutasson fejlődést, nem csupán egyetlen tesztpillanatban.",
      ]},
      { items: [
        "Ha az osztálytermi differenciálás már nem elegendő, és a tanuló továbbra sem tud hozzáférni a tantervhez, ez jelezheti, hogy szakosodott támogatásra van szükség.",
        "A differenciálás nem helyettesíti az iskolai támogatási intézkedéseket (iskolapszichológus, terapeuták, gyógypedagógia), ez az, ami kiegészítően történik a normál osztályban.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "A formatív értékelés minden olyan gyakorlat, amely a folyamat során gyűjt információkat a tanulásról, és ezeket az információkat felhasználja az oktatás vagy a tanuló támogatásának kiigazítására.",
        "A szummatív értékeléssel (záróosztályzatok) ellentétben a formatív értékeléshez nem szükséges osztályzat, visszajelzésre van szüksége.",
        "A neurodiverggens tanulók számára a formatív értékelés különösen fontos, mert az egyszeri teszten nyújtott teljesítmény nem feltétlenül tükrözi azt, amit valójában tudnak.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: az óra végén a tanuló 2 perc alatt válaszol egy kérdésre, a tanár azonnal látja, ki értette meg és ki nem.",
        "<strong>Közlekedési lámpa</strong>: zöld (megértettem), sárga (kétségeim vannak), piros (nem értettem meg), lehet fizikai kártyák, post-it-ok vagy digitális.",
        "<strong>Think-Pair-Share</strong>: a tanuló egyénileg gondolkodik, megbeszéli egy partnerrel, majd megosztja az osztállyal, csökkenti a közvetlen válaszadástól való szorongást.",
        "<strong>Kijárati kapu</strong>: mielőtt elmenne, a tanuló elmond a tanárnak egy dolgot, amit tanult, és egy kétséget, amije még van.",
      ]},
      { items: [
        "A hatékony visszajelzés konkrét, megvalósítható és időszerű: \'a 2. oldalon az érvelés elvész, mert hiányzik a kapcsolat a bizonyítékkal\' hasznos; \'lehetne jobb\' nem az.",
        "ADHD-s tanulóknak: az azonnali visszajelzés hatékonyabb a késleltetett visszajelzésnél. Ne várjunk a feladat végéig.",
        "Diszlexiás tanulóknak: a szóbeli vagy hangos visszajelzés hozzáférhetőbb lehet, mint a kiterjedt írásbeli megjegyzések.",
        "Kerüljük a tanulók egymással való összehasonlítását, a tanulót a saját korábbi fejlődéséhez hasonlítsuk.",
      ]},
      { items: [
        "ADHD: értékelés több rövid pillanatban egyetlen hosszú teszt helyett. Csökkentsük a zavaró ingereket az értékelési környezetben.",
        "Diszlexia: engedjük meg a szóbeli válaszokat, extra időt vagy szövegfelolvasó használatát. A tartalmat értékeljük, nem a helyesírást.",
        "Autizmus: egyértelmű, félreérthetetlen írásbeli utasításokat tartalmazó értékelések. Előre figyelmeztessük a formatumváltozásokról.",
        "Tehetség: kerüljük a puszta tartalomreprodukcióra irányuló értékeléseket, vonjunk be elemzési, szintézis- és alkotó kérdéseket.",
      ]},
      { items: [
        "Ha a tanuló értékelési adaptációkkal sem tud tanulást bizonyítani, ez jele lehet, hogy mélyebb akadály van, amelyet az iskolapszichológussal kell vizsgálni.",
        "Egy területen fennálló specifikus nehézség tartós mintái (hónapok, nem napok) formálisan jelzendők.",
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
        "Ξεκινήστε από αυτό που κάνει καλά ο μαθητής — η συνάντηση δεν μπορεί να ανοίγει σαν κατάλογος παραπόνων, αλλιώς ο γονέας/κηδεμόνας κλείνεται αμυντικά.",
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
        "Η προφορική κατανόηση είναι σαφώς ανώτερη από την αναγνωστική — η δυσκολία είναι ειδική, όχι μια γενική γνωστική περιοριστική κατάσταση.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> έλλειψη ευφυΐας: εξ ορισμού, η δυσλεξία είναι απρόσμενη σε σχέση με τις άλλες γνωστικές ικανότητες του μαθητή.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
        "<strong>Δεν είναι</strong> πρόβλημα όρασης ούτε απλώς «μπέρδεμα γραμμάτων»: το κεντρικό έλλειμμα βρίσκεται στη φωνολογική επεξεργασία.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
        "<strong>Δεν «θεραπεύεται»</strong>, αλλά η δομημένη παρέμβαση στη φωνολογική επίγνωση και στην αποκωδικοποίηση βελτιώνει την ανάγνωση με συνέπεια.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Αύξηση της απόστασης μεταξύ γραμμάτων και γραμμών: υπάρχουν πειραματικά δεδομένα ότι το διευρυμένο διάστιχο βελτιώνει την ανάγνωση των δυσλεξικών παιδιών, χωρίς προηγούμενη εξάσκηση.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup> Αντιθέτως, τα δεδομένα για ειδικές γραμματοσειρές «για δυσλεξικούς» είναι ασθενέστερα και ασυνεπή.",
        "Επιτρέψτε τη σιωπηρή ανάγνωση πριν από οποιαδήποτε φωναχτή ανάγνωση — μη ζητάτε ποτέ ανάγνωση αιφνιδιαστικά.",
        "Όταν ο στόχος δεν είναι η αξιολόγηση της γραφής, αξιολογήστε το περιεχόμενο χωριστά από την ορθογραφία.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Δυσκολία με αναπάντεχες αλλαγές, αλλαγή προγράμματος, αίθουσας, αναπληρωτή εκπαιδευτικού.",
        "Κυριολεκτική επικοινωνία, χάνει αποχρώσεις, ειρωνεία, ιδιωματισμούς.",
        "Αισθητηριακή ευαισθησία, φθορίζον φως, θόρυβος παρασκηνίου, ετικέτες ρούχων μπορεί να είναι ανυπόφορα.",
        "Εστιασμένα και βαθιά ενδιαφέροντα για συγκεκριμένα θέματα.",
        "Μπορεί να φαίνεται αδιάφορος/η ή αποστασιοποιημένος/η όταν είναι υπερφορτωμένος/η, όχι αποσυνδεδεμένος/η.",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> γραμμική κλίμακα («περισσότερο» ή «λιγότερο» αυτιστικός/ή), είναι πολυδιάστατο προφίλ.",
        "<strong>Δεν είναι</strong> έλλειψη ενσυναίσθησης, συχνά συμβαίνει το αντίθετο, δυσκολία φιλτραρίσματος.",
        "<strong>Δεν είναι</strong> κακή συμπεριφορά όταν διακόπτεται μια ρουτίνα, είναι πραγματική νευρολογική απόκριση.",
      ]},
      { items: [
        "Να ειδοποιείτε εκ των προτέρων για οποιαδήποτε αλλαγή ρουτίνας, ακόμα και φαινομενικά ασήμαντη.",
        "Να κάνετε σιωπηρούς κοινωνικούς κανόνες ρητούς (τι πρέπει να γίνει, τι όχι, πότε).",
        "Να επιτρέπονται αισθητηριακά διαλείμματα σε ήσυχο χώρο όταν χρειάζεται.",
        "Να αξιοποιείτε το εστιασμένο ενδιαφέρον ως σημείο εισόδου για το αναλυτικό πρόγραμμα.",
      ]},
      { items: [
        "Αν υπάρχει διάγνωση, ρωτήστε πρώτα τι γνωρίζει η οικογένεια ότι λειτουργεί.",
        "Αν δεν υπάρχει διάγνωση, περιγράψτε συγκεκριμένες καταστάσεις χωρίς να χρησιμοποιείτε τη λέξη «αυτισμός» στην πρώτη συνάντηση.",
        "Να αναγνωρίζετε την προσπάθεια της οικογένειας, η δημιουργία δομής και προβλεψιμότητας στο σπίτι είναι απαιτητική.",
        "Ποτέ να μην συγκρίνετε με άλλους μαθητές, κάθε προφίλ φάσματος είναι διαφορετικό.",
      ]},
      { items: [
        "Συχνές κρίσεις (\"meltdowns\") μετά τη σχολική ημέρα.",
        "Επίμονη άρνηση σχολείου που συνδέεται με αισθητηριακή υπερφόρτωση.",
        "Προοδευτική κοινωνική απομόνωση παρά τις προσπάθειες διαμεσολάβησης.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Γραφή δύσκολη, αργή, συχνά δυσανάγνωστη, όχι από αμέλεια αλλά λόγω πραγματικής κινητικής δυσκολίας.",
        "Δυσκολία στη χωρική οργάνωση του τετραδίου, τη διαχείριση υλικών, την ακολουθία βημάτων.",
        "Μπορεί να φαίνεται «άτσαλος/η», ανατρέπει ποτήρια, χτυπάει σε έπιπλα, δυσκολεύεται στη γυμναστική.",
        "Δυσανάλογη κόπωση μετά από εργασίες που απαιτούν συνεχή λεπτή κινητική συντονισμό.",
        "Η γνωστική συνιστώσα διατηρείται γενικά, συχνή απογοήτευση μεταξύ «ξέρω» και «μπορώ να δείξω».",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> τεμπελιά ή έλλειψη προσπάθειας.",
        "<strong>Δεν είναι</strong> απλώς κακή γραφή, επηρεάζει τον σχεδιασμό και την ακολουθία εργασιών.",
        "<strong>Δεν λύνεται</strong> με «περισσότερη εξάσκηση γραφής».",
      ]},
      { items: [
        "Να επιτρέπεται η χρήση πληκτρολογίου/tablet σε εκτεταμένες γραπτές εργασίες.",
        "Να μειώνεται η μηχανική αντιγραφή από τον πίνακα, να παρέχονται σημειώσεις όταν είναι σκόπιμο.",
        "Να παρέχονται ρητές λίστες ελέγχου για εργασίες με πολλά βήματα.",
        "Να αξιολογείται το προϊόν βάσει περιεχομένου, όχι φυσικής παρουσίασης.",
      ]},
      { items: [
        "Να εξηγείτε τη δυσπραξία με απλή γλώσσα, οι περισσότεροι γονείς δεν έχουν ακούσει τον όρο.",
        "Η δυσανάγνωστη γραφή είναι το μεγαλύτερο σημείο τριβής, το να δείξετε ότι η αξιολόγηση πλέον εκτιμά το περιεχόμενο βοηθά.",
        "Να προτείνετε πρακτικά εργαλεία για το σπίτι: υπαγόρευση φωνής για σημειώσεις, πληκτρολόγιο για εκτεταμένες εργασίες.",
        "Αν υπάρχει ιστορικό ετικετών «τεμπέλης» από προηγούμενες χρονιές, να το ονομάζετε άμεσα.",
      ]},
      { items: [
        "Πλήρης άρνηση γραπτής παραγωγής.",
        "Κοινωνική απομόνωση σε πλαίσια σωματικής δραστηριότητας.",
        "Ενδείξεις σωματοποιημένου άγχους πριν από γραπτές αξιολογήσεις.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Ολοκληρώνει εργασίες σε λίγα λεπτά ενώ η τάξη χρειάζεται ολόκληρη την ώρα.",
        "Κάνει ερωτήσεις πέρα από το πεδίο του μαθήματος, ή αμφισβητεί ενεργά αυτό που διδάσκεται.",
        "Μπορεί να φαίνεται αδιάφορος/η, αταξίες ή απαθής/η, συχνά σημάδια χρόνιας πλήξης.",
        "Έντονη συναισθηματική ευαισθησία· μπορεί να είναι αγχώδης/ης, τελειομανής ή άδικα απαιτητικός/ή με τον εαυτό του/της.",
        "Πραγματικός κίνδυνος υποεπίδοσης, μαθαίνει να κρύβει τις δυνατότητές του/της για να μην ξεχωρίζει κοινωνικά.",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> συνώνυμο καλής συμπεριφοράς ή καλών αποτελεσμάτων, πολλοί ταλαντούχοι μαθητές έχουν μέτριους βαθμούς λόγω αποδέσμευσης.",
        "<strong>Δεν είναι</strong> «δεν χρειάζεται βοήθεια», χρειάζεται διαφορετικές προκλήσεις, όχι λιγότερη προσοχή.",
        "<strong>Δεν είναι</strong> ασύμβατο με νευροαπόκλιση, ο διπλά εξαιρετικός/ή (2e) υπάρχει και είναι συχνός.",
      ]},
      { items: [
        "Να έχετε πάντα έτοιμες εργασίες επέκτασης, όχι περισσότερα από τα ίδια, αλλά βαθύτερο ή εφαρμοσμένο περιεχόμενο.",
        "Να επιτρέπεται ανεξάρτητη έρευνα σε θέματα ενδιαφέροντος του μαθητή εντός του προγράμματος.",
        "Να αξιολογείτε βάσει πρόκλησης, όχι ευκολίας, να ζητάτε πιο απαιτητικές εργασίες σε αντάλλαγμα μικρότερου όγκου.",
        "Να αναγνωρίζετε και να επικυρώνετε τη συναισθηματική ευαισθησία χωρίς παθολογοποίηση.",
      ]},
      { items: [
        "Να αναμένετε τη γονεϊκή υπερηφάνεια και να την ανακατευθύνετε: η ικανότητα είναι αυτή ακριβώς που κάνει την πλήξη πρόβλημα.",
        "Να εξηγείτε το παράδοξο: τα καλά αποτελέσματα δεν σημαίνουν ότι τα πάει καλά.",
        "Αν ο μαθητής κρύβει τις δυνατότητες για να ενταχθεί κοινωνικά, να το ονομάζετε προσεκτικά, είναι σημάδι ταλαιπωρίας.",
        "Να προτείνετε στους γονείς να εκτιμούν τη διαδικασία αντί για το αποτέλεσμα: η περιέργεια και το βάθος είναι πιο σημαντικά από εύκολους υψηλούς βαθμούς.",
      ]},
      { items: [
        "Ενδείξεις άγχους ή κατάθλιψης που συνδέονται με ακραίο τελειομανισμό.",
        "Κοινωνική απομόνωση από το αίσθημα «διαφορετικότητας» από τους συνομηλίκους.",
        "Αιφνίδια υποεπίδοση σε μαθητή που είχε προηγουμένως αναγνωριστεί ως ικανός/ή.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Κατανοεί πολύ λιγότερα από όσα φαίνεται, μπορεί να γνέφει καταφατικά χωρίς να έχει καταλάβει.",
        "Φαινομενικά χαμηλή ακαδημαϊκή επίδοση, συχνά δυσανάλογη με τις πραγματικές δυνατότητες.",
        "Σιωπή στην τάξη, μπορεί να είναι προσαρμοστική στρατηγική, όχι αδιαφορία.",
        "Μπορεί να είναι εξαντλημένος/η στο τέλος της ημέρας από την νοερή μετάφραση σε πραγματικό χρόνο.",
        "Κίνδυνος υποδιάγνωσης πραγματικών εκπαιδευτικών αναγκών αποδίδοντας τα πάντα στο γλωσσικό εμπόδιο.",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> έλλειψη νοημοσύνης ή ικανότητας.",
        "<strong>Δεν είναι</strong> απλώς θέμα χρόνου, χωρίς ρητή υποστήριξη, πολλοί μαθητές σταθεροποιούνται σε χαμηλό λειτουργικό επίπεδο.",
        "<strong>Δεν λύνεται</strong> με αυτόματη μετάφραση κατά τη διάρκεια της τάξης, είναι διαδικασία ετών.",
      ]},
      { items: [
        "Να παρέχετε υλικά με βασικό λεξιλόγιο μεταφρασμένο στη μητρική γλώσσα.",
        "Να αξιολογείτε τις γνώσεις μέσω οπτικής ή πρακτικής επίδειξης όπου είναι δυνατόν.",
        "Να συνδυάζετε με δίγλωσσο συμμαθητή για ανεπίσημη διαμεσολάβηση σε κρίσιμες στιγμές.",
        "Να αποδέχεστε αρχικές παραγωγές με γραμματικά λάθη, στην πρώτη φάση να διορθώνετε περιεχόμενο, όχι μορφή.",
      ]},
      { items: [
        "Η ίδια η συνάντηση αποτελεί εμπόδιο, οι γονείς μπορεί να μην μιλούν ελληνικά με επαρκή επάρκεια· να προετοιμάζετε γραπτά υλικά ή να ζητάτε διερμηνεία.",
        "Μην υποθέτετε ότι οι γονείς γνωρίζουν το ελληνικό εκπαιδευτικό σύστημα, να εξηγείτε τι είναι ΚΕΣΥ, τι μέτρο υποστήριξης.",
        "Να διαχωρίζετε σαφώς γλωσσικό εμπόδιο από ακαδημαϊκή ικανότητα.",
        "Να είστε ευαίσθητοι στο μεταναστευτικό πλαίσιο, οικογένειες προσφύγων ή σε αβέβαιη κατάσταση μπορεί να δυσπιστούν στα θεσμικά όργανα.",
      ]},
      { items: [
        "Ενδείξεις κοινωνικής απομόνωσης ή εκφοβισμού που συνδέονται με την ιδιότητα του αλλοδαπού μαθητή.",
        "Στασιμότητα στην απόκτηση γλώσσας μετά τον πρώτο χρόνο.",
        "Ενδείξεις τραύματος που συνδέονται με μεταναστευτικό πλαίσιο (ειδικά πρόσφυγες).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Τα δεδομένα ανηλίκων υπόκεινται σε ενισχυμένη προστασία (αρθρ. 8 ΓΚΠΔ). Η συγκατάθεση γονέων είναι υποχρεωτική.",
        "Να ελέγχετε πού αποθηκεύει δεδομένα το εργαλείο, ευρωπαϊκοί ή μη ευρωπαϊκοί διακομιστές, ανωνυμοποιημένα ή όχι.",
        "Ποτέ να μην εισάγετε πλήρη ονόματα, διευθύνσεις, αριθμούς ταυτότητας ή κλινικές διαγνώσεις σε εργαλεία γεννητικής ΑΙ.",
        "Να διακρίνετε τη θεσμική χρήση (σχολείο υπογράφει σύμβαση) από την προσωπική χρήση εκπαιδευτικού (ατομική ευθύνη).",
      ]},
      { items: [
        "Συστήματα εκπαιδευμένα κυρίως με αγγλόφωνα δεδομένα μπορεί να έχουν χειρότερη απόδοση σε άλλα γλωσσικά πλαίσια.",
        "Αυτοματοποιημένες συστάσεις μπορεί να ενισχύουν στερεότυπα φύλου, εθνικότητας ή τάξης, να ελέγχετε κριτικά.",
        "Τα μοντέλα «πρόβλεψης ακαδημαϊκού κινδύνου» συχνά αναπαράγουν υπάρχουσες ανισότητες.",
      ]},
      { items: [
        "Ο στόχος είναι η αύξηση της αυτονομίας του μαθητή, όχι η αντικατάσταση της γνωστικής εργασίας που τον αναπτύσσει.",
        "Να διακρίνετε το <strong>εργαλείο πρόσβασης</strong> (κείμενο-σε-ομιλία για δυσλεξία) από το <strong>εργαλείο υποκατάστασης</strong> (ΑΙ γράφει την έκθεση).",
        "Να αξιολογείτε τακτικά: ο μαθητής αναπτύσσει ικανότητα ή εξάρτηση από το εργαλείο;",
      ]},
      { items: [
        "<strong>1.</strong> Λύνει το εργαλείο ένα πραγματικό εμπόδιο ή δημιουργεί συντόμευση που παρακάμπτει τη μάθηση;",
        "<strong>2.</strong> Τα εισαγόμενα δεδομένα προστατεύονται και υπάρχει συγκατάθεση;",
        "<strong>3.</strong> Το αποτέλεσμα του εργαλείου θα ελεγχθεί από άνθρωπο πριν φτάσει στον μαθητή;",
        "<strong>4.</strong> Υπάρχει εναλλακτική χωρίς ΑΙ που λειτουργεί εξίσου καλά;",
        "<strong>5.</strong> Αν το εργαλείο σταματήσει να υπάρχει αύριο, ο μαθητής θα μείνει αβοήθητος;",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Να εξοπλίσουμε τους συναδέλφους για υπεύθυνη ενσωμάτωση ΑΙ στη διδασκαλία, παράγοντας υλικά προσαρμόσιμα σε πολλαπλά προφίλ μάθησης.",
        "Δεν είναι παρουσίαση, είναι συν-δημιουργία. Κάθε συμμετέχων φεύγει με τουλάχιστον έναν πόρο έτοιμο για δοκιμή.",
      ]},
      { items: [
        "<strong>0–10 λεπτά:</strong> Πλαισίωση, το πρόβλημα της ετερογενούς τάξης και γιατί το «περισσότερο ίδιο» δεν λειτουργεί.",
        "<strong>10–25 λεπτά:</strong> Χάρτης προφίλ, παρουσίαση των έξι καρτών Farol με πραγματικές (ανωνυμοποιημένες) περιπτώσεις.",
        "<strong>25–45 λεπτά:</strong> Πρακτική επίδειξη, τρία εργαλεία, τρεις χρήσεις, τρία διαφορετικά προφίλ.",
        "<strong>45–75 λεπτά:</strong> Εργασία σε ζεύγη, κάθε ζεύγος προσαρμόζει ένα υπάρχον υλικό για ένα συγκεκριμένο προφίλ.",
        "<strong>75–85 λεπτά:</strong> Γρήγορη ανταλλαγή, κάθε ζεύγος παρουσιάζει το προϊόν του σε 1 λεπτό.",
        "<strong>85–90 λεπτά:</strong> Δεσμεύσεις, κάθε συμμετέχων ορίζει ένα υλικό προς δοκιμή και προγραμματίζει ανατροφοδότηση σε 30 ημέρες.",
      ]},
      { items: [
        "Πρόσβαση στο διαδίκτυο και θεσμικοί λογαριασμοί στα εργαλεία που παρουσιάζονται.",
        "Υπάρχοντα υλικά κάθε συμμετέχοντα (ένα φύλλο εργασίας, ένα τεστ ή ένα σχέδιο μαθήματος).",
        "Εκτυπωμένες κάρτες προφίλ Farol για αναφορά.",
      ]},
      { items: [
        "Κάθε συμμετέχων παράγει τουλάχιστον ένα προσαρμοσμένο υλικό κατά τη διάρκεια της συνεδρίας.",
        "Συνεδρία ανατροφοδότησης σε 30 ημέρες με τουλάχιστον το 60% των συμμετεχόντων να αναφέρουν αποτελεσματική εφαρμογή.",
        "Τουλάχιστον ένα υλικό που παράχθηκε κατά τη συνεδρία υιοθετείται ως κοινός πόρος τμήματος.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Ο Νόμος 3699/2008 για την Ειδική Αγωγή και Εκπαίδευση αποτελεί το βασικό νομοθετικό πλαίσιο για μαθητές με αναπηρία ή/και ειδικές εκπαιδευτικές ανάγκες στην Ελλάδα.",
        "Ο Νόμος 4823/2021 (αναβάθμιση σχολείου) ενισχύει τις δομές υποστήριξης και θεσμοθετεί τα ΚΕΣΥ ως κεντρικά σημεία συντονισμού.",
        "Η Ελλάδα έχει κυρώσει τη Σύμβαση ΟΗΕ για τα δικαιώματα ατόμων με αναπηρία· η ινκλουσίβ εκπαίδευση είναι κρατική πολιτική.",
      ]},
      { items: [
        "Η παράλληλη στήριξη και η ενισχυτική διδασκαλία αποτελούν βασικές υποστηρικτικές δομές· οι γενικές προσαρμογές είναι ευθύνη κάθε εκπαιδευτικού χωρίς ειδικά έγγραφα.",
        "Διαφοροποιημένη διδασκαλία, εναλλακτικές αξιολογήσεις, στρατηγική τοποθέτηση, δεν απαιτούν γνωμάτευση για τη βασική εφαρμογή τους.",
        "Πρακτικά παραδείγματα: επιπλέον χρόνος σε αξιολογήσεις, γραπτές οδηγίες επιπλέον των προφορικών, εναλλακτική προφορική αξιολόγηση.",
      ]},
      { items: [
        "Τα ΚΕΣΥ (Κέντρα Εκπαιδευτικής και Συμβουλευτικής Υποστήριξης) αξιολογούν τις εκπαιδευτικές ανάγκες και εκδίδουν γνωματεύσεις.",
        "Το Ατομικό Εκπαιδευτικό Πρόγραμμα (ΑΕΠ) συντάσσεται από τον εκπαιδευτικό παράλληλης στήριξης σε συνεργασία με τον/την εκπαιδευτικό τάξης και τους γονείς.",
        "Ο εκπαιδευτικός παράλληλης στήριξης (ΕΠΣ) παρέχεται σε μαθητές με γνωμάτευση από ΚΕΣΥ· η υπαγωγή σε ειδικό σχολείο αποτελεί έσχατη επιλογή.",
        "Η υπογραφή των γονέων είναι απαραίτητη για το ΑΕΠ και για οποιαδήποτε αλλαγή εκπαιδευτικού πλαισίου.",
      ]},
      { items: [
        "Δεν υπάρχει ειδική νομοθεσία για μαθητές με ιδιαίτερες ικανότητες· τα ΚΕΣΥ μπορούν να αξιολογήσουν και να προτείνουν προγράμματα εμπλουτισμού.",
        "Η ευέλικτη ζώνη και οι Ολυμπιάδες αποτελούν τα κύρια θεσμικά πλαίσια ανάπτυξης ταλέντων.",
        "Στην πράξη, η αναγνώριση του υψηλού δυναμικού είναι ανεπαρκής, απαιτείται ενεργοποίηση από τον/την εκπαιδευτικό.",
      ]},
      { items: [
        "Οι τάξεις υποδοχής (ΤΥ Ι & ΤΥ ΙΙ) παρέχουν ελληνόγλωσση εκπαίδευση για νεοαφιχθέντες αλλόγλωσσους μαθητές.",
        "Το Πρόγραμμα Διαπολιτισμικής Αγωγής (ΔΑΠ) υποστηρίζει την ένταξη μαθητών διαφορετικής πολιτισμικής προέλευσης.",
        "Η γλωσσική εμπόδιο δεν αποτελεί λόγο παραπομπής σε ειδική αγωγή, πρέπει πρώτα να αποκλειστούν άλλες αιτίες.",
      ]},
      { items: [
        "<strong>Ν. 3699/2008</strong>, βασικό πλαίσιο ειδικής αγωγής.",
        "<strong>Ν. 4823/2021</strong>, αναβάθμιση σχολείου, νέα ΚΕΣΥ.",
        "<strong>ΚΕΣΥ</strong>, Κέντρα Εκπαιδευτικής και Συμβουλευτικής Υποστήριξης.",
        "<strong>ΑΕΠ</strong>, Ατομικό Εκπαιδευτικό Πρόγραμμα.",
        "<strong>Τάξεις υποδοχής ΤΥ Ι & ΤΥ ΙΙ</strong>, για αλλόγλωσσους μαθητές.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Η παιδαγωγική διαφοροποίηση σημαίνει προσαρμογή του τρόπου διδασκαλίας, όχι μείωση των προσδοκιών. Ο στόχος μάθησης μπορεί να είναι ο ίδιος για όλους τους μαθητές· αυτό που ποικίλλει είναι η διαδρομή.",
        "Το μοντέλο UDL (Καθολικός Σχεδιασμός για τη Μάθηση) προτείνει τρεις αρχές: πολλαπλά μέσα αναπαράστασης (πώς παρουσιάζεται το περιεχόμενο), πολλαπλά μέσα δράσης και έκφρασης (πώς ανταποκρίνεται ο μαθητής) και πολλαπλά μέσα δέσμευσης (τι παρακινεί τον μαθητή).",
        "Η διαφοροποίηση δεν σημαίνει δημιουργία ατομικού σχεδίου μαθήματος για κάθε μαθητή, σημαίνει δημιουργία επαρκούς ευελιξίας ώστε το ίδιο μάθημα να εξυπηρετεί διαφορετικά προφίλ μαθητών.",
      ]},
      { items: [
        "<strong>Δεν είναι</strong> μείωση του αναλυτικού προγράμματος για μαθητές με δυσκολίες.",
        "<strong>Δεν είναι</strong> πάντα η ανάθεση διαφορετικών εργασιών σε διαφορετικούς μαθητές, αυτό απομονώνει και ταξινομεί.",
        "<strong>Δεν είναι</strong> μόνο διαφοροποιημένα φύλλα εργασίας, η διαφοροποίηση περιλαμβάνει τον τρόπο που ο εκπαιδευτικός εξηγεί, ρωτά και αξιολογεί.",
      ]},
      { items: [
        "Ελεγχόμενη επιλογή: προσφέρετε 2–3 επιλογές μορφής απάντησης (γραπτή, προφορική, σχηματικό σχέδιο), όλοι οι μαθητές απαντούν στο ίδιο περιεχόμενο.",
        "Scaffolding: παρέχετε δομημένο πλαίσιο σε μαθητές με δυσκολίες· αφαιρέστε το σταδιακά καθώς αυξάνεται η αυτονομία.",
        "Ευέλικτη ομαδοποίηση: ομάδες κατά ενδιαφέρον, επίπεδο κατάκτησης ή μεικτές, εναλλαγή για να αποφευχθούν σταθερές ομάδες που γίνονται ταυτότητες.",
        "Προσαρμογές χρόνου: περισσότερος χρόνος δεν σημαίνει λιγότερη αυστηρότητα. Για μαθητές με ΔΕΠΥ ή δυσπραξία, χωρίστε την εργασία σε τμήματα με προγραμματισμένα διαλείμματα.",
        "Επίπεδο πολυπλοκότητας: για το ίδιο θέμα, δημιουργήστε εκδοχές με περισσότερη ή λιγότερη γλωσσική υποστήριξη, με παραδείγματα ή χωρίς, με οπτικές υποδείξεις ή χωρίς.",
      ]},
      { items: [
        "Αξιολογήστε τι γνωρίζει ο μαθητής, όχι πώς γράφει. Ένας μαθητής με δυσλεξία μπορεί να αποδείξει εννοιολογική κατανόηση προφορικά ή με τεχνολογική υποστήριξη.",
        "Σαφή κριτήρια αξιολόγησης που μοιράζονται πριν την εργασία επιτρέπουν στον μαθητή να γνωρίζει τι αναμένεται ανεξάρτητα από την επιλεγμένη μορφή.",
        "Το portfolio ή η αξιολόγηση βασισμένη σε αποδείξεις επιτρέπει στον μαθητή να δείξει πρόοδο με την πάροδο του χρόνου, όχι μόνο σε μία χρονική στιγμή εξέτασης.",
      ]},
      { items: [
        "Όταν η διαφοροποίηση στην τάξη δεν είναι πλέον επαρκής και ο μαθητής εξακολουθεί να δυσκολεύεται με την πρόσβαση στο πρόγραμμα σπουδών, αυτό μπορεί να σηματοδοτεί ανάγκη για εξειδικευμένη υποστήριξη.",
        "Η διαφοροποίηση δεν αντικαθιστά τα σχολικά μέτρα υποστήριξης (σχολικός ψυχολόγος, θεραπευτές, ειδική αγωγή), είναι αυτό που γίνεται συμπληρωματικά στην κανονική τάξη.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Η διαμορφωτική αξιολόγηση είναι κάθε πρακτική που συγκεντρώνει πληροφορίες για τη μάθηση κατά τη διάρκεια της διαδικασίας, και χρησιμοποιεί αυτές τις πληροφορίες για να προσαρμόσει τη διδασκαλία ή την υποστήριξη του μαθητή.",
        "Σε αντίθεση με την αθροιστική αξιολόγηση (τελικοί βαθμοί), η διαμορφωτική δεν χρειάζεται βαθμό, χρειάζεται ανατροφοδότηση.",
        "Για νευροδιαφορετικούς μαθητές, η διαμορφωτική αξιολόγηση είναι ιδιαίτερα σημαντική επειδή η επίδοση σε μια μεμονωμένη εξέταση μπορεί να μην αντικατοπτρίζει αυτό που πραγματικά γνωρίζουν.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: στο τέλος της ώρας, ο μαθητής απαντά σε μια ερώτηση σε 2 λεπτά, ο εκπαιδευτικός βλέπει αμέσως ποιος κατάλαβε και ποιος όχι.",
        "<strong>Φωτεινός σηματοδότης</strong>: πράσινο (κατάλαβα), κίτρινο (έχω αμφιβολίες), κόκκινο (δεν κατάλαβα), μπορεί να είναι φυσικές κάρτες, post-it ή ψηφιακό.",
        "<strong>Think-Pair-Share</strong>: ο μαθητής σκέφτεται ατομικά, συζητά με έναν συνεργάτη, μετά μοιράζεται με την τάξη, μειώνει το άγχος για άμεση απάντηση.",
        "<strong>Πύλη εξόδου</strong>: πριν φύγει, ο μαθητής λέει στον εκπαιδευτικό ένα πράγμα που έμαθε και μια αμφιβολία που εξακολουθεί να έχει.",
      ]},
      { items: [
        "Η αποτελεσματική ανατροφοδότηση είναι συγκεκριμένη, εφαρμόσιμη και έγκαιρη: \'στη σελίδα 2 το επιχείρημα χάνεται γιατί λείπει ο σύνδεσμος με την απόδειξη\' είναι χρήσιμο· \'θα μπορούσε να είναι καλύτερο\' δεν είναι.",
        "Για μαθητές με ΔΕΠΥ: η άμεση ανατροφοδότηση είναι πιο αποτελεσματική από την καθυστερημένη. Να μην περιμένετε μέχρι το τέλος της εργασίας.",
        "Για μαθητές με δυσλεξία: η προφορική ή ηχητική ανατροφοδότηση μπορεί να είναι πιο προσβάσιμη από εκτεταμένα γραπτά σχόλια.",
        "Αποφύγετε να συγκρίνετε μαθητές μεταξύ τους, συγκρίνετε τον μαθητή με τη δική του προηγούμενη πρόοδο.",
      ]},
      { items: [
        "ΔΕΠΥ: αξιολόγηση σε πολλαπλές σύντομες χρονικές στιγμές αντί μιας μόνο μακράς εξέτασης. Μειώστε τα αποσπαστικά ερεθίσματα στο περιβάλλον αξιολόγησης.",
        "Δυσλεξία: επιτρέψτε προφορικές απαντήσεις, επιπλέον χρόνο ή χρήση μετατροπής κειμένου σε ομιλία. Αξιολογήστε το περιεχόμενο, όχι την ορθογραφία.",
        "Αυτισμός: αξιολογήσεις με σαφείς, αδιαμφισβήτητες γραπτές οδηγίες. Προειδοποιήστε εκ των προτέρων για αλλαγές μορφής.",
        "Υψηλή νοημοσύνη: αποφύγετε αξιολογήσεις απλής αναπαραγωγής περιεχομένου, συμπεριλάβετε ερωτήσεις ανάλυσης, σύνθεσης και δημιουργίας.",
      ]},
      { items: [
        "Όταν ο μαθητής, ακόμη και με προσαρμογές αξιολόγησης, δεν μπορεί να επιδείξει μάθηση, αυτό είναι σημάδι ότι μπορεί να υπάρχει βαθύτερο εμπόδιο να διερευνηθεί με τον σχολικό ψυχολόγο.",
        "Επίμονα μοτίβα (μήνες, όχι μέρες) ειδικής δυσκολίας σε έναν τομέα πρέπει να αναφέρονται επίσημα.",
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
        "Започнете с това, което ученикът прави добре — срещата не може да започва със списък от оплаквания, иначе родителят се затваря отбранително.",
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
        "Склонно е да избягва четенето на глас; може да изглежда като незаинтересованост, докато всъщност е защитна стратегия.",
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
        "Когато целта не е да се оценява писането, съдържанието да се оценява отделно от правописа.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Затруднения с неанонсирани промени, промяна на разписание, стая, заместващ учител.",
        "Буквална комуникация, пропуска нюанси, ирония, идиоматични изрази.",
        "Сензорна чувствителност, флуоресцентна светлина, фонов шум, етикети на дрехи могат да бъдат непоносими.",
        "Фокусирани и дълбоки интереси към конкретни теми.",
        "Може да изглежда незаинтересован или далечен, когато е претоварен, не отделен.",
      ]},
      { items: [
        "<strong>Не е</strong> линейна скала (\"повече\" или \"по-малко\" аутистичен), е многоизмерен профил.",
        "<strong>Не е</strong> липса на емпатия, често е обратното, затруднение с филтрирането.",
        "<strong>Не е</strong> лошо поведение, когато рутина се наруши, е реална неврологична реакция.",
      ]},
      { items: [
        "Предупреждавайте предварително за всяка промяна в рутината, дори привидно тривиална.",
        "Правете имплицитните социални правила явни (какво се прави, какво не, кога).",
        "Разрешавайте сензорни почивки в тихо пространство при необходимост.",
        "Използвайте фокусирания интерес като входна точка към учебното съдържание.",
      ]},
      { items: [
        "Ако има диагноза, първо попитайте какво знае семейството, че работи.",
        "Ако няма диагноза, описвайте конкретни ситуации без да използвате думата \"аутизъм\" на първата среща.",
        "Признайте усилията на семейството, създаването на структура и предвидимост у дома е взискателно.",
        "Никога не сравнявайте с другите ученици, всеки спектрален профил е различен.",
      ]},
      { items: [
        "Чести кризи (\"мелтдаун\") след учебния ден.",
        "Постоянен отказ от училище, свързан със сензорно претоварване.",
        "Прогресивна социална изолация въпреки опитите за медиация.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Почерк труден, бавен, често нечетлив, не от небрежност, а поради реални двигателни затруднения.",
        "Затруднения с пространствената организация на тетрадката, управлението на материалите, последователностите от стъпки.",
        "Може да изглежда \"непохватен\", разлива чаши, удря се в мебелите, затруднен/а в спорта.",
        "Непропорционална умора след задачи, изискващи продължителна фина моторна координация.",
        "Когнитивният компонент обикновено е запазен, честа фрустрация между знанието и демонстрирането.",
      ]},
      { items: [
        "<strong>Не е</strong> мързел или липса на старание.",
        "<strong>Не е</strong> само лош почерк, засяга планирането и последователността на задачите.",
        "<strong>Не се решава</strong> с \"повече практикуване на писането\".",
      ]},
      { items: [
        "Разрешавайте използване на клавиатура/таблет при обширни писмени задачи.",
        "Намалявайте механичното преписване от дъската, предоставяйте бележки, когато е уместно.",
        "Предоставяйте явни контролни списъци за задачи с много стъпки.",
        "Оценявайте продукта по съдържание, не по физическо представяне.",
      ]},
      { items: [
        "Обяснявайте диспраксията с прост език, повечето родители никога не са чували термина.",
        "Нечетливият почерк е най-голямата точка на конфликт, показването, че оценяването сега цени съдържанието, помага.",
        "Предлагайте практически инструменти за вкъщи: гласово диктуване за бележки, клавиатура за по-обемни работи.",
        "Ако има история с етикети \"мързелив/а\" от предишни години, назовете го директно.",
      ]},
      { items: [
        "Пълен отказ от писмена продукция.",
        "Социална изолация в контекст на физическа активност.",
        "Признаци на соматизирана тревожност преди писмени оценявания.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Завършва задачите за минути, докато класът отнема цял час.",
        "Задава въпроси извън обхвата на урока, или активно оспорва това, което се преподава.",
        "Може да изглежда незаинтересован, недисциплиниран или апатичен, често признаци на хронична скука.",
        "Изразена емоционална чувствителност; може да е тревожен, перфекционист или несправедливо взискателен към себе си.",
        "Реален риск от недостатъчно представяне, научава се да крие способностите си, за да не се откроява социално.",
      ]},
      { items: [
        "<strong>Не е</strong> синоним на добро поведение или добри резултати, много надарени ученици имат средни оценки поради незаинтересованост.",
        "<strong>Не е</strong> \"не се нуждае от помощ\", нуждае се от различни предизвикателства, не от по-малко внимание.",
        "<strong>Не е</strong> несъвместимо с невроразличието, двойно изключителните (2e) съществуват и са чести.",
      ]},
      { items: [
        "Винаги имайте готови задачи за разширение, не повече от същото, а по-задълбочено или приложено съдържание.",
        "Разрешавайте независимо проучване на теми от интерес на ученика в рамките на учебната програма.",
        "Оценявайте по предизвикателство, не по лекота, изисквайте по-взискателни работи срещу по-малък обем.",
        "Признавайте и утвърждавайте емоционалната чувствителност без патологизиране.",
      ]},
      { items: [
        "Предвидете родителската гордост и я пренасочете: именно способността прави скуката проблем.",
        "Обяснете парадокса: добрите резултати не означават, че всичко е наред.",
        "Ако ученикът крие способностите си, за да се впише социално, назовете го внимателно, това е знак на страдание.",
        "Предложете на родителите да ценят процеса вместо резултата: любопитството и дълбочината са по-важни от лесните високи оценки.",
      ]},
      { items: [
        "Признаци на тревожност или депресия, свързани с екстремен перфекционизъм.",
        "Социална изолация от чувство за \"различност\" спрямо връстниците.",
        "Внезапно влошаване на представянето при ученик, предишно идентифициран като способен.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Разбира много по-малко, отколкото изглежда, може да кима утвърдително без да е разбрал/а.",
        "Привидно ниско академично представяне, често несъразмерно с реалните способности.",
        "Мълчание в класа, може да е адаптивна стратегия, не незаинтересованост.",
        "Може да е изтощен/а в края на деня от мисленото превеждане в реално време.",
        "Риск от недостатъчна диагностика на реални образователни потребности, приписвайки всичко на езиковата бариера.",
      ]},
      { items: [
        "<strong>Не е</strong> липса на интелигентност или способности.",
        "<strong>Не е</strong> само въпрос на време, без явна подкрепа много ученици се стабилизират на ниско функционално ниво.",
        "<strong>Не се решава</strong> с автоматичен превод по време на час, това е процес от години.",
      ]},
      { items: [
        "Предоставяйте материали с ключов речник, преведен на майчиния език.",
        "Оценявайте знанията чрез визуална или практическа демонстрация, когато е възможно.",
        "Сдвоявайте с двуезичен съученик за неформална медиация в критични моменти.",
        "Приемайте начални резултати с граматически грешки, в първата фаза коригирайте съдържанието, не формата.",
      ]},
      { items: [
        "Самата среща е бариера, родителите може да не говорят достатъчно добре български; подгответе писмени материали или осигурете превод.",
        "Не приемайте, че родителите познават българската образователна система, обяснете какво е РЦППО, какво е мярка за подкрепа.",
        "Ясно разделяйте езиковата бариера от академичните способности.",
        "Бъдете чувствителни към миграционния контекст, бежански семейства или такива в несигурно положение може да не се доверяват на институциите.",
      ]},
      { items: [
        "Признаци на социална изолация или тормоз, свързани с положението на чуждестранен ученик.",
        "Застой в езиковото усвояване след първата година.",
        "Признаци на травма, свързани с миграционния контекст (особено бежанци).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Данните на непълнолетни подлежат на засилена защита (чл. 8 ОРЗД). Съгласието на родителите е задължително.",
        "Проверявайте къде инструментът съхранява данните, европейски или неевропейски сървъри, анонимизирани или не.",
        "Никога не въвеждайте пълни имена, адреси, идентификационни номера или клинични диагнози в генеративни AI инструменти.",
        "Разграничавайте институционалното използване (училището подписва договор) от личното използване на учителя (индивидуална отговорност).",
      ]},
      { items: [
        "Системи, обучени предимно върху англоезични данни, може да имат по-слабо представяне в други езикови контексти.",
        "Автоматичните препоръки могат да усилват стереотипи за пол, етничност или класа, проверявайте критично.",
        "Моделите за \"прогнозиране на академичен риск\" често възпроизвеждат съществуващи неравенства.",
      ]},
      { items: [
        "Целта е увеличаване на автономията на ученика, не замяна на когнитивната работа, която го развива.",
        "Разграничавайте <strong>инструмент за достъп</strong> (текст-в-реч за дислексия) от <strong>инструмент за заместване</strong> (AI пише съчинението).",
        "Редовно оценявайте: ученикът развива компетентност или зависимост от инструмента?",
      ]},
      { items: [
        "<strong>1.</strong> Инструментът решава ли реална бариера или създава пряк път, заобикалящ ученето?",
        "<strong>2.</strong> Въведените данни защитени ли са и налице ли е съгласие?",
        "<strong>3.</strong> Резултатът от инструмента ще бъде ли проверен от човек преди да стигне до ученика?",
        "<strong>4.</strong> Има ли алтернатива без AI, която работи еднакво добре?",
        "<strong>5.</strong> Ако инструментът спре да съществува утре, ученикът ще остане ли без помощ?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Да подготвим колегите за отговорна интеграция на AI в обучението, произвеждайки материали, адаптируеми към множество профили на учене.",
        "Не е презентация, е съвместно творчество. Всеки участник напуска с поне един ресурс, готов за тестване.",
      ]},
      { items: [
        "<strong>0–10 мин:</strong> Рамкиране, проблемът с хетерогенния клас и защо повече от същото не работи.",
        "<strong>10–25 мин:</strong> Карта на профилите, представяне на шестте карти Farol с реални (анонимизирани) случаи.",
        "<strong>25–45 мин:</strong> Практическа демонстрация, три инструмента, три случая на употреба, три различни профила.",
        "<strong>45–75 мин:</strong> Работа по двойки, всяка двойка адаптира съществуващ материал за конкретен профил.",
        "<strong>75–85 мин:</strong> Бързо споделяне, всяка двойка представя своя продукт за 1 минута.",
        "<strong>85–90 мин:</strong> Ангажименти, всеки участник определя един материал за тестване и планира сесия за обратна връзка след 30 дни.",
      ]},
      { items: [
        "Достъп до интернет и институционални акаунти в демонстрираните инструменти.",
        "Съществуващи материали на всеки участник (работен лист, тест или план за урок).",
        "Отпечатани карти с профили Farol за справка.",
      ]},
      { items: [
        "Всеки участник произвежда поне един адаптиран материал по време на сесията.",
        "Сесия за обратна връзка след 30 дни с поне 60% от участниците, докладващи ефективно прилагане.",
        "Поне един материал, произведен по време на сесията, се приема като споделен ресурс на отдела.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Законът за предучилищното и училищното образование (ЗПУО, ДВ бр. 79/2015 г.) установява приобщаващото образование като принцип и задължение на всяко училище в България.",
        "Наредбата за приобщаващото образование (ДВ бр. 86/2016 г.) урежда дейността на екипите за подкрепа и видовете подкрепящи мерки.",
        "България е ратифицирала Конвенцията на ООН за правата на хората с увреждания; приобщаващото образование е национална политика.",
      ]},
      { items: [
        "Приобщаващото образование се осъществява чрез екипна работа и диференциран подход, всеки учител може да прилага базови адаптации без специален документ.",
        "Диференцирано преподаване, адаптирани оценявания, стратегично разполагане в класа, не изискват официално решение за прилагане.",
        "Практически примери: допълнително време при оценявания, писмени инструкции допълващи устните, алтернативно устно оценяване.",
      ]},
      { items: [
        "Екипът за подкрепа на личностното развитие (ЕПЛР) в училище координира подкрепата и включва педагог, психолог, логопед и ресурсен учител.",
        "Индивидуалният образователен план (ИОП) се изготвя от ЕПЛР в сътрудничество с родителите и е задължителен за всички преподаватели.",
        "Регионалният център за подкрепа на процеса на приобщаващото образование (РЦППО) предоставя специализирана методическа подкрепа.",
        "Подписът на родителите е задължителен за ИОП; годишен преглед се изисква.",
      ]},
      { items: [
        "Деца с изявени дарби са обхванати от Закона за закрила на детето (чл. 11а) и Наредба № 2 за работа с надарени ученици.",
        "Специализирани паралелки, творчески конкурси и олимпиади са основните инструменти за развитие на талантите.",
        "В практиката идентификацията на надареност е недостатъчна, ЕПЛР може да насочи за допълнителна оценка.",
      ]},
      { items: [
        "Ученици с друг майчин език получават допълнителна езикова подкрепа по български чрез РЦППО и образователен медиатор.",
        "Езиковата бариера не е основание за поставяне в специална образователна среда, необходимо е да се изключат други причини за затруднения.",
        "При необходимост от превод за среща с родители, осигуряването на такъв е отговорност на приемащото училище.",
      ]},
      { items: [
        "<strong>ЗПУО (2015 г.)</strong>, основна рамка за приобщаващо образование.",
        "<strong>Наредба приобщаващо образование (2016 г.)</strong>, ЕПЛР и ИОП.",
        "<strong>ЕПЛР</strong>, Екип за подкрепа на личностното развитие.",
        "<strong>ИОП</strong>, Индивидуален образователен план.",
        "<strong>РЦППО</strong>, Регионален център за подкрепа на приобщаващото образование.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Педагогическата диференциация означава адаптиране на начина на преподаване, не намаляване на очакванията. Учебната цел може да бъде еднаква за всички ученици; варира пътят.",
        "Моделът UDL (Универсален дизайн за учене) предлага три принципа: множество средства за представяне (как се представя съдържанието), множество средства за действие и изразяване (как ученикът реагира) и множество средства за ангажиране (какво мотивира ученика).",
        "Диференцирането не означава създаване на индивидуален план на урока за всеки ученик, означава създаване на достатъчна гъвкавост, така че един и същи урок да служи на различни профили на ученици.",
      ]},
      { items: [
        "<strong>Не е</strong> редуциране на учебната програма за ученици с трудности.",
        "<strong>Не е</strong> постоянно задаване на различни задачи на различни ученици, това изолира и поставя етикети.",
        "<strong>Не е</strong> само диференцирани работни листове, диференциацията включва начина, по който учителят обяснява, пита и оценява.",
      ]},
      { items: [
        "Контролиран избор: предлагайте 2–3 варианта за формат на отговор (писмен, устен, схематична рисунка), всички ученици отговарят на едно и също съдържание.",
        "Scaffolding: осигурявайте структурирана рамка на ученици с трудности; постепенно я премахвайте с нарастващата самостоятелност.",
        "Гъвкаво групиране: групи по интерес, ниво на овладяване или смесени, редувайте ги, за да избегнете фиксирани групи, които стават идентичности.",
        "Времеви корекции: повече време не означава по-малка строгост. За ученици с ADHD или диспраксия разделете задачата на сегменти с планирани почивки.",
        "Ниво на сложност: за едно и също тема създавайте версии с повече или по-малко езикова поддръжка, с или без примери, с или без визуални подсказки.",
      ]},
      { items: [
        "Оценявайте какво знае ученикът, а не как пише. Ученик с дислексия може да демонстрира концептуално владеене устно или с технологична поддръжка.",
        "Ясни критерии за оценяване, споделени преди задачата, позволяват на ученика да знае какво се очаква независимо от избрания формат.",
        "Портфолиото или оценяването на база доказателства позволява на ученика да показва напредък с течение на времето, а не само в един момент на изпитване.",
      ]},
      { items: [
        "Когато диференциацията в клас престане да бъде достатъчна и ученикът продължава да няма достъп до учебната програма, това може да сигнализира нужда от специализирана подкрепа.",
        "Диференциацията не замества училищните мерки за подкрепа (училищен психолог, терапевти, специално образование), това е онова, което се случва допълнително в редовния клас.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Формативното оценяване е всяка практика, която събира информация за ученето по време на процеса, и използва тази информация за адаптиране на преподаването или подкрепата на ученика.",
        "За разлика от суматвното оценяване (крайни оценки), формативното не се нуждае от оценка, нуждае се от обратна връзка.",
        "За невродивергентни ученици формативното оценяване е особено важно, защото представянето на еднократен тест може да не отразява това, което всъщност знаят.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: в края на урока ученикът отговаря на въпрос за 2 минути, учителят веднага вижда кой е разбрал и кой не.",
        "<strong>Светофар</strong>: зелено (разбрах), жълто (имам съмнения), червено (не разбрах), могат да бъдат физически карти, post-it или цифрово.",
        "<strong>Think-Pair-Share</strong>: ученикът мисли индивидуално, обсъжда с партньор, после споделя с класа, намалява тревожността от директен отговор.",
        "<strong>Изходна врата</strong>: преди да излезе, ученикът казва на учителя едно нещо, което е научил, и едно съмнение, което все още има.",
      ]},
      { items: [
        "Ефективната обратна връзка е конкретна, приложима и навременна: \'на страница 2 аргументът се губи, защото липсва връзката с доказателството\' е полезно; \'можеше да е по-добре\' не е.",
        "За ученици с ADHD: незабавната обратна връзка е по-ефективна от отложената. Да не се чака до края на задачата.",
        "За ученици с дислексия: устната или аудио обратна връзка може да е по-достъпна от обширните писмени коментари.",
        "Избягвайте да сравнявате ученици помежду им, сравнявайте ученика с неговото собствено предишно развитие.",
      ]},
      { items: [
        "ADHD: оценяване в множество кратки моменти вместо един дълъг тест. Намалете разсейващите стимули в средата за оценяване.",
        "Дислексия: разрешете устни отговори, допълнително време или използване на преобразуване на текст в реч. Оценявайте съдържанието, а не правописа.",
        "Аутизъм: оценявания с ясни, недвусмислени писмени инструкции. Предупреждавайте предварително за промени в формата.",
        "Надареност: избягвайте оценявания на просто възпроизвеждане на съдържание, включете въпроси за анализ, синтез и създаване.",
      ]},
      { items: [
        "Когато дори с адаптации на оценяването ученикът не може да демонстрира учене, това е знак, че може да има по-дълбока пречка за изследване с училищния психолог.",
        "Устойчиви модели (месеци, не дни) на специфична трудност в дадена област трябва да бъдат официално докладвани.",
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
        "Jei siūloma įvertinimas, pateikti jį kaip pagalbą, o ne kaip bausmę: „yra pagalba, kuri jam (jai) gali labai padėti“, o ne „jį (ją) reikia įvertinti“.",
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
        "Kai tikslas nėra įvertinti rašymą, turinį vertinti atskirai nuo rašybos.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Sunkumai dėl nepranešytų pokyčių, tvarkaraščio, kambario, pakaitinio mokytojo pakeitimas.",
        "Pažodinė komunikacija, praleidžia niuansus, ironiją, idiomatinius posakius.",
        "Jutiminis jautrumas, fluorescencinė šviesa, foninis triukšmas, drabužių etiketės gali būti netoleruojami.",
        "Fokusuoti ir gilūs interesai konkrečiomis temomis.",
        "Gali atrodyti nesusidomėjęs ar tolimas, kai yra perkrautas, o ne atsijungęs.",
      ]},
      { items: [
        "<strong>Tai nėra</strong> tiesinė skalė (\"labiau\" ar \"mažiau\" autiškas), tai daugiamatis profilis.",
        "<strong>Tai nėra</strong> empatijos trūkumas, dažnai priešingai, sunkumai filtruojant.",
        "<strong>Tai nėra</strong> blogas elgesys, kai nutrūksta rutina, tai tikra neurologinė reakcija.",
      ]},
      { items: [
        "Iš anksto informuokite apie bet kokį rutinos pakeitimą, net iš pažiūros nereikšmingą.",
        "Padarykite numanomas socialines taisykles aiškias (ką daryti, ko nedaryti, kada).",
        "Leiskite jutimines pertraukas tylioje erdvėje, kai reikia.",
        "Naudokite sutelktą susidomėjimą kaip įėjimo tašką į mokymo programos turinį.",
      ]},
      { items: [
        "Jei yra diagnozė, pirmiausia paklauskite, ką šeima žino, kad veikia.",
        "Jei nėra diagnozės, apibūdinkite konkrečias situacijas nenaudodami žodžio \"autizmas\" pirmame susitikime.",
        "Įvertinkite šeimos pastangas, struktūros ir nuspėjamumo kūrimas namuose yra reiklus.",
        "Niekada nelyginkite su kitais mokiniais, kiekvienas spektro profilis yra skirtingas.",
      ]},
      { items: [
        "Dažnos krizės (\"meltdown\") po mokyklos dienos.",
        "Nuolatinis mokyklos atsisakymas, susijęs su jutimų perkrova.",
        "Progresuojanti socialinė izoliacija, nepaisant tarpininkavimo bandymų.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Rašysena sunki, lėta, dažnai neįskaitoma, ne dėl aplaidumo, o dėl tikrų motorinių sunkumų.",
        "Sunkumai erdvinį sąsiuvinio organizuojant, valdant medžiagas, atliekant žingsnių sekas.",
        "Gali atrodyti \"nerangus\", išverčia taures, atsitrenkia į baldus, sunkumai sportuojant.",
        "Neproporcingas nuovargis po užduočių, reikalaujančių ilgalaikio smulkiosios motorikos koordinacijos.",
        "Kognityvinė sudedamoji dažniausiai išlikusi, dažna frustracija tarp žinojimo ir gebėjimo parodyti.",
      ]},
      { items: [
        "<strong>Tai nėra</strong> tingumas ar pastangų trūkumas.",
        "<strong>Tai nėra</strong> tik blogas rašysena, tai paveikia planavimą ir užduočių seką.",
        "<strong>To neišsprendžia</strong> \"daugiau praktikuoti rašymą\".",
      ]},
      { items: [
        "Leiskite naudoti klaviatūrą/planšetinį kompiuterį atliekant didelius rašytinius darbus.",
        "Mažinkite mechaninį nurašymą nuo lentos, pateikite užrašus, kai tinka.",
        "Pateikite aiškius kontrolinius sąrašus užduotims su keliais žingsniais.",
        "Vertinkite produktą pagal turinį, o ne fizinę pateiktį.",
      ]},
      { items: [
        "Paaiškinkite, kas yra dispraksija, paprastais žodžiais, dauguma tėvų šio termino niekada negirdėjo.",
        "Neįskaitoma rašysena yra didžiausias konflikto taškas, parodymas, kad dabar vertinime vertinamas turinys, padeda.",
        "Siūlykite praktinius namų įrankius: balso diktuotojas užrašams, klaviatūra didesnių darbų.",
        "Jei ankstesniais metais buvo etikečių \"tingus/a\", pavadinkite tai tiesiogiai.",
      ]},
      { items: [
        "Visiškas rašytinės produkcijos atsisakymas.",
        "Socialinė izoliacija fizinės veiklos kontekstuose.",
        "Somatizuotos nerimo požymiai prieš rašytinius vertinimus.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Baigia užduotis per kelias minutes, kai klasei prireikia viso pamokos laiko.",
        "Užduoda klausimus, peržengiančius pamokos ribas, arba aktyviai ginčija tai, kas mokoma.",
        "Gali atrodyti nesusidomėjęs, nedrausmingas ar apatiškas, dažnai lėtinio nuobodulio požymiai.",
        "Ryškus emocinis jautrumas; gali būti nerimo, perfekcionizmo ar neteisingai sau reiklus.",
        "Tikra nepakankamo pasiekimo rizika, mokosi slėpti gebėjimus, kad neišsiskirtų socialiai.",
      ]},
      { items: [
        "<strong>Tai nėra</strong> gero elgesio ar gerų rezultatų sinonimas, daugelis gabių mokinių turi vidutinius pažymius dėl nesusidomėjimo.",
        "<strong>Tai nėra</strong> \"nereikia pagalbos\", reikia skirtingų iššūkių, ne mažiau dėmesio.",
        "<strong>Tai nėra</strong> nesuderinama su neurodivergencija, dvigubai išskirtiniai (2e) egzistuoja ir yra dažni.",
      ]},
      { items: [
        "Visada turėkite paruoštas pratęsimo užduotis, ne daugiau to paties, o gilesnį ar taikomą turinį.",
        "Leiskite savarankišką tyrimą domimomis temomis mokymosi programos ribose.",
        "Vertinkite pagal iššūkį, o ne lengvumą, prašykite sudėtingesnių darbų mainais už mažesnį kiekį.",
        "Atpažinkite ir patvirtinkite emocinį jautrumą nepatologizuodami.",
      ]},
      { items: [
        "Numatykite tėvų pasididžiavimą ir nukreipkite jį: kaip tik gebėjimas nuobodulį paverčia problema.",
        "Paaiškinkite paradoksą: geri rezultatai nereiškia, kad viskas gerai.",
        "Jei mokinys slepia gebėjimus, norėdamas socialiai integruotis, pavadinkite tai atsargiai, tai kančios ženklas.",
        "Siūlykite tėvams vertinti procesą, o ne rezultatą: smalsumas ir gilumas svarbiau nei lengvi aukšti pažymiai.",
      ]},
      { items: [
        "Nerimo ar depresijos požymiai, susiję su kraštutinumu perfekcionizmu.",
        "Socialinė izoliacija dėl jausmo, kad esi \"kitoks\" nei bendraamžiai.",
        "Staigus pasiekimų pablogėjimas mokiniui, anksčiau identifikuotam kaip gabiam.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Supranta daug mažiau, nei atrodo, gali linkčioti pritardamas, nesupratęs.",
        "Iš pažiūros žemi akademiniai pasiekimai, dažnai neproporcingi tikroms galimybėms.",
        "Tyla klasėje, gali būti prisitaikymo strategija, o ne nesusidomėjimas.",
        "Dienos pabaigoje gali būti išsekęs dėl realaus laiko mentalinio vertimo.",
        "Tikrų ugdymosi poreikių (disleksija, ADHD ir kt.) nepakankamos diagnozės rizika, priskiriant viską kalbos barjerui.",
      ]},
      { items: [
        "<strong>Tai nėra</strong> intelekto ar gebėjimų trūkumas.",
        "<strong>Tai nėra</strong> tik laiko klausimas, be aiškios paramos daugelis mokinių stabilizuojasi žemame funkciniame lygyje.",
        "<strong>To neišsprendžia</strong> automatinis vertimas pamokos metu, tai metų procesas.",
      ]},
      { items: [
        "Pateikite medžiagą su pagrindiniu žodynu, išverstu į gimtąją kalbą.",
        "Vertinkite žinias per vizualinę ar praktinę demonstraciją, kai įmanoma.",
        "Supažindinkite su dvikalbe bendraamže neformaliems tarpininkavimui kritiniais momentais.",
        "Priimkite pradines produkcijas su gramatinėmis klaidomis, pirmajame etape taisykite turinį, ne formą.",
      ]},
      { items: [
        "Pats susitikimas yra kliūtis, tėvai gali kalbėti lietuviškai nepakankamai gerai; iš anksto parenkite rašytinius materiaus ar užtikrinkite vertimą.",
        "Nedarykite prielaidos, kad tėvai pažįsta Lietuvos švietimo sistemą, paaiškinkite, kas yra PPT, kas yra paramos priemonė.",
        "Aiškiai atskirkite kalbos barjerą nuo akademinių gebėjimų.",
        "Jautriai elgkitės su migracijos kontekstu, pabėgėlių šeimos gali nepasitikėti institucijomis.",
      ]},
      { items: [
        "Socialinės izoliacijos ar patyčių požymiai, susiję su užsienio mokinio statusu.",
        "Kalbos įsisavinimo stagnacija po pirmų metų.",
        "Traumos požymiai, susiję su migracijos kontekstu (ypač pabėgėliai).",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Nepilnamečių duomenys turi sustiprintą apsaugą (BDAR 8 str.). Tėvų sutikimas yra privalomas.",
        "Patikrinkite, kur įrankis saugo duomenis, Europos ar ne Europos serveriai, anoniminiai ar ne.",
        "Niekada neįveskite pilnų vardų, adresų, asmens kodų ar klinikinių diagnozių į generatyvinius AI įrankius.",
        "Skirkite institucinį naudojimą (mokykla pasirašo sutartį) nuo asmeninio mokytojo naudojimo (individuali atsakomybė).",
      ]},
      { items: [
        "Sistemos, apmokytos daugiausia anglakalbiais duomenimis, gali veikti blogiau kitokiuose kalbiniuose kontekstuose.",
        "Automatinės rekomendacijos gali sustiprinti lyties, etninės ar klasės stereotipus, kritiškai tikrinkite.",
        "\"Akademinės rizikos prognozavimo\" modeliai dažnai atkuria esamas nelygoves.",
      ]},
      { items: [
        "Tikslas yra didinti mokinio autonomiją, o ne pakeisti kognityvinį darbą, kuris jį ugdo.",
        "Skirkite <strong>prieigos įrankį</strong> (tekstas-kalbai disleksikai) nuo <strong>pakaitinio įrankio</strong> (AI rašo referatą).",
        "Reguliariai vertinkite: mokinys ugdo kompetenciją ar priklausomybę nuo įrankio?",
      ]},
      { items: [
        "<strong>1.</strong> Ar įrankis išsprendžia realią kliūtį, ar sukuria nuorodą, apeinančią mokymąsi?",
        "<strong>2.</strong> Ar įvesti duomenys apsaugoti ir ar yra sutikimas?",
        "<strong>3.</strong> Ar įrankio rezultatą patikrins žmogus prieš pasiekiant mokinį?",
        "<strong>4.</strong> Ar yra be AI alternatyva, kuri veikia vienodai gerai?",
        "<strong>5.</strong> Jei įrankis neegzistuotų rytoj, ar mokinys liktų be pagalbos?",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Parengti kolegas atsakingai AI integracijai mokymo, gaminant medžiagas, pritaikomas keliems mokymosi profiliams.",
        "Tai ne pristatymas, tai bendras kūrimas. Kiekvienas dalyvis išeina turėdamas bent vieną išteklių, paruoštą išbandyti.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Rėminimas, heterogeniškos klasės problema ir kodėl daugiau to paties neveikia.",
        "<strong>10–25 min:</strong> Profilių žemėlapis, šešių Farol kortelių pristatymas su realiais (anoniminiais) atvejais.",
        "<strong>25–45 min:</strong> Praktinė demonstracija, trys įrankiai, trys naudojimo atvejai, trys skirtingi profiliai.",
        "<strong>45–75 min:</strong> Darbas poromis, kiekviena pora pritaiko esamą medžiagą konkrečiam profiliui.",
        "<strong>75–85 min:</strong> Greitas pasidalijimas, kiekviena pora per 1 minutę pristato savo produktą.",
        "<strong>85–90 min:</strong> Įsipareigojimai, kiekvienas dalyvis apibrėžia vieną medžiagą išbandyti ir planuoja atsiliepimų sesiją po 30 dienų.",
      ]},
      { items: [
        "Prieiga prie interneto ir institucinių paskyrų demonstruojamų įrankių.",
        "Kiekvieno dalyvio turima medžiaga (darbo lapas, testas ar pamokos planas).",
        "Atspausdintos Farol profilių kortelės konsultacijai.",
      ]},
      { items: [
        "Kiekvienas dalyvis sesijos metu sukuria bent vieną pritaikytą medžiagą.",
        "Atsiliepimų sesija po 30 dienų su bent 60% dalyvių, pranešančių apie efektyvų įgyvendinimą.",
        "Bent viena sesijos metu sukurta medžiaga priimama kaip bendras katedros išteklius.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Lietuvos Respublikos švietimo įstatymas (2011 m. Nr. XI-1281) nustato specialiųjų ugdymosi poreikių (SUP) tenkinimo principus ir mokyklos pareigas.",
        "Mokinio specialiųjų ugdymosi poreikių įvertinimo ir specialiosios pagalbos skyrimo tvarkos aprašas (2011) reglamentuoja vertinimo procesą.",
        "Lietuva ratifikavo JT neįgaliųjų teisių konvenciją; inkliuzinis ugdymas yra valstybinė politika.",
      ]},
      { items: [
        "Individualizuotas ugdymas ir diferenciacija yra kiekvieno mokytojo pareiga be jokios specialios dokumentacijos.",
        "Bazinės adaptacijos (papildomas laikas, rašytinės instrukcijos, strateginis sėdimų vietų paskyrimas) nereikalauja oficialaus sprendimo.",
        "Specialioji pedagoginė pagalba (logopedo, specialiojo pedagogo) teikiama pagal poreikį, mokyklos specialistų sprendimu.",
      ]},
      { items: [
        "Pedagoginė psichologinė tarnyba (PPT) atlieka specialiųjų ugdymosi poreikių įvertinimą ir skiria pagalbą.",
        "Individualizuota ugdymosi programa (IUP) sudaroma drauge su PPT, tėvais ir mokytojais; privaloma visiems mokytojams.",
        "Mokyklos psichologas, specialusis pedagogas ir logopedas koordinuoja pagalbą ir teikia metodinę paramą.",
        "Tėvų sutikimas reikalingas IUP; kasmetinis peržiūrėjimas privalomas.",
      ]},
      { items: [
        "Talentų akademija ir Jaunųjų talentų programa teikia papildomą paramą gabiems mokiniams.",
        "Pagreičio (klasių praleidimo) galimybė egzistuoja pagal įstatymą, tačiau naudojama retai.",
        "Praktikoje gabių mokinių atpažinimas yra nepakankamas, PPT gali atlikti gabumo įvertinimą.",
      ]},
      { items: [
        "Pasirengimo klasės yra skirtos mokiniams, nemokantis lietuvių kalbos.",
        "Lietuvių kalba kaip svetimoji kalbą mokomasi papildomose pamokose; mokyklos psichologas koordinuoja adaptaciją.",
        "Kalbos barjeras nėra pagrindas specialiajam ugdymui, pirmiau reikia pašalinti kitas priežastis.",
      ]},
      { items: [
        "<strong>Švietimo įstatymas 2011</strong>, SUP ir inkliuzinio ugdymo pagrindas.",
        "<strong>PPT</strong>, Pedagoginė psichologinė tarnyba.",
        "<strong>IUP</strong>, individualizuota ugdymosi programa.",
        "<strong>Specialusis pedagogas</strong>, koordinuoja pagalbą mokykloje.",
        "<strong>Pasirengimo klasė</strong>, lietuvių kalbos parama naujai atvykusiems.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagoginis diferencijavimas reiškia mokymo būdo pritaikymą, ne lūkesčių mažinimą. Mokymosi tikslas gali būti vienodas visiems mokiniams; skiriasi kelias.",
        "UDL modelis (Universalus mokymosi dizainas) siūlo tris principus: įvairias reprezentacijos priemones (kaip pateikiamas turinys), įvairias veikimo ir išraiškos priemones (kaip mokinys reaguoja) ir įvairias įsitraukimo priemones (kas motyvuoja mokinį).",
        "Diferencijuoti nereiškia kiekvienam mokiniui kurti individualų pamokos planą, tai reiškia sukurti pakankamai lankstumo, kad ta pati pamoka tarnautų skirtingiems mokinių profiliams.",
      ]},
      { items: [
        "<strong>Tai nėra</strong> ugdymo programos mažinimas sunkumų turintiems mokiniams.",
        "<strong>Tai nėra</strong> visada skirtingų užduočių skyrimas skirtingiems mokiniams, tai izoliuoja ir etiketuoja.",
        "<strong>Tai nėra</strong> vien tik diferencijuoti darbo lapai, diferencijavimas apima tai, kaip mokytojas aiškina, klausia ir vertina.",
      ]},
      { items: [
        "Kontroliuotas pasirinkimas: siūlyti 2–3 atsakymo formato variantus (raštu, žodžiu, schematinis piešinys), visi mokiniai atsako į tą patį turinį.",
        "Scaffolding: suteikti struktūruotą pagrindą sunkumų turintiems mokiniams; palaipsniui jį šalinti, augant savarankiškumui.",
        "Lankstus grupavimas: grupės pagal susidomėjimą, įsisavinimo lygį arba mišrios, kaitalioti, kad išvengtume fiksuotų grupių, tampančių tapatybėmis.",
        "Laiko koregavimas: daugiau laiko nereiškia mažiau griežtumo. ADHD ar dispraksijos mokiniams padalinkite užduotį į segmentus su suplanuotomis pertraukomis.",
        "Sudėtingumo lygis: tai pačiai temai kurkite versijas su daugiau ar mažiau kalbinės paramos, su pavyzdžiais ar be, su vizualinėmis užuominomis ar be.",
      ]},
      { items: [
        "Vertinkite, ką mokinys žino, o ne kaip rašo. Disleksijos turintis mokinys gali žodžiu arba su technologine pagalba pademonstruoti sąvokinį įvaldymą.",
        "Aiškūs vertinimo kriterijai, pateikiami prieš užduotį, leidžia mokiniui žinoti, ko tikimasi nepriklausomai nuo pasirinkto formato.",
        "Portfolio arba įrodymais pagrįstas vertinimas leidžia mokiniui parodyti pažangą laikui bėgant, o ne tik vienu egzamino momentu.",
      ]},
      { items: [
        "Kai diferencijuotas mokymasis klasėje nebepakanka ir mokinys vis dar negali pasiekti ugdymo programos, tai gali signalizuoti apie poreikį specializuotai pagalbai.",
        "Diferencijavimas nepakeičia mokyklinių paramos priemonių (mokyklos psichologas, terapeutai, specialusis ugdymas), tai kas papildomai vyksta įprastoje klasėje.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formuojamasis vertinimas yra bet kokia praktika, kuri renka informaciją apie mokymąsi proceso metu, ir naudoja tą informaciją mokymo ar pagalbos mokiniui pritaikymui.",
        "Skirtingai nuo apibendrinamojo vertinimo (galutiniai pažymiai), formuojamajam nereikia pažymio, reikia grįžtamojo ryšio.",
        "Neurodivergenčių mokinių atveju formuojamasis vertinimas ypač svarbus, nes atlikimas vienkartinio testo gali neatspindėti to, ką jie iš tikrųjų žino.",
      ]},
      { items: [
        "<strong>Išėjimo bilietas</strong>: pamokos pabaigoje mokinys 2 minutėse atsako į klausimą, mokytojas iš karto mato, kas suprato ir kas ne.",
        "<strong>Šviesoforas</strong>: žalia (supratau), geltona (turiu abejonių), raudona (nesupratau), gali būti fizinės kortelės, lipdukai ar skaitmeninė forma.",
        "<strong>Think-Pair-Share</strong>: mokinys mąsto individualiai, aptaria su partneriu, tada dalijasi su klase, mažina nerimą dėl tiesioginio atsakymo.",
        "<strong>Išėjimo vartai</strong>: prieš išeidamas mokinys pasakoja mokytojui vieną dalyką, kurio išmoko, ir vieną abejonę, kurią dar turi.",
      ]},
      { items: [
        "Veiksmingas grįžtamasis ryšys yra konkretus, įgyvendinamas ir laiku: \'2 puslapyje argumentas prarandamas, nes trūksta ryšio su įrodymu\' yra naudingas; \'galėjo būti geriau\', ne.",
        "ADHD mokiniams: tiesioginis grįžtamasis ryšys yra veiksmingesnis už atidėtą. Nelaukite užduoties pabaigos.",
        "Disleksijos mokiniams: žodinis ar garso grįžtamasis ryšys gali būti prieinamesnis nei išplėstiniai rašytiniai komentarai.",
        "Vengti mokinių tarpusavio lyginimo, lyginti mokinį su jo paties ankstesne pažanga.",
      ]},
      { items: [
        "ADHD: vertinimas keliais trumpais momentais, o ne vienu ilgu testu. Sumažinkite blaškančius dirgiklius vertinimo aplinkoje.",
        "Disleksija: leiskite žodinius atsakymus, papildomą laiką ar teksto kalbos sintezės naudojimą. Vertinkite turinį, o ne rašybą.",
        "Autizmas: vertinimai su aiškiomis, nedviprasmiškomis rašytinėmis instrukcijomis. Iš anksto įspėkite apie formato pakeitimus.",
        "Gabumas: vengti vertinimų, kurie reikalauja vien turinio atgaminimo, įtraukti analizės, sintezės ir kūrybos klausimus.",
      ]},
      { items: [
        "Kai mokinys net su vertinimo pritaikymais negali pademonstruoti mokymosi, tai yra ženklas, kad gali būti gilesnė kliūtis, kurią reikia tirti su mokyklos psichologu.",
        "Nuolatiniai modeliai (mėnesiai, ne dienos) specifinių sunkumų tam tikroje srityje turi būti oficialiai pranešti.",
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
        "Tūlītējs un biežs pozitīvs pastiprinājums: AUDH gadījumā jutība pret atlīdzību ir izmainīta (gaidīšanas nepatika), tāpēc tūlītējas atlīdzības darbojas labāk nekā atliktas.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Sākt ar to, ko skolēns dara labi — sapulce nedrīkst sākties kā sūdzību saraksts, citādi vecāks (aizbildnis) aizvērsies aizsardzībā.",
        "Aprakstīt novēroto uzvedību, nevis diagnozes: „kad pēc kārtas ir vairāk nekā divi soļi, viņš pazaudē domas pavedienu“, nevis „viņam ir AUDH“.",
        "Paredzēt reakciju „mājās tā nav“ — izskaidrot, ka grupas konteksts un prasība ilgstoši noturēt uzmanību klasē padara simptomus redzamākus.",
        "Ja ierosina izvērtēšanu, piedāvāt to kā resursu, nevis kā sodu: „ir atbalsts, kas viņam (viņai) var ļoti palīdzēt“, nevis „viņš (viņa) ir jāizvērtē“.",
      ]},
      { items: [
        "Pastāvīgi disciplīnas pārkāpumi, neraugoties uz pielāgojumiem klasē.",
        "Vienaudžu sociālas atstumšanas pazīmes.",
        "Komorbiditātes pazīmes (trauksme, depresija, opozicionāri izaicinoša uzvedība) — biežas AUDH gadījumā un kas pamato nosūtīšanu.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
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
        "Ja mērķis nav novērtēt rakstīšanu, novērtēt saturu atsevišķi no pareizrakstības.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
        "Piedāvāt to pašu informāciju vairākos formātos (audio, video, shēmas).",
      ]},
      { items: [
        "Jau sarunas sākumā skaidri nošķirt lasīšanu no inteliģences: „viņš ļoti labi saprot, kad klausās — grūtība ir specifiska lasīšanai“.",
        "Paturēt prātā, ka disleksijai ir spēcīga iedzimtības komponente: vienam no vecākiem var būt nediagnosticēta disleksija, un saruna var atdzīvināt grūtas atmiņas par paša skolas gaitām.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "Izvairīties rādīt darba lapas, kas pilnas sarkani izlabotu kļūdu, bez konteksta — vispirms parādīt to, ko skolēns jau spēj izdarīt.",
        "Būt konkrētiem par jau ieviestajiem pielāgojumiem un tiem, kurus aizbildnis var atkārtot mājās: teksti audio formātā, lasīšana skaļi bez laika spiediena.",
      ]},
      { items: [
        "Pasliktinošs akadēmiskais paštēls („esmu muļķis“, „es nespēju“).",
        "Sistemātiska izvairīšanās no lasīšanas/rakstīšanas uzdevumiem tādā mērā, ka tas apdraud citus mācību priekšmetus.",
        "Izteikta neatbilstība starp mutvārdu un rakstisko sniegumu bez formālas diagnozes — nosūtīt uz psihopedagoģisko novērtējumu.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Grūtības ar nepaziņotām izmaiņām, izmaiņas grafikā, telpā vai aizvietojošajā skolotājā.",
        "Burtiski saziņas, palaiž garām niansi, ironiju, idiomātiskās izteiksmes.",
        "Sensorā jutīgums, dienasgaismas spuldzes, fona troksnis, apģērbu etiķetes var būt nepanesamas.",
        "Fokusētas un dziļas intereses par konkrētām tēmām.",
        "Var šķist neatkarīgs vai attālināts, kad ir pārņemts, nevis izslēgts.",
      ]},
      { items: [
        "<strong>Tā nav</strong> lineāra skala ('vairāk' vai 'mazāk' autistisks), tā ir daudzdimensionāls profils.",
        "<strong>Tā nav</strong> empātijas trūkums, tas bieži ir pretēji, ar grūtībām filtrēt ievadi.",
        "<strong>Tā nav</strong> slikta uzvedība, kad rutīna tiek pārkāpta, tā ir reāla neiroloģiska atbilde.",
      ]},
      { items: [
        "Iepriekš brīdināt par jebkurām rutīnas izmaiņām, pat šķietami nenozīmīgām.",
        "Pārvērst netiešos sociālos noteikumus par tiešiem noteikumiem (ko darīt, ko nedarīt, un kad).",
        "Atļaut sensoros pārtraukumus klusā telpā, kad nepieciešams.",
        "Izmantot skolēna intereses kā ieejas punktus mācību saturā.",
      ]},
      { items: [
        "Sākt ar konkrētiem novērojumiem, nediagnosticēt tikšanās laikā.",
        "Sniegt informāciju rakstveidā, verbāli izklāstīts daudzs nav viegli paturams atmiņā.",
        "Izvairīties no 'normālās bērnu uzvedības' argumenta, sensorās un sociālās grūtības ir reālas.",
        "Skaidrot, ka agrīna iejaukšanās (atbalsts, nevis paslēpšana) uzlabo ilgtermiņa rezultātus.",
      ]},
      { items: [
        "Krīzes epizodes, kas apdraud skolēna vai citu drošību.",
        "Pilnīga sociālā izolācija no klasesbiedriem.",
        "Regresija iepriekš apgūtajās prasmēs.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Grūtības ar uzdevumiem, kas prasa precīzu roku koordināciju: rakstīšana, zīmēšana, šķēru lietošana.",
        "Vāja telpiskā orientācija, pazūd gaitenī, nevar organizēt materiālus uz galda.",
        "Neveiklas kustības, biežas krišanas vai sadursmes ar priekšmetiem.",
        "Grūtības ar pašapkalpošanās uzdevumiem (pogu aizdare, apavu sasiešana).",
        "Var būt aizkavēta runa vai grūtības ar secīguma uzdevumiem.",
      ]},
      { items: [
        "<strong>Tā nav</strong> neuzmanība vai slinkums, motoriskā plānošana ir neiroloģiski traucēta.",
        "<strong>Tas nav</strong> redzams no ārpuses, grūtības bieži tiek sajauktas ar 'neveiklību'.",
        "<strong>Tas neuzlabojas</strong> ar vairāk praksi vien, nepieciešama strukturēta terapija.",
      ]},
      { items: [
        "Piedāvāt alternatīvas rakstīšanai (datora tastatūra, balss ieraksts).",
        "Atļaut papildu laiku uzdevumiem, kas prasa roku meistarību.",
        "Samazināt rakstīšanas apjomu, doties uz saturu, nevis prezentāciju.",
        "Apspriesties ar ergoterapeitu par klases vides pielāgošanu.",
      ]},
      { items: [
        "Paskaidrot, ka tas nav slinkums, skolēns cenšas, taču plānošanas process ir traucēts.",
        "Izcelt kompensēšanas stratēģijas, ko skolēns jau izmanto.",
        "Apspriest mājas uzdevumu pielāgojumus: mazāk, fokusēts, izmantojot tehnoloģiju.",
        "Mudināt uz ergoterapeita vai fizioterapeita konsultāciju caur skolas atbalstu.",
      ]},
      { items: [
        "Nopietna pašapziņas pasliktināšanās vai sociālā izolācija.",
        "Fiziskā drošība apdraudēta fiziskās audzināšanas laikā.",
        "Neviens progress trots pastāvīgas atbalsta stratēģijas.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Ātri apgūst jaunu saturu un zaudē interesi atkārtošanas uzdevumos.",
        "Uzdod dziļus, nevietā šķietamus jautājumus, kas traucē stundu.",
        "Var demonstrēt nevienmērīgu attīstību, ārkārtējs intelekts ar sociālu vai emocionālu nezrelitāti.",
        "Var pretestēties rutīnai un strukturētai uzdevumiem, ja tos uzskata par pārāk viegliem.",
        "Var justies izolēts no vienaudžiem, jo intereses un komunikācijas stils atšķiras.",
      ]},
      { items: [
        "<strong>Tā nav</strong> garantija akadēmiskiem panākumiem, var neizpildīt potenciālu, ja nav atbilstoša izaicinājuma.",
        "<strong>Tas nav</strong> vienāds ar lieliskiem atzīmēm, daži augsti spējas bērni tīši nekveido.",
        "<strong>Tas neizslēdz</strong> citas vajadzības, divkārtēja izņēmumainība (augsta spēja + disleksija, ADHD utt.) ir bieži.",
      ]},
      { items: [
        "Piedāvāt bagātinātu vai paātrinātu saturu, nevis vairāk no tā paša.",
        "Ļaut neatkarīgus projektus vai padziļinātu izpēti.",
        "Izmantot skolēna intereses kā ieejas punktus sarežģītākā saturā.",
        "Apvienot ar citiem augsti spējas bērniem projektu darbā, kad iespējams.",
      ]},
      { items: [
        "Izvairīties no 'viņš ir tik gudrs, viņam tas nav vajadzīgs', visiem bērniem ir nepieciešams izaicinājums.",
        "Izskaidrot, ka bez piemērotas stimulācijas var attīstīties motivācijas problēmas.",
        "Apspriest bagātināšanas iespējas, ko var ieviest mājās vai papildu aktivitātēs.",
        "Uzsvērt emocionālās vajadzības: augsti spējas bērni var ciest no perfekcionisma, trauksmes, savstarpējas neatbilstības.",
      ]},
      { items: [
        "Pilnīga skolas neapmeklēšana vai atteikums piedalīties.",
        "Depresija, izolācija vai emocionālas krīzes.",
        "Izteikts neatbilstība starp spēju un sniegumu bez skaidra iemesla.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Var runāt tekoši, bet cīnās ar akadēmisko valodas lietojumu priekšmetu stundās.",
        "Klusā perioda uzvedība, nerunā, bet uztver un saprot.",
        "Kļūdas, kas atspoguļo dzimtās valodas ietekmi (transferi), nevis izpratnes trūkumu.",
        "Var izskatīties noguris vai novērsts, kognitīvā slodze mācīties otrajā valodā ir liela.",
        "Snieguma neatbilstība starp mutvārdu un rakstveidā vai starp priekšmetiem.",
      ]},
      { items: [
        "<strong>Tā nav</strong> mācīšanās grūtība, valodas apguves process ir normāls.",
        "<strong>Nav</strong> piemēroti novērtēt PLNM skolēnu tāpat kā dzimtās valodas runātāju.",
        "<strong>Dzimtā valoda nav šķērslis</strong>, divvalodīgums ir kognitīvs ieguvums.",
      ]},
      { items: [
        "Izmantot vizuālos atbalstus, diagrammas, divvalodīgas vārdnīcas stundu laikā.",
        "Atļaut vairāk laiku uzdevumiem un eksāmenos.",
        "Novērtēt saturu atsevišķi no valodas formas, ja mērķis ir zināšanas.",
        "Sadarboties ar latviešu valodas kā otrās valodas (LV2) speciālistu vai atbalsta skolotāju.",
      ]},
      { items: [
        "Iesaistīt tulkotāju vai starpnieku sapulcēm, ja nepieciešams.",
        "Izvairīties no pieņēmumiem par ģimenes izglītību vai valodas kompetencēm.",
        "Skaidrot valodas apguves posmus, klusā perioda parādība, akadēmiskā valoda prasa ilgāku laiku.",
        "Uzsvērt, ka divvalodīgums ir ieguvums, nevis problēma.",
      ]},
      { items: [
        "Pastāvīgas grūtības pēc 2 gadu atbalsta bez progresa.",
        "Aizdomas par latentām mācīšanās grūtībām blakus valodas barjerai.",
        "Izolācija vai atstumšana no vienaudžiem valodas dēļ.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Konfidencialitāte ir pamats, diagnozes, ģimenes apstākļi un atbalsta pasākumi nav jākopīgo ar kolēģiem bez vajadzības.",
        "Birka var aizsargāt (atbalsta piekļuve) vai kaitēt (stigma, samazinātas cerības), apzinies kontekstu.",
        "Runā ar skolēnu, nevis par skolēnu, pat jauni bērni ir tiesīgi piedalīties lēmumos par savām vajadzībām.",
        "Izvairīties no publiski pieejamu adaptāciju padarīšanas, diskrētums aizsargā cieņu.",
      ]},
      { items: [
        "Neiznest diagnozes vai ģimenes informāciju ārpus strādājošajiem speciālistiem.",
        "Dokumenti par atbalstu glabājami saskaņā ar VDAR (Vispārīgā datu aizsardzības regula) un skolas politiku.",
        "Vecākiem/aizbildņiem ir tiesības piekļūt informācijai par sava bērna atbalsta pasākumiem.",
      ]},
      { items: [
        "Dažādība klasē nav slogs, tā ir dabiska un mācīšanas kvalitāti uzlabo visiem.",
        "Izvairīties no salabot vai normalizēt skolēnu, viņu uzdevums ir attīstīties, ne atbilst normai.",
        "Uzdot sev jautājumu: kuru intereses kalpo šim lēmumam, skolēnam vai iestādei?",
      ]},
      { items: [
        "Nereālistiskas cerības var kaitēt tāpat kā zemas cerības, meklēt to, kas ir izaicinošs, bet sasniedzams.",
        "Atzīt savus aizspriedumus: vai jūs sagaidāt mazāk no noteiktas grupas skolēniem?",
        "Atbalsts nav privilēģija, tā ir tiesība, un tam vajadzētu būt pieejamam bez papildu šķēršļiem.",
        "Pašaprūpe nav savtīga, pedagogs, kas izjūt izdegšanu, nevar efektīvi atbalstīt nevienu.",
        "Konsultēties ar kolēģiem ētiski sarežģītos gadījumos, iekļaušana prasa komandas pieeju.",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Šis modulis ir paredzēts adaptācijai un praktiskajai lietošanai klasē, nevis pasīvai lasīšanai.",
        "Katra stratēģija ir balstīta uz pierādījumiem un pielāgojama jūsu kontekstam.",
      ]},
      { items: [
        "Teksta formāts: fonta izmērs vismaz 12pt; rindstarpa 1,5; Times New Roman vietā Arial vai Calibri.",
        "Krāsu kodi un vizuālie rutīnas radīt paredzamību un samazina kognitīvo slodzi.",
        "Eksāmenu pielāgojumi: papildu laiks, atsevišķa telpa, lasītājs vai rakstītājs.",
        "Digitālie rīki: teksts uz runas, runas uz tekstu, digitālās vārdnīcas.",
        "Diferenciācija: vieni un tie paši mācīšanās mērķi, bet dažādi attēlojumi un snieguma veidi.",
        "Universāls dizains mācīšanai (UDL): plānot iekļaušanai no sākuma, nevis adaptēt pēc tam.",
      ]},
      { items: [
        "Savienojiet ar skolas psiholoģisko dienestu (PPK vai RPMC) savlaicīgas iejaukšanās nodrošināšanai.",
        "Iesaistiet multidisciplināro komandu (klašu audzinātājs, atbalsta skolotājs, vecāki).",
        "Dokumentējiet adaptācijas, rakstiski pieraksti aizsargā gan skolēnu, gan skolotāju.",
      ]},
      { items: [
        "Izmantot formatīvo novērtēšanu, bieži, mazie soļi ir labāki par gada eksāmenu.",
        "Izvairīties no salīdzināšanas ar klasi, novērtēt individuālo progresu.",
        "Atgriezeniskā saite jābūt specifiskai, savlaicīgai un uz izaugsmi orientētai.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Izglītības likums (1998, grozījumi 2022) nosaka izglītības pieejamību visiem bērniem neatkarīgi no spējām.",
        "Speciālās izglītības likums (1995, grozījumi) regulē atbalstu skolēniem ar speciālām vajadzībām.",
        "Ministru kabineta noteikumi Nr. 556 (2019) nosaka iekļaujošās izglītības principus valsts skolās.",
      ]},
      { items: [
        "VPMC (Valsts pedagoģiski medicīniskā komisija) veic skolēnu novērtēšanu un piešķir speciālās izglītības statusu.",
        "RPMC (rajona pedagoģiski medicīniskā komisija) koordinē atbalstu vietējā līmenī.",
        "Skolas psihologs (PPK, pedagoģiski psiholoģiskais centrs) nodrošina psiholoģisko atbalstu.",
      ]},
      { items: [
        "IIP (individuālais izglītības plāns), dokuments, kas nosaka mācīšanās mērķus, adaptācijas un atbalsta pasākumus.",
        "Atbalsta skolotājs (speciālais pedagogs) strādā ar skolēniem, kuriem ir speciālas vajadzības.",
        "Logopēds, sociālais pedagogs un psihologs var būt daļa no atbalsta komandas.",
        "Resursu centrs nodrošina metodisko atbalstu un papildu resursus.",
      ]},
      { items: [
        "Latviešu valoda kā otrā valoda (LV2) ir paredzēta skolēniem, kuru dzimtā valoda nav latviešu.",
        "Divvalodīgā izglītība ir pieejama dažās skolās mazākumtautību kopienām.",
        "Integrācijas atbalsts ir pieejams jaunierašanās skolēniem caur pašvaldību dienestiem.",
      ]},
      { items: [
        "Latvija ir ratificējusi ANO Konvenciju par personu ar invaliditāti tiesībām (CRPD).",
        "ES direktīvas par iekļaujošo izglītību tiek ieviestas ar nacionālo tiesību aktiem.",
        "Ombuds ir tiesīgs izskatīt sūdzības par diskrimināciju izglītībā.",
      ]},
      { items: [
        "Vecākiem/aizbildņiem ir tiesības piedalīties IIP izstrādē un pārskatīšanā.",
        "Skolēns, sasniedzot 15 gadus, ir tiesīgs paust savu viedokli izglītības lēmumos.",
        "Sūdzības par atbalsta nodrošināšanu var iesniegt pašvaldībai vai Izglītības un zinātnes ministrijai.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagoģiskā diferenciācija nozīmē pielāgot mācīšanas veidu, nevis samazināt gaidas. Mācīšanās mērķis var būt vienāds visiem skolēniem; mainās ceļš.",
        "UDL modelis (Universālais mācīšanās dizains) piedāvā trīs principus: daudzveidīgus reprezentācijas līdzekļus (kā saturs tiek pasniegts), daudzveidīgus darbības un izteiksmes līdzekļus (kā skolēns reaģē) un daudzveidīgus iesaistīšanās līdzekļus (kas motivē skolēnu).",
        "Diferenciēšana nenozīmē katram skolēnam veidot individuālu stundu plānu, tas nozīmē radīt pietiekami daudz elastības, lai viena un tā pati stunda kalpotu dažādiem skolēnu profiliem.",
      ]},
      { items: [
        "<strong>Tā nav</strong> mācību programmas samazināšana skolēniem ar grūtībām.",
        "<strong>Tā nav</strong> vienmēr dažādu uzdevumu piešķiršana dažādiem skolēniem, tas izolē un etiķetē.",
        "<strong>Tā nav</strong> tikai diferencētas darba lapas, diferenciācija ietver arī veidu, kā skolotājs skaidro, uzdod jautājumus un vērtē.",
      ]},
      { items: [
        "Kontrolēta izvēle: piedāvāt 2–3 atbildes formāta variantus (rakstisks, mutiski, shematisks zīmējums), visi skolēni atbild uz vienu un to pašu saturu.",
        "Scaffolding: nodrošināt strukturētu ietvaru skolēniem ar grūtībām; pakāpeniski to noņemt, pieaugot patstāvībai.",
        "Elastīga grupēšana: grupas pēc interesēm, apguves līmeņa vai jauktas, rotēt, lai izvairītos no fiksētām grupām, kas kļūst par identitātēm.",
        "Laika korekcijas: vairāk laika nenozīmē mazāku prasīgumu. Skolēniem ar ADHD vai dispraksiju sadaliet uzdevumu segmentos ar plānotajiem pārtraukumiem.",
        "Sarežģītības līmenis: vienam un tam pašam tematam veidojiet versijas ar lielāku vai mazāku valodas atbalstu, ar piemēriem vai bez, ar vizuāliem pamudinājumiem vai bez.",
      ]},
      { items: [
        "Vērtējiet to, ko skolēns zina, nevis kā viņš raksta. Skolēns ar disleksiju var demonstrēt konceptuālo apguvi mutiski vai ar tehnoloģisku atbalstu.",
        "Skaidri vērtēšanas kritēriji, kas kopīgoti pirms uzdevuma, ļauj skolēnam zināt, kas sagaidāms neatkarīgi no izvēlētā formāta.",
        "Portfolio vai uz pierādījumiem balstīta vērtēšana ļauj skolēnam laika gaitā parādīt progresu, nevis tikai vienā pārbaudījuma brīdī.",
      ]},
      { items: [
        "Kad klasē notiekošā diferenciācija vairs nav pietiekama un skolēns joprojām nespēj piekļūt mācību programmai, tas var liecināt par specializēta atbalsta nepieciešamību.",
        "Diferenciācija neaizstāj skolas atbalsta pasākumus (skolas psihologu, terapeitus, speciālo izglītību), tā ir tas, kas papildinošā veidā notiek parastajā klasē.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formatīvā vērtēšana ir jebkura prakse, kas procesa laikā vāc informāciju par mācīšanos, un izmanto šo informāciju mācīšanas vai skolēna atbalsta pielāgošanai.",
        "Atšķirībā no sumatīvās vērtēšanas (gala atzīmes), formatīvā nevajadzīga atzīme, tai vajadzīga atgriezeniskā saite.",
        "Neirodivergentiem skolēniem formatīvā vērtēšana ir īpaši svarīga, jo sniegums vienreizējā testā var neatspoguļot to, ko viņi patiesībā zina.",
      ]},
      { items: [
        "<strong>Izejas biļete</strong>: stundas beigās skolēns 2 minūtēs atbild uz jautājumu, skolotājs uzreiz redz, kurš saprata un kurš ne.",
        "<strong>Semafors</strong>: zaļš (sapratu), dzeltens (man ir šaubas), sarkans (nesapratu), var būt fiziskas kartītes, piezīmītes vai digitāls.",
        "<strong>Think-Pair-Share</strong>: skolēns domā individuāli, apspriežas ar partneri, pēc tam dalās ar klasi, samazina trauksmi par tiešu atbildi.",
        "<strong>Izejas vārti</strong>: pirms iziešanas skolēns pasaka skolotājam vienu lietu, ko iemācījās, un vienu šaubu, kas vēl ir.",
      ]},
      { items: [
        "Efektīva atgriezeniskā saite ir konkrēta, īstenojama un savlaicīga: \'2. lappusē arguments zūd, jo trūkst saiknes ar pierādījumu\' ir noderīgi; \'varēja būt labāk\' nav.",
        "Skolēniem ar ADHD: tūlītēja atgriezeniskā saite ir efektīvāka nekā aizkavēta. Negaidiet līdz uzdevuma beigām.",
        "Skolēniem ar disleksiju: mutiska vai audio atgriezeniskā saite var būt pieejamāka nekā apjomīgi rakstveida komentāri.",
        "Izvairieties no skolēnu savstarpējas salīdzināšanas, salīdziniet skolēnu ar viņa pašu iepriekšējo progresu.",
      ]},
      { items: [
        "ADHD: vērtēšana vairākos īsos brīžos, nevis vienā garā testā. Samaziniet novērsojoša rakstura stimulus vērtēšanas vidē.",
        "Disleksija: atļaujiet mutiskas atbildes, papildu laiku vai teksta-runas pārveidošanas izmantošanu. Vērtējiet saturu, nevis pareizrakstību.",
        "Autisms: vērtēšana ar skaidriem, nepārprotamiem rakstveida norādījumiem. Iepriekš brīdiniet par formāta izmaiņām.",
        "Apdāvinātība: izvairieties no vērtēšanas, kas prasa vienīgi satura reproducēšanu, iekļaujiet analīzes, sintēzes un radošos jautājumus.",
      ]},
      { items: [
        "Kad skolēns pat ar vērtēšanas pielāgojumiem nespēj demonstrēt mācīšanos, tas ir zīme, ka var būt dziļāks šķērslis, kas jāpēta kopā ar skolas psihologu.",
        "Pastāvīgi modeļi (mēneši, ne dienas) ar specifisku grūtību kādā jomā ir formāli jāpaziņo.",
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
        "<strong>See ei ole</strong> halb kasvatus, laiskus ega iseloomupuudus: need väärarusaamad häbimärgistavad ja viivitavad toetust.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
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
        "Alusta sellest, mida õpilane teeb hästi — koosolek ei tohi avaneda kaebuste loeteluna, muidu tõmbub lapsevanem (hooldaja) kaitsvalt endasse.",
        "Kirjelda täheldatud käitumist, mitte diagnoose: „kui järjest on rohkem kui kaks sammu, kaotab ta lõnga“, mitte „tal on ATH“.",
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
        "Kui eesmärk ei ole kirjutamise hindamine, hinnata sisu õigekirjast eraldi.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Raskused ootamatute muutustega, muutused tunniplaanis, ruumis või asendusõpetajas.",
        "Sõnasõnaline suhtlemine, ei märka varjundeid, irooniat, idioomaatilisi väljendeid.",
        "Sensoorne tundlikkus, päevavalgustuslambid, taustamüra, riiete sildid võivad olla talumatud.",
        "Fokuseeritud ja sügavad huvid konkreetsete teemade vastu.",
        "Võib tunduda eraldunud või kaugel, kui on ülekoormatud, mitte välja lülitatud.",
      ]},
      { items: [
        "<strong>See ei ole</strong> lineaarne skaala ('rohkem' või 'vähem' autistlik), see on mitmemõõtmeline profiil.",
        "<strong>See ei ole</strong> empaatia puudus, sageli on vastupidi, raskused sisendi filtreerimisel.",
        "<strong>See ei ole</strong> halb käitumine, kui rutiin katkeb, see on reaalne neuroloogiline reaktsioon.",
      ]},
      { items: [
        "Anda eelnevalt teada igast rutiini muutusest, isegi näiliselt ebaolulistest.",
        "Muuta kaudsed sotsiaalsed reeglid selgesõnalisteks (mida teha, mida mitte teha, millal).",
        "Lubada sensoorseid pause vaikses ruumis vajadusel.",
        "Kasutada õpilase huvisid sisenditena õppesisus.",
      ]},
      { items: [
        "Alusta konkreetsete tähelepanekutega, mitte diagnoosimine kohtumise ajal.",
        "Anda infot kirjalikult, verbaalset on raske meeles pidada.",
        "Vältida argumenti 'kõik lapsed käituvad nii', sensoorsed ja sotsiaalsed raskused on reaalsed.",
        "Selgitada, et varajane sekkumine (tugi, mitte peitmine) parandab pikaajalisi tulemusi.",
      ]},
      { items: [
        "Kriisiepisoodid, mis ohustavad õpilase või teiste turvalisust.",
        "Täielik sotsiaalne isolatsioon klassikaaslastest.",
        "Regressioon varem omandatud oskustes.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Raskused ülesannetega, mis nõuavad täpset käte koordinatsiooni: kirjutamine, joonistamine, kääride kasutamine.",
        "Nõrk ruumiorientatsioon, eksib koridoris, ei suuda materjale laual organiseerida.",
        "Kohmakad liigutused, sagedased kukkumised või kokkupõrked esemetega.",
        "Raskused eneseteenindusülesannetega (nuppude kinnitamine, kingapaelte sidumine).",
        "Võib esineda hilinenenud kõne või raskused järjestamisülesannetega.",
      ]},
      { items: [
        "<strong>See ei ole</strong> tähelepanematust ega laiskust, motoorne planeerimine on neuroloogiliselt häiritud.",
        "<strong>See ei ole</strong> väljastpoolt nähtav, raskused aetakse sageli segamini kohmaklikkusega.",
        "<strong>See ei parane</strong> ainult rohkem harjutades, vaja on struktureeritud teraapiat.",
      ]},
      { items: [
        "Pakkuda alternatiive kirjutamisele (arvuti klaviatuur, häälsalvestis).",
        "Lubada lisaaeg ülesannetele, mis nõuavad käelist osavust.",
        "Vähendada kirjutamise mahtu, fokuseerida sisule, mitte esitlusele.",
        "Konsulteerida tegevusterapeudiga klassiruumi keskkonna kohandamise osas.",
      ]},
      { items: [
        "Selgita, et see ei ole laiskus, õpilane pingutab, kuid planeerimisprotsess on häiritud.",
        "Tõsta esile kompensatsioonistrateegiaid, mida õpilane juba kasutab.",
        "Aruta kodutöö kohandusi: vähem, fokuseeritud, kasutades tehnoloogiat.",
        "Julgusta tegevusterapeudi või füsioterapeudi konsultatsiooni koolitugi kaudu.",
      ]},
      { items: [
        "Tõsine enesehinnang langus või sotsiaalne isolatsioon.",
        "Füüsiline turvalisus ohustatud kehalise kasvatuse ajal.",
        "Puudub progress hoolimata pidevast toetusest.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Omandab uue sisu kiiresti ja kaotab huvi kordamisülesannete vastu.",
        "Esitab sügavaid, kohatu tunduvaid küsimusi, mis segavad tundi.",
        "Võib näidata ebaühtlast arengut, erakordne intellekt koos sotsiaalse või emotsionaalse ebaküpsusega.",
        "Võib vastu seista rutiinitele ja struktureeritud ülesannetele, kui peab neid liiga lihtsateks.",
        "Võib tunda end eakaaslastest eraldatuna, kuna huvid ja suhtlusstiil erinevad.",
      ]},
      { items: [
        "<strong>See ei ole</strong> garantii akadeemiliseks edukuseks, võib potentsiaali mitte realiseerida, kui pole piisavat väljakutset.",
        "<strong>See ei ole</strong> sama mis suurepärased hinded, mõned kõrge võimekusega lapsed jätavad teadlikult pingutamata.",
        "<strong>See ei välista</strong> muid vajadusi, kahekordsed erandlikkused (kõrge võimekus + düsleksia, ATH jne) on sagedased.",
      ]},
      { items: [
        "Pakkuda rikastatud või kiirendatud sisu, mitte rohkem sama.",
        "Lubada iseseisvaid projekte või süvauurimist.",
        "Kasutada õpilase huvisid sisenditena keerukamasse sisusse.",
        "Ühendada teiste kõrge võimekusega lastega projekttöös, kui võimalik.",
      ]},
      { items: [
        "Vältida argumenti 'ta on nii tark, tal seda vaja ei ole', kõik lapsed vajavad väljakutset.",
        "Selgitada, et ilma sobiva stimulatsioonita võivad tekkida motivatsiooniprobleemid.",
        "Arutada rikastamisvõimalusi, mida saab kodus rakendada.",
        "Rõhutada emotsionaalseid vajadusi: kõrge võimekusega lapsed võivad kannatada perfektsionismi, ärevuse all.",
      ]},
      { items: [
        "Täielik koolist keeldumine või osalemisest keeldumine.",
        "Depressioon, isolatsioon või emotsionaalsed kriisid.",
        "Märkimisväärne erinevus võimekuse ja soorituse vahel ilma selge põhjuseta.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Võib ladusalt rääkida, kuid võitleb akadeemilise keelekasutusega ainete tundides.",
        "Vaikse perioodi käitumine, ei räägi, kuid tajub ja mõistab.",
        "Vead, mis peegeldavad emakeele mõju (ülekanne), mitte arusaamatust.",
        "Võib tunduda väsinud või hajameelne, kognitiivne koormus teises keeles õppimisel on suur.",
        "Soorituse erinevus suulise ja kirjaliku vahel või ainete vahel.",
      ]},
      { items: [
        "<strong>See ei ole</strong> õpiraskus, keeleomandamise protsess on normaalne.",
        "<strong>Ei ole</strong> asjakohane hinnata emakeelena mitte-eesti õpilast samamoodi kui eesti emakeelega õpilast.",
        "<strong>Emakeel ei ole takistus</strong>, kakskeelsus on kognitiivne eelis.",
      ]},
      { items: [
        "Kasutada visuaalseid toetusi, diagramme, kakskeelseid sõnastikke tundides.",
        "Lubada rohkem aega ülesannetele ja eksamitel.",
        "Hinnata sisu eraldi keele vormist, kui eesmärk on teadmised.",
        "Teha koostööd eesti keele teise keelena (E2) spetsialisti või tugiõpetajaga.",
      ]},
      { items: [
        "Kaasata tõlk või vahendaja kohtumistele vajadusel.",
        "Vältida eeldusi perekonna hariduse või keelekompetentsi kohta.",
        "Selgitada keeleomandamise etappe, vaikne periood, akadeemiline keel võtab rohkem aega.",
        "Rõhutada, et kakskeelsus on eelis, mitte probleem.",
      ]},
      { items: [
        "Püsivad raskused pärast 2-aastast tuge ilma edusammudeta.",
        "Kahtlus varjatud õpiraskuste kohta keelebarjääri kõrval.",
        "Isolatsioon või tõrjumine eakaaslaste poolt keele tõttu.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Konfidentsiaalsus on alus, diagnoosid, perekondlikud asjaolud ja tugimeetmed ei tohi vajaduseta kolleegidega jagada.",
        "Silt võib kaitsta (ligipääs toele) või kahjustada (stigma, vähenenud ootused), ole kontekstist teadlik.",
        "Räägi õpilasega, mitte õpilasest, isegi väikesed lapsed on õigustatud osalema oma vajadusi puudutavates otsustes.",
        "Väldi kohanduste avalikuks tegemist, diskreetsus kaitseb väärikust.",
      ]},
      { items: [
        "Mitte jagada diagnoose ega perekonna informatsiooni väljaspool töötavaid spetsialiste.",
        "Tugidokumendid hoida vastavalt GDPR-ile (isikuandmete kaitse üldmäärus) ja kooli poliitikale.",
        "Vanematel/hooldajatel on õigus pääseda ligi infole oma lapse tugimeetmete kohta.",
      ]},
      { items: [
        "Mitmekesisus klassis ei ole koorem, see on loomulik ja parandab kõigi jaoks õpetamise kvaliteeti.",
        "Väldi õpilase parandamist või normaliseerimist, nende ülesanne on areneda, mitte normile vastata.",
        "Esita endale küsimus: kelle huve see otsus teenib, õpilast või asutust?",
      ]},
      { items: [
        "Ebareaalsed ootused võivad kahjustada sama palju kui madalad ootused, otsi väljakutset, kuid saavutatavat.",
        "Tunnusta oma eelarvamusi: kas ootad teatud õpilaste rühmalt vähem?",
        "Tugi ei ole privileeg, see on õigus, ja sellele peaks olema juurdepääs ilma täiendavate takistusteta.",
        "Enesehool ei ole isekas, läbipõlenud pedagoog ei suuda kedagi tõhusalt toetada.",
        "Konsulteeri kolleegidega eetiliselt keerulistes juhtumites, kaasamine nõuab meeskonnatöö lähenemist.",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "See moodul on mõeldud kohandamiseks ja praktiliseks kasutamiseks klassiruumis, mitte passiivseks lugemiseks.",
        "Iga strateegia põhineb tõenditel ja on kohandatav teie kontekstile.",
      ]},
      { items: [
        "Teksti vorming: fondi suurus vähemalt 12pt; reavahe 1,5; Times New Roman asemel Arial või Calibri.",
        "Värvikoodid ja visuaalsed rutiinid loovad etteaimatavust ja vähendavad kognitiivset koormust.",
        "Eksami kohandused: lisaaeg, eraldi ruum, lugeja või kirjutaja.",
        "Digitaalsed tööriistad: tekst kõneks, kõne tekstiks, digitaalsed sõnaraamatud.",
        "Differentseerimine: samad õpieesmärgid, kuid erinevad esitusviisid ja soorituse tüübid.",
        "Universaalne õpimudel (UDL): planeerida kaasavust algusest, mitte kohandada hiljem.",
      ]},
      { items: [
        "Ühenduda koolipsühholoogiga (Rajaleidja võrgustik) varajase sekkumise tagamiseks.",
        "Kaasata multidistsiplinaarne meeskond (klassijuhataja, tugiõpetaja, vanemad).",
        "Dokumenteerida kohandused, kirjalikud ülestähendused kaitsevad nii õpilast kui ka õpetajat.",
      ]},
      { items: [
        "Kasutada kujundavat hindamist, sagedased, väikesed sammud on paremad kui aastane eksam.",
        "Vältida klassiga võrdlemist, hinnata individuaalset edenemist.",
        "Tagasiside peab olema spetsiifiline, õigeaegne ja kasvule suunatud.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Põhikooli- ja gümnaasiumiseadus (PGS, 2010) reguleerib hariduslike erivajadustega (HEV) õpilaste õppe korraldamist.",
        "Koolieelse lasteasutuse seadus ja lastekaitse seadus täiendavad HEV-õpilaste kaitset.",
        "Eesti on ratifitseerinud ÜRO puuetega inimeste õiguste konventsiooni (CRPD).",
      ]},
      { items: [
        "Rajaleidja, haridus- ja nõustamiskeskuste võrgustik, mis hindab HEV-õpilasi ja koostab soovitused.",
        "Nõustamiskomisjon koostab soovitused sobiva õppe korraldamiseks.",
        "Koolipsühholoog ja sotsiaalpedagoog on kohustuslikud suurtes koolides.",
      ]},
      { items: [
        "IÕK (individuaalne õppekava) koostatakse õpilastele, kes vajavad kohandatud õpet.",
        "Tugiisik abistab õpilast igapäevases koolis toimetulekus.",
        "Individuaalne arenguvestlus toimub igal aastal iga õpilasega.",
        "Õpiabirühm pakub väiksemat gruppi tuge põhiainetes.",
      ]},
      { items: [
        "Eesti keel teise keelena (E2) on ette nähtud õpilastele, kelle emakeel ei ole eesti keel.",
        "Eesti keele ja kultuuri õpe on toetatud muukeelsetele peredele kohanemiseks.",
        "Kakskeelne haridus on saadaval mõnedes koolides vene- või muukeelsetele õpilastele.",
      ]},
      { items: [
        "Haridus- ja Teadusministeerium (HTM) vastutab hariduspoliitika ja HEV-suuniste eest.",
        "Koolid peavad tagama juurdepääsetavuse ja kohandused vastavalt seadusele.",
        "Vanematel on õigus osaleda IÕK koostamisel ja hindamisotsustes.",
      ]},
      { items: [
        "Vanemad saavad pöörduda Rajaleidja keskusesse hindamis- ja nõustamisteenuseks.",
        "Koolivaidluste lahendamine toimub maavanemale (regionaalne tasand) või HTM-ile esitatud kaebuste kaudu.",
        "Õpilastel on õigus saada teavet oma õiguste kohta hariduses.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagoogiline diferentseerimine tähendab õpetamisviisi kohandamist, mitte ootuste alandamist. Õpieesmärk võib olla kõigile õpilastele ühesugune; erineb tee.",
        "UDL-mudel (Universaalne õppimise disain) pakub kolm põhimõtet: mitmekesised esitusvahendid (kuidas sisu esitatakse), mitmekesised tegevus- ja väljendusvahendid (kuidas õpilane reageerib) ning mitmekesised kaasamisvahendid (mis motiveerib õpilast).",
        "Diferentseerimine ei tähenda iga õpilase jaoks individuaalse tunniplaani koostamist, see tähendab piisava paindlikkuse loomist, et sama tund teenindaks erinevaid õpilasprofiile.",
      ]},
      { items: [
        "<strong>See ei ole</strong> õppekava vähendamine raskustes olevatele õpilastele.",
        "<strong>See ei ole</strong> alati erinevate ülesannete andmine erinevatele õpilastele, see isoleerib ja sildistab.",
        "<strong>See ei ole</strong> ainult diferentseeritud töölehed, diferentseerimine hõlmab ka seda, kuidas õpetaja seletab, küsib ja hindab.",
      ]},
      { items: [
        "Kontrollitud valik: pakuge 2–3 vastusevormingu valikut (kirjalik, suuline, skemaatiline joonis), kõik õpilased vastavad samale sisule.",
        "Scaffolding: pakkuge raskustes olevatele õpilastele struktureeritud raamistikku; eemaldage see järk-järgult autonoomia kasvades.",
        "Paindlik rühmitamine: rühmad huvi, valdamistaseme või segagruppe, roteerige, et vältida fikseeritud gruppe, mis muutuvad identiteetideks.",
        "Ajakohandused: rohkem aega ei tähenda vähem rangust. ADHD või düpraksiga õpilaste puhul jagage ülesanne segmentideks planeeritud pausidega.",
        "Keerukuse tase: samale teemale looge versioone rohkema või vähema keelelise toetusega, näidete ja ilma, visuaalsete vihjete ja ilma.",
      ]},
      { items: [
        "Hinnake seda, mida õpilane teab, mitte kuidas kirjutab. Düsleksiaga õpilane võib suuliselt või tehnoloogilise toetusega näidata kontseptuaalset valdamist.",
        "Selged hindamiskriteeriumid, mis jagatakse enne ülesannet, võimaldavad õpilasel teada, mida oodatakse, olenemata valitud vormingust.",
        "Portfoolio või tõenditel põhinev hindamine võimaldab õpilasel näidata edusamme aja jooksul, mitte ainult ühes testimishetkes.",
      ]},
      { items: [
        "Kui klassiruumis toimuv diferentseerimine ei ole enam piisav ja õpilane jätkuvalt ei pääse õppekavale ligi, võib see viidata vajadusele spetsialiseeritud toe järele.",
        "Diferentseerimine ei asenda kooli toetusmeetmeid (koolipsühholoog, terapeudid, eripedagoogika), see on see, mis täiendavalt toimub tavalises klassis.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Kujundav hindamine on iga praktika, mis kogub protsessi käigus teavet õppimise kohta, ja kasutab seda teavet õpetamise või õpilasele pakutava toe kohandamiseks.",
        "Erinevalt summatiivsest hindamisest (lõpphinded) ei vaja kujundav hindamine hinnet, see vajab tagasisidet.",
        "Neurodivergentsete õpilaste jaoks on kujundav hindamine eriti oluline, kuna sooritus ühekordsel testil ei pruugi peegeldada seda, mida nad tegelikult teavad.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: tunni lõpus vastab õpilane 2 minutiga küsimusele, õpetaja näeb kohe, kes sai aru ja kes ei saanud.",
        "<strong>Foorituli</strong>: roheline (sain aru), kollane (mul on kahtlusi), punane (ei saanud aru), võivad olla füüsilised kaardid, kleepssedelid või digitaalne.",
        "<strong>Think-Pair-Share</strong>: õpilane mõtleb individuaalselt, arutab partneriga, jagab siis klassiga, vähendab ärevust otsese vastuse ees.",
        "<strong>Väljumisvärav</strong>: enne lahkumist ütleb õpilane õpetajale ühe asja, mida ta õppis, ja ühe kahtluse, mis tal veel on.",
      ]},
      { items: [
        "Tõhus tagasiside on konkreetne, rakendatav ja õigeaegne: \'lehel 2 läheb argument kaduma, sest seos tõendiga puudub\' on kasulik; \'võiks parem olla\' ei ole.",
        "ADHD-ga õpilastele: vahetu tagasiside on tõhusam kui hilistatud. Ärge oodake ülesande lõpuni.",
        "Düsleksiaga õpilastele: suuline või helitagasiside võib olla kättesaadavam kui mahukad kirjalikud kommentaarid.",
        "Vältige õpilaste omavaheliste võrdluste tegemist, võrrelge õpilast tema enda eelneva arenguga.",
      ]},
      { items: [
        "ADHD: hindamine mitmes lühikeses hetkes ühe pika testi asemel. Vähendage hindamiskeskkonnas segavaid stiimuleid.",
        "Düsleksia: lubage suulisi vastuseid, lisaaega või teksti kõneks muutmise kasutamist. Hinnake sisu, mitte õigekirja.",
        "Autism: hindamised selgete, ühemõtteliste kirjalike juhistega. Teavitage eelnevalt vormingu muutustest.",
        "Andekus: vältige hindamisi, mis nõuavad ainult sisu reprodutseerimist, lisage analüüsi-, sünteesi- ja loomisküsimusi.",
      ]},
      { items: [
        "Kui õpilane ei suuda isegi hindamise kohandustega õppimist demonstreerida, on see märk, et võib olla sügavam takistus, mida tuleks uurida koolipsühholoogiga.",
        "Püsivad mustrid (kuud, mitte päevad) konkreetse raskusega teatud valdkonnas tuleks ametlikult teavitada.",
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
        "Kadar cilj ni ocenjevanje pisanja, vsebino ocenjevati ločeno od pravopisa.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Težave z nenapovedanimi spremembami, spremembe v urniku, prostoru ali nadomestitvenem učitelju.",
        "Dobesedna komunikacija, ne zazna odtenkov, ironije, idiomatskih izrazov.",
        "Senzorna občutljivost, fluorescentna svetloba, hrup v ozadju, etikete na oblačilih so lahko nevzdržne.",
        "Fokusirani in poglobljeni interesi za določene teme.",
        "Lahko deluje odsotno ali oddaljeno, ko je preobremenjeno, ne pa izklopljeno.",
      ]},
      { items: [
        "<strong>To ni</strong> linearna lestvica ('bolj' ali 'manj' avtistično), to je večdimenzionalni profil.",
        "<strong>To ni</strong> pomanjkanje empatije, pogosto je nasprotno, s težavami pri filtriranju vhodnih informacij.",
        "<strong>To ni</strong> slabo vedenje, ko je rutina prekinjena, to je resnični nevrološki odziv.",
      ]},
      { items: [
        "Vnaprej opozori na vsako spremembo rutine, celo na navidezno nepomembne.",
        "Implicitna socialna pravila pretvori v eksplicitna pravila (kaj storiti, česa ne, kdaj).",
        "Dovoli senzorne odmore v mirnem prostoru, kadar je potrebno.",
        "Uporabi učenčeve interese kot vstopne točke v učno vsebino.",
      ]},
      { items: [
        "Začni s konkretnimi opažanji, ne diagnosticiraj na sestanku.",
        "Daj informacije v pisni obliki, ustnih navodil je težko ohraniti v spominu.",
        "Izogibaj se argumentu 'vsi otroci se tako vedejo', senzorne in socialne težave so resnične.",
        "Pojasni, da zgodnja intervencija (podpora, ne skrivanje) izboljša dolgoročne rezultate.",
      ]},
      { items: [
        "Krizne epizode, ki ogrožajo varnost učenca ali drugih.",
        "Popolna socialna izolacija od sošolcev.",
        "Regresija pri predhodno pridobljenih spretnostih.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Težave z nalogami, ki zahtevajo natančno koordinacijo rok: pisanje, risanje, uporaba škarij.",
        "Slaba prostorska orientacija, se izgubi v hodniku, ne more organizirati materialov na mizi.",
        "Nerodni gibi, pogosto padanje ali trčanje s predmeti.",
        "Težave z nalogami samooskrbe (zapenjanje gumbov, vezanje čevljev).",
        "Lahko je zakasnjen govor ali težave z nalogami zaporedja.",
      ]},
      { items: [
        "<strong>To ni</strong> nepazljivost ali lenoba, motorično načrtovanje je nevrološko moteno.",
        "<strong>To ni</strong> vidno od zunaj, težave se pogosto zamenjuje z nerodnošto.",
        "<strong>To se ne izboljša</strong> samo z večjo prakso, potrebna je strukturirana terapija.",
      ]},
      { items: [
        "Ponudi alternative pisanju (računalniška tipkovnica, glasovni posnetek).",
        "Dovoli dodatni čas za naloge, ki zahtevajo ročno spretnost.",
        "Zmanjšaj obseg pisanja, osredotoči se na vsebino, ne na prezentacijo.",
        "Posvetuj se z delovnim terapevtom glede prilagoditve razrednega okolja.",
      ]},
      { items: [
        "Pojasni, da to ni lenoba, učenec se trudi, toda proces načrtovanja je moten.",
        "Izpostavi kompenzacijske strategije, ki jih učenec že uporablja.",
        "Razpravi o prilagoditvah domačih nalog: manj, osredotočeno, z uporabo tehnologije.",
        "Spodbudi posvet z delovnim terapevtom ali fizioterapevtom prek šolske podpore.",
      ]},
      { items: [
        "Resno poslabšanje samozavesti ali socialna izolacija.",
        "Fizična varnost ogrožena med telesno vzgojo.",
        "Brez napredka kljub stalni podpori.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Hitro usvoji novo vsebino in izgubi zanimanje za naloge ponavljanja.",
        "Postavlja globoka, navidezno neprimerna vprašanja, ki motijo pouk.",
        "Lahko kaže neenakomeren razvoj, izjemen intelekt skupaj s socialno ali čustveno nezrelostjo.",
        "Lahko se upira rutini in strukturiranim nalogam, ki se mu zdijo prelahke.",
        "Lahko se počuti izoliranega od vrstnikov, ker se interesi in komunikacijski slog razlikujeta.",
      ]},
      { items: [
        "<strong>To ni</strong> zagotovilo akademskega uspeha, potencial se morda ne uresniči brez ustreznih izzivov.",
        "<strong>To ni</strong> isto kot odlične ocene, nekateri visoko sposobni otroci namerno ne vlagajo truda.",
        "<strong>To ne izključuje</strong> drugih potreb, dvojne izjemnosti (visoka sposobnost + disleksija, ADHD itd.) so pogoste.",
      ]},
      { items: [
        "Ponudi obogajeno ali pospešeno vsebino, ne le več istega.",
        "Dovoli neodvisne projekte ali poglobljeno raziskovanje.",
        "Uporabi učenčeve interese kot vstopne točke v zahtevnejšo vsebino.",
        "Poveži z drugimi visoko sposobnimi otroki pri projektnem delu, kadar je mogoče.",
      ]},
      { items: [
        "Izogibaj se argumentu 'je tako pameten, tega ne potrebuje', vsi otroci potrebujejo izziv.",
        "Pojasni, da brez ustrezne stimulacije se lahko razvijejo motivacijske težave.",
        "Razpravi o možnostih obogatitve, ki jih je mogoče uvesti doma.",
        "Poudari čustvene potrebe: visoko sposobni otroci lahko trpijo za perfekcionizmom, anksioznostjo.",
      ]},
      { items: [
        "Popolna zavrnitev šole ali zavrnitev sodelovanja.",
        "Depresija, izolacija ali čustvene krize.",
        "Izrazita neskladnost med sposobnostjo in uspehom brez jasnega razloga.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Lahko govori tekoče, a se bori z akademsko rabo jezika pri predmetnih urah.",
        "Vedenje tihega obdobja, ne govori, a zaznava in razume.",
        "Napake, ki odražajo vpliv maternega jezika (transfer), ne nerazumevanja.",
        "Lahko se zdi utrujeno ali raztreseno, kognitivna obremenitev učenja v drugem jeziku je velika.",
        "Neskladnost med ustnim in pisnim uspehom ali med predmeti.",
      ]},
      { items: [
        "<strong>To ni</strong> učna težava, proces usvajanja jezika je normalen.",
        "<strong>Ni primerno</strong> ocenjevati učenca s slovenščino kot tujim jezikom enako kot govorca maternega jezika.",
        "<strong>Materni jezik ni ovira</strong>, dvojezičnost je kognitivna prednost.",
      ]},
      { items: [
        "Uporabi vizualne podpore, diagrame, dvojezične slovarje pri pouku.",
        "Dovoli več časa za naloge in pri izpitih.",
        "Ocenjuj vsebino ločeno od jezikovne forme, kadar je cilj znanje.",
        "Sodeluj s specialistom za slovenščino kot drugi in tuji jezik (SDTJ) ali učiteljem podpore.",
      ]},
      { items: [
        "Vključi tolmača ali posrednika na sestanke, kadar je potrebno.",
        "Izogibaj se predpostavkam o izobrazbeni ravni ali jezikovnih kompetencah družine.",
        "Pojasni stopnje usvajanja jezika, tiho obdobje, akademski jezik zahteva dlje.",
        "Poudari, da je dvojezičnost prednost, ne problem.",
      ]},
      { items: [
        "Vztrajne težave po 2 letih podpore brez napredka.",
        "Sum na latentne učne težave poleg jezikovne ovire.",
        "Izolacija ali zavračanje s strani vrstnikov zaradi jezika.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Zaupnost je temelj, diagnoze, družinski okoliščini in podporni ukrepi se brez potrebe ne delijo s kolegi.",
        "Oznaka lahko ščiti (dostop do podpore) ali škoduje (stigma, znižana pričakovanja), zavedaj se konteksta.",
        "Govori z učencem, ne o učencu, celo majhni otroci so upravičeni sodelovati pri odločitvah o svojih potrebah.",
        "Izogibaj se javnemu razkrivanju prilagoditev, diskretnost ščiti dostojanstvo.",
      ]},
      { items: [
        "Ne deli diagnoz ali informacij o družini zunaj delujoče strokovne ekipe.",
        "Dokumenti o podpori se hranijo v skladu z GDPR (Splošna uredba o varstvu podatkov) in politiko šole.",
        "Starši/skrbniki imajo pravico dostopati do informacij o podpornih ukrepih za svojega otroka.",
      ]},
      { items: [
        "Raznolikost v razredu ni breme, je naravna in izboljšuje kakovost poučevanja za vse.",
        "Izogibaj se popravljanju ali normaliziranju učenca, njihova naloga je razvoj, ne skladnost z normo.",
        "Postavi si vprašanje: čigave interese ta odločitev služi, učencu ali instituciji?",
      ]},
      { items: [
        "Nerealna pričakovanja so lahko škodljiva enako kot nizka pričakovanja, iščemo izzivno, a dosegljivo.",
        "Priznavaj lastne predsodke: ali od učencev določene skupine pričakuješ manj?",
        "Podpora ni privilegij, je pravica, in dostopna mora biti brez dodatnih ovir.",
        "Samooskrba ni sebičnost, učitelj, ki doživlja izgorelost, ne more učinkovito podpirati nikogar.",
        "Posvetuj se s kolegi v etično zapletenih primerih, inkluzija zahteva timski pristop.",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Ta modul je namenjen prilagajanju in praktični uporabi v razredu, ne pasivnemu branju.",
        "Vsaka strategija temelji na dokazih in je prilagodljiva vašemu kontekstu.",
      ]},
      { items: [
        "Format besedila: velikost pisave vsaj 12pt; razmak med vrsticami 1,5; Arial ali Calibri namesto Times New Roman.",
        "Barvne kode in vizualne rutine ustvarjajo predvidljivost in zmanjšujejo kognitivno obremenitev.",
        "Prilagoditve izpitov: dodatni čas, ločena soba, bralec ali pisec.",
        "Digitalna orodja: besedilo v govor, govor v besedilo, digitalni slovarji.",
        "Diferenciacija: isti učni cilji, toda različni načini predstavitve in vrste nastopa.",
        "Univerzalni dizajn za učenje (UDL): načrtovati inkluzivnost od začetka, ne prilagajati naknadno.",
      ]},
      { items: [
        "Poveži se s šolsko svetovalno službo (šolski psiholog, socialni pedagog) za zgodnjo intervencijo.",
        "Vključi multidisciplinarno ekipo (razrednik, učitelj podpore, starši).",
        "Dokumentiraj prilagoditve, pisni zapisi ščitijo tako učenca kot učitelja.",
      ]},
      { items: [
        "Uporabi formativno ocenjevanje, pogostejši, majhni koraki so boljši od letnega izpita.",
        "Izogibaj se primerjanju z razredom, ocenjuj individualni napredek.",
        "Povratne informacije morajo biti specifične, pravočasne in usmerjene v rast.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Zakon o usmerjanju otrok s posebnimi potrebami (ZUOPP-1, 2011) ureja postopek usmerjanja in pravice otrok s posebnimi potrebami.",
        "Zakon o osnovni šoli in Zakon o organizaciji in financiranju vzgoje in izobraževanja dopolnjujeta inkluzivno izobraževanje.",
        "Slovenija je ratificirala Konvencijo ZN o pravicah invalidov (CRPD).",
      ]},
      { items: [
        "Komisija za usmerjanje (pri Zavodu RS za šolstvo) oceni potrebe otroka in izda odločbo o usmeritvi.",
        "Zavod RS za šolstvo (ZRSŠ) zagotavlja strokovno podporo šolam pri inkluziji.",
        "Šolska svetovalna služba (šolski psiholog, socialni pedagog, specialni pedagog) je ključna pri oblikovanju podpore.",
      ]},
      { items: [
        "Individualiziran program (IP) se pripravi za vsakega otroka, usmerjenega v izobraževalni program s prilagojenim izvajanjem.",
        "Dodatna strokovna pomoč (DSP) je financirana s strani ministrstva in se izvaja individualno ali v skupinah.",
        "Asistent se lahko dodeli za podporo pri vsakodnevnem funkcioniranju v šoli.",
        "Prilagojena šolska obveznost omogoča fleksibilnejše izvajanje obveznega šolanja.",
      ]},
      { items: [
        "Slovenščina kot drugi in tuji jezik (SDTJ) je namenjena učencem, katerih materinščina ni slovenščina.",
        "Program za integracijo otrok priseljencev zagotavlja začetno jezykovno podporo.",
        "Medkulturni asistenti so na voljo v nekaterih šolah za podporo migrantskim učencem in njihovim družinam.",
      ]},
      { items: [
        "Ministrstvo za izobraževanje, znanost in šport (MIZŠ) usmerja politiko inkluzivnega izobraževanja.",
        "Varuh človekovih pravic obravnava pritožbe glede kršitev pravic v izobraževanju.",
        "Šole morajo zagotoviti fizično dostopnost in prilagoditve v skladu z zakonodajo.",
      ]},
      { items: [
        "Starši so enakovredni partnerji v postopku usmerjanja in pri oblikovanju IP.",
        "Otrok je vključen v oblikovanje IP glede na starost in zmožnosti.",
        "Pritožba zoper odločbo o usmeritvi se vloži pri Ministrstvu za izobraževanje v roku 15 dni.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Pedagoška diferenciacija pomeni prilagoditev načina poučevanja, ne zniževanje pričakovanj. Učni cilj je lahko enak za vse učence; razlikuje se pot.",
        "Model UDL (Univerzalno oblikovanje za učenje) predlaga tri načela: večkratne načine reprezentacije (kako je vsebina predstavljena), večkratne načine delovanja in izražanja (kako učenec odgovori) in večkratne načine vključevanja (kaj motivira učenca).",
        "Diferenciacija ne pomeni ustvarjanja individualnega učnega načrta za vsakega učenca, pomeni ustvarjanje dovolj prožnosti, da ista ura služi različnim profilom učencev.",
      ]},
      { items: [
        "<strong>Ni</strong> zmanjševanje učnega načrta za učence s težavami.",
        "<strong>Ni</strong> vedno dajanje različnih nalog različnim učencem, to izolira in etiketira.",
        "<strong>Niso</strong> le diferencirani delovni listi, diferenciacija vključuje način, kako učitelj razlaga, sprašuje in ocenjuje.",
      ]},
      { items: [
        "Nadzorovana izbira: ponuditi 2–3 možnosti formata odgovora (pisni, ustni, shematični risbi), vsi učenci odgovarjajo na isto vsebino.",
        "Scaffolding: učencem s težavami zagotoviti strukturiran okvir; ga postopoma odstranjujte, ko raste samostojnost.",
        "Fleksibilno skupinsko delo: skupine po interesu, ravni obvladanja ali mešane, zamenjujte, da se izognete stalnim skupinam, ki postanejo identitete.",
        "Časovne prilagoditve: več časa ne pomeni manj strogosti. Za učence z ADHD ali dispraksijo razdelite nalogo na segmente z načrtovanimi odmori.",
        "Stopnja zahtevnosti: za isto temo ustvarite različice z več ali manj jezikovne podpore, s primeri ali brez, z vizualnimi namigi ali brez.",
      ]},
      { items: [
        "Ocenite, kaj učenec ve, ne kako piše. Učenec z disleksijo lahko ustno ali s tehnološko podporo izkaže konceptualno obvladanje.",
        "Jasna merila ocenjevanja, ki so deljena pred nalogo, učencu omogočajo vedeti, kaj se pričakuje, ne glede na izbrani format.",
        "Portfelj ali ocenjevanje na podlagi dokazov učencu omogoča, da pokaže napredek skozi čas, ne le v enem testnem trenutku.",
      ]},
      { items: [
        "Ko diferenciacija v razredu ni več zadostna in učenec še vedno ne more dostopati do učnega načrta, to lahko kaže na potrebo po specialistični podpori.",
        "Diferenciacija ne nadomešča šolskih podpornih ukrepov (šolski psiholog, terapevti, specialna pedagogika), to je tisto, kar dopolnilno poteka v rednem razredu.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Formativno ocenjevanje je vsaka praksa, ki med procesom zbira informacije o učenju, in te informacije uporablja za prilagoditev poučevanja ali podpore učencu.",
        "Za razliko od sumativnega ocenjevanja (zaključne ocene) formativno ne potrebuje ocene, potrebuje povratno informacijo.",
        "Za nevrodivergentne učence je formativno ocenjevanje posebej pomembno, ker uspešnost pri enkratnem preizkusu morda ne odraža tega, kar dejansko vedo.",
      ]},
      { items: [
        "<strong>Izhodni listek</strong>: na koncu ure učenec v 2 minutah odgovori na vprašanje, učitelj takoj vidi, kdo je razumel in kdo ni.",
        "<strong>Semafor</strong>: zelena (razumel sem), rumena (imam dvome), rdeča (nisem razumel), so lahko fizične kartice, lepilni listki ali digitalno.",
        "<strong>Think-Pair-Share</strong>: učenec razmišlja individualno, razpravlja s partnerjem, nato deli s razredom, zmanjša tesnobo ob neposrednem odgovoru.",
        "<strong>Izhodna vrata</strong>: preden odide, učenec učitelju pove eno stvar, ki se jo je naučil, in en dvom, ki ga ima še vedno.",
      ]},
      { items: [
        "Učinkovita povratna informacija je specifična, izvedljiva in pravočasna: \'na strani 2 se argument izgubi, ker manjka povezava z dokazom\' je koristno; \'lahko bi bilo boljše\' ni.",
        "Za učence z ADHD: takojšnja povratna informacija je učinkovitejša od zakasnele. Ne čakajte do konca naloge.",
        "Za učence z disleksijo: ustna ali zvočna povratna informacija je lahko bolj dostopna od obsežnih pisnih komentarjev.",
        "Izogibajte se primerjanju učencev med seboj, primerjajte učenca z njegovim lastnim prejšnjim napredkom.",
      ]},
      { items: [
        "ADHD: ocenjevanje v več kratkih trenutkih namesto enega dolgega preizkusa. Zmanjšajte moteče dražljaje v okolju ocenjevanja.",
        "Disleksija: dovolite ustne odgovore, dodaten čas ali uporabo pretvorbe besedila v govor. Ocenite vsebino, ne pravopisa.",
        "Avtizem: ocenjevanja z jasnimi, nedvoumnimi pisnimi navodili. Vnaprej opozorite na spremembe formata.",
        "Nadarjenost: izogibajte se ocenjevanjem golega reproduciranja vsebine, vključite vprašanja analize, sinteze in ustvarjanja.",
      ]},
      { items: [
        "Ko učenec kljub prilagoditvam ocenjevanja ne more izkazati učenja, je to znak, da je morda globlja ovira, ki jo je treba preiskati s šolskim psihologom.",
        "Vztrajni vzorci (meseci, ne dnevi) specifičnih težav na nekem področju morajo biti formalno prijavljeni.",
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
        "D'fhéadfadh sé hipear-fhócas a dhéanamh ar an méid a bhfuil suim aige ann, rud a thugann an tuiscint (mhícheart) gur „féidir leis nuair is mian leis”; i ndáiríre, athraíonn a fheidhmíocht de réir an spéis agus an luaíocht.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "<strong>Ní</strong> drochbhéasaíocht, leisce ná easpa carachtair atá ann: déanann na smaointe míchearta seo stiogmatú agus cuireann siad moill ar an tacaíocht.<sup class=\"cite\"><a href=\"#ref-3\">3</a></sup>",
        "<strong>Ní</strong> hipirghníomhaíocht fheiceálach i gcónaí atá ann — tá léiriú ann atá neamhairdiúil den chuid is mó, atá níos coitianta i gcailíní agus a ndéantar tearcdhiagnóis air go minic.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Ní</strong> réitítear é le „níos mó iarrachta”: tá an deacracht san fhéinrialáil néareolaíoch, ní san toil.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Roinn na treoracha ina mblúiríní: ceann amháin ag an am, scríofa ar an gclár, le ham sainithe — laghdaíonn sé seo an t-ualach ar an gcuimhne oibre.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ceadaigh gluaiseacht dhlisteanach (ábhair a dháileadh, an clár a ghlanadh, teachtaireachtaí a iompar).",
        "Laghdaigh spreagthaí iomaíocha (suíomh i bhfad ón bhfuinneog, ón doras, ón ngrúpa is callánaí).",
        "Treisiú dearfach láithreach agus go minic: in ADHD tá an íogaireacht don luaíocht athraithe (col leis an bhfanacht), agus mar sin oibríonn luaíochtaí láithreacha níos fearr ná cinn mhoillithe.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Tosaigh leis an méid a dhéanann an dalta go maith — ní féidir leis an gcruinniú oscailt mar liosta gearán, nó dúnann an tuismitheoir/caomhnóir é féin go cosantach.",
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
        "Nuair nach é an scríbhneoireacht a mheas an cuspóir, déan an t-ábhar a mheas ar leithligh ón litriú.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Difríocht shuntasach idir feidhmíocht ó bhéal agus feidhmíocht scríofa gan diagnóis fhoirmiúil — atreoraigh chuig measúnú síocoideolaíoch.<sup class=\"cite\"><a href=\"#ref-1\">1</a></sup>",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Deacrachtaí le hathruithe gan réamhfhógra, athruithe ar amchlár, seomra nó múinteoir ionaid.",
        "Cumarsáid liteartha, cailleann siad caolchuid, ironaíocht, nathanna idiomacha.",
        "Íogaireacht smaoinithe, solas fluaraiseach, torann cúlra, lipéid éadaí is féidir a bheith do-fhulaingthe.",
        "Spéiseanna dírithe agus domhain i dtopaicí sonracha.",
        "Is cosúil go bhfuil siad as láthair nó cianfhuara nuair atá siad faoi ró-ualach, ní múchta amach.",
      ]},
      { items: [
        "<strong>Ní hé</strong> scála líneach é ('níos mó' nó 'níos lú' uathúil), is próifíl iltoiseach é.",
        "<strong>Ní hé</strong> easpa comhbhá é, is minic a bhíonn a mhalairt ann, le deacrachtaí ag scagadh ionchuir.",
        "<strong>Ní hé</strong> drochghiúmar é nuair a bhristear gnáthamh, is freagairt néareolaíoch fíor é.",
      ]},
      { items: [
        "Tabhair réamhrabhadh faoi aon athrú gnáthamh, fiú cinn nach bhfuil cuma thábhachtach orthu.",
        "Déan rialacha sóisialta intuigthe ina rialacha follasacha (cad ba cheart a dhéanamh, cad nach ba cheart, cathain).",
        "Ceadaigh sosanna smaoinithe i spás ciúin nuair is gá.",
        "Úsáid spéiseanna an scoláire mar phointí iontrála i gcomhábhar foghlamtha.",
      ]},
      { items: [
        "Tosaigh le breathnuithe sonracha, ná diagnósaigh ag an gcruinniú.",
        "Tabhair faisnéis i scríbhinn, is deacair foirmiúlacht bhéil a choimeád.",
        "Seachain an argóint 'déanann gach leanbh sin', tá deacrachtaí smaoinithe agus sóisialta fíor.",
        "Míniú go bhfeabhsaíonn idirghabhál luath (tacaíocht, ní ceilt) torthaí fadtéarmacha.",
      ]},
      { items: [
        "Eachtraí géarchéime a chuireann sábháilteacht an scoláire nó daoine eile i gcontúirt.",
        "Iomlán aonraithe sóisialta ó chomhscoláirí.",
        "Cúlú i scileanna a bhí acu cheana.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Deacrachtaí le tascanna a éilíonn comhordú cruinn lámh: scríbhneoireacht, líníocht, siosúir a úsáid.",
        "Treoshuíomh spásúil lag, cailltear sa halla, ní féidir ábhair a eagrú ar dheasc.",
        "Gluaiseachtaí ciotacha, titim go minic nó baint le rudaí.",
        "Deacrachtaí le tascanna féincúraim (cnaipí a dhaingniú, lásaí a cheangal).",
        "D'fhéadfadh moill urlabhra a bheith ann nó deacrachtaí le tascanna sraitheacha.",
      ]},
      { items: [
        "<strong>Ní hé</strong> neamhairde ná leisciúlacht é, tá pleanáil mhótarach truaillithe go néareolaíoch.",
        "<strong>Ní féidir é a fheiceáil</strong> ón taobh amuigh, is minic a bhíonn deacrachtaí measctha le ciotaíocht.",
        "<strong>Ní fheabhsaíonn sé</strong> le cleachtas amháin, teastaíonn teiripe struchtúrtha.",
      ]},
      { items: [
        "Tairg roghanna seachas scríbhneoireacht (méarchlár ríomhaire, taifead gutha).",
        "Ceadaigh am breise do thascanna a éilíonn lámhoilteacht.",
        "Laghdaigh méid na scríbhneoireachta, dírigh ar ábhar, ní ar chur i láthair.",
        "Comhairliú le teiripí saothair faoi oiriúnú timpeallacht an ranga.",
      ]},
      { items: [
        "Mínigh nach leisciúlacht é, tá an scoláire ag iarraidh, ach tá próiseas pleanála truaillithe.",
        "Aibhsigh straitéisí cúitimh atá á n-úsáid ag an scoláire cheana féin.",
        "Pléigh oiriúnuithe obair bhaile: níos lú, dírithe, ag baint úsáide as teicneolaíocht.",
        "Spreag dul i gcomhairle le teiripí saothair nó fisiteiripeoir tríd an tacaíocht scoile.",
      ]},
      { items: [
        "Laghdú tromchúiseach ar féinmheas nó aonrú sóisialta.",
        "Sábháilteacht fhisiciúil i gcontúirt le linn corpoideachas.",
        "Gan dul chun cinn d'ainneoin tacaíochta leanúnaí.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Foghlaimíonn ábhar nua go tapa agus cailleann spéis i dtascanna athrua.",
        "Ceisteanna domhna, mícheart de chosúlacht a dhéanann cur isteach ar an gceacht.",
        "Is féidir forbairt mhíchothrom a thaispeáint, intleacht iontach agus aibíocht shóisialta nó mhothúchánach íseal.",
        "Is féidir leo cur i gcoinne gnáthaimh agus tascanna struchtúrtha má cheapann siad go bhfuil siad ró-éasca.",
        "Is féidir leo a mhothú aonraithe ó chomhghleacaithe mar go bhfuil difríocht idir spéiseanna agus stíl cumarsáide.",
      ]},
      { items: [
        "<strong>Ní ráthaíonn sé</strong> rath acadúil, is féidir nach gcomhlíonfar an cumas mura bhfuil dúshlán cuí ann.",
        "<strong>Ní hionann é</strong> agus marcanna iontacha, déanann roinnt leanaí ardchumais iarracht d'aon ghnó gan a gcumas a léiriú.",
        "<strong>Ní eisiann sé</strong> riachtanais eile, tá sé coitianta go mbíonn eisceachtúlacht dhúbailte (ardcumas + disléicse, ADHD srl.).",
      ]},
      { items: [
        "Tairg ábhar saibhrithe nó luasaithe, ní níos mó den rud céanna.",
        "Ceadaigh tionscadail neamhspleácha nó taighde domhain.",
        "Úsáid spéiseanna an scoláire mar phointí iontrála i gcomhábhar níos casta.",
        "Ceangail le leanaí ardchumais eile i dtionscadal-obair, nuair is féidir.",
      ]},
      { items: [
        "Seachain an argóint 'tá sé chomh cliste sin, ní gá dó é', teastaíonn dúshlán ó gach leanbh.",
        "Míniú go bhféadfadh fadhbanna spreagtha forbairt gan spreagadh cuí.",
        "Pléigh deiseanna saibhrithe is féidir a thabhairt isteach sa bhaile.",
        "Béim a leagan ar riachtanais mothúchánacha: is féidir le leanaí ardchumais fulaingt ó phearsantacht foirfe, imní.",
      ]},
      { items: [
        "Iomlán diúltú don scoil nó diúltú páirt a ghlacadh.",
        "Dúlagar, aonrú nó géarchéimeanna mothúchánacha.",
        "Éagsúlacht shuntasach idir cumas agus feidhmíocht gan chúis shoiléir.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Is féidir labhairt go líofa, ach bíonn deacracht le húsáid acadúil na teanga i ranganna ábhar.",
        "Iompar na tréimhse ciúine, ní labhraíonn, ach braithean agus tuigeann.",
        "Earráidí a léiríonn tionchar na máthairgha (aistriú), ní easpa tuisceana.",
        "Is cosúil go bhfuil siad tuirseach nó dearmadach, tá ualach cognaíoch foghlama i dteanga eile mór.",
        "Éagsúlacht feidhmíochta idir béil agus scríofa nó idir ábhair.",
      ]},
      { items: [
        "<strong>Ní hé</strong> deacracht foghlama é, tá próiseas sealbhaithe teanga gnách.",
        "<strong>Ní cuí</strong> scoláire PLNM a mheasúnú ar an gcaoi chéanna le cainteoir dúchais.",
        "<strong>Ní constaicí</strong> an mháthairtheanga, is buntáiste cognaíoch é dátheangachas.",
      ]},
      { items: [
        "Úsáid tacaí amhairc, léaráidí, foclóirí dátheangacha i rith na gceachtanna.",
        "Ceadaigh am breise do thascanna agus scrúduithe.",
        "Measúnaigh ábhar ar leithligh ó fhoirm teanga nuair is é an cuspóir eolas.",
        "Comhoibrigh le speisialtóir Béarla mar Theanga Bhreise (EAL) nó le múinteoir tacaíochta.",
      ]},
      { items: [
        "Áirigh ateangaire nó idirghabhálaí do chruinnithe nuair is gá.",
        "Seachain toimhdí faoi leibhéal oideachais nó inniúlachtaí teanga an teaghlaigh.",
        "Míniú céimeanna sealbhaithe teanga, tréimhse chiúin, teanga acadúil i bhfad níos faide.",
        "Béim a leagan air gur buntáiste, ní fadhb, é dátheangachas.",
      ]},
      { items: [
        "Deacrachtaí leanúnacha tar éis 2 bliana tacaíochta gan dul chun cinn.",
        "Amhras faoi dheacrachtaí foghlama folaigh in aice leis an mbacainn teanga.",
        "Aonrú nó diúltú ó chomhghleacaithe mar gheall ar theanga.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Is bunús é an rúndacht, ní chóir diagnóisí, imthosca teaghlaigh agus bearta tacaíochta a roinnt le comhghleacaithe gan gá.",
        "Is féidir le lipéad cosaint (rochtain ar thacaíocht) nó dochar (stigma, laghdú súil) a dhéanamh, bí feasach ar an gcomhthéacs.",
        "Labhair leis an scoláire, ní fúthu, tá fiú leanaí óga i dteideal páirt a ghlacadh i gcinntí faoina riachtanais.",
        "Seachain na hoiriúnuithe a nochtadh go poiblí, cosnaíonn discréid dínit.",
      ]},
      { items: [
        "Ná roinn diagnóisí nó faisnéis teaghlaigh lasmuigh den fhoireann ghairmiúil oibre.",
        "Coinnítear doiciméid tacaíochta de réir GDPR (An Rialachán Ginearálta um Chosaint Sonraí) agus polasaí na scoile.",
        "Tá ceart ag tuismitheoirí/caomhnóirí rochtain a fháil ar fhaisnéis faoi bhearta tacaíochta a gclainne.",
      ]},
      { items: [
        "Ní hualach é éagsúlacht sa rang, tá sé nádúrtha agus feabhsaíonn sé cáilíocht an teagaisc do chách.",
        "Seachain an scoláire a dheisiú nó a normalú, is é a gcúram forbairt a dhéanamh, ní cloí leis an norm.",
        "Cuir ceist ort féin: cé leis a fhreastalaíonn an cinneadh seo, ar an scoláire nó ar an institiúid?",
      ]},
      { items: [
        "Is féidir le súile neamhréadúla dochar a dhéanamh chomh maith le súile ísle, cuardaigh an méid atá dúshlánach ach inbhainte amach.",
        "Aithin do chlaontachtaí féin: an bhfuil tú ag súil le níos lú ó ghrúpa áirithe scoláirí?",
        "Ní pribhléid é tacaíocht, is ceart é, agus ba cheart rochtain air a bheith ar fáil gan bac breise.",
        "Ní leithleachas é féincúram, ní féidir le múinteoir atá ag fulaingt ó bhreoslú amach tacú go héifeachtach le duine ar bith.",
        "Comhairliú le comhghleacaithe i gcásanna deacra ó thaobh na heitice, éilíonn cuimsiú cur chuige foirne.",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Tá an modúl seo ceaptha le haghaidh oiriúnaithe agus úsáide praiticiúla sa rang, ní le léamh passively.",
        "Tá gach straitéis bunaithe ar fhianaise agus oiriúnaithe do do chomhthéacs.",
      ]},
      { items: [
        "Formáid téacs: méid cló ar a laghad 12pt; spásáil línte 1.5; Arial nó Calibri in ionad Times New Roman.",
        "Cóid dathanna agus gnáthamha amhairc cruthaíonn intuartha agus laghdaíonn ualach cognaíoch.",
        "Oiriúnuithe scrúdaithe: am breise, seomra ar leith, léitheoir nó scríobhaí.",
        "Uirlisí digiteacha: téacs go caint, caint go téacs, foclóirí digiteacha.",
        "Difreálú: na spriocanna foghlama céanna, ach cur i láthair éagsúil agus cineálacha feidhmíochta.",
        "Dearadh Uilíoch don Fhoghlaim (UDL): pleanáil le haghaidh cuimsithe ón tús, ní oiriúnú ina dhiaidh.",
      ]},
      { items: [
        "Ceangail le Seirbhís Náisiúnta Síceolaíochta Oideachais (NEPS) le haghaidh idirghabhála luaithe.",
        "Áirigh foireann ildisciplíneach (múinteoir ranga, múinteoir acmhainne, tuismitheoirí).",
        "Doiciméadaigh oiriúnuithe, cosnaíonn taifid scríofa an scoláire agus an múinteoir araon.",
      ]},
      { items: [
        "Úsáid measúnú foirmitheach, céimeanna beaga, minice níos fearr ná scrúdú bliantúil.",
        "Seachain comparáid leis an rang, measúnaigh dul chun cinn aonair.",
        "Caithfidh aiseolas a bheith sonrach, tráthúil agus dírithe ar fhás.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "Acht Oideachais 1998 bunaíonn creat ginearálta d'oideachas uilíoch agus comhionann in Éirinn.",
        "Acht um Oideachas do Dhaoine a bhfuil Riachtanais Speisialta Oideachais acu (EPSEN Act, 2004) leagann amach cearta agus próisis le haghaidh measúnú agus plean oideachais aonair.",
        "Tá Éire tiomanta do Choinbhinsiún na NA ar Chearta Daoine faoi Mhíchumas (CRPD).",
      ]},
      { items: [
        "NCSE (An Chomhairle Náisiúnta um Oideachas Speisialta) comhordaíonn seirbhísí agus foirgníonn beartais cuimsiúcháin.",
        "Baill foirne tacaíochta scoile (SNA, Cúntóir Riachtanas Speisialta) tacaíonn le scoláirí i dtimpeallacht an ranga.",
        "NEPS (An tSeirbhís Náisiúnta Síceolaíochta Oideachais) déanann measúnú agus tacaíonn le scoláirí.",
      ]},
      { items: [
        "IEP (Plean Oideachais Aonair) réamhshocraithe ag múinteoir acmhainne, tuismitheoirí agus NCSE.",
        "Múinteoirí Acmhainne agus Foghlaim-Tacaíochta cuireann tacaíocht dhíreach ar fáil laistigh den rang agus lasmuigh de.",
        "Cúntóirí Riachtanas Speisialta (SNAnna) cuireann cúnamh pearsanta ar fáil leis an scoláire.",
        "Measúnú síceolaíoch tríd NEPS nó trí chleachtas príobháideach mar shíol don IEP.",
      ]},
      { items: [
        "Béarla mar Theanga Bhreise (EAL) ar fáil le haghaidh scoláirí a dtéann Gaeilge nó Béarla ar a gcomhscoláire.",
        "Cláir chuideachta teanga tacaíonn le scoláirí imirceacha agus dídeanaithe.",
        "Tá an NCSE freagrach as tacaíocht a eagrú do scoláirí ón gcoigríoch.",
      ]},
      { items: [
        "Roinn Oideachais agus Scileanna (DES) maoirsíonn beartas agus maoiniú le haghaidh scoláirí le riachtanais speisialta.",
        "Cigireacht scoile ag Cigireacht na Roinne measúnaíonn caighdeán cuimsiúcháin.",
        "Ombudsman do Leanaí imscrúdaíonn gearáin ó thuismitheoirí faoi sheirbhísí oideachais.",
      ]},
      { items: [
        "Tá tuismitheoirí ina bpáirtithe bunúsacha san IEP agus caithfear a dtoiliú a fháil do mheasúnú.",
        "Is féidir le tuismitheoirí gearán a dhéanamh le NCSE nó leis an Ombudsman do Leanaí mura bhfuil siad sásta.",
        "Tá teidlíochtaí scoláirí bunaithe ar thuarascálacha measúnaithe agus ar mholtaí NCSE.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Is éard is difreálú oideolaíoch ann ná an bealach múinte a oiriúnú, ní hé laghdú na n-ionchais. Is féidir leis an sprioc foghlama a bheith mar an gcéanna do na foghlaimeoirí go léir; an cosán a athraíonn.",
        "Molann múnla an UDL (Dearadh Uilíoch don Fhoghlaim) trí phrionsabal: modhanna iolracha léiriúcháin (conas a chuirtear an t-ábhar i láthair), modhanna iolracha gníomhaíochta agus léirithe (conas a fhreagraíonn an foghlaimeoir) agus modhanna iolracha rannpháirtíochta (cad a spreagann an foghlaimeoir).",
        "Ní chiallaíonn difreálú plean ceachta aonair a chruthú do gach foghlaimeoir, ciallaíonn sé go leor solúbthachta a chruthú ionas go bhfreastalódh an ceacht céanna ar phróifílí foghlaimeoirí éagsúla.",
      ]},
      { items: [
        "<strong>Ní hé</strong> laghdú an churaclaim do foghlaimeoirí a bhfuil deacrachtaí acu.",
        "<strong>Ní hé</strong> tascanna éagsúla a thabhairt i gcónaí do foghlaimeoirí éagsúla, cuireann sin isteach ar an gcomhthreomhaireacht agus déanann sé lipéadú.",
        "<strong>Ní</strong> obair dhifreálaithe ar pháipéar amháin é, cuimsíonn difreálú an chaoi a míníonn, a chuireann ceist agus a mheasúnaíonn an múinteoir.",
      ]},
      { items: [
        "Rogha rialaithe: 2–3 rogha formáid freagartha a thairiscint (scríofa, béil, léaráid scéimreach), freagraíonn na foghlaimeoirí go léir don ábhar céanna.",
        "Scaffolding: creat struchtúrtha a sholáthar do foghlaimeoirí a bhfuil deacrachtaí acu; é a bhaint de réir a chéile de réir mar a fhásann an neamhspleáchas.",
        "Grúpáil sholúbtha: grúpaí de réir spéise, leibhéal máistreachta nó measctha, rothlú chun grúpaí seasta a sheachaint a éiríonn ina bhféiniúlachtaí.",
        "Coigeartuithe ama: ní chiallaíonn níos mó ama níos lú déine. Do foghlaimeoirí le ADHD nó dispraxia, roinn an tasc ina chodanna le sos pleanáilte.",
        "Leibhéal castachta: don ábhar céanna, cruthaigh leaganacha le tacaíocht teanga níos mó nó níos lú, le samplaí nó gan, le leideanna amhairc nó gan.",
      ]},
      { items: [
        "Measúnaigh an méid a bhfuil an foghlaimeoir ar eolas faoi, ní conas a scríobhann sé nó sí. Is féidir le foghlaimeoir a bhfuil disléicse aige nó aige máistreacht choincheapúil a léiriú go béil nó le tacaíocht teicneolaíochta.",
        "Ligeann critéir mheasúnaithe shoiléire a roinntear roimh an tasc don fhoghlaimeoir a fháil amach cad atá ag súil leis beag beann ar an bhformáid a roghnaítear.",
        "Ligeann an portfolio nó measúnú bunaithe ar fhianaise don fhoghlaimeoir dul chun cinn a thaispeáint le himeacht ama, ní díreach ag nóiméad amháin trialacha.",
      ]},
      { items: [
        "Nuair nach bhfuil difreálú sa seomra ranga leordhóthanach a thuilleadh agus nach féidir leis an bhfoghlaimeoir fós rochtain a fháil ar an gcuraclam, is féidir go bhfuil sé ag comharthaíocht riachtanas le haghaidh tacaíochta saineolaí.",
        "Ní chuireann difreálú in áit beart tacaíochta scoile (síceolaí scoile, teiripeoirí, oideachas speisialta), is é sin a tharlaíonn sa ghnáth-rang mar chomhlánú.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "Is é measúnú foirmitheach aon chleachtas a bhailíonn faisnéis faoin bhfoghlaim le linn an phróisis, agus a úsáideann an fhaisnéis sin chun an teagasc nó an tacaíocht don fhoghlaimeoir a choigeartú.",
        "Murab ionann agus measúnú suimiúil (marcanna deiridh), ní theastaíonn marc ón measúnú foirmitheach, teastaíonn aiseolas.",
        "Do foghlaimeoirí neuroéagsúla, tá measúnú foirmitheach tábhachtach go háirithe mar go mb\'fhéidir nach léireoidh feidhmíocht ar thástáil aonuaire cad atá ar eolas acu iarbhír.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: ag deireadh an cheachta, freagraíonn an foghlaimeoir ceist i 2 nóiméad, feiceann an múinteoir láithreach cé a thuig agus cé nár thuig.",
        "<strong>Tráchtsolas</strong>: glas (thuig mé), buí (tá amhras orm), dearg (níor thuig mé), is féidir cártaí fisiciúla, nótaí greamaithe nó digiteach a bheith ann.",
        "<strong>Think-Pair-Share</strong>: smaoiníonn an foghlaimeoir go haonair, pléann sé nó sí le comhpháirtí, ansin roinneann sé nó sí leis an rang, laghdaíonn sé imní faoin bhfreagra díreach.",
        "<strong>Geata Imeachta</strong>: sula bhfágann sé nó sí, insíonn an foghlaimeoir don mhúinteoir rud amháin a d\'fhoghlaim sé nó sí agus amhras amháin atá fós aige nó aice.",
      ]},
      { items: [
        "Tá aiseolas éifeachtach sonrach, gníomhach agus tráthúil: \'ar leathanach 2, cailltear an argóint toisc go bhfuil an nasc leis an bhfianaise ar iarraidh\' tá sé úsáideach; \'d\'fhéadfadh sé a bheith níos fearr\' níl.",
        "Do foghlaimeoirí le ADHD: tá aiseolas láithreach níos éifeachtaí ná aiseolas moillithe. Ná fan go dtí deireadh an taisc.",
        "Do foghlaimeoirí le disléicse: is féidir le haiseolas béil nó fuaime a bheith níos inrochtana ná tuairimí scríofa faidhbhiotacha.",
        "Seachain foghlaimeoirí a chur i gcomparáid le chéile, cuir an foghlaimeoir i gcomparáid lena chuid dul chun cinn roimhe féin.",
      ]},
      { items: [
        "ADHD: measúnú ag nóiméid ghearr iolracha seachas tástáil fhada amháin. Laghdaigh dreasachtaí seachránacha sa timpeallacht mheasúnaithe.",
        "Disléicse: ceadaigh freagraí béil, am breise, nó úsáid téacs-go-caint. Measúnaigh an t-ábhar, ní an litriú.",
        "Uathachas: measúnuithe le treoracha scríofa soiléire agus gan débhrí. Tabhair fógra roimh ré faoi athruithe formáide.",
        "Ardacmhainneacht: seachain measúnuithe atá bunaithe ar atáirgeadh ábhair amháin, cuir ceisteanna anailíse, sintéise agus cruthaitheachta san áireamh.",
      ]},
      { items: [
        "Nuair nach féidir leis an bhfoghlaimeoir foghlaim a léiriú fiú le hoiriúnuithe measúnaithe, is comhartha é go bhféadfadh bac níos doimhne a bheith ann le himscrúdú leis an síceolaí scoile.",
        "Ba cheart patrúin leanúnacha (míonna, ní laethanta) de dheacracht shonrach i réimse a thuairisciú go foirmiúil.",
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
        "<strong>Mhux</strong> dejjem ipperattività viżibbli — hemm preżentazzjoni predominantement inattenta, aktar frekwenti fil-bniet u ħafna drabi sottodijanjostikata.<sup class=\"cite\"><a href=\"#ref-1\">1</a>,<a href=\"#ref-5\">5</a></sup>",
        "<strong>Ma jissolvix</strong> b'„jagħmel aktar sforz”: id-diffikultà tinsab fl-awtoregolazzjoni newroloġika, mhux fir-rieda.<sup class=\"cite\"><a href=\"#ref-2\">2</a>,<a href=\"#ref-3\">3</a></sup>",
      ]},
      { items: [
        "Aqsam l-istruzzjonijiet: waħda kull darba, bil-miktub fuq il-bord, b'ħin definit — dan inaqqas il-piż fuq il-memorja tax-xogħol.<sup class=\"cite\"><a href=\"#ref-2\">2</a></sup>",
        "Ippermetti moviment leġittimu (tqassim ta' materjali, tħassir tal-bord, twassil ta' messaġġi).",
        "Naqqas l-istimoli kompetittivi (post 'il bogħod mit-tieqa, mill-bieb, mill-aktar grupp storbjuż).",
        "Tisħiħ pożittiv immedjat u frekwenti: fl-ADHD is-sensittività għall-premju hija mibdula (avversjoni għall-istennija), għalhekk il-premjijiet immedjati jaħdmu aħjar minn dawk imdewma.<sup class=\"cite\"><a href=\"#ref-4\">4</a></sup>",
      ]},
      { items: [
        "Ibda b'dak li l-istudent jagħmel tajjeb — il-laqgħa ma tistax tinfetaħ bħala lista ta' lmenti, inkella l-ġenitur/kustodju jingħalaq b'mod difensiv.",
        "Iddeskrivi mġiba osservata, mhux dijanjożijiet: „meta jkun hemm aktar minn żewġ passi wara xulxin, jitlef il-ħajt” minflok „għandu l-ADHD”.",
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
        "Meta l-għan ma jkunx li tevalwa l-kitba, evalwa l-kontenut separatament mill-ortografija.<sup class=\"cite\"><a href=\"#ref-5\">5</a></sup>",
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
        "Diffikultajiet b'bidliet mhux imħabbra, bidliet fl-orarju, fis-sala, jew fil-supplent.",
        "Komunikazzjoni litterali, titlef in-nuance, l-ironija, l-espressjonijiet idiomatiċi.",
        "Sensittività sensorjali, dawl fjuwrexxenti, ħoss ta' sfond, tikketti tal-ħwejjeġ jistgħu jkunu intollerabbli.",
        "Interessi ffokati u profondi f'suġġetti speċifiċi.",
        "Jista' jidher disenġaġġat jew distanzijar meta hija mdawra, mhux mitfija.",
      ]},
      { items: [
        "<strong>Mhijiex</strong> skala lineari ('aktar' jew 'inqas' awtistiku), hija profil multidimensjonali.",
        "<strong>Mhijiex</strong> nuqqas ta' empatija, spiss huwa l-oppost, b'diffikultajiet fil-filtrazzjoni tal-input.",
        "<strong>Mhijiex</strong> mġieba ħażina meta jinkiser ir-rutina, hija rispons newroloġiku reali.",
      ]},
      { items: [
        "Agħti twissija bil-quddiem dwar kwalunkwe bidla fir-rutina, anke dawk li jidhru trivjali.",
        "Agħmel ir-regoli soċjali impliċiti f'regoli espliti (x'tagħmel, x'ma tagħmelx, meta).",
        "Ippermetti pawżi sensorjali f'spazju kwiet meta meħtieġ.",
        "Uża l-interessi tal-istudent bħala punti ta' dħul fil-kontenut tal-tagħlim.",
      ]},
      { items: [
        "Ibda b'osservazzjonijiet konkreti, tiddijanjostikax fil-laqgħa.",
        "Agħti informazzjoni bil-miktub, l-verbali huwa diffiċli biex tinżamm.",
        "Evita l-argument 'kull tifel/tifla jagħmel/tagħmel hekk', id-diffikultajiet sensorjali u soċjali huma reali.",
        "Fissira li l-intervent bikri (appoġġ, mhux ħabi) ittejjeb ir-riżultati fit-tul.",
      ]},
      { items: [
        "Episodji ta' kriżi li jpoġġu fis-sigurtà tal-istudent jew ta' oħrajn.",
        "Iżolament soċjali komplet minn sħabhom.",
        "Regressjoni f'ħiliet akkwistati qabel.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Diffikultajiet bil-kompiti li jeħtieġu koordinament preċiż tal-idejn: kitba, tpinġija, użu ta' qxur.",
        "Orjentament spazjali dgħajjef, jintilef fil-kuridur, ma jistax jorganizza materjali fuq l-iskrivanija.",
        "Movimenti mhux eleganti, waqgħat frekwenti jew taħbita ma' oġġetti.",
        "Diffikultajiet bil-kompiti ta' awto-kura (jgħalleq il-buttuni, jorbot il-qraben).",
        "Jista' jkun hemm dewmien fil-kliem jew diffikultajiet bil-kompiti ta' sekwenzar.",
      ]},
      { items: [
        "<strong>Mhijiex</strong> inattenzjoni jew għażż, il-pjanifikazzjoni motorja hija mfixkla newroloġikament.",
        "<strong>Ma tidhirx</strong> minn barra, id-diffikultajiet spiss jintbdlu mal-goffaġni.",
        "<strong>Ma ttejjibx</strong> bil-prattika waħedha, tista' jeħtieġ terapija strutturata.",
      ]},
      { items: [
        "Offri alternattivi għall-kitba (tastiera tal-kompjuter, reġistrazzjoni bil-vuċi).",
        "Ippermetti aktar żmien għall-kompiti li jeħtieġu abilità manwali.",
        "Naqqas il-kwantità tal-kitba, iffoka fuq il-kontenut, mhux il-preżentazzjoni.",
        "Ikkonsulta terapeuta okkupazzjonali dwar adattament tal-ambjent tal-klassi.",
      ]},
      { items: [
        "Fissira li mhux għażż, l-istudent qed jipprova, iżda l-proċess ta' pjanifikazzjoni huwa mfixkel.",
        "Agħraf l-istrateġiji kumpensatorji li l-istudent diġà juża.",
        "Iddiskuti adattamenti tad-devoirs: inqas, iffukati, bl-użu tat-teknoloġija.",
        "Ħeġġeġ konsultazzjoni ma' terapeuta okkupazzjonali jew fisjoterapeuta permezz tal-appoġġ tal-iskola.",
      ]},
      { items: [
        "Tnaqqis serju fl-istima tagħha stess jew iżolament soċjali.",
        "Sigurtà fiżika fir-riskju waqt l-edukazzjoni fiżika.",
        "L-ebda progress minkejja appoġġ kontinwu.",
      ]},
    ]},
    sobredotacao: { sections: [
      { items: [
        "Titgħallem kontenut ġdid malajr u titlef l-interess fil-kompiti ta' ripetizzjoni.",
        "Tagħmel mistoqsijiet profondi, li jidhru barra l-post, li jinterrompu l-lezzjoni.",
        "Tista' turi żvilupp mhux ugwali, intellett straordinarju b'immaturi soċjali jew emozzjonali.",
        "Tista' tirreżisti r-rutini u l-kompiti strutturati jekk iqishom faċli wisq.",
        "Tista' tħoss ruħha iżolata mill-pari minħabba li l-interessi u l-istil ta' komunikazzjoni huma differenti.",
      ]},
      { items: [
        "<strong>Mhijiex</strong> garanzija ta' suċċess akkademiku, il-potenzjal jista' ma jintlaħaqx mingħajr sfida adegwata.",
        "<strong>Mhijiex</strong> l-istess bħal gradi eċċellenti, xi tfal bi kapaċità għolja jippruvaw deliberatament ftit.",
        "<strong>Ma teskludi</strong> bżonnijiet oħra, l-eċċezzjonalità doppja (kapaċità għolja + dislexia, ADHD eċċ.) hija komuni.",
      ]},
      { items: [
        "Offri kontenut arrikkit jew aċċellerat, mhux aktar tal-istess.",
        "Ippermetti proġetti indipendenti jew riċerka fil-fond.",
        "Uża l-interessi tal-istudent bħala punti ta' dħul fi kontenut aktar kumpless.",
        "Qabbad ma' tfal oħra ta' kapaċità għolja fil-proġetti meta possibbli.",
      ]},
      { items: [
        "Evita l-argument 'huwa/hija daqshekk intelliġenti, ma jeħtieġx', kull tifel/tifla jeħtieġ sfida.",
        "Fissira li mingħajr stimolazzjoni adegwata jistgħu jiżviluppaw problemi ta' motivazzjoni.",
        "Iddiskuti opportunitajiet ta' arrikiment li jistgħu jiġu introdotti d-dar.",
        "Enfasizza l-bżonnijiet emozzjonali: tfal ta' kapaċità għolja jistgħu jsofru minn perfezzjoniżmu, ansjetà.",
      ]},
      { items: [
        "Rifjut komplet tal-iskola jew rifjut li tipparteċipa.",
        "Dipressjoni, iżolament jew kriżijiet emozzjonali.",
        "Diverġenza sinifikanti bejn il-kapaċità u l-prestazzjoni mingħajr raġuni ċara.",
      ]},
    ]},
    plnm: { sections: [
      { items: [
        "Tista' titkellem fluwenti, iżda tiġġieled mal-użu akkademiku tal-lingwa fis-suġġetti.",
        "Imġieba tal-perjodu kwiet, ma tgħidx, iżda tipperċepixxi u tifhem.",
        "Żbalji li jirriflettu l-influwenza tal-lingwa materna (trasferiment), mhux nuqqas ta' fehim.",
        "Tista' tidher għajjiena jew distratta, il-piż konjittiv tat-tagħlim f'lingwa oħra huwa kbir.",
        "Diverġenza fil-prestazzjoni bejn il-verbali u l-miktub jew bejn is-suġġetti.",
      ]},
      { items: [
        "<strong>Mhijiex</strong> diffikultà fl-apprendiment, il-proċess tal-akkwiżizzjoni tal-lingwa huwa normali.",
        "<strong>Mhix xieraq</strong> li tevalwa student PLNM bl-istess mod bħal kelliem nattiv.",
        "<strong>Il-lingwa materna mhijiex ostaklu</strong>, il-bilingwaliżmu huwa vantaġġ konjittiv.",
      ]},
      { items: [
        "Uża appoġġi viżwali, dijagrami, dizzjunarji bilingwi waqt il-lezzjonijiet.",
        "Ippermetti aktar żmien għall-kompiti u l-eżamijiet.",
        "Evalwa l-kontenut separatament mill-forma tal-lingwa meta l-għan huwa l-għarfien.",
        "Agħmel kollaborazzjoni ma' speċjalista f'Malti jew Ingliż bħala lingwa tal-istruzzjoni.",
      ]},
      { items: [
        "Inkludix interpretu jew medjatur għal-laqgħat meta meħtieġ.",
        "Evita l-assunzjonijiet dwar il-livell ta' edukazzjoni jew il-kompetenza lingwistika tal-familja.",
        "Fissira l-istadji tal-akkwiżizzjoni tal-lingwa, perjodu kwiet, il-lingwa akkademika tieħu aktar żmien.",
        "Enfasizza li l-bilingwaliżmu huwa vantaġġ, mhux problema.",
      ]},
      { items: [
        "Diffikultajiet persistenti wara 2 snin appoġġ mingħajr progress.",
        "Suspett ta' diffikultajiet ta' tagħlim latenti flimkien mal-barriera lingwistika.",
        "Iżolament jew rifjut mill-pari minħabba l-lingwa.",
      ]},
    ]},
    etica: { sections: [
      { items: [
        "Il-kunfidenzjalità hija l-bażi, id-dijanjosi, iċ-ċirkostanzi tal-familja u l-miżuri ta' appoġġ ma għandhomx jinqasmu mal-kollegi mingħajr ħtieġa.",
        "It-tikketta tista' tipproteġi (aċċess għall-appoġġ) jew tagħmel ħsara (stigma, aspettattivi mnaqqsa), kun konxju tal-kuntest.",
        "Tkellem mal-istudent, mhux dwaru, anke t-tfal żgħar għandhom id-dritt jipparteċipaw fid-deċiżjonijiet dwar il-bżonnijiet tagħhom.",
        "Evita li tagħmel l-adattamenti pubbliċi, id-diskrezzjoni tipproteġi d-dinjità.",
      ]},
      { items: [
        "Taqsamx id-dijanjosi jew informazzjoni tal-familja barra t-tim professjonali li jaħdem.",
        "Id-dokumenti ta' appoġġ jinżammu skont ir-Regolament Ġenerali dwar il-Protezzjoni tad-Data (GDPR) u l-politika tal-iskola.",
        "Il-ġenituri/kustodji għandhom id-dritt tal-aċċess għall-informazzjoni dwar il-miżuri ta' appoġġ ta' wliedhom.",
      ]},
      { items: [
        "Id-diversità fil-klassi mhijiex piż, hija naturali u ttejjeb il-kwalità tat-tagħlim għal kulħadd.",
        "Evita li tissewwi jew tormalizza l-istudent, il-kompitu tagħhom huwa li jiżviluppaw, mhux li jikkonformaw man-norma.",
        "Staqsi lilek innifsek: l-interessi ta' min qed iservi din id-deċiżjoni, tal-istudent jew tal-istituzzjoni?",
      ]},
      { items: [
        "L-aspettattivi mhux realistiċi jistgħu jagħmlu ħsara daqs l-aspettattivi baxxi, fittex dak li huwa sfidanti iżda attenwabbli.",
        "Agħraf il-preġudizzji tiegħek stess: qed tistenna inqas minn grupp partikolari ta' studenti?",
        "L-appoġġ mhux privileġġ, huwa dritt, u l-aċċess għalih għandu jkun disponibbli mingħajr ostakli addizzjonali.",
        "Il-kura ta' nfisk mhix egoiżmu, l-għalliem li qed ibati minn burnout ma jistax jappoġġja lil ħadd b'mod effettiv.",
        "Ikkonsulta lill-kollegi f'każi diffiċli etikament, l-inklużjoni teħtieġ approċċ ta' tim.",
      ]},
    ]},
    oficina: { sections: [
      { items: [
        "Dan il-modulu huwa maħsub għall-adattament u l-użu prattiku fil-klassi, mhux għal qari passiv.",
        "Kull strateġija hija bbażata fuq evidenza u adattabbli għall-kuntest tiegħek.",
      ]},
      { items: [
        "Format tat-test: daqs tal-font ta' mill-anqas 12pt; spazjar bejn il-linji 1.5; Arial jew Calibri minflok Times New Roman.",
        "Kodiċi ta' kuluri u rutini viżwali joħolqu prevedibbiltà u jnaqqsu l-piż konjittiv.",
        "Adattamenti tal-eżami: żmien żejjed, kamra separata, qarrej jew kittieb.",
        "Għodod diġitali: test għall-vuċi, vuċi għat-test, dizzjunarji diġitali.",
        "Differenzjazzjoni: l-istess objettivi ta' tagħlim, iżda rappreżentazzjonijiet differenti u tipi ta' prestazzjoni.",
        "Disinn Universali għat-Tagħlim (UDL): ppjanar għall-inklużjoni mill-bidu, mhux adattament wara.",
      ]},
      { items: [
        "Aqta' l-kuntatt mal-Aġenzija tal-Inklużjoni fl-Edukazzjoni (Inclusion Education Agency) jew mal-LSE tal-iskola.",
        "Inkludix tim multidisċiplinarji (għalliem tal-klassi, LSE, ġenituri).",
        "Iddomentika l-adattamenti, ir-rekords bil-miktub jipproteġu lill-istudent u lill-għalliem.",
      ]},
      { items: [
        "Uża evalwazzjoni formattiva, passi żgħar, frekwenti aħjar minn eżami annwali.",
        "Evita l-paragun mal-klassi, evalwa l-progress individwali.",
        "Il-feedback irid ikun speċifiku, fil-waqt u dwar it-tkabbir.",
      ]},
    ]},
    legislacao: { sections: [
      { items: [
        "L-Att dwar l-Edukazzjoni (Kap. 327, 1988, emendat) jobbliga l-inklużjoni u l-aċċess għall-edukazzjoni għat-tfal kollha.",
        "Il-Politika tal-Edukazzjoni Inklussiva (2019, ibbażata fuq ir-Rapport Bellerate) tartikolà l-approċċ Malti għall-bżonnijiet speċjali.",
        "Malta rratifikat il-Konvenzjoni tal-NU dwar id-Drittijiet tal-Persuni b'Diżabilità (CRPD).",
      ]},
      { items: [
        "KNPD (Kummissjoni Nazzjonali Persuni b'Diżabilità) timmonitorja d-drittijiet u tibbenefikja mill-politika nazzjonali.",
        "LSE (Learning Support Educator) jappoġġja lill-istudenti b'bżonnijiet speċjali fil-klassi regolari.",
        "Id-Dipartiment tal-Inklużjoni u r-Riżorsi tal-Edukazzjoni (DIER) jimmaniġġja s-servizzi ta' bżonnijiet speċjali.",
      ]},
      { items: [
        "Student Development Programme (SDP) jistabbilixxi l-objettivi u l-adattamenti individwalizzati għal kull student.",
        "Statement of Needs: dokument li jidentifika l-bżonnijiet ta' student wara stħarriġ professjonali.",
        "LSEs jappoġġjaw in-needful students fiċ-ċirkustanzi tal-klassi ordinarja.",
        "Psikologi skolastiċi huma disponibbli permezz tal-Iskejjel tal-Gvern u l-Ispjega tal-Edukazzjoni.",
      ]},
      { items: [
        "Il-Malti u l-Ingliż huma l-ilsna uffiċjali tal-istruzzjoni f'Malta.",
        "L-appoġġ lingwistiku addizzjonali huwa disponibbli għal studenti li l-lingwa materna tagħhom mhix il-Malti jew l-Ingliż.",
        "Programmi ta' integrazzjon għal studenti migranti u refuġjati huma koordinati mill-Aġenzija tal-Inklużjoni.",
      ]},
      { items: [
        "Il-Ministeru tal-Edukazzjoni u l-Impjieg jissorvelja l-politika u l-implimentazzjoni tal-inklużjoni.",
        "Il-Kummissarju tal-Edukazzjoni jieħu l-ilmenti dwar id-drittijiet tal-edukazzjoni.",
        "L-iskejjel għandhom jipproduċu Pjan ta' Inklużjoni u jirreġistraw l-adattamenti li jsiru.",
      ]},
      { items: [
        "Il-ġenituri huma msejħa biex jipparteċipaw fl-SDP u fil-laqgħat ta' reviżjoni.",
        "L-istudenti għandhom id-dritt li jiġu informati dwar id-drittijiet tagħhom fl-edukazzjoni.",
        "L-ilmenti jistgħu jiġu ppreżentati lill-Kummissarju tal-Edukazzjoni jew lill-Ombudsman.",
      ]},
    ]},
    diferenciacao: { sections: [
      { items: [
        "Id-differenzjazzjoni pedagoġika tfisser l-adattament tal-mod kif tgħallem, mhux it-tnaqqis tal-aspettattivi. L-għan tat-tagħlim jista\' jkun l-istess għall-istudenti kollha; il-mogħdija hija dik li tvarja.",
        "Il-mudell UDL (Universal Design for Learning) jipproponi tliet prinċipji: mezzi multipli ta\' rappreżentazzjoni (kif jiġi ppreżentat il-kontenut), mezzi multipli ta\' azzjoni u espressjoni (kif l-istudent iwieġeb) u mezzi multipli ta\' involviment (x\'imotivah l-istudent).",
        "Id-differenzjazzjoni ma tfissirx il-ħolqien ta\' pjan individwali tal-lezzjoni għal kull student, tfisser il-ħolqien ta\' flessibilità biżżejjed sabiex l-istess lezzjoni sservi profili differenti ta\' studenti.",
      ]},
      { items: [
        "<strong>Mhijiex</strong> it-tnaqqis tal-kurrikulu għall-istudenti bi diffikultajiet.",
        "<strong>Mhijiex</strong> dejjem ttagħti kompiti differenti lil studenti differenti, dan jiżola u jittikketta.",
        "<strong>Mhijiex</strong> biss fogli ta\' ħidma differenzjata, id-differenzjazzjoni tinkludi l-mod kif l-għalliem jispjega, jistaqsi u jevalwa.",
      ]},
      { items: [
        "Għażla kkontrollata: offri 2–3 għażliet ta\' format ta\' tweġiba (bil-miktub, oralment, tpinġija skematika), l-istudenti kollha jwieġbu għall-istess kontenut.",
        "Scaffolding: ipprovdi qafas strutturat għall-istudenti bi diffikultajiet; neħħieh gradwalment hekk kif tikber l-awtonimija.",
        "Raggruppament flessibbli: gruppi skont l-interess, il-livell ta\' dominju jew imħallta, iddawwar biex tevita gruppi fissi li jsiru identitajiet.",
        "Aġġustamenti tal-ħin: aktar ħin ma jfissirx inqas rigorozità. Għall-istudenti b\'ADHD jew dispraksja, aqsam il-kompitu f\'segmenti b\'waqfiet ippjanati.",
        "Livell ta\' kumplessità: għall-istess suġġett, oħloq verżjonijiet b\'aktar jew inqas appoġġ lingwistiku, b\'eżempji jew mingħajrhom, b\'indikazzjonijiet viżwali jew mingħajrhom.",
      ]},
      { items: [
        "Evalwa dak li jaf l-istudent, mhux kif jikteb. Student bid-disleksja jista\' juri dominju kunċettwali oralment jew b\'appoġġ teknoloġiku.",
        "Kriterji ċari tal-evalwazzjoni maqsuma qabel il-kompitu jippermettu lill-istudent li jaf x\'mistenni indipendentement mill-format magħżul.",
        "Il-portfolio jew l-evalwazzjoni bbażata fuq evidenza tippermetti lill-istudent li juri progress maż-żmien, mhux biss f\'mument ta\' test wieħed.",
      ]},
      { items: [
        "Meta d-differenzjazzjoni fil-klassi ma tibqax suffiċjenti u l-istudent ikompli ma jistax jaċċessa l-kurrikulu, dan jista\' jissinjalizza l-ħtieġa ta\' appoġġ speċjalizzat.",
        "Id-differenzjazzjoni ma tissostitwixxix il-miżuri ta\' appoġġ skolastiku (psikologu skolastiku, terapisti, edukazzjoni speċjali), hija dak li jiġri komplementarjament fil-klassi ordinarja.",
      ]},
    ]},
    avaliacao: { sections: [
      { items: [
        "L-evalwazzjoni formattiva hija kull prattika li tiġbor informazzjoni dwar it-tagħlim matul il-proċess, u tuża dik l-informazzjoni biex tadatta t-tagħlim jew l-appoġġ lill-istudent.",
        "B\'differenza mill-evalwazzjoni sommattiva (gradi finali), il-formattiva ma teħtieġx grad, teħtieġ feedback.",
        "Għall-istudenti newrodiverġenti, l-evalwazzjoni formattiva hija partikolarment importanti għax il-prestazzjoni f\'test ta\' darba waħda jista\' ma jirriflettix dak li jafuh fil-fatt.",
      ]},
      { items: [
        "<strong>Exit ticket</strong>: fl-aħħar tal-lezzjoni, l-istudent iwieġeb domanda fi 2 minuti, l-għalliem jara immedjatament min fehem u min ma fehimx.",
        "<strong>Semaforu</strong>: aħdar (fhimt), isfar (għandi dubji), aħmar (ma fhimtx), jistgħu jkunu karti fiżiċi, post-its, jew diġitali.",
        "<strong>Think-Pair-Share</strong>: l-istudent jaħseb individwalment, jiddiskuti ma\' sieħeb, imbagħad jaqsam mal-klassi, inaqqas l-ansjeta dwar tweġiba diretta.",
        "<strong>Bieb tal-ħruġ</strong>: qabel joħroġ, l-istudent jgħid lill-għalliem ħaġa waħda li tgħallem u dubju wieħed li għad għandu.",
      ]},
      { items: [
        "Feedback effettiv huwa speċifiku, attwabbli u f\'waqtu: \'fil-paġna 2, l-argument jintilef għax il-konnessjoni mal-evidenza nieqsa\' huwa utli; \'setgħet tkun aħjar\' mhux.",
        "Għall-istudenti b\'ADHD: feedback immedjat huwa aktar effettiv minn dak differit. Tistenna s-sat t-tmiem tal-kompitu.",
        "Għall-istudenti bid-disleksja: feedback orali jew awdjo jista\' jkun aktar aċċessibbli minn kummenti miktuba estensivi.",
        "Evita li tqabbel l-istudenti ma\' xulxin, qabbel lill-istudent mal-progress preċedenti tiegħu stess.",
      ]},
      { items: [
        "ADHD: evalwazzjoni f\'ħafna mumenti qosra minflok test twil wieħed. Naqqas l-istimoli li jdisturbaw fl-ambjent tal-evalwazzjoni.",
        "Disleksja: ippermetti tweġibiet orali, ħin żejjed, jew l-użu ta\' konverżjoni test-għall-vuċi. Evalwa l-kontenut, mhux l-ispejar.",
        "Awtiżmu: evalwazzjonijiet b\'istruzzjonijiet miktuba ċari u mingħajr ambigwità. Avża minn qabel dwar bidliet fil-format.",
        "Talent eċċezzjonali: evita evalwazzjonijiet ta\' riproduzzjoni sempliċi tal-kontenut, inkudi mistoqsijiet ta\' analiżi, sintesi u kreazzjoni.",
      ]},
      { items: [
        "Meta, anke b\'adattamenti tal-evalwazzjoni, l-istudent ma jistax juri t-tagħlim, dan huwa sinjal li jista\' jkun hemm ostaklu aktar profond x\'jiġi investigat mal-psikologu skolastiku.",
        "Mudelli persistenti (xhur, mhux ġranet) ta\' diffikulta\' speċifika f\'qasam għandhom jiġu rrappurtati formalment.",
      ]},
    ]},
  },

};
