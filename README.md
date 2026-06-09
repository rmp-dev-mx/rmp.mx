# Rediseño rmp.mx — Paquete para Claude Code

## Qué contiene

```
rmp-redesign/
├── CLAUDE.md                 ← Claude Code lo lee automáticamente (contexto maestro)
└── docs/
    ├── 01-BRIEF.md           ← objetivos + auditoría del sitio actual
    ├── 02-ARQUITECTURA.md    ← mapa del sitio y estructura de cada página
    ├── 03-CONTENIDO.md       ← todo el contenido real extraído de rmp.mx
    └── 04-DESIGN-SYSTEM.md   ← paleta, tipografía, componentes, tokens CSS
```

## Cómo usarlo

1. Crea la carpeta del proyecto y copia estos archivos dentro:
   ```bash
   mkdir rmp-web && cd rmp-web
   # copia aquí CLAUDE.md y la carpeta docs/
   claude
   ```
2. Claude Code detecta `CLAUDE.md` solo. Arranca con este prompt:

> Lee CLAUDE.md y los cuatro documentos de docs/. Inicializa un proyecto Astro estático y construye primero el layout base (header, footer, tokens CSS del design system) y la página de inicio siguiendo docs/02-ARQUITECTURA.md y docs/04-DESIGN-SYSTEM.md, usando únicamente el contenido de docs/03-CONTENIDO.md. Muéstrame el home antes de continuar con las demás páginas.

3. Después, página por página:

> Construye /servicios siguiendo la estructura de docs/02-ARQUITECTURA.md sección /servicios.

## Pendientes con el cliente (TODOs marcados en los docs)

- Semblanza y foto del socio fundador (la página Socios.php está rota).
- Logos en vector (RM, Pacioli).
- Confirmar: "Solución de problemas fiscales", horario de oficina, cuenta de Twitter/X (o eliminarla).
- Aviso de privacidad (obligatorio por LFPDPPP al tener formularios).
- Destino de los formularios (correo, servicio externo o backend propio).
- Decisión sobre la versión en inglés (fase 2).
