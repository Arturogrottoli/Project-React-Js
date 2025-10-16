import React from 'react'
import { Link } from 'react-router-dom'


const Navbar2 = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link" to="/">Todos</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categoria/samsung">Samsung</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categoria/iphone">Iphone</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categoria/accesorios">Accesorios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar2