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

El deploy de GitHub Pages ya la define en `.github/workflows/deploy.yml`, junto
a `SITE` y `BASE`. No es un secreto: la URL termina en el JavaScript del sitio de
todos modos. El build de producción (`rmp.mx`) también la necesita, o el sitio
sale sin chat.

## Publicar el endpoint, hoy: Tailscale Funnel

En uso desde el 2026-09-18. No toca el DNS de `rmp.mx`.

```
https://rmp-intranet.tail83771f.ts.net/webhook/chatbot-rmp
```

### Cómo está montado

En `rmp-intranet`, n8n escucha en `127.0.0.1:5678`. Tailscale lo publica en dos
puertos con alcances distintos:

| Puerto | Qué sirve | Alcance |
|---|---|---|
| 443 | sólo `/webhook/chatbot-rmp` → `http://127.0.0.1:5678/webhook/chatbot-rmp` | Internet (Funnel) |
| 8443 | n8n entero, editor incluido | Sólo tailnet |

Funnel se activa **por puerto**: todo lo que se sirva en un puerto con Funnel
queda en internet. Por eso el webhook va solo en un puerto propio, montado por
ruta, y el 8443 nunca lleva Funnel. `tailscale funnel 5678` a secas, o Funnel
sobre el 8443, publicaría el editor.

Funnel sólo admite los puertos 443, 8443 y 10000. Se usó el 443 porque algunas
redes de oficina bloquean los puertos no estándar.

### Cómo se activó

1. Permiso en la tailnet: consola de Tailscale → **Access controls** →
   `nodeAttrs` con `"attr": ["funnel"]`. Si falta, el comando del paso 2
   imprime un enlace que lo habilita en un clic.
2. En el servidor:

   ```bash
   sudo tailscale funnel --bg --https=443 \
     --set-path=/webhook/chatbot-rmp \
     http://127.0.0.1:5678/webhook/chatbot-rmp
   ```

   `--bg` deja la configuración guardada en `tailscaled`; no depende de una
   terminal abierta.

Para apagarlo: `sudo tailscale funnel --https=443 off`.

### Cómo comprobarlo

`sudo tailscale serve status` debe mostrar el 443 con **Funnel on** y el 8443
con **tailnet only**. Si el 8443 aparece con Funnel, apagarlo de inmediato.

La prueba de fuera tiene que hacerse desde internet. Desde un equipo que está
en la tailnet, MagicDNS resuelve el nombre a la IP interna, así que hay que
forzar la pública:

```bash
H=rmp-intranet.tail83771f.ts.net
IP=$(dig +short @1.1.1.1 $H | head -1)

curl -s --resolve $H:443:$IP -o /dev/null -w "%{http_code}\n" https://$H/   # 404
curl -s -m 8 --resolve $H:8443:$IP https://$H:8443/ || echo "sin conexión"  # editor fuera de alcance
curl -s --resolve $H:443:$IP -X POST https://$H/webhook/chatbot-rmp \
  -H "Content-Type: application/json" \
  -d '{"message":"hola","sessionId":"prueba","lang":"es"}'
```

Verificado el 2026-09-18: `/` y `/rest/login` devuelven 404, el 8443 no
responde desde internet y el POST llega a n8n (que contesta *webhook not
registered* hasta que se active el workflow).

### Lo que Funnel no da

- **No hay rate limiting delante.** La regla de Cloudflare de la sección de
  abuso no existe aquí. Mientras el endpoint viva en Funnel, las únicas
  defensas son los topes dentro del workflow y el límite de gasto en Google AI
  Studio. Por eso el workflow se activa después de ellos, no antes.
- El nombre de la máquina y de la tailnet quedan a la vista en el código del
  sitio. No dan acceso a nada, pero se ven.

Pasar después a Cloudflare Tunnel sólo cambia `PUBLIC_CHAT_ENDPOINT` y exige
volver a construir el sitio.

## Publicar el endpoint, después: Cloudflare Tunnel

### El terreno, verificado

- `rmp.mx` **no está en Cloudflare**: sus nameservers son de GoDaddy
  (`ns21/ns22.domaincontrol.com`) y el dominio apunta a `50.63.8.92`, el
  hosting viejo.
- **El correo de la firma es Microsoft 365**: el MX es
  `rmp-mx.mail.protection.outlook.com`. Esto es lo más delicado de todo el
  proceso: si se mueve el DNS sin replicar los registros de correo, la firma
  se queda sin correo, que es justo por donde entra su trabajo.
- La zona es chica. En DNS público (revisado el 2026-09-18) sólo aparecen el
  MX de Outlook, el SPF (`v=spf1 include:spf.protection.outlook.com ~all`), el
  TXT de verificación de Microsoft (`MS=ms70998476`), el A de `rmp.mx` y
  `www` como alias. No hay registros de DKIM ni de `autodiscover`.
- Mover los nameservers **no** mueve el dominio ni el correo: el registro
  (titularidad, renovación) sigue en GoDaddy y los buzones siguen en
  Microsoft 365. Sólo la lista de registros pasa a editarse en Cloudflare. Si
  el 365 se contrató por GoDaddy, su panel deja de poder configurar el DNS
  solo; cualquier cambio futuro se hace a mano en Cloudflare.

### Paso 0 — Mover el DNS de rmp.mx a Cloudflare

Es el prerrequisito del subdominio `chat.rmp.mx`, y conviene igual para el
sitio nuevo (WAF, caché, analítica). El orden importa:

1. En GoDaddy, exportar **todos** los registros de la zona. Los de correo
   que ya se conocen están arriba, pero el DNS público no deja listar
   subdominios: la exportación es la única lista completa.
