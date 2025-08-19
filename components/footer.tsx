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


  return (
    <footer className={`bg-slate-700 text-slate-200 text-sm mt-16 border-t ${poppins.className}`}>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base mb-2 font-bold border-b'>Customer Service</h3>
            <Link href='/contact'>Contact Us</Link>
            <Link href='policy'>Shopping Policy</Link>
            <Link href='/faqs'>FAQs</Link>
            <Link href='/terms'>Terms and Conditions</Link>
          </FooterList>
          <div className='w-full md:w-1/3 mb-6 md:mb-0 px-2'>
            <h3 className='text-base mb-2 font-bold border-b'>About Us</h3>
            <p className="leading-relaxed mb-2">
            Founded over a decade ago, <strong>Icheku Wood & Sons Upholstery</strong> is a trusted 
            name in furniture and upholstery. We are a family-owned business with a 
            passion for blending traditional craftsmanship with modern designs.
          </p>
            <p>&copy;  <i>ICHEKU WOOD AND SONS</i>. All rights reserved {new Date().getFullYear()}</p>
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