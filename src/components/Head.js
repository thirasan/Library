import React, { Component } from 'react'

class Head extends Component {
  render() {
    return (
      <div>
        <header>Navbar</header>
        {this.props.children}
      </div>
    )
  }
}

export default Head