
import getBillboard from '@/server-actions/getBillboard'
import Container from '@/components/ui/container'
import BillboardPage from '@/components/billboard'
import getProducts from '@/server-actions/getProducts'
import ProductList from '@/components/productList'
import { Product } from '@/types'


export const revalidate = 0

interface PageProps{
  searchParams: {searchTerm: string }
}

const HomePage = async ({searchParams}:PageProps) => {
  
  const billboard = await getBillboard('clte8ghqe0002aj7holvxhv9k')
  
  const products = await getProducts({
    isFeatured: true
  })

 /*  const searchProducts = products.map((product) => {
    if (product.name.includes(searchParams.searchTerm)) {
    return product
  }
}) */

const searchProd = searchParams.searchTerm?.toLowerCase()

const searchProducts = products.filter((product) =>{
  return product.name.toLowerCase().includes(searchProd)
})


  
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <BillboardPage data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' data={searchParams.searchTerm ? searchProducts : products}/>
        </div>
      </div>
    </Container>
    
  )
}
export default HomePage