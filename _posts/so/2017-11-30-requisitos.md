---
type: Document
title: "Requisitos para instalar"
description: "Descarga en portales y espejos web"
tags:
    - deepin-sistema operativo
    - iso
date: 2017-11-16
set: básico
set_order: 1
resources:
  - name: SourceForge
    link: https://sourceforge.net/projects/deepin/
---

Antes de usar Deepin en algún dispositivo, te mostramos los requisitos mínimos y recomendados para computadoras de mesa y portátiles.

## Requisitos para computadoras
Antes de usar Deepin tu equipo debe estar preparado con estos requisitos:
* **10 GB** de espacio libre en el disco duro SATA;
* Microprocesador de **64 bits**;
  - Ejemplo: Intel Pentium IV de 2GHz
* 2 GB de memoria RAM (DDR3);
* Tarjeta gráfica integrada para monitor;
* Teclado y ratón;

Si deseas que Deepin funcione mejor con efectos de ventana:
* **30 GB** de espacio libre en el disco duro SATA;
* Microprocesador de **64 bits** y multinúcleo;
  - Ejemplo: Intel i3/i5/i7
* 4 GB de memoria RAM (DDR3, DDR4 o superiores);
* Teclado y ratón, o dispositivo táctil;
* Tarjeta gráfica dedicada;
  - Compatible con Intel, NVdia o AMD
  - Recomendamos usar conexión HDMI para mejor calidad

## Aclaraciones
### Memoria RAM
Los equipos más recientes soportan más memoria RAM ya que son de 64 bits de arquitectura. En caso que tengas problemas con la versión original, instala su versión Arch llamado [Manjaro Deepin](https://manjaro.org/category/community-editions/deepin/) que soporta 32 bis también (y es recomendado para esa arquitectura).

### Disco duro
Si el sistema de particiones del disco duro es GPT no lo instales. Usa el gestor de particiones y crea una nueva tabla MBR para evitar problemas.

### Tarjetas de vídeo
Para los gráficos, consulta [la página "Tarjetas de vídeo"]({{ site.url }}{{ site.baseurl }}/deepin/videocard/).

### Computadoras de bajos recursos
Debes desmarcar la opción "Efectos de ventana activados", está en el centro de control.

### Portátiles
Para las portátiles, te sugerimos reducir el tiempo para suspensión o usar [herramientas para ahorro de energía]({{ site.url }}{{ site.baseurl }}/deepin/ahorro-energia/).
