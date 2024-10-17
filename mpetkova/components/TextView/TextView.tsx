import React from 'react'
import { Text, TextProps } from 'react-native'
import { styles } from './TextView.styles'

type Props = {
  text: string | number
} & TextProps

export const TextView = ({ text, style }: Props) => {
  return <Text style={[styles.text, style]}> {text}</Text>
}
