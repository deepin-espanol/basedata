---
title: Qué es sudo
description: "Parte de la FAQ de Ayuda de Deepin"
type: Document
tags:
  - deepin-faq
  - general
---

Es un juego de palabras relacionadas a "Superuser Do" para conceder como "root". Se debe anteponer `sudo` antes de la frase.

Secuencia: `sudo [nombre del shell] [nombre de la orden]`

Ejemplo: `sudo apt update`

### ¿Es necesario anteponer sudo?
No estás obligado. Al ejecutar algunas shells para ver archivos, por ejemplo, basta escribir el "nombre del programa". Sin embargo, cuando algunos "programitas" necesitan editar partes críticas del sistema es obligatorio.

Si quieres realizar actividades críticas sin tener que escribir `sudo` cada cierto tiempo, escribe en esa línea `su` y confirma con la contraseña.

Fuente: [Element2048](https://element2048.wordpress.com/2007/02/12/el-comando-su-sudo-y-root/)

{% include _faq_post.md %}
