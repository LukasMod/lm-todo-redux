import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../theme/colors';
import {ITodo} from '../types/Todo';
import Button from './Button';
import {format} from 'date-fns';

interface ITodoListItem {
  todo: ITodo;
  onPressRemove: () => void;
  onPressEdit: () => void;
}

const TodoListItem = ({todo, onPressRemove, onPressEdit}: ITodoListItem) => {
  return (
    <View style={[styles.container, todo.done && styles.containerDone]}>
      <Text style={[styles.textTitle, todo.done && styles.textDone]}>
        {todo.title}
      </Text>
      <Text style={[styles.textDate, todo.done && styles.textDone]}>
        {format(new Date(todo.date), 'HH:mm MM/dd/yyyy')}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="EDIT"
          onPress={onPressEdit}
          disabled={todo.done}
          style={todo.done && styles.buttonDone}
        />
        <Button
          title="DONE"
          onPress={onPressRemove}
          disabled={todo.done}
          style={todo.done && styles.buttonDone}
        />
      </View>
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  containerDone: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.gray3,
    backgroundColor: colors.gray1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textTitle: {
    color: colors.dark,
    fontSize: 16,
  },
  textDate: {
    color: colors.dark,
    fontSize: 12,
  },
  textDone: {
    color: colors.gray4,
  },
  buttonDone: {
    color: colors.dark,
    backgroundColor: colors.gray2,
  },
});
