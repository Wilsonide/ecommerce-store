import { createSlice } from "@reduxjs/toolkit";
import { cartProduct } from "@/types";
import {toast} from 'react-hot-toast'


type Prop = {
    cartItems: cartProduct[],
    totalCount: number,
    totalAmount: number
}


const initialState:Prop = {
    cartItems:[],
    totalAmount: 0,
    totalCount: 0
}

/* interface CartProp extends Prop{
    addcartProducts : (data: cartProduct)=> void,
    getCartProducts: () => void,
    getCartCount: () => void,
    getTotalAmount: () => void,
    removeCartItem: (id: string)=> void,
    increment: (id: string)=> void,
    decrement: (id:string)=> void
    removeAll : ()=> void,
    
} */


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCartProduct: (state,action) =>{
            let cartIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (cartIndex >= 0 ){
                /* if (state.cartItems[cartIndex]?.quantity > state.cartItems[cartIndex]?.cartQuantity){
                    state.cartItems[cartIndex].cartQuantity += 1
                }
                else{
                    toast.error("cannot add more items")
                }  */

                toast.error("item already in cart")  
            }
            else { 
                const qnty = action.payload.cartQuantity? action.payload.cartQuantity : 1
                let tempProduct = {...action.payload,cartQuantity:qnty}
                state.cartItems.push(tempProduct)
                getTotalAmount()
                toast.success('item added successfully to cart')
            }
        },
        getCartProducts: (state) =>{
            return {
                ...state
            }
        },
        getCartCount: (state) =>{
            let cartCount = state.cartItems.reduce((acc,item)=>{
                return item.cartQuantity + acc
            }, 0);
            state.totalCount = cartCount;
        },
        getTotalAmount: (state) =>{
            let cartAmount = state.cartItems.reduce((acc,item)=>{
                return acc + Number(item.price) * item.cartQuantity
            }, 0);
            const totalPrice = state.cartItems.reduce((totalPrice: number, item:cartProduct) => {
                return totalPrice + Number(item.price)* item.cartQuantity
              },0) 
            state.totalAmount = totalPrice;
        },
        removeCartItem: (state,action) => {
            let cartIndex = state.cartItems.findIndex(item => item.id === action.payload)
            if (cartIndex !== -1){
                state.cartItems.splice(cartIndex, 1);
                toast.success('item removed successfully from cart')
            }
        },
        increment: (state, action) => {
            let cartIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            
            if (state.cartItems[cartIndex]?.quantity > state.cartItems[cartIndex]?.cartQuantity){
                state.cartItems[cartIndex].cartQuantity += 1
                getTotalAmount()
            }else{
                toast.error("cannot add more items")
            }
            
        },
        decrement: (state, action) => {
            let cartIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[cartIndex]?.cartQuantity <= 2){
                state.cartItems[cartIndex].cartQuantity = 1;
                getTotalAmount()
            }else if (state.cartItems[cartIndex]?.cartQuantity > 2){
                state.cartItems[cartIndex].cartQuantity -= 1;
                getTotalAmount()
            }
        },
        removeAll: (state) => {
            state.cartItems = [];
            state.totalAmount = 0,
            state.totalCount = 0
        },
    }
})

export type cartSliceType = {
    cartItems: cartProduct[],
    totalCount: number,
    totalAmount: number
}

export const {
    removeAll,
    addCartProduct,
    getCartProducts,
    getCartCount,
    removeCartItem,
    getTotalAmount,
    increment,
    decrement
} = cartSlice.actions;
export default cartSlice.reducer;