import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, marca, modelo, precio, img}) => {
  return (
    <div className='contenidoItem'>
      <img src={img} alt={marca}/>
      <h3>Marca: {marca}</h3>
      <h3>Modelo: {modelo}</h3>
      <p>Precio:USD{precio}</p>
      
      <Link className='classlink' to={`/item/${id}`}>Ver Detalles</Link>
      

    </div>
  )
}

export default Item