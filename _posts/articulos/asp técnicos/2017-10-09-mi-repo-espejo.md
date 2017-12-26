---
date: 2017-11-17
type: Document
title:  "Elaborar un repositorio espejo"
description: "Consigue una copia del repositorio Deepin para proveer a otros usuarios"
tags:
    - deepin-aspectos técnicos
    - repositorio
    - espejo
    - instalacion
---

Los repositorios son indispensables para Deepin. Contienen los componentes necesarios para instalar aplicaciones y actualizar el equipo. Tenemos [un listado según el lugar que residas]({{ site.url }}/deepin/espejos/).

En está página te explicamos como elaborar uno propio para uso particular o público. Cabe señalar, que no es para las computadoras sino para servidores con gran ancho de banda para ese fín. Si brindas muchísimo ancho de banda puedes colaborar con la lista oficial de Deepin.

Aclaramos que el repositorio original es aquello que tiene la información original. Cuando un servidor está "haciendo una copia" del original, consideramos como un "espejo".

## Requisitos
Los requisitos son flexibles. El servidor debe ser GNU/Linux operativo, con una buena capacidad de almacenamiento y capacidad de procesar varias peticiones por segundo. La seguridad HTTPS es recomendada para mejor seguridad.

### Sincronización
La sincronización con los repositorios de China se muestra en la siguiente tabla:

<table>
  <caption>Sincronización con los repositorios</caption>
  <colgroup>
    <col span="1" style="width: 70%;">
    <col span="1" style="width: 30%;">
      </colgroup>
  <thead>
    <tr>
      <th>Instrucción</th>
      <th>Espacio requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Repositorio de paquetes</td>
      <td>275GB a más</td>
    </tr>
    <tr>
      <td>Repositorio de ISO</td>
      <td>50 GB a más</td>
    </tr>
    <tr>
      <td>Recomendado</td>
      <td>400 GB a más</td>
    </tr>
  </tbody>
</table>

Nota: Considera que a mayor velocidad de descarga tenga el servidor, más rápido es la sincronización. Puedes hacer una pequeña fórmula para caluclar el tiempo al sincronizar el repositorio original al servidor espejo:

~~~
Peso del repositorio (Megabytes) = Peso del espejo (Gigabytes) * 1024
Velocidad de descarga (Megabytes por segundo) = Velocidad de descarga (Megabits por segundo) / 8
Tiempo restante (segundos) = Peso del espejo (Megabytes) / Velocidad de descarga (Megabytes por segundo)
Ejemplo: 150000 (Peso del repositorio) / 200 (Velocidad de descarga) =  750 segundos (casi 12 minutos)
~~~

### Velocidad
La cantidad de ancho de banda dependerá de las exigencias de los usuarios al descargar el servicio. Destacaremos dos, ping y ancho de banda.
* El ping es el equivalente a "latencia" o "tiempo de respuesta". Eso se comprueba al descargar un paquete entre PC y servidor.
  - La latencia ideal es inferior a 200 milisegundos por petición.
  - Si el servidor deja de funcionar, ya no hay latencia. Por lo tanto, está "caído".
* El ancho de banda es el limite de la velocidad de subida y bajada. Debes considerar ese punto, a más usuarios más ancho de banda necesitarás para que la descarga sea óptima.
  - Para evitar problemas por lentitud, no uses la computadora personal como servidor.
  - Para compartir el espejo en un grupo reducido (uso personal, familiar, de aulas, etcétera) recomendamos un servidor NAS con `rsync` y una conexión de area local razonable (no confundir con la conexión a Internet para descargar la copia del repositorio).
  - El mínimo de velocidad recomendado es de 1 Gigabit para cada 1000 usuarios: 1 Mb/s o 256 KB/s (Kilobytes) a cada usuario.

## Pasos
1. Establece el dominio web como repositorio solo para Deepin
   - Ejemplo: `https://deepin.mirepositor.io`
2. Instala `rsync`
   - Desde la terminal: `sudo apt install rsync`
3. Ejecuta `rsync` para sincronizar los respositorios
  - rsync -av –delete-after rsync.deepin.com::deepin/ /var/www/deepin/
  - rsync -av –delete-after rsync.deepin.com::releases/ /var/www/deepin-cd/
4. Para automitizar el proceso recomendamos usar el proceso ´Cron Job´.
5. No añadas otros paquetes al espejo. Para eso usa repositorios aparte.

Nota: Estos pasos aplican a las distritos optimizadas para usar en servidores.

## Lectura adicional
* Si deseas cooperar con la lista de espejos recomendados para Deepin, envia un mensaje a support@deepin.org (en inglés).
