import {Category} from "@/types"


const url = `${process.env.NEXT_PUBLIC_API_URL}/category`
const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${url}/${id}`)
    const data = res.json()
    return data
}
export default getCategory