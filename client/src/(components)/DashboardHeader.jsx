import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import Dashboard from '../../node_modules/react-router/dist/development/index.d';

export default function DashboardHeader() {
  return <div className="mt-10 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        {/* Left image */}
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&w=1575&q=80")',
          }}
        />
        {/* Right form */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>
  
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
  
          {/* Clerk SignIn component */}
          <div className="mt-6">
            <SignUp /> 
          </div>
        </div>
      </div>
}
