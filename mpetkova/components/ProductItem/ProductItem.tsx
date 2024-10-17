import React, { Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ScreenContainer from '../ScreenContainer/ScreenContainer'
import { TextView } from '../TextView/TextView'
import { styles } from './ProductItem.styles'

type ProductItemView = {
  title: string
  img: string
}
export const ProductItem = ({ title, img }: ProductItemView) => {
  return (
    <ScreenContainer style={styles.wrapper}>
      <TextView text={title} style={styles.text} />
      {img ? (
        <Image
          style={styles.image}
          source={{
            uri: img
          }}
        />
      ) : (
        <MaterialCommunityIcons name='image-off-outline' size={80} />
      )}
    </ScreenContainer>
  )
}
