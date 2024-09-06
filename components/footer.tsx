import { cn } from '@/lib/utils'
import { Category } from '@/types'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import FooterList from './FooterList'
import Container from './ui/container'

const poppins = Poppins({
  subsets:['latin'],
  weight:['500','400','300','600'],
})

function Footer({data}:{data:Category[]}) {


  const routes = data.map((route) => ({href: `/category/${route.id}`, label: route.name }))

  return (
    <footer className={`bg-slate-700 text-slate-200 text-sm mt-16 border-t ${poppins.className}`}>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base mb-2 font-bold border-b'>Shop Categories</h3>
            {routes.map((route) =>(
              <Link href={route.href} key={route.href} className={cn('capitalize ')}>
                {route.label}
              </Link>
            ))}
            
          </FooterList>
          <FooterList>
            <h3 className='text-base mb-2 font-bold border-b'>Customer Service</h3>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Shopping Policy</Link>
            <Link href='#'>FAQs</Link>
          </FooterList>
          <div className='w-full md:w-1/3 mb-6 md:mb-0 px-2'>
            <h3 className='text-base mb-2 font-bold border-b'>About Us</h3>
            <p className='mb-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sequi nulla itaque, obcaecati perspiciatis eligendi tempore ullam assumenda illum eveniet voluptatem dolores, facilis minima. Consectetur quaerat tempora vero eius voluptatum.
            </p>
            <p>&copy; {new Date().getFullYear()} E-shop. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className='text-base mb-2 font-bold border-b'>Follow Us</h3>
            <div className='flex gap-2 items-center'>
              <Link href='#'>
                <Facebook size={24}/>
              </Link>
              <Link href='#'>
                <Twitter size={24}/>
              </Link>
              <Link href='#'>
              <Instagram size={24}/>
            </Link>
            <Link href='#'>
              <Youtube size={30}/>
            </Link>
            </div>
          </FooterList>

        </div>
      </Container>
    </footer>
  )
}

export default Footer