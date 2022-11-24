import React from 'react'
import './index.css'

function CardVertical (props) {
  return (
    <div className='Card-vertical'>
      <span className='Card-vertical--shadow'></span>
      <img src={props.imagePath} alt='Imóvel' className='Card-vertical--image' />
      <p className='Card-vertical--info'>{props.info}</p>
    </div>
  )
}

export default CardVertical
