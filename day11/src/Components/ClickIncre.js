import React, { Component } from 'react'

export default class ClickIncre extends Component {
  render() {
   
    return (
      <div>
        <button onClick={this.props.increment}>Clicked {this.props.count} time</button>
      </div>
    )
  }
}
