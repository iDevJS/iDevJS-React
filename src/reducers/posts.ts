import { normalize } from 'normalizr'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../constants'
import { postListSchema, postSchema } from '../constants/schema'

const INITIAL_STATE = {
  isFetching: false,
  items: {},
  lists: []
}

const postReducer = (state = INITIAL_STATE, action) => {
  let ret
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true }
    case RECEIVE_POSTS:
      ret = normalize(action.payload, postListSchema)
      return {
        ...state,
        isFetching: false,
        lists: ret.result,
        lastUpdated: Date.now(),
        items: { ...state.items, ...ret.entities.posts }
      }
    case RECEIVE_POST:
      ret = normalize(action.payload, postSchema)
      return {
        ...state,
        items: { ...state.items, ...ret.entities.posts }
      }

    default:
      return state
  }
}

export default postReducer
