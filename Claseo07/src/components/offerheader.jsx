import React from "react";

const COUPONS = [
  { icon: "🏨", title: "Descuento en hoteles", value: "−5 %" },
  { icon: "🚆", title: "Trenes del Reino Unido", value: "−2 %" },
];

export default function OfferHeader() {
  return (
    <section className="welcome-pack container" aria-label="Paquete de bienvenida">
      {/* Columna izquierda */}
      <div className="wp-left">
        <span className="badge">Paquete de bienvenida</span>
        <h2>Ahorra en tu 1.ª reserva</h2>
        <ul className="perks">
          <li>Igualamos los precios</li>
          <li>Garantía de reserva en el hotel</li>
          <li>Atención 24/7</li>
        </ul>
        <a className="btn primary" href="#catalogo">Iniciar sesión y solicitar</a>
      </div>

      {/* Columna del medio: cupones */}
      <div className="wp-coupons">
        {COUPONS.map(c => (
          <article key={c.title} className="coupon" aria-label={c.title}>
            <header className="coupon-head">
              <span className="coupon-emoji" aria-hidden>{c.icon}</span>
              <span>{c.title}</span>
            </header>
            <div className="coupon-value">{c.value}</div>
          </article>
        ))}
      </div>

      {/* Columna derecha: highlight */}
      <div className="wp-highlight">
        <div className="highlight-img" role="img" aria-label="Oferta destacada" />
        <div className="highlight-content">
          <strong>Oferta del día</strong>
          <span className="muted">Hasta 25% OFF</span>
          <a href="#catalogo" className="btn link">Ver ahora</a>
        </div>
      </div>
    </section>
  );
}
