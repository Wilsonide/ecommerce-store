"use client"

import useCart from '@/hooks/useCart'
import { Product } from '@/types'
import { Rating } from '@mui/material'
import { ShoppingCart } from 'lucide-react'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import {Button} from './ui/button'
import Currency from './ui/currency'
import { Separator } from './ui/separator'

interface InfoProps{
    data: Product
}

function Info({data}: InfoProps) {
const [mounted,setMounted] = useState(false)

const cart = useCart()
const quantity = cart.quantity

const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
    }   

const addQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.increaseQuantity(data);
    }   

const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.decreaseQuantity(data);
    }  
    const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded' 

    useEffect(()=>{
        setMounted(true)
    },[])
    
    if (!mounted) {
        return null
    }

  return (
    <div>
        <h1 className='text-2xl font-bold text-gray-900'>{data.name}</h1>
        <div className='mt-3 flex items-center justify-between'>
            <p className='text-xl font-semibold text-gray-900'>
                <Currency data={data?.price}/>
            </p>
        </div>
        <hr className='mt-3'/>
        <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>size: </h3>
                <div className='flex items-center gap-2'>
                    {data?.size?.name}
                </div>
                
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>color: </h3>
                <div className='flex items-center gap-2'>
                    {data?.color?.name}
                    <div className='h-6 w-6 rounded-full border border-gray-600' style={{backgroundColor: data?.color?.value}}/>
                </div>
                    
                
            </div>
            <Separator/>
            <div>
                <p>{data?.description}</p>
            </div>

            <div className='flex flex-col gap-1'>
                <span>2 reviews</span>
                <Rating value={5} readOnly/>
            </div>
            
            <Separator/>
            <div className="flex gap-8 items-center">
                <div className="flex font-semibold">
                    Quantity
                </div>
                <div className="flex gap-4 items-center text-base">

                    <button onClick={decreaseQuantity} className={btnStyles}>-</button>
                        {quantity}
                    <button className={btnStyles} onClick={addQuantity}>+</button>
                </div>

            </div>
            <div className='mt-10 flex items-center gap-x-4'>
                <Button onClick={onAddToCart} className='flex items-center gap-x-2'>
                    Add to Cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Info