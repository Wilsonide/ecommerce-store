"use client"
import React from 'react'
import {Button} from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {useSelector} from "react-redux"
import { RootState } from '@/app/features/store'
import { cartProduct } from '@/types'


function NavbarActions() {

const cartItems = useSelector<RootState,cartProduct[]>((state)=> state.cart.cartItems) 
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
        <Button onClick={()=> router.push('/cart')} className='flex items-center rounded-full bg-white  px-2 py-1 text- hover:bg-white'>
            <ShoppingBag
                size={20}
                color='black'
            />
            <span className='ml-2 font-medium text-sm text-black'>{cartItems.length}</span>
        </Button>
    </div>
  )
}

export default NavbarActions