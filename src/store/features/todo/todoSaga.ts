import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, select, takeLatest} from 'redux-saga/effects'
import {getTodos} from '../../../services/TodoApi'
import {ITodo} from '../../../types/Todo'
import {delay} from '../../../utils/delay'
import {assertIsError} from '../../../utils/errors'
import {todoActions} from './todoSlice'

// call - wykonuje asynchroniczne zapytania typu fetch
// put - odpowiednik dispatch
// select - pobieranie danych ze store

export function* fetchTodos() {
  try {
    yield put(todoActions.setPending(true))
    yield call(delay)
    const todosData: ITodo[] = yield call(getTodos)
    yield put(todoActions.setData(todosData))
  } catch (error) {
    assertIsError(error)
    yield put(todoActions.setError(error))
  } finally {
    yield put(todoActions.setPending(false))
  }
}

export default function* todosSaga() {
  yield takeLatest(todoActions.fetch.type, fetchTodos)
}
