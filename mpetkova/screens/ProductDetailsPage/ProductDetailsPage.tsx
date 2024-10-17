import React, { useEffect, useState, useRef } from 'react'
import { Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useRoute } from '@react-navigation/native'
import Carousel from 'react-native-reanimated-carousel'
import { PDPRouteProps } from '../../types/Navigation'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  isProductLoading,
  productDetails,
  productDetailsResponse,
  productError,
  productVariants,
  selectedSize
} from '../../store/productDetails/selectors'
import { getProductDetails } from '../../store/productDetails/actions'
import { TextView } from '../../components/TextView/TextView'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { Spinner } from '../../components/Spinner/Spinner'
import { Error } from '../../components/Error/Error'
import { Color, DarkGrayGradient } from '../../theme/Color'
import { styles } from './ProductDetailsPage.styles'
import {
  ProductVariants,
  VariationAttributes,
  VariationAttributesValues
} from '../../types/ProductDetails'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-virtualized-view'
import { cartActions } from '../../store/cart/slice'
import { Variants } from '../../components/Variants/Variants'
import { Sizes } from '../../components/Sizes/Sizes'
import { productDetailsActions } from '../../store/productDetails/slice'
import {
  ADD_BTN,
  COLOR_ATTR,
  ERROR_MESSAGE,
  ERROR_SIZE_MESSAGE,
  PRODUCT_DETAILS_PARAMS,
  PRODUCT_VARIANTS_PARAMS
} from '../../consts/consts'

export const ProductDetailsPage = () => {
  const route = useRoute<PDPRouteProps>()
  const dispatch = useAppDispatch()
  const product = useAppSelector(productDetails)
  const error = useAppSelector(productError)
  const isLoading = useAppSelector(isProductLoading)
  const detailsResponse = useAppSelector(productDetailsResponse)
  const variants = useAppSelector(productVariants)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const selectedProductSize = useAppSelector(selectedSize)

  const windowWidth = Dimensions.get('window').width * 0.8
  const windowHeight = Dimensions.get('window').height * 0.4
  const carouselRef = useRef<any>()

  const updateSelectedIndex = (index: number) => {
    carouselRef.current?.scrollTo({ index })
    setSelectedIndex(index)
  }

  const addProductToCart = () => {
    if (selectedProductSize.size) {
      dispatch(
        cartActions.addItemToCart({
          product,
          selectedSize: selectedProductSize.size
        })
      )
      dispatch(
        productDetailsActions.setSize({ size: null, index: null, error: false })
      )
    } else {
      dispatch(
        productDetailsActions.setSize({ size: null, index: null, error: true })
      )
    }
  }

  useEffect(() => {
    const asyncUseEffect = async () => {
      const productId = route.params.id
      dispatch(productDetailsActions.isProductDetailsLoading(true))
      updateSelectedIndex(0)
      try {
        await dispatch(getProductDetails(productId, PRODUCT_DETAILS_PARAMS))
      } catch (err) {
        dispatch(productDetailsActions.productDetailsError(true))
      }
      dispatch(productDetailsActions.isProductDetailsLoading(false))
    }
    asyncUseEffect()
  }, [route.params.id])

  useEffect(() => {
    const asyncUseEffect = async () => {
      const variationAttributes = detailsResponse?.variation_attributes?.find(
        (attr: VariationAttributes) => attr.id === COLOR_ATTR
      )
      variationAttributes?.values?.forEach(
        async (color: VariationAttributesValues) => {
          const variant = detailsResponse?.variants?.find(
            (variant: ProductVariants) =>
              variant.variation_values?.color === color.value
          )
          if (variant?.product_id) {
            try {
              dispatch(
                getProductDetails(variant.product_id, PRODUCT_VARIANTS_PARAMS)
              )
            } catch (err) {
              throw Error
            }
          }
        }
      )
    }
    asyncUseEffect()
  }, [product])

  return (
    <ScrollView style={styles.container}>
      {!product && error && <Error errorMessage={ERROR_MESSAGE} />}
      {isLoading && (
        <Spinner color={Color.BLACK} size={46} fullscreen={false} />
      )}
      {product && (
        <ScreenContainer style={styles.header}>
          <TextView text={product.name} />
          <TextView text={`£ ${product.price}`} />
        </ScreenContainer>
      )}
      {product.imgUrl && (
        <ScreenContainer>
          <Carousel
            ref={carouselRef}
            style={styles.carousel}
            data={product.imgUrl}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
            loop
            width={windowWidth}
            height={windowHeight}
            scrollAnimationDuration={1000}
            onSnapToItem={i => setSelectedIndex(i)}
          />
          <TextView
            style={styles.imageCount}
            text={`${(selectedIndex + 1).toString()} / ${
              product.imgUrl.length
            } `}
          />
          <ScreenContainer style={styles.circle}>
            {product.imgUrl?.map((_, i) => (
              <Icon
                name='circle'
                key={i}
                style={
                  i === selectedIndex ? styles.selected : styles.notSelected
                }
                onPress={() => updateSelectedIndex(i)}
              />
            ))}
          </ScreenContainer>
        </ScreenContainer>
      )}
      {product && (
        <TextView style={styles.description} text={product.description} />
      )}
      {variants && <Variants />}
      {product.sizes && <Sizes />}
      {selectedProductSize.error && (
        <TextView style={styles.errorText} text={ERROR_SIZE_MESSAGE} />
      )}
      {product && (
        <LinearGradient style={styles.addButton} colors={DarkGrayGradient}>
          <TouchableOpacity onPress={addProductToCart}>
            <TextView text={ADD_BTN} style={styles.addButtonText} />
          </TouchableOpacity>
        </LinearGradient>
      )}
    </ScrollView>
  )
}
