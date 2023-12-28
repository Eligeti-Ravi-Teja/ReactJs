import React,{useState,useEffect} from 'react'

export default function Effect1() {
    let [count,addon]=useState(0);
    let [data,handle]=useState('');
    useEffect(()=>{
        console.log("called");
        document.title=`clicked ${count} times`;
    },[count])

  return (
    <div>
        <input type="text" value={data} onChange={e=>{handle(e.target.value)}}></input>
      <button onClick={()=>addon(count+1)}>Clicked  {count} times</button>
    </div>
  )
}
