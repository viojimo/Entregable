export default function Item(producto,aumentarCant) {

  const quitarStock = () => {
    producto.stock -= 1;
    aumentarCant();
  }

  return (
    <div className='producto'>
      <h3>{producto.producto.nombre}</h3>
      <p>{producto.producto.descripcion}</p>
      <h5> En stock: {producto.stock > 0 ? producto.stock : <span>Agotado</span>}</h5>
      <button disabled={ producto.stock < 1} onClick={quitarStock}>{producto.stock > 0 ? "Comprar" : "Sin stock"}</button>
    </div>
  )
}
