import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { coleccionProductos} from '../../firebase'
import { getDocs, query, where } from 'firebase/firestore'



const ItemDetailContainer = () => {
  const [loading, setLoading] = useState (true)
  const [productos, setProductos] = useState ([])

  const {idProducto} = useParams()

    useEffect (() => {
      
      const filtroProductos = query(coleccionProductos,where("id","==",Number(idProducto)))
      const pedido = getDocs(filtroProductos)

      pedido
          .then(resultado => setProductos(resultado.docs[0].data()))
          .catch(() => toast.error("Error al cargar la informacion"))
          .finally(() => setLoading(false))
     
    }, [idProducto])

    return (
      loading ? (<h4>Cargando Detalle</h4>) : (
        <section> 
        <ItemDetail prod={productos}/>   
        </section>)
    )
}

export default ItemDetailContainer