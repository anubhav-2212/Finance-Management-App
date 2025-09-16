import React from 'react'
import { Routes, Route,  } from "react-router-dom"
import LandingPage from './routes/LandingPage'
// import { SignedIn, SignedOut, SignInButton, SignUp, UserButton } from '@clerk/clerk-react';
// import{SignIn} from '@clerk/clerk-react'
import SignInPage from './routes/SignIn'
import Dashboard from './routes/Dashboard'
// import Dashboard from './routes/Dashboard';


const App = () => {
  return (
    <div>
     
      <Routes>
      
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       
      </Routes>
       
  
    </div>
  )
}

export default App
