import { StyleSheet } from 'react-native'
import { FontSize } from '../../../../theme/FontSize'

export const styles = StyleSheet.create({
  totalAmountText: {
    fontSize: FontSize.MEDIUM,
    fontWeight: 'bold',
    marginLeft: 8
  },
  orderSummaryContainerRow: {
    marginRight: 12,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
