import React, { Component } from 'react'

export  class MethosArrow extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:"click to bind is performed by class propert as arrow function"
      }
    }
    ClassProp=()=>{
        this.setState({
            data:"binding is successful using class property as arrow function"
        })
    }
  render() {
    return (
      <div>
        <hr/>
        <p>{this.state.data}</p>
        <button onClick={this.ClassProp}>Bind</button>
      </div>
    )
  }
}
