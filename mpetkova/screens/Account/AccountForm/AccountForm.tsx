import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from './AccountForm.styles'
import { TextView } from '../../../components/TextView/TextView'
import ScreenContainer from '../../../components/ScreenContainer/ScreenContainer'
import { LightGrayGradient } from '../../../theme/Color'
import {
  GO_TO_LOGIN_FORM,
  GO_TO_REGISTRATION_FORM,
  LASTNAME,
  LOG_IN_BTN,
  PASSWORD,
  REGISTER_BTN,
  USERNAME
} from '../../../consts/consts'
import { PageNames, StackNavigation } from '../../../types/Navigation'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { error, isLoggedIn } from '../../../store/account/selectors'
import { login, register } from '../../../store/account/actions'

type InputField = {
  username: string
  lastname: string
  password: string
}

export const AccountForm = () => {
  const navigation = useNavigation<StackNavigation>()
  const dispatch = useAppDispatch()
  const isLoggedUser = useAppSelector(isLoggedIn)
  const loginOrRegisterError = useAppSelector(error)
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true)
  const [input, setInput] = useState<InputField>({
    username: '',
    lastname: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedUser) {
      navigateToAccountInfo()
    }
  }, [isLoggedUser])

  const navigateToLoginForm = () => {
    setIsLoginForm(true)
  }
  const navigateToRegistrationForm = () => {
    setIsLoginForm(false)
  }
  const navigateToAccountInfo = () => {
    navigation.navigate(PageNames.AccountInfo)
  }

  const setUserData = async () => {
    if (isLoginForm) {
      const { username, password } = input
      dispatch(login(username, password))
    } else {
      const { username, lastname, password } = input
      dispatch(register(username, lastname, password))
    }
  }

  const onChangeInputHandler = (field: string, value: string) => {
    setInput({ ...input, [field]: value })
  }

  return (
    <ScreenContainer style={styles.accountContainer}>
      <MaterialCommunityIcons
        style={styles.accountIcon}
        name='account-circle'
        size={200}
      />
      <ScreenContainer style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name='envelope' />
        <TextInput
          style={styles.inputField}
          placeholder={USERNAME}
          onChangeText={value => onChangeInputHandler(USERNAME, value)}
          value={input.username}
        />
      </ScreenContainer>
      {!isLoginForm && (
        <ScreenContainer style={styles.inputContainer}>
          <FontAwesome style={styles.inputIcon} name='user' />
          <TextInput
            style={styles.inputField}
            placeholder={LASTNAME}
            onChangeText={value => onChangeInputHandler(LASTNAME, value)}
            value={input.lastname}
          />
        </ScreenContainer>
      )}
      <ScreenContainer style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name='key' />
        <TextInput
          style={styles.inputField}
          placeholder={PASSWORD}
          onChangeText={value => onChangeInputHandler(PASSWORD, value)}
          value={input.password}
          secureTextEntry
        />
      </ScreenContainer>
      {loginOrRegisterError && (
        <TextView style={styles.errorText} text={loginOrRegisterError} />
      )}
      <LinearGradient colors={LightGrayGradient} style={styles.button}>
        <TouchableOpacity style={{ width: '100%' }} onPress={setUserData}>
          <TextView
            text={isLoginForm ? LOG_IN_BTN : REGISTER_BTN}
            style={styles.buttonText}
          />
        </TouchableOpacity>
      </LinearGradient>
      {isLoginForm ? (
        <TouchableOpacity onPress={navigateToRegistrationForm}>
          <TextView
            text={GO_TO_REGISTRATION_FORM}
            style={styles.redirectText}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={navigateToLoginForm}>
          <TextView text={GO_TO_LOGIN_FORM} style={styles.redirectText} />
        </TouchableOpacity>
      )}
    </ScreenContainer>
  )
}
