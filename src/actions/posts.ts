import {
  NEW_POST,
  EDIT_POST,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POST,
  RECEIVE_POST
} from '../constants'
import Client from '../api/'

const client = new Client(window.localStorage.getItem('idevjs_token'))

export const createPost = (data) => {
  return client.createPost(data)
}

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (data) => {
  return {
    type: RECEIVE_POSTS,
    payload: data
  }
}

export const receivePost = (data) => {
  return {
    type: RECEIVE_POST,
    payload: data
  }
}

export const requestPost = (pid) => (dispatch) => {
  return client.getPost(pid)
    .then(res => dispatch(receivePost(res.data)))
}

export const fetchPost = (pid) => (dispatch, getState) => {
  const now = Date.now()
  const state = getState()
  const posts = state.get('posts').toJS()
  const post = posts.items[pid]
  if (post && post.content) {
    return
  } else {
    return client.getPost(pid)
      .then(res => dispatch(receivePost(res.data)))
  }

}

export const fetchPosts = () => (dispatch, getState) => {
  const state = getState()
  const posts = state.get('posts').toJS()
  const now = Date.now()
  if (now - posts.lastUpdated < 5 * 60 * 1000) {
    // dispatch(receivePosts(posts))
    return
  } else {
    dispatch(requestPosts())
    return client.listPosts()
      .then(res => dispatch(receivePosts(res.data)))
  }
}

