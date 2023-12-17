import React, { Component } from 'react'

export default class EleVarRender extends Component {
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
    let message;
    if(this.state.boolean){
        message= (
            <div>
                <p>Button is {this.state.data}</p>
                <button onClick={this.call}>{this.state.data}</button>
            </div>
        )
        
    }
    else{
         message=(
            <div>
                <p>Button is {this.state.data}</p>
                <button onClick={this.call}>{this.state.data}</button>
            </div>
        )
    }
    return(
        <div>
            <hr/>
            <p>Conditional rendering using element variables</p>
            {message}
        </div> 
        );
  }
  
}
