// src/components/NavBar.jsx
import { Link, NavLink } from 'react-router-dom'
import { CATEGORIES } from '../data/products'
import CartWidget from './CartWidget'
import logo from '../assets/logo.svg'

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Principal">
        <Link to="/" aria-label="Inicio" className="brand">
          <img src={logo} alt="Vuelos y Más" />
          
        </Link>

        <ul className="tabs">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <NavLink
                to={`/category/${c.id}`}
                className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
              >
                {c.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <CartWidget />
        </div>
      </nav>
    </header>
  )
}
