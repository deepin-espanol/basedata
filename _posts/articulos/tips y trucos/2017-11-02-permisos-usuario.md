---
date: 2017-11-17
type: Document
title:  "Gestionar permisos de usuario"
description: "Quiénes pueden modificar el equipo, para impedir instrusos"
tags:
    - deepin-tips y trucos
    - root
    - password
    - acceso
---

Este es un aporte para cambiar las credenciales del usuario y de [administrador]({{ site.url }}{{ site.baseurl }}/deepin/usuarios-root/). Recuerda que la contraseña es indispensable para iniciar sesión. Si quieres evitar que intrusos accedan a Deepin, tienes esta opción.

## Mediante GNOME System Tools
Visita [Usar GNOME System Tools]({{ site.url }}{{ site.baseurl }}deepin/gnome-systemtools/).

## Mediante la terminal
Para conceder al otro usuario los permisos de superadministrador:
1. Ejecuta `sudo visudo`, tendrás el archivo `sudoers`
2. Ir a la línea `root    ALL=(ALL:ALL) ALL`
3. Escribir una nueva línea de esta manera `[nombre usuario]    ALL=(ALL:ALL) ALL`

## Fuente
* [Slimbook](https://slimbook.es/tutoriales/linux/86-anadir-usuario-al-fichero-sudoers)


## Lectura adicional
* [Dudas sobre la terminal]({{ site.url }}{{ site.baseurl }}/deepin-faq/).
