import { Link } from 'react-router-dom'
import EmptyState from '../../components/EmptyState.jsx'
import { money } from '../../utils/currency.js'

// TODO: Aquí vamos a implementar el contexto del carrito
// Por ahora mostramos un mensaje indicando que el carrito está vacío

export default function Cart(){
  // TODO: Obtener items del contexto con useCart()
  const items = []; // Placeholder - será reemplazado con el contexto

  if (items.length === 0) {
    return <EmptyState title="Carrito vacío" subtitle="Agregá productos al carrito" />
  }

  // TODO: Implementar la vista del carrito cuando tengamos el contexto
  return (
    <section className="card" style={{gap:16}}>
      <h2>Tu carrito</h2>
      <p className="small">El carrito se implementará con React Context</p>
    </section>
  );
}

