import type { Lang } from "./ui";

// Textos del asistente de chat. El widget sólo se muestra si hay endpoint
// configurado (PUBLIC_CHAT_ENDPOINT); sin él, el sitio no cambia.
export const chat = {
  es: {
    abrir: "Abrir el chat de la firma",
    cerrar: "Cerrar el chat",
    titulo: "Asistente de la firma",
    subtitulo: "Le orientamos y le pasamos con la persona que atiende su área.",
    bienvenida:
      "Buen día. Puedo explicarle qué hace la firma, qué incluye cada área y con quién se atiende su caso. ¿En qué le ayudo?",
    sugerencias: [
      "¿Qué incluye la contabilidad?",
      "Necesito un dictamen",
      "Tengo un requerimiento del SAT",
    ],
    etiquetaCampo: "Escriba su mensaje",
    marcador: "Escriba su mensaje…",
    enviar: "Enviar",
    pensando: "Escribiendo…",
    errorRed:
      "No pude conectar en este momento. Escríbanos a despacho@rmp.mx o llame al 444-833-40-98 y le atendemos igual.",
    errorLargo: "El mensaje es muy largo. Resúmalo un poco, por favor.",
    aviso:
      "Asistente automatizado: orienta e indica con quién seguir, no sustituye la asesoría de la firma.",
    nuevoAria: "Mensaje nuevo del asistente",
    historialAria: "Conversación con el asistente",
    tuMensaje: "Usted",
    suMensaje: "Asistente",
  },

  en: {
    abrir: "Open the firm's chat",
    cerrar: "Close the chat",
    titulo: "Firm assistant",
    subtitulo: "We point you in the right direction and hand you to the right person.",
    bienvenida:
      "Hello. I can explain what the firm does, what each area covers and who would handle your matter. How can I help?",
    sugerencias: [
      "What does accounting include?",
      "I need an audit opinion",
      "I received a tax notice",
    ],
    etiquetaCampo: "Type your message",
    marcador: "Type your message…",
    enviar: "Send",
    pensando: "Typing…",
    errorRed:
      "I could not connect right now. Write to despacho@rmp.mx or call +52 444-833-40-98 and we will help you just the same.",
    errorLargo: "That message is too long. Please shorten it a little.",
    aviso:
      "Automated assistant: it orients you and points you to the right person; it is not a substitute for the firm's advice.",
    nuevoAria: "New message from the assistant",
    historialAria: "Conversation with the assistant",
    tuMensaje: "You",
    suMensaje: "Assistant",
  },
};

export function getChat(lang: Lang) {
  return chat[lang] ?? chat.es;
}
