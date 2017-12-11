---
title: Cómo respaldar una partición
description: "Haciendo copias de seguridad. Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - particiones
---

Tenemos incluido en Deepin 15.5 [Deepin Clone]({{ site.url }}{{ site.baseurl }}/deepin/deepin-clone/). Basta ejecutar la aplicación y seguir las instrucciones. Las copias se clonan en otras particiones o se guardan en una imagen disco (**no compabile con unidades USB con partición FAT32**).

### Cómo respaldo
En Deepin tienes dos opciones:
* La forma más segura es mediante Deepin Clone:
  * Viene incluido en la versión 15.5. Puedes convertir a imagen de disco o una copia de partición.
  * Para recuperar una partición, dirígete a Deepin Recovery.

### Otras formas de respaldar
* Usando los comandos de la terminal:
  * Para hacer una copia `dd if=/dev/xxx of=mbr.backup bs=512 count=1`
  * Para restaurar con dicha copia `dd if=mbr.backup of=/dev/xxx bs=512 count=1`
  * Nota: xxx representa la id del dispositivo, que puede ser hda, sda, o cualquier otro.

{% include _faq_post.md %}
