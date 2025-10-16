import React from 'react'
import Item from './Item'
import Navbar2 from '../Navbar/Navbar2'

const ItemList = ({data}) => {
  return (
    <section>
      <h2 className='mt-4'>Productos Seleccionados</h2>
    <Navbar2/>
    <div className='container'>
        <ul className='row'>
            {data.map((prod)=>{
                return <Item key={prod.id} product={prod}/>
            })}
        </ul>
    </div>
    </section>
  )
}

export default ItemList