import type { Lang } from "./ui";

// Contenido de la página de contacto y del asistente guiado, por idioma.
// El bloque `asistente` se serializa a JSON y lo consume el script del cliente;
// por eso usa placeholders ({area}, {primer}, {correo}, {resumen}) en lugar de
// funciones (no serializables).
export const contacto = {
  es: {
    metaTitle: "Contacto — Ramírez Medellín, S.C.",
    metaDesc:
      "Contáctenos: Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí. Teléfonos 444-833-40-98, 444-833-40-99 y 444-211-60-00. despacho@rmp.mx",

    heroEyebrow: "Contacto",
    heroH1: ["Hablemos de", "sus cuentas."],
    heroSub:
      "Cuéntenos qué necesita su empresa y un especialista de la firma le responderá a la brevedad.",

    seccionAria: "Formulario y datos de contacto",
    respaldoPre: "¿Prefiere escribirnos directamente? Hágalo a ",
    respaldoPost: ".",

    datoOficina: "Oficina",
    datoTelefonos: "Teléfonos",
    datoCorreo: "Correo",
    datoCorreoSub: "O directo con cada área:",
    datoHorario: "Horario",
    datoHorarioPendiente: "Por confirmar",

    mapaAria: "Ubicación en el mapa",
    mapaTitle: "Mapa: Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí",

    // Nombres de área para la lista de correos (las personas no se traducen).
    correosArea: [
      { area: "Contabilidad", correo: "paola@rmp.mx" },
      { area: "Auditoría", correo: "citlaly@rmp.mx" },
      { area: "Asesoría de Negocios", correo: "marisela@rmp.mx" },
      { area: "Legal", correo: "eugenia@rmp.mx" },
    ],

    asistente: {
      eyebrow: "Asistente de contacto",
      titulo: "Cuéntenos qué necesita",
      intro:
        "Responda un par de preguntas y lo conectamos directo con la persona indicada de la firma. Toma menos de un minuto.",
      noscriptPre:
        "Para usar el asistente active JavaScript, o escríbanos directamente a ",
      noscriptPost: ". Correos por área:",
      pasoLabel: "Paso",
      volver: "Volver",
      reiniciar: "Volver a empezar",
      arbol: {
        inicio: {
          pregunta: "¿Con qué necesita ayuda?",
          opciones: [
            { label: "Mi contabilidad, los impuestos del mes o la nómina", area: "contabilidad" },
            { label: "Un dictamen o auditoría de mis estados financieros", area: "auditoria" },
            { label: "Un problema o trámite con una autoridad (SAT, IMSS, una multa o requerimiento)", next: "autoridad" },
            { label: "Planear, optimizar o resolver algo de mi negocio o patrimonio", next: "negocio" },
            { label: "No estoy seguro", next: "no_seguro" },
          ],
        },
        autoridad: {
          pregunta: "Sobre ese asunto con la autoridad, ¿qué describe mejor su situación?",
          opciones: [
            { label: "Ya recibí una notificación, multa o requerimiento, o tengo un juicio", area: "legal" },
            { label: "Quiero prevenir o planear para evitar problemas a futuro", area: "asesoria" },
            { label: "Solo necesito presentar o declarar los impuestos del mes", area: "contabilidad" },
          ],
        },
        negocio: {
          pregunta: "¿Qué se acerca más a lo que busca?",
          opciones: [
            { label: "Planeación fiscal o patrimonial, optimizar o reestructurar", area: "asesoria" },
            { label: "Constituir o modificar una sociedad, contratos, una fusión, escisión o due diligence", area: "legal" },
            { label: "Mediar o resolver un conflicto entre socios", area: "asesoria" },
          ],
        },
        no_seguro: {
          pregunta: "Le orientamos con una pregunta. ¿Lo suyo es más sobre…?",
          opciones: [
            { label: "Cumplir mis obligaciones del día a día (contabilidad, impuestos, nómina)", area: "contabilidad" },
            { label: "Que revisen o certifiquen mis números (dictamen o auditoría)", area: "auditoria" },
            { label: "Un conflicto o trámite legal con una autoridad o un tercero", area: "legal" },
            { label: "Mejorar, planear o hacer crecer mi negocio", area: "asesoria" },
          ],
        },
      },
      encargadas: {
        contabilidad: { area: "Contabilidad", nombre: "Paola Guadalupe Guevara Moreno", primer: "Paola", correo: "paola@rmp.mx" },
        auditoria: { area: "Auditoría", nombre: "Citlaly Reyes Jaime", primer: "Citlaly", correo: "citlaly@rmp.mx" },
        asesoria: { area: "Asesoría de Negocios", nombre: "Marisela Elisea Martínez", primer: "Marisela", correo: "marisela@rmp.mx" },
        legal: { area: "Legal", nombre: "Eugenia Eloisa Navarro González", primer: "Eugenia", correo: "eugenia@rmp.mx" },
      },
      resultado: {
        tituloPre: "Por lo que nos cuenta, esto corresponde al área de ",
        tituloPost: ".",
        encargadaPre: "Le atenderá ",
        encargadaPost: ". Escríbale y le responderá a la brevedad.",
        correoBtn: "Escribir a {primer} por correo",
        waBtn: "WhatsApp (próximamente)",
        waTitle: "Disponible próximamente",
        notaPre: "Se abrirá su correo con un mensaje listo para enviar a ",
        notaPost: ".",
        asunto: "Consulta de {area} — sitio web",
        saludo: "Hola {primer}:",
        cuerpoIntro: "Le escribo desde el sitio web de Ramírez Medellín.",
        loQueBusco: "Lo que busco: {resumen}",
        miConsulta: "Mi consulta:",
      },
    },
  },

  en: {
    metaTitle: "Contact — Ramírez Medellín, S.C.",
    metaDesc:
      "Contact us: Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí. Phone 444-833-40-98, 444-833-40-99 and 444-211-60-00. despacho@rmp.mx",

    heroEyebrow: "Contact",
    heroH1: ["Let's talk about", "your books."],
    heroSub:
      "Tell us what your company needs and a specialist from the firm will get back to you shortly.",

    seccionAria: "Contact form and details",
    respaldoPre: "Prefer to write to us directly? Reach us at ",
    respaldoPost: ".",

    datoOficina: "Office",
    datoTelefonos: "Phone",
    datoCorreo: "Email",
    datoCorreoSub: "Or directly with each area:",
    datoHorario: "Hours",
    datoHorarioPendiente: "To be confirmed",

    mapaAria: "Location on the map",
    mapaTitle: "Map: Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí",

    correosArea: [
      { area: "Accounting", correo: "paola@rmp.mx" },
      { area: "Auditing", correo: "citlaly@rmp.mx" },
      { area: "Business Advisory", correo: "marisela@rmp.mx" },
      { area: "Legal", correo: "eugenia@rmp.mx" },
    ],

    asistente: {
      eyebrow: "Contact assistant",
      titulo: "Tell us what you need",
      intro:
        "Answer a couple of questions and we'll connect you directly with the right person at the firm. It takes less than a minute.",
      noscriptPre:
        "To use the assistant please enable JavaScript, or write to us directly at ",
      noscriptPost: ". Emails by area:",
      pasoLabel: "Step",
      volver: "Back",
      reiniciar: "Start over",
      arbol: {
        inicio: {
          pregunta: "What do you need help with?",
          opciones: [
            { label: "My accounting, the month's taxes or payroll", area: "contabilidad" },
            { label: "An audit or opinion on my financial statements", area: "auditoria" },
            { label: "An issue or procedure with an authority (SAT, IMSS, a fine or demand)", next: "autoridad" },
            { label: "Planning, optimizing or resolving something in my business or estate", next: "negocio" },
            { label: "I'm not sure", next: "no_seguro" },
          ],
        },
        autoridad: {
          pregunta: "About that matter with the authority, which best describes your situation?",
          opciones: [
            { label: "I already received a notice, fine or demand, or I have a lawsuit", area: "legal" },
            { label: "I want to prevent or plan to avoid future problems", area: "asesoria" },
            { label: "I just need to file or declare the month's taxes", area: "contabilidad" },
          ],
        },
        negocio: {
          pregunta: "What comes closest to what you're looking for?",
          opciones: [
            { label: "Tax or estate planning, optimizing or restructuring", area: "asesoria" },
            { label: "Forming or amending a company, contracts, a merger, spin-off or due diligence", area: "legal" },
            { label: "Mediating or resolving a dispute between partners", area: "asesoria" },
          ],
        },
        no_seguro: {
          pregunta: "Let us guide you with one question. Is yours more about…?",
          opciones: [
            { label: "Meeting my day-to-day obligations (accounting, taxes, payroll)", area: "contabilidad" },
            { label: "Having my numbers reviewed or certified (an audit or opinion)", area: "auditoria" },
            { label: "A legal dispute or procedure with an authority or a third party", area: "legal" },
            { label: "Improving, planning or growing my business", area: "asesoria" },
          ],
        },
      },
      encargadas: {
        contabilidad: { area: "Accounting", nombre: "Paola Guadalupe Guevara Moreno", primer: "Paola", correo: "paola@rmp.mx" },
        auditoria: { area: "Auditing", nombre: "Citlaly Reyes Jaime", primer: "Citlaly", correo: "citlaly@rmp.mx" },
        asesoria: { area: "Business Advisory", nombre: "Marisela Elisea Martínez", primer: "Marisela", correo: "marisela@rmp.mx" },
        legal: { area: "Legal", nombre: "Eugenia Eloisa Navarro González", primer: "Eugenia", correo: "eugenia@rmp.mx" },
      },
      resultado: {
        tituloPre: "From what you tell us, this falls under the ",
        tituloPost: " area.",
        encargadaPre: "You'll be assisted by ",
        encargadaPost: ". Write to her and she'll get back to you shortly.",
        correoBtn: "Email {primer}",
        waBtn: "WhatsApp (coming soon)",
        waTitle: "Available soon",
        notaPre: "Your email app will open with a message ready to send to ",
        notaPost: ".",
        asunto: "{area} inquiry — website",
        saludo: "Hello {primer},",
        cuerpoIntro: "I'm writing from the Ramírez Medellín website.",
        loQueBusco: "What I'm looking for: {resumen}",
        miConsulta: "My inquiry:",
      },
    },
  },
};

export function getContacto(lang: Lang) {
  return contacto[lang] ?? contacto.es;
}
