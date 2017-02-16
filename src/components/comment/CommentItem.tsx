import * as React from 'react'
import { Link } from 'react-router'

const CommentItem = ({ comment, author }) => {
  const htmlContent = {
    __html: comment.content
  }

  return (
    <div className="comment-item stream">
      <img src={author.avatar_url} alt="" className="stream-left avatar" />
      <div className="stream-body">
        <div className="stream-header comment-item-header">
          <div>
            <Link className="comment-authorName" to={`/u/${comment.author}`}>
              <strong className="fullname">{comment.author}</strong>
            </Link>
            <small className="time metadata">@ {comment.created_at}</small>
          </div>
          <div>
            <i className="material-icons icon-reply">reply</i>
            <small className="like-count metadata">
              <i className="material-icons icon-fav">favorite</i>
              {/*{comment.meta}*/}
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
