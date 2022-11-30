import React, { useState } from 'react'
import './index.css'

function Edit () {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='Edit-admin'>
      <h1 className='title'>Editar dados</h1>

      <div className='Edit-admin__inputs'>
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
            type='password'
            name='password'
            value={password}
            placeholder='Senha'
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
      </div>

      <button className='btn-primary'>Salvar</button>
    </div>
  )
}

export default Edit
