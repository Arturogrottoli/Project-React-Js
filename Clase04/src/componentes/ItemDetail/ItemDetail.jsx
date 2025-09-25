import React from 'react'

// Componente que recibe un item como prop y muestra sus detalles
function ItemDetail({ item }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      margin: '20px 0'
    }}>
      {/* Imagen del producto */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={item.imageUrl} 
          alt={item.title}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      {/* Información del producto */}
      <div>
        <h2 style={{
          color: '#1f2937',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          {item.title}
        </h2>

        <p style={{
          color: '#6b7280',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '20px',
          textAlign: 'justify'
        }}>
          {item.description}
        </p>

        {/* Detalles adicionales */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px'
        }}>
          <div>
            <span style={{ 
              color: '#6b7280', 
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Precio:
            </span>
            <span style={{
              color: '#059669',
              fontSize: '24px',
              fontWeight: 'bold',
              marginLeft: '8px'
            }}>
              ${item.price}
            </span>
          </div>

          <div>
            <span style={{ 
              color: '#6b7280', 
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Stock:
            </span>
            <span style={{
              color: item.stock > 10 ? '#059669' : '#dc2626',
              fontSize: '16px',
              fontWeight: 'bold',
              marginLeft: '8px'
            }}>
              {item.stock} unidades
            </span>
          </div>
        </div>

        {/* Categoría */}
        <div style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <span style={{
            backgroundColor: '#4f46e5',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {item.category}
          </span>
        </div>

        {/* Botones de acción */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          <button style={{
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#3730a3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
          >
            🛒 Agregar al Carrito
          </button>

          <button style={{
            backgroundColor: 'transparent',
            color: '#4f46e5',
            border: '2px solid #4f46e5',
            padding: '10px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#4f46e5';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#4f46e5';
          }}
          >
            ❤️ Favoritos
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
