# Deepin en acción

## Usar "deepin-" como categoría
Se añadió dos líneas de if en index.html:

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
* Para reconocer que es una categoría, lleva como etiqueta `deepin-categoria`
* Para establecer la categoría y los artículos destacados.
	- Editar el archivo Category en `_data`
* Cambiar a permalink: /deepin/:title/

## Traducción al español
* Cambios en Index, Layouts, y la carpeta en `_sets`

## SEO
* Añadido en include "_favicon" y "_redirecturl"
* En config se añadió la línea "touch-icon"

## Paginación
* Cambiado a `jekyll-paginate-v2`

## Cheat cheat
* Por defirnir
