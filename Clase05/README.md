# Clase 5 - React Router: Navegación en SPAs

## 🗺️ Guía de Presentación (paso a paso)

Esta guía está pensada para seguir durante la clase en vivo.
Cada paso indica qué mostrar, qué explicar y qué abrir en el navegador.

---

## PASO 1 — ¿Por qué necesitamos React Router?

**Concepto a transmitir:** en una SPA (Single Page Application), no hay recarga de página. React necesita una librería que "simule" la navegación cambiando componentes según la URL.

**Mostrar en el navegador:**
- Abrir la app: `npm run dev`
- Navegar con las categorías del NavBar → ver que la URL cambia pero la página NO se recarga
- Comparar mentalmente con un sitio tradicional que haría un request HTTP nuevo por cada clic

**Preguntar a la clase:** ¿Cómo sabe React qué componente mostrar según la URL?

---

## PASO 2 — Estructura de rutas en App.jsx

**Archivo:** [App.jsx](src/App.jsx)

**Mostrar y explicar los 3 bloques fundamentales:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router";
```

| Componente | ¿Qué hace? |
|---|---|
| `BrowserRouter` | Envuelve toda la app. Da contexto de enrutamiento a todos los hijos |
| `Routes` | Evalúa las rutas de arriba hacia abajo y renderiza la primera que coincide |
| `Route` | Define una URL y el componente que debe mostrarse |

**Mostrar las 4 rutas definidas:**

```jsx
<Route path="/"                        element={<ItemListContainer />} />  // Home
<Route path="/category/:categoryName"  element={<ItemListContainer />} />  // Categoría
<Route path="/wine/:itemId"            element={<ItemDetailContainer />} /> // Detalle
<Route path="*"                        element={<NotFound />} />            // 404
```

**Puntos clave a destacar:**
- El `:` en `:categoryName` y `:itemId` indica **parámetro dinámico** (captura el valor de la URL)
- El `*` es la ruta "catch-all" y **siempre va al final** (si estuviera primero, siempre se renderizaría)
- `NavBar` está **fuera de `<Routes>`** → se muestra en todas las páginas

**Probar en el navegador:**
- Ir a `/` → carga todos los vinos
- Ir a `/category/tinto` → carga solo tintos
- Ir a `/wine/1` → carga el detalle del vino 1
- Ir a `/cualquier-cosa` → muestra el 404

---

## PASO 3 — Link vs `<a>` en NavBar.jsx

**Archivo:** [NavBar.jsx](src/components/NavBar.jsx)

**Mostrar la diferencia central:**

```jsx
// ❌ HTML tradicional — recarga la página completa
<a href="/category/tinto">Tinto</a>

// ✅ React Router — solo cambia el componente, sin recarga
<Link to="/category/tinto">Tinto</Link>
```

**Demo en el navegador:**
1. Abrir DevTools → pestaña Network
2. Hacer clic en una categoría del NavBar
3. Ver que **no hay un nuevo request HTTP** → la página no recargó
4. Ver que la URL cambió en la barra de direcciones

**Mostrar cómo se generan los links de categorías dinámicamente:**

```jsx
const uniqueCategories = [...new Set(wines.map((wine) => wine.category))];

{uniqueCategories.map((category) => (
    <Link to={`/category/${category}`}>
        {category}
    </Link>
))}
```

→ Esto genera automáticamente `/category/tinto`, `/category/blanco`, etc. desde los datos, sin hardcodear nada.

---

## PASO 4 — useParams en ItemListContainer.jsx

**Archivo:** [ItemListContainer.jsx](src/components/ItemListContainer.jsx)

**Concepto:** `useParams()` es el hook que permite leer los parámetros dinámicos de la URL desde dentro de un componente.

```jsx
import { useParams } from "react-router";

const { categoryName } = useParams();
```

**Mostrar el flujo completo:**

```
Usuario hace clic en "Tinto"
    → Link navega a "/category/tinto"
    → Routes renderiza ItemListContainer
    → useParams() extrae: { categoryName: "tinto" }
    → useEffect filtra los vinos por categoría "tinto"
    → Se renderizan solo los vinos tintos
```

**Punto clave — el mismo componente para dos rutas:**

```jsx
// En App.jsx, ambas rutas usan el mismo componente:
<Route path="/"                       element={<ItemListContainer />} />
<Route path="/category/:categoryName" element={<ItemListContainer />} />
```

```jsx
// En el componente, categoryName decide qué mostrar:
if (categoryName) {
    setItems(data.filter(wine => wine.category === categoryName));
} else {
    setItems(data);  // Sin categoryName → muestra todo
}
```

**Probar en el navegador:**
- Ir a `/` → `categoryName` es `undefined` → muestra todos los vinos
- Ir a `/category/blanco` → `categoryName` es `"blanco"` → filtra
- Ir a `/category/espumante` → cambia sin recargar
- Ir a `/category/cerveza` → categoría inválida → muestra NotFound

---

## PASO 5 — Link con parámetro dinámico en Item.jsx

**Archivo:** [Item.jsx](src/components/Item.jsx)

**Mostrar cómo cada tarjeta de producto genera su propio link:**

```jsx
<Link to={`/wine/${item.id}`}>
    Detalle
