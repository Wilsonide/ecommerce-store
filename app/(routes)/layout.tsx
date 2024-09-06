"use client"

import Navbar from '@/components/navbar'
import { Provider } from 'react-redux'
import {store} from "../features/store"
import {productsSlice} from "../features/products/productSlice"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* store.dispatch(productsSlice.endpoints.getProducts.initiate()) */
  let persistor = persistStore(store)

  return (
    <div className='flex flex-col '>
        <Provider store={store}>
            <div className=''>
                {/* @ts-ignore */}
                {<Navbar/> } 
            </div>
            <div className=''>{children}</div>
        </Provider>
        
    </div>
            
            
         
  )
}
