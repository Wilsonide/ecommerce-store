'use client'
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useEffect} from 'react'
import {toast} from 'react-hot-toast'
import useCart from '@/hooks/useCart'
import Currency from './ui/currency'
import axios from 'axios'
import { PaystackButton } from 'react-paystack'
import { PaystackProps } from 'react-paystack/dist/types'

import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Button } from './ui/button'
import { sendConfirmOrderEmail } from '@/lib/mail'
import { RootState } from '@/app/features/store'
import {removeAll} from '@/app/features/cart/cartSlice'
import { cartProduct } from '@/types'





type referenceObj={
  message: string,
  reference: string,
  status: "success" | "failure",
  trans: string,
  transaction: string,
  trxref: string
}



function Summary() {
  const dispatch = useDispatch()
  const totalAmount = useSelector<RootState,number>((state)=> state.cart.totalAmount)
  const cartItems = useSelector<RootState,cartProduct[]>((state)=> state.cart.cartItems)

  const user = useCurrentUser()
  const [success, setSuccess] = useState(false)
  const [ref, setRef] = useState('')
  

  

  /* const totalPrice = items.reduce((totalPrice: number, item: { price: any }) => {
    return totalPrice + Number(item.price)
  },0)  */

  useEffect(()=>{
    setSuccess(false)
    setRef(''+ Math.floor(Math.random() * 1000000000000 + 1))
  },[success])


  const config:PaystackProps= {
    label:user?.name as string,
    email: user?.email as string,
    publicKey : process.env.NEXT_PUBLIC_KEY as string, //process.env.API_PUBLIC_KEY as string,
    amount :totalAmount * 100,
    currency: "NGN",
  
  }



  const onSuccess = (reference:referenceObj) => {

    const res = axios.post(`/api/verify/${reference.reference}`,{productsIds: cartItems.map((item) =>item.id)})
       .then(response =>{
        if (response.statusText === 'OK') {
          setSuccess(true)
          dispatch(removeAll())
          return toast.success('payment successful')
        } 
        return toast.error('An error occurred')
      })
      .catch(err =>{
        console.log(err);
        return toast.error('An error occurred')
        
      }); 
    
  } 

  const onClose = () => {
    return toast.error('payment cancelled')
  }

  const componentProps = {
    ...config,
    text: `${cartItems.length ? "checkout" :"No products in your cart" }`,
    onSuccess,
    onClose
  }


  



  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
        <h2 className='text-lg font-medium text-black'>Order Summary</h2>
        <div className='mt-6 space-y-4'>
          <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
            <div className='text-base font-medium text-gry-900'>
              Order items
            </div>
            <Currency data={totalAmount}/> 
          </div>
        </div>
        <Button className="w-full mt-6">
          <PaystackButton {...componentProps} />
        </Button>
        
    </div>
  )
}

export default Summary