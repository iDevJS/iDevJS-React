import * as React from 'react'
import Select from 'react-select'
console.log(Select)

class MarkdownEditor extends React.Component<any, any> {
  private editor
  render() {
    return (
      <form className="post-editor-form">
        <div className="post-editor-header input-group">
          <select></select>

          <input className="post-title-control form-control" type="text" placeholder="请输入标题" />
        </div >
        <div className="post-editor-body">
          <textarea placeholder="请输入话题内容" className="post-content-control form-control"></textarea>
        </div >
        <div className="post-editor-footer">
          <button className="btn" type="submit">submit</button>
        </div>
      </form >
    )
  }
}

export default MarkdownEditor
