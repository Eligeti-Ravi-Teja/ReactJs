import React,{useState,useMemo} from 'react'

export default function Memo() {
    let [c1,counter1]=useState(0);
    let [c2,counter2]=useState(0);
    let iseven=()=>{
        c1%2===0;
    }
  return (
    <div>
      <button onClick={()=>counter1(c1+1)}>counter 1 value:{c1}</button>
      {iseven()?<p>even</p>:<p>odd</p>}
      <button onClick={()=>counter2(c2+1)}>Counter 2 value:{c2}</button>
    </div>
  )
}
