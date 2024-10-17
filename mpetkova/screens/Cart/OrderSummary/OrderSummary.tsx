import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenContainer from '../../../components/ScreenContainer/ScreenContainer'
import { TextView } from '../../../components/TextView/TextView'
import {
  CHECKOUT,
  DELIVERY,
  FREE,
  ITEMS,
  OR,
  ORDER_SUMMARY,
  PAYMENT_METHODS,
  POUND_SYMBOL,
  TOTAL_PRICE
} from '../../../consts/consts'
import { totalAmount, totalQuantity } from '../../../store/cart/selectors'
import { useAppSelector } from '../../../store/hooks'
import PayPal from '../../../assets/paypal.svg'
import Visa from '../../../assets/visa.svg'
import Maestro from '../../../assets/maestro.svg'
import Citi from '../../../assets/citi.svg'
import { styles } from './OrderSummary.styles'
import { OrderSummaryRow } from './OrderSummaryRow/OrderSummaryRow'

export const OrderSummary = () => {
  const totalProductsAmount = useAppSelector(totalAmount)
  const totalProductsQuantity = useAppSelector(totalQuantity)
  const orderRows = [
    [
      `${totalProductsQuantity} ${ITEMS}`,
      `${POUND_SYMBOL}${totalProductsAmount.toFixed(2)}`
    ],
    [DELIVERY, FREE],
    [
      TOTAL_PRICE.toUpperCase(),
      `${POUND_SYMBOL}${totalProductsAmount.toFixed(2)}`
    ]
  ]

  return (
    <ScreenContainer>
      <TextView style={styles.totalAmountText} text={ORDER_SUMMARY} />
      {orderRows.map((row,index )=> (
        <OrderSummaryRow key={index} param1={row[0]} param2={row[1]} />
      ))}
      <TouchableOpacity>
        <TextView text={CHECKOUT} style={styles.checkoutBtn} />
      </TouchableOpacity>
      <TextView text={OR} style={styles.orText} />
      <TouchableOpacity>
        <PayPal style={styles.PayPalBtn} />
      </TouchableOpacity>
      <TextView text={PAYMENT_METHODS} style={styles.paymentText} />
      <ScreenContainer style={styles.paymentMethods}>
        <Visa width={80} height={48} />
        <PayPal width={80} height={48} />
        <Maestro width={80} height={48} />
        <Citi width={80} height={48} />
      </ScreenContainer>
    </ScreenContainer>
  )
}
