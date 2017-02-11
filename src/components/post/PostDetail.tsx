import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const classNames = require('classnames')

const PostDetail = ({ post, author, node }) => {
  const htmlContent = {
    __html: post.content
  }

  return (
    <div className="post-detail">
      <div className="post-header">
        <div className="post-header-left">
          <ol className="breadcrumb">
            <li><Link to="/">iDevJS</Link></li>
            <li><Link to={`/node/${post.node}`}>{node.alias}</Link></li>
            <li><Link to={`/node/${post.node}?tab=${post.tab}`} >{post.tab}</Link></li>
          </ol>
          <h1 className="post-title">{post.title}</h1>
          <ul className="post-metadata">
            <li><Link to={`/u/${post.author}`}>{post.author}</Link></li>
            <li><time>{post.created_at}</time></li>
            <li>{post.meta.views}次查看</li>
          </ul >
        </div >
        <div className="post-header-right">
          <img className="post-avatar" src={author.avatar_url} alt="" />
        </div>
      </div>
      <article className="post-body">
        <div className="article-body markdown-body">
          <div dangerouslySetInnerHTML={htmlContent} />
        </div>
      </article>
      <div className="post-footer">
      </div>
    </div >
  )
}

export default PostDetail
