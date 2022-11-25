import React, { useState } from 'react'
import './index.css'

function ContactUs () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className='Contact-us'>
      <h1 className='title'>Entre em contato</h1>

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
          type='email'
          name='email'
          value={email}
          placeholder='E-mail'
          onChange={(e) => { setEmail(e.target.value) }}
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

      <div className='input-primary'>
        <textarea name='' id='' cols='30' rows='6' placeholder='Menssagem'></textarea>
      </div>

      <button className='btn-primary'>Enviar</button>
    </div>
  )
}

export default ContactUs
