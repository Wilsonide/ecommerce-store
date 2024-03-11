import { Category, Color, Size, Image, Product } from '@/types';

import {toast} from 'react-hot-toast'
import { create } from "zustand";
import {persist, createJSONStorage} from "zustand/middleware"




interface CartProp{
    items: Product[],
    quantity: number,
    addItem : (data: Product)=> void,
    removeItem: (id: string)=> void,
    increaseQuantity: (data: Product)=> void,
    decreaseQuantity: (data: Product)=> void
    removeAll : ()=> void,
    
}

const useCart = create(persist<CartProp>((set, get)=> (
    {
        items: [],
        quantity:1,
        addItem : ( data:Product )=> {
            const currentItem = get().items
            let quantity = get().quantity
            const existingItem = currentItem.find(item => item.id === data.id)
            if (existingItem ){
                if (existingItem.quantity >= data.quantity){
                    toast.error("cannot perform operation")
                    return
                }
                quantity++;
                set({ quantity:existingItem.quantity})
                existingItem.price = (Number(existingItem.price) + Number(data.price)).toString()
               
                
                set({items: [...get().items]})
                toast.success('item added successfully to cart')
                return
            }
            set({ items: [...get().items,{...data, quantity:quantity, price: (Number(data.price) * quantity).toString()}]})
            toast.success('item added successfully to cart')
        },
        removeItem : (id:string ) => {
            set({items: [...get().items].filter(item => item.id !== id)})
            toast.success('item removed successfully from cart')
         },

         increaseQuantity: (data:Product) => {
            let existingQuantity = get().quantity
            const itemExists = get().items.find(item => item.id === data.id)
            if (itemExists) {
                console.log("item exists on add ===== ", itemExists.quantity)
                console.log("data on add ===== ", data.quantity)
                if (itemExists.quantity === data.quantity){
                    toast.error("cannot perform operation")
                    return
                }
                itemExists.quantity++
                set({ quantity:itemExists.quantity})
                itemExists.price = (Number(itemExists.price) + Number(data.price)).toString()
                set({items: [...get().items]})
            }
            if (existingQuantity === data.quantity){
                toast.error("cannot perform operation")
                return
            }
            existingQuantity++
            set({ quantity: existingQuantity})
         },

         decreaseQuantity: (data:Product) => {
            let existingQuantity = get().quantity
            const itemExists = get().items.find(item => item.id === data.id)

            if (itemExists) {
                if (itemExists.quantity === 1){
                    toast.error("cannot perform operation")
                    return
                }
                itemExists.quantity--
                set({ quantity: itemExists.quantity })
                itemExists.price = (Number(data.price) - Number(itemExists.price)).toString()
                set({items: [...get().items]})
            }
            if (existingQuantity <= 1){
                toast.error("cannot perform operation")
                return
            }
            existingQuantity--
            set({ quantity: existingQuantity})
         },

        removeAll: () => {
            set({items:[]})
        },
        
        
    })
,{
    name: "cart-storage",
    storage:createJSONStorage(()=> localStorage)
}
))

export default useCart