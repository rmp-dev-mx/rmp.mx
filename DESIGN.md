---
name: Ramírez Medellín, S.C. (rmp.mx)
description: Papel cálido, titular grande y la fotografía mandando a sangre; sin cajas.
colors:
  papel: "#f4ede2"
  papel-2: "#ece2d3"
  tinta: "#1e1b17"
  tinta-2: "#3c3630"
  azul: "#07376d"
  ambar: "#a8460b"
  ambar-vivo: "#c2540e"
  banda: "#b23c0a"
  linea: "rgb(30 27 23 / 0.14)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(38px, 7.2vw, 104px)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(28px, 4.4vw, 60px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(19px, 1.7vw, 26px)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0.1em"
spacing:
  fila: "16px"
  bloque: "clamp(44px, 6vw, 88px)"
  marco: "clamp(20px, 4vw, 64px)"
components:
  boton:
    backgroundColor: "{colors.ambar}"
    textColor: "{colors.papel}"
    typography: "{typography.label}"
    padding: "14px 20px"
  boton-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
  enlace-dato:
    textColor: "{colors.azul}"
    typography: "{typography.body}"
  accion:
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
---

# Sistema de diseño: Ramírez Medellín, S.C.

## Overview

**Creative North Star: "El papel y la piedra"**

Una firma de contadores y abogados con 28 años en San Luis Potosí no necesita gritar: necesita verse asentada. El sistema parte de un papel cálido, casi de expediente, y deja que dos cosas hagan el trabajo: un titular grande y sereno, y una fotografía que llega a sangre hasta el borde de la pantalla. Entre ambos hay aire, y casi nada más.

La regla que ordena todo lo demás es la ausencia de recipientes. No hay tarjetas, ni bordes redondeados, ni sombras que finjan relieve. Lo que separa un contenido de otro es una línea fina, un cambio de fondo o el espacio. Cuando algo necesita jerarquía, la recibe por tamaño y por color, nunca por una caja alrededor.

El antecedente que este sistema reemplaza es deliberado: el sitio venía de un mundo de crema y serif cursiva con etiquetas en monoespaciada sobre cada título, y de un intento posterior de placas grabadas con sombra. Ambos se descartaron. El oro que usaban no era de la marca; el azul de este sistema sí, sale del vectorial que entregó el cliente.

**Key Characteristics:**

- Papel cálido como campo, nunca blanco puro.
- Titular en versales, grande, con tracking negativo.
- Fotografía a sangre, con el papel entrando encima para evitar el corte duro.
- Datos en monoespaciada; cifras con numeración tabular.
- Una sola llamada fuerte por pantalla.

## Colors

Dos tintas y un acento. El azul es de marca y trabaja de enlace; el ámbar es la voz cálida y manda en acciones y acentos.

### Primary

- **Azul de marca** (`#07376d`): sale del logo entregado por el cliente. Enlaces de dato (teléfonos, correos, fuentes oficiales). 10.17:1 sobre papel.
- **Ámbar** (`#a8460b`): acciones, líneas de acento, enlaces de énfasis. Bajado desde el naranja de Pacioli hasta cumplir AA en texto: 5.09:1 sobre papel.

### Secondary

- **Ámbar vivo** (`#c2540e`): sólo superficies y elementos no textuales. No pasa AA como texto y no debe usarse así.
- **Banda** (`#b23c0a`): fondo de las franjas saturadas, con texto en papel a 5.1:1.

### Neutral

- **Papel** (`#f4ede2`): campo de toda página migrada.
- **Papel 2** (`#ece2d3`): segunda banda, secciones alternas y fondos de apoyo.
- **Tinta** (`#1e1b17`): texto principal y fondo del pie. 14.75:1 sobre papel.
- **Tinta 2** (`#3c3630`): texto secundario y párrafos largos. 10.25:1 sobre papel.
- **Línea** (`rgb(30 27 23 / 0.14)`): el único separador del sistema.

### Named Rules

**La regla de las dos tintas.** El azul es para datos que el visitante va a usar (teléfono, correo, fuente); el ámbar es para lo que quiere que haga. Si un elemento no es ninguna de las dos cosas, va en tinta.

**La regla del ámbar medido.** El ámbar de texto es `#a8460b`, no el vivo. Cualquier ámbar más claro que ese sólo existe como superficie.

**La regla del foco propio.** `:focus-visible` lee `var(--foco)` y cada superficie declara el suyo: ámbar sobre papel, papel sobre las franjas oscuras. Ninguna superficie hereda un foco que no contrasta.

## Typography

**Display:** Archivo (con system-ui de respaldo)
**Body:** Spectral (con Georgia de respaldo)
**Label/Mono:** Azeret Mono

**Character:** Archivo en versales da la voz institucional sin ponerse solemne; Spectral lee cálido en párrafo y sostiene las citas grandes; Azeret Mono ordena los datos sin disfrazar de técnico lo que no lo es.

### Hierarchy

- **Display** (Archivo 500, `clamp(38px, 7.2vw, 104px)`, line-height 0.95, tracking −0.02em, versales): el titular de cada página. Uno por pantalla.
- **Headline** (Archivo 500, `clamp(28px, 4.4vw, 60px)`, versales): títulos de sección.
- **Title** (Spectral 500, `clamp(19px, 1.7vw, 26px)`): nombres de área, de pieza y de persona.
- **Body** (Spectral 400, 16px, line-height 1.6): párrafos, con medida máxima de 52ch.
- **Label** (Azeret Mono 400, 12.5px, tracking 0.1em, versales): etiquetas de dato, direcciones, periodos, acciones.

