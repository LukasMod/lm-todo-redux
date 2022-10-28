import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native'
import {ITodo} from '../types/Todo'
import TodoListItem from '../components/TodoListItem'
import {finishTodo, getTodos} from '../services/TodoApi'
import {colors} from '../theme/colors'
// import data from '../../db.json'

// const todos = data.todos as ITodo[]

const HomeScreen = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [loading, setLoading] = useState(false)

  const getNewTodos = async () => {
    setLoading(true)
    const newTodos = await getTodos()
    setLoading(false)

    if (typeof newTodos !== 'string') {
      setTodos(newTodos)
    }
  }

  useEffect(() => {
    getNewTodos()
  }, [])

  const renderItem = ({item}: {item: ITodo}) => {
    const onPressEditItem = () => {
      console.log('item edit', item.id)
    }
    const onPressRemoveItem = async () => {
      console.log('item remove', item.id)
      await finishTodo(item.id)
    }

    return (
      <TodoListItem
        todo={item}
        onPressEdit={onPressEditItem}
        onPressRemove={onPressRemoveItem}
      />
    )
  }

  if (loading && !todos.length) {
    return <ActivityIndicator color={colors.primary} size="large" />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onRefresh={getNewTodos}
        refreshing={loading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  separator: {
    height: 10,
  },
  button: {backgroundColor: colors.white},
  buttonText: {color: colors.dark},
})

export default HomeScreen
