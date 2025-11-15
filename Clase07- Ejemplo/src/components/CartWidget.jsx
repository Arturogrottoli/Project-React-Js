import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

// Cómo usamos el contexto acá:
// - Importamos useCart para leer datos del carrito sin pasar props.
// - Leemos totalQty para mostrar la cantidad de productos en el icono del carrito.

export default function CartWidget(){
  const { totalQty } = useCart(); // totalQty: total de unidades en el carrito
  return (
    <Link to="/cart" className="row" aria-label="Carrito">
      <span>🛒</span>
      {totalQty > 0 && <span className="badge">{totalQty}</span>}
    </Link>
  )
}
