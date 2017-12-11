---
title: En qué se basa Deepin GNU/Linux
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - software
---

Queremos explicarte cómo funciona Deepin con las tres primeras preguntas indispensables y una cuarta explicando el motivo.

### ¿Qué es GNU? ¿En qué lenguaje está escrito?
GNU es el primer paso y el pilar para el desarrollo del sistema operativo. Desarrollado Richard M. Stallman en 1983 busca adoptar tecnologías informáticas (hasta entonces dominaba Unix) y hacerlo accesible para los desarrolladores sin restricciones.

Sin embargo, debido a que GNU necesitaba un núcleo para que comunique entre el software libre. En 1991 nació Linux por Linus Torvalds y un año después se formó GNU/Linux.

Como dato adicional, GNU usa un [intérprete de código fuente a binario](https://www.gnu.org/software/libc/libc.html), por lo que está escrita en C inicialmente.

Fuente: [FSF](https://www.gnu.org/gnu/gnu-linux-faq.es.html#why)

### ¿Qué es Linux?
Es el núcleo del sistema operativo y el más usado. Es el propio Linus Torvalds quien desarrolló y contiene información elemental como controladores de vídeo, de disco duro y muchas más.

Hasta octubre de 2017, entre las versiones 4.8 y 4.13, el primero LTS, hubo 83 000 cambios admitidos de 4300 desarrolladores de 519 corporaciones. Esa 4.13 tiene más de 24.7 millones líneas de código escritas en más de 60 000 archivos.

<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/UUJ0dFpj1-M?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>
<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/o8NPllzkFhE?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

Fuente: [Fossbytes](https://fossbytes.com/linux-kernel-development-contributer/)

### ¿Qué es Debian?
[Debian GNU/Linux](https://es.wikipedia.org/wiki/Debian_GNU/Linux) es uno de los proyectos más vetaranos desde 1993. Es la que llamaremos "distribución", porque se encarga de distribuir, organizar y ejecutar una serie de herramientas de software, llamados "paquetes".

<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/IS9WE6V-1lc?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

### ¿Por qué Deepin depende parcialmente de Debian?
Para que no te compliques demasiado, Deepin es la distribución hija de Debian. Y Debian es una de las distribuciones más vetaranas.

Hasta las versión 2014 estuvo basado en Ubuntu, también basada en Debian y una de las más conocidas en los años 2000. En la versión 15.x se cambió a Debian para ganar estabilidad (
[Muy Linux](http://www.muylinux.com/2015/12/31/deepin-15/)).

Si tienes dificultades con la base Debian, puedes usar a sus tios. La versión Manjaro Deepin está basada en Arch y emplea otras tecnologías a profundidad. [Revisa la página Instalación]({{ site.url }}{{ site.baseurl }}/deepin/instalacion/). Recuerda que no está siendo desarrollado oficialmente, sino por la comunidad.

{% include _faq_post.md %}
