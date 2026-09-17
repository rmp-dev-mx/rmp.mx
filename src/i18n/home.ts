import type { Lang } from "./ui";

// Contenido de la portada por idioma.
// Mundo visual "La placa del despacho" (semilla f4d4fdab): la portada se
// comporta como la placa de un despacho en la calle. Todo dato aquí es real
// y sale de docs/03-CONTENIDO.md; los nombres y correos del equipo no se
// traducen, las áreas y credenciales sí.
export const home = {
  es: {
    metaTitle: "Ramírez Medellín, S.C. — Contadores Públicos y Abogados en San Luis Potosí",
    metaDesc:
      "Firma de Contadores Públicos y Abogados fundada en 1998 en San Luis Potosí. Contabilidad, auditoría, asesoría de negocios y servicio legal, con una encargada por área.",

    // ── La placa ──
    firma: "Ramírez Medellín, S.C.",
    profesiones: "Contadores Públicos y Abogados",
    desde: "Desde 1998",
    anios: "28 años",
    lugar: "San Luis Potosí · México",
    entrada:
      "Cuatro áreas de práctica. En cada una responde una persona con nombre y correo directo.",

    areas: [
      {
        id: "contabilidad",
        nombre: "Contabilidad",
        alcance:
          "Registros contables, estados financieros, declaraciones de impuestos y determinación de nóminas.",
        encargada: "Paola Guadalupe Guevara Moreno",
        primer: "Paola",
        correo: "paola@rmp.mx",
      },
      {
        id: "auditoria",
        nombre: "Auditoría",
        alcance:
          "Dictamen de estados financieros, cumplimiento fiscal, seguridad social y auditoría gubernamental.",
        encargada: "Citlaly Reyes Jaime",
        primer: "Citlaly",
        correo: "citlaly@rmp.mx",
      },
      {
        id: "asesoria",
        nombre: "Asesoría de Negocios",
        alcance:
          "Consultoría, planeación patrimonial, mediación de conflictos y evaluación de desempeño.",
        encargada: "Marisela Elisea Martínez",
        primer: "Marisela",
        correo: "marisela@rmp.mx",
      },
      {
        id: "legal",
        nombre: "Legal",
        alcance:
          "Defensa fiscal, asesoría empresarial, consultoría laboral, fusiones, escisiones y due diligence.",
        encargada: "Eugenia Eloisa Navarro González",
        primer: "Eugenia",
        correo: "eugenia@rmp.mx",
      },
    ],

    areaEncargadaEtiqueta: "Responde",
    areaEscribir: (n: string) => `Escribir a ${n}`,
    areaEscribirAria: (n: string, a: string) => `Escribir a ${n}, encargada de ${a}`,
    areaDetalle: "Ver el área",
    areaDetalleAria: (a: string) => `Ver el detalle del área de ${a}`,

    // ── El padrón ──
    padronTitulo: "Quién lleva su asunto",
    padronIntro:
      "Estos son los nombres, las credenciales y los correos. Sin conmutador de por medio.",
    padronCta: "Conocer la firma",
    padronCorreoAria: (n: string) => `Escribir a ${n}`,

    // ── Desde 1998 ──
    continuidadTitulo: "La misma firma desde 1998",
    continuidad: [
      {
        dato: "1998",
        texto:
          "Año de fundación. La firma la fundó José Cosme Ramírez Medellín, que sigue al frente.",
      },
      {
        dato: "Pacioli",
        texto:
          "Pacioli Asesores de Negocios, S.C. es la firma filial, nombrada por Luca Pacioli, padre de la contabilidad por partida doble.",
      },
      {
        dato: "CONTPAQi",
        texto: "Distribuidor Asociado CONTPAQi.",
      },
      {
        dato: "Público y privado",
        texto:
          "Atendemos personas y entidades del sector público y privado, nacionales y extranjeras, de actividades económicas diversas.",
      },
    ],

    // ── Boletín ──
    boletinTitulo: "Boletín Resiliencia",
    boletinDesc:
      "Una colaboración de todos los que integramos esta firma, para comunicarle de forma oportuna los cambios legales y fiscales que nos afectan a todos.",
    boletinCta: "Leer el boletín",

    // ── La puerta ──
    puertaTitulo: "La puerta",
    puertaDomicilio: [
      "Calle Francisco Peña 245",
      "Las Águilas 3ra Sección",
      "San Luis Potosí, S.L.P.",
    ],
    puertaTelefonos: [
      { texto: "444-833-40-98", tel: "+524448334098" },
      { texto: "444-833-40-99", tel: "+524448334099" },
      { texto: "444-211-60-00", tel: "+524442116000" },
    ],
    puertaTelefonosEtiqueta: "Teléfonos",
    puertaCorreoEtiqueta: "Correo del despacho",
    puertaCorreo: "despacho@rmp.mx",
    puertaCta: "Decirnos qué necesita",
    puertaCtaNota:
      "Un par de preguntas y queda frente a la persona del área que le toca.",
  },

  en: {
    metaTitle: "Ramírez Medellín, S.C. — Public Accountants & Attorneys in San Luis Potosí",
    metaDesc:
      "Firm of Public Accountants and Attorneys founded in 1998 in San Luis Potosí. Accounting, auditing, business advisory and legal services, with one person in charge of each area.",

    firma: "Ramírez Medellín, S.C.",
    profesiones: "Public Accountants & Attorneys",
    desde: "Since 1998",
    anios: "28 years",
    lugar: "San Luis Potosí · Mexico",
    entrada:
      "Four practice areas. In each one, a named person answers you directly by email.",

    areas: [
      {
        id: "contabilidad",
        nombre: "Accounting",
        alcance:
          "Bookkeeping, financial statements, tax returns and payroll determination.",
        encargada: "Paola Guadalupe Guevara Moreno",
        primer: "Paola",
        correo: "paola@rmp.mx",
      },
      {
        id: "auditoria",
        nombre: "Auditing",
        alcance:
          "Financial statement opinions, tax and social-security compliance, and government auditing.",
        encargada: "Citlaly Reyes Jaime",
        primer: "Citlaly",
        correo: "citlaly@rmp.mx",
      },
      {
        id: "asesoria",
        nombre: "Business Advisory",
        alcance:
          "Consulting, estate and tax planning, conflict mediation and performance evaluation.",
        encargada: "Marisela Elisea Martínez",
        primer: "Marisela",
        correo: "marisela@rmp.mx",
      },
      {
        id: "legal",
        nombre: "Legal",
        alcance:
          "Tax defense, corporate counsel, labor advisory, mergers, spin-offs and due diligence.",
        encargada: "Eugenia Eloisa Navarro González",
        primer: "Eugenia",
        correo: "eugenia@rmp.mx",
      },
    ],

    areaEncargadaEtiqueta: "In charge",
    areaEscribir: (n: string) => `Email ${n}`,
    areaEscribirAria: (n: string, a: string) => `Email ${n}, in charge of ${a}`,
    areaDetalle: "See the area",
    areaDetalleAria: (a: string) => `See the ${a} area in detail`,

    padronTitulo: "Who will handle your matter",
    padronIntro:
      "These are the names, the credentials and the email addresses. No switchboard in between.",
    padronCta: "About the firm",
    padronCorreoAria: (n: string) => `Email ${n}`,

    continuidadTitulo: "The same firm since 1998",
    continuidad: [
      {
        dato: "1998",
        texto:
          "Year of founding. The firm was founded by José Cosme Ramírez Medellín, who still leads it.",
      },
      {
        dato: "Pacioli",
        texto:
          "Pacioli Asesores de Negocios, S.C. is the affiliate firm, named after Luca Pacioli, father of double-entry bookkeeping.",
      },
      {
        dato: "CONTPAQi",
        texto: "CONTPAQi Associate Distributor.",
      },
      {
        dato: "Public & private",
        texto:
          "We serve individuals and entities in the public and private sectors, domestic and foreign, across diverse economic activities.",
      },
    ],

    boletinTitulo: "Resiliencia Bulletin",
    boletinDesc:
      "A joint effort of everyone at the firm, to keep you promptly informed of the legal and tax changes that affect us all.",
    boletinCta: "Read the bulletin",

    puertaTitulo: "The door",
    puertaDomicilio: [
      "Calle Francisco Peña 245",
      "Las Águilas 3ra Sección",
      "San Luis Potosí, S.L.P.",
    ],
    puertaTelefonos: [
      { texto: "444-833-40-98", tel: "+524448334098" },
      { texto: "444-833-40-99", tel: "+524448334099" },
      { texto: "444-211-60-00", tel: "+524442116000" },
    ],
    puertaTelefonosEtiqueta: "Phone",
    puertaCorreoEtiqueta: "Firm email",
    puertaCorreo: "despacho@rmp.mx",
    puertaCta: "Tell us what you need",
    puertaCtaNota:
      "A couple of questions and you are in front of the right person for your area.",
  },
};

export function getHome(lang: Lang) {
  return home[lang] ?? home.es;
}
