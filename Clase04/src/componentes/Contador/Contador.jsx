import React, { useState, useEffect } from 'react'


//El efecto primario de React es renderizar componentes, manipulado el dom
//Un aplicacion web tiene que ahcer muchas mas que solo mostrarse, tiene que realizar operaciones, consumir datos de servidor, usar eventos, etc
//Para poder manupular los efectos secundarios de los cambios de estado vamos a usar un nuevo Hook que se llama useEffect

const Contador = () => {

    const [contador, setContador] = useState(1)

    //A useEffect le pasamos dos parametros, el primero es una funcion callback con el comportamiento deseado, y els egundo es un array de dependecias en donde colocamos el estado que queremos estar vigilando. Cuando ese estado cambio se ejecuanta nuevamente la funcion que pasamos en el primero argumento

    useEffect(()=>{
        document.title = `Contador: ${contador}`
    },[contador])

    const sumarContador = () =>{
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

  return (
    <div>
        <button onClick={sumarContador}> + </button>
        {contador}
        <button onClick={restarContador}> - </button>

    </div>
  )
}

export default Contador