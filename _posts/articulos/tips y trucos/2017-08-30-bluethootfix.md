---
date: 2017-11-17
type: Document
title: "Arreglar conectividad Bluethoot"
description: "Parches y mejoras para el dispositivo inalámbrico"
tags:
  - deepin-tips y trucos
  - bluethoot
  - codigo
  - controlador
  - fix
  - destacado
---

Si tienes problemas al conectar tu laptop o PC via Bluethoot, te ofrecemos unos trucos para corregir. Eso dependerá del modelo y los pasos disponibles.

## Iniciar Bluethoot
Si no funciona desde el Centro de control digita en la terminal `service bluethoot start`. Si no se inicia, ejecuta `sudo -s` y vuelve a escribir el comando anterior. Si quieres usar la interfaz gráfica, prueba con `blueman` de GNOME.

<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/j5mHo3X-_MI?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

Si no se ejecuta correctamente debes instalar los paquetes `Bluetooth`, `bluez` y `pulse-audio` (para los audífonos).

## Problema con Wifi y Bluethoot conectados
Si tienes problemas al conectar las dos conexiones. Te recomendamos corregir el problema de Wifi primero y revisar si se ejecuta correctamente. Otra solución es cambiar el [núcleo Linux]({{ site.url }}{{ site.baseurl }}/deepin/kernel/).

## Reporta el fallo
Si has encontrado una solución para corregir el problema de conectividad, reporta en los [Comentarios de Deepin]({{ site.url }}{{ site.baseurl }}/deepin/feedback/). Sé breve, en inglés, con el modelo del dispositivo en cuestión.

## Lectura adicional
* [Arreglo a a la conectividad Wifi]({{ site.url }}{{ site.baseurl }}/deepin/wififix/)
* [Github de rtl8723au](https://github.com/lwfinger/rtl8723au/issues/57)
* [Hilo en Superuser](https://superuser.com/questions/1117276/how-to-make-wifi-and-bluetooth-work-simultaneously)
* [Hilo en HP](https://h30434.www3.hp.com/t5/Notebook-Wireless-and-Networking/WiFI-and-Bluetooth-both-are-not-detected-in-Ubuntu-17-04/td-p/6302154)
