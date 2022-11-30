import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function CreateAccount () {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='Create-account'>
      <h1 className='title'>Cadastrar conta</h1>

      <div className='Create-account__inputs'>
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

      <div className='Create-account__actions'>
        <button className='btn-primary'>Cadastrar</button>
        <button className='btn-secondary'>Cadastrar com o Google</button>
      </div>

      <span className='Create-account--has-account-align'>
        <Link to='/login' className='Create-account--has-account'>Já tem conta? Faça o login aqui!</Link>
      </span>
    </div>
  )
}

export default CreateAccount
