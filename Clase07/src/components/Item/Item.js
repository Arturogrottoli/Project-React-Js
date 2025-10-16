import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({product}) => {
  return (
    <li className='col-xl-3 col-6 vinietas_card li_hover'>
      <div className="card mt-5 mb-2">
      <img src={product.img} class="card-img-top" alt="telefonos"/>
        <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">Precio: ${product.precio}</p>
        <Link to={`/producto/${product.id}`} className="btn btn-success">Ver detalle</Link>
        </div>
      </div>
    </li>
  )
}

export default Item