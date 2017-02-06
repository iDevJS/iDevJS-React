import {
  REQUEST_NODES,
  RECEIVE_NODES,
  REQUEST_NODE,
  RECEIVE_NODE
} from '../constants'
import Client from '../api/'

const client = new Client(window.localStorage.getItem('idevjs_token'))

export const requestNodes = () => {
  return {
    type: REQUEST_NODES
  }
}

export const receiveNodes = (data) => {
  return {
    type: RECEIVE_NODES,
    payload: data
  }
}

export const receiveNode = (data) => {
  return {
    type: RECEIVE_NODE,
    payload: data
  }
}

export const requestNode = (node) => (dispatch) => {
  return client.getNode(node)
    .then(res => dispatch(receiveNode(res.data)))
}

export const fetchNode = (node) => (dispatch, getState) => {
  const now = Date.now()
  const nodes = getState().Nodes.items
  return client.getNode(node)
    .then(res => dispatch(receiveNode(res.data)))
}

export const fetchNodes = () => (dispatch, getState) => {
  const nodes = getState().nodes
  const now = Date.now()
  dispatch(requestNodes())
  return client.listNodes()
    .then(res => dispatch(receiveNodes(res.data)))
}

