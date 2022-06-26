import { createContext, useState, useEffect, useContext } from "react";
import { createItem, editItem, getUser } from "../utils/service";

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

  const addItemToList = async () => {
    const req = {
      title: inputValue,
      message: inputValue
    }
    try {
      const response = await createItem(user, req)
      setTodoList([...todoList, response])
      setInputValue("")
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeCheckbox = async (e) => {

    const req = {completed: e.target.checked, todoId: e.target.id} 
    try {
      const response = await editItem(user, req)
      const updatedItem = {...response, todoId: e.target.id}
      const updateArr = todoList.filter(t => t.todoId !== e.target.id)
      setTodoList([...updateArr, updatedItem])
    } catch (error) {
      console.error(error)
    }
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
    addItemToList,
    todoList,
    handleChangeCheckbox
  }
  
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}