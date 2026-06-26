import type { Lang } from "./ui";

// Contenido de la página del boletín por idioma.
// ⚠️ CONTENIDO DE MUESTRA (DEMO). Cifras, fechas y resúmenes son ilustrativos
// para mostrar cómo lucirá el boletín con el flujo de IA + infografías.
// NADA de esto es información fiscal real. Reemplazar por publicaciones reales.
export const boletin = {
  es: {
    metaTitle: "Boletín Resiliencia — Ramírez Medellín, S.C.",
    metaDesc:
      "Resiliencia: el boletín fiscal de Ramírez Medellín, S.C. Resúmenes e infografías de los acontecimientos legales y fiscales más relevantes, semana a semana.",

    heroEyebrow: "Boletín",
    heroSub:
      "Este boletín es una colaboración de todos los que integramos esta firma con el objetivo de comunicarle de forma oportuna aquellos acontecimientos relevantes que nos afectan a todos, contribuyendo a facilitar la adaptación de los cambios legales-fiscales, retos y oportunidades de la profesión.",
    heroMetaPre: "Resúmenes con inteligencia artificial, ",
    heroMetaStrong: "revisados por la firma",
    heroMetaPost: " — en infografías cortas, cada semana.",
    decoLabel: "publicación vigente",

    demoTag: "Vista de demostración",
    demoTextoPre: "Las infografías, cifras y fechas de esta página son ",
    demoTextoStrong: "contenido de muestra",
    demoTextoPost:
      " para ilustrar el formato. No constituyen información fiscal real ni asesoría.",

    feedAria: "Infografías del boletín",
    firmaDestacada: "Resumen con IA · revisado por la firma",
    firmaCard: "Resumen con IA · revisado",
    feedNotaPre: "¿Le interesa recibir Resiliencia? ",
    feedNotaLink: "Escríbanos",
    feedNotaPost: " y con gusto le incluimos en la distribución.",

    infografias: [
      {
        destacada: true,
        categoria: "Fiscal",
        periodo: "Semana 10 · 2026",
        titulo: "Actualización de la UMA para 2026",
        resumen:
          "La Unidad de Medida y Actualización sube y mueve límites de deducción, multas y cuotas. Le resumimos qué cambia y a qué obligaciones afecta de inmediato.",
        visual: { tipo: "cifra", num: "$113.14", unidad: "UMA diaria", delta: "+4.2%", sentido: "up" },
      },
      {
        categoria: "Laboral",
        periodo: "Semana 09 · 2026",
        titulo: "Nuevo salario mínimo general",
        resumen: "Cómo impacta en nóminas, finiquitos y cuotas obrero-patronales.",
        visual: { tipo: "delta", num: "$278.80", unidad: "diario", delta: "+12%", sentido: "up" },
      },
      {
        categoria: "Fiscal",
        periodo: "Semana 09 · 2026",
        titulo: "CFDI 4.0: lista de verificación",
        resumen: "Cuatro validaciones para que sus facturas no se rechacen este mes.",
        visual: {
          tipo: "pasos",
          pasos: ["Nombre y RFC exactos", "Régimen fiscal vigente", "Código postal del receptor", "Uso del CFDI correcto"],
        },
      },
      {
        categoria: "Patrimonial",
        periodo: "Semana 08 · 2026",
        titulo: "Tres frentes de la planeación patrimonial",
        resumen: "Por dónde empezar a proteger y ordenar el patrimonio familiar y de la empresa.",
        visual: {
          tipo: "pasos",
          pasos: ["Blindaje del patrimonio", "Sucesión ordenada", "Eficiencia fiscal"],
        },
      },
      {
        categoria: "Corporativo",
        periodo: "Marzo · 2026",
        titulo: "Calendario de obligaciones del mes",
        resumen: "Las fechas que no debe dejar pasar en marzo.",
        visual: {
          tipo: "calendario",
          fechas: [
            { dia: "17", etiqueta: "ISR / IVA" },
            { dia: "31", etiqueta: "Anual PM" },
          ],
        },
      },
      {
        categoria: "Fiscal",
        periodo: "Semana 07 · 2026",
        titulo: "Devoluciones de IVA: cuánto están tardando",
        resumen: "Comparativo de tiempos promedio para planear su flujo de efectivo.",
        visual: {
          tipo: "comparativo",
          filas: [
            { etiqueta: "2025", valor: 38, texto: "38 días" },
            { etiqueta: "2026", valor: 22, texto: "22 días" },
          ],
          max: 40,
        },
      },
    ],
  },

  en: {
    metaTitle: "Resiliencia Bulletin — Ramírez Medellín, S.C.",
    metaDesc:
      "Resiliencia: the tax bulletin of Ramírez Medellín, S.C. Summaries and infographics of the most relevant legal and tax developments, week by week.",

    heroEyebrow: "Bulletin",
    heroSub:
      "This bulletin is a joint effort of everyone at the firm, aimed at keeping you promptly informed of the developments that affect us all, helping you adapt to legal and tax changes, challenges and opportunities in the profession.",
    heroMetaPre: "AI-generated summaries, ",
    heroMetaStrong: "reviewed by the firm",
    heroMetaPost: " — in short infographics, every week.",
    decoLabel: "current issue",

    demoTag: "Demo preview",
    demoTextoPre: "The infographics, figures and dates on this page are ",
    demoTextoStrong: "sample content",
    demoTextoPost:
      " to illustrate the format. They are not real tax information or advice.",

    feedAria: "Bulletin infographics",
    firmaDestacada: "AI summary · reviewed by the firm",
    firmaCard: "AI summary · reviewed",
    feedNotaPre: "Interested in receiving Resiliencia? ",
    feedNotaLink: "Write to us",
    feedNotaPost: " and we'll gladly add you to the distribution list.",

    infografias: [
      {
        destacada: true,
        categoria: "Tax",
        periodo: "Week 10 · 2026",
        titulo: "UMA update for 2026",
        resumen:
          "The Unit of Measure and Update (UMA) rises and shifts deduction limits, fines and contributions. Here's what changes and which obligations it affects right away.",
        visual: { tipo: "cifra", num: "$113.14", unidad: "daily UMA", delta: "+4.2%", sentido: "up" },
      },
      {
        categoria: "Labor",
        periodo: "Week 09 · 2026",
        titulo: "New general minimum wage",
        resumen: "How it affects payroll, severance and employer-employee contributions.",
        visual: { tipo: "delta", num: "$278.80", unidad: "daily", delta: "+12%", sentido: "up" },
      },
      {
        categoria: "Tax",
        periodo: "Week 09 · 2026",
        titulo: "CFDI 4.0: a checklist",
        resumen: "Four checks so your invoices aren't rejected this month.",
        visual: {
          tipo: "pasos",
          pasos: ["Exact name and RFC", "Valid tax regime", "Recipient's postal code", "Correct CFDI use"],
        },
      },
      {
        categoria: "Estate",
        periodo: "Week 08 · 2026",
        titulo: "Three fronts of estate planning",
        resumen: "Where to start protecting and organizing your family's and company's assets.",
        visual: {
          tipo: "pasos",
          pasos: ["Asset protection", "Orderly succession", "Tax efficiency"],
        },
      },
      {
        categoria: "Corporate",
        periodo: "March · 2026",
        titulo: "This month's filing calendar",
        resumen: "The dates you shouldn't miss in March.",
        visual: {
          tipo: "calendario",
          fechas: [
            { dia: "17", etiqueta: "ISR / IVA" },
            { dia: "31", etiqueta: "Annual CT" },
          ],
        },
      },
      {
        categoria: "Tax",
        periodo: "Week 07 · 2026",
        titulo: "VAT refunds: how long they're taking",
        resumen: "A comparison of average times to help you plan your cash flow.",
        visual: {
          tipo: "comparativo",
          filas: [
            { etiqueta: "2025", valor: 38, texto: "38 days" },
            { etiqueta: "2026", valor: 22, texto: "22 days" },
          ],
          max: 40,
        },
      },
    ],
  },
};

export function getBoletin(lang: Lang) {
  return boletin[lang] ?? boletin.es;
}
