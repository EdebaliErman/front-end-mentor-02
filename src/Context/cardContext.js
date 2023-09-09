import { createContext, useContext } from "react"
import {data} from '../Data/data'

const CardContext = createContext()
const values = {
    data
}
const useCard = () => useContext(CardContext)
export {
    useContext,
    CardContext,
    useCard,
    values
}