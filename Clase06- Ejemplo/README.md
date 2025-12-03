# Clase 6: React Context - CartContext

## 📚 ¿Qué es React Context?

**React Context** es una funcionalidad de React que nos permite compartir datos entre componentes sin necesidad de pasar props manualmente por cada nivel del árbol de componentes (lo que se conoce como "prop drilling").

### Problema que resuelve

Imagina que tienes un carrito de compras que necesita ser accesible desde:
- `NavBar` (para mostrar la cantidad de items)
- `ItemDetail` (para agregar productos)
- `Cart` (para mostrar y modificar el carrito)
- `CheckoutForm` (para procesar la compra)

Sin Context, tendrías que pasar el estado del carrito como props desde `App` → `NavBar`, `App` → `ItemDetail`, etc. Esto se vuelve complicado y difícil de mantener.

Con Context, creamos un "almacén global" que cualquier componente puede acceder directamente.

---

## 🚀 Paso a Paso: Implementación del CartContext

### **PASO 1: Crear la estructura de carpetas**

Primero, creamos la carpeta `context` dentro de `src`:

```
src/
  ├── context/
  │   └── CartContext.jsx  ← Aquí vamos a crear nuestro contexto
  ├── components/
  ├── containers/
  └── ...
```

**¿Por qué una carpeta separada?**
- Organización: separamos la lógica de contexto del resto del código
- Escalabilidad: si más adelante necesitamos otros contextos (UserContext, ThemeContext, etc.), ya tenemos la estructura lista

---

### **PASO 2: Crear el CartContext.jsx**

Creamos el archivo `src/context/CartContext.jsx` con la siguiente estructura:

#### 2.1 Importar las funciones necesarias de React

```javascript
import { createContext, useContext, useMemo, useState } from 'react'
```

**Explicación:**
- `createContext`: Crea el "contenedor" donde guardaremos nuestros datos
- `useContext`: Hook para acceder a los datos del contexto
- `useMemo`: Hook para calcular valores derivados de forma eficiente
- `useState`: Hook para manejar el estado del carrito

#### 2.2 Crear el Context

```javascript
const CartContext = createContext()
```

**¿Qué hace esto?**
- Crea un "contenedor vacío" que más adelante llenaremos con datos
- Es como crear una caja que todavía no tiene nada adentro

#### 2.3 Crear el hook personalizado `useCart`

```javascript
export const useCart = () => useContext(CartContext)
```

**¿Por qué crear este hook?**
- Es una convención: en lugar de escribir `useContext(CartContext)` en cada componente, creamos un hook más descriptivo
- Si en el futuro necesitamos cambiar cómo accedemos al contexto, solo modificamos este archivo
- Hace el código más legible: `const { items } = useCart()` es más claro que `const { items } = useContext(CartContext)`

#### 2.4 Crear el Provider Component

```javascript
export function CartProvider({ children }) {
  // Aquí va toda la lógica del carrito
}
```

**¿Qué es el Provider?**
- Es un componente que "envuelve" a otros componentes
- Proporciona acceso al contexto a todos sus hijos
- `children` son los componentes que envuelve (en nuestro caso, toda la app)

#### 2.5 Agregar el estado del carrito

```javascript
const [items, setItems] = useState([])
```

**Estructura de cada item:**
```javascript
{
  id: 1,
  title: "Vino Tinto",
  price: 1500,
  qty: 2,
  image: "url-de-la-imagen"
}
```

**¿Por qué guardamos estos datos?**
- `id`: Para identificar el producto
- `title`, `price`, `image`: Para mostrar en el carrito sin necesidad de buscar el producto completo
- `qty`: Cantidad de ese producto en el carrito

#### 2.6 Crear las funciones del carrito

##### **addItem(product, qty)**

```javascript
const addItem = (product, qty) => {
  setItems(prev => {
    // Buscar si el producto ya existe en el carrito
    const exists = prev.find(p => p.id === product.id)
    
    if (exists) {
      // Si existe, actualizar la cantidad (sin superar el stock)
      return prev.map(p => 
        p.id === product.id 
          ? { ...p, qty: Math.min(p.qty + qty, product.stock) } 
          : p
      )
    }
    
    // Si no existe, agregarlo como nuevo item
    return [...prev, { 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      qty, 
      image: product.image 
    }]
  })
}
```

**Lógica paso a paso:**
1. Buscamos si el producto ya está en el carrito
2. Si existe: actualizamos su cantidad (sumamos `qty` pero no superamos el `stock`)
3. Si no existe: lo agregamos como un nuevo item

