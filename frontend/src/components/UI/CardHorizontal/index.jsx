import React from 'react'
import './index.css'

function CardHorizontal (props) {
  return (
    <div className='Card-horizontal'>
      <span className='Card-horizontal--shadow'></span>
      <img src={props.imagePath} alt='Imóvel' className='Card-horizontal--image' />
      <p className='Card-horizontal--info'>{props.info}</p>
    </div>
  )
}

export default CardHorizontal
