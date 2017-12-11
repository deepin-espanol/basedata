---
title: Qué es una partición y cúales son sus limitaciones
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - particiones
---

Una partición es un contenedor del disco duro que almacena datos. Las particiones pueden tener archivos del sistema o se apoyan de la caché para arrancar el sistema operativo.

Fuente: [Planeta Fedoraa](https://planetafedora.wordpress.com/acerca-de-particiones-y-puntos-de-montaje-tipos-de-formato-y-tamanos/)

### ¿Cuántas particiones puedo tener en mi disco duro?
Eso dependerá de la estructura de disco duro. Para eso necesitarás de un sistema para gestionar particiones llamada "tabla". Por defecto se usa MBR, Registro de arranque principal en inglés.

En esa tabla tienes un máximo de 4 contenedores llamadas "particiones primarias". De las cuales cada una puede dividirse en particiones lógicas.

Fuente: [Planeta Fedoraa](https://planetafedora.wordpress.com/acerca-de-particiones-y-puntos-de-montaje-tipos-de-formato-y-tamanos/)

### ¿Porqué usamos particiones EXT4?
En Gnu/Linux usamos el sistema de archivos extendido o EXT, de código abierto y libre de patentes. Fue presentado en 1992 con la primera versión de Linux. Un año después se implementaría su segunda versión para usar en particiones con varios giga-octetos (GB) de almacenamiento.

En 2008 se lanzaría la [versión 4](https://en.wikipedia.org/wiki/Ext4), abreviada EXT 4 con muchas mejoras. Theodore Ts'o es el encargado de desarrollar esa versión. Es estable, tiene menos posibilidad de fragmentarse, para particiones de hasta 16 terabytes y más de 4 mil millones de archivos cada uno.

Lejos de los detalles técnicos, el EXT4 es recomendable para particiones del sistema, documentos y SWAP ya que son fáciles de reparar, son rápidos de leer y reciben mejoras de rendimiento junto al núcleo Linux.

{% include _faq_post.md %}
