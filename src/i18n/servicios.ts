import type { Lang } from "./ui";

// Contenido de la página de servicios por idioma.
// NOTA: las descripciones de una línea (`d`) por servicio son un BORRADOR
// redactado por la agencia para "desarrollar el alcance"; deben ser
// revisadas/confirmadas por la firma antes de publicar (precisión técnica).
// Los nombres de servicio (`n`) sí provienen del contenido original.
export const servicios = {
  es: {
    metaTitle: "Servicios — Ramírez Medellín, S.C.",
    metaDesc:
      "Contabilidad, auditoría, asesoría de negocios y servicios legales para empresas y personas físicas en San Luis Potosí. Conozca nuestras cuatro áreas de práctica.",

    heroEyebrow: "Servicios",
    heroH1: ["Cuatro áreas,", "un solo registro."],
    heroSub:
      "Prestamos servicios a todo tipo de personas y entidades del sector público y privado, nacionales y extranjeras.",
    indiceAria: "Índice de servicios",

    contactanos: "Contáctanos",

    ctaEyebrow: "Hablemos",
    ctaTitulo: ["Cuéntenos qué necesita", "su empresa"],
    ctaAgenda: "Agenda una consulta",

    areas: [
      {
        folio: "01",
        id: "contabilidad",
        titulo: "Contabilidad",
        intro:
          "Llevamos el registro ordenado y oportuno de la información financiera de su empresa: desde el diseño del catálogo de cuentas hasta la declaración anual.",
        cta: "¿Necesita poner en orden su contabilidad?",
        servicios: [
          { n: "Planeación administrativa de la información para preparar contabilidad", d: "Organizamos el flujo de documentos y datos para llevar su contabilidad al día." },
          { n: "Diseño de catálogo de cuentas aplicable a cada cliente", d: "Una estructura de cuentas a la medida de su giro y operación." },
          { n: "Preparación de registros contables", d: "Registro ordenado de todas sus operaciones conforme a la normatividad vigente." },
          { n: "Preparación de estados financieros", d: "Balance, resultados y flujo de efectivo listos para tomar decisiones." },
          { n: "Análisis de estados financieros", d: "Interpretamos sus cifras para detectar riesgos y oportunidades." },
          { n: "Determinación y preparación de bases de impuestos federales y locales", d: "Cálculo de la base de cada impuesto federal y estatal que le aplica." },
          { n: "Elaboración de declaraciones mensuales de impuestos federales y locales", d: "Presentación puntual de sus pagos provisionales y definitivos." },
          { n: "Preparación y determinación de nóminas", d: "Cálculo de sueldos, retenciones y cuotas de IMSS e Infonavit." },
          { n: "Preparación de papeles de trabajo y declaración anual por impuestos federales", d: "Integración y presentación de su declaración anual ante el SAT." },
        ],
      },
      {
        folio: "02",
        id: "auditoria",
        titulo: "Auditoría",
        intro:
          "Revisamos y dictaminamos la información financiera y el cumplimiento de obligaciones de su entidad, con independencia y rigor técnico.",
        cta: "¿Su empresa requiere un dictamen?",
        servicios: [
          { n: "Auditoría de estados financieros", d: "Revisión independiente que da certeza sobre la razonabilidad de sus cifras." },
          { n: "Auditoría para efecto de cumplimiento de obligaciones fiscales federales y locales", d: "Verificamos que cumpla correctamente ante el SAT y las autoridades locales." },
          { n: "Auditoría para efecto de cumplimiento de obligaciones en materia de seguridad social y vivienda", d: "Revisión de sus obligaciones ante el IMSS y el Infonavit." },
          { n: "Auditoría financiera de entidades del sector gubernamental", d: "Revisión del manejo de recursos y cuentas de entidades públicas." },
          { n: "Auditoría operativa", d: "Evaluamos la eficiencia de sus procesos y controles internos." },
          { n: "Auditoría para propósitos específicos", d: "Revisiones a la medida sobre un rubro o una transacción concreta." },
          { n: "Elaboración de dictamen de enajenación de acciones", d: "Dictamen del resultado fiscal por la venta de acciones." },
        ],
      },
      {
        folio: "03",
        id: "asesoria",
        titulo: "Asesoría de Negocios",
        intro:
          "Acompañamos las decisiones de su negocio con análisis, planeación y evaluación: del diagnóstico inicial a los proyectos de inversión.",
        cta: "¿Busca claridad para decidir?",
        servicios: [
          { n: "Consultoría de negocios", d: "Acompañamiento experto para resolver retos y hacer crecer su empresa." },
          { n: "Análisis de costos", d: "Identificamos cuánto cuesta cada producto o servicio y dónde optimizar." },
          { n: "Proyectos de inversión", d: "Evaluación de viabilidad y rentabilidad antes de invertir." },
          { n: "Análisis y diagnóstico de negocios", d: "Una radiografía de su empresa para priorizar decisiones." },
          { n: "Revisión y preparación de información financiera", d: "Información ordenada y confiable para socios, bancos o inversionistas." },
          { n: "Planeación patrimonial y fiscal", d: "Estrategias legales para proteger su patrimonio y optimizar su carga fiscal." },
          { n: "Mediación de conflictos de negocio", d: "Facilitamos acuerdos entre socios o partes para evitar litigios." },
          { n: "Evaluación de desempeño", d: "Medimos resultados de su equipo y su operación con indicadores claros." },
        ],
      },
      {
        folio: "04",
        id: "legal",
        titulo: "Legal",
        intro:
          "Defendemos y asesoramos a su empresa y a su patrimonio en materia fiscal, laboral y corporativa.",
        cta: "¿Enfrenta un problema fiscal o legal?",
        servicios: [
          { n: "Defensa fiscal", d: "Lo representamos ante el SAT y los tribunales frente a multas, créditos y requerimientos." },
          { n: "Asesoría legal empresarial", d: "Acompañamiento jurídico en la operación diaria de su empresa." },
          { n: "Consultoría laboral", d: "Prevención y solución de temas laborales y de seguridad social." },
          { n: "Asesoría patrimonial", d: "Protección y ordenamiento legal de su patrimonio." },
          { n: "Fusiones, escisiones y adquisiciones", d: "Reestructura corporativa para integrar, dividir o adquirir empresas." },
          { n: "Due Diligence", d: "Revisión legal y fiscal de una empresa antes de comprarla, fusionarla o invertir." },
          // TODO: confirmar con cliente ("Solucion de programas fiscales" en el original)
          { n: "Solución de problemas fiscales", d: "Atención integral a contingencias y diferencias con la autoridad fiscal." },
        ],
      },
    ],
  },

  en: {
    metaTitle: "Services — Ramírez Medellín, S.C.",
    metaDesc:
      "Accounting, auditing, business advisory and legal services for companies and individuals in San Luis Potosí. Explore our four practice areas.",

    heroEyebrow: "Services",
    heroH1: ["Four areas,", "a single ledger."],
    heroSub:
      "We serve all kinds of individuals and entities in the public and private sectors, both domestic and foreign.",
    indiceAria: "Services index",

    contactanos: "Contact us",

    ctaEyebrow: "Let's talk",
    ctaTitulo: ["Tell us what your", "company needs"],
    ctaAgenda: "Schedule a consultation",

    areas: [
      {
        folio: "01",
        id: "contabilidad",
        titulo: "Accounting",
        intro:
          "We keep your company's financial information orderly and up to date: from designing the chart of accounts to the annual tax return.",
        cta: "Need to put your accounting in order?",
        servicios: [
          { n: "Administrative planning of information to prepare accounting", d: "We organize the flow of documents and data to keep your books current." },
          { n: "Design of a chart of accounts tailored to each client", d: "An account structure built around your line of business and operations." },
          { n: "Preparation of accounting records", d: "Orderly recording of all your transactions in line with current regulations." },
          { n: "Preparation of financial statements", d: "Balance sheet, income statement and cash flow ready for decision-making." },
          { n: "Analysis of financial statements", d: "We interpret your figures to spot risks and opportunities." },
          { n: "Determination and preparation of federal and local tax bases", d: "Calculation of the base for every federal and state tax that applies to you." },
          { n: "Preparation of monthly federal and local tax returns", d: "Timely filing of your provisional and definitive payments." },
          { n: "Payroll preparation and determination", d: "Calculation of wages, withholdings and IMSS and Infonavit contributions." },
          { n: "Preparation of working papers and the annual federal tax return", d: "Compilation and filing of your annual return with the SAT." },
        ],
      },
      {
        folio: "02",
        id: "auditoria",
        titulo: "Auditing",
        intro:
          "We review and issue opinions on your entity's financial information and compliance with its obligations, with independence and technical rigor.",
        cta: "Does your company need an audit opinion?",
        servicios: [
          { n: "Financial statement audit", d: "An independent review that gives assurance over the fairness of your figures." },
          { n: "Audit of compliance with federal and local tax obligations", d: "We verify that you comply correctly before the SAT and local authorities." },
          { n: "Audit of compliance with social security and housing obligations", d: "Review of your obligations before the IMSS and Infonavit." },
          { n: "Financial audit of government-sector entities", d: "Review of the management of resources and accounts of public entities." },
          { n: "Operational audit", d: "We assess the efficiency of your processes and internal controls." },
          { n: "Audit for specific purposes", d: "Tailored reviews of a particular line item or transaction." },
          { n: "Preparation of share-disposal tax opinions", d: "An opinion on the tax result from the sale of shares." },
        ],
      },
      {
        folio: "03",
        id: "asesoria",
        titulo: "Business Advisory",
        intro:
          "We support your business decisions with analysis, planning and evaluation: from the initial diagnosis to investment projects.",
        cta: "Looking for clarity to decide?",
        servicios: [
          { n: "Business consulting", d: "Expert guidance to solve challenges and grow your company." },
          { n: "Cost analysis", d: "We identify how much each product or service costs and where to optimize." },
          { n: "Investment projects", d: "Feasibility and profitability assessment before you invest." },
          { n: "Business analysis and diagnosis", d: "An X-ray of your company to prioritize decisions." },
          { n: "Review and preparation of financial information", d: "Orderly, reliable information for partners, banks or investors." },
          { n: "Estate and tax planning", d: "Legal strategies to protect your assets and optimize your tax burden." },
          { n: "Business conflict mediation", d: "We facilitate agreements between partners or parties to avoid litigation." },
          { n: "Performance evaluation", d: "We measure your team's and your operation's results with clear indicators." },
        ],
      },
      {
        folio: "04",
        id: "legal",
        titulo: "Legal",
        intro:
          "We defend and advise your company and your assets in tax, labor and corporate matters.",
        cta: "Facing a tax or legal problem?",
        servicios: [
          { n: "Tax defense", d: "We represent you before the SAT and the courts against fines, assessments and demands." },
          { n: "Corporate legal counsel", d: "Legal support in the day-to-day operation of your company." },
          { n: "Labor advisory", d: "Prevention and resolution of labor and social-security matters." },
          { n: "Estate advisory", d: "Legal protection and ordering of your assets." },
          { n: "Mergers, spin-offs and acquisitions", d: "Corporate restructuring to integrate, divide or acquire companies." },
          { n: "Due diligence", d: "Legal and tax review of a company before buying, merging or investing." },
          // TODO: confirmar con cliente ("Solucion de programas fiscales" en el original)
          { n: "Resolution of tax problems", d: "Comprehensive handling of contingencies and disputes with the tax authority." },
        ],
      },
    ],
  },
};

export function getServicios(lang: Lang) {
  return servicios[lang] ?? servicios.es;
}
