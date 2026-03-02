import React from 'react'
import Articulos from './componentes/Articulos/Articulos'
import ComponenteX from './componentes/ComponenteX/ComponenteX'
import Contador from './componentes/Contador/Contador'
import Categorias from './componentes/Categorias/Categorias'
import Ref from './componentes/Ref/Ref'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


// Características de los componentes (repaso rápido):
// - Renderizan un único árbol/elemento raíz
// - Pueden recibir props: datos primitivos, objetos/arreglos y funciones
// - Pueden anidar contenido mediante children

// En esta clase mostramos:
// - Props y children (Articulos + ComponenteX)
// - Estado y efectos (Contador, Categorias)
// - useRef para valores mutables no reactivos (Ref)


const App = () => {


  return (
    <div>
        {/* Ejemplo de Props + Children: Articulos permite pasar contenido flexible */}
        {/**
         * <Articulos img="https://picsum.photos/200/300" titulo="Alimentos para gatos"/>
         * <Articulos img="https://picsum.photos/200/400" titulo="Vacunas para gatos"/>
         * <Articulos img="https://picsum.photos/200/200" titulo="Juguetes para gatos"/>
         * <Articulos img="https://picsum.photos/200/200" titulo="Casas para gatos">
         *   <p>Contenido como children (texto, etiquetas, componentes).</p>
         *   <strong>Tiempo de lectura: 3 minutos</strong>
         *   <ComponenteX/>
         * </Articulos>
         */}

        {/* Ejemplo de estado + efecto: actualiza document.title con el valor */}
        {/** <Contador/> */}

        {/* Ejemplo de efecto dependiente: sincroniza título con la categoría */}
        {/** <Categorias/> */}

        {/* Ejemplo de useRef: valor mutable que no re-renderiza */}
        {/** <Ref/> */}

        <NavBar/>
        <ItemListContainer greeting="Bienvenido a la tienda! Estos son nuestros productos."/>
    <Ref/>
    </div>
  )
}

export default App
