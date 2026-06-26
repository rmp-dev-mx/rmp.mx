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
  // Español en "/", inglés en "/en/". Extensible: agregar el locale aquí,
  // su diccionario en src/i18n y las rutas delgadas src/pages/<locale>/.
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
    // Las páginas sin versión en inglés se sirven en español bajo /en/...
    fallback: { en: "es" },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-MX", en: "en-US" },
      },
    }),
  ],
});
