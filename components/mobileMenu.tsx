'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { UserButton } from './auth/userButton'


interface componentProp{
    data: Category[]
}

const poppins = Poppins({
    subsets:['latin'],
    weight:['500']
})

function MobileMenu({data}: componentProp) {

    useEffect(()=>{
        const btn = document.getElementById('hamburger-btn') as HTMLButtonElement
        const mobileBtn = document.getElementById('mobile-menu') as HTMLElement
        const mobileMenu = document.getElementById('parent-link') as HTMLElement
        const Nav = document.getElementById('navbar') as HTMLElement
        
        mobileMenu.onclick = () => {
            mobileBtn.classList.toggle('hidden')
            btn.classList.toggle('toggle-btn')
            
        }
        btn.onclick = function() {
            btn.classList.toggle('toggle-btn')
            mobileBtn.classList.toggle('hidden')
            
            

        }
        
    },[])

  const pathname = usePathname()
  const routes = data.map((route) => ({href: `/category/${route.id}`, label: route.name, active : pathname === `/category/${route.id}`}))
    
      

  return (
    <>
        <button id='hamburger-btn' className='sm:hidden h-8 w-7 cursor-pointer relative flex items-center justify-center'>
            <div className="bg-white w-8 h-1 transition-all duration-500 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-white before:h-1 before:w-8 before:rounded before:absolute before:transition-all before:duration-500  before:-translate-y-3 before:-translate-x-4
            after:content-[''] after:bg-white after:h-1 after:w-8 after:rounded after:absolute after:transition-all after:duration-500  after:translate-y-3 after:-translate-x-4">
                

            </div>
                    
        </button>

        <section id='mobile-menu' className='hidden absolute z-10 top-16 left-0  text-black  text-5xl '>
              <nav id="parent-link" className='flex flex-col w-[240px] h-screen items-start justify-start bg-blacklight space-y-3 ' aria-label='mobile'>
                  
                  <Link href='/' className={cn(`mt-3 text-start text-sm cursor-pointer font-medium px-6 py-3  w-full rounded-lg transition-colors hover:bg-black border-yellow-300 pb-2 ${poppins.className}`, pathname === '/' ? "text-yellow-300" : "text-white")}>Home</Link>
                  {routes.map((route) =>(
                    <Link href={route.href} key={route.href} className={cn(`text-start text-sm cursor-pointer rounded-lg font-medium px-6 py-3 w-full  transition-colors hover:bg-black border-yellow-300 pb-2 ${poppins.className}`, route.active ? "text-yellow-300" : "text-white")}>
                        {route.label}
                    </Link>
                  ))}
              </nav>

          </section>  

        
    </>
  )
}

export default MobileMenu