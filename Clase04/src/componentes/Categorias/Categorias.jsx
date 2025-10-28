import React, { useEffect, useState } from 'react'

/*
=== COMPONENTE CATEGORÍAS - useEffect CON ESTADO ===

🎯 PROPÓSITO:
Este componente demuestra useEffect con un estado que cambia dinámicamente.

📚 CONCEPTOS CLAVE:

1. ESTADO DINÁMICO:
   - El estado 'categoria' cambia cuando el usuario hace clic en los botones
   - Cada cambio de estado dispara el useEffect

2. FUNCIONES AUXILIARES:
   - Separar la lógica de actualización de estado
   - Hacer el código más legible y mantenible
   - Facilitar el testing y debugging

3. EVENT HANDLERS:
   - onClick={() => manejadorCategoria("valor")}
   - Arrow functions para pasar parámetros específicos
   - Cada botón actualiza el estado con un valor diferente

4. useEffect CON DEPENDENCIAS:
   - Se ejecuta cada vez que 'categoria' cambia
   - Actualiza el título del documento dinámicamente
   - Demuestra reactividad en tiempo real

💡 PATRÓN DE USO:
- Estado inicial vacío ("")
- Botones que actualizan el estado
- useEffect que reacciona a los cambios
- UI que refleja el estado actual
*/

const Categorias = () => {
    // Estado para almacenar la categoría seleccionada
    const [categoria, setCategoria] = useState("")

    /*
    === useEffect CON DEPENDENCIA DINÁMICA ===
    
    Este useEffect se ejecuta:
    1. Al montar el componente (categoria = "")
    2. Cada vez que 'categoria' cambia (cuando se hace clic en un botón)
    
    El título se actualiza dinámicamente según la categoría seleccionada
    */
    useEffect(() => {
        document.title = `Categoria: ${categoria}`
        console.log(`Categoría seleccionada: ${categoria}`)
    }, [categoria]) // ← Dependencia: se ejecuta cuando 'categoria' cambia

    /*
    === FUNCIÓN AUXILIAR ===
    
    Propósito:
    - Separar la lógica de actualización de estado
    - Hacer el código más legible
    - Facilitar el mantenimiento
    
    Patrón común en React:
    - Crear funciones auxiliares para manejar eventos
    - Pasar parámetros específicos a cada botón
    */
    const manejadorCategoria = (categoria) => {
        setCategoria(categoria)
        // Al cambiar el estado, React re-renderiza y ejecuta useEffect
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Categoría de Producto</h2>
            
            {/* Mostrar la categoría actual */}
            <h3 style={{ 
                color: categoria ? '#4f46e5' : '#6b7280',
                minHeight: '30px',
                margin: '20px 0'
            }}>
                {categoria || "Selecciona una categoría"}
            </h3>
            
            {/* Botones para seleccionar categorías */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                    onClick={() => manejadorCategoria("Frutas")}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#10b981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                > 
                    🍎 Frutas
                </button>
                
                <button 
                    onClick={() => manejadorCategoria("Carnes")}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                > 
                    🥩 Carnes
                </button>
                
                <button 
                    onClick={() => manejadorCategoria("Lacteos")}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f59e0b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                > 
                    🥛 Lácteos
                </button>
                
                <button 
                    onClick={() => manejadorCategoria("Limpieza")}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                > 
                    🧽 Limpieza
                </button>
            </div>
            
            <p style={{ color: '#666', fontSize: '14px', marginTop: '20px' }}>
                Observa cómo cambia el título de la pestaña al seleccionar una categoría
            </p>
        </div>
    )
}

export default Categorias