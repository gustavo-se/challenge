import React from 'react'
import ItemTodo from '../components/ItemTodo'
import StatusItemSelect from '../components/StatusItemSelect'
import ToDoInput from '../components/ToDoInput'
import { useUserContext } from '../context/UserContext'

const TodoList = () => {

  const {todoList} = useUserContext()

  return (
    <div>
     <ToDoInput />
     <div className='box_todo_list'>
      <div className='header_todo_list'>
          <div className='title_todo_list'>
            <h3>To do list</h3>
            <button className='add_new_list'>
              <span className="material-icons">
                add_circle_outline
              </span>
            </button>
          </div>
          <div>
            <StatusItemSelect />
          </div>
      </div>
      <div className='body_todo_list'>
        {todoList.map(t => (
          <ItemTodo 
            key={t.todoId} 
            id={t.todoId} 
            message={t.message} 
            completed={t.completed}
          />
        ))}
      </div>
     </div>
    </div>
  )
}

export default TodoList
