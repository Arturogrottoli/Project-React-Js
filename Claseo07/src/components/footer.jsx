import { Link, NavLink } from 'react-router-dom'
import { CATEGORIES } from '../data/products'
import logo from '../assets/logo.svg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">

        <div className="footer-brand">
          <Link to="/" className="brand" aria-label="Vuelos y Más — Inicio">
            <img src={logo} alt="Vuelos y Más" />
            
          </Link>
          <p className="muted" style={{marginTop:8}}>
            Viajes, equipaje y confort al mejor precio.
          </p>
          <div className="social">
            <a href="#" className="social-btn" aria-label="Instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 9.999A5 5 0 0 0 12 7zm6.5-.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6z"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="X" title="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h3.1l4.3 6.2L15.6 4H20l-6.8 8.4L20 20h-3.1l-4.9-7.1L7.4 20H4l7.2-8.9z"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="YouTube" title="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.2-.9C16.9 4 12 4 12 4h0s-4.9 0-8 .3c-.5 0-1.4 0-2.2.9C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.3C.8 14.4 1 16.3 1 16.3s.2 1.6.8 2.3c.8.9 1.8.9 2.3.9 1.7.2 7.9.3 7.9.3s4.9 0 8-.3c.5 0 1.4 0 2.2-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.3C23.2 9.4 23 7.5 23 7.5zM9.8 14.8V8.9l6 2.95-6 2.95z"/></svg>
            </a>
          </div>
        </div>


        <nav className="footer-col" aria-label="Explorar">
          <h4>Explorar</h4>
          <ul>
            {CATEGORIES.map(c => (
              <li key={c.id}>
                <NavLink to={`/category/${c.id}`}>{c.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>


        <nav className="footer-col" aria-label="Ayuda">
          <h4>Ayuda</h4>
          <ul>
            <li><Link to="#">Atención al cliente</Link></li>
            <li><Link to="#">Garantía de servicio</Link></li>
            <li><Link to="#">Términos y condiciones</Link></li>
          </ul>
        </nav>


        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="contact-list">
            <li><a href="mailto:hola@vuelosymas.test">hola@vuelosymas.test</a></li>
            <li><a href="tel:+000000000">+00 000 000</a></li>
          </ul>
          <div className="payments" aria-label="Métodos de pago">
            <span className="pay-badge">Visa</span>
            <span className="pay-badge">Mastercard</span>
            <span className="pay-badge">Amex</span>
            <span className="pay-badge">PayPal</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Vuelos y Más. Todos los derechos reservados.</span>
          <a href="#" className="link-small">Política de privacidad</a>
        </div>
      </div>
    </footer>
  )
}
