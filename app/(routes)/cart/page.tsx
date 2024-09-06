"use client"
import Summary from '@/components/Summary'
import {Button} from '@/components/ui/button'
import Container from '@/components/ui/container'
import { useDispatch,useSelector } from 'react-redux'

import { cartProduct} from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CartItems from './components/cart-items'
import { getCartCount, getCartProducts, getTotalAmount } from '@/app/features/cart/cartSlice'
import { RootState } from '@/app/features/store'
import Currency from '@/components/ui/currency'

const Cartcontent = () => {
    const dispatch = useDispatch()
    const totalAmount = useSelector<RootState,number>((state)=> state.cart.totalAmount)
    const CartProducts = useSelector<RootState,cartProduct[]>((state)=> state.cart.cartItems)
    const router = useRouter()
    const [mounted,setMounted] = useState(false)

    
    useEffect(()=>{
        dispatch(getCartProducts())
        dispatch(getTotalAmount())
        dispatch(getCartCount())

    },[dispatch])

    

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
                    <div className='lg:col-span-7 space-y-4'>
                        {CartProducts.length === 0 && (
                        <div className='flex flex-col w-full justify-center items-center'>
                            <p className='text-neutral-500'>No items added to cart</p>
                            <Button onClick={()=> router.push('/')} className='mt-6'>
                                Return to view Products
                            </Button>

                        </div>
                        )} 
                        <ul>
                            {CartProducts.map(item =>(
                                <CartItems data ={item} key={item.id}/>
                            ))}
                        </ul> 
                        { CartProducts.length > 0 &&(
                        <div className='w-full flex items-center justify-center'>
                          <div className='flex gap-2'>
                            <span className='font-semibold'>GrandTotal :</span>
                            <Currency data={totalAmount}/>
                          </div>
                         
                        </div>)
                        }
                        
                    </div>
                    <Summary/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Cartcontent