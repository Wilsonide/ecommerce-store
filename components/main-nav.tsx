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

function MainNav({data}: MainNavProps) {

  const pathname = usePathname()
  const routes = data.map((route) => ({href: `/category/${route.id}`, label: route.name, active : pathname === `/category/${route.id}`}))
  return (
    <nav className='md:mx-6 md:flex md:items-center w-full md:justify-center md:space-x-6 hidden '>
         <Link href='/' className={cn(`text-sm font-medium transition-colors capitalize hover:border-b-2 border-yellow-300 pb-2 ${poppins.className}`, pathname === '/' ? "text-yellow-300" : "text-white")}>
                Home
        </Link>
        {routes.map((route) =>(
            <Link href={route.href} key={route.href} className={cn(`text-sm font-medium transition-colors capitalize hover:border-b-2 border-yellow-300 pb-2 ${poppins.className}`, route.active ? "text-yellow-300" : "text-white")}>
                {route.label}
            </Link>
        ))}
    </nav>
  )
}

export default MainNav