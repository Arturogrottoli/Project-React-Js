// Importamos React, que es necesario para trabajar con componentes
import React from 'react'

// Importamos el componente "Abuelo", que será el primero en usar el contexto
import Abuelo from './componentes/Abuelo/Abuelo'

// Importamos el contexto que creamos en otra carpeta (en ./context/context.js)
import { Contexto } from './context/context'


// ------------------------- EXPLICACIÓN GENERAL -------------------------
//
// En React, cuando varios componentes necesitan compartir la misma información
// (por ejemplo, un "saldo", un "tema de color", o un "usuario logueado"),
// no es eficiente pasarlo manualmente de un componente a otro con props.
//
// Para eso existe el *Context API* de React.
// (Atención: "API" en este caso no tiene nada que ver con consumir o crear
// una API externa. El Context API es solo una herramienta interna de React
// para compartir datos entre componentes de la aplicación.)
//
// El Contexto tiene tres partes:
// 1️⃣ El contexto en sí (creado con React.createContext())
// 2️⃣ El *Provider*, que es quien envuelve toda la app y envía los datos.
// 3️⃣ Los *Consumers*, que son los componentes que reciben esos datos.
//
// En este ejemplo, simulamos una herencia familiar: 
// el "abuelo" va a tener una herencia que los hijos y nietos pueden leer
// sin necesidad de que se la pasen por props uno a uno.
//

const App = () => {

  // Este es el objeto que vamos a compartir a través del contexto.
  // Representa la herencia familiar, con distintos bienes.
  const herencia = {
    efectivo: 10000000, // dinero disponible
    propiedades: 6,     // cantidad de casas o departamentos
    vehiculos: 5,       // cantidad de autos
    nafta: 1000         // litros de nafta (por ejemplo)
  }

  return (
    <div>
      {/* 
        En lugar de pasar la herencia como una prop (como esto 👇)
        <Abuelo herencia={herencia}/> 
        usamos el Provider del contexto.
      */}

      {/* 
        El Provider "envuelve" a toda la parte de la app que queremos
        que tenga acceso a los datos globales. 
        En este caso, el valor que va a compartir es "herencia".
      */}
      <Contexto.Provider value={herencia}>
        {/* Abuelo es el primer componente dentro del contexto */}
        <Abuelo/>
      </Contexto.Provider>
    </div>
  )
}

// Exportamos App para que React pueda renderizarla en index.js
export default App
