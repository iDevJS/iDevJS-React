import * as React from 'react'
import PostList from '../containers/PostList'
import SideCard from '../containers/SideCard'

class HomePage extends React.Component<any, any> {
  render() {
    return (
      <div className="home-page container">
        <div className="content">
          <div className="block">
            <PostList />
          </div>
        </div>
        <div className="aside">
          <SideCard>
            <img src="https://cdn.v2ex.co/friends/shimo/shimo_big_20170101.png" />
          </SideCard>
        </div>
      </div>
    )
  }
}

export default HomePage
