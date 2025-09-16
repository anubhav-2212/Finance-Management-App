import React from 'react'


import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div>
        <h1 className="text-3xl">
    Hello world!
  </h1>
   <Button size="sm" disabled>
      <Loader2Icon className="animate-spin" />
      Please wait
    </Button>
  
    </div>
  )
}

export default App
