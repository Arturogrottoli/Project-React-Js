// Importamos createContext desde React
// createContext es la función que nos permite crear un "canal" de datos globales
import { createContext } from "react";

// 1️⃣ Creamos el contexto y lo exportamos
// Contexto = canal por donde viajarán los datos entre componentes
// Le ponemos null como valor inicial (podría ser cualquier valor)
export const Contexto = createContext(null);

// ------------------------------------------------------------
// 🔹 Pasos para usar el Context en la app
// ------------------------------------------------------------

// 1) Crear el contexto
// Ya lo hicimos arriba con createContext(). Este paso define la "tubería" de datos.

// 2) Importar el contexto en App
// En App.js hacemos: import { Contexto } from './context/context'
// Para poder usar el Provider y compartir los datos.

// 3) Proveer el contexto en el componente App
// Usamos <Contexto.Provider value={datos}> para envolver los componentes
// que van a necesitar los datos. "value" es lo que compartimos.

// 4) Consumir el contexto en el componente Nieto (o cualquier componente dentro)
// Dentro de cualquier componente usamos: 
// const datos = useContext(Contexto)
// Esto nos permite acceder directamente a los datos compartidos,
// sin necesidad de recibir props de los padres intermedios.
