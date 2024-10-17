import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PageNames } from '../../../types/Navigation'
import { AccountInfo } from '../../../screens/Account/AccountInfo/AccountInfo'
import { Account, OrderHistory } from '../../../screens'
import { AccountForm } from '../../../screens/Account/AccountForm/AccountForm'

const Stack = createNativeStackNavigator()
export const StackNavAccount = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PageNames.AccountPage} component={Account} />
      <Stack.Screen name={PageNames.AccountInfo} component={AccountInfo} />
      <Stack.Screen name={PageNames.AccountForm} component={AccountForm} />
      <Stack.Screen name={PageNames.OrderHistory} component={OrderHistory} />
    </Stack.Navigator>
  )
}
