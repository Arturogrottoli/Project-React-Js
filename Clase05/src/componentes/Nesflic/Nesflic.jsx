import React, { useEffect, useState } from 'react'

const Nesflic = () => {
    const [peliculas, setPeliculas] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const MI_KEY = "788f0d2a";

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta =>respuesta.json())
            .then(data => setPeliculas(data.Search))
            .catch(error => console.log(error))
    },[busqueda])

    //funcion auxiliar

    const manejadorSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target.busqueda.value)
        setBusqueda(event.target.busqueda.value)
        event.target.busqueda.value = ""
    }



  return (
    
    <>
        <h1>Nesflic</h1>
        <form onSubmit={manejadorSubmit}>
            <input type="text" name="busqueda"/>
            <button type='submit'> Buscar</button>
        </form>

        <ul>
            {
                peliculas === undefined ? <h2>La pelicula no esta disponible en nuestra base de datos</h2> : peliculas.map(peli =>(
                    <li key={peli.imdbID}>
                        <img src={peli.Poster} alt={peli.Title} />
                    </li>
                ))
            }
        </ul>
    
    </>
  )
}

export default Nesflic