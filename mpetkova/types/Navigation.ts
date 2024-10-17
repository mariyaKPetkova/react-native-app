import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NavigationProp } from '@react-navigation/native'

export enum PageNames {
  Home = 'Home',
  ProductListingPage = 'Product Listing Page',
  ProductDetailsPage = 'Product Details Page',
  AccountPage = 'Account Page',
  Account = 'Account',
  Cart = 'Cart',
  Tab = 'Tab',
  HomePage = 'Home Page',
  Help = 'Help',
  AccountInfo = 'Account Info',
  AccountForm = 'Account Form',
  OrderHistory = 'Order History'
}
export enum DrawerNames {
  Drawer = 'TabNav'
}

export type PageParams = {
  [PageNames.Home]: undefined
  [PageNames.ProductListingPage]: { category: string } | undefined
  [PageNames.ProductDetailsPage]: { id: string }
  [PageNames.Account]: undefined
  [PageNames.Cart]: undefined
  [PageNames.Tab]: undefined
  [PageNames.HomePage]: undefined
  [PageNames.Help]: undefined
  [PageNames.AccountInfo]: undefined
  [PageNames.AccountForm]: undefined
  [PageNames.OrderHistory]: undefined
}
export type DrawerParams = {
  [DrawerNames.Drawer]: undefined
}
export type StackNavigation = NavigationProp<PageParams>
export type PDPRouteProps = RouteProp<PageParams, PageNames.ProductDetailsPage>
export type PLPRouteProps = RouteProp<PageParams, PageNames.ProductListingPage>
export type NavigationPropType = CompositeNavigationProp<
  NativeStackNavigationProp<PageParams>,
  DrawerNavigationProp<PageParams>
>
