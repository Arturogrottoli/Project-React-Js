import { useState } from "react";

/**
 * ============================================
 * REACT ROUTER - COMPONENTE Link
 * ============================================
 * 
 * Link es el componente de React Router para navegar entre rutas.
 * 
 * DIFERENCIAS ENTRE <Link> Y <a>:
 * 
 * 1. <a href="/"> (HTML tradicional):
 *    - Recarga toda la página
 *    - Pierde el estado de la aplicación
 *    - Más lento (nueva petición HTTP)
 *    - NO usar en SPAs (Single Page Applications)
 * 
 * 2. <Link to="/"> (React Router):
 *    - NO recarga la página (navegación del lado del cliente)
 *    - Mantiene el estado de la aplicación
 *    - Más rápido (solo cambia el componente)
 *    - Ideal para SPAs
 * 
 * PROPS DEL COMPONENTE Link:
 * 
 * - to: La ruta a la que queremos navegar (string)
 *   Ejemplos:
 *   - to="/" → navega a la página principal
 *   - to="/category/red" → navega a la categoría "red"
 *   - to={`/wine/${id}`} → navega al detalle del vino con ese ID
 * 
 * - className, style, etc.: Funciona igual que un <a> normal
 * 
 * IMPORTANTE:
 * - Link solo funciona dentro de un componente envuelto por BrowserRouter
 * - Si usas Link fuera de BrowserRouter, obtendrás un error
 */
import { Link } from "react-router";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import wines from "../winesData";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const uniqueCategories = [...new Set(wines.map((wine) => wine.category))];

    return (
        <header className="bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* 
                    Link al home: Al hacer clic en el logo, navega a "/"
                    sin recargar la página. El componente App.jsx detectará
                    el cambio de URL y renderizará ItemListContainer.
                */}
                <Link to="/" className="text-2xl font-bold text-red-900">
                    Rojo & Blanco
                </Link>

                {/* 
                    Categorías en pantallas grandes
                    Cada Link navega a una ruta dinámica usando template literals
                    Ejemplo: to={`/category/${category}`} → "/category/red"
                    Cuando el usuario hace clic, React Router:
                    1. Cambia la URL a "/category/red"
                    2. Routes en App.jsx detecta la coincidencia
                    3. Renderiza ItemListContainer con categoryName="red"
                */}
                <div className="hidden md:flex space-x-6">
                    {uniqueCategories.map((category) => (
                        <Link
                            key={category}
                            to={`/category/${category}`}
                            className="text-gray-700 hover:text-red-900 transition"
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </Link>
                    ))}
                </div>

                {/* Ícono de menú (visible solo en mobile) */}
                <button
                    className="md:hidden text-red-900 text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>

                <CartWidget />
            </nav>

            {/* 
                Menú mobile desplegable
                Mismo comportamiento que el menú desktop, pero adaptado para móviles.
                onClick={() => setMenuOpen(false)} cierra el menú después de navegar.
            */}
            {menuOpen && (
                <div className="md:hidden bg-gray-200 px-4 py-4 flex flex-col items-center space-y-3 shadow-md">
                    {uniqueCategories.map((category) => (
                        <Link
                            key={category}
                            to={`/category/${category}`}
                            className="text-gray-700 hover:text-red-900 transition text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

export default NavBar;
