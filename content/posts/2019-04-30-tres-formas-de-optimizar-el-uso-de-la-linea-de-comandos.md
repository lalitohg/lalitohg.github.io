---
slug: "tres-formas-de-optimizar-el-uso-de-la-linea-de-comandos"
title: "Tres formas de optimizar el uso de la línea de comandos"
tags:
    - productividad
    - tips
    - cli
---
Te voy a mostrar 3 formas en las que hago más eficiente el uso de mi línea de comandos para incrementar la productividad.

Al hacer desarrollo es inevitable usar la línea de comandos, pero no siempre es fácil teclear comandos con muchas opciones, con nombres muy largos o teclear varios comandos de forma secuencial.

La línea de comandos te puede ayudar a acelerar tus tareas de desarrollo y administración de forma increíble y aquí te voy a mostrar tres opciones para ayudarte a ser más productivo.

## Define alias

Los __alias__ de la línea de comandos pueden ser una herramienta que te ahorra mucho tiempo cuando necesitas usar mucho la línea de comandos.

Los alias son simplemente una forma de renombrar comandos o series de comandos de forma que puedas recordarlos más fácil, y sobre todo, escribiendo mucho menos.

Lo bueno de los __alias__ es que puedes nombrarlos casi como quieras y con ellos puedes hacer que un comando exageradamente largo se convierta en un comando de apenas unos pocos caracteres.

Basta con hacer algo como:

`alias cls=clear`

Con esto ya puedo escribir **cls** y sería lo mismo que escribir el comando __clear__ para limpiar la pantalla de la terminal. Esto va a ser válido por el resto de la sesión, lo que significa que cuando se cierre la terminal se perderá la definición de ese alias.

Cómo este artículo se trata de ser más productivo entonces el verdadero consejo aquí es __define todos tus aliases en el archivo de inicio de sesión__. De esta forma estarán disponibles siempre que abras una nueva terminal.

En ubuntu, y casi cualquier otra distribución, vas a encontrar este archivo en tu directorio personal con el nombre **.bashrc**. En Mac OS es probable que quieras modificar el archivo  **.bash_profile** que también debería estar localizado en tu directorio personal.

Solamente tienes que abrir el archivo con cualquier procesador de texto y agregar nuevas líneas con la definición de tus __aliases__. Observa que en el ejemplo que sigue estoy encerrando entre comillas los comandos que tienen espacios intermedios. Los comandos de una sola palabra no necesitan comillas.

Puede que te den ganas de añadir comentarios. Agrega **'#'** y el resto de la línea será un comentario.

```javascript

alias cls=clear
alias ..="cd .."
# listar archivos ocultos con detalle en forma de listado e indica si el nombre es ejecutable(*), dirctorio(/) o enlace simbólico(@)
alias la="ls -alF"

```

## Personalizar de forma modular.

A veces tenemos que manejar proyectos distintos al mismo tiempo o tenemos que cambiar proyectos muy seguido.

Esto puede cambiar constantemente los requerimientos para configurar nuestro entorno de desarrollo. Por eso es que yo he decidido separar requerimientos distintos en archivos distintos. De esta forma puedo incluir variables de entorno, alias o invocar comandos específicos al iniciar sesión como sea necesario y lo mejor es que puedo conservar los archivos para después aun cuando no los estoy usando.

Lo que hago en mi caso es crear un archivo oculto por cada cliente **.cliente1.bash**, **.cliente2.bash** y otro para mis propios cambios, luego agrego en cada archivo lo que sea que necesite definir (variables de entorno, aliases, ejecutar un comando, etc). Con esto simplemente modifico mi archivo de inicio de sesión (__.bashrc__ para Linux o  __.bash_profile__ para Mac OS) con algo como esto:

```javascript


# personal
source ~/.me.bash

# ciente1 aliases, paths, etc
source ~/.cliente1.bash

# ciente2 aliases, paths, etc
source ~/.cliente2.bash

```

Ahora solo es cuestión de comentar cualquiera que no necesite usar y la siguiente vez que abra una terminal veré reflejados los cambios.

## Automatiza las tareas repetitivas con scripts.

A veces nos toca hacer tareas simples pero que nos quitan tiempo, cosas como actualizar campos en una tabla de la base de datos, borrar registros viejos, comprimir archivos de logs, etc. Es cierto que lo mejor sería modificar nuestros sistemas para que hagan esas tareas como parte de sus procesos, pero tal vez no sean una prioridad, no hay personal o simplemente “así es la vida".

Yo siempre trato de usar el lenguaje interpretado que me ayude a automatizar esas tareas de forma más sencilla y los tengo a la mano ya sea en una carpeta de fácil acceso o en el mismo repositorio del proyecto en un directorio donde no estorben.

Dependiendo de las tareas a realizar uso distintos lenguajes. Para hacer conexiones a bases de datos MySQL me gusta **PHP**, para analizar archivos de texto (sobre todo si tienen formato de tabla) me gusta **Pearl**. Descubrí que es muy fácil hacer programas interactivos de línea de comandos con **Node** y [commander](https://www.npmjs.com/package/commander)

Aquí todo depende de las circunstancias. Eso sí, aprender algún lenguaje interpretado seguramente te va a salvar de muchas así que aprende bien al menos uno.

## Has la prueba.

Si te parece que alguno de estos tips te puede ayudar entonces es tu turno de aplicarlos tú mismo y empezar a hacer mucho más en menos tiempo.

Espero que hayas disfrutado leyendo el artículo tanto como yo disfruté al escribirlo y que te ayude en tu carrera como desarrollador.

Hasta la próxima.
