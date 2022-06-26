import React from 'react'
import { useUserContext } from '../context/UserContext'

const AddButton = () => {

  const {addItemToList} = useUserContext()

  return (
    <div className='box_btn'>
      <button 
        className='add_btn btn_active' 
        onClick={addItemToList}
      >
        Agregar
      </button>
    </div>
  )
}

export default AddButton