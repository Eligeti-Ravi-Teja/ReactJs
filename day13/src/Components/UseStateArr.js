import React,{useState} from 'react'

export default function UseStateArr() {
    let [items,add]=useState([])
    let adding=()=>{
        add([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

  return (
    <div>
    <button onClick={adding}>Add to array</button>  
    <ul>
        {items.map(item=><li key={item.id}>{item.value}</li>)}
    </ul>
    </div>
  )
}
