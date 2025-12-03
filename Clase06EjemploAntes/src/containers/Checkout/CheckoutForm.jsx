import { useState } from 'react'
import { money } from '../../utils/currency.js'
import { createOrder } from '../../services/dataService.js'

// TODO: Aquí vamos a implementar el contexto del carrito
// Por ahora mostramos un mensaje indicando que el checkout no está disponible

export default function CheckoutForm(){
  // TODO: Obtener items, totalPrice y clear del contexto con useCart()
  const items = []; // Placeholder - será reemplazado con el contexto
  const totalPrice = 0; // Placeholder - será reemplazado con el contexto
  
  const [buyer, setBuyer] = useState({ name:'', email:'', phone:'' });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    // TODO: Implementar la lógica de checkout cuando tengamos el contexto
    console.log('Checkout no implementado aún');
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
      <p className="small">El checkout se implementará con React Context</p>
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

