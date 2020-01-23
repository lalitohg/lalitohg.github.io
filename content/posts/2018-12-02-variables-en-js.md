---
date: "2018-12-02"
slug: "variables-en-js"
title: "Variables en javascript"
tags:
   - javascript
   - fundamentos
   - programacion
imageShare:
    publicURL: "http://doma.in"
language: "es"
cover:
    - publicURL: ""
disqus: ""
body: "foo"
---

Las variables son un elemento esencial de un programa. Hasta el código más pequeño necesita hacer buen uso de variables para ser claro y funcional.

## ¿Qué son?

Podemos pensar en las variables como contenedores que nos van a ayudar a identificar y almacenar la información que nuestros programas van a manipular.

Siendo más técnicos, las variables son una relación entre un dato almacenado en la memoria del programa y un nombre que identifica a ese dato en el código del programa. Básicamente es como ponerle tu nombre al envase donde guardas tu comida para poder encontrarlo después dentro del refrigerador de la oficina

![ ](../images/office_fridge.jpeg)

## ¿Para qué sirven?

La pregunta ahora tal vez sea ¿para qué sirven? Es decir, ya sé que son una forma de identificar pedazos de información dentro del código y también sé que ocupan un lugar dentro de la memoria del programa, aún así eso no me deja claro qué uso darles.

Pues bien. Las variables sirven a más de un propósito dentro de tu código:

- Te ayudan a separar la información dentro del código de forma que sea más manejable
- hacen que la lectura de tu código sea más sencilla
- te ayudan a depurar (hacer debug) tu código cuando algo no te queda claro de la ejecución de tu programa o tratas de arreglar un bug.

Veamos cómo nos ayudan las variables con este programa de ejemplo. El propósito del programa es almacenar un texto para luego transformarlo todo a minúsculas. Vamos a imaginar que pueden haber muchas más operaciones entre el momento de transformar el texto y el momento de mostrar la comparación entre el texto original y su transformación.

```javascript

var originalText = "Hola mundo";
var lowerCaseText = originalText.toLowerCase();

//imagina que aqui hay como 50 lineas más de fabuloso código

lowerCaseText = "";

console.log("Texto original", originalText);
console.log("Texto en minúsculas", originalText);

```

Con este ejemplo de código podemos ver como el uso de las variables nos está ayudando aún en un programa tan cortito.

Primero. Nos está ayudando a tener disponible la información que necesitamos ya que `originalText` y `lowerCaseText` nos ofrecen una forma breve de recuperar la información que contienen incluso después de haber escrito muchas líneas de código en el programa.

```javascript

var originalText = "Hola mundo";
var lowerCaseText = originalText.toLowerCase();

//imagina que aqui hay como 50 lineas mas de fabuloso codigo

```

Segundo. El código se vuelve más fácil de leer cuando la información que necesitamos está identificada de forma que sabemos que tipo de información está contenida en la variable. Aquí es importante mencionar que los nombres de las variables deben cumplir con ciertas guías para ser útiles. Veremos algunas más adelante.

Por ahora, digamos que nombres de variables como `texto1` y `texto2` o `a` y `b` no logran describir ni al dato que contienen ni el uso que se les vamos a dar en el programa.

Tercero. Intencionalmente he introducido un **bug** (`lowerCaseText = '';`). Si realmente éste ejemplo tuviera más de 50 líneas de código sería difícil saber en qué línea ocurrió el cambio si no pudiéramos buscar rápidamente todos los lugares donde se usa `lowerCaseText`.

## Tipos de variables.

Probablemente te has enterado que existen distintos tipos de variables en otros lenguajes de programación y javascript no es la excepción.

En javascript la lista de tipos de datos es corta, en realidad.

Vamos a dividir la lista en dos grupos. El grupo de los tipos que sólo pueden almacenar un valor a la vez y el grupo de los tipos que almacenan varios tipos de datos al mismo tiempo.

Tipos que almacenan un valor a la vez: 

- **string**: Este tipo almacena texto de una longitud variable. El texto que va a contener se encierra entre comillas simples o dobles.
- **number**: Este tipo sirve para almacenar números. Pueden ser enteros o fracciones y pueden estar expresados en sistema decimal, binario, octal o hexadecimal (por si te lo preguntabas).
- **boolean**: Este tipo almacena valores lógicos que sólo pueden ser _true_(cierto) o _false_(falso).
- **null**. Este es curioso, de hecho. Sirve para indicar que no hay valor de ningún tipo. Parece contradictorio pero muchas veces es necesario indicar que una variable no tiene valor.
- **NAN**. Este tipo sirve para indicar que la variable no es un número; su nombre lo dice, Not A Number. Generalmente no lo usas en tu código sino que es el resultado de una operación matemática incorrecta como dividir una cantidad entre cero por ejemplo.

Y así se ven en el código

