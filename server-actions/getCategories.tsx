import { Category } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_URL}/category`
const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(url,{
        method: 'GET',
        headers:{
            "content-type": "application/json",
            
        }
    })
    return res.json()
}
export default getCategories