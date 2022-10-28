import React from 'react'

import Navigation from './src/navigation/Navigation'
import {Provider} from 'react-redux'
import store from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )

  store.getState().todos.data
}

export default App
