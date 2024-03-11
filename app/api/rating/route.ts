import { auth } from "@/auth";
import { db } from "@/lib/db";
import { getPaidOrders } from "@/server-actions/getPaidOrders";
import { Review } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST (req: Request){
    try{
        const session = await auth()
        const User = session?.user
        if (!User) return NextResponse.error()

        const body = await req.json()
        const {comment, rating, product} = body
       

        const orders = await getPaidOrders()
 
        const deliveredOrders = orders.some(order => order.OrderItem.find(item => item.productId === product.id) && order.isPaid === true)
        
        
        const reviews = product?.reviews.find((review:Review) => review.id === User.id)

        if ( reviews || !deliveredOrders){
            return NextResponse.error()
        } 

       await db.review.create({
        data: {
            productId: product.id,
            rating,
            comment
        }
      })  

        return NextResponse.json({message: "success", status:200})
    } catch(err){
        return NextResponse.json({message:"something went wrong",err, status:400});

    }
}