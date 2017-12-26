---
title: Puedo copiar archivos de 4 GB o más en mi USB
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - fat32
  - flash
---

Sí. Debes saber primero que si la unidad USB está con formato FAT16 o FAT32 no está preparada para recibir archivos mayores a 4GB. Para eso tendrás que usar exFAT, una alternativa fiable y segura.

## Formatear a exFAT
1. Para formatear a exFAT necesitarás una aplicación como [gParted]({{ site.url }}/deepin/gparted/)
2. Selecciona la unidad que está alojada el USB
3. En la única partición, aplica el formato `exFAT`

## Formatear a NTFS
Otra solución es usando el conocido y comercial NTFS, compatible con Windows. Los pasos son similares a la exFAT. En la versión 15.5 de Deepin, puedes aplicar rápidamente desde la barra lateral de [gestor de archivos]({{ site.url }}/deepin/filemanager/).

Fuente: [Sandisk](https://kb.sandisk.com/app/answers/detail/a_id/289/~/transferring-a-4gb-or-larger-file-to-a-usb-flash-drive-or-memory-card)

{% include _faq_post.md %}
