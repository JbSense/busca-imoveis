import React from 'react'
import './index.css'

function InfoIconBar (props) {
  const infos = props.infos

  const t = () => {
    return infos.map(info => {
      return (
        <div className='Info-icon-bar__element'>
          <img src={info.iconPath} alt='Icon' />
          <p>{info.qntd}</p>
        </div>
      )
    })
  }

  return (
    <div className='Info-icon-bar'>
      {t()}
    </div>
  )
}

export default InfoIconBar
