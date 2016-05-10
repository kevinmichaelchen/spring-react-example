import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  // TODO add Webpack hot module replacement for reducers
  // https://github.com/reactjs/redux/blob/master/examples/todomvc/store/configureStore.js

  return store
}