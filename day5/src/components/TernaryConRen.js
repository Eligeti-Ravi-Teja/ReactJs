import React, { Component } from 'react'

export  class TernaryConRen extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           boolean: false,
           data:"on"
        }
      }
      call=()=>{
          if(this.state.boolean){
          this.setState({
              boolean:false,
              data:"on"
          })
      }
      else{
           this.setState({
              boolean:true,
              data:"off"
          })
      }
  
      }
  render() {
    return this.state.boolean? (
        <div>
            <p>Button is on: {this.state.data}</p>
            <button onClick={this.call}>{this.state.data}</button>
        </div>
    ) : (
        <div>
            <p>Button is off: {this.state.data}</p>
            <button onClick={this.call}>{this.state.data}</button>
        </div>
    )
  }
}
