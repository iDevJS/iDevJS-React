import { normalize } from 'normalizr'
import { fromJS, Set } from 'immutable'
import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS,
  RECEIVE_NODES
} from '../constants'
import { postListSchema, postSchema, nodeListSchema } from '../constants/schema'

const INITIAL_STATE = fromJS({
  isFetching: false,
  items: {},
  lists: []
})

const nodeReducer = (state = INITIAL_STATE, action) => {
  let ret
  let nodes
  let lists
  switch (action.type) {
    case RECEIVE_NODES:
      ret = normalize(action.payload, nodeListSchema)

      return state
        .set('isFetching', false)
        .set('lists', Set(ret.result))
        .set('items', fromJS(ret.entities.nodes))

    default:
      return state
  }
}

export default nodeReducer
