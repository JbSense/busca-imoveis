import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function MenuNav () {
  return (
    <nav className='Menu-nav'>
      <ul>
        <li><Link to='#'>Item 1</Link></li>
        <li><Link to='#'>Item 2</Link></li>
        <li><Link to='#'>Item 3</Link></li>
      </ul>
    </nav>
  )
}

export default MenuNav
