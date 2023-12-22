import React, { Component } from 'react'

export  class ErrorCatch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
     
  render() {
    if(this.state.hasError){
        console.log("error");
        console.log(this.props);
        return <h1>Something went wrong. Please try again later</h1>
    }
    else{
        
        console.log(this.props);
        
    }
  }
}
