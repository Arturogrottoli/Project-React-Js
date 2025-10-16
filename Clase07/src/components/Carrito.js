import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './Contexto/CartContext'
import { serverTimestamp, addDoc } from 'firebase/firestore'
import { coleccionOrdenes } from '../firebase'
import { toast } from 'react-toastify'




const Carrito = () => {

  const {carrito,removeItem, clear, calcTotal} = useContext(contexto)

  const [form, setForm] = useState({ nombre: '', apellido: '', telefono: '', email: '' })
    

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = () => {
    const orden = {
        buyer: {...form},
        items: carrito,
        date: serverTimestamp(),
        total: calcTotal(),
    }

    const pedido = addDoc(coleccionOrdenes, orden)
    
    pedido
    .then(res=>{
      toast.success("Compra realizada con EXITO ! ! " + "Tu N° de orden es: " + res.id , {theme: "dark"})
    })
    .catch(()=>{
      toast.error("Error al realizar la compra")
    })
    .finally(()=>{

    clear()
    })
  }

  

  return (
    <div>
      {carrito != 0 ? (<>
                          <div className='row m-5'>
                            
                            <div className='col-xl-6 col-l-2'>
                              <div className="row">
                                {carrito.map(producto =>(
                                <div className="col-xl-4 col-6">
                                  <div className="card mt-2 text-center">
                                    <img src={producto.img} alt="" />
                                  <div key={producto.id}>
                                    <p className="negrita">{producto.nombre}</p>
                                    <p>{producto.cantidad} x ${producto.precio}</p>
                                    <p>Total Parcial: ${producto.cantidad * producto.precio}</p>
                                    <button onClick={() => removeItem(producto.id)} className="btn btn-warning mb-2">Eliminar</button>
                                  </div>
                                  </div>
                                </div>))}
                              </div>
                            </div>
                        
                            <div className='col-xl-6 col-l-2'>
                              <h3 className='text-center'>Datos Personales:</h3>
                              <form>
                                    <div className='row'>
                                    <div className='col-6'>
                                        <input 
                                        value={form.nombre}
                                        name='nombre' 
                                        type="text" 
                                        placeholder='Nombre' 
                                        className="form-control m-3"
                                        onChange={handleChange}/> 
                                    </div>
                                    <div className='col-6'>
                                        <input 
                                        value={form.apellido} 
                                        name='apellido' 
                                        type="text" 
                                        placeholder='Apellido' 
                                        className="form-control m-3" 
                                        onChange={handleChange}/>
                                    </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-6'>
                                        <input 
                                        value={form.telefono}
                                        name='telefono' 
                                        type="text" 
                                        placeholder='Telefono' 
                                        className="form-control m-3" 
                                        onChange={handleChange}/>
                                    </div>
                                    <div className='col-6'>
                                        <input 
                                        value={form.email}
                                        name='email' 
                                        type="email" 
                                        placeholder='Email' 
                                        className="form-control m-3" 
                                        onChange={handleChange}/> 
                                    </div>
                                    </div>
                              </form>
                              <div className='text-center'>
                              <p className="negrita tamanioLetra">Total Compra: ${calcTotal()}</p>
                              <button onClick={clear} className="btn btn-danger">Vaciar carrito</button> 
                              <button onClick={finalizarCompra} className="btn btn-success m-2">Finalizar Compra</button>
                              </div>
                              
                            </div>
                        
                          </div>
                        
                      </>) : 
      (<div className=' text-center'>
          <h2 className='mt-5'>No hay productos en tu carrito!!</h2>
          <Link to="/" className="btn btn-success mt-5">Comprar un producto</Link>
      </div>)}
    </div>
  )
}

export default Carrito