import { CartState } from '../../types/Cart'

export const addedProducts = (state: CartState) => state.cart.addedProducts
export const totalAmount = (state: CartState) => state.cart.totalAmount
export const totalQuantity = (state: CartState) => state.cart.totalQuantity
