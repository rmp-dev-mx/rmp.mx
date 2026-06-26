import type { Lang } from "./ui";

// Contenido de la página de indicadores por idioma.
// Los enlaces apuntan a la fuente directa de cada dato (no a la página principal).
export const indicadores = {
  es: {
    metaTitle: "Indicadores — Ramírez Medellín, S.C.",
    metaDesc:
      "Indicadores fiscales y financieros de consulta frecuente: tipo de cambio USD, UDIS, INPC, TIIE y tasas de recargos, con enlaces directos a las fuentes oficiales: SAT, Banxico e INEGI.",

    heroEyebrow: "Indicadores",
    heroH1: ["Las cifras", "del día."],
    heroSub:
      "Consulte los indicadores fiscales y financieros de uso frecuente directamente en sus fuentes oficiales.",

    tablaAria: "Indicadores con enlaces oficiales",
    notaPre: "Los valores se consultan en el sitio oficial de cada fuente. Para un análisis aplicado a su empresa, ",
    notaLink: "contáctenos",
    notaPost: ".",

    lista: [
      { folio: "01", nombre: "Tipo de cambio USD", desc: "Tipo de cambio FIX del dólar que publica el Banco de México, referencia para efectos fiscales.", fuente: "Banco de México — Mercado cambiario", url: "https://www.banxico.org.mx/portal-mercado-cambiario/" },
      { folio: "02", nombre: "UDIS", desc: "Valor de las Unidades de Inversión.", fuente: "Banco de México — Valores de UDIS", url: "https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?sector=8&accion=consultarCuadro&idCuadro=CP150&locale=es" },
      { folio: "03", nombre: "INPC", desc: "Índice Nacional de Precios al Consumidor.", fuente: "INEGI — Índice de Precios", url: "https://www.inegi.org.mx/temas/inpc/" },
      { folio: "04", nombre: "TIIE", desc: "Tasa de Interés Interbancaria de Equilibrio a 28 días, publicada por Banxico.", fuente: "Banco de México — TIIE a 28 días", url: "https://www.banxico.org.mx/mercados/tiie-4-semanas-valores-banco-.html" },
      { folio: "05", nombre: "Tasas de recargos", desc: "Tasas de recargos por mora y prórroga en pagos de contribuciones.", fuente: "SAT — Índices, tasas y tipo de cambio", url: "https://www.sat.gob.mx/consulta/11676/consulta-indices,-tasas,-tarifas-y-tipo-de-cambio." },
    ],
  },

  en: {
    metaTitle: "Indicators — Ramírez Medellín, S.C.",
    metaDesc:
      "Frequently consulted tax and financial indicators: USD exchange rate, UDIS, INPC, TIIE and surcharge rates, with direct links to the official sources: SAT, Banxico and INEGI.",

    heroEyebrow: "Indicators",
    heroH1: ["The figures", "of the day."],
    heroSub:
      "Check the most frequently used tax and financial indicators directly at their official sources.",

    tablaAria: "Indicators with official links",
    notaPre: "Values are consulted on each source's official site. For an analysis applied to your company, ",
    notaLink: "contact us",
    notaPost: ".",

    lista: [
      { folio: "01", nombre: "USD exchange rate", desc: "The dollar FIX exchange rate published by the Bank of Mexico, a reference for tax purposes.", fuente: "Bank of Mexico — Foreign exchange market", url: "https://www.banxico.org.mx/portal-mercado-cambiario/" },
      { folio: "02", nombre: "UDIS", desc: "Value of the Investment Units (UDIS).", fuente: "Bank of Mexico — UDIS values", url: "https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?sector=8&accion=consultarCuadro&idCuadro=CP150&locale=es" },
      { folio: "03", nombre: "INPC", desc: "National Consumer Price Index.", fuente: "INEGI — Price Index", url: "https://www.inegi.org.mx/temas/inpc/" },
      { folio: "04", nombre: "TIIE", desc: "28-day Interbank Equilibrium Interest Rate, published by Banxico.", fuente: "Bank of Mexico — 28-day TIIE", url: "https://www.banxico.org.mx/mercados/tiie-4-semanas-valores-banco-.html" },
      { folio: "05", nombre: "Surcharge rates", desc: "Surcharge rates for late payment and deferral of tax contributions.", fuente: "SAT — Indices, rates and exchange rate", url: "https://www.sat.gob.mx/consulta/11676/consulta-indices,-tasas,-tarifas-y-tipo-de-cambio." },
    ],
  },
};

export function getIndicadores(lang: Lang) {
  return indicadores[lang] ?? indicadores.es;
}
