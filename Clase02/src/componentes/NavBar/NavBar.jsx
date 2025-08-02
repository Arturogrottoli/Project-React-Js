import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


  return (
    <header>
        <h1>TechStore</h1>

        <nav>
            <ul>
              <li>Electrónicos</li>
                <li>Computadoras</li>
                <li>Accesorios</li>
               
            </ul>

        </nav>

         <CartWidget/>   


    </header>
  )
}

export default NavBar