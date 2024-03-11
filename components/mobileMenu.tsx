'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import { link } from 'fs'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

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
            Nav.classList.toggle('border-b')
            

        }
        
    },[])

  const pathname = usePathname()
  const routes = data.map((route) => ({href: `/category/${route.id}`, label: route.name, active : pathname === `/category/${route.id}`}))
    
      

  return (
    <>
        <button id='hamburger-btn' className='md:hidden h-8 w-7 cursor-pointer relative flex items-center justify-center'>
            <div className="bg-white w-7 h-1 transition-all duration-500 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-white before:h-1 before:w-7 before:rounded before:absolute before:transition-all before:duration-500  before:-translate-y-2 before:-translate-x-3.5
            after:content-[''] after:bg-white after:h-1 after:w-7 after:rounded after:absolute after:transition-all after:duration-500  after:translate-y-2 after:-translate-x-3.5">
                

            </div>
                    
        </button>

        <section id='mobile-menu' className=' hidden absolute z-10 top-16  text-black left-0  w-full bg-teal-500  text-5xl '>
              <nav id="parent-link" className='lg:hidden flex flex-col  items-start py-2 gap-y-2 rounded border-b  ' aria-label='mobile'>
                  <Link href='/' className={cn(`text-sm font-medium text-neutral-500 w-full hover:text-black p-2 px-8 ',pathname === '/' ?  'text-black' : 'text-white ${poppins.className}`)}>Home</Link>
                  {routes.map((route) =>(
                    <Link href={route.href} key={route.href} className={cn(`text-sm font-medium transition-colors hover:text-neutral-300 uppercase p-2 px-8 ${poppins.className}`, route.active ? "text-black" : "text-white")}>
                        {route.label}
                    </Link>
                  ))}
              </nav>

          </section>  

        
    </>
  )
}

export default MobileMenu