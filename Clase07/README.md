# TIENDA CELL

## Descripcion:
Tienda virtual - E-Commerce de celulares. Realizada para presentacion de proyecto final de cursos de React JS.

## ¿Que se puede hacer?
En la misma se puede seleccionar productos, buscar productos por categorias, ver detalles de los mismos, agregar al carrito y finalmente concretar mediante un formulario la compra.
La App esta viculado a Firebase para la base de datos (Podemos a traves del firestore encontrar la coleccion de productos y las ordenes de compra)

## Muestra:
![](public/sitio.gif)

## Dominio del sitio:
https://tiendacell.netlify.app/

## Herramientas/Dependecias utilizadas:
* React 17.0.2
* React-Router-DOM 6.2.2
* Bootstrap 5.1.3
* Firebase 9.6.10
* Toastify 8.2.0
* Material Icons

## Partes de la APP:
* App.js:  En el se encuentran todas las rutas de la aplicacion, se encarga de linkear segun corresponda
* Navbar: En esta carpeta encontramos el archivos Navbar.js donde se encuentra la barra de navegacion principal (encontramos el CartWidget) y Navbar2.js donde se encuentra la barra en donde se hace el filtrado de productos por categorias
* Item: En esta carpeta encontramos los componentes ItemListContainer.js ( encargado de la parte funcional-componente contenedor), ItemList.js e Item.js (encargador la presentacion de los productos), ItemDetailContainer.js (encargado de la parte funcional del detalle-contenedor), ItemDetail.js (encargado de la presentacion de los detalles de los productos)
* Counter.js: Componente encargado de sumar o restar productos que van al carrito
* Carrito.js:  Componente donde van a parar los productos seleccionados para la futura compra. Se detalla precio total y cantidad de productos seleccionados, tambien se encuentra el formulario donde se ingresan los datos del comprador para enviar a la base de datos.
* Contexto: Componente utilizado para pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

## Pasos para instalar el sitio:
1. git clone https://github.com/alesiods/e-commerce
2. cd e-commerce
3. npm install
4. npm start

## Sobre mi:

Para conocer mis proyectos ingresar a:
https://alesioportfolio.netlify.app/
