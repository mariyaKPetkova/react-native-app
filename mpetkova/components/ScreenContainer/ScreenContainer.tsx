import React, { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'
import { styles } from './ScreenContainer.styles'

interface ScreenContainerProps extends ViewProps {
  children: ReactNode
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  )
}

export default ScreenContainer
