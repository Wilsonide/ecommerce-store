
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
    <div id='navbar' className='lg:border-b-2 border-b-2 border-white bg-black  fixed w-full top-0 z-50 '>
        <Container>
            
            {/* <div className='flex flex-col justify-center items-between'> */}
              <div className='h-16 flex items-center justify-between relative px-4 sm:px-6 lg:px-4 gap-4'>
                <MobileMenu data={categories}/>
                <img className='object-cover h-[3rem]'  src = "/images/myProfile.png" alt ="Logo" 
                    />

                <div className='hidden md:block'>
                  <Search/>
                </div>
                
                <MainNav data={categories}/>
                <NavbarActions/>
                <div className='ml-auto flex items-center space-x-4'> 
                  <UserButton/>
                </div>
              </div>
              {/* <div className='bg-white p-2 md:p-0'>
                <div className='w-[50vw] flex items-center justify-center text-center mx-auto'>
                  <Search/>
                </div>
               
              </div> */}
              
        
            
        </Container>
        
    </div>
  )
}

export default Navbar