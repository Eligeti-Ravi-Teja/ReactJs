import React from 'react'
import withCounter from './withCounter';

 function Click(props) {
    let {val,method}=props;
  return (
   <button onClick={method}>Clicked {val} times</button>
  )
}
export default withCounter(Click,10)
