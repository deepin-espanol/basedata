---
title: Cómo administra los recursos y componentes del sistema Deepin
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - software
---

Deepin usa paquetes de Debian (extensiones "deb"). La mayoría de paquetes contienen código que se ramifica con paquetes más simples (es como un árbol de paquetes). Por ejemplo, el paquete principal es linux, y sus consecuentes están relacionados a los gráficos (Mesa), la libería gráfica (Qt), códecs, entre otros.

Deepin consigue los paquetes de la rama no estable de Debian (sid). Sin embargo, actualizar paquetes a una versión más reciente genera el "conflicto de dependencias", sobretodo en aplicaciones recientes o correcciones. Para evitar esos malestares, gran parte de las tecnologías dependen de Flatpak (desde 15.5) y las no diseñadas para Flatpak seguirán con el modelo tradicional (por ejemplo, la parte crítica de Debian).

{% include _faq_post.md %}
