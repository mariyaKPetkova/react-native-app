import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { NavigationPropType, PageNames } from '../../../../types/Navigation'
import { styles } from './CustomDrawerContent.styles'
import { TextView } from '../../../TextView/TextView'
import {
  GREETING,
  HELP,
  LOG_IN_BTN,
  MEN,
  WOMEN
} from '../../../../consts/consts'
import { useAppSelector } from '../../../../store/hooks'
import { isLoggedIn, user } from '../../../../store/account/selectors'

export const CustomDrawerContent = () => {
  const userData = useAppSelector(user)
  const isLoggedUser = useAppSelector(isLoggedIn)
  const navigation = useNavigation<NavigationPropType>()

  const navigateToLogin = () => navigation.navigate(PageNames.AccountForm)

  const navigateToCategory = (category: string) =>
    navigation.navigate(PageNames.ProductListingPage, { category })

  const navigateToHelpPage = () => navigation.navigate(PageNames.Help)

  return (
    <DrawerContentScrollView>
      {isLoggedUser ? (
        <TextView
          text={`${GREETING}, ${userData.username}`}
          style={styles.text}
        />
      ) : (
        <DrawerItem label={LOG_IN_BTN} onPress={() => navigateToLogin()} />
      )}
      <DrawerItem label={WOMEN} onPress={() => navigateToCategory(WOMEN)} />
      <DrawerItem label={MEN} onPress={() => navigateToCategory(MEN)} />
      <DrawerItem label={HELP} onPress={() => navigateToHelpPage()} />
    </DrawerContentScrollView>
  )
}
