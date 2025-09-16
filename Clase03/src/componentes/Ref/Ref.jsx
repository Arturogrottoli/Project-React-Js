import React from 'react'

// useRef crea una referencia mutable que NO provoca re-render al cambiar.
// Útil para guardar valores entre renders o acceder al DOM.
// Ejemplo: contamos compras usando ref (se ve en consola, no en UI).
import { useRef } from 'react'

const Ref = () => {

    const cantidadProductos = useRef(0)

    // El objeto retornado por useRef tiene la propiedad .current.
    // Mutar .current NO vuelve a renderizar el componente.
    function agregarAlCarrito() {
        cantidadProductos.current = cantidadProductos.current + 1
        console.log(cantidadProductos.current)
    }

  return (
    <div>
        {/* Mostrar .current aquí no se actualizará sin estado */}
        <p>Productos Marolio comprados: {cantidadProductos.current}</p>
        <button type="button" onClick={agregarAlCarrito}>Comprar</button>
    </div>
  )
}

export default Ref