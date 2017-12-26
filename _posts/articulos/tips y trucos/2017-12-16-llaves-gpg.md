---
date: 2017-11-17
type: Document
title: "Añadir o actualizar llaves de repositorios"
description: "Solucionando los problemas de instalación"
tags:
  - deepin-tips y trucos
  - llaves
  - seguridad
  - fix
---

Al añadir [repositorios]({{ site.url }}{{ site.baseurl }}/deepin/otros-repositorios) (por ejemplo, al añadir el de [Spotify]({{ site.url }}{{ site.baseurl }}/deepin/spotify), se añaden automáticamente un archivo para verificar la integridad del software. Pero si encuentras algún problema al no tener los archivos indicados, tenemos una solución.

## Pasos
1. Consigue los archivos (para los repositorios de Deepin son `deepin-pools-keyring.pgp` y `deepin-archive-keyring.pgp`)
2. Pega los archivos a `/etc/apt/trusted.gpg.d` (si el archivo es antiguo, reemplázalo)
3. Reinicia el equipo

## Comprobar si la llave existe
Desde la terminal puedes comprobar escribiendo `apt-key fingerprint`. Los resultados son de los archivos `deepin-pools-keyring.pgp` y `deepin-archive-keyring.pgp`, necesarios para los repositorios de Deepin:

~~~
/etc/apt/trusted.gpg.d/deepin-archive-keyring.gpg
-------------------------------------------------
pub   rsa2048 2014-12-16 [SC]
      6BDB FE94 72C9 961F 4C19  73A1 4259 56BB 3E31 DF51
uid           [ unknown] pkg-builder <pkg-builder@packages.linuxdeepin.com>
sub   rsa2048 2014-12-16 [E]

/etc/apt/trusted.gpg.d/deepin-pools-keyring.gpg
-----------------------------------------------
pub   rsa2048 2015-01-06 [SC]
      BE88 55B1 3076 E3A2 B66D  B296 820F 938D CBE6 D2D0
uid           [ unknown] debian-mirror (debian-mirror) <debian-mirror@linuxdeepin.com>
sub   rsa2048 2015-01-06 [E]
~~~

## Interfaz gŕafica
Si deseas, puede usar la intefaz gráfica de Synaptic o una aplicación especial (viene con el paquete `gui-apt-key`).

## Lectura adicional
* [Archivo sources.list]({{ site.url }}{{ site.baseurl }}/deepin/sources)
* [Wiki de Debian](https://wiki.debian.org/DebianRepository/UseThirdParty)
* [AskUbuntu](https://askubuntu.com/questions/31286/additional-keyrings-for-apt-in-trusted-gpg-d)
