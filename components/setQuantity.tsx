"use client"

import { Product } from "@/types";

interface props {
    cartCounter : boolean;
    product : Product;
    handleQntyIncrement : () => void;
    handleQntyDecrement : () => void;
}

import React from 'react'

const SetQuantity = ({cartCounter, product, handleQntyDecrement,handleQntyIncrement}:props) => {
    const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'
  return (
    <div className="flex gap-8 items-center">
        {cartCounter ? null : <div className="flex font-semibold">Quantity</div>}
        <div className="flex gap-4 items-center text-base">
            <button onClick={handleQntyIncrement} className={btnStyles}>+</button>
            {product.quantity}
            <button className={btnStyles} onClick={handleQntyDecrement}>-</button>
        </div>

    </div>
  )
}

export default SetQuantity