import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import PropertiesList from '../../../components/PropertiesList'

function Show () {
  return (
    <div className='Show-properties'>
      <h1 className='title'>Imóveis</h1>
      <Link to='/create-properties' className='btn-secondary'>Cadastrar imóvel</Link>
      <PropertiesList />
    </div>
  )
}

export default Show
