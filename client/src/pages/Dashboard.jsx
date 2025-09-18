import DashboardHeader from '@/(components)/DashboardHeader'
import SideNav from '@/(components)/SideNav'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
                

       <div className='fixed md:w-64 hidden md:block'>
        <SideNav/>
        </div>
        <div className='md:ml-64 '>
            <DashboardHeader/>
        </div>

      
    </div>
  )
}

export default Dashboard
