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
        "Difficulty sustaining attention on long tasks; loses track during multi-step instructions.",
        "Constant movement — cannot stay seated, fidgets with hands, stands up without apparent reason.",
        "Answers before the question is finished; interrupts peers and the teacher.",
        "Forgets materials, deadlines, instructions given verbally just minutes earlier.",
        "Can hyper-focus on something of interest, giving the (mistaken) impression that \"they can do it when they want to\".",
      ]},
      { items: [
        "<strong>It is not</strong> bad manners, laziness, or a character flaw.",
        "<strong>It is not</strong> always visible hyperactivity — there is predominantly inattentive ADHD (more common in girls, frequently under-diagnosed).",
        "<strong>It is not</strong> resolved by \"trying harder\" — the issue is neurological, not motivational.",
      ]},
      { items: [
        "Chunked instructions: one at a time, written on the board, with a set time frame.",
        "Allow legitimate movement (distributing materials, cleaning the board, errands to the school counsellor).",
        "Reduce competing stimuli (seat away from the window, the door, the noisiest group).",
        "Immediate positive reinforcement — the neurological reward cycle is shorter in ADHD.",
      ]},
      { items: [
        "Start with what the student does well — the meeting cannot begin as a list of complaints or parents/guardians will become defensive.",
        "Describe observed behaviours, not diagnoses: \"when there are more than two steps in a row, they lose the thread\" rather than \"they have ADHD\".",
        "Anticipate the reaction \"they're not like that at home\" — explain that group context and the demand for sustained attention in the classroom make the symptoms more visible.",
        "If suggesting psychological assessment, present it as a resource, not a punishment: \"there is support available that could help them a great deal\" rather than \"they need to be assessed\".",
      ]},
      { items: [
        "Persistent disciplinary difficulties despite classroom adaptations.",
        "Signs of social exclusion by peers.",
        "Signs of comorbidity (anxiety, depression, oppositional defiant disorder).",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Reads slowly and with stumbling, even in texts they understand when heard aloud.",
        "Confuses visually similar letters (b/d, p/q); reverses the order of letters within words.",
        "Persistent spelling errors in written work that do not respond to repeated correction.",
        "Avoids reading aloud; may appear unwilling to participate when in fact they are self-protecting.",
        "Oral comprehension significantly higher than written comprehension.",
      ]},
      { items: [
        "<strong>It is not</strong> a lack of intelligence — dyslexia is independent of IQ.",
        "<strong>It is not</strong> just \"mixing up letters\" — it is a phonological processing disorder.",
        "<strong>It does not \"go away\"</strong> — it is managed with compensatory strategies throughout life.",
      ]},
      { items: [
        "Provide texts with adapted typography (OpenDyslexic or similar; increased spacing).",
        "Allow silent reading before any reading aloud — never call on someone without warning.",
        "Assess content separately from spelling when the objective is to assess knowledge.",
        "Offer multiple formats for the same information (video, audio, diagrams).",
      ]},
      { items: [
        "Explicitly separate reading from intelligence from the outset: \"your son/daughter understands very well when they listen — the difficulty is specific to written reading\".",
        "Be aware that one of the parents/guardians may have undiagnosed dyslexia — the conversation may trigger difficult memories of their own schooling.",
        "Avoid showing worksheets covered in red corrections without context — first present what the student can do, then what they need support with.",
        "Be concrete about the adaptations already being made and those parents/guardians can replicate at home: audio texts, reading aloud without time pressure.",
      ]},
      { items: [
        "Academic self-concept deteriorating (\"I'm stupid\", \"I can't do anything\").",
        "Systematic avoidance of reading/writing tasks to the point of compromising other subjects.",
        "Marked discrepancy between oral and written performance without a formal diagnosis.",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Difficulty with unannounced changes — changes to timetable, room, or substitute teacher.",
        "Literal communication — misses nuance, irony, idiomatic expressions.",
        "Sensory sensitivity — fluorescent lighting, background noise, clothing labels can be intolerable.",
        "Focused and deep interests in specific topics.",
        "May appear disengaged or distant when overwhelmed, not switched off.",
      ]},
      { items: [
        "<strong>It is not</strong> a linear scale (\"more\" or \"less\" autistic) — it is a multidimensional profile.",
        "<strong>It is not</strong> a lack of empathy — it is often the opposite, with difficulty filtering input.",
        "<strong>It is not</strong> bad behaviour when a routine is broken — it is a real neurological response.",
      ]},
      { items: [
        "Give advance warning of any change in routine, even apparently trivial ones.",
        "Make implicit social rules into explicit rules (what to do, what not to do, and when).",
        "Allow sensory breaks in a quiet space when needed.",
        "Use focused interests as an entry point into curriculum content.",
      ]},
      { items: [
        "If a diagnosis already exists, first ask what parents/guardians know works — parents of autistic children often know more about their child than any report.",
        "If there is no diagnosis, be very careful: describe concrete situations without ever using the word \"autism\" in a first meeting.",
        "Validate the parents/guardians' efforts — creating structure and predictability at home is demanding, and acknowledging it builds alliance.",
        "Never compare with \"other students\" or with siblings — every profile on the spectrum is different and comparison is always counterproductive.",
      ]},
      { items: [
        "Frequent meltdowns after the school day.",
        "Persistent school refusal associated with sensory overload.",
        "Progressive social isolation despite mediation attempts.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Handwriting is difficult, slow, and frequently illegible — not through carelessness but due to genuine motor difficulty.",
        "Difficulty with spatial organisation of notebook, managing materials, and sequencing steps.",
        "May appear \"clumsy\" — knocking over cups, bumping into furniture, difficulty in sports.",
        "Disproportionate fatigue after tasks requiring sustained fine coordination.",
        "The cognitive component is generally intact — frequent frustration between knowing and being able to show it.",
      ]},
      { items: [
        "<strong>It is not</strong> laziness or lack of effort.",
        "<strong>It is not</strong> just poor handwriting — it affects planning and sequencing of tasks.",
        "<strong>It is not</strong> resolved by \"practising handwriting more\".",
      ]},
      { items: [
        "Allow use of keyboard/tablet for extended written work.",
        "Reduce mechanical copying from the board — provide notes where relevant.",
        "Provide explicit checklists for tasks with multiple steps.",
        "Assess the product by its content, not its physical presentation.",
      ]},
      { items: [
        "Explain what dyspraxia is in plain language — most parents/guardians have never heard the term.",
        "Illegible handwriting is the biggest point of friction with parents/guardians — show that assessment now values content over form.",
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
        "Asks questions that go beyond the scope of the topic — or actively challenges what is being taught.",
        "May appear disinterested, disruptive, or apathetic — often signs of chronic boredom.",
        "Heightened emotional sensitivity; may be anxious, perfectionist, or unfairly demanding of themselves.",
        "Real risk of underperformance — learns to hide ability so as not to stand out socially.",
      ]},
      { items: [
        "<strong>It is not</strong> synonymous with good behaviour or good results — many gifted students have average results through disengagement.",
        "<strong>It is not</strong> \"doesn't need help\" — they need different challenges, not less attention.",
        "<strong>It is not</strong> incompatible with neurodivergence — twice-exceptional (2e) exists and is common.",
      ]},
      { items: [
        "Always have extension tasks ready — not more of the same, but deeper or applied material.",
        "Allow independent research on topics of the student's interest within the curriculum.",
        "Assess by challenge, not ease — ask for more demanding work in exchange for less volume.",
        "Acknowledge and validate emotional sensitivity without pathologising.",
      ]},
      { items: [
        "Anticipate pride and redirect it: \"your son/daughter is clearly very capable — and it is precisely because of this that boredom is creating problems\".",
        "Explain the giftedness paradox: good results do not mean everything is fine.",
        "If the student hides their ability to fit in socially, name it carefully — it is a sign of distress, not modesty.",
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
        "Understands far less than they appear to — may nod without having understood.",
        "Apparently low academic performance, frequently disproportionate to actual ability.",
        "Silence in class — may be an adaptive strategy, not disengagement.",
        "May be exhausted by the end of the day from mentally translating in real time.",
        "Risk of under-diagnosis of genuine educational needs by attributing everything to the language barrier.",
      ]},
      { items: [
        "<strong>It is not</strong> a lack of intelligence or ability.",
        "<strong>It is not</strong> just a matter of time — without explicit support, many EAL learners plateau at a low functional level.",
        "<strong>It is not</strong> resolved by automatic translation during the lesson — it is a process of years.",
      ]},
      { items: [
        "Provide materials with key vocabulary translated into the home language.",
        "Assess knowledge through visual or practical demonstration wherever possible.",
        "Pair with a bilingual peer for informal mediation at critical moments.",
        "Accept early written work with grammatical errors — correct content, not form, in the first phase.",
      ]},
      { items: [
        "The meeting itself is a barrier — parents/guardians may not speak English with sufficient proficiency.",
        "Do not assume parents/guardians know the school system — explain what the school counsellor does, what a support measure is, what an IEP entails.",
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
        "Verify where the tool stores data — European or non-European servers, anonymised or not.",
        "Never enter full names, addresses, identification numbers, or clinical diagnoses into generative AI tools.",
        "Distinguish institutional use (the school signs a contract) from personal use by the teacher (individual responsibility).",
      ]},
      { items: [
        "Systems trained predominantly on English-language data may perform poorly in other languages and non-anglophone contexts.",
        "Automated recommendations may amplify gender, ethnic, or class stereotypes — verify critically.",
        "\"Academic risk prediction\" models are particularly problematic — they frequently reproduce existing inequalities.",
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
        "This is not a presentation — it is a co-construction. Each participant leaves with at least one resource ready to test.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Framing — the problem of the mixed-ability class and why more of the same doesn't work.",
        "<strong>10–25 min:</strong> Profile mapping — presentation of the six Farol cards, with real (anonymised) cases.",
        "<strong>25–45 min:</strong> Practical demonstration — three tools, three use cases, three distinct profiles.",
        "<strong>45–75 min:</strong> Pair work — each pair adapts an existing material for a specific profile.",
        "<strong>75–85 min:</strong> Quick share — each pair presents their product in 1 minute.",
        "<strong>85–90 min:</strong> Commitments — each participant identifies a material to test and a feedback session is scheduled for 30 days' time.",
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
        "UN Convention on the Rights of Persons with Disabilities (UNCRPD, 2006) — ratified by Ireland and all EU Member States; establishes inclusive education as a right under Article 24.",
        "EU Strategy for the Rights of Persons with Disabilities 2021–2030 — commits Member States to accessible education, reasonable accommodation, and anti-discrimination measures.",
        "Education for Persons with Special Educational Needs Act 2004 (EPSEN Act) — Ireland's primary SEN legislation; establishes the right to an inclusive education and to an Individual Education Plan (IEP).",
        "National Council for Special Education (NCSE) — statutory body that allocates Special Education Teachers (SET) and Special Needs Assistants (SNA) to schools; publishes guidelines and policies.",
        "Circular 0014/2017 (DES) — allocates SET hours to schools using a profile-based model; hours are managed by the school to respond flexibly to identified needs.",
      ]},
      { items: [
        "Apply Universal Design for Learning (UDL) principles: provide multiple means of representation, action, expression, and engagement for all students.",
        "Use reasonable accommodations in class without requiring a formal diagnosis: extended time, oral responses, assistive technology access.",
        "Maintain an inclusive classroom environment that reduces sensory, organisational, and linguistic barriers for all learners.",
        "Record informal observations of any student who may have unmet needs — this is the starting point for any referral pathway.",
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
        "First step when concerned about a student: document, discuss with SET, contact parents/guardians — in that order.",
        "Data protection: all student support data is subject to GDPR and the Data Protection Act 2018; do not share sensitive information outside the student support team without consent.",
      ]},
    ]},
  },

  es: {
    tdah: { sections: [
      { items: [
        "Dificultad para mantener la atención en tareas largas; se pierde en instrucciones con múltiples pasos.",
        "Movimiento constante — no permanece sentado, se mueve con las manos, se levanta sin razón aparente.",
        "Responde antes de que termine la pregunta; interrumpe a los compañeros y al docente.",
        "Olvida materiales, plazos, instrucciones dadas oralmente hace apenas unos minutos.",
        "Puede hiperfocalizarse en algo que le interesa, dando la (errónea) impresión de que «puede cuando quiere».",
      ]},
      { items: [
        "<strong>No es</strong> mala educación, vagancia ni falta de carácter.",
        "<strong>No es</strong> siempre hiperactividad visible — existe el TDAH predominantemente desatento (más frecuente en niñas, frecuentemente infradiagnosticado).",
        "<strong>No se resuelve</strong> con «esforzarse más» — el problema es neurológico, no motivacional.",
      ]},
      { items: [
        "Instrucciones fragmentadas: una cada vez, escritas en la pizarra, con tiempo definido.",
        "Permitir movimiento legítimo (repartir materiales, borrar la pizarra, recados al orientador/a).",
        "Reducir estímulos competitivos (situar al alumno lejos de la ventana, la puerta o el grupo más ruidoso).",
        "Refuerzo positivo inmediato — el ciclo de recompensa neurológica es más corto en el TDAH.",
      ]},
      { items: [
        "Comenzar por lo que el alumno hace bien — la reunión no puede comenzar como una lista de quejas o las familias se pondrán a la defensiva.",
        "Describir comportamientos observados, no diagnósticos: «cuando hay más de dos pasos seguidos, pierde el hilo» en lugar de «tiene TDAH».",
        "Anticipar la reacción «en casa no es así» — explicar que el contexto de grupo y la exigencia de atención prolongada en el aula hacen los síntomas más visibles.",
        "Si se sugiere evaluación psicológica, presentarla como un recurso, no como un castigo: «hay apoyos disponibles que pueden ayudarle mucho» en lugar de «necesita ser evaluado/a».",
      ]},
      { items: [
        "Dificultades disciplinarias persistentes a pesar de las adaptaciones en el aula.",
        "Indicios de exclusión social por parte de los compañeros.",
        "Señales de comorbilidad (ansiedad, depresión, trastorno negativista desafiante).",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Lee despacio y con tropiezos, incluso en textos que comprende oralmente.",
        "Confunde letras visualmente similares (b/d, p/q); invierte el orden de las letras dentro de la palabra.",
        "Errores ortográficos persistentes en la escritura que no responden a la corrección repetida.",
        "Evita leer en voz alta; puede parecer que no quiere participar cuando en realidad se está protegiendo.",
        "Comprensión oral muy superior a la comprensión escrita.",
      ]},
      { items: [
        "<strong>No es</strong> falta de inteligencia — la dislexia es independiente del cociente intelectual.",
        "<strong>No es</strong> solo «cambiar letras» — es un trastorno del procesamiento fonológico.",
        "<strong>No se «cura»</strong> — se gestiona con estrategias compensatorias a lo largo de toda la vida.",
      ]},
      { items: [
        "Proporcionar textos con tipografía adaptada (OpenDyslexic o similar; espaciado aumentado).",
        "Permitir la lectura silenciosa antes de cualquier lectura en voz alta — nunca llamar por sorpresa.",
        "Evaluar el contenido de forma separada de la ortografía cuando el objetivo es evaluar el conocimiento.",
        "Ofrecer formatos múltiples para la misma información (vídeo, audio, esquemas).",
      ]},
      { items: [
        "Separar explícitamente lectura e inteligencia desde el principio: «su hijo/hija comprende muy bien cuando escucha — la dificultad es específica a la lectura escrita».",
        "Tener en cuenta que uno de los progenitores puede tener dislexia no diagnosticada — la conversación puede despertar recuerdos difíciles de su propia escolaridad.",
        "Evitar mostrar fichas con muchos errores en rojo sin contexto — presentar primero lo que el alumno es capaz de hacer y después lo que necesita apoyo.",
        "Ser concreto/a en las adaptaciones ya en marcha y en las que las familias pueden replicar en casa: textos en audio, lectura en voz alta sin presión de tiempo.",
      ]},
      { items: [
        "Autoconcepto académico en deterioro («soy tonto/a», «no puedo con esto»).",
        "Evitación sistemática de tareas de lectura/escritura hasta el punto de comprometer otras asignaturas.",
        "Discrepancia marcada entre rendimiento oral y escrito sin diagnóstico formal.",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Dificultad con los cambios no anunciados — cambio de horario, de aula o de profesor sustituto.",
        "Comunicación literal — no capta matices, ironía ni expresiones idiomáticas.",
        "Sensibilidad sensorial — la luz fluorescente, el ruido de fondo o las etiquetas de la ropa pueden ser intolerables.",
        "Intereses focalizados y profundos sobre temas específicos.",
        "Puede parecer desinteresado o distante cuando está sobrecargado, no desconectado.",
      ]},
      { items: [
        "<strong>No es</strong> una escala lineal («más» o «menos» autista) — es un perfil multidimensional.",
        "<strong>No es</strong> falta de empatía — con frecuencia es lo contrario, con dificultad para filtrar el entorno.",
        "<strong>No es</strong> mal comportamiento cuando se rompe una rutina — es una respuesta neurológica real.",
      ]},
      { items: [
        "Avisar con antelación de cualquier cambio de rutina, aunque parezca trivial.",
        "Convertir las reglas sociales implícitas en reglas explícitas (qué se hace, qué no se hace, cuándo).",
        "Permitir pausas sensoriales en un espacio tranquilo cuando sea necesario.",
        "Aprovechar el interés focalizado como punto de entrada a los contenidos curriculares.",
      ]},
      { items: [
        "Si ya existe diagnóstico, preguntar primero qué saben las familias que funciona — los padres de niños autistas suelen conocer a su hijo mejor que cualquier informe.",
        "Si no hay diagnóstico, ser muy cuidadoso/a: describir situaciones concretas sin utilizar nunca la palabra «autismo» en una primera reunión.",
        "Validar el esfuerzo de las familias — crear estructura y previsibilidad en casa es exigente, y reconocerlo genera alianza.",
        "Nunca comparar con «otros alumnos» o con hermanos — cada perfil del espectro es diferente y la comparación siempre es contraproducente.",
      ]},
      { items: [
        "Crisis frecuentes («meltdowns») después del día escolar.",
        "Rechazo escolar persistente asociado a sobrecarga sensorial.",
        "Aislamiento social progresivo a pesar de los intentos de mediación.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Escritura a mano difícil, lenta, frecuentemente ilegible — no por descuido sino por una dificultad motora real.",
        "Dificultad en la organización espacial del cuaderno, gestión de materiales y secuenciación de pasos.",
        "Puede parecer «torpe» — derrama vasos, choca con muebles, tiene dificultades en educación física.",
        "Cansancio desproporcionado tras tareas que requieren coordinación fina sostenida.",
        "La componente cognitiva suele estar preservada — frustración frecuente entre saber y poder demostrarlo.",
      ]},
      { items: [
        "<strong>No es</strong> vagancia ni falta de esfuerzo.",
        "<strong>No es</strong> simplemente mala caligrafía — afecta a la planificación y secuenciación de tareas.",
        "<strong>No se resuelve</strong> con «practicar más la escritura».",
      ]},
      { items: [
        "Permitir el uso de teclado/tableta en producciones escritas extensas.",
        "Reducir la copia mecánica de la pizarra — proporcionar apuntes cuando sea relevante.",
        "Facilitar listas de verificación explícitas para tareas con múltiples pasos.",
        "Evaluar el producto por su contenido, no por su presentación física.",
      ]},
      { items: [
        "Explicar qué es la dispraxia en lenguaje sencillo — la mayoría de las familias nunca han oído el término.",
        "La caligrafía ilegible es el mayor punto de fricción con las familias — mostrar que la evaluación ahora valora el contenido y no la forma.",
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
        "Hace preguntas que salen del ámbito de la materia — o desafía activamente lo que se está enseñando.",
        "Puede aparentar desinterés, indisciplina o apatía — con frecuencia son señales de aburrimiento crónico.",
        "Sensibilidad emocional acentuada; puede ser ansioso/a, perfeccionista o injustamente exigente consigo mismo/a.",
        "Riesgo real de bajo rendimiento — aprende a ocultar la capacidad para no destacar socialmente.",
      ]},
      { items: [
        "<strong>No es</strong> sinónimo de buen comportamiento o buenos resultados — muchos alumnos con altas capacidades tienen resultados mediocres por desinterés.",
        "<strong>No es</strong> «no necesita ayuda» — necesita desafíos diferentes, no menos atención.",
        "<strong>No es</strong> incompatible con la neurodivergencia — la doble excepcionalidad (2e) existe y es frecuente.",
      ]},
      { items: [
        "Tener siempre tareas de ampliación preparadas — no más de lo mismo, sino materia más profunda o aplicada.",
        "Permitir investigación independiente sobre temas de interés del alumno dentro del currículo.",
        "Evaluar por el nivel de desafío, no por la facilidad — pedir trabajos más exigentes a cambio de menor volumen.",
        "Reconocer y validar la sensibilidad emocional sin patologizarla.",
      ]},
      { items: [
        "Anticipar el orgullo y redirigirlo: «su hijo/hija es claramente muy capaz — y es precisamente por eso que el aburrimiento está creando problemas».",
        "Explicar la paradoja de las altas capacidades: buenos resultados no significan que todo esté bien.",
        "Si el alumno oculta su capacidad para integrarse socialmente, nombrarlo con cuidado — es una señal de sufrimiento, no de modestia.",
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
        "Comprende mucho menos de lo que aparenta — puede asentir sin haber entendido.",
        "Rendimiento académico aparentemente bajo, frecuentemente desproporcionado a su capacidad real.",
        "Silencio en el aula — puede ser una estrategia adaptativa, no desinterés.",
        "Puede estar agotado/a al final del día por traducir mentalmente en tiempo real.",
        "Riesgo de infradiagnóstico de necesidades educativas reales al atribuir todo a la barrera lingüística.",
      ]},
      { items: [
        "<strong>No es</strong> falta de inteligencia ni de capacidad.",
        "<strong>No es</strong> solo cuestión de tiempo — sin apoyo explícito, muchos alumnos ANCE se estabilizan en un nivel funcional bajo.",
        "<strong>No se resuelve</strong> con traducción automática durante la clase — es un proceso de años.",
      ]},
      { items: [
        "Proporcionar materiales con vocabulario clave traducido a la lengua materna.",
        "Evaluar el conocimiento mediante demostración visual o práctica siempre que sea posible.",
        "Emparejar con un compañero bilingüe para mediación informal en momentos críticos.",
        "Aceptar producciones iniciales con errores gramaticales — corregir el contenido, no la forma, en la primera fase.",
      ]},
      { items: [
        "La propia reunión es una barrera — las familias pueden no hablar castellano con suficiente fluidez.",
        "No asumir que las familias conocen el sistema educativo español — explicar qué es el equipo de orientación, qué es una medida de apoyo lingüístico, qué implica un Plan de Apoyo.",
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
        "Verificar dónde almacena datos la herramienta — servidores europeos o no europeos, anonimizados o no.",
        "Nunca introducir nombres completos, domicilios, números de identificación ni diagnósticos clínicos en herramientas de IA generativa.",
        "Distinguir el uso institucional (el centro firma un contrato) del uso personal del docente (responsabilidad individual).",
      ]},
      { items: [
        "Los sistemas entrenados principalmente con datos en inglés pueden tener un rendimiento inferior en español y en contextos hispanohablantes.",
        "Las recomendaciones automáticas pueden amplificar estereotipos de género, etnia o clase — verificar de forma crítica.",
        "Los modelos de «predicción de riesgo académico» son especialmente problemáticos — frecuentemente reproducen desigualdades existentes.",
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
        "No es una presentación — es una co-construcción. Cada participante sale con al menos un recurso listo para probar.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Encuadre — el problema del aula heterogénea y por qué más de lo mismo no funciona.",
        "<strong>10–25 min:</strong> Mapa de perfiles — presentación de las seis tarjetas del Farol con casos reales (anonimizados).",
        "<strong>25–45 min:</strong> Demostración práctica — tres herramientas, tres casos de uso, tres perfiles distintos.",
        "<strong>45–75 min:</strong> Trabajo en parejas — cada pareja adapta un material existente para un perfil específico.",
        "<strong>75–85 min:</strong> Puesta en común rápida — cada pareja presenta su producto en 1 minuto.",
        "<strong>85–90 min:</strong> Compromisos — cada participante define un material a probar y se programa una sesión de seguimiento a los 30 días.",
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
        "Convención de la ONU sobre los Derechos de las Personas con Discapacidad (CDPD, 2006) — ratificada por España; el artículo 24 establece la educación inclusiva como derecho.",
        "Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE) — marco normativo vigente del sistema educativo español; incorpora el enfoque DUA (Diseño Universal para el Aprendizaje) y refuerza la equidad e inclusión.",
        "Real Decreto 984/2021 — regula la evaluación y promoción del alumnado; establece que las medidas de respuesta educativa deben estar recogidas en un Plan de Actuación Específico (PAE) para el alumnado con necesidades específicas de apoyo educativo (ACNEAE).",
        "Real Decreto 126/2014 y decretos autonómicos de desarrollo curricular — la educación es competencia compartida; cada comunidad autónoma regula los procedimientos de identificación y atención al ACNEAE.",
        "Resolución de la Secretaría de Estado de Educación sobre orientación educativa — establece los equipos de orientación educativa (EOE) en primaria y los departamentos de orientación en secundaria como referentes del proceso de evaluación psicopedagógica.",
      ]},
      { items: [
        "Aplicar el Diseño Universal para el Aprendizaje (DUA): ofrecer múltiples formas de representación, acción, expresión e implicación para todo el alumnado.",
        "Usar ajustes razonables en el aula sin necesidad de diagnóstico previo: tiempo ampliado, respuesta oral, acceso a tecnología de apoyo.",
        "Mantener un entorno de aula inclusivo que reduzca barreras sensoriales, organizativas y lingüísticas para todo el alumnado.",
        "Registrar observaciones informales de cualquier alumno/a que pueda tener necesidades no atendidas — es el punto de partida de cualquier proceso de orientación.",
      ]},
      { items: [
        "Consultar con el orientador/a educativo/a cuando un alumno/a no responde a las estrategias de aula tras un período razonable.",
        "La Comisión de Coordinación Pedagógica (CCP) o el equipo docente puede solicitar una evaluación psicopedagógica al departamento de orientación.",
        "El Dictamen de Escolarización es el documento técnico que determina las necesidades del alumno y las medidas ordinarias, específicas o extraordinarias de respuesta educativa.",
        "El Plan de Actuación Específico (PAE) — equivalente al plan individualizado — es elaborado conjuntamente por el equipo docente, el orientador/a y las familias.",
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
        "Primer paso ante una preocupación por un alumno/a: registrar, hablar con el orientador/a, contactar a las familias — en ese orden.",
        "Protección de datos: todos los datos del alumnado están sujetos al RGPD y a la Ley Orgánica 3/2018 (LOPDGDD); no compartir información sensible fuera del equipo sin consentimiento.",
      ]},
    ]},
  },

  fr: {
    tdah: { sections: [
      { items: [
        "Difficulté à maintenir l'attention sur des tâches longues ; se perd dans les consignes à plusieurs étapes.",
        "Agitation constante — ne reste pas assis, se trémousse, se lève sans raison apparente.",
        "Répond avant la fin de la question ; interrompt les camarades et l'enseignant.",
        "Oublie le matériel, les délais, les consignes données oralement il y a quelques minutes.",
        "Peut entrer en hyperfocalisation sur quelque chose qui l'intéresse, donnant l'impression (erronée) qu'il « peut quand il veut ».",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> de l'impolitesse, de la paresse ou un manque de caractère.",
        "<strong>Ce n'est pas</strong> toujours une hyperactivité visible — il existe un TDAH à prédominance inattentive (plus fréquent chez les filles, souvent sous-diagnostiqué).",
        "<strong>Ce n'est pas</strong> résolu en « faisant plus d'efforts » — le problème est neurologique, pas motivationnel.",
      ]},
      { items: [
        "Consignes fragmentées : une à la fois, écrites au tableau, avec un temps défini.",
        "Autoriser le mouvement légitime (distribuer le matériel, effacer le tableau, messages au conseiller d'orientation).",
        "Réduire les stimuli concurrents (place éloignée de la fenêtre, de la porte, du groupe le plus bruyant).",
        "Renforcement positif immédiat — le cycle de récompense neurologique est plus court dans le TDAH.",
      ]},
      { items: [
        "Commencer par ce que l'élève fait bien — la réunion ne peut pas débuter par une liste de plaintes, au risque que les familles se ferment défensivement.",
        "Décrire des comportements observés, pas des diagnostics : « quand il y a plus de deux étapes successives, il perd le fil » plutôt que « il a un TDAH ».",
        "Anticiper la réaction « à la maison, ce n'est pas comme ça » — expliquer que le contexte de groupe et l'exigence d'attention prolongée en classe rendent les symptômes plus visibles.",
        "Si une évaluation psychologique est suggérée, la présenter comme une ressource, pas une punition : « il existe des aides disponibles qui peuvent beaucoup l'aider » plutôt que « il faut qu'il/elle soit évalué(e) ».",
      ]},
      { items: [
        "Difficultés disciplinaires persistantes malgré les adaptations en classe.",
        "Signes d'exclusion sociale par les pairs.",
        "Signes de comorbidité (anxiété, dépression, trouble oppositionnel avec provocation).",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Lit lentement et en trébuchard, même sur des textes qu'il comprend à l'oral.",
        "Confond les lettres visuellement similaires (b/d, p/q) ; inverse l'ordre des lettres dans les mots.",
        "Erreurs orthographiques persistantes dans les écrits, qui ne répondent pas à la correction répétée.",
        "Évite de lire à voix haute ; peut paraître peu participatif alors qu'il se protège.",
        "Compréhension orale nettement supérieure à la compréhension écrite.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> un manque d'intelligence — la dyslexie est indépendante du QI.",
        "<strong>Ce n'est pas</strong> seulement « inverser des lettres » — c'est un trouble du traitement phonologique.",
        "<strong>Cela ne se « guérit » pas</strong> — cela se gère avec des stratégies compensatoires tout au long de la vie.",
      ]},
      { items: [
        "Fournir des textes avec une typographie adaptée (OpenDyslexic ou similaire ; espacement augmenté).",
        "Permettre la lecture silencieuse avant toute lecture à voix haute — ne jamais interroger à l'improviste.",
        "Évaluer le contenu séparément de l'orthographe lorsque l'objectif est d'évaluer les connaissances.",
        "Proposer des supports multiples pour la même information (vidéo, audio, schémas).",
      ]},
      { items: [
        "Séparer explicitement lecture et intelligence dès le départ : « votre fils/fille comprend très bien à l'oral — la difficulté est spécifique à la lecture écrite ».",
        "Avoir à l'esprit que l'un des parents peut avoir une dyslexie non diagnostiquée — la conversation peut réveiller des souvenirs douloureux de sa propre scolarité.",
        "Éviter de montrer des fiches couvertes de rouge sans contexte — présenter d'abord ce que l'élève sait faire, puis ce sur quoi il a besoin d'aide.",
        "Être concret sur les adaptations déjà en place et celles que les familles peuvent reproduire à la maison : textes en audio, lecture à voix haute sans pression de temps.",
      ]},
      { items: [
        "Estime de soi scolaire en dégradation (« je suis nul/le », « je n'y arrive pas »).",
        "Évitement systématique des tâches de lecture/écriture au point de compromettre d'autres matières.",
        "Écart marqué entre les performances orales et écrites sans diagnostic formel.",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Difficulté avec les changements non annoncés — changement d'emploi du temps, de salle ou de professeur remplaçant.",
        "Communication littérale — ne perçoit pas les nuances, l'ironie ni les expressions idiomatiques.",
        "Sensibilité sensorielle — l'éclairage fluorescent, le bruit de fond ou les étiquettes de vêtements peuvent être intolérables.",
        "Intérêts restreints et très approfondis sur des sujets spécifiques.",
        "Peut paraître désintéressé ou distant quand il est en surcharge, pas déconnecté.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> une échelle linéaire (« plus » ou « moins » autiste) — c'est un profil multidimensionnel.",
        "<strong>Ce n'est pas</strong> un manque d'empathie — c'est souvent l'inverse, avec une difficulté à filtrer les informations.",
        "<strong>Ce n'est pas</strong> un mauvais comportement quand une routine est rompue — c'est une vraie réponse neurologique.",
      ]},
      { items: [
        "Prévenir à l'avance de tout changement de routine, même apparemment anodin.",
        "Rendre explicites les règles sociales implicites (ce qu'on fait, ce qu'on ne fait pas, quand).",
        "Permettre des pauses sensorielles dans un espace calme si nécessaire.",
        "Exploiter l'intérêt restreint comme point d'entrée dans les contenus curriculaires.",
      ]},
      { items: [
        "Si un diagnostic existe déjà, demander d'abord aux familles ce qu'elles savent qui fonctionne — les parents d'enfants autistes connaissent souvent mieux leur enfant que n'importe quel rapport.",
        "En l'absence de diagnostic, être très prudent : décrire des situations concrètes sans jamais utiliser le mot « autisme » lors d'une première rencontre.",
        "Valider l'effort des familles — créer structure et prévisibilité à la maison est exigeant, et le reconnaître crée une alliance.",
        "Ne jamais comparer avec « d'autres élèves » ni avec des frères et sœurs — chaque profil du spectre est différent et la comparaison est toujours contre-productive.",
      ]},
      { items: [
        "Crises fréquentes (« meltdowns ») après la journée scolaire.",
        "Refus scolaire persistant lié à une surcharge sensorielle.",
        "Isolement social progressif malgré les tentatives de médiation.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Écriture manuscrite difficile, lente, souvent illisible — non par négligence mais par une vraie difficulté motrice.",
        "Difficultés d'organisation spatiale du cahier, de gestion du matériel et de séquençage des étapes.",
        "Peut paraître « maladroit » — renverse des verres, se cogne dans les meubles, a des difficultés en sport.",
        "Fatigue disproportionnée après les tâches exigeant une coordination fine soutenue.",
        "La composante cognitive est généralement intacte — frustration fréquente entre savoir et pouvoir le montrer.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> de la paresse ou un manque d'application.",
        "<strong>Ce n'est pas</strong> seulement une mauvaise écriture — cela affecte la planification et le séquençage des tâches.",
        "<strong>Ce n'est pas</strong> résolu en « s'entraînant davantage à écrire ».",
      ]},
      { items: [
        "Autoriser l'utilisation d'un clavier/tablette pour les productions écrites longues.",
        "Réduire la copie mécanique au tableau — fournir des notes quand c'est pertinent.",
        "Fournir des listes de contrôle explicites pour les tâches à plusieurs étapes.",
        "Évaluer la production par son contenu, pas par sa présentation physique.",
      ]},
      { items: [
        "Expliquer ce qu'est la dyspraxie en langage simple — la plupart des familles n'ont jamais entendu ce terme.",
        "L'écriture illisible est le principal point de friction avec les familles — montrer que l'évaluation valorise désormais le contenu et non la forme.",
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
        "Pose des questions qui dépassent le cadre de la leçon — ou remet activement en question ce qui est enseigné.",
        "Peut paraître désintéressé, indiscipliné ou apathique — souvent signes d'ennui chronique.",
        "Sensibilité émotionnelle accentuée ; peut être anxieux/se, perfectionniste ou injustement exigeant(e) envers lui/elle-même.",
        "Risque réel de sous-performance — apprend à cacher sa capacité pour ne pas se démarquer socialement.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> synonyme de bon comportement ou de bons résultats — de nombreux élèves à haut potentiel ont des résultats moyens par désintérêt.",
        "<strong>Ce n'est pas</strong> « n'a pas besoin d'aide » — il a besoin de défis différents, pas de moins d'attention.",
        "<strong>Ce n'est pas</strong> incompatible avec la neurodivergence — la double exceptionnalité (2e) existe et est fréquente.",
      ]},
      { items: [
        "Toujours avoir des tâches d'approfondissement prêtes — pas davantage de la même chose, mais une matière plus profonde ou appliquée.",
        "Permettre des recherches indépendantes sur des sujets d'intérêt dans le cadre du programme.",
        "Évaluer par le défi, pas par la facilité — demander un travail plus exigeant en échange d'un moindre volume.",
        "Reconnaître et valider la sensibilité émotionnelle sans la pathologiser.",
      ]},
      { items: [
        "Anticiper la fierté et la rediriger : « votre fils/fille est clairement très capable — et c'est précisément pour cela que l'ennui crée des problèmes ».",
        "Expliquer le paradoxe du haut potentiel : de bons résultats ne signifient pas que tout va bien.",
        "Si l'élève cache ses capacités pour s'intégrer socialement, le nommer avec précaution — c'est un signe de souffrance, pas de modestie.",
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
        "Comprend bien moins qu'il n'y paraît — peut hocher la tête sans avoir compris.",
        "Performances scolaires apparemment faibles, souvent disproportionnées par rapport à ses capacités réelles.",
        "Silence en classe — peut être une stratégie adaptative, pas du désintérêt.",
        "Peut être épuisé en fin de journée à force de traduire mentalement en temps réel.",
        "Risque de sous-diagnostic de besoins éducatifs réels en attribuant tout à la barrière linguistique.",
      ]},
      { items: [
        "<strong>Ce n'est pas</strong> un manque d'intelligence ou de capacités.",
        "<strong>Ce n'est pas</strong> seulement une question de temps — sans soutien explicite, de nombreux EANA se stabilisent à un niveau fonctionnel bas.",
        "<strong>Ce n'est pas</strong> résolu par la traduction automatique pendant la classe — c'est un processus de plusieurs années.",
      ]},
      { items: [
        "Fournir des supports avec le vocabulaire clé traduit dans la langue maternelle.",
        "Évaluer les connaissances par démonstration visuelle ou pratique autant que possible.",
        "Jumeler avec un camarade bilingue pour une médiation informelle dans les moments critiques.",
        "Accepter les premières productions avec des erreurs grammaticales — corriger le contenu, pas la forme, dans un premier temps.",
      ]},
      { items: [
        "La réunion elle-même est un obstacle — les familles peuvent ne pas maîtriser suffisamment le français.",
        "Ne pas supposer que les familles connaissent le système éducatif — expliquer ce qu'est le conseiller principal d'éducation (CPE), ce qu'est une mesure de soutien, ce qu'implique un PAP ou un PPS.",
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
        "Vérifier où l'outil stocke les données — serveurs européens ou non, anonymisés ou non.",
        "Ne jamais saisir des noms complets, adresses, numéros d'identification ou diagnostics cliniques dans des outils d'IA générative.",
        "Distinguer l'usage institutionnel (l'établissement signe un contrat) de l'usage personnel de l'enseignant (responsabilité individuelle).",
      ]},
      { items: [
        "Les systèmes entraînés principalement sur des données en anglais peuvent avoir des performances moindres en français et dans les contextes francophones.",
        "Les recommandations automatiques peuvent amplifier des stéréotypes de genre, d'origine ou de classe — vérifier de manière critique.",
        "Les modèles de « prédiction de risque scolaire » sont particulièrement problématiques — ils reproduisent souvent des inégalités existantes.",
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
        "Ce n'est pas une présentation — c'est une co-construction. Chaque participant repart avec au moins une ressource prête à tester.",
      ]},
      { items: [
        "<strong>0–10 min :</strong> Cadrage — le problème de la classe hétérogène et pourquoi faire toujours plus de la même chose ne fonctionne pas.",
        "<strong>10–25 min :</strong> Cartographie des profils — présentation des six fiches du Farol avec des cas réels (anonymisés).",
        "<strong>25–45 min :</strong> Démonstration pratique — trois outils, trois cas d'usage, trois profils distincts.",
        "<strong>45–75 min :</strong> Travail en binômes — chaque binôme adapte un matériau existant à un profil spécifique.",
        "<strong>75–85 min :</strong> Mise en commun rapide — chaque binôme présente sa production en 1 minute.",
        "<strong>85–90 min :</strong> Engagements — chaque participant définit un matériau à tester et une session de retour d'expérience est planifiée à 30 jours.",
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
        "Convention de l'ONU relative aux droits des personnes handicapées (CDPH, 2006) — ratifiée par la France ; l'article 24 établit l'éducation inclusive comme un droit.",
        "Loi du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées — texte fondateur de la scolarisation inclusive en France ; crée le droit à la scolarisation en milieu ordinaire et institue la MDPH (Maison Départementale des Personnes Handicapées).",
        "Loi du 8 juillet 2013 d'orientation et de programmation pour la refondation de l'École de la République — renforce l'école inclusive et la lutte contre les inégalités ; crée l'ESPE (devenu INSPE).",
        "Loi du 26 juillet 2019 pour une école de la confiance — inscrit l'école inclusive dans le code de l'éducation ; généralise les ULIS (Unités Localisées pour l'Inclusion Scolaire) et les PIAL (Pôles Inclusifs d'Accompagnement Localisé) pour la gestion des AESH.",
        "Circulaire du 3 mai 2017 relative à l'instruction obligatoire — rappelle que tout enfant a droit à l'instruction, y compris les EANA (élèves allophones nouvellement arrivés).",
      ]},
      { items: [
        "Appliquer les principes de la conception universelle pour l'apprentissage (CUA/UDL) : proposer des modalités multiples de représentation, d'action et d'expression pour tous les élèves.",
        "Utiliser des aménagements raisonnables en classe sans nécessiter de diagnostic préalable : temps supplémentaire, réponse orale, accès aux outils numériques.",
        "Maintenir un environnement de classe inclusif qui réduit les barrières sensorielles, organisationnelles et linguistiques pour tous.",
        "Consigner par écrit les observations informelles sur tout élève présentant des besoins potentiels non couverts — point de départ de toute procédure d'orientation.",
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
        "Première étape en cas de préoccupation : documenter, en parler avec le Psy-EN, contacter les familles — dans cet ordre.",
        "Protection des données : toutes les données élèves sont soumises au RGPD et à la loi Informatique et Libertés ; ne pas partager d'informations sensibles hors de l'équipe sans consentement.",
      ]},
    ]},
  },

  it: {
    tdah: { sections: [
      { items: [
        "Difficoltà a mantenere l'attenzione su compiti lunghi; si perde nelle istruzioni a più passaggi.",
        "Movimento costante — non riesce a stare seduto, si agita con le mani, si alza senza motivo apparente.",
        "Risponde prima che la domanda sia finita; interrompe i compagni e l'insegnante.",
        "Dimentica i materiali, le scadenze, le istruzioni date oralmente pochi minuti prima.",
        "Può iperfocalizzarsi su qualcosa che lo interessa, dando l'(erronea) impressione che «ce la fa quando vuole».",
      ]},
      { items: [
        "<strong>Non è</strong> maleducazione, pigrizia o mancanza di carattere.",
        "<strong>Non è</strong> sempre iperattività visibile — esiste un ADHD a predominanza disattentiva (più frequente nelle ragazze, spesso sottodiagnosticato).",
        "<strong>Non si risolve</strong> con «impegnarsi di più» — il problema è neurologico, non motivazionale.",
      ]},
      { items: [
        "Istruzioni frammentate: una alla volta, scritte alla lavagna, con un tempo definito.",
        "Consentire il movimento legittimo (distribuire i materiali, cancellare la lavagna, messaggi allo sportello di orientamento).",
        "Ridurre gli stimoli competitivi (posto lontano dalla finestra, dalla porta, dal gruppo più rumoroso).",
        "Rinforzo positivo immediato — il ciclo di ricompensa neurologica è più breve nell'ADHD.",
      ]},
      { items: [
        "Iniziare con quello che l'alunno fa bene — la riunione non può cominciare come una lista di lamentele, altrimenti le famiglie si chiuderanno in modo difensivo.",
        "Descrivere i comportamenti osservati, non le diagnosi: «quando ci sono più di due passaggi di fila, perde il filo» invece di «ha l'ADHD».",
        "Anticipare la reazione «a casa non è così» — spiegare che il contesto di gruppo e la richiesta di attenzione prolungata in classe rendono i sintomi più visibili.",
        "Se si suggerisce una valutazione psicologica, presentarla come una risorsa, non come una punizione: «ci sono supporti disponibili che possono aiutarlo/a molto» invece di «ha bisogno di essere valutato/a».",
      ]},
      { items: [
        "Difficoltà disciplinari persistenti nonostante gli adattamenti in classe.",
        "Segnali di esclusione sociale da parte dei compagni.",
        "Segni di comorbilità (ansia, depressione, disturbo oppositivo-provocatorio).",
      ]},
    ]},
    dislexia: { sections: [
      { items: [
        "Legge lentamente e con incespicamenti, anche su testi che comprende oralmente.",
        "Confonde lettere visivamente simili (b/d, p/q); inverte l'ordine delle lettere all'interno delle parole.",
        "Errori ortografici persistenti nello scritto che non rispondono alla correzione ripetuta.",
        "Evita la lettura ad alta voce; può sembrare poco partecipativo mentre in realtà si sta proteggendo.",
        "Comprensione orale notevolmente superiore alla comprensione scritta.",
      ]},
      { items: [
        "<strong>Non è</strong> mancanza di intelligenza — la dislessia è indipendente dal quoziente intellettivo.",
        "<strong>Non è</strong> solo «scambiare le lettere» — è un disturbo del processamento fonologico.",
        "<strong>Non «guarisce»</strong> — si gestisce con strategie compensative per tutta la vita.",
      ]},
      { items: [
        "Fornire testi con tipografia adattata (OpenDyslexic o simile; spaziatura aumentata).",
        "Permettere la lettura silenziosa prima di qualsiasi lettura ad alta voce — non interpellare mai di sorpresa.",
        "Valutare il contenuto separatamente dall'ortografia quando l'obiettivo è valutare la conoscenza.",
        "Offrire formati multipli per la stessa informazione (video, audio, schemi).",
      ]},
      { items: [
        "Separare esplicitamente lettura e intelligenza fin dall'inizio: «suo figlio/sua figlia capisce molto bene quando ascolta — la difficoltà è specifica alla lettura scritta».",
        "Tenere presente che uno dei genitori potrebbe avere una dislessia non diagnosticata — la conversazione può risvegliare ricordi difficili della propria esperienza scolastica.",
        "Evitare di mostrare schede coperte di rosso senza contesto — presentare prima ciò che l'alunno sa fare, poi ciò di cui ha bisogno di supporto.",
        "Essere concreti sugli adattamenti già in atto e su quelli che le famiglie possono replicare a casa: testi in audio, lettura ad alta voce senza pressione di tempo.",
      ]},
      { items: [
        "Autostima scolastica in deterioramento («sono stupido/a», «non ci riesco»).",
        "Evitamento sistematico dei compiti di lettura/scrittura al punto da compromettere altre materie.",
        "Discrepanza marcata tra performance orale e scritta senza una diagnosi formale.",
      ]},
    ]},
    autismo: { sections: [
      { items: [
        "Difficoltà con i cambiamenti non annunciati — variazione dell'orario, dell'aula o del professore supplente.",
        "Comunicazione letterale — non coglie sfumature, ironia o espressioni idiomatiche.",
        "Sensibilità sensoriale — l'illuminazione fluorescente, il rumore di fondo o le etichette dei vestiti possono essere intollerabili.",
        "Interessi focalizzati e profondi su argomenti specifici.",
        "Può sembrare disinteressato o distante quando è in sovraccarico, non disconnesso.",
      ]},
      { items: [
        "<strong>Non è</strong> una scala lineare («più» o «meno» autistico) — è un profilo multidimensionale.",
        "<strong>Non è</strong> mancanza di empatia — spesso è il contrario, con difficoltà a filtrare gli stimoli.",
        "<strong>Non è</strong> un cattivo comportamento quando una routine viene interrotta — è una risposta neurologica reale.",
      ]},
      { items: [
        "Avvisare in anticipo di qualsiasi cambiamento di routine, anche apparentemente banale.",
        "Rendere esplicite le regole sociali implicite (cosa si fa, cosa non si fa, quando).",
        "Consentire pause sensoriali in uno spazio tranquillo quando necessario.",
        "Sfruttare l'interesse focalizzato come punto di ingresso nei contenuti curricolari.",
      ]},
      { items: [
        "Se esiste già una diagnosi, chiedere prima alle famiglie cosa sanno che funziona — i genitori di bambini autistici spesso conoscono il proprio figlio meglio di qualsiasi relazione clinica.",
        "In assenza di diagnosi, essere molto prudenti: descrivere situazioni concrete senza mai usare la parola «autismo» in un primo incontro.",
        "Validare lo sforzo delle famiglie — creare struttura e prevedibilità a casa è impegnativo, e riconoscerlo crea alleanza.",
        "Non confrontare mai con «altri alunni» o con i fratelli — ogni profilo dello spettro è diverso e il confronto è sempre controproducente.",
      ]},
      { items: [
        "Crisi («meltdown») frequenti dopo la giornata scolastica.",
        "Rifiuto scolastico persistente associato a sovraccarico sensoriale.",
        "Isolamento sociale progressivo nonostante i tentativi di mediazione.",
      ]},
    ]},
    dispraxia: { sections: [
      { items: [
        "Scrittura a mano difficile, lenta, spesso illeggibile — non per negligenza ma per una reale difficoltà motoria.",
        "Difficoltà nell'organizzazione spaziale del quaderno, nella gestione dei materiali e nella sequenza dei passaggi.",
        "Può sembrare «goffo» — rovescia bicchieri, urta i mobili, ha difficoltà nelle attività fisiche.",
        "Affaticamento sproporzionato dopo compiti che richiedono coordinazione fine sostenuta.",
        "La componente cognitiva è generalmente intatta — frequente frustrazione tra il sapere e il riuscire a dimostrarlo.",
      ]},
      { items: [
        "<strong>Non è</strong> pigrizia o mancanza di impegno.",
        "<strong>Non è</strong> solo una cattiva calligrafia — riguarda la pianificazione e il sequenziamento dei compiti.",
        "<strong>Non si risolve</strong> con «esercitarsi di più nella scrittura».",
      ]},
      { items: [
        "Consentire l'uso di tastiera/tablet nelle produzioni scritte estese.",
        "Ridurre la copia meccanica dalla lavagna — fornire appunti quando è opportuno.",
        "Fornire checklist esplicite per i compiti con più passaggi.",
        "Valutare il prodotto per il suo contenuto, non per la sua presentazione fisica.",
      ]},
      { items: [
        "Spiegare cos'è la disprassia in linguaggio semplice — la maggior parte delle famiglie non ha mai sentito questo termine.",
        "La calligrafia illeggibile è il principale punto di attrito con le famiglie — mostrare che la valutazione valorizza ora il contenuto e non la forma.",
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
        "Pone domande che esulano dall'argomento — o sfida attivamente ciò che viene insegnato.",
        "Può sembrare disinteressato, indisciplinato o apatico — spesso segnali di noia cronica.",
        "Sensibilità emotiva accentuata; può essere ansioso/a, perfezionista o ingiustamente esigente con se stesso/a.",
        "Rischio reale di scarso rendimento — impara a nascondere le proprie capacità per non distinguersi socialmente.",
      ]},
      { items: [
        "<strong>Non è</strong> sinonimo di buon comportamento o buoni risultati — molti alunni plusdotati hanno risultati nella media per disinteresse.",
        "<strong>Non è</strong> «non ha bisogno di aiuto» — ha bisogno di sfide diverse, non di meno attenzione.",
        "<strong>Non è</strong> incompatibile con la neurodivergenza — la doppia eccezionalità (2e) esiste ed è frequente.",
      ]},
      { items: [
        "Avere sempre pronti compiti di approfondimento — non più della stessa cosa, ma materiale più profondo o applicato.",
        "Permettere la ricerca indipendente su argomenti di interesse dell'alunno nell'ambito del programma.",
        "Valutare per il livello di sfida, non per la facilità — richiedere un lavoro più impegnativo in cambio di minor volume.",
        "Riconoscere e validare la sensibilità emotiva senza patologizzarla.",
      ]},
      { items: [
        "Anticipare l'orgoglio e reindirizzarlo: «suo figlio/sua figlia è chiaramente molto capace — ed è proprio per questo che la noia sta creando problemi».",
        "Spiegare il paradosso della plusdotazione: buoni risultati non significano che vada tutto bene.",
        "Se l'alunno nasconde le proprie capacità per integrarsi socialmente, nominarlo con cautela — è un segnale di sofferenza, non di modestia.",
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
        "Capisce molto meno di quanto sembri — può annuire senza aver capito.",
        "Rendimento scolastico apparentemente basso, spesso sproporzionato rispetto alle capacità reali.",
        "Silenzio in classe — può essere una strategia adattiva, non disinteresse.",
        "Può essere esausto a fine giornata per aver tradotto mentalmente in tempo reale.",
        "Rischio di sottodiagnosi di bisogni educativi reali attribuendo tutto alla barriera linguistica.",
      ]},
      { items: [
        "<strong>Non è</strong> mancanza di intelligenza o capacità.",
        "<strong>Non è</strong> solo una questione di tempo — senza un supporto esplicito, molti studenti con italiano come L2 si stabilizzano a un livello funzionale basso.",
        "<strong>Non si risolve</strong> con la traduzione automatica durante la lezione — è un processo di anni.",
      ]},
      { items: [
        "Fornire materiali con il vocabolario chiave tradotto nella lingua madre.",
        "Valutare le conoscenze attraverso la dimostrazione visiva o pratica ove possibile.",
        "Affiancare un compagno bilingue per la mediazione informale nei momenti critici.",
        "Accettare le prime produzioni con errori grammaticali — correggere il contenuto, non la forma, nella prima fase.",
      ]},
      { items: [
        "La riunione stessa è una barriera — le famiglie possono non padroneggiare sufficientemente l'italiano.",
        "Non presumere che le famiglie conoscano il sistema scolastico italiano — spiegare cos'è lo sportello di ascolto psicologico, cos'è una misura di supporto, cosa prevede il Protocollo di Accoglienza.",
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
        "Verificare dove lo strumento archivia i dati — server europei o non europei, anonimizzati o no.",
        "Non inserire mai nomi completi, indirizzi, numeri di identificazione o diagnosi cliniche in strumenti di IA generativa.",
        "Distinguere l'uso istituzionale (la scuola firma un contratto) dall'uso personale del docente (responsabilità individuale).",
      ]},
      { items: [
        "I sistemi addestrati prevalentemente su dati in lingua inglese possono avere prestazioni inferiori in italiano e nei contesti italofoni.",
        "Le raccomandazioni automatiche possono amplificare stereotipi di genere, etnia o classe — verificare in modo critico.",
        "I modelli di «previsione del rischio scolastico» sono particolarmente problematici — riproducono spesso le disuguaglianze esistenti.",
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
        "Non è una presentazione — è una co-costruzione. Ogni partecipante esce con almeno una risorsa pronta da sperimentare.",
      ]},
      { items: [
        "<strong>0–10 min:</strong> Inquadramento — il problema della classe eterogenea e perché fare sempre di più dello stesso non funziona.",
        "<strong>10–25 min:</strong> Mappa dei profili — presentazione delle sei schede del Farol con casi reali (anonimizzati).",
        "<strong>25–45 min:</strong> Dimostrazione pratica — tre strumenti, tre casi d'uso, tre profili distinti.",
        "<strong>45–75 min:</strong> Lavoro in coppia — ogni coppia adatta un materiale esistente a un profilo specifico.",
        "<strong>75–85 min:</strong> Condivisione rapida — ogni coppia presenta il proprio prodotto in 1 minuto.",
        "<strong>85–90 min:</strong> Impegni — ogni partecipante individua un materiale da sperimentare e si pianifica una sessione di feedback a 30 giorni.",
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
        "Convenzione ONU sui diritti delle persone con disabilità (CRPD, 2006) — ratificata dall'Italia con la Legge 18/2009; l'articolo 24 sancisce l'istruzione inclusiva come diritto.",
        "Legge 104/1992 (Legge-quadro per l'assistenza, l'integrazione sociale e i diritti delle persone handicappate) — testo fondamentale dell'inclusione scolastica italiana; prevede il Piano Educativo Individualizzato (PEI) e il sostegno didattico per gli alunni con disabilità certificata.",
        "Legge 170/2010 (Nuove norme in materia di disturbi specifici di apprendimento in ambito scolastico) — riconosce ufficialmente dislessia, disgrafia, disortografia e discalculia (DSA); obbliga le scuole a predisporre il Piano Didattico Personalizzato (PDP) per questi alunni.",
        "D.Lgs. 66/2017 e successive modifiche (D.Lgs. 96/2019) — riformano l'inclusione scolastica degli alunni con disabilità; introducono il Profilo di Funzionamento (in sostituzione della diagnosi funzionale) e ridefiniscono il PEI secondo un approccio bio-psico-sociale (ICF).",
        "Direttiva MIUR del 27 dicembre 2012 e Circolare 8/2013 — ampliano le tutele ai Bisogni Educativi Speciali (BES), includendo difficoltà socio-economiche, linguistiche e culturali; ogni scuola elabora un Piano Annuale per l'Inclusione (PAI) e un Piano di Inclusione.",
      ]},
      { items: [
        "Applicare i principi della Progettazione Universale per l'Apprendimento (UDL): offrire molteplici modalità di rappresentazione, azione ed espressione per tutti gli alunni.",
        "Utilizzare adattamenti ragionevoli in classe senza necessità di diagnosi formale: tempo aggiuntivo, risposta orale, accesso a strumenti compensativi.",
        "Mantenere un ambiente classe inclusivo che riduca le barriere sensoriali, organizzative e linguistiche per tutti.",
        "Annotare le osservazioni informali su qualsiasi alunno che possa avere bisogni non soddisfatti — è il punto di partenza per qualsiasi percorso di segnalazione.",
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
        "Primo passo in caso di preoccupazione per un alunno: documentare, confrontarsi con il referente BES, contattare le famiglie — in quest'ordine.",
        "Tutela dei dati: tutti i dati degli alunni sono soggetti al GDPR e al D.Lgs. 196/2003 (Codice della privacy) come modificato dal D.Lgs. 101/2018; non condividere informazioni sensibili fuori dal team senza consenso.",
      ]},
    ]},
  },
};
