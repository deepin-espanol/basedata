---
title: "ln"
description: "Crea enlaces físicos o simbólicos"
---
##### Enlace físico
El enlace físico contiene un "archivo gemelo", que sirve para acceder al archivo.
{% raw %}
~~~liquid
ln nombrearchivo nombrealternativo
~~~
{% endraw %}

##### Enlace virtual
Crea un enlace para acceder al archivo. Equivale al "acceso directo" en Windows o un "alias" en OS X.
{% raw %}
~~~liquid
ln -s nombrearchivo nombreenlace
~~~
{% endraw %}
