/**************************************************************
 * 1. GITHUB – Qué es, para qué sirve y comandos clave
 **************************************************************/

/*
Git es un sistema de control de versiones que nos permite:
- Guardar el historial de cambios en nuestros proyectos
- Volver a versiones anteriores del código
- Colaborar con otras personas sin pisar el trabajo de los demás

GitHub es una plataforma en la nube donde subimos los repositorios
para poder compartirlos y colaborar online.
*/

// Comandos principales:
// git init                 → Inicializa un repo local
// git add .               → Agrega todos los archivos al staging
// git commit -m "mensaje" → Guarda un punto en el historial
// git remote add origin URL → Enlaza el repo local con uno en GitHub
// git push -u origin main → Sube el código al repositorio remoto
// git pull origin main    → Baja los cambios del repo remoto

/**************************************************************
 * 2. REPASO DE JAVASCRIPT – Intro para llegar a React
 **************************************************************/

/*
JavaScript es el lenguaje que usamos para agregar interacción
y lógica a nuestras páginas web.

Ejemplo básico: cambiar el contenido de un título con un botón.
Este tipo de manipulación del DOM se hace de forma directa,
y aunque es útil para cosas pequeñas, se vuelve difícil de escalar.
*/

// HTML (simulado):
// <h1 id="titulo">Hola Mundo</h1>
// <button onclick="cambiarTexto()">Cambiar</button>

function cambiarTexto() {
  document.getElementById("titulo").innerText = "Texto cambiado con JS";
}

/*
Este ejemplo está bien como introducción,
pero cuando tenés muchas interacciones o datos,
terminás escribiendo mucho código manual.

Ahí es donde aparece React como solución.
*/

/**************************************************************
 * 3. INTRODUCCIÓN A REACT – Qué es, ventajas y cómo instalarlo
 **************************************************************/

/*
React es una librería de JavaScript para construir interfaces
de usuario. Nos permite trabajar con componentes reutilizables
y mantener el código más organizado y dinámico.

🔁 Ventajas de usar React:
- Actualiza la vista de forma automática (DOM virtual)
- Reutilización de código (componentes)
- Más rápido y eficiente para proyectos grandes
- Comunidad muy activa

📛 Diferencias clave:
- En HTML/JS clásico se modifica el DOM directamente.
- En React, se trabaja con componentes y el DOM virtual se encarga
  de actualizar solo lo que cambia.

🚀 ¿Cómo empezar un proyecto con React?
Recomendamos usar Vite (una herramienta rápida y moderna).

📋 Requisitos del sistema:
- Tener instalado Node.js (https://nodejs.org)
- Tener npm disponible (viene con Node)
- Tener Git instalado (opcional pero útil)

🛠️ Pasos para instalar React con Vite:

1. Crear el proyecto:
   npm create vite@latest mi-proyecto -- --template react

2. Entrar al proyecto:
   cd mi-proyecto

3. Instalar dependencias:
   npm install

4. Correr el servidor:
   npm run dev

Con eso, ya tenemos un entorno React funcionando listo para trabajar.
*/

/**************************************************************
 * Fin del resumen teórico con ejemplos y comandos comentados
 **************************************************************/

