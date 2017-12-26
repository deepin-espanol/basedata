---
date: 2017-11-17
type: Document
title:  "Corregir problema del kernel de VirtualBox"
description: "Extaído del foro de Deepin"
tags:
    - deepin-tips y trucos
    - driver
    - nvidia
    - boot
---
En esta página te enseñamos a corregir un error en el núcleo de [VirtualBox]({{ site.url }}{{ site.baseurl }}/deepin/virtualbox/). Está relacionado con la instalación de Windows 10 en Deepin OS.

~~~
The VirtualBox Linux kernel driver (vboxdrv) is either not loaded or there is a permission problem with /dev/vboxdrv. Please install virtualbox-dkms package and load the kernel module by executing.
~~~

## Pasos

Realizamos estas actividades desde la terminal, instalando el paquete `virtualfox-dkms` y modificando el núcleo:

~~~
sudo usermod -G vboxusers -a root
sudo apt-get install linux-headers-`uname -r`
sudo apt-get install virtualbox-dkms
sudo dpkg-reconfigure virtualbox-dkms
sudo modprobe vboxdrv
~~~

## Lectura adicional
* [Foro de Deepin](https://bbs.deepin.org/forum.php?mod=viewthread&tid=37873)
