import React from 'react'
import CardHorizontal from '../../components/UI/CardHorizontal'
import CardVertical from '../../components/UI/CardVertical'
import './index.css'

function Home () {
  return (
    <div className='Home'>
      <CardVertical
        imagePath='images/asd1231.jpg'
        info='Casas à partir de R$500.000'
      />

      <CardHorizontal
        imagePath='images/asg5252.jpg'
        info='Casas à partir de R$500.000'
      />
    </div>
  )
}

export default Home
