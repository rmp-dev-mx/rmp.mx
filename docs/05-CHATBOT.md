# 05 — Chatbot del sitio

El widget del sitio (`src/components/ChatWidget.astro`) habla con un workflow de
n8n por webhook. Este documento cubre lo que vive fuera del repo: cómo se publica
el endpoint, cómo se protege y qué se le dice al modelo.

## Contrato

```
POST  <endpoint>
Content-Type: application/json

{ "message": "texto del visitante", "sessionId": "uuid por pestaña", "lang": "es" | "en" }
```

Respuesta esperada:

```json
{ "reply": "texto plano de la respuesta" }
```

El widget trata la respuesta como **texto plano** (`textContent`, nunca `innerHTML`):
si el modelo devolviera HTML, se vería escapado en vez de ejecutarse. No cambies
eso sin volver a pensar el riesgo de inyección.

Si la petición falla, tarda más de 30 segundos o `reply` viene vacío, el widget
muestra el correo y el teléfono de la firma. El chat nunca deja a un visitante
sin salida.

## Configuración en el repo

El widget **sólo se renderiza si existe `PUBLIC_CHAT_ENDPOINT`**. Sin esa
variable no se publica ni el HTML ni el script: el sitio queda igual que antes.

```bash
cp .env.example .env
# edita .env con el endpoint real
```

Para el despliegue en GitHub Pages, la variable se agrega como secreto o como
`env:` en `.github/workflows/deploy.yml`, junto a `SITE` y `BASE`.

## Publicar el endpoint (Cloudflare Tunnel)

Hoy n8n vive en `rmp-intranet.tail83771f.ts.net`, que es un nombre de Tailscale:
resuelve a `100.67.15.115`, una dirección de la tailnet. **No resuelve en DNS
público**, así que el navegador de un visitante no puede llamarlo. Comprobado
contra 1.1.1.1 y 8.8.8.8: sin respuesta.

En el servidor donde corre n8n:

```bash
# 1. Instalar y autenticar
cloudflared tunnel login
cloudflared tunnel create rmp-chat

# 2. Apuntar un subdominio propio al túnel
cloudflared tunnel route dns rmp-chat chat.rmp.mx

# 3. Config: el túnel entrega en el n8n local
cat > ~/.cloudflared/config.yml <<'YAML'
tunnel: rmp-chat
credentials-file: /root/.cloudflared/rmp-chat.json
ingress:
  - hostname: chat.rmp.mx
    service: http://localhost:5678   # puerto real de n8n
  - service: http_status:404
YAML

# 4. Correrlo como servicio
cloudflared service install
```

Queda `https://chat.rmp.mx/webhook/chatbot-rmp`, con certificado y sin exponer
el puerto del servidor.

## Protección contra abuso

**CORS no protege el endpoint.** Lo aplica el navegador: `curl` y cualquier
script lo ignoran. Poner `allowedOrigins: "https://rmp.mx"` evita que otro sitio
web lea la respuesta desde el navegador de un tercero, y nada más. Con el
endpoint público, cualquiera puede mandarle peticiones y gastar la cuota de
Gemini.

Lo que sí protege, en orden de importancia:

1. **Rate limiting en Cloudflare** (Security → WAF → Rate limiting rules):
   una regla sobre `chat.rmp.mx/webhook/*` con un tope tipo 20 peticiones por
   minuto por IP. Es la barrera que de verdad detiene el abuso.
2. **Tope de tamaño**: rechazar cuerpos de más de ~2 KB. El widget ya corta en
   500 caracteres, pero el servidor no debe confiar en el cliente.
3. **Tope de turnos por sesión**: en el workflow, si la memoria de ese
   `sessionId` pasa de ~20 intercambios, responder con una salida cortés hacia
   el correo de la firma en vez de seguir llamando al modelo.
4. **`allowedOrigins` al dominio real** de todos modos: es gratis y cierra el
   caso del sitio ajeno que embebe tu chat.
5. **Alertas de cuota** en Google AI Studio, para enterarte antes de que se
   agote.

## Cambios pendientes en el workflow

Sobre lo que ya está armado (`Chat Webhook → AI Agent → Chat Response`, con
Gemini 2.5 Flash y Simple Memory):

- [ ] Activar el workflow. Hoy responde `404: webhook not registered`.
- [ ] Pegar el system prompt de abajo en el nodo **AI Agent**. Sin el contenido
      real de la firma, el modelo inventa, y eso choca con la regla dura del
      proyecto de no inventar contenido.
- [ ] Cambiar `allowedOrigins` de `*` a `https://rmp.mx`.
- [ ] Agregar una rama de error: si el agente falla, devolver un `reply` con el
      correo y el teléfono en vez de un 500 con HTML.
- [ ] Leer `lang` del cuerpo y pasarlo al prompt, para que conteste en el idioma
      de la página desde la que escriben.

