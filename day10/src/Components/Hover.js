import React from 'react'
import withCounter from './withCounter'

 function Hover(props) {
    let {val,method}=props
  return (
    <div>
      <h1 onMouseOver={method}>Hovered {val} times</h1>
    </div>
  )
}
export default withCounter(Hover,5);
