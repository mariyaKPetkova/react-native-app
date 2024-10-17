import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  ProductDetailsPage,
  ProductListingPage,
  Home,
  Help
} from '../../../screens'
import { PageNames, StackNavigation } from '../../../types/Navigation'

const Stack = createNativeStackNavigator()
const navigation = useNavigation<StackNavigation>()
export const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <MaterialIcon
            name='menu'
            size={26}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )
      }}>
      <Stack.Screen name={PageNames.HomePage} component={Home} />
      <Stack.Screen
        name={PageNames.ProductDetailsPage}
        component={ProductDetailsPage}
      />
      <Stack.Screen
        name={PageNames.ProductListingPage}
        component={ProductListingPage}
      />
      <Stack.Screen name={PageNames.Help} component={Help} />
    </Stack.Navigator>
  )
}
