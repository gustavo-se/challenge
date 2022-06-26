import React from 'react'
import { useUserContext } from '../context/UserContext'

const ToDoInput = () => {

  const {inputValue, handleChange} = useUserContext()

  return (
    <input 
      type="text" 
      placeholder='Escribí un item' 
      className='todo_input' 
      onChange={handleChange}
      value={inputValue}
    />
  )
}

export default ToDoInput