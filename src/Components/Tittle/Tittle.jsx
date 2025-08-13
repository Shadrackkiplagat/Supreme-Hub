import React from 'react'
import './Tittle.css'
const Tittle = ( {subtitle,title}) => {
  return (
    <div className='title'>
      <p>{subtitle}</p>
      <h1>{title}</h1>

    </div>
  )
}

export default Tittle
