
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendConfirmOrderEmail } from "@/lib/mail";
import { NextResponse } from "next/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT, DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
}

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders })
}


export async function POST(req: Request, { params }: { params: { reference: string } }) {

    try {
        const user = await currentUser();
        const email = user?.email as string;
       

        const res = await fetch(`https://api.paystack.co/transaction/verify/${params.reference}`, {
            method: 'GET',
            headers: {
                Authorization: process.env.NEXT_SECRET_API_KEY as string
            }
        })
        const data = await res.json();

        const { productsIds } = await req.json()
       
        if (!productsIds || productsIds.length === 0) {
            return new NextResponse("products are required", { status: 400 })
        }

        const products = await db.product.findMany({
            where: {
                id: {
                    in: productsIds
                }
            }
        })
       

        const orders = await db.order.create({
            data: {
                storeId: process.env.STORE_ID as string,
                isPaid: true,
                phone: data.data.customer?.phone,
                address: data.data.customer?.address,
                OrderItem: {
                    create: productsIds.map((productIds: string) => ({
                        product: {
                            connect: {
                                id: productIds
                            }
                        }
                    }))
                }
            }
        }) 

       

        /* await prismadb.product.updateMany({
            where:
                {id: {in: [...productsIds]}},
            data:
                {isArchived: true}
                }) */


        await sendConfirmOrderEmail(email, params.reference)

        


        return NextResponse.json({ success: true, data: data.data, status: 200 });
    }
    catch (err:any) {
        return NextResponse.json({ success: false,err ,status: 400 });

    }
} 