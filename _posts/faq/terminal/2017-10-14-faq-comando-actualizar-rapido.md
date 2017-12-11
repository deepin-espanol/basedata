---
title: Cómo actualizar Deepin en la terminal
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - terminal
---

La forma más sencilla es:

~~~
sudo apt update && sudo apt full-upgrade -y
~~~

### Paso a paso
Si te resulta difícil, te explicamos paso a paso su funcionamiento, ya que la sentencia anterior es un resumen de estos comandos.

~~~
sudo apt update
~~~

En este listado verás cuandos paquetes están listos. Escribimos Upgrade es para actualizaciones. Si no funciona reemplazamos a full-updgrade para mayores.

~~~
sudo apt upgrade
~~~

Una forma más sencilla de actualizar es escribir full-upgrade y añadir `-y` al final de la sentencia. Ese últmino obliga a aceptar cualquier acción (`y` de `yes`), ahorrando tiempo (por ejemplo al aceptar cambios en la configuración, detalles en "Me avisó que hay una nueva configuración disponible").

~~~
sudo apt full-upgrade -y
~~~

{% include _faq_post.md %}
