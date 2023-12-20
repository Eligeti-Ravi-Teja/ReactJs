import React, { Component } from 'react'

export default class Form1 extends Component {
  
    submit=(e)=>{
        e.preventDefault()
        console.log(e.target[0].value);
        
    }
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Name: </label>
        <input type="text" onChange={this.data}></input>
        <br></br>
        <label>Password: </label>
        <input type='password' onChange={this.data}></input>
        <button>Submit</button>
      </form>
    )
  }
}
