import React from 'react'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationPropType, PageNames } from '../../types/Navigation'
import { useAppSelector } from '../../store/hooks'
import { productVariants } from '../../store/productDetails/selectors'
import { TextView } from '../../components/TextView/TextView'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './Variants.styles'

export const Variants = () => {
  const variants = useAppSelector(productVariants)

  const navigation = useNavigation<NavigationPropType>()

  const navigateToProductDetailsPage = (id: string) =>
    navigation.navigate(PageNames.ProductDetailsPage, { id })

  return (
    <ScreenContainer style={styles.variantsContainer}>
      <TextView
        text={`${variants.length} colors`}
        style={styles.variantsText}
      />
      <ScrollView horizontal>
        {variants &&
          variants.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigateToProductDetailsPage(item.id)}>
                <Image
                  style={styles.imageVariants}
                  source={{ uri: item.imgUrl }}
                />
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </ScreenContainer>
  )
}
