/**
 * ============================================
 * REACT ROUTER - Link con Parámetros Dinámicos
 * ============================================
 * 
 * Este componente muestra cómo usar Link para navegar a una ruta
 * que incluye un parámetro dinámico (el ID del producto).
 * 
 * EJEMPLO:
 * - item.id = 5
 * - to={`/wine/${item.id}`} → "/wine/5"
 * - Al hacer clic, React Router navega a "/wine/5"
 * - Routes en App.jsx detecta la ruta "/wine/:itemId"
 * - Renderiza ItemDetailContainer
 * - useParams() en ItemDetailContainer extrae itemId = "5"
 */
import { Link } from "react-router";

function item({ item }) {
    return (
        <>
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 flex-1">
                    {item.description}
                </p>
                <div className="mt-auto">
                    {/* 
                        Link con parámetro dinámico:
                        - to={`/wine/${item.id}`} construye la URL con el ID del producto
                        - Ejemplo: si item.id = 5, la URL será "/wine/5"
                        - Al hacer clic, navega a esa URL sin recargar la página
                        - React Router detecta el cambio y renderiza ItemDetailContainer
                    */}
                    <Link
                        to={`/wine/${item.id}`}
                        className="inline-block px-4 py-2 bg-red-900 text-white text-sm rounded-lg hover:bg-gray-700"
                    >
                        Detalle
                    </Link>
                </div>
            </div>
        </>
    );
}

export default item;
