import React, { Component } from 'react'

export  class BindingEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         eventval: "Not logged in"
      }
    }
    login(){
        this.setState({
            eventval:"Logged in"
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.eventval}</h1>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}
