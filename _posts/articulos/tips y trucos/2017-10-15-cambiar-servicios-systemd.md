---
date: 2017-11-17
type: Document
title:  "Configurando systemd con chkservice"
description: "Establece los servicios del sistema a tu gusto"
tags:
    - deepin-tips y trucos
    - chkservice
    - demonio
    - systemd
---

systemd (acrónomo de "System daemon", escrito en minúsculas) es un conjunto de servicios del sistema, también llamados "demonios", siendo el primero al iniciar del sistema. En este tip te enseñamos a establecer qué servicios puede iniciar a con él gracias a chkservice.

Si quieres saber más detalles sobre esté y más componentes en Deepin , visita [Dudas frecuentes]({{ site.url }}{{ site.baseurl }}/deepin/faq-componentes-gnulinux/).

## Pasos
1. Descarga desde los repositorios `apt installchkservice`
chkservice
<div class="video_wrapper">
        <iframe src="https://www.youtube.com/embed/A_VM9XSBaus?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

## Usar Chekservice sin entorno gráfico

En caso que encuentres un error realcionado a Systemd, puedes iniciar [en modo TTY]({{ site.url }}{{ site.baseurl }}deepin/tty/).

## Lectura adicional
* [Artículo en Linoxide](https://linoxide.com/linux-how-to/chkservice-systemd-units-management/)
* [SystemD en Freedesktop](https://www.freedesktop.org/wiki/Software/systemd/)
* [Artículo de Wikipedia](https://en.wikipedia.org/wiki/Systemd)
