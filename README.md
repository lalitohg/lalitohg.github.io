# Generador estático de dalerun.com

Este proyecto está publicado en la página personal de github pages. El contenido es generado por una aplicación Gatsby JS ejecutada desde su propio contenedor Docker.

El tema del sitio está basado en el starter [gatsby-starter-morning-dew](https://maxpou.github.io/gatsby-starter-morning-dew/)

## Modo de desarrollo

El projecto depende de que existan al menos 2 **branches** en el respositorio, el branch __master__ es utilizado por github pages para servir el contenido del sitio ya optimizado para producción; el branch __dev__ es utilizado para ejecutar el projecto de gatsby en modo de desarrollo y desde ahí ejecutar el comando para generar una nueva versión de producción y actualizar el branch __master__ con **un nuevo commit**.

Asegurate de estar en el branch __dev__ (`git checkout dev`) antes de empezar a agregar o modificar contenido del sitio.

Para instalar el projecto desde su contenedor la primera vez: `docker container run --rm -it --name blog -v C:\Users\Admin\Documents\git\lalitohg.github.io:/usr/src/app -w /usr/src/app node:13.7.0 npm i`

Entonces puedes ejecutar el projecto en modo desarrollo con: `docker container run --rm -it --name blog -v C:\Users\Admin\Documents\git\lalitohg.github.io:/usr/src/app -w /usr/src/app -p 8000:8000 node:13.7.0 npm start`

## Deploy

El proyecto utiliza el comando **gh-pages** para hacer todas las tareas de deploy entre branches, solamente hay que asegurarse de seguir en el brach __dev__ y tener los cambios listos para publicarlos. Entonces se ejecuta el script de deploy desde el contenedor: `docker container run --rm -it --name blog -v C:\Users\Admin\Documents\git\lalitohg.github.io:/usr/src/app -w /usr/src/app node:13.7.0 npm run deploy`
