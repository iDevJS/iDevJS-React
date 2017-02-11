import { normalize } from 'normalizr'
import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS,
  RECEIVE_NODES
} from '../constants'
import { postListSchema, postSchema, nodeListSchema } from '../constants/schema'

const INITIAL_STATE = {
  isFetching: false,
  items: {},
  lists: []
}

const nodeReducer = (state = INITIAL_STATE, action) => {
  let ret
  let nodes
  let lists
  switch (action.type) {
    case RECEIVE_NODES:
      ret = normalize(action.payload, nodeListSchema)
      nodes = ret.entities.nodes
      lists = Object.keys(nodes)
      return {
        ...state,
        isFetching: false,
        lists,
        items: { ...state.items, ...nodes }
      }
    default:
      return state
  }
}

export default nodeReducer
