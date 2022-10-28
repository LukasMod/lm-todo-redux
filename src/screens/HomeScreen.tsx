import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native'
import {ITodo} from '../types/Todo'
import TodoListItem from '../components/TodoListItem'
import {finishTodo, getTodos} from '../services/TodoApi'
import {colors} from '../theme/colors'
import {useAppDispatch, useAppSelector} from '../store/hooks'
import {todoActions} from '../store/features/todo/todoSlice'

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const {data: todos, isPending: loading} = useAppSelector(state => state.todos)

  useEffect(() => {
    dispatch(todoActions.fetch())
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
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onRefresh={() => dispatch(todoActions.fetch())}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 10,
  },
  button: {backgroundColor: colors.white},
  buttonText: {color: colors.dark},
})

export default HomeScreen
