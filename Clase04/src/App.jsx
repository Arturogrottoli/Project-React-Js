import React from 'react'
import Articulos from './componentes/Articulos/Articulos'
import ComponenteX from './componentes/ComponenteX/ComponenteX'
import Contador from './componentes/Contador/Contador'
import Categorias from './componentes/Categorias/Categorias'
import Ref from './componentes/Ref/Ref'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

/*
=== TEORÍA FUNDAMENTAL DE REACT - CLASE 4 ===

🎯 CONCEPTOS CLAVE DE ESTA CLASE:

1. CHILDREN (Props especiales):
   - Los componentes pueden recibir contenido entre sus etiquetas de apertura y cierre
   - Este contenido se pasa automáticamente como prop "children"
   - Permite crear componentes reutilizables y flexibles
   - Ejemplo: <Articulos>Contenido aquí</Articulos> → children = "Contenido aquí"

2. CICLO DE VIDA Y EFECTOS SECUNDARIOS:
   - useEffect: Hook para manejar efectos secundarios (API calls, timers, DOM manipulation)
   - Se ejecuta después del renderizado
   - Array de dependencias controla cuándo se ejecuta
   - Cleanup: función de limpieza para evitar memory leaks

3. REFS (useRef):
   - Referencias mutables que no causan re-renderizado
   - Acceso directo al DOM
   - Almacenar valores que cambian pero no necesitan actualizar la UI
   - Persisten entre renderizados

4. CARACTERÍSTICAS DE COMPONENTES:
   - Renderizan un único elemento (Fragment o div wrapper)
   - Pueden recibir props de diferentes tipos:
     * Datos primitivos (string, number, boolean, null)
     * Objetos y arrays
     * Funciones (event handlers)
     * CHILDREN (contenido entre etiquetas)
*/





const App = () => {


  return (
    <div>
        {/* <Articulos img="https://picsum.photos/200/300" titulo="Alimentos para gatos"/>
        <Articulos img="https://picsum.photos/200/400" titulo="vacunas para gatos"/>
        <Articulos img="https://picsum.photos/200/200" titulo="Juguetes para gatos"/>
        <Articulos img="https://picsum.photos/200/200" titulo="Casas para gatos"> 
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi enim modi nemo, perferendis provident quos voluptatum ad beatae facilis amet aliquam delectus placeat ut. Optio soluta vero tenetur nesciunt!</p>
          <strong>Tiempo de lectura: 3 minutos</strong>
          <ComponenteX/>
        </Articulos> */}

        {/* <Contador/> */}

        {/* <Categorias/> */}
        {/* <Ref/> */}
        
        {/* Actividades Prácticas - Clase 4 */}
        <ItemDetailContainer/>

    </div>
  )
}

export default App
