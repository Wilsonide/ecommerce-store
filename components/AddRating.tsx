"use client"
import * as z from 'zod'
import { useCurrentUser } from "@/hooks/useCurrentUser";

import { orderType } from "@/server-actions/getPaidOrders";
import { cartProduct } from "@/types";
import { Rating } from "@mui/material";
import { Review, } from "@prisma/client";
import axios from "axios";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Heading } from "./Heading";

import { Button } from "./ui/button";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

import { Input } from './ui/input';
import { useRouter } from 'next/navigation';


interface AddRatingProps{
    product : cartProduct
    orders : orderType
}

const AddRating : React.FC<AddRatingProps> = ({ product,orders}) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const user = useCurrentUser()

    const RatingSchema = z.object({
        rating: z.coerce.number().int(),
        comment: z.string()
        
    })

    const onSubmit = async(values:z.infer<typeof RatingSchema>) => {
        if (!user) {
            return toast.error("please logged in to add rating")
        }
            setIsLoading(true);
       
            if(values.rating === 0) {
                setIsLoading(false);
                return toast.error("no rating selected")
            }
            const data = {...values,product:product}
            const res = await axios.post('/api/rating', data)
            console.log(res.data)
            if (res.data.status === 200){
               toast.success(res.data.message)
               router.refresh()
            }
            else {
                toast.error(res.data.message)
            }
            setIsLoading(false)
        
    }

    const form = useForm<z.infer<typeof RatingSchema >>({
        resolver: zodResolver(RatingSchema),
        defaultValues: {
            rating: 0,
            comment: '',
        }
    })

        if (!user && !product) return null

        const deliveredOrders = orders.some(order => order.OrderItem.find(item => item.productId === product.id) && order.isPaid === true)
        
        const reviews = product?.reviews?.find((review:Review) => review.productId === product?.id)

         /* if (reviews || !deliveredOrders){
            return null
        }  */

    return (
        <div className="flex flex-col gap-2 max-w-[500px]">
            <Heading title="Rate this Product"/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className='space-y-4'>
                <FormField
                        control={form.control}
                        name='comment'
                        render = {({field}) => (
                            <FormItem>
                                <FormControl>
                                <Input 
                                        {...field}
                                        placeholder='Comment here'
                                        type='text'
                                        disabled={isLoading}
                                    /> 
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="rating"
                        render={({field}) => (
                            <FormItem className='flex items-center text-center gap-2'>
                                <FormLabel className='text-lg'>Rating : </FormLabel>
                                <FormControl>
                                    <Rating 
                                        {...field}
                                        onChange={field.onChange}
                                        value={field.value}

                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            )}
                        />

                        
                    </div>
                    <Button className='' type='submit' disabled={isLoading}>
                        Add Review
                    </Button>
                </form>
            </Form>
            
            

        </div>
        )
}

export default AddRating