import React from 'react'
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native'
import {colors} from '../theme/colors'

interface IButton extends PressableProps {
  title: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Button = ({title, onPress, style, textStyle, ...props}: IButton) => {
  return (
    <Pressable
      {...props}
      style={[styles.container, style]}
      onPress={onPress}
      android_ripple={{color: colors.primary}}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryDark,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  text: {
    color: colors.white,
  },
})
