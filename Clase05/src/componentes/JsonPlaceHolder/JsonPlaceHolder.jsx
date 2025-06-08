import React, { useState, useEffect } from 'react'

const JsonPlaceHolder = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{

    //opcion 1: usamos fetch utilizando los metodos then y catch
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(res => setUsuarios(res))
        .catch(error => console.log(error))


   //opcion 2: Podemos usar Asyn Await    

/* try{
        const pedirUsuarios = async () => {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await respuesta.json()
        setUsuarios(data)
   }
   pedirUsuarios()
} catch(error) {
    console.log(error)
}
 */
   },[])

   
   

  return (
    <div>
        <h2>Usuarios de JSONPlaceHolder</h2>
        <ul>
            {
                usuarios.map(usuario=>{
                    return(
                        <li key={usuario.id}>
                            {usuario.name}
                            
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default JsonPlaceHolder