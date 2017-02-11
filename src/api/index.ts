import axios from 'axios'
const ENDPOINT = 'http://api.idevjs.com:4379/v2'

class Client {
  headers: Object
  constructor(token) {
    this.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  _request(method, path, data?) {
    let opts = {
      url: `${ENDPOINT}/${path}`,
      method,
      data,
      headers: this.headers
    }
    return axios(opts)
  }
}

export default class API extends Client {
  constructor(token) {
    super(token)
  }
  listPosts() {
    return this._request('GET', `posts`)
  }
  getPost(pid) {
    return this._request('GET', `posts/${pid}`)
  }
  createPost(data) {
    return this._request('POST', `posts`, data)
  }
  updatePost(pid, data) {
    return this._request('PATCH', `posts/${pid}`, data)
  }
  listPostComments(pid) {
    return this._request('GET', `posts/${pid}/comments`)
  }
  addComment(pid, data) {
    return this._request('POST', `posts/${pid}/comments`, data)
  }
  listNodes() {
    return this._request('GET', `nodes`)
  }
  getNode(node) {
    return this._request('GET', `nodes/${node}`)
  }
  getNodePost(node) {
    return this._request('GET', `ndoes/${node}/posts`)
  }
}
