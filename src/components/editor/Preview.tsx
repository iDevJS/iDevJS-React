import * as React from 'react'
const taskLists = require('markdown-it-task-lists')
const emoji = require('markdown-it-emoji')
const toc = require('markdown-it-toc')
const mathjax = require('markdown-it-mathjax')
const md = require('markdown-it')()
  .use(taskLists)
  .use(emoji)
  .use(toc)
  .use(mathjax)

interface IPreviewProps extends React.Props<any> {
  content: String
}

class Preview extends React.Component<IPreviewProps, void> {
  compoentWillReceiveProps(next) {
    return next.content !== this.props.content
  }
  render() {
    const __html = md.render(this.props.content)
    const __safe = { __html }
    return (
      <div className="markdown-body" dangerouslySetInnerHTML={__safe}></div>
    )
  }
}

export default Preview
