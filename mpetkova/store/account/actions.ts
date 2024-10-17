import { Dispatch } from 'redux'
import accountSlice, { accountActions } from './slice'
import { userLogin, userRegistration, userReLogin } from '../../api/user'
import { ERROR_LOGIN_MESSAGE } from '../../consts/consts'

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await userLogin(username, password)
      dispatch(accountActions.loginOrRegister(result))
    } catch (err) {
      dispatch(accountSlice.actions.setError(ERROR_LOGIN_MESSAGE))
      throw new Error(ERROR_LOGIN_MESSAGE)
    }
  }
}
export const logout = () => {
  return async (dispatch: Dispatch) => {
    dispatch(accountActions.logout())
  }
}
export const register = (
  username: string,
  lastname: string,
  password: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await userRegistration(username, lastname, password)
      dispatch(accountActions.loginOrRegister(result))
    } catch (err) {
      dispatch(accountSlice.actions.setError(ERROR_LOGIN_MESSAGE))
      throw new Error(ERROR_LOGIN_MESSAGE)
    }
  }
}
export const reAuth = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await userReLogin()
      dispatch(accountActions.loginOrRegister(result))
    } catch (err) {
      throw new Error(ERROR_LOGIN_MESSAGE)
    }
  }
}
