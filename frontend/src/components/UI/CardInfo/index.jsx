import React from 'react'
import './index.css'

function CardInfo (props) {
  return (
    <div className='Card-info'>
      <p className='Card-info--primary-info'>{props.primaryInfo}</p>
      <p className='Card-info--second-info'>{props.secondInfo}</p>
    </div>
  )
}

export default CardInfo
