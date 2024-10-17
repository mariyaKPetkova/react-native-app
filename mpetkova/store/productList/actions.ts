import { Dispatch } from 'redux'
import { productListActions } from './slice'
import { fetchProductsSearchResults } from '../../api/product'

export const getProductList = (
  search: string,
  start: number,
  count: number
) => {
  return async (dispatch: Dispatch) => {
    const productsData = await fetchProductsSearchResults(search, start, count)
    dispatch(productListActions.getProductList(productsData.hits))
    dispatch(productListActions.getStartNumber(productsData.start))
    dispatch(productListActions.getTotalProductsCount(productsData.total))
  }
}
export const getMoreProducts = (
  search: string,
  start: number,
  count: number
) => {
  return async (dispatch: Dispatch) => {
    const productsData = await fetchProductsSearchResults(search, start, count)
    dispatch(productListActions.getMoreProducts(productsData.hits))
    dispatch(productListActions.getStartNumber(productsData.start))
  }
}
export const removeProductList = () => {
  return async (dispatch: Dispatch) => {
    dispatch(productListActions.removeProductList())
    dispatch(productListActions.getStartNumber(0))
    dispatch(productListActions.getTotalProductsCount(0))
  }
}
