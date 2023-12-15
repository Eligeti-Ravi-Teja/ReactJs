import React, {Component} from 'react'
export class StateEx extends Component{
    constructor(){
        super()
        this.state={
            text:"I Welcome you to my app" 
        }
    }
    render(){
        return(
            <div>
                <hr></hr>
                <h1>This is a text rendered using state</h1>
                <p>{this.state.text}</p>
                <hr></hr>
            </div>
            
        )
    }
}

export class StateEx1 extends Component{
    constructor(){
        super()
        this.state={
            text:"I Welcome you to my app" 
        }
    }
    subscribe(){
        this.setState({
            text:"Thanks for subscribing"
        })
    }
    render(){
        return(
            <div>
                <hr></hr>
                <h1>Dynamically changing using state using set state method</h1>
                <p>{this.state.text}</p>
                <button onClick={()=>this.subscribe()}>subscribe</button>
                <hr></hr>
            </div>
            
        )
    }
}