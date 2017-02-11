import {
  NEW_COMMENT,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../constants'
import Client from '../api/'

const client = new Client(window.localStorage.getItem('idevjs_token'))

export const addComment = (data) => {
  return client.createPost(data)
}

export const requestComments = () => {
  return {
    type: REQUEST_COMMENTS
  }
}

export const receiveComments = (data) => {
  return {
    type: RECEIVE_COMMENTS,
    payload: data
  }
}

export const upvoteComment = (data) => {
  return {
    type: UPVOTE_COMMENT,
    payload: data
  }
}

export const fetchComments = (pid) => (dispatch, getState) => {
  const comments = getState().comments
  const now = Date.now()
  if (now - comments.lastUpdated < 5 * 60 * 1000) {
    // dispatch(receivePosts(posts))
    return
  } else {
    dispatch(requestComments())
    return client.listPostComments(pid)
      .then(res => dispatch(receiveComments(res.data)))
  }
}

