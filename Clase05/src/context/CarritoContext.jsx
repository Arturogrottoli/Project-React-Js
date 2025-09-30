import React, { createContext, useContext, useState } from 'react'

// Crear el contexto del carrito
const CarritoContext = createContext()

// Hook personalizado para usar el contexto
export const useCarrito = () => {
  const context = useContext(CarritoContext)
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider')
  }
  return context
}

// Provider del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito(prevCarrito => {
      // Verificar si el producto ya existe en el carrito
      const productoExistente = prevCarrito.find(item => item.id === producto.id)
      
      if (productoExistente) {
        // Si existe, actualizar la cantidad
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      } else {
        // Si no existe, agregarlo al carrito
        return [...prevCarrito, { ...producto, cantidad }]
      }
    })
  }

  // Función para remover un producto del carrito
  const removerDelCarrito = (productoId) => {
    setCarrito(prevCarrito => 
      prevCarrito.filter(item => item.id !== productoId)
    )
  }

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      removerDelCarrito(productoId)
      return
    }

    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === productoId
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    )
  }

  // Función para limpiar el carrito
  const limpiarCarrito = () => {
    setCarrito([])
  }

  // Calcular el total del carrito
  const calcularTotal = () => {
    const totalCalculado = carrito.reduce((acc, item) => {
      return acc + (item.price * item.cantidad)
    }, 0)
    setTotal(totalCalculado)
    return totalCalculado
  }

  // Obtener la cantidad total de productos en el carrito
  const obtenerCantidadTotal = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0)
  }

  // Verificar si un producto está en el carrito
  const estaEnCarrito = (productoId) => {
    return carrito.some(item => item.id === productoId)
  }

  // Obtener la cantidad de un producto específico en el carrito
  const obtenerCantidadProducto = (productoId) => {
    const producto = carrito.find(item => item.id === productoId)
    return producto ? producto.cantidad : 0
  }

  const value = {
    carrito,
    total,
    agregarAlCarrito,
    removerDelCarrito,
    actualizarCantidad,
    limpiarCarrito,
    calcularTotal,
    obtenerCantidadTotal,
    estaEnCarrito,
    obtenerCantidadProducto
  }

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  )
}
