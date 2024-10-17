import React from 'react'
import ScreenContainer from '../../../../components/ScreenContainer/ScreenContainer'
import { TextView } from '../../../../components/TextView/TextView'
import { TOTAL_PRICE } from '../../../../consts/consts'
import { styles } from './OrderSummaryRow.styles'

export const OrderSummaryRow = ({
  param1,
  param2
}: {
  param1: string
  param2: string
}) => {
  return (
    <ScreenContainer style={styles.orderSummaryContainerRow}>
      <TextView text={param1} />
      <TextView
        text={param2}
        style={
          param1 === TOTAL_PRICE.toUpperCase() ? styles.totalAmountText : null
        }
      />
    </ScreenContainer>
  )
}
