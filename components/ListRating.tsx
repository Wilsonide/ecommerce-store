"use client"
import { cartProduct} from '@/types'
import { Rating } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Heading } from './Heading'

import { FaUser } from 'react-icons/fa'

import { useCurrentUser } from '@/hooks/useCurrentUser'
interface ListRatingProps{
    product:cartProduct
}

export const ListRating:React.FC<ListRatingProps> = ({product}) => {
    const user = useCurrentUser()
    if (product.reviews.length === 0) return null
    
    const sortedReviews = product.reviews.slice().sort((review1,review2) =>(moment(review1.createdAt).fromNow()).localeCompare(moment(review2.createdAt).fromNow()))
  return (
    <div>
        <Heading title='Reviews'/>
        <div className='text-sm mt-2'>
            {sortedReviews && sortedReviews.map((review)=> {
                return(
                    <div key={review.id} className='max-w-300px'>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <Avatar className='mr-2'>
                                    <AvatarImage src={user?.image || ""}/>
                                    <AvatarFallback className='bg-sky-500'>
                                        <FaUser className='text-white'/>
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='font-semibold'>{user?.name}</div>
                            <div>{moment(review.createdAt).fromNow()}</div>
                        </div>
                        <div className='mt-2'>
                            <Rating value={review.rating} readOnly/>
                            <div className='ml-2 my-2 mb-4'>{review.comment}</div>
                            
                        </div>
                    </div>
                ) 
            })}
        </div>
    </div>
  )
}
