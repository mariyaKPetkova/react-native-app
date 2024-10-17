import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  productDetails,
  selectedSize
} from '../../store/productDetails/selectors'
import { TextView } from '../../components/TextView/TextView'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { productDetailsActions } from '../../store/productDetails/slice'
import { styles } from './Sizes.styles'
import { SELECT_SIZE_MESSAGE } from '../../consts/consts'

export const Sizes = () => {
  const dispatch = useAppDispatch()
  const product = useAppSelector(productDetails)
  const sizeState = useAppSelector(selectedSize)
  return (
    <ScreenContainer style={styles.sizesContainer}>
      <TextView text={SELECT_SIZE_MESSAGE} style={styles.sizeText} />
      <FlatList
        data={product.sizes}
        numColumns={6}
        renderItem={({ item, index }: { item: string; index: number }) => {
          return (
            <TouchableOpacity
              key={index}
              style={
                index === sizeState.index
                  ? styles.selectedSize
                  : styles.notSelectedSize
              }
              onPress={() =>
                dispatch(
                  productDetailsActions.setSize({
                    size: item,
                    index,
                    error: false
                  })
                )
              }>
              <TextView style={styles.sizeText} text={item} />
            </TouchableOpacity>
          )
        }}
        keyExtractor={({ item }: { item: string }) => item}
      />
    </ScreenContainer>
  )
}
