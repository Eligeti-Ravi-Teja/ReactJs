import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'

export default class PortalExmp extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Inside another element</h1>
    ,document.getElementById("portal"))
  }
}
