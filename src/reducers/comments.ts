import { normalize } from 'normalizr'
import { fromJS, Map, Set } from 'immutable'
import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  ADDING_COMMENT,
  NEW_COMMENT
} from '../constants'
import { commentSchema, commentListSchema } from '../constants/schema'

const INITIAL_STATE = fromJS({
  isFetching: false,
  isPending: false,
  items: {},
  lists: Set()
})

const commentReducer = (state = INITIAL_STATE, action) => {
  let ret
  switch (action.type) {
    case REQUEST_COMMENTS:
      return state.set('isFetching', true)

    case RECEIVE_COMMENTS:
      ret = normalize(action.payload, commentListSchema)

      return state
        .set('isFetching', false)
        .set('lastUpdated', Date.now())
        .update('lists', lists => lists.concat(ret.result))
        .mergeIn(['items'], ret.entities.comments)

    case ADDING_COMMENT:
      return state
        .set('isPending', true)

    case NEW_COMMENT:
      ret = normalize(action.payload, commentSchema)

      return state
        .set('isPending', false)
        .update('lists', lists => lists.add(ret.result))
        .mergeIn(['items'], ret.entities.comments)

    default:
      return state
  }
}

export default commentReducer
