# Ayuda de Deepin
Esta lista muestra los cambios realizados en esta página en la versión 1 (hasta 29 de noviembre de 2017).

## Cambio en index.html
Se añadió dos líneas de if en index.html. El resultado es mostrar el título sin el "deepin-", que viene a ser la "categoría" principal:

```
<section class="categories">
	{% assign tags = site.tags | sort %}
	{% for tag in tags %}
		{% assign name = tag[0] %}
		{% assign posts = tag[1] %}
		{% assign size = posts | size %}
		<!--INICIO IF CATEGORÍA-->
		{% if tag[0] contains "deepin-" %}
		<section class="category">
			{% assign cat-name = name | replace: "deepin-", " "  | strip %}
				<h3>
[...]
			</ul>
		</section>
		{% endif %}
		<!--END IF CATEGORÍA-->
	{% endfor %}
</section>
```

## Cambios en posts
* Los posts son escritos en Markdown, incluye fecha y descripción. Se puede establecer como `Type:Document` para documentos o `Type:Video` para vídeos.
* Cambiado el permalink: /deepin/:title/. La razón porque se usa `/deepin/` es para centrarnos en el sistema operativo.

### Categoría
* Para reconocer que es una categoría, lleva como etiqueta `deepin-categoria`
	- Se encuentran en `_posts` y están clasificadas en carpetas
* Para establecer la categoría y los artículos destacados.
	- Editar el archivo Category en `_data`
* Para las categorías permitidas ver Notas

### Enlaces
* Los enlaces por defecto llevan `{{ site.url }}{{ site.baseurl }}/deepin/nombredelarticulo`
* Las imágenes llevan el signo de admiración antepuesto. Al final se añade {: screenshot} para encajar a la página.
	- Ejemplo: `![Texto alternativo]({{ site.url }}/images/nombredelaimagen.jpg)`

### Serie de posts
* Las series de posts son pasos para que el usuario o desarrollador use Deepin. Se distinguen a las categorías y ofrece pasos enumerados.
* Se establecen en la página del post `set: ` y `set_order: `
	- Ejemplo: `set: importante` y `set_order: 1`
* Para añadir un nuevo set es necesario añadir un archivo en la carpeta `_sets`

## Traducción al español
* Cambios en Index, Layouts, y otros archivos del inglés.

## SEO
* Añadido en include "_favicon" y "_redirecturl"
* En config se añadió la línea "touch-icon"
* Añadido Telegram en `_includes > social_icons`

## Paginación
* Cambiado a `jekyll-paginate-v2`

## Navegacion
* Está en `layout` > `navigation`

## Galería de software
* Ahora usa las etiquetas `dsoftware` y `desoftwares` en lugar de `template`.
* Se cambió la descripción
* La carpeta para añadir el software se encuentra en `_dsoftwares`

## Cheat sheet
* Contiene algunas palabras para la terminal para memorizar
* Se guardan en la carpeta "_cheat_sheet"
* Los enlaces se añaden en `_data` > `cheat-sheet-links`
