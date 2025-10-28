import React, { useState, useEffect } from 'react'

/*
=== COMPONENTE CONTADOR - DEMOSTRACIÓN DE useEffect ===

🎯 PROPÓSITO:
Este componente demuestra el uso del Hook useEffect para manejar efectos secundarios.

📚 TEORÍA DE useEffect:

1. EFECTOS PRIMARIOS vs SECUNDARIOS:
   - Efecto primario: Renderizar componentes y manipular el DOM
   - Efectos secundarios: Operaciones que van más allá del renderizado
     * Llamadas a APIs
     * Timers e intervalos
     * Manipulación manual del DOM
     * Suscripciones a eventos
     * Actualización del título del documento

2. SINTAXIS DE useEffect:
   useEffect(() => {
     // Código del efecto secundario
   }, [dependencias])

3. ARRAY DE DEPENDENCIAS:
   - [] → Se ejecuta solo al montar el componente
   - [estado] → Se ejecuta cuando cambia el estado especificado
   - Sin array → Se ejecuta en cada renderizado (¡CUIDADO!)

4. CLEANUP (Limpieza):
   - Retornar una función para limpiar efectos
   - Evita memory leaks
   - Se ejecuta antes del siguiente efecto o al desmontar

💡 EN ESTE EJEMPLO:
- Actualizamos el título del documento cada vez que cambia el contador
- Demostramos cómo reaccionar a cambios de estado
- Mostramos el patrón básico de useEffect
*/

const Contador = () => {
    // Estado para el contador
    const [contador, setContador] = useState(1)

    /*
    === useEffect EXPLICADO PASO A PASO ===
    
    Parámetro 1: Función callback
    - Se ejecuta después del renderizado
    - Aquí va la lógica del efecto secundario
    
    Parámetro 2: Array de dependencias [contador]
    - Le dice a React: "ejecuta este efecto cuando 'contador' cambie"
    - Si el array está vacío [], se ejecuta solo al montar
    - Si no hay array, se ejecuta en cada renderizado
    */
    useEffect(() => {
        // EFECTO SECUNDARIO: Actualizar el título del documento
        document.title = `Contador: ${contador}`
        console.log(`useEffect ejecutado - Contador: ${contador}`)
    }, [contador]) // ← Dependencia: se ejecuta cuando 'contador' cambia

    // Función para incrementar el contador
    const sumarContador = () => {
        setContador(contador + 1)
        // Al cambiar el estado, React re-renderiza y ejecuta useEffect
    }

    // Función para decrementar el contador
    const restarContador = () => {
        setContador(contador - 1)
        // Al cambiar el estado, React re-renderiza y ejecuta useEffect
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3>Contador con useEffect</h3>
            <div style={{ margin: '20px 0' }}>
                <button 
                    onClick={sumarContador}
                    style={{ margin: '0 10px', padding: '10px 20px' }}
                > 
                    + 
                </button>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {contador}
                </span>
                <button 
                    onClick={restarContador}
                    style={{ margin: '0 10px', padding: '10px 20px' }}
                > 
                    - 
                </button>
            </div>
            <p style={{ color: '#666', fontSize: '14px' }}>
                Mira el título de la pestaña del navegador - se actualiza automáticamente
            </p>
        </div>
    )
}

export default Contador