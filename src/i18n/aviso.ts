import type { Lang } from "./ui";

// Aviso de privacidad integral (LFPDPPP). Contenido estructurado por idioma:
// cada sección tiene título, párrafos y, opcionalmente, una lista de puntos.
//
// BORRADOR PARA REVISIÓN DEL ÁREA LEGAL DE LA FIRMA (Eugenia / Alicia).
// Redactado con los datos reales conocidos del despacho; los puntos que
// dependen de una decisión interna quedan marcados con TODO más abajo:
//   - Plazo de conservación de los datos.
//   - Finalidades secundarias reales (p. ej. envío del boletín fiscal).
//   - Transferencias concretas a terceros, si las hubiera.
//   - Correo/medio exacto para atender solicitudes de derechos ARCO.

type Seccion = {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
};

type Aviso = {
  metaTitle: string;
  metaDesc: string;
  heroEyebrow: string;
  heroH1: [string, string];
  heroSub: string;
  vigenciaEtiqueta: string;
  vigenciaFecha: string;
  seccionesAria: string;
  secciones: Seccion[];
};

export const aviso: Record<Lang, Aviso> = {
  es: {
    metaTitle: "Aviso de privacidad — Ramírez Medellín, S.C.",
    metaDesc:
      "Aviso de privacidad de Ramírez Medellín, S.C. conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",

    heroEyebrow: "Privacidad",
    heroH1: ["Aviso de", "privacidad."],
    heroSub:
      "Cómo Ramírez Medellín, S.C. recaba, utiliza y protege sus datos personales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",

    vigenciaEtiqueta: "Última actualización",
    vigenciaFecha: "3 de julio de 2026",

    seccionesAria: "Contenido del aviso de privacidad",

    secciones: [
      {
        titulo: "Responsable del tratamiento de sus datos",
        parrafos: [
          "Ramírez Medellín, S.C. (en adelante, «la Firma»), con domicilio en Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí, S.L.P., México, es responsable del uso y protección de sus datos personales, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás normativa aplicable.",
          "Para cualquier asunto relacionado con este aviso puede escribirnos al correo despacho@rmp.mx.",
        ],
      },
      {
        titulo: "Datos personales que recabamos",
        parrafos: [
          "Para las finalidades señaladas en este aviso, podemos recabar los siguientes datos personales, según el servicio que solicite:",
        ],
        lista: [
          "Datos de identificación y contacto: nombre, correo electrónico, teléfono y, en su caso, empresa o razón social que representa.",
          "Datos derivados de su solicitud: el asunto o mensaje que nos comunique al contactarnos o al postularse a una vacante.",
          // TODO (legal): confirmar si el proceso de reclutamiento (/talento) recaba datos adicionales (CV, datos laborales/académicos) para detallarlos aquí.
        ],
      },
      {
        titulo: "Datos personales sensibles",
        parrafos: [
          "La Firma no solicita datos personales sensibles a través de este sitio web. En caso de que la prestación de un servicio profesional requiera el tratamiento de datos sensibles, patrimoniales o financieros, se le informará de forma específica y, cuando la ley lo exija, se recabará su consentimiento expreso.",
        ],
      },
      {
        titulo: "Finalidades del tratamiento",
        parrafos: [
          "Utilizamos sus datos personales para las siguientes finalidades primarias, necesarias para atender su solicitud:",
        ],
        lista: [
          "Atender y dar seguimiento a las consultas, solicitudes o mensajes que nos envíe.",
          "Ponernos en contacto con usted para brindarle información sobre nuestros servicios contables, de auditoría, de asesoría de negocios y legales.",
          "Gestionar, en su caso, su postulación a una vacante o proceso de reclutamiento de la Firma.",
          // TODO (legal): si se enviará el boletín fiscal o comunicaciones informativas, agregarlo como FINALIDAD SECUNDARIA y ofrecer aquí el mecanismo para negarse (art. 16 LFPDPPP).
        ],
      },
      {
        titulo: "Transferencias de datos",
        parrafos: [
          "Sus datos personales no serán transferidos ni comercializados con terceros ajenos a la Firma sin su consentimiento, salvo en los supuestos previstos por el artículo 37 de la LFPDPPP (por ejemplo, cuando la transferencia sea requerida por autoridad competente o resulte necesaria para el cumplimiento de obligaciones legales derivadas de la relación de servicios).",
          // TODO (legal): si existen transferencias a terceros (p. ej. corresponsalías, plataformas contables o proveedores tecnológicos), enumerarlas aquí indicando finalidad y si requieren consentimiento.
        ],
      },
      {
        titulo: "Medios para ejercer sus derechos ARCO",
        parrafos: [
          "Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones de su uso (Acceso). Asimismo, a solicitar la corrección de su información cuando esté desactualizada, sea inexacta o incompleta (Rectificación); a que la eliminemos de nuestros registros cuando considere que no se utiliza conforme a los principios y deberes que marca la ley (Cancelación); y a oponerse al uso de sus datos para fines específicos (Oposición).",
          "Para ejercer cualquiera de estos derechos (derechos ARCO), o para revocar su consentimiento, puede enviar su solicitud al correo despacho@rmp.mx, indicando su nombre, el derecho que desea ejercer y una descripción clara de los datos respecto de los que busca ejercerlo, acompañando un documento que acredite su identidad.",
          // TODO (legal): confirmar el correo o medio oficial de atención de solicitudes ARCO y el plazo de respuesta que la Firma se compromete a observar (la ley prevé máximo 20 días hábiles).
        ],
      },
      {
        titulo: "Limitación del uso o divulgación de sus datos",
        parrafos: [
          "Puede solicitar en cualquier momento que limitemos el uso o divulgación de sus datos personales enviando su petición al correo despacho@rmp.mx. De resultar procedente, su solicitud será atendida en los términos que establece la ley.",
        ],
      },
      {
        titulo: "Uso de tecnologías de rastreo en el sitio",
        parrafos: [
          "Este sitio web es de carácter informativo y no utiliza cookies ni otras tecnologías para recabar datos personales de manera automática con fines de identificación individual. Los formularios de contacto de este sitio abren su cliente de correo para que usted nos escriba directamente; no almacenamos sus datos en el servidor del sitio.",
          // TODO (legal): revisar si en el futuro se integran formularios que envíen datos a un servidor o herramientas de analítica, para actualizar esta sección.
        ],
      },
      {
        titulo: "Conservación de los datos",
        parrafos: [
          "Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir las finalidades descritas en este aviso y las obligaciones legales aplicables; concluido dicho plazo, serán cancelados conforme a la normativa vigente.",
          // TODO (legal): definir un plazo de conservación concreto si la Firma desea especificarlo.
        ],
      },
      {
        titulo: "Cambios al aviso de privacidad",
        parrafos: [
          "El presente aviso de privacidad puede sufrir modificaciones derivadas de nuevas disposiciones legales, de nuestras propias necesidades o de cambios en nuestros servicios. Cualquier actualización se pondrá a su disposición en esta misma página, indicando la fecha de última actualización.",
        ],
      },
      {
        titulo: "Autoridad en materia de protección de datos",
        parrafos: [
          "Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir ante la autoridad competente en la materia para presentar la queja o denuncia que corresponda.",
        ],
      },
    ],
  },

  en: {
    metaTitle: "Privacy notice — Ramírez Medellín, S.C.",
    metaDesc:
      "Privacy notice of Ramírez Medellín, S.C. under Mexico's Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).",

    heroEyebrow: "Privacy",
    heroH1: ["Privacy", "notice."],
    heroSub:
      "How Ramírez Medellín, S.C. collects, uses and protects your personal data under Mexico's Federal Law on the Protection of Personal Data Held by Private Parties.",

    vigenciaEtiqueta: "Last updated",
    vigenciaFecha: "July 3, 2026",

    seccionesAria: "Privacy notice content",

    secciones: [
      {
        titulo: "Data controller",
        parrafos: [
          "Ramírez Medellín, S.C. (hereinafter, “the Firm”), with address at Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí, S.L.P., Mexico, is responsible for the use and protection of your personal data under Mexico's Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP), its Regulations and other applicable rules.",
          "For any matter related to this notice you may write to us at despacho@rmp.mx.",
        ],
      },
      {
        titulo: "Personal data we collect",
        parrafos: [
          "For the purposes stated in this notice, we may collect the following personal data, depending on the service you request:",
        ],
        lista: [
          "Identification and contact data: name, email address, phone number and, where applicable, the company you represent.",
          "Data arising from your request: the subject or message you send us when contacting us or applying for a position.",
        ],
      },
      {
        titulo: "Sensitive personal data",
        parrafos: [
          "The Firm does not request sensitive personal data through this website. Should a professional service require the processing of sensitive, financial or asset-related data, you will be informed specifically and, where the law so requires, your express consent will be obtained.",
        ],
      },
      {
        titulo: "Purposes of processing",
        parrafos: [
          "We use your personal data for the following primary purposes, necessary to handle your request:",
        ],
        lista: [
          "To respond to and follow up on the inquiries, requests or messages you send us.",
          "To contact you to provide information about our accounting, auditing, business advisory and legal services.",
          "To manage, where applicable, your application to a vacancy or recruitment process of the Firm.",
        ],
      },
      {
        titulo: "Data transfers",
        parrafos: [
          "Your personal data will not be transferred to or shared with third parties outside the Firm without your consent, except in the cases provided by Article 37 of the LFPDPPP (for example, where the transfer is required by a competent authority or is necessary to comply with legal obligations arising from the service relationship).",
        ],
      },
      {
        titulo: "Exercising your ARCO rights",
        parrafos: [
          "You have the right to know what personal data we hold about you, what we use it for and the conditions of such use (Access); to request the correction of your information when it is outdated, inaccurate or incomplete (Rectification); to have it removed from our records when you consider it is not being used in accordance with the law (Cancellation); and to object to the use of your data for specific purposes (Objection).",
          "To exercise any of these rights (ARCO rights), or to withdraw your consent, you may send your request to despacho@rmp.mx, stating your name, the right you wish to exercise and a clear description of the data concerned, together with a document proving your identity.",
        ],
      },
      {
        titulo: "Limiting the use or disclosure of your data",
        parrafos: [
          "You may request at any time that we limit the use or disclosure of your personal data by sending your request to despacho@rmp.mx. Where applicable, your request will be handled in the terms established by law.",
        ],
      },
      {
        titulo: "Tracking technologies on this site",
        parrafos: [
          "This website is informational and does not use cookies or other technologies to automatically collect personal data for individual identification purposes. The contact forms on this site open your email client so you can write to us directly; we do not store your data on the site's server.",
        ],
      },
      {
        titulo: "Data retention",
        parrafos: [
          "We will keep your personal data only for as long as necessary to fulfill the purposes described in this notice and any applicable legal obligations; once that period ends, it will be cancelled in accordance with current regulations.",
        ],
      },
      {
        titulo: "Changes to this privacy notice",
        parrafos: [
          "This privacy notice may change as a result of new legal provisions, our own needs or changes to our services. Any update will be made available on this same page, indicating the date of the last update.",
        ],
      },
      {
        titulo: "Data protection authority",
        parrafos: [
          "If you believe your right to the protection of personal data has been infringed, you may turn to the competent authority to file the corresponding complaint.",
        ],
      },
    ],
  },
};

export function getAviso(lang: Lang) {
  return aviso[lang] ?? aviso.es;
}
