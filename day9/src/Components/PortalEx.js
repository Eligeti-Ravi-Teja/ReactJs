import React from 'react'
import ReactDom from 'react-dom'
export  function PortalEx() {
  return ReactDom.createPortal(
   
      <h1>Added to the new component</h1>,document.getElementById("root1")
    
  )
}
