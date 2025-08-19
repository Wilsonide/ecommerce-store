import getCategories from '@/server-actions/getCategories'
import AuthProvider from '@/components/authProvider'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toastProvider'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'
import Footer from '../components/footer'

import './globals.css'



import { cn } from '@/lib/utils'
import StoreProvider from '@/components/storeProvider'
import Navbar from '@/components/navbar'
import Reviews from '@/components/Reviews'



const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'store',
  description: 'store',
}
export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories() 
  /* store.dispatch(productsSlice.endpoints.getProducts.initiate()) */

  return (
    <html lang="en">
      <AuthProvider>
          <body className={cn('flex flex-col',font.className)} >
            <div className='flex flex-col flex-1'>
              <StoreProvider>
                <ModalProvider/>
                <ToastProvider/>
                {/* @ts-ignore */}
                {<Navbar/> } 
                {children}
              </StoreProvider>
            </div>
            <Reviews/>
            {<Footer data={categories}/>}
          </body>
      </AuthProvider>
    </html>
  )
}
