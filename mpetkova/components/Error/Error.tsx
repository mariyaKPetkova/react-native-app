import React from 'react-native'
import ScreenContainer from '../ScreenContainer/ScreenContainer'
import { TextView } from '../TextView/TextView'
import { styles } from './Error.styles'
type ErrorProps = {
  errorMessage: string | null
}
export const Error = ({ errorMessage }: ErrorProps) =>
  errorMessage ? (
    <ScreenContainer>
      <TextView text={errorMessage} style={styles.errorMessage} />
    </ScreenContainer>
  ) : null
