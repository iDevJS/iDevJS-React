import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
require('./app.styl')

import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore()

const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS
  return (state) => {
    const routingState = state.get('routing') // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }
    return prevRoutingStateJS
  }
}


// configureStore().then(store => {
const appHistory = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState()
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
