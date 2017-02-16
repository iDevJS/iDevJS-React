import * as React from 'react'
import PostEditor from '../containers/PostEditor'

class CreatePostPage extends React.Component<any, any> {
  componentDidMount() {

  }
  render() {
    return (
      <div className="post-create container">
        <div className="content">
          <div className="block">
            <PostEditor />
          </div>
        </div>
        <div className="aside">

        </div>
      </div>
    )
  }
}

export default CreatePostPage
