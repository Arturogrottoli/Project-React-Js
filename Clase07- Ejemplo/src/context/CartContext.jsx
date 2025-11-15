import { createContext, useContext, useMemo, useState } from 'react'

/* 
  React Context (explicado simple)
  - Pensá en Context como una “caja compartida” donde guardamos datos que varias pantallas necesitan.
  - Para usarla: 1) creamos la caja (createContext), 2) envolvemos la app con un “Proveedor” (Provider),
    3) desde cualquier componente pedimos lo que hay en la caja (useContext).
  - En este archivo armamos la caja del carrito de compras.
  - En main.jsx envolvemos la app con <CartProvider> para que todos puedan usar esa caja.
*/

// Contexto del carrito: define “la caja” donde vive el carrito
const CartContext = createContext()
// Hook de conveniencia: es una función cortita que nos ahorra escribir useContext(CartContext) cada vez
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  // Estado del carrito: lista de productos en el carrito
  // Cada ítem guarda lo necesario para mostrar y calcular (id, título, precio, cantidad, imagen)
  const [items, setItems] = useState([]) // {id, title, price, qty, image}

  // addItem(product, qty):
  // - Si el producto ya estaba en el carrito, le sumamos “qty” a su cantidad actual.
  // - Si no estaba, lo agregamos como una nueva línea.
  // - Nunca dejamos que la cantidad supere el stock disponible del producto.
  const addItem = (product, qty) => {
    setItems(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) {
        return prev.map(p => (p.id === product.id ? { ...p, qty: Math.min(p.qty + qty, product.stock) } : p))
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, qty, image: product.image }]
    })
  }

  // removeItem(id): borra del carrito el producto con ese id
  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id))
  // clear(): vacía todo el carrito
  const clear = () => setItems([])

  // Totales calculados automáticamente:
  // - totalQty: cuántas unidades hay en el carrito en total
  // - totalPrice: cuánto suma todo el carrito en dinero
  // Se recalculan solo cuando cambia “items” (gracias a useMemo).
  const totals = useMemo(() => {
    const totalQty = items.reduce((acc, p) => acc + p.qty, 0)
    const totalPrice = items.reduce((acc, p) => acc + p.qty * p.price, 0)
    return { totalQty, totalPrice }
  }, [items])

  // Lo que compartimos en la “caja” del carrito:
  // - items: la lista del carrito
  // - addItem: agrega o incrementa un producto
  // - removeItem: borra un producto
  // - clear: vacía el carrito
  // - totalQty, totalPrice: totales listos para mostrar
  // Cualquier componente dentro de <CartProvider> puede acceder a esto con: const { ... } = useCart()
  const value = { items, addItem, removeItem, clear, ...totals }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
