import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { ProductItem } from '../../components/ProductItem/ProductItem'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { TextView } from '../../components/TextView/TextView'
import {
  DECREASE_SYMBOL,
  GO_TO_PLP,
  INCREASE_SYMBOL,
  POUND_SYMBOL,
  PRICE,
  QUANTITY,
  REMOVE_SYMBOL,
  SIZE_TEXT,
  TOTAL_PRICE
} from '../../consts/consts'
import { showCart } from '../../store/cart/actions'
import { addedProducts, totalQuantity } from '../../store/cart/selectors'
import { cartActions } from '../../store/cart/slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { CustomProductCart } from '../../types/Cart'
import { NavigationPropType, PageNames } from '../../types/Navigation'
import { styles } from './Cart.styles'
import { OrderSummary } from './OrderSummary/OrderSummary'
import { ScrollView } from 'react-native-virtualized-view'

export const Cart = () => {
  const navigation = useNavigation<NavigationPropType>()
  const dispatch = useAppDispatch()
  const items = useAppSelector(addedProducts)
  const totalProductsQuantity = useAppSelector(totalQuantity)
  const { height, width } = useWindowDimensions()
  const isHorizontal = width > height

  const navigateToProductListingPage = () =>
    navigation.navigate(PageNames.ProductListingPage)

  useEffect(() => {
    dispatch(showCart(items))
  }, [items, dispatch])

  const addItemHandler = (item: CustomProductCart) => {
    dispatch(cartActions.addItem(item))
  }
  const removeItemHandler = (item: CustomProductCart) => {
    dispatch(cartActions.removeItem(item))
  }
  const removeProductHandler = (item: CustomProductCart) => {
    dispatch(cartActions.removeProductFromCart(item))
  }

  return (
    <ScrollView>
      <ScreenContainer style={isHorizontal && styles.containerHorizontal}>
        {items && (
          <FlatList
            data={items}
            renderItem={({ item }: { item: CustomProductCart }) => (
              <ScreenContainer style={styles.itemContainer}>
                <ScreenContainer style={styles.productContainer}>
                  <ProductItem title={item?.name} img={item.imgUrl[0]} />
                </ScreenContainer>
                <ScreenContainer style={styles.detailsContainer}>
                  <TouchableOpacity onPress={() => removeProductHandler(item)}>
                    <TextView text={REMOVE_SYMBOL} style={styles.removeBtn} />
                  </TouchableOpacity>
                  <TextView text={`${PRICE} ${POUND_SYMBOL}${item?.price}`} />
                  <TextView text={`${SIZE_TEXT}: ${item?.size}`} />
                  <TextView
                    style={styles.quantityText}
                    text={`${QUANTITY} ${item?.quantity}`}
                  />
                  <ScreenContainer style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => removeItemHandler(item)}>
                      <TextView
                        text={DECREASE_SYMBOL}
                        style={styles.quantityUpdateBtn}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addItemHandler(item)}>
                      <TextView
                        text={INCREASE_SYMBOL}
                        style={styles.quantityUpdateBtn}
                      />
                    </TouchableOpacity>
                  </ScreenContainer>
                  <ScreenContainer style={styles.priceContainer}>
                    <TextView text={TOTAL_PRICE} />
                    <TextView
                      style={styles.priceText}
                      text={`${POUND_SYMBOL} ${item?.totalPrice.toFixed(2)}`}
                    />
                  </ScreenContainer>
                </ScreenContainer>
              </ScreenContainer>
            )}
            keyExtractor={item => item.id}
          />
        )}
        {totalProductsQuantity ? (
          <OrderSummary />
        ) : (
          <TouchableOpacity onPress={navigateToProductListingPage}>
            <TextView text={GO_TO_PLP} style={styles.goToPLPBtn} />
          </TouchableOpacity>
        )}
      </ScreenContainer>
    </ScrollView>
  )
}
