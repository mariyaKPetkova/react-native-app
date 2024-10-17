import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNav } from '../Tab/TabNav'
import { DrawerNames, DrawerParams } from '../../../types/Navigation'
import { CustomDrawerContent } from './CustomDrawerContent/CustomDrawerContent'
import { Color } from '../../../theme/Color'

const Drawer = createDrawerNavigator<DrawerParams>()

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Color.WHITE,
          width: 190
        },
        headerShown: false
      }}>
      <Drawer.Screen name={DrawerNames.Drawer} component={TabNav} />
    </Drawer.Navigator>
  )
}
