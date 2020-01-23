---
slug: "empieza-a-usar-npx-hoy"
title: "Empieza a usar npx hoy"
tags:
    - javascript
    - node
    - desarrollo
---

Aunque no es una noticia nueva, todavía hay mucha gente que no ha adoptado el uso de esta nueva herramienta del ecosistema de NodeJS.

NPX viene incluído en la instalación de NPM desde la versión @5.2.0 y es la solución que muchos habíamos estado esperando para complementar nuestro entorno de desarrollo, ya que ahora es posible ejecutar paquetes del repositorio de NPM sin tener que instalarlos de forma global, por ejemplo. Vaya. Incluso puedes ejecutar paquetes sin tener que instalarlos de forma permanente, por lo que ahora puedes correr ejecutables y herramientas de línea de comandos de forma más conveniente como en los siguientes casos:

## Ejecutar comandos de forma local

Personalmente yo encuentro NPX muy útil para resolver este problema. Por ejemplo, Gulp o Mocha son herramientas geniales que casi seguro vas a usar en tu proyecto. El problema es que tienes que instalarlas de forma global. Así que cuando quieres tener más de un proyecto que dependa de ellas tienes que decidir si vas a actualizar tu versión instalada o si te vas a quedar con la versión que tienes actualmente.

Esto dificulta trabajar en más de un proyecto a la vez y hace que me tome más tiempo empezar a colaborar en un proyecto con el que tengo que seguir un proceso de pre instalación muy largo. Me gusta cuando tengo todo lo que necesito solamente al ejecutar npm install en la raíz del proyecto.

Aquí es donde NPX hace su magia, ya que te permite tener una instalación local de tus herramientas por cada proyecto y mantener el control del versionamiento de forma independiente.

Con NPX solamente necesitas hacer algo como:

`npm install --save-dev mocha`

Y luego, cada vez que necesites correr tus pruebas ejecutas tu versión local así:

`npx mocha`

¡Y listo! Ya no tienes que imaginar soluciones como buscar la ruta local hacia el ejecutable al estilo: ./node_modules/.bin/mocha o usando trucos de bash como: __*alias npm=PATH=$(npm bin):$PATH*__, incluso es más corto que ejecutar el script de test con npm como: __*npm run test*__.

## Ejecutar comandos desechables

¿Te ha pasado que necesitas instalar una herramienta para ejecutarla una vez y luego pasan meses sin que la vuelvas a usar? Un ejemplo común es create-react-app. Lo necesitas un par de veces cuando estás aprendiendo react pero honestamente no hay razón para mantenerlo instalado después de eso.

Con npx solo haces `npx <comando>` y si el comando no está instalado entonces se instalará automáticamente desde el repositorio de npm y se ejecutará de inmediato. Al terminar el comando ya no estará ahí y no tendrás que preocuparte por haber dejado archivos de instalación olvidados en algún lado.

## Puedes usar varias versiones de Node

Resulta que node es también un paquete que puedes descargar desde el repositorio de npm. Y con eso es suficiente para que puedas usar npx con él también. Una forma de solucionar el problema de cambiar entre versiones de node es usar un manejador de versiones como *nvm*, *nave* o *n*. Otra alternativa es usar Docker para ejecutar la versión de node con la que quieres publicar tu proyecto. Aún así, puede que esas opciones sean demasiado para tu caso. Y aquí viene npx otra vez al rescate:

Supongamos que el archivo index.js de tu proyecto tiene este contenido

```javascript
console.log("hello word from", process.version)
```

Si ejecutas tu proyecto con node 6 a través de npx de esta forma

`npx -p node@6 node index.js`

El resultado sería algo como: __*hello word from v6.16.0*__

Y si ejecutaras tu proyecto con node 8 con npx de esta forma:

`npx -p node@6 node index.js`

Obtendrás un resultado como esto: __*hello word from v8.15.0*__

Más información.

Espero haber ilustrado el poder de npx y que te animes a usarlo.

Si sientes curiosidad acerca del uso que puedes darle a esta herramienta puedes aprender más en su [página de repositorio](https://www.npmjs.com/package/npx)
