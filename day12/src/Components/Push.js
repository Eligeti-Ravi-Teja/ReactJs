import React, { Component } from 'react'
import axios from 'axios'

export default class Push extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:"",
         title:"",
         body:""
      }
    }
    change=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    push=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
  render() {
    return (
      <div>
        <form>
        <label>Enter userId: </label><input type="text" name="userId" value={this.state.userId} onChange={this.change}></input><br></br>
        <label>Enter title: </label><input type="text" name="title" value={this.state.title} onChange={this.change}></input><br></br>
        <label>Enter body: </label><input type="text" name='body' value={this.state.body} onChange={this.change}></input><br></br>
        <button type='submit' onClick={this.push}>Add data</button>
        </form>

      </div>
    )
  }
}