**¿Por qué `Math.min(p.qty + qty, product.stock)`?**
- Evita que el usuario agregue más productos de los disponibles
- Si el stock es 5 y ya hay 3 en el carrito, solo puede agregar 2 más

##### **removeItem(id)**

```javascript
const removeItem = id => setItems(prev => prev.filter(p => p.id !== id))
```

**¿Qué hace?**
- Filtra el array, eliminando el item con el `id` especificado
- Devuelve un nuevo array sin ese item

##### **clear()**

```javascript
const clear = () => setItems([])
```

**¿Qué hace?**
- Vacía completamente el carrito
- Útil después de completar una compra

#### 2.7 Calcular totales con useMemo

```javascript
const totals = useMemo(() => {
  const totalQty = items.reduce((acc, p) => acc + p.qty, 0)
  const totalPrice = items.reduce((acc, p) => acc + p.qty * p.price, 0)
  return { totalQty, totalPrice }
}, [items])
```

**¿Qué es useMemo?**
- Hook que memoriza un valor calculado
- Solo recalcula cuando cambian las dependencias (en este caso, `items`)
- Mejora el rendimiento: evita recalcular en cada render

**Cálculos:**
- `totalQty`: Suma todas las cantidades (ej: 2 + 3 + 1 = 6 items)
- `totalPrice`: Suma precio × cantidad de cada item (ej: (2×1500) + (3×2000) = 9000)

#### 2.8 Preparar el valor del contexto

```javascript
const value = { 
  items,           // Lista de productos en el carrito
  addItem,         // Función para agregar productos
  removeItem,      // Función para eliminar un producto
  clear,           // Función para vaciar el carrito
  ...totals        // Desestructura totalQty y totalPrice
}
```

**¿Qué contiene `value`?**
- Todo lo que queremos compartir con los componentes hijos
- Cualquier componente dentro del Provider puede acceder a esto

#### 2.9 Retornar el Provider

```javascript
return <CartContext.Provider value={value}>{children}</CartContext.Provider>
```

**¿Qué hace esto?**
- `CartContext.Provider`: Componente que "provee" el contexto
- `value={value}`: Los datos que compartimos
- `{children}`: Los componentes hijos que tendrán acceso al contexto

---

### **PASO 3: Envolver la aplicación con el Provider**

Ahora necesitamos que toda la aplicación tenga acceso al contexto. Modificamos `src/main.jsx`:

#### 3.1 Importar el CartProvider

```javascript
import { CartProvider } from './context/CartContext.jsx'
```

#### 3.2 Envolver la app

```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
```

**Orden de los Providers:**
- `BrowserRouter` debe estar fuera (para que las rutas funcionen)
- `CartProvider` dentro de `BrowserRouter` (para que tenga acceso a las rutas si es necesario)
- `App` dentro de todo (para que tenga acceso a ambos)

**¿Por qué este orden?**
- Los Providers más externos deben envolver a los internos
- Si necesitáramos usar `useNavigate` dentro del contexto, necesitaríamos que `BrowserRouter` esté fuera

---

### **PASO 4: Usar el contexto en los componentes**

Ahora cualquier componente puede acceder al carrito usando el hook `useCart()`.

#### 4.1 Ejemplo: CartWidget (mostrar cantidad)

```javascript
import { useCart } from '../context/CartContext.jsx'

export default function CartWidget() {
  const { totalQty } = useCart()
  
  return (
    <Link to="/cart">
      <span>🛒</span>
      {totalQty > 0 && <span className="badge">{totalQty}</span>}
    </Link>
  )
}
```

**¿Qué hace?**
- Importa `useCart` del contexto
- Extrae `totalQty` (cantidad total de items)
- Muestra un badge con la cantidad si hay items en el carrito

#### 4.2 Ejemplo: ItemDetail (agregar productos)

```javascript
import { useCart } from '../context/CartContext.jsx'

export default function ItemDetail({ product }) {
  const { addItem, items } = useCart()
  
  // Calcular cuántos ya están en el carrito
  const inCartQty = items.find(i => i.id === product.id)?.qty || 0
  const availableStock = Math.max(0, product.stock - inCartQty)
  
  const onAdd = (qty) => {
    addItem(product, qty)
  }
  
  return (
    <ItemCount 
      stock={availableStock} 
      onAdd={onAdd} 
    />
  )
}
```

**¿Qué hace?**
- Usa `addItem` para agregar productos al carrito
- Usa `items` para calcular el stock disponible (stock total - cantidad en carrito)
- Evita que el usuario agregue más de lo disponible

#### 4.3 Ejemplo: Cart (mostrar y modificar carrito)

