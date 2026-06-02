import React, { useState } from 'react'
import './Button.css'

function Button({colour, onClick}) {

  return (

    <>
        <button 
          className='buttons'
          onClick={onClick}
          style={{backgroundColor: colour}}
        >
          {colour}
        </button>
    </>
  )
}

export default Button