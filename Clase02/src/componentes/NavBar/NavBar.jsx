import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


  return (
    <header>
        <h1>Tienda Almacen</h1>

        <nav>
            <ul>
              <li>Almacen</li>
                <li>Lacteos</li>
                <li>Bebidas</li>
               
            </ul>

        </nav>

         <CartWidget/>   


    </header>
  )
}

export default NavBar