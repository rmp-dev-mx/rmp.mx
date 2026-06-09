# 02 — Arquitectura de información

## Sitio actual (11 páginas) → Sitio nuevo (8 páginas)

| Actual | Nuevo | Acción |
|---|---|---|
| index.php (La Firma) | `/` Inicio | Rediseñar con hero + propuesta de valor |
| Acerca.php | `/nosotros` | Fusiona Acerca + Socios + Asociados + "¿Sabías que?" |
| Servicios.php | `/servicios` | Una página con 4 áreas ancladas (`#contabilidad`, etc.) |
| Socios.php (rota) | → dentro de `/nosotros` | Sección "Socio fundador" |
| Asociados.php | → dentro de `/nosotros` | Sección "Nuestro equipo" |
| Know.php (¿Sabías que?) | — | Eliminar (solo tenía una cita) |
| Novedades_Fiscales.php | `/boletin` | Página puente al boletín Resiliencia |
| indicadores.php | `/indicadores` | Mejorar: tarjetas con enlaces SAT/Banxico |
| sitios.php | `/recursos` | Directorio de sitios oficiales |
| Estudiantes.php | `/talento` | Fusiona Practicantes + Bolsa de trabajo (2 pestañas o 2 formularios) |
| BolsaTrabajo.php | → dentro de `/talento` | |
| Contacto.php | `/contacto` | Mapa corregido + formulario + datos |

## Navegación

**Header (sticky):**
Logo RM · Inicio · Nosotros · Servicios · Boletín · Talento · Contacto · **[Portal de clientes]** (botón destacado → https://rmp.abaconsulting.mx/login)

> Indicadores y Recursos viven en el footer y como enlaces secundarios; no saturan el menú principal. El enlace de Intranet se elimina del sitio público.

**Footer:**
- Columna 1: logo, "Contadores Públicos y Abogados desde 1998", dirección, teléfonos, correo.
- Columna 2: mapa del sitio (las 8 páginas).
- Columna 3: Recursos, Indicadores, Portal, boletín Resiliencia.
- Columna 4: redes (Facebook, LinkedIn), badge CONTPAQi Distribuidor Asociado, logo Pacioli.
- Línea legal: © 2026 Ramírez Medellín, S.C. · Aviso de privacidad `<!-- TODO: redactar aviso de privacidad (obligatorio por LFPDPPP) -->`

## Estructura por página

### `/` Inicio
1. **Hero**: titular tipo tesis ("Veintiocho años llevando las cuentas claras de las empresas potosinas" — afinar con cliente), subtítulo con las 4 áreas, CTA primario "Agenda una consulta" + secundario "Portal de clientes".
2. Franja de credibilidad: 1998 · 4 áreas de práctica · CONTPAQi distribuidor · filial Pacioli (cifras en mono, estilo libro mayor).
3. Las 4 áreas de servicio en tarjetas → `/servicios#ancla`.
4. Bloque boletín Resiliencia (última publicación + suscripción futura).
5. Bloque equipo/filosofía breve → `/nosotros`.
6. CTA final de contacto.

### `/nosotros`
Historia (1998, SLP) · Misión, Visión, Valores, Filosofía · Socio fundador (José Cosme Ramírez Medellín `<!-- TODO: semblanza y foto -->`) · Equipo por área (datos en 03-CONTENIDO) · Filial Pacioli.

### `/servicios`
Intro + 4 secciones ancladas: Contabilidad, Auditoría, Asesoría de Negocios, Legal. Cada una: párrafo introductorio breve (redactar a partir de las listas existentes) + lista de servicios + CTA contextual.

### `/boletin`
Qué es Resiliencia (texto existente) + enlace a publicación vigente + historial (`/Boletin/web/index.html`).

### `/talento`
Dos vías: Practicantes (formulario existente: nombre, apellidos, email, edad, domicilio, teléfono, universidad, carrera, semestre, idioma, experiencia, interés, CV) y Bolsa de trabajo (formulario equivalente para profesionales).

### `/indicadores`
Tarjetas: Tipo de cambio USD, UDIS, INPC, TIIE, Tasas de recargos — cada una con enlace oficial (SAT/Banxico).

### `/recursos`
Grid de sitios oficiales: SAT, IMSS, IDSE, INFONAVIT, Finanzas SLP, OJN, SCJN, DOF, Banxico, SRE, SE, IMCP, CCPSLP (corregir el enlace de IMSS que apunta al SAT).

### `/contacto`
Datos completos + mapa (embed corregido de Calle Francisco Peña 245) + formulario (nombre, email, teléfono, asunto, mensaje) + horario `<!-- TODO: confirmar horario -->`.

## URLs y SEO
- URLs limpias sin `.php`, en minúsculas, en español.
- Redirecciones 301 de las URLs viejas (`/Servicios.php` → `/servicios`, etc.).
- `hreflang` preparado para `/en/` en fase 2.
