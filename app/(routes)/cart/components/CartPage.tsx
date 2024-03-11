"use client"
import getProducts from '@/server-actions/getProducts'
import Summary from '@/components/Summary'
import {Button} from '@/components/ui/button'
import Container from '@/components/ui/container'

import useCart from '@/hooks/useCart'
import { Product } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CartItems from './cart-items'

const Cartcontent = () => {
   
    const cart = useCart()
    const router = useRouter()
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if (!mounted) {
        return null
    }

    
  return (
    <div className='bg-white'>
        <Container>
            <div className='lg:px-8 px-4 py-16 sm:px-6 mt-16'>
                <h1 className='font-bold text-3xl text-black'>Shopping Cart</h1>
                <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                    <div className='lg:col-span-7'>
                        {cart.items.length === 0 && (
                        <div className='flex flex-col w-full justify-center items-center'>
                            <p className='text-neutral-500'>No items added to cart</p>
                            <Button onClick={()=> router.push('/')} className='mt-6'>
                                Return to view Products
                            </Button>

                        </div>
                        )} 
                        <ul>
                            {cart.items.map(item =>(
                                <CartItems data ={item} key={item.id}/>
                            ))}
                        </ul>  
                        
                    </div>
                    <Summary/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Cartcontent