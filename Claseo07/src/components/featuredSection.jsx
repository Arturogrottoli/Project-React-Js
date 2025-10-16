import { useState } from "react";
import { useCart } from "../context/cartcontext";


const TABS = [
  { id: "pekin", label: "Pekín" },
  { id: "madrid", label: "Madrid" },
  { id: "ny", label: "Nueva York" },
  { id: "cdmx", label: "Ciudad de México" },
  { id: "hk", label: "Hong Kong" },
  { id: "rio", label: "Río de Janeiro" },
  { id: "orl", label: "Orlando" },
];


const PH = "/img/placeholder.jpg"; 
const DATA = {
  pekin: [
    { id: "F-P-1", title: "Jingli Hongyizhan Hotel",  price: 30,  img: "/img/hotel1.jpg", stock: 99, city: "Pekín", rating: 9.3, reviews: 4723 },
    { id: "F-P-2", title: "Huanyi Hotel Panjiayuan",  price: 29,  img: "/img/hotel2.jpg", stock: 99, city: "Pekín", rating: 9.4, reviews: 2172 },
    { id: "F-P-3", title: "CitiGO Sanyuanqiao",      price: 75,  img: "/img/hotel3.jpg", stock: 99, city: "Pekín", rating: 9.6, reviews: 12002 },
    { id: "F-P-4", title: "Smart Stay Beijing",       price: 71,  img: "/public/img/hotel4.jpeg", stock: 99, city: "Pekín", rating: 9.2, reviews: 8650 },
  ],
  madrid: [
    { id: "F-M-1", title: "Gran Vía Boutique",        price: 82,  img: "/img/hotel5.jpg", stock: 99, city: "Madrid", rating: 9.0, reviews: 5400 },
    { id: "F-M-2", title: "Plaza Mayor Suites",       price: 67,  img: "/img/hotel6.jpg", stock: 99, city: "Madrid", rating: 8.9, reviews: 3201 },
    { id: "F-M-3", title: "Retiro Park Rooms",        price: 59,  img: "/img/hotel7.jpg", stock: 99, city: "Madrid", rating: 9.1, reviews: 4020 },
    { id: "F-M-4", title: "Atocha Hub Hotel",         price: 74,  img: "/img/hotel8.jpg", stock: 99, city: "Madrid", rating: 9.2, reviews: 5108 },
  ],
  ny:    [{ id: "F-NY-1", title: "Times Square Stay", price: 120, img: "/img/hotel9.jpg", stock: 99, city: "Nueva York", rating: 9.4, reviews: 9800 }],
  cdmx:  [{ id: "F-CDMX-1", title: "Condesa Blue",    price: 54,  img: "/img/hotel10.jpg", stock: 99, city: "CDMX", rating: 9.1, reviews: 4100 }],
  hk:    [{ id: "F-HK-1", title: "Harbour View",      price: 88,  img: "/img/hotel11.jpg", stock: 99, city: "Hong Kong", rating: 9.3, reviews: 6200 }],
  rio:   [{ id: "F-RIO-1", title: "Ipanema Prime",    price: 69,  img: "/img/hotel12.jpg", stock: 99, city: "Río de Janeiro", rating: 9.0, reviews: 5300 }],
  orl:   [{ id: "F-ORL-1", title: "Lake Buena Vista", price: 79,  img: "/img/hotel13.jpg", stock: 99, city: "Orlando", rating: 9.2, reviews: 4500 }],
};

export default function FeaturedSection() {
  const [tab, setTab] = useState("pekin");
  const { addItem } = useCart();
  const items = DATA[tab] || [];

  const handleAdd = (hotel) => {
    // "producto" para el carrito
    const product = {
      id: hotel.id,
      title: hotel.title,
      price: hotel.price,
      img: hotel.img || PH,
      stock: hotel.stock ?? 99,
      // "alojamientos"  // 
    };
    addItem(product, 1);
  };

  return (
    <section className="featured container" aria-label="Alojamientos destacados">
      <header className="featured-header">
        <h2>Alojamientos destacados</h2>
        <ul className="perks">
          <li>Igualamos los precios</li>
          <li>Garantía de reserva en el hotel</li>
          <li>Garantía de estancia en el hotel</li>
        </ul>
      </header>

      <ul className="pill-tabs" role="tablist">
        {TABS.map(t => (
          <li key={t.id}>
            <button
              role="tab"
              aria-selected={tab === t.id}
              className={tab === t.id ? "pill active" : "pill"}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="featured-grid">
        {items.map(h => (
          <article key={h.id} className="card hotel-card">
            <div className="hotel-img">
              <img src={h.img || PH} alt={h.title} loading="lazy" />
              <span className="chip">{h.city}</span>
            </div>
            <div className="hotel-body">
              <h3>{h.title}</h3>
              <div className="rating-line">
                <span className="rating-badge">{h.rating?.toFixed(1) ?? "9.0"}</span>
                <span className="muted">{(h.reviews || 0).toLocaleString()} comentarios</span>
              </div>
              <div className="price-line">
                Desde <strong>{h.price} US$</strong>
              </div>
              <div className="hotel-actions">
                <button className="btn" onClick={() => handleAdd(h)}>Agregar al carrito</button>
                <a className="btn link" href="#catalogo">Ver ahora</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
