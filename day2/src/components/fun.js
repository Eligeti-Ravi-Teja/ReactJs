import React from 'react'

let data=<h1>This is a functional components</h1>

export const FunctionalExample=()=>{
    return data;
}
export const NoJSX=()=>{
    return(
        React.createElement("p",null,"This a paragraph tag created without using JSX")
    );
}