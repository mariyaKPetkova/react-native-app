import React, { useRef, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import WebView from 'react-native-webview'
import { styles } from './Home.styles'
import { PageNames, StackNavigation } from '../../types/Navigation'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { Spinner } from '../../components/Spinner/Spinner'
import { Color } from '../../theme/Color'
import { SEND_POST_MESSAGE, STOREFRONT_URL } from '../../configs/configs'
import {
  ALERT_TITLE,
  NAVIGATION,
  OK,
  PAGE_DOES_NOT_EXIST
} from '../../consts/consts'
import type { WebViewMessageEvent } from 'react-native-webview'

export const Home = () => {
  const navigation = useNavigation<StackNavigation>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const webViewRef = useRef<WebView>(null)
  const onMessage = (event: WebViewMessageEvent) => {
    const [type, pageName] = event.nativeEvent.data.split(':')

    if (type !== NAVIGATION) return
    if (Object.values(PageNames).includes(pageName as PageNames)) {
      navigation.navigate(pageName)
    } else {
      Alert.alert(ALERT_TITLE, PAGE_DOES_NOT_EXIST, [{ text: OK }])
    }
  }

  return (
    <ScreenContainer style={styles.container}>
      {isLoading && <Spinner color={Color.BLACK} size={96} fullscreen={true} />}
      <WebView
        source={{ uri: STOREFRONT_URL }}
        ref={webViewRef}
        javaScriptEnabled
        onLoad={() => setIsLoading(false)}
        injectedJavaScript={SEND_POST_MESSAGE}
        onMessage={onMessage}
      />
    </ScreenContainer>
  )
}
