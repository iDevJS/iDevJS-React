import * as React from 'react'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'
import { fetchNodes } from '../actions/nodes'
import Navbar from '../components/nav/navbar'

class Layout extends React.Component<any, any> {
  componentDidMount() {
    this.props.dispatch(fetchNodes())
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default connect()(Layout)
