import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Keychain from 'react-native-keychain'
import { Linking, TouchableOpacity } from 'react-native'
import { styles } from './AccountInfo.styles'
import { TextView } from '../../../components/TextView/TextView'
import ScreenContainer from '../../../components/ScreenContainer/ScreenContainer'
import {
  APP_SETTINGS,
  GREETING,
  LOG_OUT_BTN,
  ORDER_HISTORY,
  USERNAME
} from '../../../consts/consts'
import { PageNames, StackNavigation } from '../../../types/Navigation'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { user } from '../../../store/account/selectors'
import { accountActions } from '../../../store/account/slice'
import LinearGradient from 'react-native-linear-gradient'
import { LightGrayGradient } from '../../../theme/Color'
import { clearCookies } from '../../../utils/cookies'

export const AccountInfo = () => {
  const navigation = useNavigation<StackNavigation>()
  const userData = useAppSelector(user)
  const dispatch = useAppDispatch()

  const openAppSettings = () => {
    Linking.openSettings()
  }

  const navigateToLoginForm = () => {
    navigation.navigate(PageNames.AccountForm)
  }
  const removeUserData = async () => {
    await dispatch(accountActions.logout())
    await AsyncStorage.clear()
    await Keychain.resetGenericPassword()
    await clearCookies()
    navigateToLoginForm()
  }
  const showOrderHistory = async () => {
    navigation.navigate(PageNames.OrderHistory)
  }
  return (
    <ScreenContainer style={styles.accountContainer}>
      <ScreenContainer style={styles.textContainer}>
        <TextView
          style={styles.text}
          text={`${GREETING}, ${userData.lastname}`}
        />
        <TextView
          style={styles.text}
          text={`${USERNAME}: ${userData.username}`}
        />
      </ScreenContainer>
      <LinearGradient colors={LightGrayGradient} style={styles.button}>
        <TouchableOpacity onPress={removeUserData}>
          <TextView text={LOG_OUT_BTN} style={styles.buttonText} />
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={LightGrayGradient} style={styles.button}>
        <TouchableOpacity onPress={showOrderHistory}>
          <TextView text={ORDER_HISTORY} style={styles.buttonText} />
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={LightGrayGradient} style={styles.button}>
        <TouchableOpacity onPress={openAppSettings}>
          <TextView text={APP_SETTINGS} style={styles.buttonText} />
        </TouchableOpacity>
      </LinearGradient>
    </ScreenContainer>
  )
}
