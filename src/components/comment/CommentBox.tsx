import * as React from 'react';

const CommentBox = (props) => {
  return (
    <form className="comment-box">
      <div className="comment-box-header">回复</div>
      <div className="comment-box-body">
        <textarea cols={30} rows={6} value={props.content} onChange={props.onChangeContent}></textarea>
      </div>
      <div className="comment-box-footer">
        <button className="btn btn-default" type="submit" onClick={props.onSubmitComment} >提交</button>
      </div>
    </form>
  )
}

export default CommentBox
