---
slug: "conoce-los-terminos-comunes-empleados-con-git"
title: "Conoce los términos comunes empleados con GIT."
tags:
    - productividad
    - git
---
A veces resulta bastante útil hablar el mismo idioma que se usa en las fuentes de información que consultamos acerca del uso de GIT. Al menos a mi se me hace más fácil entender lo que significan las instrucciones y las explicaciones cuando entiendo lo que quieren decir los términos que se usan para explicar una herramienta o tecnología. Veamos algunos de los términos más comunes asociados con el uso de GIT.

## GIT

Una explicación rápida de lo que es GIT no está de más, creo yo. En resumen, GIT es un programa que permite registrar los cambios que se hacen sobre una carpeta y todos sus contenidos. Una de sus principales ventajas es que almacena toda la información de los cambios en una base de datos que se puede compartir con otras personas o hasta con computadoras (en serio, sin un humano de por medio).

## Repositorio

Cuando configuramos una carpeta para que sea observada por GIT para registrar los cambios en su contenido a esa carpeta se le llama **repositorio**.

## Commit

Si GIT va a guardar información de cambios en una base de datos, entonces podríamos decir que un **commit** es un registro de los cambios que queremos guardar. El __commit__ es una especie de “paquete” que contiene la información del autor, los cambios de cada archivo a la hora de hacer el commit, un mensaje que describe el contenido del commit entre otras pocas cosas. Cada commit, sin falta, tiene asociado un identificador que se conoce como el **hash**, **SHA-1** o simplemente **SHA**.

## Hash, SHA o SHA-1

Todos, los objetos que se guardan en la base de datos de GIT tienen un identificador único. Este identificador se genera a partir de la información del mismo objeto que se va a almacenar mediante un método de criptografía llamado **SHA-1** que por definición se dice que es una función **hash**. De ahí el nombre.

## Branch

Un **branch** es simplemente una forma de ponerle nombre a una serie de __commits__ (cambios registrados en los archivos) en la base de datos de GIT. Generalmente se usan para poner juntos los commits asociados a un sólo cambio en el repositorio.

## Remote o también origin

Esto es así: GIT tiene la capacidad de repartir copias de la base de datos de cambios del repositorio. Esas copias tienen que venir de algún lado o dirigirse a algún lado que no va a ser nuestra propia computadora. Esas __”direcciones”__ de donde podemos tomar una copia de la base de datos de cambios de GIT es a lo que se le llama **remote** y podemos tener muchas direcciones distintas. GIT crea por defecto un remote llamado **origin** por lo que a veces se asume que cuando se habla de direcciones __remote__ se trata de origin, pero cuidado, remote y origin no son sinónimos.

## Checkout

Uno de los comandos más usados de GIT es el comando **checkout**. En su forma básica nos permite cambiar el historial de un __branch__ a otro. El comando checkout tiene otros usos más poderosos pero sin duda el más común es este.

## Y muchos más

GIT es una herramienta poderosa y requiere tiempo aprender todos los términos y comandos asociados a su uso.

Espero que este artículo te sirva como una referencia de supervicencia para poder navegar en el mar de documentación que hay disponible por todos lados.

Que te diviertas desarrollando y espero tenerte pronto por aquí.