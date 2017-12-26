---
date: 2017-11-17
type: Document
title:  "Uso de otros respositorios"
description: "Añade otros repositorios para instalar aplicaciones (con advertencias)"
tags:
    - deepin-aspectos técnicos
    - repositorio
    - espejo
    - terceros
---

Esta página contiene una lista de **otros repositorios** para usar en Deepin. Si quieres usar un respositorio oficial, visita [la página Espejos]({{ site.url }}/deepin/espejos/) y [la lista repositorios oficiales]({{ site.url }}/deepin/mirror/).

Nota: **Usa los respositorios con cuidado**. Algunos de ellos pueden romper el sistema operativo, haciéndolo inestable.

## Añadir un respositorio
Puedes añadir uno creando un archivo en `etc/apt/sources.list.d/nombredelarchivo.list`

## Otros repositorios
### Spotify
* [http://repository.spotify.com](http://repository.spotify.com).
  - Viene incluido como `etc/apt/sources.list.d/spotify.list`
  - Más información: [Wiki de Debian](https://wiki.debian.org/spotify)

### Debian
* Visita [este repositorio](http://linux.dell.com/repo/community/ubuntu/).
  - Considera usar la última versión de Debian si es posible.
  - Más detalles: [Wiki de Debian](https://wiki.debian.org/DebianRepository)

### Dell
* [http://linux.dell.com/repo/community/ubuntu/](http://linux.dell.com/repo/community/ubuntu/).
  - Considera usar la última versión de Debian si es posible.

## Archivo llave
Cada repositorio necesita un archivo para certificar que el respositorio no esté falsificado. Ese se conoce como llave y está en archivos gpg (GNU Privacy Guard).

Fuente: [debian-handbook.ingo](https://debian-handbook.info/browse/es-ES/stable/sect.package-authentication.html)
