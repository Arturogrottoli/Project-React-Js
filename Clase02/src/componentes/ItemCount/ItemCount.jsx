
import { useState } from "react"
//1) importamos el hook

//Estado
//es un objeto con informacion util para el componente, que puede ir cambiando durante la ejecucion de la Aplicacion.
//es un Hook, que se manjea a traves del useState



const ItemCount = ({stock}) => {

//2) El hook me va a retornar un array. Este array tiene dos elementos, el primero es el estado, el segundo es una funcion que me actualiza ese estado

 const [contador, setContador] = useState(3)

 //3) creamos dos funciones para incrementar y decrementar el contador

 const incrementar = () => {
    if(contador < stock){
        setContador(contador + 1)
    }

    
 }

 const decrementar = () => {
    if(contador > 1) {
        setContador(contador - 1)
    }
 }


  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={decrementar}> - </button>
    </div>
  )
}

export default ItemCount

