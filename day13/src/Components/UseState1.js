import React,{useState} from 'react'

export default function UseState1() {
    let [count,updateState]=useState(0)
  return (
    <div>
      <button onClick={()=>updateState(prev=>prev+1)}>Clicked {count} times</button>
    </div>
  )
}
