import React from 'react'

/*
=== COMPONENTE ARTICULOS - DEMOSTRACIÓN DE CHILDREN ===

🎯 PROPÓSITO:
Este componente demuestra el uso de la prop especial "children" en React.

📚 TEORÍA DE CHILDREN:
- "children" es una prop especial que React pasa automáticamente
- Contiene todo el contenido que se coloca entre las etiquetas de apertura y cierre
- Permite crear componentes "envolventes" o "contenedores"
- Hace los componentes más flexibles y reutilizables

💡 EJEMPLO DE USO:
<Articulos img="url" titulo="Mi Título">
  <p>Este párrafo será children</p>
  <strong>Este texto también será children</strong>
  <ComponenteX/>  // Incluso otros componentes pueden ser children
</Articulos>

🔧 CÓMO FUNCIONA:
1. El componente recibe children como prop
2. Se renderiza en el lugar donde se coloca {children}
3. Puede ser texto, elementos JSX, o incluso otros componentes
4. Si no hay contenido entre las etiquetas, children será undefined
*/

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        {/* Imagen del artículo - prop normal */}
        <img src={img} alt={titulo} />
        
        {/* Título del artículo - prop normal */}
        <h2>{titulo}</h2>
        
        {/* 
          AQUÍ SE RENDERIZA EL CONTENIDO CHILDREN
          Todo lo que esté entre <Articulos> y </Articulos> 
          aparecerá en este lugar
        */}
        {children}
        
        {/* Botón fijo del componente */}
        <button>Leer Articulo</button>
    </article>
  )
}

export default Articulos