<h1 align="center"> 🧬 API DETECTOR DE MUTANTES 🧬</h1>

Esta API esta desarrollada para encontrar similitudes de 4 bases Nitrogenadas en las cadenas del ADN ingresado. Se basa en una Arquitectura limpia, en donde se dividen los diferentes endpoints para lograr una mayor agilidad en la respuesta. La forma de uso, parámetros, algoritmos y estrategia están expuestos en los siguientes ítems.


## 📖INDICES

 - [Problema](#PROBLEMA)
 - [Solución](#installation)
 - [Instalación](#installation)
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
