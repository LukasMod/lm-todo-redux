import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction, createAction} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {ITodo} from '../../../types/Todo'

interface TodoState {
  data: ITodo[]
  isPending: boolean
  error: string | null
}

const initialState: TodoState = {
  data: [],
  isPending: false,
  error: null,
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setPending: (state, {payload}: PayloadAction<boolean>) => {
      state.isPending = payload
    },
    setData: (state, {payload}: PayloadAction<ITodo[]>) => {
      state.data = payload
    },
    setError: (state, {payload}: PayloadAction<string>) => {
      state.error = payload
    },
  },
})

const todoActions = {
  fetch: createAction('todos/fetch'), // to co tu się dzieje to obsługujemy sagą
  setData: createAction<ITodo[]>('todos/setData'),
  setError: createAction<string>('todos/setError'),
  setPending: createAction<boolean>('todos/setPending'),
}

export {todoActions}

export default todoSlice.reducer
