import React from 'react'
import './index.css'

function Contacts () {
  return (
    <div className='Contacts'>
      <div className='Contacts__contact'>
        <h2 className='subtitle'>Contatos</h2>

        <div className='contact--element'>
          <img src='icons/phone.svg' alt='Icon telefone' />
          <p>(47) 99999-9999 / (47) 99999-9999</p>
        </div>

        <div className='contact--element'>
          <img src='icons/e-mail.svg' alt='Icon e-mail' />
          <p>imobiliaria@gmail.com</p>
        </div>

        <div className='contact--element'>
          <img src='icons/gold-pin.svg' alt='Icon pin' />
          <p>Rua XXXXX XXXXX, 123</p>
        </div>
      </div>

      <div className='Contacts__social-media'>
        <h2 className='subtitle'>Redes sociais</h2>

        <div className='social-media__icons'>
          <div className='social-media__icon'>
            <img src='icons/facebook.svg' alt='Icon Facebook' />
          </div>

          <div className='social-media__icon'>
            <img src='icons/instagram.svg' alt='Icon Instagram' />
          </div>

          <div className='social-media__icon'>
            <img src='icons/whatsapp.svg' alt='Icon WhatsApp' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
