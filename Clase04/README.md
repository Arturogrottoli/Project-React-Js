# Clase 4 - React: Hooks y Efectos Secundarios

## 📚 Temario de la Clase

### 4.1 Paradigmas de información
### 4.2 Requests vía HTTP/S I
### 4.3 Requests vía HTTP/S II
### 4.4 Actividades prácticas
### 4.5 Recursos complementarios
### 4.6 Material de Apoyo/Descargable

---

## 🎯 Conceptos Clave de la Clase

### **useEffect Hook**
El hook `useEffect` es fundamental para manejar **efectos secundarios** en React. Los efectos secundarios son operaciones que van más allá del renderizado de componentes, como:
- Consumir APIs
- Manipular el DOM directamente
- Configurar suscripciones
- Limpiar recursos

**Sintaxis:**
```jsx
useEffect(() => {
  // Código del efecto secundario
}, [dependencias])
```

**Array de dependencias:**
- `[]` → Se ejecuta solo al montar el componente
- `[estado]` → Se ejecuta cuando cambia el estado especificado
- Sin array → Se ejecuta en cada renderizado (¡CUIDADO!)

### **useRef Hook**
`useRef` crea una referencia mutable que persiste durante todo el ciclo de vida del componente sin causar re-renderizados.

**Características:**
- No causa re-renderizado cuando cambia
- Persiste entre renderizados
- Útil para almacenar valores que no necesitan mostrar en la UI

### **Children Props**
La prop especial `children` permite pasar contenido entre las etiquetas de apertura y cierre de un componente, haciendo los componentes más flexibles y reutilizables.

---

## 🧩 Análisis de Componentes

### 1. **Contador.jsx** - useEffect básico
```jsx
const Contador = () => {
    const [contador, setContador] = useState(1)

    useEffect(() => {
        document.title = `Contador: ${contador}`
    }, [contador])  // Se ejecuta cuando 'contador' cambia

    const sumarContador = () => { setContador(contador + 1) }
    const restarContador = () => { setContador(contador - 1) }

    return (
        <div>
            <button onClick={sumarContador}> + </button>
            {contador}
            <button onClick={restarContador}> - </button>
        </div>
    )
}
```

**¿Qué hace?**
- Maneja un estado de contador
- **useEffect** actualiza el título del documento cuando el contador cambia
- Demuestra el patrón básico de efectos secundarios

**Conceptos clave:**
- **Array de dependencias** `[contador]`: useEffect se ejecuta solo cuando `contador` cambia
- **Efecto secundario**: Cambiar el título del documento (manipulación del DOM)

---

### 2. **ComponenteX.jsx** - Componente simple (children)
```jsx
const ComponenteX = () => {
  return (
    <h3>Soy un componente distinto pasado por children</h3>
  )
}
```

**¿Qué hace?**
- Componente simple y reutilizable
- Se pasa como children dentro de `Articulos`
- Demuestra que los componentes también pueden ser children

---

### 3. **Articulos.jsx** - Children Props
```jsx
const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h2>{titulo}</h2>
        {children}  {/* Contenido dinámico pasado como children */}
        <button>Leer Articulo</button>
    </article>
  )
}
```

**¿Qué hace?**
- Recibe props básicas: `img` y `titulo`
- Utiliza `children` para renderizar contenido dinámico entre sus etiquetas
- Permite composición flexible: texto, elementos JSX u otros componentes

**Uso en App.jsx:**
```jsx
<Articulos img="url" titulo="Casas para gatos">
  <p>Contenido como children</p>
  <strong>Tiempo de lectura: 3 minutos</strong>
  <ComponenteX/>   {/* Otro componente como children */}
</Articulos>
```

---

### 4. **Categorias.jsx** - useEffect con estado dinámico
```jsx
const Categorias = () => {
    const [categoria, setCategoria] = useState("")

    useEffect(() => {
        document.title = `Categoria: ${categoria}`
    }, [categoria])  // Se ejecuta cada vez que cambia la categoría

    const manejadorCategoria = (categoria) => {
        setCategoria(categoria)
    }

    return (
        <div>
            <h2>Categoría de Producto</h2>
            <h3>{categoria}</h3>
            <button onClick={() => manejadorCategoria("Frutas")}>Frutas</button>
            <button onClick={() => manejadorCategoria("Carnes")}>Carnes</button>
            <button onClick={() => manejadorCategoria("Lacteos")}>Lácteos</button>
            <button onClick={() => manejadorCategoria("Limpieza")}>Limpieza</button>
        </div>
    )
}
```

**¿Qué hace?**
- Permite seleccionar categorías de productos
- **useEffect** reacciona a cada cambio de estado y actualiza el título del documento
- Demuestra reactividad en tiempo real con dependencias dinámicas

