import { useState } from 'react'
import Nav from './Components/Nav'
import Display from './Components/Display'
import Text from './Components/Text'
function App() {
  

  return (
    <div className="App">
        <Nav />
        <div className='main'>
             <Text />
            < Display />
            
        </div>
        
    </div>
  )
}

export default App
