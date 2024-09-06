"use client"
import { cn } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import React from 'react'

import {Color, Size} from '../types'    
import {Button} from './ui/button'

interface FilterProps{
    valueKey: string,
    name: string,
    data: ( Size| Color)[],
}

function Filter({valueKey, name, data}: FilterProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedValue = searchParams.get(valueKey)

    const handleFilter = (id: string) => {
        const current = qs.parse(searchParams.toString())
        const query = {...current, [valueKey]: id}

        if (current[valueKey] === id) query[valueKey] = null;

        const Url = qs.stringifyUrl({
            url: window.location.href,
            query: query},
            {skipNull: true}
        )
        router.push(Url)
    }

  return (
    <div className='mb-8'>
        <h3 className='text-lg font-semibold'>
            {name}
        </h3>
        <hr className='my-4'/>
        <div className='flex flex-wrap gap-2'>
            {data.map((item) => (
                <div key={item.id} className='flex items-center'>
                    <Button className={cn('rounded-md text-gray-800 p-2 bg-white border-gray-300 border hover:text-white ', selectedValue === item.id && 'bg-black text-white')} onClick={()=>handleFilter(item.id)}>
                        {item.name}
                    </Button>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter