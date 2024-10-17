import React, { useEffect, useState } from 'react'
import Bootsplash from 'react-native-bootsplash'
import messaging from '@react-native-firebase/messaging'
import firebase from '@react-native-firebase/app'
import { Provider } from 'react-redux'
import { RootPage } from './screens'
import Onboarding from './components/Onboarding/Onboarding'
import store from './store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import { FIREBASE_CONFIG } from './configs/configs'
import { ONBOARDING_COMPLETE } from './consts/consts'

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

function App(): JSX.Element {
  const [onboardingComplete, setOnboardingComplete] = useState<boolean | null>(
    null
  )
  const checkOnboarding = async () => {
    const complete = await AsyncStorage.getItem(ONBOARDING_COMPLETE)

    complete === null || complete === undefined
      ? setOnboardingComplete(false)
      : setOnboardingComplete(true)
  }

  useEffect(() => {
    setTimeout(() => {
      Bootsplash.hide()
    }, 1000)

    checkOnboarding()

    return messaging().onMessage(async remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage.notification?.title),
        JSON.stringify(remoteMessage.notification?.body)
      )
    })
  }, [])

  if (!onboardingComplete) {
    return <Onboarding onComplete={() => setOnboardingComplete(true)} />
  }

  return (
    <Provider store={store}>
      <RootPage />
    </Provider>
  )
}
export default App
