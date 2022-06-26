import React from 'react'
import AddButton from '../components/AddButton'
import { Header } from "../components/Header"
import { useUserContext } from '../context/UserContext'
import TodoList from './ToDoList'
import ToDoWithoutList from "./ToDoWithoutList"

export const BasePage = () => {
 
  return (
    <div className="App">
      <div className='base'>
        <Header />  
        {/* <TodoList /> */}
        <ToDoWithoutList />
        <AddButton />
      </div>
    </div>
  )
}
