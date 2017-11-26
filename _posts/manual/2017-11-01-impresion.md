---
date: 2017-11-17
type: Document
title:  "Configuración de pantalla en Deepin"
description: "Calibrando los monitores para tu escritorio"
tags:
    - deepin-manual de uso
    - impresion
    - configuracion
    - tinta
    - documentos
---

La impresión en Deepin funciona en miles de impresoras. Sin embargo, debes conocer qué tipo de impresoras puedes usar libremente o con ayuda de un controlador.

## Detalles

Esta guía esta diseñada para impresora con conexión USB.

### Herramientas
En la versión 15.4 tienes la "Configuración de impresión". Esta aplicación te indica que impresoras están lista y añade compatibilidad con dispositivos conectados en red local.

<div class="row">
    <div class="medium-12 columns t30">
    <img src="{{ site.urlimg }}system-config-printer.png" alt="Captura de la retroalimentación">
    </div><!-- /.medium-4.columns -->
</div>

También puedes instalar `apt install printer-driver-cups-pdf`.

### Pruebas
Puedes hacer una prueba [imprimiendo esta página]({{ site.url }}{{ site.baseurl }}/tips/colores-1/).

### Controladores
Dependiendo de la marca, los siguientes enlaces contienen los controladores:
* [Canon en la wiki de Debian](https://wiki.debian.org/PrinterDriver/Canon/)
* [Sitio web HP](https://developers.hp.com/hp-linux-imaging-and-printing)
* [openprinting.org](http://www.openprinting.org/printers), en esa página puedes comprobar otras marcas y modelos y sugerir que controlador instalar.

### Lectura adicional

* [Dudas de controladores]({{ site.url }}{{ site.baseurl }}/anexos/dudas-drivers/)
