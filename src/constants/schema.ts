import { schema } from 'normalizr'

export const nodeSchema = new schema.Entity('nodes', {}, {
  idAttribute: 'name'
})

export const userSchema = new schema.Entity('users', {}, {
  idAttribute: 'name'
})

export const postSchema = new schema.Entity('posts', {}, {
  idAttribute: '_id'
})

export const commentSchema = new schema.Entity('comments', {}, {
  idAttribute: '_id'
})

postSchema.define({
  node: nodeSchema,
  author: userSchema,
  last_comment_user: userSchema
})

commentSchema.define({
  author: userSchema
})

export const postListSchema = new schema.Array(postSchema)
export const nodeListSchema = new schema.Array(nodeSchema)
export const commentListSchema = new schema.Array(commentSchema)