---

### 5. **Ref.jsx** - useRef Hook
```jsx
const Ref = () => {
    const cantidadProductos = useRef(0)

    function agregarAlCarrito() {
        cantidadProductos.current = cantidadProductos.current + 1
        console.log(cantidadProductos.current)
    }

    return (
        <div>
            <p>Productos Marolio comprados: {cantidadProductos.current}</p>
            <button onClick={agregarAlCarrito}>Comprar</button>
        </div>
    )
}
```

**¿Qué hace?**
- Utiliza `useRef` para almacenar la cantidad de productos
- **No causa re-renderizado** cuando se actualiza el valor
- Demuestra la diferencia clave entre `useRef` y `useState`

**Conceptos clave:**
- `cantidadProductos.current`: Acceso directo al valor actual
- **Persistencia**: El valor se mantiene entre renderizados
- **Sin re-renderizado**: Cambios no provocan actualización de la UI (ver consola)

---

### 6. **ItemDetailContainer.jsx** - Carga asíncrona
```jsx
const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Producto Ejemplo',
        description: 'Descripción del producto.',
        price: 100,
        imageUrl: 'https://via.placeholder.com/150',
        stock: 15,
        category: 'Electrónicos'
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const itemData = await getItem();
        setItem(itemData);
      } catch (err) {
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, []); // Array vacío = solo al montar

  return (
    <div>
      {loading && <p>Cargando detalles del producto...</p>}
      {error && <p>{error}</p>}
      {item && !loading && <ItemDetail item={item} />}
    </div>
  );
}
```

**¿Qué hace?**
- Simula una llamada a API con `Promise` y `setTimeout`
- Maneja tres estados: `loading`, `error` y `item`
- **useEffect con `[]`**: Se ejecuta solo al montar, ideal para carga inicial
- Aplica el patrón **Container/Presentational**: separa lógica de presentación

**Conceptos clave:**
- **async/await** para manejar Promises de forma legible
- **Renderizado condicional** según el estado de la carga
- **try/catch/finally** para manejo de errores robusto

---

### 7. **ItemDetail.jsx** - Componente de presentación
```jsx
function ItemDetail({ item }) {
  return (
    <div>
      <img src={item.imageUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock} unidades</p>
    </div>
  );
}
```

**¿Qué hace?**
- Solo muestra datos, no maneja lógica de negocio
- Recibe el `item` como prop desde `ItemDetailContainer`
- Aplica renderizado condicional de estilos según el stock
- Ejemplo de **Presentational Component** puro y reutilizable

---

## 🔄 Flujo de la Aplicación

```
App.jsx
├── Contador           → useEffect básico (document.title)
├── ComponenteX        → Children simple
├── Articulos (x4)     → Children complejo
│   └── ComponenteX    → Pasado como children
├── Categorias         → useEffect con dependencia dinámica
├── Ref                → useRef (sin re-renderizado)
└── ItemDetailContainer → Carga asíncrona
    └── ItemDetail     → Presentación de datos
```

**Relaciones entre componentes:**
1. **App** es el componente padre que orquesta todo
2. **Articulos** recibe **ComponenteX** como children
3. **Contador** y **Categorias** usan `useEffect` para efectos secundarios
4. **Ref** demuestra `useRef` para valores que no necesitan re-renderizado
5. **ItemDetailContainer** carga datos y se los pasa a **ItemDetail**

---

## 🎯 Puntos Clave de la Clase

### **useEffect - Casos de Uso:**
1. **Montaje**: `useEffect(() => {}, [])` - Se ejecuta una vez al montar
2. **Actualización**: `useEffect(() => {}, [dependencia])` - Se ejecuta cuando cambia la dependencia
3. **Limpieza**: `useEffect(() => { return () => {} }, [])` - Función de limpieza para evitar memory leaks

### **useRef - Cuándo Usarlo:**
- Almacenar valores que no necesitan mostrar en la UI
- Referencias a elementos DOM
- Contadores internos que no afectan el renderizado
- Valores que persisten entre renderizados sin disparar actualizaciones

### **Children Props:**
- Permiten composición flexible de componentes
- Hacen los componentes más reutilizables
- Permiten pasar texto, JSX y otros componentes como contenido

---

## 🚀 Próximos Pasos

Esta clase sienta las bases para:
- **Clase 5**: Consumo de APIs reales
- **Clase 6**: Context API y manejo de estado global
- **Clase 7**: Routing y navegación

Los hooks `useEffect` y `useRef` son fundamentales para el desarrollo de aplicaciones React reales, especialmente cuando necesitamos interactuar con APIs externas y manejar efectos secundarios.
