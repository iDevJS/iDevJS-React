import * as React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/posts'
import PostDetail from '../components/post/PostDetail'
import Loading from '../components/site/Loading'

function mapStateToProps(state, ownProps) {
  return {
    posts: state.get('posts').toJS(),
    nodes: state.get('nodes').toJS(),
    users: state.get('users').toJS(),
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
    const node = post && nodes.items[post.node]
    if (post && post.content && node) {
      return (
        <PostDetail post={post} author={users.items[post.author]} node={node} />
      )
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default connect(mapStateToProps)(PostCard)
