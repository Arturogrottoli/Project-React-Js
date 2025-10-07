Instalacion de ReactJs con Vite

Abrir consola y revisar las versiones de npm y node

node -v
npm -v

Utilizamos vite, entonces el comando va a ser el siguiente

npm create vite@latest my-app

Cual elijo? Javascript.

cd my-app
npm install
npm run dev

Introduccion a ReactJs
# 🚀 JavaScript Esencial para React - Clase 01

## 📚 Introducción
Esta guía cubre los 10 conceptos más importantes de JavaScript que necesitas dominar antes de sumergirte en React. Cada concepto incluye ejemplos prácticos y explicaciones de por qué es crucial para el desarrollo con React.

---

## 🎯 1. Variables y Tipos de Datos

### ¿Por qué es importante para React?
Los componentes de React frecuentemente trabajan con diferentes tipos de datos, y entender cómo declarar y usar variables es fundamental.

### 📖 Teoría:
En JavaScript moderno (ES6+), tenemos tres formas de declarar variables: `var`, `let` y `const`. Cada una tiene un alcance (scope) diferente y comportamiento específico. Para React, es crucial entender estas diferencias porque afectan cómo se comportan las variables dentro de los componentes y funciones.

```javascript
// ✅ Forma moderna (ES6+) - Recomendado para React
let nombre = "Juan";
const edad = 25;
let esEstudiante = true;

// ❌ Forma antigua - Evitar en React
var formaAntigua = "no recomendado";

// 📝 Puntos clave:
// - Usa 'const' para valores que no cambiarán
// - Usa 'let' para valores que se reasignarán
// - Evita 'var' (alcance de función, puede causar problemas)
```

---

## 🎯 2. Template Literals (Plantillas Literales)

### ¿Por qué es importante para React?
Los componentes de React frecuentemente necesitan combinar texto estático con valores dinámicos, haciendo que las plantillas literales sean esenciales.

### 📖 Teoría:
Las template literals (plantillas literales) son una característica de ES6 que nos permite crear strings de manera más legible y flexible. En lugar de concatenar strings con el operador `+`, podemos usar backticks (`) y la sintaxis `${}` para insertar variables y expresiones directamente en el texto. Esto es especialmente útil en React para crear contenido dinámico de manera más limpia.

```javascript
const nombreUsuario = "Alicia";
const edadUsuario = 30;

// ✅ Forma moderna - Perfecto para React
const saludo = `¡Hola, ${nombreUsuario}! Tienes ${edadUsuario} años.`;

// ❌ Forma antigua - Más verboso
const saludoAntiguo = "¡Hola, " + nombreUsuario + "! Tienes " + edadUsuario + " años.";

// 📝 Puntos clave:
// - Usa backticks (`) en lugar de comillas
// - Usa ${} para interpolación de variables
// - Puedes incluir expresiones: `${2 + 2}`
```

---

## 🎯 3. Arrow Functions (Funciones Flecha)

### ¿Por qué es importante para React?
Los componentes de React son funciones, y las arrow functions proporcionan una sintaxis más limpia y mejor manejo del contexto 'this'.

### 📖 Teoría:
Las arrow functions (funciones flecha) son una característica de ES6 que simplifica la sintaxis de las funciones. Tienen un comportamiento especial con respecto al contexto `this` - lo heredan del contexto donde fueron definidas (lexical scoping), en lugar de crear su propio contexto. Esto es especialmente importante en React para evitar problemas con el contexto `this` en event handlers y callbacks.

```javascript
// ✅ Arrow function - Perfecto para componentes React
const MiComponente = () => {
    return <div>Hola Mundo</div>;
};

// ✅ Arrow function con parámetros
const sumarNumeros = (a, b) => a + b;

// ✅ Arrow function con múltiples líneas
const procesarDatos = (datos) => {
    const resultado = datos.map(item => item * 2);
    return resultado.filter(item => item > 10);
};

// ❌ Función tradicional - Más verbosa
function formaAntigua() {
    return "Hola Mundo";
}

// 📝 Puntos clave:
// - Sintaxis más corta
// - Return implícito para expresiones únicas
// - Enlace léxico de 'this' (importante para event handlers)
```

---

## 🎯 4. Destructuring (Desestructuración)

### ¿Por qué es importante para React?
Los componentes de React reciben props como objetos, y la desestructuración facilita extraer valores específicos.

### 📖 Teoría:
La desestructuración es una característica de ES6 que nos permite extraer valores de objetos y arrays de manera más concisa. En lugar de acceder a las propiedades una por una, podemos "desempaquetar" múltiples valores en una sola línea. Esto es especialmente útil en React para trabajar con props, state y otros objetos de manera más limpia y legible.

```javascript
// ✅ Desestructuración de objetos - Esencial para props de React
const usuario = { nombre: "Juan", edad: 25, email: "juan@ejemplo.com" };
const { nombre, edad } = usuario;

// ✅ Desestructuración de arrays
const colores = ["rojo", "verde", "azul"];
const [primerColor, segundoColor] = colores;

// ✅ Desestructuración en parámetros de función
const manejarUsuario = ({ nombre, edad }) => {
    console.log(`${nombre} tiene ${edad} años`);
};

// ✅ Ejemplo de componente React
const TarjetaUsuario = ({ nombre, edad, email }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Edad: {edad}</p>
            <p>Email: {email}</p>
        </div>
    );
};

