import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {

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
