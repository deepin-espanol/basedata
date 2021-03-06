---
type: Document
date: 2017-11-17
title: "Editar desde Atom"
description: "La forma más sencilla de añadir publicaciones sin rodeos"
set: tutopost
set_order: 4    
tags:
    - deepin-aspectos técnicos
    - tutopost
---

Te mostramos en unos pasos que puedes hacer para perfeccionar este protal web. Necesitarás conocer un poco el funcionamiento y sentido común.

Esta página es un extracto de la serie de tutoriales, <a href="/tutopost">Tutopost</a>, para desarrollo en Jekyll

## Paso

1. Instala ["Atom"]({{ site.url }}/deepin/atom/) desde Deepin Store.
2. Id a las preferencias (ubicado en el menúEditar)
3. Id a Instalar "import"
4. Una vez instalado, realiza el comando Crtl + I
5. Escribe el sitio web "https://github.com/deepin-espanol/deepin-espanol.github.io.git"
6. Una vez clonado, comprueba si está abierto la carpeta desde el explorador de archivos
7. Ya está listo

## Crear un post

1. Id a la carpeta "post"
2. Seleccionar una de las subcarpeta, acorde al tema que vas a tratar
3. Duplica un post con el botón secundario
4. Establece un nombre tipo "2000-12-31-nombre.md"
5. Reemplaza los datos como "title", entre otros
6. No olvides establecer la categoría que viene a ser el nombre de carpeta.

## Añadir una imagen
1. Selcciona la carpeta "images"
2. Ir a la opción "show in file manager"
3. Añade una imagen (solo imágenes ligeras)

## Realizar un cambios

1. Marca los cambios (stages) abriendo el panel git (desde Packages).
2. Marca a todos (Stage all)
3. Añade una descripción.
4. Haz commit.

## Sincronizar
Para enviar cambios:
1. Id al icono de la flecha arriba (en la parte inferior).
2. Selecciona Push.

Para recibir cambios:
1. Id al icono de la flecha arriba (en la parte inferior).
2. Selecciona Pull.

## Imágenes
{% include imagen source="screenshots/atom.png" alt="Captura de Aton." %}
{% include imagen source="screenshots/import.png" alt="Captura de Atom." %}

## Lectura adicionales
* ["Git en Atom"]({{ site.url }}/deepin/gitatom/)
