import React from 'react'
import {useState} from "react"
import { toast } from 'react-toastify'


const Counter = ({stock, initial, onAdd}) => {

    const [estado, setEstado] = useState(initial)
    

  const Sumar = () => {
      if (estado <stock){
    setEstado(estado +1)}
    if(stock==estado){
      toast.warning("Usted a alcanzado el maximo de stock",{autoClose: 800,theme: "dark"})
    }
      }
    
    const Restar = () => {
        if(estado> initial){
            setEstado(estado -1)}
    }

    const Resetear = () => {
        setEstado(1)
    }

    const Agregar= () => {
         onAdd(estado)
    }

  return (
    <div>
    <button onClick={Sumar} type="button" class="btn btn-success m-2">+</button>
    <span className='m-1'>Cantidad: {estado}</span>
    <button onClick={Restar} type="button" class="btn btn-success m-1">-</button> <br/>
    <button onClick={Resetear} type="button" class="btn btn-success m-1 mt-3">Resetear</button>
    <button onClick={Agregar} type="button" class="btn btn-success m-1 mt-3">Agregar al carrito</button>
    </div>
  )
}


export default Counter