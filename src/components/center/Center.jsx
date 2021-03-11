import React from 'react'
import './Center.css'

// this is a decorator
function Center (props) {
  return (
    <div className='center'>
      {props.children}
    </div>
  )
}

export default Center
