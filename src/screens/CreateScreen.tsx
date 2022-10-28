import React, {useState} from 'react'
import {ActivityIndicator, StyleSheet, TextInput, View} from 'react-native'
import Button from '../components/Button'
import {createTodo} from '../services/TodoApi'
import {colors} from '../theme/colors'
import {ITodo} from '../types/Todo'

const CreateScreen = () => {
  const [text, setText] = useState('Test todo')
  const [loading, setLoading] = useState(false)

  const onPressAdd = async () => {
    const newTodo: ITodo = {
      id: new Date().getTime(),
      title: text,
      date: new Date().toISOString(),
      done: false,
    }
    setLoading(true)
    await createTodo(newTodo)
    setLoading(false)

    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Type your message..."
      />
      <View style={styles.buttonsContainer}>
        {loading ? (
          <ActivityIndicator color={colors.primary} size="large" />
        ) : (
          <Button title="ADD TODO" onPress={onPressAdd} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: colors.white,
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: colors.gray3,
    borderWidth: StyleSheet.hairlineWidth,
  },
})

export default CreateScreen
