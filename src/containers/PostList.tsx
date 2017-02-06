import * as React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'
import PostItem from '../components/post/PostItem'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    users: state.users
  }
}

class PostList extends React.Component<any, any> {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  render() {
    const { posts, users } = this.props
    const { lists, items } = posts
    if (lists.length) {
      const postList = lists.map((pid) => {
        let post = items[pid]
        return (
          <PostItem
            post={post}
            author={users.items[post.author]}
            key={pid} />
        )
      })
      return (
        <div className="post-list">
          {postList}
        </div>
      )
    } else {
      return (
        <span>loading</span>
      )
    }
  }
}

export default connect(mapStateToProps)(PostList)
