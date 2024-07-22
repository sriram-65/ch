import { UserButton } from '@clerk/nextjs'
import { EarthIcon, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <>
    <div className='p-6 shadow-md bottom-2 flex justify-between items-center'>
        <div className='flex gap-2 items-centre p-2 border rounded-md max-w-md'>
        
        </div>

       <div className='w-12'>
       <UserButton/>
       </div>
    </div>
    </>
  )
}

export default Header