# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# CLAUDE.md — Rediseño del sitio web de Ramírez Medellín, S.C. (rmp.mx)

Este archivo es el contexto maestro del proyecto. Léelo junto con los demás `.md` de la carpeta `docs/` antes de escribir código.

## Qué es este proyecto

Rediseño completo del sitio web de **Ramírez Medellín, S.C.**, firma de Contadores Públicos y Abogados fundada en 1998 en San Luis Potosí, México. El sitio actual (rmp.mx) es PHP antiguo (~2015), no responsivo, con contenido desactualizado y errores visibles. Se reconstruye desde cero como sitio estático moderno.

## Documentos del proyecto

| Archivo | Contenido |
|---|---|
| `docs/01-BRIEF.md` | Objetivos, auditoría del sitio actual, problemas detectados |
| `docs/02-ARQUITECTURA.md` | Mapa del sitio nuevo, estructura de páginas y navegación |
| `docs/03-CONTENIDO.md` | Todo el contenido real extraído del sitio actual (textos, servicios, equipo, contacto) |
| `docs/04-DESIGN-SYSTEM.md` | Paleta de colores, tipografía, componentes, tokens CSS |

## Stack y comandos

El proyecto ya está inicializado (Astro 6, gestor **pnpm**). Comandos del día a día:

```bash
pnpm install         # instalar dependencias (una sola vez tras clonar)
pnpm dev             # servidor local en http://localhost:4321
pnpm build           # salida estática en dist/ (base "/" — producción)
pnpm preview         # previsualizar el build antes de subir

# Build idéntico al de GitHub Pages (con base path):
SITE=https://rmp-dev-mx.github.io BASE=/rmp.mx pnpm build
```

No hay linter ni suite de tests configurados; la verificación es `pnpm build` (falla si hay errores de tipos/TS gracias a `astro check` implícito) más la auditoría Lighthouse manual.

Astro genera HTML estático (`output: 'static'`). Sin SSR ni adaptadores. Única integración: `@astrojs/sitemap` (genera `sitemap-index.xml`). Las 8 páginas son todas `.astro` dentro de `src/pages/`.

## Mapa de rutas (11 → 8 páginas)

| Ruta nueva | Archivo | Origen (PHP viejo) |
|---|---|---|
| `/` | `src/pages/index.astro` | `index.php` |
| `/nosotros` | `src/pages/nosotros.astro` | `Acerca.php` + `Socios.php` + `Asociados.php` |
| `/servicios` | `src/pages/servicios.astro` | `Servicios.php` (4 anclas: `#contabilidad` `#auditoria` `#asesoria` `#legal`) |
| `/boletin` | `src/pages/boletin.astro` | `Novedades_Fiscales.php` |
| `/indicadores` | `src/pages/indicadores.astro` | `indicadores.php` |
| `/recursos` | `src/pages/recursos.astro` | `sitios.php` |
| `/talento` | `src/pages/talento.astro` | `Estudiantes.php` + `BolsaTrabajo.php` |
| `/contacto` | `src/pages/contacto.astro` | `Contacto.php` |

Redirecciones 301 de las URLs `.php` antiguas se configuran en el hosting (o en un `_redirects` si se usa Netlify/Cloudflare Pages).

## Estructura real del proyecto

```
src/
  components/     ← Header, Footer, Boton, LogoMarca (los 4 que existen hoy)
  layouts/
    Base.astro    ← html, head (fonts Google vía <link>, meta, OG, JSON-LD schema), Header, Footer
  lib/
    url.ts        ← helper url() para enlaces/assets base-aware (ver abajo)
  pages/          ← las 8 rutas .astro
public/
  styles/global.css  ← tokens CSS + reset + estilos base (OJO: vive en public/, no en src/)
  images/            ← logo-marca.svg (resto de logos pendiente del cliente)
  robots.txt
```

> Nota: el `tsconfig.json` define los alias `@components/*` y `@layouts/*` (úsalos en imports). El alias `@styles/*` apunta a `src/styles/` que **no existe**: el CSS real está en `public/styles/global.css` y se enlaza con `<link href={url("/styles/global.css")}>`.

## Despliegue y rutas base-aware (crítico)

El sitio se sirve en dos contextos con distinto _base path_:

- **Producción** (`rmp.mx`): `base = "/"`, `site = "https://rmp.mx"` (defaults en `astro.config.mjs`).
- **Vista previa** (GitHub Pages, `https://rmp-dev-mx.github.io/rmp.mx/`): el workflow `.github/workflows/deploy.yml` inyecta `SITE` y `BASE=/rmp.mx` como variables de entorno en el build.

