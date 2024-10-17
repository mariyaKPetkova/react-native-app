import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'
import { FontSize } from '../../theme/FontSize'

export const styles = StyleSheet.create({
  container: {
    margin: 4
  },
  header: {
    alignSelf: 'flex-start',
    marginLeft: 36
  },
  carousel: {
    margin: 4,
    alignSelf: 'center'
  },
  description: {
    marginTop: 50,
    margin: 10
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageCount: {
    position: 'absolute',
    top: 20,
    right: 48,
    color: Color.WHITE,
    fontSize: FontSize.SMALL,
    backgroundColor: Color.GRAY.DIMGRAY,
    padding: 8,
    borderRadius: 6
  },
  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 300,
    right: 180
  },
  selected: {
    margin: 4,
    fontSize: FontSize.MEDIUM,
    color: Color.GRAY.DIMGRAY
  },
  notSelected: {
    margin: 4,
    fontSize: FontSize.SMALL,
    color: Color.GRAY.SILVER
  },
  sizesContainer: {
    position: 'absolute',
    top: 500,
    left: 0,
    margin: 4
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
    fontSize: FontSize.MEDIUM
  },
  errorText: {
    margin: 6,
    color: Color.RED,
    alignSelf: 'center'
  },
  addButton: {
    borderRadius: 6,
    width: '60%',
    padding: 6,
    alignSelf: 'center',
    marginTop: 8
  },
  addButtonText: {
    alignSelf: 'center',
    color: Color.WHITE
  }
})
