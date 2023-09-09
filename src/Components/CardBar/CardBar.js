import React from 'react'

function CardBar({svg,text,color,bg,point}) {
  return (
    <div className={`card-bar ${bg}`}>
      
      <h2 className={color}>{svg} {text}</h2>
      <h2 className='text-sumry text-xl font-bold'>{point}<span className='text-barText'>/ 100</span></h2>
    </div>
  )
}

export default CardBar
