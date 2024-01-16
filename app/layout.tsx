import getCategories from '@/server-actions/getCategories'
import AuthProvider from '@/components/authProvider'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toastProvider'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './globals.css'

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
  console.log('looooooooggggg', categories)

  return (
    <html lang="en">
      <AuthProvider>
        <body className={font.className }>
          <ModalProvider/>
          <ToastProvider/>
          {/* @ts-expect-error Server Component */}
          <Navbar/>
          {children}
          <Footer data={categories}/>
        </body>
      </AuthProvider>
    </html>
  )
}
