import { useState, useEffect } from "react";

/**
 * ============================================
 * REACT ROUTER - HOOK useParams
 * ============================================
 * 
 * useParams es un hook de React Router que permite acceder a los parámetros
 * dinámicos definidos en las rutas.
 * 
 * CÓMO FUNCIONA:
 * 
 * 1. En App.jsx definimos una ruta con parámetro:
 *    <Route path="/category/:categoryName" element={<ItemListContainer />} />
 * 
 * 2. El usuario navega a: "/category/red"
 * 
 * 3. useParams() extrae el valor del parámetro:
 *    const { categoryName } = useParams();
 *    // categoryName = "red"
 * 
 * EJEMPLOS:
 * 
 * Ruta: path="/category/:categoryName"
 * URL: "/category/red" → categoryName = "red"
 * URL: "/category/white" → categoryName = "white"
 * 
 * Ruta: path="/wine/:itemId"
 * URL: "/wine/5" → itemId = "5" (como string, no número)
 * 
 * IMPORTANTE:
 * - Los parámetros siempre vienen como STRINGS, aunque sean números
 * - Si la ruta no tiene parámetros, useParams() devuelve un objeto vacío {}
 * - Si la ruta no coincide, el componente no se renderiza (no hay parámetros)
 * 
 * MÚLTIPLES PARÁMETROS:
 * 
 * Ruta: path="/shop/:category/:subcategory"
 * URL: "/shop/electronics/phones"
 * useParams() devuelve: { category: "electronics", subcategory: "phones" }
 */
import { useParams } from "react-router";
import ItemList from "./ItemList";
import NotFound from "./NotFound";
import wines from "../winesData";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    /**
     * useParams() extrae los parámetros de la URL actual.
     * 
     * Si la URL es "/category/red":
     * - categoryName = "red"
     * 
     * Si la URL es "/" (home):
     * - categoryName = undefined (porque la ruta "/" no tiene parámetros)
     * 
     * Esto permite que el mismo componente funcione para:
     * - Mostrar todos los productos (cuando categoryName es undefined)
     * - Mostrar productos filtrados (cuando categoryName tiene un valor)
     */
    const { categoryName } = useParams();

    const uniqueCategories = [...new Set(wines.map((wine) => wine.category))];
    
    /**
     * Validación de categoría:
     * - Si categoryName es undefined (estamos en "/"), es válido
     * - Si categoryName existe, verificamos que sea una categoría válida
     * Esto previene errores si el usuario escribe una URL inválida como "/category/invalid"
     */
    const isCategoryValid =
        !categoryName || uniqueCategories.includes(categoryName.toLowerCase());

    /**
     * useEffect se ejecuta cuando cambia categoryName (parámetro de la URL).
     * 
     * FLUJO DE NAVEGACIÓN:
     * 
     * 1. Usuario hace clic en "Red" en el NavBar
     * 2. Link navega a "/category/red"
     * 3. React Router detecta el cambio de URL
     * 4. Routes en App.jsx renderiza ItemListContainer
     * 5. useParams() extrae categoryName = "red"
     * 6. useEffect detecta el cambio de categoryName
     * 7. Filtra los productos por categoría "red"
     * 8. Renderiza solo los vinos rojos
     * 
     * Si el usuario navega a "/" (home):
     * - categoryName = undefined
     * - Se muestran TODOS los productos (sin filtro)
     */
    useEffect(() => {
        setLoading(true);

        const getProducts = () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(wines);
                }, 1000); //Simula un delay de la API
            });

        getProducts()
            .then((data) => {
                // Si hay categoryName en la URL, filtramos por categoría
                if (categoryName) {
                    const filtered = data.filter(
                        (wine) => wine.category === categoryName
                    );
                    setItems(filtered);
                } else {
                    // Si no hay categoryName, mostramos todos los productos
                    setItems(data);
                }
            })
            .finally(() => setLoading(false));
    }, [categoryName]); // Se ejecuta cada vez que cambia categoryName (cambio de URL)

    if (!isCategoryValid) {
        return <NotFound />;
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600">Cargando productos...</p>
            </div>
        );
    }

    return (
        <>
            {categoryName ? (
                <h1 className="text-3xl text-gray-600 font-bold text-center my-4">
                    Selección vino {categoryName}
                </h1>
            ) : (
                <h1 className="text-3xl text-gray-600 font-bold text-center my-4">
                    Nuestro Catálogo de Vinos
                </h1>
            )}
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;
