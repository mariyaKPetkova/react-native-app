import { StyleSheet } from 'react-native'
import { Color } from '../../../theme/Color'
import { FontSize } from '../../../theme/FontSize'

export const styles = StyleSheet.create({
  accountContainer: {
    alignItems: 'center'
  },
  accountIcon: {
    margin: 10,
    fontSize: 180,
    color: Color.GRAY.GRAY
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIcon: {
    fontSize: FontSize.LARGE,
    padding: 10,
    left: 34,
    zIndex: 1,
    color: Color.GRAY.GRAY
  },
  inputField: {
    textAlign: 'center',
    width: 340,
    height: 48,
    right: 20,
    margin: 10,
    fontSize: FontSize.SMALL,
    borderRadius: 30,
    backgroundColor: Color.WHITE
  },
  button: {
    marginTop: 16,
    justifyContent: 'center',
    borderRadius: 26,
    width: 240,
    height: 48
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.WHITE,
    fontSize: FontSize.MEDIUM
  },
  redirectText: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.GRAY.DIMGRAY,
    fontSize: FontSize.MEDIUM
  },
  errorText: {
    color: Color.RED,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
