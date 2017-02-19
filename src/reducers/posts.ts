import { normalize } from 'normalizr'
import { fromJS, Set } from 'immutable'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  NEW_COMMENT
} from '../constants'
import {
  commentSchema,
  commentListSchema,
  postListSchema,
  postSchema
} from '../constants/schema'

const INITIAL_STATE = fromJS({
  isFetching: false,
  isPending: false,
  items: {},
  lists: Set()
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
        .update('lists', lists => lists.concat(ret.result))
        .mergeIn(['items'], ret.entities.posts)

    case RECEIVE_POST:
      ret = normalize(action.payload, postSchema)

      return state
        .setIn(['items', ret.result], fromJS(ret.entities.posts[ret.result]))

    case RECEIVE_COMMENTS:
      ret = normalize(action.payload, commentListSchema)

      return state
        .setIn(['items', action.meta.pid, 'comments'], ret.result)

    case NEW_COMMENT:
      ret = normalize(action.payload, commentSchema)

      return state.updateIn(['items', action.meta.pid, 'comments'], comments => {
        comments.push(ret.result)
        return comments
      })

    default:
      return state
  }
}

export default postReducer
