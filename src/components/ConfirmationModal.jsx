import React from 'react'
import { useUserContext } from '../context/UserContext'

const ConfirmationModal = ({show, closeModal}) => {

  const {handleNewList} = useUserContext()
  
  return (
    <div className={show ? "modal_opened" : "modal_closed"}>
      <div className="modal-content">
        <div>
          <h3>Empezar nueva lista</h3>
        </div>
        <div>
          <p>Cuando comenzás una nueva lista, tu lista existente
            se elimina.
          </p>
          <p>¿Estás seguro que querés empezar una nueva lista?</p>
        </div>
        <div className='modal_footer'>
          <button onClick={closeModal} className="btn_cancel">
            Cancelar
          </button>
          <button onClick={handleNewList} className="btn_confirm">
            Nueva lista
          </button>
        </div>
      </div>

    </div>
  )
}

export default ConfirmationModal