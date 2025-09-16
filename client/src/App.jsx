import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import LandingPage from './routes/LandingPage'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import{SignIn} from '@clerk/clerk-react'
import SignInPage from './routes/SignIn'

const App = () => {
  return (
    <div>
     
      <Routes>
      
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
      </Routes>
       
  
    </div>
  )
}

export default App
