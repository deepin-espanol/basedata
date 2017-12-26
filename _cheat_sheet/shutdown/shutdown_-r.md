---
title: "shutdown -r"
description: "Reinicia el equipo."
---
##### Reinicio

{% raw %}
~~~liquid
shutdown -r now
~~~
{% endraw %}

##### Reinicio programado

{% raw %}
~~~liquid
shutdown -r hours:minutes
~~~
{% endraw %}

También:

{% raw %}
~~~liquid
sudo reboot
~~~
{% endraw %}

Cancelar:

{% raw %}
~~~liquid
shutdown -c
~~~
{% endraw %}
