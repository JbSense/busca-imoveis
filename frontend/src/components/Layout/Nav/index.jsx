import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Nav () {
  let navOpen = false

  const openNav = () => {
    if (!navOpen) document.querySelector('.App').classList.add('nav-open')
    if (navOpen) document.querySelector('.App').classList.remove('nav-open')
    navOpen = navOpen === false
  }

  return (
    <div className='Nav'>
      <Link to='/' className='Nav__logo'>
        <p>Imóvel</p>
      </Link>

      <div className='Nav__toggle' onClick={openNav}>
        <span className='toggle--line toggle-top-line'></span>
        <span className='toggle--line toggle-bot-line'></span>
      </div>
    </div>
  )
}

export default Nav
