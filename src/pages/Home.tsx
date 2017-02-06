import * as React from 'react'
import PostList from '../containers/PostList'

class HomePage extends React.Component<any, any> {
  render() {
    return (
      <div className="home-page container">
        <div className="content">
          <PostList />
        </div>
        <div className="aside">
          <div className="side-card block-card">
            <div className="side-card-title"></div>
            <div className="side-card-body">
              {/*<img src="http://cdn.v2ex.co/friends/wilddog/wilddog_20160511_big.jpg" alt="" />*/}
              <img src="https://cdn.v2ex.co/friends/shimo/shimo_big_20170101.png" />
            </div>
            <div className="side-card-footer"></div>
          </div>

        </div>
      </div>
    )
  }
}

export default HomePage
