import React, { Component } from 'react'
import { LifeCycle2 } from './LifeCycle2';

export  class LifeCycyle extends Component {
    // Constructor method used to create state and binding handlers
    constructor(props) {
        console.log("from constryctor");
      super(props)
    
      this.state = {
         data: "click to render"
      }
    }
    // interact with om, ajax calls, calls after component is rendered.
    componentDidMount(){
        console.log("from componentDidMount method");
    }
    // component depend on states and props
    static getDerivedStateFromProps(props, state){
        console.log("from getDerivedStateFromProps");
        return null
    }
    shouldComponentUpdate(a,b){
        console.log("From should component upate");
        return null;
    }
    getSnapshotBeforeUpdate(a,b){
        console.log("from getSnapshotBeforeUpdate");
    }
    componentDidUpdate(a,b,c){
        console.log("from component did update");
    }
    rend=()=>{
        this.setState({
            data:"renedered data"
        })
    }
 //Used to return JSX, read props and states 
  render() {
    console.log("From render method");
    return (
      <div>
        <p>{this.state.data}</p>
        <button onClick={this.rend}>Click to Render</button>
        {/* <LifeCycle2></LifeCycle2> */}
      </div>
    )
  }
  
}
