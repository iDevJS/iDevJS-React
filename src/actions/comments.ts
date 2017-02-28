import {
  ADDING_COMMENT,
  NEW_COMMENT,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../constants'
import Client from '../api/'

const client = new Client(window.localStorage.getItem('idevjs_token'))

export const addingComment = (pid) => {
  return {
    type: ADDING_COMMENT,
    meta: {
      pid
    }
  }
}

export const newComment = (pid, data) => {
  return {
    type: NEW_COMMENT,
    payload: data,
    meta: {
      pid
    }
  }
}

export const addComment = (pid, data) => dispatch => {
  dispatch(addingComment(pid))
  return client.addComment(pid, data)
}

export const requestComments = (pid) => {
  return {
    type: REQUEST_COMMENTS,
    meta: {
      pid: pid
    }
  }
}

export const receiveComments = (pid, data) => {
  return {
    type: RECEIVE_COMMENTS,
    payload: data,
    meta: {
      pid
    }
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

  dispatch(requestComments(pid))
  return client.listPostComments(pid)
    .then(res => dispatch(receiveComments(pid, res.data)))
}

