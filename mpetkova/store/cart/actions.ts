import { Dispatch } from 'redux'
import { CustomProductCart } from '../../types/Cart'
import { cartActions } from './slice'

export const showCart = (product: CustomProductCart[]) => {
  return async (dispatch: Dispatch) => {
    dispatch(cartActions.show(product))
  }
}
