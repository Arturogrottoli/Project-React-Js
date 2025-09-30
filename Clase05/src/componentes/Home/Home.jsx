import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        🏠 Página de Inicio
      </h1>

      <p style={{
        color: '#7f8c8d',
        fontSize: '1.2rem',
        marginBottom: '3rem',
        lineHeight: '1.6'
      }}>
        Bienvenido a nuestra tienda online. Explora nuestros productos y categorías.
      </p>

      {/* Grid de productos destacados */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #ecf0f1'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>📱 Productos</h3>
          <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>
            Descubre nuestros productos más populares
          </p>
          <Link 
            to="/product/1"
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              borderRadius: '6px',
              display: 'inline-block',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Ver Producto 1
          </Link>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #ecf0f1'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>💻 Tecnología</h3>
          <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>
            Los mejores productos tecnológicos
          </p>
          <Link 
            to="/product/2"
            style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              borderRadius: '6px',
              display: 'inline-block',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
          >
            Ver Producto 2
          </Link>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #ecf0f1'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>⚡ Categorías</h3>
          <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>
            Explora por categorías de productos
          </p>
          <Link 
            to="/category/electronics"
            style={{
              backgroundColor: '#f39c12',
              color: 'white',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              borderRadius: '6px',
              display: 'inline-block',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e67e22'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f39c12'}
          >
            Ver Electrónicos
          </Link>
        </div>
      </div>

      {/* Información adicional */}
      <div style={{
        backgroundColor: '#ecf0f1',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🚀 Navegación en React</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '1rem' }}>
          Esta aplicación demuestra los conceptos básicos de navegación con React Router:
        </p>
        <ul style={{
          color: '#7f8c8d',
          textAlign: 'left',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <li><strong>BrowserRouter:</strong> Proporciona el contexto de enrutamiento</li>
          <li><strong>Routes y Route:</strong> Define las rutas de la aplicación</li>
          <li><strong>Link:</strong> Componente para navegación declarativa</li>
          <li><strong>useLocation:</strong> Hook para obtener información de la ruta actual</li>
          <li><strong>Parámetros de ruta:</strong> Para pasar datos dinámicos en las URLs</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
