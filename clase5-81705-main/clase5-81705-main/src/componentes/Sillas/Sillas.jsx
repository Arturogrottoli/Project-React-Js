import { useParams } from "react-router-dom"
//useParams es un hook que nos permite acceder a los aprametros de las URLS y armacenar ese dato

//ejemplo: https://cellshop.com/sillas/10
//yo puedo tomar ese 10 y almacenarlo

const Sillas = () => {

    const {id} = useParams()
    console.log(id)


  return (
    <div>
        <h2>Seccion Sillas Gmar</h2>
        <p>Id Producto: {id}</p>
    </div>
  )
}

export default Sillas