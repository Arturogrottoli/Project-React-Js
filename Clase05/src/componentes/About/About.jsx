import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        ℹ️ Acerca de Nosotros
      </h1>

      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🏢 Nuestra Historia</h2>
        <p style={{
          color: '#7f8c8d',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          Somos una empresa dedicada a brindar los mejores productos y servicios a nuestros clientes. 
          Fundada en 2020, hemos crecido constantemente gracias a la confianza de nuestros usuarios.
        </p>

        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🎯 Nuestra Misión</h2>
        <p style={{
          color: '#7f8c8d',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          Proporcionar productos de alta calidad a precios competitivos, con un servicio al cliente 
          excepcional y una experiencia de compra única.
        </p>

        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>💡 Nuestros Valores</h2>
        <ul style={{
          color: '#7f8c8d',
          lineHeight: '1.6',
          paddingLeft: '2rem'
        }}>
          <li><strong>Calidad:</strong> Productos seleccionados cuidadosamente</li>
          <li><strong>Confianza:</strong> Transparencia en todas nuestras operaciones</li>
          <li><strong>Innovación:</strong> Siempre buscando nuevas formas de servir mejor</li>
          <li><strong>Compromiso:</strong> Con la satisfacción de nuestros clientes</li>
        </ul>
      </div>

      {/* Información sobre React Router */}
      <div style={{
        backgroundColor: '#e8f4f8',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #3498db'
      }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🔗 Conceptos de React Router</h3>
        <p style={{
          color: '#7f8c8d',
          marginBottom: '1rem'
        }}>
          Esta página demuestra el uso de rutas estáticas en React Router:
        </p>
        <ul style={{
          color: '#7f8c8d',
          paddingLeft: '2rem'
        }}>
          <li><strong>Ruta estática:</strong> <code>/about</code> siempre muestra este componente</li>
          <li><strong>Navegación:</strong> Usa <code>Link</code> para navegar sin recargar la página</li>
          <li><strong>SPA:</strong> Single Page Application - solo se actualiza el contenido</li>
        </ul>
      </div>

      {/* Navegación de regreso */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <Link 
          to="/"
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
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  )
}

export default About
