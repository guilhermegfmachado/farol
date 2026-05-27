// Translated section items for each language and content slug.
// Structure: contentTranslations[lang][slug].sections[i].items
// Falls back to Portuguese source if a language/slug is absent.
// Section order matches the source .md files exactly.

export type SectionTranslation = { items: string[] };
export type SlugTranslation = { sections: SectionTranslation[] };
export type ContentLang = Record<string, SlugTranslation>;

export const contentTranslations: Partial<Record<string, ContentLang>> = {
  en: {
    tdah: {
      sections: [
        {
          items: [
            "Difficulty sustaining attention on long tasks; gets lost when instructions involve multiple steps.",
            "Constant movement — can't stay seated, fidgets with hands, gets up without apparent reason.",
            "Answers before the question is finished; interrupts classmates and the teacher.",
            "Forgets materials, deadlines, instructions given verbally just minutes earlier.",
            "Can hyperfocus on something of interest, giving the (mistaken) impression that they 'can do it when they want to'.",
          ],
        },
        {
          items: [
            "<strong>It is not</strong> bad manners, laziness, or a character flaw.",
            "<strong>It is not</strong> always visible hyperactivity — there is a predominantly inattentive form of ADHD (more common in girls, frequently under-diagnosed).",
            "<strong>It is not</strong> resolved by 'trying harder' — the problem is neurological, not motivational.",
          ],
        },
        {
          items: [
            "Chunked instructions: one at a time, written on the board, with a defined time limit.",
            "Allow legitimate movement (distributing materials, cleaning the board, errands to the school psychology service).",
            "Reduce competing stimuli (seat away from the window, the door, and the noisiest group).",
            "Immediate positive reinforcement — the neurological reward cycle is shorter in ADHD.",
          ],
        },
        {
          items: [
            "Start with what the student does well — the meeting cannot begin as a list of complaints or the parent/guardian will become defensive.",
            "Describe observed behaviours, not diagnoses: 'when there are more than two steps in a row, they lose the thread' rather than 'they have ADHD'.",
            "Anticipate the reaction 'at home it's not like that' — explain that the group context and the demand for sustained attention in the classroom make symptoms more visible.",
            "If suggesting psychological assessment, frame it as a resource, not a punishment: 'there is support available that can help them a lot' rather than 'they need to be assessed'.",
          ],
        },
        {
          items: [
            "Persistent disciplinary failure despite adaptations in the classroom.",
            "Signs of social exclusion by peers.",
            "Signs of comorbidity (anxiety, depression, oppositional disorder).",
          ],
        },
      ],
    },
    dislexia: {
      sections: [
        {
          items: [
            "Reads slowly, with stumbles, even in texts they understand orally.",
            "Confuses visually similar letters (b/d, p/q); reverses letter order within words.",
            "Writing with persistent spelling errors that do not respond to repeated correction.",
            "Avoids reading aloud; may appear unwilling to participate when in fact they are protecting themselves.",
            "Oral comprehension far superior to written comprehension.",
          ],
        },
        {
          items: [
            "<strong>It is not</strong> a lack of intelligence — dyslexia is independent of IQ.",
            "<strong>It is not</strong> just 'mixing up letters' — it is a phonological processing disorder.",
            "<strong>It is not 'cured'</strong> — it is managed with compensatory strategies throughout life.",
          ],
        },
        {
          items: [
            "Provide texts with adapted typography (OpenDyslexic or similar; increased spacing).",
            "Allow silent reading before any reading aloud — never call on students unexpectedly.",
            "Assess content separately from spelling when the goal is to evaluate knowledge.",
            "Offer multiple formats for the same information (video, audio, diagrams).",
          ],
        },
        {
          items: [
            "Explicitly separate reading from intelligence from the outset: 'your son/daughter understands very well when they listen — the difficulty is specific to written reading'.",
            "Bear in mind that one of the parents may have undiagnosed dyslexia — the conversation may trigger difficult memories of their own schooling.",
            "Avoid showing worksheets covered in red corrections without context — first present what the student can do, then what they need support with.",
            "Be concrete about the adaptations already being made and those the parent/guardian can replicate at home: audio texts, reading aloud without time pressure.",
          ],
        },
        {
          items: [
            "Declining academic self-concept ('I'm stupid', 'I can't do it').",
            "Systematic avoidance of reading/writing tasks to the point of compromising other subjects.",
            "Marked discrepancy between oral and written performance without a formal diagnosis.",
          ],
        },
      ],
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Handwriting that is difficult, slow, and often illegible — not from carelessness but from real motor difficulty.",
            "Difficulty with spatial organisation on the page, managing materials, and sequencing steps.",
            "May appear 'clumsy' — knocking over cups, bumping into furniture, difficulty with sport.",
            "Disproportionate fatigue after tasks requiring sustained fine coordination.",
            "Cognitive ability is generally preserved — frequent frustration from knowing something but being unable to show it.",
          ],
        },
        {
          items: [
            "<strong>It is not</strong> laziness or lack of effort.",
            "<strong>It is not</strong> just poor handwriting — it affects planning and sequencing of tasks.",
            "<strong>It is not</strong> resolved by 'practising handwriting more'.",
          ],
        },
        {
          items: [
            "Allow the use of a keyboard/tablet for extended written work.",
            "Reduce mechanical copying from the board — provide notes when relevant.",
            "Provide explicit checklists for multi-step tasks.",
            "Assess the product by content, not physical presentation.",
          ],
        },
        {
          items: [
            "Explain what dyspraxia/DCD is in plain language — most parents/guardians have never heard the term: 'it is a neurological difficulty with movement coordination, not carelessness or lack of effort'.",
            "Illegible handwriting is the biggest point of friction with parents/guardians — showing that assessment now values content over form helps ease anxiety on both sides.",
            "Suggest practical tools for home: voice dictation on a phone for notes, a keyboard for extended written work.",
            "If there is a history of 'they're lazy' or 'they don't try' from previous years, name it directly: 'I know you've heard that before — my reading of the situation is different'.",
          ],
        },
        {
          items: [
            "Total refusal to produce written work.",
            "Social isolation in physical activity contexts.",
            "Signs of somatised anxiety before written assessments.",
          ],
        },
      ],
    },
    autismo: {
      sections: [
        {
          items: [
            "Difficulty with unannounced changes — changes to the timetable, room, or supply teacher.",
            "Literal communication — misses nuance, irony, and idiomatic expressions.",
            "Sensory sensitivity — fluorescent lighting, background noise, clothing labels can be intolerable.",
            "Focused and deep interests in specific topics.",
            "May appear uninterested or distant when overloaded, not disengaged.",
          ],
        },
        {
          items: [
            "<strong>It is not</strong> a linear scale ('more' or 'less' autistic) — it is a multidimensional profile.",
            "<strong>It is not</strong> a lack of empathy — it is often the opposite, with difficulty filtering stimuli.",
            "<strong>It is not</strong> misbehaviour when a routine is broken — it is a real neurological response.",
          ],
        },
        {
          items: [
            "Give advance notice of any change to routine, even apparently trivial ones.",
            "Make implicit social rules explicit (what to do, what not to do, when).",
            "Allow sensory breaks in a quiet space when needed.",
            "Use focused interests as entry points for curriculum content.",
          ],
        },
        {
          items: [
            "If a diagnosis already exists, first ask what the parent/guardian knows works — parents of autistic children often know more about their child than any report.",
            "If there is no diagnosis, be very careful: describe specific situations without ever using the word 'autism' in a first meeting — 'when the routine changes without warning, your son/daughter becomes very distressed in a way that goes beyond the typical'.",
            "Validate the parent/guardian's efforts — creating structure and predictability at home is demanding, and acknowledging this builds alliance.",
            "Never compare with 'other students' or with siblings — every profile on the spectrum is different and comparison is always counterproductive.",
          ],
        },
        {
          items: [
            "Frequent meltdowns after the school day.",
            "Persistent school refusal associated with sensory overload.",
            "Progressive social isolation despite mediation attempts.",
          ],
        },
      ],
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Finishes tasks in minutes while the class takes the whole lesson.",
            "Asks questions that go beyond the topic — or actively challenges what is being taught.",
            "May appear uninterested, disruptive, or apathetic — often signs of chronic boredom.",
            "Heightened emotional sensitivity; may be anxious, perfectionist, or unfairly demanding of themselves.",
            "Real risk of underperformance — learns to hide ability to avoid standing out socially.",
          ],
        },
        {
          items: [
            "<strong>It is not</strong> synonymous with good behaviour or good results — many gifted students achieve mediocre results through disengagement.",
            "<strong>It is not</strong> 'doesn't need help' — they need different challenges, not less attention.",
            "<strong>It is not</strong> incompatible with neurodivergence — twice exceptional (2e) exists and is common.",
          ],
        },
        {
          items: [
            "Always have extension tasks ready — not more of the same, but deeper or applied material.",
            "Allow independent research on topics of the student's interest within the curriculum.",
            "Assess by challenge, not ease — ask for more demanding work in exchange for less volume.",
            "Acknowledge and validate emotional sensitivity without pathologising.",
          ],
        },
        {
          items: [
            "Anticipate the pride and redirect it: 'your son/daughter is clearly very capable — and it is precisely because of this that the boredom is causing problems'.",
            "Explain the giftedness paradox: good results do not mean all is well — many gifted students achieve mediocre results through disengagement, not lack of ability.",
            "If the student hides their ability to fit in socially, name it carefully — it is a sign of distress, not modesty.",
            "Encourage the parent/guardian to value process over outcome at home: curiosity, depth, difficult questions are worth more than high marks on easy tasks.",
          ],
        },
        {
          items: [
            "Signs of anxiety or depression associated with extreme perfectionism.",
            "Marked social isolation from feeling 'different' from peers.",
            "Sudden academic underperformance in a student previously identified as capable.",
          ],
        },
      ],
    },
    plnm: {
      sections: [
        {
          items: [
            "Understands much less than they appear to — may nod along without having understood.",
            "Apparently low academic performance, often disproportionate to actual ability.",
            "Silence in the classroom — may be an adaptive strategy, not disengagement.",
            "May be exhausted by the end of the day from mentally translating in real time.",
            "Risk of under-diagnosing real learning needs (dyslexia, ADHD, etc.) by attributing everything to the language barrier.",
          ],
        },
        {
          items: [
            "<strong>It is not</strong> a lack of intelligence or ability.",
            "<strong>It is not</strong> just a matter of time — without explicit support, many students plateau at a low functional level.",
            "<strong>It is not</strong> resolved by automatic translation during class — it is a process of years.",
          ],
        },
        {
          items: [
            "Provide materials with key vocabulary translated into the student's home language.",
            "Assess knowledge through visual or practical demonstration wherever possible.",
            "Pair with a bilingual classmate for informal mediation at critical moments.",
            "Accept early written work with grammatical errors — correct content, not form, in the first phase.",
          ],
        },
        {
          items: [
            "The meeting itself is a barrier — the parent/guardian may not speak the language of instruction with sufficient proficiency for a complex conversation. Prepare simple written materials in advance, or arrange for translation support.",
            "Do not assume the parent/guardian knows the local education system — explain what the school psychology service is, what a support measure is, what an assessment involves, without taking anything for granted.",
            "Clearly separate language barrier from academic ability: 'your son/daughter is capable — they are learning the language at the same time as learning the content, which is very demanding'.",
            "Be sensitive to the migration context: refugee families or those in irregular situations may distrust institutions. Build trust before requesting documentation or referrals.",
          ],
        },
        {
          items: [
            "Signs of social isolation or bullying associated with being a foreign-background student.",
            "Stagnation in language acquisition after the first year.",
            "Signs of trauma associated with the migration context (especially refugees).",
          ],
        },
      ],
    },
    etica: {
      sections: [
        {
          items: [
            "Data relating to minors is subject to enhanced protection (Art. 8 GDPR). Consent from parents/guardians is mandatory.",
            "Check where the tool stores data — European servers, non-European servers, anonymised or not.",
            "Never enter full names, addresses, identification numbers, or clinical diagnoses into generative AI tools.",
            "Distinguish institutional use (the school signs the contract) from personal use by the teacher (individual responsibility).",
          ],
        },
        {
          items: [
            "Systems trained predominantly on English-language data may perform worse in other languages and cultural contexts.",
            "Automated recommendations may amplify gender, ethnic, or class stereotypes — review critically.",
            "'Academic risk prediction' models are particularly problematic — they frequently reproduce existing inequalities instead of identifying needs.",
          ],
        },
        {
          items: [
            "The goal is to increase student autonomy, not to replace the cognitive work that develops it.",
            "Distinguish an <strong>access tool</strong> (text-to-speech for a student with dyslexia) from a <strong>replacement tool</strong> (ChatGPT writing the essay).",
            "Evaluate regularly: is the student developing competence, or developing dependency on the tool?",
          ],
        },
        {
          items: [
            "<strong>1.</strong> Does the tool address a real barrier, or create a shortcut that bypasses learning?",
            "<strong>2.</strong> Is the data entered protected and does consent exist?",
            "<strong>3.</strong> Will the tool's output be reviewed by a human before reaching the student?",
            "<strong>4.</strong> Is there a non-AI alternative that works equally well?",
            "<strong>5.</strong> If the tool ceased to exist tomorrow, would the student be left helpless?",
          ],
        },
      ],
    },
    oficina: {
      sections: [
        {
          items: [
            "To equip colleagues for the responsible integration of AI in language teaching, producing materials adaptable to multiple learning profiles.",
            "This is not a presentation — it is co-construction. Each participant leaves with at least one resource ready to test.",
          ],
        },
        {
          items: [
            "<strong>0–10 min:</strong> Framing — the challenge of heterogeneous classes and why more of the same doesn't work.",
            "<strong>10–25 min:</strong> Profile mapping — presentation of the six Farol cards, with real (anonymised) cases.",
            "<strong>25–45 min:</strong> Practical demonstration — three tools, three use cases, three distinct profiles.",
            "<strong>45–75 min:</strong> Pair work — each pair adapts an existing material for a specific profile.",
            "<strong>75–85 min:</strong> Quick share — each pair presents their product in 1 minute.",
            "<strong>85–90 min:</strong> Commitments — each participant identifies one material to test and schedules a feedback session in 30 days.",
          ],
        },
        {
          items: [
            "Internet access and institutional accounts for the tools being demonstrated.",
            "Existing materials from each participant (a worksheet, a test, or a lesson plan).",
            "Printed Farol profile cards for reference.",
          ],
        },
        {
          items: [
            "Each participant produces at least one adapted material during the session.",
            "A 30-day feedback session with at least 60% of participants reporting effective implementation.",
            "At least one material produced in the session is adopted as a shared departmental resource.",
          ],
        },
      ],
    },
    legislacao: {
      sections: [
        {
          items: [
            "Establishes the legal framework for inclusive education, repealing the previous Decreto-Lei 3/2008. Based on the principles of Universal Design for Learning (UDL) and the UN Convention on the Rights of Persons with Disabilities.",
            "Defines three levels of learning and inclusion support measures: <strong>universal</strong> (for all students), <strong>selective</strong> (for specific difficulties) and <strong>additional</strong> (for significant and permanent needs).",
            "Referral may be initiated by any teacher, by the parent/guardian, by the student themselves (if of age), or by health services — it is not the exclusive responsibility of the form tutor.",
            "The referral process does not require a prior medical diagnosis — the school can and should act on the basis of pedagogical observation.",
          ],
        },
        {
          items: [
            "Pedagogical differentiation, curriculum accommodations, promotion of pro-social behaviours and in-class learning support.",
            "Do not require a technical-pedagogical report or formal authorisation — they are the responsibility of all teachers.",
            "Practical examples: additional time in tests, written instructions in addition to oral ones, strategic seating, alternative oral assessment.",
          ],
        },
        {
          items: [
            "<strong>Selective</strong>: for students who do not respond sufficiently to universal measures. Require a Technical-Pedagogical Report (RTP) drawn up by a multidisciplinary team.",
            "<strong>Additional</strong>: for significant and permanent needs requiring an Individual Education Programme (PEI). Includes adaptations to the assessment process, specialist support, and in extreme cases, an individual-specific curriculum.",
            "The PEI is reviewed annually and requires the active participation of the parent/guardian — the parent/guardian's signature is mandatory.",
            "The SPO (school psychology service) coordinates the specialist assessment process and is the central point of contact for referrals.",
          ],
        },
        {
          items: [
            "Decreto-Lei 54/2018 explicitly includes students with above-average learning abilities within the scope of inclusive education.",
            "Circular 3/DSEEASE/2011 sets out guidelines for supporting gifted students, including the possibility of curriculum acceleration and extracurricular enrichment.",
            "In practice, giftedness is frequently under-referred due to lack of teacher training and because it is not associated with visible difficulties — Decreto-Lei 54/2018 does not resolve this structural problem.",
          ],
        },
        {
          items: [
            "Despacho Normativo 7/2006 and subsequent legislation regulate the teaching of Portuguese as a Non-Mother Tongue (PLNM). EAL students are placed at levels A1 to C2 (QECR) following diagnostic assessment.",
            "Assessment of EAL students in other subjects must take the language barrier into account — grades should not penalise linguistic proficiency when the aim is to assess content knowledge.",
            "Students with fewer than two years of schooling in Portugal are entitled to specific PLNM support — check availability within the school cluster.",
          ],
        },
        {
          items: [
            "<strong>DL 54/2018</strong> — general framework for inclusive education (replaced DL 3/2008).",
            "<strong>DL 55/2018</strong> — curricular autonomy and flexibility, complementary to the above.",
            "<strong>Despacho Normativo 1-F/2016</strong> — assessment framework for basic education students.",
            "<strong>Circular 3/DSEEASE/2011</strong> — guidelines for giftedness.",
            "<strong>Despacho Normativo 7/2006</strong> — PLNM.",
          ],
        },
      ],
    },
  },

  es: {
    tdah: {
      sections: [
        {
          items: [
            "Dificultad para mantener la atención en tareas largas; se pierde cuando las instrucciones tienen varios pasos.",
            "Movimiento constante — no permanece sentado, mueve las manos, se levanta sin razón aparente.",
            "Responde antes de que termine la pregunta; interrumpe a los compañeros y al docente.",
            "Olvida materiales, plazos, instrucciones dadas oralmente hace apenas unos minutos.",
            "Puede hiperfocalizarse en algo que le interesa, dando la impresión (equivocada) de que 'puede cuando quiere'.",
          ],
        },
        {
          items: [
            "<strong>No es</strong> mala educación, pereza, ni falta de carácter.",
            "<strong>No es</strong> siempre hiperactividad visible — existe el TDAH predominantemente desatento (más frecuente en niñas, frecuentemente infradiagnosticado).",
            "<strong>No se resuelve</strong> con 'esforzarse más' — el problema es neurológico, no motivacional.",
          ],
        },
        {
          items: [
            "Instrucciones fragmentadas: una cada vez, escritas en la pizarra, con tiempo definido.",
            "Permitir movimiento legítimo (repartir materiales, borrar la pizarra, recados al servicio de orientación escolar).",
            "Reducir estímulos competidores (sitio alejado de la ventana, la puerta y el grupo más ruidoso).",
            "Refuerzo positivo inmediato — el ciclo de recompensa neurológico es más corto en el TDAH.",
          ],
        },
        {
          items: [
            "Comenzar con lo que el alumno hace bien — la reunión no puede comenzar como una lista de quejas o la familia se pondrá a la defensiva.",
            "Describir comportamientos observados, no diagnósticos: 'cuando hay más de dos pasos seguidos, pierde el hilo' en lugar de 'tiene TDAH'.",
            "Anticipar la reacción 'en casa no es así' — explicar que el contexto grupal y la exigencia de atención sostenida en el aula hacen los síntomas más visibles.",
            "Si se sugiere evaluación psicológica, presentarla como un recurso, no como un castigo: 'hay apoyo disponible que puede ayudarle mucho' en lugar de 'necesita ser evaluado/a'.",
          ],
        },
        {
          items: [
            "Fallo disciplinario persistente a pesar de las adaptaciones en el aula.",
            "Señales de exclusión social por parte de los compañeros.",
            "Señales de comorbilidad (ansiedad, depresión, trastorno oposicionista).",
          ],
        },
      ],
    },
    dislexia: {
      sections: [
        {
          items: [
            "Lee despacio, con tropiezos, incluso en textos que comprende oralmente.",
            "Confunde letras visualmente similares (b/d, p/q); invierte el orden de letras dentro de la palabra.",
            "Escritura con errores ortográficos persistentes que no responden a la corrección repetida.",
            "Evita leer en voz alta; puede parecer que no quiere participar cuando en realidad se está protegiendo.",
            "Comprensión oral muy superior a la comprensión escrita.",
          ],
        },
        {
          items: [
            "<strong>No es</strong> falta de inteligencia — la dislexia es independiente del cociente intelectual.",
            "<strong>No es</strong> solo 'confundir letras' — es un trastorno del procesamiento fonológico.",
            "<strong>No se 'cura'</strong> — se gestiona con estrategias compensatorias a lo largo de la vida.",
          ],
        },
        {
          items: [
            "Proporcionar textos con tipografía adaptada (OpenDyslexic o similar; espaciado aumentado).",
            "Permitir lectura silenciosa antes de cualquier lectura en voz alta — nunca llamar por sorpresa.",
            "Evaluar el contenido separado de la ortografía cuando el objetivo es evaluar el conocimiento.",
            "Ofrecer múltiples formatos para la misma información (vídeo, audio, esquemas).",
          ],
        },
        {
          items: [
            "Separar explícitamente la lectura de la inteligencia desde el principio: 'su hijo/hija comprende muy bien cuando escucha — la dificultad es específica a la lectura escrita'.",
            "Tener en cuenta que uno de los progenitores puede tener dislexia no diagnosticada — la conversación puede despertar recuerdos difíciles de su propia escolarización.",
            "Evitar mostrar fichas con muchos errores en rojo sin contexto — presentar primero lo que el alumno puede hacer, después lo que necesita apoyo.",
            "Ser concreto en las adaptaciones que ya se están haciendo y en las que la familia puede replicar en casa: textos en audio, lectura en voz alta sin presión de tiempo.",
          ],
        },
        {
          items: [
            "Autoconcepto académico en deterioro ('soy tonto/a', 'no puedo').",
            "Evitación sistemática de tareas de lectura/escritura hasta el punto de comprometer otras asignaturas.",
            "Discrepancia marcada entre rendimiento oral y escrito sin diagnóstico formal.",
          ],
        },
      ],
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Escritura a mano difícil, lenta, frecuentemente ilegible — no por descuido sino por una dificultad motora real.",
            "Dificultad en la organización espacial del cuaderno, gestión de materiales, secuencias de pasos.",
            "Puede parecer 'torpe' — vuelca vasos, choca con el mobiliario, tiene dificultades en educación física.",
            "Cansancio desproporcionado tras tareas que exigen coordinación fina sostenida.",
            "La capacidad cognitiva suele estar preservada — frustración frecuente entre saber y poder demostrarlo.",
          ],
        },
        {
          items: [
            "<strong>No es</strong> pereza ni falta de aplicación.",
            "<strong>No es</strong> solo mala caligrafía — afecta a la planificación y secuenciación de tareas.",
            "<strong>No se resuelve</strong> con 'practicar más la escritura'.",
          ],
        },
        {
          items: [
            "Permitir el uso de teclado/tableta en producciones escritas extensas.",
            "Reducir la copia mecánica de la pizarra — proporcionar apuntes cuando sea relevante.",
            "Proporcionar listas de verificación explícitas para tareas con múltiples pasos.",
            "Evaluar el producto por el contenido, no por la presentación física.",
          ],
        },
        {
          items: [
            "Explicar qué es la dispraxia en lenguaje sencillo — la mayoría de las familias nunca ha oído el término: 'es una dificultad neurológica en la coordinación de movimientos, no es descuido ni falta de esfuerzo'.",
            "La caligrafía ilegible es el mayor punto de fricción con las familias — mostrar que la evaluación ahora valora el contenido y no la forma ayuda a aliviar la ansiedad de ambas partes.",
            "Sugerir herramientas prácticas para casa: dictado por voz en el móvil para apuntes, teclado para trabajos escritos extensos.",
            "Si hay historial de 'es vago/a' o 'no se esfuerza' en años anteriores, nombrarlo directamente: 'sé que ya ha escuchado eso antes — mi lectura de la situación es diferente'.",
          ],
        },
        {
          items: [
            "Negativa total a producir trabajo escrito.",
            "Aislamiento social en contextos de actividad física.",
            "Señales de ansiedad somatizada antes de evaluaciones escritas.",
          ],
        },
      ],
    },
    autismo: {
      sections: [
        {
          items: [
            "Dificultad con los cambios no anunciados — cambio de horario, de aula, de profesor sustituto.",
            "Comunicación literal — pierde matices, ironía, expresiones idiomáticas.",
            "Sensibilidad sensorial — la luz fluorescente, el ruido de fondo, las etiquetas de ropa pueden ser intolerables.",
            "Intereses focalizados y profundos en temas específicos.",
            "Puede parecer desinteresado o distante cuando está sobrecargado, no desconectado.",
          ],
        },
        {
          items: [
            "<strong>No es</strong> una escala lineal ('más' o 'menos' autista) — es un perfil multidimensional.",
            "<strong>No es</strong> falta de empatía — frecuentemente es lo contrario, con dificultad para filtrar estímulos.",
            "<strong>No es</strong> mal comportamiento cuando se rompe una rutina — es una respuesta neurológica real.",
          ],
        },
        {
          items: [
            "Avisar con antelación de cualquier cambio de rutina, aunque parezca trivial.",
            "Convertir las normas sociales implícitas en normas explícitas (qué se hace, qué no se hace, cuándo).",
            "Permitir pausas sensoriales en un espacio tranquilo cuando sea necesario.",
            "Aprovechar el interés focalizado como punto de entrada para los contenidos curriculares.",
          ],
        },
        {
          items: [
            "Si ya existe un diagnóstico, preguntar primero qué sabe la familia que funciona — los padres de niños autistas frecuentemente saben más sobre su hijo que cualquier informe.",
            "Si no hay diagnóstico, ser muy cuidadoso: describir situaciones concretas sin usar nunca la palabra 'autismo' en una primera reunión — 'cuando la rutina cambia sin aviso, su hijo/hija se altera mucho de una forma que va más allá de lo típico'.",
            "Validar el esfuerzo de la familia — crear estructura y previsibilidad en casa es exigente, y reconocerlo crea alianza.",
            "Nunca comparar con 'otros alumnos' ni con hermanos — cada perfil del espectro es diferente y la comparación siempre es contraproducente.",
          ],
        },
        {
          items: [
            "Crisis frecuentes tras el día escolar.",
            "Negativa escolar persistente asociada a sobrecarga sensorial.",
            "Aislamiento social progresivo a pesar de los intentos de mediación.",
          ],
        },
      ],
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Termina las tareas en minutos mientras la clase tarda toda la lección.",
            "Hace preguntas que salen del ámbito de la materia — o desafía activamente lo que se está enseñando.",
            "Puede aparentar desinterés, indisciplina o apatía — frecuentemente señales de aburrimiento crónico.",
            "Sensibilidad emocional acentuada; puede ser ansioso, perfeccionista o injustamente exigente consigo mismo.",
            "Riesgo real de bajo rendimiento — aprende a ocultar su capacidad para no destacar socialmente.",
          ],
        },
        {
          items: [
            "<strong>No es</strong> sinónimo de buen comportamiento o buenos resultados — muchos alumnos con altas capacidades obtienen resultados mediocres por desinterés.",
            "<strong>No es</strong> 'no necesita ayuda' — necesita desafíos diferentes, no menos atención.",
            "<strong>No es</strong> incompatible con la neurodivergencia — la doble excepcionalidad (2e) existe y es frecuente.",
          ],
        },
        {
          items: [
            "Tener siempre tareas de ampliación preparadas — no más de lo mismo, sino materia más profunda o aplicada.",
            "Permitir investigación independiente sobre temas de interés del alumno dentro del programa.",
            "Evaluar por el desafío, no por la facilidad — pedir trabajos más exigentes a cambio de menor volumen.",
            "Reconocer y validar la sensibilidad emocional sin patologizar.",
          ],
        },
        {
          items: [
            "Anticipar el orgullo y redirigirlo: 'su hijo/hija es claramente muy capaz — y es precisamente por eso que el aburrimiento está creando problemas'.",
            "Explicar la paradoja de las altas capacidades: los buenos resultados no significan que esté bien — muchos alumnos con altas capacidades obtienen resultados mediocres por desinterés, no por falta de capacidad.",
            "Si el alumno oculta su capacidad para integrarse socialmente, nombrarlo con cuidado — es una señal de malestar, no de modestia.",
            "Proponer a la familia que valore el proceso en lugar del resultado en casa: la curiosidad, la profundidad, las preguntas difíciles valen más que las notas altas en tareas fáciles.",
          ],
        },
        {
          items: [
            "Señales de ansiedad o depresión asociadas a perfeccionismo extremo.",
            "Aislamiento social marcado por sentirse 'diferente' a los compañeros.",
            "Bajo rendimiento académico súbito en un alumno previamente identificado como capaz.",
          ],
        },
      ],
    },
    plnm: {
      sections: [
        {
          items: [
            "Comprende mucho menos de lo que aparenta — puede asentir sin haber entendido.",
            "Rendimiento académico aparentemente bajo, frecuentemente desproporcionado a la capacidad real.",
            "Silencio en el aula — puede ser una estrategia adaptativa, no desinterés.",
            "Puede estar agotado al final del día por traducir mentalmente en tiempo real.",
            "Riesgo de infradiagnóstico de necesidades educativas reales (dislexia, TDAH, etc.) al atribuirlo todo a la barrera lingüística.",
          ],
        },
        {
          items: [
            "<strong>No es</strong> falta de inteligencia ni de capacidad.",
            "<strong>No es</strong> solo una cuestión de tiempo — sin apoyo explícito, muchos alumnos se estancan en un nivel funcional bajo.",
            "<strong>No se resuelve</strong> con traducción automática durante la clase — es un proceso de años.",
          ],
        },
        {
          items: [
            "Proporcionar materiales con vocabulario clave traducido a la lengua materna.",
            "Evaluar el conocimiento mediante demostración visual o práctica siempre que sea posible.",
            "Emparejar con un compañero bilingüe para mediación informal en momentos críticos.",
            "Aceptar producciones iniciales con errores gramaticales — corregir el contenido, no la forma, en la primera fase.",
          ],
        },
        {
          items: [
            "La propia reunión es una barrera — la familia puede no hablar la lengua de instrucción con suficiente competencia para una conversación compleja. Preparar materiales escritos sencillos con antelación, o solicitar apoyo de traducción.",
            "No asumir que la familia conoce el sistema educativo — explicar qué es el servicio de orientación escolar, qué es una medida de apoyo, qué implica una evaluación, sin dar nada por sentado.",
            "Separar claramente la barrera lingüística de la capacidad académica: 'su hijo/hija es capaz — está aprendiendo la lengua al mismo tiempo que aprende los contenidos, lo que es muy exigente'.",
            "Ser sensible al contexto migratorio: las familias refugiadas o en situación irregular pueden desconfiar de las instituciones. Construir confianza antes de solicitar documentación o derivaciones.",
          ],
        },
        {
          items: [
            "Señales de aislamiento social o acoso asociados a la condición de alumno extranjero.",
            "Estancamiento en la adquisición lingüística después del primer año.",
            "Señales de trauma asociado al contexto migratorio (especialmente refugiados).",
          ],
        },
      ],
    },
    etica: {
      sections: [
        {
          items: [
            "Los datos de menores están sujetos a protección reforzada (Art. 8 RGPD). El consentimiento de los padres/tutores es obligatorio.",
            "Verificar dónde almacena los datos la herramienta — servidores europeos, no europeos, anonimizados o no.",
            "Nunca introducir nombres completos, direcciones, números de identificación o diagnósticos clínicos en herramientas de IA generativa.",
            "Distinguir el uso institucional (el centro firma el contrato) del uso personal del docente (responsabilidad individual).",
          ],
        },
        {
          items: [
            "Los sistemas entrenados con datos mayoritariamente en inglés pueden tener un rendimiento inferior en otros idiomas y contextos culturales.",
            "Las recomendaciones automáticas pueden amplificar estereotipos de género, etnia o clase — revisar críticamente.",
            "Los modelos de 'predicción de riesgo académico' son particularmente problemáticos — frecuentemente reproducen desigualdades existentes en lugar de identificar necesidades.",
          ],
        },
        {
          items: [
            "El objetivo es aumentar la autonomía del alumno, no sustituir el trabajo cognitivo que lo desarrolla.",
            "Distinguir una <strong>herramienta de acceso</strong> (texto a voz para un alumno con dislexia) de una <strong>herramienta de sustitución</strong> (ChatGPT escribiendo la redacción).",
            "Evaluar regularmente: ¿el alumno está desarrollando competencia, o está desarrollando dependencia de la herramienta?",
          ],
        },
        {
          items: [
            "<strong>1.</strong> ¿La herramienta resuelve una barrera real o crea un atajo que omite el aprendizaje?",
            "<strong>2.</strong> ¿Los datos introducidos están protegidos y existe consentimiento?",
            "<strong>3.</strong> ¿El resultado de la herramienta será revisado por un humano antes de llegar al alumno?",
            "<strong>4.</strong> ¿Existe una alternativa sin IA que funcione igual de bien?",
            "<strong>5.</strong> Si la herramienta dejara de existir mañana, ¿el alumno quedaría desprotegido?",
          ],
        },
      ],
    },
    oficina: {
      sections: [
        {
          items: [
            "Capacitar a los colegas para la integración responsable de la IA en la enseñanza de lenguas, con producción de materiales adaptables a múltiples perfiles de aprendizaje.",
            "No es una presentación — es una co-construcción. Cada participante sale con al menos un recurso listo para probar.",
          ],
        },
        {
          items: [
            "<strong>0–10 min:</strong> Encuadre — el reto del grupo heterogéneo y por qué más de lo mismo no funciona.",
            "<strong>10–25 min:</strong> Mapa de perfiles — presentación de las seis tarjetas del Farol, con casos reales (anonimizados).",
            "<strong>25–45 min:</strong> Demostración práctica — tres herramientas, tres casos de uso, tres perfiles distintos.",
            "<strong>45–75 min:</strong> Trabajo en parejas — cada pareja adapta un material existente para un perfil específico.",
            "<strong>75–85 min:</strong> Puesta en común rápida — cada pareja presenta su producto en 1 minuto.",
            "<strong>85–90 min:</strong> Compromisos — cada participante define un material a probar y programa una sesión de seguimiento a 30 días.",
          ],
        },
        {
          items: [
            "Acceso a internet y a cuentas institucionales en las herramientas demostradas.",
            "Materiales existentes de cada participante (una ficha, un examen o un plan de clase).",
            "Tarjetas impresas de los perfiles del Farol para consulta.",
          ],
        },
        {
          items: [
            "Cada participante produce al menos un material adaptado durante la sesión.",
            "Sesión de seguimiento a 30 días con al menos el 60% de los participantes informando de implementación efectiva.",
            "Al menos un material producido en la sesión es adoptado como recurso compartido del departamento.",
          ],
        },
      ],
    },
    legislacao: {
      sections: [
        {
          items: [
            "Establece el régimen jurídico de la educación inclusiva, derogando el anterior Decreto-Lei 3/2008. Se basa en los principios del Universal Design for Learning (UDL) y en la Convención de la ONU sobre los Derechos de las Personas con Discapacidad.",
            "Define tres niveles de medidas de apoyo al aprendizaje y a la inclusión: <strong>universales</strong> (para todos los alumnos), <strong>selectivas</strong> (para dificultades específicas) y <strong>adicionales</strong> (para necesidades significativas y permanentes).",
            "La derivación puede ser iniciada por cualquier docente, por la familia, por el propio alumno (si es mayor de edad) o por los servicios de salud — no es exclusiva del tutor.",
            "El proceso de derivación no implica diagnóstico médico previo — el centro puede y debe actuar en función de la observación pedagógica.",
          ],
        },
        {
          items: [
            "Diferenciación pedagógica, adaptaciones curriculares, promoción de conductas prosociales y apoyo al aprendizaje en el contexto del aula.",
            "No requieren informe técnico-pedagógico ni autorización formal — son responsabilidad de todos los docentes.",
            "Ejemplos prácticos: tiempo adicional en pruebas, instrucciones escritas además de las orales, ubicación estratégica en el aula, evaluación oral alternativa.",
          ],
        },
        {
          items: [
            "<strong>Selectivas</strong>: para alumnos que no responden suficientemente a las medidas universales. Requieren un Informe Técnico-Pedagógico (RTP) elaborado por un equipo multidisciplinar.",
            "<strong>Adicionales</strong>: para necesidades significativas y permanentes que exigen un Programa Educativo Individual (PEI). Incluyen adaptaciones al proceso de evaluación, apoyo especializado y, en casos extremos, currículo específico individual.",
            "El PEI se revisa anualmente y exige la participación activa de la familia — la firma de la familia es obligatoria.",
            "El SPO (servicio de orientación escolar) coordina el proceso de evaluación especializada y es el punto de contacto central para las derivaciones.",
          ],
        },
        {
          items: [
            "El Decreto-Lei 54/2018 incluye explícitamente a los alumnos con capacidades de aprendizaje superiores a la media en el ámbito de la educación inclusiva.",
            "La Circular 3/DSEEASE/2011 define orientaciones para el seguimiento de alumnos con altas capacidades, incluida la posibilidad de aceleración curricular y enriquecimiento extracurricular.",
            "En la práctica, las altas capacidades están frecuentemente infraderivadas por falta de formación docente y por no estar asociadas a dificultades visibles — el Decreto-Lei 54/2018 no resuelve este problema estructural.",
          ],
        },
        {
          items: [
            "El Despacho Normativo 7/2006 y la legislación posterior regulan la enseñanza del Portugués como Lengua No Materna (PLNM). Los alumnos PLNM se integran en los niveles A1 a C2 (QECR) tras una evaluación diagnóstica.",
            "La evaluación de los alumnos PLNM en las demás asignaturas debe tener en cuenta la barrera lingüística — las calificaciones no deben penalizar el dominio lingüístico cuando el objetivo es evaluar el conocimiento de contenido.",
            "Los alumnos con menos de dos años de escolarización en Portugal tienen derecho a apoyo específico de PLNM — verificar la disponibilidad en el agrupamiento.",
          ],
        },
        {
          items: [
            "<strong>DL 54/2018</strong> — régimen general de la educación inclusiva (sustituyó al DL 3/2008).",
            "<strong>DL 55/2018</strong> — autonomía y flexibilidad curricular, complementario al anterior.",
            "<strong>Despacho Normativo 1-F/2016</strong> — régimen de evaluación de los alumnos de enseñanza básica.",
            "<strong>Circular 3/DSEEASE/2011</strong> — orientaciones para altas capacidades.",
            "<strong>Despacho Normativo 7/2006</strong> — PLNM.",
          ],
        },
      ],
    },
  },

  fr: {
    tdah: {
      sections: [
        {
          items: [
            "Difficulté à maintenir l'attention sur des tâches longues ; se perd dans les instructions à plusieurs étapes.",
            "Mouvement constant — ne reste pas assis, gesticule, se lève sans raison apparente.",
            "Répond avant la fin de la question ; interrompt les camarades et l'enseignant.",
            "Oublie le matériel, les délais, les instructions données oralement quelques minutes plus tôt.",
            "Peut hyperfocaliser sur quelque chose qui l'intéresse, donnant l'impression (erronée) qu'il « peut quand il veut ».",
          ],
        },
        {
          items: [
            "<strong>Ce n'est pas</strong> de la mauvaise éducation, de la paresse ou un défaut de caractère.",
            "<strong>Ce n'est pas</strong> toujours une hyperactivité visible — il existe un TDAH à prédominance inattentive (plus fréquent chez les filles, souvent sous-diagnostiqué).",
            "<strong>Ce n'est pas</strong> résolu par « faire plus d'efforts » — le problème est neurologique, pas motivationnel.",
          ],
        },
        {
          items: [
            "Instructions fragmentées : une à la fois, écrites au tableau, avec un temps défini.",
            "Autoriser le mouvement légitime (distribuer le matériel, effacer le tableau, courses au service de psychologie scolaire).",
            "Réduire les stimuli concurrents (place éloignée de la fenêtre, de la porte et du groupe le plus bruyant).",
            "Renforcement positif immédiat — le cycle de récompense neurologique est plus court dans le TDAH.",
          ],
        },
        {
          items: [
            "Commencer par ce que l'élève fait bien — la réunion ne peut pas débuter comme une liste de plaintes, sinon le parent/tuteur se mettra sur la défensive.",
            "Décrire les comportements observés, pas les diagnostics : « quand il y a plus de deux étapes successives, il perd le fil » plutôt que « il a un TDAH ».",
            "Anticiper la réaction « à la maison ce n'est pas comme ça » — expliquer que le contexte de groupe et l'exigence d'attention soutenue en classe rendent les symptômes plus visibles.",
            "Si l'on suggère une évaluation psychologique, la présenter comme une ressource, pas une punition : « il existe un soutien disponible qui peut beaucoup l'aider » plutôt que « il doit être évalué ».",
          ],
        },
        {
          items: [
            "Échec disciplinaire persistant malgré les adaptations en classe.",
            "Signes d'exclusion sociale de la part des pairs.",
            "Signes de comorbidité (anxiété, dépression, trouble oppositionnel).",
          ],
        },
      ],
    },
    dislexia: {
      sections: [
        {
          items: [
            "Lit lentement, avec des trébuchements, même dans des textes qu'il comprend oralement.",
            "Confond des lettres visuellement similaires (b/d, p/q) ; inverse l'ordre des lettres dans les mots.",
            "Écriture avec des erreurs orthographiques persistantes qui ne répondent pas à la correction répétée.",
            "Évite de lire à voix haute ; peut sembler ne pas vouloir participer alors qu'il se protège en réalité.",
            "Compréhension orale très supérieure à la compréhension écrite.",
          ],
        },
        {
          items: [
            "<strong>Ce n'est pas</strong> un manque d'intelligence — la dyslexie est indépendante du QI.",
            "<strong>Ce n'est pas</strong> seulement « inverser des lettres » — c'est un trouble du traitement phonologique.",
            "<strong>Elle ne se « guérit » pas</strong> — elle se gère avec des stratégies compensatoires tout au long de la vie.",
          ],
        },
        {
          items: [
            "Fournir des textes avec une typographie adaptée (OpenDyslexic ou similaire ; espacement augmenté).",
            "Autoriser une lecture silencieuse avant toute lecture à voix haute — ne jamais interroger à l'improviste.",
            "Évaluer le contenu séparément de l'orthographe lorsque l'objectif est d'évaluer les connaissances.",
            "Proposer plusieurs formats pour la même information (vidéo, audio, schémas).",
          ],
        },
        {
          items: [
            "Séparer explicitement lecture et intelligence dès le début : « votre fils/fille comprend très bien quand il/elle écoute — la difficulté est spécifique à la lecture écrite ».",
            "Tenir compte du fait qu'un des parents peut avoir une dyslexie non diagnostiquée — la conversation peut réveiller des souvenirs difficiles de sa propre scolarité.",
            "Éviter de montrer des fiches couvertes de corrections en rouge sans contexte — présenter d'abord ce que l'élève sait faire, puis ce dont il a besoin d'aide.",
            "Être concret sur les adaptations déjà mises en place et sur celles que le parent/tuteur peut reproduire à la maison : textes en audio, lecture à voix haute sans pression de temps.",
          ],
        },
        {
          items: [
            "Baisse de l'estime de soi scolaire (« je suis nul/nulle », « je n'y arrive pas »).",
            "Évitement systématique des tâches de lecture/écriture au point de compromettre les autres matières.",
            "Écart marqué entre performance orale et écrite sans diagnostic formel.",
          ],
        },
      ],
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Écriture manuelle difficile, lente, souvent illisible — non par négligence mais par une réelle difficulté motrice.",
            "Difficulté dans l'organisation spatiale du cahier, la gestion du matériel, l'enchaînement des étapes.",
            "Peut sembler « maladroit » — renverse des verres, se cogne dans les meubles, difficultés en sport.",
            "Fatigue disproportionnée après des tâches nécessitant une coordination fine soutenue.",
            "Les capacités cognitives sont généralement préservées — frustration fréquente entre savoir et pouvoir montrer.",
          ],
        },
        {
          items: [
            "<strong>Ce n'est pas</strong> de la paresse ou un manque d'application.",
            "<strong>Ce n'est pas</strong> seulement une mauvaise écriture — cela affecte la planification et le séquençage des tâches.",
            "<strong>Ce n'est pas</strong> résolu en « pratiquant davantage l'écriture ».",
          ],
        },
        {
          items: [
            "Autoriser l'usage d'un clavier/d'une tablette pour les productions écrites longues.",
            "Réduire la copie mécanique au tableau — fournir des notes lorsque c'est pertinent.",
            "Fournir des listes de contrôle explicites pour les tâches à plusieurs étapes.",
            "Évaluer le travail sur le contenu, pas sur la présentation physique.",
          ],
        },
        {
          items: [
            "Expliquer ce qu'est la dyspraxie/TDC en langage simple — la plupart des parents/tuteurs n'ont jamais entendu le terme : « c'est une difficulté neurologique de coordination des mouvements, pas de la négligence ni un manque d'effort ».",
            "L'écriture illisible est le principal point de friction avec les parents/tuteurs — montrer que l'évaluation valorise désormais le contenu plutôt que la forme aide à apaiser l'anxiété des deux côtés.",
            "Suggérer des outils pratiques pour la maison : dictée vocale sur le téléphone pour les notes, clavier pour les travaux écrits longs.",
            "S'il y a un historique de « il/elle est paresseux/se » ou « il/elle ne fait pas d'efforts » lors des années précédentes, le nommer directement : « je sais que vous avez déjà entendu ça — ma lecture de la situation est différente ».",
          ],
        },
        {
          items: [
            "Refus total de production écrite.",
            "Isolement social dans les contextes d'activité physique.",
            "Signes d'anxiété somatisée avant les évaluations écrites.",
          ],
        },
      ],
    },
    autismo: {
      sections: [
        {
          items: [
            "Difficulté avec les changements non annoncés — changement d'emploi du temps, de salle, d'enseignant remplaçant.",
            "Communication littérale — perd les nuances, l'ironie, les expressions idiomatiques.",
            "Sensibilité sensorielle — la lumière fluorescente, le bruit de fond, les étiquettes de vêtements peuvent être intolérables.",
            "Intérêts ciblés et approfondis sur des sujets spécifiques.",
            "Peut sembler désintéressé ou distant lorsqu'il est surchargé, non pas déconnecté.",
          ],
        },
        {
          items: [
            "<strong>Ce n'est pas</strong> une échelle linéaire (« plus » ou « moins » autiste) — c'est un profil multidimensionnel.",
            "<strong>Ce n'est pas</strong> un manque d'empathie — c'est souvent le contraire, avec une difficulté à filtrer les stimuli.",
            "<strong>Ce n'est pas</strong> un mauvais comportement quand une routine est rompue — c'est une réponse neurologique réelle.",
          ],
        },
        {
          items: [
            "Prévenir à l'avance de tout changement de routine, même apparemment anodin.",
            "Rendre explicites les règles sociales implicites (ce qu'on fait, ce qu'on ne fait pas, quand).",
            "Permettre des pauses sensorielles dans un espace calme si nécessaire.",
            "Exploiter les intérêts ciblés comme points d'entrée vers les contenus du programme.",
          ],
        },
        {
          items: [
            "Si un diagnostic existe déjà, demander d'abord ce que le parent/tuteur sait qui fonctionne — les parents d'enfants autistes connaissent souvent mieux leur enfant que n'importe quel rapport.",
            "Si aucun diagnostic n'existe, être très prudent : décrire des situations concrètes sans jamais utiliser le mot « autisme » lors d'une première réunion — « quand la routine change sans avertissement, votre fils/fille est très perturbé/e d'une manière qui dépasse le typique ».",
            "Valider les efforts du parent/tuteur — créer une structure et de la prévisibilité à la maison est exigeant, et le reconnaître crée une alliance.",
            "Ne jamais comparer avec « les autres élèves » ou avec les frères et sœurs — chaque profil du spectre est différent et la comparaison est toujours contre-productive.",
          ],
        },
        {
          items: [
            "Crises fréquentes après la journée scolaire.",
            "Refus scolaire persistant associé à une surcharge sensorielle.",
            "Isolement social progressif malgré les tentatives de médiation.",
          ],
        },
      ],
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Termine les tâches en quelques minutes alors que la classe prend toute la leçon.",
            "Pose des questions qui sortent du cadre du cours — ou remet activement en question ce qui est enseigné.",
            "Peut sembler désintéressé, indiscipliné ou apathique — souvent des signes d'ennui chronique.",
            "Sensibilité émotionnelle prononcée ; peut être anxieux, perfectionniste ou injustement exigeant envers lui-même.",
            "Risque réel de sous-performance — apprend à cacher ses capacités pour ne pas se démarquer socialement.",
          ],
        },
        {
          items: [
            "<strong>Ce n'est pas</strong> synonyme de bon comportement ou de bons résultats — beaucoup d'élèves à haut potentiel obtiennent des résultats médiocres par désintérêt.",
            "<strong>Ce n'est pas</strong> « n'a pas besoin d'aide » — il a besoin de défis différents, pas de moins d'attention.",
            "<strong>Ce n'est pas</strong> incompatible avec la neurodivergence — la double exceptionnalité (2e) existe et est fréquente.",
          ],
        },
        {
          items: [
            "Toujours avoir des tâches d'approfondissement prêtes — non pas plus de la même chose, mais une matière plus profonde ou appliquée.",
            "Permettre une recherche indépendante sur des sujets d'intérêt de l'élève dans le cadre du programme.",
            "Évaluer par le défi, pas par la facilité — demander des travaux plus exigeants en échange d'un moindre volume.",
            "Reconnaître et valider la sensibilité émotionnelle sans pathologiser.",
          ],
        },
        {
          items: [
            "Anticiper la fierté et la rediriger : « votre fils/fille est clairement très capable — et c'est précisément pour cela que l'ennui crée des problèmes ».",
            "Expliquer le paradoxe du haut potentiel : de bons résultats ne signifient pas que tout va bien — beaucoup d'élèves à haut potentiel obtiennent des résultats médiocres par désintérêt, pas par manque de capacité.",
            "Si l'élève cache ses capacités pour s'intégrer socialement, le nommer avec soin — c'est un signe de souffrance, pas de modestie.",
            "Encourager le parent/tuteur à valoriser le processus plutôt que le résultat à la maison : la curiosité, la profondeur, les questions difficiles valent plus que les bonnes notes sur des tâches faciles.",
          ],
        },
        {
          items: [
            "Signes d'anxiété ou de dépression associés à un perfectionnisme extrême.",
            "Isolement social marqué par le sentiment d'être « différent » des pairs.",
            "Sous-performance académique soudaine chez un élève précédemment identifié comme capable.",
          ],
        },
      ],
    },
    plnm: {
      sections: [
        {
          items: [
            "Comprend beaucoup moins qu'il n'y paraît — peut acquiescer sans avoir compris.",
            "Résultats académiques apparemment faibles, souvent disproportionnés par rapport à la capacité réelle.",
            "Silence en classe — peut être une stratégie adaptative, pas du désintérêt.",
            "Peut être épuisé en fin de journée par la traduction mentale en temps réel.",
            "Risque de sous-diagnostic de besoins éducatifs réels (dyslexie, TDAH, etc.) en attribuant tout à la barrière linguistique.",
          ],
        },
        {
          items: [
            "<strong>Ce n'est pas</strong> un manque d'intelligence ou de capacité.",
            "<strong>Ce n'est pas</strong> seulement une question de temps — sans soutien explicite, beaucoup d'élèves se stabilisent à un faible niveau fonctionnel.",
            "<strong>Ce n'est pas</strong> résolu par la traduction automatique en classe — c'est un processus de plusieurs années.",
          ],
        },
        {
          items: [
            "Fournir des supports avec le vocabulaire clé traduit dans la langue maternelle.",
            "Évaluer les connaissances par démonstration visuelle ou pratique chaque fois que possible.",
            "Associer à un camarade bilingue pour une médiation informelle dans les moments critiques.",
            "Accepter les productions initiales avec des erreurs grammaticales — corriger le contenu, pas la forme, dans la première phase.",
          ],
        },
        {
          items: [
            "La réunion elle-même est une barrière — le parent/tuteur peut ne pas parler la langue d'enseignement avec une maîtrise suffisante pour une conversation complexe. Préparer des documents écrits simples à l'avance, ou prévoir un soutien à la traduction.",
            "Ne pas supposer que le parent/tuteur connaît le système éducatif — expliquer ce qu'est le service de psychologie scolaire, ce qu'est une mesure de soutien, ce qu'implique une évaluation, sans rien tenir pour acquis.",
            "Séparer clairement la barrière linguistique de la capacité académique : « votre fils/fille est capable — il/elle apprend la langue en même temps qu'il/elle apprend les contenus, ce qui est très exigeant ».",
            "Être sensible au contexte migratoire : les familles réfugiées ou en situation irrégulière peuvent se méfier des institutions. Établir la confiance avant de demander des documents ou des orientations.",
          ],
        },
        {
          items: [
            "Signes d'isolement social ou d'intimidation associés au statut d'élève d'origine étrangère.",
            "Stagnation dans l'acquisition linguistique après la première année.",
            "Signes de traumatisme associés au contexte migratoire (en particulier les réfugiés).",
          ],
        },
      ],
    },
    etica: {
      sections: [
        {
          items: [
            "Les données des mineurs sont soumises à une protection renforcée (Art. 8 RGPD). Le consentement des parents/tuteurs est obligatoire.",
            "Vérifier où l'outil stocke les données — serveurs européens, non européens, anonymisés ou non.",
            "Ne jamais saisir de noms complets, adresses, numéros d'identification ou diagnostics cliniques dans des outils d'IA générative.",
            "Distinguer l'usage institutionnel (l'établissement signe le contrat) de l'usage personnel de l'enseignant (responsabilité individuelle).",
          ],
        },
        {
          items: [
            "Les systèmes entraînés principalement sur des données en anglais peuvent avoir des performances inférieures dans d'autres langues et contextes culturels.",
            "Les recommandations automatiques peuvent amplifier les stéréotypes de genre, d'ethnie ou de classe — vérifier de manière critique.",
            "Les modèles de « prédiction du risque académique » sont particulièrement problématiques — ils reproduisent fréquemment les inégalités existantes au lieu d'identifier les besoins.",
          ],
        },
        {
          items: [
            "L'objectif est d'accroître l'autonomie de l'élève, pas de remplacer le travail cognitif qui la développe.",
            "Distinguer un <strong>outil d'accès</strong> (synthèse vocale pour un élève dyslexique) d'un <strong>outil de substitution</strong> (ChatGPT rédigeant la rédaction).",
            "Évaluer régulièrement : l'élève développe-t-il une compétence, ou développe-t-il une dépendance à l'outil ?",
          ],
        },
        {
          items: [
            "<strong>1.</strong> L'outil résout-il une vraie barrière ou crée-t-il un raccourci qui contourne l'apprentissage ?",
            "<strong>2.</strong> Les données saisies sont-elles protégées et le consentement existe-t-il ?",
            "<strong>3.</strong> Le résultat de l'outil sera-t-il vérifié par un humain avant d'atteindre l'élève ?",
            "<strong>4.</strong> Existe-t-il une alternative sans IA qui fonctionne aussi bien ?",
            "<strong>5.</strong> Si l'outil cessait d'exister demain, l'élève serait-il laissé sans ressources ?",
          ],
        },
      ],
    },
    oficina: {
      sections: [
        {
          items: [
            "Outiller les collègues pour une intégration responsable de l'IA dans l'enseignement des langues, en produisant des supports adaptables à de multiples profils d'apprentissage.",
            "Ce n'est pas une présentation — c'est une co-construction. Chaque participant repart avec au moins une ressource prête à tester.",
          ],
        },
        {
          items: [
            "<strong>0–10 min :</strong> Cadrage — le défi du groupe hétérogène et pourquoi faire plus de la même chose ne fonctionne pas.",
            "<strong>10–25 min :</strong> Cartographie des profils — présentation des six fiches du Farol, avec des cas réels (anonymisés).",
            "<strong>25–45 min :</strong> Démonstration pratique — trois outils, trois cas d'usage, trois profils distincts.",
            "<strong>45–75 min :</strong> Travail en binômes — chaque binôme adapte un support existant pour un profil spécifique.",
            "<strong>75–85 min :</strong> Mise en commun rapide — chaque binôme présente son produit en 1 minute.",
            "<strong>85–90 min :</strong> Engagements — chaque participant identifie un support à tester et programme une session de retour à 30 jours.",
          ],
        },
        {
          items: [
            "Accès à internet et aux comptes institutionnels sur les outils présentés.",
            "Supports existants de chaque participant (une fiche, un test ou un plan de cours).",
            "Fiches imprimées des profils du Farol pour consultation.",
          ],
        },
        {
          items: [
            "Chaque participant produit au moins un support adapté pendant la session.",
            "Session de retour à 30 jours avec au moins 60 % des participants signalant une mise en œuvre effective.",
            "Au moins un support produit lors de la session est adopté comme ressource partagée du département.",
          ],
        },
      ],
    },
    legislacao: {
      sections: [
        {
          items: [
            "Établit le cadre juridique de l'éducation inclusive, abrogeant le précédent Decreto-Lei 3/2008. Il est fondé sur les principes du Universal Design for Learning (UDL) et de la Convention des Nations Unies relative aux droits des personnes handicapées.",
            "Définit trois niveaux de mesures de soutien à l'apprentissage et à l'inclusion : <strong>universelles</strong> (pour tous les élèves), <strong>sélectives</strong> (pour des difficultés spécifiques) et <strong>additionnelles</strong> (pour des besoins significatifs et permanents).",
            "L'orientation peut être initiée par tout enseignant, par le parent/tuteur, par l'élève lui-même (s'il est majeur) ou par les services de santé — elle n'est pas la responsabilité exclusive du professeur principal.",
            "Le processus d'orientation ne nécessite pas de diagnostic médical préalable — l'établissement peut et doit agir sur la base de l'observation pédagogique.",
          ],
        },
        {
          items: [
            "Différenciation pédagogique, aménagements curriculaires, promotion de comportements prosociaux et soutien à l'apprentissage en contexte de classe.",
            "Ne nécessitent pas de rapport technique-pédagogique ni d'autorisation formelle — elles relèvent de la responsabilité de tous les enseignants.",
            "Exemples pratiques : temps supplémentaire lors des évaluations, instructions écrites en plus des orales, place stratégique en classe, évaluation orale alternative.",
          ],
        },
        {
          items: [
            "<strong>Sélectives</strong> : pour les élèves qui ne répondent pas suffisamment aux mesures universelles. Nécessitent un Rapport Technique-Pédagogique (RTP) élaboré par une équipe pluridisciplinaire.",
            "<strong>Additionnelles</strong> : pour des besoins significatifs et permanents nécessitant un Programme Éducatif Individuel (PEI). Inclut des adaptations au processus d'évaluation, un soutien spécialisé, et dans les cas extrêmes, un curriculum spécifique individuel.",
            "Le PEI est révisé annuellement et exige la participation active du parent/tuteur — la signature du parent/tuteur est obligatoire.",
            "Le SPO (service de psychologie scolaire) coordonne le processus d'évaluation spécialisée et constitue le point de contact central pour les orientations.",
          ],
        },
        {
          items: [
            "Le Decreto-Lei 54/2018 inclut explicitement les élèves ayant des capacités d'apprentissage supérieures à la moyenne dans le champ de l'éducation inclusive.",
            "La Circular 3/DSEEASE/2011 définit des orientations pour l'accompagnement des élèves à haut potentiel, incluant la possibilité d'accélération curriculaire et d'enrichissement extrascolaire.",
            "En pratique, le haut potentiel est souvent sous-orienté en raison du manque de formation des enseignants et parce qu'il n'est pas associé à des difficultés visibles — le Decreto-Lei 54/2018 ne résout pas ce problème structurel.",
          ],
        },
        {
          items: [
            "Le Despacho Normativo 7/2006 et les textes ultérieurs réglementent l'enseignement du Portugais Langue Non Maternelle (PLNM). Les élèves PLNM sont intégrés aux niveaux A1 à C2 (QECR) après une évaluation diagnostique.",
            "L'évaluation des élèves PLNM dans les autres matières doit tenir compte de la barrière linguistique — les notes ne doivent pas pénaliser la maîtrise linguistique lorsque l'objectif est d'évaluer les connaissances de contenu.",
            "Les élèves ayant moins de deux ans de scolarité au Portugal ont droit à un soutien PLNM spécifique — vérifier la disponibilité au sein du regroupement scolaire.",
          ],
        },
        {
          items: [
            "<strong>DL 54/2018</strong> — cadre général de l'éducation inclusive (a remplacé le DL 3/2008).",
            "<strong>DL 55/2018</strong> — autonomie et flexibilité curriculaires, complémentaire au précédent.",
            "<strong>Despacho Normativo 1-F/2016</strong> — régime d'évaluation des élèves de l'enseignement de base.",
            "<strong>Circular 3/DSEEASE/2011</strong> — orientations pour le haut potentiel.",
            "<strong>Despacho Normativo 7/2006</strong> — PLNM.",
          ],
        },
      ],
    },
  },

  it: {
    tdah: {
      sections: [
        {
          items: [
            "Difficoltà a mantenere l'attenzione su compiti lunghi; si perde quando le istruzioni hanno più passaggi.",
            "Movimento costante — non rimane seduto, agita le mani, si alza senza motivo apparente.",
            "Risponde prima che la domanda sia finita; interrompe i compagni e l'insegnante.",
            "Dimentica il materiale, le scadenze, le istruzioni date verbalmente pochi minuti prima.",
            "Può iperfocalizzarsi su qualcosa che lo interessa, dando l'impressione (errata) che 'ce la faccia quando vuole'.",
          ],
        },
        {
          items: [
            "<strong>Non è</strong> cattiva educazione, pigrizia o mancanza di carattere.",
            "<strong>Non è</strong> sempre iperattività visibile — esiste un ADHD a predominanza disattentiva (più frequente nelle ragazze, spesso sottodiagnosticato).",
            "<strong>Non si risolve</strong> con 'sforzarsi di più' — il problema è neurologico, non motivazionale.",
          ],
        },
        {
          items: [
            "Istruzioni frammentate: una alla volta, scritte alla lavagna, con un tempo definito.",
            "Consentire il movimento legittimo (distribuire il materiale, cancellare la lavagna, commissioni al servizio di psicologia scolastica).",
            "Ridurre gli stimoli concorrenti (posto lontano dalla finestra, dalla porta e dal gruppo più rumoroso).",
            "Rinforzo positivo immediato — il ciclo di ricompensa neurologico è più breve nell'ADHD.",
          ],
        },
        {
          items: [
            "Iniziare con quello che lo studente fa bene — la riunione non può cominciare come un elenco di lamentele o il genitore/tutore si chiuderà sulla difensiva.",
            "Descrivere i comportamenti osservati, non le diagnosi: 'quando ci sono più di due passaggi consecutivi, perde il filo' invece di 'ha l'ADHD'.",
            "Anticipare la reazione 'a casa non è così' — spiegare che il contesto di gruppo e la richiesta di attenzione prolungata in classe rendono i sintomi più visibili.",
            "Se si suggerisce una valutazione psicologica, presentarla come una risorsa, non una punizione: 'c'è un supporto disponibile che può aiutarlo/a molto' invece di 'ha bisogno di essere valutato/a'.",
          ],
        },
        {
          items: [
            "Fallimento disciplinare persistente nonostante gli adattamenti in classe.",
            "Segnali di esclusione sociale da parte dei compagni.",
            "Segnali di comorbilità (ansia, depressione, disturbo oppositivo).",
          ],
        },
      ],
    },
    dislexia: {
      sections: [
        {
          items: [
            "Legge lentamente, con inciampi, anche in testi che comprende oralmente.",
            "Confonde lettere visivamente simili (b/d, p/q); inverte l'ordine delle lettere nelle parole.",
            "Scrittura con errori ortografici persistenti che non rispondono alla correzione ripetuta.",
            "Evita di leggere ad alta voce; può sembrare non voler partecipare quando in realtà si sta proteggendo.",
            "Comprensione orale molto superiore alla comprensione scritta.",
          ],
        },
        {
          items: [
            "<strong>Non è</strong> mancanza di intelligenza — la dislessia è indipendente dal QI.",
            "<strong>Non è</strong> solo 'scambiare le lettere' — è un disturbo del processamento fonologico.",
            "<strong>Non si 'guarisce'</strong> — si gestisce con strategie compensative nel corso della vita.",
          ],
        },
        {
          items: [
            "Fornire testi con tipografia adattata (OpenDyslexic o simile; spaziatura aumentata).",
            "Consentire la lettura silenziosa prima di qualsiasi lettura ad alta voce — non interrogare mai a sorpresa.",
            "Valutare il contenuto separatamente dall'ortografia quando l'obiettivo è valutare le conoscenze.",
            "Offrire formati multipli per la stessa informazione (video, audio, schemi).",
          ],
        },
        {
          items: [
            "Separare esplicitamente la lettura dall'intelligenza fin dall'inizio: 'suo figlio/sua figlia capisce molto bene quando ascolta — la difficoltà è specifica alla lettura scritta'.",
            "Tenere presente che uno dei genitori potrebbe avere una dislessia non diagnosticata — la conversazione può risvegliare ricordi difficili della propria esperienza scolastica.",
            "Evitare di mostrare schede piene di correzioni in rosso senza contesto — presentare prima quello che lo studente sa fare, poi di cosa ha bisogno di supporto.",
            "Essere concreti sugli adattamenti già in atto e su quelli che il genitore/tutore può replicare a casa: testi in audio, lettura ad alta voce senza pressione di tempo.",
          ],
        },
        {
          items: [
            "Autostima scolastica in deterioramento ('sono stupido/a', 'non ce la faccio').",
            "Evitamento sistematico dei compiti di lettura/scrittura al punto da compromettere le altre materie.",
            "Marcata discrepanza tra prestazione orale e scritta senza diagnosi formale.",
          ],
        },
      ],
    },
    dispraxia: {
      sections: [
        {
          items: [
            "Scrittura a mano difficile, lenta, spesso illeggibile — non per trascuratezza ma per una reale difficoltà motoria.",
            "Difficoltà nell'organizzazione spaziale del quaderno, nella gestione del materiale, nelle sequenze di passaggi.",
            "Può sembrare 'goffo' — rovescia bicchieri, urta i mobili, ha difficoltà nello sport.",
            "Affaticamento sproporzionato dopo compiti che richiedono coordinazione fine sostenuta.",
            "La capacità cognitiva è generalmente preservata — frustrazione frequente tra il sapere e il riuscire a dimostrarlo.",
          ],
        },
        {
          items: [
            "<strong>Non è</strong> pigrizia o mancanza di impegno.",
            "<strong>Non è</strong> solo una cattiva calligrafia — riguarda la pianificazione e la sequenziazione dei compiti.",
            "<strong>Non si risolve</strong> con 'esercitarsi di più nella scrittura'.",
          ],
        },
        {
          items: [
            "Consentire l'uso di tastiera/tablet per produzioni scritte estese.",
            "Ridurre la copia meccanica dalla lavagna — fornire appunti quando opportuno.",
            "Fornire checklist esplicite per compiti a più passaggi.",
            "Valutare il prodotto per il contenuto, non per la presentazione fisica.",
          ],
        },
        {
          items: [
            "Spiegare cos'è la disprassia/DCD in linguaggio semplice — la maggior parte dei genitori/tutori non ha mai sentito il termine: 'è una difficoltà neurologica nella coordinazione dei movimenti, non è disattenzione né mancanza di impegno'.",
            "La calligrafia illeggibile è il principale punto di attrito con i genitori/tutori — mostrare che la valutazione ora valorizza il contenuto e non la forma aiuta ad alleviare l'ansia di entrambe le parti.",
            "Suggerire strumenti pratici per casa: dettatura vocale sul telefono per gli appunti, tastiera per i lavori scritti estesi.",
            "Se c'è una storia di 'è pigro/a' o 'non si impegna' negli anni precedenti, nominarlo direttamente: 'so che ha già sentito questo — la mia lettura della situazione è diversa'.",
          ],
        },
        {
          items: [
            "Rifiuto totale di produzione scritta.",
            "Isolamento sociale nei contesti di attività fisica.",
            "Segnali di ansia somatizzata prima delle valutazioni scritte.",
          ],
        },
      ],
    },
    autismo: {
      sections: [
        {
          items: [
            "Difficoltà con i cambiamenti non annunciati — cambio di orario, di aula, di insegnante supplente.",
            "Comunicazione letterale — non coglie sfumature, ironia, espressioni idiomatiche.",
            "Sensibilità sensoriale — la luce fluorescente, il rumore di fondo, le etichette dei vestiti possono essere intollerabili.",
            "Interessi focalizzati e profondi su argomenti specifici.",
            "Può sembrare disinteressato o distante quando è sovraccaricato, non disconnesso.",
          ],
        },
        {
          items: [
            "<strong>Non è</strong> una scala lineare ('più' o 'meno' autistico) — è un profilo multidimensionale.",
            "<strong>Non è</strong> mancanza di empatia — spesso è il contrario, con difficoltà a filtrare gli stimoli.",
            "<strong>Non è</strong> cattivo comportamento quando una routine viene interrotta — è una risposta neurologica reale.",
          ],
        },
        {
          items: [
            "Avvisare in anticipo di qualsiasi cambiamento di routine, anche apparentemente banale.",
            "Rendere esplicite le regole sociali implicite (cosa si fa, cosa non si fa, quando).",
            "Consentire pause sensoriali in uno spazio tranquillo quando necessario.",
            "Sfruttare l'interesse focalizzato come punto di ingresso per i contenuti curriculari.",
          ],
        },
        {
          items: [
            "Se esiste già una diagnosi, chiedere prima cosa sa il genitore/tutore che funziona — i genitori di bambini autistici spesso conoscono il proprio figlio meglio di qualsiasi rapporto.",
            "Se non c'è diagnosi, essere molto cauti: descrivere situazioni concrete senza usare mai la parola 'autismo' in un primo incontro — 'quando la routine cambia senza preavviso, suo figlio/sua figlia si turba molto in modo che va oltre il tipico'.",
            "Validare l'impegno del genitore/tutore — creare struttura e prevedibilità a casa è esigente, e riconoscerlo crea un'alleanza.",
            "Non confrontare mai con 'gli altri studenti' o con i fratelli — ogni profilo dello spettro è diverso e il confronto è sempre controproducente.",
          ],
        },
        {
          items: [
            "Crisi frequenti dopo la giornata scolastica.",
            "Rifiuto scolastico persistente associato a sovraccarico sensoriale.",
            "Isolamento sociale progressivo nonostante i tentativi di mediazione.",
          ],
        },
      ],
    },
    sobredotacao: {
      sections: [
        {
          items: [
            "Completa i compiti in pochi minuti mentre la classe impiega tutta la lezione.",
            "Fa domande che esulano dall'argomento — o mette attivamente in discussione ciò che viene insegnato.",
            "Può sembrare disinteressato, indisciplinato o apatico — spesso segnali di noia cronica.",
            "Sensibilità emotiva accentuata; può essere ansioso, perfezionista o ingiustamente esigente con se stesso.",
            "Rischio reale di basso rendimento — impara a nascondere le proprie capacità per non distinguersi socialmente.",
          ],
        },
        {
          items: [
            "<strong>Non è</strong> sinonimo di buon comportamento o buoni risultati — molti studenti gifted ottengono risultati mediocri per disinteresse.",
            "<strong>Non è</strong> 'non ha bisogno di aiuto' — ha bisogno di sfide diverse, non di meno attenzione.",
            "<strong>Non è</strong> incompatibile con la neurodivergenza — la doppia eccezionalità (2e) esiste ed è frequente.",
          ],
        },
        {
          items: [
            "Avere sempre compiti di approfondimento pronti — non più degli stessi, ma materia più approfondita o applicata.",
            "Consentire ricerche indipendenti su argomenti di interesse dello studente nell'ambito del programma.",
            "Valutare per la sfida, non per la facilità — richiedere lavori più impegnativi in cambio di un volume minore.",
            "Riconoscere e valorizzare la sensibilità emotiva senza patologizzare.",
          ],
        },
        {
          items: [
            "Anticipare l'orgoglio e reindirizzarlo: 'suo figlio/sua figlia è chiaramente molto capace — ed è proprio per questo che la noia sta creando problemi'.",
            "Spiegare il paradosso del talento: i buoni risultati non significano che tutto vada bene — molti studenti gifted ottengono risultati mediocri per disinteresse, non per mancanza di capacità.",
            "Se lo studente nasconde le proprie capacità per integrarsi socialmente, nominarlo con cura — è un segnale di sofferenza, non di modestia.",
            "Proporre al genitore/tutore di valorizzare il processo anziché il risultato a casa: la curiosità, la profondità, le domande difficili valgono più dei voti alti su compiti facili.",
          ],
        },
        {
          items: [
            "Segnali di ansia o depressione associati a perfezionismo estremo.",
            "Isolamento sociale marcato dal sentirsi 'diverso' dai coetanei.",
            "Improvviso calo del rendimento accademico in uno studente precedentemente identificato come capace.",
          ],
        },
      ],
    },
    plnm: {
      sections: [
        {
          items: [
            "Comprende molto meno di quanto sembri — può annuire senza aver capito.",
            "Rendimento accademico apparentemente basso, spesso sproporzionato rispetto alla capacità reale.",
            "Silenzio in classe — può essere una strategia adattiva, non disinteresse.",
            "Può essere esausto a fine giornata per tradurre mentalmente in tempo reale.",
            "Rischio di sottodiagnosticare bisogni educativi reali (dislessia, ADHD, ecc.) attribuendo tutto alla barriera linguistica.",
          ],
        },
        {
          items: [
            "<strong>Non è</strong> mancanza di intelligenza o capacità.",
            "<strong>Non è</strong> solo una questione di tempo — senza supporto esplicito, molti studenti si stabilizzano a un livello funzionale basso.",
            "<strong>Non si risolve</strong> con la traduzione automatica durante la lezione — è un processo di anni.",
          ],
        },
        {
          items: [
            "Fornire materiali con il vocabolario chiave tradotto nella lingua madre.",
            "Valutare le conoscenze tramite dimostrazione visiva o pratica ogni volta che è possibile.",
            "Abbinare a un compagno bilingue per una mediazione informale nei momenti critici.",
            "Accettare le produzioni iniziali con errori grammaticali — correggere il contenuto, non la forma, nella prima fase.",
          ],
        },
        {
          items: [
            "La riunione stessa è una barriera — il genitore/tutore potrebbe non parlare la lingua di istruzione con sufficiente padronanza per una conversazione complessa. Preparare materiali scritti semplici in anticipo, o prevedere il supporto di un traduttore.",
            "Non presumere che il genitore/tutore conosca il sistema educativo — spiegare cos'è il servizio di psicologia scolastica, cos'è una misura di supporto, cosa implica una valutazione, senza dare nulla per scontato.",
            "Separare chiaramente la barriera linguistica dalla capacità accademica: 'suo figlio/sua figlia è capace — sta imparando la lingua allo stesso tempo che apprende i contenuti, il che è molto impegnativo'.",
            "Essere sensibili al contesto migratorio: le famiglie rifugiate o in situazione irregolare potrebbero diffidare delle istituzioni. Costruire fiducia prima di richiedere documentazione o segnalazioni.",
          ],
        },
        {
          items: [
            "Segnali di isolamento sociale o bullismo associati alla condizione di studente straniero.",
            "Stagnazione nell'acquisizione linguistica dopo il primo anno.",
            "Segnali di trauma associati al contesto migratorio (in particolare i rifugiati).",
          ],
        },
      ],
    },
    etica: {
      sections: [
        {
          items: [
            "I dati dei minori sono soggetti a protezione rafforzata (Art. 8 RGPD). Il consenso dei genitori/tutori è obbligatorio.",
            "Verificare dove lo strumento archivia i dati — server europei, non europei, anonimi o meno.",
            "Non inserire mai nomi completi, indirizzi, numeri di identificazione o diagnosi cliniche in strumenti di IA generativa.",
            "Distinguere l'uso istituzionale (la scuola firma il contratto) dall'uso personale dell'insegnante (responsabilità individuale).",
          ],
        },
        {
          items: [
            "I sistemi addestrati prevalentemente su dati in lingua inglese possono avere prestazioni inferiori in altre lingue e contesti culturali.",
            "Le raccomandazioni automatiche possono amplificare stereotipi di genere, etnia o classe — verificare criticamente.",
            "I modelli di 'previsione del rischio accademico' sono particolarmente problematici — riproducono spesso le disuguaglianze esistenti invece di identificare i bisogni.",
          ],
        },
        {
          items: [
            "L'obiettivo è aumentare l'autonomia dello studente, non sostituire il lavoro cognitivo che la sviluppa.",
            "Distinguere uno <strong>strumento di accesso</strong> (sintesi vocale per uno studente con dislessia) da uno <strong>strumento di sostituzione</strong> (ChatGPT che scrive la composizione).",
            "Valutare regolarmente: lo studente sta sviluppando competenza, o sta sviluppando dipendenza dallo strumento?",
          ],
        },
        {
          items: [
            "<strong>1.</strong> Lo strumento risolve una barriera reale o crea una scorciatoia che bypassa l'apprendimento?",
            "<strong>2.</strong> I dati inseriti sono protetti e il consenso esiste?",
            "<strong>3.</strong> Il risultato dello strumento verrà verificato da un essere umano prima di arrivare allo studente?",
            "<strong>4.</strong> Esiste un'alternativa senza IA che funzioni altrettanto bene?",
            "<strong>5.</strong> Se lo strumento smettesse di esistere domani, lo studente rimarrebbe senza risorse?",
          ],
        },
      ],
    },
    oficina: {
      sections: [
        {
          items: [
            "Mettere i colleghi in condizione di integrare responsabilmente l'IA nell'insegnamento delle lingue, producendo materiali adattabili a molteplici profili di apprendimento.",
            "Non è una presentazione — è una co-costruzione. Ogni partecipante esce con almeno una risorsa pronta da testare.",
          ],
        },
        {
          items: [
            "<strong>0–10 min:</strong> Inquadramento — la sfida del gruppo eterogeneo e perché fare di più dello stesso non funziona.",
            "<strong>10–25 min:</strong> Mappa dei profili — presentazione delle sei schede del Farol, con casi reali (anonimizzati).",
            "<strong>25–45 min:</strong> Dimostrazione pratica — tre strumenti, tre casi d'uso, tre profili distinti.",
            "<strong>45–75 min:</strong> Lavoro in coppie — ogni coppia adatta un materiale esistente per un profilo specifico.",
            "<strong>75–85 min:</strong> Condivisione rapida — ogni coppia presenta il proprio prodotto in 1 minuto.",
            "<strong>85–90 min:</strong> Impegni — ogni partecipante identifica un materiale da testare e fissa una sessione di feedback a 30 giorni.",
          ],
        },
        {
          items: [
            "Accesso a internet e agli account istituzionali degli strumenti dimostrati.",
            "Materiali esistenti di ogni partecipante (una scheda, un test o un piano di lezione).",
            "Schede stampate dei profili del Farol per consultazione.",
          ],
        },
        {
          items: [
            "Ogni partecipante produce almeno un materiale adattato durante la sessione.",
            "Sessione di feedback a 30 giorni con almeno il 60% dei partecipanti che riporta un'implementazione effettiva.",
            "Almeno un materiale prodotto nella sessione viene adottato come risorsa condivisa del dipartimento.",
          ],
        },
      ],
    },
    legislacao: {
      sections: [
        {
          items: [
            "Stabilisce il quadro giuridico dell'educazione inclusiva, abrogando il precedente Decreto-Lei 3/2008. Si basa sui principi dell'Universal Design for Learning (UDL) e della Convenzione delle Nazioni Unite sui diritti delle persone con disabilità.",
            "Definisce tre livelli di misure di supporto all'apprendimento e all'inclusione: <strong>universali</strong> (per tutti gli studenti), <strong>selettive</strong> (per difficoltà specifiche) e <strong>aggiuntive</strong> (per bisogni significativi e permanenti).",
            "La segnalazione può essere avviata da qualsiasi insegnante, dal genitore/tutore, dallo stesso studente (se maggiorenne) o dai servizi sanitari — non è responsabilità esclusiva del coordinatore di classe.",
            "Il processo di segnalazione non implica una diagnosi medica preventiva — la scuola può e deve agire sulla base dell'osservazione pedagogica.",
          ],
        },
        {
          items: [
            "Differenziazione pedagogica, adattamenti curriculari, promozione di comportamenti prosociali e supporto all'apprendimento nel contesto della classe.",
            "Non richiedono una relazione tecnico-pedagogica né un'autorizzazione formale — sono responsabilità di tutti gli insegnanti.",
            "Esempi pratici: tempo aggiuntivo nelle prove, istruzioni scritte oltre a quelle orali, posto strategico in classe, valutazione orale alternativa.",
          ],
        },
        {
          items: [
            "<strong>Selettive</strong>: per gli studenti che non rispondono sufficientemente alle misure universali. Richiedono una Relazione Tecnico-Pedagogica (RTP) elaborata da un team multidisciplinare.",
            "<strong>Aggiuntive</strong>: per bisogni significativi e permanenti che richiedono un Programma Educativo Individuale (PEI). Include adattamenti al processo di valutazione, supporto specializzato e, nei casi estremi, un curriculum individuale specifico.",
            "Il PEI viene rivisto annualmente e richiede la partecipazione attiva del genitore/tutore — la firma del genitore/tutore è obbligatoria.",
            "Il SPO (servizio di psicologia scolastica) coordina il processo di valutazione specializzata ed è il punto di contatto centrale per le segnalazioni.",
          ],
        },
        {
          items: [
            "Il Decreto-Lei 54/2018 include esplicitamente gli studenti con capacità di apprendimento superiori alla media nell'ambito dell'educazione inclusiva.",
            "La Circular 3/DSEEASE/2011 definisce le linee guida per il supporto agli studenti dotati, inclusa la possibilità di accelerazione curriculare e arricchimento extracurriculare.",
            "In pratica, il talento è spesso sottosegnalato per mancanza di formazione degli insegnanti e perché non è associato a difficoltà visibili — il Decreto-Lei 54/2018 non risolve questo problema strutturale.",
          ],
        },
        {
          items: [
            "Il Despacho Normativo 7/2006 e la normativa successiva regolano l'insegnamento del Portoghese Lingua Non Materna (PLNM). Gli studenti PLNM vengono inseriti nei livelli da A1 a C2 (QECR) dopo una valutazione diagnostica.",
            "La valutazione degli studenti PLNM nelle altre materie deve tenere conto della barriera linguistica — i voti non devono penalizzare la padronanza linguistica quando l'obiettivo è valutare le conoscenze di contenuto.",
            "Gli studenti con meno di due anni di scolarità in Portogallo hanno diritto a un supporto PLNM specifico — verificare la disponibilità nell'istituto comprensivo.",
          ],
        },
        {
          items: [
            "<strong>DL 54/2018</strong> — quadro generale dell'educazione inclusiva (ha sostituito il DL 3/2008).",
            "<strong>DL 55/2018</strong> — autonomia e flessibilità curriculare, complementare al precedente.",
            "<strong>Despacho Normativo 1-F/2016</strong> — regime di valutazione degli studenti dell'istruzione di base.",
            "<strong>Circular 3/DSEEASE/2011</strong> — linee guida per il talento.",
            "<strong>Despacho Normativo 7/2006</strong> — PLNM.",
          ],
        },
      ],
    },
  },
};
