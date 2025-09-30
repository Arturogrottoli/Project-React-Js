import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`¡Gracias ${formData.name}! Tu mensaje ha sido enviado.`)
    setFormData({ name: '', email: '', message: '' })
  }

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
        📞 Contacto
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Información de contacto */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>📋 Información de Contacto</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>📍 Dirección</h3>
            <p style={{ color: '#7f8c8d' }}>
              Av. Principal 123<br />
              Ciudad, País 12345
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>📞 Teléfono</h3>
            <p style={{ color: '#7f8c8d' }}>
              +1 (555) 123-4567
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>✉️ Email</h3>
            <p style={{ color: '#7f8c8d' }}>
              contacto@mitienda.com
            </p>
          </div>

          <div>
            <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>🕒 Horarios</h3>
            <p style={{ color: '#7f8c8d' }}>
              Lunes - Viernes: 9:00 - 18:00<br />
              Sábados: 10:00 - 16:00<br />
              Domingos: Cerrado
            </p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>💬 Envíanos un Mensaje</h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#2c3e50',
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                Nombre:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#2c3e50',
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#2c3e50',
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                Mensaje:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#27ae60',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                width: '100%',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
            >
              📤 Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Información sobre React Router */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #e9ecef'
      }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🔗 Navegación con React Router</h3>
        <p style={{
          color: '#7f8c8d',
          marginBottom: '1rem'
        }}>
          Esta página de contacto demuestra:
        </p>
        <ul style={{
          color: '#7f8c8d',
          paddingLeft: '2rem'
        }}>
          <li><strong>Formularios en React:</strong> Manejo de estado local con useState</li>
          <li><strong>Rutas estáticas:</strong> <code>/contact</code> siempre muestra este componente</li>
          <li><strong>Navegación:</strong> Links para moverse entre páginas</li>
          <li><strong>SPA:</strong> La página no se recarga al navegar</li>
        </ul>
      </div>

      {/* Navegación */}
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
            marginRight: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          ← Volver al Inicio
        </Link>

        <Link 
          to="/about"
          style={{
            backgroundColor: '#95a5a6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '6px',
            display: 'inline-block',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
        >
          Acerca de →
        </Link>
      </div>
    </div>
  )
}

export default Contact
