import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm flex rounded-xl justify-between'>
        <div>
            SearchButton

        </div>
      <div>
            <UserButton/>
      </div>
      
    </div>
  )
}

export default DashboardHeader
