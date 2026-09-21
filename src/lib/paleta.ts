/**
 * Paleta de color activa del sitio. Cada nombre corresponde a un bloque
 * [data-paleta="…"] en public/styles/global.css que da valor a los
 * tokens --rm-*. Para cambiar la paleta de todo el sitio basta con
 * cambiar PALETA; para comparar sin rebuild, ?paleta=<nombre> en la URL.
 */
export const PALETAS = ["rm", "pacioli"] as const;
export type Paleta = (typeof PALETAS)[number];

/** RM: azul y gris del logo de Ramírez Medellín (decisión del cliente, sep 2026). */
export const PALETA: Paleta = "rm";
