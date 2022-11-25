import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function CardVertical (props) {
  return (
    <Link to={props.link} className='Card-vertical'>
      <span className='Card-vertical--shadow'></span>
      <img src={props.imagePath} alt='Imóvel' className='Card-vertical--image' />
      <p className='Card-vertical--info'>{props.info}</p>
    </Link>
  )
}

export default CardVertical
