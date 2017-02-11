import * as React from 'react'
import { Link } from 'react-router'
const Select = require('react-select')

const MarkdownEditor = (props) => {
  const nodes = props.nodes
  const tabOpts = props.node ? nodes.items[props.node].tabs : []
  let nodeOpts = []

  nodes.lists.map(key => {
    const node = nodes.items[key]
    nodeOpts.push({
      value: node.name,
      label: node.alias
    })
  })

  return (
    <div className="post-editor">
      <div className="post-header">
        <ol className="breadcrumb">
          <li><Link to="/">iDevJS</Link></li>
          <li className="active">添加</li>
        </ol>
      </div>
      <form className="post-editor-form">
        <div className="post-editor-header input-group">
          <Select
            className="form-control"
            options={nodeOpts}
            value={props.node}
            onChange={props.onSelectNode}
            clearable={false} />
          <Select
            className="form-control"
            noResultsText="请选择节点"
            labelKey="alias"
            valueKey="name"
            options={tabOpts}
            value={props.tab}
            onChange={props.onSelectTab}
            clearable={false} />
          <input
            className="post-title-control form-control"
            type="text"
            placeholder="请输入标题"
            value={props.title}
            onChange={props.onTitleChange} />
        </div >
        <div className="post-editor-body">
          <textarea
            placeholder="请输入话题内容"
            className="post-content-control form-control"
            value={props.content}
            onChange={props.onContentChange} />
        </div >
        <div className="post-editor-footer">
          <button className="btn" type="submit" onClick={props.onSubmitPost}>submit</button>
        </div>
      </form >
    </div>
  )
}

export default MarkdownEditor
