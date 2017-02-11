import * as React from 'react'
import { requestPost } from '../actions/posts'
import PostCard from '../containers/PostCard'
import CommentList from '../containers/CommentList'

class PostPage extends React.Component<any, any> {
  componentDidMount() {
    const pid = this.props.params.pid
    // this.props.dispatch(requestPost(pid))
  }
  render() {
    return (
      <div className="post-page container">
        <div className="content">
          <PostCard pid={this.props.params.pid} />
          <CommentList pid={this.props.params.pid} />
        </div>
        <div className="aside">

        </div>
      </div>
    )
  }
}

export default PostPage
