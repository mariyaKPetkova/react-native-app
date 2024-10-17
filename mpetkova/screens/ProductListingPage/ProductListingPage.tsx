import React, { useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity, TextInput, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './ProductListingPage.styles'
import { ProductItem } from '../../components/ProductItem/ProductItem'
import {
  NavigationPropType,
  PageNames,
  PLPRouteProps
} from '../../types/Navigation'
import { Spinner } from '../../components/Spinner/Spinner'
import { Error } from '../../components/Error/Error'
import {
  getMoreProducts,
  getProductList,
  removeProductList
} from '../../store/productList/actions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  isProductsLoading,
  productList,
  productsError,
  stratNumber,
  totalProductCount
} from '../../store/productList/selectors'
import { TextView } from '../../components/TextView/TextView'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { Color, DarkGrayGradient, LightGrayGradient } from '../../theme/Color'
import { productListActions } from '../../store/productList/slice'
import { ERROR_MESSAGE, SEARCH_TEXT, VIEW_BTN } from '../../consts/consts'

export const ProductListingPage = () => {
  const [inputText, onInputText] = useState<string>('')
  const navigation = useNavigation<NavigationPropType>()
  const dispatch = useAppDispatch()
  const products = useAppSelector(productList)
  const error = useAppSelector(productsError)
  const isLoading = useAppSelector(isProductsLoading)
  const startNum = useAppSelector(stratNumber)
  const totalProdCount = useAppSelector(totalProductCount)
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const listRef = useRef<any>(null)
  const PRODUCT_COUNT = 5
  const route = useRoute<PLPRouteProps>()
  const { category = '' } = route?.params ?? {}

  useEffect(() => {
    dispatch(removeProductList())
  }, [])

  useEffect(() => {
    onInputText(category)
    dispatch(getProductList(category, startNum, PRODUCT_COUNT))
  }, [category])

  const navigateToProductDetailsPage = (id: string) =>
    navigation.navigate(PageNames.ProductDetailsPage, { id })

  const searchProducts = async () => {
    dispatch(productListActions.isProductListLoading(true))
    try {
      await dispatch(getProductList(inputText, startNum, PRODUCT_COUNT))
    } catch (err) {
      dispatch(productListActions.productListError(true))
    }
    dispatch(productListActions.isProductListLoading(false))
  }

  const onEndReached = async () => {
    if (startNum + 5 >= totalProdCount) {
      setIsEnd(true)
      return
    }
    if (!isEnd)
      dispatch(getMoreProducts(inputText, startNum + 5, PRODUCT_COUNT))
  }

  return (
    <ScreenContainer style={styles.wrapper}>
      <ScreenContainer style={styles.searchView}>
        <TextInput
          style={styles.input}
          placeholder={SEARCH_TEXT}
          onChangeText={onInputText}
          value={inputText}
        />
        <LinearGradient style={styles.searchButton} colors={LightGrayGradient}>
          <TouchableOpacity onPress={searchProducts}>
            <FontAwesome style={styles.inputIcon} name={SEARCH_TEXT} />
          </TouchableOpacity>
        </LinearGradient>
      </ScreenContainer>
      {products && (
        <ScreenContainer style={styles.totalProdCountText}>
          <TextView text={`${totalProdCount} results`} />
        </ScreenContainer>
      )}
      {products ? (
        <FlatList
          ref={listRef}
          data={products}
          renderItem={({ item }) => (
            <ScreenContainer style={styles.productListView}>
              <ProductItem title={item?.product_name} img={item.image.link} />
              <LinearGradient
                style={styles.viewButton}
                colors={DarkGrayGradient}>
                <TouchableOpacity
                  onPress={() => navigateToProductDetailsPage(item.product_id)}>
                  <TextView text={VIEW_BTN} style={styles.viewButtonText} />
                </TouchableOpacity>
              </LinearGradient>
            </ScreenContainer>
          )}
          keyExtractor={item => item.product_id + item.product_name}
          onEndReached={() => onEndReached()}
          onEndReachedThreshold={0.01}
        />
      ) : null}
      {isEnd && (
        <MaterialCommunityIcons
          name='arrow-up-bold-box'
          size={100}
          onPress={() => {
            listRef?.current?.scrollToOffset({
              offset: 0,
              animated: true
            })
          }}
          style={styles.scrollToTop}
        />
      )}

      {!products && error && <Error errorMessage={ERROR_MESSAGE} />}
      {isLoading && (
        <Spinner color={Color.BLACK} size={46} fullscreen={false} />
      )}
    </ScreenContainer>
  )
}
