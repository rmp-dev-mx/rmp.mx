import { ui, defaultLang, type Lang } from "./ui";
import { url } from "../lib/url";

export type { Lang };

/** Normaliza el `Astro.currentLocale` a nuestro tipo Lang. */
export function getLang(locale: string | undefined): Lang {
  return locale === "en" ? "en" : "es";
}

/** Devuelve t("clave") para el idioma dado, con respaldo a español. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)["es"]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key] ?? String(key);
  };
}

/**
 * URL interna localizada y base-aware (reutiliza url() de src/lib/url.ts).
 * ES → la ruta tal cual; EN → con prefijo /en.
 */
export function localizedUrl(path: string, lang: Lang): string {
  if (lang === "en") {
    const p = path === "/" ? "/en" : `/en${path}`;
    return url(p);
  }
  return url(path);
}

/**
 * A partir de Astro.url.pathname (que incluye BASE y posible prefijo /en),
 * obtiene la ruta lógica sin BASE ni locale (p. ej. "/servicios" o "/").
 * Sirve para que el selector de idioma enlace a la misma página en el otro idioma.
 */
export function getLogicalPath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let p = pathname;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  if (!p.startsWith("/")) p = `/${p}`;
  if (p === "/en" || p.startsWith("/en/")) p = p.slice(3) || "/";
  if (p.length > 1) p = p.replace(/\/$/, "");
  return p || "/";
}
