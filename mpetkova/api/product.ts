import {
  ProductDetailsResponse,
  ProductVariantResponse
} from '../types/ProductDetails'
import { BASE_URL, HEADER_ORIGIN, OCAPI_CLIENT_ID } from './consts'

export const fetchProductsSearchResults = async (
  search: string,
  start: number,
  count: number
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/product_search?&start=${start}&count=${count}&expand=images&q=${search}`,
      {
        method: 'Get',
        headers: new Headers({
          'Content-Type': 'application/json',
          'x-dw-client-id': `${OCAPI_CLIENT_ID}`,
          Origin: HEADER_ORIGIN
        })
      }
    )
    const products = await response.json()
    return products
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

export const getProductById = async (
  productId: string,
  params: string
): Promise<ProductDetailsResponse | ProductVariantResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}?expand=${params}`,
      {
        method: 'Get',
        headers: new Headers({
          'Content-Type': 'application/json',
          'x-dw-client-id': `${OCAPI_CLIENT_ID}`,
          Origin: HEADER_ORIGIN
        })
      }
    )
    const product = await response.json()
    return product || {}
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}
