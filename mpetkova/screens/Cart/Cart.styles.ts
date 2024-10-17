import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'
import { FontSize } from '../../theme/FontSize'

export const styles = StyleSheet.create({
  containerHorizontal: {
    flexDirection: 'row'
  },
  itemContainer: {
    flexDirection: 'row'
  },
  productContainer: {
    width: '72%',
    marginLeft: -18
  },
  detailsContainer: {
    width: '28%',
    marginTop: 10,
    justifyContent: 'center'
  },
  priceContainer: {
    marginTop: 20
  },
  quantityText: {
    marginTop: 16
  },
  priceText: {
    fontSize: FontSize.LARGE,
    fontWeight: 'bold',
    marginTop: 10
  },
  quantityUpdateBtn: {
    backgroundColor: Color.GRAY.LIGHTGRAY,
    width: 40,
    borderRadius: 6,
    padding: 6,
    fontWeight: 'bold'
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  removeBtn: {
    alignSelf: 'flex-end',
    borderRadius: 6,
    fontWeight: 'bold',
    backgroundColor: Color.GRAY.LIGHTGRAY
  },
  goToPLPBtn: {
    margin: 20,
    width: '94%',
    padding: 8,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 6,
    fontWeight: 'bold',
    backgroundColor: Color.GRAY.GRAY,
    color: Color.WHITE
  }
})
