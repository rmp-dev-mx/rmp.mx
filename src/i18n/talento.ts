import type { Lang } from "./ui";

// Contenido de la página de talento (practicantes + bolsa de trabajo) por idioma.
export const talento = {
  es: {
    metaTitle: "Talento — Ramírez Medellín, S.C.",
    metaDesc:
      "¿Buscas realizar tu servicio social o prácticas profesionales? ¿Eres profesionista en contabilidad, derecho o auditoría? Únete al equipo de Ramírez Medellín, S.C.",

    heroEyebrow: "Talento",
    heroH1: ["Forma parte", "del equipo."],
    heroSub:
      "¿Necesitas realizar tu servicio o prácticas profesionales? ¿Eres profesionista y buscas tu siguiente reto? Envía tus datos y forma parte de nuestro equipo profesional.",

    viasAria: "Vías de ingreso",
    tablistAria: "Tipo de postulación",
    tabPracticantes: "Practicantes",
    tabBolsa: "Bolsa de trabajo",

    introPracticantes:
      "¿Necesitas realizar tu servicio o prácticas profesionales? Envía tus datos y forma parte de nuestro equipo profesional.",
    introBolsa:
      "¿Eres profesionista en contabilidad, derecho, auditoría o áreas afines? Comparte tu perfil con nosotros.",

    // Etiquetas y mensajes compartidos por ambos formularios.
    f: {
      nombre: "Nombre",
      apellidos: "Apellidos",
      email: "Correo electrónico",
      edad: "Edad",
      domicilio: "Domicilio",
      telefono: "Teléfono",
      universidad: "Universidad",
      carrera: "Carrera",
      semestre: "Semestre",
      profesion: "Profesión",
      idioma: "Idioma(s)",
      experiencia: "Áreas de experiencia",
      interes: "Áreas de interés",
      cv: "Currículum (PDF)",
      enviar: "Enviar postulación",
      exito: "Gracias por tu interés. Revisaremos tu postulación y te contactaremos.",
      avisoPre: "Al enviar este formulario aceptas nuestro ",
      avisoLink: "aviso de privacidad",
      avisoPost: ".",
      phIdioma: "Español, inglés…",
      phProfesion: "C.P., Lic. en Derecho…",
      errNombre: "Escribe tu nombre.",
      errApellidos: "Escribe tus apellidos.",
      errEmail: "Escribe un correo válido.",
      errTelefono: "Escribe tu teléfono.",
      errUniversidad: "Escribe tu universidad.",
      errCarrera: "Escribe tu carrera.",
      errProfesion: "Escribe tu profesión.",
    },
  },

  en: {
    metaTitle: "Careers — Ramírez Medellín, S.C.",
    metaDesc:
      "Looking to complete your social service or professional internship? Are you a professional in accounting, law or auditing? Join the team at Ramírez Medellín, S.C.",

    heroEyebrow: "Careers",
    heroH1: ["Become part", "of the team."],
    heroSub:
      "Do you need to complete your social service or professional internship? Are you a professional looking for your next challenge? Send us your details and join our professional team.",

    viasAria: "Ways to join",
    tablistAria: "Application type",
    tabPracticantes: "Interns",
    tabBolsa: "Job openings",

    introPracticantes:
      "Do you need to complete your social service or professional internship? Send us your details and join our professional team.",
    introBolsa:
      "Are you a professional in accounting, law, auditing or related areas? Share your profile with us.",

    f: {
      nombre: "First name",
      apellidos: "Last name",
      email: "Email",
      edad: "Age",
      domicilio: "Address",
      telefono: "Phone",
      universidad: "University",
      carrera: "Degree",
      semestre: "Semester",
      profesion: "Profession",
      idioma: "Language(s)",
      experiencia: "Areas of experience",
      interes: "Areas of interest",
      cv: "Résumé (PDF)",
      enviar: "Submit application",
      exito: "Thank you for your interest. We'll review your application and contact you.",
      avisoPre: "By submitting this form you accept our ",
      avisoLink: "privacy notice",
      avisoPost: ".",
      phIdioma: "Spanish, English…",
      phProfesion: "CPA, Law degree…",
      errNombre: "Enter your first name.",
      errApellidos: "Enter your last name.",
      errEmail: "Enter a valid email.",
      errTelefono: "Enter your phone number.",
      errUniversidad: "Enter your university.",
      errCarrera: "Enter your degree.",
      errProfesion: "Enter your profession.",
    },
  },
};

export function getTalento(lang: Lang) {
  return talento[lang] ?? talento.es;
}
