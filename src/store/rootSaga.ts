import {all, fork} from 'redux-saga/effects'

import todoSagas from './features/todo/todoSaga'

const combinedSagas = [fork(todoSagas)]

export default function* rootSaga() {
  yield all(combinedSagas)
}
