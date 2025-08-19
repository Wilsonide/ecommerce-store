'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

interface componentProp {
  data: Category[]
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500']
})

function MobileMenu({ data }: componentProp) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const Data = [
    { label: 'Policy', href: '/policy', active: pathname === '/policy' },
    { label: 'Contact Us', href: '/contact', active: pathname === '/contact' },
    { label: 'About Us', href: '/about', active: pathname === '/about' },
    { label: 'FAQS', href: '/faqs', active: pathname === '/faqs' }
  ]

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden h-10 w-10 flex flex-col justify-center items-center relative z-50"
      >
        <span
          className={cn(
            "block w-7 h-1 bg-white rounded transition-all duration-300",
            open ? "rotate-45 translate-y-2" : ""
          )}
        />
        <span
          className={cn(
            "block w-7 h-1 bg-white rounded my-1 transition-all duration-300",
            open ? "opacity-0" : ""
          )}
        />
        <span
          className={cn(
            "block w-7 h-1 bg-white rounded transition-all duration-300",
            open ? "-rotate-45 -translate-y-2" : ""
          )}
        />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* Side nav */}
      <section
        className={cn(
          "fixed top-0 left-0 w-64 bg-blacklight shadow-lg transition-transform duration-300 ease-in-out z-40 rounded-br-2xl",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col mt-16 space-y-1 px-3 py-4 h-auto">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={cn(
              `text-sm font-medium px-4 py-3 w-full rounded-md transition-colors ${poppins.className}`,
              pathname === '/' 
                ? "bg-yellow-500 text-black" 
                : "text-white hover:bg-gray-800"
            )}
          >
            Home
          </Link>
          {Data.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              onClick={() => setOpen(false)}
              className={cn(
                `text-sm font-medium px-4 py-3 w-full rounded-md transition-colors ${poppins.className}`,
                route.active 
                  ? "bg-yellow-500 text-black" 
                  : "text-white hover:bg-gray-800"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </section>
    </>
  )
}

export default MobileMenu