2. Bajar el TTL de esos registros a 300 segundos y esperar a que caduque el
   TTL anterior. Así el cambio es reversible en minutos.
3. Crear la zona en Cloudflare (plan gratuito) y **verificar registro por
   registro** contra la lista del paso 1. Cloudflare importa casi todo, pero
   no siempre completo.
4. Poner el registro del sitio en modo **DNS only** (nube gris) mientras siga
   en GoDaddy, para no meter proxy donde no se necesita todavía.
5. Recién entonces cambiar los nameservers en GoDaddy.
6. Comprobar el correo enviando y recibiendo un mensaje real antes de seguir.

Mientras no se mueva el dominio, el endpoint sigue en Funnel (sección
anterior). Sirve para arrancar; el túnel de Cloudflare es lo que aguanta
producción, porque trae el rate limiting.

### Paso 1 — Instalar el túnel en el servidor de n8n

```bash
# Debian/Ubuntu
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg \
  | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main" \
  | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update && sudo apt install cloudflared

cloudflared tunnel login          # abre el navegador y autoriza la zona rmp.mx
cloudflared tunnel create rmp-chat
cloudflared tunnel route dns rmp-chat chat.rmp.mx
```

### Paso 2 — Exponer SÓLO el webhook, nunca el editor

Esto es lo más importante de la configuración. Si se publica n8n entero,
queda su editor en internet: cualquiera que adivine la URL ve el panel de
login, y toda la automatización de la firma detrás. El túnel enruta por
ruta y todo lo demás cae en 404.

```yaml
# /etc/cloudflared/config.yml
tunnel: rmp-chat
credentials-file: /root/.cloudflared/<id-del-tunel>.json

ingress:
  # Sólo el endpoint del chatbot sale a internet
  - hostname: chat.rmp.mx
    path: ^/webhook/chatbot-rmp$
    service: http://localhost:5678
  # Cualquier otra ruta del subdominio no existe
  - hostname: chat.rmp.mx
    service: http_status:404
  - service: http_status:404
```

El editor de n8n se sigue usando por Tailscale, como hasta ahora. No hay
razón para exponerlo.

```bash
sudo cloudflared service install
sudo systemctl enable --now cloudflared
```

Si n8n corre en Docker y `cloudflared` también, el `service` no es
`localhost` sino el nombre del contenedor: `http://n8n:5678`.

### Paso 3 — Decirle a n8n cuál es su URL pública

n8n construye las URLs de sus webhooks con estas variables. Sin ellas, la
interfaz muestra direcciones internas y el "Test URL" no coincide con lo que
llama el sitio.

```bash
# .env de n8n (o environment del docker-compose)
WEBHOOK_URL=https://chat.rmp.mx/
N8N_EDITOR_BASE_URL=https://rmp-intranet.tail83771f.ts.net:8443/
N8N_PROXY_HOPS=1          # hay un proxy delante: que confíe en X-Forwarded-For
```

`N8N_PROXY_HOPS` importa para el rate limiting: sin él, n8n ve todas las
peticiones como si vinieran del túnel y no de cada visitante.

Reiniciar n8n después de cambiarlas.

### Paso 4 — Comprobar desde fuera

Desde una máquina que **no** esté en la tailnet:

```bash
curl -i -X POST https://chat.rmp.mx/webhook/chatbot-rmp \
  -H "Content-Type: application/json" \
  -d '{"message":"hola","sessionId":"prueba","lang":"es"}'
```

Esperado: `200` con `{"reply":"..."}`. Y que `https://chat.rmp.mx/` devuelva
404, que es la señal de que el editor no quedó expuesto.

## Protección contra abuso

**CORS no protege el endpoint.** Lo aplica el navegador: `curl` y cualquier
script lo ignoran. Poner `allowedOrigins: "https://rmp.mx"` evita que otro sitio
web lea la respuesta desde el navegador de un tercero, y nada más. Con el
endpoint público, cualquiera puede mandarle peticiones y gastar la cuota de
Gemini.

Lo que sí protege, en orden de importancia:

1. **Rate limiting en Cloudflare** (Security → WAF → Rate limiting rules).
   Una regla concreta para empezar: si `hostname eq "chat.rmp.mx"`, contar por
   IP, 20 peticiones por minuto, acción *Block* por 10 minutos. Un visitante
   real no manda 20 mensajes en un minuto; un script sí. Es la barrera que de
   verdad detiene el abuso, y la única que no depende del navegador.
   Conviene además una regla de WAF que bloquee todo método que no sea POST u
   OPTIONS sobre esa ruta. **Sólo existe con el túnel de Cloudflare**:
   mientras el endpoint viva en Funnel, no hay esta barrera y los puntos 2, 3
   y 5 cargan con todo.
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

- [ ] Pegar el system prompt de abajo en el nodo **AI Agent**. Sin el contenido
      real de la firma, el modelo inventa, y eso choca con la regla dura del
      proyecto de no inventar contenido.
- [ ] Cambiar `allowedOrigins` de `*` a
      `https://rmp.mx,https://rmp-dev-mx.github.io`. El segundo es la vista
      previa; sin él, el chat no funciona en GitHub Pages.
- [ ] Agregar una rama de error: si el agente falla, devolver un `reply` con el
      correo y el teléfono en vez de un 500 con HTML.
- [ ] Leer `lang` del cuerpo y pasarlo al prompt, para que conteste en el idioma
      de la página desde la que escriben.
- [ ] Topes de tamaño (~2 KB) y de turnos por sesión (~20), y límite de gasto
      o alertas de cuota en Google AI Studio.
- [ ] **Al final**, activar el workflow. Hoy responde
      `404: webhook not registered`, y así debe seguir hasta que lo anterior
      esté hecho: el endpoint ya es público y Funnel no tiene rate limiting.

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
