import React, { Component } from 'react'

export default class HoverIncre extends Component {
  render() {
    return (
        <h1 onMouseOver={this.props.increment}>Hovered {this.props.count} times</h1>    
    )
  }
}
