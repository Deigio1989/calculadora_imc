import { useState } from 'react'
import Calculadora from './components/Calculadora/index.jsx'

function App() {
  const[formIsVisible, setFormVisible]= useState(true);

  return (
    <>    
        <body>
          <Calculadora/>
        </body>     
    </>
  )
}

export default App
