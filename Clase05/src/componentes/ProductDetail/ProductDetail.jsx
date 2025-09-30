import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  // useParams nos permite acceder a los parámetros de la URL
  const { id } = useParams()
  
  // useNavigate nos permite navegar programáticamente
  const navigate = useNavigate()

  // Simulamos datos de productos (en una app real vendría de una API)
  const productos = {
    1: {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 999,
      description: 'El iPhone más avanzado con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR.',
      image: 'https://via.placeholder.com/400x300/007AFF/ffffff?text=iPhone+15+Pro',
      category: 'Smartphones',
      stock: 15,
      features: [
        'Chip A17 Pro de 3nm',
        'Cámara principal de 48MP',
        'Pantalla Super Retina XDR de 6.1"',
        'Resistente al agua IP68',
        'iOS 17'
      ]
    },
    2: {
      id: 2,
      name: 'MacBook Pro M3',
      price: 1999,
      description: 'Laptop profesional con chip M3, pantalla Liquid Retina XDR y hasta 22 horas de batería.',
      image: 'https://via.placeholder.com/400x300/34C759/ffffff?text=MacBook+Pro+M3',
      category: 'Laptops',
      stock: 8,
      features: [
        'Chip M3 con CPU de 8 núcleos',
        'Pantalla Liquid Retina XDR de 14"',
        'Hasta 22 horas de batería',
        'Hasta 24GB de memoria unificada',
        'macOS Sonoma'
      ]
    }
  }

  const producto = productos[id]

  // Si no existe el producto, mostrar error
  if (!producto) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
          ❌ Producto no encontrado
        </h1>
        <p style={{ color: '#7f8c8d', marginBottom: '2rem' }}>
          El producto con ID {id} no existe.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          🏠 Volver al Inicio
        </button>
      </div>
    )
  }

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      {/* Breadcrumb */}
      <nav style={{
        marginBottom: '2rem',
        fontSize: '0.9rem'
      }}>
        <Link 
          to="/" 
          style={{ color: '#3498db', textDecoration: 'none' }}
        >
          Inicio
        </Link>
        <span style={{ color: '#7f8c8d', margin: '0 0.5rem' }}>›</span>
        <Link 
          to={`/category/${producto.category.toLowerCase()}`}
          style={{ color: '#3498db', textDecoration: 'none' }}
        >
          {producto.category}
        </Link>
        <span style={{ color: '#7f8c8d', margin: '0 0.5rem' }}>›</span>
        <span style={{ color: '#7f8c8d' }}>{producto.name}</span>
      </nav>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Imagen del producto */}
        <div>
          <img
            src={producto.image}
            alt={producto.name}
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Información del producto */}
        <div>
          <h1 style={{
            color: '#2c3e50',
            fontSize: '2.5rem',
            marginBottom: '1rem'
          }}>
            {producto.name}
          </h1>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#27ae60'
              }}>
                ${producto.price}
              </span>
              <span style={{
                backgroundColor: producto.stock > 10 ? '#27ae60' : '#e74c3c',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                {producto.stock > 10 ? 'En Stock' : 'Pocas unidades'}
              </span>
            </div>

            <p style={{
              color: '#7f8c8d',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              {producto.description}
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <button style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                flex: 1,
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
              >
                🛒 Agregar al Carrito
              </button>

              <button style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                flex: 1,
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
              >
                ❤️ Favoritos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Características del producto */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>✨ Características</h2>
        <ul style={{
          color: '#7f8c8d',
          lineHeight: '1.8',
          paddingLeft: '2rem'
        }}>
          {producto.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Información sobre React Router */}
      <div style={{
        backgroundColor: '#e8f4f8',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #3498db'
      }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🔗 Parámetros de Ruta en React Router</h3>
        <p style={{
          color: '#7f8c8d',
          marginBottom: '1rem'
        }}>
          Esta página demuestra el uso de parámetros dinámicos:
        </p>
        <ul style={{
          color: '#7f8c8d',
          paddingLeft: '2rem'
        }}>
          <li><strong>useParams:</strong> Extrae <code>id</code> de la URL <code>/product/{id}</code></li>
          <li><strong>useNavigate:</strong> Navegación programática (botón "Volver")</li>
          <li><strong>Rutas dinámicas:</strong> <code>/product/:id</code> acepta cualquier ID</li>
          <li><strong>Validación:</strong> Verifica si el producto existe</li>
        </ul>
        <p style={{
          color: '#7f8c8d',
          marginTop: '1rem',
          fontStyle: 'italic'
        }}>
          URL actual: <code>/product/{id}</code>
        </p>
      </div>

      {/* Navegación */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#95a5a6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
        >
          ← Atrás
        </button>

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
          🏠 Inicio
        </Link>
      </div>
    </div>
  )
}

export default ProductDetail
