import { cn } from '@/lib/utils'
import React from 'react'
type props = {
  children: React.ReactNode,
  className? : string
}

function Container({children,className}: props) {
  return (
    <div className={cn('mx-auto max-w-7xl',className)}>
        {children}
    </div>
  )
}

export default Container