# Meli's FrontEnd Challenge
Buscador de Productos mediante Api de Mercado Libre

Realizado con:
[React JS v.16.13.1](https://es.reactjs.org/)
[Express JS v.4.17.1](https://expressjs.com/es/)
[Node JS v.12.18.3](https://nodejs.org/es/)


## Descripción del proyecto
Consta de 3 vistas realizadas enteramente en React JS, junto a Node y Express
para la generación de un middleware que envíe la información necesaria
a utilizar y desplegar en el Front.

#### Vista 1
Vista inicial que contiene una barra navegadora y su input para la consulta de búsqueda.

#### Vista 2
Luego de la consulta a la Api y el envío de la data necesaria desde el back
se pueden ver los 4 items solicitados en el front.

#### Vista 3
En esta vista se puede visualizar el detalle del producto luego
de presionar sobre cualquiera de los 4 items de la vista 2.

<br />
<br />
---------------------------------------
<br />
<br />

## El Front: visualización
Este Proyecto se puede inicializar desde el root con:

### `npm start`

Luego de instalar los modulos indicados se puede iniciar la app en modo desarrollador.<br />
Abrí [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### Ejemplo de funcionalidad
Se puede ver un video de prueba y ejemplo del sitio en el siguiente link:
- [Front del Productos](docs/front.mp4)


<br />
-------------
<br />


## El Back: visualización
Este Proyecto se puede inicializar desde la carpeta "api" con:

### `npm start`

Luego de instalar los modulos indicados se puede iniciar la app en modo desarrollador.<br />
Abrí [http://localhost:9000](http://localhost:9000) para correr el back.

Se puede testear su funcionamiento con los siguientes links:
[Búsqueda de items](http://localhost:9000/api/items?q=samsung)
[Búsqueda de un item según su ID](http://localhost:9000/api/items/MLA885106501)

### Ejemplo de funcionalidad
Se puede ver un video de prueba y ejemplo del sitio en el siguiente link:
- [Back del buscador](docs/back.mp4)

<br />
<br />
---------------------------------------
<br />
<br />

## Docs
- [query-string](https://www.npmjs.com/package/query-string)
- [html-react-parser](https://www.npmjs.com/package/html-react-parser)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [react-router-dom](https://reactrouter.com/)
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)



