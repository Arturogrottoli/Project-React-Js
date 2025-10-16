import Item from './Item'

export default function ItemList({ items }) {
  if (!items.length) return <p>No hay productos en esta categoría.</p>

  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'1rem' }}>
      {items.map(p => <Item key={p.id} product={p} />)}
    </div>
  )
}
