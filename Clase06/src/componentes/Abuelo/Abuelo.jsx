// Importamos React y el hook useContext, que nos permite "leer" datos del contexto
import React, { useContext } from 'react'

// Importamos el contexto que creamos en la carpeta context
import { Contexto } from '../../context/context'

// (Opcional) podríamos tener componentes "Hijo" o "Padre" más abajo en el árbol
// import Padre from '../Padre/Padre'

const Abuelo = () => {

  // ------------------ useContext ------------------
  // useContext() es un hook que nos deja acceder directamente
  // al valor que el Provider compartió.
  // En este caso, "herencia" es el objeto con dinero, propiedades, etc.
  const herencia = useContext(Contexto)

  // Ahora "herencia" contiene todo lo que definimos en App.js dentro del Provider:
  // {
  //   efectivo: 10000000,
  //   propiedades: 6,
  //   vehiculos: 5,
  //   nafta: 1000
  // }

  return (
    <div style={{ border: '2px solid green', padding: '15px', margin: '10px' }}>
      <h2>👴 Abuelo</h2>
      <p>Este componente recibe la herencia directamente desde el Contexto.</p>

      {/* Mostramos los valores que vienen del contexto */}
      <ul>
        <li>Efectivo: ${herencia.efectivo}</li>
        <li>Propiedades: {herencia.propiedades}</li>
        <li>Vehículos: {herencia.vehiculos}</li>
        <li>Nafta: {herencia.nafta} litros</li>
      </ul>

      {/* <Padre /> */}
      {/* Si quisiéramos, podríamos pasar al componente Padre sin props,
          porque él también podría acceder a la misma info con useContext */}
    </div>
  )
}

export default Abuelo