### Named Rules

**La regla del dato en mono.** La monoespaciada es para datos y etiquetas: direcciones, teléfonos, periodos, cuentas. Nunca para párrafos ni para simular tecnología.

**La regla de la cifra tabular.** Todo número que se pueda comparar en columna lleva `font-variant-numeric: tabular-nums`.

**La regla sin etiqueta.** No hay etiqueta pequeña sobre un título. El título se sostiene solo; si hace falta contexto, va debajo y como dato.

## Layout

Contenedor de 1360px con margen lateral fluido (`clamp(20px, 4vw, 64px)`). Las cabeceras de página rompen el contenedor: el texto ocupa su columna con su propio margen y la fotografía llega hasta el borde de la ventana.

Ritmo vertical por bloques de `clamp(44px, 6vw, 88px)`. Las secciones se separan por cambio de fondo (papel ↔ papel 2 ↔ banda) o por una línea fina; nunca por una caja.

Las listas son rejillas de columnas iguales que colapsan por contenido: cuatro columnas en escritorio, dos en tableta, una por debajo de 560px. Las cabeceras pasan a una columna a 900px y la fotografía se va arriba, con el degradado de papel cambiando de lateral a inferior.

### Named Rules

**La regla de la imagen a sangre.** Toda fotografía de cabecera llega al borde de la ventana y lleva el papel encima en su lado interior, en un 24% de degradado. Sin ese degradado, el corte se ve duro.

## Elevation & Depth

Este sistema no tiene escala de elevación. No hay sombras. La profundidad se comunica por posición, por tamaño y por el contraste entre el papel y las bandas oscuras.

### Named Rules

**La regla de la superficie plana.** Ningún elemento se eleva. Si dos cosas necesitan distinguirse, cambia el fondo o se separan con línea y aire.

## Shapes

Esquinas rectas en todo: botones, campos de formulario, imágenes y bandas. El único círculo del sistema es el que envuelve la flecha de acción y el chip de "IA" del boletín, donde el círculo es la forma, no una decoración.

Las imágenes se recortan en proporciones declaradas: 4/3 en las áreas de la portada, 5/4 en los apartados de servicios, 4/5 en el retrato de historia y 16/9 en las cabeceras al pasar a móvil.

## Components

### Botón

- **Forma:** rectángulo recto, sin radio.
- **Primario:** fondo ámbar, texto papel, etiqueta en mono de 12.5px con tracking 0.12em, padding 14/20, y la flecha en círculo a la derecha.
- **Hover:** el fondo pasa a tinta; el círculo conserva el trazo en el color del texto.
- **Regla:** uno por pantalla. Si hay dos llamadas, la segunda es una acción con flecha, no otro botón.

### Acción con flecha

- Etiqueta en mono más un círculo de 30px con la flecha dibujada dentro.
- **Hover:** el círculo se rellena y la flecha invierte su color.
- Variante ámbar (`.accion--ambar`) para superficies donde la tinta pesa demasiado.

### Cabecera de página

- Rejilla de dos columnas: texto a la izquierda, fotografía a sangre a la derecha.
- Titular en display, bajada opcional en cuerpo con medida de 46ch, y un slot para lo que cada página necesite debajo (un índice, un aviso).
- A 900px pasa a una columna con la fotografía arriba.

### Renglón de lista

- El patrón de listado del sistema: sin caja, con línea fina arriba; la primera de cada grupo lleva línea de 2px en tinta para abrir el bloque.
- Nombre en Spectral, descripción en tinta 2, y el enlace o el dato alineado a la derecha en escritorio, debajo en móvil.

### Campo de formulario

- Fondo papel, borde de 1px en línea, sin radio, etiqueta arriba.
- **Foco:** outline de 2px en ámbar con offset de 2px.
- **Error:** borde y mensaje en el rojo heredado, con el mensaje bajo el campo y `aria-invalid` en el control.

### Franja saturada

- Sección a sangre con fondo banda y texto en papel: cita institucional a la izquierda, fotografía a la derecha.
- Declara su propio `--foco` en papel.

## Do's and Don'ts

### Do:

- **Do** usar el azul `#07376d` sólo para datos accionables y el ámbar `#a8460b` para lo que el visitante debe hacer.
- **Do** dejar que la fotografía llegue al borde de la ventana, con el degradado de papel encima en su lado interior.
- **Do** separar con línea fina, cambio de fondo o espacio.
- **Do** poner la medida de los párrafos en 52ch o menos.
- **Do** declarar `--foco` en cada superficie nueva antes de darla por terminada.

### Don't:

- **Don't** meter contenido en tarjetas, ni poner bordes redondeados o sombras: este sistema no tiene recipientes ni elevación.
- **Don't** usar una etiqueta pequeña encima de un título.
- **Don't** numerar secciones (01 / 02) cuando el orden no informa nada.
- **Don't** usar el ámbar vivo `#c2540e` como color de texto: no cumple AA.
- **Don't** usar monoespaciada para párrafos.
- **Don't** heredar nada del mundo anterior: el oro `#8a6423`, Spectral en cursiva como voz de titular y las etiquetas mono sobre cada encabezado quedaron fuera a propósito.

<!-- Pendiente del cliente, no es una regla del sistema: no existe fotografía
     real de la oficina ni del equipo. Las imágenes actuales son editoriales
     genéricas y deben sustituirse por una sesión propia. -->
