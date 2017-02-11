import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const classNames = require('classnames')

const PostItem = ({ author, post }) => {
  return (
    <article className="post-item stream">
      <img className="stream-left avatar" src={author.avatar_url} alt="" />
      <div className="stream-body">
        <div className="stream-header">
          <Link className="fullname" to={`/u/${post.author}`}><strong>{post.author}</strong></Link>
          <Link className="node" to={`/node/${post.node}`} data-node-name={post.node} > {post.node}</Link>
        </div>
        <div className="stream-content post-item-content">
          <h2 className="title"><Link to={'/post/' + post._id}>{post.title}</Link></h2>
          <div className="comment-count">
            <Link className="comment-link" to={`/post/${post._id}`}>
              <i className="material-icons">chat_bubble_outline</i> {post.meta.comments}
            </Link>
          </div >
        </div >
        <div className="stream-footer">
          <small className="like-count metadata">
            <i className="material-icons icon-fav">favorite_border</i>
            {post.meta.votes} 人喜欢
                </small>
          <small className="view-count metadata">
            <i className="material-icons">bookmark_border</i>
            {post.meta.views} 次查看
            </small>
          {post.last_comment_user ?
            <small className="last-comment-by metadata">
              最后回复来自
              <Link to={`/u/${post.last_comment_user}`} data-user-name={post.last_comment_user} > {post.last_comment_user}
              </Link>
            </small>
            : ''}
        </div>
      </div>
    </article>
  )
}

export default PostItem
