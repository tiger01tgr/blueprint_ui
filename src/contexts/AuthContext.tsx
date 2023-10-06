'use client'
import React, { useState, createContext } from "react"

interface AuthContextProps {
    user: any;
    setUser: (user: any) => void;
}

export const GlobalAuthContext = createContext<AuthContextProps>({
    user: {},
    setUser: () => {},
})

export const GlobalAuthContextProvider = (props: any) => {
    const [currentUser, setCurrentUser] = useState({})
  
    return (
      <GlobalAuthContext.Provider
        value={{
          user: currentUser,
          setUser: setCurrentUser,
        }}
      >
        {props.children}
      </GlobalAuthContext.Provider>
    )
  }