import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Cart } from '../../../screens'
import { totalQuantity } from '../../../store/cart/selectors'
import { useAppSelector } from '../../../store/hooks'
import { Color } from '../../../theme/Color'
import { PageNames } from '../../../types/Navigation'
import { StackNav } from '../Stack/StackNav'
import { StackNavAccount } from '../Stack/StackNavAccount'
const Tab = createBottomTabNavigator()

export const TabNav = () => {
  const badgeCount = useAppSelector(totalQuantity).toString()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return (
            <MaterialCommunityIcons
              name={route.name.toLowerCase() ?? ''}
              size={size}
              color={color}
            />
          )
        },
        tabBarActiveTintColor: Color.BLACK,
        tabBarInactiveTintColor: Color.GRAY.GRAY,
        headerShown: false,
        tabBarBadge:
          route.name === PageNames.Cart && badgeCount !== '0'
            ? badgeCount
            : undefined,
        tabBarItemStyle: { borderRadius: 6, padding: 4 },
        tabBarStyle: {
          backgroundColor: Color.GRAY.GRAY95,
          borderRadius: 6,
          margin: 8
        },
        tabBarBadgeStyle: {
          color: Color.WHITE,
          backgroundColor: Color.RED,
          fontWeight: 'bold'
        }
      })}>
      <Tab.Screen name={PageNames.Home} component={StackNav} />
      <Tab.Screen name={PageNames.Account} component={StackNavAccount} />
      <Tab.Screen name={PageNames.Cart} component={Cart} />
    </Tab.Navigator>
  )
}
