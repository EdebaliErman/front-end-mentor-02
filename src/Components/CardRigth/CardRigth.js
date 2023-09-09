import React from 'react'
import CardBar from '../CardBar/CardBar'
import CardButton from '../CardButton/CardButton'
import { useCard } from '../../Context/cardContext'

function CardRigth() {
    const { data } = useCard()
    return (
        <div className='card-right'>
            <h1>{data.cardheadRight}</h1>
            <CardBar svg={data.svgReaction} text={"Reaction"} color={"text-reaction"} bg={"bg-reactionBg"} point={"80"} />
            <CardBar svg={data.svgMemory} text={"Memory"} color={"text-memory"} bg={"bg-memoryBg"} point={"90"} />
            <CardBar svg={data.svgVerbal} text={"Verbal"} color={"text-verbal"} bg={"bg-varbelBg"} point={"61"} />
            <CardBar svg={data.svgVisual} text={"Visual"} color={"text-visual"} bg={"bg-visualBg"} point={"72"} />
            <CardButton />
        </div>
    )
}

export default CardRigth
