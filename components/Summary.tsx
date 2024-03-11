'use client'
import React, { useState } from 'react'
import {useEffect} from 'react'
import {toast} from 'react-hot-toast'
import useCart from '@/hooks/useCart'
import Currency, { formatter } from './ui/currency'
import axios from 'axios'
import { PaystackButton, usePaystackPayment } from 'react-paystack'
import { PaystackProps } from 'react-paystack/dist/types'
import { redirect } from 'next/navigation'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Button } from './ui/button'
import { sendConfirmOrderEmail } from '@/lib/mail'





type referenceObj={
  message: string,
  reference: string,
  status: "success" | "failure",
  trans: string,
  transaction: string,
  trxref: string
}



function Summary() {

  const user = useCurrentUser()
  if (!user) {
    redirect('/auth/login');
  }
  const [success, setSuccess] = useState(false)
  const [ref, setRef] = useState('')
  const items = useCart(state=>state.items)
  const removeAll = useCart((state)=>state.removeAll)

  const totalPrice = items.reduce((totalPrice: number, item: { price: any }) => {
    return totalPrice + Number(item.price)
  },0) 

  useEffect(()=>{
    setSuccess(false)
    setRef(''+ Math.floor(Math.random() * 1000000000000 + 1))
  },[success])


  const config:PaystackProps= {
    label:user.name as string,
    email: user?.email as string,
    publicKey : "pk_live_7f43187dfa92b20ee02ea32681ae091034c00be8", //process.env.API_PUBLIC_KEY as string,
    amount :totalPrice * 100,
    currency: "NGN",
  
  }



  const onSuccess = (reference:referenceObj) => {

    const res = axios.post(`/api/verify/${reference.reference}`,{productsIds: items.map((item) =>item.id)})
       .then(response =>{
        if (response.data.data.status === 'success') {
          setSuccess(true)
          removeAll()
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
    text: `Checkout`,
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
            <Currency data={totalPrice}/> 
          </div>
        </div>
        <Button className="w-full mt-6">
          <PaystackButton {...componentProps} />
        </Button>
        
    </div>
  )
}

export default Summary