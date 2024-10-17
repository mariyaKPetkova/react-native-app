import React, { useState, useEffect } from 'react'
import NativeWebView from 'react-native-webview'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { Spinner } from '../../components/Spinner/Spinner'
import { Color } from '../../theme/Color'
import { STOREFRONT_ORDER_HISTORY } from '../../configs/configs'
import { styles } from './OrderHistory.styles'
import { useAppSelector } from '../../store/hooks'
import { user } from '../../store/account/selectors'
import { authenticate } from '../../api/user'

export const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const userData = useAppSelector(user)
  const authToken = userData.token
  const [cookiesSet, setCookiesSet] = useState(false)

  useEffect(() => {
    const setAuthToken = async () => {
      authenticate(authToken)
      setTimeout(() => {
        setCookiesSet(true)
      }, 1000)
    }
    setAuthToken()
  }, [])

  return (
    <ScreenContainer style={styles.container}>
      {isLoading && <Spinner color={Color.BLACK} size={96} fullscreen={true} />}
      {cookiesSet && (
        <NativeWebView
          startInLoadingState
          source={{
            uri: STOREFRONT_ORDER_HISTORY,
            headers: {
              Authorization: authToken
            }
          }}
          onLoad={() => setIsLoading(false)}
          sharedCookiesEnabled={true}
          javascriptEnabled={true}
          thirdPartyCookiesEnabled={true}
        />
      )}
    </ScreenContainer>
  )
}
