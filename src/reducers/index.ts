// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
// import { routerReducer } from 'react-router-redux'

import posts from './posts'
import nodes from './nodes'
import users from './users'
import comments from './comments'
import routerReducer from './router'

const rootReducer = combineReducers({
  posts,
  nodes,
  users,
  comments,
  routing: routerReducer
})

export default rootReducer
