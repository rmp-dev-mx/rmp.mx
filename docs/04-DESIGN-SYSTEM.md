# 04 — Sistema de diseño

## Concepto: "El libro mayor"

La filial se llama **Pacioli** — por Luca Pacioli, padre de la contabilidad por partida doble. De ahí sale toda la identidad: la estética del **libro de contabilidad bien llevado**. Rayado fino, cifras tabulares alineadas, y la **doble línea** con la que un contador cierra un total. Es sobrio, es del oficio, y ninguna otra firma de la región se verá igual.

**Elemento firma:** el divisor de sección es una doble regla horizontal (1px + 1px separadas 3px), como la línea de totales de un libro mayor. Las cifras clave del home (1998 · 4 áreas · 28 años) se componen en monoespaciada tabular, como asientos contables.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--tinta` | `#16243A` | Texto principal, header, footer, fondos oscuros |
| `--papel` | `#FAF7F0` | Fondo general (papel de libro contable) |
| `--oro` | `#A87B2D` | Acento: CTAs, enlaces activos, la doble línea de totales |
| `--pizarra` | `#5B6470` | Texto secundario, metadatos |
| `--regla` | `#D8D2C4` | Bordes, el rayado fino de fondo, divisores simples |
| `--blanco` | `#FFFFFF` | Tarjetas sobre papel |
| `--exito` / `--error` | `#2F6B4F` / `#9B3B2E` | Estados de formulario |

Reglas:
- El oro **solo** en acentos (botones primarios, doble línea, enlaces hover). Nunca como fondo de secciones grandes.
- Sobre `--tinta`, el texto va en `--papel`, no blanco puro.
- Contraste AA verificado: tinta/papel = 12.9:1, pizarra/papel = 5.5:1, papel/tinta = 12.9:1. El oro sobre papel solo para texto ≥ 18px bold o elementos no textuales.

## Tipografía

| Rol | Fuente | Pesos | Uso |
|---|---|---|---|
| Display | **Spectral** | 500, 600 (y 500 italic) | H1–H2, citas institucionales |
| Texto/UI | **Public Sans** | 400, 500, 700 | Cuerpo, navegación, botones, formularios |
| Datos | **IBM Plex Mono** | 400, 500 | Cifras, indicadores, eyebrows/etiquetas, teléfonos |

Todas en Google Fonts; cargar con `font-display: swap` y solo los pesos listados.

Escala (desktop / móvil):
- H1: 56/36px, Spectral 500, line-height 1.1, letter-spacing -0.01em
- H2: 36/28px, Spectral 500
- H3: 22/20px, Public Sans 700
- Cuerpo: 17/16px, Public Sans 400, line-height 1.65
- Eyebrow/etiqueta: 13px, IBM Plex Mono 500, mayúsculas, letter-spacing 0.08em, color `--oro`
- Cifras grandes: IBM Plex Mono 500, `font-variant-numeric: tabular-nums`

## Tokens CSS de arranque

```css
:root {
  --tinta: #16243A;
  --papel: #FAF7F0;
  --oro: #A87B2D;
  --pizarra: #5B6470;
  --regla: #D8D2C4;
  --blanco: #FFFFFF;
  --exito: #2F6B4F;
  --error: #9B3B2E;

  --fuente-display: "Spectral", Georgia, serif;
  --fuente-texto: "Public Sans", system-ui, sans-serif;
  --fuente-datos: "IBM Plex Mono", ui-monospace, monospace;

  --ancho-max: 1140px;
  --radio: 4px;               /* discreto; nada de píldoras */
  --espacio: 8px;             /* base de espaciado, múltiplos */
  --sombra: 0 1px 2px rgb(22 36 58 / .06), 0 8px 24px rgb(22 36 58 / .07);
}

/* Elemento firma: doble línea de totales */
.linea-total {
  border: 0;
  border-top: 1px solid var(--oro);
  position: relative;
  margin: 64px 0;
}
.linea-total::after {
  content: "";
  position: absolute;
  inset: 3px 0 auto 0;
  border-top: 1px solid var(--oro);
}
```

## Componentes

- **Header sticky**: fondo `--papel` con borde inferior `--regla`; al hacer scroll, fondo `--tinta` con texto `--papel`. Botón "Portal de clientes" en `--oro`.
- **Botón primario**: fondo `--oro`, texto `--tinta`, radio 4px, hover oscurece 8%. Secundario: borde 1px `--tinta`, fondo transparente.
- **Tarjeta de servicio**: fondo `--blanco`, borde `--regla`, eyebrow mono en oro, título Spectral, sin íconos genéricos de stock — usar numeración contable (los servicios sí son un catálogo: "01 Contabilidad… 04 Legal" se justifica como folio, en mono).
- **Tarjeta de persona**: nombre en Spectral 600, credenciales en Public Sans, correo en mono. Sin foto en fase 1 (no existen); usar monograma de iniciales sobre `--tinta`.
- **Tabla de indicadores**: filas con rayado fino `--regla`, cifras/enlaces en mono — aquí el concepto de libro mayor brilla.
- **Formularios**: etiquetas arriba, inputs con borde `--regla`, foco con outline 2px `--oro`. Errores en `--error` con texto explícito.
- **Cita institucional**: Spectral italic 500, 28px, con la doble línea de totales arriba y abajo.

## Movimiento

Una sola orquestación: al cargar el home, el rayado del hero "se escribe" (fade-in de las reglas) y el titular aparece con un fade-up de 300ms. Hover de tarjetas: elevación sutil. Nada más. Respetar `prefers-reduced-motion: reduce` desactivando todo.

## Imágenes

- No usar las imágenes JPG actuales del slider (calidad baja, marca de agua de época).
- Fase 1 sin fotografía: la identidad se sostiene con tipografía, color y el rayado. `<!-- TODO: sesión de fotos de oficina y equipo -->`
- Logos a conservar: RM (pedir vector), Pacioli (pedir vector), badge CONTPAQi Distribuidor Asociado.

## Accesibilidad y calidad

- Foco visible en todo elemento interactivo (outline oro 2px, offset 2px).
- Targets táctiles ≥ 44px. Navegación móvil con botón hamburguesa accesible (`aria-expanded`).
- `lang="es-MX"`, jerarquía de encabezados correcta, `alt` en todo.
- Lighthouse objetivo ≥ 95 en las cuatro métricas.
