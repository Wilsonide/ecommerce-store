"use client"

import { logout } from '@/actions/logout'
import { signOut } from 'next-auth/react'

import { useRouter } from 'next/navigation'
import React from 'react'

export const LogoutButton = ({children}:{children?:React.ReactNode}) => {
  const router = useRouter()
    const onClick = () => {
      signOut({redirect:false})
      router.push('/')
    }
  return (
    <span onClick={onClick} className='cursor-pointer'>
        {children}
    </span>
  )
}
