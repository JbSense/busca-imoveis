import React from 'react'
import './index.css'

import CardHorizontal from '../UI/CardHorizontal'

function Showcase () {
  return (
    <div className='Showcase'>
      <CardHorizontal
        link='#'
        imagePath='images/asg5252.jpg'
        info='Paris - França'
      />

      <CardHorizontal
        link='#'
        imagePath='images/gfl8954.jpg'
        info='Toronto - Canadá'
      />

      <CardHorizontal
        link='#'
        imagePath='images/klg4053.jpg'
        info='Toscana - Itália'
      />

      <CardHorizontal
        link='#'
        imagePath='images/gfd5436.jpg'
        info='Toronto - Canadá'
      />
    </div>
  )
}

export default Showcase
