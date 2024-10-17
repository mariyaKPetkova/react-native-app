import React, { useEffect } from 'react'
import { Linking } from 'react-native'
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import { DrawerNav } from '../../components/Navigation/Drawer/DrawerNav'
import { PageNames } from '../../types/Navigation'

type LinkingEvent = {
  url: string
}

export const RootPage = () => {
  const navigationRef = useNavigationContainerRef()
  const handleDeepLink = (event: LinkingEvent) => {
    const url = event.url
    if (
      url.startsWith('myapp://ProductDetailsPage?') &&
      url.indexOf('ProductDetailsPage') !== -1
    ) {
      const id = url.split('?')[1]
      navigationRef.navigate(PageNames.ProductDetailsPage, { id })
    }
  }
  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink)
  }, [])
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNav />
    </NavigationContainer>
  )
}
