import { normalize } from 'normalizr'
import { fromJS } from 'immutable'
import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS
} from '../constants'
import { postListSchema, postSchema } from '../constants/schema'

const INITIAL_STATE = fromJS({
  isFetching: false,
  items: {},
  lists: []
})

const userReducer = (state = INITIAL_STATE, action) => {
  let ret
  let users
  let lists
  switch (action.type) {
    case RECEIVE_POST:
      ret = normalize(action.payload, postSchema)
      users = ret.entities.users
      lists = Object.keys(users)
      return state
        .set('lists', lists)
        .set('items', users)

    case RECEIVE_POSTS:
      ret = normalize(action.payload, postListSchema)
      users = ret.entities.users
      lists = Object.keys(users)
      return state
        .set('isFetching', false)
        .set('lists', lists)
        .set('items', users)

    default:
      return state
  }
}

export default userReducer
