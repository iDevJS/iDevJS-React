import * as React from 'react'

const CommentItem = ({ comment }) => {
  const htmlContent = {
    __html: comment.content
  }
  return (
    <div className="comment-item stream">
      <img src={comment.author.gravatar} alt="" className="stream-left avatar" />
      <div className="stream-body">
        <div className="stream-header comment-item-header">
          <div>
            <a className="comment-authorName" data-user-id={comment.author._id}>
              <strong className="fullname">{comment.author.name}</strong>
              <span className="username comment-profile-username">
                @{comment.author.name}
              </span>
            </a>
            <small className="time metadata">{comment.created_at}</small>
          </div>
          <div>
            <i className="material-icons icon-reply">reply</i>
            <small className="like-count metadata">
              <i className="material-icons icon-fav">favorite</i>
              {comment.likes_count}
            </small>
          </div>
        </div>
        <div className="stream-content" dangerouslySetInnerHTML={htmlContent}></div>
        <div className="stream-footer"></div>
      </div>
    </div>
  )
}

export default CommentItem
