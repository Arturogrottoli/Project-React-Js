// ===============================
// 🚀 CLASE 2 - React + Vite
// ===============================
//
// En esta clase vemos fundamentos de JS moderno,
// herramientas esenciales en React, componentes,
// props, estados y ejercicios prácticos.
// ==============================================


// ===============================
// 2.1 Fundamentos de JavaScript Moderno
// ===============================

// 🔹 Arrow Functions
const sumar = (a, b) => a + b
console.log("Suma con arrow:", sumar(2, 3))

// 🔹 Template Strings
const nombre = "Arturo"
console.log(`Hola ${nombre}, bienvenido a React!`)

// 🔹 Desestructuración
const celular = { marca: "Samsung", precio: 200000 }
const { marca, precio } = celular
console.log("Celular:", marca, precio)

// 🔹 Operador Spread
const nuevoCelular = { ...celular, stock: 10 }
console.log("Nuevo celular con spread:", nuevoCelular)


// ===============================
// 2.2 Herramientas esenciales en React.js
// ===============================
//
// - Node.js + npm → instalar dependencias
// - Vite → inicializar proyectos (npm create vite@latest)
// - JSX → mezclar JS + HTML
// - React DevTools → inspeccionar componentes
//
// Comando típico:
// npm create vite@latest mi-proyecto
// cd mi-proyecto
// npm install
// npm run dev


// ===============================
// 2.3 Componentes y su gestión en React.js
// ===============================
//
// Un componente es una función que devuelve JSX.
// Se pueden reutilizar y reciben "props".

const Boton = ({ texto }) => {
  return <button>{texto}</button>
}

// Ejemplo de uso:
// <Boton texto="Agregar al carrito"/>
// <Boton texto="Eliminar"/>


// ===============================
// 2.4 Gestión de estados en React
// ===============================
//
// Para valores dinámicos usamos el hook useState.
// Importante: useState devuelve un array [valor, funciónQueActualiza]

import { useState } from "react"

const Contador = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Contador: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </>
  )
}


// ===============================
// 2.5 Recursos complementarios
// ===============================
//
// - Documentación oficial React → https://react.dev
// - Librerías UI: Material UI, Tailwind, Bootstrap
// - Navegación: React Router
// - Íconos: React Icons


// ===============================
// 2.6 Actividades prácticas
// ===============================
//
// ✅ Crear un componente Footer
// ✅ Pasarle como props un texto con tu nombre
// ✅ Renderizarlo debajo del NavBar

const Footer = ({ autor }) => {
  return <footer>Hecho con ❤️ por {autor}</footer>
}

// Ejemplo de uso:
// <Footer autor="Arturo Grottoli"/>


// ===============================
// 2.7 Material de Apoyo / Tips
// ===============================
//
// 💡 Buenas prácticas:
// - Siempre cerrar etiquetas (<img />)
// - Un solo return por componente
// - La lógica JS va antes del return
// - Props viajan de padre a hijo
// - useState para manejar valores que cambian


// ===============================
// 🚀 Ejercicio Integrador
// ===============================
//
// Crear un contador con botón de reset y props.
// El contador recibe un valor inicial desde props.

const ContadorConReset = ({ inicial }) => {
  const [count, setCount] = useState(inicial)

  return (
    <>
      <h3>Contador con reset: {count}</h3>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <button onClick={() => setCount(inicial)}>🔄 Reset</button>
    </>
  )
}

// Ejemplo de uso:
// <ContadorConReset inicial={10}/>
