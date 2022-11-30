import React from 'react'
import './index.css'

import InfoIconBar from '../../components/InfoIconBar'
import Showcase from '../../components/Showcase'
import Scheduling from '../../components/Scheduling'

function Ad () {
  const infos = [
    {
      iconPath: 'icons/car.svg',
      qntd: '2'
    },
    {
      iconPath: 'icons/bed.svg',
      qntd: '3'
    },
    {
      iconPath: 'icons/sofa.svg',
      qntd: '1'
    },
    {
      iconPath: 'icons/bathroom.svg',
      qntd: '3'
    }
  ]

  return (
    <div className='Ad'>
      <div className='Ad__gallery'>
        <p>Arraste para o lado</p>

        <div className='section-scroll'>
          <img src='images/fjh8768.png' alt='Imóvel' />
          <img src='images/fjh5687.png' alt='Imóvel' />
          <img src='images/fjh5768.png' alt='Imóvel' />
          <img src='images/fjh8676.png' alt='Imóvel' />
          <img src='images/fjh7657.png' alt='Imóvel' />
        </div>
      </div>

      <div className='Ad__base-infos'>
        <h2 className='subtitle'>Apartamento mobiliado</h2>
        <span className='base-infos--local'>
          <img src='icons/red-pin.svg' alt='Pin' />
          <p>Rua XXXX XXXX, 123</p>
        </span>
      </div>

      <InfoIconBar infos={infos} />

      <p className='Ad--info-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h2 className='btn-primary Ad--price'>R$640.000</h2>

      <div className='Ad__sizes-property'>
        <div className='sizes-property__sizes'>
          <h1>80</h1>
          <div className='sizes--subtitle'>
            <p>m²</p>
            <p>privativo</p>
          </div>
        </div>

        <div className='sizes-property__sizes'>
          <h1>101</h1>
          <div className='sizes--subtitle'>
            <p>m²</p>
            <p>total</p>
          </div>
        </div>
      </div>

      <div className='Ad__plan'>
        <img src='images/kut6436.png' alt='Planta do imóvel' />
      </div>

      <Scheduling />

      <Showcase />
    </div>
  )
}

export default Ad
