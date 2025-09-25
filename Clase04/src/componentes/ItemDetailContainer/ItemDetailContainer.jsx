import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

// Función que simula una llamada a API con delay
const getItem = () => {
  // Esta función debe retornar la promesa que resuelve con delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Producto Ejemplo',
        description: 'Descripción del producto. Este es un ejemplo de cómo funciona la carga asíncrona de datos en React usando useEffect y Promises.',
        price: 100,
        imageUrl: 'https://via.placeholder.com/300x200/4f46e5/ffffff?text=Producto+Ejemplo',
        stock: 15,
        category: 'Electrónicos'
      });
    }, 2000); // 2 segundos de delay
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect se ejecuta al montar el componente (array de dependencias vacío [])
  useEffect(() => {
    // Función para cargar el item
    const loadItem = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulamos la llamada a la API
        const itemData = await getItem();
        setItem(itemData);
      } catch (err) {
        setError('Error al cargar el producto');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, []); // Array vacío = se ejecuta solo al montar

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Detalle del Producto</h1>
      
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>🔄 Cargando detalles del producto...</p>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #4f46e5',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '20px auto'
          }}></div>
        </div>
      )}
      
      {error && (
        <div style={{ 
          color: 'red', 
          textAlign: 'center', 
          padding: '20px',
          backgroundColor: '#fee2e2',
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          ❌ {error}
        </div>
      )}
      
      {item && !loading && <ItemDetail item={item} />}
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ItemDetailContainer;
