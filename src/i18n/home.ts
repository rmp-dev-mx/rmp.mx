import type { Lang } from "./ui";

// Contenido de la portada por idioma.
// Composición: papel cálido, titular grande y fotografía a sangre.
// Los textos son cortos a propósito: la página respira, el detalle vive
// en las páginas interiores. Todo dato es real y sale de docs/03-CONTENIDO.md.
export const home = {
  es: {
    metaTitle: "Ramírez Medellín, S.C. — Contadores Públicos y Abogados en San Luis Potosí",
    metaDesc:
      "Firma de Contadores Públicos y Abogados fundada en 1998 en San Luis Potosí. Contabilidad, auditoría, asesoría de negocios y servicio legal, con una encargada por área.",

    // ── Portada ──
    titular: ["Ramírez", "Medellín"],
    acento: "Contadores Públicos y Abogados",
    entrada: "San Luis Potosí, desde 1998. Cuatro áreas de práctica y una persona responsable en cada una.",
    rail: "Firma fundada en 1998",
    heroFoto: "/images/fotos/nosotros-slp.webp",
    heroAlt: "Centro histórico de San Luis Potosí",
    cta: "Hablar con la firma",

    // ── Áreas ──
    areasTitulo: "Áreas de práctica",
    areasSub: "En cada una responde una persona con nombre y correo directo.",
    areas: [
      {
        id: "contabilidad",
        nombre: "Contabilidad",
        alcance: "Registros, estados financieros, impuestos y nómina.",
        encargada: "Paola Guevara",
        primer: "Paola",
        correo: "paola@rmp.mx",
        foto: "/images/fotos/servicio-contabilidad.webp",
      },
      {
        id: "auditoria",
        nombre: "Auditoría",
        alcance: "Dictamen, cumplimiento fiscal y auditoría gubernamental.",
        encargada: "Citlaly Reyes",
        primer: "Citlaly",
        correo: "citlaly@rmp.mx",
        foto: "/images/fotos/servicio-auditoria.webp",
      },
      {
        id: "asesoria",
        nombre: "Asesoría",
        alcance: "Consultoría, planeación patrimonial y mediación.",
        encargada: "Marisela Elisea",
        primer: "Marisela",
        correo: "marisela@rmp.mx",
        foto: "/images/fotos/servicio-asesoria.webp",
      },
      {
        id: "legal",
        nombre: "Legal",
        alcance: "Defensa fiscal, corporativo, laboral y due diligence.",
        encargada: "Eugenia Navarro",
        primer: "Eugenia",
        correo: "eugenia@rmp.mx",
        foto: "/images/fotos/servicio-legal.webp",
      },
    ],
    respondeEt: "Responde",
    escribirA: (n: string) => `Escribir a ${n}`,
    escribirAria: (n: string, a: string) => `Escribir a ${n}, encargada de ${a}`,
    verAreas: "Ver todos los servicios",

    // ── Franja ──
    citaEt: "La firma",
    cita:
      "Somos un grupo de profesionales especializados en asesoría patrimonial en constante actualización, comprometidos a prestar un servicio de la más alta calidad.",
    citaCta: "Conocer la firma",
    citaFoto: "/images/fotos/nosotros-historia.webp",
    citaAlt: "Libros y lámpara de escritorio en el despacho",

    // ── Cifras ──
    cifras: [
      { dato: "1998", pie: "Año de fundación" },
      { dato: "28", pie: "Años de ejercicio" },
      { dato: "4", pie: "Áreas de práctica" },
    ],

    // ── Contacto ──
    contactoTitulo: "Hablemos",
    contactoDomicilio: [
      "Calle Francisco Peña 245",
      "Las Águilas 3ra Sección",
      "San Luis Potosí, S.L.P.",
    ],
    contactoTelefonos: [
      { texto: "444-833-40-98", tel: "+524448334098" },
      { texto: "444-833-40-99", tel: "+524448334099" },
      { texto: "444-211-60-00", tel: "+524442116000" },
    ],
    contactoCorreo: "despacho@rmp.mx",
    contactoEtDomicilio: "Oficina",
    contactoEtTelefonos: "Teléfonos",
    contactoEtCorreo: "Correo",
    contactoCta: "Decirnos qué necesita",
    contactoNota: "Un par de preguntas y queda frente a la persona del área que le toca.",
  },

  en: {
    metaTitle: "Ramírez Medellín, S.C. — Public Accountants & Attorneys in San Luis Potosí",
    metaDesc:
      "Firm of Public Accountants and Attorneys founded in 1998 in San Luis Potosí. Accounting, auditing, business advisory and legal services, with one person in charge of each area.",

    titular: ["Ramírez", "Medellín"],
    acento: "Public Accountants & Attorneys",
    entrada: "San Luis Potosí, since 1998. Four practice areas, one person responsible in each.",
    rail: "Firm founded in 1998",
    heroFoto: "/images/fotos/nosotros-slp.webp",
    heroAlt: "Historic centre of San Luis Potosí",
    cta: "Talk to the firm",

    areasTitulo: "Practice areas",
    areasSub: "In each one, a named person answers you directly by email.",
    areas: [
      {
        id: "contabilidad",
        nombre: "Accounting",
        alcance: "Bookkeeping, financial statements, taxes and payroll.",
        encargada: "Paola Guevara",
        primer: "Paola",
        correo: "paola@rmp.mx",
        foto: "/images/fotos/servicio-contabilidad.webp",
      },
      {
        id: "auditoria",
        nombre: "Auditing",
        alcance: "Opinions, tax compliance and government auditing.",
        encargada: "Citlaly Reyes",
        primer: "Citlaly",
        correo: "citlaly@rmp.mx",
        foto: "/images/fotos/servicio-auditoria.webp",
      },
      {
        id: "asesoria",
        nombre: "Advisory",
        alcance: "Consulting, estate planning and mediation.",
        encargada: "Marisela Elisea",
        primer: "Marisela",
        correo: "marisela@rmp.mx",
        foto: "/images/fotos/servicio-asesoria.webp",
      },
      {
        id: "legal",
        nombre: "Legal",
        alcance: "Tax defense, corporate, labor and due diligence.",
        encargada: "Eugenia Navarro",
        primer: "Eugenia",
        correo: "eugenia@rmp.mx",
        foto: "/images/fotos/servicio-legal.webp",
      },
    ],
    respondeEt: "In charge",
    escribirA: (n: string) => `Email ${n}`,
    escribirAria: (n: string, a: string) => `Email ${n}, in charge of ${a}`,
    verAreas: "See all services",

    citaEt: "The firm",
    cita:
      "We are a group of professionals specialized in wealth advisory, continuously updated and committed to delivering the highest-quality service.",
    citaCta: "About the firm",
    citaFoto: "/images/fotos/nosotros-historia.webp",
    citaAlt: "Books and a desk lamp at the firm",

    cifras: [
      { dato: "1998", pie: "Founded" },
      { dato: "28", pie: "Years in practice" },
      { dato: "4", pie: "Practice areas" },
    ],

    contactoTitulo: "Let's talk",
    contactoDomicilio: [
      "Calle Francisco Peña 245",
      "Las Águilas 3ra Sección",
      "San Luis Potosí, S.L.P.",
    ],
    contactoTelefonos: [
      { texto: "444-833-40-98", tel: "+524448334098" },
      { texto: "444-833-40-99", tel: "+524448334099" },
      { texto: "444-211-60-00", tel: "+524442116000" },
    ],
    contactoCorreo: "despacho@rmp.mx",
    contactoEtDomicilio: "Office",
    contactoEtTelefonos: "Phone",
    contactoEtCorreo: "Email",
    contactoCta: "Tell us what you need",
    contactoNota: "A couple of questions and you are in front of the right person for your area.",
  },
};

export function getHome(lang: Lang) {
  return home[lang] ?? home.es;
}
