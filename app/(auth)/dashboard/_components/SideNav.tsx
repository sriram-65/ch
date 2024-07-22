import React from 'react'
import Image from 'next/image'
import { HistoryIcon, Home, Settings, WalletCards } from 'lucide-react'

function SideNav() {

    const MenuList = [
      {
        name:"Home",
        icon:Home,
        pathName:"/dashboard"
      },
      {
        name:"History",
        icon:HistoryIcon,
        pathName:"/dashboard/history"
      },
      {
        name:"Pricings",
        icon:WalletCards,
        pathName:"/dashboard/billing"
      },
      {
        name:"Settings",
        icon:Settings,
        pathName:"/dashboard/settings"
      }
]
  return (
   <>
   <div className='h-screen p-5 shadow-sm border'>
    <div className='flex justify-center'>
    <Image src={"/logo.svg"} alt='logo' width={80} height={100}/>
    

    </div>
   
     <div className='mt-9'>
     {
        MenuList.map((menu,index)=>(
            <div className='flex gap-2 mb-2 p-5 hover:bg-purple-900 hover:text-white hover:rounded cursor-pointer'>
                <menu.icon/>
                <h2>{menu.name}</h2>
            </div>
        ))
     }
     </div>
   </div>
   
   </>
  )
}

export default SideNav