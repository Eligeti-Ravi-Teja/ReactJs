import React, { Component } from 'react'

export  class ConRender extends Component {
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
    if(this.state.boolean){
        return (
            <div>
                <p>Button is on: {this.state.data}</p>
                <button onClick={this.call}>{this.state.data}</button>
            </div>
        )
    }
    else{
         return (
            <div>
                <p>Button is off: {this.state.data}</p>
                <button onClick={this.call}>{this.state.data}</button>
            </div>
        )
    }
  }
}
