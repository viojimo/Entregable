import React from 'react'

export default function Cabecera({comprar}) {
  
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos<span>{comprar}</span></p>
    </header>
  )
}
