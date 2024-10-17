import { createSlice } from '@reduxjs/toolkit'
import {
  CustomProductVariants,
  ImageGroups,
  CustomProductDetails,
  ProductDetailsResponse,
  VariantsImageGroups,
  VariationAttributes,
  VariationAttributesValues,
  SelectedSize
} from '../../types/ProductDetails'
const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    productDetailsResponse: {} as ProductDetailsResponse,
    productDetails: {} as CustomProductDetails,
    error: false,
    isLoading: false,
    productVariants: [] as CustomProductVariants[],
    selectedSize: {} as SelectedSize
  },
  reducers: {
    getProductDetails: (state, actions) => {
      const productDetailsResponse = actions.payload
      state.productVariants = []
      state.productDetailsResponse = productDetailsResponse
      const imgUrl = productDetailsResponse.image_groups.reduce(
        (acc: ImageGroups[], curr: ImageGroups) => {
          if (curr.view_type != 'large') return acc
          const img = curr.images.map(x => {
            return x.link
          })
          return [...acc, ...img]
        },
        []
      )
      const variationAttributesSizes =
        productDetailsResponse?.variation_attributes?.find(
          (attr: VariationAttributes) => attr.id === 'size'
        )?.values
      const sizes = variationAttributesSizes.reduce(
        (acc: string[], curr: VariationAttributesValues) => {
          if (!curr.orderable) return acc
          return [...acc, curr.name]
        },
        []
      )
      state.productDetails = {
        name: productDetailsResponse.name,
        price: productDetailsResponse.price,
        imgUrl,
        sizes,
        description: productDetailsResponse.short_description,
        id: productDetailsResponse.id
      }
    },
    getProductVariants: (state, actions) => {
      const imageGroup = actions.payload?.image_groups?.find(
        (group: VariantsImageGroups) => group.view_type === 'medium'
      )
      state.productVariants = [
        ...state.productVariants,
        {
          id: actions.payload.id,
          name: actions.payload.name,
          imgUrl: imageGroup?.images[0]?.link
        }
      ]
    },
    productDetailsError: (state, actions) => {
      state.error = actions.payload
    },
    isProductDetailsLoading: (state, actions) => {
      state.isLoading = actions.payload
    },
    setSize: (state, actions) => {
      state.selectedSize = actions.payload
    }
  }
})
export const productDetailsActions = productDetailsSlice.actions
export default productDetailsSlice
