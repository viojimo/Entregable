import React from 'react'
import Item from './Item';

const productos = require ("./data.json");

export default function Listado({aumentarCant}) {
  return (
    <div className='container'>
      {productos.map((producto) => (
        <Item producto={producto}
        key={producto.id} 
        aumentarCant={aumentarCant} />
      ))}
      
    </div>
  );
}
