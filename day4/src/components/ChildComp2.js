import React, { Component } from 'react'

export  class ChildComp2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:"child state data"
      }
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>this.props.parentMethod(this.state.data)}>Parameterized parent method calling</button>
      </div>
    )
  }
}
