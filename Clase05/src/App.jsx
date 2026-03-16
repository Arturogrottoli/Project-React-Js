import NavBar from "./components/NavBar";

/**
 * ============================================
 * REACT ROUTER - CONFIGURACIÓN DE RUTAS
 * ============================================
 * 
 * React Router es una librería que permite crear aplicaciones de una sola página (SPA)
 * con navegación entre diferentes "vistas" sin recargar toda la página.
 * 
 * COMPONENTES PRINCIPALES:
 * 
 * 1. BrowserRouter:
 *    - Es el componente contenedor que envuelve toda la aplicación
 *    - Proporciona el contexto de enrutamiento a todos los componentes hijos
 *    - Usa la API History del navegador para sincronizar la URL con el estado de la app
 *    - Solo debe haber UN BrowserRouter en toda la aplicación (generalmente en App.jsx)
 * 
 * 2. Routes:
 *    - Contenedor que agrupa todas las rutas de la aplicación
 *    - Evalúa las rutas de arriba hacia abajo y renderiza la primera que coincida
 *    - Reemplaza al antiguo <Switch> de versiones anteriores de React Router
 * 
 * 3. Route:
 *    - Define una ruta individual con su path (URL) y el componente a renderizar
 *    - path: la URL que activará esta ruta (ej: "/", "/category/red")
 *    - element: el componente React que se mostrará cuando la ruta coincida
 *    - Parámetros dinámicos: se definen con ":" (ej: ":categoryName", ":itemId")
 * 
 * TIPOS DE RUTAS:
 * 
 * - Ruta exacta: path="/" → coincide solo con la URL exacta "/"
 * - Ruta con parámetro: path="/category/:categoryName" → captura valores dinámicos
 *   Ejemplo: "/category/red" → categoryName = "red"
 * - Ruta catch-all: path="*" → captura cualquier ruta que no haya coincidido antes
 *   Útil para páginas 404 (Not Found)
 */
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            {/* 
                BrowserRouter: Envuelve toda la app para habilitar el enrutamiento.
                Sin esto, los componentes Link, useParams, etc. no funcionarán.
            */}
            <BrowserRouter>
                {/* 
                    NavBar se renderiza fuera de Routes porque queremos que esté
                    visible en todas las páginas (navegación persistente)
                */}
                <NavBar />
                <main className="container mx-auto px-4 py-4">
                    {/* 
                        Routes: Contenedor que evalúa y renderiza la ruta que coincide
                        con la URL actual del navegador.
                    */}
                    <Routes>
                        {/* 
                            RUTA 1: Página principal (Home)
                            - path="/" → coincide con la raíz del sitio
                            - Renderiza ItemListContainer que muestra todos los productos
                        */}
                        <Route path="/" element={<ItemListContainer />} />

                        {/* 
                            RUTA 2: Página de categoría (con parámetro dinámico)
                            - path="/category/:categoryName" → captura el nombre de la categoría
                            - El ":" indica que categoryName es un parámetro dinámico
                            - Ejemplo: URL "/category/red" → categoryName = "red"
                            - Ejemplo: URL "/category/white" → categoryName = "white"
                            - Para acceder al valor en el componente, usamos useParams()
                        */}
                        <Route
                            path="/category/:categoryName"
                            element={<ItemListContainer />}
                        />

                        {/* 
                            RUTA 3: Página de detalle de producto (con parámetro dinámico)
                            - path="/wine/:itemId" → captura el ID del vino
                            - Ejemplo: URL "/wine/1" → itemId = "1"
                            - Ejemplo: URL "/wine/5" → itemId = "5"
                            - El componente ItemDetailContainer usa useParams() para obtener itemId
                        */}
                        <Route
                            path="/wine/:itemId"
                            element={<ItemDetailContainer />}
                        />

                        {/* 
                            RUTA 4: Página 404 (Not Found) - Ruta catch-all
                            - path="*" → coincide con CUALQUIER URL que no haya coincidido antes
                            - IMPORTANTE: Esta ruta debe ir AL FINAL porque Routes evalúa
                              de arriba hacia abajo y se detiene en la primera coincidencia
                            - Si esta ruta estuviera primero, siempre se renderizaría
                        */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
