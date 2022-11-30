import React from 'react'
import './index.css'

import CardHorizontal from '../UI/CardHorizontal'

function Showcase () {
  return (
    <div className='Showcase'>
      <h1 className='title'>Destaques</h1>

      <div className='section-scroll'>
        <div className='Showcase__ads'>
          <CardHorizontal
            link='/ad'
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
      </div>
    </div>
  )
}

export default Showcase
