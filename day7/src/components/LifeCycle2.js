import React, { Component } from 'react'

export  class LifeCycle2 extends Component {
    // Constructor method used to create state and binding handlers
    constructor(props) {
        console.log("from child constryctor");
      super(props)
    
      this.state = {
         data: "click to render"
      }
    }
    // interact with om, ajax calls, calls after component is rendered.
    componentDidMount(){
        console.log("from child componentDidMount method");
    }
    // component depend on states and props
    static getDerivedStateFromProps(props, state){
        console.log("from child getDerivedStateFromProps");
        return null
    }
    shouldComponentUpdate(a,b){
        console.log("From child should component upate");
        return null;
    }
    getSnapshotBeforeUpdate(a,b){
        console.log("from child getSnapshotBeforeUpdate");
    }
    componentDidUpdate(a,b,c){
        console.log("from child component did update");
    }
    rend=()=>{
        this.setState({
            data:"renedered  child "
        })
    }
 //Used to return JSX, read props and states 
  render() {
    console.log("From child render method");
    return (
      <div>
        <hr></hr>
        <p>From child</p>
        <p>{this.state.data}</p>
        <button>Click to Render</button>
      </div>
    )
  }
}
