---
type: Document
title:  "Qué hacer si aparece el aviso 'El hash del paquete no coincide con lo esperado'"
description: "Parte de la FAQ de Ayuda de Deepin"
tags:
    - deepin-faq
    - terminal
    - avisos
---

Por motivos de seguridad, los paquetes son revisados. Primero comprueba si el archivo tiene un "código de verificación" basado en la integridad del archivo. Si la integridad es diferente a lo registrado anteriormente, la instalación se cancela por considerarlo "sospechoso". Esto incluye a [otros repositorios]({{ site.url }}{{ site.baseurl }}/deepin/otros-repositorios).

~~~
file DOWNLOAD HASH mismatch

  for file: [nombredelarchivo]
    expected hash: [12345678901234567890123456789012]
      actual hash: [ab34567890ab34567890ab34567890ab]
~~~

Pueda a instalar otro paquete, [revisa si el archivo llave está al día]({{ site.url }}{{ site.baseurl }}/deepin/llaves-gpg) o cambia el [espejo]({{ site.url }}{{ site.baseurl }}/deepin/mirror).

Si el problema al instalar o actualizar software persiste, revisa [la pregunta "Qué hacer si tengo problemas al actualizar en la terminal"]({{ site.url }}{{ site.baseurl }}/deepin/faq-problemas-actualizar-terminal).

Fuente: [debian-handbook.ingo](https://debian-handbook.info/browse/es-ES/stable/sect.package-authentication.html)

{% include _faq_post.md %}
