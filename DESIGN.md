---
name: Ramírez Medellín, S.C. (rmp.mx)
description: Latón grabado sobre cantera; la profundidad es el canto, nunca la sombra.
colors:
  azul: "#07376d"
  azul-hondo: "#04244a"
  azul-noche: "#061c3a"
  azul-claro: "#9cc0e8"
  azul-tenue: "#c2d4e8"
  piedra: "#e7e1d9"
  piedra-honda: "#d6cdc0"
  piedra-alta: "#f2eee8"
  grafito: "#43454b"
  grafito-claro: "#4f5157"
  naranja: "#f79412"
typography:
  display:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(30px, 5.2vw, 66px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(25px, 3.1vw, 40px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0.03em"
  title:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(20px, 1.9vw, 25px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.04em"
  rubrica:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "15px"
    fontWeight: 500
    letterSpacing: "0.12em"
  lead:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.5vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-menor:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.6
  grabado:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(13px, 1.25vw, 17px)"
    fontWeight: 500
    letterSpacing: "0.15em"
  label:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.16em"
  dato:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    letterSpacing: "0.1em"
    fontFeature: "tabular-nums"
rounded:
  placa: "2px"
  control: "4px"
spacing:
  unidad: "8px"
  canal: "clamp(16px, 4vw, 48px)"
  rejilla: "clamp(14px, 1.6vw, 20px)"
  placa: "clamp(22px, 2.4vw, 30px)"
  placa-mayor: "clamp(32px, 5vw, 62px)"
  seccion: "clamp(48px, 7vw, 96px)"
components:
  placa-oscura:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.piedra-alta}"
    rounded: "{rounded.placa}"
    padding: "{spacing.placa-mayor}"
  placa-clara:
    backgroundColor: "{colors.piedra-alta}"
    textColor: "{colors.azul}"
    rounded: "{rounded.placa}"
    padding: "{spacing.placa}"
  placa-area:
    backgroundColor: "{colors.piedra-alta}"
    textColor: "{colors.azul}"
    typography: "{typography.body-menor}"
    rounded: "{rounded.placa}"
    padding: "{spacing.placa}"
  boton-placa:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.piedra-alta}"
    rounded: "{rounded.placa}"
    padding: "13px 21px"
  enlace-grabado:
    textColor: "{colors.azul}"
    padding: "0 0 3px"
  accion-nombrada:
    textColor: "{colors.azul}"
  enlace-secundario:
    textColor: "{colors.grafito-claro}"
    padding: "0 0 2px"
  renglon-padron:
    textColor: "{colors.azul}"
    padding: "13px 0"
  nav-link:
    textColor: "{colors.azul}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  header:
    backgroundColor: "{colors.piedra-alta}"
    textColor: "{colors.azul}"
    height: "64px"
  header-scrolled:
    backgroundColor: "{colors.azul-hondo}"
    textColor: "{colors.piedra-alta}"
    height: "64px"
  footer:
    backgroundColor: "{colors.azul-hondo}"
    textColor: "{colors.piedra-alta}"
---

# Design System: Ramírez Medellín, S.C. (rmp.mx)

## Overview

**Creative North Star: "La placa del despacho"**

Una firma de contadores y abogados no se anuncia: se rotula. Este sistema se comporta como la placa grabada que un despacho atornilla junto a su puerta —latón sobre cantera, letra grabada, cuatro tornillos— porque el visitante no llega a descubrir la firma, llega a comprobarla. La consecuencia es una superficie que no persuade: declara. El nombre, la profesión y el año de fundación van grabados en la pieza mayor; las cuatro áreas van en placas menores, cada una con el nombre y el correo de quien responde. Nada flota, nada brilla, nada promete.

El material manda sobre el efecto. La profundidad de este mundo es **geometría, no desenfoque**: cada placa es un `border-style: solid` cuyas cuatro caras llevan tono distinto (`--pl-canto-*`), un canto mitrado real, y la única sombra que existe es la que la pieza proyecta sobre el muro. La paleta sale del logotipo entregado por el cliente: el azul `#07376d` es la tinta de grabado y la piedra clara es el campo. Dos tintas, sin una tercera voz decorativa. La densidad es la de un padrón: campos fijos, renglones rayados, cifras tabulares, márgenes anchos y medidas de línea cortas.

**Antirreferencia confirmada.** El mundo anterior del sitio —crema `--papel`, un dorado `--oro` inventado que nunca fue color de marca, Spectral en cursiva e IBM Plex Mono— queda retirado. Siete páginas todavía lo cargan mientras se migran; eso es deuda, no referencia. También queda rechazada la portada de categoría: titular publicitario, subtítulo, botón dorado y cuatro tarjetas con ícono de librería.

**Material pendiente (hueco declarado, no regla).** El mundo pide dos rásters producidos que aún no existen: la textura de latón grabado y la veta de cantera. La implementación se niega a fingirlos con degradados —lo dice en `Inicio.astro`, en el comentario de `.mundo-placa`— y mientras tanto sostiene el campo con luz plana. Cuando los archivos lleguen, entran como textura real; su ausencia de hoy no es una prohibición de texturas.

**Key Characteristics:**
- Profundidad fabricada con cuatro caras de canto, nunca con una sombra difusa haciendo de borde.
- Dos tintas: azul de grabado sobre piedra, piedra sobre azul.
- Placa escasa: cinco papeles la merecen; las listas son registros rayados sobre el campo desnudo.
- Letra grabada (Cinzel) sólo para nombres; todo lo que se lee en frases va en Libre Franklin.
- Cifras tabulares en cualquier dato que alguien vaya a comparar.
- Contraste medido y anotado en el propio token; foco declarado por superficie.
- Esquina casi recta (2px): esto es metal cortado, no una tarjeta.

## Colors

Paleta de dos tintas sacada del logotipo: azul de grabado y piedra clara, con grises fríos para el texto secundario y un solo naranja reservado a la firma filial.

### Primary
- **Azul de Grabado** (`#07376d`): la tinta única del sistema. Titulares de sección, nombres del padrón, enlaces, teléfonos, cursor de texto y `::selection`. Es el azul del logotipo `rmp.svg`, no una aproximación.
- **Azul Hondo** (`#04244a`): fondo de las superficies oscuras extensas —franja de continuidad, pie de página, header con scroll— y base de las sombras proyectadas.
- **Azul Noche** (`#061c3a`): cierre del degradado en las superficies oscuras; sólo aparece como segundo punto de una rampa, nunca como color plano.

### Secondary
Los dos azules de luz existen para leerse **sobre** placa oscura; sobre piedra no cumplen contraste y no deben usarse ahí.
- **Azul Claro** (`#9cc0e8`): acento sobre tinta (8.2:1). Es el color de foco de toda superficie oscura, el acento del header con scroll y el de los encabezados del pie.
- **Azul Tenue** (`#c2d4e8`): texto corrido sobre tinta (10.2:1). Domicilio, bajadas de la franja de continuidad, la línea de profesiones bajo la firma.

### Tertiary
- **Naranja Pacioli** (`#f79412`): reservado. Es el naranja del logotipo de la firma filial y el token existe para cuando Pacioli hable con voz propia. En la portada construida no se aplica a ningún elemento: el logotipo de Pacioli entra como vectorial sobre su propia placa clara.

### Neutral
- **Cantera** (`#e7e1d9`): el campo de la página, el muro donde se atornillan las placas.
- **Cantera Honda** (`#d6cdc0`): el extremo en sombra del muro y la pista de la barra de desplazamiento.
- **Cantera Alta** (`#f2eee8`): la cara de la placa clara, el texto sobre tinta y el fondo del header en reposo.
- **Grafito** (`#43454b`): texto secundario sobre piedra —alcances de área, credenciales, notas— medido a 6.09:1 en su peor punto.
- **Grafito Claro** (`#4f5157`): etiquetas de campo de 11px y enlaces secundarios, medido a 5.04:1 en su peor punto.

### Named Rules

**La regla de las dos tintas.** El sistema tiene exactamente dos tintas: azul de grabado sobre piedra y piedra sobre azul. No se introduce un tercer color para jerarquizar, destacar o animar. Si algo necesita más peso, se le da tamaño, regla o canto —no color nuevo. El naranja es la única excepción y sólo donde habla Pacioli.

**La regla del gris medido.** Ningún gris de texto es más claro que `grafito-claro` (`#4f5157`), y cada gris entra al sistema con su ratio peor-caso escrito junto al token en `public/styles/global.css`. Un gris sin medición no es un gris de este sistema.

**La regla del foco por superficie.** `:focus-visible` lee `var(--foco, var(--pl-azul))`. Toda superficie oscura —franja de continuidad, placa de domicilio, control de contacto, header con scroll, pie— redeclara `--foco: var(--pl-azul-claro)` en su propio bloque. Una superficie oscura que no redeclare `--foco` está incompleta.

## Typography

**Display Font:** Cinzel (con `Times New Roman`, serif)
**Body Font:** Libre Franklin (con `system-ui`, sans-serif)
**Label/Mono Font:** ninguna. Este mundo no carga una monoespaciada; las cifras alineadas se consiguen con `font-variant-numeric: tabular-nums` sobre Libre Franklin.

**Character:** Cinzel es una capital romana lapidaria —nació de la letra tallada en piedra— y por eso sostiene el grabado sin necesidad de versalitas falsas ni de efectos. Libre Franklin es una grotesca americana de oficio, neutra y legible en cuerpos pequeños, que carga todo lo que se lee en frases. La pareja es lapidaria arriba, administrativa abajo: nombre grabado, dato mecanografiado.

Las dos familias se cargan por superficie, no globalmente: `Base.astro` recibe `fuentes="placa"` y sirve sólo Cinzel + Libre Franklin; las páginas sin migrar piden `fuentes="legado"` y no arrastran el juego nuevo. La raíz del documento mide 17px, así que `1rem` = 17px.

### Hierarchy
- **Display** (Cinzel 600, `clamp(30px, 5.2vw, 66px)`, 1.04, 0.02em): el nombre de la firma grabado en la placa mayor. Uno por página.
- **Headline** (Cinzel 500, `clamp(25px, 3.1vw, 40px)`, 1.15, 0.03em): títulos de sección. La variante clara (`--pl-piedra-alta`) es la misma pieza sobre tinta.
- **Title** (Cinzel 600, `clamp(20px, 1.9vw, 25px)`, 1.15, 0.04em): el nombre de cada área en su placa.
- **Rúbrica** (Cinzel 500, 15px, 0.12em, versales): el nombre del área en el padrón, bajo una regla de 2px en azul. Es rótulo de columna, no título.
- **Lead** (Libre Franklin 400, `clamp(16px, 1.5vw, 19px)`, 1.6, máx. 52ch): la entrada bajo la placa mayor.
- **Body** (Libre Franklin 400, 17px, 1.65): texto corrido general. Medidas de 38ch a 62ch según el bloque; nunca más de 62ch.
- **Body menor** (Libre Franklin 400, 14.5px, 1.6, máx. 44ch): alcance de área, hechos de continuidad, credenciales del padrón.
- **Grabado** (Libre Franklin 500, `clamp(13px, 1.25vw, 17px)`, 0.15em, versales): las líneas rotuladas de la placa mayor —profesiones, fundación (600, 0.2em)—, separadas por un punto de 4px.
- **Label** (Libre Franklin 600, 11px, 0.16em, versales): etiquetas de campo del registro: «Responde», «Teléfonos», «Correo del despacho». Nombran el campo que viene abajo.
- **Dato** (Libre Franklin 700, 17px, 0.1em, `tabular-nums`): la cifra o el nombre propio que encabeza cada hecho de continuidad.

### Named Rules

**La regla del grabado.** Cinzel escribe nombres: la firma, las áreas, los títulos de sección, las rúbricas del padrón. Nunca escribe párrafos, etiquetas de campo, botones ni cifras. En el momento en que una pieza de Cinzel se lea como frase, está mal asignada.

**La regla de la cifra tabular.** Todo número que alguien vaya a comparar, leer en voz alta o marcar —teléfonos, años, datos de continuidad— lleva `font-variant-numeric: tabular-nums`. Las cifras de un despacho se alinean en columna.

**La regla sin etiqueta sobre el título.** Ningún encabezado lleva una palabra suelta encima a modo de rótulo. Las versales espaciadas de este sistema son líneas grabadas de placa o etiquetas de campo del registro, y siempre van **debajo** de lo que califican.

## Layout

El campo es un muro de cantera continuo (`--pl-piedra` con un degradado de 172° hacia `--pl-piedra-honda`) sobre el que se atornillan las piezas. El contenedor de la portada, `.marco`, mide 1180px de ancho máximo con canal lateral fluido `clamp(16px, 4vw, 48px)`; `.marco--angosto` lo reduce a 760px para el bloque de boletín centrado. El cromo compartido (header y pie) usa todavía `--ancho-max: 1140px`, heredado del bloque de tokens retirado: son 40px de diferencia con el campo de la portada y es deuda de migración, no una decisión.

El ritmo vertical no es una escala de pasos fijos sino pares de `clamp`: las secciones respiran `clamp(48px, 7vw, 96px)`, la portada abre con `clamp(40px, 6vw, 76px)` y cierra con `clamp(48px, 8vw, 104px)`. La única escala numérica del proyecto es `--espacio: 8px`, multiplicada por el header y el pie.

**Rejilla de la portada.** Una sola columna por debajo de 1024px; a partir de ahí dos, `minmax(0, 0.94fr) minmax(0, 1.06fr)`: la placa mayor a la izquierda estirada a la altura completa, las cuatro placas de área a la derecha en `repeat(auto-fit, minmax(270px, 1fr))` con hueco `clamp(14px, 1.6vw, 20px)`.

**El padrón.** Cada grupo es una rejilla de `minmax(140px, 200px) 1fr`: rúbrica de área a la izquierda bajo regla de 2px, renglones a la derecha. Cada renglón es `minmax(0, 1fr) auto` con el correo a la derecha, centrado sobre las dos filas de nombre y credencial.

**La puerta.** Dos columnas iguales `minmax(0, 1fr) minmax(0, 1fr)` estiradas a la misma altura: placa de domicilio a la izquierda, datos sueltos a la derecha.

**Puntos de quiebre observados.** 1024px (la portada se parte en dos columnas), 900px (padrón y puerta caen a una columna), 768px (el cromo pasa a menú de hamburguesa), 600px (el renglón del padrón apila el correo), 480px (los cantos bajan de 6/5px a 5/4px y los tornillos de 15px a 12px). El diseño se sostiene hasta 360px; por debajo de 400px el header conserva sólo la marca y el nombre lo lleva el H1.

### Named Rules

**La regla del padrón.** Una lista de personas, servicios o datos se resuelve como registro rayado sobre el campo desnudo —regla de 1px arriba de cada renglón, rúbrica de columna, campos fijos— y nunca como una colección de tarjetas. Si una lista pide placas, lo que pide es menos elementos.

**La regla de la medida corta.** Ningún bloque de texto pasa de 62ch, y los bloques dentro de placa bajan a 22ch (grabado), 38ch (nota) o 44ch (alcance). Las medidas cortas son parte del material: una placa no lleva párrafos.

## Elevation & Depth

Este sistema no tiene escala de elevación. Tiene **canto**. La profundidad de una placa se declara con `border-style: solid` y un `border-color` de cuatro valores donde cada cara lleva tono propio: la de arriba iluminada, las laterales intermedias, la de abajo en sombra. Eso es un canto mitrado real, y es lo que hace que la pieza se lea como metal cortado y no como una tarjeta con borde. La `box-shadow` existe, pero tiene un solo trabajo: la sombra que la pieza proyecta sobre el muro. Nunca hace de borde, nunca hace de glow, nunca se apila.

El estado presionado no cambia el color ni el tamaño: **invierte las cuatro caras** (`--pl-canto-*-hundido`), recorta la sombra proyectada a `0 1px 2px -1px` y baja la pieza 2px. Es el gesto de un objeto que se hunde en su montura. En la placa de área el hundido no responde al área entera sino a la acción: sólo ocurre con `:focus-within` o cuando el enlace de la encargada tiene el cursor, porque lo que se presiona es el enlace, no la tarjeta.

### Shadow Vocabulary
- **Apoyo** (`box-shadow: 0 10px 18px -8px rgb(4 36 74 / 0.45)`): la sombra de una placa oscura sobre el muro. Desplazamiento y desenfoque reales, tintados en azul hondo, nunca en negro.
- **Apoyo corto** (`box-shadow: 0 4px 9px -5px rgb(4 36 74 / 0.4)`): la de una placa clara, que se separa menos del muro.
- **Hundido** (`box-shadow: 0 1px 2px -1px rgb(4 36 74 / 0.3)` en placa clara, `/ 0.35` en el control oscuro): la sombra residual mientras la pieza está presionada.

### Named Rules

**La regla del canto.** La profundidad se fabrica con cuatro caras de `border-color` con tono distinto. Una sombra desenfocada jamás hace de borde, y un borde plano de un solo color jamás hace de canto. Si una superficie necesita parecer elevada, se le da canto; si no lo merece, se queda plana sobre el muro.

**La regla de una sola declaración.** La elevación se declara una vez, y la declara el canto. No existe la pieza con borde debajo de una sombra que simula otro borde: canto y apoyo son dos cosas distintas y cada una aparece una sola vez por pieza.

**La regla de la placa escasa.** El tratamiento de placa está reservado a cinco papeles: el nombre de la firma, cada una de las cuatro áreas, el domicilio, el control primario de contacto (a canto reducido, 2px) y la montura del logotipo de la firma filial. Todo lo demás vive sobre el campo desnudo. La escasez es lo que hace que una placa signifique algo.

## Shapes

La esquina es casi recta: **2px** en toda placa, lo justo para que el corte no se vea digitalmente afilado. El cromo compartido conserva 4px (`--radio`) en controles de navegación y badges. Nada en este mundo es de esquina redonda grande, y nada es de forma de píldora.

**Tornillos.** Las placas que están realmente montadas —la mayor, las cuatro de área, la de domicilio— llevan cuatro tornillos dibujados en las esquinas, a 12px del borde (9px por debajo de 480px), con la ranura en un ángulo distinto cada uno. El control de contacto y la montura del logotipo no los llevan: no son placas atornilladas al muro, son piezas menores.

**Reglas y filetes.** Tres tipos, y cada uno significa algo:
- El **filete** de la placa mayor es una doble línea de un solo píxel por cara (blanco 0.26 arriba, negro 0.32 abajo, máx. 180px): la misma lógica del canto, aplicada a una línea.
- La **regla de rúbrica** del padrón es de 2px en azul sólido y abre una sección del registro.
- La **regla de renglón** es de 1px en `rgb(7 55 109 / 0.16)`, con el primer renglón a 0.32 para cerrar la columna por arriba.

**Íconos.** Caja de 24, trazo único de 1.5, sin relleno, extremos y uniones redondeados, dibujados a mano en el propio componente (sobre, teléfono, flecha). Miden 17px en línea de texto y 15px en el registro.

### Named Rules

**La regla del trazo único.** Los íconos se dibujan: caja de 24, `stroke-width: 1.5`, `fill: none`, `stroke: currentColor`. Nunca se usa una fuente de glifos ni un paquete de íconos, y ningún ícono entra con un grosor distinto al del resto. El tornillo de la placa está dibujado con la misma pluma que el sobre del correo, y por eso pertenecen al mismo mundo.

**La regla de la esquina casi recta.** 2px en placa, 4px en control de cromo, nada más. Una esquina más redonda convierte el metal en tarjeta.

## Components

### Placas (contenedores)
Carácter: piezas de metal cortado, montadas, con peso.
- **Esquina:** casi recta (2px).
- **Placa oscura:** degradado de 168° entre `#0c4a8a`, azul, `#0a3f79` y azul hondo; canto de 6px (5px por debajo de 480px); texto en cantera alta; apoyo largo. Papeles: la placa mayor y la de domicilio.
- **Placa clara:** degradado de 168° entre `#faf7f2`, cantera alta, `#ece6dd` y `#e2dbd1`; canto de 5px (4px por debajo de 480px); texto en azul; apoyo corto. Papeles: las cuatro placas de área y la montura del logotipo filial.
- **Relleno interno:** `clamp(32px, 5vw, 62px)` vertical por `clamp(24px, 5vw, 66px)` horizontal en la mayor; `clamp(22px, 2.4vw, 30px)` en las de área; `clamp(28px, 4vw, 46px)` en la de domicilio.
- **Sombra:** ver Elevation & Depth. La placa declara canto y apoyo, nada más.

### Placa de área (pieza firma del sistema)
Columna de altura completa con el nombre del área arriba, su alcance debajo y, empujado al fondo con `margin-top: auto`, el bloque de quien responde separado por una regla de 1px: etiqueta «Responde», nombre de la encargada, el enlace nombrado y la dirección de correo en texto plano bajo él. Abajo del todo, el enlace secundario al detalle del área.
- **Estado:** con `:focus-within` o con el cursor sobre el enlace de la encargada, la placa se hunde —cantos invertidos, sombra recortada, 2px hacia abajo— en 0.35s.
- **Regla propia:** la placa no es un enlace gigante. El correo y el nombre quedan como texto seleccionable, porque esta audiencia copia nombres y direcciones.

### Botones y controles
- **Control primario (control de placa):** placa oscura a canto reducido de 2px, relleno 13px/21px, texto en cantera alta a 15.5px/600, ícono de flecha a la derecha. Al pasar el cursor invierte el canto, recorta la sombra y baja 2px; la flecha avanza 3px. Único control de este tipo en la página.
- **Foco:** heredado del sistema, `outline: 2px solid var(--foco)` con desplazamiento de 2px; el control declara `--foco: var(--pl-azul-claro)` por estar sobre tinta.
- No existe un botón secundario ni un botón fantasma. La jerarquía por debajo del control primario la cargan los enlaces.

### Enlaces
- **Acción nombrada** (14.5px/600, azul, subrayado de 1px al 50% con desplazamiento de 4px): la acción primaria de una placa de área. Dice el nombre de la persona —«Escribir a Paola»—, nunca «Más información». Al pasar el cursor, el subrayado va a azul pleno.
- **Enlace grabado** (15px/600, azul, regla inferior de 1px al 35%, ícono de flecha): el enlace de cierre de una sección. La flecha avanza 4px con el cursor y la regla va a azul pleno.
- **Enlace secundario** (12.5px/600, grafito claro, versales, 0.1em, regla inferior al 40%): el paso lateral dentro de una placa —«Ver el área»—. Al pasar el cursor sube a azul. Va elevado con `z-index: 1` para quedar por encima del destino de la placa.
- **Teléfono y correo** (16px/500, azul, ícono a la izquierda, `tabular-nums`): sin subrayado en reposo; el subrayado aparece con el cursor.

### Renglón del padrón
Carácter: asiento de registro, no tarjeta.
- **Estructura:** regla de 1px arriba, relleno de 13px vertical, nombre en 16px/600 azul, credencial en 13.5px grafito debajo, correo alineado a la derecha y centrado sobre ambas filas.
- **Responsivo:** por debajo de 600px el correo baja a su propio renglón.
- **Sin fondo, sin borde lateral, sin sombra.** Lo que lo contiene es la regla.

### Navegación
- **Header:** barra pegajosa de 64px (56px en móvil) que cambia de estado con el scroll a partir de 60px: de cantera alta con texto azul a azul hondo con texto cantera, en 0.35s. Todas las variables de estado (`--h-bg`, `--h-color`, `--h-acento`, `--h-tenue`, `--foco`) se reasignan en un solo bloque `.scrolled`.
- **Enlaces:** Libre Franklin 16px/500, esquina de 4px, relleno 6px/10px. El activo va en 700 con una regla inferior de 2px resuelta con `box-shadow: inset 0 -2px 0 currentColor` y `aria-current="page"`.
- **Logotipo:** marca vectorial de 38px más el nombre en Cinzel 600 de 16px con «S.C.» en Libre Franklin de 10px espaciado. En móvil el nombre encoge a 13px y por debajo de 400px desaparece.
- **Móvil (≤767px):** el menú cae como panel absoluto bajo el header, con botón de hamburguesa de 44×44 cuyas tres barras se convierten en aspa con `aria-expanded`.
- **Selector de idioma:** par ES/EN separado por barra, 13px/600, el activo en 700 con acento y `aria-current`.

### Pie de página
Superficie oscura permanente (degradado de 170° de azul hondo a azul noche) en cuatro columnas que caen a dos a 1023px y a una a 600px. Encabezados de columna en 11px versales con acento azul claro; enlaces en cantera alta al 78% que suben a pleno con el cursor. La montura del logotipo filial es placa clara: el vectorial de Pacioli es tinta oscura y necesita su propio fondo.

### Movimiento
Un solo easing gobierna el mundo: `cubic-bezier(0.16, 1, 0.3, 1)`. Los cambios de estado duran 0.35s, el desplazamiento de un ícono 0.4s, el montaje de una placa 0.85s y el grabado de una línea 0.9s. El cromo usa `ease` a 0.35s para el cambio de fondo y 0.15s para color de enlace.

La entrada de la portada tiene dos gestos, ambos bajo `prefers-reduced-motion: no-preference`: `montar` baja la placa 9px con 1.5px de desenfoque hasta asentarse, y `grabar` descubre cada línea de la placa mayor desde su propio recorte (`clip-path: inset(0 0 42% 0)` → `inset(0)`). Las cuatro placas de área entran escalonadas a 0.26/0.34/0.42/0.5s.

**La regla del contenido ya puesto.** Ninguna animación de entrada parte de `opacity: 0`. La placa llega puesta y sólo se asienta; la letra se descubre desde su recorte. Un contenido que empieza invisible es un contenido que puede quedarse invisible.

## Do's and Don'ts

### Do:
- **Do** fabricar la profundidad con `border-style: solid` y un `border-color` de cuatro valores de tono distinto; el estado presionado invierte esas cuatro caras y recorta la sombra a `0 1px 2px -1px`.
- **Do** reservar la placa a los cinco papeles de la regla de la placa escasa y resolver toda lista como registro rayado sobre el campo desnudo.
- **Do** declarar `--foco` en cada superficie oscura (`--pl-azul-claro`), porque `:focus-visible` lee `var(--foco, var(--pl-azul))`.
- **Do** escribir la acción primaria con el nombre de la persona («Escribir a Marisela») y dejar el correo visible como texto seleccionable junto a ella.
- **Do** poner `font-variant-numeric: tabular-nums` en teléfonos, años y cifras de dato.
- **Do** dibujar cada ícono en caja de 24 con `stroke-width: 1.5` y `stroke: currentColor`.
- **Do** anotar el ratio de contraste peor-caso junto a cada token de texto nuevo, como ya lo hacen `--pl-grafito` (6.09:1) y `--pl-grafito-claro` (5.04:1).
- **Do** pedir el juego tipográfico por superficie con `fuentes="placa"` en `Base.astro`; una superficie de este mundo no carga las fuentes del mundo retirado.
- **Do** dejar que el contenido llegue ya visible: se asienta o se descubre, nunca aparece desde `opacity: 0`.

### Don't:
- **Don't** usar `--oro`, `--oro-claro`, `--papel`, `--tinta`, Spectral ni IBM Plex Mono en una superficie migrada. Son el mundo retirado; el dorado nunca fue color de la marca y el azul real del logotipo es `#07376d`.
- **Don't** usar una sombra desenfocada como borde, ni apilar borde y sombra para simular un segundo canto.
- **Don't** envolver una lista en placas, ni convertir una placa entera en un enlace que se trague el texto seleccionable de adentro.
- **Don't** introducir un tercer color para jerarquizar; el naranja `#f79412` está reservado a Pacioli y a nada más.
- **Don't** escribir párrafos, botones ni cifras en Cinzel, ni poner una etiqueta suelta encima de un título.
- **Don't** redondear más allá de 2px en placa y 4px en control de cromo, ni usar formas de píldora.
- **Don't** usar un gris de texto más claro que `#4f5157` sobre cantera.
- **Don't** afirmar en la interfaz un dato que el cliente no ha confirmado —horario, WhatsApp, fotos reales—; el hueco se marca como pendiente y no se rellena con material plausible.
