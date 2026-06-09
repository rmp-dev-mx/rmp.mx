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

```bash
# Inicializar (solo una vez)
pnpm create astro@latest . -- --template minimal --typescript strict --install --git

# Desarrollo
pnpm dev             # servidor local en http://localhost:4321

# Producción
pnpm build           # salida estática en dist/
pnpm preview         # previsualizar el build antes de subir
```

Astro genera HTML estático (`output: 'static'`). Sin SSR ni adaptadores. Las 8 páginas son todas `.astro` o `.md` dentro de `src/pages/`.

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

## Estructura esperada del proyecto

```
src/
  components/     ← Header, Footer, Boton, Tarjeta, LineaTotal, etc.
  layouts/
    Base.astro    ← html, head (fonts, meta, OG), Header, Footer
  pages/          ← las 8 rutas
  styles/
    global.css    ← tokens CSS + reset + estilos base
public/
  fonts/ o Google Fonts vía <link>
  images/         ← logos vectoriales cuando los proporcione el cliente
```

## Identidad visual (resumen — detalle en docs/04)

- **Concepto:** "El libro mayor" — rayado fino tipo libro contable, cifras tabulares, doble línea de totales como divisor de sección.
- **Paleta:** `--tinta #16243A` · `--papel #FAF7F0` · `--oro #A87B2D` · `--pizarra #5B6470` · `--regla #D8D2C4`
- **Tipografía:** Spectral (display/H1–H2) · Public Sans (cuerpo/UI) · IBM Plex Mono (cifras, etiquetas, teléfonos)
- **Elemento firma:** divisor de sección = doble regla horizontal (1px + 1px separadas 3px) en `--oro`

Los tokens CSS de arranque y los componentes clave están en `docs/04-DESIGN-SYSTEM.md`. Copiarlos en `src/styles/global.css` como punto de partida.

## Reglas duras

1. **Español primero.** Todo el sitio en `lang="es-MX"`. La versión en inglés es fase 2.
2. **No inventar contenido.** Usar únicamente los textos de `docs/03-CONTENIDO.md`. Si falta algo, dejar `<!-- TODO: confirmar con cliente -->`.
3. **Corregir los errores de origen** ya documentados en `docs/01-BRIEF.md`: "Consultoría labora" → laboral, "Escusiones" → Escisiones, "con tigo" → contigo, el mailto de `despacho@rmp.mx` que apuntaba a login.live.com, etc.
4. **No incluir** enlaces a Intranet por IP (`http://26.14.83.209:81/...`). El Portal (`https://rmp.abaconsulting.mx/login`) sí se conserva.
5. Responsivo hasta 360px, foco visible en teclado (outline oro 2px), `prefers-reduced-motion` respetado, contraste AA mínimo.
6. SEO básico: `<title>` y `<meta description>` únicos por página, Open Graph, `schema.org` (`AccountingService` + `LegalService`), `sitemap.xml`.
7. La firma cumple **28 años en 2026** (fundada en 1998). No usar el badge viejo de "25 años".

## TODOs pendientes con el cliente

- Semblanza y foto del socio fundador (Socios.php está rota).
- Logos en vector (RM, Pacioli, badge CONTPAQi).
- Confirmar texto "Solución de problemas fiscales" (original decía "programas fiscales").
- Confirmar horario de oficina y cuenta de Twitter/X (o eliminar el ícono).
- Redactar aviso de privacidad (obligatorio por LFPDPPP al tener formularios).
- Destino de los formularios de Contacto y Talento (correo, Formspree, Resend u otro).

## Definición de "terminado" (fase 1)

- [ ] 8 páginas construidas según `docs/02-ARQUITECTURA.md`
- [ ] Lighthouse ≥ 95 en Performance / Accessibility / Best Practices / SEO
- [ ] Formularios de Contacto y Talento funcionando (o con stub documentado)
- [ ] Probado en 360px, 768px, 1280px, 1920px
- [ ] Sin texto inventado; TODOs marcados donde falte confirmación del cliente
