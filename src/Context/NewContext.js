import React, {createContext, useState} from 'react'


const PracticeContext = createContext();

const ContextProvider = ({children}) =>{

  const [info, setInfo] = useState([]);

  const addbasket = (prop) => {
    setInfo((info) => [...info , prop])
  }

  return (
    <PracticeContext.Provider value={{info,addbasket}}>
    {children}
    </PracticeContext.Provider>
  )
}

export {ContextProvider,PracticeContext}