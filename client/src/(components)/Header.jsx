

import React from 'react'
import { Button } from '@/components/ui/button';



const Header = () => {
  

    // const handleGetStartedButton=()=>{
    //   if(isSignedIn){
    //     router.push("/dashboard")
    //   }
    //   else
    //   router.push("/sign-in")
    // }

    const handleGetStartedButton = () => {
  console.log("Button clicked, isSignedIn:", isSignedIn);
  if (isSignedIn) router.push("/dashboard");
  else router.push("/sign-in");
};

  return (
    <div className='p-2.5 flex items-center justify-between  shadow-sm mb-10' >
        <div>
     <img src="/expenses.png" alt="Expenses logo" width={50  } height={15}  />
     <span className='font-bold font-sans '>Expense Tracker</span>
     </div>
    
        
     <Button onClick={handleGetStartedButton} variant="outline">Get Started</Button>
     

     

    </div>
  )
}

export default Header
