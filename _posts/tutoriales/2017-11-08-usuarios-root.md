---
date: 2017-11-17
type: Document
title:  "Usuarios y Root"
description: "Desde las cuentas corrientas hasta los permisos de adminsitrador"
tags:
    - deepin-tutoriales
    - usuarios
    - permisos
    - administrador
---

En tenemos Deepin usamos los usuarios. Aquí te explicamos como gestionar en la computadora.

## Qué es un usuario
Es aquella cuenta que contiene un trozo de la información de la computadora. Dicha información incluye a sus documentos, aplicaciones y contenido privado.

### Administrar cuentas
Para gestionar cuentas es necesario tener los permisos de administrador en la sección "Cuentas" del Centro de control. Para crear una cuenta basta pulsar el botón correspondiente.

## Qué es el permiso de administrador o Root
Es el usuario que tiene el derecho de modificar los componentes del sistema. Las distribuciones Linux lo incluyen de forma obligatoria.

Para usar la cuenta root, no es necesario ingresar como un usuario aparte. Al ingresar programas críticos, por un breve periodo de tiempo, aparecerá un cuadro de texto para ingresar la contraseña correspondiente. En caso que uses de la [terminal]({{ site.url }}{{ site.baseurl }}deepin/dudas-terminal/), debes anteponer la palabra `sudo`.

Más detalles: [Manual]({{ site.url }}{{ site.baseurl }}/deepin/usuarios-root/)

### Contraseña
La cuenta root debe tener una contraseña. Puedes cambiar desde el centro de control u ordenando en la terminal `passwd` y escribir dos veces la nueva contraseña.

`sudo passwd`



### Otros detalles
Si al instalar por primera vez, te olvidaste la contraseña recurre [al tip]({{ site.url }}{{ site.baseurl }}deepin/recuperar-usuario/). Si quieres gestionar los permisos recurre al [otro tip]({{ site.url }}{{ site.baseurl }}deepin/permisos-usuario/).

## Lectura adicional
* [Hipertextual: Superusuario en Linux](https://hipertextual.com/2015/10/superusuario-en-linux)
* [Dudas sobre la terminal]({{ site.url }}{{ site.baseurl }}deepin/dudas-terminal/)
