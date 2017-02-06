import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import nodes from './nodes'
import users from './users'

const rootReducer = combineReducers({
  posts,
  nodes,
  users,
  routing: routerReducer
})

export default rootReducer
