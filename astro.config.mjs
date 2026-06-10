import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://rmp.mx",
  integrations: [
    sitemap({
      // El boletín vive en el sistema existente /Boletin/web/, fuera de Astro
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-MX" },
      },
    }),
  ],
});
