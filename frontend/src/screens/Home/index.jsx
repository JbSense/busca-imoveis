import React from 'react'
import './index.css'
import InputDefault from '../../components/UI/InputDefault'

function Home () {
  return (
    <div className='Home'>
      <InputDefault
        type='text'
        name='name'
        placeholder='Nome'
      />

      <button className='btn-primary'>Enviar</button>
    </div>
  )
}

export default Home
