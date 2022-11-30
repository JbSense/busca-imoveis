import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='Login'>
      <h1 className='title'>Login</h1>

      <div className='Login__inputs'>
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

      <div className='Login__actions'>
        <button className='btn-primary'>Entrar</button>
        <button className='btn-secondary'>Entrar com o Google</button>
      </div>

      <span className='Login--no-account-align'>
        <Link to='/create-account' className='Login--no-account'>Ainda não tem conta? Cadastre-se aqui!</Link>
      </span>
    </div>
  )
}

export default Login
