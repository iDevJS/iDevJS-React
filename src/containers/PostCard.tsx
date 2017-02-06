import * as React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/posts'
import PostDetail from '../components/post/PostDetail'

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    nodes: state.nodes,
    users: state.users,
    pid: ownProps.pid
  }
}

class PostCard extends React.Component<any, any> {
  componentDidMount() {
    const { dispatch, pid } = this.props
    dispatch(fetchPost(pid))
  }
  render() {
    const pid = this.props.pid
    const { posts, nodes, users } = this.props
    const post = posts.items[pid]
    if (post && post.content) {
      return (
        <PostDetail post={post} author={users.items[post.author]} node={nodes.items[post.node]} />
      )
    } else {
      return (
        <span>loading</span>
      )
    }
  }
}

export default connect(mapStateToProps)(PostCard)