```javascript
//string
var stringType = "El texto puede incluir signos de puntuación, números y ¡otros símbolos!";
var stringType2 = "También puedes usar 'comillas simples' dentro de las dobles y viceversa";

//number
var integer = 123; //un numero entero
var fractional = 3.14159; //numero fraccional
var binary = 0b101; //el binario empieza con 0b y luego la cantidad en binario
var octal = 0123; //el octal empieza con un 0 y luego la cantidad en octal
var hexadecimal = 0x12ABCDEF; //el hexadecimal empieza con 0x y luego la cantidad hexadecimal. Las letras de A a F son mayúsculas.

//boolean
var boolType = true; // esto es cierto
var boolType2 = false; // esto es falso

```

Tipos que almacenan varios valores a la vez:

- **object**: Este tipo de dato sirve para almacenar juntos varios elementos de información. A cada elemento dentro del objeto se le da un nombre para identificarlo y cada elemento puede ser de cualquier tipo de dato (incluso de tipo object). Los elementos dentro del objeto no tienen un orden determinado al momento de almacenarlos ni al recuperarlos.
- **array**: Este tipo sirve para almacenar juntos varios elementos en secuencia. Los elementos almacenados dentro del array pueden ser de cualquier tipo (incluso de tipo array). Los elementos dentro del array están ordenados conforme se van agregando y se tiene acceso a ellos por medio de un índice que indica que posición ocupan dentro del array.

Y así se ven en el código

```javascript

var objectType = {
    name: "fulanito", // el nombre es string
    age: 9, // la edad es number
    hobbies: ["fisica cuantica", "pokemon"], // pasatiempos es array
    address: { // la dirección es object
        street: "fighter",
        city: "shadaloo"
    }
};

```

## ¿Cómo se usan?

Ahora que sabemos qué son las variables vamos a ver cómo usarlas.

Declaración y asignación.

Declarar una variable significa crearla. A partir de ese momento se puede usar la variable como mejor nos convenga dentro del código.

Para declarar una variable se usa la palabra especial `var` seguida de un espacio y el nombre que queremos darle a la variable.

Las variables no sirven de mucho si no contienen ninguna información. Asignar una variable o asignar un valor a una variable significa que vamos a guardar un valor dentro de la variable. También puedes asignar una variable a otra. Es decir, puedes guardar una variable como el valor de otra.

Algunos ejemplos lo explican mejor.

```javascript

var foo; // declaramos la variable foo.
var bar = "Hola"; // asignamos a bar el string  "Hola"

foo = bar; // asignamos a foo la variable bar. Ahora foo es igual a "Hola" y bar = "Hola"

console.log(foo); // Hola
console.log(bar); // Hola

```

## Cambio de tipo de valor.

Las variables en javascript pueden ser reasignadas con cualquier tipo de valor a diferencia de otros lenguajes. Una variable puede tener un valor string y luego ser reasignada con un valor number por ejemplo.

```javascript

var foo = "soy un string"; // se define la variable y se asigna un valor de tipo string
foo = 123; // ahora se le asigna un valor de tipo numérico
```

La verdad yo no recomiendo hacer este tipo de cambios, ya que por buenas prácticas, las variables deben ayudarte a leer el código de forma clara. Si una variable cambia constantemente de tipo se vuelve más difícil predecir lo que el código hará después. Puedes simplemente declarar más variables del tipo adecuado a tus necesidades y así mantener un código más expresivo.

## ¿Y qué nombre le ponemos?

Esa pregunta me ha causado bloqueos de escritor muchas veces durante mi carrera. Para evitar que te pase trata de hacer las cosas simples y deja que el código sea el que te cuente la historia. Por ejemplo:

```javascript
var lowerCaseTxt = inputTxt.toLowerCase();
```

Se entiende que `lowerCaseTxt` va a almacenar un texto en minúsculas, mientras que `inputTxt` contiene texto que fue introducido por el usuario.

Si le pongoun poco de imaginación es como si el código me contara lo que está pasando de forma casual:

>“¿recuerdas ese texto que el usuario introdujo antes? Pues ahora hay que asegurarnos de que todo está en minúsculas y vamos a necesitar guardar ese texto en minúsculas para usarlo en otro momento.”

Honestamente yo encuentro difícil leer algo como esto:

```javascript
var txt2 = txt1.toLowerCase()
```

Podríamos pensar que no está tan mal pero leer otras cien líneas de código como este no se parece mucho a leer una historia como en el primer ejemplo. Siempre es mejor elegir nombres cortos que te digan rápidamente qué información está contenida en las variables.

## Conclusión.

Las variables son un recurso que te ayuda a escribir código legible, predecible, modificable y más fácil de probar. Usa las variables a tu favor para mantener tu código simple y expresivo, pero más importante, diviértete y que tengas mucho éxito.