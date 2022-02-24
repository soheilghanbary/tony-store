import { ProductProps } from 'interfaces'
import { useQuery } from 'react-query'
import * as api from 'services'

export const useAllProducts = () => useQuery<ProductProps[], Error>('products' , api.getAllProducts)
export const useProduct = (id?: any) => useQuery<ProductProps , Error>(['product', id], () => api.getProduct(id))