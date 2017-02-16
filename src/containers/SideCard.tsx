import * as React from 'react';

class SideCard extends React.Component<any, any> {
  render() {
    return (
      <div className="side-card block-card">
        <div className="side-card-title"></div>
        <div className="side-card-body">
          {this.props.children}
        </div>
        <div className="side-card-footer"></div>
      </div>
    )
  }
}

export default SideCard
