import { createSlice } from '@reduxjs/toolkit'
import { ERROR_LOGIN_MESSAGE } from '../../consts/consts'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    user: {
      username: '',
      lastname: '',
      token: ''
    },
    isLoggedIn: false,
    error: ''
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload
    },
    loginOrRegister(state, action) {
      state.user = action.payload
      state.isLoggedIn = true
      state.error = ''
      if (!action.payload.username) {
        state.isLoggedIn = false
        state.error = ERROR_LOGIN_MESSAGE
      }
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = {
        username: '',
        lastname: '',
        token: ''
      }
      state.error = ''
    }
  }
})
export const accountActions = accountSlice.actions
export default accountSlice
