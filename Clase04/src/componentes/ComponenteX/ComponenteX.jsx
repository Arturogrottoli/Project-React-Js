import React from 'react'

/*
=== COMPONENTE X - DEMOSTRACIÓN DE CHILDREN ===

🎯 PROPÓSITO:
Este componente simple demuestra cómo se pueden pasar otros componentes como children.

📚 CONCEPTOS CLAVE:

1. COMPONENTE HIJO:
   - Se pasa como children a otro componente
   - Se renderiza dentro del componente padre
   - Mantiene su propia lógica y estructura

2. REUTILIZACIÓN:
   - Componente simple y reutilizable
   - Puede ser usado en diferentes contextos
   - No depende de props específicas

3. COMPOSICIÓN:
   - Se compone con otros componentes
   - Crea estructuras más complejas
   - Patrón de diseño común en React

💡 USO EN EL EJEMPLO:
- Se pasa como children al componente Articulos
- Se renderiza dentro del contenido del artículo
- Demuestra la flexibilidad del patrón children
*/

const ComponenteX = () => {
  return (
    <h3 style={{ 
      color: '#4f46e5', 
      fontStyle: 'italic',
      textAlign: 'center',
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px'
    }}>
      Soy un componente distinto pasado por children
    </h3>
  )
}

export default ComponenteX