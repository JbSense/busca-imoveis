import React, { useState } from 'react'
import './index.css'

import Calendar from '../UI/Calendar'

function Scheduling () {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className='Scheduling'>
      <h1 className='title'>Agendar visita</h1>

      <div className='Scheduling__inputs'>
        <div className='input-primary'>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Nome'
            onChange={(e) => { setName(e.target.value) }}
          />
        </div>

        <div className='input-primary'>
          <input
            type='number'
            name='phone'
            value={phone}
            placeholder='Telefone'
            onChange={(e) => { setPhone(e.target.value) }}
          />
        </div>

        <Calendar />
      </div>

      <button className='btn-primary'>Agendar</button>
    </div>
  )
}

export default Scheduling
