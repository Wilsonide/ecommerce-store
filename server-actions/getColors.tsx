import { Color } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_URL}/color`
const getColors = async (): Promise<Color[]> => {
    const res = await fetch(url)
    const data = res.json()
    return data
}
export default getColors