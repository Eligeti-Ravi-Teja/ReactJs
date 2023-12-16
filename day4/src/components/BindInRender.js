import React, { Component } from 'react'

export  class BindInRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: "click to login",
         val:"login"
      }
    }
    validate(){
        this.setState({
            data:"Click to logout",
            val:"logout"
        })
    }
  render() {
    return (
      <div>
        <hr/>
        <h1>Binding inside render method</h1>
        <p>{this.state.data}</p>
        <button onClick={this.validate.bind(this)}>{this.state.val}</button>

      </div>
    )
  }
}
