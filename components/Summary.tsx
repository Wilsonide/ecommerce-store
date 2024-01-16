import React, { useState } from 'react'
import {useEffect} from 'react'
import {toast} from 'react-hot-toast'
import useCart from '@/hooks/useCart'
import Currency from './ui/currency'
import axios from 'axios'
import { PaystackButton } from 'react-paystack'
import { PaystackProps } from 'react-paystack/dist/types'


type referenceObj={
  message: string,
  reference: string,
  status: "success" | "failure",
  trans: string,
  transaction: string,
  trxref: string
}

function Summary() {
  const [success, setSuccess] = useState(false)
  const items = useCart(state=>state.items)
  const removeAll = useCart((state)=>state.removeAll)

  const totalPrice = items.reduce((totalPrice: number, item: { price: any }) => {
    return totalPrice + Number(item.price)
  },0)


  const config: PaystackProps = {
    email: "ichekuw@gmail.com",
    publicKey : "",
    amount :totalPrice,
    currency: "USD",
  }

  const onSuccess = async(reference:referenceObj) => {
    const res = await axios.post(`http://localhost:3000/api/653a5912769abb469a678a9a/verify/${reference.reference}`,{productIds: items.map(item => item.id)})
    const verifyData = await res.data

    if (verifyData.status === 'success') {
      setSuccess(true)
      removeAll()
    }
  }

  const onClose = () => {
    toast.error('payment cancelled')
  }

  const componentProps = {
    ...config,
   text : `pay ${<Currency data={totalPrice}/>}`,
   onSuccess,
   onClose
  }



  

  useEffect(()=>{
    setSuccess(false);
  },[success])


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
        <PaystackButton {...componentProps} className='w-full mt-6'/>
    </div>
  )
}

export default Summary