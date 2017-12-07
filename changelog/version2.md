# Ayuda de Deepin
Esta lista muestra los cambios realizados en esta página en la versión 1 (hasta 29 de noviembre de 2017).

## Detalle importante
* Hay 183 artículos en 12 categorías.
* Hay más de 30 imágenes.

## Presentación en el sistema operativo
El set de sistema operativo (alias básico), recibe un rediseño:
* Requisitos: Para preparar antes de instalar el sistema
* Download: La página de descargas de la ISO
* Update: Actualizar el equipo
* Source: Código fuente
* Post instalación: Para ver las novedades, los manuales y las aplicaciones

## Imágenes
* Añadido imagen en layout
* Para añadir recomendamos usar `{ % include imagen source="foto.jpg" alt="Descripción de imagen" %}`

### Carga más disimulada
* Añadido [Lazyload](https://github.com/ressio/lazy-load-xt). Oculta la imagen mientras está cargando.
  - es necesario añadir class="lazy" (en pruebas)

### Vídeos
* Adoptado el nuevo formato de vídeo

### Tutopost
* Añadido post sobre Markdown e incluido en el set

### Comentarios
* Se añadió el soporte para los comentarios de Google+. Para eso se añadió una página especial con cierto código explicado en [webjeda.com](https://blog.webjeda.com/jekyll-comments/).
* Los comentarios de `disqus` están en una página aparta para modificar su código.
* Para activar la caja es necesario añadir `show_comments` en el post correspondiente.

### CSS
* Se dividió en dos archivos CSS: Start (en Head) y Screen (al final)
* Funciona con hojas de estilos dinámicos (CASS)
* Nota: Para evitar errores en la CI, es recomendable escribir en caracteres en inglés (sin "ñ", tildes, "¿", "¡" o similares)

#### Encabezado
* Añadido id="main-header"
* Añadido SCSS main-header
* Añadido una línea al body, padding-top: 70px
* Arreglo al CSS

#### Menú
* El menú es ahora estático para fácil navegación
* Interfaz amigable para los móviles
* Los comentarios están en los archivos correspondientes
* Compatible con pantallas de 200px de alto mínimo (relojes y equipos de gama baja)

#### Compartir contenido
* Mejoras en el logo de Telegram, incluyendo fondo
* Mejoras en la edición de posts

## Licencia
Los posts son dualmente licenciados bajo CC-BY-SA y GFDL.

## Agradecimientos
* Parte del código esta tomada de [Feeling Responsive](http://phlow.github.io/feeling-responsive/)
  - Marginshortcut.csss
  - redirect.html (layout)
