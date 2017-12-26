---
date: 2017-11-17
type: Document
title:  "Formas de instalar Deepin"
description: "Ingeniosas formas de instalar Deepin, para curiosos"
tags:
    - deepin-sistema operativo
    - instalacion
    - pc
    - usb
    - sistemas
    - videos
icon: run
set: importante
set_order: 4
---

Además de [la instalación convencional]({{ site.url }}{{ site.baseurl }}/deepin/instalacion/), te ampliamos la documentación para instalar Deepin.

## Arranque básico
Para iniciar Deepin, es necesario iniciar desde el disco o USB. Si no puedes arrancar revisa los ajustes de la BIOS. Después selecciona "Install Deepin" o, si no funciona con certeza, "safe mode".

### Instalación limpia
La instalación limpia consista de:
1. Selecciona el idioma
2. Esocoge el teclado y la fecha
3. Crea la cuenta de usuario, con contraseña
4. Selecciona la partición a instalar
5. La instalación demora unos minutos

### Instalación avanzada
<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/A_VM9XSBaus?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

La instalación avanzada ofrece un editor de particiones del disco. Eso es útil para definir que **particiones se conservan o no** como mantener un segundo sistema operativo. Nuestra recomendación es establecer las particiones de arranque y de información como explicamos:

1. Añade una partición EXT4 con el arranque "/" para el sistema operativo. El mínimo es 10GB.
2. Tienes dos formas de establecer el sistema arranque, en el disco duro o en una la partición EXT4 de 300MB "/boot" (para el dual boot).
2. Otra partición "/home" para la carpeta de Mis documentos. Si establecer en un disco duro aparte de los componentes, mejor.

<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/-oswVXK8Vs0?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

Fuente: Salmorejo Geek

## Instalación no convencional
### Instalación junto a Windows
Si te complica instalar Deepin con la instalación avanzada Deepin con la [aplicación para Microsoft Windows]({{ site.url }}{{ site.baseurl }}/deepin/deepininstaller/).

### Deepin en discos externos
Mediante la instalación avanzada, es posible instalar Deepin en discos duros externos o lápices con gran almacenamiento, a partir de 16 GB y completamente en blanco.

La diferencia es el arranque GRUB, requiere un puerto de alta velocidad (USB 3.0) para reducir la carga al guardar información. Para instalar, el dispositivo de arranque debe conectarse en otro puerto.

<div class="video_wrapper">
        <iframe src="https://www.youtube.com/embed/Ud9aW_L67mQ?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

## Sugerencias
¿Sabes alguna forma de instalar Deepin? ¡Cómentalo desde los comentarios!
