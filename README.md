<h1 align="center"> 🧬 API DETECTOR DE MUTANTES 🧬</h1>

Esta API esta desarrollada para encontrar similitudes de 4 bases Nitrogenadas en las cadenas del ADN ingresado. Se basa en una Arquitectura limpia, en donde se dividen los diferentes endpoints para lograr una mayor agilidad en la respuesta. La forma de uso, parámetros, algoritmos y estrategia están expuestos en los siguientes ítems.


## 📖INDICES

 - [Problema](#PROBLEMA)
 - [Solución](#SOLUCION)
 - [Instalación](#INSTALACION)
 - [Modo de uso API](#building-apis)
 - [Quick Reference](#quick-reference)
 - [Desplegada en AWS](#deploying)

## 📚LIBRERIAS

  Este proyecto fue desarrollado con varias librerias y Frameworks
  
  #### De Producción
  
 - [PM2](https://pm2.io/docs/plus/overview/) - Libreria que escucha la aplicacion online y otras funcionalidades
 - [Express](https://www.npmjs.com/package/express) - Web Framework para NodeJs
 - [Mongodb](https://www.npmjs.com/package/mongodb) - Web Driver para MongoDB
 - [Mongodb](https://www.npmjs.com/package/mongoose) - Herramienta para modelado de objetos de MongoDb
 - [Dotenv](https://www.npmjs.com/package/dotenv) - libreria para implementar variables de entorno

 #### De Desarrollo

 - [Nodemon](https://www.npmjs.com/package/nodemon) - Libreria que escucha cambios el codigo y reinicia el servidor.
 - [Jest](https://www.npmjs.com/package/jest) - Libreria que permite realizar Test para NodeJs
 - [Supertest](https://www.npmjs.com/package/supertest) - Libreria que ayuda a relizar Tests en el servidor
 - [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) - Compilador de funciones asyncronas
 
 
 ## 😵‍💫PROBLEMA
 
 Magneto quiere poder analizar cadenas de bases nitrogenadas compuestas por ( A, C, T, G ), donde las cadenas están dentro de un arreglo NxN, dando la condición que el ADN que cumpla con una secuencia consecutiva de 4 de estos es un MUTANTE 🦸. 
 
 El formato en que se envian estas cadenas es el siguiente:
 
- dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"}

Se debe desarrollar el anterior problema de tal manera que:

- Se implemente un algoritmo que contemple las codiciones y el resultado esperado. 
- Se debe contar con un servicio /mutant, que determine si la petición cumple con los requisitos y además, devuelva un status(200) OK en caso de ser mutante, de lo contrario debe devolver un status(403) Forbidden.
- Se debe contar con un servicio /stats, que determine las estaditicas de la base de datos de ADN y devuelve una respuesta con el siguiente formato : 
  ADN: {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}

- Se debe hostear el api en un cloud computing libre, que permita realizar las peticiones online.
- Se debe tener en cuenta que se reciben fluctuaciones de trafico agresivas ( de 100 y 1 000 000 rqps)
- Se debe tener un test coverage > 80%


Ya con estos parametros, !! Realicemos esta tarea !!

<img align="center" src="https://c.tenor.com/efwrYI0TEJ8AAAAC/nod-magneto.gif" width="20%" >

 ## 🗹 SOLUCION
 
 Como primer parametro tenemos el algoritmo que pueda encontrar dentro de las cadenas de bases nitrogenadas una secuencia de 4 consecutivamente iguales, dejando en claro los posibles casos para esta busqueda que son horizontal, vertical y oblicuo de derecha a izquierda y de izquierda a derecha así: 
 
 <img align="center" src="https://res.cloudinary.com/lewt-copr/image/upload/v1654360149/matrizand_kfy3pb.png" width="80%" >
 
 Para solucionar este algoritmo pense primero en desarrollar un loop que fuera recorriendo la matriz en estas opciones de secuencia, pero el que tuviera que esperar el proceso para que revise una tras de otra no es optimo ya que recorreriamos 4 veces la misma matriz. Con esto en mente, se desarrollo un algoritmo que hace las cuatro formas de busqueda al mismo tiempo como promesas, que a su vez, en el instante que alguna de las 4 recibe un true como hallazgo del paramtro inicial detendra a las demas promesas.
 
 Llegue a este implementando un Promise.any, y retornando un valor que al momento de que alguna de las otras promesas terminara no continuaran, asi ahorrando memoria debido a que las promesas seguiran en un proceso detras ya sea true o false.
 
 Se organizo el arbol de de directorios de la siguiente manera:
 
 ```bash
	Test-Meli
	|--src
	|-- config
		|-- controllers
		|-- dal
		|-- middlewares
		|-- routes
		|-- server
		|-- utils
		|--index.js
	|--test
    |-- integration
    |-- setupTests.js
	|--.gitignore
    |--jest.config.js
    |--package-lock.json
	|--package.json

```
 
 
 
 
 
 
 


<img src="https://res.cloudinary.com/lewt-copr/image/upload/v1654358991/Captura_lpbwyf.png" width="100%">

<img src="https://c.tenor.com/t1D79-qgnGAAAAAC/x-men-ian-mc-kellen.gif" width="100%">