// 📝 Puntos clave:
// - Extrae múltiples propiedades a la vez
// - Puedes proporcionar valores por defecto: { nombre = "Anónimo" }
// - Renombrar variables: { nombre: nombreUsuario }
```

---

## 🎯 5. Spread y Rest Operators

### ¿Por qué es importante para React?
Las actualizaciones de estado en React frecuentemente requieren crear nuevos objetos/arrays sin mutar el original, haciendo que el operador spread sea esencial.

### 📖 Teoría:
El operador spread (`...`) es una característica de ES6 que nos permite "expandir" elementos de arrays y propiedades de objetos. El operador rest es la misma sintaxis pero se usa para "recolectar" elementos restantes. En React, estos operadores son fundamentales para mantener la inmutabilidad del estado, que es un principio clave para el correcto funcionamiento de React.

```javascript
// ✅ Operador spread (...) - Esencial para estado de React
const arrayOriginal = [1, 2, 3];
const nuevoArray = [...arrayOriginal, 4, 5]; // [1, 2, 3, 4, 5]

const objetoOriginal = { nombre: "Juan", edad: 25 };
const objetoActualizado = { ...objetoOriginal, edad: 26 }; // { nombre: "Juan", edad: 26 }

// ✅ Operador rest - Recolectar elementos restantes
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(resto); // [3, 4, 5]

// ✅ Ejemplo de actualización de estado en React
const actualizarUsuario = (usuario, nuevosDatos) => {
    return { ...usuario, ...nuevosDatos }; // Fusionar sin mutación
};

// 📝 Puntos clave:
// - Crea copias superficiales (no copias profundas)
// - Esencial para actualizaciones inmutables de estado en React
// - Puede expandir strings, arrays y objetos
```

---

## 🎯 6. Métodos de Array (map, filter, reduce)

### ¿Por qué es importante para React?
Los componentes de React frecuentemente renderizan listas de datos, haciendo que estos métodos de array sean indispensables.

### 📖 Teoría:
Los métodos de array funcionales (`map`, `filter`, `reduce`) son fundamentales en JavaScript moderno y especialmente importantes en React. Estos métodos nos permiten transformar, filtrar y agregar datos de manera declarativa, sin mutar los arrays originales. En React, esto es crucial porque los componentes necesitan renderizar listas de elementos de manera eficiente y mantenible.

```javascript
const usuarios = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Ana", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 22 }
];

// ✅ map() - Transformar datos (esencial para listas en React)
const nombresUsuarios = usuarios.map(usuario => usuario.nombre);
const elementosUsuarios = usuarios.map(usuario => (
    <div key={usuario.id}>{usuario.nombre}</div>
));

// ✅ filter() - Filtrar datos
const adultos = usuarios.filter(usuario => usuario.edad >= 18);

// ✅ reduce() - Agregar datos
const edadTotal = usuarios.reduce((suma, usuario) => suma + usuario.edad, 0);

// ✅ Encadenar métodos
const resultado = usuarios
    .filter(usuario => usuario.edad > 20)
    .map(usuario => usuario.nombre)
    .join(", ");

