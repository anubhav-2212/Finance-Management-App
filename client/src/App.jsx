import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import LandingPage from './routes/LandingPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
       
  
    </div>
  )
}

export default App
