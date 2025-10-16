import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './Item/ItemListContainer'
import ItemDetailContainer from './Item/ItemDetailContainer'
import Carrito from './Carrito'
import Nosotros from './Nosotros'
import Contacto from './Contacto'


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </main>
  )
}

export default Main