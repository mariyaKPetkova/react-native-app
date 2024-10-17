export type LoginRes = {
  token: string | null
  lastname: string
  username: string
}
export type UserData = {
  username: string
  lastname: string
}
export type AccountState = {
  account: {
    user: {
      username: string
      lastname: string
      token: string
    }
    isLoggedIn: boolean
    error: string
  }
}