// 📝 Puntos clave:
// - map() retorna nuevo array con la misma longitud
// - filter() retorna nuevo array con elementos filtrados
// - reduce() retorna un solo valor
// - Siempre usa la prop 'key' en listas de React
```

---

## 🎯 7. Renderizado Condicional

### ¿Por qué es importante para React?
Los componentes de React necesitan mostrar contenido diferente basado en condiciones, haciendo que la lógica condicional sea crucial.

### 📖 Teoría:
El renderizado condicional es una técnica fundamental en React que nos permite mostrar diferentes elementos de la interfaz basándonos en el estado de la aplicación o las props recibidas. JavaScript nos proporciona varias formas de implementar esta lógica: operadores ternarios, operadores lógicos y declaraciones if/else. En React, esto se traduce en mostrar o ocultar componentes, cambiar estilos, o renderizar contenido completamente diferente.

```javascript
// ✅ Operador ternario - Más común en React
const estaLogueado = true;
const saludo = estaLogueado ? "¡Bienvenido de vuelta!" : "Por favor inicia sesión";

// ✅ Operador lógico AND
const mostrarMensaje = estaLogueado && <div>¡Bienvenido de vuelta!</div>;

// ✅ Múltiples condiciones
const obtenerEstado = (usuario) => {
    if (usuario.esAdmin) return "Admin";
    if (usuario.esPremium) return "Premium";
    return "Regular";
};

// ✅ Ejemplo de componente React
const SaludoUsuario = ({ usuario }) => {
    return (
        <div>
            {usuario ? (
                <h1>¡Bienvenido, {usuario.nombre}!</h1>
            ) : (
                <h1>Por favor inicia sesión</h1>
            )}
            
            {usuario?.esAdmin && <p>Tienes privilegios de administrador</p>}
        </div>
    );
};

// 📝 Puntos clave:
// - Usa ternario para escenarios if/else
// - Usa && para condiciones simples
// - Usa optional chaining (?.) para acceso seguro a propiedades
```

---

## 🎯 8. Manejo de Eventos

### ¿Por qué es importante para React?
Los componentes de React necesitan responder a las interacciones del usuario, haciendo que el manejo de eventos sea fundamental.

### 📖 Teoría:
El manejo de eventos en React es similar al JavaScript tradicional, pero con algunas diferencias importantes. React usa camelCase para los nombres de eventos (onClick en lugar de onclick), y los event handlers reciben un objeto de evento sintético que es una envoltura del evento nativo del navegador. Esto nos permite manejar las interacciones del usuario de manera consistente y eficiente, manteniendo el código limpio y organizado.

```javascript
// ✅ Event handler básico
const manejarClick = () => {
    console.log("¡Botón clickeado!");
};

// ✅ Event handler con parámetros
const manejarClickUsuario = (idUsuario) => {
    console.log(`Usuario ${idUsuario} clickeó`);
};

// ✅ Event handler con objeto evento
const manejarCambioInput = (evento) => {
    console.log("Nuevo valor:", evento.target.value);
};

// ✅ Ejemplo de componente React
const Boton = () => {
    const manejarClick = (evento) => {
        evento.preventDefault(); // Prevenir comportamiento por defecto
        console.log("¡Botón clickeado!");
    };

    return (
        <button onClick={manejarClick}>
            Hazme click
        </button>
    );
};

// 📝 Puntos clave:
// - Usa camelCase para nombres de eventos (onClick, onChange)
// - El objeto evento se pasa automáticamente
// - Usa arrow functions para preservar el contexto 'this'
```

---

## 🎯 9. Async/Await y Promesas

### ¿Por qué es importante para React?
Los componentes de React frecuentemente necesitan obtener datos de APIs, haciendo que la programación asíncrona sea esencial.

### 📖 Teoría:
Las promesas y async/await son características fundamentales de JavaScript moderno para manejar operaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca. Async/await es una forma más elegante de trabajar con promesas, permitiéndonos escribir código asíncrono que se ve y se comporta como código síncrono. En React, esto es crucial para obtener datos de APIs, manejar formularios, y realizar operaciones que requieren tiempo.

```javascript
// ✅ Conceptos básicos de promesas
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡Datos obtenidos exitosamente!");
        }, 1000);
    });
};

// ✅ Async/await - Forma moderna
const obtenerDatosAsync = async () => {
    try {
        const resultado = await obtenerDatos();
        console.log(resultado);
        return resultado;
    } catch (error) {
        console.error("Error:", error);
    }
};

// ✅ Ejemplo con Fetch API
const obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch('https://api.ejemplo.com/usuarios');
        const usuarios = await respuesta.json();
        return usuarios;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};

