import React from 'react'
import Child from './Child'

export default function List2exe() {
    let data=[
        {
        id:1,
        url:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg",
        price:3500
        },
        {
        id:2,
        url:"https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_640.jpg",
        price:2500
        },{
        id:3,
        url:"https://cdn.pixabay.com/photo/2016/11/19/15/58/camera-1840054_640.jpg",
        price:1500
        },{
        id:4,
        url:"https://cdn.pixabay.com/photo/2023/05/29/13/10/shoes-8026038_640.jpg",
        price:1000
        },{
        id:5,
        url:"https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_640.jpg",
        price:500
        }
        ]
        let dataspread=data.map((pro)=>{
            return(
           <Child data={pro}></Child>
            )
        })
        
       
  return (
    <div className="img-style">
        {/* <h1>dead</h1> */}
      {dataspread}
    </div>
  )
}
