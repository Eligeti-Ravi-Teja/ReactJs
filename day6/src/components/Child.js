import React from 'react'
import './style.css'
import style from '../style.module.css'
export default function Child({data}) {
    let style={
        color:"white",
        border:"2px solid black",
        backgroundColor:"black"
    }
  return (
    
       <div key={data.id} >
                <img src={data.url} className='img'></img>
                <p style={style}>price: {data.price}</p>
                
            </div>
    
  )
}
