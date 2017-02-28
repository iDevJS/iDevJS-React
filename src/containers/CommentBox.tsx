import * as React from 'react';
import { connect } from 'react-redux'
import {
  addComment,
  newComment
} from '../actions/comments'
import CommentBox from '../components/comment/CommentBox'

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.get('comments').toJS(),
    users: state.get('users').toJS(),
    pid: ownProps.pid
  }
}

class CommentBoxWrapper extends React.Component<any, any> {
  state = {
    content: ''
  }

  onChangeContent = (evt) => {
    this.setState({
      content: evt.target.value
    })
  }

  onSubmitComment = (evt) => {
    evt.preventDefault()
    const { pid, dispatch } = this.props
    const { content } = this.state
    dispatch(addComment(pid, { content }))
      .then(res => {
        dispatch(newComment(pid, res.data))
        this.setState({
          content: ''
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    const state = this.state
    const props = this.props
    const { comments, users } = props
    return (
      <CommentBox
        pending={comments.isPending}
        content={state.content}
        onChangeContent={this.onChangeContent}
        onSubmitComment={this.onSubmitComment}
      />
    )
  }
}

export default connect(mapStateToProps)(CommentBoxWrapper)
