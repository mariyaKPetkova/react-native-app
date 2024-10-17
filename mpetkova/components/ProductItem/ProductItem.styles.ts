import { StyleSheet } from 'react-native'
import { FontSize } from '../../theme/FontSize'

export const styles = StyleSheet.create({
  wrapper: {
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    margin: 4,
    fontSize: FontSize.SMALL
  },
  image: {
    borderRadius: 6,
    width: '78%',
    height: 260
  }
})