</Link>
```

Si `item.id = 5` → genera `/wine/5`. Si `item.id = 12` → genera `/wine/12`.

**Probar en el navegador:**
- Hacer hover sobre el botón "Detalle" de distintas tarjetas
- Ver en la barra de estado del navegador que cada una apunta a una URL diferente
- Hacer clic → navega al detalle sin recargar

---

## PASO 6 — useParams para el detalle en ItemDetailContainer.jsx

**Archivo:** [ItemDetailContainer.jsx](src/components/ItemDetailContainer.jsx)

```jsx
const { itemId } = useParams();
// URL "/wine/5" → itemId = "5"  (siempre string, aunque parezca número)
```

**Flujo completo del detalle:**

```
Usuario hace clic en "Detalle" de un vino
    → Link navega a "/wine/5"
    → Routes renderiza ItemDetailContainer
    → useParams() extrae: { itemId: "5" }
    → useEffect busca: wines.find(w => w.id === Number(itemId))
    → Renderiza ItemDetail con los datos del vino encontrado
```

**Punto importante — conversión de tipo:**

```jsx
// itemId viene como string "5", pero wine.id es número 5
const wine = data.find(wine => wine.id === Number(itemId));
//                                        ↑ Convierte "5" → 5
```

**Mostrar validación:**
- Ir a `/wine/999` → ID no existe → NotFound
- Ir a `/wine/abc` → no es número → NotFound
- Ir a `/wine/1` → ID válido → detalle del vino

---

## PASO 7 — Ruta catch-all y NotFound.jsx

**Archivo:** [NotFound.jsx](src/components/NotFound.jsx)

La ruta `path="*"` captura cualquier URL que no haya coincidido antes. Por eso siempre va **al final**.

**Mostrar que también usa `Link` para volver al home:**

```jsx
<Link to="/">Volver al inicio</Link>
```

**Casos en los que aparece el 404:**
1. URL que no coincide con ninguna ruta → regla `path="*"` en App.jsx
2. Categoría inválida → validación manual en `ItemListContainer`
3. ID de vino inválido → validación manual en `ItemDetailContainer`

---

## PASO 8 — Repaso del flujo completo

**Dibujar/mostrar la cadena completa en vivo:**

```
NavBar                          App.jsx (Routes)                   Componente
──────                          ────────────────                   ──────────
Link to="/"               →     Route path="/"              →      ItemListContainer (todos)
Link to="/category/tinto" →     Route path="/category/:c"   →      ItemListContainer (filtrado)
                                  ↓ useParams → categoryName = "tinto"

Item: Link to="/wine/5"   →     Route path="/wine/:itemId"  →      ItemDetailContainer
                                  ↓ useParams → itemId = "5"
                                  ↓ busca vino con id 5
                                                              →      ItemDetail (muestra datos)

URL inválida              →     Route path="*"              →      NotFound
```

---

## 🧩 Estructura de Componentes

```
App.jsx (BrowserRouter + Routes)
├── NavBar                    → Link (home + categorías dinámicas desde datos)
└── Routes
    ├── /                     → ItemListContainer → ItemList → Item → Link a detalle
    ├── /category/:c          → ItemListContainer → ItemList → Item → Link a detalle
    ├── /wine/:itemId         → ItemDetailContainer → ItemDetail → ItemCount
    └── *                     → NotFound → Link de vuelta a home
```

---

## 📦 Datos

La app usa **40 vinos** en [winesData.js](src/winesData.js) con 4 categorías:

| Categoría | Vinos |
|---|---|
| `tinto` | 10 |
| `blanco` | 10 |
| `espumante` | 10 |
| `rosado` | 10 |

Las categorías del NavBar se generan **automáticamente** desde los datos — no están hardcodeadas.

---

## 🎯 Conceptos clave de la clase

| Concepto | Archivo donde se ve |
|---|---|
| `BrowserRouter` | App.jsx — envuelve todo |
| `Routes` + `Route` | App.jsx — define las rutas |
| `Link` | NavBar.jsx, Item.jsx, NotFound.jsx |
| `useParams()` | ItemListContainer.jsx, ItemDetailContainer.jsx |
| Parámetro dinámico `:param` | `/category/:categoryName`, `/wine/:itemId` |
| Ruta catch-all `*` | NotFound — siempre al final |
| Componente fuera de Routes | NavBar — visible en todas las páginas |

---

## 🚀 Próximos Pasos

- **Clase 6**: Context API — estado global del carrito (reemplaza el "4" hardcodeado en CartWidget)
- **Clase 7**: Firestore — reemplazar `winesData.js` por una base de datos real
