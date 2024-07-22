import { Button } from '@/components/ui/button'
import React from 'react'

function image() {
  return (
    <div>
    <h1 className='font-bold text-3xl '>For <span className='font-mono text-yellow-900 shadow-inner'>Image Generation</span></h1>
    <br /> 
    <Button variant={"destructive"}> <a href='https://sriram-65.github.io/imageGen/' >Get Start Now</a> </Button>
    
  </div>
  )
}

export default image