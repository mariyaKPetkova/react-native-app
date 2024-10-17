import { createSlice } from '@reduxjs/toolkit'
import { CustomProductCart } from '../../types/Cart'

const findItem = (
  items: CustomProductCart[],
  productId: string,
  productSize: string
) =>
  items.find(
    (item: CustomProductCart) =>
      item.id == productId && item.size == productSize
  )

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    addedProducts: [] as CustomProductCart[],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    show(state, action) {
      state.addedProducts = action.payload
    },
    addItemToCart(state, action) {
      const newItem = action.payload.product
      const productSize = action.payload.selectedSize
      const existingItem = findItem(
        state.addedProducts,
        newItem.id,
        productSize
      )
      if (existingItem?.quantity === 10) return
      if (!existingItem) {
        state.addedProducts.push({
          name: newItem.name,
          price: newItem.price,
          imgUrl: newItem.imgUrl,
          size: productSize,
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
          idSize: newItem.id + productSize
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += existingItem.price
      }
      state.totalQuantity++
      state.totalAmount += existingItem?.price || newItem?.price
    },
    addItem(state, action) {
      const newItem = action.payload
      const item = findItem(state.addedProducts, newItem.id, newItem.size)
      if (item && item.quantity < 10) {
        item.quantity++
        item.totalPrice += item?.price
        state.totalQuantity++
        state.totalAmount += item?.price
      }
    },
    removeItem(state, action) {
      const product = action.payload
      const item = findItem(state.addedProducts, product.id, product.size)
      if (item?.quantity === 1) {
        const result = state.addedProducts.filter(
          prod => prod.idSize !== product.idSize
        )
        state.addedProducts = result
      } else {
        if (item) {
          item.quantity--
          item.totalPrice -= item.price
        }
      }
      state.totalQuantity--
      state.totalAmount -= item?.price || product?.price
    },
    removeProductFromCart(state, action) {
      const item = action.payload
      const result = state.addedProducts.filter(
        product => product.idSize !== item.idSize
      )
      state.addedProducts = result
      state.totalAmount -= item.totalPrice
      state.totalQuantity -= item.quantity
    }
  }
})
export const cartActions = cartSlice.actions
export default cartSlice
