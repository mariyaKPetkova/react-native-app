import { ProductDetailsState } from '../../types/ProductDetails'

export const productDetails = (state: ProductDetailsState) =>
  state.productDetails.productDetails
export const productError = (state: ProductDetailsState) =>
  state.productDetails.error
export const isProductLoading = (state: ProductDetailsState) =>
  state.productDetails.isLoading
export const productVariants = (state: ProductDetailsState) =>
  state.productDetails.productVariants
export const productDetailsResponse = (state: ProductDetailsState) =>
  state.productDetails.productDetailsResponse
export const selectedSize = (state: ProductDetailsState) =>
  state.productDetails.selectedSize
