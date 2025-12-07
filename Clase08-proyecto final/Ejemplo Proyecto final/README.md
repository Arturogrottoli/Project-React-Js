# MiShop – E‑commerce React + Firebase

SPA hecha con React, React Router y Firebase (Firestore) para la entrega final.

## Cómo arrancar
1) `npm i`
2) Configurá tus credenciales Firebase en `src/firebase/firebase.js`
3) `npm run dev`

### Rutas
- `/` listado de productos
- `/category/:cid` filtrado por categoría
- `/item/:id` detalle
- `/cart` carrito
- `/checkout` checkout
- `/seed` (opcional) sembrar productos demo. Usarla una sola vez y luego borrar el archivo.

## Estructura del proyecto

### Componentes
- **NavBar**: Navegación principal con enlaces a categorías y CartWidget
- **ItemListContainer**: Contenedor que obtiene productos de Firestore
- **ItemList**: Lista presentacional de productos
- **Item**: Tarjeta de producto individual
- **ItemDetailContainer**: Contenedor que obtiene un producto por ID
- **ItemDetail**: Vista detallada de un producto con ItemCount
- **ItemCount**: Selector de cantidad con validaciones (min: 1, max: stock)
- **Cart**: Vista del carrito con productos, cantidades y totales
- **CartItem**: Item individual del carrito con subtotal
- **CartWidget**: Icono del carrito con contador de unidades
- **CheckoutForm**: Formulario de compra que crea órdenes en Firestore
- **Loader**: Indicador de carga
- **EmptyState**: Mensaje cuando no hay resultados

### Context
- **CartContext**: Maneja el estado global del carrito (items, agregar, eliminar, vaciar, totales)

### Firebase
- **firebase.js**: Configuración de Firebase
- **db.js**: Funciones para interactuar con Firestore (getProducts, getProductsByCategory, getProductById, createOrder)

## Colecciones Firestore
- `items`: { title, description, price, stock, category, image }
- `orders`: { buyer:{name,email,phone}, items:[{id,title,price,qty}], total, createdAt, status }
