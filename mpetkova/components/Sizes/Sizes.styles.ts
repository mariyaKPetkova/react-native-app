import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'
import { FontSize } from '../../theme/FontSize'

export const styles = StyleSheet.create({
  sizesContainer: {
    flex: 1
  },
  selectedSize: {
    width: 56,
    margin: 4,
    backgroundColor: Color.GRAY.DIMGRAY,
    borderRadius: 4,
    alignItems: 'center'
  },
  notSelectedSize: {
    width: 56,
    margin: 4,
    backgroundColor: Color.GRAY.SILVER,
    borderRadius: 4,
    alignItems: 'center'
  },
  sizeText: {
    fontSize: FontSize.MEDIUM,
    marginBottom: 5
  }
})
