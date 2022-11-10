import React from 'react'
import './index.css'

function InputDefault (props) {
  return (
    <div className='Input-default'>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default InputDefault
