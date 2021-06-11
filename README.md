# Node JS restful API

El proyecto esta basado en una implementacion simple de construir una Restful API usando nodejs, express framework, y bases de datos no relacionales, este manejara una simple interfaz con datos de contacto para poder realizar un CRUD mediante peticiones HTTP.


### Requerimientos

- Ubuntu 16 en adelante
- Node 14.17.0
- npm (Node Packege Manager)
- Express framework
- MongoDB para la base de datos

### Instalacion

1. Clonar repositorio
```
https://github.com/mauroxcf/Node_JS_restful_API.git
```
2. inicializar el proyecto
Dentro de la carpeta raiz directorio del repositorio:
```
npm init -y
```
3. Instalar otras dependencias utiles para el proyecto
```
npm install express mongoose dotenv joi --save
```
4. Ajustar base de datos de MongoDB cluster dentro del archivo .env, pegar el codigo de coneccion.
```
DB_CONNECTION = <paste here your connection string of the database of MONGODB cluster>
```
5. Correr la aplicacion.
```
npm start
```
Al haber realizado con exito la instalacion de todas las depencias, haber ajustado la conexion de la base de datos MongoDB y correr la aplicacion, ya es posible de acceder a los endpoints que se manejan en el servidor y hacer un CRUD con los usuarios que se vayan creando .

### Funcionamiento

la app consta de una serie de endpoints para poder manipular la base de datos, obtener informacion, etc. siempre y cuando la app este conectada en la base de datos MongoDB.
​
| HTTP Method | Endpoint | Descripcion |
| ------ | ------ | ------ |
| GET | /user/list/ | retorna todos los usuarios creados junto con sus datos personales. |
| POST | /user/register/ | Crea un usuario nuevo con las especificaciones establecidas. |
| UPDATE | /user/list/:id | permite actualizar uno o todos los datos del usuario perteneciente al ID. |
| DELETE | /user/list/:id | Elimina el usuario que coincida con el ID que le pasemos. |
| DELETE | /user/list/all | Elimina todos los usuarios. |
​


Se puede hacer pruebas correspondientes con POSTMAN agregando usuarios con los campos requeridos, hacer consultas, etc.
![image](https://user-images.githubusercontent.com/66022141/121633369-450f0380-ca48-11eb-9f91-d913a6e2b421.png)

![image](https://user-images.githubusercontent.com/66022141/121633846-2f4e0e00-ca49-11eb-9ca9-e3da7ca67acc.png)

### Estructura del proyecto
![image](https://user-images.githubusercontent.com/66022141/121634316-ee0a2e00-ca49-11eb-84cb-97bf468c1d3d.png)

La estructura del proyecto consta de tres modulos principales que son app, el paquete models, paquete route.
- app:Es el modulo principal que hace funcionar el servidor, que entrega las respuestas en formato JSON a cada verbo HTTP que se le realiza al servidor dependiendo del endpoint en donde se le solicite y conecta la base de datos con el servidor.
- models:posee la estructura de la base de datos gracias al ORM mongoose en el archivo User.js. 
- routes: Se encarga de las acciones que maneja cada ruta, ya que se encuentran definidas en este modulo, como guarda los objetos creados y las validaciones de datos que hace, todo esto en el archivo user.js.

## Autors ✒️
Mauricio Contreras - [Github :octocat:](https://github.com/mauroxcf) - [Twitter](https://twitter.com/MauroJCF) - [Linkedin](https://www.linkedin.com/in/mauricio-contrerasf/)
