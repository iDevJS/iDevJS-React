import * as React from 'react'
import { connect } from 'react-redux'
import { fetchPost, createPost } from '../actions/posts'
import Editor from '../components/editor/Markdown'

function mapStateToProps(state, ownProps) {
  return {
    nodes: state.nodes
  }
}

class PostEditor extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      node: props.node || '',
      tab: props.tab || '',
      content: props.content || '',
      title: props.title || ''
    }
  }

  componentDidMount() {

  }

  onSelectNode = (opt) => {
    const val = opt.value
    const { nodes } = this.props
    const node = nodes.items[val]

    this.setState({
      node: opt.value,
      tab: ''
    })
  }

  onSelectTab = (opt) => {
    this.setState({
      tab: opt.name
    })
  }

  onTitleChange = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }

  onContentChange = (evt) => {
    this.setState({
      content: evt.target.value
    })
  }

  onSubmitPost = (evt) => {
    evt.preventDefault()
    const state = this.state
    const data = {
      node_name: state.node,
      tab: state.tab,
      content: state.content,
      title: state.title
    }
    this.props.dispatch(createPost(data))
  }

  render() {
    const state = this.state
    const props = this.props
    return (
      <Editor
        {...state}
        nodes={props.nodes}
        onSelectNode={this.onSelectNode}
        onSelectTab={this.onSelectTab}
        onTitleChange={this.onTitleChange}
        onContentChange={this.onContentChange}
        onSubmitPost={this.onSubmitPost}
      />
    )
  }
}

export default connect(mapStateToProps)(PostEditor)
