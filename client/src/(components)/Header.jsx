

import React from 'react'
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { SignIn } from '@clerk/clerk-react';



const Header = () => {
  const{user,isSignedIn}=useUser();
  const navigate=useNavigate();
  const handleGetStarted=async()=>{
    if(isSignedIn){
     navigate('/dashboard')

    }
    else{
      navigate('/sign-in')
    }
    
  }

  return (
    <div className='p-2.5 flex items-center justify-between  shadow-sm mb-10' >
        <div>
     <img src="/expenses.png" alt="Expenses logo" width={50  } height={15}  />
     <span className='font-bold font-sans '>Expense Tracker</span>
     </div>
      
     


    {/* <div className=' w-20 h-20'> */}
  {isSignedIn?(
    <UserButton    appearance={{
    elements: {
                             // outer container
      avatarBox: "w-full h-full",                               // avatar itself
    },
  }}
  />
  ):(
     <Button className=" hover:bg-black hover:border-black hover:text-white" onClick={handleGetStarted} variant="outline">Get Started</Button>
     
)}
</div>
     

    // </div>
  )
}

export default Header
