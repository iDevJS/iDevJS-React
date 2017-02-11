import { normalize } from 'normalizr'
import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS
} from '../constants'
import { commentListSchema } from '../constants/schema'

const INITIAL_STATE = {
  isFetching: false,
  items: {},
  lists: []
}

const postReducer = (state = INITIAL_STATE, action) => {
  let ret
  switch (action.type) {
    case REQUEST_COMMENTS:
      return { ...state, isFetching: true }
    case RECEIVE_COMMENTS:
      ret = normalize(action.payload, commentListSchema)
      return {
        ...state,
        isFetching: false,
        lists: ret.result,
        lastUpdated: Date.now(),
        items: { ...state.items, ...ret.entities.posts }
      }
    default:
      return state
  }
}

export default postReducer
