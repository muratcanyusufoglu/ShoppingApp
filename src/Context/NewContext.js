import React, {createContext, useState} from 'react'


const PracticeContext = createContext();

const ContextProvider = ({children}) =>{

  const [info, setInfo] = useState([]);

  const addbasket = (prop) => {
    const exist = info.find((x) => x.id === prop.id)
    console.log('ex',exist);
    if(exist){
        setInfo(info.map((x)=>
        x.id === prop.id ? {...exist, qty: exist.qty +1} : x
        ))
    }
    else{
        setInfo((info) => [...info, {...prop, qty:1}])
    }
  }

  const deleteBasket = (prop) => {
    const exist = info.find((x) => x.id === prop.id)

    console.log('ex',exist);
    if(exist.qty === 1){
        setInfo(info.filter((x)=> x.id!==prop.id))
    }
    else{
        setInfo(info.map((x)=> x.id ===prop.id ? {...exist, qty:exist.qty - 1}: x))
    }
  }

  return (
    <PracticeContext.Provider value={{info,addbasket,deleteBasket}}>
    {children}
    </PracticeContext.Provider>
  )
}

export {ContextProvider,PracticeContext}