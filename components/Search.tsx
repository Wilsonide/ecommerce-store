"use client"
import * as z from 'zod'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormControl } from "./ui/form"

import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type props = {
    className? : string
  }

const RatingSchema = z.object({
    searchTerm: z.string()
    
})


const Search = ({className}:props) => {
   
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
       form.reset()
       router.push(url) 

    
       
    
       
    }

  return (
    
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} id="myForm" className={cn("w-full",className)}>
                    
                <FormField
                control={form.control}
                name='searchTerm'
                render = {({field}) => (
                                    
                    <FormItem>
                        <FormControl>
                        <div className='flex items-center justify-center rounded-md '>
                            <input 
                            className='outline-none h-8 ml-2 border rounded-l-md  placeholder:text-center px-2'
                            {...field}
                            placeholder='  Search'
                            type='text'
                                               
                            /> 
                            <button className='h-8 bg-gray-200 px-2 rounded-r-md' type='submit'>
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