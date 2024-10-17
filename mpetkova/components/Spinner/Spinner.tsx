import React, { ActivityIndicator } from 'react-native'
import ScreenContainer from '../ScreenContainer/ScreenContainer'
import { styles } from './Spinner.styles'
type SpinnerProps = {
  size: number
  color: string
  fullscreen: boolean
}
export const Spinner = ({ size, color, fullscreen }: SpinnerProps) => {
  return (
    <ScreenContainer style={fullscreen && styles.fullscreen}>
      <ActivityIndicator size={size} color={color} />
    </ScreenContainer>
  )
}
