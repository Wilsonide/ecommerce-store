import { Product } from '@/types'
import React from 'react'
import ProductCard from './productcard'
import NoResults from './ui/noResults'

interface ProductListProps{
    title: string,
    data: Product[]
}

function ProductList({title, data}: ProductListProps) {
  return (
    <div className='space-y-4'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {data.length === 0 && (<NoResults/>)}
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {data?.map(item => (
                <ProductCard key={item.id} data={item}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList