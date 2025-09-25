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

### **useRef Hook**
`useRef` crea una referencia mutable que persiste durante todo el ciclo de vida del componente sin causar re-renderizados.

**Características:**
- No causa re-renderizado cuando cambia
- Persiste entre renderizados
- Útil para almacenar valores que no necesitan mostrar en la UI

---

## 🧩 Análisis de Componentes

### 1. **Articulos.jsx** - Children Props
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
- Utiliza `children` para renderizar contenido dinámico
- Permite composición flexible de componentes

**Relación con otros componentes:**
- Se usa en `App.jsx` con contenido personalizado
- `ComponenteX` se pasa como children dentro de `Articulos`

### 2. **ComponenteX.jsx** - Componente Simple
```jsx
const ComponenteX = () => {
  return (
    <h3>Soy un componente distintos pasado por children</h3>
  )
}
```

**¿Qué hace?**
- Componente simple que se renderiza como children
- Demuestra la composición de componentes

### 3. **Contador.jsx** - useEffect en Acción
```jsx
const Contador = () => {
    const [contador, setContador] = useState(1)

    useEffect(()=>{
        document.title = `Contador: ${contador}`
    },[contador])  // Se ejecuta cuando 'contador' cambia

    const sumarContador = () =>{
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

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
- Demuestra efectos secundarios (manipulación del DOM)

**Conceptos clave:**
- **Array de dependencias** `[contador]`: useEffect se ejecuta solo cuando `contador` cambia
- **Efecto secundario**: Cambiar el título del documento

### 4. **Categorias.jsx** - useEffect con Estado
```jsx
const Categorias = () => {
    const [categoria, setCategoria] = useState("")

    useEffect(()=>{
        document.title= `Categoria: ${categoria}`
    },[categoria])

    const manejadorCategoria =(categoria)=>{
        setCategoria(categoria)
    }

    return (
        <div>
            <h2>Categoria de Producto</h2>
            <h3>{categoria}</h3>
            <button onClick={()=>manejadorCategoria("Frutas")}> Frutas</button>
            <button onClick={()=>manejadorCategoria("Carnes")}> Carnes</button>
            <button onClick={()=>manejadorCategoria("Lacteos")}> Lacteos</button>
            <button onClick={()=>manejadorCategoria("Limpieza")}> Limpieza </button>
        </div>
    )
}
```

**¿Qué hace?**
- Permite seleccionar categorías de productos
- **useEffect** actualiza el título del documento con la categoría seleccionada
- Demuestra manejo de estado y efectos secundarios

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
            <p>Productos Marolio comprados:{cantidadProductos.current}</p>
            <button onClick={agregarAlCarrito}>Comprar</button>
        </div>
    )
}
```

**¿Qué hace?**
- Utiliza `useRef` para almacenar la cantidad de productos
- **No causa re-renderizado** cuando se actualiza
- Demuestra el uso de referencias mutables

**Conceptos clave:**
- `cantidadProductos.current`: Acceso al valor actual
- **Persistencia**: El valor se mantiene entre renderizados
- **Sin re-renderizado**: Cambios no provocan actualización de la UI

---

## 🔄 Flujo de la Aplicación

```
App.jsx
├── Articulos (con children)
│   └── ComponenteX (como children)
├── Contador (con useEffect)
├── Categorias (con useEffect)
└── Ref (con useRef)
```

**Relaciones entre componentes:**
1. **App** es el componente padre que orquesta todo
2. **Articulos** recibe **ComponenteX** como children
3. **Contador** y **Categorias** usan useEffect para efectos secundarios
4. **Ref** demuestra useRef para valores que no necesitan re-renderizado

---

## 🛠️ Actividades Prácticas

### **Actividad 1: ItemDetailContainer**

Crea un componente que simule la carga de datos de un producto:

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
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((item) => setItem(item));
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}
```

**Conceptos aplicados:**
- **useState** para manejar el estado del item
- **useEffect** para cargar datos al montar el componente
- **Promise** para simular llamada asíncrona
- **Renderizado condicional** para mostrar loading

### **Actividad 2: ItemDetail**

Componente para mostrar los detalles del producto:

```jsx
function ItemDetail({ item }) {
  return (
    <div>
      <img src={item.imageUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
}
```

**Conceptos aplicados:**
- **Props** para recibir datos del componente padre
- **JSX** para renderizar la información del producto

---

## 🎯 Puntos Clave de la Clase

### **useEffect - Casos de Uso Comunes:**
1. **Montaje**: `useEffect(() => {}, [])` - Se ejecuta una vez al montar
2. **Actualización**: `useEffect(() => {}, [dependencia])` - Se ejecuta cuando cambia la dependencia
3. **Limpieza**: `useEffect(() => { return () => {} }, [])` - Función de limpieza

### **useRef - Cuándo Usarlo:**
- Almacenar valores que no necesitan mostrar en la UI
- Referencias a elementos DOM
- Contadores que no afectan el renderizado
- Valores que persisten entre renderizados

### **Children Props:**
- Permiten composición flexible de componentes
- Hacen los componentes más reutilizables
- Permiten pasar JSX como props

---

## 🚀 Próximos Pasos

Esta clase sienta las bases para:
- **Clase 5**: Consumo de APIs reales
- **Clase 6**: Context API y manejo de estado global
- **Clase 7**: Routing y navegación

Los hooks `useEffect` y `useRef` son fundamentales para el desarrollo de aplicaciones React reales, especialmente cuando necesitamos interactuar con APIs externas y manejar efectos secundarios.