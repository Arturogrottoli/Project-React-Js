import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


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
        <Ref/>

    </div>
  )
}

export default App
