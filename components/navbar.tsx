/* eslint-disable @next/next/no-img-element */

import getCategories from '@/server-actions/getCategories'

import MobileMenu from './mobileMenu'
import MainNav from './main-nav'
import NavbarActions from './navbarActions'
import Container from './ui/container'
import { UserButton } from './auth/userButton'

import Search from './Search'

import { Redressed } from 'next/font/google'


export const revalidate = 0
const redressed = Redressed({subsets:["latin"],weight:['400']})

async function Navbar() {
  
  const categories = await getCategories()

  
  return (
    <div id='navbar' className='lg:border-b-2 border-b-2 border-white bg-black  fixed w-full top-0 z-20 '>
        <div className='h-16 flex items-center justify-center relative px-6 sm:px-6 lg:px-4 gap-4 text-center'>
                <MobileMenu data={categories}/>
                <div className='flex items-center'>
                  <img className=' h-14 object-contain sm:object-cover block'  src = "/images/myLogo.png" alt ="Logo" />
                  <div className="flex items-center justify-center">
                    <h6 className="text-sm leading-none text-yellow-300 drop-shadow-[0_0_20px_rgba(251,146,60,0.9)]">
                      ICHEKU WOOD AND SONS<br />
                    </h6>
                  </div>
                </div>
      

                <div className='hidden lg:block'>
                  <Search/>
                </div>
                
                <MainNav/>
                <NavbarActions/>
        </div>     
    
        
    </div>
  )
}

export default Navbar