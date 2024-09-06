"use client"
import { cartProduct} from '@/types'
import React, { MouseEventHandler, useState, useEffect } from 'react'
import Image from 'next/image'
import { X} from 'lucide-react'
import Currency from '@/components/ui/currency'
import IconButton from '@/components/ui/iconButton'
import { Separator } from '@/components/ui/separator'
import { useDispatch} from 'react-redux'
import { decrement, getCartCount, getTotalAmount, increment, removeCartItem } from '@/app/features/cart/cartSlice'


function CartItems({data}: {data:cartProduct}) {
    const [mounted, setMounted] = useState(false)
    

    const dispatch = useDispatch()
    
    const onRemove = () => {
        dispatch(removeCartItem(data.id))
        dispatch(getTotalAmount())
        dispatch(getCartCount())
    }
    const quantity = data.cartQuantity

    const totalSubPrice = Number(data.price) * quantity
        

    
const addQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    dispatch(increment(data))
    dispatch(getTotalAmount())
    
    }   

const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    dispatch(decrement(data))
    dispatch(getTotalAmount())
}

    const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

    useEffect(()=>{
        setMounted(true)
    },[])
    
    if (!mounted) {
        return null
    }



  return (
    <>
        <li className='flex py-6 border-t'>
            <div className='relative h-24 w-24 rounded-d overflow-hidden sm:h-48 sm:w-48'>
                <div className='absolute h-5 w-5 top-0 rounded-full z-10 bg-black flex items-center justify-center'>
                    <span className='text-white p-1'>{quantity}</span>
                </div>
                <Image
                fill
                src={data.Image[0].url}
                alt='image'
                />
            </div>
            <div className='relative ml-4 flex-1 flex-col justify-between sm:ml-6 space-y-4'>
                <div className='absolute z-10 right-0 top-0'>
                    <IconButton icon={<X size={15} onClick={onRemove}/>}/>
                </div>
            
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold text-black'>{data.name}</p>
                    </div>
                    <div className='mt-1 flex text-sm'>
                        <p className='text-gray-500 mr-4 border-r pr-4 border-gray-200'>{data.size.name}</p>
                        <p className='text-gray-500'>{data.color.name}</p>
                    </div>
                    <Currency data={data.price}/>
                </div>
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
               
                
            </div>
            
        </li>
    
        <div className='py-6 flex gap-2'>
            <span className='font-semibold'>SubTotal :</span>
            <Currency data={totalSubPrice}/>
        </div>
        <Separator/>
        
    </>
    
  )
}

export default CartItems