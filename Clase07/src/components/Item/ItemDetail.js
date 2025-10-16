import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { contexto } from '../Contexto/CartContext'
import Counter from '../Counter'


const ItemDetail = ({prod}) => {

  const {addItem} = useContext(contexto)


  const [seleccionado, setSeleccionado] = useState(0)

  const onAdd = (cant) => {
    
      toast.success("Su compra fue enviada al carrito",{autoClose: 1000, theme: "dark"})
      setSeleccionado (cant)
      
      addItem(prod, cant)
  }


  return (
    <article> 
      <div className="container detalle_orden mt-5 mb-5">
            <img src={prod.img} alt="" className='img_detalle' />
            <div className="detalle_titulos">
                <h3>{prod.nombre}</h3>
                <b>${prod.precio}</b>
                <p className="detalle_descripcion">{prod.descripcion}</p>

            {seleccionado === 0 ? (<Counter stock={prod.stock} initial={1} onAdd={onAdd}/>): (
            <>
            <Link to="/carrito" className='btn btn-success mt-3 m_derecha'>Ver mi carrito</Link>
            <Link to="/" className='btn btn-success mt-3'>Agregar otro producto</Link>
            </>
            )}
            </div>
      </div>
    </article>
  )
}

export default ItemDetail