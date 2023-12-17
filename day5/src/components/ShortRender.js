import React, { Component } from 'react'
import EleVarRender from './EleVarRender'

export default class ShortRender extends Component {
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
    return <p>Rendering using short circuit</p>
  }
}
