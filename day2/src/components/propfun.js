import React from "react";
export const PropFun=(props)=>{
    return(
        <div>
        <h1>This is {props.name}</h1>
        <p>Used knowed props in components</p>
        {props.Childern}
        </div>
    )
}
export const PropFun2=(props)=>{
    return(
        <div>
        <h1>This is unknown props data</h1>
        {props.Childern}
        </div>
    )
}