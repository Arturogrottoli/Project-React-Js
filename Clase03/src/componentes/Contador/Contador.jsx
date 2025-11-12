import React, { useState, useEffect } from 'react'

// ------------------------------------------------------------
// useState → permite crear y manejar un "estado" en un componente.
// El estado es un dato que puede cambiar con el tiempo
// y cada vez que cambia, React vuelve a renderizar el componente.
//
// useEffect → permite ejecutar efectos secundarios (acciones externas al render).
// Ejemplo: actualizar el título del documento, hacer una petición a una API, etc.
// ------------------------------------------------------------
const Contador = () => {

  // useState devuelve un array con dos elementos:
  // 1️⃣ la variable de estado (contador)
  // 2️⃣ la función que actualiza ese estado (setContador)
  const [contador, setContador] = useState(1)

  // useEffect recibe dos parámetros:
  // - Una función (callback) que se ejecuta después del render.
  // - Un array de dependencias que indica cuándo debe ejecutarse.
  //
  // En este caso, cada vez que cambia "contador", el título del documento se actualiza.
  useEffect(() => {
    document.title = `Contador: ${contador}`
  }, [contador])

  // Función para sumar al contador.
  // Usamos una función dentro de setContador para trabajar
  // con el valor más reciente del estado.
  const sumarContador = () => {
    setContador((c) => c + 1)
  }

  // Función para restar al contador.
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
