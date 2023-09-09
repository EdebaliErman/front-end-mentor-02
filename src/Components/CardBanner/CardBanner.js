import React from 'react'
import { useCard } from '../../Context/cardContext'

function CardBanner() {
  const { data } = useCard()
  return (
    <div className='card-banner'>
      <h1 className='banner-h'>{data.cardhead}</h1>
      <span>
        <h1>{data.svg}</h1>
        <h3>{data.svgDown}</h3>
      </span>
    </div>
  )
}

export default CardBanner
