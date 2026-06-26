export type Lang = "es" | "en";
export const defaultLang: Lang = "es";

export const languages: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

// Strings globales (header, footer, layout). El contenido de páginas vive
// en diccionarios propios (p. ej. src/i18n/home.ts).
export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.servicios": "Servicios",
    "nav.boletin": "Boletín",
    "nav.talento": "Talento",
    "nav.contacto": "Contacto",

    "lang.aria": "Cambiar idioma",
    "skip": "Saltar al contenido principal",
    "banner.enPrep":
      "La versión en inglés de esta página está en preparación; por ahora se muestra en español.",

    "footer.tagline": "Contadores Públicos y Abogados desde 1998",
    "footer.sitioWeb": "Sitio web",
    "footer.accesos": "Accesos",
    "footer.conecta": "Conecta",
    "footer.firmaFilial": "Firma filial",
    "footer.telefonos": "Teléfonos",
    "footer.redes": "Redes sociales",
    "footer.indicadores": "Indicadores fiscales",
    "footer.sitios": "Sitios de interés",
    "footer.boletinResiliencia": "Boletín Resiliencia",
    "footer.aviso": "Aviso de privacidad",
    "footer.derechos": "Todos los derechos reservados.",
    "footer.mapaSitio": "Mapa del sitio",
    "footer.accesosRapidos": "Accesos rápidos",
  },
  en: {
    "nav.inicio": "Home",
    "nav.nosotros": "About",
    "nav.servicios": "Services",
    "nav.boletin": "Bulletin",
    "nav.talento": "Careers",
    "nav.contacto": "Contact",

    "lang.aria": "Change language",
    "skip": "Skip to main content",
    "banner.enPrep":
      "The English version of this page is in preparation; it is shown in Spanish for now.",

    "footer.tagline": "Public Accountants & Attorneys since 1998",
    "footer.sitioWeb": "Site map",
    "footer.accesos": "Quick links",
    "footer.conecta": "Connect",
    "footer.firmaFilial": "Affiliate firm",
    "footer.telefonos": "Phone numbers",
    "footer.redes": "Social media",
    "footer.indicadores": "Tax indicators",
    "footer.sitios": "Useful links",
    "footer.boletinResiliencia": "Resiliencia Bulletin",
    "footer.aviso": "Privacy notice",
    "footer.derechos": "All rights reserved.",
    "footer.mapaSitio": "Site map",
    "footer.accesosRapidos": "Quick links",
  },
} as const;
