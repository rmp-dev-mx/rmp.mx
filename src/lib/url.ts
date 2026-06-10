/**
 * Une rutas internas con el base path del despliegue.
 * En producción (rmp.mx) base es "/" y no cambia nada;
 * en GitHub Pages base es "/rmp.mx" y prefija todos los enlaces.
 */
const raiz = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(ruta: string): string {
  return `${raiz}${ruta}` || "/";
}
