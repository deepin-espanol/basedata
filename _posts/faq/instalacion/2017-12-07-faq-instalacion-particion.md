---
title: Qué consejo tienes para establecer particiones en Deepin
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - particiones
---

Al instalar Deepin, tienes de 2 a 4 particiones con sus respectivas unidades de montaje y acciones:
1. La primera partición lleva la unidad de montaje "/" y es la raíz del sistema operativo. Debe ocupar 10 GB o más.
2. La segunda con la unidad de montaje "/boot" en una partición aparte. Así gestionará el arranque del sistema (o varias de ellas). Ocupa entre 100 a 300 MB.
3. Continúa con "/home" para tu información en una partición separada (si deseas). Así podrás estar a salvo con tus documentos incluso si tu sistema sufre errores. Puedes establecer la cantidad que quieras, incluso el 90% de tu disco duro.
4. Por último tienes una partición opcional con la unidad "/swap" para el intercambio de datos. Esa opción es útil para hibernar el equipo.
5. Puedes elaborar más particiones con otros puntos de anclaje como "/opt" para datos de aplicaciones externas. Eso no es necesario.

### ¿Debo tener una partición de intercambio o SWAP?
Si tienes menos de 4 GB de RAM, es indispensable. Si pasas esa cantidad, no es obligatorio tener esa partición.

### ¿Puedo usar particiones de Windows con Deepin?
Sí, tal como menciona [el manual]({{ site.url }}/deepin/dual-boot/).

### ¿La partición con la unidad de montaje "/" es el principal en Deepin?
Algo así. En Windows es el equivalente a C.

### ¿Puedo gestionar las particiones dentro de Deepin?
Sí. Con la aplicación [GParted]({{ site.url }}/deepin/gparted/).

{% include _faq_post.md %}
