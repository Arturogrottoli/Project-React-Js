# NavegaLasRutas+Rodriguez

Pre-Entrega 2 – **React Router** (Coderhouse)

> **Repositorio:** https://github.com/josegrt1/CreaTuLanding1-Rodriguez  
> **Último commit (entrega):** https://github.com/josegrt1/CreaTuLanding1-Rodriguez/commit/6372380af0b12423a6cbcadbadfdb37f445682c0

---

## 🧩 Objetivo
Implementar la **navegación** de una tienda con:
- Catálogo principal de productos.
- Catálogo filtrado por **categorías**.
- **Detalle** de producto con interfaz para agregar unidades al **carrito**.

---

## ⚙️ Tecnologías
- Vite 5, React 18, React Router DOM 6
- CSS simple (index.css)
- Context API + localStorage (carrito)

---

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run dev
Abrir: http://localhost:5173

🗺️ Rutas principales

/ → Catálogo de productos

/category/:categoryId → Catálogo filtrado

/item/:id → Detalle de producto

/cart → Carrito (extra)

* → 404

🧠 Arquitectura

Contenedores (estado/efectos):

ItemListContainer: obtiene lista de productos con Promise + delay y aplica filtro por categoryId desde useParams.

ItemDetailContainer: obtiene un producto por id (Promise + delay).

Presentación (UI):

ItemList, Item, ItemDetail, ItemCount

NavBar (tabs por categorías, logo), CartWidget, CartView

Footer y secciones visuales (hero/ofertas) como extra

Carrito:

Context (CartContext) con addItem, removeItem, updateQty, clear.

Persistencia en localStorage.

Datos:

src/data/products.js expone:

CATEGORIES

PRODUCTS

getProducts(categoryId)

getProductById(id)

Imágenes públicas en public/img (se referencian como /img/...).

🧪 Flujo de demo

Home → clic en una Categoría

Listado filtrado → Ver detalle

Agregar al carrito

Ir a /cart y ver unidades/total

✅ Checklist de la consigna

Navegación entre vistas con React Router.

useParams para categoryId e id.

Llamados asíncronos con Promises y retardo simulado.

Array.map() + key para el catálogo.

No hay una ruta por cada categoría (se usa /:categoryId).

Ruta 404.

Interfaz de detalle con agregar al carrito.

📁 Estructura (resumen)
src/
  components/
    NavBar.jsx
    ItemListContainer.jsx
    ItemList.jsx
    Item.jsx
    ItemDetailContainer.jsx
    ItemDetail.jsx
    ItemCount.jsx
    CartWidget.jsx
    CartView.jsx
    Footer.jsx
  context/
    CartContext.jsx
  data/
    products.js
  assets/
    logo.svg
public/
  img/  (carryon.png, tsa.webp, mochila.jpg, almohada.jpg, ...)

B) Commit de entrega
git add README.md
git commit -m "NavegaLasRutas+Rodriguez: README de entrega"
git push

