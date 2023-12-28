import React,{useState,useEffect} from 'react'

export default function Effect2() {
    let [x,setX]=useState(0)
    let [y,setY]=useState(0)
    const logMousePosition=e=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition)
        console.log("updating");
    },[]
    )
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}
