import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import Boton from './componentes/Boton/Boton'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'


//JSX: EXTENSION DE JS. JavaScript Syntax eXtension.
//caracteristicas:
//1) toda etiqueta de apertura tiene que tener un cierre. <img/>
//2) todo componente tiene que tener 1 return
//3) siempre tiene que devolver 1 elemento
//4) denbtro del componente, antes del return, puedo escribir cualquier logica de js

//Componentes:
//Conjunto de elementos que cumplen una funcion especifica en la interfaz del usuario.
//Ventajas de trabajar con componentes:
/* 
-Reutilizamos codigo
-favorece la separacion de repsonsabilidades
-El codigo se vuelve mas facil de entender
-Mejora el rendicmiento de la aplicacion


Caracteristicas:
-Renderiza un unico elemento
-Pueden recibir props(propiedades de los componentes)

¿que son esas props?
las props son objetos que contienen datos que un componente necesita para rederizarse correctamente.
y estas se envian de forma unidireccional de un componente padre a un componente hijo.

*/

const App = () => {

  function saludo() {
    console.log("hola")
  }

  saludo()

  let colorFondo= {backgroundColor: "green"}


  const celular = {
    marca: "Samsung",
    precio: 200.000
  }

  return (
    <>
      {/* PREENTREGA */}
      <NavBar/>
      <ItemListContainer/>

      {/* <div>App</div>
      <h2>hola mundo</h2>
      <h3 style={colorFondo}>clase 2</h3>
      <h3 style={{color:"blue"}}>cualqueircosa</h3> */}

      {/* <TituloPrincipal saludo = "Hola Comision" producto={celular}/>
      <Boton texto="Comprar"/>
      <Boton texto="Eliminar"/> */}

      {/* <ItemCount stock={15}/>
      <ItemCount stock={5}/>
      <ItemCount stock={20}/>
       */}
    </>
  )
}

export default App