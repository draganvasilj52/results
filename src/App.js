import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './routes/AboutPage'
import LandingPage from './routes/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
      </div>

      <div className="main-wrapper">
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

