import React from 'react'
import './styles.css'

function Simages({src}) {
  return (
    <div className='div'>
        <img className='img' alt="can't find " src={src} />
    </div>  
    
    )
}

export default Simages
