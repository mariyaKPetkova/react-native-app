import React, { useState } from 'react'
import WebView from 'react-native-webview'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { Spinner } from '../../components/Spinner/Spinner'
import { Color } from '../../theme/Color'
import { styles } from './Help.styles'
import { WEBCAMTESTS_URL } from '../../configs/configs'

export const Help = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <ScreenContainer style={styles.container}>
      {isLoading && <Spinner color={Color.BLACK} size={96} fullscreen={true} />}
      <WebView
        source={{ uri: WEBCAMTESTS_URL }}
        onLoad={() => setIsLoading(false)}
      />
    </ScreenContainer>
  )
}
