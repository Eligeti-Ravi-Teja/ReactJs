import React from "react";
import { Component } from "react";
export class Adding extends Component{
    constructor(){
        super()
        this.state={
            count:1,
            text:"count: "
        }
        
    };
   
    add(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    render(){
        const {count,text}=this.state;
        return(
            <div>
                <hr>
                </hr>
                <h1>{text}{count}</h1>
                <button onClick={()=>this.add()}>Add 1</button>
            </div>
        )
    }
}