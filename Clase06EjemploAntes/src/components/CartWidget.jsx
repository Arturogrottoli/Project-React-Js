import { Link } from 'react-router-dom'

// TODO: Aquí vamos a implementar el contexto del carrito
// Por ahora solo mostramos el icono sin funcionalidad

export default function CartWidget(){
  return (
    <Link to="/cart" className="row" aria-label="Carrito">
      <span>🛒</span>
      {/* TODO: Mostrar badge con cantidad cuando implementemos el contexto */}
    </Link>
  )
}

