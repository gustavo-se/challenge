import React from 'react'
import { useUserContext } from '../context/UserContext'

const AddButton = () => {

  const {inputValue, addItemToList} = useUserContext()

  return (
    <div className='box_btn'>
      <button 
        className={`add_btn ${inputValue.length > 0 ? "btn_active" : ""}`} 
        disabled={inputValue.length === 0}
        onClick={addItemToList}
      >
        Agregar
      </button>
    </div>
  )
}

export default AddButton