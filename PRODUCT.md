# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Cuatro audiencias confirmadas, todas llegando al sitio en modo de **verificación**, no de descubrimiento. Casi siempre traen una recomendación previa y entran a comprobar que la firma es real y está a la altura.

- **Dueño o director de empresa mediana en San Luis Potosí.** Está incómodo con su despacho actual o acaba de tener un problema fiscal. Busca a quién cambiarse y necesita saber si esta firma aguanta el problema que trae.
- **Responsable de administración o finanzas.** Compara dos o tres despachos y necesita justificar la elección ante su jefe. Busca argumentos concretos: qué áreas cubre, quién firma, qué respaldo tiene.
- **Empresa nacional o extranjera que se instala en el estado.** Necesita contabilidad, nómina y respaldo legal desde cero, y no conoce el mercado local.
- **Persona física o familia con patrimonio.** Busca asesoría patrimonial, sucesión o defensa fiscal. No es un cliente de empresa y su trato es más personal.

El trabajo que hacen todos en el sitio es el mismo: decidir si confiar la contabilidad, el cumplimiento fiscal o el patrimonio a esta firma, y encontrar con quién hablar.

## Product Purpose

El sitio de Ramírez Medellín, S.C., firma de Contadores Públicos y Abogados fundada en 1998 en San Luis Potosí. Presenta las cuatro áreas de práctica (contabilidad, auditoría, asesoría de negocios y servicio legal), al equipo que las atiende y la vía de contacto directo con la encargada de cada área.

**Éxito confirmado por el cliente:** que la firma se vea a la altura cuando alguien entra a verificarla después de una recomendación. El sitio sostiene una impresión; no está para generar prospectos fríos ni para medir conversiones.

## Positioning

**Veintiocho años de continuidad y trato directo.** La firma opera desde 1998 con el mismo socio fundador al frente, y cada área tiene una encargada con nombre y correo propio, no un conmutador ni un buzón genérico. Un despacho vecino puede afirmar servicios equivalentes; no puede afirmar esa continuidad ni ese trato con nombre.

## Operating Context

- Mercado local de San Luis Potosí, S.L.P., México. Español de México como lengua de trabajo.
- El trabajo del cliente corre contra el calendario fiscal mexicano: declaraciones mensuales y anuales, nómina, cuotas del IMSS e Infonavit, requerimientos y multas del SAT y de autoridades estatales.
- La firma es Distribuidor Asociado CONTPAQi.
- Tiene una firma filial, **Pacioli Asesores de Negocios, S.C.**, cuyo alcance todavía no está definido por el cliente.
- El primer contacto ocurre por teléfono o correo directo a la encargada del área. El sitio usa un asistente que enruta a la persona correcta por `mailto:`, sin capturar datos en servidor.

## Capabilities and Constraints

- Sitio estático en Astro 6, salida `output: static`, sin servidor ni base de datos. Ocho rutas en español y sus equivalentes en inglés bajo `/en/`.
- Se sirve en dos contextos con distinta ruta base (producción en rmp.mx y vista previa en GitHub Pages), así que todo enlace y recurso interno pasa por el helper `url()`.
- Español primero es una regla dura: `lang="es-MX"`. El inglés es traducción, no el original.
- **El portal de clientes se retiró por decisión del cliente.** No debe existir ninguna referencia a él. Tampoco enlaces a la intranet por IP.
- Decisiones de producto explícitamente sin resolver: destino del formulario de Talento (correo, servicio de formularios u otro), números de WhatsApp Business, horario de oficina, cuáles de los tres teléfonos están habilitados, alcance de la filial Pacioli, cuenta de Twitter/X, y el aviso de privacidad (LFPDPPP).

## Brand Commitments

- Nombre legal: **Ramírez Medellín, S.C.** — Contadores Públicos y Abogados. Fundada en 1998; cumple 28 años en 2026.
- Logos vectoriales entregados por el cliente: `public/images/rmp.svg` y `public/images/pacioli.svg`. El badge de CONTPAQi está pendiente en vector.
- Voz institucional y sobria, de oficio contable y legal. Trato de usted.
- **No inventar contenido.** Todo texto sale de `docs/03-CONTENIDO.md`; lo que falte se marca como pendiente del cliente.
- Correcciones de origen ya acordadas: "laboral" (no "labora"), "Escisiones" (no "Escusiones"), "contigo" (no "con tigo").

## Evidence on Hand

**Real y confirmado:**
- Contenido textual completo de la firma en `docs/03-CONTENIDO.md`, extraído del sitio anterior.
- Equipo real por área, con nombre, credenciales y correo individual: consultoría, contabilidad, auditoría y legal.
- Socio fundador: José Cosme Ramírez Medellín.
- Domicilio en Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí, S.L.P.; tres teléfonos y el correo `despacho@rmp.mx`.
- Catálogo detallado de servicios por área (9 líneas en contabilidad, 7 en auditoría, etc.).
- Boletín "Resiliencia" como publicación propia de la firma.

**Ausencias que no se deben fabricar:**
- No hay testimonios, nombres de clientes, número de clientes atendidos, cifras de cartera ni casos de éxito. Ninguno puede inventarse ni insinuarse.
- No hay fotografía real de la oficina ni del equipo. Las imágenes actuales en `public/images/fotos/` son editoriales genéricas y están pendientes de sustituirse por una sesión real.
- No hay semblanza del socio fundador ni fotos de las encargadas.
- No hay horario de oficina confirmado, ni números de WhatsApp, ni alcance declarado de Pacioli.
- Las infografías del boletín en el sitio son contenido de muestra, rotulado como tal; no son información fiscal real.

## Product Principles

1. **El sitio se lee bajo sospecha.** Quien llega ya viene recomendado y entra a verificar; cada elemento tiene que resistir esa mirada en vez de intentar convencer a un desconocido.
2. **Las personas son la prueba.** La continuidad y el trato directo son lo único que un despacho vecino no puede copiar, así que nombres, áreas y vías de contacto valen más que cualquier declaración de calidad.
3. **Lo que no está confirmado, no se dice.** Ante un hueco, pendiente explícito con el cliente; nunca relleno plausible.
4. **Una sola puerta de entrada, siempre visible.** El contacto directo con la encargada del área correcta es la acción que el sitio existe para facilitar.
5. **Cuatro audiencias, un solo sitio.** Empresa y patrimonio conviven sin que ninguna quede como nota al pie.

## Accessibility & Inclusion

Contraste mínimo WCAG AA, foco visible en teclado, `prefers-reduced-motion` respetado y diseño utilizable desde 360px de ancho. Es un requisito del proyecto, no una aspiración: la auditoría de accesibilidad es criterio de terminado.
