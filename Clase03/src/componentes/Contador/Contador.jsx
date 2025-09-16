import React, { useState, useEffect } from 'react'

// Demuestra estado (useState) y efectos secundarios (useEffect):
// - Estado: valor que cambia y re-renderiza el componente.
// - Efecto: sincroniza el título del documento con el valor del contador.
const Contador = () => {

    const [contador, setContador] = useState(1)

    // useEffect recibe: (callback, [dependencias]).
    // Se ejecuta tras el render y cuando cambian las dependencias.
    useEffect(()=>{
        document.title = `Contador: ${contador}`
    },[contador])

    const sumarContador = () =>{
        // Actualización funcional: evita leer un estado potencialmente obsoleto
        setContador((c) => c + 1)
    }

    const restarContador = () => {
        setContador((c) => c - 1)
    }

  return (
    <div>
        <button type="button" onClick={sumarContador}> + </button>
        {contador}
        <button type="button" onClick={restarContador}> - </button>

    </div>
  )
}

export default Contador