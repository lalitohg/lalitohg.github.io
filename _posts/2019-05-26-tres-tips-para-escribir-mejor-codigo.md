---
layout: page
title: "Tres tips para escribir mejor código"
subheadline: "Puedes mejorar la calidad de tus programas fácilmente"
teaser: "Escribir un código que funcione puede resultar muy sencillo algunas veces pero el truco está en escribir código que cualquiera pueda leer y que funcione."
tags:
    - productividad
    - tips
    - programar
header: no
image:
    title: writing-336370_1280.jpg
    homepage: writing-336370_1280.jpg
---
Hace unos días tuve una sesión de tutoría con un estudiante que recién empieza su carrera de desarrollo y durante el transcurso de la sesión nos dimos cuenta que el problema más grande no estaba en codificar los algoritmos sino en lograr que todo el proyecto tuviera sentido al momento de tener todo el código junto.

Esa sesión me hizo recordar muchos de los problemas que los desarrolladores enfrentamos a la hora de escribir programas y la forma en la que he ido superando algunos vicios asociados con mi proceso de escribir código gracias a la ayuda de libros y a los consejos de otros grandes desarrolladores que me han ayudado a mejorar.

Te comparto algunos tips que he adquirido con los años y espero que te ayuden tanto como a mi.

## Nuestra habilidad más valiosa es leer código.

Suena contradictorio pero muchos grandes desarrolladores coinciden en que el principal papel de un desarrollador es leer código aún cuando uno podría pensar que los desarrolladores son mejores mientras más código escriben.

Honestamente yo también creía al inicio de mi carrera que me pagarían más si podía escribir más código y con el tiempo tuve que cambiar de estrategia por las exigencias del trabajo.

Un buen desarrollador lee el código una y otra vez, abriendo cualquier cantidad de archivos que sea necesaria hasta entender cómo funcionan los programas que está revisando.

La lógica de esto es en realidad simple. Si lo pensamos un momento, resulta que cualquier desarrollador puede lograr hacer que un programa funcione, pero cuando llegas a cubrir una vacante de desarrollador lo más seguro es que tengas que pasar mucho tiempo leyendo lo que otros desarrolladores ya escribieron. Mientras mejor seas leyendo el código de otros y entendiendo la necesidad que se resolvió con ése código, mejor será tu capacidad de escribir nuevo código.

En base a lo anterior te voy a compartir los siguientes tres tips para mejorar el código que escribes.

## Escribe código para que lo entiendan otros.

Es algo muy común, y confieso que a mi me pasa seguido, que al momento de que otro desarrollador revisa mi código los nombres que he usado para identificar variables y funciones no son muy descriptivos.

Es aquí donde nuestra habilidad de leer código se aprecia más, porque es importante que uno mismo se detenga a leer el código que está escribiendo para detectar posibles mejoras.

Al momento de escribir un programa puede parecer una obra maestra porque hemos añadido exitosamente la nueva funcionalidad que esperamos lograr, pero justo ahora es cuando uno debe darse un tiempo para leer el nuevo código y enfocarse solamente en eso; poder leer el código.

Recuerda que en unas semanas tú mismo ya no vas a ser la misma persona que ha escrito el código que acabas de terminar. La meta es escribir un código que cualquiera pueda leer fácilmente.

## Usa verbos y sustantivos de forma correcta.

No hay mucha ciencia en esto pero es algo que se nos puede olvidar bajo la presión de terminar el programa en el que estamos trabajando.

Las **variables deben ser sustantivos** (nombres de cosas) que describen rápidamente el significado de los datos que vamos a guardar en ellas sin mencionar directamente los valores que serán guardados.

Por ejemplo, si estamos almacenando las direcciones de correo principal y de recuperación de un usuario podemos usar nombres de variable como:

{% highlight javascript %}

userMainEmailAddress = “”; // el correo principal
userRecoveryEmailAddress = “”; // el correo de recuperación

{% endhighlight %}

Creo que estos nombres pueden leerse y entender qué significado tiene la información almacenada en estas variables. Es un texto mucho más expresivo que simplemente escribir algo como:

{% highlight javascript %}

mail1 = “”;
mail2= “”;

{% endhighlight %}

En el caso de variables que indiquen si un dato es cierto o falso podemos expresar lo que el dato puede ser, hacer o tener como:

{% highlight javascript %}

emailAddressIsUnique = true; // la dirección de correo es única
appCanUpdate = false; // la aplicación se puede actualizar
userHasAccess = true // el usuario tiene permiso de acceder

{% endhighlight %}

Por definición, las funciones sirven para agrupar varias instrucciones juntas, o sea que son como la definición de tareas, lo que significa que se trata de ejecutar acciones. En otras palabras, **se expresan usando verbos**.

