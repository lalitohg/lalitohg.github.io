---
slug: "instalacion-minima-de-babel-7"
title: "Instalación mínima de Babel 7"
tags:
 - javascript
 - babel
---
La versión número 7 de babel ya está disponible desde hace algún tiempo y si vas a iniciar algún proyecto Javascript no puedes dejar pasar la oportunidad de probar esta versión.

Lo más común es instalar Babel y algunos __plugins__ específicos para que otras herramientas puedan tomar tu código ES6 y entenderlo para manipularlo o para exportarlo junto con cualquier otro recurso que necesite tu proyecto.

Veamos como instalar Babel 7 con los __plugins__ mínimos necesarios para traducir tu código ES6 a versiones compatibles con navegadores más viejos.

## Instalación  mínima

Ahora con la versión 7 de babel los nombres de muchos __plugins__ han cambiado un poco y hay una nueva versión del core de Babel. En general, los nombres de paquetes han cambiado de babel-**paquete** a @babel/**paquete**.

Para tener lo mínimo necesario para traducir código ES6 a versiones compatibles primero hay que instalar unos cuantos módulos:

`npm i -D @babel/core @babel/cli @babel/preset-env @babel/register`

`npm i @babel/polyfill core-js`

Esto es suficiente para que puedas pasar tu código ES6 a una versión compatible con ES5 o anteriores.

Aquí hay que notar que en versiones anteriores es común encontrar varios **preset**, y ahora solamente necesitas instalar @babel/preset-env y eso es todo.

## Configuración mínima

Lo mejor es tener un archivo de configuración que puedas modificar según tus necesidades.

Como mínimo necesitas crear un archivo llamado babel.config.js y agregar el siguiente contenido:

```javascript

const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "32",
                chrome: "50",
                safari: "6.0",
            },
            useBuiltIns: "usage",
            corejs: 3,
        },
    ],
];

module.exports = { presets };

```

Nota: Las versiones de la sección **"targets"** son un ejemplo arbitrario. Esto si lo vas a tener que ajustar según las necesidades reales de tu proyecto. Además, puede ser un ejemplo completamente obsoleto para cuando leas este artículo.

## Probando el ambiente

Ahora solamente verificamos que nuestra nueva instalación de Babel 7 está lista para ser usada por otros procesos.

Empecemos creando un archivo llamado __index.js__ en la raíz del proyecto y pongamos algo de código ES6 dentro:

```javascript

function foo(cb) {
    return cb('Hola');
}

foo((param) => {console.log(param)});

```

Ahora vamos a dejar que Babel haga lo suyo y que nos muestre el código transformado ejecutando:

`npx babel index.js`

Debemos ver una salida en consola como esto: 

```javascript

"use strict";

function foo(cb) {
  return cb('Hola');
}

foo(function (param) {
  console.log(param);
});

```

Listo. Con esto comprobamos que Babel es capaz de tomar un código escrito en ES6 y transformarlo en su equivalente ES5 o anteriores. La configuración depende de las necesidades específicas de tu proyecto y las herramientas con las que Babel tenga que interactuar, como webpack, mocha, istambul, etc.

## ¿Qué sigue?

Con esta configuración básica es suficiente para que puedas iniciar tu proyecto JavaScript completamente en la versión ES6 o más recientes. En otros artículos voy a describir cómo podemos complementar esta configuración básica para integrar otras herramientas de uso común como mocha (ejecutar pruebas unitarias) o webpack (para empacar tu proyecto en un único script, por ejemplo).

Espero que te sirva esta información y como siempre, si tienes algo que te gustaría comentar, puedes usar la [página de contacto]({{ site.url }}/contacto) y si te interesa enterarte del nuevo contenido que se va publicando puedes [subscribirte]({{ site.url }}/subscribirte).
