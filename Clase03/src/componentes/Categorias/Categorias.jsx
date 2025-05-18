import React, { useEffect, useState } from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState("")

    useEffect(()=>{
        document.title= `Categoria: ${categoria}`
    },[categoria])

    //funcion auxiliar

    const manejadorCategoria =(categoria)=>{
        setCategoria(categoria)
    }

  return (
    <div>
        <h2>Categoria de Producto</h2>
        <h3>{categoria}</h3>
        <button onClick={()=>manejadorCategoria("Frutas")}> Frutas</button>
        <button onClick={()=>manejadorCategoria("Carnes")}> Carnes</button>
        <button onClick={()=>manejadorCategoria("Lacteos")}> Lacteos</button>
        <button onClick={()=>manejadorCategoria("Limpieza")}> Limpieza </button>
    </div>
  )
}

export default Categorias