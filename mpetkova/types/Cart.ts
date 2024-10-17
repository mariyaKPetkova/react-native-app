export type CustomProductCart = {
  name: string
  imgUrl: string[]
  size: string
  id: string
  price: number
  quantity: number
  totalPrice: number
  idSize: string
}
export type CartState = {
  cart: {
    addedProducts: CustomProductCart[]
    totalAmount: number
    totalQuantity: number
  }
}
