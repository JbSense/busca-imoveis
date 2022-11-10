import React from 'react'
import './index.css'

function Content (props) {
  return (
    <div className='Content'>
      {props.children}
    </div>
  )
}

export default Content
