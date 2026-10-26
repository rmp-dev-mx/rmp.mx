/**
 * Interruptor del boletín Resiliencia. Mientras el flujo que genera las
 * infografías no esté en marcha, el boletín se apaga: sale del menú, del
 * footer y del sitemap, y /boletin muestra sólo "próximamente" (noindex).
 * Para publicarlo basta con cambiar esto a true.
 */
export const BOLETIN_ACTIVO = false;
