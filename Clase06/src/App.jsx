import React from 'react'
import Abuelo from './componentes/Abuelo/Abuelo'
import { Contexto } from './context/context'

//El contexto tiene 3 partes:
//el contexto en si
//el proveedor de contexto, es un compoentne que envuelve a toda la app habilitandola para que envie datos
//el consumidor de contexto, e sun componetne cualquiera que accede a esos datos globales

const App = () => {


  const herencia = {
    efectivo: 10000000,
    propiedades: 6,
    vehiculos: 5,
    nafta: 1000
  }

  return (

    <div>
    {/* Abuelo herencia={herencia}/> */}
      <Contexto.Provider value={herencia}>
        <Abuelo/>
      </Contexto.Provider>
    </div>
  )
}

export default App
