import { StyleSheet } from 'react-native'
import { Color } from '../../../theme/Color'
import { FontSize } from '../../../theme/FontSize'

export const styles = StyleSheet.create({
  accountContainer: {
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },
  button: {
    marginTop: 16,
    justifyContent: 'center',
    borderRadius: 26,
    width: 260,
    height: 54
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.WHITE,
    fontSize: FontSize.MEDIUM
  },
  text: {
    fontWeight: 'bold',
    color: Color.GRAY.DIMGRAY,
    fontSize: FontSize.MEDIUM,
    marginBottom: 10
  }
})
