import React from 'react'

export  function ErrorBound({name}) {
    if(name==="none"){
        throw new Error("Name should not be none.....")
    }
  return (
  <h1>my name is : {name}</h1>
  )
}
