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
    case RECEIVE_POST:
      ret = normalize(action.payload, postSchema)
      nodes = ret.entities.nodes
      lists = Object.keys(nodes)
      lists.map(item => {
        if (state.items[item] && nodes[item].updated_at > state.items[item].updated_at) {

        }
      })
      return {
        ...state,
        lists,
        items: { ...state.items, ...nodes }
      }
    case RECEIVE_POSTS:
      ret = normalize(action.payload, postListSchema)
      nodes = ret.entities.nodes
      lists = Object.keys(nodes)
      return {
        ...state,
        isFetching: false,
        lists,
        items: { ...state.items, ...nodes }
      }
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
