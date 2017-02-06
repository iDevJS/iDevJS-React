import * as React from 'react'
import { Link, IndexLink } from 'react-router'
import Navbar from '../components/nav/navbar'

class Layout extends React.Component<any, any>{
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
