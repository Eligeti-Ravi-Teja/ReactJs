import React from 'react'
import {EventEmitter} from 'events'
export  function List1() {
  const eventEmitter = new EventEmitter();
  eventEmitter.Maxlistners(1000000000000000000000000000);
    const data=["one","two","three","four"]
    let dataDis=data.map(da=><h1>{da}</h1>)
    return (
      <div>
        {dataDis}
      </div>
    )
}
