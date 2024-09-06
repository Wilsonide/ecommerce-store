import { Product } from "@/types"
import qs from 'query-string'

interface Query{
    isFeatured?: boolean,
    sizeId?: string,
    categoryId?: string,
    colorId?: string
    searchTerm?: string
}

const URL = `${process.env.NEXT_PUBLIC_URL}/products`
const getProducts = async (query:Query): Promise<Product[]> => {
    const Url = qs.stringifyUrl({
        url:URL,
        query:{ colorId: query.colorId,
                sizeId: query.sizeId,
                categoryId: query.categoryId,
                isFeatured: query.isFeatured
                }
    })
    const res = await fetch(Url)
    const data = res.json()
    return data
}
export default getProducts