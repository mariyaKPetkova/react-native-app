import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'
import { FontSize } from '../../theme/FontSize'

export const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    marginBottom: 78
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 12
  },
  input: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderRadius: 6,
    width: '78%'
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '18%',
    padding: 8,
    margin: 4,
    borderRadius: 6
  },
  inputIcon: {
    fontSize: FontSize.MEDIUM,
    color: Color.GRAY.GRAY95,
    fontWeight: 'bold'
  },
  productListView: {
    backgroundColor: Color.GRAY.LIGHTGRAY,
    borderRadius: 6,
    margin: 4
  },
  viewButton: {
    alignItems: 'center',
    width: '78%',
    margin: 6,
    marginLeft: 44,
    padding: 4,
    borderRadius: 6
  },
  viewButtonText: {
    letterSpacing: 2,
    fontSize: FontSize.MEDIUM,
    color: Color.GRAY.GRAY95,
    fontWeight: 'bold'
  },
  scrollToTop: {
    position: 'absolute',
    bottom: 44,
    right: 0
  },
  totalProdCountText: {
    alignItems: 'center',
    marginBottom: 8
  }
})
