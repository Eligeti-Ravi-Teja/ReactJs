import React, { Component } from 'react'

export  class BindArrow extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:"Click login button to login"
      }
    }
    login(){
        this.setState({
            data:"Click logout button to logout"
        })
    }
    logout(){
        this.setState({
            data:"Click login button to login"
        })
    }
    
  render() {
    return (
      <div>
        <hr/>
        <h1>Binding using arrow function</h1>
        <p>{this.state.data}</p>
        <button onClick={()=>this.login()}>login</button>
        <button onClick={()=>this.logout()}>logout</button>

      </div>
    )
  }
}
