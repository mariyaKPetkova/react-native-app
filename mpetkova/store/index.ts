import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './account/slice'
import cartSlice from './cart/slice'
import productDetailsSlice from './productDetails/slice'
import productListSlice from './productList/slice'

export const rootReducer = {
  productList: productListSlice.reducer,
  productDetails: productDetailsSlice.reducer,
  cart: cartSlice.reducer,
  account:accountSlice.reducer
}
const store = configureStore({
  reducer: rootReducer
})

export const initialState = {
  productListSlice: {
    productList: []
  },
  productDetailsSlice: {
    productDetails: {}
  },
  cartSlice: {
    cart: []
  },
  accountSlice:{
    account:{}
  }
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
