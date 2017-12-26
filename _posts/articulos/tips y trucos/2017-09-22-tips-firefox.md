---
date: 2017-11-17
type: Document
title:  "Trucos para Firefox"
description: "Herramientas para optimizar o mantener estable al navegador"
tags:
    - deepin-tips y trucos
    - web
    - archivos
    - gestor
    - explorador
    - fotos
---

Firefox es un navegador pensado en la personalización y sutileza. En esta página te damos algunas formas de seguir optimizarlo. También de añadir otras funciones para convertir en un multiusos.

## Primero: Si quieres migrar o sincronizar datos
Para migrar los datos de Chrome o similares a Firefox, usa la opción "Importar y Respaldar" de la ventana Catálogo.

Si quieres sincronizar el historial, las contraseñas y marcadores utiliza Firefox Sync. Requiere registro.

## Segundo: Usando extensiones

Si quieres extensiones optimizadas para Firefox te mostramos una lista de las más importantes:

{% include imagen source="screenshots/firefoxaddons.png" alt="Página de extensiones en Firefox." %}

### Extensiones de seguridad
  - [Privacy Badget](https://addons.mozilla.org/es/firefox/addon/privacy-badger17/), bloqueador de cookies no deseadas;
  - [Cookie Autodelete](https://addons.mozilla.org/es/firefox/addon/cookie-autodelete/), autoborrado de cookies (para cabinas públicas);
  - [HTTPS Everywhere](https://www.eff.org/https-everywhere), activa el cifrado de sitios web lo más pronto;
  - [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/), desde la versión 2, protección contra el rastreo de las CDN al descargar contenido de la web;
  - [Bitwarden](https://addons.mozilla.org/es/firefox/addon/bitwarden-password-manager/), almacenamiento de datos, de [código abierto]({{ site.url }}{{ site.baseurl }}deepin/bitwarden) y hospedable en servidores propios;

### Extensiones de productividad
  - [Private Video Downloader](https://addons.mozilla.org/es/firefox/addon/private-video-downloader/), descarga de multimedia;
  - [Bulk Media Downloader](https://addons.mozilla.org/es/firefox/addon/bulk-media-downloader/), descarga de contenido en lote;
  - [Language Tool](https://addons.mozilla.org/es/firefox/addon/languagetool/), corrector de escritura;
  - [Language Tool](https://addons.mozilla.org/es/firefox/addon/languagetool/), corrector de escritura;
  - [Dark Mode](https://addons.mozilla.org/es/firefox/addon/dark-mode-webextension/?src=userprofile), modo oscuro, recomendamos Dark Transparent para mejor visibilidad con las páginas web
  - [Kiwix](https://addons.mozilla.org/es/firefox/addon/kiwix-offline/?src=search), contenido de Wikipedia sin conexión a Internet (requiere más de 2 GB de espacio libre)

### Extensiones de filtrado
  - [uBlock Origin](https://addons.mozilla.org/es/firefox/addon/ublock-origin/), bloqueador de contenidos no deseados;
  - [Filtro de EasyList+EasyPrivacy](https://easylist.to/), archivo de poco peso para bloquear contenidos no deseados (<a href="abp:subscribe?location=https%3A//easylist-downloads.adblockplus.org/easyprivacy%2Beasylist.txt&title=EasyPrivacy%2BEasyList">suscribirse</a>);
  - [Otras suscripciones](https://adblockplus.org/subscriptions) para agregar a uBlock (opcional);

### Notas
  * Esta lista menciona extensiones son compatibles o reemplazables en [Firefox 57](https://docs.google.com/spreadsheets/d/1TFcEXMcKrwoIAECIVyBU0GPoSmRqZ7A0VBvqeKYVSww/edit#gid=0).
  * Si usas HTTPS Everywhere con Decentraleyes, recomendamos [desactivar algunos sitios web](https://decentraleyes.org/configure-https-everywhere/).
  * Si quieres usar una alternativa en conexiones seguras prueba [Smart HTTPS](https://addons.mozilla.org/es/firefox/addon/smart-https-revived/), su mecanismo es distinto a Everywhere pero no es compatible con Decentraleyes.
  * Como alternativa a Bitwarden, puedes usar Encryptr para almacenar las llaves de forma local.
  * Swift Selection Search tiene varias opciones para buscar en un clic. Si deseas añadir más buscadores usa los ajustes en la página Complementos y sigue este ejemplo:
    - Nombre: Startpage
    - URL: `https://www.startpage.com/do/dsearch?query={searchTerms}&cat=web&pl=opensearch&language=espanol`
    - Icono: `https://www.startpage.com/favicon.ico`

## Tercero: Consejos de optimización
* Para gestionar mejor los recursos, deja activa en las Preferencias "Usar configuración de rendimiento recomendada". Si no, juega con la cantidad que necesitas. Si usas extensiones de filtrado, revisa que opciones consumen memoria RAM para desactivarlas (ver más abajo).
* Si no puedes ver vídeos en línea es porque necesitas activar [DRM](https://support.mozilla.org/es/kb/ver-contenido-drm-en-firefox). Está en la página Ajustes > Contenido.
* La página no puede cargar por usar una versión HTTPS antigua, edítala desde `about:config` > `network.http.spdy.enforce-tls-profile` y establece a `false`
* En caso que tu navegador no puede iniciar de varias formas prueba con la más drástica. Ingresa a `Ayuda` > `Información para solucionar problemas`, haz clic en `"Referescar/Reiniciar Firefox" y acepta. Ten en cuenta que Firefox eliminará extensiones y restaurará la configuración original sin perder otro tipo de información (historial, contraseñas...).

{% include imagen source="screenshots/firefox57.png" alt="Firefox 57." %}

### Memoria RAM en extensiones de filtrado
* Las extensiones de filtrado aplican "filtros comésticos" para quitar zonas en caso que el filtro tradicional no funcione correctamente. En equipos reducidos, recomendamos desactivar en la pestaña principal, la sección "Comportamiento predeterminado" por su alto consumo de memoria RAM.
* Otra forma, es activando "Desactivar filtros cosméticos genéricos" para ahorrar memoria RAM (en la imagen), aplicando en casos especiales. Está ubicada en la pestaña "Filtros de terceros".

{% include imagen source="screenshots/filtrocosmetico.png" alt="Activando la tercera opción en los ajustes de uBlock." %}

## Actualizaciones
Firefox se actualiza desde la Deepin Store. Si quieres actualizar manualmente puedes conseguir los paquetes del [sitio web de Debian](https://packages.debian.org/sid/firefox-l10n-es-es). Para la versión 57, requiere [Libnss 3](https://packages.debian.org/sid/amd64/libnss3/download).

## Lectura adicional
* [Artículo en Genbeta](https://www.genbeta.com/paso-a-paso/como-pasar-de-google-chrome-a-firefox-quantum-sin-morir-en-el-intento)
* [Ayuda de Firefox](https://support.mozilla.org/es/kb/ajustes-de-rendimiento-de-firefox)
