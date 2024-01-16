"use client"
import React from 'react'
import {Button} from './ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

function NavbarActions() {

const cart = useCart()   
const router = useRouter() 

const [mounted, setMounted] = React.useState(false)

React.useEffect(() => {
    setMounted(true)
}, [])

if(!mounted) {
    return null
}

  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <Button onClick={()=> router.push('/cart')} className='flex items-center rounded-full bg-black px-4 py-2'>
            <ShoppingBag
                size={20}
                color='white'
            />
            <span className='ml-2 font-medium text-sm text-white'>{cart.items.length}</span>
        </Button>
    </div>
  )
}

export default NavbarActions