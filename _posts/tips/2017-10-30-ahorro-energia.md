---
date: 2017-11-17
type: Document
title:  "Ahorrar energía en Deepin (optimizar en laptop)"
description: "Sacando provecho del ahorro energético en computadoras portátiles"
tags:
    - deepin-tips y trucos
    - fix
    - dialogo
    - apps
---

Este es un aporte para usar los servicios de ahorro de energía en Deepin. Algunos de ellos no vienen incluidos y se instalan por separado.

## Servicio TLP
Esta herramienta cumple con estos propósitos:
* Ajustar el núcleo y la potencia en portátiles;
* Administrar la energía y la alimentación de los discos duros;
* Ahorra datos en conexiones inalámbricas y la tarjeta de sonido;
* Desactivado de periféricos como Wifi, Bluethoot y pantalla;
* Calibra la batería.

### Pasos
1. Para evitar conflictos comprueba si tienes instlado `laptop-mode-tools`
  - Puedes desinstalar este paquete
2. Instala el servicio `sudo apt install tlp`
3. Ejecuta `sudo tlp start`

## Powertop
Esta herramienta es similar a TLP. Aunque pensado en el dianóstico.

Se instala con `sudo apt install powertop`. Y se ejecuta con `sudo powertop`. Si quieres guardar una copia del registro, antes de iniciar usa `sudo powertop --html=powertop.html`.

## Fuente
* [Rootear](https://rootear.com/ubuntu-linux/mejorar-consumo-ubuntu)
* [Ubuntu Leon](http://www.ubuntuleon.com/2014/01/exprime-hasta-el-ultimo-electron-de-la.html)

## Lectura adicional
* [Código fuene TLP](https://github.com/linrunner/TLP).
* [Sitio web Powertop](https://01.org/powertop)
* [Código fuene PowerTop](https://github.com/fenrus75/powertop).
* [Cambiar el núcleo de Linux]({{ site.url }}{{ site.baseurl }}/tips/kernel/)
