import React from 'react'

const ItemTodo = ({id, message, completed}) => {
  return (
    <div className='box_item_todo'>
      <input type="checkbox" id={id} style={{display: "none"}} checked={completed}/>
      {!completed ? 
        <div className='uncompleted_checkbox'/>
        :
        <div className='completed_checkbox'>
          <span class="material-icons-outlined">
            done
          </span>
        </div>
      }
      <label htmlFor={id} className={completed && "msg_completed"}>{message}</label>
    </div>
  )
}

export default ItemTodo