import { Product } from "@prisma/client"
import { apiSlice } from "../api/apislice"
import {createEntityAdapter, createSelector} from "@reduxjs/toolkit"
import { RootState } from "../store"



interface Query{
    isFeatured?: boolean,
    sizeId?: string,
    categoryId?: string,
    colorId?: string
    searchTerm?: string
}






const productsAdapter = createEntityAdapter<Product> ({
})

const initialState = productsAdapter.getInitialState<Product[]>([])

export const productsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<typeof initialState,void>({
            query: () => 'products',
            transformResponse:(responseData:Product[]) =>{
                return productsAdapter.setAll(initialState, responseData)
            }
        })

    })
})
const selectProductResult = productsSlice.endpoints.getProducts.select()

export const selectProductData = createSelector(
    [selectProductResult],
    productResult => productResult.data
)



export const {
    selectAll: SelectAllProducts,
    selectById: SelectProductById,
    selectIds: SelectProductByIds,

} 
= productsAdapter.getSelectors<RootState>(state => selectProductData(state) ?? initialState)

export const {useGetProductsQuery} =  productsSlice