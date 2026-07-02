import type { Lang } from "./ui";

// Contenido de la página "Nosotros" por idioma. Los nombres propios y correos
// del equipo no se traducen; sí se traducen las áreas y las credenciales.
export const nosotros = {
  es: {
    metaTitle: "Nosotros — Ramírez Medellín, S.C.",
    metaDesc:
      "Conozca a Ramírez Medellín, S.C.: firma de Contadores Públicos y Abogados fundada en 1998 en San Luis Potosí. Nuestra historia, valores y equipo profesional.",

    heroEyebrow: "Nosotros",
    heroH1: ["El oficio", "bien llevado."],
    heroSub:
      "Somos una firma de Contadores Públicos y Abogados fundada en el año 1998, en la ciudad de San Luis Potosí, México. Nos especializamos en prestar servicios profesionales en contabilidad, auditoría, asesoría de negocios, servicio legal empresarial y patrimonial.",
    slpAlt: "Fachada de cantera de un edificio histórico en el centro de San Luis Potosí.",

    historiaEyebrow: "Nuestra historia",
    historiaTitulo: ["Desde 1998,", "asiento por asiento"],
    historiaP1:
      "Prestamos servicios a todo tipo de personas y entidades del sector público y privado, nacionales y extranjeras. Tenemos experiencia en atender entidades de diversas actividades económicas y objeto social.",
    historiaP2pre: "Contamos con una firma filial, ",
    historiaP2strong: "Pacioli Asesores de Negocios, S.C.",
    historiaP2post:
      ", con la que ampliamos nuestro acompañamiento en materia de asesoría y consultoría de negocios.",

    filialEyebrow: "Firma filial",
    filialAlt: "Pacioli Asesores de Negocios, S.C.",
    filialDescPre: "Su nombre honra a ",
    filialDescStrong: "Luca Pacioli",
    filialDescPost:
      ", considerado el padre de la contabilidad por partida doble. A través de esta firma filial acercamos a empresas y personas servicios especializados de asesoría y consultoría de negocios.",
    filialLink: "Conozca nuestra asesoría de negocios",

    mvvAria: "Misión, visión y valores",
    misionTitulo: "Misión",
    misionTexto:
      "Prestar servicios de asesoría patrimonial a los clientes de una forma integral enfocados a optimizar sus recursos bajo un esquema de confianza y certidumbre.",
    visionTitulo: "Visión",
    visionTexto:
      "Posicionar la firma como una de las de mayor prestigio del centro del país.",
    filosofiaTitulo: "Filosofía",
    filosofiaTexto:
      "Profesionales en constante actualización, comprometidos a prestar un servicio de la más alta calidad utilizando la mejor de las herramientas disponibles con base en la creatividad e innovación de nuestro personal.",
    valoresAria: "Valores",
    // TODO: descripciones propuestas por el despacho; confirmar redacción con el cliente.
    valores: [
      { nombre: "Confianza", desc: "Cuidamos cada asunto con discreción y transparencia, para ser un aliado de largo plazo." },
      { nombre: "Responsabilidad", desc: "Asumimos cada encargo con rigor y cumplimiento puntual de plazos y obligaciones." },
      { nombre: "Respeto", desc: "Escuchamos y tratamos a cada cliente y colaborador con apertura y consideración." },
      { nombre: "Creatividad", desc: "Buscamos soluciones a la medida, más allá de las respuestas convencionales." },
      { nombre: "Innovación", desc: "Adoptamos las mejores herramientas y prácticas para servir con mayor precisión." },
      { nombre: "Calidad", desc: "Trabajamos con estándares altos y atención al detalle en cada entregable." },
    ],

    citaAria: "Cita institucional",
    citaTexto:
      "Reunirse en equipo es el principio, mantenerse en equipo es el progreso, trabajar en equipo asegura el éxito.",

    socioEyebrow: "Socio fundador",
    socioNombre: "José Cosme Ramírez Medellín",
    socioTexto:
      "Fundador de la firma en 1998 y de su filial Pacioli Asesores de Negocios, S.C.",

    equipoEyebrow: "Nuestro equipo",
    equipoTitulo: ["Conoce a los profesionales", "que dan vida a nuestra filosofía"],

    ctaEyebrow: "Hablemos",
    ctaTitulo: ["Conozca cómo", "podemos ayudarle"],
    ctaAgenda: "Agenda una consulta",

    // Fotos del equipo (opcional): agregar `foto: "/images/equipo/<archivo>.webp"`
    // a la persona correspondiente. Si no hay foto, se muestra el monograma de iniciales.
    equipo: [
      {
        area: "Consultoría",
        personas: [
          { nombre: "Marisela Elisea Martínez", credencial: "Contador Público por la UASLP · Especialista en Impuestos", correo: "marisela@rmp.mx" },
        ],
      },
      {
        area: "Contabilidad",
        personas: [
          { nombre: "Paola Guadalupe Guevara Moreno", credencial: "Contador Público por la UASLP · Especialista en Impuestos", correo: "paola@rmp.mx" },
          { nombre: "Yuliana Cerda Cerda", credencial: "Contador Público por la Universidad Tangamanga", correo: "yuliana@rmp.mx" },
          { nombre: "María Lucero Rodríguez Díaz", credencial: "Contador Público por la Universidad Potosina", correo: "lucero.rodriguez@rmp.mx" },
        ],
      },
      {
        area: "Auditoría",
        personas: [
          { nombre: "Citlaly Reyes Jaime", credencial: "Contador Público por la UASLP · Especialista en Auditoría", correo: "citlaly@rmp.mx" },
        ],
      },
      {
        area: "Legal",
        personas: [
          { nombre: "Eugenia Eloisa Navarro González", credencial: "Licenciado en Derecho por la UASLP", correo: "eugenia@rmp.mx" },
          { nombre: "Alicia del Carmen Rocha Agundis", credencial: "Licenciado en Derecho por la UASLP · Especialista en Justicia Administrativa (TFJA)", correo: "alicia.rocha@rmp.mx" },
        ],
      },
      {
        area: "Administración",
        personas: [
          { nombre: "Liliana Vega Betancourt", credencial: "Responsable de la Administración General de la Firma", correo: "liliana@rmp.mx" },
        ],
      },
      {
        area: "Desarrollo Humano",
        personas: [
          { nombre: "Gabriela Guadalupe Ramírez González", credencial: "Licenciado en Psicología por la Universidad Marista de SLP · Maestrante en Psicoterapia Humanista · Experto en Desarrollo Humano y Organizacional", correo: "gaby@rmp.mx" },
        ],
      },
    ],
  },

  en: {
    metaTitle: "About — Ramírez Medellín, S.C.",
    metaDesc:
      "Get to know Ramírez Medellín, S.C.: a firm of Public Accountants and Attorneys founded in 1998 in San Luis Potosí. Our history, values and professional team.",

    heroEyebrow: "About",
    heroH1: ["The craft", "done right."],
    heroSub:
      "We are a firm of Public Accountants and Attorneys founded in 1998 in the city of San Luis Potosí, Mexico. We specialize in professional services in accounting, auditing, business advisory, and corporate and estate legal counsel.",
    slpAlt: "Quarry-stone facade of a historic building in downtown San Luis Potosí.",

    historiaEyebrow: "Our history",
    historiaTitulo: ["Since 1998,", "entry by entry"],
    historiaP1:
      "We serve all kinds of individuals and entities in the public and private sectors, both domestic and foreign. We have experience serving entities across diverse economic activities and corporate purposes.",
    historiaP2pre: "We have an affiliate firm, ",
    historiaP2strong: "Pacioli Asesores de Negocios, S.C.",
    historiaP2post:
      ", through which we broaden our support in business advisory and consulting.",

    filialEyebrow: "Affiliate firm",
    filialAlt: "Pacioli Asesores de Negocios, S.C.",
    filialDescPre: "Its name honors ",
    filialDescStrong: "Luca Pacioli",
    filialDescPost:
      ", regarded as the father of double-entry bookkeeping. Through this affiliate firm we bring companies and individuals specialized business advisory and consulting services.",
    filialLink: "Discover our business advisory",

    mvvAria: "Mission, vision and values",
    misionTitulo: "Mission",
    misionTexto:
      "To provide clients with comprehensive estate-advisory services focused on optimizing their resources within a framework of trust and certainty.",
    visionTitulo: "Vision",
    visionTexto:
      "To position the firm among the most prestigious in central Mexico.",
    filosofiaTitulo: "Philosophy",
    filosofiaTexto:
      "Continuously updated professionals, committed to delivering the highest-quality service using the best available tools, grounded in the creativity and innovation of our people.",
    valoresAria: "Values",
    // TODO: proposed descriptions; confirm wording with the client.
    valores: [
      { nombre: "Trust", desc: "We handle every matter with discretion and transparency, to be a long-term ally." },
      { nombre: "Responsibility", desc: "We take on each engagement with rigor and on-time compliance with deadlines and obligations." },
      { nombre: "Respect", desc: "We listen to and treat every client and colleague with openness and consideration." },
      { nombre: "Creativity", desc: "We seek tailored solutions beyond conventional answers." },
      { nombre: "Innovation", desc: "We adopt the best tools and practices to serve with greater precision." },
      { nombre: "Quality", desc: "We work to high standards with attention to detail in every deliverable." },
    ],

    citaAria: "Institutional quote",
    citaTexto:
      "Coming together is a beginning, keeping together is progress, working together ensures success.",

    socioEyebrow: "Founding partner",
    socioNombre: "José Cosme Ramírez Medellín",
    socioTexto:
      "Founder of the firm in 1998 and of its affiliate Pacioli Asesores de Negocios, S.C.",

    equipoEyebrow: "Our team",
    equipoTitulo: ["Meet the professionals", "who bring our philosophy to life"],

    ctaEyebrow: "Let's talk",
    ctaTitulo: ["Find out how", "we can help you"],
    ctaAgenda: "Schedule a consultation",

    equipo: [
      {
        area: "Consulting",
        personas: [
          { nombre: "Marisela Elisea Martínez", credencial: "Public Accountant, UASLP · Tax specialist", correo: "marisela@rmp.mx" },
        ],
      },
      {
        area: "Accounting",
        personas: [
          { nombre: "Paola Guadalupe Guevara Moreno", credencial: "Public Accountant, UASLP · Tax specialist", correo: "paola@rmp.mx" },
          { nombre: "Yuliana Cerda Cerda", credencial: "Public Accountant, Universidad Tangamanga", correo: "yuliana@rmp.mx" },
          { nombre: "María Lucero Rodríguez Díaz", credencial: "Public Accountant, Universidad Potosina", correo: "lucero.rodriguez@rmp.mx" },
        ],
      },
      {
        area: "Auditing",
        personas: [
          { nombre: "Citlaly Reyes Jaime", credencial: "Public Accountant, UASLP · Auditing specialist", correo: "citlaly@rmp.mx" },
        ],
      },
      {
        area: "Legal",
        personas: [
          { nombre: "Eugenia Eloisa Navarro González", credencial: "Law degree, UASLP", correo: "eugenia@rmp.mx" },
          { nombre: "Alicia del Carmen Rocha Agundis", credencial: "Law degree, UASLP · Specialist in Administrative Justice (TFJA)", correo: "alicia.rocha@rmp.mx" },
        ],
      },
      {
        area: "Administration",
        personas: [
          { nombre: "Liliana Vega Betancourt", credencial: "Head of the firm's General Administration", correo: "liliana@rmp.mx" },
        ],
      },
      {
        area: "Human Development",
        personas: [
          { nombre: "Gabriela Guadalupe Ramírez González", credencial: "Psychology degree (Universidad Marista de SLP) · Master's candidate in Humanistic Psychotherapy · Expert in Human and Organizational Development", correo: "gaby@rmp.mx" },
        ],
      },
    ],
  },
};

export function getNosotros(lang: Lang) {
  return nosotros[lang] ?? nosotros.es;
}
