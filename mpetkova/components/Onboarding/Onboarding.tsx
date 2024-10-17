import React from 'react'
import { Button, ImageBackground, Pressable } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform, Alert } from 'react-native'
import { styles } from './Onboarding.styles'
import ScreenContainer from '../ScreenContainer/ScreenContainer'
import { TextView } from '../TextView/TextView'
import {
  ACCESS_TO_SALES,
  LATEST_UPDATES,
  NOTIFICATIONS,
  NOTIFICATIONS_PERMISSION,
  OFFERS,
  ONBOARDING_COMPLETE,
  OPT_INTO_NOTIFICATIONS,
  WITHOUT_NOTIFICATIONS
} from '../../consts/consts'
import { Color } from '../../theme/Color'

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const setOnboardingComplete = async () => {
    await AsyncStorage.setItem(ONBOARDING_COMPLETE, 'true')
    onComplete()
  }

  const requestPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
      if (enabled) {
        Alert.alert(NOTIFICATIONS_PERMISSION)
      }
    }
    setOnboardingComplete()
  }

  const handleOptOut = async () => {
    await messaging().deleteToken()
    setOnboardingComplete()
  }

  return (
    <ScreenContainer style={styles.container}>
      <ImageBackground
        source={require('../../assets/notifications-background.png')}
        resizeMode='cover'
        style={styles.image}></ImageBackground>
      <ScreenContainer style={styles.textContainer}>
        <TextView style={styles.title} text={NOTIFICATIONS} />
        <TextView style={styles.secondTitle} text={LATEST_UPDATES} />
        <TextView style={styles.text} text={ACCESS_TO_SALES} />
        <TextView style={styles.text} text={OFFERS} />
      </ScreenContainer>
      <ScreenContainer style={styles.btnContainer}>
        <Button
          title={OPT_INTO_NOTIFICATIONS}
          onPress={requestPermission}
          color={Color.RED}
        />
        <Pressable onPress={handleOptOut}>
          <TextView
            text={WITHOUT_NOTIFICATIONS}
            style={styles.withoutNotifications}
          />
        </Pressable>
      </ScreenContainer>
    </ScreenContainer>
  )
}

export default Onboarding
