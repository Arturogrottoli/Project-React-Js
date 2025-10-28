import React from 'react'
import { useRef } from 'react'

/*
=== COMPONENTE REF - DEMOSTRACIÓN DE useRef ===

🎯 PROPÓSITO:
Este componente demuestra el uso del Hook useRef para manejar referencias mutables.

📚 TEORÍA DE useRef:

1. ¿QUÉ ES useRef?
   - Hook que crea una referencia mutable
   - NO causa re-renderizado cuando cambia
   - Persiste entre renderizados
   - Acceso directo al valor actual

2. DIFERENCIAS CON useState:
   - useState: Cambios causan re-renderizado
   - useRef: Cambios NO causan re-renderizado
   - useState: Para datos que afectan la UI
   - useRef: Para datos que NO afectan la UI

3. ESTRUCTURA DE useRef:
   - Retorna un objeto con propiedad 'current'
   - current: contiene el valor actual
   - Se puede mutar directamente: ref.current = nuevoValor

4. CASOS DE USO COMUNES:
   - Contadores internos (como en este ejemplo)
   - Referencias a elementos DOM
   - Almacenar valores previos
   - Timers e intervalos
   - Valores que no necesitan actualizar la UI

5. VENTAJAS:
   - No causa re-renderizado innecesario
   - Mantiene el valor entre renderizados
   - Acceso síncrono al valor actual
   - Ideal para valores "internos" del componente

💡 EN ESTE EJEMPLO:
- Contamos productos sin re-renderizar
- Demostramos la diferencia con useState
- Mostramos el patrón básico de useRef
*/

const Ref = () => {
    /*
    === useRef EXPLICADO ===
    
    Sintaxis: const ref = useRef(valorInicial)
    - valorInicial: valor por defecto (0 en este caso)
    - Retorna: { current: valorInicial }
    - Se puede mutar: ref.current = nuevoValor
    */
    const cantidadProductos = useRef(0)

    /*
    === FUNCIÓN QUE MUTA LA REFERENCIA ===
    
    Características importantes:
    1. Mutamos directamente ref.current
    2. NO usamos setter como en useState
    3. NO causa re-renderizado automático
    4. El valor persiste entre renderizados
    5. Acceso síncrono al valor actual
    */
    function agregarAlCarrito() {
        // Mutación directa de la referencia
        cantidadProductos.current = cantidadProductos.current + 1
        
        // Log para ver el valor actual
        console.log(`Productos en carrito: ${cantidadProductos.current}`)
        
        // IMPORTANTE: No hay re-renderizado automático
        // Si necesitamos actualizar la UI, debemos forzarlo manualmente
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3>useRef - Referencias Mutables</h3>
            
            {/* 
            IMPORTANTE: 
            - Mostramos ref.current directamente
            - NO se actualiza automáticamente al hacer clic
            - Solo se actualiza cuando el componente se re-renderiza por otra razón
            */}
            <div style={{ 
                backgroundColor: '#f3f4f6', 
                padding: '20px', 
                borderRadius: '8px',
                margin: '20px 0'
            }}>
                <p style={{ fontSize: '18px', margin: '0' }}>
                    Productos Marolio comprados: <strong>{cantidadProductos.current}</strong>
                </p>
                <p style={{ fontSize: '14px', color: '#666', margin: '10px 0 0 0' }}>
                    (Observa que NO se actualiza al hacer clic - solo en la consola)
                </p>
            </div>
            
            <button 
                onClick={agregarAlCarrito}
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                🛒 Comprar Producto
            </button>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
                <p><strong>Diferencia clave:</strong></p>
                <p>• useRef: NO causa re-renderizado</p>
                <p>• useState: SÍ causa re-renderizado</p>
                <p>• Abre la consola para ver los logs</p>
            </div>
        </div>
    )
}

export default Ref