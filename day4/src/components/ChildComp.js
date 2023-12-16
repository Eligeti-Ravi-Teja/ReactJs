import React from 'react'

export  function ChildComp(props) {

  return (
    <div>
    <button onClick={props.parentMethod}>Child button envoking parent method</button>  
    </div>
  )
}
