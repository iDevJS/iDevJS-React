import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchPost } from '../actions/posts'
import Editor from '../components/editor/Markdown'

function mapStateToProps(state, ownProps) {
  return {
    nodes: state.nodes
  }
}

class PostEditor extends React.Component<any, any> {
  componentDidMount() {

  }
  render() {
    return (
      <div className="post-editor">
      <div className="post-header">
        <ol className="breadcrumb">
          <li><Link to="/">iDevJS</Link></li>
          <li className="active">添加</li>
        </ol>
      </div>
      <Editor />
      </div>
    )
  }
}

export default connect(mapStateToProps)(PostEditor)
