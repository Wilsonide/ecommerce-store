"use client"
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps{
    data : Category[]
}

const poppins = Poppins({
  subsets:['latin'],
  weight:['500']
})

function MainNav() {

  const pathname = usePathname()
  const  Data = [
  {
    label: 'Policy',
    href: '/policy',
    active : pathname === '/policy',
},
  
  {
    label: 'Contact Us',
    href: '/contact',
    active : pathname === '/contact',
  },
  {
    label: 'About Us',
    href: '/about',
    active : pathname === '/about',
  },
  {
    label: 'FAQS',
    href: '/faqs',
    active : pathname === '/faqs',
  }
 ]

  return (
    <nav className=' lg:mx-6 lg:flex lg:items-center w-full lg:justify-center lg:space-x-6 hidden '>
         <Link href='/' className={cn(`sm:text-nowrap text-sm font-medium transition-colors capitalize hover:border-b-2 border-yellow-300 pb-2 ${poppins.className}`, pathname === '/' ? "text-yellow-300" : "text-white")}>
                Home
        </Link>
        {Data.map((route) =>(
            <Link href={route.href} key={route.href} className={cn(`text-sm font-medium transition-colors capitalize hover:border-b-2 border-yellow-300 pb-2 ${poppins.className}`, route.active ? "text-yellow-300" : "text-white")}>
                {route.label}
            </Link>
        ))}
    </nav>
  )
}

export default MainNav