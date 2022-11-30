import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function MenuNav () {
  return (
    <nav className='Menu-nav'>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/create-account'>Criar conta</Link></li>
        <li><Link to='/show-admin-account'>Minha conta</Link></li>
      </ul>
    </nav>
  )
}

export default MenuNav
