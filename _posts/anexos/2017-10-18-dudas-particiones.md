---
type: Document
title: "Dudas técnicas sobre las particiones en Deepin"
description: "Ayuda para conocer el sistema de archivos y sus particiones"
categories:
    - anexos
tags:
    - dudas
    - particiones

---

En la *Comunidad Deepin* aclaramos que el sistema operativo  perfecto no existe. Buscamos que cualquiera conozca Deepin, como si fuera un vehículo o una ciudad.

En esta página respondemos las dudas relacionadas a las particiones en Deepin. Es un complemento a la página [Dudas frecuentes]({{ site.url }}{{ site.baseurl }}/anexos/dudas/). En general, para almacenar datos y documentos se emplean particiones EXT (análogos al NTFS de Windows).

Esta guía forma parte de una <a href="/dudas">serie de dudas frecuentes</a> para facilitar la comprensión a todos los usuarios y usuarias

<small markdown="1">[Ir al índice](#toc)</small>
{: .text-right }

## Preámbulo
### ¿Qué es una partición?
Una partición es un contenedor del disco duro que almacena datos. Las particiones pueden tener archivos del sistema o se apoyan de la caché para arrancar el sistema operativo.

Fuente: [Planeta Fedoraa](https://planetafedora.wordpress.com/acerca-de-particiones-y-puntos-de-montaje-tipos-de-formato-y-tamanos/)

<small markdown="1">[Ir al índice](#toc)</small>
{: .text-right }

### ¿Cuántas particiones puedo tener en mi disco duro?
Eso dependerá de la estructura de disco duro. Para eso necesitarás de un sistema para gestionar particiones llamada "tabla". Por defecto se usa MBR, Registro de arranque principal en inglés.

En esa tabla tienes un máximo de 4 contenedores llamadas "particiones primarias". De las cuales cada una puede dividirse en particiones lógicas.

Fuente: [Planeta Fedoraa](https://planetafedora.wordpress.com/acerca-de-particiones-y-puntos-de-montaje-tipos-de-formato-y-tamanos/)

<small markdown="1">[Ir al índice](#toc)</small>
{: .text-right }

### ¿Porqué usamos particiones EXT4?
En Gnu/Linux usamos el sistema de archivos extendido o EXT, de código abierto y libre de patentes. Fue presentado en 1992 con la primera versión de Linux. Un año después se implementaría su segunda versión para usar en particiones con varios giga-octetos (GB) de almacenamiento.

En 2008 se lanzaría la [versión 4](https://en.wikipedia.org/wiki/Ext4), abreviada EXT 4 con muchas mejoras. Theodore Ts'o es el encargado de desarrollar esa versión. Es estable, tiene menos posibilidad de fragmentarse, para particiones de hasta 16 terabytes y más de 4 mil millones de archivos cada uno.

Lejos de los detalles técnicos, el EXT4 es recomendable para particiones del sistema, documentos y SWAP ya que son fáciles de reparar, son rápidos de leer y reciben mejoras de rendimiento junto al núcleo Linux.

### ¿Puedo hacer una copia de seguridad de un partición?
Tienes dos opciones:
* Usando Deepin Clone, desde la versión 15.5. Recomendado.
* Usando los comandos de la terminal:
  * Para hacer una copia `dd if=/dev/xxx of=mbr.backup bs=512 count=1`
  * Para restaurar con dicha copia `dd if=mbr.backup of=/dev/xxx bs=512 count=1`
  * Nota: xxx representa la id del dispositivo, que puede ser hda, sda, o cualquier otro.

## Instalación de Deepin
### ¿Qué particiones habrán cuando instale Deepin?
Tienes de 2 a 4 particiones con sus respectivas unidades de montaje:
1. La primera partición lleva la unidad de montaje "/" y es la raíz del sistema operativo. Debe ocupar 10 GB o más.
2. La segunda con la unidad de montaje "/boot" en una partición aparte. Así gestionará el arranque del sistema (o varias de ellas). Ocupa entre 100 a 300 MB.
3. Continúa con "/home" para tu información en una partición separada (si deseas). Así podrás estar a salvo con tus documentos incluso si tu sistema sufre errores. Puedes establecer la cantidad que quieras, incluso el 90% de tu disco duro.
4. Por último tienes una partición opcional con la unidad "/swap" para el intercambio de datos. Esa opción es útil para hibernar el equipo.
5. Puedes elaborar más particiones con otros puntos de anclaje como "/opt" para datos de aplicaciones externas. Eso no es necesario.

### ¿Debo tener una partición de intercambio o SWAP?
Si tienes menos de 4 GB de RAM, es indispensable. Si pasas esa cantidad, no es obligatorio tener esa partición.

### ¿Puedo usar particiones de Windows con Deepin?
Sí, tal como menciona [el manual]({{ site.url }}/manual/dual-boot/).

### ¿La partición con la unidad de montaje "/" es el principal en Deepin?
Algo así. En Windows es el equivalente a C.

### ¿Puedo gestionar las particiones dentro de Deepin?
Sí. Con la aplicación [GParted]({{ site.url }}/apps/gparted/).

### ¿Cómo reparar una partición?
En motivos que el sistema no arranca correctamente, debes revisar si algunas particiones fueron dañadas. Al mostrar la pantalla con puro texto, usa la herramienta [fsck](https://es.wikipedia.org/wiki/Fsck) en la [terminal]({{ site.url }}/anexos/dudas-terminal/) y ejecuta `fsck /dev/sdXX -y`, por ahora comprobará algún daño y lo reparará.

En caso que no sepas qué partición reparar, sdXX viene a ser el número de partición, como sda1; en caso de otros discos duros reemplaza a hdXX. Por ejemplo, si la partición principal ("/") es sda1, ejecuta el comando `fsck /dev/sda1 -y`.

## Seguimos creciendo
Si aún no encuentras tu pregunta, usa el [Buscador]({{ site.url }}{{ site.baseurl }}/search/).

No olvides que estamos en [en Github](https://github.com/comunidad-deepin/comunidad-deepin.github.io).

{% include _improve_content.html %}
