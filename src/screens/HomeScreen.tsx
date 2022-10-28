import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import data from '../../db.json'
import {ITodo} from '../types/Todo'
import TodoListItem from '../components/TodoListItem'

const todos = data.todos as ITodo[]

const HomeScreen = () => {
  const renderItem = ({item}: {item: ITodo}) => {
    const onPressEditItem = () => {
      console.log('item edit', item.id)
    }
    const onPressRemoveItem = () => {
      console.log('item remove', item.id)
    }

    return (
      <TodoListItem
        todo={item}
        onPressEdit={onPressEditItem}
        onPressRemove={onPressRemoveItem}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
})

export default HomeScreen
