import { Link } from 'react-router-dom'

export default function Item({ product }) {
  return (
    <article className="card" aria-label={product.title}>
      <div className="img-wrap">
        {product.img ? (
          <img src={product.img} alt={product.title} loading="lazy" />
        ) : (
          <span className="img-ph">IMG</span>
        )}
      </div>

      <h3>{product.title}</h3>
      <p className="muted">{product.description}</p>
      <p><strong>USD {product.price}</strong></p>

      <Link
        className="btn link"
        to={`/item/${product.id}`}
        aria-label={`Ver detalle de ${product.title}`}
      >
        Ver detalle
      </Link>
    </article>
  )
}
