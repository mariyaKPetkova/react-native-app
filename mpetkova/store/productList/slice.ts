import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../types/ProductList'
const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productList: [] as Product[],
    error: false,
    isLoading: false,
    stratNumber: 0,
    totalProductCount: 0
  },
  reducers: {
    getProductList: (state, actions) => {
      state.productList = actions.payload
    },
    removeProductList: state => {
      state.productList = []
    },
    getMoreProducts: (state, actions) => {
      state.productList = [...state.productList, ...actions.payload]
    },
    productListError: (state, actions) => {
      state.error = actions.payload
    },
    isProductListLoading: (state, actions) => {
      state.isLoading = actions.payload
    },
    getStartNumber: (state, actions) => {
      state.stratNumber = actions.payload
    },
    getTotalProductsCount: (state, actions) => {
      state.totalProductCount = actions.payload
    }
  }
})
export const productListActions = productListSlice.actions
export default productListSlice
