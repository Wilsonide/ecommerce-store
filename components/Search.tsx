"use client"
import * as z from 'zod'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormControl } from "./ui/form"

import { Input } from './ui/input'
import { startTransition, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import axios from 'axios'
import { SearchIcon } from 'lucide-react'

const RatingSchema = z.object({
    searchTerm: z.string()
    
})


const Search = () => {
   
    const router = useRouter()

    const form = useForm<z.infer<typeof RatingSchema >>({
        resolver: zodResolver(RatingSchema),
        defaultValues: {
            searchTerm: '',
        }
    })

    const onSubmit = async(values:z.infer<typeof RatingSchema>) => {
       if (!values.searchTerm){
        return router.push('/')
       }
       
        /* const data = {...values}
        const url = `${process.env.NEXT_PUBLIC_API_URL}/search`
        const res = await axios.post(url, data)
        console.log(res.data)
        return res.data */
       
    

        const url = queryString.stringifyUrl({
        url: "/",
        query: {
            searchTerm: values.searchTerm
        }
       },{
        skipNull: true,
       })
       console.log(values)
       router.push(url) 

    
       
    
       
    }

  return (
    
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                        <FormField
                                control={form.control}
                                name='searchTerm'
                                render = {({field}) => (
                                    
                                    <FormItem>
                                        <FormControl>
                                        <div className='flex items-center justify-center gap-2 w-[2/6] rounded-md bg-gray-200'>
                                            <input 
                                                className='outline-none sm:w-30 bg-gray-200 h-8 rounded-md ml-2'
                                                {...field}
                                                placeholder='Search'
                                                type='text'
                                               
                                            /> 
                                            <button className='h-8 bg-gray-200 rounded-md px-2' type='submit'>
                                                <SearchIcon className='h-4 w-4'/>
                                            </button>
                                        </div>
                                        </FormControl>
                                    
                                    </FormItem>
                                    
                                )}
                            />

                            
                </form>
        </Form>

  )
}

export default Search