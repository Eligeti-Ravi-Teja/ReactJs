import React,{useState} from 'react'

export default function UseStateObj() {
    let [name,update]=useState({
        firstName:"",
        lastName:""
    })
  return (
    <div>
        <input type="text" placeholder='firstName' value={name.firstName} onChange={(e)=>update({...name,firstName:e.target.value})}></input>
        <input type="text" placeholder='firstName' value={name.lastName} onChange={(e)=>update({...name,lastName:e.target.value})}></input>
        <h1>{name.firstName}</h1>
        <h2>{name.lastName}</h2>
    </div>
  )
}
