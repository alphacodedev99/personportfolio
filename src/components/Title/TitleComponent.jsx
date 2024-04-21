import React from 'react'

function TitleComponent({title, desc,color}) {
  return (
    <div className='titleComp'>
        <h2 style={{color: color}}>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default TitleComponent