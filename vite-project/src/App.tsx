import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Components/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        We going to learn Context Api
         <Home/>


       </div>
    </>
  )
}

export default App
