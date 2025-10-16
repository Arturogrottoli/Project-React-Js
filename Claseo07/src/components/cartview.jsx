import { useCart } from "../context/cartcontext";

export default function CartView() {
  const { items, totalPrice, removeItem, clear, updateQty } = useCart();

  if (!items.length) return <p>Tu carrito está vacío.</p>;

  return (
    <section className="container">
      <h2>Carrito</h2>
      <ul style={{ listStyle:'none', padding:0, display:'grid', gap:12 }}>
        {items.map(it => (
          <li key={it.id} className="card" style={{ display:'grid', gridTemplateColumns:'80px 1fr auto', gap:12, alignItems:'center' }}>
            <img src={it.img} alt={it.title} style={{ width:80, height:80, objectFit:'cover', borderRadius:8 }} />
            <div>
              <strong>{it.title}</strong>
              <div style={{ opacity:.8 }}>USD {it.price}</div>
              <div style={{ marginTop:6 }}>
                Cantidad:{" "}
                <input type="number" min={1} max={it.stock} value={it.qty}
                  onChange={e => updateQty(it.id, Math.max(1, Math.min(it.stock, Number(e.target.value))))}
                  style={{ width:64 }} />
              </div>
            </div>
            <div style={{ display:'grid', gap:8 }}>
              <button onClick={() => removeItem(it.id)}>Quitar</button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop:16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <button onClick={clear}>Vaciar carrito</button>
        <h3>Total: USD {totalPrice.toFixed(2)}</h3>
      </div>
    </section>
  );
}
