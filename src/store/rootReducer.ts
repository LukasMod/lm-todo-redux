import {combineReducers} from '@reduxjs/toolkit'

import todosReducer from './features/todo/todoSlice'

export const rootReducer = combineReducers({
  todos: todosReducer,
})
