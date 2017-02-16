import * as React from 'react';
import { connect } from 'react-redux'
import { addComment } from '../actions/comments'
import CommentBox from '../components/comment/CommentBox'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
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
  }

  render() {
    const state = this.state
    return (
      <CommentBox
        content={state.content}
        onChangeContent={this.onChangeContent}
        onSubmitComment={this.onSubmitComment}
      />
    )
  }
}

export default connect(mapStateToProps)(CommentBoxWrapper)
