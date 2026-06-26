import type { Lang } from "./ui";

// Contenido de la página de recursos (directorio de organismos) por idioma.
// Las siglas (SAT, IMSS…) no se traducen; sí la descripción del organismo.
export const recursos = {
  es: {
    metaTitle: "Recursos — Ramírez Medellín, S.C.",
    metaDesc:
      "Directorio de sitios oficiales de consulta frecuente: SAT, IMSS, INFONAVIT, DOF, Banxico, SCJN y más organismos fiscales y jurídicos de México.",

    heroEyebrow: "Recursos",
    heroH1: ["Sitios", "de interés."],
    heroSub:
      "Directorio de organismos oficiales de consulta frecuente en materia fiscal, laboral y jurídica.",

    directorioAria: "Directorio de sitios oficiales",

    lista: [
      { nombre: "SAT", desc: "Servicio de Administración Tributaria", url: "https://www.sat.gob.mx" },
      { nombre: "IMSS", desc: "Instituto Mexicano del Seguro Social", url: "https://www.imss.gob.mx" },
      { nombre: "IDSE", desc: "IMSS desde su empresa", url: "https://idse.imss.gob.mx" },
      { nombre: "INFONAVIT", desc: "Instituto del Fondo Nacional de la Vivienda para los Trabajadores", url: "https://www.infonavit.org.mx" },
      { nombre: "Finanzas SLP", desc: "Secretaría de Finanzas de San Luis Potosí", url: "https://slpfinanzas.gob.mx" },
      { nombre: "OJN", desc: "Orden Jurídico Nacional", url: "http://www.ordenjuridico.gob.mx" },
      { nombre: "SCJN", desc: "Suprema Corte de Justicia de la Nación", url: "https://www.scjn.gob.mx" },
      { nombre: "DOF", desc: "Diario Oficial de la Federación", url: "https://www.dof.gob.mx" },
      { nombre: "Banxico", desc: "Banco de México", url: "https://www.banxico.org.mx" },
      { nombre: "SRE", desc: "Secretaría de Relaciones Exteriores", url: "https://www.gob.mx/sre" },
      { nombre: "SE", desc: "Secretaría de Economía", url: "https://www.gob.mx/se" },
      { nombre: "IMCP", desc: "Instituto Mexicano de Contadores Públicos", url: "https://imcp.org.mx" },
      { nombre: "CCPSLP", desc: "Colegio de Contadores Públicos de San Luis Potosí", url: "https://ccpslp.org.mx" },
    ],
  },

  en: {
    metaTitle: "Resources — Ramírez Medellín, S.C.",
    metaDesc:
      "Directory of frequently consulted official sites: SAT, IMSS, INFONAVIT, DOF, Banxico, SCJN and other tax and legal agencies in Mexico.",

    heroEyebrow: "Resources",
    heroH1: ["Useful", "links."],
    heroSub:
      "A directory of official agencies frequently consulted in tax, labor and legal matters.",

    directorioAria: "Directory of official sites",

    lista: [
      { nombre: "SAT", desc: "Tax Administration Service", url: "https://www.sat.gob.mx" },
      { nombre: "IMSS", desc: "Mexican Social Security Institute", url: "https://www.imss.gob.mx" },
      { nombre: "IDSE", desc: "IMSS from your company", url: "https://idse.imss.gob.mx" },
      { nombre: "INFONAVIT", desc: "National Workers' Housing Fund Institute", url: "https://www.infonavit.org.mx" },
      { nombre: "Finanzas SLP", desc: "Ministry of Finance of San Luis Potosí", url: "https://slpfinanzas.gob.mx" },
      { nombre: "OJN", desc: "National Legal Order", url: "http://www.ordenjuridico.gob.mx" },
      { nombre: "SCJN", desc: "Supreme Court of Justice of the Nation", url: "https://www.scjn.gob.mx" },
      { nombre: "DOF", desc: "Official Gazette of the Federation", url: "https://www.dof.gob.mx" },
      { nombre: "Banxico", desc: "Bank of Mexico", url: "https://www.banxico.org.mx" },
      { nombre: "SRE", desc: "Ministry of Foreign Affairs", url: "https://www.gob.mx/sre" },
      { nombre: "SE", desc: "Ministry of Economy", url: "https://www.gob.mx/se" },
      { nombre: "IMCP", desc: "Mexican Institute of Public Accountants", url: "https://imcp.org.mx" },
      { nombre: "CCPSLP", desc: "Association of Public Accountants of San Luis Potosí", url: "https://ccpslp.org.mx" },
    ],
  },
};

export function getRecursos(lang: Lang) {
  return recursos[lang] ?? recursos.es;
}
