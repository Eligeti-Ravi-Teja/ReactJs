import React, { Component } from 'react'

export  class BindConst extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:"binding using constructor"
      }
      this.binds=this.binds.bind(this)
    }
    binds(){
        this.setState({
            data:"Binding is successful using constructor"
        })
    }
  render() {
    return (
      <div>
        <hr/>
        <p>{this.state.data}</p>
        <button onClick={this.binds}>Bind</button>
      </div>
    )
  }
}
