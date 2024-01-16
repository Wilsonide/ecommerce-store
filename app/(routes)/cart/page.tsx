import getProducts from '@/server-actions/getProducts'
import React from 'react'
import Cartcontent from './components/CartPage'
export const revalidate = 0

const Cartpage = async() => {


  return (
    <Cartcontent/>
  )
}

export default Cartpage