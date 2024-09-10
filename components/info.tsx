"use client"

import { orderType } from '@/server-actions/getPaidOrders'
import { cartProduct } from '@/types'
import { Rating } from '@mui/material'
import { addCartProduct, decrement, getCartCount, getTotalAmount, increment} from '@/app/features/cart/cartSlice'

import { ShoppingCart } from 'lucide-react'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import AddRating from './AddRating'
import { ListRating } from './ListRating'
import {Button} from './ui/button'
import Currency from './ui/currency'
import { Separator } from './ui/separator'
import { RootState } from '@/app/features/store'

interface InfoProps{
    data: cartProduct
    orders: orderType
}


function Info({data, orders}: InfoProps) {
const [mounted,setMounted] = useState(false)
const [count, setCount] = useState(data.cartQuantity)


const cartItems = useSelector<RootState,cartProduct[]>((state)=> state.cart.cartItems)
const dispatch = useDispatch()

const product = data
const cartItem = cartItems.find(item => item.id === product.id)
        





const addQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        let cartIndex = cartItems.findIndex(item => item.id === product.id)
        if (cartIndex === -1) {
            if(product.quantity > count) {
                setCount((prev)=> prev + 1)
                product.cartQuantity += 1
                console.log(count)
            }
            else{
                product.cartQuantity = product.quantity
                setCount(product.cartQuantity)
                console.log(count)
            }
            
           
            } else {
                dispatch(increment(product))
            }
        }
          
    
    const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        let cartIndex = cartItems.findIndex(item => item.id === product.id)
        if (cartIndex === -1){
            if(product.cartQuantity >= 2){
                product.cartQuantity -= 1
                setCount((prev)=> prev - 1)
                console.log(count)
            }
            else{
                product.cartQuantity = 1
                setCount(product.cartQuantity)
                console.log(count)
            }
        } else {
            dispatch(decrement(product))
        }
        
        }  
        const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
            event.stopPropagation();
            /* cart.addItem(data); */
            dispatch(addCartProduct(product))
            
        
        }
    const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded' 

    const productRating = data.reviews?.reduce((acc, item) => item.rating + acc,0)/data.reviews?.length

    useEffect(()=>{
        setMounted(true)
    },[])
    
    if (!mounted) {
        return null
    }

  return (

    <>
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
                    <span>{data.reviews?.length} reviews</span>
                    <Rating value={productRating} readOnly/>
                </div>
                
                <Separator/>
                <div className="flex gap-8 items-center">
                    <div className="flex font-semibold">
                        Quantity
                    </div>
                    <div className="flex gap-4 items-center text-base">

                        <button onClick={decreaseQuantity} className={btnStyles}>-</button>
                            {cartItem? cartItem.cartQuantity : product.cartQuantity}
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
        <div className='flex flex-col mt-20 gap-4 '>
            <AddRating product={product} orders={orders}/>
            <Separator/>
            <ListRating product={product}/>
        </div>
    </>
  )
}


export default Info