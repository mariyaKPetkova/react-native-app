import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  fullscreen: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height
  }
})
