import Landing from './components/Landing'
import Admin from './components/Admin'
import './App.css'

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '')

  if (pathname === '/admin') {
    return <Admin />
  }

  return (
    <>
      <Landing />
    </>
  )
}

export default App
