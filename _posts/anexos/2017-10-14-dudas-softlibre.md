---
type: Document
title: "Dudas sobre software libre en Deepin"
description: "El porqué de usar software con dichas características"
categories:
    - anexos
tags:
    - dudas
    - comunidad
---

En la *Comunidad Deepin* aclaramos que el sistema operativo  perfecto no existe. Buscamos que cualquiera conozca Deepin, tanto a aquellos principiantes como como a experimentados.

En esta página respondemos las dudas relacionadas al software libre y cómo lo aplicamos en la vida real. Es un complemento a la página [Dudas frecuentes]({{ site.url }}{{ site.baseurl }}/anexos/dudas/).

Esta guía forma parte de una <a href="/dudas">serie de dudas frecuentes</a> para facilitar la comprensión a todos los usuarios y usuarias




## Preámbulo
### ¿Qué es software libre?
Un software mencionado como "libre" garantiza la libertad de compartir, estudiar, ejecutar y modificar, sin importar que lucres o decidas. Dicho software requiere de una licencia que justifique, eso lo resumimos como "licencia libre".




### ¿Qué es una licencia libre?
Una licencia libre es un requisito. Es ese "contrato" (llámalo "impreso") que te explica los derechos y deberes con que harás al programa.

<img class="t60" src="{{ site.urlimg }}escala-de-licencias.png" alt="La escala de licencias: dominio público, licencia permisiva, la ideal, la propietaria y el acuerdo de confidencialidad.">

En la imagen tienes un ejemplo. De la izquierda está el dominio público (la cual no es recomendable para los trabajos), el segundo es una permisiva (como la licencia LGPL, la MIT o la BSD) y la tercera es la protegida por copia recíproca (como la licencia GPL). Las dos restantes no son licencias libres (como la EULA o el acuerdo de confidencialidad).

Lectura adicional: [Licencias libres según FSF](https://www.gnu.org/licenses/licenses.es.html)




### ¿Qué es código abierto?
El código abierto es otro requisito. Aparte del software ya terminado, tienes la posibilidad de mejorar o evolucionar al producto con el "código fuente". No es obligatorio para el usuario final, ya que necesita tiempo y conocimientos en el lenguaje de programación.

Una de las instituciones que vela por esta regla es [Open Source Iniciative](https://opensource.org/).




## Aclaraciones
### ¿Por qué software libre?
Hay varios casos para que comprendas esa finalidad:

>Para garantizar que el mismo usuario conozca el software sin temor a "puertas falsas". Tienes derecho a conocer que cambios realizó el software y que técnicas emplea al equipo.

>Para reducir las restricciones al modificar el sistema operativo y el código fuente, haciendo los componentes físicos y virtuales fiables, actualizados y seguros.

>Para promover el apoyo entre empresas, desarrolladores y usuario, evitando la obsolescencia programada, la piratería y los inecesarios trámites burocráticos.




### ¿Es lo mismo decir "software libre" y "código abierto"?
En esta infografía te aclaramos esa pregunta.

<img class="t60" src="{{ site.urlimg }}free-vs-gratis.jpg" alt="En la imagen describe los 4 principios del software libre, la diferencia con código abierto, así como las posibilidad de vender con el software libre.">




### ¿Puedo vender un producto si tiene "licencia libre"?
Sí. Mira este ejemplo.

<div class="flex-video">
        <iframe width="1280" height="720" src="//www.youtube.com/embed/HuoljD3rgVM" frameborder="0" allowfullscreen></iframe>
</div>




### ¿La comunidad puede mejorar el software libre?
La mayoría de las veces. Las comunidades integran a voluntarios dedicados a mejorar el producto como correcciones de errores, características nuevas o integración en otros dispositivos. Nuestra comunidad es uno de ellos.

Para que esto funcione es necesario definir los objetivos, ser viable y establecer conductas para no contaminarla.

Lectura adicional: Blog [victorhckinthefreeworld](https://victorhckinthefreeworld.com/2014/06/02/linux-apesta-y-los-linuxeros-tambien/) y [FOSS-heartbeat](http://sarah.thesharps.us/2016/12/30/update-on-sentiment-analysis-of-foss-communities/)




## Casos prácticos
### ¿Deepin es software libre? ¿Cuáles son sus excepciones?
El software de Deepin sí y está bajo licencia GPL, versión 3. Incluyen las actualizaciones correspondientes a los repositorios. Puedes conseguir una copia desde [la página web](https://www.gnu.org/licenses/gpl.html).

Esto incluye al entorno de escritorio y las aplicaciones originales. También incluye a Linux y otros componentes desarrollados inicialmente para la distribución madre Debian, con algunas excepciones. Más información en la [página Fuentes]({{ site.url }}{{ site.baseurl }}/source/).

Ten en cuenta que al usar software libre "se distribuye con la esperanza de que sea útil, pero SIN NINGUNA GARANTÍA, incluso sin la garantía MERCANTIL implícita o sin garantizar la CONVENIENCIA PARA UN PROPÓSITO PARTICULAR".

Si quieres conocer la licencia GPL tienes una versión no oficial traducida al español por la [Universidad Rey Juan Carlos](https://web.archive.org/web/20160422085111/http://lslspanish.github.io:80/translation_GPLv3_to_spanish/)




### ¿Cuáles son herramientas de software libres?
Todo lo relacionado a [GNU, Linux y Debian]({{ site.url }}{{ site.baseurl }}/anexos/dudas-tecnicas/). GNU fue una respuesta al antes famoso Unix (que sirve de base para MacOS) desarrollado por un estudiante de tecnología, Richard M. Stallman.

La adopción del núcleo Linux fue para accelerar su desarrollo (de ahí que también se conoce como "GNU/Linux"). Debian, en cambio, es un proyecto que vela la organización del sistema operativo para que Deepin tenga lo último en productividad y seguridad.

Stall también aportó la Licencia Pública de GNU, una de las más estables en compartir contenido bajo la misma licencia. Para más información, visita [las preguntas frecuentes](https://www.gnu.org/licenses/gpl-faq.es.html).

Fuente: [FSF](https://www.gnu.org/gnu/linux-and-gnu.es.html)




### ¿Puedo distribuir la ISO o el repositorio? ¿Puedo añadir otros programas?
En general, son software libre los componentes de Deepin (el sistema opearativo) y los componentes desarrollados por la comunidad GNU/Linux. Sin embargo, los terceros no están obligados a usar una licencia libre, incluso si distribuye de forma gratuira.

Ten cuidado al distribuir la ISO o el respositorio, contiene algunas aplicaciones no permiten modificar su código, requieren de una acuerdo de usuario final y dependen de regalías. Las marcas registradas de Deepin y sus afiliados no permiten apoderase sin previo permiso.

En el futuro, tendrás una aplicación para elaborar tu propia ISO y establecer tu catálogo sin temor a software restringido por derechos de autor. Además, si quieres realizar tu propio repositorio, puedes modificar en la ISO.




### ¿Dónde puedo encontrar una copia de la licencia GPL?
Desde el centro de Control, ir a "Información del sistema".




## Seguimos creciendo
Si aún no encuentras tu pregunta, usa el [Buscador]({{ site.url }}{{ site.baseurl }}/search/).

No olvides que estamos en [en Github](https://github.com/comunidad-deepin/comunidad-deepin.github.io).

{% include _improve_content.html %}

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->
