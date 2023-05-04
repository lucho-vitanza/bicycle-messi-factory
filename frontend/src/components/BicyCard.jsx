import React from 'react'

function BiciCard({text, urlImage, price}) {
  return (
    <div>
      <img src={urlImage}/>      
      <p>{text}</p>
      <p>{price}</p>
    </div>
  )
}

export default BiciCard