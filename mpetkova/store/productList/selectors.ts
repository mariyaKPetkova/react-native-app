import { ProductListState } from '../../types/ProductList'

export const productList = (state: ProductListState) =>
  state.productList.productList
export const productsError = (state: ProductListState) =>
  state.productList.error
export const isProductsLoading = (state: ProductListState) =>
  state.productList.isLoading
export const stratNumber = (state: ProductListState) =>
  state.productList.stratNumber
export const totalProductCount = (state: ProductListState) =>
  state.productList.totalProductCount
