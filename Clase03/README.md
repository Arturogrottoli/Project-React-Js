### Clase 03 – Componentes, Props, Children, useRef, Promesas y Listas

Este documento resume los conceptos vistos en la clase 3 y cómo aplicarlos sobre el proyecto de `Clase03`.

## 3.1 Introducción a la Unidad
- **Objetivo**: comprender cómo estructurar componentes, pasar información mediante props y children, manejar referencias con `useRef`, trabajar con promesas y renderizar listas con `Array.prototype.map`.
- **Archivos relevantes**: `src/App.jsx`, componentes en `src/componentes/` (por ejemplo: `Articulos`, `ComponenteX`, `Contador`, `Categorias`, `Ref`).

## 3.2 Ciclo de Vida de Componentes
- En componentes de función, el ciclo de vida se controla con hooks como `useEffect` y `useLayoutEffect`.
- Fases típicas: **montaje** (primer render), **actualización** (cambios en props/estado) y **desmontaje** (limpieza).
- Ejemplo básico:
```jsx
import { useEffect, useState } from 'react'

function DemoCiclo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Montaje/Actualización: count =', count)
    return () => {
      console.log('Desmontaje/Cleanup')
    }
  }, [count])

  return <button onClick={() => setCount(c => c + 1)}>Click {count}</button>
}
```

## 3.3 Children y Props
- **Props**: datos que se pasan de un componente padre a un hijo.
- **Children**: contenido anidado entre las etiquetas del componente.
- En `Clase03/src/App.jsx` se muestran ejemplos comentados de `Articulos` con `props` (`img`, `titulo`) y `children` (párrafos, `ComponenteX`).
```jsx
<Articulos img="https://picsum.photos/200/200" titulo="Casas para gatos">
  <p>Contenido como children</p>
  <ComponenteX/>
</Articulos>
```
- Dentro de `Articulos`, se accede a `props.children` para renderizar el contenido anidado.

## 3.4 Hooks: useRef
- `useRef` crea una referencia mutable que persiste entre renders y no provoca re-render al cambiar.
- Usos comunes: acceder a elementos del DOM (input, video), guardar valores mutables.
- Ejemplo:
```jsx
import { useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)
  const focus = () => inputRef.current?.focus()
  return (
    <div>
      <input ref={inputRef} placeholder="Escribe aquí" />
      <button onClick={focus}>Focar</button>
    </div>
  )
}
```
- Revisa `src/componentes/Ref/Ref.jsx` para el ejemplo de la clase.

## 3.5 Promesas en JavaScript
- Una promesa representa una operación asíncrona que puede estar en estado: pendiente, resuelta o rechazada.
- Consumir promesas:
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Hecho'))
```
- Con `async/await`:
```js
async function cargarUsuarios() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Hecho')
  }
}
```

## 3.6 Generación de Listas con el Método Map
- Para renderizar listas en React se usa `map`, asegurando una `key` estable por elemento.
```jsx
const productos = [
  { id: 1, nombre: 'Alimento', precio: 10 },
  { id: 2, nombre: 'Juguete', precio: 5 },
]

function ListaProductos() {
  return (
    <ul>
      {productos.map((p) => (
        <li key={p.id}>{p.nombre} - ${p.precio}</li>
      ))}
    </ul>
  )
}
```
- Evita usar el índice como `key` si los elementos pueden reordenarse/insertarse.

## 3.7 Actividades prácticas
1) En `App.jsx`, descomenta un ejemplo de `Articulos` y agrega contenido en `children`.
2) Crea un componente `FocusInput` que use `useRef` para focusear un input.
3) Implementa una función que traiga datos con `fetch` o `async/await` y muestre un listado usando `map`.
4) Modifica `Contador` para registrar en consola su montaje y desmontaje usando `useEffect`.

## 3.8 Recursos complementarios
- Documentación oficial de React: [`https://react.dev`](https://react.dev)
- Hooks (useEffect, useRef): [`https://react.dev/reference/react`](https://react.dev/reference/react)
- Promesas MDN: [`https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Fetch MDN: [`https://developer.mozilla.org/docs/Web/API/fetch`](https://developer.mozilla.org/docs/Web/API/fetch)

## 3.9 Material de Apoyo/Descargable
- Snippets de ejemplo (copiables desde este README).
- Enlaces a APIs públicas para practicar: [`https://jsonplaceholder.typicode.com`](https://jsonplaceholder.typicode.com), [`https://pokeapi.co`](https://pokeapi.co).
- Idea: guarda tus ejemplos en `src/componentes` como `FocusInput.jsx`, `ListaProductos.jsx`.
