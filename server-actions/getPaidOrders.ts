import { db } from "@/lib/db"



export const getPaidOrders = async () => {
    const deliveredOrders = await db.order.findMany({where: 
        {
        isPaid: true
    },
    include:{OrderItem:{include:{product:true}}}
})
    return deliveredOrders
}




export type orderType = Awaited<ReturnType<typeof getPaidOrders>>

