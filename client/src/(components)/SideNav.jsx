
import React  from 'react'
// import Image from 'next/image'
// import { LayoutGrid,PiggyBank,ReceiptText,ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react'
import { useLocation } from 'react-router'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';




const SideNav = () => {
    const{pathName}=useLocation();

    const menuList=[
       { id:1,
        name:'Dashboard',
        icon:LayoutGrid,
        path:'/dashboard'
        
    },
    {
        id:2,
        name:'Budgets',
        icon:PiggyBank,
        path:'/dashboard/budgets'
       
    },
    {
        id:3,
        name:'Expenses',
        icon:ReceiptText,
        path:'/dashboard/expenses'
        
    },
    {
        id:4,
        name:'Upgrade',
        icon:ShieldCheck,
        path:'/dashboard/upgrade'
        
    }
]

    
  return (
    <div className='h-screen p-2 border shadow-sm'>
        <img src="/expenses.png" alt="Expenses logo" width={50  } height={15}  />
            <span className='font-bold font-sans '>Expense Tracker</span>
            <div className='mt-5'>

                {menuList.map((menu,index)=>(
                   
                    <h2  key={index} className={`flex gap-2 items-center text-gray-600 font-medium
                    p-5 cursor-pointer rounded-md
                    hover:text-primary hover:bg-blue-100
                    
                    ${pathName===menu.path && 'bg-blue-100 text-primary'}`}>
                        <menu.icon/>
                        {menu.name}</h2>
                ))}
            </div>
            <div className='fixed bottom-5 p-3 flex gap-3 items-center '>
                <UserButton/>
                Profile
            </div>
            
      
    </div>
  )
}

export default SideNav
