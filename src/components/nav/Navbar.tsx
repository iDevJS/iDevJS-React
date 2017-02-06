import * as React from 'react'
import { Link, IndexLink } from 'react-router'

class Navbar extends React.Component<any, any> {
  render() {
    const user = this.props.user
    let action
    action = user ? (
      <div className="navbar-right" >
        <div className="navbar-item" >
          <Link to={`/u/${user.name}`} > {user.name}</Link>
        </div >
      </div>
    ) : (
        <div className="navbar-right" >
          <div className="navbar-item">
            <a href="https://api.idevjs.com/auth/github">登录</a>
          </div>
          <div className="navbar-item">
            <a href="https://api.idevjs.com/auth/github">注册</a>
          </div>
        </div>
      )
    return (
      <nav className="navbar app-nav">
        <div className="container">
          <div className="navbar-left">
            <div className="navbar-item">
              <Link to="/" className="navbar-brand">
                iDevJS.com
            </Link>
            </div>
            <div className="navbar-item">
              <IndexLink to="/">首页</IndexLink>
            </div>
            <div className="navbar-item">
              <Link to="/expore">探索</Link>
            </div >
            <div className="navbar-item">
              <Link to="/nodes">节点</Link>
            </div>
            <div className="navbar-item">
              <Link to="/about">关于</Link>
            </div>
            <div className="navbar-item">
              <Link to="/post/new">发帖</Link>
            </div>
          </div>
          {action}
        </div>
      </nav>
    )
  }
}

export default Navbar
