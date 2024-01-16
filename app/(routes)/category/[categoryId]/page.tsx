
import getCategory from '@/server-actions/getCategory'
import getColors from '@/server-actions/getColors'
import getProducts from '@/server-actions/getProducts'
import getSizes from '@/server-actions/getSizes'
import BillboardPage from '@/components/billboard'
import Filter from '@/components/filter'
import MobileFilter from '@/components/mobileFilters'
import ProductCard from '@/components/productcard'
import Container from '@/components/ui/container'
import NoResults from '@/components/ui/noResults'
import React from 'react'
export const revalidate = 60*60;

interface CategoryPageProps{
    params: {categoryId: string},
    searchParams: {colorId: string, sizeId: string, }
}

async function CategoryPage({params, searchParams}: CategoryPageProps) {
    const products = await getProducts({categoryId: params.categoryId, ...searchParams})

    const sizes  = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)
    console.log(category)
  return (
    <div className='bg-white'>
        <Container>
            <BillboardPage data ={category.billboard}/>
            <div className='px-4 sm:px-6 lg:px-8 pb-24'>
                <div className='lg:grid lg:grid-cols-6 lg:gap-x-8'>
                    <MobileFilter sizes = {sizes} colors={colors}/>
                    <div className='hidden lg:block'>
                        <Filter
                        valueKey='sizeId'
                        name='Sizes'
                        data={sizes}
                        />

                        <Filter
                        valueKey='colorId'
                        name='Colors'
                        data={colors}
                        />
                    </div>
                    <div className='lg:col-span-5 mt-6 lg:mt-0'>
                        {products.length === 0 && <NoResults />}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {products.map((product) => (
                                <ProductCard key={product.id} data={product}/>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default CategoryPage