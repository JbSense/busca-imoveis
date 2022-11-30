import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Show () {
  return (
    <div className='Show-admin'>
      <h1 className='title'>Conta administrador</h1>

      <div className='Show-admin__actions'>
        <Link to='/edit-admin-account' className='btn-secondary'>Editar dados</Link>
        <Link to='/show-properties' className='btn-secondary'>Imóveis</Link>
        <Link to='' className='btn-secondary'>Agendamentos</Link>
        <Link to='' className='btn-secondary-red'>Sair</Link>
      </div>
    </div>
  )
}

export default Show
