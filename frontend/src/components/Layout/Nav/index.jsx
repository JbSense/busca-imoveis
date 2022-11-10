import React from 'react'
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
      <div className='Nav__logo'>
        <p>Imóvel</p>
      </div>

      <div className='Nav__toggle' onClick={openNav}>
        <span className='toggle--line toggle-top-line'></span>
        <span className='toggle--line toggle-bot-line'></span>
      </div>
    </div>
  )
}

export default Nav
