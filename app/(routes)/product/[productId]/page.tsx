import getProduct from "@/server-actions/getProduct"
import getProducts from "@/server-actions/getProducts"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import ProductList from "@/components/productList"
import Container from "@/components/ui/container"

import { getPaidOrders } from "@/server-actions/getPaidOrders"
import { currentUser } from "@/lib/auth"

export const revalidate = 0

interface ProductPageProps{
    params:{productId: string}
}


const ProductPage = async({params}: ProductPageProps)=>{
    const user = await currentUser()
    const data = await getProduct(params.productId)
    const cartProduct ={
            id : data.id,
            category : data.category,
            name : data.name,
            size : data.size,
            color : data.color,
            reviews : data.reviews,
            Image: data.Image,
            price: data.price,
            description : data.description,
            cartQuantity : 1,
            quantity : data.quantity
    }
    let orders:Awaited<ReturnType<typeof getPaidOrders>> = []
    if (user){
        orders = await getPaidOrders() 
    }
    
    
    
    const suggestedProducts = await getProducts({categoryId: cartProduct?.category?.id})
    return(
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8 mt-16">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <div>
                            <Gallery images={cartProduct.Image}/>
                        </div>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={cartProduct} orders={orders}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Related Products" data={suggestedProducts}/>
                </div>
            </Container>
        </div>
    )
}
export default ProductPage