import { createContext, useState, useEffect, useContext } from "react";
import { getUser } from "../utils/service";

const UserContext = createContext()

export const useUserContext =() => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {

  const [user, setUser] = useState()
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const addItemToList = () => {
    setTodoList([...todoList, inputValue])
    setInputValue("")
  }

  useEffect(() => {
    const getUserId = async () => {
      const id = await getUser()
      setUser(id)
    }
    getUserId()
  }, [])

  const values = {
    user, 
    inputValue, 
    handleChange,
    addItemToList
  }

  console.log(todoList)
  
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}