import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget"
import { contexto } from '../Contexto/CartContext'

const NavBar = () => {

  const {calcCantidad, carrito} = useContext(contexto)

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-success ">
        <div class="container margen_izquierdo">
          <Link class="navbar-brand" to="/">TIENDACELL</Link>
          <img src="/assets/cell.webp" alt="celllogo" width="50px"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link" to="/">Productos</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <Link to="/carrito"><CartWidget/></Link>
          { carrito == 0 ? <span></span> : calcCantidad()}
        </div>
      </nav>      
    </header>
  )
}

export default NavBar