import { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial)
  const dec = () => setQty(q => Math.max(1, q - 1))
  const inc = () => setQty(q => Math.min(stock, q + 1))

  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}>
      <button onClick={dec} disabled={qty <= 1}>-</button>
      <span>{qty}</span>
      <button onClick={inc} disabled={qty >= stock}>+</button>
      <button onClick={() => onAdd?.(qty)} disabled={stock === 0}>Agregar</button>
    </div>
  )
}
