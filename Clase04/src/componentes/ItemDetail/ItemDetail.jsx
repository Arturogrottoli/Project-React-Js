import React from 'react'

/*
=== COMPONENTE ITEMDETAIL - PRESENTACIÓN DE DATOS ===

🎯 PROPÓSITO:
Este componente demuestra cómo presentar datos de un producto de forma atractiva.

📚 CONCEPTOS CLAVE:

1. COMPONENTE DE PRESENTACIÓN (Presentational Component):
   - Solo se encarga de mostrar datos
   - No maneja lógica de negocio
   - Recibe datos a través de props
   - Es reutilizable y puro

2. PROPS DESTRUCTURING:
   - { item } extrae la prop 'item' del objeto props
   - Hace el código más limpio y legible
   - Evita repetir props.item en todo el componente

3. CONDITIONAL RENDERING:
   - Mostrar diferentes estilos según el stock
   - Cambiar colores dinámicamente
   - Adaptar la UI según los datos

4. INLINE STYLES:
   - Estilos aplicados directamente en JSX
   - Útil para estilos dinámicos
   - Alternativa a CSS externo para componentes simples

5. EVENT HANDLERS:
   - onMouseOver/onMouseOut para efectos hover
   - onClick para acciones del usuario
   - Manejo de eventos en React

💡 PATRÓN DE USO:
- Recibe datos como props
- Los presenta de forma estructurada
- Incluye interactividad básica
- Es completamente reutilizable
*/

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
      {/* 
      === SECCIÓN DE IMAGEN ===
      - Imagen centrada del producto
      - Responsive (maxWidth: '100%')
      - Alt text para accesibilidad
      - Estilos de sombra para profundidad
      */}
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

      {/* 
      === SECCIÓN DE INFORMACIÓN ===
      - Título del producto
      - Descripción detallada
      - Estilos tipográficos consistentes
      */}
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

        {/* 
        === SECCIÓN DE DETALLES ADICIONALES ===
        - Precio y stock en un layout flex
        - CONDITIONAL RENDERING: color del stock según cantidad
        - Estilos diferenciados para cada información
        */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px'
        }}>
          {/* Precio del producto */}
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

          {/* Stock con color condicional */}
          <div>
            <span style={{ 
              color: '#6b7280', 
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Stock:
            </span>
            <span style={{
              // CONDITIONAL RENDERING: color según stock
              color: item.stock > 10 ? '#059669' : '#dc2626',
              fontSize: '16px',
              fontWeight: 'bold',
              marginLeft: '8px'
            }}>
              {item.stock} unidades
            </span>
          </div>
        </div>

        {/* 
        === CATEGORÍA ===
        - Badge con el nombre de la categoría
        - Estilo de pill/badge moderno
        - Centrado para mejor presentación
        */}
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

        {/* 
        === BOTONES DE ACCIÓN ===
        - Layout flex con gap para espaciado
        - EVENT HANDLERS: onMouseOver/onMouseOut para efectos hover
        - Estilos dinámicos que cambian con la interacción
        - Dos estilos de botón: primario y secundario
        */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          {/* Botón primario - Agregar al Carrito */}
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

          {/* Botón secundario - Favoritos */}
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
