import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>404 — Página no encontrada</h2>
      <p>Verifica la URL o vuelve al inicio.</p>
      <Link to="/">Ir al Home</Link>
    </section>
  )
}
