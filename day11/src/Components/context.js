import React from 'react'

let context=React.createContext("default one")
let provider=context.Provider;
let consumer=context.Consumer;

export {provider,consumer}