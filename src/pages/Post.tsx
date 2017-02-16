import * as React from 'react'
import { requestPost } from '../actions/posts'
import PostCard from '../containers/PostCard'
import CommentList from '../containers/CommentList'
import ComponentBox from '../containers/CommentBox'
import SideCard from '../containers/SideCard'

class PostPage extends React.Component<any, any> {
  componentDidMount() {
    const pid = this.props.params.pid
    // this.props.dispatch(requestPost(pid))
  }
  render() {
    return (
      <div className="post-page container">
        <div className="content">
          <div className="block">
            <PostCard pid={this.props.params.pid} />
          </div>
          <div className="block">
            <CommentList pid={this.props.params.pid} />
          </div>
          <div className="block">
            <ComponentBox pid={this.props.params.pid} />
          </div>
        </div>
        <div className="aside">
          <SideCard>
            <img src="http://cdn.v2ex.co/friends/wilddog/wilddog_20160511_big.jpg" alt="" />
          </SideCard>
        </div>
      </div>
    )
  }
}

export default PostPage
