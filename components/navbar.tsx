
import getCategories from '@/server-actions/getCategories'
import Link from 'next/link'
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
    <div id='navbar' className='lg:border-b border-b bg-teal-500  fixed w-full top-0 z-50 '>
        <Container>
            
            <div className='h-16 flex items-center justify-center relative px-4 sm:px-6 lg:px-4 gap-4'>
                <MobileMenu data={categories}/>

                <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                    <img className={`font-bold text-9xl text-amber-400 ${redressed.className}`} src = "/images/myProfile.png" alt ="Logo" 
                      width={200}
                      height={24}
                    />
                </Link>

                <Search/>
                
                <MainNav data={categories}/>
                <NavbarActions/>
                <div className='ml-auto flex items-center space-x-4'> 
                  <UserButton/>
                </div>
            </div> 
            
        </Container>
        
    </div>
  )
}

export default Navbar