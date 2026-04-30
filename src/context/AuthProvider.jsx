import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useEffect } from 'react'

export const AuthContext = createContext()







const AuthProvider = ({children}) => {
 

 const [userData , setUserData] = useState(null)

 useEffect(()=>{
  const employees = getLocalStorage()
  setUserData(employees)
 } ,[])
 
  return (
   <AuthContext.Provider value={userData}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
