import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    const session = await auth();
    if (!session?.user?.email) return null

    const user = db.user.findUnique({where:
        {email: session.user.email},
        include: {Order:{include:{OrderItem:{include:{product:true}}}}},

    })

    if (!user) return null
    return NextResponse.json(user)

}
