import { StyleSheet } from 'react-native'
import { Color } from '../../../theme/Color'
import { FontSize } from '../../../theme/FontSize'

export const styles = StyleSheet.create({
  PayPalBtn: {
    width: '94%',
    height: 38,
    padding: 8,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 6,
    fontWeight: 'bold',
    backgroundColor: Color.GRAY.SILVER,
    color: Color.WHITE
  },
  totalAmountText: {
    fontSize: FontSize.MEDIUM,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 8
  },
  checkoutBtn: {
    width: '94%',
    padding: 8,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 6,
    fontWeight: 'bold',
    backgroundColor: Color.GRAY.GRAY,
    color: Color.WHITE
  },
  paymentMethods: {
    flexDirection: 'row'
  },
  orText: {
    alignSelf: 'center',
    fontSize: FontSize.MEDIUM,
    fontWeight: 'bold'
  },
  paymentText: {
    justifyContent: 'flex-start',
    fontSize: FontSize.MEDIUM,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 4
  }
})
