

import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'
interface ComponentProp{
    className?: string,
    icon : React.ReactElement,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function IconButton({ icon, onClick, className}: ComponentProp ) {
  return (
    <button onClick={onClick} className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition', className)}>
        {icon}
    </button>
  )
}

export default IconButton