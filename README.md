# Ayuda de Deepin

Ayuda de Deepin (en nombre clave "Basedata") es una colección de información relevante sobre el sistema operativo. Está desarrollado por Deepin en Español.

![Deepin dsoftware screenshot](images/_screenshot.png)

**Deepin en acción** está diseñada con el tema Base [CloudCannon](http://cloudcannon.com/) ([información](https://learn.cloudcannon.com/jekyll-dsoftwares/) y [documentación](https://learn.cloudcannon.com/)).

## Lo que contiene

* Aplicaciones
* Tutoriales
* Dudas frecuentes
* Tips y trucos
* Y más...

Contienen algunas mejoras:
* Compartir en redes sociales (como Telegram)
* Editar posts
* Página de inicio dividida en artículos y vídeos
* Traducción
* Buscador integrado

## Desarrollo
Base está construído sobre [Jekyll](http://jekyllrb.com/) versión 3.4.3, con soporte para nuevas actualizaciones.

### Emular la página en la PC
Puedes instalar el servidor con [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Ejecuta los comandos `jekyll`:

~~~bash
$ bundle exec jekyll serve
~~~

### Edición
Usamos Gitlab para subir parches a la página.

### Posts
* Los detalles del post están en la carpeta Notas
* Puedes empezar con una plantilla al crera un post en una carpeta específica `_posts/_defaults.md`.
* Recuerda seleccionar la categoría adecuada para el post

### Serie de posts
Esa catracterística es opcional.
* Añade un nuevo documento a la carpeta `sets`.
* Establece el `title` (título) y `description` (descripción).

Para añadir un tutorial/post to a la serie:
* Añade un `set` como front matter (encabezado) y con el nombre establecido en la carpeta sin la extensión `.md`. Por ejemplo si mi se está en  `_sets/getting-started.md` añado la línea al front matter: `set: getting-started`.
* Añade el `set_order` para ordenar la serie debajo de la línea ya mencionada.

### Navegación
* Se ubica en la sección *Data* / *Navigation*.

### Pie
* Se ubica en la sección *Data* / *Footer*.

## Licencia

Licenciado bajo Creative Commons Atribution Share-Alkine 4.0.

### Agradecimientos

* [SVGOMG](https://jakearchibald.github.io/svgomg/) para comprimir imagenes
* [Simpleicons](https://simpleicons.org/icons/telegram.svg) para el logo de Telegram
* [MethodDraw](http://editor.method.ac/) para editar el archivo vectorial en línea
