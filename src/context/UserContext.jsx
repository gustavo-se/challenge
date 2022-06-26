import { createContext, useState, useEffect, useContext } from "react";
import { createItem, deleteItem, editItem, getAllItem, getIsCompletedItem, getUser } from "../utils/service";

const UserContext = createContext()

export const useUserContext =() => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {

  const [user, setUser] = useState()
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const [select, setSelect] = useState("ALL")

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
      const updateArr = todoList.map(t => {
        if(t.todoId === e.target.id){
          const completed = response.completed
          return {
            ...t,
            completed
          }
        }
        return t
      })
      setTodoList(updateArr)
    } catch (error) {
      console.error(error)
    }
  }
  console.log(todoList)
  
  const handleSelectChange = async (e) => {
    setSelect(e.target.value)

    if(e.target.value === "ALL"){
      const response = await getAllItem(user)
      setTodoList(response)
    }else if(e.target.value === "COMPLETED"){
      const response = await getIsCompletedItem(user, true)
      setTodoList(response)
    }else if(e.target.value === "UNCOMPLETED"){
      const response = await getIsCompletedItem(user, false)
      setTodoList(response)
    }
  }

  const handleDeleteItem = async (id) => {
    const req ={todoId: id}

    try {
      const response = await deleteItem(user, req)
      console.log(response)
      if(response.ok === "true"){
        const newArr = todoList.filter(t => t.todoId !== id)
        setTodoList(newArr)
      }
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
    handleChangeCheckbox,
    select,
    handleSelectChange,
    handleDeleteItem
  }
  
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}