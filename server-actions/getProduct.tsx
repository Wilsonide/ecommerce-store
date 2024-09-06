import { Product} from "@/types"

const url = `${process.env.NEXT_PUBLIC_URL}/products`
const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${url}/${id}`)
    const data = res.json()
    return data
}
export default getProduct