import { AccountState } from '../../types/Account'

export const user = (state: AccountState) => state.account.user
export const isLoggedIn = (state: AccountState) => state.account.isLoggedIn
export const error = (state: AccountState) => state.account.error
