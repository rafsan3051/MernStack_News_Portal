import React, { useReducer } from 'react'
import storeReducer from './storeReducer'
import storeContext from './storeContext'

const StoreProvider = ({ children }) => {
    const [store,dispatch] = useReducer(storeReducer,{
        userInfo: "",
        token: "" 
    })
  return <storeContext.Provider value={{store,dispatch}}>
    {children}
  </storeContext.Provider>
}

export default StoreProvider