```javascript
import { useCart } from '../../context/CartContext.jsx'

export default function Cart() {
  const { items, removeItem, clear, totalPrice } = useCart()
  
  if (items.length === 0) {
    return <EmptyState title="Carrito vacío" />
  }
  
  return (
    <section>
      {items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onRemove={removeItem} 
        />
      ))}
      <div>
        <button onClick={clear}>Vaciar</button>
        <strong>Total: {totalPrice}</strong>
      </div>
    </section>
  )
}
```

**¿Qué hace?**
- Muestra todos los items del carrito
- Permite eliminar items individuales con `removeItem`
- Permite vaciar todo el carrito con `clear`
- Muestra el total calculado automáticamente

---

## 📋 Resumen del Flujo Completo

### 1. **Estructura del Context**
```
CartContext.jsx
├── createContext() → Crea el contenedor
├── useCart() → Hook personalizado para acceder
└── CartProvider → Componente que provee los datos
    ├── Estado: items (array)
    ├── Funciones: addItem, removeItem, clear
    └── Totales: totalQty, totalPrice (calculados)
```

### 2. **Configuración en main.jsx**
```
main.jsx
└── <CartProvider>
    └── <App />
        └── Todos los componentes tienen acceso
```

### 3. **Uso en componentes**
```
Cualquier componente
└── import { useCart } from '../context/CartContext.jsx'
    └── const { ... } = useCart()
        └── Acceso a items, addItem, removeItem, clear, totalQty, totalPrice
```

---

## 🎯 Ventajas de usar Context

1. **Evita prop drilling**: No necesitas pasar props por múltiples niveles
2. **Estado global**: El carrito está disponible en toda la app
3. **Código más limpio**: Cada componente accede directamente a lo que necesita
4. **Fácil de mantener**: La lógica del carrito está centralizada
5. **Reutilizable**: Puedes crear otros contextos siguiendo el mismo patrón

---

## 🔍 Conceptos Clave

### **createContext**
- Crea el "contenedor" donde guardaremos los datos
- Se crea una sola vez, fuera del componente

### **Provider**
- Componente que "envuelve" a otros componentes
- Proporciona acceso al contexto mediante la prop `value`

### **useContext**
- Hook para acceder a los datos del contexto
- Solo funciona dentro de componentes que están dentro del Provider

### **useMemo**
- Memoriza valores calculados
- Solo recalcula cuando cambian las dependencias
- Mejora el rendimiento

---

## ⚠️ Errores Comunes

### 1. **Usar useCart fuera del Provider**
```javascript
// ❌ ERROR: useCart fuera del Provider
function ComponenteFuera() {
  const { items } = useCart() // Error: Context is undefined
}

// ✅ CORRECTO: useCart dentro del Provider
<CartProvider>
  <ComponenteDentro /> {/* Aquí sí funciona */}
</CartProvider>
```

### 2. **Olvidar envolver la app con el Provider**
```javascript
// ❌ ERROR: App no tiene acceso al contexto
<App />

// ✅ CORRECTO: App envuelto por CartProvider
<CartProvider>
  <App />
</CartProvider>
```

### 3. **Modificar el estado directamente**
```javascript
// ❌ ERROR: No modificar directamente
items.push(newItem)

// ✅ CORRECTO: Usar las funciones del contexto
addItem(product, qty)
```

---

## 🚀 Próximos Pasos

Una vez implementado el CartContext, puedes:

1. **Agregar persistencia**: Guardar el carrito en localStorage
2. **Agregar validaciones**: Verificar stock antes de agregar
3. **Agregar animaciones**: Feedback visual al agregar items
4. **Crear otros contextos**: UserContext, ThemeContext, etc.

---

## 📝 Checklist de Implementación

- [ ] Crear carpeta `src/context/`
- [ ] Crear `CartContext.jsx` con createContext
- [ ] Crear hook personalizado `useCart`
- [ ] Crear componente `CartProvider`
- [ ] Agregar estado `items` con useState
- [ ] Implementar función `addItem`
- [ ] Implementar función `removeItem`
- [ ] Implementar función `clear`
- [ ] Calcular totales con useMemo
- [ ] Preparar objeto `value` con todos los datos
- [ ] Retornar CartContext.Provider
- [ ] Importar CartProvider en main.jsx
- [ ] Envolver App con CartProvider
- [ ] Usar useCart en CartWidget
- [ ] Usar useCart en ItemDetail
- [ ] Usar useCart en Cart
- [ ] Probar agregar productos
- [ ] Probar eliminar productos
- [ ] Probar vaciar carrito
- [ ] Verificar que los totales se calculan correctamente

---

¡Listo! Ahora tienes un carrito de compras completamente funcional usando React Context. 🎉
