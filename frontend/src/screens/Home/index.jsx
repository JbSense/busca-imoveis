import React from 'react'
import './index.css'

import AboutUs from '../../components/AboutUs'
import CardVertical from '../../components/UI/CardVertical'
import Showcase from '../../components/Showcase'
import ContactUs from '../../components/ContactUs'

function Home () {
  return (
    <div className='Home'>
      <div className='Home__banner'>
        <img src='images/lkr4566.jpg' alt='Banner' />
      </div>

      <AboutUs />

      <span className='Home__property-type-scroll'>
        <div className='Home__property-type'>
          <CardVertical
            link='#'
            imagePath='images/jyj2487.jpg'
            info='Apartamentos à partir de R$300.000'
          />

          <CardVertical
            link='#'
            imagePath='images/gfh4536.jpg'
            info='Geminados à partir de R$280.000'
          />

          <CardVertical
            link='#'
            imagePath='images/asd1231.jpg'
            info='Casas à partir de R$500.000'
          />

          <CardVertical
            link='#'
            imagePath='images/yur2345.jpg'
            info='Terrenos à partir de R$180.000'
          />
        </div>
      </span>

      <div className='Home__sell-your'>
        <h2 className='subtitle'>Quer vender seu imóvel?</h2>
        <p>Entre em contato que fazemos esse trabalho para você!</p>
        <button className='btn-primary'>Contato</button>
      </div>

      <div className='Home__showcase'>
        <h1 className='title'>Destaques</h1>

        <span className='element-scroll'>
          <Showcase />
        </span>
      </div>

      <ContactUs />

    </div>
  )
}

export default Home
