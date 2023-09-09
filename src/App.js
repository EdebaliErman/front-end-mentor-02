import React from 'react'
import Card from './Components/Card/Card'
import { CardContext,values } from './Context/cardContext'

function App() {

  return (
    <CardContext.Provider value={values}>
       <Card />
    </CardContext.Provider>
  )
}

export default App
