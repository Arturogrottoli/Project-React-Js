import React from 'react'
import Articulos from './componentes/Articulos/Articulos'
import ComponenteX from './componentes/ComponenteX/ComponenteX'
import Contador from './componentes/Contador/Contador'
import Categorias from './componentes/Categorias/Categorias'
import Ref from './componentes/Ref/Ref'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'


//caracteristicas:
//Renderizan un unico elemento
//pueden pasar props. Se pueden pasar:
//datos primitivos (string, number, boolean, null)
//obejtos y arreglos(arrays)
//funciones

//y ahora se suman los CHILDREN





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
