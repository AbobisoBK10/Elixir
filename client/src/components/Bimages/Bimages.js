import React from 'react'
import './styles.css'

function Bimages({src}) {
  return (
    <div className='div'>
        <img className='img' alt="can't find image" src={src} />
    </div>  
    
    )
}

export default Bimages
