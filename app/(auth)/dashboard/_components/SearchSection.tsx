import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <>
    <div className='p-10 bg-gradient-to-br from-amber-300 via-slate-700 to-blue-700 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold font-mono'>Explore All Our AI Models</h2>
        <p>what would you Like To Create Today</p>

        <div>
            <div className='flex gap-2 items-centre p-2 border rounded-md bg-white my-5'>
                <Search className='text-primary'/>
                <input type="text"  placeholder='Search' className='bg-transparent outline-none text-black' onChange={(e)=>onSearchInput(e.target.value)}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchSection