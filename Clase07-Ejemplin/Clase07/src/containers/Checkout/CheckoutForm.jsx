import { useState } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import { money } from '../../utils/currency.js'
// Firestore en Checkout:
// - Validamos el stock actual de cada item del carrito
// - Descontamos el stock con un "batch" (todas las actualizaciones juntas)
// - Creamos una orden en la colección 'orders' con serverTimestamp()
import { addDoc, collection, serverTimestamp, writeBatch, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase.js'

export default function CheckoutForm(){
  const { items, totalPrice, clear } = useCart();
  const [buyer, setBuyer] = useState({ name:'', email:'', phone:'' });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    try {
      setLoading(true);
      setError(null);

      // ¿Por qué batch?
      // - Si actualizamos cada documento por separado y algo falla a la mitad, queda inconsistente.
      // - Con batch, o se aplican todos los cambios o ninguno.
      // 1) Validamos stock y preparamos batch para actualizar en una sola operación
      const batch = writeBatch(db);
      for (const cartItem of items){
        // ref: documento del producto a descontar /items/:id
        const ref = doc(db, 'items', cartItem.id);
        // Obtenemos el stock actual del documento
        const snap = await getDoc(ref);
        const current = snap.data();
        if (!current || current.stock < cartItem.qty) {
          throw new Error(`Sin stock para: ${cartItem.title}`);
        }
        // Preparamos la actualización de stock en el batch (todavía no se ejecuta)
        batch.update(ref, { stock: current.stock - cartItem.qty });
      }

      // 2) Creamos la orden en /orders con la información necesaria para el comprobante
      const order = {
        buyer,
        items: items.map(i => ({ id: i.id, title: i.title, price: i.price, qty: i.qty })),
        total: totalPrice,
        createdAt: serverTimestamp(),
        status: 'generated'
      };

      // Guardamos la orden y aplicamos el descuento de stock (commit del batch)
      const ref = await addDoc(collection(db, 'orders'), order);
      await batch.commit();
      setOrderId(ref.id);
      clear();
    } catch (err){
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (orderId) {
    return (
      <section className="card center">
        <h2>¡Gracias por tu compra!</h2>
        <p>Guardá este id de orden:</p>
        <code>{orderId}</code>
      </section>
    );
  }

  if (items.length === 0) {
    return <p className="center">Tu carrito está vacío.</p>
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form className="form" onSubmit={submit}>
        <input className="input" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} required />
        <input className="input" name="email" placeholder="Email" type="email" value={buyer.email} onChange={handleChange} required />
        <input className="input" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} required />
        <button className="btn" disabled={loading}>{loading ? 'Generando orden...' : `Confirmar compra (${money(totalPrice)})`}</button>
        {error && <p className="small" style={{color:'crimson'}}>{error}</p>}
      </form>
    </section>
  );
}
