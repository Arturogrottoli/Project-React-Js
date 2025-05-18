import React from 'react'

//useRef es un hook que nos permite crear una referencia mutable que puede ser actualiza sin provocar una nueva renderizacion del componente.

//Ejemplo: almacenamos la cantidad de productos comprados pero no lo mostramos por pantalla:

import { useRef } from 'react'

const Ref = () => {

    const cantidadProductos = useRef(0)

    //Este Hook siempre me retorna un objeto que tiene una propiedad llamada "current" la cual vamos a mutando con informacion

    function agregarAlCarrito() {
        cantidadProductos.current = cantidadProductos.current + 1
        console.log(cantidadProductos.current)
    }

  return (
    <div>
        <p>Productos Marolio comprados:{cantidadProductos.current}</p>
        <button onClick={agregarAlCarrito}>Comprar</button>
    </div>
  )
}

export default Ref