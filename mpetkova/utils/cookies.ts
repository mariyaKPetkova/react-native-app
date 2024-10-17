import CookieManager from '@react-native-cookies/cookies'
import cookieParser from 'set-cookie-parser'
import { BASE_URL } from '../api/consts'

export const clearCookies = async () => {
  await CookieManager.clearAll()
  await CookieManager.flush()
}

export const parseCookies = async (header: string) => {
  await clearCookies()
  const cookies = cookieParser.splitCookiesString(header)
  await Promise.all(
    cookies.map((cookie: string) =>
      CookieManager.setFromResponse(BASE_URL, cookie)
    )
  )
  await CookieManager.flush()
}