// ✅ Ejemplo de componente React
const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarUsuarios = async () => {
            setCargando(true);
            const datos = await obtenerUsuarios();
            setUsuarios(datos);
            setCargando(false);
        };
        
        cargarUsuarios();
    }, []);

    if (cargando) return <div>Cargando...</div>;
    
    return (
        <div>
            {usuarios.map(usuario => (
                <div key={usuario.id}>{usuario.nombre}</div>
            ))}
        </div>
    );
};

// 📝 Puntos clave:
// - Las funciones async siempre retornan promesas
// - await solo puede usarse dentro de funciones async
// - Siempre maneja errores con try/catch
// - Usa estados de carga en componentes React
```

---

## 🎯 10. Módulos (import/export)

### ¿Por qué es importante para React?
Las aplicaciones de React se construyen con múltiples componentes y utilidades, haciendo que el sistema de módulos sea esencial.

### 📖 Teoría:
El sistema de módulos ES6 nos permite dividir nuestro código en archivos separados y reutilizables. Cada archivo puede exportar funciones, clases, objetos o valores, y otros archivos pueden importarlos para usarlos. Esto es fundamental en React porque nos permite organizar nuestros componentes en archivos separados, crear utilidades reutilizables, y mantener un código limpio y modular. Los módulos también permiten tree-shaking, una técnica de optimización que elimina código no utilizado.

```javascript
// ✅ Exportaciones nombradas
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// ✅ Exportación por defecto
const Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b
};
export default Calculadora;

// ✅ Importaciones nombradas
import { sumar, restar } from './matematicas.js';

// ✅ Importación por defecto
import Calculadora from './calculadora.js';

// ✅ Importaciones mixtas
import Calculadora, { sumar, restar } from './matematicas.js';

// ✅ Ejemplo de componente React
// MiComponente.jsx
import React, { useState, useEffect } from 'react';
import { Boton } from './Boton';
import { formatearFecha } from '../utils/utilidadesFecha';

const MiComponente = () => {
    const [datos, setDatos] = useState(null);
    
    useEffect(() => {
        // Lógica del componente
    }, []);
    
    return (
        <div>
            <Boton onClick={() => console.log('clickeado')} />
            <p>{formatearFecha(new Date())}</p>
        </div>
    );
};

export default MiComponente;

// 📝 Puntos clave:
// - Usa exportaciones nombradas para múltiples elementos
// - Usa exportación por defecto para el componente/función principal
// - Importa hooks de React individualmente para tree-shaking
// - Usa rutas relativas para importaciones locales
```

---

## 🎓 Ejercicios de Práctica

Intenta estos ejercicios para reforzar tu comprensión:

1. **Variables & Template Literals**: Crea una función que tome un objeto usuario y retorne un saludo usando template literals.

2. **Arrow Functions & Destructuring**: Escribe una arrow function que desestructure un objeto producto y retorne una cadena formateada.

3. **Métodos de Array**: Crea una función que filtre usuarios por edad, mapee sus nombres y los una en una cadena.

4. **Renderizado Condicional**: Escribe un componente que muestre contenido diferente basado en el estado de autenticación del usuario.

5. **Manejo de Eventos**: Crea un componente de formulario con validación de entrada y manejo de envío.

6. **Async/Await**: Construye una función que obtenga datos de una API mock y maneje estados de carga/error.

---

## 🔗 Recursos Adicionales

- [Guía de JavaScript MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [Características de ES6](https://es6-features.org/)
- [Documentación Oficial de React](https://react.dev/)
- [JavaScript.info](https://javascript.info/)

---

## 📝 Notas para Instructores

**Puntos Clave de Enseñanza:**
- Enfatiza la transición de JavaScript vanilla a React
- Muestra cómo cada concepto se aplica en componentes React
- Usa ejemplos del mundo real que los estudiantes encontrarán
- Practica con ejercicios pequeños antes de pasar a React

**Desafíos Comunes de los Estudiantes:**
- Entender la diferencia entre `let`, `const` y `var`
- Comprender el concepto de inmutabilidad con el operador spread
- Manejar operaciones asíncronas en componentes React
- Uso apropiado de métodos de array para renderizar listas

**Criterios de Evaluación:**
- Puede explicar cada concepto con sus propias palabras
- Puede escribir ejemplos de código funcionales para cada concepto
- Puede identificar cuándo usar cada concepto en escenarios de React
- Puede debuggear problemas comunes relacionados con cada concepto 