---
date: 2017-11-17
type: Document
title:  "Deepin Clone"
description: "Respaldo de archivos en Deepin"
tags:
    - deepin-tutoriales
    - clone
    - backup
    - particiones
    - originales

---

Deepin Clone es una aplicación para respaldar contenido del disco duro.

## Interfaz
Funciona con particiones y discos duros completos. Se tranfiera en una nueva partición o una imagen de disco.

Puedes guardar las imagenes en discos duros externos sean NTFS o EXT4. Sin embargo, no es compatible con formato FAT porque almacenan archivos hasta 4 GB.

{% include imagen source="screenshot/deepinclone.png" alt="Sección de inicio de Deepin Clone." %}

## Nota
Para hacer o restaurar copias de seguridad de particiones del sistema es necesario instalar Deepin Recovery. Viene incluido en Deepin 15.5. En la terminal se instala con `sudo apt-get install live-filesystem`.

Deepin Recovery se accede en el menú de arranque.

{% include imagen source="screenshot/deepinrecovery3.png" alt="Deepin Clone en Deepin Recovery." %}

## Lectura adicional
* [Deepin Recovery]({{ site.url }}{{ site.baseurl }}/deepin/deepin-recovery)
