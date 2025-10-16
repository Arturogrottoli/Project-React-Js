import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { coleccionProductos} from '../../firebase'
import { getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [loading, setLoading] = useState (true)
  const [productos, setProductos] = useState ([])

  const {idCategoria} = useParams()

  
  useEffect (() => {
    
    if(!idCategoria){

      const consulta = getDocs(coleccionProductos)

      consulta
          .then(resultado => setProductos(resultado.docs.map(doc => doc.data())))
          .catch(() => toast.error("Error al cargar la informacion"))
          .finally(() => setLoading(false))

  }else{

      const filtroProductos = query(coleccionProductos,where("marca","==",idCategoria))
      const pedido = getDocs(filtroProductos)

      pedido
          .then(resultado => setProductos(resultado.docs.map(doc => doc.data())))
          .catch(() => toast.error("Error al cargar la informacion"))
          .finally(() => setLoading(false))

  }
  }, [idCategoria])
    return (
    loading ? (<h4>Cargando Articulos</h4>) : (<div> <> <ItemList data={productos}/> </> </div>)
    ) }

export default ItemListContainer