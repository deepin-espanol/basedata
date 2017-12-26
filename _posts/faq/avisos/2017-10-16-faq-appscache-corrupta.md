---
type: Document
title:  "Qué hacer si aparece el aviso 'el paquete se corrompió'"
description: "Parte de la FAQ de Ayuda de Deepin"
tags:
    - deepin-faq
    - terminal
    - avisos
---

También se le menciona como `No es posible instalar porque los paquetes están corruptos`. Para solucionarlo, debes limpiar la caché.
~~~
sudo apt-get clean
~~~

Si el equipo está actualizando, vuelve a ejecutarlo. Este es la forma rápida:
~~~
sudo apt-get clean && sudo apt upgrade
~~~

Si el problema al instalar o actualizar software persiste, revisa [la pregunta "Qué hacer si tengo problemas al actualizar en la terminal"]({{ site.url }}{{ site.baseurl }}/deepin/faq-problemas-actualizar-terminal).

{% include _faq_post.md %}
