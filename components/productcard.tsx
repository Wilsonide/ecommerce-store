"use client"
import { Product } from '@/types'
import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import { Expand, ShoppingCart } from 'lucide-react'
import IconButton from './ui/iconButton'
import Currency from './ui/currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/usePreview-modal'
import { Rating } from '@mui/material'
import { truncate } from '@/lib/utils'
import {useDispatch} from "react-redux"
import {
    addCartProduct,
} from "@/app/features/cart/cartSlice"


interface ComponentProp{
    data: Product
}

function ProductCard({data}:ComponentProp) {
    const previewModal = usePreviewModal()
    const dispatch = useDispatch()
    const router = useRouter()
    const handleClick = () => {
        router.push(`/product/${data.id}`)
    
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        const product = {
            id : data.id,
            category : data.category,
            name : data.name,
            size : data.size,
            color : data.color,
            reviews : data.reviews,
            Image: data.Image,
            price: data.price,
            description : data.description,
            cartQuantity : 1,
            quantity : data.quantity
        }
        /* cart.addItem(data); */
        dispatch(addCartProduct(product))
        

    }


    const productRating = data.reviews?.reduce((acc, item) => item.rating + acc,0)/data.reviews?.length

  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
        <div className='aspect-square rounded-xl bg-gray-100 relative'>
            
            <Image 
            fill
            alt="Image"
            src={data?.Image[0]?.url}
            className="aspect-square rounded-md object-cover"
            />
            <div className='opacity-0 group-hover:opacity-100 absolute bottom-5 w-full transition px-6'>
                <div className='flex gap-x-6 justify-center'>
                    <IconButton
                        icon={<Expand size={20} className='text-gray-600'/>}
                        onClick={onPreview}
                    />
                    <IconButton
                        icon={<ShoppingCart size={20} className='text-gray-600'/>}
                        onClick={onAddToCart}
                    />
                </div>
            </div>
        </div>
        <div>
            <p className='font-semibold text-lg'>{data.name}</p>
        </div>

        <div>
            <Currency data={data?.price}/>
        </div>
        <div>
            {truncate(data?.description)}
        </div>
        <div className='flex flex-col gap-2 justify-center'>
            <span>{data.reviews.length} reviews</span>
            <Rating value={productRating} readOnly/>
        </div>
        
    </div>
  )
}

export default ProductCard