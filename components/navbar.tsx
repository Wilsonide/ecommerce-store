
import getCategories from '@/server-actions/getCategories'
import Link from 'next/link'
import MobileMenu from './mobileMenu'
import MainNav from './main-nav'
import NavbarActions from './navbarActions'
import Container from './ui/container'
import { UserButton } from './auth/userButton'


export const revalidate = 0

async function Navbar() {
  
  const categories = await getCategories()




 



  
  return (
    <div id='navbar' className='lg:border-b border-b bg-teal-500 sticky top-0 z-50'>
        <Container>
            
            <div className='h-16 flex items-center relative px-4 sm:px-6 lg:px-8 gap-4'>
                <MobileMenu data={categories}/>

                <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className='font-bold text-xl hover:opacity-75 hover:bg-blend-lighten text-white'>STORE</p>
                </Link>
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