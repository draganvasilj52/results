import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Score from './components/pages/Score'

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
      </div>

      <div className="main-wrapper">
        <main className="main">
          <Score />
        </main>
      </div>
    </Router>
  )
}

export default App
