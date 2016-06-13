import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducer'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    initialState)

  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }
  */

  store.subscribe(() =>
    console.log('store', store.getState().toJSON())
  )

  return store
}
