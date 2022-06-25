import { createContext, useState, useEffect, useContext } from "react";
import { getUser } from "../utils/service";

const UserContext = createContext()

export const useUserContext =() => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {

  const [user, setUser] = useState()

  useEffect(() => {
    const getUserId = async () => {
      const id = await getUser()
      setUser(id)
    }
    getUserId()
  }, [])
  
  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
}