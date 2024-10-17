import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'
import { FontSize } from '../../theme/FontSize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  textContainer: {
    position: 'absolute',
    left: 70,
    top: 180
  },
  btnContainer: {
    position: 'absolute',
    left: 90,
    top: 400
  },
  title: {
    alignSelf: 'center',
    fontSize: FontSize.EXTRA_LARGE,
    color: Color.RED,
    margin: 1,
    fontWeight: '500',
    marginBottom: 10
  },
  secondTitle: {
    alignSelf: 'center',
    fontSize: FontSize.LARGE,
    margin: 1,
    fontWeight: '400',
    marginBottom: 10
  },
  text: {
    alignSelf: 'center',
    fontSize: FontSize.NORMAL,
    margin: 10
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  withoutNotifications: {
    marginTop: 10,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    fontSize: FontSize.SMALL
  }
})
