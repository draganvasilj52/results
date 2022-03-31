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
/* 
1. program se raspada ako je null output?
The optional chaining operator prevents throwing TypeError: Cannot read property 'name' of undefined.
2. .?
3. fetchActions
4. button, open closed
5. div u Route?
6. padding u league Title
*/
