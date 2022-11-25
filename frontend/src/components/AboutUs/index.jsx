import React from 'react'
import './index.css'

import CardInfo from '../UI/CardInfo'

function AboutUs () {
  return (
    <div className='About-us'>
      <h1 className='title'>Sobre nós</h1>

      <p className='About-us--text'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
        piece of classical Latin literature from 45 BC, making it over 2000 years old.
      </p>

      <span className='About-us__scroll'>
        <div className='About-us__infos'>
          <CardInfo
            primaryInfo='+ de 50'
            secondInfo='Imóveis vendidos'
          />

          <CardInfo
            primaryInfo='+ de 30'
            secondInfo='Imóveis alugado'
          />

          <CardInfo
            primaryInfo='+ de 20'
            secondInfo='Imóveis à venda'
          />
        </div>
      </span>
    </div>
  )
}

export default AboutUs
