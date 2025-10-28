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
      {/* 
      ========================================
      🎯 ORDEN DIDÁCTICO DE LA CLASE 4
      ========================================
      
      FLUJO RECOMENDADO (de simple a complejo):
      
      1️⃣ useEffect BÁSICO - Contador
      2️⃣ CHILDREN SIMPLE - ComponenteX  
      3️⃣ CHILDREN COMPLEJO - Articulos
      4️⃣ useEffect CON ESTADO - Categorias
      5️⃣ useRef - Referencias
      6️⃣ CARGA ASÍNCRONA - ItemDetailContainer
      
      ========================================
      */}

      {/* 
      ========================================
      1️⃣ PRIMERA PARTE: useEffect BÁSICO
      ========================================
      Objetivo: Entender qué es useEffect y cómo funciona
      Conceptos: Efectos secundarios, array de dependencias
      */}
      <Contador/>

      {/* 
      ========================================
      2️⃣ SEGUNDA PARTE: CHILDREN SIMPLE
      ========================================
      Objetivo: Introducir el concepto de children
      Conceptos: Props especiales, contenido entre etiquetas
      */}
      <ComponenteX/>

      {/* 
      ========================================
      3️⃣ TERCERA PARTE: CHILDREN COMPLEJO
      ========================================
      Objetivo: Ver children en acción con componentes reales
      Conceptos: Componentes envolventes, flexibilidad
      */}
      <Articulos img="https://picsum.photos/200/300" titulo="Alimentos para gatos"/>
      <Articulos img="https://picsum.photos/200/400" titulo="Vacunas para gatos"/>
      <Articulos img="https://picsum.photos/200/200" titulo="Juguetes para gatos"/>
      <Articulos img="https://picsum.photos/200/200" titulo="Casas para gatos"> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi enim modi nemo, perferendis provident quos voluptatum ad beatae facilis amet aliquam delectus placeat ut. Optio soluta vero tenetur nesciunt!</p>
        <strong>Tiempo de lectura: 3 minutos</strong>
        <ComponenteX/>
      </Articulos>

      {/* 
      ========================================
      4️⃣ CUARTA PARTE: useEffect CON ESTADO
      ========================================
      Objetivo: useEffect que reacciona a cambios de estado
      Conceptos: Dependencias dinámicas, reactividad
      */}
      <Categorias/>

      {/* 
      ========================================
      5️⃣ QUINTA PARTE: useRef
      ========================================
      Objetivo: Diferencias entre useState y useRef
      Conceptos: Referencias mutables, sin re-renderizado
      */}
      <Ref/>

      {/* 
      ========================================
      6️⃣ SEXTA PARTE: CARGA ASÍNCRONA
      ========================================
      Objetivo: Patrón completo de carga de datos
      Conceptos: Promises, async/await, estados de carga
      */}
      <ItemDetailContainer/>

      {/* 
      ========================================
      📝 NOTAS PARA LA CLASE:
      ========================================
      
      • Descomenta cada sección gradualmente
      • Explica cada concepto antes de mostrar el código
      • Usa la consola del navegador para mostrar logs
      • Compara useState vs useRef en vivo
      • Muestra el título de la pestaña cambiando
      • Demuestra la diferencia entre children y props normales
      ========================================
      */}
    </div>
  )
}

export default App
