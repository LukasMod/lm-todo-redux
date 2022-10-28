import {configureStore, MiddlewareArray, Middleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

// import logger from 'redux-logger'
import {rootReducer} from './rootReducer'

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
  // middlewares.push(logger)   // extra logger to log prev state, action and next state in console
}

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(middlewares),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
