import { normalize } from 'normalizr'
import { fromJS, Set } from 'immutable'
import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS
} from '../constants'
import { commentListSchema } from '../constants/schema'

const INITIAL_STATE = fromJS({
  isFetching: false,
  isPending: false,
  items: {},
  lists: []
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
        .set('lists', Set(ret.result))
        .set('items', fromJS(ret.entities.comments))

    default:
      return state
  }
}

export default commentReducer
