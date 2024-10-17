import { encode } from 'base-64'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Keychain from 'react-native-keychain'
import {
  AUTHORIZATION,
  AUTH_FAILED,
  AUTH_TOKEN,
  ERROR_LOGIN_MESSAGE,
  ERROR_MESSAGE,
  GUEST_TOKEN
} from '../consts/consts'
import { BASE_URL, HEADER_ORIGIN, OCAPI_CLIENT_ID } from './consts'
import { LoginRes } from '../types/Account'
import { parseCookies } from '../utils/cookies'

export const userReLogin = async () => {
  const credentials = await Keychain.getGenericPassword()
  if (credentials) {
    const result = await userLogin(credentials.username, credentials.password)
    return result
  }
}

export const getGuestToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/customers/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-dw-client-id': OCAPI_CLIENT_ID,
        Origin: HEADER_ORIGIN
      },
      body: JSON.stringify({ type: 'guest' })
    })
    const data = await response.json()
    if (data.fault) {
      throw new Error(ERROR_MESSAGE)
    }
    const guestToken = response.headers.get(AUTHORIZATION)
    await AsyncStorage.setItem(GUEST_TOKEN, guestToken ? guestToken : '')
    return guestToken
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }
}

export const userLogin = async (
  username: string,
  password: string
): Promise<LoginRes | null> => {
  try {
    const response = await fetch(`${BASE_URL}/customers/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-dw-client-id': OCAPI_CLIENT_ID,
        Origin: HEADER_ORIGIN,
        Authorization: `Basic ${encode(`${username}:${password}`)}`
      },
      body: JSON.stringify({ type: 'credentials' })
    })
    const data = await response.json()
    if (data.fault) {
      throw new Error(ERROR_LOGIN_MESSAGE)
    }
    const token = response.headers.get(AUTHORIZATION)
    await AsyncStorage.setItem(AUTH_TOKEN, token ? token : '')
    await Keychain.setGenericPassword(username, password)
    return {
      lastname: data.last_name,
      username: data.login,
      token
    }
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }
}

export const userRegistration = async (
  username: string,
  lastname: string,
  password: string
): Promise<LoginRes | null> => {
  try {
    const guestToken = await getGuestToken()
    const response = await fetch(`${BASE_URL}/customers`, {
      method: 'POST',
      headers: new Headers({
        Authorization: guestToken ? guestToken : '',
        'Content-Type': 'application/json',
        'x-dw-client-id': OCAPI_CLIENT_ID,
        Origin: HEADER_ORIGIN
      }),
      body: JSON.stringify({
        customer: {
          login: username,
          email: username,
          last_name: lastname
        },
        password
      })
    })
    const data = await response.json()
    if (data.fault) {
      throw new Error(ERROR_LOGIN_MESSAGE)
    }
    const currentToken = response.headers.get(AUTHORIZATION) || ''
    await AsyncStorage.setItem(AUTH_TOKEN, currentToken ? currentToken : '')
    await Keychain.setGenericPassword(username, password)
    return {
      lastname: data.last_name,
      username: data.login,
      token: currentToken
    }
  } catch (error) {
    throw new Error(ERROR_MESSAGE)
  }
}

export const authenticate = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/sessions`, {
      method: 'POST',
      headers: new Headers({
        Origin: HEADER_ORIGIN,
        Authorization: token
      })
    })
    const header = response.headers.get('Set-Cookie') ?? ''
    await parseCookies(header)
  } catch (_) {
    throw new Error(AUTH_FAILED)
  }
}
