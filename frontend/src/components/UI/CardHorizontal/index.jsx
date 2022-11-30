import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function CardHorizontal (props) {
  return (
    <Link to={props.link} className='Card-horizontal'>
      <span className='Card-horizontal--shadow'></span>
      <img src={props.imagePath} alt='Imóvel' className='Card-horizontal--image' />
      <p className='Card-horizontal--info'>{props.info}</p>
    </Link>
  )
}

export default CardHorizontal
