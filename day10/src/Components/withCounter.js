import React from 'react'
import { Component } from 'react'

const withCounter=(WrappedComponent,val)=>{
    
       class WithCounter extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
        click=()=>{
           this.setState(prev=>{
            return{
                count:this.prev.count+val
            }
           })
        }
       render() {
        
        
         return (
           <WrappedComponent val={this.state.count} method={this.click}></WrappedComponent>
         )
       }
    }
    return WithCounter;
     
    }
    export default withCounter;
    

