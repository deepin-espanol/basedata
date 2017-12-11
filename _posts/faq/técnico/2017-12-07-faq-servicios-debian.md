---
title: Qué son los servicios de Debian
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - software
---

Los servicios, llamado también "demonios" (traducción de "Daemon". siglas de Disk And Execution MONitor) son la parte básica para el sistema operativo. Los demonios también tienen paquetes de Debian para actualizarse.

Uno de los demonios es [systemd](https://en.wikipedia.org/wiki/Systemd). Este componente, que es un conjunto de servicios, permite comprobar los dispositivos activados durante su encendido. Así, indica que está funcionando y avisa si encuentra algún error. Puedes configurarlo [con chkservice]({{ site.url }}/deepin/cambiar-servicios-systemd/).

{% include imagen source="graficos/systemd.png" alt="Systemd. Cortesía de itrunsonlinux.com." %}

Para crear servicios de systemd consulta [este artículo](https://www.redeszone.net/2017/09/02/crear-servicios-daemon-ubuntu-systemd/). Para otros demonios menores de la distro madre, visita [Demonios de Debian](https://wiki.debian.org/es/Daemon#Demonios_de_Debian).

{% include _faq_post.md %}
