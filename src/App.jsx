import { useState } from 'react'
import Landing from './components/Landing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
