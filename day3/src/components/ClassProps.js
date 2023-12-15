import React from 'react'
// import { Component } from "react";
import {Component} from 'react'
export class Cprops extends Component{
    render(){
        return (
            <h1>
                Iam {this.props.name} and I love {this.props.like}
            </h1>
        )
    }
}
export class Cpropsdes extends Component{
    render(){
        const {name, like}=this.props
        return(
            <h1>
            Iam {name} and I love {like}
        </h1>
        )
    }
}
