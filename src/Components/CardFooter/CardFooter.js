import React from 'react'
import { useCard } from '../../Context/cardContext'

function CardFooter() {
  const {data}= useCard()
  return (
    <div className='card-footer'>
      <h1>{data.cardTextHead}</h1>
      <h3>{data.paragraph}</h3>
    </div>
  )
}

export default CardFooter
