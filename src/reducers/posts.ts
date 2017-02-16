import { normalize } from 'normalizr'
import { fromJS, Set } from 'immutable'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS
} from '../constants'
import {
  commentListSchema,
  postListSchema,
  postSchema
} from '../constants/schema'

const INITIAL_STATE = fromJS({
  isFetching: false,
  isPending: false,
  items: {},
  lists: []
})

const postReducer = (state = INITIAL_STATE, action) => {
  let ret
  switch (action.type) {
    case REQUEST_POSTS:
      return state.set('isFetching', true)

    case RECEIVE_POSTS:
      ret = normalize(action.payload, postListSchema)

      return state
        .set('isFetching', false)
        .set('lastUpdated', Date.now())
        .set('lists', Set(ret.result))
        .set('items', fromJS(ret.entities.posts))

    case RECEIVE_POST:
      ret = normalize(action.payload, postSchema)

      return state
        .setIn(['items', ret.result], fromJS(ret.entities.posts[ret.result]))

    case RECEIVE_COMMENTS:
      ret = normalize(action.payload, commentListSchema)

      return state
    default:
      return state
  }
}

export default postReducer
