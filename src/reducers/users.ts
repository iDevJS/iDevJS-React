import { normalize } from 'normalizr'
import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS
} from '../constants'
import { postListSchema, postSchema } from '../constants/schema'

const INITIAL_STATE = {
  isFetching: false,
  items: {},
  lists: []
}

const userReducer = (state = INITIAL_STATE, action) => {
  let ret
  let users
  let lists
  switch (action.type) {
    case RECEIVE_POST:
      ret = normalize(action.payload, postSchema)
      users = ret.entities.users
      lists = Object.keys(users)
      return {
        ...state,
        lists,
        items: { ...state.items, ...ret.entities.users }
      }
    case RECEIVE_POSTS:
      ret = normalize(action.payload, postListSchema)
      users = ret.entities.users
      lists = Object.keys(users)
      return {
        ...state,
        isFetching: false,
        lists,
        items: { ...state.items, ...ret.entities.users }
      }
    default:
      return state
  }
}

export default userReducer