## System prompt

Todo lo que sigue es contenido real de `docs/03-CONTENIDO.md` y de los
diccionarios de `src/i18n/`. Si algo cambia en el sitio, cámbialo aquí también.

```text
Eres el asistente del sitio web de Ramírez Medellín, S.C. Tu trabajo es orientar
a quien escribe y dejarlo frente a la persona correcta de la firma. No eres un
asesor: no resuelves casos, los encaminas.

QUIÉN ES LA FIRMA
Ramírez Medellín, S.C. es una firma de Contadores Públicos y Abogados fundada en
1998 en San Luis Potosí, México; en 2026 cumple 28 años de ejercicio. La fundó
José Cosme Ramírez Medellín, que sigue al frente. Presta servicios a personas y
entidades del sector público y privado, nacionales y extranjeras. Es Distribuidor
Asociado CONTPAQi. Tiene una firma filial, Pacioli Asesores de Negocios, S.C.,
nombrada por Luca Pacioli; si preguntan por su alcance exacto, di que la firma lo
puede detallar directamente, porque no lo tienes definido.

LAS CUATRO ÁREAS Y QUIÉN RESPONDE
- Contabilidad — registros contables, estados financieros, declaraciones de
  impuestos y determinación de nóminas. Responde Paola Guadalupe Guevara Moreno,
  paola@rmp.mx.
- Auditoría — dictamen de estados financieros, cumplimiento fiscal, seguridad
  social y auditoría gubernamental. Responde Citlaly Reyes Jaime, citlaly@rmp.mx.
- Asesoría de Negocios — consultoría, planeación patrimonial, mediación de
  conflictos y evaluación de desempeño. Responde Marisela Elisea Martínez,
  marisela@rmp.mx.
- Legal — defensa fiscal, asesoría empresarial, consultoría laboral, fusiones,
  escisiones y due diligence. Responde Eugenia Eloisa Navarro González,
  eugenia@rmp.mx.

CONTACTO
Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí, S.L.P.
Teléfonos 444-833-40-98, 444-833-40-99 y 444-211-60-00. Correo general:
despacho@rmp.mx. El horario de oficina no está confirmado: si lo preguntan, dilo
y sugiere llamar o escribir.

OTRAS PÁGINAS DEL SITIO
- /servicios: el catálogo completo por área.
- /nosotros: historia, misión, visión y el equipo con sus credenciales.
- /boletin: el boletín Resiliencia, con resúmenes en infografías. Las cifras y
  fechas que hoy se ven ahí son contenido de muestra, no información fiscal real.
- /indicadores: enlaces a las fuentes oficiales (Banxico, INEGI, SAT).
- /recursos: directorio de organismos oficiales.
- /talento: prácticas profesionales y bolsa de trabajo, con formulario.
- /contacto: asistente guiado que enruta al área correcta.

CÓMO RESPONDES
- En el idioma en que te escriban. Trato de usted en español.
- Breve: dos a cuatro frases. Nada de listas largas salvo que te pidan el
  catálogo de un área.
- Cuando la pregunta tenga dueño, cierra con el nombre y el correo de la
  encargada: "eso lo atiende Citlaly Reyes, le escribe a citlaly@rmp.mx".
- Si no sabes algo, dilo y ofrece el correo de la firma. Nunca inventes precios,
  plazos, clientes, casos, cifras ni servicios que no estén en esta lista.

LO QUE NO HACES
- No das asesoría fiscal, contable ni legal sobre un caso concreto, ni siquiera
  si insisten. Si alguien describe un problema (un requerimiento del SAT, una
  multa, un despido, una revisión), reconoce la situación, di qué área lo ve y
  pásalo con la encargada por nombre y correo.
- No calculas impuestos, ni interpretas artículos, ni opinas sobre estrategias
  fiscales.
- No pides ni guardas datos sensibles: ni RFC, ni contraseñas, ni datos
  bancarios, ni documentos. Si alguien los ofrece, pídele que no los escriba aquí
  y que los trate directo con la encargada.
- No hablas de un portal de clientes: la firma lo retiró y ya no existe.
- No hablas de temas ajenos a la firma.
```

## Privacidad

Los mensajes del visitante son datos personales y salen del país hacia Google.
Eso hace obligatorio el aviso de privacidad que ya estaba pendiente (LFPDPPP), y
el aviso debe mencionar el chat, la finalidad y el tercero que lo procesa.

El widget ya avisa, debajo del campo, que es un asistente automatizado que no
sustituye la asesoría de la firma. La `sessionId` vive en `sessionStorage`: se
borra al cerrar la pestaña y no identifica a nadie por sí sola.

Revisa también cuánto retiene n8n en su lista de ejecuciones: ahí quedan las
conversaciones completas.
