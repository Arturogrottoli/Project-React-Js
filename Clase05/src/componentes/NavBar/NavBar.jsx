import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  // useLocation nos permite obtener información sobre la ruta actual
  const location = useLocation()

  // Función para determinar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo/Brand */}
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          🛍️ Mi Tienda
        </Link>

        {/* Navegación Principal */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              color: isActive('/') ? '#3498db' : 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: isActive('/') ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            🏠 Inicio
          </Link>

          <Link 
            to="/about" 
            style={{
              color: isActive('/about') ? '#3498db' : 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: isActive('/about') ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            ℹ️ Acerca de
          </Link>

          <Link 
            to="/contact" 
            style={{
              color: isActive('/contact') ? '#3498db' : 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: isActive('/contact') ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            📞 Contacto
          </Link>

          {/* Enlaces con parámetros */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginLeft: '2rem',
            paddingLeft: '2rem',
            borderLeft: '1px solid rgba(255,255,255,0.2)'
          }}>
            <Link 
              to="/product/1" 
              style={{
                color: isActive('/product/1') ? '#e74c3c' : 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor: isActive('/product/1') ? 'rgba(231, 76, 60, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
            >
              📱 Producto 1
            </Link>

            <Link 
              to="/product/2" 
              style={{
                color: isActive('/product/2') ? '#e74c3c' : 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor: isActive('/product/2') ? 'rgba(231, 76, 60, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
            >
              💻 Producto 2
            </Link>

            <Link 
              to="/category/electronics" 
              style={{
                color: isActive('/category/electronics') ? '#f39c12' : 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor: isActive('/category/electronics') ? 'rgba(243, 156, 18, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
            >
              ⚡ Electrónicos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
