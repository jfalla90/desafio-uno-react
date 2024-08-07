import React from 'react'

const CardPizza = ({name, price, ingredients, img}) => {
  return (
    <>
      <div>
        <img src={img} alt= "imagen pizza"/>
        <h3>{name}</h3>
        <p>Ingredientes: 🍕{ingredients}</p>
        <p className='precioPizza'>Precio: $ {price}</p>
        <button className='verPizza'>Ver más 👀</button>
        <button className='agregarPizza'>Añadir 🛒</button>
      </div>
    </>
  )
}

export default CardPizza