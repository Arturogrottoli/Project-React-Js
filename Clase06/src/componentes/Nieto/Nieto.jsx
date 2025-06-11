
import React from 'react'
import { useContext } from 'react'
import { Contexto } from '../../context/context'

const Nieto = () => {

    const herencia = useContext(Contexto)

  return (
    <div>
        <p>Mi herencia es de: {herencia.efectivo}</p>
        <p>Tengo estos vehiculos: {herencia.vehiculos}</p>
        <p>Hago fiestas en estas casas: {herencia.propiedades}</p>
        <p>Despercidicon toda esta nafta para viajar: {herencia.nafta}</p>
    </div>
  )
}

export default Nieto



/* import React from 'react'

const Nieto = ({herencia}) => {
  return (
    <div>
        <p>Mi herencia es de: {herencia.efectivo}</p>
        <p>Tengo estos vehiculos: {herencia.vehiculos}</p>
        <p>Hago fiestas en estas casas: {herencia.propiedades}</p>
        <p>Despercidicon toda esta nafta para viajar: {herencia.nafta}</p>
    </div>
  )
}

export default Nieto */