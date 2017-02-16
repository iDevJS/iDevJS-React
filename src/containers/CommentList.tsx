import * as React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments'
import CommentItem from '../components/comment/CommentItem'
import EmptyComment from '../components/comment/EmptyComment'
import Loading from '../components/site/Loading'

function mapStateToProps(state, ownProps) {
  return {
    comments: state.get('comments').toJS(),
    users: state.get('users').toJS(),
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
    const { isFetching, lists, items } = comments
    if (isFetching) {
      return <Loading />
    } else if (lists.length) {
      const commentList = lists.map((cid) => {
        let comment = items[cid]
        return (
          <CommentItem
            comment={comment}
            author={users.items[comment.author]}
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
        <EmptyComment />
      )
    }
  }
}

export default connect(mapStateToProps)(CommentList)
