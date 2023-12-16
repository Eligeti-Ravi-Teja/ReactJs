import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props) {
      super(props)
    }
    methodCall(){
        alert("Event triggered")
    }
  render() {
    return (
      <div>
        <p>On click an alert is envoked</p>
        <button onClick={this.methodCall}>Trigger Event</button>
      </div>
    )
  }
}
