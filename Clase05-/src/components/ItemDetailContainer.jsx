import { useState, useEffect } from "react";

/**
 * ============================================
 * REACT ROUTER - useParams en ItemDetailContainer
 * ============================================
 * 
 * Este componente demuestra cómo usar useParams para obtener el ID
 * de un producto desde la URL y cargar sus detalles.
 * 
 * FLUJO COMPLETO:
 * 
 * 1. Usuario hace clic en "Detalle" en Item.jsx
 * 2. Link navega a: `/wine/${item.id}` → ej: "/wine/5"
 * 3. Routes en App.jsx detecta la ruta "/wine/:itemId"
 * 4. Renderiza ItemDetailContainer
 * 5. useParams() extrae: { itemId: "5" }
 * 6. useEffect busca el vino con id === 5
 * 7. Renderiza ItemDetail con los datos del vino
 */
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import NotFound from "./NotFound";
import wines from "../winesData";

function ItemDetailContainer() {
    const [item, setItem] = useState();
    
    /**
     * useParams() extrae el parámetro itemId de la URL.
     * 
     * Ejemplo:
     * - URL: "/wine/5"
     * - itemId = "5" (como string)
     * 
     * IMPORTANTE: Los parámetros siempre vienen como strings.
     * Si necesitamos un número, debemos convertirlo: Number(itemId)
     */
    const { itemId } = useParams();

    /**
     * Validación del itemId:
     * 1. Verifica que itemId exista (no sea undefined)
     * 2. Verifica que sea un número válido (!isNaN)
     * 3. Verifica que exista un vino con ese ID en la base de datos
     * 
     * Si alguna validación falla, mostramos la página 404 (NotFound).
     * Esto previene errores si el usuario escribe una URL inválida como "/wine/999"
     */
    const isItemIdValid =
        itemId &&
        !isNaN(itemId) &&
        wines.some((wine) => wine.id === Number(itemId));

    if (!isItemIdValid) {
        return <NotFound />;
    }

    /**
     * useEffect se ejecuta cuando cambia itemId (cuando el usuario navega
     * a un producto diferente).
     * 
     * Ejemplo de navegación:
     * - Usuario en "/wine/1" → itemId = "1"
     * - Usuario hace clic en otro producto → navega a "/wine/5"
     * - itemId cambia a "5"
     * - useEffect se ejecuta nuevamente
     * - Busca y carga el vino con id === 5
     */
    useEffect(() => {
        const getProducts = () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(wines);
                }, 1000); // Simula delay de la API
            });

        getProducts()
            .then((data) => {
                // Busca el vino que coincida con el itemId de la URL
                // Number(itemId) convierte el string "5" al número 5
                const wine = data.find((wine) => wine.id === Number(itemId));
                if (wine) setItem(wine);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]); // Se ejecuta cada vez que cambia itemId (cambio de URL)

    return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
