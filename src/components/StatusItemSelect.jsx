import React from 'react'
import { useUserContext } from '../context/UserContext'

const StatusItemSelect = () => {

  const {select, handleSelectChange} = useUserContext()

  const isSelected = (value) => {
    if(select === value){
      return "select_active"
    }
    return ""
  }

  return (
    <select className='status_select' value={select} onChange={handleSelectChange}>
      <option className={isSelected("ALL")}value="ALL">Todos</option>
      <option className={isSelected("COMPLETED")}value="COMPLETED">Realizados</option>
      <option className={isSelected("UNCOMPLETED")}value="UNCOMPLETED">No realizados</option>
    </select>
  )
}

export default StatusItemSelect