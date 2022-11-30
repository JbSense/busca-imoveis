import React from 'react'
import './index.css'

function IconInfo (props) {
  return (
    <div className='Icon-info'>
      <img src={'icons/' + props.icon + '.svg'} />
      <input type='number' name='' placeholder='QNTD'/>
    </div>
  )
}

export default IconInfo
