import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Football from './components/pages/Football'


const App = () => {
  return (
    <Router>
    <div className='wrapper'>         
      <Header/>      
    </div>

    <div className='main-wrapper'>
      <main className='main'>
        <Football />
      </main> 
    </div>
      

    </Router>
  )
}

export default App