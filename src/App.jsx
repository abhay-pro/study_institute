import Landing from './components/Landing'
import Admin from './components/Admin'
import './App.css'

function App() {
  if (window.location.pathname === '/admin') {
    return <Admin />
  }

  return (
    <>
      <Landing />
    </>
  )
}

export default App
