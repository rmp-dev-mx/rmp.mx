# 01 — Brief y auditoría del sitio actual

## El cliente

**Ramírez Medellín, S.C.** — Contadores Públicos y Abogados. Fundada en 1998 en San Luis Potosí, México. Servicios profesionales en contabilidad, auditoría, asesoría de negocios y servicio legal empresarial y patrimonial. Firma filial: **Pacioli Asesores de Negocios, S.C.** Distribuidor asociado de **CONTPAQi**.

- Socio fundador: **José Cosme Ramírez Medellín**
- Dominio: `rmp.mx` | Correo general: `despacho@rmp.mx`
- Teléfonos: 444-833-40-98, 444-833-40-99, 444-211-60-00
- Dirección: Calle Francisco Peña 245, Las Águilas 3ra Sección, San Luis Potosí, S.L.P.
- Redes: Facebook (`facebook.com/ramirezmedellinfirma`), LinkedIn. El ícono de Twitter no tiene enlace (eliminarlo o pedir URL).

## Audiencia

1. Empresas (PyME y medianas) del centro de México que buscan contabilidad, auditoría o defensa fiscal.
2. Personas físicas con necesidades de planeación patrimonial y fiscal.
3. Estudiantes/practicantes y candidatos a bolsa de trabajo.
4. Clientes existentes que entran al Portal y consultan el boletín Resiliencia e indicadores.

## Auditoría del sitio actual (junio 2026)

### Problemas técnicos
- PHP antiguo (estructura ~2015), no responsivo, sin HTTPS forzado verificado.
- Página de **Socios.php rota o casi vacía** — solo carga el header.
- El correo `despacho@rmp.mx` enlaza a un **login de Hotmail/Live** en vez de `mailto:`.
- Enlace de **Intranet apunta a una IP privada** (`26.14.83.209:81`) expuesta públicamente.
- El iframe del mapa de Google tiene la URL malformada (saltos de línea dentro del embed).
- Enlaces duplicados/basura en home ("servicios.php" repetido 4 veces como texto de enlace).
- El sitio de IMSS en "Sitios de interés" enlaza por error al SAT.
- Ícono de Twitter sin URL (`href=""`).
- Banner modal de **vacaciones de julio 2023** sigue activo (3 años desactualizado).
- Copyright "© 2023". Badge de "25 años" (en 2026 son 28).

### Problemas de contenido
- Erratas: "Consultoría labora" (laboral), "Fusiones, Escusiones y Adquisiciones" (Escisiones), "Solucion de programas fiscales" (¿problemas fiscales?), "con tigo" (contigo), "Contadores Publicos" sin acento.
- Sección "¿Sabías que?" contiene solo una cita motivacional — sin valor; fusionar o eliminar.
- Sin propuesta de valor clara en el home, sin llamadas a la acción, sin diferenciadores.

### Problemas de diseño
- Estética 2010: sliders de imágenes, columna lateral "Áreas de interés", logos en JPG con fondo blanco.
- Sin jerarquía tipográfica, listas planas de servicios sin descripciones.
- Cero optimización móvil.

## Objetivos del rediseño

1. **Credibilidad** — que la web esté al nivel de una firma con 28 años de trayectoria.
2. **Conversión** — CTAs claros: "Agenda una consulta" / contacto visible en toda página.
3. **Mantenibilidad** — sitio estático simple que cualquiera pueda actualizar.
4. **Acceso de clientes** — Portal y boletín Resiliencia a un clic desde el header.
5. Corregir todos los errores listados arriba.

## Fuera de alcance (fase 1)

- Versión en inglés (existe `/english/` — migrar en fase 2).
- Rediseño del boletín Resiliencia (`/Boletin/web/`) — solo se enlaza.
- CMS o blog dinámico.
