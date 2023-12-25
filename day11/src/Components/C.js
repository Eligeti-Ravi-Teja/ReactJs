import React, { Component } from 'react'
import { consumer } from './context'
export default class C extends Component {
  render() {
    return (
      <consumer>
        {
            (value)=>{
                <h1>{value}</h1>
            }
        }
      </consumer>
    )
  }
}
