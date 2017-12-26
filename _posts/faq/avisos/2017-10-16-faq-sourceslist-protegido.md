---
type: Document
title:  "Qué hacer si aparece el aviso 'source.list protegido'"
description: "Parte de la FAQ de Ayuda de Deepin"
tags:
    - deepin-faq
    - terminal
    - avisos
---

Eso se debe a que las actualizaciones centro de control están haciendo el trabajo de actualizar. Reinicia el equipo (método seguro) o ejecuta en la terminal.

~~~
sudo rm /var/cache/apt/archives/lock & sudo rm /var/lib/dpkg/lock & sudo rm /var/lib/apt/lists/lock
~~~

Nota: Este código usa `rm` para borrar los archivos `lock` de las tres carpetas.

Si el problema al instalar o actualizar software persiste, revisa [la pregunta "Qué hacer si tengo problemas al actualizar en la terminal"]({{ site.url }}{{ site.baseurl }}/deepin/faq-problemas-actualizar-terminal).

{% include _faq_post.md %}
