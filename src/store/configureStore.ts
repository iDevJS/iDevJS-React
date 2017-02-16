import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
} from 'redux'
import { fromJS, Map, Iterable } from 'immutable'
import thunk from 'redux-thunk'
import localForage from 'localforage'
import * as reduxLogger from 'redux-logger'
import * as promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'

const reduxPersist = require('redux-persist')
const { persistStore, autoRehydrate, getStoredState } = reduxPersist
const persistConfig = {
  store: localForage
}

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) {
    return state.toJS()
  } else {
    return state
  }
}

const logger = reduxLogger({
  stateTransformer
})

declare const __DEV__: boolean // from webpack
const environment: any = window || this

// function configureStore() {
//   /*
//     * get persist state stored in localForage
//     */
//   return getStoredState(persistConfig).then(persistState => {
//     return configure(persistState)
//   }).catch(err => {
//     console.log(err)
//   })
// }

function configureStore(initialState = Map()) {
  const enchancer = compose(
    applyMiddleware(..._getMiddleware()),
    __DEV__ && environment.devToolsExtension ?
      environment.devToolsExtension() :
      f => f)

  const store = createStore(
    rootReducer,
    initialState,
    enchancer
  )

  // persistStore(store, persistConfig, () => {
  //   console.log('rehydration complete')
  // })

  _enableHotLoader(store)
  return store
}

function _getMiddleware(): Middleware[] {
  let middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
    // autoRehydrate()
  ]

  if (__DEV__) {
    middleware = [...middleware, logger]
  }

  return middleware
}

function _enableHotLoader(store) {
  if (!__DEV__) {
    return
  }

  const { hot } = module as any
  if (hot) {
    hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
}

export default configureStore
