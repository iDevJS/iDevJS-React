import { schema } from 'normalizr'

const nodes = new schema.Entity('nodes', {}, {
  idAttribute: 'name'
})
const users = new schema.Entity('users', {}, {
  idAttribute: 'name'
})
const posts = new schema.Entity('posts', {}, {
  idAttribute: '_id'
})

posts.define({
  node: nodes,
  author: users,
  last_comment_user: users
})

export const postListSchema = new schema.Array(posts)
export const postSchema = posts
export const nodeListSchema = new schema.Array(nodes)