Por eso **todo enlace interno y todo asset (CSS, imágenes, hrefs, mailto no, pero sí rutas `/...`) debe pasar por el helper `url()` de `src/lib/url.ts`**, que prefija `import.meta.env.BASE_URL`. Un `<a href="/servicios">` directo se rompe en la vista previa; usa `<a href={url("/servicios")}>`. El despliegue es automático en cada push a `main` (Node 22, pnpm 10, `withastro/action@v3`).

## Identidad visual (resumen — detalle en docs/04)

- **Concepto:** "El libro mayor" — rayado fino tipo libro contable, cifras tabulares, doble línea de totales como divisor de sección.
- **Paleta:** `--tinta #16243A` · `--papel #FAF7F0` · `--pizarra #5B6470` · `--regla #D8D2C4`. El oro se ajustó por contraste **AA**: `--oro #8A6423` (profundo, sobre papel) y `--oro-claro #C9A227` (luminoso). La clase `.fondo-oscuro` reasigna `--oro` a la variante clara para que etiquetas mono/eyebrows cumplan AA sobre tinta.
- **Tipografía:** Spectral (display/H1–H2) · Public Sans (cuerpo/UI) · IBM Plex Mono (cifras, etiquetas, teléfonos). Cargadas desde Google Fonts en `Base.astro`.
- **Elemento firma:** divisor de sección = doble regla horizontal (1px + 1px separadas 3px) en `--oro`.

Los tokens CSS de arranque y los componentes clave están en `docs/04-DESIGN-SYSTEM.md`. La implementación viva está en `public/styles/global.css`.

## Reglas duras

1. **Español primero.** Todo el sitio en `lang="es-MX"`. La versión en inglés es fase 2.
2. **No inventar contenido.** Usar únicamente los textos de `docs/03-CONTENIDO.md`. Si falta algo, dejar `<!-- TODO: confirmar con cliente -->`.
3. **Corregir los errores de origen** ya documentados en `docs/01-BRIEF.md`: "Consultoría labora" → laboral, "Escusiones" → Escisiones, "con tigo" → contigo, el mailto de `despacho@rmp.mx` que apuntaba a login.live.com, etc.
4. **No incluir** enlaces a Intranet por IP (`http://26.14.83.209:81/...`). El **Portal de clientes** (`https://rmp.abaconsulting.mx/login`) se **retiró** del sitio por decisión del cliente (jun 2026): no debe haber ninguna referencia ni enlace a él en ninguna página (revertir la nota anterior que lo conservaba).
5. Responsivo hasta 360px, foco visible en teclado (outline oro 2px), `prefers-reduced-motion` respetado, contraste AA mínimo.
6. SEO básico: `<title>` y `<meta description>` únicos por página, Open Graph, `schema.org` (`AccountingService` + `LegalService`), `sitemap.xml`.
7. La firma cumple **28 años en 2026** (fundada en 1998). No usar el badge viejo de "25 años".

## TODOs pendientes con el cliente

### Datos por solicitar al cliente (bloquean trabajo en curso)
- **WhatsApp Business** para el asistente de `/contacto`: ¿una línea general o una por encargada? Con los números se activa el botón de WhatsApp (`wa.me/<num>?text=` prellenado); hoy está deshabilitado ("próximamente").
- **Horario de oficina** (lo pide `/contacto`; hoy muestra "Por confirmar").
- Confirmar **cuáles de los 3 teléfonos** están habilitados (`/contacto` y footer).
- **Alcance / objeto de la firma filial Pacioli** para `/nosotros` (hoy solo se menciona que es filial, sin propósito). No inventar: se necesita el texto del cliente.
- **Fotos + reseña** (experiencia/capacitación) de cada encargado por área para `/nosotros` — propuesta del cliente; confirmar si procede y pedir fotos y textos.

### Otros pendientes
- Semblanza y foto del socio fundador (Socios.php estaba rota).
- Logo en vector del **badge CONTPAQi** (RM y Pacioli ya entregados: `public/images/rmp.svg`, `pacioli.svg`).
- Confirmar texto "Solución de problemas fiscales" (original decía "programas fiscales").
- Confirmar cuenta de Twitter/X (o eliminar el ícono).
- Redactar aviso de privacidad (LFPDPPP). Nota: el asistente de `/contacto` usa `mailto:` (no captura datos en servidor), pero el formulario de `/talento` sí podría requerirlo.
- Destino del formulario de **Talento** (correo, Formspree, Resend u otro). El de Contacto ya se resolvió con el asistente (`mailto:` directo a la encargada).

## Definición de "terminado" (fase 1)

- [ ] 8 páginas construidas según `docs/02-ARQUITECTURA.md`
- [ ] Lighthouse ≥ 95 en Performance / Accessibility / Best Practices / SEO
- [ ] Formularios de Contacto y Talento funcionando (o con stub documentado)
- [ ] Probado en 360px, 768px, 1280px, 1920px
- [ ] Sin texto inventado; TODOs marcados donde falte confirmación del cliente
