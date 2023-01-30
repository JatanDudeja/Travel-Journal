import React from 'react'
import Navbar from "./components/Navbar"
import Journey from './components/Journey'
import data from "./data"

function App(){
  const journeyCard = data.map(ele => {
    return (<Journey 
      key = {ele.id}
      {...ele}
    />
    )
  })
  return(
    <div className='App'>
      <Navbar />
      {journeyCard}
    </div>
  )
} 

export default App