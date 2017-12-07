---
date: 2017-10-02
type: Document
title: "Auditar Deepin"
tags:
    - deepin-técnico
    - seguridad
    - source
---

En Deepin en Español ayudamos a los usuarios a hacer de Deepin un sistema operativo transparente y un entorno seguro. Basta comprobar el [código fuente]({{ site.url }}{{ site.baseurl }}/deepin/source/). Te ofrecemos algunas heramientas.

## Considera que:
* Los servicios de terceros no desarrollados por Deepin deben auditarse por separado. Y dependen de otras licencias.
* Revisa otros detalles en [dudas técnicas]({{ site.url }}{{ site.baseurl }}/deepin/dudas-tecnicas/).
* Deepin usa una propia tienda de aplicaciones, para más detalles está [este tip]({{ site.url }}{{ site.baseurl }}deepin/mirror/).
* Estas prácticas buscan encontrar vulnerabilidades sin perder al contenido ético. No somos responsables por otras intenciones que no aportan la seguridad en esta distribución.

## Herramientas
### Errores de programación
* El [desbordamiento de búfer](https://es.wikipedia.org/wiki/Desbordamiento_de_b%C3%BAfer) es un error relacionado al software saturado de información. Esa información puede aplicarse con un archivo que "engaña" a la aplicación.

### Conexiones no deseadas
* [YASAT](https://github.com/montjoie/yasat): Auditar la seguridad de algunos componentes de Debian.
* [Kali](https://www.kali.org/): Seguridad en las redes.

### Ingeniería inversa
* Otra forma es usando scripts, para eso debemos "motivar al usuario" a conseguir los derechos de administrador.
* El más conocido es el script con `rm - rf` para borrado drástico con todos los archivos.

## Reportes
* [CVE Details](http://www.cvedetails.com/vulnerability-list/vendor_id-16338/Deepin.html)
* [Bugzilla](https://bugzilla.deepin.io/)
* Información sobre desbordamiento de búfer:  [DesdeLinux](https://blog.desdelinux.net/vistazo-la-explotacion-vulnerabilidades/#Punteros), [UNAX](https://revista.seguridad.unam.mx/numero23/uno-de-los-cl-sicos-buffer-overflow)
