import { Dispatch } from 'redux'
import { productDetailsActions } from './slice'
import { getProductById } from '../../api/product'
import {
  PRODUCT_DETAILS_PARAMS,
  PRODUCT_VARIANTS_PARAMS
} from '../../consts/consts'

export const getProductDetails = (productId: string, params: string) => {
  return async (dispatch: Dispatch) => {
    const productDetailsResponse = await getProductById(productId, params)
    params === PRODUCT_DETAILS_PARAMS &&
      dispatch(productDetailsActions.getProductDetails(productDetailsResponse))
    params === PRODUCT_VARIANTS_PARAMS &&
      dispatch(productDetailsActions.getProductVariants(productDetailsResponse))
  }
}
