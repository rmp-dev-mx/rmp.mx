import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE y BASE permiten desplegar la vista previa en GitHub Pages
// (https://rmp-dev-mx.github.io/rmp.mx/) sin tocar el código.
// En producción (rmp.mx) no se definen y aplican los defaults.
const site = process.env.SITE ?? "https://rmp.mx";
const base = process.env.BASE ?? "/";

export default defineConfig({
  output: "static",
  site,
  base,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-MX" },
      },
    }),
  ],
});
