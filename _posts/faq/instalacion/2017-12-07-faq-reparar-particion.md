---
title: Cómo reparar una partición
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - particiones
---

En motivos que el sistema no arranca correctamente, debes revisar si algunas particiones fueron dañadas. Al mostrar la pantalla con puro texto, usa la herramienta [fsck](https://es.wikipedia.org/wiki/Fsck) en la [terminal]({{ site.url }}/deepin-faq/) y ejecuta `fsck /dev/sdXX -y`, por ahora comprobará algún daño y lo reparará.

En caso que no sepas qué partición reparar, sdXX viene a ser el número de partición, como sda1; en caso de otros discos duros reemplaza a hdXX. Por ejemplo, si la partición principal ("/") es sda1, ejecuta el comando `fsck /dev/sda1 -y`.

{% include _faq_post.md %}
