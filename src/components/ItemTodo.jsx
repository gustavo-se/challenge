import React from 'react'
import { useUserContext } from '../context/UserContext'

const ItemTodo = ({id, message, completed}) => {

  const {handleChangeCheckbox} = useUserContext()

  return (
    <div className='box_item_todo'>
      <input type="checkbox" id={id} style={{display: "none"}} checked={completed} onChange={handleChangeCheckbox}/>
        <div className={`box_checkbox ${completed && "none_radius"}`}> 
          {completed && 
            <span class="material-icons white bg-orange md-18">
              done
            </span>
          }
        </div>
      <label htmlFor={id} className={completed && "msg_completed"}>{message}</label>
    </div>
  )
}

export default ItemTodo