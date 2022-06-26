import React from 'react'
import ToDoInput from '../components/ToDoInput'

const ToDoWithoutList = () => {
  return (
    <div>
      <h2>To do List</h2>
      <p className='request_todo'>¿Qué cosas tenés que terminar hoy?</p>
      <ToDoInput />
    </div>
  )
}

export default ToDoWithoutList
