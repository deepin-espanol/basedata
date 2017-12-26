---
date: 2017-11-17
type: Video
title: "NetworkManager"
description: "Administrador de datos Postgresql"
tags:
    - apps-utilidades
    - redes
    - internet
video_id: dSScH5tWfUg
---

NetworkManager es una utilidad para configuración de las redes. Su versión gráfica viene incluida en el Centro de Control de Deepin.

## Sobre el servicio
NetworkManager es un servicio de Debian. Para utilizarlo hay que acceder en el centro de control o configurando manualmente.

### Ejecutar y detener (systemd)
Para iniciar el servicio:
~~~
sudo systemctl start NetworkManager.service
~~~

Para detener el servicio:
~~~
sudo systemctl stop NetworkManager.service
~~~

### Ejecutar al inicio (systemd)
Para añadir NetworkManager al inicio del sistema:
~~~
sudo systemctl enable NetworkManager.service
~~~

Para quitar al inicio:
~~~
sudo systemctl disable NetworkManager.service
~~~

## Configuración
Los datos que sirven para que opere NetworkManager está en la carpeta `/etc/NetworkManager`.

### Complementos VPN
El servicio incluye los paquetes opcionales `network-manager-openvpn`, `network-manager-vpnc` y `network-manager-openconnect` para la conexión VPN. Estos vienen instalados en Deepin.

Fuente: [Wiki de Debian](https://wiki.debian.org/NetworkManager), [Wiki de Ubuntu](https://help.ubuntu.com/community/NetworkManager)
