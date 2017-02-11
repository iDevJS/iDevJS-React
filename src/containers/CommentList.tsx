import * as React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments'
import CommentItem from '../components/comment/CommentItem'

function mapStateToProps(state, ownProps) {
  return {
    comments: state.comments,
    users: state.users,
    pid: ownProps.pid
  }
}

class CommentList extends React.Component<any, any> {
  componentDidMount() {
    const { dispatch, pid } = this.props
    dispatch(fetchComments(pid))
  }
  render() {
    const { comments, users } = this.props
    const { lists, items } = comments
    if (lists.length) {
      const commentList = lists.map((cid) => {
        let comment = items[cid]
        return (
          <CommentItem
            comment={comment}
            key={cid} />
        )
      })
      return (
        <div className="comment-list">
          {commentList}
        </div>
      )
    } else {
      return (
        <span>loading</span>
      )
    }
  }
}

export default connect(mapStateToProps)(CommentList)
