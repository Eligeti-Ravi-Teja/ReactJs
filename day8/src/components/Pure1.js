import React, { PureComponent } from 'react'

export default class Pure1 extends PureComponent {
   constructor(props) {
     super(props)
   
     this.state = {
        val:"pure"
     }
    
   }
   componentDidMount(){
    setInterval(()=>{
        console.log("took place");
        this.setState({
            val: "pure"
        })
     },1000)
   }
   
   
  render() {
    return (
    
        <p>Pure components : {this.state.val}</p>
      
    )
  }
}
