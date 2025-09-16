import React, { useEffect, useState } from 'react'

// Demuestra estado local con useState y efectos con useEffect.
// Al cambiar la categoría, actualizamos el título del documento
// para mostrar un side‑effect del render.
const Categorias = () => {
    const [categoria, setCategoria] = useState("")

    // useEffect se ejecuta después del render. La dependencia [categoria]
    // hace que corra nuevamente cuando ese valor cambie.
    useEffect(()=>{
        document.title= `Categoria: ${categoria}`
    },[categoria])

    // Función manejadora: centraliza la lógica del seteo
    const manejadorCategoria =(categoria)=>{
        setCategoria(categoria)
    }

  return (
    <div>
        <h2>Categoria de Producto</h2>
        <h3>{categoria}</h3>
        {/* Botones que demuestran cómo un evento actualiza el estado */}
        <button type="button" onClick={()=>manejadorCategoria("Frutas")}> Frutas</button>
        <button type="button" onClick={()=>manejadorCategoria("Carnes")}> Carnes</button>
        <button type="button" onClick={()=>manejadorCategoria("Lacteos")}> Lacteos</button>
        <button type="button" onClick={()=>manejadorCategoria("Limpieza")}> Limpieza </button>
    </div>
  )
}

export default Categorias