import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
