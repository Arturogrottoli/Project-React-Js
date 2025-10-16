import ItemCount from './ItemCount'
import { useCart } from '../context/cartcontext'

export default function ItemDetail({ item }) {
  const { addItem } = useCart();

  const onAdd = (qty) => {
    addItem(item, qty);
    alert(`Agregaste ${qty} × ${item.title} al carrito`);
  };

  return (
    <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', alignItems:'start' }}>
      <div style={{ aspectRatio:'4/3', background:'#111', display:'grid', placeItems:'center' }}>
        {item.img ? <img src={item.img} alt={item.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} /> : <span>IMG</span>}
      </div>
      <div>
        <h2>{item.title}</h2>
        <p style={{ opacity:.85 }}>{item.description}</p>
        <p><strong>USD {item.price}</strong></p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </section>
  )
}
