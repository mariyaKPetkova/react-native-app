import React, { useEffect } from 'react'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { AccountInfo } from './AccountInfo/AccountInfo'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { isLoggedIn } from '../../store/account/selectors'
import { AccountForm } from './AccountForm/AccountForm'
import { reAuth } from '../../store/account/actions'

export const Account = () => {
  const isLoggedUser = useAppSelector(isLoggedIn)
  const dispach = useAppDispatch()
  const refreshSession = () => {
    dispach(reAuth())
  }
  const scheduleSessionRefresh = (interval: number, func: () => void) => {
    setInterval(func, interval)
  }
  useEffect(() => {
    refreshSession()
    const interval = 20 * 60 * 1000
    scheduleSessionRefresh(interval, refreshSession)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ScreenContainer>
      {isLoggedUser ? <AccountInfo /> : <AccountForm />}
    </ScreenContainer>
  )
}
