import React, { Component } from 'react'
import axios from 'axios'

export default class Fetch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
      
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos")
         .then(response=>{
            this.setState({
                data:response.data
            })
            console.log(this.state.data);
         })
         .catch(error=>{
            console.log(error);
         })
            
    }
    
  render() {
    
    let renderData=this.state.data.map(post=><div key={post.id}><p><img src={post.url}></img>{post.title}</p></div>)
    return (
      <div>
        
        {renderData}
      </div>
    )
  }
}
