---
type: Document
title:  "Qué hacer si aparece el aviso 'Sub-process /usr/bin/dpkg returned an error code(1)'"
description: "Parte de la FAQ de Ayuda de Deepin"
tags:
    - deepin-faq
    - terminal
    - avisos
---

Se debe a que la cola de instalaciones está en pausa. Puedes detener el proceso y vuelve a ejecutar:

~~~
sudo dpkg –configure -a
~~~

{% include _faq_post.md %}
