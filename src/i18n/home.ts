import type { Lang } from "./ui";

// Contenido de la página de inicio por idioma.
export const home = {
  es: {
    metaTitle: "Ramírez Medellín, S.C. — Contadores Públicos y Abogados en San Luis Potosí",
    metaDesc:
      "Firma de Contadores Públicos y Abogados fundada en 1998 en San Luis Potosí. Especialistas en contabilidad, auditoría, asesoría de negocios y derecho empresarial.",

    heroEyebrow: "Contadores Públicos y Abogados",
    heroH1: [
      { t: "Las" },
      { t: "cuentas", br: true },
      { t: "claras.", oro: true },
    ],
    heroAria: "Las cuentas claras.",
    heroSub:
      "Veintiocho años de precisión contable, fiscal y legal para las empresas de San Luis Potosí.",
    heroCta: "Agenda una consulta",
    emblemaAnios: "años",

    marquee: ["Contabilidad", "Auditoría", "Asesoría de Negocios", "Legal", "San Luis Potosí", "Desde 1998", "Pacioli Asesores"],

    stats: [
      { num: 1998, label: "Año de fundación" },
      { num: 28, label: "Años de trayectoria" },
      { num: 4, label: "Áreas de práctica" },
    ],

    serviciosEyebrow: "Nuestros servicios",
    serviciosTitulo: ["Cuatro áreas", "de práctica"],
    serviciosDesc:
      "Prestamos servicios a todo tipo de personas y entidades del sector público y privado, nacionales y extranjeras, con experiencia en actividades económicas diversas.",
    servicios: [
      { folio: "01", id: "contabilidad", titulo: "Contabilidad", desc: "Registros contables, estados financieros, declaraciones de impuestos y determinación de nóminas." },
      { folio: "02", id: "auditoria", titulo: "Auditoría", desc: "Dictamen de estados financieros, cumplimiento fiscal, seguridad social y auditoría gubernamental." },
      { folio: "03", id: "asesoria", titulo: "Asesoría de Negocios", desc: "Consultoría, planeación patrimonial, mediación de conflictos y evaluación de desempeño." },
      { folio: "04", id: "legal", titulo: "Legal", desc: "Defensa fiscal, asesoría empresarial, consultoría laboral, fusiones, escisiones y due diligence." },
    ],
    verDetalle: "Ver detalle",
    verServiciosDe: (n: string) => `Ver servicios de ${n}`,
    todosServicios: "Todos los servicios",

    boletinEyebrow: "Boletín Resiliencia",
    boletinTitulo: ["Información fiscal", "oportuna"],
    boletinDesc:
      "Una colaboración de todos los que integramos esta firma con el objetivo de comunicarle de forma oportuna aquellos acontecimientos relevantes que nos afectan a todos, contribuyendo a facilitar la adaptación a los cambios legales y fiscales.",
    boletinPublicacion: "Publicación enero 2026",
    boletinHistorial: "Ver historial",
    boletinMes: "Enero",

    filosofiaCita:
      "Somos un grupo de profesionales especializados en asesoría patrimonial en constante actualización, comprometidos a prestar un servicio de la más alta calidad a nivel nacional e internacional.",
    filosofiaFirma: "Ramírez Medellín, S.C. — San Luis Potosí, 1998",
    filosofiaCta: "Conoce la firma",

    ctaEyebrow: "Hablemos",
    ctaTitulo: ["¿Listo para ordenar", "sus finanzas?"],
    ctaAgenda: "Agenda una consulta",
  },

  en: {
    metaTitle: "Ramírez Medellín, S.C. — Public Accountants & Attorneys in San Luis Potosí",
    metaDesc:
      "Firm of Public Accountants and Attorneys founded in 1998 in San Luis Potosí. Specialists in accounting, auditing, business advisory and corporate law.",

    heroEyebrow: "Public Accountants & Attorneys",
    heroH1: [
      { t: "Clear" },
      { t: "books.", oro: true },
    ],
    heroAria: "Clear books.",
    heroSub:
      "Twenty-eight years of accounting, tax and legal precision for the businesses of San Luis Potosí.",
    heroCta: "Schedule a consultation",
    emblemaAnios: "years",

    marquee: ["Accounting", "Auditing", "Business Advisory", "Legal", "San Luis Potosí", "Since 1998", "Pacioli Asesores"],

    stats: [
      { num: 1998, label: "Founded" },
      { num: 28, label: "Years of practice" },
      { num: 4, label: "Practice areas" },
    ],

    serviciosEyebrow: "Our services",
    serviciosTitulo: ["Four practice", "areas"],
    serviciosDesc:
      "We serve all kinds of individuals and entities in the public and private sectors, both domestic and foreign, with experience across diverse economic activities.",
    servicios: [
      { folio: "01", id: "contabilidad", titulo: "Accounting", desc: "Bookkeeping, financial statements, tax returns and payroll determination." },
      { folio: "02", id: "auditoria", titulo: "Auditing", desc: "Financial statement opinions, tax and social-security compliance, and government auditing." },
      { folio: "03", id: "asesoria", titulo: "Business Advisory", desc: "Consulting, estate and tax planning, conflict mediation and performance evaluation." },
      { folio: "04", id: "legal", titulo: "Legal", desc: "Tax defense, corporate counsel, labor advisory, mergers, spin-offs and due diligence." },
    ],
    verDetalle: "View detail",
    verServiciosDe: (n: string) => `View ${n} services`,
    todosServicios: "All services",

    boletinEyebrow: "Resiliencia Bulletin",
    boletinTitulo: ["Timely tax", "information"],
    boletinDesc:
      "A joint effort of everyone at the firm to keep you promptly informed of the developments that affect us all, helping you adapt to legal and tax changes.",
    boletinPublicacion: "January 2026 issue",
    boletinHistorial: "View archive",
    boletinMes: "January",

    filosofiaCita:
      "We are a group of professionals specialized in wealth advisory, continuously updated and committed to delivering the highest-quality service nationally and internationally.",
    filosofiaFirma: "Ramírez Medellín, S.C. — San Luis Potosí, 1998",
    filosofiaCta: "About the firm",

    ctaEyebrow: "Let's talk",
    ctaTitulo: ["Ready to put your", "finances in order?"],
    ctaAgenda: "Schedule a consultation",
  },
};

export function getHome(lang: Lang) {
  return home[lang] ?? home.es;
}
