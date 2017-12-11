---
type: Document
title:  "Qué hacer si tengo problemas al actualizar desde la termianl"
description: "Un servicio para proveer contraseñas"
tags:
    - deepin-faq
    - terminal
    - dudas
    - paquetes
    - dependencias
---

Te mostramos un listado de problemas relacionados a las actualizaciones de la terminal. Por defecto es `apt update`.

#### Veo el mensaje "Dependencias incompletas"
Si hay problemas puedes revisar en la aplicación Synaptic o realizando comandos de comprobación e instalaciones paquetes:

~~~
sudo apt-get update
sudo apt-get check
sudo apt-get -f install
~~~

Si los problemas persisten, revisa [la sección Dudas técnicas]({{ site.url }}{{ site.baseurl }}/deepin/dudas-tecnicas#conflicto)


#### Dice que el archivo está sources.list protegido
Eso se debe a que las actualizaciones centro de control están haciendo el trabajo de actualizar. Reinicia el equipo (método seguro) o ejecuta en la terminal

~~~
sudo rm /var/cache/apt/archives/lock & sudo rm /var/lib/dpkg/lock & sudo rm /var/lib/apt/lists/lock
~~~

Nota: Este código usa `rm` para borrar los archivos `lock` de las tres carpetas.

#### Me avisó que hay una nueva configuración disponible
Está expresada en oraciones como "El distribuidor del paquete ha publicado una version actualizada". Recomendamos aceptar los nuevos cambios (en general, escribir ´y´ y pulsar ´Enter´). Más detalles en [la sección Tips]({{ site.url }}{{ site.baseurl }}deepin/actualizar-conf-paquetes).

#### Hay paquetes huérfanos
Este comando sirve para eliminarlos.
~~~
sudo apt autoremove
~~~

#### Veo el mensaje "Sub-process /usr/bin/dpkg returned an error code(1)"
Se debe a que la cola de instalaciones está en pausa, vulve a ejecutar:

~~~
sudo dpkg –configure -a
~~~

#### No puedo instalar porque los paquetes están corruptos
Este comando sirve para limpiar la caché.
~~~
sudo apt-get clean
~~~


## Lectura adicional
* [Blog de jcsis](https://jcsis.wordpress.com/2016/04/28/solucionar-el-problemas-de-dependencias-en-ubuntu-o-debian/)
* [ComputerWegne](https://computernewage.com/2015/02/22/como-instalar-aplicaciones-en-ubuntu-desde-la-terminal-con-apt-apt-get-y-aptitude/)
* [Página en Debian](https://www.debian.org/doc/manuals/aptitude/ch01s02.es.html)
* [comoinstlarlinux.com](https://www.comoinstalarlinux.com/como-solucionar-problemas-al-instalar-o-actualizar-paquetes-en-ubuntu-o-linux-mint/)
