import React from 'react'

export  function List1() {
    const data=["one","two","three","four"]
    let dataDis=data.map(da=><h1>{da}</h1>)
    return (
      <div>
        {dataDis}
      </div>
    )
}
