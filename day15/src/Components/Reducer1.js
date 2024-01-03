import React,{useReducer} from 'react'
let initState=
{
    firstCount:0
}
let reduce=(state,action)=>{
    switch(action){
        case "increment":
            console.log("triggered incre");
            return {firstCount:state.firstCount+1}
        case "decrement":
            console.log("triggered decre");
            return {firstCount:state.firstCount-1   }
            
        case "reset":
            console.log("triggered reset");
            return initState
        default:
            console.log("default triggered");
            return state
    }

}
function Reducer1() {
    let [count,Parser]=useReducer(reduce,initState)
  return (
    <div>
      <h1>count : {count.firstCount}</h1>
      <button onClick={()=>Parser("increment")}>Increment</button>
      <button onClick={()=>Parser("decrement")}>decrement</button>
      <button onClick={()=>Parser( "reset")}>Reset</button>
    </div>
  )
}

export default Reducer1
