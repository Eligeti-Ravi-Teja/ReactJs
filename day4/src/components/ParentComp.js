import React from 'react'
import { ChildComp } from './ChildComp'
import { ChildComp2 } from './ChildComp2'

export  function ParentComp() {
  function parent(){
    alert("parent method using child called")
  }
  function parent2(data){
    alert(`parent method parameteried with child state data ...data is: ${data}`)
  }
  return (
    <div>
      <ChildComp parentMethod={parent}></ChildComp>
      <ChildComp2 parentMethod={parent2}></ChildComp2>
    </div>
  )
}
