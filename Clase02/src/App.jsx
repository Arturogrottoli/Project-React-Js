
// ===============================================================
// 2.1 FUNDAMENTOS DE JAVASCRIPT MODERNO (que se usan en React)
// ===============================================================

// - Arrow Functions: sintaxis más corta para funciones
//   const sumar = (a, b) => a + b

// - Template Strings: usamos backticks (``) para interpolar variables
//   const precio = 100
//   console.log(`El precio es ${precio}`)

// - Desestructuración: sacar propiedades de un objeto
//   const celular = {marca: "Samsung", precio: 200000}
//   const {marca, precio} = celular

// - Operador spread/rest: copiar y extender objetos/arrays
//   const nuevo = {...celular, stock: 10}

// - Import/Export de módulos: como estamos haciendo al inicio del archivo



// ===============================================================
// 2.2 HERRAMIENTAS ESENCIALES EN REACT.JS
// ===============================================================

// - Node.js + npm/yarn -> instalar dependencias
// - Vite o Create React App -> inicializar proyectos React
// - JSX -> permite mezclar HTML + JS
// - DevTools de React -> inspeccionar componentes y props en el navegador
// - Extensiones útiles: React Developer Tools, ESLint, Prettier



// ===============================================================
// 2.3 COMPONENTES Y SU GESTIÓN EN REACT
// ===============================================================

// ¿Qué es un componente?
// ➡️ Es una función que devuelve elementos de UI
// ➡️ Puede ser reutilizado y recibir datos (props)

// Ventajas de los componentes:
// ✅ Reutilización de código
// ✅ Separación de responsabilidades
// ✅ Mejor legibilidad
// ✅ Posibilidad de trabajar en equipo

// Ejemplo de props (datos que viajan del padre al hijo):
// <Boton texto="Agregar al carrito"/>
// En el componente Boton, se recibe con props.texto



// ===============================================================
// 2.4 GESTIÓN DE ESTADOS EN REACT
// ===============================================================

// Para manejar valores dinámicos usamos useState (hook de React).
// Es como una "memoria interna" del componente que recuerda valores
// aunque el componente se vuelva a renderizar.

// Ejemplo:
// import { useState } from "react"
// const [contador, setContador] = useState(0)
// setContador(contador + 1) -> actualiza el valor del estado



// ===============================================================
// 2.5 RECURSOS COMPLEMENTARIOS
// ===============================================================

// - Documentación oficial: https://react.dev
// - Librerías de UI: Material UI, Bootstrap, Tailwind
// - Íconos: React Icons
// - Navegación: React Router



// ===============================================================
// 2.6 ACTIVIDADES PRÁCTICAS
// ===============================================================

// TODO 1: Crear un componente Footer
// TODO 2: Pasarle como props un texto con tu nombre
// TODO 3: Renderizarlo en App debajo del NavBar





// ================================================
// 📚 CLASE DE REACT - ARCHIVO App.jsx
// ================================================

// 🔹 Importamos los componentes que creamos en la carpeta "componentes"
// Cada componente representa una parte de la interfaz de usuario (UI)
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import Boton from './componentes/Boton/Boton'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'



// ===============================================================
// 🛠️ DEFINICIÓN DEL COMPONENTE PRINCIPAL (App)
// ===============================================================

const App = () => {

  // 🔹 Ejemplo de lógica JS dentro del componente:
  function saludo() {
    console.log("hola")
  }
  saludo()

  // 🔹 Estilos en línea con objeto JS
  let colorFondo = { backgroundColor: "green" }

  // 🔹 Objeto para pasar como prop
  const celular = {
    marca: "Samsung",
    precio: 200000
  }

  // ==========================================================
  // 📌 LO QUE RENDERIZA EL COMPONENTE
  // ==========================================================
  return (
    <>
      {/* PREENTREGA: mostrar la barra de navegación y la lista de productos */}
      <NavBar/>
      <ItemListContainer/>

      {/* 
      🔹 OTROS EJEMPLOS (descomentar para probar)
      
      <div>App</div>
      <h2>hola mundo</h2>
      <h3 style={colorFondo}>clase 2</h3>
      <h3 style={{color:"blue"}}>cualquier cosa</h3> 
      */}

      {/* 
      🔹 PASO DE PROPS A COMPONENTES

      <TituloPrincipal saludo="Hola Comision" producto={celular}/>
      <Boton texto="Agregar al carrito"/>
      <Boton texto="Eliminar"/> 
      */}



      {/* 
      🔹 COMPONENTES CON ESTADO (ejemplo de contador de stock)

      <ItemCount stock={15}/>
      <ItemCount stock={5}/>
      <ItemCount stock={20}/>
      */}
    </>
  )
}

// Exportamos el componente para poder usarlo en index.jsx
export default App



