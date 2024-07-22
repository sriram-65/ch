"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TempleliteListSection from './_components/TempleliteListSection'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const dashboard = () => {
  const [userSearchInput,setUserSearchInput] = useState<string>()
  return (
    <>
    <div >
        <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

        <TempleliteListSection userSearchInput={userSearchInput}/>
    </div>


    <p className='ml-5 font-mono'>This Application Was Developed by Arfan and Sriram from Muthu Thevar Mukkulathore HR.Sec School in Thirunagar,Madurai</p>

</>
  )
}

export default dashboard