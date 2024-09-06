import { Size } from "@/types"

const url = `${process.env.NEXT_PUBLIC_URL}/sizes`
const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(url)
    const data = res.json()
    return data
}
export default getSizes