Digamos, por ejemplo, que queremos definir una función para ejecutar varias validaciones sobre una dirección de correo siguiendo estos pasos:

 - Validar que el formato del email es correcto
 - validar que el correo pertenece a un dominio de la lista de dominios aceptados por la aplicación
 - validar que el email no ha sido registrado antes

Sin entrar en los verdaderos detalles de la implementación podemos darle nombre a las funciones necesarias como;

{% highlight javascript %}

// validar una dirección de correo implica:
function validateEmailAddress(emailAddress) {
    emailHasValidFormat = validateEmailAddressFormat(emailAddress); // validar el formato
    emailDomainIsAccepted = validateEmailAddressDomain(emailAddress); // validar que el dominio del email es aceptado por la aplicación
    emailIsUnique = checkEmailAddressIsUnique(emailAddress); // revisar que el email no está en uso
    return emailHasValidFormat && emailDomainIsAccepted && emailIsUnique // sólo si todas las validaciones son correctas entonces la función regresará un valor verdadero
}

{% endhighlight %}

Como puedes ver, la intención es hacer que al leer el código se explique que se están realizando acciones concretas y que el resultado de esas acciones nos están dando datos acerca del estado de la ejecución del programa.

## Escribe de forma iterativa

La mejor manera que conozco para comerse un elefante es hacerlo un mordisco a la vez. Lo mismo aplica para escribir programas, escribe un cambio pequeño y lee lo que acabas de escribir para decidir si necesitas que tenga sentido ahora o si lo arreglas conforme tengas más partes del programa que escribes.

Por ejemplo, para implementar la validación de direcciones de correo que mencionaba antes, podría comenzar con un nombre de función que solamente sirva como un contenedor temporal:

{% highlight javascript %}

function foo() {
    return true;
}

{% endhighlight %}

Ahora puede ser momento de pensar un poco en lo que quiero que la función haga y empezar a hacer notas sobre el código que tengo:

{% highlight javascript %}

function foo() {
    // validar el formato
    // validar el dominio
    // validar que el email es único
    return true;
}

{% endhighlight %}

A estas alturas ya se me ocurrieron algunos cambios. Para empezar, me doy cuenta de que necesito un email sobre el cual hacer las validaciones necesarias; también me puedo imaginar un nombre para la función que estoy escribiendo. Finalmente se me ocurre que podría usar una variable para ir guardando el resultado de las validaciones.

{% highlight javascript %}

function validateEmailAddress(emailAddress) {
    emailIsValid = false;
    // validar el formato
    //  validar el dominio
    // validar que el email es único
    return emailIsValid;
}

{% endhighlight %}

Confieso que no es mucho pero la verdad es que tampoco no me estoy deteniendo por mucho tiempo a pensar en los nombres “perfectos”. Esto es bueno porque mi intención es resolver un problema y no puedo perder mucho tiempo en los detalles estéticos ahora. Eso de los detalles lo podré hacer más adelante.

Ahora se me ocurren los nombres de las funciones que podría necesitar y mi código se ve así:

{% highlight javascript %}

function validateEmailAddress(emailAddress) {
    emailIsValid = false;
    emailHasValidFormat = validateEmailAddressFormat(emailAddress); // validar el formato
    emailDomainIsAccepted = validateEmailAddressDomain(emailAddress); // validar el dominio
    emailIsUnique = checkEmailAddressIsUnique(emailAddress); // validar que el email es único
    return emailIsValid;
}

{% endhighlight %}

Y en este punto es cuando me doy cuenta que no voy a necesitar una variable para guardar el resultado de la validación en general por lo que he llegado a la versión final:

{% highlight javascript %}

// validar una dirección de correo implica:
function validateEmailAddress(emailAddress) {
    emailHasValidFormat = validateEmailAddressFormat(emailAddress); // validar el formato
    emailDomainIsAccepted = validateEmailAddressDomain(emailAddress); // validar que el dominio del email es aceptado por la aplicación
    emailIsUnique = checkEmailAddressIsUnique(emailAddress); // revisar que el email no está en uso
    return emailHasValidFormat && emailDomainIsAccepted && emailIsUnique // sólo si todas las validaciones son correctas entonces la función regresará un valor verdadero
}

{% endhighlight %}


Me ha tomado 5 iteraciones llegar a algo que se puede leer con suficiente claridad como para dejarlo así y la verdad es que me tomó apenas unos minutos pasar de la primera iteración a la última. Esto es mucho mejor que la media hora o más que me pudo haber tomado al intentar escribirlo todo bien desde el principio con todos los nombres correctos a la primera. Ya he he estado en esa situación y puedo decir que generalmente se pierde más tiempo del que tomaría hacerlo en partes. La verdad es que el proceso creativo no funciona de forma que se pueda hacer todo bien al primer intento.

## Es todo por ahora

Voy a dejarlo hasta aquí para no hacerlo más largo. Espero que te sirvan estos tips y que me escribas si tienes alguna pregunta o sugerencia.

Sigue practicando y que te diviertas en el proceso.
