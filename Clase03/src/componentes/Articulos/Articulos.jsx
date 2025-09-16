import React from 'react'

// Componente presentacional que recibe datos por props y
// contenido flexible por children. Ideal para explicar:
// - Desestructuración de props en la firma
// - Patrón de contenedor con children
// - Accesibilidad básica en imágenes (alt)
const Articulos = ({img, titulo, children}) => {

  return (
    <article>
        {/* La imagen y el título vienen como props desde el padre */}
        <img src={img} alt={titulo} loading="lazy" />
        <h2>{titulo}</h2>

        {/* Children permite que el padre decida qué contenido mostrar aquí */}
        {children}

        {/* Este botón podría disparar una acción recibida por props (onLeer) */}
        <button type="button">Leer Articulo</button>
    </article>
  )
}

export default Articulos