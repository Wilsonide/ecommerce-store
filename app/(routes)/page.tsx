
import getBillboard from '@/server-actions/getBillboard'
import Container from '@/components/ui/container'
import BillboardPage from '@/components/billboard'
import getProducts from '@/server-actions/getProducts'
import ProductList from '@/components/productList'

export const revalidate = 0

const HomePage = async () => {
  
  const billboard = await getBillboard('clrebrosu0003i50mbxv9fhzs')
  console.log(billboard)
  const products = await getProducts({isFeatured: true})
  console.log("productttttttts",products)
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <BillboardPage data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' data={products}/>
        </div>
      </div>
    </Container>
    
  )
}
export default HomePage