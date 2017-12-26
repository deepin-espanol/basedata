---
type: Document
title:  "Qué hacer si aparece el problema 'Dependencias incompletas'"
description: "Parte de la FAQ de Ayuda de Deepin"
tags:
    - deepin-faq
    - terminal
    - avisos
---

Si hay problemas puedes revisar en la aplicación Synaptic o realizando comandos de comprobación e instalaciones paquetes:

~~~
sudo apt-get update
sudo apt-get check
sudo apt-get -f install
~~~

Si el problema al instalar o actualizar software persiste, revisa [la pregunta "Qué hacer si tengo problemas al actualizar en la terminal"]({{ site.url }}{{ site.baseurl }}/deepin/faq-problemas-actualizar-terminal).

{% include _faq_post.md %}
