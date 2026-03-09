import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

/*
=== COMPONENTE ITEMDETAILCONTAINER - CARGA ASÍNCRONA ===

🎯 PROPÓSITO:
Este componente demuestra cómo cargar datos de forma asíncrona usando useEffect y Promises.

📚 CONCEPTOS CLAVE:

1. CONTAINER COMPONENT (Componente Contenedor):
   - Maneja la lógica de negocio y estado
   - Se comunica con APIs o servicios externos
   - Pasa datos a componentes de presentación
   - Contiene la lógica de carga y manejo de errores

2. CARGA ASÍNCRONA:
   - Simulación de llamada a API con Promise
   - setTimeout para simular delay de red
   - Patrón async/await para manejar promesas
   - Estados de loading, error y success

3. MANEJO DE ESTADOS:
   - loading: indica si está cargando
   - error: almacena mensajes de error
   - item: datos del producto cargado
   - Estados mutuamente excluyentes

4. useEffect CON ARRAY VACÍO:
   - Se ejecuta solo al montar el componente
   - Ideal para cargar datos iniciales
   - Evita bucles infinitos de re-renderizado

5. PATRÓN DE CARGA:
   - Iniciar loading
   - Limpiar errores previos
   - Hacer llamada asíncrona
   - Manejar éxito y error
   - Finalizar loading

💡 FLUJO DE EJECUCIÓN:
1. Componente se monta
2. useEffect se ejecuta
3. Se inicia la carga (loading = true)
4. Se simula llamada a API
5. Se actualiza el estado con los datos
6. Se finaliza la carga (loading = false)
*/

// Función que simula una llamada a API con delay
const getItem = () => {
  /*
  === SIMULACIÓN DE API ===
  
  Características:
  - Retorna una Promise
  - Simula delay de red con setTimeout
  - Resuelve con datos de ejemplo
  - Patrón común en desarrollo frontend
  */
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
    }, 2000); // 2 segundos de delay para simular red lenta
  });
};

function ItemDetailContainer() {
  /*
  === ESTADOS DEL COMPONENTE ===
  
  item: null | objeto
  - null: no hay datos cargados
  - objeto: datos del producto
  
  loading: boolean
  - true: está cargando datos
  - false: carga completada (exitosa o con error)
  
  error: null | string
  - null: no hay errores
  - string: mensaje de error
  */
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  === useEffect PARA CARGA INICIAL ===
  
  Array de dependencias vacío [] significa:
  - Se ejecuta solo al montar el componente
  - NO se ejecuta en re-renderizados posteriores
  - Ideal para cargar datos iniciales
  - Evita bucles infinitos
  */
  useEffect(() => {
    /*
    === FUNCIÓN ASÍNCRONA DE CARGA ===
    
    Patrón de manejo de carga asíncrona:
    1. Iniciar loading
    2. Limpiar errores previos
    3. Hacer llamada a API
    4. Manejar éxito y error
    5. Finalizar loading
    */
    const loadItem = async () => {
      try {
        // 1. Iniciar estado de carga
        setLoading(true);
        setError(null);
        
        // 2. Simular llamada a API (await espera la resolución)
        const itemData = await getItem();
        
        // 3. Actualizar estado con datos exitosos
        setItem(itemData);
      } catch (err) {
        // 4. Manejar errores
        setError('Error al cargar el producto');
        console.error('Error:', err);
      } finally {
        // 5. Finalizar carga (siempre se ejecuta)
        setLoading(false);
      }
    };

    // Ejecutar la función de carga
    loadItem();
  }, []); // ← Array vacío = solo al montar

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Detalle del Producto</h1>
      
      {/* 
      === RENDERIZADO CONDICIONAL ===
      
      Patrón de renderizado basado en estados:
      - loading: muestra spinner de carga
      - error: muestra mensaje de error
      - item && !loading: muestra el producto
      
      Los estados son mutuamente excluyentes:
      - Solo uno se muestra a la vez
      - Evita renderizado de múltiples estados
      */}
      
      {/* Estado de carga - Spinner animado */}
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
      
      {/* Estado de error - Mensaje de error */}
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
      
      {/* Estado de éxito - Mostrar producto */}
      {item && !loading && <ItemDetail item={item} />}
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ItemDetailContainer;
