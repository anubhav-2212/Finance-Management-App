import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/outfit"; // Defaults to weight 400
//  import { ClerkProvider } from '@clerk/clerk-react'
 import { ClerkProvider } from '@clerk/react-router'
 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
       
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
     </ClerkProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
