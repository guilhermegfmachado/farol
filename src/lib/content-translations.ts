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

  de: {
    tdah: {
      sections: [
        {
          items: [
            "Schwierigkeiten, die Aufmerksamkeit bei langen Aufgaben aufrechtzuerhalten; verliert sich bei Anweisungen mit mehreren Schritten.",
            "Ständige Bewegung — bleibt nicht sitzen, beschäftigt die Hände, steht ohne ersichtlichen Grund auf.",
            "Antwortet, bevor die Frage zu Ende gestellt ist; unterbricht Mitschüler und die Lehrkraft.",
            "Vergisst Materialien, Fristen, vor wenigen Minuten mündlich gegebene Anweisungen.",
            "Kann sich hyperfokussieren, wenn etwas ihn interessiert — das erweckt den (falschen) Eindruck, er \"könnte es, wenn er wollte\"."
          ]
        },
        {
          items: [
            "<strong>Es ist keine</strong> Erziehungsmängel, Faulheit oder Charakterschwäche.",
            "<strong>Es ist nicht</strong> immer sichtbare Hyperaktivität — es gibt die vorwiegend unaufmerksame ADHS (häufiger bei Mädchen, oft unterdiagnostiziert).",
            "<strong>Es ist nicht</strong> durch \"mehr Anstrengung\" lösbar — das Problem ist neurologisch, nicht motivational."
          ]
        },
        {
          items: [
            "Aufgaben in Teilschritte aufteilen: jeweils eine Anweisung, schriftlich an der Tafel, mit klar definierter Zeit.",
            "Legitime Bewegung erlauben (Materialien austeilen, Tafel wischen, Botengänge zum schulpsychologischen Dienst).",
            "Ablenkende Reize reduzieren (Sitzplatz weg vom Fenster, von der Tür, von der lautesten Gruppe).",
            "Sofortige positive Verstärkung — der neurologische Belohnungskreislauf ist bei ADHS kürzer."
          ]
        },
        {
          items: [
            "Mit dem beginnen, was der Schüler gut kann — das Gespräch darf nicht als Beschwerdeliste beginnen.",
            "Beobachtetes Verhalten beschreiben, keine Diagnosen stellen: \"Wenn es mehr als zwei aufeinanderfolgende Schritte gibt, verliert er den Faden.\"",
            "Auf die Reaktion \"zu Hause ist es nicht so\" vorbereitet sein — der Klassenkontext macht Symptome sichtbarer.",
            "Wenn eine psychologische Abklärung empfohlen wird, diese als Ressource präsentieren, nicht als Strafe."
          ]
        },
        {
          items: [
            "Anhaltende Disziplinschwierigkeiten trotz Anpassungen im Unterricht.",
            "Anzeichen sozialer Ausgrenzung durch Mitschüler.",
            "Hinweise auf Komorbiditäten (Angst, Depression, oppositionelles Trotzverhalten)."
          ]
        }
      ]
    },
    dislexia: {
      sections: [
        {
          items: [
            "Liest langsam und stolpernd, auch bei Texten, die er mündlich versteht.",
            "Verwechselt visuell ähnliche Buchstaben (b/d, p/q); vertauscht die Reihenfolge von Buchstaben innerhalb eines Wortes.",
            "Anhaltende Rechtschreibfehler, die auf wiederholte Korrektur nicht ansprechen.",
            "Vermeidet lautes Lesen; kann desinteressiert wirken, schützt sich dabei aber in Wirklichkeit.",
            "Mündliches Verständnis ist dem schriftlichen weit überlegen."
          ]
        },
        {
          items: [
            "<strong>Keine</strong> mangelnde Intelligenz — Legasthenie ist unabhängig vom IQ.",
            "<strong>Nicht</strong> nur das \"Vertauschen von Buchstaben\" — es handelt sich um eine phonologische Verarbeitungsstörung.",
            "<strong>Sie heilt nicht</strong> — sie wird ein Leben lang mit Kompensationsstrategien bewältigt."
          ]
        },
        {
          items: [
            "Texte mit angepasster Typografie bereitstellen (OpenDyslexic oder ähnlich; vergrößerte Abstände).",
            "Stilles Lesen vor jedem lauten Lesen erlauben — niemals unvermittelt aufrufen.",
            "Inhalt und Rechtschreibung getrennt bewerten, wenn das Ziel die Bewertung von Wissen ist.",
            "Mehrere Formate für dieselbe Information anbieten (Video, Audio, Schemata)."
          ]
        },
        {
          items: [
            "Lesen und Intelligenz von Anfang an explizit trennen: \"Ihr Kind versteht sehr gut, wenn es zuhört.\"",
            "Bedenken, dass ein Elternteil möglicherweise eine nicht diagnostizierte Legasthenie hat.",
            "Arbeitsblätter mit vielen roten Fehlerkorrekturen nicht ohne Kontext zeigen.",
            "Bei Anpassungen konkret bleiben: Texte als Audio, Lesen ohne Zeitdruck."
          ]
        },
        {
          items: [
            "Verschlechterndes schulisches Selbstbild (\"Ich bin dumm\", \"Ich schaffe das nicht\").",
            "Systematisches Vermeiden von Lese-/Schreibaufgaben bis zur Beeinträchtigung anderer Fächer.",
            "Ausgeprägte Diskrepanz zwischen mündlicher und schriftlicher Leistung ohne formale Diagnose."
          ]
        }
      ]
    },
    autismo: {
      sections: [
        {
          items: [
            "Schwierigkeiten mit unangekündigten Änderungen — Stundenplanänderung, anderer Raum, Vertretungslehrkraft.",
            "Wörtliche Kommunikation — Nuancen, Ironie und idiomatische Ausdrücke werden nicht erfasst.",
            "Sensorische Empfindlichkeit — Leuchtstofflicht, Hintergrundgeräusche, Etiketten in der Kleidung können unerträglich sein.",
            "Fokussierte und tiefe Interessen zu bestimmten Themen.",
            "Kann desinteressiert oder distanziert wirken, wenn er überwältigt ist — nicht desengagiert."
          ]
        },
        {
          items: [
            "<strong>Es ist keine</strong> lineare Skala (\"mehr\" oder \"weniger\" autistisch) — es ist ein mehrdimensionales Profil.",
            "<strong>Es ist kein</strong> Empathiemangel — häufig ist das Gegenteil der Fall, mit Schwierigkeiten beim Filtern.",
            "<strong>Es ist kein</strong> Fehlverhalten, wenn eine Routine unterbrochen wird — es ist eine echte neurologische Reaktion."
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
            "Den Aufwand der Familie wertschätzen — Struktur und Vorhersehbarkeit zu Hause zu schaffen, ist anspruchsvoll.",
            "Niemals mit \"anderen Schülern\" oder Geschwistern vergleichen — jedes Spektrumprofil ist unterschiedlich."
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
            "Handschrift ist schwierig, langsam und häufig unleserlich — nicht aus Nachlässigkeit, sondern aufgrund echter motorischer Schwierigkeiten.",
            "Schwierigkeiten bei der räumlichen Organisation des Heftes, der Materialverwaltung und dem Befolgen von Schrittabfolgen.",
            "Kann \"tollpatschig\" wirken — verschüttet Getränke, stößt gegen Möbel, hat Schwierigkeiten im Sport.",
            "Unverhältnismäßige Müdigkeit nach Aufgaben, die anhaltende Feinmotorik erfordern.",
            "Die kognitive Komponente ist in der Regel erhalten — häufige Frustration über die Lücke zwischen Wissen und Zeigen können."
          ]
        },
        {
          items: [
            "<strong>Keine</strong> Faulheit oder mangelnder Einsatz.",
            "<strong>Nicht</strong> nur schlechte Handschrift — betrifft die Planung und Sequenzierung von Aufgaben.",
            "<strong>Nicht</strong> durch \"mehr Schreiben üben\" lösbar."
          ]
        },
        {
          items: [
            "Verwendung von Tastatur/Tablet bei längeren schriftlichen Arbeiten erlauben.",
            "Mechanisches Abschreiben von der Tafel reduzieren — ggf. Notizen bereitstellen.",
            "Explizite Checklisten für Aufgaben mit mehreren Schritten bereitstellen.",
            "Das Ergebnis nach dem Inhalt bewerten, nicht nach der äußeren Darstellung."
          ]
        },
        {
          items: [
            "Erklären, was Dyspraxie ist, in einfacher Sprache — die meisten Erziehungsberechtigten haben den Begriff noch nie gehört.",
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
            "Stellt Fragen, die über den Unterrichtsstoff hinausgehen — oder stellt aktiv das Gelehrte in Frage.",
            "Kann desinteressiert, undiszipliniert oder apathisch wirken — häufig Zeichen von chronischer Unterforderung.",
            "Ausgeprägte emotionale Sensibilität; kann ängstlich, perfektionistisch oder sich selbst gegenüber ungerecht anspruchsvoll sein.",
            "Echtes Risiko von Minderleistung — lernt, die eigenen Fähigkeiten zu verbergen, um sozial nicht aufzufallen."
          ]
        },
        {
          items: [
            "<strong>Nicht</strong> gleichbedeutend mit gutem Verhalten oder guten Ergebnissen.",
            "<strong>Nicht</strong> \"braucht keine Hilfe\" — braucht andere Herausforderungen, nicht weniger Aufmerksamkeit.",
            "<strong>Nicht</strong> unvereinbar mit Neurodivergenz — zweifache Außergewöhnlichkeit (2e) existiert und ist häufig."
          ]
        },
        {
          items: [
            "Immer Erweiterungsaufgaben bereithalten — nicht mehr vom Gleichen, sondern tiefere oder angewandte Inhalte.",
            "Unabhängige Recherche zu Themen des Schülerinteresses im Rahmen des Lehrplans ermöglichen.",
            "Nach Schwierigkeit bewerten, nicht nach Leichtigkeit — anspruchsvollere Arbeiten im Austausch gegen geringeres Volumen verlangen.",
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
            "Schüler, die Deutsch als Zweitsprache (DaZ) lernen, können im Unterricht langsamer erscheinen — dies spiegelt eine Sprachbarriere wider, keine kognitive Einschränkung.",
            "Vorbereitungsklassen (Willkommensklassen) ermöglichen erste Deutschkenntnisse vor der Regelklassenintegration.",
            "Sprachstandstests helfen, das aktuelle Niveau zu bestimmen und angemessene Fördermaßnahmen einzuleiten.",
            "Eine Sprachbarriere begründet allein keinen sonderpädagogischen Förderbedarf.",
            "Die DaZ-Lehrkraft ist die erste Ansprechperson für sprachliche Unterstützung und Differenzierungsstrategien."
          ]
        },
        {
          items: [
            "<strong>Nicht</strong> jede Sprachschwierigkeit ist ein Lernproblem — zunächst ist immer der DaZ-Kontext zu berücksichtigen.",
            "<strong>Nicht</strong> davon ausgehen, dass mangelnde mündliche Beteiligung auf Desinteresse hindeutet.",
            "<strong>Nicht</strong> Sprachförderung und sonderpädagogische Förderung verwechseln — sie haben unterschiedliche Rechtsgrundlagen."
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
            "Den Erziehungsberechtigten erklären, dass Deutsch als Zweitsprache Zeit braucht — akademische Sprachkompetenz (CALP) entwickelt sich über 5–7 Jahre.",
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
            "Überprüfen, wo das Tool Daten speichert — europäische oder nicht-europäische Server, anonymisiert oder nicht.",
            "Niemals vollständige Namen, Adressen, Ausweisnummern oder klinische Diagnosen in generative KI-Tools eingeben.",
            "Institutionelle Nutzung von persönlicher Nutzung der Lehrkraft unterscheiden (individuelle Verantwortung)."
          ]
        },
        {
          items: [
            "Systeme, die überwiegend mit englischsprachigen Daten trainiert wurden, können in anderen sprachlichen Kontexten schlechter abschneiden.",
            "Automatische Empfehlungen können Geschlechter-, Ethnie- oder Klassenstereotype verstärken — kritisch überprüfen.",
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
            "Dies ist keine Präsentation — es ist eine Ko-Konstruktion. Jede teilnehmende Person geht mit mindestens einer Ressource, die sofort getestet werden kann."
          ]
        },
        {
          items: [
            "<strong>0–10 Min:</strong> Einführung — das Problem der heterogenen Klasse und warum mehr vom Gleichen nicht funktioniert.",
            "<strong>10–25 Min:</strong> Profilkarte — Vorstellung der sechs Farol-Karten mit echten (anonymisierten) Fallbeispielen.",
            "<strong>25–45 Min:</strong> Praktische Demonstration — drei Tools, drei Anwendungsfälle, drei unterschiedliche Profile.",
            "<strong>45–75 Min:</strong> Partnerarbeit — jedes Paar passt ein vorhandenes Material für ein bestimmtes Profil an.",
            "<strong>75–85 Min:</strong> Schnelles Teilen — jedes Paar präsentiert sein Ergebnis in 1 Minute.",
            "<strong>85–90 Min:</strong> Verpflichtungen — jede teilnehmende Person legt ein Material fest, das in der nächsten Woche getestet wird."
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
            "Die Schulgesetze der Länder regeln die konkrete Umsetzung inklusiver Bildung — der Handlungsspielraum variiert je nach Bundesland.",
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
            "Möglichkeit der Beschulung in der Regelschule mit sonderpädagogischer Unterstützung oder in der Förderschule — Eltern haben ein Wunsch- und Wahlrecht.",
            "Der schulpsychologische Dienst (Schulpsychologin/Schulpsychologe) begleitet den Prozess und berät Eltern und Lehrkräfte."
          ]
        },
        {
          items: [
            "Keine einheitliche Bundesregelung für Hochbegabung — jedes Bundesland regelt dies eigenständig.",
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
    }
  },
  nl: {
    tdah: {
      sections: [
        {
          items: [
            "Moeite om de aandacht bij langdurige taken te houden; raakt de draad kwijt bij instructies met meerdere stappen.",
            "Voortdurende beweging — blijft niet zitten, beweegt de handen, staat op zonder duidelijke reden.",
            "Antwoordt voordat de vraag is afgemaakt; onderbreekt klasgenoten en de docent.",
            "Vergeet materialen, deadlines, mondeling gegeven instructies van een paar minuten geleden.",
            "Kan hyperfocussen op iets wat hem interesseert, waardoor de (onjuiste) indruk ontstaat dat hij \"het kan als hij wil\"."
          ]
        },
        {
          items: [
            "<strong>Het is geen</strong> slechte opvoeding, luiheid of karakterzwakte.",
            "<strong>Het is niet</strong> altijd zichtbare hyperactiviteit — er bestaat ADHD met overwegend aandachtstekort (vaker bij meisjes, vaak onderdiagnostiseerd).",
            "<strong>Het is niet</strong> op te lossen met \"meer je best doen\" — het probleem is neurologisch, niet motivationeel."
          ]
        },
        {
          items: [
            "Instructies opsplitsen: één tegelijk, schriftelijk op het bord, met een duidelijk tijdskader.",
            "Legitieme beweging toestaan (materialen uitdelen, het bord schoonmaken, boodschappen doen voor de zorgcoördinator).",
            "Concurrerende prikkels verminderen (zitplaats weg van het raam, van de deur, van de drukste groep).",
            "Directe positieve bekrachtiging — de neurologische beloningscyclus is korter bij ADHD."
          ]
        },
        {
          items: [
            "Beginnen met wat de leerling goed doet — het gesprek mag niet beginnen als een lijst met klachten.",
            "Waargenomen gedrag beschrijven, geen diagnoses stellen: \"Als er meer dan twee opeenvolgende stappen zijn, verliest hij de draad.\"",
            "Voorbereid zijn op de reactie \"thuis is het niet zo\" — de klassenomgeving maakt symptomen zichtbaarder.",
            "Als psychologische evaluatie wordt aangeraden, dit presenteren als een hulpbron, niet als straf."
          ]
        },
        {
          items: [
            "Aanhoudende disciplineproblemen ondanks aanpassingen in de klas.",
            "Tekenen van sociale uitsluiting door klasgenoten.",
            "Signalen van comorbiditeit (angst, depressie, oppositioneel-opstandige gedragsstoornis)."
          ]
        }
      ]
    },
    dislexia: {
      sections: [
        {
          items: [
            "Leest langzaam en struikelend, ook bij teksten die hij mondeling begrijpt.",
            "Verwisselt visueel gelijkaardige letters (b/d, p/q); keert de volgorde van letters binnen een woord om.",
            "Aanhoudende spelfouten die niet reageren op herhaalde correctie.",
            "Vermijdt hardop lezen; kan lijken alsof hij niet wil meedoen, maar beschermt zichzelf in feite.",
            "Mondeling begrip is veel beter dan schriftelijk begrip."
          ]
        },
        {
          items: [
            "<strong>Geen</strong> gebrek aan intelligentie — dyslexie is onafhankelijk van het IQ.",
            "<strong>Niet</strong> alleen \"letters omdraaien\" — het is een stoornis in de fonologische verwerking.",
            "<strong>Het geneest niet</strong> — het wordt een leven lang beheerd met compensatiestrategieën."
          ]
        },
        {
          items: [
            "Teksten met aangepast lettertype aanbieden (OpenDyslexic of vergelijkbaar; vergroot tekenafstand).",
            "Stil lezen toestaan vóór elk hardop lezen — nooit onverwacht aanwijzen.",
            "Inhoud en spelling apart beoordelen als het doel is kennis te evalueren.",
            "Meerdere formaten voor dezelfde informatie aanbieden (video, audio, schema's)."
          ]
        },
        {
          items: [
            "Lezen en intelligentie expliciet scheiden van het begin af: \"Uw kind begrijpt heel goed wanneer het luistert.\"",
            "Rekening houden met de mogelijkheid dat een van de ouders/verzorgers niet-gediagnosticeerde dyslexie heeft.",
            "Werkbladen met veel rode correcties niet zonder context tonen.",
            "Concreet zijn in aanpassingen: teksten als audio, lezen zonder tijdsdruk."
          ]
        },
        {
          items: [
            "Verslechterend academisch zelfbeeld (\"Ik ben dom\", \"Ik kan het niet\").",
            "Systematisch vermijden van lees-/schrijftaken tot het punt dat andere vakken eronder lijden.",
            "Duidelijk verschil tussen mondelinge en schriftelijke prestaties zonder formele diagnose."
          ]
        }
      ]
    },
    autismo: {
      sections: [
        {
          items: [
            "Moeite met niet-aangekondigde veranderingen — roosterwijziging, andere klas, invalleraar.",
            "Letterlijke communicatie — nuances, ironie en idiomatische uitdrukkingen gaan verloren.",
            "Zintuiglijke gevoeligheid — tl-verlichting, achtergrondgeluiden, kledinglekens kunnen ondraaglijk zijn.",
            "Gerichte en diepe interesses voor specifieke onderwerpen.",
            "Kan desinteresseerd of afstandelijk lijken wanneer hij overprikkeld is — niet onbetrokken."
          ]
        },
        {
          items: [
            "<strong>Het is geen</strong> lineaire schaal (\"meer\" of \"minder\" autistisch) — het is een multidimensionaal profiel.",
            "<strong>Het is geen</strong> gebrek aan empathie — vaak is het omgekeerde het geval, met moeite om te filteren.",
            "<strong>Het is geen</strong> slecht gedrag wanneer een routine wordt doorbroken — het is een echte neurologische reactie."
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
            "De inspanning van de familie waarderen — structuur en voorspelbaarheid thuis creëren is veeleisend.",
            "Nooit vergelijken met \"andere leerlingen\" of broers en zussen — elk spectrumprofiel is anders."
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
            "Handschrift is moeilijk, traag en vaak onleesbaar — niet door onzorgvuldigheid, maar door echte motorische moeilijkheden.",
            "Moeite met ruimtelijke organisatie van het schrift, materiaalbeheersing en het volgen van stappenreeksen.",
            "Kan \"onhandig\" lijken — morst dranken, botst tegen meubilair, heeft moeite met sport.",
            "Onevenredige vermoeidheid na taken die aanhoudende fijne motoriek vereisen.",
            "De cognitieve component is over het algemeen intact — frequente frustratie over de kloof tussen weten en kunnen laten zien."
          ]
        },
        {
          items: [
            "<strong>Geen</strong> luiheid of gebrek aan inzet.",
            "<strong>Niet</strong> alleen slechte handschrift — het beïnvloedt de planning en volgordebepaling van taken.",
            "<strong>Niet</strong> op te lossen met \"meer handschriftoefening\"."
          ]
        },
        {
          items: [
            "Gebruik van toetsenbord/tablet bij langere schriftelijke opdrachten toestaan.",
            "Mechanisch kopiëren van het bord verminderen — indien relevant aantekeningen verstrekken.",
            "Expliciete checklists bieden voor taken met meerdere stappen.",
            "Het product beoordelen op inhoud, niet op uiterlijke presentatie."
          ]
        },
        {
          items: [
            "In eenvoudige taal uitleggen wat dyspraxie is — de meeste ouders/verzorgers hebben de term nog nooit gehoord.",
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
            "Stelt vragen buiten de stof — of daagt actief het onderwezene uit.",
            "Kan desinteresseerd, ongedisciplineerd of apathisch lijken — vaak tekenen van chronische onderstimulering.",
            "Uitgesproken emotionele gevoeligheid; kan angstig, perfectionistisch of onrechtvaardig veeleisend jegens zichzelf zijn.",
            "Echt risico op onderprestatatie — leert zijn capaciteiten te verbergen om sociaal niet op te vallen."
          ]
        },
        {
          items: [
            "<strong>Niet</strong> synoniem met goed gedrag of goede resultaten.",
            "<strong>Niet</strong> \"heeft geen hulp nodig\" — heeft andere uitdagingen nodig, niet minder aandacht.",
            "<strong>Niet</strong> onverenigbaar met neurodivergentie — dubbele exceptionelheid (2e) bestaat en komt vaak voor."
          ]
        },
        {
          items: [
            "Altijd verdiepingstaken klaar hebben — niet meer van hetzelfde, maar diepgaandere of toegepaste inhoud.",
            "Onafhankelijk onderzoek mogelijk maken over onderwerpen die de leerling interesseren binnen het programma.",
            "Beoordelen naar moeilijkheidsgraad, niet naar gemak — veeleisendere opdrachten vragen in ruil voor minder volume.",
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
            "Leerlingen die Nederlands als Tweede Taal (NT2) leren, kunnen in de klas langzamer lijken — dit weerspiegelt een taalbarrière, geen cognitieve beperking.",
            "De Internationale Schakelklas (ISK, voor 12+) en de schakelklas (basisonderwijs) bieden intensieve taalontwikkeling vóór instroom in het reguliere onderwijs.",
            "Een taaltoets bij aankomst helpt het niveau te bepalen en passende ondersteuning te organiseren.",
            "NT2-leerlingen worden geregistreerd bij DUO als nieuwkomer; school heeft zorgplicht.",
            "De NT2-docent is de eerste aanspreekpersoon voor taalondersteuning en differentiatiestrategie."
          ]
        },
        {
          items: [
            "<strong>Niet</strong> elke taalmoeilijkheid is een leerprobleem — de NT2-context moet altijd eerst worden meegewogen.",
            "<strong>Niet</strong> aannemen dat gebrek aan mondelinge deelname wijst op desinteresse.",
            "<strong>Niet</strong> taalondersteuning en speciale onderwijszorg verwarren — ze hebben verschillende juridische grondslagen."
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
            "Ouders/verzorgers uitleggen dat NT2 tijd kost — academische taalvaardigheid (CALP) ontwikkelt zich over 5–7 jaar.",
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
            "Controleren waar de tool gegevens opslaat — Europese of niet-Europese servers, geanonimiseerd of niet.",
            "Nooit volledige namen, adressen, identificatienummers of klinische diagnosen invoeren in generatieve AI-tools.",
            "Institutioneel gebruik onderscheiden van persoonlijk gebruik door de docent (individuele verantwoordelijkheid)."
          ]
        },
        {
          items: [
            "Systemen die voornamelijk met Engelstalige data zijn getraind, kunnen in andere taalkundige contexten slechter presteren.",
            "Automatische aanbevelingen kunnen stereotypen op basis van gender, etniciteit of klasse versterken — kritisch controleren.",
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
            "Dit is geen presentatie — het is een co-constructie. Elke deelnemer vertrekt met ten minste één resource die meteen getest kan worden."
          ]
        },
        {
          items: [
            "<strong>0–10 min:</strong> Kader — het probleem van de heterogene klas en waarom meer van hetzelfde niet werkt.",
            "<strong>10–25 min:</strong> Profielkaart — presentatie van de zes Farol-kaarten met echte (geanonimiseerde) casussen.",
            "<strong>25–45 min:</strong> Praktische demonstratie — drie tools, drie gebruikscases, drie verschillende profielen.",
            "<strong>45–75 min:</strong> Samenwerking in tweetallen — elk tweetal past een bestaand materiaal aan voor een specifiek profiel.",
            "<strong>75–85 min:</strong> Snel delen — elk tweetal presenteert zijn product in 1 minuut.",
            "<strong>85–90 min:</strong> Verbintenissen — elke deelnemer bepaalt één materiaal om de volgende week te testen."
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
            "Kernwet: Wet passend onderwijs (2014) — elke school is verplicht een passend onderwijsaanbod te doen voor elke leerling.",
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
    }
  },
  pl: {
    tdah: {
      sections: [
        {
          items: [
            "Trudności z utrzymaniem uwagi przy długich zadaniach; gubi się w instrukcjach składających się z wielu kroków.",
            "Ciągły ruch — nie siedzi spokojnie, porusza rękami, wstaje bez wyraźnego powodu.",
            "Odpowiada, zanim pytanie zostanie dokończone; przerywa kolegom i nauczycielowi.",
            "Zapomina o materiałach, terminach, ustnie podanych przed chwilą instrukcjach.",
            "Może hiperfokusować się na czymś, co go interesuje, co stwarza (błędne) wrażenie, że \"może, kiedy chce\"."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> złe wychowanie, lenistwo ani brak charakteru.",
            "<strong>To nie jest</strong> zawsze widoczna nadpobudliwość — istnieje ADHD z dominującymi trudnościami uwagowymi (częstsze u dziewcząt, często niedodiagnozowane).",
            "<strong>Nie rozwiąże się tego</strong> przez \"większe staranie\" — problem jest neurologiczny, nie motywacyjny."
          ]
        },
        {
          items: [
            "Rozbijanie instrukcji na części: po jednej naraz, na piśmie na tablicy, z wyraźnie określonym czasem.",
            "Zezwolenie na uzasadniony ruch (rozdawanie materiałów, ścieranie tablicy, bieganie z wiadomościami do pedagoga/psychologa szkolnego).",
            "Ograniczenie bodźców rozpraszających (miejsce z dala od okna, drzwi, najgłośniejszej grupy).",
            "Natychmiastowe pozytywne wzmocnienie — neurologiczny cykl nagrody jest krótszy w ADHD."
          ]
        },
        {
          items: [
            "Zacząć od tego, co uczeń robi dobrze — rozmowa nie może zaczynać się od listy skarg.",
            "Opisywać obserwowane zachowania, nie stawiać diagnoz: \"Gdy jest więcej niż dwa kolejne kroki, traci wątek.\"",
            "Być przygotowanym na reakcję \"w domu tak nie jest\" — kontekst klasy sprawia, że objawy są bardziej widoczne.",
            "Jeśli sugeruje się ocenę psychologiczną, przedstawić ją jako zasób, a nie karę."
          ]
        },
        {
          items: [
            "Utrzymujące się problemy dyscyplinarne pomimo dostosowań w klasie.",
            "Oznaki wykluczenia społecznego przez rówieśników.",
            "Sygnały komorbiditetu (lęk, depresja, zaburzenie opozycyjno-buntownicze)."
          ]
        }
      ]
    },
    dislexia: {
      sections: [
        {
          items: [
            "Czyta wolno i z potknięciami, nawet w tekstach, które rozumie w formie ustnej.",
            "Myli litery podobne wizualnie (b/d, p/q); odwraca kolejność liter wewnątrz słowa.",
            "Utrzymujące się błędy ortograficzne, które nie reagują na powtarzaną korektę.",
            "Unika czytania na głos; może wydawać się niezainteresowany uczestnictwem, podczas gdy w rzeczywistości się chroni.",
            "Rozumienie ze słuchu znacznie przewyższa rozumienie tekstu pisanego."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> brak inteligencji — dysleksja jest niezależna od IQ.",
            "<strong>To nie jest</strong> tylko \"przestawianie liter\" — jest to zaburzenie przetwarzania fonologicznego.",
            "<strong>Nie wylecza się</strong> — przez całe życie radzi sobie z nią przy pomocy strategii kompensacyjnych."
          ]
        },
        {
          items: [
            "Udostępniać teksty z dostosowaną typografią (OpenDyslexic lub podobna; zwiększone odstępy).",
            "Zezwalać na ciche czytanie przed jakimkolwiek czytaniem na głos — nigdy nie wywoływać niespodziewanie.",
            "Oceniać treść oddzielnie od ortografii, gdy celem jest ocena wiedzy.",
            "Oferować wiele formatów dla tej samej informacji (wideo, audio, schematy)."
          ]
        },
        {
          items: [
            "Od początku wyraźnie oddzielić czytanie od inteligencji: \"Pana/Pani dziecko bardzo dobrze rozumie, gdy słucha.\"",
            "Pamiętać, że jedno z rodziców/opiekunów może mieć niezdiagnozowaną dysleksję.",
            "Nie pokazywać kart pracy z dużą ilością czerwonych poprawek bez kontekstu.",
            "Być konkretnym w dostosowaniach: teksty w formie audio, czytanie bez presji czasowej."
          ]
        },
        {
          items: [
            "Pogarszający się akademicki obraz siebie (\"Jestem głupi\", \"Nie daję rady\").",
            "Systematyczne unikanie zadań związanych z czytaniem/pisaniem do tego stopnia, że wpływa to na inne przedmioty.",
            "Wyraźna rozbieżność między wynikami ustnymi i pisemnymi bez formalnej diagnozy."
          ]
        }
      ]
    },
    autismo: {
      sections: [
        {
          items: [
            "Trudności z niezapowiedzianymi zmianami — zmiana planu lekcji, sali, nauczyciel zastępczy.",
            "Dosłowna komunikacja — gubi niuanse, ironię, idiomy.",
            "Wrażliwość sensoryczna — światło fluorescencyjne, szum tła, metki w ubraniu mogą być nie do zniesienia.",
            "Skupione i głębokie zainteresowania dotyczące określonych tematów.",
            "Może wydawać się niezainteresowany lub zdystansowany, gdy jest przytłoczony — nie odłączony."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> liniowa skala (\"bardziej\" lub \"mniej\" autystyczny) — jest to wielowymiarowy profil.",
            "<strong>To nie jest</strong> brak empatii — często jest odwrotnie, z trudnością w filtrowaniu.",
            "<strong>To nie jest</strong> złe zachowanie, gdy rutyna zostaje przerwana — jest to prawdziwa reakcja neurologiczna."
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
            "Doceniać wysiłek rodziny — tworzenie struktury i przewidywalności w domu jest wymagające.",
            "Nigdy nie porównywać z \"innymi uczniami\" ani rodzeństwem — każdy profil spektrum jest inny."
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
            "Pismo odręczne jest trudne, wolne i często nieczytelne — nie z powodu niedbałości, lecz z powodu rzeczywistych trudności motorycznych.",
            "Trudności z przestrzenną organizacją zeszytu, zarządzaniem materiałami, sekwencjami kroków.",
            "Może sprawiać wrażenie \"niezdarnego\" — przelewa napoje, wchodzi w meble, ma trudności w sporcie.",
            "Nieproporcjonalne zmęczenie po zadaniach wymagających długotrwałej motoryki precyzyjnej.",
            "Komponent poznawczy jest zazwyczaj zachowany — częsta frustracja między wiedzą a możliwością jej pokazania."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> lenistwo ani brak zaangażowania.",
            "<strong>To nie jest</strong> tylko złe pismo — dotyczy planowania i sekwencjonowania zadań.",
            "<strong>Nie rozwiąże się tego</strong> przez \"więcej ćwiczeń w pisaniu\"."
          ]
        },
        {
          items: [
            "Zezwalać na używanie klawiatury/tabletu przy dłuższych pracach pisemnych.",
            "Ograniczać mechaniczne przepisywanie z tablicy — w razie potrzeby dostarczać notatki.",
            "Dostarczać wyraźne listy kontrolne do zadań składających się z wielu kroków.",
            "Oceniać produkt według treści, a nie wyglądu zewnętrznego."
          ]
        },
        {
          items: [
            "Wyjaśnić, czym jest dyspraksja, prostym językiem — większość rodziców/opiekunów nigdy nie słyszała tego terminu.",
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
            "Zadaje pytania wykraczające poza zakres materiału — lub aktywnie kwestionuje to, co jest nauczane.",
            "Może sprawiać wrażenie niezainteresowanego, zdyscyplinowanego lub apatycznego — często są to oznaki przewlekłej nudy.",
            "Wyraźna wrażliwość emocjonalna; może być lękliwy, perfekcjonistyczny lub niesprawiedliwie wymagający wobec siebie.",
            "Realne ryzyko słabszych wyników — uczy się ukrywać swoje zdolności, by nie wyróżniać się społecznie."
          ]
        },
        {
          items: [
            "<strong>To nie jest</strong> synonim dobrego zachowania ani dobrych wyników.",
            "<strong>To nie jest</strong> \"nie potrzebuje pomocy\" — potrzebuje innych wyzwań, a nie mniej uwagi.",
            "<strong>To nie jest</strong> niezgodne z neuroróżnorodnością — podwójna wyjątkowość (2e) istnieje i jest częsta."
          ]
        },
        {
          items: [
            "Zawsze mieć przygotowane zadania rozszerzające — nie więcej tego samego, lecz głębsze lub zastosowane treści.",
            "Umożliwiać samodzielne badanie tematów interesujących ucznia w ramach programu.",
            "Oceniać według poziomu trudności, a nie łatwości — wymagać bardziej wymagających prac w zamian za mniejszą objętość.",
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
            "Uczniowie uczący się języka polskiego jako drugiego mogą w klasie wydawać się wolniejsi — odzwierciedla to barierę językową, a nie ograniczenie poznawcze.",
            "Klasy przygotowawcze umożliwiają opanowanie podstaw języka polskiego przed integracją z klasą regularną.",
            "Dodatkowe zajęcia z języka polskiego są przewidziane w rozporządzeniu MEN 2017 o kształceniu cudzoziemców.",
            "Bariera językowa sama w sobie nie uzasadnia orzeczenia o potrzebie kształcenia specjalnego.",
            "Nauczyciel wspomagający lub asystent kulturowy to pierwsza osoba kontaktowa w zakresie wsparcia językowego."
          ]
        },
        {
          items: [
            "<strong>Nie</strong> każda trudność językowa jest problemem edukacyjnym — należy zawsze uwzględniać kontekst nauki polskiego jako drugiego języka.",
            "<strong>Nie</strong> zakładać, że brak aktywności ustnej wskazuje na brak zainteresowania.",
            "<strong>Nie</strong> mylić wsparcia językowego z kształceniem specjalnym — mają one inne podstawy prawne."
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
            "Wyjaśnić rodzicom/opiekunom, że nauka języka polskiego wymaga czasu — akademicka kompetencja językowa (CALP) rozwija się przez 5–7 lat.",
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
            "Sprawdzić, gdzie narzędzie przechowuje dane — serwery europejskie lub pozaeuropejskie, zanonimizowane lub nie.",
            "Nigdy nie wprowadzać pełnych imion i nazwisk, adresów, numerów identyfikacyjnych ani klinicznych diagnoz do narzędzi generatywnej AI.",
            "Odróżniać użycie instytucjonalne od osobistego użytku nauczyciela (indywidualna odpowiedzialność)."
          ]
        },
        {
          items: [
            "Systemy wytrenowane głównie na danych anglojęzycznych mogą działać gorzej w innych kontekstach językowych.",
            "Automatyczne rekomendacje mogą wzmacniać stereotypy dotyczące płci, etniczności lub klasy — weryfikować krytycznie.",
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
            "To nie jest prezentacja — to ko-konstrukcja. Każdy uczestnik wychodzi z co najmniej jednym zasobem gotowym do przetestowania."
          ]
        },
        {
          items: [
            "<strong>0–10 min:</strong> Wprowadzenie — problem heterogenicznej klasy i dlaczego więcej tego samego nie działa.",
            "<strong>10–25 min:</strong> Mapa profili — prezentacja sześciu kart Farol z prawdziwymi (zanonimizowanymi) przypadkami.",
            "<strong>25–45 min:</strong> Demonstracja praktyczna — trzy narzędzia, trzy przypadki użycia, trzy różne profile.",
            "<strong>45–75 min:</strong> Praca w parach — każda para dostosowuje istniejący materiał do określonego profilu.",
            "<strong>75–85 min:</strong> Szybkie dzielenie się — każda para prezentuje swój produkt w 1 minutę.",
            "<strong>85–90 min:</strong> Zobowiązania — każdy uczestnik wyznacza jeden materiał do przetestowania w następnym tygodniu."
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
            "Orzeczenie o potrzebie kształcenia specjalnego wydaje poradnia psychologiczno-pedagogiczna (PPP) — jest niezbędne do sformalizowanego wsparcia specjalnego.",
            "Konstytucja RP i ratyfikowana Konwencja ONZ o prawach osób z niepełnosprawnościami stanowią ramy prawa do edukacji włączającej."
          ]
        },
        {
          items: [
            "Dostosowanie wymagań edukacyjnych możliwe na podstawie opinii PPP, bez orzeczenia — odpowiedzialność każdego nauczyciela.",
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
            "Brak szczegółowej ustawy regulującej kształcenie uczniów zdolnych — zagadnienie ujęte w Krajowym Programie Wspierania Uczniów Zdolnych MEN.",
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
    }
  },
  ro: {
    tdah: {
      sections: [
        {
          items: [
            "Dificultăți în menținerea atenției la sarcini lungi; se pierde în instrucțiuni cu mai mulți pași.",
            "Mișcare constantă — nu stă așezat, mișcă mâinile, se ridică fără un motiv aparent.",
            "Răspunde înainte ca întrebarea să fie terminată; întrerupe colegii și profesorul.",
            "Uită materiale, termene limită, instrucțiuni date oral cu câteva minute în urmă.",
            "Poate hiperfocaliza pe ceva care îl interesează, creând impresia (greșită) că \"poate când vrea\"."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> lipsă de educație, lene sau lipsă de caracter.",
            "<strong>Nu este</strong> întotdeauna hiperactivitate vizibilă — există ADHD predominant neatent (mai frecvent la fete, adesea subdiagnosticat).",
            "<strong>Nu se rezolvă</strong> prin \"mai mult efort\" — problema este neurologică, nu motivațională."
          ]
        },
        {
          items: [
            "Instrucțiuni fragmentate: câte una pe rând, în scris pe tablă, cu timp definit.",
            "Permiterea mișcării legitime (distribuirea materialelor, ștergerea tablei, comisioane la consilierul școlar/CJRAE).",
            "Reducerea stimulilor concurenți (loc departe de fereastră, de ușă, de grupul cel mai zgomotos).",
            "Întărire pozitivă imediată — ciclul de recompensă neurologică este mai scurt în ADHD."
          ]
        },
        {
          items: [
            "Să înceapă cu ceea ce elevul face bine — întâlnirea nu poate începe ca o listă de plângeri.",
            "Să descrie comportamentele observate, nu diagnostice: \"Când există mai mult de doi pași consecutivi, pierde firul.\"",
            "Să anticipeze reacția \"acasă nu este așa\" — contextul clasei face simptomele mai vizibile.",
            "Dacă sugerează o evaluare psihologică, să o prezinte ca resursă, nu ca pedeapsă."
          ]
        },
        {
          items: [
            "Probleme disciplinare persistente în ciuda adaptărilor în clasă.",
            "Semne de excludere socială din partea colegilor.",
            "Semnale de comorbiditate (anxietate, depresie, tulburare de opoziție)."
          ]
        }
      ]
    },
    dislexia: {
      sections: [
        {
          items: [
            "Citește lent și cu dificultăți, chiar și texte pe care le înțelege oral.",
            "Confundă litere vizual similare (b/d, p/q); inversează ordinea literelor în interiorul cuvântului.",
            "Greșeli ortografice persistente care nu răspund la corectarea repetată.",
            "Evită cititul cu voce tare; poate părea că nu vrea să participe, în timp ce de fapt se protejează.",
            "Înțelegerea orală este mult superioară înțelegerii scrise."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> lipsă de inteligență — dislexia este independentă de IQ.",
            "<strong>Nu este</strong> doar \"inversarea literelor\" — este o tulburare a procesării fonologice.",
            "<strong>Nu se vindecă</strong> — se gestionează toată viața cu strategii compensatorii."
          ]
        },
        {
          items: [
            "Furnizarea de texte cu tipografie adaptată (OpenDyslexic sau similar; spațiere mărită).",
            "Permiterea citirii silențioase înainte de orice citire cu voce tare — niciodată chemat prin surprindere.",
            "Evaluarea conținutului separat de ortografie când obiectivul este evaluarea cunoștințelor.",
            "Oferirea de formate multiple pentru aceeași informație (video, audio, scheme)."
          ]
        },
        {
          items: [
            "Separarea explicită a cititului de inteligență de la început: \"Copilul dumneavoastră înțelege foarte bine când ascultă.\"",
            "A lua în considerare că unul dintre părinți/tutori poate avea dislexie nediagnosticată.",
            "A evita arătarea fișelor cu multe greșeli marcate în roșu fără context.",
            "A fi concret în adaptări: texte audio, citit fără presiune de timp."
          ]
        },
        {
          items: [
            "Autoconceptul academic în deteriorare (\"Sunt prost\", \"Nu pot\").",
            "Evitarea sistematică a sarcinilor de citit/scris până la compromiterea altor discipline.",
            "Discrepanță marcată între performanța orală și cea scrisă fără diagnostic formal."
          ]
        }
      ]
    },
    autismo: {
      sections: [
        {
          items: [
            "Dificultăți cu schimbările neanunțate — modificarea orarului, a sălii, profesor suplinitor.",
            "Comunicare literală — pierde nuanțele, ironia, expresiile idiomatice.",
            "Sensibilitate senzorială — lumina fluorescentă, zgomotul de fond, etichetele de pe haine pot fi intolerabile.",
            "Interese focalizate și profunde despre teme specifice.",
            "Poate părea dezinteresat sau distant când este supraîncărcat — nu detașat."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> o scală liniară (\"mai mult\" sau \"mai puțin\" autist) — este un profil multidimensional.",
            "<strong>Nu este</strong> lipsă de empatie — frecvent este opusul, cu dificultăți în filtrare.",
            "<strong>Nu este</strong> comportament rău când o rutină este întreruptă — este un răspuns neurologic real."
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
            "Validați efortul familiei — crearea structurii și predictibilității acasă este solicitantă.",
            "Nu comparați niciodată cu \"alți elevi\" sau frați — fiecare profil al spectrului este diferit."
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
            "Scriere de mână dificilă, lentă, frecvent ilizibilă — nu din neglijență, ci din cauza unor dificultăți motorii reale.",
            "Dificultăți în organizarea spațială a caietului, gestionarea materialelor, secvențele de pași.",
            "Poate părea \"neîndemânatic\" — varsă pahare, se lovește de mobilă, are dificultăți la sport.",
            "Oboseală disproporționată după sarcini care necesită motricitate fină susținută.",
            "Componenta cognitivă este în general păstrată — frustrare frecventă între a ști și a putea arăta."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> lene sau lipsă de aplicare.",
            "<strong>Nu este</strong> doar scris de mână prost — afectează planificarea și secvențierea sarcinilor.",
            "<strong>Nu se rezolvă</strong> prin \"mai mult antrenament în scriere\"."
          ]
        },
        {
          items: [
            "Permiterea utilizării tastaturii/tabletei la lucrări scrise extinse.",
            "Reducerea copierii mecanice de pe tablă — furnizarea de notițe când este relevant.",
            "Furnizarea de liste de verificare explicite pentru sarcini cu mai mulți pași.",
            "Evaluarea produsului după conținut, nu după prezentarea fizică."
          ]
        },
        {
          items: [
            "Explicarea în limbaj simplu ce este dispraxia — majoritatea părinților/tutorilor nu au auzit niciodată termenul.",
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
            "Pune întrebări care depășesc sfera materiei — sau contestă activ ceea ce se predă.",
            "Poate părea dezinteresat, indisciplinat sau apatic — frecvent semne de plictiseală cronică.",
            "Sensibilitate emoțională accentuată; poate fi anxios, perfecționist sau nedrept de exigent cu sine însuși.",
            "Risc real de subperformanță — învață să-și ascundă capacitatea pentru a nu ieși în evidență social."
          ]
        },
        {
          items: [
            "<strong>Nu este</strong> sinonim cu comportament bun sau rezultate bune.",
            "<strong>Nu este</strong> \"nu are nevoie de ajutor\" — are nevoie de provocări diferite, nu de mai puțină atenție.",
            "<strong>Nu este</strong> incompatibil cu neurodivergența — dubla excepționalitate (2e) există și este frecventă."
          ]
        },
        {
          items: [
            "Să aibă întotdeauna pregătite sarcini de extindere — nu mai mult din același lucru, ci materie mai profundă sau aplicată.",
            "Să permită cercetarea independentă pe teme de interes ale elevului în cadrul programei.",
            "Să evalueze după dificultate, nu după ușurință — să ceară lucrări mai solicitante în schimbul unui volum mai mic.",
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
            "Elevii alofoni (cu altă limbă maternă decât româna) pot părea mai lenți în clasă — aceasta reflectă o barieră lingvistică, nu o limitare cognitivă.",
            "Clasele de inițiere în limba română oferă suport lingvistic intensiv înainte de integrarea în clasa obișnuită.",
            "CJRAE (Centrul Județean de Resurse și Asistență Educațională) coordonează protocoalele de primire și sprijinul pentru elevii alofoni.",
            "Mediatorul școlar poate sprijini comunicarea cu familiile din comunități rome sau imigrante.",
            "Bariera lingvistică singură nu justifică un certificat de orientare școlară spre învățământ special."
          ]
        },
        {
          items: [
            "<strong>Nu</strong> orice dificultate lingvistică este o problemă de învățare — contextul alofoniei trebuie întotdeauna luat în considerare.",
            "<strong>Nu</strong> presupuneți că lipsa participării orale indică lipsă de interes.",
            "<strong>Nu</strong> confundați sprijinul lingvistic cu educația specială — au baze juridice diferite."
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
            "Explicați părinților/tutorilor că dobândirea limbii române necesită timp — competența academică lingvistică (CALP) se dezvoltă pe parcursul a 5–7 ani.",
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
            "Verificați unde instrumentul stochează datele — servere europene sau extraeuropene, anonimizate sau nu.",
            "Nu introduceți niciodată nume complete, adrese, numere de identificare sau diagnostice clinice în instrumente de IA generativă.",
            "Distingeți utilizarea instituțională de utilizarea personală a cadrului didactic (responsabilitate individuală)."
          ]
        },
        {
          items: [
            "Sistemele antrenate predominant cu date anglofone pot performa mai slab în alte contexte lingvistice.",
            "Recomandările automate pot amplifica stereotipuri de gen, etnie sau clasă — verificați critic.",
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
            "Nu este o prezentare — este o co-construcție. Fiecare participant pleacă cu cel puțin o resursă gata de testat."
          ]
        },
        {
          items: [
            "<strong>0–10 min:</strong> Cadru — problema clasei eterogene și de ce mai mult din același lucru nu funcționează.",
            "<strong>10–25 min:</strong> Harta profilurilor — prezentarea celor șase carduri Farol, cu cazuri reale (anonimizate).",
            "<strong>25–45 min:</strong> Demonstrație practică — trei instrumente, trei cazuri de utilizare, trei profiluri distincte.",
            "<strong>45–75 min:</strong> Lucru în perechi — fiecare pereche adaptează un material existent pentru un profil specific.",
            "<strong>75–85 min:</strong> Partajare rapidă — fiecare pereche prezintă produsul său în 1 minut.",
            "<strong>85–90 min:</strong> Angajamente — fiecare participant definește un material de testat în săptămâna următoare."
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
            "Adaptările curriculare și diferențierea pedagogică sunt responsabilitatea tuturor cadrelor didactice — fără documentație specială.",
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
            "Nu există un regim juridic separat pentru alofoni — sprijinul se acordă prin mecanismele generale de incluziune."
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
    }
  },

};
