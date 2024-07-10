import { useState } from 'react'


import './App.css'
import { Navbar } from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
 
<Navbar title="Homes" />
</>
  )
}

export default App
